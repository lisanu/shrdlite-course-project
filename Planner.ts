
import {WorldState} from "./World";
import {Successor, Graph, SearchResult} from "./Graph";
import {aStarSearch} from "./AStarSearch";
import {ShrdliteResult, DNFFormula, Literal} from "./Types";

/********************************************************************************
** Planner

The goal of the Planner module is to take the interpetation(s)
produced by the Interpreter module and to plan a sequence of 
actions for the robot to put the world into a state compatible 
with the user's command, i.e. to achieve what the user wanted.

You should implement the function 'makePlan'. 
The planner should use your A* search implementation to find a plan.
********************************************************************************/

//////////////////////////////////////////////////////////////////////
// exported functions, classes and interfaces/types

/* Top-level driver for the Planner. 
 * It calls `makePlan` for each given interpretation generated by the Interpreter. 
 * You don't have to change this function.
 *
 * @param interpretations: List of possible interpretations.
 * @param world: The current state of the world.
 * @returns: List of planner results, which are the interpretation results augmented with plans. 
 *           Each plan is represented by a list of strings.
 *           If there's a planning error, it throws an error with a string description.
 */

export function plan(interpretations : ShrdliteResult[], world : WorldState) : ShrdliteResult[] {
    var errors : string[] = [];
    var plans : ShrdliteResult[] = [];
    var planner : Planner = new Planner(world);
    for (var result of interpretations) {
        try {
            var theplan : string[] = planner.makePlan(result.interpretation);
        } catch(err) {
            errors.push(err);
            continue;
        }
        result.plan = theplan;
        if (result.plan.length == 0) {
            result.plan.push("The interpretation is already true!");
        }
        plans.push(result);
    }
    if (plans.length == 0) {
        // merge all errors into one
        throw errors.join(" ; ");
    }
    return plans;
}


/* The core planner class. 
 * The code here are just templates; you should rewrite this class entirely. 
 * In this template, the code produces a dummy plan which is not connected 
 * to the argument 'interpretation'. Your version of the class should
 * analyse 'interpretation' in order to figure out what plan to return.
 */

class Planner {
    constructor(
        private world : WorldState
    ) {}

    /* The core planner method. 
     * Note that you should not change the API (type) of this method, only its body.
     * This method should call the A* search implementation with 
     * your implementation of the ShrdliteGraph.
     *
     * @param interpretation: The logical interpretation of the user's desired goal. 
     * @returns: A plan, represented by a list of strings.
     *           If there's a planning error, it throws an error with a string description.
     */

    makePlan(interpretation : DNFFormula) : string[] {
        // This currently returns a dummy plan which picks up a random object
        // and moves it around before dropping it down.
        var state = this.world;
        var plan : string[] = [];

        // Select a random nonempty stack
        do {
            var pickstack = Math.floor(Math.random() * state.stacks.length);
        } while (state.stacks[pickstack].length == 0);

        // First move the arm to the selected stack
        if (pickstack < state.arm) {
            plan.push("Moving left to stack " + pickstack);
            for (var i = state.arm; i > pickstack; i--) {
                plan.push("l");
            }
        } else if (pickstack > state.arm) {
            plan.push("Moving right to stack " + pickstack);
            for (var i = state.arm; i < pickstack; i++) {
                plan.push("r");
            }
        }

        // Then pick up the topmost object in the selected stack
        var obj = state.stacks[pickstack][state.stacks[pickstack].length-1];
        plan.push("Picking up the " + state.objects[obj].form,
                  "p");

        if (pickstack > 0) {
            // Then move the arm to the leftmost stack
            plan.push("Moving as far left as possible");
            for (var i = pickstack; i > 0; i--) {
                plan.push("l");
            }
        }

        // Select a random destination stack (either empty or the original pickup stack)
        do {
            var dropstack = Math.floor(Math.random() * state.stacks.length);
        } while (!(state.stacks[dropstack].length == 0 || dropstack == pickstack));

        if (dropstack > 0) {
            // Then move the arm to the destination stack
            plan.push("Moving right to the destination stack " + dropstack);
            for (var i = 0; i < dropstack; i++) {
                plan.push("r");
            }
        }

        // Finally put the object down again
        plan.push("Dropping the " + state.objects[obj].form,
                  "d");

        return plan;
    }

}


//////////////////////////////////////////////////////////////////////
// A* search nodes, to be implemented and cleaned

class ShrdliteNode {
    constructor(
        public first_field : number,
        public second_field : string,
        public another_field : Literal // Note: you probably don't want any Literal here...
    ) {
        this.id = "TO BE IMPLEMENTED FROM THE FIELDS";
    }

    // These are for making the nodes possible to compare efficiently:
    public id : string;
    public toString() : string {
        return this.id;
    }
    public compareTo(other : ShrdliteNode) {
        return this.id.localeCompare(other.id);
    }

    // Possibly some additional private fields or methods:
    private private_field : string;
    private privateMethod(argument : string) : number {
        throw "Not implemented";
    }
}


//////////////////////////////////////////////////////////////////////
// A* search graph, to be implemented and cleaned

class ShrdliteGraph implements Graph<ShrdliteNode> {
    successors(current : ShrdliteNode) : Successor<ShrdliteNode>[] {
        throw "Not implemented";
    }

    compareNodes(a : ShrdliteNode, b : ShrdliteNode) : number {
        return a.compareTo(b);
    }

    // Possibly some additional private fields or methods:
    private private_field : string;
    private privateMethod(argument : string) : number {
        throw "Not implemented";
    }
}

// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
function id(d:any[]):any {return d[0];}

import {
    Command, TakeCommand, DropCommand, MoveCommand,
    /*
    // Here's an example of a new command
    // Don't forget to add the corresponding grammar rules below
    WhereisCommand,
    */
    Location, Entity,
    Object, RelativeObject, SimpleObject,
} from "./Types";
export interface Token {value:any; [key: string]:any};
export interface Lexer {reset:(chunk:string, info:any) => void; next:() => Token | undefined; save:() => any; formatError:(token:Token) => string; has:(tokenType:string) => boolean};
export interface NearleyRule {name:string; symbols:NearleySymbol[]; postprocess?:(d:any[],loc?:number,reject?:{})=>any};
export type NearleySymbol = string | {literal:any} | {test:(token:any) => boolean};
export var Lexer:Lexer|undefined = undefined;
export var ParserRules:NearleyRule[] = [
    {"name": "main$ebnf$1", "symbols": ["will_you"], "postprocess": id},
    {"name": "main$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "main$ebnf$2", "symbols": ["please"], "postprocess": id},
    {"name": "main$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "main$ebnf$3", "symbols": ["please"], "postprocess": id},
    {"name": "main$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "main", "symbols": ["main$ebnf$1", "main$ebnf$2", "command", "main$ebnf$3"], "postprocess": (d) => d[2]},
    {"name": "command", "symbols": ["take", "entity"], "postprocess": (d) => new TakeCommand(d[1])},
    {"name": "command", "symbols": ["move", "it", "location"], "postprocess": (d) => new DropCommand(d[2])},
    {"name": "command", "symbols": ["move", "entity", "location"], "postprocess": (d) => new MoveCommand(d[1], d[2])},
    {"name": "location", "symbols": ["relation", "entity"], "postprocess": (d) => new Location(d[0], d[1])},
    {"name": "entity", "symbols": ["quantifierSG", "objectSG"], "postprocess": (d) => new Entity(d[0], d[1])},
    {"name": "entity", "symbols": ["quantifierPL", "objectPL"], "postprocess": (d) => new Entity(d[0], d[1])},
    {"name": "entity$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": (d) => d.join('')},
    {"name": "entity$string$2", "symbols": [{"literal":"f"}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"r"}], "postprocess": (d) => d.join('')},
    {"name": "entity", "symbols": ["entity$string$1", "entity$string$2"], "postprocess": (d) => new Entity("the", new SimpleObject("floor"))},
    {"name": "objectSG$ebnf$1", "symbols": ["that_is"], "postprocess": id},
    {"name": "objectSG$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "objectSG", "symbols": ["objectSG", "objectSG$ebnf$1", "location"], "postprocess": (d) => new RelativeObject(d[0], d[2])},
    {"name": "objectPL$ebnf$1", "symbols": ["that_are"], "postprocess": id},
    {"name": "objectPL$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "objectPL", "symbols": ["objectPL", "objectPL$ebnf$1", "location"], "postprocess": (d) => new RelativeObject(d[0], d[2])},
    {"name": "objectSG$ebnf$2", "symbols": ["size"], "postprocess": id},
    {"name": "objectSG$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "objectSG$ebnf$3", "symbols": ["color"], "postprocess": id},
    {"name": "objectSG$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "objectSG", "symbols": ["objectSG$ebnf$2", "objectSG$ebnf$3", "formSG"], "postprocess": (d) => new SimpleObject(d[2], d[0], d[1])},
    {"name": "objectPL$ebnf$2", "symbols": ["size"], "postprocess": id},
    {"name": "objectPL$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "objectPL$ebnf$3", "symbols": ["color"], "postprocess": id},
    {"name": "objectPL$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "objectPL", "symbols": ["objectPL$ebnf$2", "objectPL$ebnf$3", "formPL"], "postprocess": (d) => new SimpleObject(d[2], d[0], d[1])},
    {"name": "quantifierSG$subexpression$1$string$1", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"y"}], "postprocess": (d) => d.join('')},
    {"name": "quantifierSG$subexpression$1", "symbols": ["quantifierSG$subexpression$1$string$1"]},
    {"name": "quantifierSG$subexpression$1$string$2", "symbols": [{"literal":"a"}, {"literal":"n"}], "postprocess": (d) => d.join('')},
    {"name": "quantifierSG$subexpression$1", "symbols": ["quantifierSG$subexpression$1$string$2"]},
    {"name": "quantifierSG$subexpression$1", "symbols": [{"literal":"a"}]},
    {"name": "quantifierSG", "symbols": ["quantifierSG$subexpression$1"], "postprocess": (d) => "any"},
    {"name": "quantifierSG$subexpression$2$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": (d) => d.join('')},
    {"name": "quantifierSG$subexpression$2", "symbols": ["quantifierSG$subexpression$2$string$1"]},
    {"name": "quantifierSG", "symbols": ["quantifierSG$subexpression$2"], "postprocess": (d) => "the"},
    {"name": "quantifierSG$subexpression$3$string$1", "symbols": [{"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}], "postprocess": (d) => d.join('')},
    {"name": "quantifierSG$subexpression$3", "symbols": ["quantifierSG$subexpression$3$string$1"]},
    {"name": "quantifierSG", "symbols": ["quantifierSG$subexpression$3"], "postprocess": (d) => "all"},
    {"name": "quantifierPL$subexpression$1$string$1", "symbols": [{"literal":"a"}, {"literal":"l"}, {"literal":"l"}], "postprocess": (d) => d.join('')},
    {"name": "quantifierPL$subexpression$1", "symbols": ["quantifierPL$subexpression$1$string$1"]},
    {"name": "quantifierPL", "symbols": ["quantifierPL$subexpression$1"], "postprocess": (d) => "all"},
    {"name": "relation$subexpression$1$string$1", "symbols": [{"literal":"l"}, {"literal":"e"}, {"literal":"f"}, {"literal":"t"}], "postprocess": (d) => d.join('')},
    {"name": "relation$subexpression$1$string$2", "symbols": [{"literal":"o"}, {"literal":"f"}], "postprocess": (d) => d.join('')},
    {"name": "relation$subexpression$1", "symbols": ["relation$subexpression$1$string$1", "relation$subexpression$1$string$2"]},
    {"name": "relation$subexpression$1$string$3", "symbols": [{"literal":"t"}, {"literal":"o"}], "postprocess": (d) => d.join('')},
    {"name": "relation$subexpression$1$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": (d) => d.join('')},
    {"name": "relation$subexpression$1$string$5", "symbols": [{"literal":"l"}, {"literal":"e"}, {"literal":"f"}, {"literal":"t"}], "postprocess": (d) => d.join('')},
    {"name": "relation$subexpression$1$string$6", "symbols": [{"literal":"o"}, {"literal":"f"}], "postprocess": (d) => d.join('')},
    {"name": "relation$subexpression$1", "symbols": ["relation$subexpression$1$string$3", "relation$subexpression$1$string$4", "relation$subexpression$1$string$5", "relation$subexpression$1$string$6"]},
    {"name": "relation", "symbols": ["relation$subexpression$1"], "postprocess": (d) => "leftof"},
    {"name": "relation$subexpression$2$string$1", "symbols": [{"literal":"r"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}], "postprocess": (d) => d.join('')},
    {"name": "relation$subexpression$2$string$2", "symbols": [{"literal":"o"}, {"literal":"f"}], "postprocess": (d) => d.join('')},
    {"name": "relation$subexpression$2", "symbols": ["relation$subexpression$2$string$1", "relation$subexpression$2$string$2"]},
    {"name": "relation$subexpression$2$string$3", "symbols": [{"literal":"t"}, {"literal":"o"}], "postprocess": (d) => d.join('')},
    {"name": "relation$subexpression$2$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": (d) => d.join('')},
    {"name": "relation$subexpression$2$string$5", "symbols": [{"literal":"r"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}], "postprocess": (d) => d.join('')},
    {"name": "relation$subexpression$2$string$6", "symbols": [{"literal":"o"}, {"literal":"f"}], "postprocess": (d) => d.join('')},
    {"name": "relation$subexpression$2", "symbols": ["relation$subexpression$2$string$3", "relation$subexpression$2$string$4", "relation$subexpression$2$string$5", "relation$subexpression$2$string$6"]},
    {"name": "relation", "symbols": ["relation$subexpression$2"], "postprocess": (d) => "rightof"},
    {"name": "relation$subexpression$3$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"s"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}], "postprocess": (d) => d.join('')},
    {"name": "relation$subexpression$3", "symbols": ["relation$subexpression$3$string$1"]},
    {"name": "relation$subexpression$3$string$2", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": (d) => d.join('')},
    {"name": "relation$subexpression$3", "symbols": ["relation$subexpression$3$string$2"]},
    {"name": "relation$subexpression$3$string$3", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"o"}], "postprocess": (d) => d.join('')},
    {"name": "relation$subexpression$3", "symbols": ["relation$subexpression$3$string$3"]},
    {"name": "relation", "symbols": ["relation$subexpression$3"], "postprocess": (d) => "inside"},
    {"name": "relation$subexpression$4$string$1", "symbols": [{"literal":"o"}, {"literal":"n"}], "postprocess": (d) => d.join('')},
    {"name": "relation$subexpression$4", "symbols": ["relation$subexpression$4$string$1"]},
    {"name": "relation$subexpression$4$string$2", "symbols": [{"literal":"o"}, {"literal":"n"}], "postprocess": (d) => d.join('')},
    {"name": "relation$subexpression$4$string$3", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":"p"}], "postprocess": (d) => d.join('')},
    {"name": "relation$subexpression$4$string$4", "symbols": [{"literal":"o"}, {"literal":"f"}], "postprocess": (d) => d.join('')},
    {"name": "relation$subexpression$4", "symbols": ["relation$subexpression$4$string$2", "relation$subexpression$4$string$3", "relation$subexpression$4$string$4"]},
    {"name": "relation", "symbols": ["relation$subexpression$4"], "postprocess": (d) => "ontop"},
    {"name": "relation$subexpression$5$string$1", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}], "postprocess": (d) => d.join('')},
    {"name": "relation$subexpression$5", "symbols": ["relation$subexpression$5$string$1"]},
    {"name": "relation$subexpression$5$string$2", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}], "postprocess": (d) => d.join('')},
    {"name": "relation$subexpression$5", "symbols": ["relation$subexpression$5$string$2"]},
    {"name": "relation", "symbols": ["relation$subexpression$5"], "postprocess": (d) => "under"},
    {"name": "relation$subexpression$6$string$1", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"s"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}], "postprocess": (d) => d.join('')},
    {"name": "relation$subexpression$6", "symbols": ["relation$subexpression$6$string$1"]},
    {"name": "relation", "symbols": ["relation$subexpression$6"], "postprocess": (d) => "beside"},
    {"name": "relation$subexpression$7$string$1", "symbols": [{"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}], "postprocess": (d) => d.join('')},
    {"name": "relation$subexpression$7", "symbols": ["relation$subexpression$7$string$1"]},
    {"name": "relation", "symbols": ["relation$subexpression$7"], "postprocess": (d) => "above"},
    {"name": "size$subexpression$1$string$1", "symbols": [{"literal":"s"}, {"literal":"m"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}], "postprocess": (d) => d.join('')},
    {"name": "size$subexpression$1", "symbols": ["size$subexpression$1$string$1"]},
    {"name": "size$subexpression$1$string$2", "symbols": [{"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"y"}], "postprocess": (d) => d.join('')},
    {"name": "size$subexpression$1", "symbols": ["size$subexpression$1$string$2"]},
    {"name": "size", "symbols": ["size$subexpression$1"], "postprocess": (d) => "small"},
    {"name": "size$subexpression$2$string$1", "symbols": [{"literal":"l"}, {"literal":"a"}, {"literal":"r"}, {"literal":"g"}, {"literal":"e"}], "postprocess": (d) => d.join('')},
    {"name": "size$subexpression$2", "symbols": ["size$subexpression$2$string$1"]},
    {"name": "size$subexpression$2$string$2", "symbols": [{"literal":"b"}, {"literal":"i"}, {"literal":"g"}], "postprocess": (d) => d.join('')},
    {"name": "size$subexpression$2", "symbols": ["size$subexpression$2$string$2"]},
    {"name": "size", "symbols": ["size$subexpression$2"], "postprocess": (d) => "large"},
    {"name": "color$string$1", "symbols": [{"literal":"b"}, {"literal":"l"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}], "postprocess": (d) => d.join('')},
    {"name": "color", "symbols": ["color$string$1"], "postprocess": (d) => "black"},
    {"name": "color$string$2", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}], "postprocess": (d) => d.join('')},
    {"name": "color", "symbols": ["color$string$2"], "postprocess": (d) => "white"},
    {"name": "color$string$3", "symbols": [{"literal":"b"}, {"literal":"l"}, {"literal":"u"}, {"literal":"e"}], "postprocess": (d) => d.join('')},
    {"name": "color", "symbols": ["color$string$3"], "postprocess": (d) => "blue"},
    {"name": "color$string$4", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}], "postprocess": (d) => d.join('')},
    {"name": "color", "symbols": ["color$string$4"], "postprocess": (d) => "green"},
    {"name": "color$string$5", "symbols": [{"literal":"y"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}], "postprocess": (d) => d.join('')},
    {"name": "color", "symbols": ["color$string$5"], "postprocess": (d) => "yellow"},
    {"name": "color$string$6", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"d"}], "postprocess": (d) => d.join('')},
    {"name": "color", "symbols": ["color$string$6"], "postprocess": (d) => "red"},
    {"name": "formSG", "symbols": ["form"], "postprocess": (d) => d[0]},
    {"name": "formPL", "symbols": ["form", {"literal":"s"}], "postprocess": (d) => d[0]},
    {"name": "formSG$string$1", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"x"}], "postprocess": (d) => d.join('')},
    {"name": "formSG", "symbols": ["formSG$string$1"], "postprocess": (d) => "box"},
    {"name": "formPL$string$1", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"x"}, {"literal":"e"}, {"literal":"s"}], "postprocess": (d) => d.join('')},
    {"name": "formPL", "symbols": ["formPL$string$1"], "postprocess": (d) => "box"},
    {"name": "form$subexpression$1$string$1", "symbols": [{"literal":"o"}, {"literal":"b"}, {"literal":"j"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}], "postprocess": (d) => d.join('')},
    {"name": "form$subexpression$1", "symbols": ["form$subexpression$1$string$1"]},
    {"name": "form$subexpression$1$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": (d) => d.join('')},
    {"name": "form$subexpression$1", "symbols": ["form$subexpression$1$string$2"]},
    {"name": "form$subexpression$1$string$3", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}], "postprocess": (d) => d.join('')},
    {"name": "form$subexpression$1", "symbols": ["form$subexpression$1$string$3"]},
    {"name": "form", "symbols": ["form$subexpression$1"], "postprocess": (d) => "anyform"},
    {"name": "form$string$1", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}], "postprocess": (d) => d.join('')},
    {"name": "form", "symbols": ["form$string$1"], "postprocess": (d) => "brick"},
    {"name": "form$string$2", "symbols": [{"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"n"}, {"literal":"k"}], "postprocess": (d) => d.join('')},
    {"name": "form", "symbols": ["form$string$2"], "postprocess": (d) => "plank"},
    {"name": "form$string$3", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}], "postprocess": (d) => d.join('')},
    {"name": "form", "symbols": ["form$string$3"], "postprocess": (d) => "ball"},
    {"name": "form$string$4", "symbols": [{"literal":"p"}, {"literal":"y"}, {"literal":"r"}, {"literal":"a"}, {"literal":"m"}, {"literal":"i"}, {"literal":"d"}], "postprocess": (d) => d.join('')},
    {"name": "form", "symbols": ["form$string$4"], "postprocess": (d) => "pyramid"},
    {"name": "form$string$5", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}], "postprocess": (d) => d.join('')},
    {"name": "form", "symbols": ["form$string$5"], "postprocess": (d) => "table"},
    {"name": "take$string$1", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}], "postprocess": (d) => d.join('')},
    {"name": "take", "symbols": ["take$string$1"]},
    {"name": "take$string$2", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"a"}, {"literal":"s"}, {"literal":"p"}], "postprocess": (d) => d.join('')},
    {"name": "take", "symbols": ["take$string$2"]},
    {"name": "take$string$3", "symbols": [{"literal":"p"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}], "postprocess": (d) => d.join('')},
    {"name": "take$string$4", "symbols": [{"literal":"u"}, {"literal":"p"}], "postprocess": (d) => d.join('')},
    {"name": "take", "symbols": ["take$string$3", "take$string$4"]},
    {"name": "move$string$1", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}], "postprocess": (d) => d.join('')},
    {"name": "move", "symbols": ["move$string$1"]},
    {"name": "move$string$2", "symbols": [{"literal":"p"}, {"literal":"u"}, {"literal":"t"}], "postprocess": (d) => d.join('')},
    {"name": "move", "symbols": ["move$string$2"]},
    {"name": "move$string$3", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"o"}, {"literal":"p"}], "postprocess": (d) => d.join('')},
    {"name": "move", "symbols": ["move$string$3"]},
    {"name": "it$string$1", "symbols": [{"literal":"i"}, {"literal":"t"}], "postprocess": (d) => d.join('')},
    {"name": "it", "symbols": ["it$string$1"]},
    {"name": "that_is$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": (d) => d.join('')},
    {"name": "that_is$string$2", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": (d) => d.join('')},
    {"name": "that_is", "symbols": ["that_is$string$1", "that_is$string$2"]},
    {"name": "that_are$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": (d) => d.join('')},
    {"name": "that_are$string$2", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"e"}], "postprocess": (d) => d.join('')},
    {"name": "that_are", "symbols": ["that_are$string$1", "that_are$string$2"]},
    {"name": "will_you$subexpression$1$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}], "postprocess": (d) => d.join('')},
    {"name": "will_you$subexpression$1", "symbols": ["will_you$subexpression$1$string$1"]},
    {"name": "will_you$subexpression$1$string$2", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}], "postprocess": (d) => d.join('')},
    {"name": "will_you$subexpression$1", "symbols": ["will_you$subexpression$1$string$2"]},
    {"name": "will_you$subexpression$1$string$3", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}], "postprocess": (d) => d.join('')},
    {"name": "will_you$subexpression$1", "symbols": ["will_you$subexpression$1$string$3"]},
    {"name": "will_you$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": (d) => d.join('')},
    {"name": "will_you", "symbols": ["will_you$subexpression$1", "will_you$string$1"]},
    {"name": "please$string$1", "symbols": [{"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}], "postprocess": (d) => d.join('')},
    {"name": "please", "symbols": ["please$string$1"]}
];
export var ParserStart:string = "main";

module.exports = {

  swiftCodeAnswers: [
    // 1
    [
      { type: "DECLARATION_KEYWORD",  value: "var" },
      { type: "IDENTIFIER",           value: "a" },
      { type: "OPERATOR",             value: "=" },
      { type: "NUMBER",               value: "3" },
      { type: "TERMINATOR",           value: "EOF"}
    ],
    // 2
    [
      { type: "DECLARATION_KEYWORD",  value: "var" },
      { type: "IDENTIFIER",           value: "b" },
      { type: "OPERATOR",             value: "=" },
      { type: "STRING",               value: "hello" },
      { type: "TERMINATOR",           value: "EOF"}
    ],
    // 3
    [
      { type: "DECLARATION_KEYWORD",  value: "var" },
      { type: "IDENTIFIER",           value: "c" },
      { type: "OPERATOR",             value: "=" },
      { type: "BOOLEAN",              value: "true" },
      { type: "TERMINATOR",           value: "EOF"}
    ],
    // 4
    [
      { type: "DECLARATION_KEYWORD",  value: "var" },
      { type: "IDENTIFIER",           value: "d" },
      { type: "OPERATOR",             value: "=" },
      { type: "STRING",               value: "Test this" },
      { type: "TERMINATOR",           value: "EOF"}
    ],
    // 5
    [
      { type: "DECLARATION_KEYWORD",  value: "var" },
      { type: "IDENTIFIER",           value: "e" },
      { type: "OPERATOR",             value: "=" },
      { type: "ARRAY_START",          value: "[" },
      { type: "STRING",               value: "Eggs" },
      { type: "PUNCTUATION",          value: "," },
      { type: "STRING",               value: "Milk" },
      { type: "PUNCTUATION",          value: "," },
      { type: "STRING",               value: "Bacon" },
      { type: "ARRAY_END",            value: "]" },
      { type: "TERMINATOR",           value: "EOF" }
    ],
    // 6
    [
      { type: "DECLARATION_KEYWORD",  value: "var" },
      { type: "IDENTIFIER",           value: "f" },
      { type: "OPERATOR",             value: "=" },
      { type: "DICTIONARY_START",     value: "[" },
      { type: "STRING",               value: "one" },
      { type: "PUNCTUATION",          value: ":" },
      { type: "NUMBER",               value: "1" },
      { type: "PUNCTUATION",          value: "," },
      { type: "STRING",               value: "two" },
      { type: "PUNCTUATION",          value: ":" },
      { type: "NUMBER",               value: "2" },
      { type: "PUNCTUATION",          value: "," },
      { type: "STRING",               value: "three" },
      { type: "PUNCTUATION",          value: ":" },
      { type: "NUMBER",               value: "3" },
      { type: "DICTIONARY_END",       value: "]" },
      { type: "TERMINATOR",           value: "EOF" }
    ],
    // 7
    [
      { type: "DECLARATION_KEYWORD",  value: "let" },
      { type: "IDENTIFIER",           value: "g" },
      { type: "OPERATOR",             value: "=" },
      { type: "DICTIONARY_START",     value: "[" },
      { type: "NUMBER",               value: "1" },
      { type: "PUNCTUATION",          value: ":" },
      { type: "STRING",               value: "one" },
      { type: "PUNCTUATION",          value: "," },
      { type: "NUMBER",               value: "2" },
      { type: "PUNCTUATION",          value: ":" },
      { type: "STRING",               value: "two" },
      { type: "PUNCTUATION",          value: "," },
      { type: "NUMBER",               value: "3" },
      { type: "PUNCTUATION",          value: ":" },
      { type: "STRING",               value: "three" },
      { type: "DICTIONARY_END",       value: "]" },
      { type: "TERMINATOR",           value: "EOF" }
    ],
    // 8
    [
      { type: "DECLARATION_KEYWORD",  value: "let" },
      { type: "IDENTIFIER",           value: "h" },
      { type: "OPERATOR",             value: "=" },
      { type: "NUMBER",               value: "3.14" },
      { type: "TERMINATOR",           value: "EOF" }
    ],
    // 9
    [
      { type: "DECLARATION_KEYWORD",  value: "let" },
      { type: "IDENTIFIER",           value: "i" },
      { type: "OPERATOR",             value: "=" },
      { type: "NUMBER",               value: "5" },
      { type: "OPERATOR",             value: "+" },
      { type: "NUMBER",               value: "6" },
      { type: "TERMINATOR",           value: "EOF" }
    ],
    // 10
    [
      { type: "DECLARATION_KEYWORD",  value: "var" },
      { type: "IDENTIFIER",           value: "j" },
      { type: "OPERATOR",             value: "=" },
      { type: "NUMBER",               value: "5" },
      { type: "OPERATOR",             value: "+" },
      { type: "NUMBER",               value: "6" },
      { type: "OPERATOR",             value: "/" },
      { type: "NUMBER",               value: "4" },
      { type: "OPERATOR",             value: "-" },
      { type: "PUNCTUATION",          value: "(" },
      { type: "OPERATOR",             value: "-" },
      { type: "NUMBER",               value: "16" },
      { type: "OPERATOR",             value: "%" },
      { type: "NUMBER",               value: "4.2" },
      { type: "PUNCTUATION",          value: ")" },
      { type: "OPERATOR",             value: "*" },
      { type: "NUMBER",               value: "55" },
      { type: "TERMINATOR",           value: "EOF" }
    ],
    // 12
    [
      { type: "DECLARATION_KEYWORD",  value: "let" },
      { type: "IDENTIFIER",           value: "l" },
      { type: "OPERATOR",             value: "=" },
      { type: "NUMBER",               value: "6" },
      { type: "OPERATOR",             value: "!" },
      { type: "OPERATOR",             value: "=" },
      { type: "OPERATOR",             value: "=" },
      { type: "NUMBER",               value: "9" },
      { type: "TERMINATOR",           value: "EOF" }
    ],
    // 13
    [
      { type: "DECLARATION_KEYWORD",  value: "var" },
      { type: "IDENTIFIER",           value: "a" },
      { type: "OPERATOR",             value: "=" },
      { type: "NUMBER",               value: "1" },
      { type: "PUNCTUATION",          value: ";" },
      { type: "DECLARATION_KEYWORD",  value: "var" },
      { type: "IDENTIFIER",           value: "m" },
      { type: "OPERATOR",             value: "=" },
      { type: "OPERATOR",             value: "+" },
      { type: "OPERATOR",             value: "+" },
      { type: "IDENTIFIER",           value: "a" },
      { type: "PUNCTUATION",          value: ";" },
      { type: "TERMINATOR",           value: "EOF" }
    ],
    // 14
    [
      { type: "DECLARATION_KEYWORD",  value: "var" },
      { type: "IDENTIFIER",           value: "a" },
      { type: "OPERATOR",             value: "=" },
      { type: "NUMBER",               value: "1" },
      { type: "PUNCTUATION",          value: ";" },
      { type: "DECLARATION_KEYWORD",  value: "var" },
      { type: "IDENTIFIER",           value: "n" },
      { type: "OPERATOR",             value: "=" },
      { type: "IDENTIFIER",           value: "a" },
      { type: "OPERATOR",             value: "+" },
      { type: "OPERATOR",             value: "+" },
      { type: "PUNCTUATION",          value: ";" },
      { type: "TERMINATOR",           value: "EOF" }
    ],
    [
      { type: "DECLARATION_KEYWORD",        value: "var" },
      { type: "IDENTIFIER",                 value: "a" },
      { type: "OPERATOR",                   value: "=" },
      { type: "BOOLEAN",                    value: "true" },
      { type: "PUNCTUATION",                value: ";" },
      { type: "DECLARATION_KEYWORD",        value: "var" },
      { type: "IDENTIFIER",                 value: "b" },
      { type: "OPERATOR",                   value: "=" },
      { type: "OPERATOR",                   value: "!" },
      { type: "IDENTIFIER",                 value: "a" },
      { type: "PUNCTUATION",                value: ";" },
      { type: "DECLARATION_KEYWORD",        value: "var" },
      { type: "IDENTIFIER",                 value: "c" },
      { type: "OPERATOR",                   value: "=" },
      { type: "OPERATOR",                   value: "-" },
      { type: "IDENTIFIER",                 value: "a" },
      { type: "PUNCTUATION",                value: ";" },
      { type: "DECLARATION_KEYWORD",        value: "var" },
      { type: "IDENTIFIER",                 value: "d" },
      { type: "OPERATOR",                   value: "=" },
      { type: "OPERATOR",                   value: "+" },
      { type: "IDENTIFIER",                 value: "b" },
      { type: "TERMINATOR",                 value: "EOF"}
    ],
    [
      { type: "DECLARATION_KEYWORD",        value: "var" },
      { type: "IDENTIFIER",                 value: "a" },
      { type: "OPERATOR",                   value: "=" },
      { type: "PUNCTUATION",                value: "(" },
      { type: "NUMBER",                     value: "6" },
      { type: "OPERATOR",                   value: "=" },
      { type: "OPERATOR",                   value: "=" },
      { type: "NUMBER",                     value: "7" },
      { type: "PUNCTUATION",                value: ")" },
      { type: "OPERATOR",                   value: "?" },
      { type: "NUMBER",                     value: "1" },
      { type: "PUNCTUATION",                value: ":" },
      { type: "OPERATOR",                   value: "-" },
      { type: "NUMBER",                     value: "1" },
      { type: "TERMINATOR",                 value: "EOF"}
    ],
    [
      { type: "DECLARATION_KEYWORD",        value: "var" },
      { type: "IDENTIFIER",                 value: "k" },
      { type: "OPERATOR",                   value: "=" },
      { type: "STRING",                     value: "Stephen" },
      { type: "OPERATOR",                   value: "+" },
      { type: "STRING",                     value: " " },
      { type: "OPERATOR",                   value: "+" },
      { type: "STRING",                     value: "Tabor" },
      { type: "OPERATOR",                   value: "+" },
      { type: "STRING",                     value: "!" },
      { type: "TERMINATOR",                 value: "EOF" }
    ],
    [
      { type: "DECLARATION_KEYWORD",        value: "var" },
      { type: "IDENTIFIER",                 value: "planet" },
      { type: "OPERATOR",                   value: "=" },
      { type: "STRING",                     value: "Earth" },
      { type: "PUNCTUATION",                value: ";" },
      { type: "DECLARATION_KEYWORD",        value: "let" },
      { type: "IDENTIFIER",                 value: "o" },
      { type: "OPERATOR",                   value: "=" },
      { type: "STRING",                     value: "Hello " },
      { type: "STRING_INTERPOLATION_START", value: "\\(" },
      { type: "IDENTIFIER",                 value: "planet" },
      { type: "STRING_INTERPOLATION_END",   value: ")" },
      { type: "STRING",                     value: "!" },
      { type: "TERMINATOR",                 value: "EOF" }
    ],
    // 16
    [
      { type: "DECLARATION_KEYWORD",        value: "var" },
      { type: "IDENTIFIER",                 value: "planet" },
      { type: "OPERATOR",                   value: "=" },
      { type: "STRING",                     value: "Earth" },
      { type: "PUNCTUATION",                value: ";" },
      { type: "DECLARATION_KEYWORD",        value: "let" },
      { type: "IDENTIFIER",                 value: "o" },
      { type: "OPERATOR",                   value: "=" },
      { type: "STRING",                     value: "" },
      { type: "STRING_INTERPOLATION_START", value: "\\(" },
      { type: "IDENTIFIER",                 value: "planet" },
      { type: "STRING_INTERPOLATION_END",   value: ")" },
      { type: "STRING",                     value: "" },
      { type: "TERMINATOR",                 value: "EOF" }
    ],
    // 17
    [
      { type: "DECLARATION_KEYWORD",        value: "var" },
      { type: "IDENTIFIER",                 value: "p" },
      { type: "OPERATOR",                   value: "=" },
      { type: "STRING",                     value: "" },
      { type: "STRING_INTERPOLATION_START", value: "\\(" },
      { type: "NUMBER",                     value: "100" },
      { type: "OPERATOR",                   value: "-" },
      { type: "NUMBER",                     value: "99" },
      { type: "STRING_INTERPOLATION_END",   value: ")" },
      { type: "STRING",                     value: ", 2, 3" },
      { type: "TERMINATOR",                 value: "EOF" }
    ],
    // 18
    [
      { type: "DECLARATION_KEYWORD",  value: "let" },
      { type: "IDENTIFIER",           value: "q" },
      { type: "OPERATOR",             value: "=" },
      { type: "DICTIONARY_START",     value: "[" },
      { type: "STRING",               value: "array1" },
      { type: "PUNCTUATION",          value: ":" },
      { type: "ARRAY_START",          value: "[" },
      { type: "NUMBER",               value: "1" },
      { type: "PUNCTUATION",          value: "," },
      { type: "NUMBER",               value: "2" },
      { type: "PUNCTUATION",          value: "," },
      { type: "NUMBER",               value: "3" },
      { type: "ARRAY_END",            value: "]" },
      { type: "PUNCTUATION",          value: "," },
      { type: "STRING",               value: "array2" },
      { type: "PUNCTUATION",          value: ":" },
      { type: "ARRAY_START",          value: "[" },
      { type: "NUMBER",               value: "4" },
      { type: "PUNCTUATION",          value: "," },
      { type: "NUMBER",               value: "5" },
      { type: "PUNCTUATION",          value: "," },
      { type: "NUMBER",               value: "6" },
      { type: "ARRAY_END",            value: "]" },
      { type: "DICTIONARY_END",       value: "]" },
      { type: "PUNCTUATION",          value: ";" },
      { type: "TERMINATOR",           value: "EOF" }
    ],
    // 19
    [
      { type: "DECLARATION_KEYWORD",  value: "let" },
      { type: "IDENTIFIER",           value: "arr" },
      { type: "OPERATOR",             value: "=" },
      { type: "ARRAY_START",          value: "[" },
      { type: "NUMBER",               value: "1" },
      { type: "PUNCTUATION",          value: "," },
      { type: "NUMBER",               value: "2" },
      { type: "ARRAY_END",            value: "]" },
      { type: "PUNCTUATION",          value: ";" },
      { type: "DECLARATION_KEYWORD",  value: "var" },
      { type: "IDENTIFIER",           value: "s" },
      { type: "OPERATOR",             value: "=" },
      { type: "IDENTIFIER",           value: "arr" },
      { type: "SUBSTRING_LOOKUP",     value: "[" },
      { type: "NUMBER",               value: "0" },
      { type: "SUBSTRING_LOOKUP",     value: "]" },
      { type: "PUNCTUATION",          value: ";" },
      { type: "TERMINATOR",           value: "EOF" }
    ],
    // 20
    [
      { type: "DECLARATION_KEYWORD",  value: "let" },
      { type: "IDENTIFIER",           value: "arr" },
      { type: "OPERATOR",             value: "=" },
      { type: "ARRAY_START",          value: "[" },
      { type: "NUMBER",               value: "1" },
      { type: "PUNCTUATION",          value: "," },
      { type: "NUMBER",               value: "2" },
      { type: "ARRAY_END",            value: "]" },
      { type: "PUNCTUATION",          value: ";" },
      { type: "DECLARATION_KEYWORD",  value: "let" },
      { type: "IDENTIFIER",           value: "t" },
      { type: "OPERATOR",             value: "=" },
      { type: "NUMBER",               value: "100" },
      { type: "PUNCTUATION",          value: ";" },
      { type: "DECLARATION_KEYWORD",  value: "var" },
      { type: "IDENTIFIER",           value: "u" },
      { type: "OPERATOR",             value: "=" },
      { type: "IDENTIFIER",           value: "arr" },
      { type: "SUBSTRING_LOOKUP",     value: "[" },
      { type: "IDENTIFIER",           value: "t" },
      { type: "OPERATOR",             value: "-" },
      { type: "NUMBER",               value: "99" },
      { type: "SUBSTRING_LOOKUP",     value: "]" },
      { type: "PUNCTUATION",          value: ";" },
      { type: "TERMINATOR",           value: "EOF" }
    ],
    // 21
    [
      { type: "DECLARATION_KEYWORD",  value: "let" },
      { type: "IDENTIFIER",           value: "arr" },
      { type: "OPERATOR",             value: "=" },
      { type: "ARRAY_START",          value: "[" },
      { type: "NUMBER",               value: "1" },
      { type: "PUNCTUATION",          value: "," },
      { type: "NUMBER",               value: "2" },
      { type: "ARRAY_END",            value: "]" },
      { type: "PUNCTUATION",          value: ";" },
      { type: "DECLARATION_KEYWORD",  value: "var" },
      { type: "IDENTIFIER",           value: "u" },
      { type: "OPERATOR",             value: "=" },
      { type: "ARRAY_START",          value: "[" },
      { type: "IDENTIFIER",           value: "arr" },
      { type: "SUBSTRING_LOOKUP",     value: "[" },
      { type: "NUMBER",               value: "0" },
      { type: "SUBSTRING_LOOKUP",     value: "]" },
      { type: "ARRAY_END",            value: "]" },
      { type: "PUNCTUATION",          value: ";" },
      { type: "TERMINATOR",           value: "EOF" }
    ],
    // 22
    [
      { type: "DECLARATION_KEYWORD",  value: "let" },
      { type: "IDENTIFIER",           value: "arr" },
      { type: "OPERATOR",             value: "=" },
      { type: "ARRAY_START",          value: "[" },
      { type: "NUMBER",               value: "1" },
      { type: "PUNCTUATION",          value: "," },
      { type: "NUMBER",               value: "2" },
      { type: "ARRAY_END",            value: "]" },
      { type: "PUNCTUATION",          value: ";" },
      { type: "DECLARATION_KEYWORD",  value: "var" },
      { type: "IDENTIFIER",           value: "v" },
      { type: "OPERATOR",             value: "=" },
      { type: "DICTIONARY_START",     value: "[" },
      { type: "IDENTIFIER",           value: "arr" },
      { type: "SUBSTRING_LOOKUP",     value: "[" },
      { type: "NUMBER",               value: "0" },
      { type: "SUBSTRING_LOOKUP",     value: "]" },
      { type: "PUNCTUATION",          value: ":" },
      { type: "ARRAY_START",          value: "[" },
      { type: "ARRAY_START",          value: "[" },
      { type: "NUMBER",               value: "1" },
      { type: "PUNCTUATION",          value: "," },
      { type: "NUMBER",               value: "2" },
      { type: "ARRAY_END",            value: "]" },
      { type: "PUNCTUATION",          value: "," },
      { type: "ARRAY_START",          value: "[" },
      { type: "NUMBER",               value: "3" },
      { type: "PUNCTUATION",          value: "," },
      { type: "NUMBER",               value: "4" },
      { type: "ARRAY_END",            value: "]" },
      { type: "ARRAY_END",            value: "]" },
      { type: "PUNCTUATION",          value: "," },
      { type: "IDENTIFIER",           value: "arr" },
      { type: "SUBSTRING_LOOKUP",     value: "[" },
      { type: "NUMBER",               value: "1" },
      { type: "SUBSTRING_LOOKUP",     value: "]" },
      { type: "PUNCTUATION",          value: ":" },
      { type: "ARRAY_START",          value: "[" },
      { type: "ARRAY_START",          value: "[" },
      { type: "STRING",               value: "one" },
      { type: "PUNCTUATION",          value: "," },
      { type: "STRING",               value: "two" },
      { type: "ARRAY_END",            value: "]" },
      { type: "PUNCTUATION",          value: "," },
      { type: "ARRAY_START",          value: "[" },
      { type: "STRING",               value: "three" },
      { type: "PUNCTUATION",          value: "," },
      { type: "STRING",               value: "four" },
      { type: "ARRAY_END",            value: "]" },
      { type: "ARRAY_END",            value: "]" },
      { type: "DICTIONARY_END",       value: "]" },
      { type: "PUNCTUATION",          value: ";" },
      { type: "TERMINATOR",           value: "EOF" }
    ],
    [
      { type: "MULTI_LINE_COMMENT_START",  value: "/*"},
      { type: "COMMENT",                   value: " Comment 1 "},
      { type: "MULTI_LINE_COMMENT_END",    value: "*/"},
      { type: "DECLARATION_KEYWORD",       value: "var" },
      { type: "IDENTIFIER",                value: "a" },
      { type: "OPERATOR",                  value: "=" },
      { type: "NUMBER",                    value: "1" },
      { type: "COMMENT_START",             value: "//"},
      { type: "COMMENT",                   value: " Comment 2"},
      { type: "TERMINATOR",                value: "EOF"}
    ],
    [
      { type: "DECLARATION_KEYWORD",        value: "var" },
      { type: "IDENTIFIER",                 value: "error" },
      { type: "OPERATOR",                   value: "=" },
      { type: "TUPLE_START",                value: "("},
      { type: "NUMBER",                     value: "404"},
      { type: "PUNCTUATION",                value: "," },
      { type: "STRING",                     value: "not found"},
      { type: "TUPLE_END",                  value: ")"},
      { type: "TERMINATOR",                 value: "EOF" }
    ],
    [
      { type: "DECLARATION_KEYWORD",        value: "let" },
      { type: "IDENTIFIER",                 value: "http200Status" },
      { type: "OPERATOR",                   value: "=" },
      { type: "TUPLE_START",                value: "("},
      { type: "TUPLE_ELEMENT_NAME",         value: "statusCode"},
      { type: "PUNCTUATION",                value: ":" },
      { type: "NUMBER",                     value: "200"},
      { type: "PUNCTUATION",                value: "," },
      { type: "TUPLE_ELEMENT_NAME",         value: "description"},
      { type: "PUNCTUATION",                value: ":" },
      { type: "STRING",                     value: "OK"},
      { type: "TUPLE_END",                  value: ")"},
      { type: "PUNCTUATION",                value: ";" },
      { type: "TERMINATOR",                 value: "EOF" }
    ],
    [
      { type: "DECLARATION_KEYWORD",        value: "var" },
      { type: "IDENTIFIER",                 value: "empty" },
      { type: "OPERATOR",                   value: "=" },
      { type: "TUPLE_START",                value: "("},
      { type: "TUPLE_END",                  value: ")"},
      { type: "TERMINATOR",                 value: "EOF" }
    ],
    [
      { type: "DECLARATION_KEYWORD",  value: "var" },
      { type: "IDENTIFIER",           value: "w" },
      { type: "OPERATOR",             value: "=" },
      { type: "DICTIONARY_START",     value: "[" },
      { type: "NUMBER",               value: "1" },
      { type: "PUNCTUATION",          value: ":" },
      { type: "ARRAY_START",          value: "[" },
      { type: "DICTIONARY_START",     value: "[" },
      { type: "NUMBER",               value: "1" },
      { type: "PUNCTUATION",          value: ":" },
      { type: "STRING",               value: "two" },
      { type: "DICTIONARY_END",       value: "]" },
      { type: "PUNCTUATION",          value: "," },
      { type: "DICTIONARY_START",     value: "[" },
      { type: "NUMBER",               value: "3" },
      { type: "PUNCTUATION",          value: ":" },
      { type: "STRING",               value: "four" },
      { type: "DICTIONARY_END",       value: "]" },
      { type: "ARRAY_END",            value: "]" },
      { type: "PUNCTUATION",          value: "," },
      { type: "NUMBER",               value: "2" },
      { type: "PUNCTUATION",          value: ":" },
      { type: "ARRAY_START",          value: "[" },
      { type: "DICTIONARY_START",     value: "[" },
      { type: "STRING",               value: "one" },
      { type: "PUNCTUATION",          value: ":" },
      { type: "NUMBER",               value: "2" },
      { type: "DICTIONARY_END",       value: "]" },
      { type: "PUNCTUATION",          value: "," },
      { type: "DICTIONARY_START",     value: "[" },
      { type: "STRING",               value: "three" },
      { type: "PUNCTUATION",          value: ":" },
      { type: "NUMBER",               value: "4" },
      { type: "DICTIONARY_END",       value: "]" },
      { type: "ARRAY_END",            value: "]" },
      { type: "DICTIONARY_END",       value: "]" },
      { type: "PUNCTUATION",          value: ";" },
      { type: "TERMINATOR",           value: "EOF" }
    ],
    [
      { type: "DECLARATION_KEYWORD",  value: "var" },
      { type: "IDENTIFIER",           value: "i" },
      { type: "OPERATOR",             value: "=" },
      { type: "NUMBER",               value: "10" },
      { type: "PUNCTUATION",          value: ";" },
      { type: "STATEMENT_KEYWORD",    value: "while" },
      { type: "IDENTIFIER",           value: "i" },
      { type: "OPERATOR",             value: ">" },
      { type: "OPERATOR",             value: "=" },
      { type: "NUMBER",               value: "0" },
      { type: "PUNCTUATION",          value: "{" },
      { type: "IDENTIFIER",           value: "i" },
      { type: "OPERATOR",             value: "-" },
      { type: "OPERATOR",             value: "-" },
      { type: "PUNCTUATION",          value: "}" },
      { type: "TERMINATOR",           value: "EOF"}
    ],
    [
      { type: "DECLARATION_KEYWORD",  value: "var" },
      { type: "IDENTIFIER",           value: "i" },
      { type: "OPERATOR",             value: "=" },
      { type: "NUMBER",               value: "10" },
      { type: "PUNCTUATION",          value: ";" },
      { type: "STATEMENT_KEYWORD",    value: "repeat" },
      { type: "PUNCTUATION",          value: "{" },
      { type: "IDENTIFIER",           value: "i" },
      { type: "OPERATOR",             value: "-" },
      { type: "OPERATOR",             value: "-" },
      { type: "PUNCTUATION",          value: "}" },
      { type: "STATEMENT_KEYWORD",    value: "while" },
      { type: "PUNCTUATION",          value: "(" },
      { type: "IDENTIFIER",           value: "i" },
      { type: "OPERATOR",             value: ">" },
      { type: "OPERATOR",             value: "=" },
      { type: "NUMBER",               value: "0" },
      { type: "PUNCTUATION",          value: ")" },
      { type: "TERMINATOR",           value: "EOF"}
    ],
    [
      { type: "DECLARATION_KEYWORD",  value: "var" },
      { type: "IDENTIFIER",           value: "i" },
      { type: "OPERATOR",             value: "=" },
      { type: "NUMBER",               value: "10" },
      { type: "PUNCTUATION",          value: ";" },
      { type: "STATEMENT_KEYWORD",    value: "while" },
      { type: "PUNCTUATION",          value: "(" },
      { type: "IDENTIFIER",           value: "i" },
      { type: "OPERATOR",             value: ">" },
      { type: "OPERATOR",             value: "=" },
      { type: "NUMBER",               value: "0" },
      { type: "PUNCTUATION",          value: ")" },
      { type: "PUNCTUATION",          value: "{" },
      { type: "IDENTIFIER",           value: "i" },
      { type: "OPERATOR",             value: "-" },
      { type: "OPERATOR",             value: "-" },
      { type: "PUNCTUATION",          value: "}" },
      { type: "TERMINATOR",           value: "EOF"}
    ],
    [
      { type: "DECLARATION_KEYWORD",  value: "var" },
      { type: "IDENTIFIER",           value: "i" },
      { type: "OPERATOR",             value: "=" },
      { type: "NUMBER",               value: "10" },
      { type: "PUNCTUATION",          value: ";" },
      { type: "STATEMENT_KEYWORD",    value: "repeat" },
      { type: "PUNCTUATION",          value: "{" },
      { type: "IDENTIFIER",           value: "i" },
      { type: "OPERATOR",             value: "-" },
      { type: "OPERATOR",             value: "-" },
      { type: "PUNCTUATION",          value: "}" },
      { type: "STATEMENT_KEYWORD",    value: "while" },
      { type: "IDENTIFIER",           value: "i" },
      { type: "OPERATOR",             value: ">" },
      { type: "OPERATOR",             value: "=" },
      { type: "NUMBER",               value: "0" },
      { type: "TERMINATOR",           value: "EOF"}
    ],
    [
      { type: "DECLARATION_KEYWORD",  value: "var" },
      { type: "IDENTIFIER",           value: "b" },
      { type: "OPERATOR",             value: "=" },
      { type: "BOOLEAN",              value: "true" },
      { type: "PUNCTUATION",          value: ";" },
      { type: "TERMINATOR",           value: "\\n"},
      { type: "DECLARATION_KEYWORD",  value: "var" },
      { type: "IDENTIFIER",           value: "c" },
      { type: "OPERATOR",             value: "=" },
      { type: "NUMBER",               value: "0" },
      { type: "PUNCTUATION",          value: ";" },
      { type: "TERMINATOR",           value: "EOF"},
    ]
    ,
    [
      { type: "DECLARATION_KEYWORD",  value: "var" },
      { type: "IDENTIFIER",           value: "i" },
      { type: "OPERATOR",             value: "=" },
      { type: "NUMBER",               value: "10" },
      { type: "PUNCTUATION",          value: ";" },
      { type: "TERMINATOR",           value: "\\n"},
      { type: "STATEMENT_KEYWORD",    value: "while" },
      { type: "PUNCTUATION",          value: "(" },
      { type: "IDENTIFIER",           value: "i" },
      { type: "OPERATOR",             value: ">" },
      { type: "OPERATOR",             value: "=" },
      { type: "NUMBER",               value: "0" },
      { type: "PUNCTUATION",          value: ")" },
      { type: "PUNCTUATION",          value: "{" },
      { type: "TERMINATOR",           value: "\\n"},
      { type: "IDENTIFIER",           value: "i" },
      { type: "OPERATOR",             value: "-" },
      { type: "OPERATOR",             value: "-" },
      { type: "TERMINATOR",           value: "\\n"},
      { type: "PUNCTUATION",          value: "}" }, 
      { type: "TERMINATOR",           value: "EOF"}
    ],
    // [
    //   { type: "DECLARATION_KEYWORD",  value: "var" },
    //   { type: "IDENTIFIER",           value: "i" },
    //   { type: "OPERATOR",             value: "=" },
    //   { type: "NUMBER",               value: "0" },
    //   { type: "PUNCTUATION",          value: ";" },
    //   { type: "STATEMENT_KEYWORD",    value: "while" },
    //   { type: "PUNCTUATION",          value: "(" },
    //   { type: "IDENTIFIER",           value: "i" },
    //   { type: "OPERATOR",             value: ">" },
    //   { type: "OPERATOR",             value: "=" },
    //   { type: "NUMBER",               value: "0" },
    //   { type: "PUNCTUATION",          value: "(" },
    //   { type: "PUNCTUATION",          value: "{" },
    //   { type: "TERMINATOR",           value: "\\n"},
    //   { type: "IDENTIFIER",           value: "i" },
    //   { type: "OPERATOR",             value: "+" },
    //   { type: "OPERATOR",             value: "+" },
    //   { type: "TERMINATOR",           value: "\\n"},
    //   { type: "PUNCTUATION",          value: "}" }, 
    //   { type: "TERMINATOR",           value: "EOF"}
    // ],
    // [
    //   { type: "DECLARATION_KEYWORD",  value: "var" },
    //   { type: "IDENTIFIER",           value: "i" },
    //   { type: "OPERATOR",             value: "=" },
    //   { type: "NUMBER",               value: "0" },
    //   { type: "PUNCTUATION",          value: ";" },
    //   { type: "TERMINATOR",           value: "\\n"},
    //   { type: "STATEMENT_KEYWORD",    value: "repeat" },
    //   { type: "PUNCTUATION",          value: "{" },
    //   { type: "TERMINATOR",           value: "\\n"},
    //   { type: "IDENTIFIER",           value: "i" },
    //   { type: "OPERATOR",             value: "+" },
    //   { type: "OPERATOR",             value: "+" },
    //   { type: "TERMINATOR",           value: "\\n"},
    //   { type: "PUNCTUATION",          value: "}" }, 
    //   { type: "STATEMENT_KEYWORD",    value: "while" },
    //   { type: "IDENTIFIER",           value: "i" },
    //   { type: "OPERATOR",             value: "<" },
    //   { type: "NUMBER",               value: "10" },
    //   { type: "TERMINATOR",           value: "EOF"}
    // ]

  ]
};
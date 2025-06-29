---
title: JavaScript-Referenz
slug: Web/JavaScript/Reference
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar}}

Die JavaScript-Referenz dient als Repository von Fakten über die JavaScript-Sprache. Die gesamte Sprache wird hier im Detail beschrieben. Wenn Sie JavaScript-Code schreiben, werden Sie oft auf diese Seiten verweisen (daher der Titel "JavaScript-Referenz").

Die JavaScript-Sprache ist dazu gedacht, in einer größeren Umgebung verwendet zu werden, sei es ein Browser, serverseitige Skripte oder Ähnliches. Größtenteils versucht diese Referenz, umgebungsneutral zu sein und zielt nicht auf eine Webbrowser-Umgebung ab.

Wenn Sie neu in JavaScript sind, beginnen Sie mit dem [Leitfaden](/de/docs/Web/JavaScript/Guide). Sobald Sie ein festes Verständnis der Grundlagen haben, können Sie die Referenz verwenden, um mehr Details zu einzelnen Objekten und Sprachkonstruktionen zu erhalten.

## Built-ins

[JavaScript-Standard-Built-in-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects), zusammen mit ihren Methoden und Eigenschaften.

### Wert-Eigenschaften

- {{jsxref("globalThis")}}
- {{jsxref("Infinity")}}
- {{jsxref("NaN")}}
- {{jsxref("undefined")}}

### Funktionen-Eigenschaften

- {{jsxref("Global_Objects/eval", "eval()")}}
- {{jsxref("isFinite()")}}
- {{jsxref("isNaN()")}}
- {{jsxref("parseFloat()")}}
- {{jsxref("parseInt()")}}
- {{jsxref("decodeURI()")}}
- {{jsxref("decodeURIComponent()")}}
- {{jsxref("encodeURI()")}}
- {{jsxref("encodeURIComponent()")}}
- {{jsxref("escape()")}} {{deprecated_inline}}
- {{jsxref("unescape()")}} {{deprecated_inline}}

### Fundamentale Objekte

- {{jsxref("Object")}}
- {{jsxref("Function")}}
- {{jsxref("Boolean")}}
- {{jsxref("Symbol")}}

### Fehlerobjekte

- {{jsxref("Error")}}
- {{jsxref("AggregateError")}}
- {{jsxref("EvalError")}}
- {{jsxref("RangeError")}}
- {{jsxref("ReferenceError")}}
- {{jsxref("SyntaxError")}}
- {{jsxref("TypeError")}}
- {{jsxref("URIError")}}
- {{jsxref("InternalError")}} {{non-standard_inline}}

### Zahlen und Datum

- {{jsxref("Number")}}
- {{jsxref("BigInt")}}
- {{jsxref("Math")}}
- {{jsxref("Date")}}
- {{jsxref("Temporal")}}

### Textverarbeitung

- {{jsxref("String")}}
- {{jsxref("RegExp")}}

### Indizierte Sammlungen

- {{jsxref("Array")}}
- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("BigInt64Array")}}
- {{jsxref("BigUint64Array")}}
- {{jsxref("Float16Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}

### Schlüssel-Sammlungen

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}

### Strukturierte Daten

- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("DataView")}}
- {{jsxref("Atomics")}}
- {{jsxref("JSON")}}

### Speicherverwaltung

- {{jsxref("WeakRef")}}
- {{jsxref("FinalizationRegistry")}}

### Kontrollabstraktions-Objekte

- {{jsxref("Iterator")}}
- {{jsxref("AsyncIterator")}}
- {{jsxref("Promise")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("Generator")}}
- {{jsxref("AsyncGenerator")}}
- {{jsxref("AsyncFunction")}}

### Reflexion

- {{jsxref("Reflect")}}
- {{jsxref("Proxy")}}

### Internationalisierung

- {{jsxref("Intl")}}
- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl.DisplayNames")}}
- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl.Locale")}}
- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl.PluralRules")}}
- {{jsxref("Intl.RelativeTimeFormat")}}
- {{jsxref("Intl.Segmenter")}}

## Anweisungen

[JavaScript-Anweisungen und -Deklarationen](/de/docs/Web/JavaScript/Reference/Statements)

### Kontrollfluss

- {{jsxref("Statements/return", "return")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/if...else", "if...else")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Statements/try...catch", "try...catch")}}

### Variablen deklarieren

- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}

### Funktionen und Klassen

- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Statements/class", "class")}}

### Iterationen

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Statements/for-await...of", "for await...of")}}
- {{jsxref("Statements/while", "while")}}

### Andere

- {{jsxref("Statements/Empty", "Empty", "", 1)}}
- {{jsxref("Statements/block", "Block", "", 1)}}
- {{jsxref("Statements/Expression_statement", "Expression statement", "", 1)}}
- {{jsxref("Statements/debugger", "debugger")}}
- {{jsxref("Statements/export", "export")}}
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Statements/label", "label", "", 1)}}
- {{jsxref("Statements/with", "with")}} {{deprecated_inline}}

## Ausdrücke und Operatoren

[JavaScript-Ausdrücke und -Operatoren](/de/docs/Web/JavaScript/Reference/Operators).

### Primäre Ausdrücke

- {{jsxref("Operators/this", "this")}}
- [Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#literals)
- {{jsxref("Array", "[]")}}
- {{jsxref("Operators/Object_initializer", "{}")}}
- {{jsxref("Operators/function", "function")}}
- {{jsxref("Operators/class", "class")}}
- {{jsxref("Operators/function*", "function*")}}
- {{jsxref("Operators/async_function", "async function")}}
- {{jsxref("Operators/async_function*", "async function*")}}
- {{jsxref("RegExp", "/ab+c/i")}}
- {{jsxref("Template_literals", "`string`")}}
- {{jsxref("Operators/Grouping", "( )")}}

### Left-hand-side Ausdrücke

- {{jsxref("Operators/Property_accessors", "Property accessors", "", 1)}}
- {{jsxref("Operators/Optional_chaining", "?.")}}
- {{jsxref("Operators/new", "new")}}
- {{jsxref("Operators/new.target", "new.target")}}
- {{jsxref("Operators/import.meta", "import.meta")}}
- {{jsxref("Operators/super", "super")}}
- {{jsxref("Operators/import", "import()")}}

### Inkrement und Dekrement

- {{jsxref("Operators/Increment", "A++")}}
- {{jsxref("Operators/Decrement", "A--")}}
- {{jsxref("Operators/Increment", "++A")}}
- {{jsxref("Operators/Decrement", "--A")}}

### Unäre Operatoren

- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/void", "void")}}
- {{jsxref("Operators/typeof", "typeof")}}
- {{jsxref("Operators/Unary_plus", "+")}}
- {{jsxref("Operators/Unary_negation", "-")}}
- {{jsxref("Operators/Bitwise_NOT", "~")}}
- {{jsxref("Operators/Logical_NOT", "!")}}
- {{jsxref("Operators/await", "await")}}

### Arithmetische Operatoren

- {{jsxref("Operators/Exponentiation", "**")}}
- {{jsxref("Operators/Multiplication", "*")}}
- {{jsxref("Operators/Division", "/")}}
- {{jsxref("Operators/Remainder", "%")}}
- {{jsxref("Operators/Addition", "+")}} (Plus)
- {{jsxref("Operators/Subtraction", "-")}}

### Relationale Operatoren

- {{jsxref("Operators/Less_than", "&lt;")}} (Weniger als)
- {{jsxref("Operators/Greater_than", "&gt;")}} (Mehr als)
- {{jsxref("Operators/Less_than_or_equal", "&lt;=")}}
- {{jsxref("Operators/Greater_than_or_equal", "&gt;=")}}
- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Operators/in", "in")}}

### Gleichheitsoperatoren

- {{jsxref("Operators/Equality", "==")}}
- {{jsxref("Operators/Inequality", "!=")}}
- {{jsxref("Operators/Strict_equality", "===")}}
- {{jsxref("Operators/Strict_inequality", "!==")}}

### Bitweise Verschiebungsoperatoren

- {{jsxref("Operators/Left_shift", "&lt;&lt;")}}
- {{jsxref("Operators/Right_shift", "&gt;&gt;")}}
- {{jsxref("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}

### Binäre bitweise Operatoren

- {{jsxref("Operators/Bitwise_AND", "&amp;")}}
- {{jsxref("Operators/Bitwise_OR", "|")}}
- {{jsxref("Operators/Bitwise_XOR", "^")}}

### Binäre logische Operatoren

- {{jsxref("Operators/Logical_AND", "&amp;&amp;")}}
- {{jsxref("Operators/Logical_OR", "||")}}
- {{jsxref("Operators/Nullish_coalescing", "??")}}

### Bedingter (ternäre) Operator

- {{jsxref("Operators/Conditional_operator", "(condition ? ifTrue : ifFalse)")}}

### Zuweisungsoperatoren

- {{jsxref("Operators/Assignment", "=")}}
- {{jsxref("Operators/Multiplication_assignment", "*=")}}
- {{jsxref("Operators/Division_assignment", "/=")}}
- {{jsxref("Operators/Remainder_assignment", "%=")}}
- {{jsxref("Operators/Addition_assignment", "+=")}}
- {{jsxref("Operators/Subtraction_assignment", "-=")}}
- {{jsxref("Operators/Left_shift_assignment", "&lt;&lt;=")}}
- {{jsxref("Operators/Right_shift_assignment", "&gt;&gt;=")}}
- {{jsxref("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
- {{jsxref("Operators/Bitwise_AND_assignment", "&amp;=")}}
- {{jsxref("Operators/Bitwise_XOR_assignment", "^=")}}
- {{jsxref("Operators/Bitwise_OR_assignment", "|=")}}
- {{jsxref("Operators/Exponentiation_assignment", "**=")}}
- {{jsxref("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
- {{jsxref("Operators/Logical_OR_assignment", "||=")}}
- {{jsxref("Operators/Nullish_coalescing_assignment", "??=")}}
- [`[a, b] = arr`, `{ a, b } = obj`](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)

### Yield-Operatoren

- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}

### Spread-Syntax

- {{jsxref("Operators/Spread_syntax", "...obj")}}

### Komma-Operator

- {{jsxref("Operators/Comma_operator", ",")}}

## Funktionen

[JavaScript-Funktionen.](/de/docs/Web/JavaScript/Reference/Functions)

- {{jsxref("Functions/Arrow_functions", "Arrow Functions", "", 1)}}
- {{jsxref("Functions/Default_parameters", "Default parameters", "", 1)}}
- {{jsxref("Functions/rest_parameters", "Rest parameters", "", 1)}}
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Functions/Method_definitions", "Method definitions", "", 1)}}
- {{jsxref("Functions/get", "getter", "", 1)}}
- {{jsxref("Functions/set", "setter", "", 1)}}

## Klassen

[JavaScript-Klassen.](/de/docs/Web/JavaScript/Reference/Classes)

- {{jsxref("Classes/Constructor", "constructor")}}
- {{jsxref("Classes/extends", "extends")}}
- [Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements)
- [Öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- {{jsxref("Classes/static", "static")}}
- [Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

## Reguläre Ausdrücke

[JavaScript-Reguläre Ausdrücke.](/de/docs/Web/JavaScript/Reference/Regular_expressions)

- [Rückverweis: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [Erfassungsgruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Zeichenklassen-Escapesequenz: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Zeichensequenz-Escapesequenz: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Eingabebegrenzungsbehauptung: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Literales Zeichen: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Lookahead-Bedingung: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind-Bedingung: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Modifikator: `(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Benannte Erfassungsgruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Nicht erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [Quantifizierer: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
- [Unicode Zeichenklassen-Escapesequenz: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Wildcard: `.`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
- [Wortgrenzenbehauptung: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)

## Zusätzliche Referenzseiten

- [JavaScript-Technologieübersicht](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview)
- [Ausführungsmodell](/de/docs/Web/JavaScript/Reference/Execution_model)
- {{jsxref("Lexical_grammar", "Lexikalische Grammatik", "", 1)}}
- [Datentypen und Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures)
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- [Nachkommaterminologie](/de/docs/Web/JavaScript/Reference/Trailing_commas)
- [Fehler](/de/docs/Web/JavaScript/Reference/Errors)
- {{jsxref("Strict_mode", "Strikter Modus", "", 1)}}
- {{jsxref("Deprecated_and_obsolete_features", "Veraltete Funktionen", "", 1)}}

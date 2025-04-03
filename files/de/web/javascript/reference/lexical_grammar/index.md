---
title: Lexikalische Grammatik
slug: Web/JavaScript/Reference/Lexical_grammar
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("More")}}

Diese Seite beschreibt die lexikalische Grammatik von JavaScript. Der JavaScript-Quelltext ist einfach eine Folge von Zeichen — damit der Interpreter ihn verstehen kann, muss die Zeichenkette in eine strukturiertere Darstellung _geparst_ werden. Der erste Schritt des Parsings wird [lexikalische Analyse](https://en.wikipedia.org/wiki/Lexical_analysis) genannt, bei der der Text von links nach rechts gescannt und in eine Sequenz aus einzelnen, atomaren Eingabeelementen umgewandelt wird. Einige Eingabeelemente sind für den Interpreter unbedeutend und werden nach diesem Schritt entfernt — dazu gehören [Leerzeichen](#leerzeichen) und [Kommentare](#kommentare). Die anderen, einschließlich [Bezeichner](#bezeichner), [Schlüsselwörter](#schlüsselwörter), [Literale](#literale) und Punctuators (meistens [Operatoren](/de/docs/Web/JavaScript/Reference/Operators)), werden für die weitere syntaktische Analyse verwendet. [Zeilenendzeichen](#zeilenendzeichen) und mehrzeilige Kommentare sind ebenfalls syntaktisch unbedeutend, aber sie leiten den Prozess der [automatischen Semikolon-Einfügung](#automatische_semikolon-einfügung), um bestimmte ungültige Token-Sequenzen gültig zu machen.

## Formatsteuerungszeichen

Formatsteuerungszeichen haben keine visuelle Darstellung, werden aber verwendet, um die Interpretation des Textes zu steuern.

| Codepunkt | Name                  | Abkürzung | Beschreibung                                                                                                                                                                                                      |
| --------- | --------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| U+200C    | Zero width non-joiner | \<ZWNJ>   | Zwischen Zeichen platziert, um zu verhindern, dass sie in bestimmten Sprachen zu Ligaturen verbunden werden ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_non-joiner)).                                   |
| U+200D    | Zero width joiner     | \<ZWJ>    | Zwischen Zeichen platziert, die normalerweise nicht verbunden werden, um eine Darstellung in verbundener Form in bestimmten Sprachen zu erzwingen ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_joiner)). |
| U+FEFF    | Byte order mark       | \<BOM>    | Wird am Anfang des Skripts verwendet, um es als Unicode zu kennzeichnen und die Erkennung der Textcodierung und der Byte-Reihenfolge zu ermöglichen ([Wikipedia](https://en.wikipedia.org/wiki/Byte_order_mark)). |

Im JavaScript-Quelltext werden \<ZWNJ> und \<ZWJ> als Teile des [Bezeichners](#bezeichner) behandelt, während \<BOM> (auch als zero-width no-break space \<ZWNBSP> bezeichnet, wenn nicht am Anfang des Textes) als [Leerzeichen](#leerzeichen) behandelt wird.

## Leerzeichen

{{Glossary("Whitespace", "Leerzeichen")}}-Zeichen verbessern die Lesbarkeit des Quelltextes und trennen Tokens voneinander. Diese Zeichen sind in der Regel nicht erforderlich für die Funktionalität des Codes. [Minifizierungs-Tools](https://en.wikipedia.org/wiki/Minification_%28programming%29) werden oftmals verwendet, um Leerzeichen zu entfernen und so die zu übertragende Datenmenge zu reduzieren.

| Codepunkt | Name                              | Abkürzung | Beschreibung                                                                                  | Escape-Sequenz |
| --------- | --------------------------------- | --------- | --------------------------------------------------------------------------------------------- | -------------- |
| U+0009    | Character tabulation              | \<TAB>    | Horizontale Tabulation                                                                        | \t             |
| U+000B    | Line tabulation                   | \<VT>     | Vertikale Tabulation                                                                          | \v             |
| U+000C    | Form feed                         | \<FF>     | Seitenumbruchsteuerzeichen ([Wikipedia](https://en.wikipedia.org/wiki/Page_break#Form_feed)). | \f             |
| U+0020    | Space                             | \<SP>     | Normales Leerzeichen                                                                          |                |
| U+00A0    | No-break space                    | \<NBSP>   | Normales Leerzeichen, jedoch ohne Möglichkeit für einen Zeilenumbruch                         |                |
| U+FEFF    | Zero-width no-break space         | \<ZWNBSP> | Wenn nicht am Anfang eines Skripts, ist das BOM-Marker ein normales Leerzeichen.              |                |
| Andere    | Andere Unicode-Leerzeichenzeichen | \<USP>    | [Zeichen in der Kategorie "Space_Separator"][space separator set]                             |                |

[space separator set]: https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D

> [!NOTE]
> Von den [Zeichen mit der Eigenschaft "White_Space", die jedoch nicht in der allgemeinen Kategorie "Space_Separator" sind](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BWhite_Space%7D%26%5CP%7BGeneral_Category%3DSpace_Separator%7D), werden U+0009, U+000B und U+000C in JavaScript immer noch als Leerzeichen behandelt; U+0085 NÄCHSTE ZEILE hat keine besondere Rolle; andere werden zum Satz der [Zeilenendzeichen](#zeilenendzeichen).

> [!NOTE]
> Änderungen am Unicode-Standard, der vom JavaScript-Engine verwendet wird, können das Verhalten von Programmen beeinflussen. Beispielsweise hat ES2016 den Referenz-Unicode-Standard von 5.1 auf 8.0.0 aktualisiert, was dazu führte, dass U+180E MONGOLISCHER VOKAL-TRENNER von der Kategorie "Space_Separator" in die Kategorie "Format (Cf)" verschoben wurde und somit kein Leerzeichen mehr war. Folglich änderte sich das Ergebnis von [`"\u180E".trim().length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim) von `0` auf `1`.

## Zeilenendzeichen

Zusätzlich zu den [Leerzeichen](#leerzeichen) werden Zeilenendzeichen verwendet, um die Lesbarkeit des Quelltextes zu verbessern. In einigen Fällen können Zeilenendzeichen jedoch die Ausführung von JavaScript-Code beeinflussen, da es einige Stellen gibt, an denen sie verboten sind. Zeilenendzeichen beeinflussen auch den Prozess der [automatischen Semikolon-Einfügung](#automatische_semikolon-einfügung).

Außerhalb des Kontexts der lexikalischen Grammatik werden Leerzeichen und Zeilenendzeichen oft vermischt. Beispielsweise entfernt {{jsxref("String.prototype.trim()")}} alle Leerzeichen und Zeilenendzeichen vom Anfang und Ende eines Strings. Die `\s` [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) in regulären Ausdrücken passt auf alle Leerzeichen und Zeilenendzeichen.

Nur die folgenden Unicode-Codepunkte werden in ECMAScript als Zeilenendzeichen behandelt, andere zeilenbrechende Zeichen werden als Leerzeichen behandelt (zum Beispiel wird die nächste Zeile, NEL, U+0085 als Leerzeichen betrachtet).

| Codepunkt | Name                | Abkürzung | Beschreibung                                               | Escape-Sequenz |
| --------- | ------------------- | --------- | ---------------------------------------------------------- | -------------- |
| U+000A    | Line Feed           | \<LF>     | Neues Zeilenzeichen in UNIX-Systemen.                      | \n             |
| U+000D    | Carriage Return     | \<CR>     | Neues Zeilenzeichen in Commodore- und frühen Mac-Systemen. | \r             |
| U+2028    | Line Separator      | \<LS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline)         |                |
| U+2029    | Paragraph Separator | \<PS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline)         |                |

## Kommentare

Kommentare werden verwendet, um Anmerkungen, Notizen, Vorschläge oder Warnungen zum JavaScript-Code hinzuzufügen. Dies kann das Lesen und Verstehen erleichtern. Sie können auch verwendet werden, um Code zu deaktivieren und so zu verhindern, dass er ausgeführt wird; dies kann ein wertvolles Debugging-Tool sein.

JavaScript hat zwei langjährige Wege, um Kommentare zum Code hinzuzufügen: Zeilenkommentare und Blockkommentare. Zusätzlich gibt es eine spezielle Hashbang-Kommentarsyntax.

### Zeilenkommentare

Der erste Weg ist der `//` Kommentar; dadurch wird der gesamte Text, der ihm folgt, auf derselben Zeile zu einem Kommentar. Zum Beispiel:

```js
function comment() {
  // This is a one line JavaScript comment
  console.log("Hello world!");
}
comment();
```

### Blockkommentare

Der zweite Weg ist der `/* */` Stil, der viel flexibler ist.

Zum Beispiel können Sie ihn in einer einzigen Zeile verwenden:

```js
function comment() {
  /* This is a one line JavaScript comment */
  console.log("Hello world!");
}
comment();
```

Sie können auch mehrzeilige Kommentare schreiben, wie dies:

```js
function comment() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log("Hello world!");
}
comment();
```

Sie können ihn auch in der Mitte einer Zeile verwenden, wenn Sie möchten, obwohl dies Ihren Code schwerer lesbar machen kann, also sollte es mit Vorsicht verwendet werden:

```js
function comment(x) {
  console.log("Hello " + x /* insert the value of x */ + " !");
}
comment("world");
```

Zusätzlich können Sie ihn verwenden, um Code zu deaktivieren und so zu verhindern, dass er ausgeführt wird, indem Sie Code in einem Kommentar umschließen, wie dies:

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

In diesem Fall wird der `console.log()` Aufruf nie ausgeführt, da er sich innerhalb eines Kommentars befindet. Auf diese Weise können beliebig viele Zeilen Code deaktiviert werden.

Blockkommentare, die mindestens ein Zeilenendzeichen enthalten, verhalten sich wie [Zeilenendzeichen](#zeilenendzeichen) bei der [automatischen Semikolon-Einfügung](#automatische_semikolon-einfügung).

### Hashbang-Kommentare

Es gibt eine spezielle dritte Kommentarsyntax, den **Hashbang-Kommentar**. Ein Hashbang-Kommentar verhält sich genau wie ein einzelzeiliger (`//`) Kommentar, außer dass er mit `#!` beginnt und **nur am absoluten Anfang eines Skripts oder Moduls gültig ist**. Beachten Sie auch, dass vor dem `#!` keine Leerzeichen jeglicher Art zulässig sind. Der Kommentar besteht aus allen Zeichen nach `#!` bis zum Ende der ersten Zeile; nur ein solcher Kommentar ist zulässig.

Hashbang-Kommentare in JavaScript ähneln [Shebangs in Unix](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) welche den Pfad zu einem bestimmten JavaScript-Interpreter angeben, den Sie verwenden möchten, um das Skript auszuführen. Bevor der Hashbang-Kommentar standardisiert wurde, war er bereits de-facto in Nicht-Browser-Hosts wie Node.js implementiert, wo er aus dem Quelltext entfernt wurde, bevor er an die Engine übergeben wurde. Ein Beispiel ist wie folgt:

```js
#!/usr/bin/env node

console.log("Hello world");
```

Der JavaScript-Interpreter behandelt es als normalen Kommentar — es hat nur semantische Bedeutung für die Shell, wenn das Skript direkt in einer Shell ausgeführt wird.

> [!WARNING]
> Wenn Sie möchten, dass Skripte direkt in einer Shell-Umgebung ausführbar sind, kodieren Sie sie in UTF-8 ohne ein [BOM](https://en.wikipedia.org/wiki/Byte_order_mark). Obwohl ein BOM keine Probleme für Code verursacht, der in einem Browser ausgeführt wird — da es beim UTF-8-Decoding entfernt wird, bevor der Quelltext analysiert wird — wird eine Unix/Linux-Shell das Hashbang nicht erkennen, wenn es von einem BOM-Zeichen vorangeht.

Sie dürfen den `#!` Kommentarstil nur verwenden, um einen JavaScript-Interpreter anzugeben. In allen anderen Fällen verwenden Sie einfach einen `//` Kommentar (oder einen mehrzeiligen Kommentar).

## Bezeichner

Ein _Bezeichner_ wird verwendet, um einen Wert mit einem Namen zu verknüpfen. Bezeichner können an verschiedenen Stellen verwendet werden:

```js
const decl = 1; // Variable declaration (may also be `let` or `var`)
function fn() {} // Function declaration
const obj = { key: "value" }; // Object keys
// Class declaration
class C {
  #priv = "value"; // Private property
}
lbl: console.log(1); // Label
```

In JavaScript bestehen Bezeichner üblicherweise aus alphanumerischen Zeichen, Unterstrichen (`_`) und Dollarzeichen (`$`). Bezeichner dürfen nicht mit Zahlen beginnen. JavaScript-Bezeichner sind jedoch nicht nur auf {{Glossary("ASCII", "ASCII")}} beschränkt — viele Unicode-Codepunkte sind ebenfalls erlaubt. Nämlich:

- Startzeichen können jedes Zeichen in der [ID_Start](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Start%7D) Kategorie sein, sowie `_` und `$`.
- Nach dem ersten Zeichen können Sie jedes Zeichen in der [ID_Continue](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Continue%7D) Kategorie verwenden, sowie U+200C (ZWNJ) und U+200D (ZWJ).

> [!NOTE]
> Wenn Sie aus irgendeinem Grund einen JavaScript-Quelltext selbst parsen müssen, gehen Sie nicht davon aus, dass alle Bezeichner dem Muster `/[A-Za-z_$][\w$]*/` (d.h. nur ASCII) folgen! Der Bereich der Bezeichner kann durch den regulären Ausdruck `/[$_\p{ID_Start}][$\p{ID_Continue}]*/u` beschrieben werden (ausgenommen Unicode-Escape-Sequenzen).

Zusätzlich erlaubt JavaScript die Verwendung von [Unicode-Escape-Sequenzen](#unicode-escape-sequenzen) in der Form von `\u0000` oder `\u{000000}` in Bezeichnern, die denselben Stringwert wie die tatsächlichen Unicode-Zeichen kodieren. Zum Beispiel sind `你好` und `\u4f60\u597d` dieselben Bezeichner:

```js-nolint
const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello
```

Nicht alle Stellen akzeptieren den vollständigen Bereich der Bezeichner. Bestimmte Syntaxe, wie Funktionsdeklarationen, Funktionsausdrücke und Variabledeklarationen, erfordern die Verwendung von Bezeichnernamen, die keine [reservierten Wörter](#reservierte_wörter) sind.

```js-nolint example-bad
function import() {} // Illegal: import is a reserved word.
```

Am deutlichsten ist, dass private Eigenschaften und Objekteigenschaften reservierte Wörter erlauben.

```js
const obj = { import: "value" }; // Legal despite `import` being reserved
class C {
  #import = "value";
}
```

## Schlüsselwörter

_Schlüsselwörter_ sind Tokens, die wie Bezeichner aussehen, aber besondere Bedeutungen in JavaScript haben. Zum Beispiel gibt das Schlüsselwort [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) vor einer Funktionsdeklaration an, dass die Funktion asynchron ist.

Einige Schlüsselwörter sind _reserviert_, was bedeutet, dass sie nicht als Bezeichner für Variablendeklarationen, Funktionsdeklarationen usw. verwendet werden können. Sie werden oft _reservierte Wörter_ genannt. [Eine Liste dieser reservierten Wörter](#reservierte_wörter) ist unten aufgeführt. Nicht alle Schlüsselwörter sind reserviert — zum Beispiel kann `async` überall als Bezeichner verwendet werden. Einige Schlüsselwörter sind nur _kontextuell reserviert_ — zum Beispiel ist `await` nur innerhalb des Rumpfes einer asynchronen Funktion reserviert, und `let` ist nur im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) reserviert oder in `const` und `let` Deklarationen.

Bezeichner werden immer nach _Stringwert_ verglichen, daher werden Escape-Sequenzen interpretiert. Zum Beispiel ist dies immer noch ein Syntaxfehler:

```js-nolint example-bad
const els\u{65} = 1;
// `els\u{65}` encodes the same identifier as `else`
```

### Reservierte Wörter

Diese Schlüsselwörter können nicht als Bezeichner für Variablen, Funktionen, Klassen usw. irgendwo im JavaScript-Quelle verwendet werden.

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/switch", "case")}}
- {{jsxref("Statements/try...catch", "catch")}}
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/debugger", "debugger")}}
- {{jsxref("Statements/switch", "default")}}
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Statements/do...while", "do")}}
- {{jsxref("Statements/if...else", "else")}}
- {{jsxref("Statements/export", "export")}}
- [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends)
- [`false`](#boolean-literal)
- {{jsxref("Statements/try...catch", "finally")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/if...else", "if")}}
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Operators/in", "in")}}
- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Operators/new", "new")}}
- {{jsxref("Operators/null", "null")}}
- {{jsxref("Statements/return", "return")}}
- {{jsxref("Operators/super", "super")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Operators/this", "this")}}
- {{jsxref("Statements/throw", "throw")}}
- [`true`](#boolean-literal)
- {{jsxref("Statements/try...catch", "try")}}
- {{jsxref("Operators/typeof", "typeof")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Operators/void", "void")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/with", "with")}}

Die folgenden sind nur reserviert, wenn sie im strikten Modus gefunden werden:

- {{jsxref("Statements/let", "let")}} (auch reserviert in `const`, `let` und Klassendeklarationen)
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- {{jsxref("Operators/yield", "yield")}} (auch reserviert in Gerneratorfunktionskörpern)

Die folgenden sind nur reserviert, wenn sie im Modulcode oder im Körper einer asynchronen Funktion gefunden werden:

- [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

### Zukünftige reservierte Wörter

Die folgenden sind als zukünftige Schlüsselwörter durch die ECMAScript-Spezifikation reserviert. Sie haben derzeit keine besondere Funktionalität, aber sie könnten dies zukünftig haben, daher können sie nicht als Bezeichner verwendet werden.

Diese sind immer reserviert:

- `enum`

Die folgenden sind nur reserviert, wenn sie im strikten Modus gefunden werden:

- `implements`
- `interface`
- `package`
- `private`
- `protected`
- `public`

#### Zukünftige reservierte Wörter in älteren Standards

Die folgenden sind als zukünftige Schlüsselwörter durch ältere ECMAScript-Spezifikationen (ECMAScript 1 bis 3) reserviert.

- `abstract`
- `boolean`
- `byte`
- `char`
- `double`
- `final`
- `float`
- `goto`
- `int`
- `long`
- `native`
- `short`
- `synchronized`
- `throws`
- `transient`
- `volatile`

### Bezeichner mit besonderer Bedeutung

Einige Bezeichner haben in bestimmten Kontexten eine spezielle Bedeutung, ohne dass sie irgendwelche reservierten Wörter sind. Sie beinhalten:

- {{jsxref("Functions/arguments", "arguments")}} (kein Schlüsselwort, aber kann im strikten Modus nicht als Bezeichner deklariert werden)
- `as` ([`import * as ns from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import))
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)
- {{jsxref("Global_Objects/eval", "eval")}} (kein Schlüsselwort, aber kann im strikten Modus nicht als Bezeichner deklariert werden)
- `from` ([`import x from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import))
- {{jsxref("Functions/get", "get")}}
- [`of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- {{jsxref("Functions/set", "set")}}

## Literale

> [!NOTE]
> Dieser Abschnitt behandelt Literale, die atomare Tokens sind. [Objektliterale](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Arrayliterale](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation) sind [Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators), die aus einer Reihe von Tokens bestehen.

### Null-Literal

Siehe auch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) für weitere Informationen.

```js-nolint
null
```

### Boolean-Literal

Siehe auch [Boolean-Typ](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type) für weitere Informationen.

```js-nolint
true
false
```

### Numerische Literale

Der [Number](/de/docs/Web/JavaScript/Guide/Data_structures#number_type) Typ und der [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type) Typ verwenden numerische Literale.

#### Dezimal

```js-nolint
1234567890
42
```

Dezimal-Literale können mit einer Null (`0`) beginnen, gefolgt von einer weiteren Dezimalziffer, aber wenn alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies wird als veraltete Syntax angesehen, und Zahlenliterale, die mit `0` beginnen, verursachen im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) einen Syntaxfehler – verwenden Sie stattdessen das Präfix `0o`.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

##### Exponential

Das dezimale Exponential-Literal wird durch das folgende Format angegeben: `beN`; wobei `b` eine Grundzahl (Ganzzahl oder Gleitkommazahl) ist, gefolgt von einem `E` oder `e` Zeichen (was als Separator oder _Exponentenzeichen_ dient) und `N`, das ein _Exponent_ oder _Potenz_ Zahl ist – eine ganze Zahl mit Vorzeichen.

```js-nolint
0e-5   // 0
0e+5   // 0
5e1    // 50
175e-2 // 1.75
1e3    // 1000
1e-3   // 0.001
1E3    // 1000
```

#### Binär

Die Binärzahlensyntax verwendet eine führende Null gefolgt von einem Klein- oder Großbuchstaben "B" (`0b` oder `0B`). Jedes Zeichen nach dem `0b`, das nicht 0 oder 1 ist, beendet die Literalsequenz.

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### Oktal

Die Oktalzahlensyntax verwendet eine führende Null gefolgt von einem Klein- oder Großbuchstaben "O" (`0o` oder `0O)`. Jedes Zeichen nach dem `0o`, das nicht in den Bereich (01234567) fällt, beendet die Literalsequenz.

```js-nolint
0O755 // 493
0o644 // 420
```

#### Hexadezimal

Die hexadezimale Zahlensyntax verwendet eine führende Null gefolgt von einem Klein- oder Großbuchstaben "X" (`0x` oder `0X`). Jedes Zeichen nach dem `0x`, das nicht in den Bereich (0123456789ABCDEF) fällt, beendet die Literalsequenz.

```js-nolint
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

#### BigInt-Literal

Der [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type) Typ ist ein numerischer primitiver Typ in JavaScript, der Ganzzahlen mit beliebiger Genauigkeit darstellen kann. BigInt-Literale werden durch Anhängen von `n` an das Ende einer Ganzzahl erstellt.

```js-nolint
123456789123456789n     // 123456789123456789
0o777777777777n         // 68719476735
0x123456789ABCDEFn      // 81985529216486895
0b11101001010101010101n // 955733
```

BigInt-Literale können nicht mit `0` beginnen, um Verwechslungen mit veralteten Oktalliteralen zu vermeiden.

```js-nolint example-bad
0755n; // SyntaxError: invalid BigInt syntax
```

Für Oktal-`BigInt`-Zahlen verwenden Sie immer Null gefolgt von dem Buchstaben "o" (Groß- oder Kleinbuchstabe):

```js example-good
0o755n;
```

Für weitere Informationen zu `BigInt` siehe auch [JavaScript Datentypen](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type).

#### Numerische Trennzeichen

Um die Lesbarkeit von numerischen Literalen zu verbessern, können Unterstriche (`_`, `U+005F`) als Trennzeichen verwendet werden:

```js-nolint
1_000_000_000_000
1_050.95
0b1010_0001_1000_0101
0o2_2_5_6
0xA0_B0_C0
1_000_000_000_000_000_000_000n
```

Beachten Sie diese Einschränkungen:

```js-nolint example-bad
// More than one underscore in a row is not allowed
100__000; // SyntaxError

// Not allowed at the end of numeric literals
100_; // SyntaxError

// Can not be used after leading 0
0_1; // SyntaxError
```

### Zeichenkettenliterale

Ein [Zeichenketten](/de/docs/Web/JavaScript/Guide/Data_structures#string_type) Literal ist null oder mehr Unicode-Codepunkte, die in einfachen oder doppelten Anführungszeichen eingeschlossen sind. Unicode-Codepunkte können auch durch eine Escape-Sequenz dargestellt werden. Alle Zeichen können wörtlich in einem Zeichenkettenliteral erscheinen, außer diesen Codepunkten:

- U+005C \ (Rückwärtsstrich)
- U+000D \<CR>
- U+000A \<LF>
- Die gleiche Art von Anführungszeichen, die das Zeichenkettenliteral beginnt

Jede Codepunkte können in Form einer Escape-Sequenz erscheinen. Zeichenkettenliterale werden in ECMAScript-Stringwerte ausgewertet. Beim Generieren dieser Stringwerte werden Unicode-Codepunkte in UTF-16 kodiert.

```js-nolint
'foo'
"bar"
```

Die folgenden Unterabschnitte beschreiben verschiedene Escape-Sequenzen (`\` gefolgt von einem oder mehreren Zeichen), die in Zeichenkettenliteralen verfügbar sind. Jede Escape-Sequenz, die nicht unten aufgelistet ist, wird zu einer "Identitäts-Escape", die zum Codepunkt selbst wird. Zum Beispiel ist `\z` dasselbe wie `z`. Es gibt eine veraltete Oktal-Escape-Sequenz-Syntax, die auf der Seite [Veraltete und obsolet Features](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) beschrieben wird. Viele dieser Escape-Sequenzen sind auch in regulären Ausdrücken gültig – siehe [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

#### Escape-Sequenzen

Sonderzeichen können durch Escape-Sequenzen kodiert werden:

| Escape-Sequenz                                              | Unicode-Codepunkt                                   |
| ----------------------------------------------------------- | --------------------------------------------------- |
| `\0`                                                        | null-Zeichen (U+0000 NULL)                          |
| `\'`                                                        | einfacher Anführungszeichen (U+0027 APOSTROPHE)     |
| `\"`                                                        | doppelter Anführungszeichen (U+0022 QUOTATION MARK) |
| `\\`                                                        | Rückwärtsschrägstrich (U+005C REVERSE SOLIDUS)      |
| `\n`                                                        | neue Zeile (U+000A LINE FEED; LF)                   |
| `\r`                                                        | Wagenrücklauf (U+000D CARRIAGE RETURN; CR)          |
| `\v`                                                        | vertikaler Tabulator (U+000B LINE TABULATION)       |
| `\t`                                                        | Tabulator (U+0009 CHARACTER TABULATION)             |
| `\b`                                                        | Rückschritt (U+0008 BACKSPACE)                      |
| `\f`                                                        | Seitenvorschub (U+000C FORM FEED)                   |
| `\` gefolgt von einem [Zeilenendzeichen](#zeilenendzeichen) | leerer String                                       |

Die letzte Escape-Sequenz, `\` gefolgt von einem Zeilenendzeichen, ist nützlich, um ein Zeichenkettenliteral über mehrere Zeilen hinweg zu teilen, ohne dessen Bedeutung zu ändern.

```js
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Stellen Sie sicher, dass es nach dem Rückwärtsschrägstrich kein Leerzeichen oder anderes Zeichen gibt (außer einem Zeilenumbruch), andernfalls funktioniert es nicht. Wenn die nächste Zeile eingerückt ist, sind die zusätzlichen Leerzeichen auch im Wert des Strings vorhanden.

Sie können auch den [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition)-Operator verwenden, um mehrere Strings zusammenzufügen, wie dies:

```js
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Beide oben genannten Methoden führen zu identischen Strings.

#### Hexadezimale Escape-Sequenzen

Hexadezimale Escape-Sequenzen bestehen aus `\x` gefolgt von genau zwei Hexadezimalziffern, die eine Code-Einheit oder einen Codepunkt im Bereich 0x0000 bis 0x00FF darstellen.

```js
"\xA9"; // "©"
```

#### Unicode-Escape-Sequenzen

Eine Unicode-Escape-Sequenz besteht aus genau vier Hexadezimalziffern nach `\u`. Sie repräsentiert eine Code-Einheit in der UTF-16-Codierung. Für Codepunkte U+0000 bis U+FFFF entspricht die Code-Einheit dem Codepunkt. Codepunkte U+10000 bis U+10FFFF erfordern zwei Escape-Sequenzen, die die zwei Code-Einheiten (ein Surrogatpaar) darstellen, die zum Kodieren des Zeichens verwendet werden; das Surrogatpaar unterscheidet sich vom Codepunkt.

Siehe auch {{jsxref("String.fromCharCode()")}} und {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Unicode-Codepunkt-Escapes

Eine Unicode-Codepunkt-Escape besteht aus `\u{`, gefolgt von einem Codepunkt in hexadezimaler Basis, gefolgt von `}`. Der Wert der Hexadezimalziffern muss im Bereich 0 und 0x10FFFF eingeschlossen sein. Codepunkte im Bereich U+10000 bis U+10FFFF müssen nicht als Surrogatpaar dargestellt werden.

Siehe auch {{jsxref("String.fromCodePoint()")}} und {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// the same character represented as a surrogate pair
"\uD87E\uDC04";
```

### Reguläre Ausdruck Literale

Reguläre Ausdruck Literale werden durch zwei Schrägstriche (`/`) eingeklammert. Der Lexer konsumiert alle Zeichen bis zum nächsten nicht-escaped Schrägstrich oder dem Ende der Zeile, es sei denn der Schrägstrich erscheint innerhalb einer Zeichengruppe (`[]`). Einige Zeichen (namentlich diejenigen, die [Bezeichnerteile](#bezeichner) sind) können nach dem schließenden Schrägstrich erscheinen und Flags anzeigen.

Die lexikalische Grammatik ist sehr nachsichtig: nicht alle regulären Ausdruck Literale, die als ein Token identifiziert werden, sind gültige reguläre Ausdrücke.

Siehe auch {{jsxref("RegExp")}} für weitere Informationen.

```js-nolint
/ab+c/g
/[/]/
```

Ein regulärer Ausdruck Literal kann nicht mit zwei Schrägstrichen (`//`) beginnen, da dies ein Zeilenkommentar wäre. Um einen leeren regulären Ausdruck anzugeben, verwenden Sie `/(?:)/`.

### Template-Literale

Ein Template-Literal besteht aus mehreren Tokens: `` `xxx${ `` (Template-Kopf), `}xxx${` (Template-Mitte), und `` }xxx` `` (Template-Ende) sind einzelne Tokens, während jeder Ausdruck dazwischen kommen kann.

Siehe auch [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) für weitere Informationen.

```js-nolint
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag`string text ${expression} string text`
```

## Automatische Semikolon-Einfügung

Einige [JavaScript-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements) verlangen Semikolons (`;`) am Ende. Dazu gehören:

- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- [Ausdrucks-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement)
- [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue), [`break`](/de/docs/Web/JavaScript/Reference/Statements/break), [`return`](/de/docs/Web/JavaScript/Reference/Statements/return), [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)
- Klassen-Felddeklarationen ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_properties))
- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import), [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)

Um die Sprache jedoch zugänglicher und benutzerfreundlicher zu machen, kann JavaScript Semikolons automatisch einfügen, wenn der Token-Stream konsumiert wird, so dass einige ungültige Token-Sequenzen zu einer gültigen Syntax "repariert" werden können. Dieser Schritt erfolgt, nachdem der Programmtext gemäß der lexikalischen Grammatik zu Tokens geparst wurde. Es gibt drei Fälle, in denen Semikolons automatisch eingefügt werden:

1\. Wenn ein Token, das durch die Grammatik nicht erlaubt ist, gefunden wird und es von mindestens einem [Zeilenendzeichen](#zeilenendzeichen) von dem vorherigen Token getrennt ist (einschließlich eines Blockkommentars, der mindestens ein Zeilenendzeichen enthält), oder das Token ist "}", dann wird ein Semikolon vor dem Token eingefügt.

```js-nolint
{ 1
2 } 3

// is transformed by ASI into:

{ 1
;2 ;} 3;

// Which is valid grammar encoding three statements,
// each consisting of a number literal
```

Die abschließende ")" von [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) wird ebenfalls als Sonderfall durch diese Regel berücksichtigt.

```js-nolint
do {
  // ...
} while (condition) /* ; */ // ASI here
const a = 1
```

Jedoch werden Semikolons nicht eingefügt, wenn das Semikolon dann der Trennzeichen im Kopf der [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Anweisung wird.

```js-nolint example-bad
for (
  let a = 1 // No ASI here
  a < 10 // No ASI here
  a++
) {}
```

Semikolons werden auch nie als [leere Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Empty) eingefügt. Zum Beispiel, im untenstehenden Code, wenn ein Semikolon nach ")" eingefügt wird, dann wäre der Code gültig, mit einer leeren Anweisung als `if`-Rumpf und der `const`-Deklaration als separate Anweisung. Aber weil automatisch eingefügte Semikolons keine leeren Anweisungen werden können, wird dies dazu führen, dass eine [Deklaration](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations) zum Rumpf der `if`-Anweisung wird, was nicht gültig ist.

```js-nolint example-bad
if (Math.random() > 0.5)
const x = 1 // SyntaxError: Unexpected token 'const'
```

2\. Wenn das Ende des Eingabestreams von Tokens erreicht wird und der Parser nicht in der Lage ist, den einzelnen Eingabestream als ein vollständiges Programm zu parsen, wird ein Semikolon am Ende eingefügt.

```js-nolint
const a = 1 /* ; */ // ASI here
```

Diese Regel ergänzt die vorherige Regel, speziell für den Fall, dass es keinen "störenden Token" gibt, sondern das Ende des Eingabestreams.

3\. Wenn die Grammatik an einem bestimmten Ort Zeilenendzeichen verbietet, aber ein Zeilenendzeichen gefunden wird, wird ein Semikolon eingefügt. Diese Orte beinhalten:

- `expr <hier> ++`, `expr <hier> --`
- `continue <hier> lbl`
- `break <hier> lbl`
- `return <hier> expr`
- `throw <hier> expr`
- `yield <hier> expr`
- `yield <hier> * expr`
- `(param) <hier> => {}`
- `async <hier> function`, `async <hier> prop()`, `async <hier> function*`, `async <hier> *prop()`, `async <hier> (param) <hier> => {}`

Hier wird [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment) nicht als Nachstellungsoperator betrachtet, der auf die Variable `b` angewendet wird, da zwischen `b` und `++` ein Zeilenendzeichen auftritt.

```js-nolint
a = b
++c

// is transformed by ASI into

a = b;
++c;
```

Hier gibt die `return`-Anweisung `undefined` zurück und das `a + b` wird zu einer nicht erreichbaren Anweisung.

```js-nolint
return
a + b

// is transformed by ASI into

return;
a + b;
```

Beachten Sie, dass ASI nur ausgelöst wird, wenn ein Zeilenumbruch Tokens trennt, die sonst eine ungültige Syntax erzeugen würden. Wenn das nächste Token als Teil einer gültigen Struktur geparst werden kann, würden keine Semikolons eingefügt. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()

const b = 1
[1, 2, 3].forEach(console.log)
```

Da `()` als Funktionsaufruf gesehen werden kann, würde es normalerweise ASI nicht auslösen. Ebenso könnte `[]` ein Zugriffsoperator sein. Der obige Code ist gleichbedeutend mit:

```js-nolint example-bad
const a = 1(1).toString();

const b = 1[1, 2, 3].forEach(console.log);
```

Dies ist zufällig gültige Syntax. `1[1, 2, 3]` ist ein [Eigenschafts-Accessoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) mit einem [Komma](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator)-verknüpften Ausdruck. Daher würden Sie Fehler wie "1 ist keine Funktion" und "Eigenschaften von undefined (lesen 'forEach')" können nicht gelesen werden, wenn der Code ausgeführt wird.

Innerhalb von Klassen können Klassenfelder und Generator-Methoden ebenfalls eine Falle sein.

```js-nolint example-bad
class A {
  a = 1
  *gen() {}
}
```

Es wird angesehen als:

```js-nolint example-bad
class A {
  a = 1 * gen() {}
}
```

Und daher wird ein Syntaxfehler um `{` herum auftreten.

Es gibt die folgenden Faustregeln im Umgang mit ASI, wenn Sie einen stil ohne Semikolons durchsetzen möchten:

- Schreiben Sie das Nachstellen von `++` und `--` in derselben Zeile wie deren Operanden.

  ```js-nolint example-bad
  const a = b
  ++
  console.log(a) // ReferenceError: Invalid left-hand side expression in prefix operation
  ```

  ```js-nolint example-good
  const a = b++
  console.log(a)
  ```

- Die Ausdrücke nach `return`, `throw` oder `yield` sollten in derselben Zeile wie das Schlüsselwort stehen.

  ```js-nolint example-bad
  function foo() {
    return
      1 + 1 // Returns undefined; 1 + 1 is ignored
  }
  ```

  ```js-nolint example-good
  function foo() {
    return 1 + 1
  }

  function foo() {
    return (
      1 + 1
    )
  }
  ```

- In gleicher Weise sollte die Label-Identifikator nach `break` oder `continue` in derselben Zeile wie das Schlüsselwort stehen.

  ```js-nolint example-bad
  outerBlock: {
    innerBlock: {
      break
        outerBlock // SyntaxError: Illegal break statement
    }
  }
  ```

  ```js-nolint example-good
  outerBlock: {
    innerBlock: {
      break outerBlock
    }
  }
  ```

- Der `=>` eines Pfeilfunktions sollte in derselben Zeile wie das Ende der Parameter stehen.

  ```js-nolint example-bad
  const foo = (a, b)
    => a + b
  ```

  ```js-nolint example-good
  const foo = (a, b) =>
    a + b
  ```

- Der `async` von asynchronen Funktionen, Methoden usw. darf nicht direkt von einem Zeilenendzeichen gefolgt werden.

  ```js-nolint example-bad
  async
  function foo() {}
  ```

  ```js-nolint example-good
  async function
  foo() {}
  ```

- Wenn eine Zeile mit einem `(`, `[`, `` ` ``, `+`, `-`, `/` (wie in regulären Ausdrucksliteralen) beginnt, stellen Sie ein Semikolon davor oder enden Sie die vorherige Zeile mit einem Semikolon.

  ```js-nolint example-bad
  // The () may be merged with the previous line as a function call
  (() => {
    // ...
  })()

  // The [ may be merged with the previous line as a property access
  [1, 2, 3].forEach(console.log)

  // The ` may be merged with the previous line as a tagged template literal
  `string text ${data}`.match(pattern).forEach(console.log)

  // The + may be merged with the previous line as a binary + expression
  +a.toString()

  // The - may be merged with the previous line as a binary - expression
  -a.toString()

  // The / may be merged with the previous line as a division expression
  /pattern/.exec(str).forEach(console.log)
  ```

  ```js-nolint example-good
  ;(() => {
    // ...
  })()
  ;[1, 2, 3].forEach(console.log)
  ;`string text ${data}`.match(pattern).forEach(console.log)
  ;+a.toString()
  ;-a.toString()
  ;/pattern/.exec(str).forEach(console.log)
  ```

- Klassenfelder sollten vorzugsweise immer mit Semikolons beendet werden — zusätzlich zur vorherigen Regel (die eine Felddeklaration gefolgt von einer [berechneten Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) einschließt, da letztere mit `[` beginnt), sind Semikolons auch erforderlich zwischen einer Felddeklaration und einer Generator-Methode.

  ```js-nolint example-bad
  class A {
    a = 1
    [b] = 2
    *gen() {} // Seen as a = 1[b] = 2 * gen() {}
  }
  ```

  ```js-nolint example-good
  class A {
    a = 1;
    [b] = 2;
    *gen() {}
  }
  ```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grammatik und Typen](/de/docs/Web/JavaScript/Guide/Grammar_and_types) Leitfaden
- [Mikro-Feature von ES6, jetzt in Firefox Aurora und Nightly: binäre und oktale Zahlen](https://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/) von Jeff Walden (2013)
- [JavaScript-Zeichen-Escape-Sequenzen](https://mathiasbynens.be/notes/javascript-escapes) von Mathias Bynens (2011)

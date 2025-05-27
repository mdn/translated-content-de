---
title: Lexikalische Grammatik
slug: Web/JavaScript/Reference/Lexical_grammar
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{jsSidebar("Mehr")}}

Diese Seite beschreibt die lexikalische Grammatik von JavaScript. JavaScript-Quelltext ist lediglich eine Folge von Zeichen – damit der Interpreter ihn versteht, muss der Text zunächst in eine strukturiertere Darstellung _geparst_ werden. Der erste Schritt des Parsens wird [lexikalische Analyse](https://de.wikipedia.org/wiki/Lexikalische Analyse) genannt, bei der der Text von links nach rechts gescannt und in eine Folge von einzelnen, atomaren Eingabeelementen umgewandelt wird. Einige Eingabeelemente sind für den Interpreter unbedeutend und werden nach diesem Schritt entfernt – sie umfassen [Leerzeichen](#leerzeichen) und [Kommentare](#kommentare). Die anderen, einschließlich [Bezeichner](#bezeichner), [Schlüsselwörter](#schlüsselwörter), [Literale](#literale) und Interpunktionszeichen (hauptsächlich [Operatoren](/de/docs/Web/JavaScript/Reference/Operators)), werden für die weitere syntaktische Analyse verwendet. [Zeilenbegrenzungen](#zeilenbegrenzer) und mehrzeilige Kommentare sind ebenfalls syntaktisch unbedeutend, sie lenken jedoch den Prozess der [automatischen Einfügung von Semikolons](#automatische_semikolon-einfügung), um bestimmte ungültige Token-Sequenzen gültig zu machen.

## Formatierungskontrollzeichen

Formatierungskontrollzeichen haben keine visuelle Darstellung, werden jedoch zur Steuerung der Interpretation des Textes verwendet.

| Code-Punkt | Name                           | Abkürzung | Beschreibung                                                                                                                                                                                                                    |
| ---------- | ------------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| U+200C     | Breitenloses Verbindungsverbot | \<ZWNJ>   | Zwischen Zeichen platziert, um zu verhindern, dass sie in bestimmten Sprachen zu Ligaturen verbunden werden ([Wikipedia](https://de.wikipedia.org/wiki/Schmuckloses_Verbindungsverbot)).                                        |
| U+200D     | Breitenloser Verbindungsstrich | \<ZWJ>    | Zwischen Zeichen platziert, die normalerweise nicht verbunden würden, um die Zeichen in bestimmten Sprachen in ihrer verbundenen Form darzustellen ([Wikipedia](https://de.wikipedia.org/wiki/Schmuckloser_Verbindungsstrich)). |
| U+FEFF     | Byte-Order-Marke               | \<BOM>    | Wird am Anfang des Skripts verwendet, um es als Unicode zu markieren und die Erkennung der Textcodierung und der Byte-Reihenfolge zu ermöglichen ([Wikipedia](https://de.wikipedia.org/wiki/ByteOrderMarke)).                   |

Im JavaScript-Quelltext werden \<ZWNJ> und \<ZWJ> als [Bezeichner](#bezeichner)-Teile behandelt, während \<BOM> (auch ein nicht trennendes Leerzeichen \<ZWNBSP> genannt, wenn es nicht am Anfang des Textes steht) als [Leerzeichen](#leerzeichen) behandelt wird.

## Leerzeichen

{{Glossary("Whitespace", "Leerzeichen")}} verbessern die Lesbarkeit von Quelltext und trennen Tokens voneinander. Diese Zeichen sind normalerweise nicht notwendig für die Funktionalität des Codes. [Minification Tools](<https://de.wikipedia.org/wiki/Minifikation_(Programmierung)>) werden oft verwendet, um Leerzeichen zu entfernen, um die Datenmenge zu reduzieren, die übertragen werden muss.

| Code-Punkt | Name                                      | Abkürzung | Beschreibung                                                                                            | Escape-Sequenz |
| ---------- | ----------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------- | -------------- |
| U+0009     | Zeichentabulator                          | \<TAB>    | Horizontaler Tabulator                                                                                  | \t             |
| U+000B     | Zeilenüberlauf                            | \<VT>     | Vertikaler Tabulator                                                                                    | \v             |
| U+000C     | Seitenvorschub                            | \<FF>     | Steuerzeichen für Seitenumbrüche ([Wikipedia](https://de.wikipedia.org/wiki/Seitenvorschubskontrolle)). | \f             |
| U+0020     | Leerzeichen                               | \<SP>     | Normaler Leerraum                                                                                       |                |
| U+00A0     | Geschützter Raum                          | \<NBSP>   | Normaler Leerraum, jedoch kein Punkt, an dem eine Zeile umbrechen kann                                  |                |
| U+FEFF     | Breitenloses nicht trennbares Leerzeichen | \<ZWNBSP> | Wenn nicht am Anfang eines Skripts, ist das BOM-Markierzeichen ein normales Leerzeichen.                |                |
| Andere     | Andere Unicode-Leerzeichen                | \<USP>    | [Zeichen in der "Space_Separator" allgemeinen Kategorie][space separator set]                           |                |

[space separator set]: https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D

> [!NOTE]
> Von jenen [Zeichen mit der Eigenschaft "White_Space" aber nicht in der allgemeinen Kategorie "Space_Separator"](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BWhite_Space%7D%26%5CP%7BGeneral_Category%3DSpace_Separator%7D) werden U+0009, U+000B und U+000C in JavaScript weiterhin als White Space behandelt; U+0085 NEXT LINE hat keine besondere Rolle; andere bilden die Menge an [Zeilenendzeichen](#zeilenbegrenzer).

> [!NOTE]
> Änderungen am von der JavaScript-Engine verwendeten Unicode-Standard können das Verhalten von Programmen beeinflussen. Zum Beispiel aktualisierte ES2016 den verweisenden Unicode-Standard von 5.1 auf 8.0.0, wodurch U+180E MONGOLIAN VOWEL SEPARATOR von der Kategorie "Space_Separator" zur Kategorie "Format (Cf)" verschoben wurde und es zu einem Nicht-Leerzeichen wurde. Folglich änderte sich das Ergebnis von [`"\u180E".trim().length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim) von `0` auf `1`.

## Zeilenbegrenzer

Zusätzlich zu den [Leerzeichen](#leerzeichen)-Zeichen werden Zeilenbegrenzer verwendet, um die Lesbarkeit des Quelltextes zu verbessern. In einigen Fällen können Zeilenbegrenzer jedoch die Ausführung von JavaScript-Code beeinflussen, da es ein paar Stellen gibt, an denen sie verboten sind. Zeilenbegrenzer beeinflussen auch den Prozess der [automatischen Einfügung von Semikolons](#automatische_semikolon-einfügung).

Außerhalb des Kontexts der lexikalischen Grammatik werden Leerzeichen und Zeilenbegrenzer oft vermischt. Beispielsweise entfernt {{jsxref("String.prototype.trim()")}} alle Leerzeichen und Zeilenbegrenzer vom Anfang und Ende eines Strings. Die `\s` [Zeichenklassen-Fluchtsequenz](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) in regulären Ausdrücken passt zu allen Leerzeichen und Zeilenbegrenzern.

Nur die folgenden Unicode-Code-Punkte werden in ECMAScript als Zeilenbegrenzer behandelt, andere zeilenbrechende Zeichen werden als Leerzeichen behandelt (zum Beispiel wird Next Line, NEL, U+0085 als Leerzeichen betrachtet).

| Code-Punkt | Name           | Abkürzung | Beschreibung                                                | Escape-Sequenz |
| ---------- | -------------- | --------- | ----------------------------------------------------------- | -------------- |
| U+000A     | Zeilenvorschub | \<LF>     | Neue Zeilencharakter in UNIX-Systemen.                      | \n             |
| U+000D     | Wagenrücklauf  | \<CR>     | Neue Zeilencharakter in Commodore- und frühen Mac-Systemen. | \r             |
| U+2028     | Zeilentrenner  | \<LS>     | [Wikipedia](https://de.wikipedia.org/wiki/Zeilenumbruch)    |                |
| U+2029     | Absatztrenner  | \<PS>     | [Wikipedia](https://de.wikipedia.org/wiki/Zeilenumbruch)    |                |

## Kommentare

Kommentare dienen dazu, Hinweise, Anmerkungen, Vorschläge oder Warnungen in JavaScript-Code einzufügen. Dies kann ihn lesbarer und verständlicher machen. Sie können auch verwendet werden, um Code zu deaktivieren, damit er nicht ausgeführt wird; dies kann ein wertvolles Debugging-Tool sein.

JavaScript bietet zwei seit langem bestehende Möglichkeiten, Kommentare in den Code einzufügen: Zeilenkommentare und Blockkommentare. Darüber hinaus gibt es eine spezielle Hashbang-Kommentarsyntax.

### Zeilenkommentare

Die erste Möglichkeit ist der `//` Kommentar; dieser macht den gesamten Text, der ihm in derselben Zeile folgt, zu einem Kommentar. Zum Beispiel:

```js
function comment() {
  // This is a one line JavaScript comment
  console.log("Hello world!");
}
comment();
```

### Blockkommentare

Die zweite Möglichkeit ist der `/* */` Stil, der flexibler ist.

Zum Beispiel kann dieser in einer einzelnen Zeile verwendet werden:

```js
function comment() {
  /* This is a one line JavaScript comment */
  console.log("Hello world!");
}
comment();
```

Es können auch mehrzeilige Kommentare erstellt werden, wie dieser:

```js
function comment() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log("Hello world!");
}
comment();
```

Sie können ihn auch mitten in einer Zeile verwenden, obwohl dies den Code schwerer lesbar machen kann, daher sollte es mit Vorsicht verwendet werden:

```js
function comment(x) {
  console.log("Hello " + x /* insert the value of x */ + " !");
}
comment("world");
```

Darüber hinaus können Sie ihn verwenden, um Code zu deaktivieren, um zu verhindern, dass er ausgeführt wird, indem Sie den Code in einen Kommentar einschließen, wie hier:

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

In diesem Fall wird der Aufruf von `console.log()` nie ausgeführt, da er sich innerhalb eines Kommentars befindet. Jede Anzahl von Codezeilen kann auf diese Weise deaktiviert werden.

Blockkommentare, die mindestens einen Zeilenbegrenzer enthalten, verhalten sich in [automatische Semikolon-Einfügung](#automatische_semikolon-einfügung) wie [Zeilenbegrenzer](#zeilenbegrenzer).

### Hashbang-Kommentare

Es gibt eine spezielle dritte Kommentarsyntax, den **Hashbang-Kommentar**. Ein Hashbang-Kommentar verhält sich genau wie ein Zeilenkommentar (`//`), außer dass er mit `#!` beginnt und **nur am absoluten Anfang eines Skripts oder Moduls gültig ist**. Beachten Sie auch, dass vor dem `#!` keine Art von Leerzeichen erlaubt ist. Der Kommentar besteht aus allen Zeichen nach `#!` bis zum Ende der ersten Zeile; nur ein solcher Kommentar ist erlaubt.

Hashbang-Kommentare in JavaScript ähneln [Shebangs in Unix](<https://de.wikipedia.org/wiki/Shebang_(Unix)>), die den Pfad zu einem bestimmten JavaScript-Interpreter angeben, den Sie zur Ausführung des Skripts verwenden möchten. Bevor der Hashbang-Kommentar standardisiert wurde, war er bereits in nicht-Browser-Hosts wie Node.js implementiert, wo er vor der Übergabe an die Engine aus dem Quelltext entfernt wurde. Ein Beispiel ist wie folgt:

```js
#!/usr/bin/env node

console.log("Hello world");
```

Der JavaScript-Interpreter behandelt ihn als normalen Kommentar — er hat nur eine semantische Bedeutung für die Shell, wenn das Skript direkt in einer Shell ausgeführt wird.

> [!WARNING]
> Wenn Sie möchten, dass Skripte direkt in einer Shell-Umgebung ausführbar sind, kodieren Sie sie in UTF-8 ohne eine [BOM](https://de.wikipedia.org/wiki/ByteOrderMarke). Obwohl eine BOM im Browser keine Probleme für den Code verursacht — da sie beim UTF-8-Decodieren entfernt wird, bevor der Quelltext analysiert wird — wird eine Unix/Linux-Shell den Hashbang nicht erkennen, wenn er von einem BOM-Zeichen gefolgt wird.

Sie sollten den `#!` Kommentarstil nur verwenden, um einen JavaScript-Interpreter anzugeben. In allen anderen Fällen verwenden Sie einfach einen `//`-Kommentar (oder einen mehrzeiligen Kommentar).

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

In JavaScript bestehen Bezeichner meist aus alphanumerischen Zeichen, Unterstrichen (`_`) und Dollarzeichen (`$`). Bezeichner dürfen nicht mit Zahlen beginnen. Bezeichner in JavaScript sind jedoch nicht nur auf {{Glossary("ASCII", "ASCII")}} beschränkt – viele Unicode-Codepunkte sind ebenfalls erlaubt. Nämlich:

- Startzeichen können jedes Zeichen in der [ID_Start](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Start%7D) Kategorie plus `_` und `$` sein.
- Nach dem ersten Zeichen können Sie jedes Zeichen in der [ID_Continue](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Continue%7D) Kategorie plus U+200C (ZWNJ) und U+200D (ZWJ) verwenden.

> [!NOTE]
> Wenn Sie aus irgendeinem Grund JavaScript-Quellcode selbst parsen müssen, gehen Sie nicht davon aus, dass alle Bezeichner dem Muster `/[A-Za-z_$][\w$]*/` (d.h. nur ASCII) folgen! Der Bereich der Bezeichner kann durch das Regex `/[$_\p{ID_Start}][$\p{ID_Continue}]*/u` (ohne Unicode-Escape-Sequenzen) beschrieben werden.

Darüber hinaus erlaubt JavaScript die Verwendung von [Unicode-Escape-Sequenzen](#unicode-escape-sequenzen) in Form von `\u0000` oder `\u{000000}` in Bezeichnern, die denselben Zeichenfolgenwert wie die tatsächlichen Unicode-Zeichen codieren. Zum Beispiel sind `你好` und `\u4f60\u597d` dieselben Bezeichner:

```js-nolint
const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello
```

Nicht alle Stellen akzeptieren den vollen Bereich von Bezeichnern. Bestimmte Syntaxen, wie Funktionsdeklarationen, Funktionsausdrücke und Variablendeklarationen, erfordern Bezeichnernamen, die keine [reservierten Wörter](#reservierte_wörter) sind.

```js-nolint example-bad
function import() {} // Illegal: import is a reserved word.
```

Am bemerkenswertesten ist, dass private Eigenschaften und Objekteigenschaften reservierte Wörter erlauben.

```js
const obj = { import: "value" }; // Legal despite `import` being reserved
class C {
  #import = "value";
}
```

## Schlüsselwörter

_Schlüsselwörter_ sind Tokens, die wie Bezeichner aussehen, jedoch in JavaScript spezielle Bedeutungen haben. Zum Beispiel zeigt das Schlüsselwort [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) vor einer Funktionsdeklaration an, dass die Funktion asynchron ist.

Einige Schlüsselwörter sind _reserviert_, was bedeutet, dass sie nicht als Bezeichner für Variablendeklarationen, Funktionsdeklarationen usw. verwendet werden können. Sie werden oft als _reservierte Wörter_ bezeichnet. [Eine Liste dieser reservierten Wörter](#reservierte_wörter) wird unten bereitgestellt. Nicht alle Schlüsselwörter sind reserviert – zum Beispiel kann `async` überall als Bezeichner verwendet werden. Einige Schlüsselwörter sind nur _kontextuell reserviert_ – zum Beispiel ist `await` nur innerhalb des Körpers einer asynchronen Funktion reserviert und `let` ist nur im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)-Code reserviert oder `const`- und `let`-Deklarationen.

Bezeichner werden immer nach _Stringwert_ verglichen, daher werden Escape-Sequenzen interpretiert. Zum Beispiel ist dies weiterhin ein Syntaxfehler:

```js-nolint example-bad
const els\u{65} = 1;
// `els\u{65}` encodes the same identifier as `else`
```

### Reservierte Wörter

Diese Schlüsselwörter können nirgendwo in JavaScript-Quelltext als Bezeichner für Variablen, Funktionen, Klassen usw. verwendet werden.

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

Die folgenden sind nur reserviert, wenn sie in Strict-Modus-Code gefunden werden:

- {{jsxref("Statements/let", "let")}} (auch reserviert in `const`, `let` und Klassendeklarationen)
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- {{jsxref("Operators/yield", "yield")}} (auch reserviert in Generator-Funktionsblöcken)

Die folgenden sind nur reserviert, wenn sie in Modulcode oder in asynchronen Funktionsblöcken gefunden werden:

- [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

### Zukünftige reservierte Wörter

Die folgenden sind als zukünftige Schlüsselwörter von der ECMAScript-Spezifikation reserviert. Sie haben derzeit keine spezielle Funktionalität, aber sie könnten es in Zukunft haben, daher können sie nicht als Bezeichner verwendet werden.

Diese sind immer reserviert:

- `enum`

Die folgenden sind nur reserviert, wenn sie in Strict-Modus-Code gefunden werden:

- `implements`
- `interface`
- `package`
- `private`
- `protected`
- `public`

#### Zukünftige reservierte Wörter in älteren Standards

Die folgenden sind als zukünftige Schlüsselwörter von älteren ECMAScript-Spezifikationen (ECMAScript 1 bis 3) reserviert.

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

### Bezeichner mit speziellen Bedeutungen

Einige Bezeichner haben in einigen Kontexten eine spezielle Bedeutung, ohne reservierte Wörter zu sein. Diese umfassen:

- {{jsxref("Functions/arguments", "arguments")}} (kein Schlüsselwort, kann aber nicht im Strict-Modus als Bezeichner deklariert werden)
- `as` ([`import * as ns from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import))
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)
- {{jsxref("Global_Objects/eval", "eval")}} (kein Schlüsselwort, aber kann nicht im Strict-Modus als Bezeichner deklariert werden)
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

Siehe auch [Boolescher Typ](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type) für weitere Informationen.

```js-nolint
true
false
```

### Numerische Literale

Die Typen [Number](/de/docs/Web/JavaScript/Guide/Data_structures#number_type) und [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type) verwenden numerische Literale.

#### Dezimal

```js-nolint
1234567890
42
```

Dezimalzahlen können mit einer Null (`0`) beginnen, gefolgt von einer anderen Dezimalstelle, aber wenn alle Stellen nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies wird als veraltete Syntax betrachtet, und Zahlenliterale mit Präfix `0`, ob sie als Oktal oder Dezimal interpretiert werden, verursachen im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) einen Syntaxfehler — daher verwenden Sie stattdessen das Präfix `0o`.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

##### Exponential

Das exponentielle Dezimalliteral wird durch das folgende Format angegeben: `beN`; wobei `b` eine Grundzahl (ganz oder gleitend) ist, gefolgt von einem `E`- oder `e`-Zeichen (das als Trennzeichen oder _Exponentenindikator_ dient) und `N`, welches eine _Exponent_ oder _Potenz_ Zahl ist – eine signierte Ganzzahl.

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

Die Binärzahlsyntax verwendet eine führende Null, gefolgt von einem lateinischen Klein- oder Großbuchstaben "B" (`0b` oder `0B`). Jedes Zeichen nach dem `0b`, das nicht 0 oder 1 ist, beendet die Literalsequenz.

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### Oktal

Die Oktalzahlsyntax verwendet eine führende Null, gefolgt von einem lateinischen Klein- oder Großbuchstaben "O" (`0o` oder `0O`). Jedes Zeichen nach dem `0o`, das außerhalb des Bereichs (01234567) liegt, beendet die Literalsequenz.

```js-nolint
0O755 // 493
0o644 // 420
```

#### Hexadezimal

Die Hexadezimalzahlsyntax verwendet eine führende Null, gefolgt von einem lateinischen Klein- oder Großbuchstaben "X" (`0x` oder `0X`). Jedes Zeichen nach dem `0x`, das außerhalb des Bereichs (0123456789ABCDEF) liegt, beendet die Literalsequenz.

```js-nolint
0xFFFFFFFFFFFFF // 4503599627370495
0xabcdef123456  // 188900967593046
0XA             // 10
```

#### BigInt-Literal

Der [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type) Typ ist ein numerisches Elementarobjekt in JavaScript, das ganze Zahlen mit beliebiger Präzision darstellen kann. BigInt-Literale werden erstellt, indem `n` an das Ende einer ganzen Zahl angehängt wird.

```js-nolint
123456789123456789n     // 123456789123456789
0o777777777777n         // 68719476735
0x123456789ABCDEFn      // 81985529216486895
0b11101001010101010101n // 955733
```

BigInt-Literale können nicht mit `0` beginnen, um Verwechslungen mit veralteten Oktal-Literalen zu vermeiden.

```js-nolint example-bad
0755n; // SyntaxError: invalid BigInt syntax
```

Für oktale `BigInt`-Zahlen verwenden Sie immer eine Null, gefolgt von dem Buchstaben "o" (groß oder klein):

```js example-good
0o755n;
```

Für weitere Informationen über `BigInt` siehe auch [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type).

#### Numerische Trennzeichen

Um die Lesbarkeit von numerischen Literalen zu verbessern, können Unterstriche (`_`, U+005F) als Trennzeichen verwendet werden:

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

### String-Literale

Ein [String](/de/docs/Web/JavaScript/Guide/Data_structures#string_type) Literal besteht aus null oder mehr Unicode-Code-Punkten, die in einfachen oder doppelten Anführungszeichen eingefasst sind. Unicode-Code-Punkte können auch durch eine Escape-Sequenz dargestellt werden. Alle Code-Punkte können buchstäblich in einem String-Literal erscheinen, mit Ausnahme dieser Code-Punkte:

- U+005C \ (Backslash)
- U+000D \<CR>
- U+000A \<LF>
- Die gleiche Art von Anführungszeichen, die das String-Literal beginnt

Jede Code-Punkte können in Form einer Escape-Sequenz erscheinen. String-Literale werden zu ECMAScript-String-Werten bewertet. Bei der Erstellung dieser String-Werte werden Unicode-Code-Punkte als UTF-16 kodiert.

```js-nolint
'foo'
"bar"
```

Die folgenden Unterabschnitte beschreiben verschiedene Escape-Sequenzen (`\`, gefolgt von einem oder mehreren Zeichen), die in String-Literalen verfügbar sind. Jede unten nicht aufgeführte Escape-Sequenz wird zu einer "Identitäts-Escape", die selbst zum Code-Punkt wird. Zum Beispiel ist `\z` dasselbe wie `z`. Es gibt eine veraltete Oktal-Escape-Sequenz-Syntax, die auf der Seite [Veraltete und obsoleten Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) beschrieben wird. Viele dieser Escape-Sequenzen sind auch in regulären Ausdrücken gültig – siehe [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

#### Escape-Sequenzen

Spezialzeichen können mithilfe von Escape-Sequenzen codiert werden:

| Escape-Sequenz                                          | Unicode-Code-Punkt                                 |
| ------------------------------------------------------- | -------------------------------------------------- |
| `\0`                                                    | Null-Zeichen (U+0000 NULL)                         |
| `\'`                                                    | Einfache Anführungszeichen (U+0027 APOSTROPHE)     |
| `\"`                                                    | Doppelte Anführungszeichen (U+0022 QUOTATION MARK) |
| `\\`                                                    | Backslash (U+005C REVERSE SOLIDUS)                 |
| `\n`                                                    | Neue Zeile (U+000A LINE FEED; LF)                  |
| `\r`                                                    | Wagenrücklauf (U+000D CARRIAGE RETURN; CR)         |
| `\v`                                                    | Vertikaler Tabulator (U+000B LINE TABULATION)      |
| `\t`                                                    | Tab (U+0009 CHARACTER TABULATION)                  |
| `\b`                                                    | Rückschritt (U+0008 BACKSPACE)                     |
| `\f`                                                    | Seitenvorschub (U+000C FORM FEED)                  |
| `\` gefolgt von einem [Zeilenumbruch](#zeilenbegrenzer) | Leerer String                                      |

Die letzte Escape-Sequenz, `\`, gefolgt von einem Zeilenumbruch, ist nützlich, um ein String-Literal über mehrere Zeilen zu verteilen, ohne seine Bedeutung zu ändern.

```js
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Stellen Sie sicher, dass hinter dem Backslash (aber vor dem Zeilenumbruch) keine Leerzeichen oder andere Zeichen stehen, sonst funktioniert es nicht. Wenn die nächste Zeile eingerückt ist, werden die zusätzlichen Leerzeichen ebenfalls im String-Wert vorhanden sein.

Sie können auch den [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition) Operator verwenden, um mehrere Strings zusammenzufügen, wie folgt:

```js
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Beide der oben genannten Methoden erzeugen identische Strings.

#### Hexadezimale Escape-Sequenzen

Hexadezimale Escape-Sequenzen bestehen aus `\x`, gefolgt von genau zwei Hexadezimalziffern, die eine Code-Einheit oder einen Code-Punkt im Bereich 0x0000 bis 0x00FF darstellen.

```js
"\xA9"; // "©"
```

#### Unicode-Escape-Sequenzen

Eine Unicode-Escape-Sequenz besteht aus genau vier Hexadezimalziffern nach `\u`. Sie stellt eine Code-Einheit in der UTF-16-Kodierung dar. Für Code-Punkte U+0000 bis U+FFFF ist die Code-Einheit gleich dem Code-Punkt. Code-Punkte U+10000 bis U+10FFFF erfordern zwei Escape-Sequenzen, die die zwei Code-Einheiten (ein Surrogate-Paar) darstellen, die verwendet werden, um das Zeichen zu kodieren; das Surrogate-Paar ist vom Code-Punkt verschieden.

Siehe auch {{jsxref("String.fromCharCode()")}} und {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Unicode-Code-Punkt-Escape

Ein Unicode-Code-Punkt-Escape besteht aus `\u{`, gefolgt von einem Code-Punkt in Hexadezimalbasis, gefolgt von `}`. Der Wert der Hexadezimalstellen muss im Bereich 0 bis 0x10FFFF einschließlich liegen. Code-Punkte im Bereich U+10000 bis U+10FFFF müssen nicht als Surrogate-Paar dargestellt werden.

Siehe auch {{jsxref("String.fromCodePoint()")}} und {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// the same character represented as a surrogate pair
"\uD87E\uDC04";
```

### Literale für reguläre Ausdrücke

Literale für reguläre Ausdrücke werden von zwei Schrägstrichen (`/`) eingeschlossen. Der Lexer konsumiert alle Zeichen bis zum nächsten unmaskierten Schrägstrich oder das Zeilenende, es sei denn, der Schrägstrich erscheint innerhalb einer Zeichenklasse (`[]`). Einige Zeichen (nämlich solche, die [Bezeichner-Teile](#bezeichner) sind) können nach dem abschließenden Schrägstrich erscheinen und stehen für Flags.

Die lexikalische Grammatik ist sehr nachsichtig: Nicht alle regulären Ausdrucksliterale, die als ein Token identifiziert werden, sind gültige reguläre Ausdrücke.

Siehe auch {{jsxref("RegExp")}} für weitere Informationen.

```js
/ab+c/g;
/[/]/;
```

Ein regulärer Ausdruck Literal kann nicht mit zwei Schrägstrichen (`//`) beginnen, da dies ein Zeilenkommentar wäre. Um einen leeren regulären Ausdruck anzugeben, verwenden Sie `/(?:)/`.

### Template-Literale

Ein Template Literal besteht aus mehreren Tokens: `` `xxx${ `` (Template-Kopf), `}xxx${` (Template-Mitte) und `` }xxx` `` (Template-Schwanz) sind einzelne Tokens, während dazwischen beliebige Ausdrücke stehen können.

Siehe auch [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) für weitere Informationen.

```js
`string text`;

`string text line 1
 string text line 2`;

`string text ${expression} string text`;

tag`string text ${expression} string text`;
```

## Automatische Semikolon-Einfügung

Einige [JavaScript-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements) benötigen laut Syntax-Definitionen am Ende ein Semikolon (`;`). Diese umfassen:

- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- [Expressionsanweisungen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement)
- [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue), [`break`](/de/docs/Web/JavaScript/Reference/Statements/break), [`return`](/de/docs/Web/JavaScript/Reference/Statements/return), [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)
- Klassendeklarationen ([public](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [private](/de/docs/Web/JavaScript/Reference/Classes/Private_properties))
- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import), [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)

Um die Sprache jedoch zugänglicher und bequemer zu machen, ist JavaScript in der Lage, Semikolons automatisch einzufügen, wenn der Token-Stream verarbeitet wird, sodass einige ungültige Token-Sequenzen in gültige Syntax "korrigiert" werden können. Dieser Schritt erfolgt, nachdem der Programmtext gemäß der lexikalischen Grammatik in Tokens geparst wurde. Es gibt drei Fälle, in denen Semikolons automatisch eingefügt werden:

1\. Wenn ein Token, das von der Grammatik nicht erlaubt ist, auftritt und es mindestens von einem [Zeilenumbruch](#zeilenbegrenzer) (einschließlich eines Blockkommentars, der mindestens einen Zeilenbrecher enthält) vom vorherigen Token getrennt ist oder das Token "}" ist, dann wird ein Semikolon vor dem Token eingefügt.

```js-nolint
{ 1
2 } 3

// is transformed by ASI into:

{ 1
;2 ;} 3;

// Which is valid grammar encoding three statements,
// each consisting of a number literal
```

Das abschließende ")" von [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) wird ebenfalls von dieser Regel als Sonderfall behandelt.

```js-nolint
do {
  // …
} while (condition) /* ; */ // ASI here
const a = 1
```

Semikolons werden jedoch nicht eingefügt, wenn das Semikolon dann zum Trennzeichen in dem [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Anweisungskopf wird.

```js-nolint example-bad
for (
  let a = 1 // No ASI here
  a < 10 // No ASI here
  a++
) {}
```

Semikolons werden auch nie als [leere Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Empty) eingefügt. Zum Beispiel, im untenstehenden Code, wenn ein Semikolon nach ")" eingefügt wird, dann wäre der Code gültig, mit einer leeren Anweisung als `if`-Körper und der `const`-Deklaration als getrennte Anweisung. Da jedoch automatisch eingefügte Semikolons keine leeren Anweisungen werden können, verursacht dies, dass eine [Deklaration](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations) zum Körper der `if`-Anweisung wird, was nicht gültig ist.

```js-nolint example-bad
if (Math.random() > 0.5)
const x = 1 // SyntaxError: Unexpected token 'const'
```

2\. Wenn der Endpunkt des Token-Streams erreicht ist und der Parser nicht in der Lage ist, den einzigen Eingabestrom als vollständiges Programm zu analysieren, wird am Ende ein Semikolon eingefügt.

```js-nolint
const a = 1 /* ; */ // ASI here
```

Diese Regel ist eine Ergänzung zur vorherigen Regel, speziell für den Fall, dass es kein "störendes Token" gibt, sondern das Ende des Eingabestroms erreicht ist.

3\. Wenn die Grammatik Zeilenumbrüche an einigen Stellen verbietet, aber ein Zeilenumbruch gefunden wird, wird ein Semikolon eingefügt. Diese Stellen umfassen:

- `expr <here> ++`, `expr <here> --`
- `continue <here> lbl`
- `break <here> lbl`
- `return <here> expr`
- `throw <here> expr`
- `yield <here> expr`
- `yield <here> * expr`
- `(param) <here> => {}`
- `async <here> function`, `async <here> prop()`, `async <here> function*`, `async <here> *prop()`, `async <here> (param) <here> => {}`

Hier wird [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment) nicht als Postfix-Operator behandelt, der auf die Variable `b` angewendet wird, weil ein Zeilenumbruch zwischen `b` und `++` auftritt.

```js-nolint
a = b
++c

// is transformed by ASI into

a = b;
++c;
```

Hier gibt die `return`-Anweisung `undefined` zurück, und das `a + b` wird zu einer nicht erreichbaren Anweisung.

```js-nolint
return
a + b

// is transformed by ASI into

return;
a + b;
```

Es ist zu beachten, dass ASI nur ausgelöst wird, wenn ein Zeilenumbruch Tokens trennt, die andernfalls zu ungültiger Syntax führen würden. Wenn das nächste Token als Teil einer gültigen Struktur geparst werden kann, würden Semikolons nicht eingefügt. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()

const b = 1
[1, 2, 3].forEach(console.log)
```

Da `()` als Funktionsaufruf betrachtet werden kann, würde es normalerweise kein ASI auslösen. Ähnlich kann `[]` ein Memberzugriff sein. Der obige Code ist gleichbedeutend mit:

```js-nolint example-bad
const a = 1(1).toString();

const b = 1[1, 2, 3].forEach(console.log);
```

Das passiert, weil es sich um gültige Syntax handelt. `1[1, 2, 3]` ist ein [Property Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) mit einem [Komma](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator)-gebundenen Ausdruck. Daher würden Sie beim Ausführen des Codes Fehler wie "1 is not a function" und "Cannot read properties of undefined (reading 'forEach')" erhalten.

Innerhalb von Klassen können Klassenfelder und Generatormethoden ebenfalls eine Falle sein.

```js-nolint example-bad
class A {
  a = 1
  *gen() {}
}
```

Es wird als:

```js-nolint example-bad
class A {
  a = 1 * gen() {}
}
```

gesehen und führt daher zu einem Syntaxfehler um `{`.

Es gibt folgende Faustregeln für den Umgang mit ASI, wenn Sie einen stilistischen Ansatz ohne Semikolons durchsetzen wollen:

- Schreiben Sie Postfix `++` und `--` in derselben Zeile wie ihre Operanden.

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

- Ebenso sollte der Bezeichner nach `break` oder `continue` in derselben Zeile wie das Schlüsselwort stehen.

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

- Der `=>` eines Pfeil-(Arrow)-Funktion sollte in derselben Zeile wie das Ende seiner Parameter stehen.

  ```js-nolint example-bad
  const foo = (a, b)
    => a + b
  ```

  ```js-nolint example-good
  const foo = (a, b) =>
    a + b
  ```

- Der `async` von asynchronen Funktionen, Methoden usw. darf direkt nicht von einem Zeilenumbruch gefolgt sein.

  ```js-nolint example-bad
  async
  function foo() {}
  ```

  ```js-nolint example-good
  async function
  foo() {}
  ```

- Wenn eine Zeile mit einem von `(`, `[`, `` ` ``, `+`, `-`, `/` (wie in regex-Literalen) beginnt, stellen Sie ihr ein Semikolon voran oder enden Sie die vorherige Zeile mit einem Semikolon.

  ```js-nolint example-bad
  // The () may be merged with the previous line as a function call
  (() => {
    // …
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
    // …
  })()
  ;[1, 2, 3].forEach(console.log)
  ;`string text ${data}`.match(pattern).forEach(console.log)
  ;+a.toString()
  ;-a.toString()
  ;/pattern/.exec(str).forEach(console.log)
  ```

- Klassenfelder sollten vorzugsweise immer mit Semikolons beendet werden – zusätzlich zur vorherigen Regel (die auch für eine Felderklärung gefolgt von einer [berechneten Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) gilt, da letztere mit `[` beginnt), sind Semikolons auch zwischen einer Felderklärung und einer Generatormethode erforderlich.

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

- [Grammar and types](/de/docs/Web/JavaScript/Guide/Grammar_and_types) Leitfaden
- [Micro-feature from ES6, now in Firefox Aurora and Nightly: binary and octal numbers](https://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/) von Jeff Walden (2013)
- [JavaScript character escape sequences](https://mathiasbynens.be/notes/javascript-escapes) von Mathias Bynens (2011)

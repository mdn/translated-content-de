---
title: Lexikalische Grammatik
slug: Web/JavaScript/Reference/Lexical_grammar
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Diese Seite beschreibt die lexikalische Grammatik von JavaScript. JavaScript-Quelltext ist einfach eine Abfolge von Zeichen – damit der Interpreter ihn versteht, muss der String in eine strukturierte Darstellung _geparst_ werden. Der erste Schritt des Parsings wird [lexikalische Analyse](https://en.wikipedia.org/wiki/Lexical_analysis) genannt, bei dem der Text von links nach rechts gescannt wird und in eine Abfolge von einzelnen, atomaren Eingabeelementen umgewandelt wird. Einige Eingabeelemente sind für den Interpreter unwesentlich und werden nach diesem Schritt entfernt – dazu gehören [Leerzeichen](#leerzeichen) und [Kommentare](#kommentare). Die anderen, einschließlich [Bezeichner](#bezeichner), [Schlüsselwörter](#schlüsselwörter), [Literale](#literale) und Satzzeichen (hauptsächlich [Operatoren](/de/docs/Web/JavaScript/Reference/Operators)), werden für die weitere Syntaxanalyse verwendet. [Zeilenabschluss](#zeilenabschlüsse) und mehrzeilige Kommentare sind ebenfalls syntaktisch unbedeutend, aber sie leiten den Prozess der [automatischen Einfügung von Semikola](#automatische_einfügung_von_semikola), um bestimmte ungültige Token-Sequenzen gültig zu machen.

## Formatsteuerzeichen

Formatsteuerzeichen haben keine visuelle Darstellung, werden aber zur Steuerung der Interpretation des Textes verwendet.

| Codepunkt | Name                  | Abkürzung | Beschreibung                                                                                                                                                                                                                                    |
| --------- | --------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| U+200C    | Zero width non-joiner | \<ZWNJ>   | Wird zwischen Zeichen platziert, um zu verhindern, dass sie in bestimmten Sprachen zu Ligaturen verbunden werden ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_non-joiner)).                                                            |
| U+200D    | Zero width joiner     | \<ZWJ>    | Wird zwischen Zeichen platziert, die normalerweise nicht verbunden würden, um zu bewirken, dass die Zeichen in bestimmten Sprachen in ihrer verbundenen Form dargestellt werden ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_joiner)). |
| U+FEFF    | Byte order mark       | \<BOM>    | Wird am Anfang des Skripts verwendet, um es als Unicode zu markieren und die Erkennung der Zeichencodierung und Byte-Reihenfolge des Textes zu ermöglichen ([Wikipedia](https://en.wikipedia.org/wiki/Byte_order_mark)).                        |

Im JavaScript-Quelltext werden \<ZWNJ> und \<ZWJ> als [Identifier](#bezeichner)-Teile behandelt, während \<BOM> (auch als zero-width no-break space \<ZWNBSP> bezeichnet, wenn nicht am Anfang des Textes) als [Leerzeichen](#leerzeichen) behandelt wird.

## Leerzeichen

{{Glossary("Whitespace", "Leerzeichen")}}-Zeichen verbessern die Lesbarkeit des Quelltextes und trennen Tokens voneinander. Diese Zeichen sind für die Funktionalität des Codes in der Regel nicht erforderlich. [Minimierungstools](https://en.wikipedia.org/wiki/Minification_%28programming%29) werden oft verwendet, um Leerzeichen zu entfernen und somit die Menge der zu übertragenden Daten zu reduzieren.

| Codepunkt | Name                       | Abkürzung | Beschreibung                                                                                  | Escape-Sequenz |
| --------- | -------------------------- | --------- | --------------------------------------------------------------------------------------------- | -------------- |
| U+0009    | Character tabulation       | \<TAB>    | Horizontale Tabulation                                                                        | \t             |
| U+000B    | Line tabulation            | \<VT>     | Vertikale Tabulation                                                                          | \v             |
| U+000C    | Form feed                  | \<FF>     | Seitenumbruchsteuerzeichen ([Wikipedia](https://en.wikipedia.org/wiki/Page_break#Form_feed)). | \f             |
| U+0020    | Space                      | \<SP>     | Normales Leerzeichen                                                                          |                |
| U+00A0    | No-break space             | \<NBSP>   | Normales Leerzeichen, aber ohne Zeilenumbruchmöglichkeit                                      |                |
| U+FEFF    | Zero-width no-break space  | \<ZWNBSP> | Wenn nicht am Anfang eines Skripts, ist das BOM-Markierung ein normales Leerzeichen.          |                |
| Andere    | Andere Unicode-Leerzeichen | \<USP>    | [Zeichen in der "Space_Separator" allgemeine Kategorie][space separator set]                  |                |

[space separator set]: https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D

> [!NOTE]
> Von den [Zeichen mit der "White_Space"-Eigenschaft, die sich nicht in der allgemeinen Kategorie "Space_Separator" befinden](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BWhite_Space%7D%26%5CP%7BGeneral_Category%3DSpace_Separator%7D) werden U+0009, U+000B und U+000C in JavaScript immer noch als Leerzeichen behandelt; U+0085 NEXT LINE hat keine spezielle Rolle; andere werden zum Satz der [Zeilenumbrüche](#zeilenabschlüsse).

> [!NOTE]
> Änderungen am von der JavaScript-Engine verwendeten Unicode-Standard können das Verhalten von Programmen beeinflussen. Zum Beispiel hat ES2016 den referenzierten Unicode-Standard von 5.1 auf 8.0.0 aktualisiert, wodurch U+180E MONGOLIAN VOWEL SEPARATOR von der Kategorie "Space_Separator" zur Kategorie "Format (Cf)" verschoben wurde und kein Leerzeichen mehr ist. Infolgedessen änderte sich das Ergebnis von [`"\u180E".trim().length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim) von `0` auf `1`.

## Zeilenabschlüsse

Zusätzlich zu [Leerzeichen](#leerzeichen)-Zeichen werden Zeilenabschlusszeichen verwendet, um die Lesbarkeit des Quelltextes zu verbessern. In einigen Fällen können Zeilenabschlusszeichen jedoch die Ausführung von JavaScript-Code beeinflussen, da sie in einigen wenigen Fällen verboten sind. Zeilenabschlüsse beeinflussen auch den Prozess der [automatischen Einfügung von Semikola](#automatische_einfügung_von_semikola).

Außerhalb des Kontexts der lexikalischen Grammatik werden Leerzeichen und Zeilenabschlüsse oft verwechselt. Zum Beispiel entfernt {{jsxref("String.prototype.trim()")}} alle Leerzeichen und Zeilenabschlüsse am Anfang und Ende eines Strings. Die `\s` [Zeichenklasse-Entfernung](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) in regulären Ausdrücken entspricht allen Leerzeichen und Zeilenabschlüssen.

Nur die folgenden Unicode-Codepunkte werden in ECMAScript als Zeilenabschlüsse behandelt, andere zeilenbrechende Zeichen werden als Leerzeichen behandelt (zum Beispiel wird Next Line, NEL, U+0085 als Leerzeichen betrachtet).

| Codepunkt | Name                | Abkürzung | Beschreibung                                               | Escape-Sequenz |
| --------- | ------------------- | --------- | ---------------------------------------------------------- | -------------- |
| U+000A    | Line Feed           | \<LF>     | Neues Zeilenzeichen in UNIX-Systemen.                      | \n             |
| U+000D    | Carriage Return     | \<CR>     | Neues Zeilenzeichen in Commodore- und frühen Mac-Systemen. | \r             |
| U+2028    | Line Separator      | \<LS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline)         |                |
| U+2029    | Paragraph Separator | \<PS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline)         |                |

## Kommentare

Kommentare werden verwendet, um Hinweise, Anmerkungen, Vorschläge oder Warnungen zu JavaScript-Code hinzuzufügen. Dies kann das Lesen und Verstehen erleichtern. Sie können auch verwendet werden, um Code zu deaktivieren, um zu verhindern, dass er ausgeführt wird; dies kann ein wertvolles Debugging-Werkzeug sein.

JavaScript bietet zwei langjährige Möglichkeiten, Kommentare zu Code hinzuzufügen: Zeilenkommentare und Blockkommentare. Zusätzlich gibt es eine spezielle Hashbang-Kommentar-Syntax.

### Zeilenkommentare

Die erste Möglichkeit ist der `//` Kommentar; dieser verwandelt den gesamten Text, der ihm auf derselben Zeile folgt, in einen Kommentar. Zum Beispiel:

```js
function comment() {
  // This is a one line JavaScript comment
  console.log("Hello world!");
}
comment();
```

### Blockkommentare

Die zweite Möglichkeit ist der `/* */` Stil, der viel flexibler ist.

Zum Beispiel können Sie ihn in einer einzelnen Zeile verwenden:

```js
function comment() {
  /* This is a one line JavaScript comment */
  console.log("Hello world!");
}
comment();
```

Sie können auch mehrzeilige Kommentare machen, wie diesen:

```js
function comment() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log("Hello world!");
}
comment();
```

Sie können ihn auch mitten in einer Zeile verwenden, wenn Sie möchten; dies kann jedoch Ihren Code schwieriger lesbar machen, daher sollte dies mit Vorsicht verwendet werden:

```js
function comment(x) {
  console.log("Hello " + x /* insert the value of x */ + " !");
}
comment("world");
```

Außerdem können Sie ihn verwenden, um Code zu deaktivieren, um zu verhindern, dass er ausgeführt wird, indem Sie den Code in einem Kommentar einschließen, wie hier:

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

In diesem Fall wird der `console.log()`-Aufruf nie erteilt, da er sich innerhalb eines Kommentars befindet. Jede Anzahl von Codezeilen kann auf diese Weise deaktiviert werden.

Blockkommentare, die mindestens einen Zeilenabschluss enthalten, verhalten sich wie [Zeilenabschlüsse](#zeilenabschlüsse) bei der [automatischen Einfügung von Semikola](#automatische_einfügung_von_semikola).

### Hashbang-Kommentare

Es gibt eine spezielle dritte Kommentarsyntax, den **Hashbang-Kommentar**. Ein Hashbang-Kommentar verhält sich genau wie ein einzelner Kommentar (`//`), nur dass er mit `#!` beginnt und **nur am absoluten Anfang eines Skripts oder Moduls gültig ist**. Beachten Sie auch, dass kein Leerzeichen irgendeiner Art vor dem `#!` erlaubt ist. Der Kommentar besteht aus allen Zeichen nach `#!` bis zum Ende der ersten Zeile; nur ein solcher Kommentar ist erlaubt.

Hashbang-Kommentare in JavaScript ähneln [Shebangs in Unix](<https://en.wikipedia.org/wiki/Shebang_(Unix)>), die den Pfad zu einem bestimmten JavaScript-Interpreter bereitstellen, den Sie zur Ausführung des Skripts verwenden möchten. Bevor der Hashbang-Kommentar standardisiert wurde, war er bereits faktisch in Nicht-Browser-Hosts wie Node.js implementiert, wo er aus dem Quelltext gestrichen wurde, bevor er an die Engine übergeben wurde. Ein Beispiel ist wie folgt:

```js
#!/usr/bin/env node

console.log("Hello world");
```

Der JavaScript-Interpreter behandelt ihn als normalen Kommentar – er hat nur semantische Bedeutung für die Shell, wenn das Skript direkt in einer Shell ausgeführt wird.

> [!WARNING]
> Wenn Sie möchten, dass Skripts direkt in einer Shell-Umgebung ausführbar sind, kodieren Sie sie in UTF-8 ohne ein [BOM](https://en.wikipedia.org/wiki/Byte_order_mark). Obwohl ein BOM für in einem Browser ausgeführten Code keine Probleme verursacht - da es während der UTF-8-Dekodierung entfernt wird, bevor der Quelltext analysiert wird - wird eine Unix/Linux-Shell den Hashbang nicht erkennen, wenn er von einem BOM-Zeichen vorangestellt wird.

Sie sollten den `#!`-Kommentarstil nur verwenden, um einen JavaScript-Interpreter anzugeben. In allen anderen Fällen verwenden Sie einfach einen `//`-Kommentar (oder einen mehrzeiligen Kommentar).

## Bezeichner

Ein _Bezeichner_ wird verwendet, um einen Wert mit einem Namen zu verknüpfen. Bezeichner können an verschiedenen Stellen verwendet werden:

```js
const decl = 1; // Variable declaration (may also be `let` or `var`)
function fn() {} // Function declaration
const obj = { key: "value" }; // Object keys
// Class declaration
class C {
  #priv = "value"; // Private field
}
lbl: console.log(1); // Label
```

In JavaScript bestehen Bezeichner üblicherweise aus alphanumerischen Zeichen, Unterstrichen (`_`) und Dollarzeichen (`$`). Bezeichner dürfen nicht mit Zahlen beginnen. JavaScript-Bezeichner sind jedoch nicht nur auf {{Glossary("ASCII", "ASCII")}} beschränkt – es sind auch viele Unicode-Codepunkte erlaubt. Genauer gesagt:

- Startzeichen können jedes Zeichen in der [ID_Start](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Start%7D) Kategorie sowie `_` und `$` sein.
- Nach dem ersten Zeichen können Sie jedes Zeichen in der [ID_Continue](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Continue%7D) Kategorie sowie U+200C (ZWNJ) und U+200D (ZWJ) verwenden.

> [!NOTE]
> Wenn Sie aus irgendeinem Grund JavaScript-Quelltext selbst parsen müssen, gehen Sie nicht davon aus, dass alle Bezeichner dem Muster `/[A-Za-z_$][\w$]*/` (d.h. nur ASCII) folgen! Der Bereich der Bezeichner kann durch den regulären Ausdruck `/[$_\p{ID_Start}][$\p{ID_Continue}]*/u` (ohne Unicode-Escape-Sequenzen) beschrieben werden.

Darüber hinaus erlaubt JavaScript die Verwendung von [Unicode-Escape-Sequenzen](#unicode-escape-sequenzen) in Form von `\u0000` oder `\u{000000}` in Bezeichnern, die denselben String-Wert wie die tatsächlichen Unicode-Zeichen kodieren. Zum Beispiel sind `你好` und `\u4f60\u597d` die gleichen Bezeichner:

```js-nolint
const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello
```

Jedoch akzeptieren nicht alle Stellen den vollständigen Bereich der Bezeichner. Bestimmte Syntaxen wie Funktionsdeklarationen, Funktionsausdrücke und Variablendeklarationen erfordern die Verwendung von Bezeichnernamen, die keine [reservierten Wörter](#reservierte_wörter) sind.

```js-nolint example-bad
function import() {} // Illegal: import is a reserved word.
```

Am bemerkenswertesten ist, dass private Elemente und Objekteigenschaften reservierte Wörter erlauben.

```js
const obj = { import: "value" }; // Legal despite `import` being reserved
class C {
  #import = "value";
}
```

## Schlüsselwörter

_Schlüsselwörter_ sind Token, die wie Bezeichner aussehen, aber in JavaScript eine spezielle Bedeutung haben. Zum Beispiel zeigt das Schlüsselwort [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) vor einer Funktionsdeklaration an, dass die Funktion asynchron ist.

Einige Schlüsselwörter sind _reserviert_, was bedeutet, dass sie nicht als Bezeichner für Variablendeklarationen, Funktionsdeklarationen usw. verwendet werden können. Sie werden oft als _reservierte Wörter_ bezeichnet. [Eine Liste dieser reservierten Wörter](#reservierte_wörter) wird unten bereitgestellt. Nicht alle Schlüsselwörter sind reserviert – zum Beispiel kann `async` überall als Bezeichner verwendet werden. Einige Schlüsselwörter sind nur _kontextuell reserviert_ – zum Beispiel ist `await` nur innerhalb des Körpers einer asynchronen Funktion reserviert, und `let` ist nur im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-Code oder `const`- und `let`-Deklarationen reserviert.

Bezeichner werden immer nach ihrem _Stringwert_ verglichen, sodass Escape-Sequenzen interpretiert werden. Zum Beispiel ist dies immer noch ein Syntaxfehler:

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
- {{jsxref("delete")}}
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
- {{jsxref("instanceof")}}
- {{jsxref("new")}}
- {{jsxref("null")}}
- {{jsxref("Statements/return", "return")}}
- {{jsxref("Operators/super", "super")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("this")}}
- {{jsxref("Statements/throw", "throw")}}
- [`true`](#boolean-literal)
- {{jsxref("Statements/try...catch", "try")}}
- {{jsxref("Operators/typeof", "typeof")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Operators/void", "void")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/with", "with")}}

Die folgenden sind nur reserviert, wenn sie im Strict Mode-Code gefunden werden:

- {{jsxref("Statements/let", "let")}} (auch in `const`, `let` und Klassendeklarationen reserviert)
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- {{jsxref("Operators/yield", "yield")}} (auch in Body von Generatorfunktionen reserviert)

Die folgenden sind nur reserviert, wenn sie im Modulcode oder in asynchronen Funktionskörpern gefunden werden:

- [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

### Künftige reservierte Wörter

Die folgenden sind von der ECMAScript-Spezifikation als zukünftige Schlüsselwörter reserviert. Sie haben derzeit keine spezielle Funktionalität, könnten dies aber in Zukunft haben, daher können sie nicht als Bezeichner verwendet werden.

Diese sind immer reserviert:

- `enum`

Die folgenden sind nur reserviert, wenn sie im Strict Mode-Code gefunden werden:

- `implements`
- `interface`
- `package`
- `private`
- `protected`
- `public`

#### Künftige reservierte Wörter in älteren Standards

Die folgenden sind von älteren ECMAScript-Spezifikationen (ECMAScript 1 bis 3) als zukünftige Schlüsselwörter reserviert.

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

Einige Bezeichner haben in bestimmten Kontexten ohne eine Art reserviertes Wort eine besondere Bedeutung. Dazu gehören:

- {{jsxref("Functions/arguments", "arguments")}} (kein Schlüsselwort, aber kann nicht als Bezeichner im Strict Mode deklariert werden)
- `as` ([`import * as ns from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import))
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)
- {{jsxref("Global_Objects/eval", "eval")}} (kein Schlüsselwort, aber kann nicht als Bezeichner im Strict Mode deklariert werden)
- `from` ([`import x from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import))
- {{jsxref("Functions/get", "get")}}
- [`of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- {{jsxref("Functions/set", "set")}}

## Literale

> [!NOTE]
> Dieser Abschnitt behandelt Literale, die atomare Tokens sind. [Objekt-Literale](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Array-Literale](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation) sind [Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators), die aus einer Reihe von Tokens bestehen.

### Null-Literal

Siehe auch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) für mehr Informationen.

```js-nolint
null
```

### Boolean-Literal

Siehe auch [Boolean-Typ](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type) für mehr Informationen.

```js-nolint
true
false
```

### Numerische Literale

Die [Number](/de/docs/Web/JavaScript/Guide/Data_structures#number_type) und [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type) Typen verwenden numerische Literale.

#### Dezimal

```js-nolint
1234567890
42
```

Dezimal-Literale können mit einer Null (`0`) beginnen, gefolgt von einer anderen dezimalen Ziffer, aber wenn alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies wird als veraltete Syntax betrachtet, und Zahl-Literale mit dem Präfix `0`, ob sie als Oktal- oder Dezimalzahl interpretiert werden, verursachen einen Syntaxfehler im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) — verwenden Sie also stattdessen das `0o` Präfix.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

##### Exponential

Das Dezimal-Exponential-Literal wird durch das folgende Format spezifiziert: `beN`; wobei `b` eine Basiszahl (ganz oder gleitend) ist, gefolgt von einem `E`- oder `e`-Zeichen (das als Trenn- oder _Exponentialindikator_ dient) und `N`, das entweder ein _Exponent_ oder _Potenzzahl_ ist – eine ganze Zahl mit Vorzeichen.

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

Die Binärzahl-Syntax verwendet eine führende Null, gefolgt von einem Klein- oder Großbuchstaben "B" (`0b` oder `0B`). Ein beliebiges Zeichen nach dem `0b`, das nicht 0 oder 1 ist, beendet die Literalsequenz.

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### Oktal

Die Oktalzahl-Syntax verwendet eine führende Null, gefolgt von einem Klein- oder Großbuchstaben "O" (`0o` oder `0O`). Ein beliebiges Zeichen nach dem `0o`, das außerhalb des Bereichs (01234567) liegt, beendet die Literalsequenz.

```js-nolint
0O755 // 493
0o644 // 420
```

#### Hexadezimal

Die Hexadezimalzahl-Syntax verwendet eine führende Null, gefolgt von einem Klein- oder Großbuchstaben "X" (`0x` oder `0X`). Ein beliebiges Zeichen nach dem `0x`, das außerhalb des Bereichs (0123456789ABCDEF) liegt, beendet die Literalsequenz.

```js-nolint
0xFFFFFFFFFFFFF // 4503599627370495
0xabcdef123456  // 188900967593046
0XA             // 10
```

#### BigInt-Literal

Der [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type) Typ ist ein numerisches Primitive in JavaScript, das Ganzzahlen mit beliebiger Genauigkeit darstellen kann. BigInt-Literale werden erstellt, indem ein `n` an das Ende einer ganzen Zahl angehängt wird.

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

Für oktale `BigInt`-Zahlen verwenden Sie immer eine Null, gefolgt vom Buchstaben "o" (groß oder klein):

```js example-good
0o755n;
```

Weitere Informationen zu `BigInt`, siehe auch [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type).

#### Numerische Trenner

Um die Lesbarkeit von numerischen Literalen zu verbessern, können Unterstriche (`_`, `U+005F`) als Trenner verwendet werden:

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

Ein [String](/de/docs/Web/JavaScript/Guide/Data_structures#string_type)-Literal ist null oder mehr Unicode-Codepunkte, die in einfache oder doppelte Anführungszeichen eingeschlossen sind. Unicode-Codepunkte können auch durch eine Escape-Sequenz dargestellt werden. Alle Codepunkte können in einem String-Literal wörtlich erscheinen, außer für diese Codepunkte:

- U+005C \ (Backslash)
- U+000D \<CR>
- U+000A \<LF>
- Die gleiche Art von Anführungszeichen, die das String-Literal beginnt

Beliebige Codepunkte können in Form einer Escape-Sequenz erscheinen. String-Literale werden als ECMAScript-String-Werte ausgewertet. Beim Erzeugen dieser String-Werte werden Unicode-Codepunkte UTF-16-kodiert.

```js-nolint
'foo'
"bar"
```

Die folgenden Unterabschnitte beschreiben verschiedene Escape-Sequenzen (`\` gefolgt von einem oder mehreren Zeichen), die in String-Literalen verfügbar sind. Jede nicht unten aufgeführte Escape-Sequenz wird zu einem "Identitäts-Escape", der selbst der Codepunkt bleibt. Zum Beispiel ist `\z` dasselbe wie `z`. Es gibt eine veraltete Oktal-Escape-Sequenz-Syntax, die auf der Seite [Veraltete und obsolet Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) beschrieben wird. Viele dieser Escape-Sequenzen sind auch in regulären Ausdrücken gültig — siehe [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

#### Escape-Sequenzen

Spezialzeichen können mit Escape-Sequenzen kodiert werden:

| Escape-Sequenz                                             | Unicode-Codepunkt                                 |
| ---------------------------------------------------------- | ------------------------------------------------- |
| `\0`                                                       | Null-Zeichen (U+0000 NULL)                        |
| `\'`                                                       | Apostroph (U+0027 APOSTROPHE)                     |
| `\"`                                                       | Anführungszeichen (U+0022 QUOTATION MARK)         |
| `\\`                                                       | Umgekehrter Schrägstrich (U+005C REVERSE SOLIDUS) |
| `\n`                                                       | Neue Zeile (U+000A LINE FEED; LF)                 |
| `\r`                                                       | Wagenrücklauf (U+000D CARRIAGE RETURN; CR)        |
| `\v`                                                       | Vertikaler Tabulator (U+000B LINE TABULATION)     |
| `\t`                                                       | Tabulator (U+0009 CHARACTER TABULATION)           |
| `\b`                                                       | Rückschritt (U+0008 BACKSPACE)                    |
| `\f`                                                       | Seitenvorschub (U+000C FORM FEED)                 |
| `\` gefolgt von einem [Zeilenabschluss](#zeilenabschlüsse) | Leerer String                                     |

Die letzte Escape-Sequenz, `\` gefolgt von einem Zeilenabschluss, ist nützlich, um ein String-Literal über mehrere Zeilen zu teilen, ohne seine Bedeutung zu ändern.

```js
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Achten Sie darauf, dass keine Leerzeichen oder andere Zeichen nach dem Backslash stehen (außer einem Zeilenumbruch), da es sonst nicht funktioniert. Wenn die nächste Zeile eingerückt ist, sind die zusätzlichen Leerzeichen auch im Wert des Strings enthalten.

Sie können auch den [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition)-Operator verwenden, um mehrere Strings aneinander zu hängen, wie folgt:

```js
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Beide oben genannten Methoden ergeben identische Strings.

#### Hexadezimale Escape-Sequenzen

Hexadezimale Escape-Sequenzen bestehen aus `\x`, gefolgt von genau zwei hexadezimalen Ziffern, die eine Code-Einheit oder einen Codepunkt im Bereich von 0x0000 bis 0x00FF darstellen.

```js
"\xA9"; // "©"
```

#### Unicode-Escape-Sequenzen

Eine Unicode-Escape-Sequenz besteht aus genau vier hexadezimalen Ziffern, die `\u` folgen. Sie repräsentiert eine Codeeinheit in der UTF-16-Kodierung. Für Codepunkte von U+0000 bis U+FFFF ist die Codeeinheit gleich dem Codepunkt. Codepunkte von U+10000 bis U+10FFFF erfordern zwei Escape-Sequenzen, die die beiden Codeeinheiten (ein Surrogatpaar) repräsentieren, die zur Kodierung des Zeichens verwendet werden; das Surrogatpaar unterscheidet sich vom Codepunkt.

Siehe auch {{jsxref("String.fromCharCode()")}} und {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Unicode-Codepunkt-Escapes

Ein Unicode-Codepunkt-Escape besteht aus `\u{`, gefolgt von einem Codepunkt in hexadezimaler Basis, gefolgt von `}`. Der Wert der hexadezimalen Ziffern muss im Bereich von 0 bis 0x10FFFF inklusive liegen. Codepunkte im Bereich von U+10000 bis U+10FFFF müssen nicht als Surrogatpaar dargestellt werden.

Siehe auch {{jsxref("String.fromCodePoint()")}} und {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// the same character represented as a surrogate pair
"\uD87E\uDC04";
```

### Reguläre Ausdrücke Literale

Reguläre Ausdrücke-Literale sind von zwei Schrägstrichen (`/`) umgeben. Der Lexer konsumiert alle Zeichen bis zum nächsten nicht maskierten Schrägstrich oder dem Ende der Zeile, es sei denn, der Schrägstrich erscheint innerhalb einer Zeichenklasse (`[]`). Einige Zeichen (nämlich diejenigen, die [Bezeichnerteile](#bezeichner) sind) können nach dem schließenden Schrägstrich erscheinen und Flags anzeigen.

Die lexikalische Grammatik ist sehr großzügig: Nicht alle reguläre Ausdrücke-Literale, die als ein Token identifiziert werden, sind gültige reguläre Ausdrücke.

Siehe auch {{jsxref("RegExp")}} für mehr Informationen.

```js
/ab+c/g;
/[/]/;
```

Ein reguläres Ausdrucksliteral kann nicht mit zwei Schrägstrichen (`//`) beginnen, da dies ein Zeilenkommentar wäre. Um ein leeres reguläres Ausdruck zu spezifizieren, verwenden Sie `/(?:)/`.

### Template Literale

Ein Template Literal besteht aus mehreren Tokens: `` `xxx${ `` (Template Kopf), `}xxx${` (Template Mitte) und `` }xxx` `` (Template Ende) sind einzelne Tokens, während jeder Ausdruck zwischen ihnen kommen kann.

Siehe auch [Template Literale](/de/docs/Web/JavaScript/Reference/Template_literals) für mehr Informationen.

```js
`string text`;

`string text line 1
 string text line 2`;

`string text ${expression} string text`;

tag`string text ${expression} string text`;
```

## Automatische Einfügung von Semikola

Einige JavaScript-[Anweisungen](/de/docs/Web/JavaScript/Reference/Statements)' Syntaxdefinitionen erfordern Semikola (`;`) am Ende. Sie beinhalten:

- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`using`](/de/docs/Web/JavaScript/Reference/Statements/using), [`await using`](/de/docs/Web/JavaScript/Reference/Statements/await_using)
- [Ausdrucksanweisungen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement)
- [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue), [`break`](/de/docs/Web/JavaScript/Reference/Statements/break), [`return`](/de/docs/Web/JavaScript/Reference/Statements/return), [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)
- Klassenfelddeklarationen ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_elements))
- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import), [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)

Um die Sprache jedoch zugänglicher und angenehmer zu machen, kann JavaScript Semikola automatisch einfügen, wenn es den Token-Stream konsumiert, sodass einige ungültige Token-Sequenzen zu einer gültigen Syntax "korrigiert" werden können. Dieser Schritt erfolgt, nachdem der Programmtext gemäß der lexikalischen Grammatik in Tokens geparst wurde. Es gibt drei Fälle, in denen Semikola automatisch eingefügt werden:

1\. Wenn ein Token, das nicht durch die Grammatik erlaubt ist, angetroffen wird und es durch mindestens einen [Zeilenabschluss](#zeilenabschlüsse) (ein blockweierter Kommentar, der mindestens einen Zeilenabschluss enthält, eingeschlossen) vom vorherigen Token getrennt ist oder das Token "}" ist, wird ein Semikolon vor das Token eingefügt.

```js-nolint
{ 1
2 } 3

// is transformed by ASI into:

{ 1
;2 ;} 3;

// Which is valid grammar encoding three statements,
// each consisting of a number literal
```

Das abschließende ")" von [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) wird ebenfalls als Sonderfall durch diese Regel behandelt.

```js-nolint
do {
  // …
} while (condition) /* ; */ // ASI here
const a = 1
```

Semikola werden jedoch nicht eingefügt, wenn das Semikolon dann der Trennzeichen im Kopf der [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Anweisung wird.

```js-nolint example-bad
for (
  let a = 1 // No ASI here
  a < 10 // No ASI here
  a++
) {}
```

Semikola werden auch niemals als [leere Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Empty) eingefügt. Zum Beispiel, im Code unten, wenn ein Semikolon nach ")" eingefügt wird, würde der Code gültig sein, mit einer leeren Anweisung als `if` Body und der `const` Deklaration, die eine separate Anweisung ist. Da jedoch automatisch eingefügte Semikola keine leeren Anweisungen werden können, führt dies dazu, dass eine [Deklaration](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations) der Body der `if`-Anweisung wird, was nicht gültig ist.

```js-nolint example-bad
if (Math.random() > 0.5)
const x = 1 // SyntaxError: Unexpected token 'const'
```

2\. Wenn das Ende des Eingabestreams von Tokens erreicht ist und der Parser den einfachen Eingabestream nicht als vollständiges Programm parsen kann, wird ein Semikolon am Ende eingefügt.

```js-nolint
const a = 1 /* ; */ // ASI here
```

Diese Regel ist ein Ergänzung zur vorherigen Regel, speziell für den Fall, dass kein "störrisches Token" vorhanden ist, aber das Ende des Eingabestreams.

3\. Wenn die Grammatik Zeilenabschlüsse an einigen Stellen verbietet, aber ein Zeilenabschluss gefunden wird, wird ein Semikolon eingefügt. Diese Stellen schließen ein:

- `expr <here> ++`, `expr <here> --`
- `continue <here> lbl`
- `break <here> lbl`
- `return <here> expr`
- `throw <here> expr`
- `yield <here> expr`
- `yield <here> * expr`
- `(param) <here> => {}`
- `async <here> function`, `async <here> prop()`, `async <here> function*`, `async <here> *prop()`, `async <here> (param) <here> => {}`
- `using <here> id`, `await <here> using <here> id`

Hier wird [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment) nicht als Postfix-Operator behandelt, der auf die Variable `b` angewendet wird, da ein Zeilenabschluss zwischen `b` und `++` auftritt.

```js-nolint
a = b
++c

// is transformed by ASI into

a = b;
++c;
```

Hier gibt die `return`-Anweisung `undefined` zurück, und das `a + b` wird zu einer unerreichbaren Anweisung.

```js-nolint
return
a + b

// is transformed by ASI into

return;
a + b;
```

Beachten Sie, dass ASI (Automatische Semikolon-Einfügung) nur ausgelöst wird, wenn ein Zeilenumbruch Tokens trennt, die sonst ungültige Syntax erzeugen würden. Wenn das nächste Token als Teil einer gültigen Struktur geparst werden kann, werden Semikola nicht eingefügt. Ein Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()

const b = 1
[1, 2, 3].forEach(console.log)
```

Da `()` als Funktionsaufruf gesehen werden kann, würde es ASI normalerweise nicht auslösen. In ähnlicher Weise kann `[]` ein Memberzugriff sein. Der obige Code entspricht:

```js-nolint example-bad
const a = 1(1).toString();

const b = 1[1, 2, 3].forEach(console.log);
```

Dies ist zufällig gültige Syntax. `1[1, 2, 3]` ist ein [Property-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) mit einem [Komma](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator)-verbundenen Ausdruck. Daher würden Sie beim Ausführen des Codes Fehler wie "1 ist keine Funktion" und "Kann Eigenschaften von undefined nicht lesen (Lesen von 'forEach')" erhalten.

Innerhalb von Klassen können Klassenfelder und Generatormethoden ebenfalls Stolperfallen sein.

```js-nolint example-bad
class A {
  a = 1
  *gen() {}
}
```

Es wird gesehen als:

```js-nolint example-bad
class A {
  a = 1 * gen() {}
}
```

Und daher wird es ein Syntaxfehler um `{`.

Es gibt die folgenden Faustregeln im Umgang mit ASI, wenn Sie einen semikolonlosen Stil erzwingen möchten:

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

- Die Ausdrücke nach `return`, `throw` oder `yield` sollten in derselben Zeile wie das Schlüsselwort sein.

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

- In ähnlicher Weise sollte der Bezeichner hinter dem Label nach `break` oder `continue` in derselben Zeile wie das Schlüsselwort sein.

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

- Das `=>` einer Pfeilfunktion sollte in der gleichen Zeile wie das Ende seiner Parameter sein.

  ```js-nolint example-bad
  const foo = (a, b)
    => a + b
  ```

  ```js-nolint example-good
  const foo = (a, b) =>
    a + b
  ```

- Das `async` von async Funktionen, Methoden, etc. kann nicht direkt von einem Zeilenabschluss gefolgt werden.

  ```js-nolint example-bad
  async
  function foo() {}
  ```

  ```js-nolint example-good
  async function
  foo() {}
  ```

- Das `using` Schlüsselwort in `using` und `await using` Anweisungen sollte in der gleichen Zeile wie der erste Bezeichner sein, den er deklariert.

  ```js-nolint example-bad
  using
  resource = acquireResource()
  ```

  ```js-nolint example-good
  using resource
    = acquireResource()
  ```

- Wenn eine Zeile mit einer der folgenden beginnt: `(`, `[`, `` ` ``, `+`, `-`, `/` (wie in Regex-Literalen), dann setzen Sie davor ein Semikolon oder enden Sie die vorherige Zeile mit einem Semikolon.

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

- Klassenfelder sollten vorzugsweise immer mit Semikola beendet werden — zusätzlich zur vorherigen Regel (die eine Felddeklaration gefolgt von einem [berechneten Eigentum](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) einbezieht, da Letzteres mit `[` beginnt), sind Semikola auch zwischen einer Felddeklaration und einer Generatormethode erforderlich.

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
- [Mikrofeature aus ES6, jetzt in Firefox Aurora und Nightly: binäre und oktale Zahlen](https://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/) von Jeff Walden (2013)
- [JavaScript-Zeichen-Escape-Sequenzen](https://mathiasbynens.be/notes/javascript-escapes) von Mathias Bynens (2011)

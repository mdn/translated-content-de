---
title: Lexikalische Grammatik
slug: Web/JavaScript/Reference/Lexical_grammar
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Diese Seite beschreibt die lexikalische Grammatik von JavaScript. JavaScript-Quelltext ist nur eine Sequenz von Zeichen – damit der Interpreter ihn verstehen kann, muss die Zeichenkette in eine strukturiertere Darstellung _geparst_ werden. Der erste Schritt des Parsings wird als [lexikalische Analyse](https://de.wikipedia.org/wiki/Lexikalische_Analyse) bezeichnet, bei der der Text von links nach rechts gescannt und in eine Sequenz von individuellen, atomaren Eingabeelementen umgewandelt wird. Einige Eingabeelemente sind für den Interpreter unbedeutend und werden nach diesem Schritt entfernt – dazu gehören [Leerzeichen](#leerzeichen) und [Kommentare](#kommentare). Die anderen, einschließlich [Bezeichnern](#bezeichner), [Schlüsselwörtern](#schlüsselwörter), [Literalen](#literale) und Interpunktoren (meistens [Operatoren](/de/docs/Web/JavaScript/Reference/Operators)), werden für die weitere syntaktische Analyse verwendet. [Zeilenendzeichen](#zeilenendzeichen) und mehrzeilige Kommentare sind ebenfalls syntaktisch unbedeutend, helfen jedoch bei der [automatischen Einfügung von Semikolons](#automatische_einfügung_von_semikolons), um bestimmte ungültige Token-Sequenzen gültig zu machen.

## Formatsteuerzeichen

Formatsteuerzeichen haben keine visuelle Darstellung, werden aber verwendet, um die Interpretation des Textes zu steuern.

| Codepunkt | Name                         | Abkürzung | Beschreibung                                                                                                                                                                                                                                          |
| --------- | ---------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| U+200C    | Null-Breite Nicht-Verbindung | \<ZWNJ>   | Platziert zwischen Zeichen, um zu verhindern, dass sie in bestimmten Sprachen zu Ligaturen verbunden werden ([Wikipedia](https://de.wikipedia.org/wiki/Nullbreite_Nicht-Verbindung)).                                                                 |
| U+200D    | Null-Breite Verbindung       | \<ZWJ>    | Platziert zwischen Zeichen, die normalerweise nicht verbunden werden würden, um zu bewirken, dass die Zeichen in bestimmten Sprachen in ihrer verbundenen Form dargestellt werden ([Wikipedia](https://de.wikipedia.org/wiki/Nullbreite_Verbindung)). |
| U+FEFF    | Byte Order Mark              | \<BOM>    | Wird am Anfang des Skripts verwendet, um es als Unicode zu markieren und die Erkennung der Kodierung und Byte-Reihenfolge des Textes zu ermöglichen ([Wikipedia](https://de.wikipedia.org/wiki/Byte_Order_Mark)).                                     |

Im JavaScript-Quelltext werden \<ZWNJ> und \<ZWJ> als [Bezeichner-Teile](#bezeichner) behandelt, während \<BOM> (auch Nullbreiten-No-break-Leerzeichen \<ZWNBSP> genannt, wenn es nicht am Anfang des Textes steht) als [Leerzeichen](#leerzeichen) behandelt wird.

## Leerzeichen

{{Glossary("Whitespace", "Leerzeichen")}}-Zeichen verbessern die Lesbarkeit des Quelltextes und trennen Token voneinander. Diese Zeichen sind normalerweise für die Funktionalität des Codes unnötig. [Minifizierungstools](<https://de.wikipedia.org/wiki/Minifizierung_(Programmierung)>) werden oft verwendet, um Leerzeichen zu entfernen und die Menge der zu übertragenden Daten zu reduzieren.

| Codepunkt | Name                             | Abkürzung | Beschreibung                                                                                       | Escape-Sequenz |
| --------- | -------------------------------- | --------- | -------------------------------------------------------------------------------------------------- | -------------- |
| U+0009    | Zeichen-Tabulator                | \<TAB>    | Horizontaler Tabulator                                                                             | \t             |
| U+000B    | Linien-Tabulator                 | \<VT>     | Vertikaler Tabulator                                                                               | \v             |
| U+000C    | Seitenvorschub                   | \<FF>     | Seitenumbruchkontrollzeichen ([Wikipedia](https://de.wikipedia.org/wiki/Seitenumbruch#Form_Feed)). | \f             |
| U+0020    | Leerzeichen                      | \<SP>     | Normales Leerzeichen                                                                               |                |
| U+00A0    | Untrennbares Leerzeichen         | \<NBSP>   | Normales Leerzeichen, jedoch ohne Punkt, an dem eine Zeile umgebrochen werden kann                 |                |
| U+FEFF    | Nullbreiten-No-Break-Leerzeichen | \<ZWNBSP> | Wenn es sich nicht am Anfang eines Skripts befindet, ist das BOM-Marker ein normales Leerzeichen.  |                |
| Andere    | Andere Unicode-Leerzeichen       | \<USP>    | [Zeichen in der "Space_Separator" allgemeinen Kategorie][space separator set]                      |                |

[space separator set]: https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D

> [!NOTE]
> Von den [Zeichen mit der Eigenschaft "White_Space", die jedoch nicht in der Kategorie "Space_Separator" enthalten sind](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BWhite_Space%7D%26%5CP%7BGeneral_Category%3DSpace_Separator%7D), werden U+0009, U+000B und U+000C in JavaScript weiterhin als Leerzeichen behandelt; U+0085 NÄCHSTE ZEILE hat keine besondere Rolle; andere werden die Menge der [Zeilenendzeichen](#zeilenendzeichen).

> [!NOTE]
> Änderungen am von der JavaScript-Engine verwendeten Unicode-Standard können das Verhalten von Programmen beeinflussen. Zum Beispiel aktualisierte ES2016 den referenzierten Unicode-Standard von 5.1 auf 8.0.0, was dazu führte, dass der U+180E MONGOOLISCHE VOKALSEPARATOR von der Kategorie "Space_Separator" zur Kategorie "Format (Cf)" verschoben wurde und kein Leerzeichen mehr war. Infolgedessen änderte sich das Ergebnis von [`"\u180E".trim().length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim) von `0` auf `1`.

## Zeilenendzeichen

Zusätzlich zu [Leerzeichen](#leerzeichen)-Zeichen werden Zeilenendzeichen verwendet, um die Lesbarkeit des Quelltextes zu verbessern. In einigen Fällen können Zeilenendzeichen jedoch die Ausführung von JavaScript-Code beeinflussen, da es einige Stellen gibt, an denen sie verboten sind. Zeilenendzeichen beeinflussen auch den Prozess der [automatischen Einfügung von Semikolons](#automatische_einfügung_von_semikolons).

Außerhalb des Kontexts der lexikalischen Grammatik werden Leerzeichen und Zeilenendzeichen oft zusammengefasst. Zum Beispiel entfernt {{jsxref("String.prototype.trim()")}} alle Leerzeichen und Zeilenendzeichen vom Anfang und Ende eines Strings. Die `\s` [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) in regulären Ausdrücken passen auf alle Leerzeichen und Zeilenendzeichen.

Nur die folgenden Unicode-Codepunkte werden in ECMAScript als Zeilenendzeichen behandelt, andere zeilenbrechende Zeichen werden als Leerzeichen behandelt (zum Beispiel wird Neue Zeile, NEL, U+0085 als Leerzeichen betrachtet).

| Codepunkt | Name               | Abkürzung | Beschreibung                                               | Escape-Sequenz |
| --------- | ------------------ | --------- | ---------------------------------------------------------- | -------------- |
| U+000A    | Zeilenumbruch      | \<LF>     | Neuer Zeilenumbruch in UNIX-Systemen.                      | \n             |
| U+000D    | Wagenrücklauf      | \<CR>     | Neuer Zeilenumbruch in Commodore- und frühen Mac-Systemen. | \r             |
| U+2028    | Zeilentrennzeichen | \<LS>     | [Wikipedia](https://de.wikipedia.org/wiki/Zeilenumbruch)   |                |
| U+2029    | Absatztrennzeichen | \<PS>     | [Wikipedia](https://de.wikipedia.org/wiki/Zeilenumbruch)   |                |

## Kommentare

Kommentare werden verwendet, um Hinweistexte, Anmerkungen, Vorschläge oder Warnungen zu JavaScript-Code hinzuzufügen. Dies kann die Lesbarkeit und das Verständnis erleichtern. Sie können auch verwendet werden, um Code zu deaktivieren, um dessen Ausführung zu verhindern; dies kann ein nützliches Debugging-Tool sein.

JavaScript bietet zwei lang bestehende Möglichkeiten, Kommentare zum Code hinzuzufügen: Zeilenkommentare und Blockkommentare. Darüber hinaus gibt es eine spezielle Hashbang-Kommentar-Syntax.

### Zeilenkommentare

Die erste Möglichkeit ist der `//` Kommentar; dies verwandelt den gesamten Text, der ihm in derselben Zeile folgt, in einen Kommentar. Beispiel:

```js
function comment() {
  // This is a one line JavaScript comment
  console.log("Hello world!");
}
comment();
```

### Blockkommentare

Die zweite Möglichkeit ist der `/* */` Stil, der viel flexibler ist.

Zum Beispiel können Sie ihn in einer einzigen Zeile verwenden:

```js
function comment() {
  /* This is a one line JavaScript comment */
  console.log("Hello world!");
}
comment();
```

Sie können auch mehrzeilige Kommentare erstellen, wie diesen:

```js
function comment() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log("Hello world!");
}
comment();
```

Sie können ihn auch in der Mitte einer Zeile verwenden, wenn Sie möchten, obwohl dies Ihren Code schwerer lesbar machen kann; daher sollte dies mit Vorsicht verwendet werden:

```js
function comment(x) {
  console.log("Hello " + x /* insert the value of x */ + " !");
}
comment("world");
```

Darüber hinaus können Sie ihn verwenden, um Code zu deaktivieren und dessen Ausführung zu verhindern, indem Sie den Code in einem Kommentar einfügen, wie hier:

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

In diesem Fall wird der `console.log()` Aufruf nie ausgeführt, da er sich innerhalb eines Kommentars befindet. Beliebige viele Zeilen Code können auf diese Weise deaktiviert werden.

Blockkommentare, die mindestens ein Zeilenendzeichen enthalten, verhalten sich wie [Zeilenendzeichen](#zeilenendzeichen) bei [automatischer Einfügung von Semikolons](#automatische_einfügung_von_semikolons).

### Hashbang-Kommentare

Es gibt eine spezielle dritte Kommentarsyntax, den **Hashbang-Kommentar**. Ein Hashbang-Kommentar verhält sich genau wie ein nur einzeiliger Kommentar (`//`), mit Ausnahme, dass er mit `#!` beginnt und **nur am absoluten Anfang eines Skripts oder Moduls gültig ist**. Beachten Sie auch, dass vor dem `#!` keine Leerzeichen jeglicher Art erlaubt sind. Der Kommentar besteht aus allen Zeichen nach `#!` bis zum Ende der ersten Zeile; es ist nur ein solcher Kommentar erlaubt.

Hashbang-Kommentare in JavaScript ähneln [Shebangs in Unix](<https://de.wikipedia.org/wiki/Shebang_(Unix)>), die den Pfad zu einem bestimmten JavaScript-Interpreter angeben, den Sie zur Ausführung des Skripts verwenden möchten. Bevor der Hashbang-Kommentar standardisiert wurde, war er bereits de-facto in Nicht-Browser-Hosts wie Node.js implementiert, wo er vor der Übergabe an die Engine aus dem Quelltext entfernt wurde. Ein Beispiel ist wie folgt:

```js
#!/usr/bin/env node

console.log("Hello world");
```

Der JavaScript-Interpreter wird es als normalen Kommentar behandeln – es hat nur semantische Bedeutung für die Shell, wenn das Skript direkt in einer Shell ausgeführt wird.

> [!WARNING]
> Wenn Sie möchten, dass Skripte direkt in einer Shell-Umgebung ausgeführt werden können, kodieren Sie sie in UTF-8 ohne [BOM](https://de.wikipedia.org/wiki/Byte_Order_Mark). Obwohl ein BOM für den Code, der in einem Browser ausgeführt wird, kein Problem darstellt – da es während der UTF-8-Decodierung entfernt wird, bevor der Quelltext analysiert wird – erkennt eine Unix/Linux-Shell den Hashbang nicht, wenn er durch ein BOM-Zeichen vorangestellt wird.

Sie sollten den `#!` Kommentierstil nur verwenden, um einen JavaScript-Interpreter anzugeben. In allen anderen Fällen verwenden Sie einfach einen `//` Kommentar (oder einen mehrzeiligen Kommentar).

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

In JavaScript bestehen Bezeichner üblicherweise aus alphanumerischen Zeichen, Unterstrichen (`_`) und Dollarzeichen (`$`). Bezeichner dürfen nicht mit Zahlen beginnen. Allerdings sind JavaScript-Bezeichner nicht nur auf {{Glossary("ASCII", "ASCII")}} beschränkt – viele Unicode-Codepunkte sind ebenfalls zulässig. Nämlich:

- Startzeichen können beliebige Zeichen aus der Kategorie [ID_Start](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Start%7D) sowie `_` und `$` sein.
- Nach dem ersten Zeichen können Sie beliebige Zeichen aus der Kategorie [ID_Continue](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Continue%7D) sowie U+200C (ZWNJ) und U+200D (ZWJ) verwenden.

> [!NOTE]
> Wenn Sie aus irgendeinem Grund JavaScript-Quelltext selbst parsen müssen, gehen Sie nicht davon aus, dass alle Bezeichner dem Muster `/[A-Za-z_$][\w$]*/` (d.h. nur ASCII) folgen! Die Reichweite der Bezeichner kann durch den regulären Ausdruck `/[$_\p{ID_Start}][$\p{ID_Continue}]*/u` (ohne Unicode-Escape-Sequenzen) beschrieben werden.

Darüber hinaus erlaubt JavaScript die Verwendung von [Unicode-Escape-Sequenzen](#unicode-escape-sequenzen) in der Form `\u0000` oder `\u{000000}` in Bezeichnern, die denselben Stringwert wie die tatsächlichen Unicode-Zeichen kodieren. Zum Beispiel sind `你好` und `\u4f60\u597d` identische Bezeichner:

```js-nolint
const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello
```

Nicht alle Orte akzeptieren die volle Reichweite der Bezeichner. Bestimmte Syntaxen, wie Funktionsdeklarationen, Funktionsausdrücke und Variablendeklarationen, erfordern die Verwendung von Bezeichnernamen, die keine [reservierten Wörter](#reservierte_wörter) sind.

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

_Schlüsselwörter_ sind Tokens, die wie Bezeichner aussehen, aber besondere Bedeutungen in JavaScript haben. Zum Beispiel zeigt das Schlüsselwort [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) vor einer Funktionsdeklaration an, dass die Funktion asynchron ist.

Einige Schlüsselwörter sind _reserviert_, was bedeutet, dass sie nicht als Bezeichner für Variablendeklarationen, Funktionsdeklarationen usw. verwendet werden können. Sie werden oft als _reservierte Wörter_ bezeichnet. [Eine Liste dieser reservierten Wörter](#reservierte_wörter) ist unten aufgeführt. Nicht alle Schlüsselwörter sind reserviert – zum Beispiel kann `async` überall als Bezeichner verwendet werden. Einige Schlüsselwörter sind nur _kontextuell reserviert_ – zum Beispiel ist `await` nur innerhalb des Körpers einer asynchronen Funktion reserviert, und `let` ist nur im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-Code, oder `const`- und `let`-Deklarationen reserviert.

Bezeichner werden immer nach _String-Wert_ verglichen, daher werden Escape-Sequenzen interpretiert. Zum Beispiel ist dies immer noch ein Syntaxfehler:

```js-nolint example-bad
const els\u{65} = 1;
// `els\u{65}` encodes the same identifier as `else`
```

### Reservierte Wörter

Diese Schlüsselwörter können in JavaScript-Quelltexten nicht als Bezeichner für Variablen, Funktionen, Klassen usw. verwendet werden.

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

Die folgenden sind nur reserviert, wenn sie im Strict Mode-Code gefunden werden:

- {{jsxref("Statements/let", "let")}} (auch reserviert in `const`-, `let`- und Klassendeklarationen)
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- {{jsxref("Operators/yield", "yield")}} (auch reserviert in den Körpern von Generatorfunktionen)

Die folgenden sind nur reserviert, wenn sie im Modulcode oder in asynchronen Funktionskörpern gefunden werden:

- [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

### Reservierte Wörter der Zukunft

Die folgenden sind laut Spezifikation von ECMAScript als zukünftige Schlüsselwörter reserviert. Sie haben derzeit keine spezielle Funktionalität, könnten aber in der Zukunft welche haben, weshalb sie nicht als Bezeichner verwendet werden können.

Diese sind immer reserviert:

- `enum`

Die folgenden sind nur reserviert, wenn sie im Strict Mode-Code gefunden werden:

- `implements`
- `interface`
- `package`
- `private`
- `protected`
- `public`

#### Reservierte Wörter der Zukunft in älteren Standards

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

Einige Bezeichner haben in bestimmten Kontexten eine spezielle Bedeutung, ohne reservierte Wörter irgendeiner Art zu sein. Dazu gehören:

- {{jsxref("Functions/arguments", "arguments")}} (kein Schlüsselwort, kann aber nicht im Strict Mode als Bezeichner deklariert werden)
- `as` ([`import * as ns from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import))
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)
- {{jsxref("Global_Objects/eval", "eval")}} (kein Schlüsselwort, kann aber nicht im Strict Mode als Bezeichner deklariert werden)
- `from` ([`import x from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import))
- {{jsxref("Functions/get", "get")}}
- [`of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- {{jsxref("Functions/set", "set")}}

## Literale

> [!NOTE]
> Dieser Abschnitt diskutiert Literale, die atomare Tokens sind. [Objektliterale](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Array-Literale](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation) sind [Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators), die aus einer Reihe von Tokens bestehen.

### Null-Literal

Weitere Informationen finden Sie auch bei [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

```js-nolint
null
```

### Boolean-Literal

Weitere Informationen finden Sie auch beim [Boolean-Typ](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type).

```js-nolint
true
false
```

### Numerische Literale

Die [Number](/de/docs/Web/JavaScript/Guide/Data_structures#number_type)- und [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type)-Typen verwenden numerische Literale.

#### Dezimal

```js-nolint
1234567890
42
```

Dezimalliterale können mit einer Null (`0`) gefolgt von einer anderen Dezimalziffer beginnen, aber wenn alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies wird als veraltete Syntax betrachtet, und Zahlenliterale, die mit `0` beginnen, führen in [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) entweder als Oktal oder Dezimal zu einem Syntaxfehler – verwenden Sie stattdessen das `0o`-Präfix.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

##### Exponential

Das dezimale Exponential-Literal wird im folgenden Format angegeben: `beN`; wobei `b` eine Basisnummer ist (ganz oder gleitend), gefolgt von einem `E`- oder `e`-Zeichen (das als Trennzeichen oder _Exponentenanzeiger_ dient) und `N`, welches ein _Exponent_- oder _Potenzzahl_ ist – eine vorzeichenbehaftete Ganzzahl.

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

Das binäre Zahlensyntax verwendet eine führende Null gefolgt von einem Klein- oder Großbuchstaben "B" (`0b` oder `0B`). Jedes Zeichen nach dem `0b`, das nicht 0 oder 1 ist, beendet die Literalsequenz.

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### Oktal

Das oktale Zahlensyntax verwendet eine führende Null gefolgt von einem Klein- oder Großbuchstaben "O" (`0o` oder `0O`). Jedes Zeichen nach dem `0o`, das nicht im Bereich (01234567) liegt, beendet die Literalsequenz.

```js-nolint
0O755 // 493
0o644 // 420
```

#### Hexadezimal

Das hexadezimale Zahlensyntax verwendet eine führende Null gefolgt von einem Klein- oder Großbuchstaben "X" (`0x` oder `0X`). Jedes Zeichen nach dem `0x`, das nicht im Bereich (0123456789ABCDEF) liegt, beendet die Literalsequenz.

```js-nolint
0xFFFFFFFFFFFFF // 4503599627370495
0xabcdef123456  // 188900967593046
0XA             // 10
```

#### BigInt-Literal

Der [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type)-Typ ist ein numerischer primitiver Typ in JavaScript, der ganze Zahlen mit beliebiger Präzision darstellen kann. BigInt-Literale werden durch Anfügen von `n` am Ende einer ganzen Zahl erstellt.

```js-nolint
123456789123456789n     // 123456789123456789
0o777777777777n         // 68719476735
0x123456789ABCDEFn      // 81985529216486895
0b11101001010101010101n // 955733
```

BigInt-Literale dürfen nicht mit `0` beginnen, um Verwechslungen mit veralteten oktalliteralen Darstellungen zu vermeiden.

```js-nolint example-bad
0755n; // SyntaxError: invalid BigInt syntax
```

Für Oktal-`BigInt`-Zahlen verwenden Sie immer Null gefolgt von dem Buchstaben "o" (Groß- oder Kleinbuchstaben):

```js example-good
0o755n;
```

Für weitere Informationen zu `BigInt`, siehe auch [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type).

#### Numerische Separatoren

Um die Lesbarkeit numerischer Literalen zu verbessern, können Unterstriche (`_`, `U+005F`) als Trennzeichen verwendet werden:

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

Ein [String](/de/docs/Web/JavaScript/Guide/Data_structures#string_type)-Literal ist null oder mehr Unicode-Codepunkte, die in einfachen oder doppelten Anführungszeichen eingeschlossen sind. Unicode-Codepunkte können auch durch eine Escape-Sequenz dargestellt werden. Alle Codepunkte können wörtlich in einem String-Literal erscheinen, mit Ausnahme dieser Codepunkte:

- U+005C \ (Rückwärtsschrägstrich)
- U+000D \<CR>
- U+000A \<LF>
- Die gleiche Art von Anführungszeichen, die das String-Literal beginnt

Beliebige Codepunkte können in Form einer Escape-Sequenz erscheinen. String-Literale ergeben ECMAScript-String-Werte. Bei der Erzeugung dieser String-Werte werden Unicode-Codepunkte in UTF-16 kodiert.

```js-nolint
'foo'
"bar"
```

Die folgenden Unterabschnitte beschreiben verschiedene Escape-Sequenzen (`\` gefolgt von einem oder mehreren Zeichen), die in String-Literalen verfügbar sind. Jede nicht gelistete Escape-Sequenz wird zu einem "Identitäts-Escape", der der Codepunkt selbst wird. Zum Beispiel ist `\z` dasselbe wie `z`. Es gibt eine veraltete oktale Escape-Sequenz-Syntax, die auf der Seite [Veraltete und obsolet Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) beschrieben wird. Viele dieser Escape-Sequenzen sind auch in regulären Ausdrücken gültig – siehe [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

#### Escape-Sequenzen

Spezielle Zeichen können mithilfe von Escape-Sequenzen kodiert werden:

| Escape-Sequenz                                              | Unicode-Codepunkt                                      |
| ----------------------------------------------------------- | ------------------------------------------------------ |
| `\0`                                                        | Nullzeichen (U+0000 NULL)                              |
| `\'`                                                        | Einfaches Anführungszeichen (U+0027 APOSTROPH)         |
| `\"`                                                        | Doppeltes Anführungszeichen (U+0022 ANFÜHRUNGSZEICHEN) |
| `\\`                                                        | Rückwärtsschrägstrich (U+005C REVERSE SOLIDUS)         |
| `\n`                                                        | Neuer Zeilenumbruch (U+000A LINE FEED; LF)             |
| `\r`                                                        | Wagenrücklauf (U+000D CARRIAGE RETURN; CR)             |
| `\v`                                                        | Vertikaler Tabulator (U+000B LINE TABULATION)          |
| `\t`                                                        | Tabulator (U+0009 CHARACTER TABULATION)                |
| `\b`                                                        | Rückschritt (U+0008 BACKSPACE)                         |
| `\f`                                                        | Seitenvorschub (U+000C FORM FEED)                      |
| `\` gefolgt von einem [Zeilenendzeichen](#zeilenendzeichen) | leere Zeichenkette                                     |

Die letzte Escape-Sequenz, `\` gefolgt von einem Zeilenendzeichen, ist nützlich, um ein String-Literal über mehrere Zeilen zu verteilen, ohne dessen Bedeutung zu ändern.

```js
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Stellen Sie sicher, dass nach dem Rückwärtsschrägstrich keine Leerzeichen oder andere Zeichen (außer einem Zeilenumbruch) vorhanden sind, da es sonst nicht funktioniert. Wenn die nächste Zeile eingezogen ist, sind die zusätzlichen Leerzeichen ebenfalls im Wert der Zeichenkette vorhanden.

Sie können auch den [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition)-Operator verwenden, um mehrere Zeichenketten zusammenzufügen, wie folgt:

```js
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Beide der oben genannten Methoden ergeben identische Zeichenfolgen.

#### Hexadezimale Escape-Sequenzen

Hexadezimale Escape-Sequenzen bestehen aus `\x`, gefolgt von genau zwei hexadezimalen Ziffern, die eine Codeeinheit oder einen Codepunkt im Bereich 0x0000 bis 0x00FF darstellen.

```js
"\xA9"; // "©"
```

#### Unicode-Escape-Sequenzen

Eine Unicode-Escape-Sequenz besteht aus genau vier hexadezimalen Ziffern, die `\u` folgen. Sie stellt eine Codeeinheit in der UTF-16-Kodierung dar. Für Codepunkte von U+0000 bis U+FFFF ist die Codeeinheit gleich dem Codepunkt. Codepunkte von U+10000 bis U+10FFFF erfordern zwei Escape-Sequenzen, die die zwei Codeeinheiten (ein Surrogatpaar) darstellen, die zur Kodierung des Zeichens verwendet werden; das Surrogatpaar unterscheidet sich vom Codepunkt.

Siehe auch {{jsxref("String.fromCharCode()")}} und {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Unicode-Codepunkt-Escape

Ein Unicode-Codepunkt-Escape besteht aus `\u{`, gefolgt von einem Codepunkt im hexadezimalen Format, gefolgt von `}`. Der Wert der hexadezimalen Ziffern muss im Bereich zwischen 0 und 0x10FFFF (einschließlich) liegen. Codepunkte im Bereich U+10000 bis U+10FFFF müssen nicht als Surrogatpaar dargestellt werden.

Siehe auch {{jsxref("String.fromCodePoint()")}} und {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// the same character represented as a surrogate pair
"\uD87E\uDC04";
```

### Reguläre Ausdrucks-Literale

Reguläre Ausdrucks-Literale sind von zwei Schrägstrichen (`/`) eingeklammert. Der Lexer konsumiert alle Zeichen bis zum nächsten unescaped Schrägstrich oder zum Ende der Zeile, es sei denn, der Schrägstrich erscheint innerhalb einer Zeichengruppe (`[]`). Einige Zeichen (nämlich die, die [Teil eines Bezeichners](#bezeichner) sind) können nach dem Schrägstrich erscheinen und Flags bezeichnen.

Die lexikalische Grammatik ist sehr tolerant: nicht alle regulären Ausdrucks-Literale, die als ein Token erkannt werden, sind gültige reguläre Ausdrücke.

Siehe auch {{jsxref("RegExp")}} für weitere Informationen.

```js
/ab+c/g;
/[/]/;
```

Ein reguläres Ausdrucksliteral kann nicht mit zwei Schrägstrichen (`//`) beginnen, da das ein Zeilenkommentar wäre. Um ein leeres reguläres Ausdruck darzustellen, verwenden Sie `/(?:)/`.

### Template-Literale

Ein Template-Literal besteht aus mehreren Tokens: `` `xxx${ `` (Template-Kopf), `}xxx${` (Template-Mittelteil) und `` }xxx` `` (Template-Endteil) sind einzelne Tokens, während dazwischen beliebige Ausdrücke stehen können.

Siehe auch [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) für weitere Informationen.

```js
`string text`;

`string text line 1
 string text line 2`;

`string text ${expression} string text`;

tag`string text ${expression} string text`;
```

## Automatische Einfügung von Semikolons

Einige [JavaScript-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements) erfordern Endungs-Semikolons (`;`). Dazu gehören:

- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- [Ausdrucks-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement)
- [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue), [`break`](/de/docs/Web/JavaScript/Reference/Statements/break), [`return`](/de/docs/Web/JavaScript/Reference/Statements/return), [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)
- Deklarationen von Klassenfeldern ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_elements))
- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import), [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)

Um die Sprache jedoch zugänglicher und bequemer zu machen, kann JavaScript beim Verarbeiten des Token-Streams automatisch Semikolons einfügen, damit einige ungültige Token-Sequenzen in gültige Syntax "repariert" werden können. Dieser Schritt erfolgt, nachdem der Programmtext gemäß der lexikalischen Grammatik in Tokens geparst wurde. Es gibt drei Fälle, in denen Semikolons automatisch eingefügt werden:

1\. Wenn ein Token gefunden wird, das von der Grammatik nicht erlaubt ist und es durch mindestens ein [Zeilenendzeichen](#zeilenendzeichen) (einschließlich eines Blockkommentars, der mindestens ein Zeilenendzeichen enthält) von dem vorherigen Token getrennt ist, oder das Token ist "}", wird vor dem Token ein Semikolon eingefügt.

```js-nolint
{ 1
2 } 3

// is transformed by ASI into:

{ 1
;2 ;} 3;

// Which is valid grammar encoding three statements,
// each consisting of a number literal
```

Das Endzeichen ")" von [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) wird als Sonderfall ebenfalls durch diese Regel behandelt.

```js-nolint
do {
  // …
} while (condition) /* ; */ // ASI here
const a = 1
```

Wenn das Semikolon jedoch dann zum Trennzeichen in der Kopfzeile der [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) Anweisung würde, werden keine Semikolons eingefügt.

```js-nolint example-bad
for (
  let a = 1 // No ASI here
  a < 10 // No ASI here
  a++
) {}
```

Semikolons werden auch niemals als [leere Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Empty) eingefügt. Zum Beispiel im folgenden Code: Wenn ein Semikolon nach ")" eingefügt würde, wäre der Code gültig, mit einer leeren Anweisung als `if`-Body und der `const`-Deklaration als separater Anweisung. Da automatisch eingefügte Semikolons jedoch keine leeren Anweisungen werden können, wird eine [Deklaration](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations) der `if`-Anweisung, die nicht gültig ist, gibt.

```js-nolint example-bad
if (Math.random() > 0.5)
const x = 1 // SyntaxError: Unexpected token 'const'
```

2\. Wenn das Ende des Token-Eingabespeicherstreams erreicht wird und der Parser nicht in der Lage ist, den Eingabestream als vollständiges Programm zu parsen, wird ein Semikolon am Ende eingefügt.

```js-nolint
const a = 1 /* ; */ // ASI here
```

Diese Regel ergänzt die vorherige Regel, speziell für den Fall, dass es keinen "störenden Token" gibt, sondern das Ende des Eingabespeicherstreams erreicht wird.

3\. Wenn die Grammatik Zeilenendzeichen an einem bestimmten Ort verbietet, aber ein Zeilenendzeichen gefunden wird, wird ein Semikolon eingefügt. Zu diesen Orten gehören:

- `expr <hier> ++`, `expr <hier> --`
- `continue <hier> lbl`
- `break <hier> lbl`
- `return <hier> expr`
- `throw <hier> expr`
- `yield <hier> expr`
- `yield <hier> * expr`
- `(param) <hier> => {}`
- `async <hier> function`, `async <hier> prop()`, `async <hier> function*`, `async <hier> *prop()`, `async <hier> (param) <hier> => {}`

Hier wird der [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment)-Operator nicht als Postfix-Operator behandelt, der auf die Variable `b` angewendet wird, da ein Zeilenendzeichen zwischen `b` und `++` liegt.

```js-nolint
a = b
++c

// is transformed by ASI into

a = b;
++c;
```

Hier gibt die `return`-Anweisung `undefined` zurück und das `a + b` wird zu einer unerreichbaren Anweisung.

```js-nolint
return
a + b

// is transformed by ASI into

return;
a + b;
```

Beachten Sie, dass die automatische Einfügung von Semikolons (ASI) nur dann ausgelöst wird, wenn ein Zeilenumbruch Token trennt, die ansonsten ungültige Syntax erzeugen würden. Wenn das nächste Token als Teil einer gültigen Struktur geparst werden kann, würden keine Semikolons eingefügt. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()

const b = 1
[1, 2, 3].forEach(console.log)
```

Da `()` als Funktionsaufruf gesehen werden kann, würde es normalerweise nicht ASI auslösen. In ähnlicher Weise kann `[]` ein Memberzugriff sein. Der obige Code ist gleichbedeutend mit:

```js-nolint example-bad
const a = 1(1).toString();

const b = 1[1, 2, 3].forEach(console.log);
```

Und dies ist zufällig eine gültige Syntax. `1[1, 2, 3]` ist ein [Eigenschafts-Zugriffs-Operator](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) mit einem mit [Komma](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator)-Operator verbundenen Ausdruck. Daher erhalten Sie Meldungen wie "1 ist keine Funktion" und "Kann keine Eigenschaften von undefined lesen (Lese 'forEach')" beim Ausführen des Codes.

Innerhalb von Klassen können Klassenfelder und Methoden ebenfalls eine Falle darstellen.

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

Und wird daher ein Syntaxfehler um `{` erzeugen.

Es gibt die folgenden Faustregeln für den Umgang mit ASI, wenn Sie einen semikolonlosen Stil durchsetzen möchten:

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

- In ähnlicher Weise sollte das Bezeichner-Label nach `break` oder `continue` in derselben Zeile wie das Schlüsselwort stehen.

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

- Das `=>` eines Pfeilfunktionenzeichens sollte in derselben Zeile am Ende der Parameter stehen.

  ```js-nolint example-bad
  const foo = (a, b)
    => a + b
  ```

  ```js-nolint example-good
  const foo = (a, b) =>
    a + b
  ```

- Das `async` von asynchronen Funktionen, Methoden usw. darf nicht direkt von einem Zeilenumbruch gefolgt werden.

  ```js-nolint example-bad
  async
  function foo() {}
  ```

  ```js-nolint example-good
  async function
  foo() {}
  ```

- Wenn eine Zeile mit einem von `(`, `[`, `` ` `` beginnt, fügen Sie ein Semikolon davor hinzu oder enden Sie die vorherige Zeile mit einem Semikolon.

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

- Klassenfelder sollten vorzugsweise immer mit Semikolons beendet werden – zusätzlich zur vorherigen Regel (die eine Felddeklaration, gefolgt von einer [berechneten Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) beinhaltet, da letzteres mit `[` beginnt), sind Semikolons auch erforderlich zwischen einer Felddeklaration und einer generierten Methode.

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

- [Grammatik und Typen](/de/docs/Web/JavaScript/Guide/Grammar_and_types)-Leitfaden
- [Micro-Feature von ES6, jetzt in Firefox Aurora und Nightly: Binär- und Oktalzahlen](https://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/) von Jeff Walden (2013)
- [JavaScript-Zeichen-Escape-Sequenzen](https://mathiasbynens.be/notes/javascript-escapes) von Mathias Bynens (2011)

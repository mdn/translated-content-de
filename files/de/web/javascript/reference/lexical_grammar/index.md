---
title: Lexikalische Grammatik
slug: Web/JavaScript/Reference/Lexical_grammar
l10n:
  sourceCommit: 7a8008ce9c68ca53cc6d3cfb688a5b9bcc14fecb
---

{{jsSidebar("More")}}

Diese Seite beschreibt die lexikalische Grammatik von JavaScript. JavaScript-Quelltext ist nur eine Zeichenfolgen-Sequenz – damit der Interpreter sie versteht, muss die Zeichenfolge in eine strukturiertere Darstellung _geparst_ werden. Der erste Schritt des Parsens wird [lexikalische Analyse](https://de.wikipedia.org/wiki/Lexikalische_Analyse) genannt. Dabei wird der Text von links nach rechts gescannt und in eine Sequenz einzelner, atomarer Eingabeelemente umgewandelt. Einige Eingabeelemente sind für den Interpreter unbedeutend und werden nach diesem Schritt entfernt – dazu gehören [Leerzeichen](#leerzeichen) und [Kommentare](#kommentare). Andere, wie [Bezeichner](#bezeichner), [Schlüsselwörter](#schlüsselwörter), [Literale](#literale) und Interpunktionszeichen (meistens [Operatoren](/de/docs/Web/JavaScript/Reference/Operators)), werden für die weitere syntaktische Analyse verwendet. [Zeilenumbrüche](#zeilenumbrüche) und mehrzeilige Kommentare sind ebenfalls syntaktisch unbedeutend, steuern jedoch den Prozess zur [automatischen Einfügung von Semikolons](#automatische_einfügung_von_semikolons), um bestimmte ungültige Token-Sequenzen gültig zu machen.

## Steuerzeichen für die Formatierung

Steuerzeichen für die Formatierung haben keine visuelle Darstellung, dienen jedoch zur Steuerung der Interpretation des Texts.

| Codepunkt | Name                  | Abkürzung | Beschreibung                                                                                                                                                                                                |
| --------- | --------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| U+200C    | Zero width non-joiner | \<ZWNJ>   | Zwischen Zeichen platziert, um deren Verbindung zu Ligaturen in bestimmten Sprachen zu verhindern ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_non-joiner)).                                       |
| U+200D    | Zero width joiner     | \<ZWJ>    | Zwischen Zeichen platziert, die sich normalerweise nicht verbinden, um sie in bestimmten Sprachen in ihrer verbundenen Form darzustellen ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_joiner)).    |
| U+FEFF    | Byte order mark       | \<BOM>    | Dient am Anfang eines Skripts dazu, es als Unicode zu kennzeichnen, und ermöglicht die Erkennung der Codierung und Byte-Reihenfolge des Texts ([Wikipedia](https://de.wikipedia.org/wiki/Byte_Order_Mark)). |

Im JavaScript-Quelltext werden \<ZWNJ> und \<ZWJ> als [Bezeichner](#bezeichner)-Bestandteile interpretiert, während \<BOM> (auch als Zero-width no-break space \<ZWNBSP> bezeichnet, wenn es nicht am Anfang eines Skripts steht) als [Leerzeichen](#leerzeichen) behandelt wird.

## Leerzeichen

{{Glossary("Whitespace", "Leerzeichen")}}-Zeichen verbessern die Lesbarkeit des Quelltexts und trennen Token voneinander. Diese Zeichen sind für die Funktionalität des Codes in der Regel nicht notwendig. [Minifizierungs-Tools](https://de.wikipedia.org/wiki/Minification_%28programming%29) werden häufig verwendet, um Leerzeichen zu entfernen und die zu übertragende Datenmenge zu reduzieren.

| Codepunkt | Name                       | Abkürzung | Beschreibung                                                                                                | Escape-Sequenz |
| --------- | -------------------------- | --------- | ----------------------------------------------------------------------------------------------------------- | -------------- |
| U+0009    | Character tabulation       | \<TAB>    | Horizontale Tabulation                                                                                      | \t             |
| U+000B    | Line tabulation            | \<VT>     | Vertikale Tabulation                                                                                        | \v             |
| U+000C    | Form feed                  | \<FF>     | Steuerzeichen für Seitenumbruch ([Wikipedia](https://en.wikipedia.org/wiki/Page_break#Form_feed)).          | \f             |
| U+0020    | Space                      | \<SP>     | Normales Leerzeichen                                                                                        |                |
| U+00A0    | No-break space             | \<NBSP>   | Normales Leerzeichen, jedoch kein Punkt für einen Zeilenumbruch                                             |                |
| U+FEFF    | Zero-width no-break space  | \<ZWNBSP> | Wenn sich das BOM-Zeichen nicht am Anfang eines Skripts befindet, ist es ein normales Leerzeichen.          |                |
| Andere    | Andere Unicode-Leerzeichen | \<USP>    | Zeichen in der allgemeinen Kategorie "Space_Separator" ([Zeichensatz der Leerzeichen][space separator set]) |                |

[space separator set]: https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D

> [!NOTE]
> Von den [Zeichen mit der Eigenschaft "White_Space", die jedoch nicht in der allgemeinen Kategorie "Space_Separator" sind](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BWhite_Space%7D%26%5CP%7BGeneral_Category%3DSpace_Separator%7D), werden U+0009, U+000B und U+000C dennoch in JavaScript als Leerzeichen behandelt; U+0085 NEXT LINE hat keine spezielle Rolle; andere werden Teil der [Zeilenumbrüche](#zeilenumbrüche).

> [!NOTE]
> Änderungen am Unicode-Standard, der von der JavaScript-Engine verwendet wird, können das Verhalten von Programmen beeinflussen. Zum Beispiel hat ES2016 den referenzierten Unicode-Standard von 5.1 auf 8.0.0 aktualisiert, wodurch U+180E MONGOLIAN VOWEL SEPARATOR von der Kategorie "Space_Separator" zur Kategorie "Format (Cf)" verschoben wurde und nicht mehr als Leerzeichen gilt. Infolgedessen änderte sich das Ergebnis von [`"\u180E".trim().length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim) von `0` zu `1`.

## Zeilenumbrüche

Zusätzlich zu [Leerzeichen](#leerzeichen)-Zeichen werden Zeilenumbruchzeichen verwendet, um die Lesbarkeit des Quelltexts zu verbessern. In einigen Fällen können Zeilenumbrüche die Ausführung von JavaScript-Code beeinflussen, da es einige Stellen gibt, an denen sie verboten sind. Zeilenumbrüche wirken sich auch auf den Prozess der [automatischen Einfügung von Semikolons](#automatische_einfügung_von_semikolons) aus.

Außerhalb des Zusammenhangs der lexikalischen Grammatik werden Leerzeichen und Zeilenumbrüche oft miteinander vermischt. Zum Beispiel entfernt {{jsxref("String.prototype.trim()")}} alle Leerzeichen und Zeilenumbrüche vom Anfang und Ende eines Strings. Die `\s`-[Zeichenklassen-Escape](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) in regulären Ausdrücken gibt ebenfalls alle Leerzeichen und Zeilenumbrüche zurück.

Nur die folgenden Unicode-Codepunkte werden in ECMAScript als Zeilenumbrüche behandelt; andere Zeichen, die einem Zeilenumbruch ähneln, werden als Leerzeichen behandelt (zum Beispiel wird Next Line, NEL, U+0085 als Leerzeichen betrachtet).

| Codepunkt | Name                | Abkürzung | Beschreibung                                       | Escape-Sequenz |
| --------- | ------------------- | --------- | -------------------------------------------------- | -------------- |
| U+000A    | Line Feed           | \<LF>     | Neue Zeile in UNIX-Systemen.                       | \n             |
| U+000D    | Carriage Return     | \<CR>     | Neue Zeile in Commodore- und frühen Mac-Systemen.  | \r             |
| U+2028    | Line Separator      | \<LS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline) |                |
| U+2029    | Paragraph Separator | \<PS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline) |                |

## Kommentare

Kommentare werden verwendet, um Hinweise, Notizen, Vorschläge oder Warnungen zu JavaScript-Code hinzuzufügen. Dadurch werden sie einfacher zu lesen und zu verstehen. Kommentare können auch verwendet werden, um Code zu deaktivieren und so dessen Ausführung zu verhindern; dies kann ein wertvolles Debugging-Tool sein.

JavaScript bietet zwei langjährige Methoden, um Kommentare zu erstellen: Zeilenkommentare und Blockkommentare. Zusätzlich gibt es eine spezielle Hashbang-Kommentarsyntax.

### Zeilenkommentare

Die erste Methode ist der `//`-Kommentar. Dieser macht den gesamten Text, der ihm auf derselben Zeile folgt, zu einem Kommentar. Zum Beispiel:

```js
function comment() {
  // This is a one line JavaScript comment
  console.log("Hello world!");
}
comment();
```

### Blockkommentare

Die zweite Methode ist der `/* */`-Stil, der viel flexibler ist.

Beispielsweise lässt er sich in einer einzigen Zeile verwenden:

```js
function comment() {
  /* This is a one line JavaScript comment */
  console.log("Hello world!");
}
comment();
```

Er kann auch für mehrere Zeilen genutzt werden, wie dieses Beispiel zeigt:

```js
function comment() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log("Hello world!");
}
comment();
```

Er kann auch mitten in einer Zeile verwendet werden, obwohl dies die Lesbarkeit erschweren kann, daher sollte es mit Vorsicht verwendet werden:

```js
function comment(x) {
  console.log("Hello " + x /* insert the value of x */ + " !");
}
comment("world");
```

Darüber hinaus können Blockkommentare genutzt werden, um Code zu deaktivieren und so dessen Ausführung zu verhindern, indem Code in einem Kommentar eingebettet wird, etwa so:

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

In diesem Fall wird der Aufruf von `console.log()` niemals ausgeführt, da er sich in einem Kommentar befindet. Jede Anzahl von Codezeilen kann auf diese Weise deaktiviert werden.

Blockkommentare, die mindestens einen Zeilenumbruch enthalten, verhalten sich in der [automatischen Einfügung von Semikolons](#automatische_einfügung_von_semikolons) wie [Zeilenumbrüche](#zeilenumbrüche).

### Hashbang-Kommentare

Es gibt eine spezielle dritte Kommentarsyntax, den **Hashbang-Kommentar**. Ein Hashbang-Kommentar verhält sich genau wie ein zeilenbegrenzender Kommentar (`//`), beginnt jedoch mit `#!` und **ist nur am absoluten Anfang eines Skripts oder Moduls gültig**. Es darf sich auch kein Leerzeichen vor dem `#!` befinden. Der Kommentar besteht aus allen Zeichen, die auf `#!` bis zum Ende der ersten Zeile folgen; nur ein einziger solcher Kommentar ist zulässig.

Hashbang-Kommentare in JavaScript ähneln [Shebangs in Unix](<https://de.wikipedia.org/wiki/Shebang_(Unix)>), mit denen der Pfad zu einem bestimmten JavaScript-Interpreter angegeben wird, der zur Ausführung des Skripts genutzt werden soll. Bevor der Hashbang-Kommentar standardisiert wurde, war er de-facto in Nicht-Browser-Umgebungen wie Node.js implementiert, wo er aus dem Quelltext entfernt wurde, bevor er an die Engine weitergegeben wurde. Ein Beispiel:

```js
#!/usr/bin/env node

console.log("Hello world");
```

Der JavaScript-Interpreter wird ihn als normalen Kommentar behandeln – eine semantische Bedeutung hat er nur für die Shell, wenn das Skript direkt in einer Shell ausgeführt wird.

> [!WARNING]
> Wenn Skripts direkt in einer Shell-Umgebung ausführbar sein sollen, kodieren Sie diese in UTF-8 ohne ein [BOM](https://de.wikipedia.org/wiki/Byte_Order_Mark). Obwohl ein BOM im Browser keinen Schaden anrichtet – da es während der UTF-8-Dekodierung entfernt wird, bevor der Quelltext analysiert wird – wird ein Unix/Linux-Shell das Hashbang nicht erkennen, wenn es von einem BOM-Zeichen eingeleitet wird.

Die `#!`-Kommentarsyntax soll nur verwendet werden, um einen JavaScript-Interpreter zu spezifizieren. Für alle anderen Fälle nutzen Sie einfach einen `//`-Kommentar (oder mehrzeiligen Kommentar).

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

In JavaScript bestehen Bezeichner üblicherweise aus alphanumerischen Zeichen, Unterstrichen (`_`) und Dollarzeichen (`$`). Sie dürfen nicht mit einer Zahl beginnen. JavaScript-Bezeichner sind jedoch nicht nur auf {{Glossary("ASCII", "ASCII")}} beschränkt – viele Unicode-Codepunkte sind ebenfalls zulässig. Insbesondere:

- Startzeichen können jedes Zeichen in der Kategorie [ID_Start](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Start%7D) plus `_` und `$` sein.
- Nach dem ersten Zeichen können alle Zeichen in der Kategorie [ID_Continue](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Continue%7D) plus U+200C (ZWNJ) und U+200D (ZWJ) verwendet werden.

> [!NOTE]
> Falls Sie aus irgendeinem Grund JavaScript-Quelltext selbst analysieren müssen, gehen Sie nicht davon aus, dass alle Bezeichner dem Muster `/[A-Za-z_$][\w$]*/` (also nur ASCII!) folgen. Der Bereich der Bezeichner kann durch das Regex `/[$_\p{ID_Start}][$\p{ID_Continue}]*/u` (ohne Unicode-Escape-Sequenzen) beschrieben werden.

Darüber hinaus erlaubt JavaScript die Verwendung von [Unicode-Escape-Sequenzen](#unicode-escape-sequenzen) in der Form `\u0000` oder `\u{000000}` in Bezeichnern, die denselben Zeichenfolgenwert wie die tatsächlichen Unicode-Zeichen codieren. Zum Beispiel sind `你好` und `\u4f60\u597d` dieselben Bezeichner.

```js-nolint
const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello
```

Nicht an allen Stellen ist der gesamte Bereich der Bezeichner zulässig. Bestimmte Syntaxen wie Funktionsdeklarationen, Funktionsausdrücke und Variablendeklarationen erfordern Bezeichnernamen, die keine [reservierten Wörter](#reservierte_wörter) sind.

```js-nolint example-bad
function import() {} // Illegal: import is a reserved word.
```

Am auffälligsten ist, dass private Eigenschaften und Objekt-Eigenschaften reservierte Wörter zulassen.

```js
const obj = { import: "value" }; // Legal despite `import` being reserved
class C {
  #import = "value";
}
```

## Schlüsselwörter

_Schlüsselwörter_ sind Token, die wie Bezeichner aussehen, aber spezielle Bedeutungen in JavaScript haben. Beispiel: Das Schlüsselwort [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) vor einer Funktionsdeklaration zeigt an, dass die Funktion asynchron ist.

Einige Schlüsselwörter sind _reserviert_, was bedeutet, dass sie nicht als Bezeichner für Variablendeklarationen, Funktionsdeklarationen usw. verwendet werden können. Sie werden oft _reservierte Wörter_ genannt. [Eine Liste dieser reservierten Wörter](#reservierte_wörter) ist unten aufgeführt. Nicht alle Schlüsselwörter sind reserviert – z. B. kann `async` überall als Bezeichner verwendet werden. Einige Schlüsselwörter sind nur _kontextuell reserviert_ – z. B. ist `await` nur im Körper einer async-Funktion reserviert, und `let` ist nur in [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-Code oder `const`- und `let`-Deklarationen reserviert.

Bezeichner werden immer anhand ihres _Zeichenkettenwerts_ verglichen, sodass Escape-Sequenzen interpretiert werden. Beispiel: Das folgende bleibt ein Syntaxfehler:

```js-nolint example-bad
const els\u{65} = 1;
// `els\u{65}` encodes the same identifier as `else`
```

### Reservierte Wörter

Diese Schlüsselwörter können nicht als Bezeichner für Variablen, Funktionen, Klassen usw. in einem JavaScript-Quelltext verwendet werden.

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

Die folgenden Schlüsselwörter sind nur reserviert, wenn sie in strict mode-Code gefunden werden:

- {{jsxref("Statements/let", "let")}} (auch reserviert in `const`-, `let`- und Klassen-Deklarationen)
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- {{jsxref("Operators/yield", "yield")}} (auch reserviert in Generator-Funktionen)

Die folgenden sind nur reserviert, wenn sie in Modulcode oder im Körper von async Funktionen gefunden werden:

- [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

### Zukünftig reservierte Wörter

Die folgenden Wörter sind vom ECMAScript-Standard als zukünftige Schlüsselwörter reserviert. Sie haben derzeit keine spezielle Funktionalität, könnten aber in Zukunft genutzt werden, und dürfen daher nicht als Bezeichner verwendet werden.

Diese sind immer reserviert:

- `enum`

Die folgenden sind nur in strict mode-Code reserviert:

- `implements`
- `interface`
- `package`
- `private`
- `protected`
- `public`

#### In älteren Standards reservierte Wörter

Die folgenden Wörter sind von älteren ECMAScript-Spezifikationen (ECMAScript 1 bis 3) als zukünftige Schlüsselwörter reserviert:

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

### Bezeichner mit besonderen Bedeutungen

Einige Bezeichner haben eine besondere Bedeutung in bestimmten Kontexten, ohne reservierte Wörter zu sein. Dazu gehören:

- {{jsxref("Functions/arguments", "arguments")}} (kein Schlüsselwort, kann jedoch im strict mode nicht als Bezeichner deklariert werden)
- `as` ([`import * as ns from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import))
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)
- {{jsxref("Global_Objects/eval", "eval")}} (kein Schlüsselwort, kann jedoch im strict mode nicht als Bezeichner deklariert werden)
- `from` ([`import x from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import))
- {{jsxref("Functions/get", "get")}}
- [`of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- {{jsxref("Functions/set", "set")}}

## Literale

> [!NOTE]
> Dieser Abschnitt behandelt Literale, die atomare Token sind. [Objekt-Literale](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Array-Literale](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation) sind [Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators), die aus einer Reihe von Token bestehen.

### Null-Literal

Siehe auch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) für weitere Informationen.

```js-nolint
null
```

### Boolean-Literal

Siehe auch [Boolean-Typ](/de/docs/Web/JavaScript/Data_structures#boolean_type) für weitere Informationen.

```js-nolint
true
false
```

### Numerische Literale

Die [Number](/de/docs/Web/JavaScript/Data_structures#number_type)- und [BigInt](/de/docs/Web/JavaScript/Data_structures#bigint_type)-Typen verwenden numerische Literale.

#### Dezimal

```js-nolint
1234567890
42
```

Dezimal-Literale können mit einer Null (`0`) beginnen, gefolgt von einer weiteren Dezimalstelle. Wenn jedoch alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies gilt als veraltete Syntax, und Zahlenliterale, die mit `0` beginnen, führen in [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) zu einem Syntaxfehler – verwenden Sie stattdessen das Präfix `0o`.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

##### Exponential

Das dezimale exponential-Literal wird im folgenden Format angegeben: `beN`; wobei `b` eine Basiszahl (Ganzzahl oder Gleitkomma) ist, gefolgt von einem `E` oder `e` (der als Trennzeichen oder _Exponenten-Indikator_ dient) und `N`, welches die _Exponent-_ oder _Potenz-Zahl_ ist – eine vorzeichenbehaftete Ganzzahl.

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

Der binäre Zahlensyntax verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "B" (`0b` oder `0B`). Jedes Zeichen nach "`0b`", das nicht `0` oder `1` ist, beendet die Reihenfolge des Literals.

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### Oktal

Die oktale Zahlensyntax verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "O" (`0o` oder `0O`). Jedes Zeichen außerhalb des Bereichs (01234567) beendet die Reihenfolge des Literals.

```js-nolint
0O755 // 493
0o644 // 420
```

#### Hexadezimal

Die hexadezimale Zahlensyntax verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "X" (`0x` oder `0X`). Jedes Zeichen außerhalb des Bereichs (0123456789ABCDEF) beendet die Reihenfolge des Literals.

```js-nolint
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

#### BigInt Literal

Der [BigInt](/de/docs/Web/JavaScript/Data_structures#bigint_type)-Typ ist ein numerischer primitiver Typ in JavaScript, der Ganzzahlen mit beliebiger Präzision darstellen kann. BigInt Literal werden erstellt, indem ein `n` an das Ende einer Ganzzahl angehängt wird.

```js-nolint
123456789123456789n     // 123456789123456789
0o777777777777n         // 68719476735
0x123456789ABCDEFn      // 81985529216486895
0b11101001010101010101n // 955733
```

BigInt Literale dürfen nicht mit `0` beginnen, um Verwechslungen mit veralteten oktalen Literalen zu vermeiden.

```js-nolint example-bad
0755n; // SyntaxError: invalid BigInt syntax
```

Für oktale `BigInt`-Zahlen verwenden Sie immer eine Null, gefolgt von dem Buchstaben "o" (groß oder klein):

```js example-good
0o755n;
```

Weitere Informationen über `BigInt` finden Sie unter [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Data_structures#bigint_type).

#### Numerische Trennzeichen

Um die Lesbarkeit numerischer Literale zu verbessern, können Unterstriche (`_`, `U+005F`) als Trennzeichen verwendet werden:

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

Ein [String](/de/docs/Web/JavaScript/Data_structures#string_type)-Literal ist null oder mehr Unicode-Codepunkte, die in einfache oder doppelte Anführungszeichen eingeschlossen sind. Unicode-Codepunkte können auch durch eine Escape-Sequenz dargestellt werden. Alle Codepunkte dürfen wörtlich in einem String-Literal erscheinen, außer diesen Codepunkten:

- U+005C \ (Backslash)
- U+000D \<CR>
- U+000A \<LF>
- Die gleiche Art von Anführungszeichen, die das String-Literal beginnt

Alle Codepunkte dürfen in Form eines Escape-Sequenz auftreten. String-Literale werten sich zu ECMAScript String-Werten aus. Bei der Generierung dieser String-Werte werden Unicode-Codepunkte in UTF-16 kodiert.

```js-nolint
'foo'
"bar"
```

Die folgenden Unterabschnitte beschreiben die verschiedenen Escape-Sequenzen (`\` gefolgt von einem oder mehreren Zeichen), die in String-Literals verfügbar sind. Escape-Sequenzen, die hier nicht aufgeführt sind, werden zu "Identitäts-Escapes", die dem Codepunkt selbst entsprechen. Zum Beispiel ist `\z` das gleiche wie `z`. Es gibt eine veraltete oktale Escape-Sequenz-Syntax, die auf der Seite [Veraltete und obsolte Features](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) beschrieben wird. Viele dieser Escape-Sequenzen sind auch in regulären Ausdrücken gültig – siehe [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

#### Escape-Sequenzen

Spezielle Zeichen können durch Escape-Sequenzen kodiert werden:

| Escape-Sequenz                                         | Unicode-Codepunkt                                   |
| ------------------------------------------------------ | --------------------------------------------------- |
| `\0`                                                   | Null-Zeichen (U+0000 NULL)                          |
| `\'`                                                   | einfacher Apostroph (U+0027 APOSTROPHE)             |
| `\"`                                                   | Doppeltes Anführungszeichen (U+0022 QUOTATION MARK) |
| `\\`                                                   | Backslash (U+005C REVERSE SOLIDUS)                  |
| `\n`                                                   | Neue Zeile (U+000A LINE FEED; LF)                   |
| `\r`                                                   | Wagenrücklauf (U+000D CARRIAGE RETURN; CR)          |
| `\v`                                                   | Vertikaler Tabulator (U+000B LINE TABULATION)       |
| `\t`                                                   | Tabulator (U+0009 CHARACTER TABULATION)             |
| `\b`                                                   | Rückschritt (U+0008 BACKSPACE)                      |
| `\f`                                                   | Formularvorschub (U+000C FORM FEED)                 |
| `\` gefolgt von einem [Zeilenumbruch](#zeilenumbrüche) | leerer String                                       |

Die letzte Escape-Sequenz, `\` gefolgt von einem Zeilenumbruch, ist nützlich, um ein String-Literal über mehrere Zeilen zu verteilen, ohne dessen Bedeutung zu ändern.

```js
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Stellen Sie sicher, dass nach dem Backslash kein Leerzeichen oder ein anderes Zeichen steht (außer einem Zeilenumbruch), da es sonst nicht funktioniert. Falls die nächste Zeile eingerückt ist, werden die zusätzlichen Leerzeichen ebenfalls im String-Wert enthalten sein.

Sie können auch den [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition)-Operator verwenden, um mehrere Strings zusammenzufügen, wie hier:

```js
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Beide Methoden ergeben identische Strings.

#### Hexadezimale Escape-Sequenzen

Hexadezimale Escape-Sequenzen bestehen aus `\x`, gefolgt von genau zwei hexadezimalen Ziffern, die eine Code-Einheit oder Codepunkt im Bereich 0x0000 bis 0x00FF darstellen.

```js
"\xA9"; // "©"
```

#### Unicode-Escape-Sequenzen

Eine Unicode-Escape-Sequenz besteht aus genau vier hexadezimalen Ziffern nach `\u`. Sie stellt eine Code-Einheit in der UTF-16-Codierung dar. Für Codepunkte von U+0000 bis U+FFFF entspricht die Code-Einheit dem Codepunkt. Codepunkte von U+10000 bis U+10FFFF benötigen zwei Escape-Sequenzen, welche die zwei Code-Einheiten (ein Surrogatpaar) darstellen, die zur Codierung des Zeichens verwendet werden. Das Surrogatpaar unterscheidet sich dabei vom Codepunkt.

Siehe auch {{jsxref("String.fromCharCode()")}} und {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Unicode-Codepunkt-Escapes

Eine Unicode-Codepunkt-Escape besteht aus `\u{`, gefolgt von einem Codepunkt als Hexadezimalwert, gefolgt von `}`. Die Werte der hexadezimalen Ziffern müssen im Bereich 0 und 0x10FFFF (inklusive) liegen. Codepunkte im Bereich U+10000 bis U+10FFFF müssen nicht als Surrogatpaar dargestellt werden.

Siehe auch {{jsxref("String.fromCodePoint()")}} und {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// the same character represented as a surrogate pair
"\uD87E\uDC04";
```

### RegExp-Literale

Regulärer-Ausdruck-Literale werden durch zwei Schrägstriche (`/`) eingefasst. Der Lexer verarbeitet alle Zeichen bis zum nächsten nicht-escaped Schrägstrich oder dem Ende der Zeile, es sei denn, der Schrägstrich befindet sich innerhalb einer Zeichenklasse (`[]`). Einige Zeichen (namentlich diejenigen, die [Bezeichner-Bestandteile](#bezeichner) sind) können nach dem schließenden Schrägstrich auftreten, als Kennzeichen.

Das lexikalische System ist sehr tolerant: Nicht alle regulären Ausdrucksliterale, die als einzelnes Token erkannt werden, sind gültige reguläre Ausdrücke.

Siehe auch {{jsxref("RegExp")}} für weitere Informationen.

```js-nolint
/ab+c/g
/[/]/
```

Ein regulärer Ausdruck kann nicht mit zwei Schrägstrichen (`//`) beginnen, da dies als Zeilenkommentar interpretiert wird. Um einen leeren regulären Ausdruck zu spezifizieren, verwenden Sie `/(?:)/`.

### Template-Literale

Ein Template-Literal besteht aus mehreren Token: `` `xxx${ `` (Kopf des Templates), `}xxx${` (Mitte des Templates) und `` }xxx` `` (Ende des Templates) sind individuelle Token, während beliebige Ausdrücke zwischen ihnen eingefügt werden können.

Siehe auch [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) für weitere Informationen.

```js-nolint
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag`string text ${expression} string text`
```

## Automatische Einfügung von Semikolons

Die Syntax einiger [JavaScript-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements) erfordert Semikolons (`;`) am Ende. Dazu gehören:

- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- [Ausdrucks-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement)
- [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue), [`break`](/de/docs/Web/JavaScript/Reference/Statements/break), [`return`](/de/docs/Web/JavaScript/Reference/Statements/return), [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)
- Deklarationen von Klassenfeldern ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_properties))
- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import), [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)

Um die Sprache jedoch zugänglicher und praktischer zu machen, ist JavaScript in der Lage, Semikolons automatisch in den Tokenstrom einzufügen, damit einige ungültige Token-Sequenzen zu gültiger Syntax "korrigiert" werden können. Dieser Schritt erfolgt, nachdem der Programmtext gemäß der lexikalischen Grammatik zu Token analysiert wurde. Es gibt drei Fälle, in denen Semikolons automatisch eingefügt werden:

1\. Wenn ein Token, das nicht von der Grammatik erlaubt ist, auftritt, und es von dem vorherigen Token durch mindestens einen [Zeilenumbruch](#zeilenumbrüche) (einschließlich eines Blockkommentars, der mindestens einen Zeilenumbruch enthält) oder durch ein "}" getrennt ist, dann wird vor dem Token ein Semikolon eingefügt.

```js-nolint
{ 1
2 } 3

// is transformed by ASI into:

{ 1
;2 ;} 3;

// Which is valid grammar encoding three statements,
// each consisting of a number literal
```

Das schließende ")" von [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) wird als Sonderfall durch diese Regel ebenfalls berücksichtigt.

```js-nolint
do {
  // ...
} while (condition) /* ; */ // ASI here
const a = 1
```

Jedoch werden keine Semikolons eingefügt, wenn das Semikolon dann als Trennzeichen im Kopf der [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Anweisung stehen würde.

```js-nolint example-bad
for (
  let a = 1 // No ASI here
  a < 10 // No ASI here
  a++
) {}
```

Semikolons werden auch niemals als [leere Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Empty) eingefügt. Zum Beispiel würde der folgende Code, falls ein Semikolon nach dem ")" eingefügt wird, gültig werden, wobei eine leere Anweisung als `if`-Körper und die `const`-Deklaration als separate Anweisung existieren würden. Aufgrund der Regel, dass automatisch eingefügte Semikolons keine leeren Anweisungen werden können, wird dies dazu führen, dass eine [Deklaration](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations) zum Körper der `if`-Anweisung wird, was nicht gültig ist.

```js-nolint example-bad
if (Math.random() > 0.5)
const x = 1 // SyntaxError: Unexpected token 'const'
```

2\. Wenn das Ende des Eingabe-Tokenstroms erreicht ist und der Parser den Tokenstrom nicht als vollständiges Programm analysieren kann, wird am Ende ein Semikolon eingefügt.

```js-nolint
const a = 1 /* ; */ // ASI here
```

Diese Regel ergänzt die vorherige Regel, speziell für den Fall, dass es kein „störendes Token“ gibt, sondern das Ende des Eingabe-Tokenstroms erreicht wurde.

3\. Wenn die Grammatik an einer Stelle Zeilenumbrüche verbietet und ein Zeilenumbruch gefunden wird, wird ein Semikolon eingefügt. Diese Stellen schließen ein:

- `expr <hier> ++`, `expr <hier> --`
- `continue <hier> lbl`
- `break <hier> lbl`
- `return <hier> expr`
- `throw <hier> expr`
- `yield <hier> expr`
- `yield <hier> * expr`
- `(param) <hier> => {}`
- `async <hier> function`, `async <hier> prop()`, `async <hier> function*`, `async <hier> *prop()`, `async <hier> (param) <hier> => {}`

Hier wird [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment) nicht als Nachstell-Operator für die Variable `b` behandelt, da ein Zeilenumbruch zwischen `b` und `++` auftritt.

```js-nolint
a = b
++c

// is transformed by ASI into

a = b;
++c;
```

Hier kehrt die `return`-Anweisung `undefined` zurück, und `a + b` wird zu einer nicht erreichbaren Anweisung.

```js-nolint
return
a + b

// is transformed by ASI into

return;
a + b;
```

Beachten Sie, dass ASI nur ausgelöst wird, wenn ein Zeilenumbruch Tokens trennt, die ansonsten eine ungültige Syntax erzeugen würden. Wenn das nächste Token als Teil einer gültigen Struktur analysiert werden kann, werden keine Semikolons eingefügt. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()

const b = 1
[1, 2, 3].forEach(console.log)
```

Da `()` als Funktionsaufruf betrachtet werden kann, würde dies normalerweise die ASI nicht auslösen. Ebenso könnte `[]` ein Member-Zugriff sein. Der obige Code ist gleichbedeutend mit:

```js-nolint example-bad
const a = 1(1).toString();

const b = 1[1, 2, 3].forEach(console.log);
```

Dies ist zufällig gültige Syntax. `1[1, 2, 3]` ist ein [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) mit einem [Komma](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator)-verknüpften Ausdruck. Daher würden Sie Fehler wie „1 ist keine Funktion“ und „Eigenschaften von undefined können nicht gelesen werden (lesen von ‚forEach‘)“ erhalten, wenn der Code ausgeführt wird.

Innerhalb von Klassen können Klassenfelder und Generator-Methoden ebenfalls zu Schwierigkeiten führen.

```js-nolint example-bad
class A {
  a = 1
  *gen() {}
}
```

Es wird interpretiert als:

```js-nolint example-bad
class A {
  a = 1 * gen() {}
}
```

Und daher wird es ein Syntaxfehler um `{`.

Folgende Faustregeln können hilfreich sein, wenn Sie einen semikolonlosen Stil durchsetzen wollen:

- Schreiben Sie das Nachstell-`++` und `--` in derselben Zeile wie ihre Operanden.

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

- Ebenso sollte der Label-Bezeichner nach dem Schlüsselwort `break` oder `continue` in derselben Zeile wie das Schlüsselwort stehen.

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

- Das `=>` einer Pfeilfunktion sollte in derselben Zeile wie das Ende ihrer Parameter stehen.

  ```js-nolint example-bad
  const foo = (a, b)
    => a + b
  ```

  ```js-nolint example-good
  const foo = (a, b) =>
    a + b
  ```

- Das `async` von async-Funktionen, Methoden usw. darf nicht direkt von einem Zeilenumbruch gefolgt werden.

  ```js-nolint example-bad
  async
  function foo() {}
  ```

  ```js-nolint example-good
  async function
  foo() {}
  ```

- Wenn eine Zeile mit einem der Zeichen `(`, `[`, `` ` ``, `+`, `-`, `/` (wie es bei regex-Literalen der Fall ist) beginnt, setzen Sie ein Semikolon davor oder beenden Sie die vorherige Zeile mit einem Semikolon.

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

- Klassenfelder sollten vorzugsweise immer mit Semikolons beendet werden — zusätzlich zur vorherigen Regel (die eine Felderklärung einschließt, die von einer [berechneten Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) gefolgt wird, da diese mit `[` beginnt), sind Semikolons auch erforderlich zwischen einer Felderklärung und einer Generator-Methode.

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
- [Micro-feature from ES6, now in Firefox Aurora and Nightly: binary and octal numbers](https://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/) von Jeff Walden (2013)
- [JavaScript character escape sequences](https://mathiasbynens.be/notes/javascript-escapes) von Mathias Bynens (2011)

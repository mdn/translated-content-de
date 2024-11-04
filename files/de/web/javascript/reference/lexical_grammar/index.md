---
title: Lexikalische Grammatik
slug: Web/JavaScript/Reference/Lexical_grammar
l10n:
  sourceCommit: b84ae757655f5fadbad5d8576f525b3bcef8a5a4
---

{{jsSidebar("More")}}

Diese Seite beschreibt die lexikalische Grammatik von JavaScript. Der JavaScript-Quelltext ist einfach eine Zeichenfolge – damit der Interpreter ihn versteht, muss der Text in eine strukturiertere Darstellung _geparst_ werden. Der erste Schritt des Parsings wird als [lexikalische Analyse](https://en.wikipedia.org/wiki/Lexical_analysis) bezeichnet, bei der der Text von links nach rechts gescannt und in eine Sequenz von einzelnen, atomaren Eingabeelementen umgewandelt wird. Einige Eingabeelemente sind für den Interpreter unerheblich und werden nach diesem Schritt entfernt – dazu gehören [Leerzeichen](#leerzeichen) und [Kommentare](#kommentare). Die anderen, einschließlich [Bezeichner](#bezeichner), [Schlüsselwörter](#schlüsselwörter), [Literale](#literale) und Punksymbole (meistens [Operatoren](/de/docs/Web/JavaScript/Reference/Operators)), werden für weitere syntaktische Analysen verwendet. [Zeilenabschlüsse](#zeilenenden) und mehrzeilige Kommentare sind ebenfalls syntaktisch unerheblich, aber sie führen den Prozess der [automatischen Semikoloneinfügung](#automatische_semikoloneinfügung), um bestimmte ungültige Tokensequenzen gültig zu machen.

## Steuerzeichen für Formate

Steuerzeichen für Formate haben keine visuelle Darstellung, sondern werden verwendet, um die Interpretation von Text zu steuern.

| Codepoint | Name                  | Abkürzung | Beschreibung                                                                                                                                                                                                          |
| --------- | --------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| U+200C    | Zero width non-joiner | \<ZWNJ>   | Wird zwischen Zeichen platziert, um zu verhindern, dass diese in bestimmten Sprachen zu Ligaturen verbunden werden ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_non-joiner)).                                |
| U+200D    | Zero width joiner     | \<ZWJ>    | Wird zwischen Zeichen platziert, die normalerweise nicht verbunden sind, um die Zeichen in bestimmten Sprachen in ihrer verbundenen Form darzustellen ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_joiner)). |
| U+FEFF    | Byte order mark       | \<BOM>    | Wird am Anfang des Skripts verwendet, um es als Unicode zu markieren und die Erkennung der Textcodierung und Byte-Reihenfolge zu ermöglichen ([Wikipedia](https://en.wikipedia.org/wiki/Byte_order_mark)).            |

Im JavaScript-Quelltext werden \<ZWNJ> und \<ZWJ> als Teile von [Bezeichnern](#bezeichner) behandelt, während \<BOM> (auch als Zero-width no-break space \<ZWNBSP> bezeichnet, wenn es nicht am Anfang des Textes steht) als [Leerzeichen](#leerzeichen) behandelt wird.

## Leerzeichen

{{Glossary("Whitespace", "Leerzeichen")}} Zeichen verbessern die Lesbarkeit des Quelltexts und trennen Tokens voneinander. Diese Zeichen sind normalerweise für die Funktionalität des Codes nicht notwendig. [Minifizierungswerkzeuge](https://en.wikipedia.org/wiki/Minification_%28programming%29) werden oft verwendet, um Leerzeichen zu entfernen, um die zu übertragenden Datenmengen zu reduzieren.

| Codepoint | Name                       | Abkürzung | Beschreibung                                                                                   | Escape-Sequenz |
| --------- | -------------------------- | --------- | ---------------------------------------------------------------------------------------------- | -------------- |
| U+0009    | Charaktertabulator         | \<TAB>    | Horizontaler Tabulator                                                                         | \t             |
| U+000B    | Zeilentabulator            | \<VT>     | Vertikaler Tabulator                                                                           | \v             |
| U+000C    | Formularvorschub           | \<FF>     | Seitenvorschubsteuerzeichen ([Wikipedia](https://en.wikipedia.org/wiki/Page_break#Form_feed)). | \f             |
| U+0020    | Leerzeichen                | \<SP>     | Normales Leerzeichen                                                                           |                |
| U+00A0    | Geschütztes Leerzeichen    | \<NBSP>   | Normales Leerzeichen, aber keine Stelle, an der ein Zeilenumbruch zulässig ist                 |                |
| U+FEFF    | Zero-width no-break space  | \<ZWNBSP> | Wenn es nicht am Anfang eines Skripts steht, ist das BOM-Marker ein normales Leerzeichen.      |                |
| Andere    | Andere Unicode-Leerzeichen | \<USP>    | [Zeichen in der allgemeinen Kategorie "Space_Separator"][space separator set]                  |                |

[space separator set]: https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D

> [!NOTE]
> Von den [Zeichen mit der Eigenschaft "White_Space", die nicht in der allgemeinen Kategorie "Space_Separator" sind](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BWhite_Space%7D%26%5CP%7BGeneral_Category%3DSpace_Separator%7D), werden U+0009, U+000B und U+000C in JavaScript immer noch als Leerzeichen behandelt; U+0085 NEXT LINE hat keine spezielle Rolle; andere werden zum Satz von [Zeilenabschlusszeichen](#zeilenenden).

> [!NOTE]
> Änderungen am Unicode-Standard, der von der JavaScript-Engine verwendet wird, können das Verhalten von Programmen beeinflussen. Zum Beispiel wurde in ES2016 der Referenz-Unicode-Standard von 5.1 auf 8.0.0 aktualisiert, was dazu führte, dass U+180E MONGOLIAN VOWEL SEPARATOR von der Kategorie "Space_Separator" in die Kategorie "Format (Cf)" verschoben wurde und so kein Leerzeichen mehr war. Folglich änderte sich das Ergebnis von [`"\u180E".trim().length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim) von `0` auf `1`.

## Zeilenenden

Zusätzlich zu [Leerzeichen](#leerzeichen) Zeichen werden Zeilenendenzeichen verwendet, um die Lesbarkeit des Quelltexts zu verbessern. In einigen Fällen können Zeilenenden jedoch die Ausführung von JavaScript-Code beeinflussen, da es einige Stellen gibt, an denen sie verboten sind. Zeilenenden beeinflussen auch den Prozess der [automatischen Semikoloneinfügung](#automatische_semikoloneinfügung).

Außerhalb des Kontexts der lexikalischen Grammatik werden Leerzeichen und Zeilenenden oft verwechselt. Zum Beispiel entfernt {{jsxref("String.prototype.trim()")}} alle Leerzeichen und Zeilenenden vom Anfang und Ende eines Strings. Die `\s` [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) in regulären Ausdrücken umfasst alle Leerzeichen und Zeilenenden.

Nur die folgenden Unicode-Codepunkte werden in ECMAScript als Zeilenenden behandelt, andere Zeichenumbrüche werden als Leerzeichen behandelt (zum Beispiel wird die nächste Zeile, NEL, U+0085 als Leerzeichen betrachtet).

| Codepoint | Name          | Abkürzung | Beschreibung                                                | Escape-Sequenz |
| --------- | ------------- | --------- | ----------------------------------------------------------- | -------------- |
| U+000A    | Zeilenumbruch | \<LF>     | Neuer Zeilencharakter in UNIX-Systemen.                     | \n             |
| U+000D    | Wagenrücklauf | \<CR>     | Neuer Zeilencharakter in Commodore und frühen Mac-Systemen. | \r             |
| U+2028    | Zeilentrenner | \<LS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline)          |                |
| U+2029    | Absatztrenner | \<PS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline)          |                |

## Kommentare

Kommentare werden verwendet, um Hinweise, Notizen, Vorschläge oder Warnungen zum JavaScript-Code hinzuzufügen. Dies kann es einfacher machen, den Code zu lesen und zu verstehen. Sie können auch verwendet werden, um Code zu deaktivieren und so zu verhindern, dass er ausgeführt wird; dies kann ein wertvolles Debugging-Werkzeug sein.

JavaScript bietet zwei altbewährte Möglichkeiten, Kommentare im Code zu hinterlassen: Zeilenkommentare und Blockkommentare. Darüber hinaus gibt es eine spezielle Hashbang-Kommentarsyntax.

### Zeilenkommentare

Der erste Weg ist der `//` Kommentar; dieser macht den gesamten Text, der ihm in derselben Zeile folgt, zu einem Kommentar. Zum Beispiel:

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

Sie können auch Mehrzeilenkommentare erstellen, wie hier:

```js
function comment() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log("Hello world!");
}
comment();
```

Sie können ihn auch in der Mitte einer Zeile verwenden, obwohl dies den Code möglicherweise schwerer lesbar macht, sodass dies mit Vorsicht erfolgen sollte:

```js
function comment(x) {
  console.log("Hello " + x /* insert the value of x */ + " !");
}
comment("world");
```

Sie können ihn auch verwenden, um Code zu deaktivieren, damit er nicht ausgeführt wird, indem Sie Code in einem Kommentar umschließen, wie hier:

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

In diesem Fall wird der `console.log()` Aufruf nie ausgeführt, da er sich in einem Kommentar befindet. Beliebig viele Zeilen Code können auf diese Weise deaktiviert werden.

Blockkommentare, die mindestens einen Zeilenendezeichen enthalten, verhalten sich bei der [automatischen Semikoloneinfügung](#automatische_semikoloneinfügung) wie [Zeilenendezeichen](#zeilenenden).

### Hashbang-Kommentare

Es gibt eine spezielle dritte Kommentarsyntax, den **Hashbang-Kommentar**. Ein Hashbang-Kommentar verhält sich genau wie ein Zeilenkommentar (`//`), mit der Ausnahme, dass er mit `#!` beginnt und **nur am absoluten Anfang eines Skripts oder Moduls gültig ist**. Beachten Sie auch, dass vor `#!` keine Art von Leerzeichen erlaubt ist. Der Kommentar besteht aus allen Zeichen nach `#!` bis zum Ende der ersten Zeile; nur ein solcher Kommentar ist erlaubt.

Hashbang-Kommentare in JavaScript ähneln [Shebangs in Unix](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) die den Pfad zu einem bestimmten JavaScript-Interpreter angeben, den Sie zur Ausführung des Skripts verwenden möchten. Bevor der Hashbang-Kommentar standardisiert wurde, war er bereits de-facto in nicht-Browser-Hosts wie Node.js implementiert, wo er aus dem Quelltext entfernt wurde, bevor er an die Engine übergeben wurde. Ein Beispiel ist wie folgt:

```js
#!/usr/bin/env node

console.log("Hello world");
```

Der JavaScript-Interpreter behandelt es als normalen Kommentar – es hat nur für die Shell semantische Bedeutung, wenn das Skript direkt in einer Shell ausgeführt wird.

> [!WARNING]
> Wenn Sie möchten, dass Skripte direkt in einer Shell-Umgebung ausführbar sind, kodieren Sie sie in UTF-8 ohne ein [BOM](https://en.wikipedia.org/wiki/Byte_order_mark). Auch wenn ein BOM im Code, der in einem Browser ausgeführt wird, keine Probleme verursacht – da es während der UTF-8-Dekodierung entfernt wird, bevor der Quelltext analysiert wird – wird eine Unix/Linux-Shell das Hashbang nicht erkennen, wenn ihm ein BOM-Zeichen vorangestellt ist.

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

In JavaScript bestehen Bezeichner üblicherweise aus alphanumerischen Zeichen, Unterstrichen (`_`) und Dollarzeichen (`$`). Bezeichner dürfen nicht mit Zahlen beginnen. JavaScript-Bezeichner sind jedoch nicht nur auf {{Glossary("ASCII", "ASCII")}} beschränkt – auch viele Unicode-Codepunkte sind zugelassen. Genauer gesagt:

- Startzeichen können jedes Zeichen in der Kategorie [ID_Start](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Start%7D) plus `_` und `$` sein.
- Nach dem ersten Zeichen können Sie jedes Zeichen in der Kategorie [ID_Continue](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Continue%7D) plus U+200C (ZWNJ) und U+200D (ZWJ) verwenden.

> [!NOTE]
> Falls Sie aus irgendeinem Grund selbst JavaScript-Quellcode parsen müssen, gehen Sie nicht davon aus, dass alle Bezeichner dem Muster `/[A-Za-z_$][\w$]*/` (d.h. nur ASCII) folgen! Die Bandbreite der Bezeichner kann durch den regulären Ausdruck `/[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*/u` (ohne Unicode-Escape-Sequenzen) beschrieben werden.

Darüber hinaus erlaubt JavaScript die Verwendung von [Unicode-Escape-Sequenzen](#unicode-escape-sequenzen) in der Form von `\u0000` oder `\u{000000}` in Bezeichnern, die den gleichen Zeichenfolgenwert wie die tatsächlichen Unicode-Zeichen kodieren. Zum Beispiel sind `你好` und `\u4f60\u597d` die gleichen Bezeichner:

```js-nolint
const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello
```

Nicht alle Orte akzeptieren die gesamte Bandbreite der Bezeichner. Bestimmte Syntaxen, wie Funktionsdeklarationen, Funktionsausdrücke und Variablendeklarationen erfordern die Verwendung von Bezeichnernamen, die keine [reservierten Wörter](#reservierte_wörter) sind.

```js-nolint example-bad
function import() {} // Illegal: import is a reserved word.
```

Am bemerkenswertesten ist, dass private Eigenschaften und Objekteigenschaften reservierte Wörter zulassen.

```js
const obj = { import: "value" }; // Legal despite `import` being reserved
class C {
  #import = "value";
}
```

## Schlüsselwörter

_Schlüsselwörter_ sind Tokens, die wie Bezeichner aussehen, aber spezielle Bedeutungen in JavaScript haben. Zum Beispiel zeigt das Schlüsselwort [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) vor einer Funktionsdeklaration an, dass die Funktion asynchron ist.

Einige Schlüsselwörter sind _reserviert_, was bedeutet, dass sie nicht als Bezeichner für Variablendeklarationen, Funktionsdeklarationen usw. verwendet werden können. Sie werden oft als _reservierte Wörter_ bezeichnet. [Eine Liste dieser reservierten Wörter](#reservierte_wörter) wird unten bereitgestellt. Nicht alle Schlüsselwörter sind reserviert – zum Beispiel kann `async` überall als Bezeichner verwendet werden. Einige Schlüsselwörter sind nur _kontextuell reserviert_ – zum Beispiel ist `await` nur im Körper einer asynchronen Funktion reserviert, und `let` ist nur im strikten Modus, oder `const` und `let` Deklarationen reserviert.

Bezeichner werden immer nach _Zeichenfolgenwert_ verglichen, daher werden Escape-Sequenzen interpretiert. Zum Beispiel ist dies immer noch ein Syntaxfehler:

```js-nolint example-bad
const els\u{65} = 1;
// `els\u{65}` encodes the same identifier as `else`
```

### Reservierte Wörter

Diese Schlüsselwörter können nicht als Bezeichner für Variablen, Funktionen, Klassen usw. an irgendeiner Stelle im JavaScript-Quelltext verwendet werden.

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

Die folgenden sind nur reserviert, wenn sie in striktem Modus gefunden werden:

- {{jsxref("Statements/let", "let")}} (auch reserviert bei `const`, `let` und Klassendeklarationen)
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- {{jsxref("Operators/yield", "yield")}} (auch reserviert in Generator-Funktionskörpern)

Die folgenden sind nur reserviert, wenn sie in Modulkode oder in Körpern von asynchronen Funktionen gefunden werden:

- [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

### Zukünftige reservierte Wörter

Die folgenden sind vom ECMAScript-Standard als zukünftige Schlüsselwörter reserviert. Sie haben derzeit keine spezielle Funktionalität, könnten dies aber in Zukunft haben, daher können sie nicht als Bezeichner verwendet werden.

Diese sind immer reserviert:

- `enum`

Die folgenden sind nur reserviert, wenn sie in striktem Modus gefunden werden:

- `implements`
- `interface`
- `package`
- `private`
- `protected`
- `public`

#### Zukünftige reservierte Wörter in älteren Standards

Die folgenden sind in älteren ECMAScript-Spezifikationen (ECMAScript 1 bis 3) als zukünftige Schlüsselwörter reserviert.

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

### Bezeichner mit spezieller Bedeutung

Einige wenige Bezeichner haben eine spezielle Bedeutung in bestimmten Kontexten, ohne dass sie reservierte Wörter in irgendeiner Form sind. Diese beinhalten:

- {{jsxref("Functions/arguments", "arguments")}} (kein Schlüsselwort, kann jedoch im strengen Modus nicht als Bezeichner deklariert werden)
- `as` ([`import * as ns from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import))
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)
- {{jsxref("Global_Objects/eval", "eval")}} (kein Schlüsselwort, kann jedoch im strengen Modus nicht als Bezeichner deklariert werden)
- `from` ([`import x from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import))
- {{jsxref("Functions/get", "get")}}
- [`of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- {{jsxref("Functions/set", "set")}}

## Literale

> [!NOTE]
> Dieser Abschnitt bespricht Literale, die atomare Tokens sind. [Objektliterale](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Array-Literale](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation) sind [Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators), die aus einer Reihe von Tokens bestehen.

### Null-Literal

Siehe auch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) für weitere Informationen.

```js-nolint
null
```

### Boolean-Literal

Siehe auch [boolean type](/de/docs/Web/JavaScript/Data_structures#boolean_type) für weitere Informationen.

```js-nolint
true
false
```

### Numerische Literale

Die [Number](/de/docs/Web/JavaScript/Data_structures#number_type) und [BigInt](/de/docs/Web/JavaScript/Data_structures#bigint_type) Typen verwenden numerische Literale.

#### Dezimal

```js-nolint
1234567890
42
```

Dezimal-Literale können mit einer Null (`0`) gefolgt von einer anderen Dezimalziffer beginnen, aber wenn alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies gilt als veraltete Syntax, und Zahlenliterale mit dem Präfix `0`, unabhängig davon, ob sie als Oktal oder Dezimal interpretiert werden, führen im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) zu einem Syntaxfehler – verwenden Sie also stattdessen das `0o` Präfix.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

##### Exponential

Das dezimale exponentielle Literal wird durch das folgende Format angegeben: `beN`; wobei `b` eine Basiszahl (Ganzzahl oder Gleitkommazahl) ist, gefolgt von einem `E` oder `e` Zeichen (das als Trennzeichen oder _Exponentenzeichen_ fungiert) und `N`, das den _Exponenten_ oder _Potenz_ der Zahl darstellt – eine ganze Zahl mit Vorzeichen.

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

Die Syntax für binäre Zahlen verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "B" (`0b` oder `0B`). Jedes Zeichen nach dem `0b`, das nicht 0 oder 1 ist, beendet die Literal-Sequenz.

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### Oktal

Die Syntax für oktale Zahlen verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "O" (`0o` oder `0O`). Jedes Zeichen nach dem `0o`, das außerhalb des Bereichs (01234567) liegt, beendet die Literal-Sequenz.

```js-nolint
0O755 // 493
0o644 // 420
```

#### Hexadezimal

Die Syntax für hexadezimale Zahlen verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "X" (`0x` oder `0X`). Jedes Zeichen nach dem `0x`, das außerhalb des Bereichs (0123456789ABCDEF) liegt, beendet die Literal-Sequenz.

```js-nolint
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

#### BigInt-Literal

Der [BigInt](/de/docs/Web/JavaScript/Data_structures#bigint_type) Typ ist ein numerisches Primärziel in JavaScript, das ganze Zahlen mit beliebiger Genauigkeit darstellen kann. BigInt-Literale werden erstellt, indem `n` an das Ende einer ganzen Zahl angehängt wird.

```js-nolint
123456789123456789n     // 123456789123456789
0o777777777777n         // 68719476735
0x123456789ABCDEFn      // 81985529216486895
0b11101001010101010101n // 955733
```

BigInt-Literale dürfen nicht mit `0` beginnen, um Verwechslungen mit veralteten Oktal-Literalen zu vermeiden.

```js-nolint example-bad
0755n; // SyntaxError: invalid BigInt syntax
```

Für oktale `BigInt`-Zahlen verwenden Sie immer eine Null, gefolgt von dem Buchstaben "o" (groß oder klein):

```js example-good
0o755n;
```

Für weitere Informationen über `BigInt`, siehe auch [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Data_structures#bigint_type).

#### Numerische Trennzeichen

Zur Verbesserung der Lesbarkeit von numerischen Literalen können Unterstriche (`_`, `U+005F`) als Trennzeichen verwendet werden:

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

### Zeichenfolgenliterale

Ein [String](/de/docs/Web/JavaScript/Data_structures#string_type) Literal ist null oder mehr Unicode-Codepunkte, die in einfachen oder doppelten Anführungszeichen eingeschlossen sind. Unicode-Codepunkte können auch durch eine Escape-Sequenz dargestellt werden. Alle Codepunkte können in einem Zeichenfolgenliteral erscheinen außer diesen Codepunkten:

- U+005C \ (Backslash)
- U+000D \<CR>
- U+000A \<LF>
- Die gleiche Art von Anführungszeichen, die das Zeichenfolgenliteral beginnen

Jede Codepunkte kann in Form einer Escape-Sequenz erscheinen. Zeichenfolgenliterale bewerten sich zu ECMAScript-Zeichenfolgenwerten. Bei der Erzeugung dieser Zeichenfolgenwerte werden Unicode-Codepunkte in UTF-16 kodiert.

```js-nolint
'foo'
"bar"
```

Die folgenden Unterabschnitte beschreiben verschiedene Escape-Sequenzen (`\` gefolgt von einem oder mehreren Zeichen), die in Zeichenfolgenliteralen verfügbar sind. Jede hier nicht aufgeführte Escape-Sequenz wird zu einer "Identitäts-Escape", die der Codepunkt selbst wird. Zum Beispiel ist `\z` dasselbe wie `z`. Es gibt eine veraltete oktale Escape-Sequenz-Syntax, die auf der Seite [Veraltete und obsolette Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) beschrieben ist. Viele dieser Escape-Sequenzen sind auch in regulären Ausdrücken gültig – siehe [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

#### Escape-Sequenzen

Spezielle Zeichen können mit Escape-Sequenzen codiert werden:

| Escape-Sequenz                                    | Unicode-Codepunkt                                  |
| ------------------------------------------------- | -------------------------------------------------- |
| `\0`                                              | Nullzeichen (U+0000 NULL)                          |
| `\'`                                              | Einzelnes Anführungszeichen (U+0027 APOSTROPHE)    |
| `\"`                                              | Doppelte Anführungszeichen (U+0022 QUOTATION MARK) |
| `\\`                                              | Backslash (U+005C REVERSE SOLIDUS)                 |
| `\n`                                              | Neue Zeile (U+000A LINE FEED; LF)                  |
| `\r`                                              | Wagenrücklauf (U+000D CARRIAGE RETURN; CR)         |
| `\v`                                              | Vertikaler Tabulator (U+000B LINE TABULATION)      |
| `\t`                                              | Tabulator (U+0009 CHARACTER TABULATION)            |
| `\b`                                              | Rückschritt (U+0008 BACKSPACE)                     |
| `\f`                                              | Formularvorschub (U+000C FORM FEED)                |
| `\` gefolgt von einem [Zeilenenden](#zeilenenden) | Leere Zeichenfolge                                 |

Die letzte Escape-Sequenz, `\` gefolgt von einem Zeilenende, ist nützlich, um ein Zeichenfolgenliteral über mehrere Zeilen zu teilen, ohne seine Bedeutung zu ändern.

```js
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Stellen Sie sicher, dass nach dem Backslash kein Leerzeichen oder ein anderes Zeichen folgt (außer einem Zeilenumbruch), da es sonst nicht funktioniert. Wenn die nächste Zeile eingerückt ist, sind auch die zusätzlichen Leerzeichen im Wert der Zeichenfolge vorhanden.

Sie können auch den [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition) Operator verwenden, um mehrere Zeichenfolgen zu verbinden, wie hier:

```js
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Beide oben genannten Methoden führen zu identischen Zeichenfolgen.

#### Hexadezimale Escape-Sequenzen

Hexadezimale Escape-Sequenzen bestehen aus `\x` gefolgt von genau zwei hexadezimalen Ziffern, die eine Code-Einheit oder einen Codepunkt im Bereich von 0x0000 bis 0x00FF darstellen.

```js
"\xA9"; // "©"
```

#### Unicode-Escape-Sequenzen

Eine Unicode-Escape-Sequenz besteht aus genau vier hexadezimalen Ziffern nach `\u`. Sie repräsentiert eine Code-Einheit in der UTF-16-Kodierung. Für Codepunkte U+0000 bis U+FFFF entspricht die Code-Einheit dem Codepunkt. Codepunkte U+10000 bis U+10FFFF erfordern zwei Escape-Sequenzen, die die beiden Code-Einheiten (ein Surrogatpaar) repräsentieren, die zur Codierung des Zeichens verwendet werden; das Surrogatpaar ist vom Codepunkt zu unterscheiden.

Siehe auch {{jsxref("String.fromCharCode()")}} und {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Unicode-Codepunkt-Escapes

Ein Unicode-Codepunkt-Escape besteht aus `\u{`, gefolgt von einem Codepunkt im hexadezimalen Basis, gefolgt von `}`. Der Wert der hexadezimalen Ziffern muss im Bereich 0 bis einschließlich 0x10FFFF liegen. Codepunkte im Bereich U+10000 bis U+10FFFF müssen nicht als Surrogatpaar dargestellt werden.

Siehe auch {{jsxref("String.fromCodePoint()")}} und {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// the same character represented as a surrogate pair
"\uD87E\uDC04";
```

### Reguläre Ausdrucksliterale

Reguläre Ausdrucksliterale sind von zwei Schrägstrichen (`/`) eingeschlossen. Der Lexer konsumiert alle Zeichen bis zum nächsten nicht-escaped-Schrägstrich oder dem Zeilenende, es sei denn, der Schrägstrich erscheint in einer Zeichenklasse (`[]`). Einige Zeichen (nämlich diejenigen, die [Bezeichnerteile](#bezeichner) sind) können nach dem Schlussschrägstrich erscheinen und Flags kennzeichnen.

Die lexikalische Grammatik ist sehr nachsichtig: Nicht alle regulären Ausdrucksliterale, die als ein Token erkannt werden, sind gültige reguläre Ausdrücke.

Siehe auch {{jsxref("RegExp")}} für weitere Informationen.

```js-nolint
/ab+c/g
/[/]/
```

Ein reguläres Ausdrucksliteral darf nicht mit zwei Schrägstrichen (`//`) beginnen, da dies ein Zeilenkommentar wäre. Um einen leeren regulären Ausdruck anzugeben, verwenden Sie `/(?:)/`.

### Template-Literale

Ein Template-Literal besteht aus mehreren Tokens: `` `xxx${ `` (Template-Kopf), `}xxx${` (Template-Mitte) und `` }xxx` `` (Template-Ende) sind einzelne Tokens, während zwischen ihnen beliebige Ausdrücke stehen können.

Siehe auch [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) für weitere Informationen.

```js-nolint
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag`string text ${expression} string text`
```

## Automatische Semikoloneinfügung

Manche [JavaScript-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements) erfordern am Ende ein Semikolon (`;`). Dazu gehören:

- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- [Ausdrucks-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement)
- [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue), [`break`](/de/docs/Web/JavaScript/Reference/Statements/break), [`return`](/de/docs/Web/JavaScript/Reference/Statements/return), [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)
- Klassendeklarationen ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_properties))
- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import), [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)

Um die Sprache jedoch zugänglicher und bequemer zu machen, kann JavaScript beim Konsumieren des Token-Streams automatisch Semikolons einfügen, sodass einige ungültige Tokensequenzen zur gültigen Syntax "repariert" werden können. Dieser Schritt erfolgt, nachdem der Programmtext gemäß der lexikalischen Grammatik in Tokens geparst wurde. Es gibt drei Fälle, in denen Semikola automatisch eingefügt werden:

1\. Wenn ein Token, das von der Grammatik nicht erlaubt ist, angetroffen wird und es durch mindestens ein [Zeilenende](#zeilenenden) vom vorhergehenden Token getrennt ist (einschließlich eines Blockkommentars, der mindestens ein Zeilenende enthält), oder das Token ist "}", dann wird vor dem Token ein Semikolon eingefügt.

```js-nolint
{ 1
2 } 3

// is transformed by ASI into:

{ 1
;2 ;} 3;

// Which is valid grammar encoding three statements,
// each consisting of a number literal
```

Das abschließende ")" von [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) wird durch diese Regel ebenfalls als Spezialfall behandelt.

```js-nolint
do {
  // ...
} while (condition) /* ; */ // ASI here
const a = 1
```

Jedoch werden keine Semikolons eingefügt, wenn das Semikolon dann das Trennzeichen im Kopf der [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Anweisung würde.

```js-nolint example-bad
for (
  let a = 1 // No ASI here
  a < 10 // No ASI here
  a++
) {}
```

Semikolons werden auch niemals als [leere Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Empty) eingefügt. Zum Beispiel, im untenstehenden Code, wenn ein Semikolon nach ")" eingefügt wird, wäre der Code gültig, mit einer leeren Anweisung als 'if'-Körper und der 'const'-Deklaration als separate Anweisung. Da jedoch automatisch eingefügte Semikolons keine leeren Anweisungen werden können, führt dies dazu, dass eine [Deklaration](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations) zum Körper der 'if'-Anweisung wird, was nicht gültig ist.

```js-nolint example-bad
if (Math.random() > 0.5)
const x = 1 // SyntaxError: Unexpected token 'const'
```

2\. Wenn das Ende des Eingabestreams von Tokens erreicht ist und der Parser den Einzelstream nicht als ein vollständiges Programm analysieren kann, wird am Ende ein Semikolon eingefügt.

```js-nolint
const a = 1 /* ; */ // ASI here
```

Diese Regel ist eine Ergänzung zur vorherigen Regel, insbesondere für den Fall, dass kein "aufdringliches Token" existiert, sondern das Ende des Eingabestreams erreicht ist.

3\. Wenn die Grammatik Zeilenenden an einigen Stellen verbietet, aber ein Zeilenende gefunden wird, wird ein Semikolon eingefügt. Diese Stellen beinhalten:

- `expr <here> ++`, `expr <here> --`
- `continue <here> lbl`
- `break <here> lbl`
- `return <here> expr`
- `throw <here> expr`
- `yield <here> expr`
- `yield <here> * expr`
- `(param) <here> => {}`
- `async <here> function`, `async <here> prop()`, `async <here> function*`, `async <here> *prop()`, `async <here> (param) <here> => {}`

Hier wird [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment) nicht als Postfix-Operator behandelt, der auf die Variable `b` angewendet wird, da zwischen `b` und `++` ein Zeilenumbruch auftritt.

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

Beachten Sie, dass die ASI nur ausgelöst würde, wenn ein Zeilenumbruch Tokens trennt, die ansonsten eine ungültige Syntax erzeugen würden. Wenn das nächste Token als Teil einer gültigen Struktur geparst werden kann, würden keine Semikolons eingefügt. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()

const b = 1
[1, 2, 3].forEach(console.log)
```

Weil `()` als Funktionsaufruf betrachtet werden kann, würde es normalerweise keine ASI auslösen. Ähnlich kann `[]` ein Memberzugriff sein. Der obige Code ist äquivalent zu:

```js-nolint example-bad
const a = 1(1).toString();

const b = 1[1, 2, 3].forEach(console.log);
```

Dies ist zufällig eine gültige Syntax. `1[1, 2, 3]` ist ein [Eigenschaftsaccessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) mit einem [Komma](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator)-verbundenen Ausdruck. Daher erhalten Sie beim Ausführen des Codes Fehler wie "1 ist keine Funktion" und "Eigenschaften von undefined können nicht gelesen werden (Lesen von 'forEach')".

Innerhalb von Klassen können Klassenfelder und Generator-Methoden ebenfalls eine Falle sein.

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

Und wird daher ein Syntaxfehler um `{`.

Es gibt die folgenden Daumenregeln für den Umgang mit ASI, wenn Sie einen Stil ohne Semikolons erzwingen möchten:

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

- Das `=>` einer Arrow-Funktion sollte in derselben Zeile wie das Ende ihrer Parameter stehen.

  ```js-nolint example-bad
  const foo = (a, b)
    => a + b
  ```

  ```js-nolint example-good
  const foo = (a, b) =>
    a + b
  ```

- Das `async` von asynchronen Funktionen, Methoden usw. kann nicht direkt von einem Zeilenumbruch gefolgt werden.

  ```js-nolint example-bad
  async
  function foo() {}
  ```

  ```js-nolint example-good
  async function
  foo() {}
  ```

- Wenn eine Zeile mit einem der folgenden Zeichen beginnt: `(`, `[`, `` ` ``, `+`, `-`, `/` (wie bei Regex-Literalen), setzen Sie ein Semikolon vor oder beenden Sie die vorherige Zeile mit einem Semikolon.

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

- Klassenfelder sollten vorzugsweise immer mit Semikolons beendet werden — zusätzlich zur vorherigen Regel (die eine Felddeklaration umfasst, gefolgt von einer [berechneten Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names), da letztere mit `[` beginnt), sind Semikolons auch zwischen einer Felddeklaration und einer Generator-Methode erforderlich.

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
- [Micro-Feature von ES6, jetzt in Firefox Aurora und Nightly: Binär- und Oktalzahlen](https://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/) von Jeff Walden (2013)
- [JavaScript Zeichenescape-Sequenzen](https://mathiasbynens.be/notes/javascript-escapes) von Mathias Bynens (2011)

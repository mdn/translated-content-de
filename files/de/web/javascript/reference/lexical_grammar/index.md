---
title: Lexikalische Grammatik
slug: Web/JavaScript/Reference/Lexical_grammar
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{jsSidebar("More")}}

Diese Seite beschreibt die lexikalische Grammatik von JavaScript. JavaScript-Quelltext ist einfach eine Folge von Zeichen – damit der Interpreter ihn versteht, muss der String in eine strukturiertere Darstellung _geparst_ werden. Der erste Schritt des Parsens ist die [lexikalische Analyse](https://en.wikipedia.org/wiki/Lexical_analysis), bei der der Text von links nach rechts gescannt und in eine Folge einzelner, atomarer Eingabeelemente umgewandelt wird. Einige Eingabeelemente sind für den Interpreter unbedeutend und werden nach diesem Schritt entfernt – dazu gehören [Leerzeichen](#leerzeichen) und [Kommentare](#kommentare). Die anderen, darunter [Bezeichner](#bezeichner), [Schlüsselwörter](#schlüsselwörter), [Literale](#literale) und Zeichen (hauptsächlich [Operatoren](/de/docs/Web/JavaScript/Reference/Operators)), werden für die weitere Syntaxanalyse verwendet. [Zeilenabschlusszeichen](#zeilenabschlusszeichen) und mehrzeilige Kommentare sind ebenfalls syntaktisch unbedeutend, sie leiten jedoch den Prozess der [automatischen Semikolon-Einfügung](#automatische_semikolon-einfügung), um bestimmte ungültige Token-Folgen gültig zu machen.

## Formatsteuerungszeichen

Formatsteuerungszeichen haben keine visuelle Darstellung, werden aber verwendet, um die Interpretation des Textes zu steuern.

| Code-Punkt | Name                  | Abkürzung | Beschreibung                                                                                                                                                                                                           |
| ---------- | --------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| U+200C     | Zero width non-joiner | \<ZWNJ>   | Wird zwischen Zeichen platziert, um zu verhindern, dass sie in bestimmten Sprachen in Ligaturen verbunden werden ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_non-joiner)).                                   |
| U+200D     | Zero width joiner     | \<ZWJ>    | Wird zwischen Zeichen platziert, die normalerweise nicht verbunden wären, um die Zeichen in bestimmten Sprachen in ihrer verbundenen Form darzustellen ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_joiner)). |
| U+FEFF     | Byte order mark       | \<BOM>    | Wird am Anfang des Skripts verwendet, um es als Unicode zu kennzeichnen und die Erkennung der Zeichenkodierung und Byte-Reihenfolge zu ermöglichen ([Wikipedia](https://en.wikipedia.org/wiki/Byte_order_mark)).       |

Im JavaScript-Quelltext werden \<ZWNJ> und \<ZWJ> als Teile von [Bezeichnern](#bezeichner) behandelt, während \<BOM> (auch als Zero-width no-break space \<ZWNBSP> bezeichnet, wenn nicht am Anfang des Textes) als [Leerzeichen](#leerzeichen) behandelt wird.

## Leerzeichen

{{Glossary("Whitespace", "Leerzeichen")}}-Zeichen verbessern die Lesbarkeit von Quelltext und trennen Tokens voneinander. Diese Zeichen sind normalerweise nicht notwendig für die Funktionalität des Codes. [Minimierungswerkzeuge](https://en.wikipedia.org/wiki/Minification_%28programming%29) werden oft verwendet, um Leerzeichen zu entfernen, um die zu übertragende Datenmenge zu reduzieren.

| Code-Punkt | Name                       | Abkürzung | Beschreibung                                                                                       | Escape-Sequenz |
| ---------- | -------------------------- | --------- | -------------------------------------------------------------------------------------------------- | -------------- |
| U+0009     | Zeichen-Tabulation         | \<TAB>    | Horizontale Tabulation                                                                             | \t             |
| U+000B     | Linien-Tabulation          | \<VT>     | Vertikale Tabulation                                                                               | \v             |
| U+000C     | Seitenwechsel              | \<FF>     | Steuerzeichen für Seitenwechsel ([Wikipedia](https://en.wikipedia.org/wiki/Page_break#Form_feed)). | \f             |
| U+0020     | Leerzeichen                | \<SP>     | Normales Leerzeichen                                                                               |                |
| U+00A0     | Non-breaking space         | \<NBSP>   | Normales Leerzeichen, aber ohne Punkt, an dem eine Zeile brechen kann                              |                |
| U+FEFF     | Zero-width no-break space  | \<ZWNBSP> | Wenn nicht am Anfang des Skripts, ist das BOM-Zeichen ein normales Leerzeichen.                    |                |
| Andere     | Andere Unicode-Leerzeichen | \<USP>    | [Zeichen in der Kategorie "Space_Separator"] [space separator set]                                 |                |

[space separator set]: https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D

> [!NOTE]
> Von den [Zeichen mit der Eigenschaft "White_Space", die nicht in der allgemeinen Kategorie "Space_Separator" sind](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BWhite_Space%7D%26%5CP%7BGeneral_Category%3DSpace_Separator%7D), werden U+0009, U+000B und U+000C immer noch als Leerzeichen in JavaScript behandelt; U+0085 NEXT LINE hat keine besondere Rolle; andere werden zu [Zeilenabschlusszeichen](#zeilenabschlusszeichen).

> [!NOTE]
> Änderungen am Unicode-Standard, der von der JavaScript-Engine verwendet wird, können das Verhalten von Programmen beeinflussen. Zum Beispiel wurde in ES2016 der verweisende Unicode-Standard von 5.1 auf 8.0.0 aktualisiert, was dazu führte, dass U+180E MONGOLIAN VOWEL SEPARATOR von der Kategorie "Space_Separator" in die Kategorie "Format (Cf)" verschoben wurde und damit kein Leerzeichen mehr ist. Anschließend änderte sich das Ergebnis von [`"\u180E".trim().length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim) von `0` auf `1`.

## Zeilenabschlusszeichen

Zusätzlich zu [Leerzeichen](#leerzeichen) werden Zeilenabschlusszeichen verwendet, um die Lesbarkeit des Quelltextes zu verbessern. In einigen Fällen können Zeilenabschlusszeichen die Ausführung von JavaScript-Code beeinflussen, da es einige Stellen gibt, an denen sie verboten sind. Zeilenabschlusszeichen beeinflussen auch den Prozess der [automatischen Semikolon-Einfügung](#automatische_semikolon-einfügung).

Außerhalb des Kontexts der lexikalischen Grammatik werden Leerzeichen und Zeilenabschlusszeichen oft vermischt. Beispielsweise entfernt {{jsxref("String.prototype.trim()")}} alle Leerzeichen und Zeilenabschlusszeichen vom Anfang und Ende eines Strings. Der Zeichenklassen-Escape `\s` in regulären Ausdrücken entspricht allen Leerzeichen und Zeilenabschlusszeichen.

Nur die folgenden Unicode-Codepunkte werden in ECMAScript als Zeilenabschlusszeichen behandelt, andere zeilenbrechende Zeichen werden als Leerzeichen behandelt (zum Beispiel wird Next Line, NEL, U+0085 als Leerzeichen betrachtet).

| Code-Punkt | Name            | Abkürzung | Beschreibung                                              | Escape-Sequenz |
| ---------- | --------------- | --------- | --------------------------------------------------------- | -------------- |
| U+000A     | Zeilenumbruch   | \<LF>     | Neue Zeilenzeichen in UNIX-Systemen.                      | \n             |
| U+000D     | Wagenrücklauf   | \<CR>     | Neue Zeilenzeichen in Commodore- und frühen Mac-Systemen. | \r             |
| U+2028     | Linienseparator | \<LS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline)        |                |
| U+2029     | Absatzseparator | \<PS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline)        |                |

## Kommentare

Kommentare werden verwendet, um Hinweistexte, Anmerkungen, Vorschläge oder Warnungen dem JavaScript-Code hinzuzufügen. Dies kann es erleichtern, den Code zu lesen und zu verstehen. Sie können auch verwendet werden, um Code zu deaktivieren, damit er nicht ausgeführt wird; dies kann ein wertvolles Debugging-Tool sein.

JavaScript kennt zwei altbewährte Methoden, Kommentare zum Code hinzuzufügen: Zeilenkommentare und Blockkommentare. Zusätzlich gibt es eine spezielle Hashbang-Kommentarsyntax.

### Zeilenkommentare

Die erste Methode ist der `//` Kommentar; dies macht den gesamten Text, der ihm auf der gleichen Zeile folgt, zu einem Kommentar. Zum Beispiel:

```js
function comment() {
  // This is a one line JavaScript comment
  console.log("Hello world!");
}
comment();
```

### Block-Kommentare

Die zweite Methode ist der `/* */` Stil, der viel flexibler ist.

Zum Beispiel können Sie es auf einer einzelnen Zeile verwenden:

```js
function comment() {
  /* This is a one line JavaScript comment */
  console.log("Hello world!");
}
comment();
```

Sie können auch mehrzeilige Kommentare schreiben, wie diesen:

```js
function comment() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log("Hello world!");
}
comment();
```

Sie können es auch in der Mitte einer Zeile verwenden, wenn Sie möchten, obwohl dies Ihren Code schwerer lesbar machen kann, also sollte es mit Vorsicht verwendet werden:

```js
function comment(x) {
  console.log("Hello " + x /* insert the value of x */ + " !");
}
comment("world");
```

Zusätzlich können Sie es verwenden, um Code zu deaktivieren, um verhindert zu werden, dass er ausgeführt wird, indem Sie Code in einen Kommentar einfügen, wie diesen:

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

In diesem Fall wird der `console.log()`-Aufruf nie ausgeführt, da er sich innerhalb eines Kommentars befindet. Beliebig viele Zeilen von Code können so deaktiviert werden.

Blockkommentare, die mindestens ein Zeilenabschlusszeichen enthalten, verhalten sich wie [Zeilenabschlusszeichen](#zeilenabschlusszeichen) bei der [automatischen Semikolon-Einfügung](#automatische_semikolon-einfügung).

### Hashbang-Kommentare

Es gibt eine spezielle dritte Kommentarsyntax, den **Hashbang-Kommentar**. Ein Hashbang-Kommentar verhält sich genau wie ein einzelner Zeilenkommentar (`//`), außer dass er mit `#!` beginnt und **nur am absoluten Anfang eines Skripts oder Moduls gültig ist**. Beachten Sie auch, dass vor dem `#!` keinerlei Leerzeichen zulässig sind. Der Kommentar besteht aus allen Zeichen nach `#!` bis zum Ende der ersten Zeile; nur ein solcher Kommentar ist zulässig.

Hashbang-Kommentare in JavaScript ähneln [Shebangs in Unix](<https://en.wikipedia.org/wiki/Shebang_(Unix)>), die den Pfad zu einem bestimmten JavaScript-Interpreter angeben, den Sie zum Ausführen des Skripts verwenden möchten. Bevor der Hashbang-Kommentar standardisiert wurde, war er bereits de facto in Nicht-Browser-Hosts wie Node.js implementiert, wo er aus dem Quelltext entfernt wurde, bevor er an die Engine übergeben wurde. Ein Beispiel ist wie folgt:

```js
#!/usr/bin/env node

console.log("Hello world");
```

Der JavaScript-Interpreter behandelt ihn als normalen Kommentar – er hat nur eine semantische Bedeutung für die Shell, wenn das Skript direkt in einer Shell ausgeführt wird.

> [!WARNING]
> Wenn Sie möchten, dass Skripte direkt in einer Shell-Umgebung ausgeführt werden können, kodieren Sie sie in UTF-8 ohne ein [BOM](https://en.wikipedia.org/wiki/Byte_order_mark). Obwohl ein BOM beim Ausführen des Codes in einem Browser keine Probleme verursachen wird – da es während der UTF-8-Dekodierung entfernt wird, bevor der Quelltext analysiert wird – wird eine Unix/Linux-Shell das Hashbang nicht erkennen, wenn es durch ein BOM-Zeichen vorangestellt wird.

Sie sollten den `#!`-Kommentarstil nur verwenden, um einen JavaScript-Interpreter anzugeben. In allen anderen Fällen sollten Sie nur einen `//`-Kommentar (oder Mehrzeilenkommentar) verwenden.

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

In JavaScript bestehen Bezeichner in der Regel aus alphanumerischen Zeichen, Unterstrichen (`_`) und Dollarzeichen (`$`). Bezeichner dürfen nicht mit Zahlen beginnen. Allerdings sind JavaScript-Bezeichner nicht auf {{Glossary("ASCII", "ASCII")}} beschränkt – viele Unicode-Codepunkte sind ebenfalls erlaubt. Namentlich:

- Startzeichen können jedes Zeichen in der Kategorie [ID_Start](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Start%7D) plus `_` und `$` sein.
- Nach dem ersten Zeichen können Sie jedes Zeichen in der Kategorie [ID_Continue](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Continue%7D) plus U+200C (ZWNJ) und U+200D (ZWJ) verwenden.

> [!NOTE]
> Wenn Sie aus irgendeinem Grund selbst JavaScript-Quelltext parsen müssen, gehen Sie nicht davon aus, dass alle Bezeichner dem Muster `/[A-Za-z_$][\w$]*/` (d.h. nur-ASCII) folgen! Der Bereich der Bezeichner kann durch den regulären Ausdruck `/[$_\p{ID_Start}][$\p{ID_Continue}]*/u` (ohne Unicode-Escape-Sequenzen) beschrieben werden.

Darüber hinaus erlaubt JavaScript die Verwendung von [Unicode-Escape-Sequenzen](#unicode-escape-sequenzen) in der Form von `\u0000` oder `\u{000000}` in Bezeichnern, die denselben String-Wert wie die tatsächlichen Unicode-Zeichen kodieren. Zum Beispiel sind `你好` und `\u4f60\u597d` dieselben Bezeichner:

```js-nolint
const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello
```

Nicht alle Stellen akzeptieren den vollen Bereich der Bezeichner. Bestimmte Syntaxen, wie Funktionsdeklarationen, Funktionsausdrücke und Variablendeklarationen erfordern die Verwendung von Bezeichnernamen, die keine [reservierten Wörter](#reservierte_wörter) sind.

```js-nolint example-bad
function import() {} // Illegal: import is a reserved word.
```

Bemerkenswerterweise erlauben private Eigenschaften und Objekteigenschaften reservierte Wörter.

```js
const obj = { import: "value" }; // Legal despite `import` being reserved
class C {
  #import = "value";
}
```

## Schlüsselwörter

_Schlüsselwörter_ sind Tokens, die wie Bezeichner aussehen, aber in JavaScript eine besondere Bedeutung haben. Zum Beispiel zeigt das Schlüsselwort [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) vor einer Funktionsdeklaration an, dass die Funktion asynchron ist.

Einige Schlüsselwörter sind _reserviert_, was bedeutet, dass sie nicht als Bezeichner für Variablendeklarationen, Funktionsdeklarationen usw. verwendet werden können. Sie werden oft als _reservierte Wörter_ bezeichnet. [Eine Liste dieser reservierten Wörter](#reservierte_wörter) wird unten bereitgestellt. Nicht alle Schlüsselwörter sind reserviert – zum Beispiel kann `async` überall als Bezeichner verwendet werden. Einige Schlüsselwörter sind nur _kontextuell reserviert_ – zum Beispiel ist `await` nur im Körper einer asynchronen Funktion reserviert und `let` ist nur im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-Code oder bei `const` und `let`-Deklarationen reserviert.

Bezeichner werden immer nach _String-Wert_ verglichen, sodass Escape-Sequenzen interpretiert werden. Zum Beispiel ist dies immer noch ein Syntaxfehler:

```js-nolint example-bad
const els\u{65} = 1;
// `els\u{65}` encodes the same identifier as `else`
```

### Reservierte Wörter

Diese Schlüsselwörter können nicht als Bezeichner für Variablen, Funktionen, Klassen usw. irgendwo im JavaScript-Quelltext verwendet werden.

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
- [`false`](#boolesches_literal)
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
- [`true`](#boolesches_literal)
- {{jsxref("Statements/try...catch", "try")}}
- {{jsxref("Operators/typeof", "typeof")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Operators/void", "void")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/with", "with")}}

Die folgenden sind nur reserviert, wenn sie im Strict Mode-Code gefunden werden:

- {{jsxref("Statements/let", "let")}} (auch reserviert in `const`, `let` und Klassendeklarationen)
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- {{jsxref("Operators/yield", "yield")}} (auch reserviert in Generatorfunktion-Körpern)

Die folgenden sind nur reserviert, wenn sie im Modulkode oder im Körper einer asynchronen Funktion gefunden werden:

- [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

### Reservierte Wörter für die Zukunft

Die folgenden sind durch die ECMAScript-Spezifikation als zukünftige Schlüsselwörter reserviert. Sie haben derzeit keine spezielle Funktionalität, aber sie könnten zu einem späteren Zeitpunkt haben, daher können sie nicht als Bezeichner verwendet werden.

Diese sind immer reserviert:

- `enum`

Die folgenden sind nur reserviert, wenn sie im Strict Mode-Code gefunden werden:

- `implements`
- `interface`
- `package`
- `private`
- `protected`
- `public`

#### Reservierte Wörter für die Zukunft in älteren Standards

Die folgenden sind durch ältere ECMAScript-Spezifikationen (ECMAScript 1 bis 3) als zukünftige Schlüsselwörter reserviert.

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

Einige Bezeichner haben in bestimmten Kontexten eine spezielle Bedeutung, ohne reservierte Wörter irgendeiner Art zu sein. Dazu gehören:

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
> Dieser Abschnitt behandelt Literale, die atomare Tokens sind. [Objektliterale](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Arrayliterale](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation) sind [Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators), die aus einer Reihe von Tokens bestehen.

### Null-Literal

Siehe auch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) für weitere Informationen.

```js-nolint
null
```

### Boolesches Literal

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

Dezimalliterale können mit einer Null (`0`) beginnen, gefolgt von einer weiteren Dezimalziffer, aber wenn alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies wird als veraltete Syntax betrachtet, und Zahlenliterale, die mit `0` beginnen, sei es als Oktal oder Dezimal interpretiert, verursachen im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) einen Syntaxfehler – verwenden Sie daher das Präfix `0o` stattdessen.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

##### Exponential

Das Dezimalexponentialliteral wird durch das folgende Format spezifiziert: `beN`; wobei `b` eine Basiszahl (ganz oder gleitend) ist, gefolgt von einem `E` oder `e` Zeichen (was als Separator oder _Exponenten-Indikator_ dient) und `N`, was die _Exponenten- oder Potenznummer_ ist – eine ganze Zahl mit Vorzeichen.

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

Die binäre Zahlensyntax verwendet eine führende Null, gefolgt von einem Klein- oder Großbuchstaben "B" (`0b` oder `0B`). Jedes Zeichen nach dem `0b`, das nicht 0 oder 1 ist, wird die Literalfolge beenden.

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### Oktal

Die Oktalzahlensyntax verwendet eine führende Null, gefolgt von einem Klein- oder Großbuchstaben "O" (`0o` oder `0O`). Jedes Zeichen nach dem `0o`, das außerhalb des Bereichs (01234567) liegt, wird die Literalfolge beenden.

```js-nolint
0O755 // 493
0o644 // 420
```

#### Hexadezimal

Die hexadezimale Zahlensyntax verwendet eine führende Null, gefolgt von einem Klein- oder Großbuchstaben "X" (`0x` oder `0X`). Jedes Zeichen nach dem `0x`, das außerhalb des Bereichs (0123456789ABCDEF) liegt, wird die Literalfolge beenden.

```js-nolint
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

#### BigInt-Literal

Der Typ [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type) ist ein numerisches Primitive in JavaScript, das ganze Zahlen mit beliebiger Genauigkeit darstellen kann. BigInt-Literale werden erstellt, indem `n` an das Ende einer ganzen Zahl angehängt wird.

```js-nolint
123456789123456789n     // 123456789123456789
0o777777777777n         // 68719476735
0x123456789ABCDEFn      // 81985529216486895
0b11101001010101010101n // 955733
```

BigInt-Literale dürfen nicht mit `0` beginnen, um Verwechslungen mit veralteten Oktalliteralen zu vermeiden.

```js-nolint example-bad
0755n; // SyntaxError: invalid BigInt syntax
```

Für Oktal-BigInt-Zahlen verwenden Sie immer eine Null, gefolgt vom Buchstaben "o" (groß oder klein):

```js example-good
0o755n;
```

Weitere Informationen zu `BigInt` finden Sie auch in [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type).

#### Numerische Trennzeichen

Zur Verbesserung der Lesbarkeit für numerische Literale können Unterstriche (`_`, U+005F) als Trennzeichen verwendet werden:

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

Ein [String](/de/docs/Web/JavaScript/Guide/Data_structures#string_type) Literal besteht aus null oder mehr Unicode-Codepunkten, eingeschlossen in einzelnen oder doppelten Anführungszeichen. Unicode-Codepunkte können auch durch eine Escape-Sequenz dargestellt werden. Alle Codepunkte können buchstäblich in einem String-Literal erscheinen, außer diesen Codepunkten:

- U+005C \ (Backslash)
- U+000D \<CR>
- U+000A \<LF>
- Die gleiche Art von Anführungszeichen, die das String-Literal beginnt

Jeder Codepunkt kann in Form einer Escape-Sequenz erscheinen. String-Literale werden zu ECMAScript-String-Werten ausgewertet. Beim Generieren dieser String-Werte werden Unicode-Codepunkte UTF-16-kodiert.

```js-nolint
'foo'
"bar"
```

Die folgenden Unterabschnitte beschreiben verschiedene Escape-Sequenzen (`\`, gefolgt von einem oder mehreren Zeichen), die in String-Literalen verfügbar sind. Jede nicht aufgeführte Escape-Sequenz wird zu einem "Identitäts-Escape", der zum eigentlichen Codepunkt wird. Zum Beispiel ist `\z` dasselbe wie `z`. Es gibt eine veraltete Oktalescape-Sequenzsyntax, die auf der Seite [Veraltete und überholte Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) beschrieben wird. Viele dieser Escape-Sequenzen sind auch in regulären Ausdrücken gültig – siehe [Zeichencodierung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

#### Escape-Sequenzen

Sonderzeichen können mit Escape-Sequenzen kodiert werden:

| Escape-Sequenz                                                          | Unicode-Codepunkt                                   |
| ----------------------------------------------------------------------- | --------------------------------------------------- |
| `\0`                                                                    | Null-Zeichen (U+0000 NULL)                          |
| `\'`                                                                    | einfaches Anführungszeichen (U+0027 APOSTROPHE)     |
| `\"`                                                                    | doppeltes Anführungszeichen (U+0022 QUOTATION MARK) |
| `\\`                                                                    | Backslash (U+005C REVERSE SOLIDUS)                  |
| `\n`                                                                    | Zeilenumbruch (U+000A LINE FEED; LF)                |
| `\r`                                                                    | Wagenrücklauf (U+000D CARRIAGE RETURN; CR)          |
| `\v`                                                                    | Vertikale Tabulation (U+000B LINE TABULATION)       |
| `\t`                                                                    | Tab (U+0009 CHARACTER TABULATION)                   |
| `\b`                                                                    | Rückschritt (U+0008 BACKSPACE)                      |
| `\f`                                                                    | Seitenvorschub (U+000C FORM FEED)                   |
| `\` gefolgt von einem [Zeilenabschlusszeichen](#zeilenabschlusszeichen) | leerer String                                       |

Die letzte Escape-Sequenz, `\` gefolgt von einem Zeilenabschlusszeichen, ist nützlich, um ein String-Literal über mehrere Zeilen zu teilen, ohne seine Bedeutung zu ändern.

```js
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Stellen Sie sicher, dass nach dem Backslash keine Leerzeichen oder andere Zeichen stehen (außer einem Zeilenumbruch), sonst funktioniert es nicht. Wenn die nächste Zeile eingezogen ist, sind die zusätzlichen Leerzeichen ebenfalls im Wert des Strings enthalten.

Sie können auch den [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition) Operator verwenden, um mehrere Strings aneinander zu hängen, wie folgt:

```js
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Beide oben genannten Methoden führen zu identischen Strings.

#### Hexadezimale Escape-Sequenzen

Hexadezimale Escape-Sequenzen bestehen aus `\x` gefolgt von genau zwei hexadezimalen Ziffern, die eine Codeeinheit oder einen Codepunkt im Bereich 0x0000 bis 0x00FF darstellen.

```js
"\xA9"; // "©"
```

#### Unicode-Escape-Sequenzen

Eine Unicode-Escape-Sequenz besteht aus genau vier hexadezimalen Ziffern, die `\u` folgen. Sie repräsentiert eine Codeeinheit in der UTF-16-Kodierung. Für Codepunkte U+0000 bis U+FFFF entspricht die Codeeinheit dem Codepunkt. Codepunkte U+10000 bis U+10FFFF erfordern zwei Escape-Sequenzen, die die beiden Codeeinheiten (ein Surrogatpaar) repräsentieren, die zum Codieren des Zeichens verwendet werden; das Surrogatpaar unterscheidet sich vom Codepunkt.

Siehe auch {{jsxref("String.fromCharCode()")}} und {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Unicode-Codepunkt-Fluchten

Ein Unicode-Codepunkt-Escape besteht aus `\u{`, gefolgt von einem Codepunkt in hexadezimaler Basis, gefolgt von `}`. Der Wert der hexadezimalen Ziffern muss im Bereich von 0 bis 0x10FFFF einschließlich liegen. Codepunkte im Bereich von U+10000 bis U+10FFFF müssen nicht als Surrogatpaar dargestellt werden.

Siehe auch {{jsxref("String.fromCodePoint()")}} und {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// the same character represented as a surrogate pair
"\uD87E\uDC04";
```

### Reguläre Ausdrucksliterale

Reguläre Ausdrucksliterale sind in zwei Schrägstrichen (`/`) eingeschlossen. Der Lexer konsumiert alle Zeichen bis zum nächsten nicht maskierten Schrägstrich oder bis zum Ende der Zeile, es sei denn, der Schrägstrich erscheint innerhalb eines Zeichenclusters (`[]`). Einige Zeichen (namentlich solche, die [Bezeichnerteile](#bezeichner) sind) können nach dem schließenden Schrägstrich erscheinen und Flags bezeichnen.

Die lexikalische Grammatik ist sehr nachsichtig: nicht alle als ein Token identifizierten regulären Ausdrucksliterale sind gültige reguläre Ausdrücke.

Siehe também {{jsxref("RegExp")}} für mehr Informationen.

```js
/ab+c/g;
/[/]/;
```

Ein reguläres Ausdrucksliteral kann nicht mit zwei Schrägstrichen (`//`) beginnen, da dies ein Zeilenkommentar wäre. Um einen leeren regulären Ausdruck anzugeben, verwenden Sie `/(?:)/`.

### Template-Literale

Ein Template-Literal besteht aus mehreren Tokens: `` `xxx${ `` (Template-Kopf), `}xxx${` (Template-Mitte) und `` }xxx` `` (Template-Ende) sind einzelne Tokens, während jeder Ausdruck zwischen ihnen stehen kann.

Siehe auch [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) für weitere Informationen.

```js
`string text`;

`string text line 1
 string text line 2`;

`string text ${expression} string text`;

tag`string text ${expression} string text`;
```

## Automatische Semikolon-Einfügung

Einige [JavaScript-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements)' Syntaxdefinitionen erfordern Semikolons (`;`) am Ende. Dazu gehören:

- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- [Ausdrucksanweisungen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement)
- [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue), [`break`](/de/docs/Web/JavaScript/Reference/Statements/break), [`return`](/de/docs/Web/JavaScript/Reference/Statements/return), [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)
- Klassendeklarationen ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_properties))
- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import), [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)

Um die Sprache jedoch zugänglicher und bequemer zu machen, kann JavaScript Semikolons automatisch einfügen, wenn der Token-Strom konsumiert wird, sodass einige ungültige Token-Folgen zu gültiger Syntax "repariert" werden können. Dieser Schritt erfolgt, nachdem der Programmtext gemäß der lexikalischen Grammatik in Tokens geparst wurde. Es gibt drei Fälle, in denen Semikolons automatisch eingefügt werden:

1\. Wenn ein vom Grammatik nicht erlaubtes Token gefunden wird und es vom vorherigen durch mindestens einen [Zeilenabschlusszeichen](#zeilenabschlusszeichen) (einschließlich eines Blockkommentars, der mindestens ein Zeilenabschlusszeichen enthält) getrennt ist oder das Token "}" ist, dann wird vor dem Token ein Semikolon eingefügt.

```js-nolint
{ 1
2 } 3

// is transformed by ASI into:

{ 1
;2 ;} 3;

// Which is valid grammar encoding three statements,
// each consisting of a number literal
```

Das endende ")" von [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) wird als spezieller Fall von dieser Regel behandelt.

```js-nolint
do {
  // …
} while (condition) /* ; */ // ASI here
const a = 1
```

Allerdings werden keine Semikolons eingefügt, wenn das Semikolon dann zum Separator in der Kopfzeile der [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Anweisung wird.

```js-nolint example-bad
for (
  let a = 1 // No ASI here
  a < 10 // No ASI here
  a++
) {}
```

Semikolons werden auch niemals als [leere Aussagen](/de/docs/Web/JavaScript/Reference/Statements/Empty) eingefügt. Zum Beispiel, im Code unten, wenn ein Semikolon nach ")" eingefügt wird, wäre der Code gültig, mit einer leeren Anweisung als `if`-Körper und der `const`-Deklaration als separater Anweisung. Da automatisch eingefügte Semikolons jedoch nicht zu leeren Anweisungen werden können, führt dies dazu, dass eine [Deklaration](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations) der `if`-Anweisung wird, was nicht gültig ist.

```js-nolint example-bad
if (Math.random() > 0.5)
const x = 1 // SyntaxError: Unexpected token 'const'
```

2\. Wenn das Ende des Eingabestroms von Tokens erreicht ist und der Parser den Eingabestrom nicht als vollständiges Programm parsen kann, wird am Ende ein Semikolon eingefügt.

```js-nolint
const a = 1 /* ; */ // ASI here
```

Diese Regel ist ein Komplement zur vorherigen Regel, speziell für den Fall, dass es kein "störendes Token" gibt, sondern das Ende des Eingabestroms.

3\. Wenn die Grammatik an einem Ort Zeilenabschlusszeichen verbietet, aber eines gefunden wird, wird ein Semikolon eingefügt. Diese Orte umfassen:

- `expr <here> ++`, `expr <here> --`
- `continue <here> lbl`
- `break <here> lbl`
- `return <here> expr`
- `throw <here> expr`
- `yield <here> expr`
- `yield <here> * expr`
- `(param) <here> => {}`
- `async <here> function`, `async <here> prop()`, `async <here> function*`, `async <here> *prop()`, `async <here> (param) <here> => {}`

Hier wird [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment) nicht als Postfix-Operator behandelt, der auf die Variable `b` angewendet wird, weil ein Zeilenabschlusszeichen zwischen `b` und `++` auftritt.

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

Beachten Sie, dass die automatische Semikolon-Einfügung nur ausgelöst wird, wenn ein Zeilenumbruch Tokens trennt, die andernfalls zu ungültiger Syntax führen würden. Wenn das nächste Token als Teil einer gültigen Struktur geparst werden kann, würden keine Semikolons eingefügt. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()

const b = 1
[1, 2, 3].forEach(console.log)
```

Da `()` als Funktionsaufruf gesehen werden kann, würde es normalerweise keine automatische Semikolon-Einfügung auslösen. Similarly, `[]` may be a member access. Der obige Code ist äquivalent zu:

```js-nolint example-bad
const a = 1(1).toString();

const b = 1[1, 2, 3].forEach(console.log);
```

Dies happens to be valid syntax. `1[1, 2, 3]` is a [property accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) with a [comma](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator)-joined expression. Daher würden Sie beim Ausführen des Codes Fehler wie "1 is not a function" und "Cannot read properties of undefined (reading 'forEach')" erhalten.

Within classes, class fields and generator methods can be a pitfall as well.

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

Und daher wird ein Syntaxfehler um `{` sein.

Es gibt folgende Faustregeln für den Umgang mit der automatischen Semikolon-Einfügung, wenn Sie einen semikolonlosen Stil durchsetzen möchten:

- Schreiben Sie Postfix `++` und `--` in dieselbe Zeile wie ihre Operanden.

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

- Similarly, the label identifier after `break` or `continue` should be on the same line as the keyword.

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

- The `=>` of an arrow function should be on the same line as the end of its parameters.

  ```js-nolint example-bad
  const foo = (a, b)
    => a + b
  ```

  ```js-nolint example-good
  const foo = (a, b) =>
    a + b
  ```

- The `async` of async functions, methods, etc. cannot be directly followed by a line terminator.

  ```js-nolint example-bad
  async
  function foo() {}
  ```

  ```js-nolint example-good
  async function
  foo() {}
  ```

- If a line starts with one of `(`, `[`, `` ` ``, `+`, `-`, `/` (as in regex literals), prefix it with a semicolon, or end the previous line with a semicolon.

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

- Class fields should preferably always be ended with semicolons — in addition to the previous rule (which includes a field declaration followed by a [computed property](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names), since the latter starts with `[`), semicolons are also required between a field declaration and a generator method.

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

{{Spezifikationen}}

## Browser-Kompatibilität

{{Kompatibilität}}

## Siehe auch

- [Grammatik und Typen](/de/docs/Web/JavaScript/Guide/Grammar_and_types) Leitfaden
- [Micro-feature from ES6, now in Firefox Aurora and Nightly: binary and octal numbers](https://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/) von Jeff Walden (2013)
- [JavaScript-Zeichenkodierung](https://mathiasbynens.be/notes/javascript-escapes) von Mathias Bynens (2011)

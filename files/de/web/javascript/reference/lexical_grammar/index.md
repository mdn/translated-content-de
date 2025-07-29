---
title: Lexikalische Grammatik
slug: Web/JavaScript/Reference/Lexical_grammar
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Diese Seite beschreibt die lexikalische Grammatik von JavaScript. Quelltext in JavaScript ist einfach eine Abfolge von Zeichen – damit der Interpreter ihn versteht, muss die Zeichenfolge in eine strukturiertere Darstellung _geparst_ werden. Der initiale Schritt des Parsings wird [lexikalische Analyse](https://de.wikipedia.org/wiki/Lexikalische_Analyse) genannt, bei der der Text von links nach rechts gescannt wird und in eine Abfolge individueller, atomarer Eingabeelemente umgewandelt wird. Einige Eingabeelemente sind für den Interpreter unbedeutend und werden nach diesem Schritt entfernt – dazu gehören [Leerzeichen](#leerzeichen) und [Kommentare](#kommentare). Die anderen, darunter [Identifikatoren](#identifikatoren), [Schlüsselwörter](#schlüsselwörter), [Literale](#literale) und Trennzeichen (meistens [Operatoren](/de/docs/Web/JavaScript/Reference/Operators)), werden für die weitere Syntaxanalyse verwendet. [Zeilenendzeichen](#zeilenendzeichen) und mehrzeilige Kommentare sind ebenfalls syntaktisch unbedeutend, beeinflussen jedoch den Prozess der [automatischen Semikolonsetzung](#automatische_semikolonsetzung), um bestimmte ungültige Token-Sequenzen gültig zu machen.

## Formatsteuerungszeichen

Formatsteuerungszeichen haben keine visuelle Darstellung, werden aber verwendet, um die Interpretation des Textes zu steuern.

| Codepunkt | Name                  | Abkürzung | Beschreibung                                                                                                                                                                                                    |
| --------- | --------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| U+200C    | Zero Width Non-Joiner | \<ZWNJ>   | Wird zwischen Zeichen platziert, um zu verhindern, dass sie in bestimmten Sprachen zu Ligaturen verbunden werden ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_non-joiner)).                            |
| U+200D    | Zero Width Joiner     | \<ZWJ>    | Wird zwischen Zeichen platziert, die normalerweise nicht verbunden werden, um sie in bestimmten Sprachen in ihrer verbundenen Form darzustellen ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_joiner)). |
| U+FEFF    | Byte Order Mark       | \<BOM>    | Wird am Anfang eines Skripts verwendet, um es als Unicode zu markieren und die Erkennung der Textkodierung und Byte-Reihenfolge zu ermöglichen ([Wikipedia](https://en.wikipedia.org/wiki/Byte_order_mark)).    |

Im JavaScript-Quelltext werden \<ZWNJ> und \<ZWJ> als [Identifier](#identifikatoren) Teile behandelt, während \<BOM> (auch als Zero Width No-Break Space \<ZWNBSP> bezeichnet, wenn es nicht am Anfang des Textes steht) als [Leerzeichen](#leerzeichen) behandelt wird.

## Leerzeichen

{{Glossary("Whitespace", "Leerzeichen")}} verbessern die Lesbarkeit von Quelltext und trennen Token voneinander. Diese Zeichen sind für die Funktionalität des Codes normalerweise nicht notwendig. [Optimierungstools](https://de.wikipedia.org/wiki/Minification_%28programming%29) werden häufig verwendet, um Leerzeichen zu entfernen und die zu übertragende Datenmenge zu verringern.

| Codepunkt | Name                         | Abkürzung | Beschreibung                                                                         | Escape-Sequenz |
| --------- | ---------------------------- | --------- | ------------------------------------------------------------------------------------ | -------------- |
| U+0009    | Zeichen-Tabulator            | \<TAB>    | Horizontale Tabulator                                                                | \t             |
| U+000B    | Zeilen-Tabulator             | \<VT>     | Vertikale Tabulator                                                                  | \v             |
| U+000C    | Form Feed                    | \<FF>     | Seitenumbruchs-Steuerzeichen ([Wikipedia](https://de.wikipedia.org/wiki/Form_Feed)). | \f             |
| U+0020    | Raum                         | \<SP>     | Normaler Raum                                                                        |                |
| U+00A0    | Geschützter Raum             | \<NBSP>   | Normaler Raum, bei dem keine Zeilenumbrüche erlaubt sind                             |                |
| U+FEFF    | Nullbreiten-Nicht-Trenn-Raum | \<ZWNBSP> | Wenn nicht am Anfang eines Skripts, ist das BOM-Markierung ein normales Leerzeichen. |                |
| Andere    | Andere Unicode-Leerzeichen   | \<USP>    | [Zeichen in der "Space_Separator" allgemeinen Kategorie][space separator set]        |                |

[space separator set]: https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D

> [!NOTE]
> Von diesen [Zeichen mit der Eigenschaft "White_Space", die nicht in der allgemeinen Kategorie "Space_Separator" liegen](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BWhite_Space%7D%26%5CP%7BGeneral_Category%3DSpace_Separator%7D) werden U+0009, U+000B und U+000C immer noch als Leerzeichen in JavaScript behandelt; U+0085 NEXT LINE hat keine spezielle Rolle; andere werden zur Gruppe der [Zeilenendzeichen](#zeilenendzeichen) hinzugefügt.

> [!NOTE]
> Änderungen am Unicode-Standard, der von der JavaScript-Engine verwendet wird, können das Verhalten von Programmen beeinflussen. Beispielsweise hat ES2016 den Unicode-Referenzstandard von 5.1 auf 8.0.0 aktualisiert, was dazu führte, dass U+180E MONGOLIAN VOWEL SEPARATOR von der Kategorie "Space_Separator" in die "Format (Cf)" Kategorie verschoben wurde und es zu einem Nicht-Leerzeichen machte. Infolgedessen änderte sich das Ergebnis von [`"\u180E".trim().length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim) von `0` auf `1`.

## Zeilenendzeichen

Neben [Leerzeichen](#leerzeichen)-Zeichen werden Zeilenendzeichen verwendet, um die Lesbarkeit des Quelltextes zu verbessern. In einigen Fällen können Zeilenendzeichen jedoch auch die Ausführung von JavaScript-Code beeinflussen, da es einige Stellen gibt, an denen sie nicht erlaubt sind. Zeilenendzeichen beeinflussen auch den Prozess der [automatischen Semikolonsetzung](#automatische_semikolonsetzung).

Außerhalb des Kontexts der lexikalischen Grammatik werden Leerzeichen und Zeilenendzeichen oft zusammengefasst. Zum Beispiel entfernt {{jsxref("String.prototype.trim()")}} alle Leerzeichen und Zeilenendzeichen vom Anfang und Ende eines Strings. Die `\s` [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) in regulären Ausdrücken passt auf alle Leerzeichen und Zeilenendzeichen.

Nur die folgenden Unicode-Codepunkte werden in ECMAScript als Zeilenendzeichen behandelt, andere Umbruchzeichen werden als Leerzeichen betrachtet (zum Beispiel wird U+0085 als Leerzeichen betrachtet).

| Codepunkt | Name           | Abkürzung | Beschreibung                                               | Escape-Sequenz |
| --------- | -------------- | --------- | ---------------------------------------------------------- | -------------- |
| U+000A    | Line Feed      | \<LF>     | Neues Zeilenzeichen in UNIX-Systemen.                      | \n             |
| U+000D    | Wagenrücklauf  | \<CR>     | Neues Zeilenzeichen in Commodore- und frühen Mac-Systemen. | \r             |
| U+2028    | Zeilen-Trenner | \<LS>     | [Wikipedia](https://de.wikipedia.org/wiki/Zeilenumbruch)   |                |
| U+2029    | Absatz-Trenner | \<PS>     | [Wikipedia](https://de.wikipedia.org/wiki/Zeilenumbruch)   |                |

## Kommentare

Kommentare werden verwendet, um Hinwe...

Kommentare werden verwendet, um Hinweise, Anmerkungen, Vorschläge oder Warnungen im JavaScript-Code hinzuzufügen. Dies kann es leichter machen, den Code zu lesen und zu verstehen. Sie können auch verwendet werden, um Code zu deaktivieren, damit er nicht ausgeführt wird; dies kann ein wertvolles Debugging-Tool sein.

JavaScript bietet zwei altbewährte Möglichkeiten, um Kommentare zum Code hinzuzufügen: Zeilenkommentare und Blockkommentare. Außerdem gibt es eine spezielle Hashbang-Kommentar-Syntax.

### Zeilenkommentare

Die erste Möglichkeit ist der `//`-Kommentar; dieser macht den gesamten Text, der ihm in derselben Zeile folgt, zu einem Kommentar. Zum Beispiel:

```js
function comment() {
  // This is a one line JavaScript comment
  console.log("Hello world!");
}
comment();
```

### Blockkommentare

Die zweite Möglichkeit ist die `/* */`-Syntax, die viel flexibler ist.

Zum Beispiel können Sie sie in einer einzelnen Zeile verwenden:

```js
function comment() {
  /* This is a one line JavaScript comment */
  console.log("Hello world!");
}
comment();
```

Sie können auch mehrzeilige Kommentare erstellen, wie dieser:

```js
function comment() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log("Hello world!");
}
comment();
```

Sie können sie auch in der Mitte einer Zeile verwenden, wenn Sie möchten, obwohl dies Ihren Code schwerer lesbar machen kann, daher sollte es mit Vorsicht verwendet werden:

```js
function comment(x) {
  console.log("Hello " + x /* insert the value of x */ + " !");
}
comment("world");
```

Darüber hinaus können Sie sie verwenden, um Code zu deaktivieren, um ihn an der Ausführung zu hindern, indem Sie ihn in einen Kommentar einwickeln, wie dieser:

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

In diesem Fall wird der `console.log()`-Aufruf nie ausgeführt, da er in einem Kommentar steht. Jede Anzahl von Codezeilen kann auf diese Weise deaktiviert werden.

Blockkommentare, die mindestens ein Zeilenendezeichen enthalten, verhalten sich wie [Zeilenendzeichen](#zeilenendzeichen) in der [automatischen Semikolonsetzung](#automatische_semikolonsetzung).

### Hashbang-Kommentare

Es gibt eine besondere dritte Kommentar-Syntax, den **Hashbang-Kommentar**. Ein Hashbang-Kommentar verhält sich genau wie ein Zeilenkommentar (`//`), außer dass er mit `#!` beginnt und **nur am absoluten Anfang eines Skripts oder Moduls gültig ist**. Beachten Sie auch, dass vor dem `#!` keine Leerzeichen jeglicher Art erlaubt sind. Der Kommentar besteht aus allen Zeichen nach `#!` bis zum Ende der ersten Zeile; es ist nur ein solcher Kommentar erlaubt.

Hashbang-Kommentare in JavaScript ähneln [Shebangs in Unix](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) die den Pfad zu einem spezifischen JavaScript-Interpreter bereitstellen, den Sie zur Ausführung des Skripts verwenden wollen. Bevor der Hashbang-Kommentar standardisiert wurde, war er bereits de-facto in Nicht-Browser-Hosts wie Node.js implementiert, wo er aus dem Quelltext entfernt wurde, bevor er an die Engine weitergeleitet wurde. Ein Beispiel ist wie folgt:

```js
#!/usr/bin/env node

console.log("Hello world");
```

Der JavaScript-Interpreter wird es wie einen normalen Kommentar behandeln – es hat nur semantische Bedeutung für die Shell, wenn das Skript direkt in einer Shell ausgeführt wird.

> [!WARNING]
> Wenn Sie möchten, dass Skripte direkt in einer Shell-Umgebung ausführbar sind, kodieren Sie sie in UTF-8 ohne ein [BOM](https://en.wikipedia.org/wiki/Byte_order_mark). Obwohl ein BOM keinen Problemen für im Browser laufenden Code verursacht – weil es während der UTF-8 Dekodierung entfernt wird, bevor der Quelltext analysiert wird – erkennt eine Unix/Linux-Shell den Hashbang nicht, wenn er von einem BOM-Zeichen vorangestellt wird.

Sie müssen den `#!`-Kommentarstil nur verwenden, um einen JavaScript-Interpreter anzugeben. In allen anderen Fällen verwenden Sie einfach einen `//`-Kommentar (oder mehrzeiligen Kommentar).

## Identifikatoren

Ein _Identifikator_ wird verwendet, um einem Wert einen Namen zuzuweisen. Identifikatoren können an verschiedenen Stellen verwendet werden:

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

In JavaScript bestehen Identifikatoren üblicherweise aus alphanumerischen Zeichen, Unterstrichen (`_`) und Dollarzeichen (`$`). Identifikatoren dürfen nicht mit Zahlen beginnen. JavaScript-Identifikatoren sind jedoch nicht nur auf {{Glossary("ASCII", "ASCII")}} beschränkt – viele Unicode-Codepunkte sind ebenfalls erlaubt. Nämlich:

- Startzeichen können jedes Zeichen in der [ID_Start](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Start%7D)-Kategorie plus `_` und `$` sein.
- Nach dem ersten Zeichen können Sie jedes Zeichen in der [ID_Continue](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Continue%7D)-Kategorie plus U+200C (ZWNJ) und U+200D (ZWJ) verwenden.

> [!NOTE]
> Wenn Sie aus irgendeinem Grund selbst JavaScript-Quellcode parsen müssen, nehmen Sie nicht an, dass alle Identifikatoren dem Muster `/[A-Za-z_$][\w$]*/` (d.h. nur ASCII) folgen! Der Bereich der Identifikatoren kann durch den regulären Ausdruck `/[$_\p{ID_Start}][$\p{ID_Continue}]*/u` (ohne Unicode-Escape-Sequenzen) beschrieben werden.

Darüber hinaus erlaubt JavaScript die Verwendung von [Unicode-Escape-Sequenzen](#unicode-escape-sequenzen) in der Form `\u0000` oder `\u{000000}` in Identifikatoren, die denselben Zeichenfolgenwert wie die eigentlichen Unicode-Zeichen kodieren. Zum Beispiel sind `你好` und `\u4f60\u597d` dieselben Identifikatoren:

```js-nolint
const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello
```

Nicht alle Stellen akzeptieren den vollständigen Bereich der Identifikatoren. Bestimmte Syntaxen, wie Funktionsdeklarationen, Funktionsausdrücke und Variablendeklarationen, erfordern die Verwendung von Identifikatornamen, die keine [reservierten Wörter](#reservierte_wörter) sind.

```js-nolint example-bad
function import() {} // Illegal: import is a reserved word.
```

Am bemerkenswertesten ist, dass private Elemente und Objekteigenschaften reservierte Wörter zulassen.

```js
const obj = { import: "value" }; // Legal despite `import` being reserved
class C {
  #import = "value";
}
```

## Schlüsselwörter

_Schlüsselwörter_ sind Token, die wie Identifikatoren aussehen, jedoch spezielle Bedeutungen in JavaScript haben. Zum Beispiel zeigt das Schlüsselwort [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) vor einer Funktionsdeklaration an, dass die Funktion asynchron ist.

Einige Schlüsselwörter sind _reserviert_, was bedeutet, dass sie nicht als Identifikator für Variablendeklarationen, Funktionsdeklarationen usw. verwendet werden können. Sie werden oft _reservierte Wörter_ genannt. [Eine Liste dieser reservierten Wörter](#reservierte_wörter) wird unten bereitgestellt. Nicht alle Schlüsselwörter sind reserviert – zum Beispiel kann `async` überall als Identifikator verwendet werden. Einige Schlüsselwörter sind nur _kontextuell reserviert_ – zum Beispiel ist `await` nur innerhalb des Körpers einer asynchronen Funktion reserviert, und `let` ist nur im [Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) oder in `const`- und `let`-Deklarationen reserviert.

Identifikatoren werden immer mit _Zeichenfolgenwerten_ verglichen, weshalb Escape-Sequenzen interpretiert werden. Zum Beispiel ist dies immer noch ein Syntaxfehler:

```js-nolint example-bad
const els\u{65} = 1;
// `els\u{65}` encodes the same identifier as `else`
```

### Reservierte Wörter

Diese Schlüsselwörter können nicht als Identifikatoren für Variablen, Funktionen, Klassen usw. irgendwo im JavaScript-Quelltext verwendet werden.

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

Die folgenden sind nur im Strikten Modus reserviert:

- {{jsxref("Statements/let", "let")}} (auch reserviert in `const`, `let` und Klassendeklarationen)
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- {{jsxref("Operators/yield", "yield")}} (auch reserviert in Generatorfunktionen)

Die folgenden sind nur reserviert in Modulcode oder innerhalb des Körpers von asynchronen Funktionen:

- [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

### Zukünftig reservierte Wörter

Die folgenden sind von der ECMAScript-Spezifikation als zukünftige Schlüsselwörter reserviert. Sie haben derzeit keine spezielle Funktionalität, aber möglicherweise in Zukunft, daher können sie nicht als Identifikatoren verwendet werden.

Diese sind immer reserviert:

- `enum`

Die folgenden sind nur im Strikten Modus reserviert:

- `implements`
- `interface`
- `package`
- `private`
- `protected`
- `public`

#### In älteren Standards reservierte zukünftige Wörter

Die folgenden sind von älteren ECMAScript-Spezifikationen (ECMAScript 1 bis 3) als zukünftige Schlüsselwörter reserviert worden.

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

### Identifikatoren mit spezieller Bedeutung

Einige wenige Identifikatoren haben in bestimmten Kontexten eine besondere Bedeutung, ohne dass es sich um reservierte Wörter handelt. Dazu gehören:

- {{jsxref("Functions/arguments", "arguments")}} (kein Schlüsselwort, darf im Strikten Modus aber nicht als Identifikator deklariert werden)
- `as` ([`import * as ns from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import))
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)
- {{jsxref("Global_Objects/eval", "eval")}} (kein Schlüsselwort, kann im Strikten Modus aber nicht als Identifikator deklariert werden)
- `from` ([`import x from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import))
- {{jsxref("Functions/get", "get")}}
- [`of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- {{jsxref("Functions/set", "set")}}

## Literale

> [!NOTE]
> Dieser Abschnitt behandelt Literale, die atomare Token sind. [Objektliterale](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Array-Literale](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation) sind [Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators), die aus einer Reihe von Token bestehen.

### Null-Literal

Siehe auch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) für weitere Informationen.

```js-nolint
null
```

### Boolean-Literal

Siehe auch [boolescher Typ](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type) für weitere Informationen.

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

Dezimalliterale können mit einer Null (`0`) beginnen, gefolgt von einer weiteren Dezimalziffer, aber wenn alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies wird als Legacy-Syntax betrachtet, und Zahlenliterale, die mit `0` beginnen, führen im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) zu einem Syntaxfehler – verwenden Sie daher stattdessen das Präfix `0o`.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

##### Exponential

Das dezimale Exponentialliteral wird durch das folgende Format spezifiziert: `beN`; wobei `b` eine Basenummer (ganz oder fließend) ist, gefolgt von einem `E` oder `e`-Zeichen (das als Trennzeichen oder _Exponenten-Indikator_ dient) und `N`, das der _Exponenten_ oder _Potenz_ ist – eine ganze Zahl mit Vorzeichen.

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

Die Binärzahlsyntax verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "B" (`0b` oder `0B`). Jedes Zeichen nach dem `0b`, das nicht 0 oder 1 ist, beendet die Literalfolge.

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### Oktal

Die Oktalzahlsyntax verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "O" (`0o` oder `0O`). Jedes Zeichen nach dem `0o`, das außerhalb des Bereichs (01234567) liegt, beendet die Literalfolge.

```js-nolint
0O755 // 493
0o644 // 420
```

#### Hexadezimal

Die Hexadezimalzahlsyntax verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "X" (`0x` oder `0X`). Jedes Zeichen nach dem `0x`, das außerhalb des Bereichs (0123456789ABCDEF) liegt, beendet die Literalfolge.

```js-nolint
0xFFFFFFFFFFFFF // 4503599627370495
0xabcdef123456  // 188900967593046
0XA             // 10
```

#### BigInt Literal

Der [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type)-Typ ist ein numerisches Primitive in JavaScript, das ganze Zahlen mit beliebiger Genauigkeit darstellen kann. BigInt-Literale werden erstellt, indem man `n` an das Ende einer ganzen Zahl anhängt.

```js-nolint
123456789123456789n     // 123456789123456789
0o777777777777n         // 68719476735
0x123456789ABCDEFn      // 81985529216486895
0b11101001010101010101n // 955733
```

BigInt-Literale dürfen nicht mit `0` beginnen, um Verwechslungen mit alten Oktalliteralen zu vermeiden.

```js-nolint example-bad
0755n; // SyntaxError: invalid BigInt syntax
```

Für Oktal-`BigInt`-Zahlen verwenden Sie immer eine Null, gefolgt von dem Buchstaben "o" (groß oder klein):

```js example-good
0o755n;
```

Für weitere Informationen zu `BigInt`, siehe auch [JavaScript Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type).

#### Nummerische Trennzeichen

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

### Zeichenfolgenliterale

Ein [Zeichenfolge](/de/docs/Web/JavaScript/Guide/Data_structures#string_type)-Literal ist null oder mehr Unicode-Codepunkte, die in einfache oder doppelte Anführungszeichen eingeschlossen sind. Unicode-Codepunkte können auch durch eine Escape-Sequenz dargestellt werden. Alle Codepunkte können sich buchstäblich in einem Zeichenfolgenliteral befinden, außer diesen Codepunkten:

- U+005C \ (Rückschrägstrich)
- U+000D \<CR>
- U+000A \<LF>
- Die gleiche Art von Anführungszeichen, die das Zeichenfolgenliteral beginnt

Jeder Codepunkt kann in der Form einer Escape-Sequenz erscheinen. Zeichenfolgenliterale evaluieren zu ECMAScript-Zeichenfolgenwerten. Beim Generieren dieser Zeichenfolgenwerte sind Unicode-Codepunkte UTF-16-kodiert.

```js-nolint
'foo'
"bar"
```

Die folgenden Unterabschnitte beschreiben verschiedene Escape-Sequenzen (`\` gefolgt von einem oder mehreren Zeichen), die in Zeichenfolgenliteralen verfügbar sind. Jede nicht unten aufgeführte Escape-Sequenz wird zu einem "Identitäts-Escape", der selbst zu dem Codepunkt wird. Zum Beispiel ist `\z` dasselbe wie `z`. Es gibt eine veraltete Oktal-Escape-Sequenz-Syntax, die auf der [Abgeschriebene und veraltete Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences)-Seite beschrieben wird. Viele dieser Escape-Sequenzen sind auch in regulären Ausdrücken gültig – siehe [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

#### Escape-Sequenzen

Spezialzeichen können mit Escape-Sequenzen kodiert werden:

| Escape-Sequenz                                               | Unicode-Codepunkt                                  |
| ------------------------------------------------------------ | -------------------------------------------------- |
| `\0`                                                         | Null-Zeichen (U+0000 NULL)                         |
| `\'`                                                         | Einfaches Anführungszeichen (U+0027 APOSTROPHE)    |
| `\"`                                                         | Doppelte Anführungszeichen (U+0022 QUOTATION MARK) |
| `\\`                                                         | Rückwärtsschrägstrich (U+005C REVERSE SOLIDUS)     |
| `\n`                                                         | Neue Zeile (U+000A LINE FEED; LF)                  |
| `\r`                                                         | Wagenrücklauf (U+000D CARRIAGE RETURN; CR)         |
| `\v`                                                         | Vertikale Tabulator (U+000B LINE TABULATION)       |
| `\t`                                                         | Tabulator (U+0009 CHARACTER TABULATION)            |
| `\b`                                                         | Rückschritttaste (U+0008 BACKSPACE)                |
| `\f`                                                         | Form Feed (U+000C FORM FEED)                       |
| `\` gefolgt von einem [Zeilenendezeichen](#zeilenendzeichen) | Leere Zeichenfolge                                 |

Die letzte Escape-Sequenz, `\` gefolgt von einem Zeilenendezeichen, ist nützlich, um ein Zeichenfolgenliteral über mehrere Zeilen zu teilen, ohne dass sich dessen Bedeutung ändert.

```js
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Stellen Sie sicher, dass sich kein Leerzeichen oder ein anderes Zeichen nach dem Rückschrägstrich befindet (außer einem Zeilenumbruch), da es sonst nicht funktioniert. Wenn die nächste Zeile eingerückt ist, sind die zusätzlichen Leerzeichen auch im Wert der Zeichenfolge enthalten.

Sie können auch den [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition)-Operator verwenden, um mehrere Zeichenfolgen miteinander zu verketten, wie folgt:

```js
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Beide der obigen Methoden resultieren in identischen Zeichenfolgen.

#### Hexadezimale Escape-Sequenzen

Hexadezimale Escape-Sequenzen bestehen aus `\x`, gefolgt von genau zwei hexadezimalen Ziffern, die eine Code-Einheit oder einen Codepunkt im Bereich von 0x0000 bis 0x00FF darstellen.

```js
"\xA9"; // "©"
```

#### Unicode-Escape-Sequenzen

Eine Unicode-Escape-Sequenz besteht aus genau vier hexadezimalen Ziffern nach `\u`. Sie stellt eine Codeeinheit in der UTF-16-Kodierung dar. Für Codepunkte von U+0000 bis U+FFFF ist die Codeeinheit gleich dem Codepunkt. Codepunkte von U+10000 bis U+10FFFF erfordern zwei Escape-Sequenzen, die die zwei Codeeinheiten (ein Surrogatpaar) darstellen, die zur Kodierung des Zeichens verwendet werden; das Surrogatpaar ist vom Codepunkt zu unterscheiden.

Siehe auch {{jsxref("String.fromCharCode()")}} und {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Unicode-Codepunkt-Escape

Ein Unicode-Codepunkt-Escape besteht aus `\u{`, gefolgt von einem Codepunkt in hexadezimaler Basis, gefolgt von `}`. Der Wert der hexadezimalen Ziffern muss im Bereich von 0 bis 0x10FFFF einschließlich liegen. Codepunkte im Bereich U+10000 bis U+10FFFF müssen nicht als Surrogatpaar dargestellt werden.

Siehe auch {{jsxref("String.fromCodePoint()")}} und {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// the same character represented as a surrogate pair
"\uD87E\uDC04";
```

### Reguläre Ausdrucksliterale

Reguläre Ausdrucksliterale werden von zwei Schrägstrichen (`/`) eingeschlossen. Der Lexer konsumiert alle Zeichen bis zum nächsten nicht-escaped Schrägstrich oder zum Zeilenende, es sei denn, der Schrägstrich erscheint innerhalb einer Zeichenklasse (`[]`). Einige Zeichen (nämlich diejenigen, die [Teil eines Identifikators](#identifikatoren) sind) können nach dem abschließenden Schrägstrich erscheinen und Flaggen bezeichnen.

Die lexikalische Grammatik ist sehr nachsichtig: Nicht alle regulären Ausdrucksliterale, die als ein Token erkannt werden, sind gültige reguläre Ausdrücke.

Weitere Informationen finden Sie unter {{jsxref("RegExp")}}.

```js
/ab+c/g;
/[/]/;
```

Ein reguläres Ausdrucksliteral kann nicht mit zwei Schrägstrichen (`//`) beginnen, da dies ein Zeilenkommentar wäre. Verwenden Sie `/(?:)/`, um ein leeres reguläres Ausdrucksliteral anzugeben.

### Template-Literale

Ein Template-Literal besteht aus mehreren Token: `` `xxx${ `` (Template-Kopf), `}xxx${` (Template-Mitte) und `` }xxx` `` (Template-Ende) sind individuelle Tokens, während beliebige Ausdrücke zwischen ihnen stehen können.

Weitere Informationen finden Sie unter [Template-Literals](/de/docs/Web/JavaScript/Reference/Template_literals).

```js
`string text`;

`string text line 1
 string text line 2`;

`string text ${expression} string text`;

tag`string text ${expression} string text`;
```

## Automatische Semikolonsetzung

Einige [JavaScript-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements)' Syntaxdefinitionen erfordern am Ende der Anweisung ein Semikolon (`;`). Dazu gehören:

- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`using`](/de/docs/Web/JavaScript/Reference/Statements/using), [`await using`](/de/docs/Web/JavaScript/Reference/Statements/await_using)
- [Ausdrucksanweisungen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement)
- [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue), [`break`](/de/docs/Web/JavaScript/Reference/Statements/break), [`return`](/de/docs/Web/JavaScript/Reference/Statements/return), [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)
- Klassendeklarationen ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_elements))
- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import), [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)

Um die Sprache jedoch benutzerfreundlicher und bequemer zu machen, ist JavaScript in der Lage, Semikolons bei der Verarbeitung des Tokenstroms automatisch einzufügen, damit einige ungültige Tokensequenzen zu gültiger Syntax "korrigiert" werden können. Dieser Schritt erfolgt, nachdem der Programmtext gemäß der lexikalischen Grammatik in Token zerlegt wurde. Es gibt drei Fälle, in denen Semikolons automatisch eingefügt werden:

1\. Wenn ein Token auftritt, das gemäß der Grammatik nicht erlaubt ist und es durch mindestens ein [Zeilenendzeichen](#zeilenendzeichen) (einschließlich eines Blockkommentars, der mindestens ein Zeilenendzeichen enthält) vom vorhergehenden Token getrennt ist, oder das Token ist "}", dann wird ein Semikolon vor dem Token eingefügt.

```js-nolint
{ 1
2 } 3

// is transformed by ASI into:

{ 1
;2 ;} 3;

// Which is valid grammar encoding three statements,
// each consisting of a number literal
```

Das abschließende ")" von [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) wird in dieser Regel auch als Sonderfall behandelt.

```js-nolint
do {
  // …
} while (condition) /* ; */ // ASI here
const a = 1
```

Allerdings werden keine Semikolons eingefügt, wenn das Semikolon dann der Trennzeichen im Kopf der [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Anweisung wäre.

```js-nolint example-bad
for (
  let a = 1 // No ASI here
  a < 10 // No ASI here
  a++
) {}
```

Semikolons werden auch niemals als [leere Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Empty) eingefügt. Zum Beispiel: In dem unten stehenden Code würde es, wenn ein Semikolon nach dem ")" eingefügt würde, gültig, mit einer leeren Anweisung als `if`-Körper und der `const`-Deklaration als eigenständige Anweisung. Da jedoch automatisch eingefügte Semikolons keine leeren Anweisungen werden können, führt dies dazu, dass eine [Deklaration](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations) zum Körper der `if`-Anweisung wird, was nicht gültig ist.

```js-nolint example-bad
if (Math.random() > 0.5)
const x = 1 // SyntaxError: Unexpected token 'const'
```

2\. Wenn das Ende des Eingabestroms von Token erreicht wird und der Parser nicht in der Lage ist, den Einzel-Token-Strom als vollständiges Programm zu parsen, wird ein Semikolon am Ende eingefügt.

```js-nolint
const a = 1 /* ; */ // ASI here
```

Diese Regel ergänzt die vorherige Regel speziell für den Fall, dass es kein "störendes Token" gibt, sondern das Ende des Eingabestroms.

3\. Wenn die Grammatik Zeilenender an einem bestimmten Ort verbietet, aber ein Zeilenende gefunden wird, wird ein Semikolon eingefügt. Diese Orte sind:

- `expr <hier> ++`, `expr <hier> --`
- `continue <hier> lbl`
- `break <hier> lbl`
- `return <hier> expr`
- `throw <hier> expr`
- `yield <hier> expr`
- `yield <hier> * expr`
- `(param) <hier> => {}`
- `async <hier> function`, `async <hier> prop()`, `async <hier> function*`, `async <hier> *prop()`, `async <hier> (param) <hier> => {}`
- `using <hier> id`, `await <hier> using <hier> id`

Hier wird [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment) nicht als Nachfolgeoperator behandelt, der auf die Variable `b` angewendet wird, da ein Zeilenumbruch zwischen `b` und `++` auftritt.

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

Beachten Sie, dass ASI nur aktiviert wird, wenn ein Zeilenumbruch Tokens trennt, die ansonsten zu einer ungültigen Syntax führen würden. Wenn das nächste Token als Teil einer gültigen Struktur geparsed werden kann, würden keine Semikolons eingefügt. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()

const b = 1
[1, 2, 3].forEach(console.log)
```

Weil `()` als Funktionsaufruf gesehen werden kann, würde es normalerweise nicht ASI auslösen. Ähnlich kann `[]` ein Mitgliedszugriff sein. Der obige Code ist gleichbedeutend mit:

```js-nolint example-bad
const a = 1(1).toString();

const b = 1[1, 2, 3].forEach(console.log);
```

Dies ist zufällig eine gültige Syntax. `1[1, 2, 3]` ist ein [Eigenschafts-Zugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) mit einem durch das [Komma](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) verbundenen Ausdruck. Daher erhalten Sie beim Ausführen des Codes Fehlermeldungen wie "1 is not a function" und "Cannot read properties of undefined (reading 'forEach')".

In Klassen können Klassenfelder und Generatormethoden auch eine Falle sein.

```js-nolint example-bad
class A {
  a = 1
  *gen() {}
}
```

Es wird betrachtet als:

```js-nolint example-bad
class A {
  a = 1 * gen() {}
}
```

Und daher wird es einen Syntaxfehler um `{` geben.

Es gibt die folgenden Faustregeln zum Umgang mit ASI, wenn Sie einen Semikolon-losen Stil durchsetzen möchten:

- Setzen Sie das Nachfolge-`++` und `--` auf dieselbe Zeile wie ihre Operanden.

  ```js-nolint example-bad
  const a = b
  ++
  console.log(a) // ReferenceError: Invalid left-hand side expression in prefix operation
  ```

  ```js-nolint example-good
  const a = b++
  console.log(a)
  ```

- Die Ausdrücke nach `return`, `throw` oder `yield` sollten auf derselben Zeile wie das Schlüsselwort stehen.

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

- Ähnlich sollte der Label-Identifikator nach `break` oder `continue` auf derselben Zeile wie das Schlüsselwort stehen.

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

- Der `=>` eines Pfeilfunktionen sollte auf derselben Zeile wie das Ende ihrer Parameter stehen.

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

- Das Schlüsselwort `using` in `using`- und `await using`-Anweisungen sollte auf derselben Zeile stehen wie der erste Identifikator, den es deklariert.

  ```js-nolint example-bad
  using
  resource = acquireResource()
  ```

  ```js-nolint example-good
  using resource
    = acquireResource()
  ```

- Wenn eine Zeile mit einem der `(`, `[`, `` ` ``, `+`, `-`, `/` (wie in regulären Ausdrucksliteralen) beginnt, setzen Sie ein Semikolon vor, oder beenden Sie die vorherige Zeile mit einem Semikolon.

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

- Klassenfelder sollten vorzugsweise immer mit Semikolons beendet werden – zusätzlich zur vorherigen Regel (die auch eine Felderklärung gefolgt von einer [berechneten Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) einschließt, da letzteres mit `[` beginnt), sind auch zwischen einer Felderklärung und einer Generatormethode Semikolons erforderlich.

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
- [Microfeature aus ES6, jetzt in Firefox Aurora und Nightly: binäre und oktale Zahlen](https://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/) von Jeff Walden (2013)
- [JavaScript-Zeichen-Escape-Sequenzen](https://mathiasbynens.be/notes/javascript-escapes) von Mathias Bynens (2011)

---
title: Lexikalische Grammatik
slug: Web/JavaScript/Reference/Lexical_grammar
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("More")}}

Diese Seite beschreibt JavaScripts lexikalische Grammatik. JavaScript-Quelltext ist nur eine Abfolge von Zeichen – damit der Interpreter es versteht, muss die Zeichenfolge in eine strukturiertere Darstellung _geparst_ werden. Der erste Schritt des Parsens wird [lexikalische Analyse](https://en.wikipedia.org/wiki/Lexical_analysis) genannt, bei der der Text von links nach rechts gescannt und in eine Abfolge von einzelnen, atomaren Eingabeelementen umgewandelt wird. Einige Eingabeelemente sind für den Interpreter unbedeutend und werden nach diesem Schritt entfernt – dazu gehören [Leerzeichen](#leerraum) und [Kommentare](#kommentare). Die anderen, einschließlich [Bezeichner](#bezeichner), [Schlüsselwörter](#schlüsselwörter), [Literale](#literale) und Punctuatoren (hauptsächlich [Operatoren](/de/docs/Web/JavaScript/Reference/Operators)), werden für die weitere Syntaxanalyse verwendet. [Zeilenabschlüsse](#zeilenabschlüsse) und mehrzeilige Kommentare sind ebenfalls syntaktisch unbedeutend, steuern jedoch den Prozess der [automatischen Semikolon-Einfügung](#automatische_semikolon-einfügung), um bestimmte ungültige Token-Sequenzen gültig zu machen.

## Formatsteuerzeichen

Formatsteuerzeichen haben keine visuelle Darstellung, werden jedoch verwendet, um die Interpretation des Textes zu steuern.

| Codepunkt | Name                      | Abkürzung | Beschreibung                                                                                                                                                                                             |
| --------- | ------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| U+200C    | Nullbreite-Nichtverbinder | \<ZWNJ>   | Between characters to prevent ligature formation in certain languages ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_non-joiner)).                                                                |
| U+200D    | Nullbreite-Verbinder      | \<ZWJ>    | Zwischen Zeichen platziert, die normalerweise nicht verbunden werden, um die Zeichen verbunden darzustellen in bestimmten Sprachen ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_joiner)).       |
| U+FEFF    | Byte Order Mark           | \<BOM>    | Am Anfang des Skripts verwendet, um es als Unicode zu kennzeichnen und die Erkennung der Textcodierung und Byte-Reihenfolge zu ermöglichen ([Wikipedia](https://en.wikipedia.org/wiki/Byte_order_mark)). |

Im JavaScript-Quelltext werden \<ZWNJ> und \<ZWJ> als [Bezeichnerteile](#bezeichner) behandelt, während \<BOM> (auch Nullbreiten-Nichttrennzeichen genannt, \<ZWNBSP>, wenn nicht am Anfang des Textes) als [Leerraum](#leerraum) behandelt wird.

## Leerraum

{{Glossary("Whitespace", "Leerzeichen")}}-Zeichen verbessern die Lesbarkeit des Quelltexts und trennen Tokens voneinander. Diese Zeichen sind normalerweise für die Funktionalität des Codes nicht notwendig. [Minifizierungstools](https://en.wikipedia.org/wiki/Minification_%28programming%29) werden häufig verwendet, um Leerzeichen zu entfernen, um die Menge der zu übertragenden Daten zu reduzieren.

| Codepunkt | Name                          | Abkürzung | Beschreibung                                                                                   | Escape-Sequenz |
| --------- | ----------------------------- | --------- | ---------------------------------------------------------------------------------------------- | -------------- |
| U+0009    | Horizontaler Tabulator        | \<TAB>    | Horizontal tabulation                                                                          | \t             |
| U+000B    | Zeilen-Tabulation             | \<VT>     | Vertikaler Tabulator                                                                           | \v             |
| U+000C    | Seitenvorschub                | \<FF>     | Seitenumbruch-Steuerzeichen ([Wikipedia](https://en.wikipedia.org/wiki/Page_break#Form_feed)). | \f             |
| U+0020    | Leerzeichen                   | \<SP>     | normales Leerzeichen                                                                           |                |
| U+00A0    | Geschütztes Leerzeichen       | \<NBSP>   | normales Leerzeichen, aber ohne Punkt, an dem eine Zeile brechen kann                          |                |
| U+FEFF    | Nullbreiten-Nichttrennzeichen | \<ZWNBSP> | Wenn nicht am Anfang eines Skripts, ist das BOM-Markierungszeichen ein normales Leerzeichen.   |                |
| Andere    | Andere Unicode-Leerzeichen    | \<USP>    | [Zeichen in der allgemeinen Kategorie "Space_Separator"][space separator set]                  |                |

[space separator set]: https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D

> [!NOTE]
> Von den [Zeichen mit der "White_Space" Eigenschaft, die jedoch nicht in der allgemeinen Kategorie "Space_Separator" sind](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BWhite_Space%7D%26%5CP%7BGeneral_Category%3DSpace_Separator%7D), werden U+0009, U+000B und U+000C immer noch als Leerzeichen in JavaScript behandelt; U+0085 NEXT LINE hat keine besondere Rolle; andere bilden die Menge der [Zeilenabschlüsse](#zeilenabschlüsse).

> [!NOTE]
> Änderungen in der Unicode-Norm, die vom JavaScript-Engine verwendet wird, können das Verhalten von Programmen beeinflussen. Zum Beispiel hat ES2016 die Bezugs-Unicode-Norm von 5.1 auf 8.0.0 aktualisiert, wodurch U+180E MONGOLIAN VOWEL SEPARATOR von der Kategorie "Space_Separator" in die Kategorie "Format (Cf)" verschoben wurde, und es wurde zu einem Nicht-Leerzeichen. Folglich änderte sich das Ergebnis von [`"\u180E".trim().length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim) von `0` zu `1`.

## Zeilenabschlüsse

Neben [Leerzeichen](#leerraum)-Zeichen werden Zeilenabschlusszeichen verwendet, um die Lesbarkeit des Quelltextes zu verbessern. In einigen Fällen können Zeilenabschlüsse jedoch die Ausführung von JavaScript-Code beeinflussen, da es einige Stellen gibt, an denen sie verboten sind. Zeilenabschlüsse beeinflussen auch den Prozess der [automatischen Semikolon-Einfügung](#automatische_semikolon-einfügung).

Außerhalb des Kontexts der lexikalischen Grammatik werden Leerzeichen und Zeilenabschlüsse häufig vermischt. Zum Beispiel entfernt {{jsxref("String.prototype.trim()")}} alle Leerzeichen und Zeilenabschlüsse vom Anfang und Ende eines Strings. Die `\s` [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) in regulären Ausdrücken stimmt mit allen Leerzeichen und Zeilenabschlüssen überein.

Nur die folgenden Unicode-Codepunkte werden in ECMAScript als Zeilenabschlüsse behandelt, andere Zeichen zum Zeilenumbruch werden als Leerzeichen behandelt (zum Beispiel wird Next Line, NEL, U+0085 als Leerzeichen betrachtet).

| Codepunkt | Name             | Abkürzung | Beschreibung                                               | Escape-Sequenz |
| --------- | ---------------- | --------- | ---------------------------------------------------------- | -------------- |
| U+000A    | Zeilenumbruch    | \<LF>     | Neues Zeilenzeichen in UNIX-Systemen.                      | \n             |
| U+000D    | Wagenrücklauf    | \<CR>     | Neues Zeilenzeichen in Commodore- und frühen Mac-Systemen. | \r             |
| U+2028    | Zeilenabscheider | \<LS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline)         |                |
| U+2029    | Absatzseparator  | \<PS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline)         |                |

## Kommentare

Kommentare werden verwendet, um Hinweise, Notizen, Vorschläge oder Warnungen zum JavaScript-Code hinzuzufügen. Dadurch kann er leichter gelesen und verstanden werden. Sie können auch verwendet werden, um Code zu deaktivieren, damit er nicht ausgeführt wird; dies kann ein wertvolles Debugging-Tool sein.

JavaScript bietet zwei langjährige Möglichkeiten, Kommentare zum Code hinzuzufügen: Zeilenkommentare und Blockkommentare. Zusätzlich gibt es eine spezielle Hashbang-Kommentarsyntax.

### Zeilenkommentare

Die erste Möglichkeit ist der `//`-Kommentar; dies macht den gesamten Text nach ihm in derselben Zeile zu einem Kommentar. Zum Beispiel:

```js
function comment() {
  // This is a one line JavaScript comment
  console.log("Hello world!");
}
comment();
```

### Blockkommentare

Die zweite Möglichkeit ist der Block-Kommentar im Stil `/* */`, der viel flexibler ist.

Zum Beispiel können Sie ihn in einer einzelnen Zeile verwenden:

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

Sie können ihn auch in der Mitte einer Zeile verwenden, wenn Sie möchten, obwohl dies Ihren Code schwieriger zu lesen machen kann, daher sollte er mit Vorsicht verwendet werden:

```js
function comment(x) {
  console.log("Hello " + x /* insert the value of x */ + " !");
}
comment("world");
```

Zusätzlich können Sie ihn verwenden, um Code zu deaktivieren, damit er nicht ausgeführt wird, indem Sie den Code in einen Kommentar einwickeln, wie diesen:

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

In diesem Fall wird der `console.log()`-Aufruf nie ausgegeben, da er sich innerhalb eines Kommentars befindet. Jede Anzahl von Codezeilen kann auf diese Weise deaktiviert werden.

Blockkommentare, die mindestens einen Zeilenabschluss enthalten, verhalten sich wie [Zeilenabschlüsse](#zeilenabschlüsse) in der [automatischen Semikolon-Einfügung](#automatische_semikolon-einfügung).

### Hashbang-Kommentare

Es gibt eine spezielle dritte Kommentarsyntax, den **Hashbang-Kommentar**. Ein Hashbang-Kommentar verhält sich genau wie ein einzeiliger (`//`) Kommentar, außer dass er mit `#!` beginnt und **nur am absoluten Anfang eines Skripts oder Moduls gültig ist**. Beachten Sie auch, dass vor dem `#!` keine Leerzeichen oder sonstige Zeichen erlaubt sind. Der Kommentar besteht aus allen Zeichen nach `#!` bis zum Ende der ersten Zeile; es ist nur ein solcher Kommentar erlaubt.

Hashbang-Kommentare in JavaScript ähneln [Shebangs in Unix](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) die den Pfad zu einem bestimmten JavaScript-Interpreter angeben, den Sie für die Ausführung des Skripts verwenden möchten. Bevor der Hashbang-Kommentar standardisiert wurde, war er bereits de-facto in nicht-browsergestützten Hosts wie Node.js implementiert, wo er vor der Übergabe an die Engine aus dem Quelltext entfernt wurde. Ein Beispiel ist wie folgt:

```js
#!/usr/bin/env node

console.log("Hello world");
```

Der JavaScript-Interpreter behandelt ihn als normalen Kommentar – er hat nur semantische Bedeutung für die Shell, wenn das Skript direkt in einer Shell ausgeführt wird.

> [!WARNING]
> Wenn Sie möchten, dass Skripte direkt in einer Shell-Umgebung ausführbar sind, kodieren Sie sie in UTF-8 ohne [BOM](https://en.wikipedia.org/wiki/Byte_order_mark). Obwohl ein BOM keine Probleme für Code verursacht, der in einem Browser ausgeführt wird – weil es beim UTF-8-Dekodieren entfernt wird, bevor der Quelltext analysiert wird –, erkennt eine Unix/Linux-Shell den Hashbang nicht, wenn er von einem BOM-Zeichen vorangestellt wird.

Sie sollten den `#!`-Kommentartyp nur verwenden, um einen JavaScript-Interpreter anzugeben. In allen anderen Fällen verwenden Sie einfach einen `//`-Kommentar (oder mehrzeiligen Kommentar).

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

In JavaScript bestehen Bezeichner typischerweise aus alphanumerischen Zeichen, Unterstrichen (`_`) und Dollarzeichen (`$`). Bezeichner dürfen nicht mit Zahlen beginnen. Allerdings sind JavaScript-Bezeichner nicht nur auf {{Glossary("ASCII", "ASCII")}} beschränkt – es sind auch viele Unicode-Codepunkte zulässig. Nämlich:

- Startzeichen können jedes Zeichen in der [ID_Start](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Start%7D) Kategorie plus `_` und `$` sein.
- Nach dem ersten Zeichen kann jedes Zeichen in der [ID_Continue](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Continue%7D) Kategorie plus U+200C (ZWNJ) und U+200D (ZWJ) verwendet werden.

> [!NOTE]
> Falls Sie aus irgendeinem Grund JavaScript-Quelltext selbst parsen müssen, gehen Sie nicht davon aus, dass alle Bezeichner dem Muster `/[A-Za-z_$][\w$]*/` (d.h. nur ASCII) folgen! Der Bereich der Bezeichner kann durch den regulären Ausdruck `/[$_\p{ID_Start}][$\p{ID_Continue}]*/u` (ohne Unicode-Escape-Sequenzen) beschrieben werden.

Zusätzlich erlaubt JavaScript die Verwendung von [Unicode-Escape-Sequenzen](#unicode-escape-sequenzen) in der Form von `\u0000` oder `\u{000000}` in Bezeichnern, die denselben Zeichenfolgenwert wie die tatsächlichen Unicode-Zeichen codieren. Zum Beispiel sind `你好` und `\u4f60\u597d` dieselben Bezeichner:

```js-nolint
const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello
```

Nicht alle Orte akzeptieren den vollständigen Bereich der Bezeichner. Bestimmte Syntaxen, wie Funktionsdeklarationen, Funktionsausdrücke und Variablendeklarationen, erfordern die Verwendung von Bezeichnernamen, die keine [reservierten Wörter](#reservierte_wörter) sind.

```js-nolint example-bad
function import() {} // Illegal: import is a reserved word.
```

Am auffälligsten können private Elemente und Objekteigenschaften reservierte Wörter verwenden.

```js
const obj = { import: "value" }; // Legal despite `import` being reserved
class C {
  #import = "value";
}
```

## Schlüsselwörter

_Schlüsselwörter_ sind Tokens, die wie Bezeichner aussehen, jedoch besondere Bedeutungen in JavaScript haben. Zum Beispiel zeigt das Schlüsselwort [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) vor einer Funktionsdeklaration an, dass die Funktion asynchron ist.

Einige Schlüsselwörter sind _reserviert_, was bedeutet, dass sie nicht als Bezeichner für Variablendeklarationen, Funktionsdeklarationen usw. verwendet werden können. Sie werden oft als _reservierte Wörter_ bezeichnet. [Eine Liste dieser reservierten Wörter](#reservierte_wörter) ist unten angegeben. Nicht alle Schlüsselwörter sind reserviert – zum Beispiel kann `async` überall als Bezeichner verwendet werden. Einige Schlüsselwörter sind nur _kontextuell reserviert_ – zum Beispiel ist `await` nur innerhalb des Körpers einer asynchronen Funktion reserviert, und `let` ist nur im [strict Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) oder in `const`- und `let`-Deklarationen reserviert.

Bezeichner werden immer nach _Zeichenfolgenwert_ verglichen, daher werden Escape-Sequenzen interpretiert. Zum Beispiel ist dies immer noch ein Syntaxfehler:

```js-nolint example-bad
const els\u{65} = 1;
// `els\u{65}` encodes the same identifier as `else`
```

### Reservierte Wörter

Diese Schlüsselwörter können nicht als Bezeichner für Variablen, Funktionen, Klassen usw. irgendwo im JavaScript-Quellcode verwendet werden.

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

Die folgenden sind nur reserviert, wenn sie im Strict-Modus-Code gefunden werden:

- {{jsxref("Statements/let", "let")}} (ebenfalls reserviert in `const`, `let` und Klassendeklarationen)
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- {{jsxref("Operators/yield", "yield")}} (ebenfalls reserviert in Generatorfunktionskörpern)

Die folgenden sind nur reserviert, wenn sie im Modulkode oder im Körper von asynchronen Funktionen gefunden werden:

- [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

### Zukunftige reservierte Wörter

Die folgenden sind als zukünftige Schlüsselwörter durch die ECMAScript-Spezifikation reserviert. Sie haben derzeit keine spezielle Funktionalität, könnten jedoch in Zukunft eine haben, weswegen sie nicht als Bezeichner verwendet werden dürfen.

Diese sind immer reserviert:

- `enum`

Die folgenden sind nur reserviert, wenn sie im Strict-Modus-Code gefunden werden:

- `implements`
- `interface`
- `package`
- `private`
- `protected`
- `public`

#### Zukünftig reservierte Wörter in älteren Standards

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

Einige Bezeichner haben in bestimmten Kontexten eine besondere Bedeutung, ohne reservierte Wörter jeglicher Art zu sein. Dazu gehören:

- {{jsxref("Functions/arguments", "arguments")}} (kein Schlüsselwort, kann aber im Strict-Modus nicht als Bezeichner deklariert werden)
- `as` ([`import * as ns from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import))
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)
- {{jsxref("Global_Objects/eval", "eval")}} (kein Schlüsselwort, kann aber im Strict-Modus nicht als Bezeichner deklariert werden)
- `from` ([`import x from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import))
- {{jsxref("Functions/get", "get")}}
- [`of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- {{jsxref("Functions/set", "set")}}

## Literale

> [!NOTE]
> Dieser Abschnitt behandelt Literale, die atomare Tokens sind. [Objektliterale](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Arrayliterale](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation) sind [Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators), die aus einer Reihe von Tokens bestehen.

### Nullliteral

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

Die [Number](/de/docs/Web/JavaScript/Guide/Data_structures#number_type) und [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type) Typen verwenden numerische Literale.

#### Dezimal

```js-nolint
1234567890
42
```

Dezimaletralien können mit einer Null (`0`) beginnen, gefolgt von einer anderen Dezimalziffer. Wenn jedoch alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies wird als Legacy-Syntax angesehen, und Literale mit der Präfixnull verursachen einen Syntaxfehler im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) - daher verwenden Sie stattdessen das `0o`-Präfix.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

##### Exponential

Das dezimale Exponentialliteral wird durch das folgende Format spezifiziert: `beN`; wobei `b` eine Basiszahl (ganz oder gebrochen) ist, gefolgt von einem `E` oder `e`-Zeichen (das als Separator oder _Exponentialindikator_ dient) und `N`, das die _Exponential- oder Potenzzahl_ – eine vorzeichenbehaftete Ganzzahl – darstellt.

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

Die binäre Zahlsyntax verwendet eine führende Null, gefolgt von einem Kleinbuchstaben oder Großbuchstaben „B“ (`0b` oder `0B`). Ein nachfolgendes Zeichen, das nicht 0 oder 1 ist, beendet die Literalfolge.

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### Oktal

Die Oktalzahlsyntax verwendet eine führende Null, gefolgt von einem Kleinbuchstaben oder Großbuchstaben „O“ (`0o` oder `0O`). Ein nachfolgendes Zeichen, das außerhalb des Bereichs (01234567) liegt, beendet die Literalfolge.

```js-nolint
0O755 // 493
0o644 // 420
```

#### Hexadezimal

Die hexadezimale Zahlsyntax verwendet eine führende Null, gefolgt von einem Kleinbuchstaben oder Großbuchstaben „X“ (`0x` oder `0X`). Ein nachfolgendes Zeichen, das außerhalb des Bereichs (0123456789ABCDEF) liegt, beendet die Literalfolge.

```js-nolint
0xFFFFFFFFFFFFF // 4503599627370495
0xabcdef123456  // 188900967593046
0XA             // 10
```

#### BigInt-Literal

Der [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type)-Typ ist ein numerisches Primitive in JavaScript, das ganze Zahlen mit beliebiger Genauigkeit darstellen kann. BigInt-Literale werden erzeugt, indem ein `n` an das Ende einer Ganzzahl angehängt wird.

```js-nolint
123456789123456789n     // 123456789123456789
0o777777777777n         // 68719476735
0x123456789ABCDEFn      // 81985529216486895
0b11101001010101010101n // 955733
```

BigInt-Literale können nicht mit `0` beginnen, um Verwechslungen mit Legacy-Oktal-Literalen zu vermeiden.

```js-nolint example-bad
0755n; // SyntaxError: invalid BigInt syntax
```

Für oktale `BigInt`-Zahlen verwenden Sie immer eine Null, gefolgt von dem Buchstaben „o“ (großgeschrieben oder kleingeschrieben):

```js example-good
0o755n;
```

Für weitere Informationen über `BigInt`, siehe auch [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type).

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

### Stringliterale

Ein [String](/de/docs/Web/JavaScript/Guide/Data_structures#string_type)-Literal besteht aus null oder mehr Unicode-Codepunkten, eingeschlossen in einfache oder doppelte Anführungszeichen. Unicode-Codepunkte können auch durch eine Escape-Sequenz dargestellt werden. Alle Codepunkte können wörtlich in einem Stringliteral erscheinen außer diesen Codepunkten:

- U+005C \ (Backslash)
- U+000D \<CR>
- U+000A \<LF>
- Die gleiche Art von Anführungszeichen, die das Stringliteral beginnt

Jeder Codepunkt kann in Form einer Escape-Sequenz erscheinen. Stringliterale werten ECMAScript-Stringwerte aus. Beim Erzeugen dieser Stringwerte werden Unicode-Codepunkte in UTF-16 kodiert.

```js-nolint
'foo'
"bar"
```

Die folgenden Unterabschnitte beschreiben verschiedene Escape-Sequenzen (`\` gefolgt von einem oder mehreren Zeichen), die in Stringliteralen verfügbar sind. Jede nicht unten aufgeführte Escape-Sequenz wird zu einem „Identitäts-Escape“, das zum Codepunkt selbst wird. Zum Beispiel ist `\z` dasselbe wie `z`. Es gibt eine veraltete Oktal-Escape-Sequenz-Syntax, die auf der Seite [Veraltete und obsolette Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) beschrieben wird. Viele dieser Escape-Sequenzen sind auch in regulären Ausdrücken gültig – siehe [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

#### Escape-Sequenzen

Sonderzeichen können mit Escape-Sequenzen kodiert werden:

| Escape-Sequenz                                             | Unicode-Codepunkt                                   |
| ---------------------------------------------------------- | --------------------------------------------------- |
| `\0`                                                       | Nullzeichen (U+0000 NULL)                           |
| `\'`                                                       | Einfaches Anführungszeichen (U+0027 APOSTROPHE)     |
| `\"`                                                       | Doppeltes Anführungszeichen (U+0022 QUOTATION MARK) |
| `\\`                                                       | Backslash (U+005C REVERSE SOLIDUS)                  |
| `\n`                                                       | Zeilenumbruch (U+000A LINE FEED; LF)                |
| `\r`                                                       | Wagenrücklauf (U+000D CARRIAGE RETURN; CR)          |
| `\v`                                                       | Vertikaler Tabulator (U+000B LINE TABULATION)       |
| `\t`                                                       | Tabulator (U+0009 CHARACTER TABULATION)             |
| `\b`                                                       | Rückschritt (U+0008 BACKSPACE)                      |
| `\f`                                                       | Seitenvorschub (U+000C FORM FEED)                   |
| `\` gefolgt von einem [Zeilenabschluss](#zeilenabschlüsse) | Leerer String                                       |

Die letzte Escape-Sequenz, `\` gefolgt von einem Zeilenabschluss, ist nützlich, um ein Stringliteral über mehrere Zeilen zu teilen, ohne seine Bedeutung zu ändern.

```js
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Stellen Sie sicher, dass sich nach dem Backslash keine Leerzeichen oder sonstige Zeichen befinden (außer einem Zeilenumbruch), sonst funktioniert es nicht. Wenn die nächste Zeile eingerückt ist, werden die zusätzlichen Leerzeichen auch im Wert des Strings vorhanden sein.

Sie können auch den [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition)-Operator verwenden, um mehrere Strings aneinander zu hängen, wie folgt:

```js
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Beide der obigen Methoden führen zu identischen Strings.

#### Hexadezimale Escape-Sequenzen

Hexadezimale Escape-Sequenzen bestehen aus `\x` gefolgt von genau zwei hexadezimalen Ziffern, die eine Code-Einheit oder einen Codepunkt im Bereich von 0x0000 bis 0x00FF darstellen.

```js
"\xA9"; // "©"
```

#### Unicode-Escape-Sequenzen

Eine Unicode-Escape-Sequenz besteht aus genau vier hexadezimalen Ziffern, die `\u` folgen. Sie repräsentiert eine Code-Einheit in der UTF-16-Codierung. Für Codepunkte U+0000 bis U+FFFF ist die Code-Einheit gleich dem Codepunkt. Codepunkte U+10000 bis U+10FFFF erfordern zwei Escape-Sequenzen, die die beiden Code-Einheiten (ein Surrogatpaar) darstellen, die zur Kodierung des Zeichens verwendet werden; das Surrogatpaar unterscheidet sich vom Codepunkt.

Siehe auch {{jsxref("String.fromCharCode()")}} und {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Unicode-Codepunkt-Escapes

Ein Unicode-Codepunkt-Escape besteht aus `\u{`, gefolgt von einem Codepunkt in hexadezimaler Basis, gefolgt von `}`. Der Wert der hexadezimalen Ziffern muss im Bereich 0 und 0x10FFFF einschließlich liegen. Codepunkte im Bereich U+10000 bis U+10FFFF müssen nicht als Surrogatpaar repräsentiert werden.

Siehe auch {{jsxref("String.fromCodePoint()")}} und {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// the same character represented as a surrogate pair
"\uD87E\uDC04";
```

### Reguläre Ausdrucksliterale

Reguläre Ausdrucksliterale werden von zwei Schrägstrichen (`/`) eingeschlossen. Der Lexer verbraucht alle Zeichen bis zum nächsten nicht-escaped Schrägstrich oder dem Zeilenende, es sei denn, der Schrägstrich erscheint innerhalb einer Zeichenklasse (`[]`). Einige Zeichen (insbesondere diejenigen, die [Bezeichnerteile](#bezeichner) sind) können nach dem schließenden Schrägstrich erscheinen und Flags bezeichnen.

Die lexikalische Grammatik ist sehr nachsichtig: Nicht alle regulären Ausdrucksliterale, die als ein Token identifiziert werden, sind gültige reguläre Ausdrücke.

Weitere Informationen finden Sie auch unter {{jsxref("RegExp")}}.

```js
/ab+c/g;
/[/]/;
```

Ein reguläres Ausdrucksliteral kann nicht mit zwei Schrägstrichen (`//`) beginnen, da dies ein Zeilenkommentar wäre. Um einen leeren regulären Ausdruck zu spezifizieren, verwenden Sie `/(?:)/`.

### Template-Literale

Ein Template-Literal besteht aus mehreren Tokens: `` `xxx${ `` (Template-Start), `}xxx${` (Template-Mitte) und `` }xxx` `` (Template-Hinterteil) sind einzelne Tokens, während zwischen ihnen jeder Ausdruck möglich ist.

Weitere Informationen finden Sie auch unter [template literals](/de/docs/Web/JavaScript/Reference/Template_literals).

```js
`string text`;

`string text line 1
 string text line 2`;

`string text ${expression} string text`;

tag`string text ${expression} string text`;
```

## Automatische Semikolon-Einfügung

Einige [JavaScript-Ausdrucks](/de/docs/Web/JavaScript/Reference/Statements)' Syntaxdefinitionen erfordern Semikolons (`;`) am Ende. Dazu gehören:

- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- [Expression statements](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement)
- [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue), [`break`](/de/docs/Web/JavaScript/Reference/Statements/break), [`return`](/de/docs/Web/JavaScript/Reference/Statements/return), [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)
- Klassendeklarationen ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_elements))
- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import), [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)

Um die Sprache jedoch zugänglicher und bequemer zu machen, ist JavaScript in der Lage, beim Konsumieren des Token-Streams automatisch Semikolons einzufügen, sodass einige ungültige Token-Sequenzen "korrigiert" zu gültigen Syntaxen werden können. Dieser Schritt geschieht, nachdem der Programmtext entsprechend der lexikalischen Grammatik zu Tokens analysiert wurde. Es gibt drei Fälle, in denen Semikolons automatisch eingefügt werden:

1\. Wenn ein Token gefunden wird, das durch die Grammatik nicht erlaubt ist, und es von mindestens einem [Zeilenabschluss](#zeilenabschlüsse) (einschließlich eines Blockkommentars, der mindestens einen Zeilenabschluss enthält) vom vorherigen Token getrennt ist, oder das Token „}“ ist, dann wird vor dem Token ein Semikolon eingefügt.

```js-nolint
{ 1
2 } 3

// is transformed by ASI into:

{ 1
;2 ;} 3;

// Which is valid grammar encoding three statements,
// each consisting of a number literal
```

Das abschließende „)“ von [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) wird ebenfalls als Sonderfall durch diese Regel behandelt.

```js-nolint
do {
  // …
} while (condition) /* ; */ // ASI here
const a = 1
```

Semikolons werden jedoch nicht eingefügt, wenn das Semikolon dann zum Trennzeichen im Kopf der [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Anweisung werden würde.

```js-nolint example-bad
for (
  let a = 1 // No ASI here
  a < 10 // No ASI here
  a++
) {}
```

Semikolons werden auch nie als [leere Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Empty) eingefügt. Zum Beispiel würde im folgenden Code, wenn ein Semikolon nach „)“ eingefügt wird, der Code gültig sein, mit einer leeren Anweisung als `if`-Körper und der `const`-Deklaration als separater Anweisung. Da jedoch automatisch eingefügte Semikolons nicht zu leeren Anweisungen werden können, führt dies dazu, dass eine [Deklaration](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations) der Rumpf der `if`-Anweisung wird, was nicht gültig ist.

```js-nolint example-bad
if (Math.random() > 0.5)
const x = 1 // SyntaxError: Unexpected token 'const'
```

2\. Wenn das Ende des Eingabe-Token-Streams erreicht ist und der Parser nicht in der Lage ist, den einzelnen Eingabestream als vollständiges Programm zu analysieren, wird am Ende ein Semikolon eingefügt.

```js-nolint
const a = 1 /* ; */ // ASI here
```

Diese Regel stellt eine Ergänzung zur vorherigen Regel dar, insbesondere für den Fall, dass es kein „fehlerhaftes Token“ gibt, sondern das Ende des Eingabe-Token-Streams.

3\. Wenn die Grammatik an einigen Stellen Zeilenumbrüche verbietet, aber ein Zeilenumbruch gefunden wird, wird ein Semikolon eingefügt. Diese Stellen umfassen:

- `expr <here> ++`, `expr <here> --`
- `continue <here> lbl`
- `break <here> lbl`
- `return <here> expr`
- `throw <here> expr`
- `yield <here> expr`
- `yield <here> * expr`
- `(param) <here> => {}`
- `async <here> function`, `async <here> prop()`, `async <here> function*`, `async <here> *prop()`, `async <here> (param) <here> => {}`

Hier wird [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment) nicht als Postfixoperator angesehen, der auf die Variable `b` angewendet wird, da zwischen `b` und `++` ein Zeilenumbruch auftritt.

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

Beachten Sie, dass ASI nur ausgelöst wird, wenn ein Zeilenumbruch Token trennt, die sonst eine ungültige Syntax ergäben. Wenn das nächste Token als Teil einer gültigen Struktur analysiert werden kann, würden keine Semikolons eingefügt. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()

const b = 1
[1, 2, 3].forEach(console.log)
```

Da `()` als Funktionsaufruf angesehen werden kann, würde es normalerweise nicht ASI auslösen. Ebenso könnte `[]` ein Member-Zugriff sein. Der obige Code entspricht:

```js-nolint example-bad
const a = 1(1).toString();

const b = 1[1, 2, 3].forEach(console.log);
```

Dies ist eine gültige Syntax. `1[1, 2, 3]` ist ein [Eigenschafts-Zugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) mit einem durch Komma verknüpften [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator). Daher erhalten Sie bei der Ausführung des Codes Fehler wie „1 ist keine Funktion“ und „Kann Eigenschaften von undefined nicht lesen (Lesen von 'forEach')“.

Innerhalb von Klassen können Klassendeklarationen und Generator-Methoden auch eine Falle darstellen.

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

Und daher wird ein Syntaxfehler um `{` auftreten.

Es gibt die folgenden Daumenregeln für den Umgang mit ASI, wenn Sie einen semikolonlosen Stil erzwingen möchten:

- Schreiben Sie postfix `++` und `-` auf derselben Zeile wie ihre Operanden.

  ```js-nolint example-bad
  const a = b
  ++
  console.log(a) // ReferenceError: Invalid left-hand side expression in prefix operation
  ```

  ```js-nolint example-good
  const a = b++
  console.log(a)
  ```

- Die Ausdrücke nach `return`, `throw` oder `yield` sollten auf derselben Zeile wie das Schlüsselwort sein.

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

- Ebenso sollte der Label-Bezeichner nach `break` oder `continue` auf derselben Zeile wie das Schlüsselwort sein.

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

- Das `=>` einer Pfeilfunktion sollte auf derselben Zeile wie das Ende ihrer Parameter sein.

  ```js-nolint example-bad
  const foo = (a, b)
    => a + b
  ```

  ```js-nolint example-good
  const foo = (a, b) =>
    a + b
  ```

- Das `async` von asynchronen Funktionen, Methoden, etc. kann nicht direkt von einem Zeilenumbruch gefolgt werden.

  ```js-nolint example-bad
  async
  function foo() {}
  ```

  ```js-nolint example-good
  async function
  foo() {}
  ```

- Wenn eine Zeile mit einem der folgenden beginnt `(`, `[`, `` ` ``, `+`, `-`, `/` (wie in Regex-Literalen), schreiben Sie ein Semikolon davor oder beenden Sie die vorherige Zeile mit einem Semikolon.

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

- Klassendeklarationen sollten vorzugsweise immer mit Semikolons beendet werden – zusätzlich zur vorherigen Regel (die eine Felddeklaration gefolgt von einer [berechneten Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) umfasst, da letztere mit `[` beginnt), sind auch Semikolons zwischen einer Felddeklaration und einer Generator-Methode erforderlich.

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
- [Mikro-Feature aus ES6, jetzt in Firefox Aurora und Nightly: binäre und oktale Zahlen](https://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/) von Jeff Walden (2013)
- [JavaScript-Zeichenerzeugnisketten](https://mathiasbynens.be/notes/javascript-escapes) von Mathias Bynens (2011)

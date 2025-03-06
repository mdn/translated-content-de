---
title: Lexikalische Grammatik
slug: Web/JavaScript/Reference/Lexical_grammar
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("More")}}

Diese Seite beschreibt die lexikalische Grammatik von JavaScript. JavaScript-Quelltext ist einfach eine Abfolge von Zeichen – damit der Interpreter ihn versteht, muss der String zu einer strukturierteren Darstellung _geparst_ werden. Der erste Schritt des Parsings wird [lexikalische Analyse](https://en.wikipedia.org/wiki/Lexical_analysis) genannt, bei dem der Text von links nach rechts gescannt und in eine Abfolge einzelner, atomarer Eingabeelemente umgewandelt wird. Einige Eingabeelemente sind für den Interpreter unerheblich und werden nach diesem Schritt entfernt – dazu gehören [Leerzeichen](#leerzeichen) und [Kommentare](#kommentare). Die anderen, einschließlich [Identifikatoren](#identifikatoren), [Schlüsselwörter](#schlüsselwörter), [Literale](#literale) und Punksymbolen (meistens [Operatoren](/de/docs/Web/JavaScript/Reference/Operators)), werden für die weitere Syntaxanalyse verwendet. [Zeilenabschlusszeichen](#zeilenabschlusszeichen) und mehrzeilige Kommentare sind syntaktisch ebenfalls unerheblich, sie leiten jedoch den Prozess der [automatischen Semikolon-Einfügung](#automatische_semikolon-einfügung), um bestimmte ungültige Token-Sequenzen gültig zu machen.

## Formatsteuerzeichen

Formatsteuerzeichen haben keine visuelle Darstellung, werden aber verwendet, um die Interpretation des Textes zu steuern.

| Code Point | Name                       | Abkürzung | Beschreibung                                                                                                                                                                                               |
| ---------- | -------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| U+200C     | Nullbreiten-Trennzeichen   | \<ZWNJ>   | Zwischen Zeichen platziert, um zu verhindern, dass sie in bestimmten Sprachen zu Ligaturen verbunden werden ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_non-joiner)).                            |
| U+200D     | Nullbreiten-Verbinder      | \<ZWJ>    | Zwischen Zeichen platziert, die normalerweise nicht verbunden sind, um die Zeichen in bestimmten Sprachen in verbundener Form darzustellen ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_joiner)). |
| U+FEFF     | Byte-Reihenfolgemarkierung | \<BOM>    | Wird am Anfang des Skripts verwendet, um es als Unicode zu kennzeichnen und die Kodierung und Byte-Reihenfolge des Textes zu erkennen ([Wikipedia](https://en.wikipedia.org/wiki/Byte_order_mark)).        |

Im JavaScript-Quelltext werden \<ZWNJ> und \<ZWJ> als [Identifier](#identifikatoren)-Teile behandelt, während \<BOM> (auch als Nullbreite-No-Break-Raum \<ZWNBSP> genannt, wenn nicht am Textanfang) als [Leerzeichen](#leerzeichen) behandelt wird.

## Leerzeichen

{{Glossary("Whitespace", "Leerzeichen")}}-Zeichen verbessern die Lesbarkeit des Quelltextes und trennen Tokens voneinander. Diese Zeichen sind normalerweise für die Funktionalität des Codes nicht erforderlich. [Minifikationswerkzeuge](https://en.wikipedia.org/wiki/Minification_%28programming%29) werden oft verwendet, um Leerzeichen zu entfernen, um die Datenmenge zu reduzieren, die übertragen werden muss.

| Code Point | Name                       | Abkürzung | Beschreibung                                                                                   | Escape-Sequenz |
| ---------- | -------------------------- | --------- | ---------------------------------------------------------------------------------------------- | -------------- |
| U+0009     | Zeichentabulierung         | \<TAB>    | Horizontale Tabulierung                                                                        | \t             |
| U+000B     | Zeilentabulierung          | \<VT>     | Vertikale Tabulierung                                                                          | \v             |
| U+000C     | Form Feed                  | \<FF>     | Seitenumbruch-Steuerzeichen ([Wikipedia](https://en.wikipedia.org/wiki/Page_break#Form_feed)). | \f             |
| U+0020     | Leerzeichen                | \<SP>     | Normales Leerzeichen                                                                           |                |
| U+00A0     | Untrennbares Leerzeichen   | \<NBSP>   | Normales Leerzeichen, an dem ein Zeilenumbruch nicht möglich ist                               |                |
| U+FEFF     | Nullbreiten-No-Break-Raum  | \<ZWNBSP> | Wenn nicht am Anfang eines Skripts, wird das BOM-Marker als normales Leerzeichen behandelt     |                |
| Andere     | Andere Unicode-Leerzeichen | \<USP>    | [Zeichen in der "Space_Separator" allgemeinen Kategorie][space separator set]                  |                |

[space separator set]: https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D

> [!NOTE]
> Von den [Zeichen mit der "White_Space"-Eigenschaft, die nicht in der "Space_Separator"-allgemeinen Kategorie sind](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BWhite_Space%7D%26%5CP%7BGeneral_Category%3DSpace_Separator%7D), werden U+0009, U+000B und U+000C in JavaScript dennoch als Leerzeichen behandelt; U+0085 NÄCHSTE ZEILE hat keine besondere Rolle; andere werden zur Gruppe der [Zeilenabschlusszeichen](#zeilenabschlusszeichen).

> [!NOTE]
> Änderungen an dem von der JavaScript-Engine verwendeten Unicode-Standard können das Verhalten von Programmen beeinflussen. Zum Beispiel aktualisierte ES2016 den referenzierten Unicode-Standard von 5.1 auf 8.0.0, was dazu führte, dass U+180E MONGOLISCHER VOKALSEPARATOR von der Kategorie "Space_Separator" in die Kategorie "Format (Cf)" verschoben wurde und kein Leerzeichen mehr ist. Folglich änderte sich das Ergebnis von [`"\u180E".trim().length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim) von `0` auf `1`.

## Zeilenabschlusszeichen

Neben [Leerzeichen](#leerzeichen)-Zeichen werden Zeilenabschlusszeichen verwendet, um die Lesbarkeit des Quelltextes zu verbessern. In einigen Fällen können Zeilenabschlusszeichen jedoch die Ausführung von JavaScript-Code beeinflussen, da es einige Stellen gibt, an denen sie nicht erlaubt sind. Zeilenabschlusszeichen beeinflussen auch den Prozess der [automatischen Semikolon-Einfügung](#automatische_semikolon-einfügung).

Außerhalb des Kontexts der lexikalischen Grammatik werden Leerzeichen und Zeilenabschlusszeichen häufig verwechselt. Zum Beispiel entfernt {{jsxref("String.prototype.trim()")}} alle Leerzeichen und Zeilenabschlusszeichen am Anfang und Ende eines Strings. Die `\s` [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) in regulären Ausdrücken entspricht allen Leerzeichen und Zeilenabschlusszeichen.

Nur die folgenden Unicode-Code-Punkte werden in ECMAScript als Zeilenabschlusszeichen behandelt, andere zeilenbrechende Zeichen werden als Leerzeichen behandelt (zum Beispiel wird NEXT LINE, NEL, U+0085 als Leerzeichen betrachtet).

| Code Point | Name            | Abkürzung | Beschreibung                                             | Escape-Sequenz |
| ---------- | --------------- | --------- | -------------------------------------------------------- | -------------- |
| U+000A     | Line Feed       | \<LF>     | Neue Zeile Zeichen in UNIX-Systemen.                     | \n             |
| U+000D     | Carriage Return | \<CR>     | Neue Zeile Zeichen in Commodore und frühen Mac-Systemen. | \r             |
| U+2028     | Linienseparator | \<LS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline)       |                |
| U+2029     | Absatzseparator | \<PS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline)       |                |

## Kommentare

Kommentare werden verwendet, um Hinweise, Anmerkungen, Vorschläge oder Warnungen in JavaScript-Code hinzuzufügen. Dies kann die Lesbarkeit und das Verständnis erleichtern. Sie können auch verwendet werden, um Code zu deaktivieren, damit er nicht ausgeführt wird; dies kann ein wertvolles Debugging-Tool sein.

JavaScript bietet zwei langjährige Möglichkeiten, Kommentare zum Code hinzuzufügen: Zeilenkommentare und Blockkommentare. Darüber hinaus gibt es eine spezielle Hashbang-Kommentarsyntax.

### Zeilenkommentare

Die erste Methode ist der `//` Kommentar; dieser macht den gesamten Text, der ihm in derselben Zeile folgt, zu einem Kommentar. Beispiel:

```js
function comment() {
  // This is a one line JavaScript comment
  console.log("Hello world!");
}
comment();
```

### Blockkommentare

Die zweite Methode ist der `/* */` Stil, der viel flexibler ist.

Zum Beispiel können Sie ihn auf einer einzelnen Zeile verwenden:

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

Sie können ihn auch innerhalb einer Zeile verwenden, wenn Sie möchten, obwohl dies Ihren Code schwerer lesbar machen kann, daher sollte es mit Vorsicht verwendet werden:

```js
function comment(x) {
  console.log("Hello " + x /* insert the value of x */ + " !");
}
comment("world");
```

Darüber hinaus können Sie ihn verwenden, um Code zu deaktivieren, damit er nicht ausgeführt wird, indem Sie den Code in einen Kommentar einfügen, wie hier:

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

In diesem Fall wird der `console.log()` Aufruf nie ausgeführt, da er sich innerhalb eines Kommentars befindet. Jede Anzahl von Codezeilen kann auf diese Weise deaktiviert werden.

Blockkommentare, die mindestens einen Zeilenabschluss enthalten, verhalten sich in der [automatischen Semikolon-Einfügung](#automatische_semikolon-einfügung) wie [Zeilenabschlusszeichen](#zeilenabschlusszeichen).

### Hashbang Kommentare

Es gibt eine spezielle dritte Kommentarsyntax, der **Hashbang Kommentar**. Ein Hashbang Kommentar verhält sich genauso wie ein einzeiliger (`//`) Kommentar, außer dass er mit `#!` beginnt und **nur am absoluten Anfang eines Skripts oder Moduls gültig ist**. Beachten Sie auch, dass vor dem `#!` kein Leerzeichen irgendeiner Art erlaubt ist. Der Kommentar besteht aus allen Zeichen nach `#!` bis zum Ende der ersten Zeile; es ist nur ein solcher Kommentar erlaubt.

Hashbang Kommentare in JavaScript ähneln [Shebangs in Unix](<https://en.wikipedia.org/wiki/Shebang_(Unix)>), die den Pfad zu einem spezifischen JavaScript-Interpreter bereitstellen, den Sie zur Ausführung des Skripts verwenden möchten. Bevor der Hashbang Kommentar standardisiert wurde, war er bereits de facto in Non-Browser-Hosts wie Node.js implementiert, wo er aus dem Quelltext entfernt wurde, bevor er an die Engine übergeben wurde. Ein Beispiel ist wie folgt:

```js
#!/usr/bin/env node

console.log("Hello world");
```

Der JavaScript-Interpreter wird ihn als normalen Kommentar behandeln – er hat nur semantische Bedeutung für die Shell, wenn das Skript direkt in einer Shell ausgeführt wird.

> [!WARNING]
> Wenn Sie möchten, dass Skripte direkt in einer Shell-Umgebung ausführbar sind, kodieren Sie sie in UTF-8 ohne [BOM](https://en.wikipedia.org/wiki/Byte_order_mark). Obwohl ein BOM im Browser keine Probleme verursacht – da es beim UTF-8-Decoding entfernt wird, bevor der Quelltext analysiert wird – wird eine Unix/Linux-Shell den Hashbang nicht erkennen, wenn er von einem BOM-Zeichen vorangestellt ist.

Sie sollten den `#!` Kommentarstil nur verwenden, um einen JavaScript-Interpreter anzugeben. In allen anderen Fällen verwenden Sie einfach einen `//` Kommentar (oder einen mehrzeiligen Kommentar).

## Identifikatoren

Ein _Identifier_ wird verwendet, um einen Wert mit einem Namen zu verknüpfen. Identifikatoren können an verschiedenen Stellen verwendet werden:

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

In JavaScript bestehen Identifikatoren häufig aus alphanumerischen Zeichen, Unterstrichen (`_`) und Dollarzeichen (`$`). Identifikatoren dürfen nicht mit Zahlen beginnen. Dennoch sind JavaScript-Identifikatoren nicht nur auf {{Glossary("ASCII", "ASCII")}} beschränkt — auch viele Unicode-Code-Punkte sind erlaubt. Nämlich:

- Startzeichen können jedes Zeichen in der [ID_Start](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Start%7D) Kategorie plus `_` und `$` sein.
- Nach dem ersten Zeichen können Sie jedes Zeichen in der [ID_Continue](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Continue%7D) Kategorie plus U+200C (ZWNJ) und U+200D (ZWJ) verwenden.

> [!NOTE]
> Wenn Sie aus irgendeinem Grund selbst JavaScript-Quelltext analysieren müssen, sollten Sie nicht davon ausgehen, dass alle Identifikatoren dem Muster `/[A-Za-z_$][\w$]*/` (d.h. nur ASCII) folgen! Der Bereich der Identifikatoren kann durch das Regex `/[$_\p{ID_Start}][$\p{ID_Continue}]*/u` (ohne Unicode-Escape-Sequenzen) beschrieben werden.

Darüber hinaus erlaubt JavaScript die Verwendung von [Unicode-Escape-Sequenzen](#unicode_escape-sequenzen) in der Form von `\u0000` oder `\u{000000}` in Identifikatoren, die denselben String-Wert wie die tatsächlichen Unicode-Zeichen kodieren. Zum Beispiel sind `你好` und `\u4f60\u597d` dieselben Identifikatoren:

```js-nolint
const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello
```

Nicht alle Orte akzeptieren den vollen Bereich der Identifikatoren. Bestimmte Syntaxen, wie Funktionsdeklarationen, Funktionsausdrücke und Variablendeklarationen erfordern die Verwendung von Identifikatornamen, die keine [reservierten Wörter](#reservierte_wörter) sind.

```js-nolint example-bad
function import() {} // Illegal: import is a reserved word.
```

Am auffälligsten ist, dass private Eigenschaften und Objekteigenschaften reservierte Wörter zulassen.

```js
const obj = { import: "value" }; // Legal despite `import` being reserved
class C {
  #import = "value";
}
```

## Schlüsselwörter

_Schlüsselwörter_ sind Tokens, die wie Identifikatoren aussehen, aber spezielle Bedeutungen in JavaScript haben. Zum Beispiel zeigt das Schlüsselwort [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) vor einer Funktionsdeklaration an, dass die Funktion asynchron ist.

Einige Schlüsselwörter sind _reserviert_, was bedeutet, dass sie nicht als Identifikator für Variablendeklarationen, Funktionsdeklarationen usw. verwendet werden können. Sie werden oft _reservierte Wörter_ genannt. [Eine Liste dieser reservierten Wörter](#reservierte_wörter) ist unten angegeben. Nicht alle Schlüsselwörter sind reserviert — zum Beispiel kann `async` überall als Identifikator verwendet werden. Einige Schlüsselwörter sind nur _kontextuell reserviert_ — zum Beispiel ist `await` nur innerhalb des Körpers einer asynchronen Funktion reserviert, und `let` ist nur im [Strict Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) Code oder `const` und `let` Deklarationen reserviert.

Identifikatoren werden immer durch _String-Wert_ verglichen, daher werden Escape-Sequenzen interpretiert. Zum Beispiel ist dies immer noch ein Syntaxfehler:

```js-nolint example-bad
const els\u{65} = 1;
// `els\u{65}` encodes the same identifier as `else`
```

### Reservierte Wörter

Diese Schlüsselwörter dürfen nirgendwo in JavaScript-Quellen als Identifikatoren für Variablen, Funktionen, Klassen usw. verwendet werden.

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

Die folgenden sind nur reserviert, wenn sie in Strict Mode Code gefunden werden:

- {{jsxref("Statements/let", "let")}} (auch in `const`, `let` und Klassen-Deklarationen reserviert)
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- {{jsxref("Operators/yield", "yield")}} (auch in Generatorfunktion-Körpern reserviert)

Die folgenden sind nur reserviert, wenn sie in Modul-Code oder asynchronen Funktionen-Körpern gefunden werden:

- [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

### Zukünftige reservierte Wörter

Die folgenden sind als zukünftige Schlüsselwörter durch die ECMAScript-Spezifikation reserviert. Sie haben derzeit keine spezielle Funktionalität, aber möglicherweise zu einem späteren Zeitpunkt, sodass sie nicht als Identifikatoren verwendet werden können.

Diese sind immer reserviert:

- `enum`

Die folgenden sind nur reserviert, wenn sie in Strict Mode Code gefunden werden:

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

### Identifikatoren mit speziellen Bedeutungen

Einige Identifikatoren haben eine spezielle Bedeutung in bestimmten Kontexten, ohne reservierte Wörter irgendeiner Art zu sein. Dazu gehören:

- {{jsxref("Functions/arguments", "arguments")}} (kein Schlüsselwort, kann jedoch im Strict Mode nicht als Identifikator deklariert werden)
- `as` ([`import * as ns from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import))
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)
- {{jsxref("Global_Objects/eval", "eval")}} (kein Schlüsselwort, kann jedoch im Strict Mode nicht als Identifikator deklariert werden)
- `from` ([`import x from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import))
- {{jsxref("Functions/get", "get")}}
- [`of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- {{jsxref("Functions/set", "set")}}

## Literale

> [!NOTE]
> In diesem Abschnitt werden Literale als atomare Tokens behandelt. [Objektliterale](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Array-Literale](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation) sind [Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators), die aus einer Reihe von Tokens bestehen.

### Null-Literal

Siehe auch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) für weitere Informationen.

```js-nolint
null
```

### Boolesches Literal

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

Dezimal-Literale können mit einer Null (`0`) beginnen, gefolgt von einer anderen Dezimalziffer, aber wenn alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies wird als veraltete Syntax betrachtet, und Zahlenliterale, die mit `0` beginnen, ob als Oktal oder Dezimal interpretiert, verursachen im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) einen Syntaxfehler — verwenden Sie daher das Präfix `0o` stattdessen.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

##### Exponential

Das dezimale Exponentielliteral wird durch das folgende Format spezifiziert: `beN`; wobei `b` eine Basisnummer (ganz oder gebrochen) ist, gefolgt von einem `E` oder `e` Zeichen (das als Trennzeichen oder _Exponentenzeichen_ dient) und `N`, das der _Exponent_ oder _Potenzwert_ ist – eine ganze Zahl mit Vorzeichen.

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

Die Binär-Zahlensyntax verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "B" (`0b` oder `0B`). Jedes Zeichen nach dem `0b`, das nicht 0 oder 1 ist, beendet die Literal-Sequenz.

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### Oktal

Die Oktal-Zahlensyntax verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "O" (`0o` oder `0O`). Jedes Zeichen nach dem `0o`, das außerhalb des Bereichs (01234567) liegt, beendet die Literal-Sequenz.

```js-nolint
0O755 // 493
0o644 // 420
```

#### Hexadezimal

Die hexadezimale Zahlensyntax verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "X" (`0x` oder `0X`). Jedes Zeichen nach dem `0x`, das außerhalb des Bereichs (0123456789ABCDEF) liegt, beendet die Literal-Sequenz.

```js-nolint
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

#### BigInt Literal

Der [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type) Typ ist ein numerisches Primitive in JavaScript, das Ganzzahlen mit beliebiger Präzision darstellen kann. BigInt Literale werden erstellt, indem `n` an das Ende einer Ganzzahl angehängt wird.

```js-nolint
123456789123456789n     // 123456789123456789
0o777777777777n         // 68719476735
0x123456789ABCDEFn      // 81985529216486895
0b11101001010101010101n // 955733
```

BigInt Literale dürfen nicht mit `0` beginnen, um Verwechslungen mit veralteten Oktal-Literalen zu vermeiden.

```js-nolint example-bad
0755n; // SyntaxError: invalid BigInt syntax
```

Für oktale `BigInt` Zahlen verwenden Sie immer Null gefolgt von dem Buchstaben "o" (Groß- oder Kleinschreibung):

```js example-good
0o755n;
```

Für weitere Informationen über `BigInt` siehe auch [JavaScript Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type).

#### Numerische Separatoren

Zur Verbesserung der Lesbarkeit bei numerischen Literalen können Unterstriche (`_`, `U+005F`) als Trenner verwendet werden:

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

Ein [String](/de/docs/Web/JavaScript/Guide/Data_structures#string_type) Literal ist Null oder mehr Unicode-Code-Punkte, die in einfachen oder doppelten Anführungszeichen eingeschlossen sind. Unicode-Code-Punkte können auch durch eine Escape-Sequenz dargestellt werden. Alle Code-Punkte können wörtlich in einem String-Literal erscheinen, außer diesen Code-Punkten:

- U+005C \ (Backslash)
- U+000D \<CR>
- U+000A \<LF>
- Die gleiche Art von Anführungszeichen, die das String-Literal beginnt

Jeder Code-Punkt kann in Form einer Escape-Sequenz erscheinen. String-Literale werten sich zu ECMAScript String-Werten aus. Bei der Generierung dieser String-Werte werden Unicode-Code-Punkte als UTF-16 kodiert.

```js-nolint
'foo'
"bar"
```

Die folgenden Unterabschnitte beschreiben verschiedene Escape-Sequenzen (`\` gefolgt von einem oder mehreren Zeichen), die in String-Literalen verfügbar sind. Jede Escape-Sequenz, die unten nicht aufgeführt ist, wird zu einem "Identitäts-Escape", der zum Code-Punkt selbst wird. Zum Beispiel ist `\z` das gleiche wie `z`. Es gibt eine veraltete oktale Escape-Sequenzsyntax, die auf der Seite [Veraltete und obsolet Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) beschrieben wird. Viele dieser Escape-Sequenzen sind auch in regulären Ausdrücken gültig — siehe [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

#### Escape-Sequenzen

Sonderzeichen können mithilfe von Escape-Sequenzen kodiert werden:

| Escape-Sequenz                                                   | Unicode-Code Punkt                                     |
| ---------------------------------------------------------------- | ------------------------------------------------------ |
| `\0`                                                             | Null-Zeichen (U+0000 NULL)                             |
| `\'`                                                             | einfaches Anführungszeichen (U+0027 APOSTROPH)         |
| `\"`                                                             | doppeltes Anführungszeichen (U+0022 ANFÜHRUNGSZEICHEN) |
| `\\`                                                             | Backslash (U+005C REVERSE SOLIDUS)                     |
| `\n`                                                             | neue Zeile (U+000A LINE FEED; LF)                      |
| `\r`                                                             | Wagenrücklauf (U+000D CARRIAGE RETURN; CR)             |
| `\v`                                                             | Vertikale Tabulierung (U+000B LINE TABULATION)         |
| `\t`                                                             | Tab (U+0009 CHARACTER TABULATION)                      |
| `\b`                                                             | Rücktaste (U+0008 BACKSPACE)                           |
| `\f`                                                             | Formularvorschub (U+000C FORM FEED)                    |
| `\` gefolgt von einem [Zeilenabschluss](#zeilenabschlusszeichen) | leerer String                                          |

Die letzte Escape-Sequenz, `\` gefolgt von einem Zeilenabschluss, ist nützlich, um ein String-Literal über mehrere Zeilen zu teilen, ohne seine Bedeutung zu ändern.

```js
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Stellen Sie sicher, dass nach dem Backslash (außer für einen Zeilenumbruch) kein Leerzeichen oder irgendein anderes Zeichen steht, da es sonst nicht funktioniert. Wenn die nächste Zeile eingerückt ist, sind die zusätzlichen Leerzeichen auch im Wert des Strings vorhanden.

Sie können auch den [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition)-Operator verwenden, um mehrere Strings zusammenzufügen, wie hier:

```js
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Beide der obigen Methoden führen zu identischen Strings.

#### Hexadezimale Escape-Sequenzen

Hexadezimale Escape-Sequenzen bestehen aus `\x` gefolgt von genau zwei hexadezimalen Ziffern, die eine Codeeinheit oder Code-Punkt im Bereich von 0x0000 bis 0x00FF darstellen.

```js
"\xA9"; // "©"
```

#### Unicode Escape-Sequenzen

Eine Unicode Escape-Sequenz besteht aus genau vier hexadezimalen Ziffern nach `\u`. Sie stellt eine Codeeinheit in der UTF-16-Kodierung dar. Für Code-Punkte U+0000 bis U+FFFF ist die Codeeinheit gleich dem Code-Punkt. Code-Punkte U+10000 bis U+10FFFF erfordern zwei Escape-Sequenzen, die die beiden Code-Einheiten (ein Surrogatpaar) darstellen, die zur Kodierung des Zeichens verwendet werden; das Surrogatpaar unterscheidet sich vom Code-Punkt.

Siehe auch {{jsxref("String.fromCharCode()")}} und {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Unicode-Codepunkt-Escapes

Ein Unicode-Codepunkt-Escape besteht aus `\u{`, gefolgt von einem Code-Punkt in hexadezimaler Basis, gefolgt von `}`. Der Wert der hexadezimalen Ziffern muss im Bereich von 0 bis 0x10FFFF inklusive liegen. Code-Punkte im Bereich U+10000 bis U+10FFFF müssen nicht als Surrogatpaar dargestellt werden.

Siehe auch {{jsxref("String.fromCodePoint()")}} und {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// the same character represented as a surrogate pair
"\uD87E\uDC04";
```

### Reguläre Ausdruck-Literale

Regular Expression Literale werden von zwei Schrägstrichen (`/`) eingeschlossen. Der Lexer verbraucht alle Zeichen bis zum nächsten nicht-escaped Schrägstrich oder Zeilenende, es sei denn, der Schrägstrich erscheint innerhalb einer Zeichenklasse (`[]`). Einige Zeichen (nämlich die, die [Identifier-Teile](#identifikatoren) sind) können nach dem abschließenden Schrägstrich erscheinen und Flags bezeichnen.

Die lexikalische Grammatik ist sehr nachsichtig: nicht alle regulären Ausdruck-Literale, die als ein Token identifiziert werden, sind gültige reguläre Ausdrücke.

Siehe auch {{jsxref("RegExp")}} für weitere Informationen.

```js-nolint
/ab+c/g
/[/]/
```

Ein regulärer Ausdruck Literal kann nicht mit zwei Schrägstrichen (`//`) beginnen, denn das wäre ein Zeilenkommentar. Um einen leeren regulären Ausdruck zu spezifizieren, verwenden Sie `/(?:)/`.

### Template-Literale

Ein Template Literal besteht aus mehreren Tokens: `` `xxx${ `` (Template Kopf), `}xxx${` (Template Mitte), und `` }xxx` `` (Template Ende) sind individuelle Tokens, während zwischen ihnen jeder Ausdruck kommen kann.

Siehe auch [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) für weitere Informationen.

```js-nolint
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag`string text ${expression} string text`
```

## Automatische Semikolon-Einfügung

Einige [JavaScript Anweisungen](/de/docs/Web/JavaScript/Reference/Statements) erfordern Semikolons (`;`) am Ende. Dazu gehören:

- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- [Ausdrucks Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement)
- [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue), [`break`](/de/docs/Web/JavaScript/Reference/Statements/break), [`return`](/de/docs/Web/JavaScript/Reference/Statements/return), [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)
- Klassenfeld-Deklarationen ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_properties))
- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import), [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)

Um die Sprache jedoch zugänglicher und bequemer zu machen, kann JavaScript beim Konsumieren des Token-Streams Semikolons automatisch einfügen, sodass einige ungültige Token-Sequenzen zu einer gültigen Syntax "korrigiert" werden können. Dieser Schritt erfolgt, nachdem der Programmtext gemäß der lexikalischen Grammatik in Tokens geparst wurde. Es gibt drei Fälle, in denen Semikolons automatisch eingefügt werden:

1\. Wenn ein nach der Grammatik nicht erlaubtes Token gefunden wird, und es durch mindestens einen [Zeilenabschluss](#zeilenabschlusszeichen) (einschließlich eines Blockkommentars, der mindestens einen Zeilenabschluss enthält) vom vorherigen Token getrennt ist oder das Token `}` ist, wird vor dem Token ein Semikolon eingefügt.

```js-nolint
{ 1
2 } 3

// is transformed by ASI into:

{ 1
;2 ;} 3;

// Which is valid grammar encoding three statements,
// each consisting of a number literal
```

Das abschließende `)` von [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) wird durch diese Regel auch als Spezialfall behandelt.

```js-nolint
do {
  // ...
} while (condition) /* ; */ // ASI here
const a = 1
```

Allerdings werden keine Semikolons eingefügt, wenn das Semikolon dann der Trenner im [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Anweisungskopf wäre.

```js-nolint example-bad
for (
  let a = 1 // No ASI here
  a < 10 // No ASI here
  a++
) {}
```

Semikolons werden auch niemals als [leere Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Empty) eingefügt. Zum Beispiel wäre im folgenden Code, wenn ein Semikolon nach dem `)` eingefügt würde, der Code gültig, mit einer leeren Anweisung als `if`-Körper und der `const`-Deklaration als separate Anweisung. Da jedoch automatisch eingefügte Semikolons keine leeren Anweisungen werden können, wird dies zu einer [Deklaration](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations) als Körper der `if`-Anweisung, was nicht gültig ist.

```js-nolint example-bad
if (Math.random() > 0.5)
const x = 1 // SyntaxError: Unexpected token 'const'
```

2\. Wenn das Ende des Eingabe-Token-Streams erreicht ist und der Parser nicht in der Lage ist, den einzelnen Eingabestream als komplettes Programm zu parsen, wird am Ende ein Semikolon eingefügt.

```js-nolint
const a = 1 /* ; */ // ASI here
```

Diese Regel ergänzt die vorherige Regel, speziell für den Fall, dass es kein "störendes Token" gibt, aber das Ende des Eingabestreams erreicht ist.

3\. Wenn die Grammatik an einer Stelle keine Zeilenabschlusszeichen erlaubt, diese aber gefunden werden, wird ein Semikolon eingefügt. Diese Stellen umfassen:

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

Hier gibt die `return` Anweisung `undefined` zurück, und der `a + b` Ausdruck wird zu einer unerreichbaren Anweisung.

```js-nolint
return
a + b

// is transformed by ASI into

return;
a + b;
```

Beachten Sie, dass ASI nur dann ausgelöst wird, wenn ein Zeilenumbruch Tokens trennt, die ansonsten ungültige Syntax erzeugen würden. Wenn das nächste Token als Teil einer gültigen Struktur geparst werden kann, würden keine Semikolons eingefügt. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()

const b = 1
[1, 2, 3].forEach(console.log)
```

Da `()` als Funktionsaufruf angesehen werden kann, würde es normalerweise nicht ASI auslösen. Ebenso könnte `[]` ein Memberzugriff sein. Der obige Code ist gleichwertig mit:

```js-nolint example-bad
const a = 1(1).toString();

const b = 1[1, 2, 3].forEach(console.log);
```

Dies passiert, dass es eine gültige Syntax ist. `1[1, 2, 3]` ist ein [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) mit einem durch [Komma](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) verbundenen Ausdruck. Daher würden Sie beim Ausführen des Codes Fehler wie "1 is not a function" und "Cannot read properties of undefined (reading 'forEach')" erhalten.

Innerhalb von Klassen können Klassenfelder und Generatorfunktionen ebenfalls Stolperfallen sein.

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

Und daher wird ein Syntaxfehler um `{` auftreten.

Es gibt folgende Daumenregel zur Handhabung von ASI, wenn Sie einen Stil ohne Semikolons durchsetzen möchten:

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

- Die Ausdrücke nach `return`, `throw` oder `yield` sollten sich in derselben Zeile wie das Schlüsselwort befinden.

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

- Ebenso sollte sich der Bezeichner nach `break` oder `continue` in derselben Zeile wie das Schlüsselwort befinden.

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

- Das `=>` eines Arrow-Funktions sollte sich in derselben Zeile wie das Ende seiner Parameter befinden.

  ```js-nolint example-bad
  const foo = (a, b)
    => a + b
  ```

  ```js-nolint example-good
  const foo = (a, b) =>
    a + b
  ```

- Das `async` von asynchronen Funktionen, Methoden usw. darf nicht direkt von einem Zeilenabschlusszeichen gefolgt werden.

  ```js-nolint example-bad
  async
  function foo() {}
  ```

  ```js-nolint example-good
  async function
  foo() {}
  ```

- Wenn eine Zeile mit einem der `(`, `[`, `` ` ``, `+`, `-`, `/` (wie in Regex-Literalen) beginnt, versehen Sie sie mit einem Semikolon oder beenden Sie die vorherige Zeile mit einem Semikolon.

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

- Klassenfelder sollten vorzugsweise immer mit Semikolons beendet werden – zusätzlich zur vorherigen Regel (die eine Felderklärung gefolgt von einem [berechneten Attribut](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) einschließt, da letzteres mit `[` beginnt), sind auch Semikolons zwischen einer Felderklärung und einer Generatorfunktion erforderlich.

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
- [JavaScript-Character-Escape-Sequenzen](https://mathiasbynens.be/notes/javascript-escapes) von Mathias Bynens (2011)

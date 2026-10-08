---
title: Lexikalische Grammatik
slug: Web/JavaScript/Reference/Lexical_grammar
l10n:
  sourceCommit: 06f8ebf948372dfb6c3c22d26d4f672c99cd4e0d
---

Diese Seite beschreibt die lexikalische Grammatik von JavaScript. JavaScript-Quelltext ist zunächst nur eine Folge von Zeichen. Damit der Interpreter ihn verstehen kann, muss diese Zeichenfolge in eine stärker strukturierte Darstellung _geparst_ werden. Der erste Schritt des Parsens heißt [lexikalische Analyse](https://en.wikipedia.org/wiki/Lexical_analysis): Der Text wird von links nach rechts gelesen und in eine Folge einzelner, atomarer Eingabeelemente umgewandelt. Einige Eingabeelemente sind für den Interpreter bedeutungslos und werden nach diesem Schritt entfernt. Dazu gehören [Leerraumzeichen](#leerraumzeichen) und [Kommentare](#kommentare). Die übrigen Elemente, darunter [Bezeichner](#bezeichner), [Schlüsselwörter](#schlüsselwörter), [Literale](#literale) und Interpunktionszeichen (hauptsächlich [Operatoren](/de/docs/Web/JavaScript/Reference/Operators)), werden für die weitere Syntaxanalyse verwendet. [Zeilenabschlusszeichen](#zeilenabschlusszeichen) und mehrzeilige Kommentare sind für die Syntax ebenfalls bedeutungslos. Sie steuern jedoch die [automatische Semikolon-Einfügung](#automatische_semikolon-einfügung), durch die bestimmte ungültige Tokenfolgen gültig werden.

## Formatsteuerzeichen

Formatsteuerzeichen haben keine sichtbare Darstellung, dienen aber dazu, die Interpretation des Textes zu steuern.

| Codepunkt | Name                  | Abkürzung | Beschreibung                                                                                                                                                                                                          |
| --------- | --------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| U+200C    | Zero Width Non-Joiner | \<ZWNJ>   | Wird zwischen Zeichen gesetzt, um in bestimmten Sprachen zu verhindern, dass sie zu Ligaturen verbunden werden ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_non-joiner)).                                    |
| U+200D    | Zero Width Joiner     | \<ZWJ>    | Wird zwischen Zeichen gesetzt, die normalerweise nicht verbunden wären, damit sie in bestimmten Sprachen in ihrer verbundenen Form dargestellt werden ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_joiner)). |
| U+FEFF    | Byte Order Mark       | \<BOM>    | Wird am Anfang eines Skripts verwendet, um es als Unicode zu kennzeichnen und die Erkennung der Textkodierung und Byte-Reihenfolge zu ermöglichen ([Wikipedia](https://en.wikipedia.org/wiki/Byte_order_mark)).       |

Im JavaScript-Quelltext werden \<ZWNJ> und \<ZWJ> als Bestandteile von [Bezeichnern](#bezeichner) behandelt. \<BOM> wird dagegen als [Leerraumzeichen](#leerraumzeichen) behandelt; wenn es nicht am Textanfang steht, heißt es auch Zero-Width No-Break Space (\<ZWNBSP>).

## Leerraumzeichen

{{Glossary("Whitespace", "Leerraumzeichen")}} verbessern die Lesbarkeit des Quelltexts und trennen Tokens voneinander. Für die Funktion des Codes sind sie normalerweise nicht erforderlich. Häufig werden [Minifizierungswerkzeuge](https://en.wikipedia.org/wiki/Minification_%28programming%29) eingesetzt, um Leerraumzeichen zu entfernen und so die zu übertragende Datenmenge zu verringern.

| Codepunkt | Name                        | Abkürzung | Beschreibung                                                                                             | Escape-Sequenz |
| --------- | --------------------------- | --------- | -------------------------------------------------------------------------------------------------------- | -------------- |
| U+0009    | Character Tabulation        | \<TAB>    | Horizontaler Tabulator                                                                                   | \t             |
| U+000B    | Line Tabulation             | \<VT>     | Vertikaler Tabulator                                                                                     | \v             |
| U+000C    | Form Feed                   | \<FF>     | Steuerzeichen für einen Seitenumbruch ([Wikipedia](https://en.wikipedia.org/wiki/Page_break#Form_feed)). | \f             |
| U+0020    | Space                       | \<SP>     | Normales Leerzeichen                                                                                     |                |
| U+00A0    | No-Break Space              | \<NBSP>   | Normales Leerzeichen, an dem jedoch kein Zeilenumbruch erfolgen darf                                     |                |
| U+FEFF    | Zero-Width No-Break Space   | \<ZWNBSP> | Wenn der BOM-Marker nicht am Anfang eines Skripts steht, ist er ein normales Leerraumzeichen.            |                |
| Sonstige  | Weitere Unicode-Leerzeichen | \<USP>    | [Zeichen der allgemeinen Kategorie „Space_Separator“][space separator set]                               |                |

[space separator set]: https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D

> [!NOTE]
> Von den [Zeichen mit der Eigenschaft „White_Space“, die nicht zur allgemeinen Kategorie „Space_Separator“ gehören](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BWhite_Space%7D%26%5CP%7BGeneral_Category%3DSpace_Separator%7D), werden U+0009, U+000B und U+000C in JavaScript dennoch als Leerraumzeichen behandelt. U+0085 NEXT LINE hat keine besondere Rolle; die übrigen bilden die Menge der [Zeilenabschlusszeichen](#zeilenabschlusszeichen).

> [!NOTE]
> Änderungen am Unicode-Standard, den die JavaScript-Engine verwendet, können das Verhalten von Programmen beeinflussen. Beispielsweise wurde mit ES2016 der referenzierte Unicode-Standard von Version 5.1 auf 8.0.0 aktualisiert. Dadurch wechselte U+180E MONGOLIAN VOWEL SEPARATOR von der Kategorie „Space_Separator“ in die Kategorie „Format (Cf)“ und galt nicht mehr als Leerraumzeichen. Infolgedessen änderte sich das Ergebnis von [`"\u180E".trim().length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim) von `0` auf `1`.

## Zeilenabschlusszeichen

Neben [Leerraumzeichen](#leerraumzeichen) verbessern auch Zeilenabschlusszeichen die Lesbarkeit des Quelltexts. In manchen Fällen können Zeilenabschlusszeichen jedoch die Ausführung von JavaScript-Code beeinflussen, da sie an einigen Stellen nicht zulässig sind. Sie wirken sich außerdem auf die [automatische Semikolon-Einfügung](#automatische_semikolon-einfügung) aus.

Außerhalb der lexikalischen Grammatik werden Leerraumzeichen und Zeilenabschlusszeichen häufig zusammengefasst. Beispielsweise entfernt {{jsxref("String.prototype.trim()")}} alle Leerraum- und Zeilenabschlusszeichen am Anfang und Ende einer Zeichenfolge. Die `\s`-[Zeichenklassen-Escape-Sequenz](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) in regulären Ausdrücken erfasst sämtliche Leerraum- und Zeilenabschlusszeichen.

In ECMAScript werden nur die folgenden Unicode-Codepunkte als Zeilenabschlusszeichen behandelt. Andere Zeichen für Zeilenumbrüche werden als Leerraumzeichen behandelt (beispielsweise gilt Next Line, NEL, U+0085 als Leerraumzeichen).

| Codepunkt | Name                | Abkürzung | Beschreibung                                                        | Escape-Sequenz |
| --------- | ------------------- | --------- | ------------------------------------------------------------------- | -------------- |
| U+000A    | Line Feed           | \<LF>     | Zeichen für eine neue Zeile auf UNIX-Systemen.                      | \n             |
| U+000D    | Carriage Return     | \<CR>     | Zeichen für eine neue Zeile auf Commodore- und frühen Mac-Systemen. | \r             |
| U+2028    | Line Separator      | \<LS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline)                  |                |
| U+2029    | Paragraph Separator | \<PS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline)                  |                |

## Kommentare

Mit Kommentaren können Sie JavaScript-Code um Hinweise, Anmerkungen, Vorschläge oder Warnungen ergänzen. Dadurch lässt sich der Code leichter lesen und verstehen. Kommentare können auch Code deaktivieren und so dessen Ausführung verhindern – ein nützliches Werkzeug bei der Fehlersuche.

In JavaScript gibt es seit Langem zwei Möglichkeiten, Code zu kommentieren: Zeilenkommentare und Blockkommentare. Darüber hinaus gibt es eine spezielle Syntax für Hashbang-Kommentare.

### Zeilenkommentare

Die erste Möglichkeit ist der Kommentar mit `//`. Der gesamte darauf folgende Text derselben Zeile wird dadurch zum Kommentar. Zum Beispiel:

```js
function comment() {
  // This is a one line JavaScript comment
  console.log("Hello world!");
}
comment();
```

### Blockkommentare

Die zweite Möglichkeit ist die deutlich flexiblere Schreibweise `/* */`.

Sie können sie beispielsweise in einer einzelnen Zeile verwenden:

```js
function comment() {
  /* This is a one line JavaScript comment */
  console.log("Hello world!");
}
comment();
```

Sie können damit auch mehrzeilige Kommentare erstellen:

```js
function comment() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log("Hello world!");
}
comment();
```

Ebenso können Sie sie mitten in einer Zeile verwenden. Da der Code dadurch schwerer lesbar werden kann, sollten Sie diese Möglichkeit jedoch mit Bedacht einsetzen:

```js
function comment(x) {
  console.log("Hello " + x /* insert the value of x */ + " !");
}
comment("world");
```

Außerdem können Sie Code deaktivieren, indem Sie ihn in einen Kommentar einschließen:

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

In diesem Fall wird `console.log()` nie aufgerufen, da der Aufruf innerhalb eines Kommentars steht. Auf diese Weise lassen sich beliebig viele Codezeilen deaktivieren.

Blockkommentare, die mindestens ein Zeilenabschlusszeichen enthalten, verhalten sich bei der [automatischen Semikolon-Einfügung](#automatische_semikolon-einfügung) wie [Zeilenabschlusszeichen](#zeilenabschlusszeichen).

### Hashbang-Kommentare

Es gibt eine spezielle dritte Kommentarsyntax: den **Hashbang-Kommentar**. Ein Hashbang-Kommentar verhält sich genau wie ein einzeiliger Kommentar mit `//`, beginnt aber mit `#!` und **ist nur unmittelbar am Anfang eines Skripts oder Moduls gültig**. Vor `#!` darf keinerlei Leerraum stehen. Der Kommentar umfasst alle Zeichen nach `#!` bis zum Ende der ersten Zeile; nur ein solcher Kommentar ist zulässig.

Hashbang-Kommentare in JavaScript ähneln [Shebangs unter Unix](<https://en.wikipedia.org/wiki/Shebang_(Unix)>). Diese geben den Pfad zu einem bestimmten JavaScript-Interpreter an, mit dem das Skript ausgeführt werden soll. Bevor Hashbang-Kommentare standardisiert wurden, waren sie in Umgebungen außerhalb des Browsers wie Node.js bereits de facto implementiert. Dort wurden sie aus dem Quelltext entfernt, bevor dieser an die Engine übergeben wurde. Ein Beispiel:

```js
#!/usr/bin/env node

console.log("Hello world");
```

Der JavaScript-Interpreter behandelt den Hashbang als normalen Kommentar. Nur für die Shell hat er eine besondere Bedeutung, wenn das Skript direkt in einer Shell ausgeführt wird.

> [!WARNING]
> Wenn Skripte direkt in einer Shell-Umgebung ausführbar sein sollen, kodieren Sie sie in UTF-8 ohne [BOM](https://en.wikipedia.org/wiki/Byte_order_mark). Eine BOM verursacht bei Code, der im Browser ausgeführt wird, zwar keine Probleme – sie wird bei der UTF-8-Dekodierung entfernt, bevor der Quelltext analysiert wird –, aber eine Unix-/Linux-Shell erkennt den Hashbang nicht, wenn ihm ein BOM-Zeichen vorangestellt ist.

Verwenden Sie die Kommentarschreibweise `#!` ausschließlich, um einen JavaScript-Interpreter anzugeben. Verwenden Sie in allen anderen Fällen einen Kommentar mit `//` oder einen mehrzeiligen Kommentar.

## Bezeichner

Ein _Bezeichner_ verknüpft einen Wert mit einem Namen. Bezeichner können an verschiedenen Stellen verwendet werden:

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

In JavaScript bestehen Bezeichner häufig aus alphanumerischen Zeichen, Unterstrichen (`_`) und Dollarzeichen (`$`). Sie dürfen nicht mit einer Ziffer beginnen. JavaScript-Bezeichner sind jedoch nicht auf {{Glossary("ASCII", "ASCII")}} beschränkt – auch viele Unicode-Codepunkte sind zulässig. Genauer gesagt:

- Als erstes Zeichen sind alle Zeichen der Kategorie [ID_Start](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Start%7D) sowie `_` und `$` zulässig.
- Nach dem ersten Zeichen können Sie alle Zeichen der Kategorie [ID_Continue](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Continue%7D) verwenden. Dazu gehören U+200C (ZWNJ) und U+200D (ZWJ).

> [!NOTE]
> Falls Sie aus irgendeinem Grund JavaScript-Quelltext selbst parsen müssen, gehen Sie nicht davon aus, dass alle Bezeichner dem Muster `/[A-Za-z_$][\w$]*/` folgen, also nur ASCII-Zeichen enthalten! Der zulässige Bereich von Bezeichnern lässt sich durch den regulären Ausdruck `/[$_\p{ID_Start}][$\p{ID_Continue}]*/u` beschreiben (ohne Unicode-Escape-Sequenzen).

Darüber hinaus erlaubt JavaScript in Bezeichnern [Unicode-Escape-Sequenzen](#unicode-escape-sequenzen) der Form `\u0000` oder `\u{000000}`. Sie kodieren denselben Zeichenfolgenwert wie die entsprechenden Unicode-Zeichen. Beispielsweise sind `你好` und `\u4f60\u597d` derselbe Bezeichner:

```js-nolint
const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello
```

Nicht überall ist der gesamte Bereich zulässiger Bezeichner erlaubt. Bestimmte Syntaxformen, etwa Funktionsdeklarationen, Funktionsausdrücke und Variablendeklarationen, erfordern Bezeichnernamen, die keine [reservierten Wörter](#reservierte_wörter) sind.

```js-nolint example-bad
function import() {} // Illegal: import is a reserved word.
```

Insbesondere bei privaten Elementen und Objekteigenschaften sind reservierte Wörter zulässig.

```js
const obj = { import: "value" }; // Legal despite `import` being reserved
class C {
  #import = "value";
}
```

## Schlüsselwörter

_Schlüsselwörter_ sind Tokens, die wie Bezeichner aussehen, in JavaScript aber eine besondere Bedeutung haben. Beispielsweise zeigt das Schlüsselwort [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) vor einer Funktionsdeklaration an, dass die Funktion asynchron ist.

Einige Schlüsselwörter sind _reserviert_. Das bedeutet, dass sie beispielsweise in Variablen- oder Funktionsdeklarationen nicht als Bezeichner verwendet werden können. Sie werden häufig _reservierte Wörter_ genannt. [Eine Liste dieser reservierten Wörter](#reservierte_wörter) finden Sie weiter unten. Nicht alle Schlüsselwörter sind reserviert: `async` kann beispielsweise überall als Bezeichner verwendet werden. Andere Schlüsselwörter sind nur _kontextabhängig reserviert_: `await` ist beispielsweise nur im Rumpf einer asynchronen Funktion reserviert, während `let` nur in Code im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) oder in `const`- und `let`-Deklarationen reserviert ist.

Bezeichner werden stets anhand ihres _Zeichenfolgenwerts_ verglichen. Escape-Sequenzen werden daher interpretiert. Beispielsweise liegt hier weiterhin ein Syntaxfehler vor:

```js-nolint example-bad
const els\u{65} = 1;
// `els\u{65}` encodes the same identifier as `else`
```

### Reservierte Wörter

Diese Schlüsselwörter können nirgendwo im JavaScript-Quelltext als Bezeichner für Variablen, Funktionen, Klassen usw. verwendet werden.

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

Die folgenden Wörter sind nur in Code im Strict Mode reserviert:

- {{jsxref("Statements/let", "let")}} (auch in `const`-, `let`- und Klassendeklarationen reserviert)
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- {{jsxref("Operators/yield", "yield")}} (auch im Rumpf von Generatorfunktionen reserviert)

Das folgende Wort ist nur in Modulcode oder im Rumpf asynchroner Funktionen reserviert:

- [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

### Für die Zukunft reservierte Wörter

Die folgenden Wörter sind in der ECMAScript-Spezifikation als künftige Schlüsselwörter reserviert. Derzeit haben sie keine besondere Funktion, könnten aber künftig eine erhalten. Deshalb können sie nicht als Bezeichner verwendet werden.

Dieses Wort ist immer reserviert:

- `enum`

Die folgenden Wörter sind nur in Code im Strict Mode reserviert:

- `implements`
- `interface`
- `package`
- `private`
- `protected`
- `public`

#### In älteren Standards für die Zukunft reservierte Wörter

Die folgenden Wörter waren in älteren ECMAScript-Spezifikationen (ECMAScript 1 bis 3) als künftige Schlüsselwörter reserviert.

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

Einige Bezeichner haben in bestimmten Kontexten eine besondere Bedeutung, ohne reservierte Wörter zu sein. Dazu gehören:

- {{jsxref("Functions/arguments", "arguments")}} (kein Schlüsselwort, darf im Strict Mode aber nicht als Bezeichner deklariert werden)
- `as` ([`import * as ns from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import))
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)
- {{jsxref("Global_Objects/eval", "eval")}} (kein Schlüsselwort, darf im Strict Mode aber nicht als Bezeichner deklariert werden)
- `from` ([`import x from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import))
- {{jsxref("Functions/get", "get")}}
- [`of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- {{jsxref("Functions/set", "set")}}

## Literale

> [!NOTE]
> Dieser Abschnitt behandelt Literale, die atomare Tokens sind. [Objektliterale](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Array-Literale](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation) sind [Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators), die aus einer Folge von Tokens bestehen.

### Null-Literal

Weitere Informationen finden Sie auch unter [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

```js-nolint
null
```

### Boolean-Literal

Weitere Informationen finden Sie auch unter [Boolean-Typ](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type).

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

Dezimale Literale können mit einer Null (`0`) beginnen, auf die eine weitere Dezimalziffer folgt. Sind jedoch alle Ziffern nach der führenden `0` kleiner als 8, wird die Zahl als Oktalzahl interpretiert. Diese Syntax gilt als veraltet. Zahlenliterale mit vorangestellter `0` verursachen im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) einen Syntaxfehler – unabhängig davon, ob sie als Oktal- oder Dezimalzahl interpretiert würden. Verwenden Sie stattdessen das Präfix `0o`.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

##### Exponentialschreibweise

Ein dezimales Exponentialliteral hat das Format `beN`. Dabei ist `b` eine Basiszahl (Ganzzahl oder Gleitkommazahl), gefolgt von `E` oder `e` als Trennzeichen beziehungsweise _Exponentenkennzeichen_. `N` ist der _Exponent_ – eine vorzeichenbehaftete Ganzzahl.

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

Die Syntax für Binärzahlen beginnt mit einer Null, gefolgt vom lateinischen Buchstaben „B“ in Klein- oder Großschreibung (`0b` oder `0B`). Jedes Zeichen nach `0b`, das weder 0 noch 1 ist, beendet die Literalsequenz.

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### Oktal

Die Syntax für Oktalzahlen beginnt mit einer Null, gefolgt vom lateinischen Buchstaben „O“ in Klein- oder Großschreibung (`0o` oder `0O`). Jedes Zeichen nach `0o`, das außerhalb des Bereichs (01234567) liegt, beendet die Literalsequenz.

```js-nolint
0O755 // 493
0o644 // 420
```

#### Hexadezimal

Die Syntax für Hexadezimalzahlen beginnt mit einer Null, gefolgt vom lateinischen Buchstaben „X“ in Klein- oder Großschreibung (`0x` oder `0X`). Jedes Zeichen nach `0x`, das außerhalb des Bereichs (0123456789ABCDEF) liegt, beendet die Literalsequenz.

```js-nolint
0xFFFFFFFFFFFFF // 4503599627370495
0xabcdef123456  // 188900967593046
0XA             // 10
```

#### BigInt-Literal

Der Typ [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type) ist ein numerischer primitiver Typ in JavaScript, der Ganzzahlen mit beliebiger Genauigkeit darstellen kann. BigInt-Literale werden gebildet, indem an eine Ganzzahl ein `n` angehängt wird.

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

Verwenden Sie für oktale `BigInt`-Zahlen immer eine Null, gefolgt vom Buchstaben „o“ (groß- oder kleingeschrieben):

```js example-good
0o755n;
```

Weitere Informationen zu `BigInt` finden Sie unter [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type).

#### Numerische Trennzeichen

Um numerische Literale besser lesbar zu machen, können Unterstriche (`_`, `U+005F`) als Trennzeichen verwendet werden:

```js-nolint
1_000_000_000_000
1_050.95
0b1010_0001_1000_0101
0o2_2_5_6
0xA0_B0_C0
1_000_000_000_000_000_000_000n
```

Beachten Sie dabei folgende Einschränkungen:

```js-nolint example-bad
// More than one underscore in a row is not allowed
100__000; // SyntaxError

// Not allowed at the end of numeric literals
100_; // SyntaxError

// Can not be used after leading 0
0_1; // SyntaxError
```

### Zeichenfolgenliterale

Ein [Zeichenfolgenliteral](/de/docs/Web/JavaScript/Guide/Data_structures#string_type) besteht aus null oder mehr Unicode-Codepunkten, die in einfache oder doppelte Anführungszeichen eingeschlossen sind. Unicode-Codepunkte können auch durch Escape-Sequenzen dargestellt werden. Alle Codepunkte dürfen direkt in einem Zeichenfolgenliteral vorkommen, mit Ausnahme der folgenden:

- U+005C \ (umgekehrter Schrägstrich)
- U+000D \<CR>
- U+000A \<LF>
- Anführungszeichen derselben Art, mit der das Zeichenfolgenliteral beginnt

Jeder Codepunkt kann in Form einer Escape-Sequenz vorkommen. Zeichenfolgenliterale ergeben ECMAScript-String-Werte. Bei der Erzeugung dieser String-Werte werden Unicode-Codepunkte in UTF-16 kodiert.

```js-nolint
'foo'
"bar"
```

Die folgenden Unterabschnitte beschreiben verschiedene Escape-Sequenzen (ein `\`, gefolgt von einem oder mehreren Zeichen), die in Zeichenfolgenliteralen verfügbar sind. Jede unten nicht aufgeführte Escape-Sequenz wird zu einem „Identity Escape“, der dem Codepunkt des Zeichens selbst entspricht. Beispielsweise ist `\z` dasselbe wie `z`. Eine veraltete Syntax für oktale Escape-Sequenzen wird auf der Seite [Veraltete und obsolete Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) beschrieben. Viele dieser Escape-Sequenzen sind auch in regulären Ausdrücken gültig – siehe [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

#### Escape-Sequenzen

Sonderzeichen können mit Escape-Sequenzen kodiert werden:

| Escape-Sequenz                                                           | Unicode-Codepunkt                                   |
| ------------------------------------------------------------------------ | --------------------------------------------------- |
| `\0`                                                                     | Nullzeichen (U+0000 NULL)                           |
| `\'`                                                                     | Einfaches Anführungszeichen (U+0027 APOSTROPHE)     |
| `\"`                                                                     | Doppeltes Anführungszeichen (U+0022 QUOTATION MARK) |
| `\\`                                                                     | Umgekehrter Schrägstrich (U+005C REVERSE SOLIDUS)   |
| `\n`                                                                     | Zeilenumbruch (U+000A LINE FEED; LF)                |
| `\r`                                                                     | Wagenrücklauf (U+000D CARRIAGE RETURN; CR)          |
| `\v`                                                                     | Vertikaler Tabulator (U+000B LINE TABULATION)       |
| `\t`                                                                     | Tabulator (U+0009 CHARACTER TABULATION)             |
| `\b`                                                                     | Rückschritt (U+0008 BACKSPACE)                      |
| `\f`                                                                     | Seitenvorschub (U+000C FORM FEED)                   |
| `\`, gefolgt von einem [Zeilenabschlusszeichen](#zeilenabschlusszeichen) | Leere Zeichenfolge                                  |

Die letzte Escape-Sequenz – ein `\`, gefolgt von einem Zeilenabschlusszeichen – ist nützlich, um ein Zeichenfolgenliteral über mehrere Zeilen zu verteilen, ohne seine Bedeutung zu ändern.

```js
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Stellen Sie sicher, dass nach dem umgekehrten Schrägstrich kein Leerzeichen oder anderes Zeichen steht (außer einem Zeilenumbruch). Andernfalls funktioniert dies nicht. Wenn die nächste Zeile eingerückt ist, sind die zusätzlichen Leerzeichen auch im Wert der Zeichenfolge enthalten.

Sie können auch den Operator [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition) verwenden, um mehrere Zeichenfolgen aneinanderzuhängen:

```js
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Beide beschriebenen Methoden ergeben identische Zeichenfolgen.

#### Hexadezimale Escape-Sequenzen

Hexadezimale Escape-Sequenzen bestehen aus `\x`, gefolgt von genau zwei hexadezimalen Ziffern. Diese stellen eine Codeeinheit oder einen Codepunkt im Bereich von 0x0000 bis 0x00FF dar.

```js
"\xA9"; // "©"
```

#### Unicode-Escape-Sequenzen

Eine Unicode-Escape-Sequenz besteht aus genau vier hexadezimalen Ziffern nach `\u`. Sie stellt eine Codeeinheit in der UTF-16-Kodierung dar. Bei Codepunkten von U+0000 bis U+FFFF entspricht die Codeeinheit dem Codepunkt. Codepunkte von U+10000 bis U+10FFFF benötigen zwei Escape-Sequenzen, die die beiden zur Kodierung des Zeichens verwendeten Codeeinheiten darstellen (ein Surrogatpaar). Das Surrogatpaar ist nicht mit dem Codepunkt identisch.

Siehe auch {{jsxref("String.fromCharCode()")}} und {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Unicode-Codepunkt-Escape-Sequenzen

Eine Unicode-Codepunkt-Escape-Sequenz besteht aus `\u{`, gefolgt von einem hexadezimal angegebenen Codepunkt und `}`. Der Wert der hexadezimalen Ziffern muss einschließlich der Grenzen zwischen 0 und 0x10FFFF liegen. Codepunkte im Bereich U+10000 bis U+10FFFF müssen nicht als Surrogatpaar dargestellt werden.

Siehe auch {{jsxref("String.fromCodePoint()")}} und {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// the same character represented as a surrogate pair
"\uD87E\uDC04";
```

### Literale regulärer Ausdrücke

Literale regulärer Ausdrücke werden von zwei Schrägstrichen (`/`) eingeschlossen. Der Lexer liest alle Zeichen bis zum nächsten nicht mit einer Escape-Sequenz versehenen Schrägstrich oder bis zum Zeilenende, es sei denn, der Schrägstrich steht innerhalb einer Zeichenklasse (`[]`). Nach dem abschließenden Schrägstrich können bestimmte Zeichen stehen (nämlich solche, die [Bestandteile von Bezeichnern](#bezeichner) sein können); sie kennzeichnen Flags.

Die lexikalische Grammatik ist sehr nachsichtig: Nicht jedes Literal eines regulären Ausdrucks, das als einzelnes Token erkannt wird, ist ein gültiger regulärer Ausdruck.

Weitere Informationen finden Sie auch unter {{jsxref("RegExp")}}.

```js
/ab+c/g;
/[/]/;
```

Ein Literal eines regulären Ausdrucks kann nicht mit zwei Schrägstrichen (`//`) beginnen, da dies einen Zeilenkommentar einleiten würde. Verwenden Sie `/(?:)/`, um einen leeren regulären Ausdruck anzugeben.

### Template-Literale

Ein Template-Literal besteht aus mehreren Tokens: `` `xxx${ `` (Template-Anfang), `}xxx${` (Template-Mittelteil) und `` }xxx` `` (Template-Ende) sind jeweils eigenständige Tokens. Dazwischen kann ein beliebiger Ausdruck stehen.

Weitere Informationen finden Sie auch unter [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals).

```js
`string text`;

`string text line 1
 string text line 2`;

`string text ${expression} string text`;

tag`string text ${expression} string text`;
```

## Automatische Semikolon-Einfügung

Die Syntaxdefinitionen einiger [JavaScript-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements) verlangen ein Semikolon (`;`) am Ende. Dazu gehören:

- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`using`](/de/docs/Web/JavaScript/Reference/Statements/using), [`await using`](/de/docs/Web/JavaScript/Reference/Statements/await_using)
- [Ausdrucksanweisungen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement)
- [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue), [`break`](/de/docs/Web/JavaScript/Reference/Statements/break), [`return`](/de/docs/Web/JavaScript/Reference/Statements/return), [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)
- Deklarationen von Klassenfeldern ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_elements))
- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import), [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)

Um die Sprache zugänglicher und komfortabler zu machen, kann JavaScript beim Verarbeiten des Tokenstroms automatisch Semikolons einfügen. Dadurch können einige ungültige Tokenfolgen zu gültiger Syntax „korrigiert“ werden. Dieser Schritt erfolgt, nachdem der Programmtext gemäß der lexikalischen Grammatik in Tokens zerlegt wurde. In drei Fällen werden Semikolons automatisch eingefügt:

1\. Wenn ein Token auftritt, das die Grammatik nicht zulässt, und es vom vorherigen Token durch mindestens ein [Zeilenabschlusszeichen](#zeilenabschlusszeichen) getrennt ist (einschließlich eines Blockkommentars mit mindestens einem Zeilenabschlusszeichen), oder wenn das Token `}` ist, wird vor dem Token ein Semikolon eingefügt.

```js-nolint
{ 1
2 } 3

// is transformed by ASI into:

{ 1
;2 ;} 3;

// Which is valid grammar encoding three statements,
// each consisting of a number literal
```

Die schließende Klammer `)` von [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) wird durch diese Regel ebenfalls als Sonderfall behandelt.

```js-nolint
do {
  // …
} while (condition) /* ; */ // ASI here
const a = 1
```

Es werden jedoch keine Semikolons eingefügt, wenn das Semikolon dadurch zum Trennzeichen im Kopf einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Anweisung würde.

```js-nolint example-bad
for (
  let a = 1 // No ASI here
  a < 10 // No ASI here
  a++
) {}
```

Automatisch eingefügte Semikolons bilden auch niemals [leere Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Empty). Im folgenden Code wäre beispielsweise ein Semikolon nach `)` gültig: Der Rumpf der `if`-Anweisung wäre dann eine leere Anweisung, und die `const`-Deklaration wäre eine separate Anweisung. Da automatisch eingefügte Semikolons jedoch keine leeren Anweisungen bilden dürfen, würde die [Deklaration](/de/docs/Web/JavaScript/Reference/Statements#what_are_statements_declarations_and_expressions) zum Rumpf der `if`-Anweisung. Das ist ungültig.

```js-nolint example-bad
if (Math.random() > 0.5)
const x = 1 // SyntaxError: Unexpected token 'const'
```

2\. Wenn das Ende des Tokenstroms erreicht ist und der Parser den Tokenstrom nicht als vollständiges Programm parsen kann, wird am Ende ein Semikolon eingefügt.

```js-nolint
const a = 1 /* ; */ // ASI here
```

Diese Regel ergänzt die vorherige für den Fall, dass kein „unzulässiges Token“ vorhanden ist, sondern lediglich das Ende des Eingabestroms erreicht wurde.

3\. Wenn die Grammatik an einer bestimmten Stelle Zeilenabschlusszeichen verbietet, dort aber eines vorkommt, wird ein Semikolon eingefügt. Zu diesen Stellen gehören:

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

Hier wird [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment) nicht als Postfix-Operator für die Variable `b` behandelt, weil zwischen `b` und `++` ein Zeilenabschlusszeichen steht.

```js-nolint
a = b
++c

// is transformed by ASI into

a = b;
++c;
```

Hier gibt die `return`-Anweisung `undefined` zurück, und `a + b` wird zu einer unerreichbaren Anweisung.

```js-nolint
return
a + b

// is transformed by ASI into

return;
a + b;
```

Beachten Sie, dass die automatische Semikolon-Einfügung (ASI) nur ausgelöst wird, wenn ein Zeilenumbruch Tokens trennt, die andernfalls ungültige Syntax ergeben würden. Kann das nächste Token als Teil einer gültigen Struktur geparst werden, wird kein Semikolon eingefügt. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()

const b = 1
[1, 2, 3].forEach(console.log)
```

Da `()` als Funktionsaufruf interpretiert werden kann, löst es normalerweise keine automatische Semikolon-Einfügung aus. Ebenso kann `[]` ein Eigenschaftszugriff sein. Der obige Code entspricht:

```js-nolint example-bad
const a = 1(1).toString();

const b = 1[1, 2, 3].forEach(console.log);
```

Das ist zufällig gültige Syntax. `1[1, 2, 3]` ist ein [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) mit einem durch [Kommas](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) verknüpften Ausdruck. Beim Ausführen des Codes erhalten Sie daher Fehlermeldungen wie „1 is not a function“ und „Cannot read properties of undefined (reading 'forEach')“.

Innerhalb von Klassen können auch Klassenfelder und Generatormethoden eine Fehlerquelle sein.

```js-nolint example-bad
class A {
  a = 1
  *gen() {}
}
```

Der Code wird wie folgt interpretiert:

```js-nolint example-bad
class A {
  a = 1 * gen() {}
}
```

Daher tritt bei `{` ein Syntaxfehler auf.

Wenn Sie einen Stil ohne Semikolons durchsetzen möchten, helfen Ihnen die folgenden Faustregeln beim Umgang mit ASI:

- Schreiben Sie die Postfix-Operatoren `++` und `--` in dieselbe Zeile wie ihre Operanden.

  ```js-nolint example-bad
  const a = b
  ++
  console.log(a) // ReferenceError: Invalid left-hand side expression in prefix operation
  ```

  ```js-nolint example-good
  const a = b++
  console.log(a)
  ```

- Der Ausdruck nach `return`, `throw` oder `yield` sollte in derselben Zeile wie das Schlüsselwort stehen.

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

- Ebenso sollte der Label-Bezeichner nach `break` oder `continue` in derselben Zeile wie das Schlüsselwort stehen.

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

- Das `=>` einer Pfeilfunktion sollte in derselben Zeile stehen wie das Ende ihrer Parameterliste.

  ```js-nolint example-bad
  const foo = (a, b)
    => a + b
  ```

  ```js-nolint example-good
  const foo = (a, b) =>
    a + b
  ```

- Auf `async` bei asynchronen Funktionen, Methoden usw. darf nicht unmittelbar ein Zeilenabschlusszeichen folgen.

  ```js-nolint example-bad
  async
  function foo() {}
  ```

  ```js-nolint example-good
  async function
  foo() {}
  ```

- Das Schlüsselwort `using` in `using`- und `await using`-Anweisungen sollte in derselben Zeile stehen wie der erste damit deklarierte Bezeichner.

  ```js-nolint example-bad
  using
  resource = acquireResource()
  ```

  ```js-nolint example-good
  using resource
    = acquireResource()
  ```

- Wenn eine Zeile mit `(`, `[`, `` ` ``, `+`, `-` oder `/` (wie bei Literalen regulärer Ausdrücke) beginnt, stellen Sie ihr ein Semikolon voran oder beenden Sie die vorherige Zeile mit einem Semikolon.

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

- Klassenfelder sollten vorzugsweise immer mit einem Semikolon abgeschlossen werden. Zusätzlich zur vorherigen Regel (die auch eine Felddeklaration vor einer [berechneten Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) umfasst, da Letztere mit `[` beginnt) sind Semikolons auch zwischen einer Felddeklaration und einer Generatormethode erforderlich.

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

- Leitfaden [Grammatik und Typen](/de/docs/Web/JavaScript/Guide/Grammar_and_types)
- [Kleine Neuerung aus ES6, jetzt in Firefox Aurora und Nightly: Binär- und Oktalzahlen](https://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/) von Jeff Walden (2013)
- [JavaScript-Zeichen-Escape-Sequenzen](https://mathiasbynens.be/notes/javascript-escapes) von Mathias Bynens (2011)

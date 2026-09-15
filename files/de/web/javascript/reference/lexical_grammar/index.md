---
title: Lexikalische Grammatik
slug: Web/JavaScript/Reference/Lexical_grammar
l10n:
  sourceCommit: febd0de3773b270df7ff405a3f282e8fb7cbee00
---

Diese Seite beschreibt die lexikalische Grammatik von JavaScript. JavaScript-Quelltext ist lediglich eine Zeichenfolge von Zeichen — damit der Interpreter ihn verstehen kann, muss die Zeichenfolge in eine stärker strukturierte Darstellung _geparst_ werden. Der erste Schritt des Parsens wird [lexikalische Analyse](https://en.wikipedia.org/wiki/Lexical_analysis) genannt. Dabei wird der Text von links nach rechts gescannt und in eine Sequenz einzelner, atomarer Eingabeelemente umgewandelt. Einige Eingabeelemente sind für den Interpreter nicht relevant und werden nach diesem Schritt entfernt — dazu gehören [Leerraum](#leerraum) und [Kommentare](#kommentare). Die übrigen, einschließlich [Bezeichnern](#bezeichner), [Schlüsselwörtern](#schlüsselwörter), [Literalen](#literale) und Satzzeichen (hauptsächlich [Operatoren](/de/docs/Web/JavaScript/Reference/Operators)), werden für die weitere Syntaxanalyse verwendet. [Zeilenabschlüsse](#zeilenabschlüsse) und mehrzeilige Kommentare sind ebenfalls syntaktisch nicht relevant, steuern jedoch den Prozess der [automatischen Semikolon-Einfügung](#automatische_semikolon-einfügung), um bestimmte ungültige Token-Sequenzen gültig zu machen.

## Formatsteuerzeichen

Formatsteuerzeichen haben keine visuelle Darstellung, werden jedoch verwendet, um die Interpretation des Textes zu steuern.

| Codepunkt | Name                  | Abkürzung | Beschreibung                                                                                                                                                                                                                     |
| --------- | --------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| U+200C    | Zero width non-joiner | \<ZWNJ>   | Wird zwischen Zeichen platziert, um zu verhindern, dass sie in bestimmten Sprachen zu Ligaturen verbunden werden ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_non-joiner)).                                             |
| U+200D    | Zero width joiner     | \<ZWJ>    | Wird zwischen Zeichen platziert, die normalerweise nicht verbunden würden, damit die Zeichen in bestimmten Sprachen in ihrer verbundenen Form dargestellt werden ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_joiner)). |
| U+FEFF    | Byte order mark       | \<BOM>    | Wird am Anfang des Skripts verwendet, um es als Unicode zu kennzeichnen und die Erkennung der Kodierung und Bytereihenfolge des Texts zu ermöglichen ([Wikipedia](https://en.wikipedia.org/wiki/Byte_order_mark)).               |

Im JavaScript-Quelltext werden \<ZWNJ> und \<ZWJ> als Teile von [Bezeichnern](#bezeichner) behandelt, während \<BOM> (außerhalb des Textanfangs auch Zero-width no-break space \<ZWNBSP> genannt) als [Leerraum](#leerraum) behandelt wird.

## Leerraum

{{Glossary("Whitespace", "Leerraumzeichen")}} verbessern die Lesbarkeit von Quelltext und trennen Tokens voneinander. Diese Zeichen sind für die Funktionalität des Codes in der Regel nicht erforderlich. [Minifizierungswerkzeuge](https://en.wikipedia.org/wiki/Minification_%28programming%29) werden häufig verwendet, um Leerraum zu entfernen und dadurch die zu übertragende Datenmenge zu verringern.

| Codepunkt | Name                           | Abkürzung | Beschreibung                                                                                              | Escape-Sequenz |
| --------- | ------------------------------ | --------- | --------------------------------------------------------------------------------------------------------- | -------------- |
| U+0009    | Character tabulation           | \<TAB>    | Horizontaler Tabulator                                                                                    | \t             |
| U+000B    | Line tabulation                | \<VT>     | Vertikaler Tabulator                                                                                      | \v             |
| U+000C    | Form feed                      | \<FF>     | Steuerzeichen für Seitenumbruch ([Wikipedia](https://en.wikipedia.org/wiki/Page_break#Form_feed)).        | \f             |
| U+0020    | Space                          | \<SP>     | Normales Leerzeichen                                                                                      |                |
| U+00A0    | No-break space                 | \<NBSP>   | Normales Leerzeichen, jedoch ohne mögliche Zeilenumbruchstelle                                            |                |
| U+FEFF    | Zero-width no-break space      | \<ZWNBSP> | Wenn es sich nicht am Anfang eines Skripts befindet, ist die BOM-Markierung ein normales Leerraumzeichen. |                |
| Others    | Other Unicode space characters | \<USP>    | [Zeichen in der allgemeinen Kategorie „Space_Separator“][space separator set]                             |                |

[space separator set]: https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D

> [!NOTE]
> Von den [Zeichen mit der Eigenschaft „White_Space“, die sich jedoch nicht in der allgemeinen Kategorie „Space_Separator“ befinden](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BWhite_Space%7D%26%5CP%7BGeneral_Category%3DSpace_Separator%7D), werden U+0009, U+000B und U+000C in JavaScript weiterhin als Leerraum behandelt; U+0085 NEXT LINE hat keine besondere Rolle; die übrigen bilden die Menge der [Zeilenabschlüsse](#zeilenabschlüsse).

> [!NOTE]
> Änderungen am vom JavaScript-Engine verwendeten Unicode-Standard können das Verhalten von Programmen beeinflussen. Beispielsweise aktualisierte ES2016 den referenzierten Unicode-Standard von 5.1 auf 8.0.0, wodurch U+180E MONGOLIAN VOWEL SEPARATOR aus der Kategorie „Space_Separator“ in die Kategorie „Format (Cf)“ verschoben wurde und kein Leerraumzeichen mehr war. Folglich änderte sich das Ergebnis von [`"\u180E".trim().length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim) von `0` zu `1`.

## Zeilenabschlüsse

Zusätzlich zu [Leerraumzeichen](#leerraum) werden Zeichen für Zeilenabschlüsse verwendet, um die Lesbarkeit des Quelltexts zu verbessern. In einigen Fällen können Zeilenabschlüsse jedoch die Ausführung von JavaScript-Code beeinflussen, da sie an einigen Stellen verboten sind. Zeilenabschlüsse beeinflussen außerdem den Prozess der [automatischen Semikolon-Einfügung](#automatische_semikolon-einfügung).

Außerhalb des Kontexts der lexikalischen Grammatik werden Leerraum und Zeilenabschlüsse häufig gleichgesetzt. Beispielsweise entfernt {{jsxref("String.prototype.trim()")}} sämtlichen Leerraum und alle Zeilenabschlüsse am Anfang und Ende eines Strings. Der `\s`-[Zeichenklassen-Escape](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) in regulären Ausdrücken entspricht sämtlichem Leerraum und allen Zeilenabschlüssen.

Nur die folgenden Unicode-Codepunkte werden in ECMAScript als Zeilenabschlüsse behandelt; andere Zeichen für Zeilenumbrüche werden als Leerraum behandelt (beispielsweise wird Next Line, NEL, U+0085 als Leerraum betrachtet).

| Codepunkt | Name                | Abkürzung | Beschreibung                                                  | Escape-Sequenz |
| --------- | ------------------- | --------- | ------------------------------------------------------------- | -------------- |
| U+000A    | Line Feed           | \<LF>     | Zeichen für neue Zeile in UNIX-Systemen.                      | \n             |
| U+000D    | Carriage Return     | \<CR>     | Zeichen für neue Zeile in Commodore- und frühen Mac-Systemen. | \r             |
| U+2028    | Line Separator      | \<LS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline)            |                |
| U+2029    | Paragraph Separator | \<PS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline)            |                |

## Kommentare

Kommentare werden verwendet, um JavaScript-Code Hinweise, Anmerkungen, Vorschläge oder Warnungen hinzuzufügen. Dadurch kann er leichter lesbar und verständlich werden. Sie können außerdem verwendet werden, um Code zu deaktivieren und so seine Ausführung zu verhindern; dies kann ein wertvolles Werkzeug zur Fehlersuche sein.

JavaScript bietet zwei seit Langem bestehende Möglichkeiten, Kommentare zu Code hinzuzufügen: Zeilenkommentare und Blockkommentare. Zusätzlich gibt es eine spezielle Hashbang-Kommentarsyntax.

### Zeilenkommentare

Die erste Möglichkeit ist der `//`-Kommentar; dadurch wird sämtlicher darauf folgender Text in derselben Zeile zu einem Kommentar. Zum Beispiel:

```js
function comment() {
  // This is a one line JavaScript comment
  console.log("Hello world!");
}
comment();
```

### Blockkommentare

Die zweite Möglichkeit ist der Stil `/* */`, der wesentlich flexibler ist.

Sie können ihn beispielsweise in einer einzelnen Zeile verwenden:

```js
function comment() {
  /* This is a one line JavaScript comment */
  console.log("Hello world!");
}
comment();
```

Sie können auch mehrzeilige Kommentare erstellen:

```js
function comment() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log("Hello world!");
}
comment();
```

Sie können ihn bei Bedarf auch in der Mitte einer Zeile verwenden, obwohl dies Ihren Code schwerer lesbar machen kann und daher mit Vorsicht verwendet werden sollte:

```js
function comment(x) {
  console.log("Hello " + x /* insert the value of x */ + " !");
}
comment("world");
```

Außerdem können Sie ihn verwenden, um Code zu deaktivieren und seine Ausführung zu verhindern, indem Sie Code in einen Kommentar einschließen:

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

In diesem Fall wird der Aufruf `console.log()` niemals ausgeführt, da er sich innerhalb eines Kommentars befindet. Auf diese Weise können beliebig viele Codezeilen deaktiviert werden.

Blockkommentare, die mindestens einen Zeilenabschluss enthalten, verhalten sich bei der [automatischen Semikolon-Einfügung](#automatische_semikolon-einfügung) wie [Zeilenabschlüsse](#zeilenabschlüsse).

### Hashbang-Kommentare

Es gibt eine spezielle dritte Kommentarsyntax, den **Hashbang-Kommentar**. Ein Hashbang-Kommentar verhält sich exakt wie ein einzeiliger (`//`) Kommentar, beginnt jedoch mit `#!` und **ist nur am absoluten Anfang eines Skripts oder Moduls gültig**. Beachten Sie außerdem, dass vor dem `#!` keinerlei Leerraum zulässig ist. Der Kommentar besteht aus allen Zeichen nach `#!` bis zum Ende der ersten Zeile; nur ein solcher Kommentar ist zulässig.

Hashbang-Kommentare in JavaScript ähneln [Shebangs in Unix](<https://en.wikipedia.org/wiki/Shebang_(Unix)>), die den Pfad zu einem bestimmten JavaScript-Interpreter angeben, den Sie zur Ausführung des Skripts verwenden möchten. Bevor der Hashbang-Kommentar standardisiert wurde, war er bereits de facto in Nicht-Browser-Hosts wie Node.js implementiert, wo er aus dem Quelltext entfernt wurde, bevor dieser an die Engine übergeben wurde. Ein Beispiel:

```js
#!/usr/bin/env node

console.log("Hello world");
```

Der JavaScript-Interpreter behandelt ihn als normalen Kommentar — er hat nur dann semantische Bedeutung für die Shell, wenn das Skript direkt in einer Shell ausgeführt wird.

> [!WARNING]
> Wenn Skripte direkt in einer Shell-Umgebung ausführbar sein sollen, kodieren Sie sie in UTF-8 ohne [BOM](https://en.wikipedia.org/wiki/Byte_order_mark). Obwohl eine BOM für Code, der in einem Browser ausgeführt wird, keine Probleme verursacht — da sie während der UTF-8-Dekodierung entfernt wird, bevor der Quelltext analysiert wird — erkennt eine Unix/Linux-Shell den Hashbang nicht, wenn ihm ein BOM-Zeichen vorangestellt ist.

Sie dürfen den Kommentarstil `#!` nur verwenden, um einen JavaScript-Interpreter anzugeben. Verwenden Sie in allen anderen Fällen einfach einen `//`-Kommentar (oder einen mehrzeiligen Kommentar).

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

In JavaScript bestehen Bezeichner üblicherweise aus alphanumerischen Zeichen, Unterstrichen (`_`) und Dollarzeichen (`$`). Bezeichner dürfen nicht mit Zahlen beginnen. JavaScript-Bezeichner sind jedoch nicht nur auf {{Glossary("ASCII", "ASCII")}} beschränkt — viele Unicode-Codepunkte sind ebenfalls zulässig. Genauer gesagt:

- Startzeichen können jedes Zeichen der Kategorie [ID_Start](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Start%7D) sowie `_` und `$` sein.
- Nach dem ersten Zeichen können Sie jedes Zeichen der Kategorie [ID_Continue](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Continue%7D) verwenden, die U+200C (ZWNJ) und U+200D (ZWJ) enthält.

> [!NOTE]
> Falls Sie aus irgendeinem Grund selbst JavaScript-Quelltext parsen müssen, gehen Sie nicht davon aus, dass alle Bezeichner dem Muster `/[A-Za-z_$][\w$]*/` folgen (d.h. nur ASCII)! Der Bereich der Bezeichner kann durch den regulären Ausdruck `/[$_\p{ID_Start}][$\p{ID_Continue}]*/u` beschrieben werden (Unicode-Escape-Sequenzen ausgenommen).

Zusätzlich erlaubt JavaScript die Verwendung von [Unicode-Escape-Sequenzen](#unicode-escape-sequenzen) in der Form `\u0000` oder `\u{000000}` in Bezeichnern, die denselben String-Wert wie die tatsächlichen Unicode-Zeichen kodieren. Beispielsweise sind `你好` und `\u4f60\u597d` dieselben Bezeichner:

```js-nolint
const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello
```

Nicht alle Stellen akzeptieren den vollständigen Bereich von Bezeichnern. Bestimmte Syntaxformen wie Funktionsdeklarationen, Funktionsausdrücke und Variablendeklarationen erfordern Bezeichnernamen, die keine [reservierten Wörter](#reservierte_wörter) sind.

```js-nolint example-bad
function import() {} // Illegal: import is a reserved word.
```

Insbesondere private Elemente und Objekteigenschaften erlauben reservierte Wörter.

```js
const obj = { import: "value" }; // Legal despite `import` being reserved
class C {
  #import = "value";
}
```

## Schlüsselwörter

_Schlüsselwörter_ sind Tokens, die wie Bezeichner aussehen, in JavaScript jedoch besondere Bedeutungen haben. Beispielsweise zeigt das Schlüsselwort [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) vor einer Funktionsdeklaration an, dass die Funktion asynchron ist.

Einige Schlüsselwörter sind _reserviert_, was bedeutet, dass sie nicht als Bezeichner für Variablendeklarationen, Funktionsdeklarationen usw. verwendet werden können. Sie werden häufig als _reservierte Wörter_ bezeichnet. Nachfolgend finden Sie [eine Liste dieser reservierten Wörter](#reservierte_wörter). Nicht alle Schlüsselwörter sind reserviert — beispielsweise kann `async` überall als Bezeichner verwendet werden. Einige Schlüsselwörter sind nur _kontextabhängig reserviert_ — beispielsweise ist `await` nur innerhalb des Rumpfs einer asynchronen Funktion reserviert, und `let` ist nur in Code im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) oder in `const`- und `let`-Deklarationen reserviert.

Bezeichner werden immer anhand ihres _String-Werts_ verglichen, daher werden Escape-Sequenzen interpretiert. Beispielsweise ist dies weiterhin ein Syntaxfehler:

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

Die folgenden sind nur reserviert, wenn sie in Code im strikten Modus vorkommen:

- {{jsxref("Statements/let", "let")}} (auch in `const`-, `let`- und Klassendeklarationen reserviert)
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- {{jsxref("Operators/yield", "yield")}} (auch in Generatorfunktionsrümpfen reserviert)

Die folgenden sind nur reserviert, wenn sie in Modulcode oder Rümpfen asynchroner Funktionen vorkommen:

- [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

### Zukünftig reservierte Wörter

Die folgenden sind von der ECMAScript-Spezifikation als zukünftige Schlüsselwörter reserviert. Sie haben derzeit keine besondere Funktionalität, könnten diese jedoch künftig erhalten und können daher nicht als Bezeichner verwendet werden.

Diese sind immer reserviert:

- `enum`

Die folgenden sind nur reserviert, wenn sie in Code im strikten Modus vorkommen:

- `implements`
- `interface`
- `package`
- `private`
- `protected`
- `public`

#### Zukünftig reservierte Wörter in älteren Standards

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

### Bezeichner mit besonderen Bedeutungen

Einige Bezeichner haben in manchen Kontexten eine besondere Bedeutung, ohne reservierte Wörter irgendeiner Art zu sein. Dazu gehören:

- {{jsxref("Functions/arguments", "arguments")}} (kein Schlüsselwort, kann jedoch im strikten Modus nicht als Bezeichner deklariert werden)
- `as` ([`import * as ns from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import))
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)
- {{jsxref("Global_Objects/eval", "eval")}} (kein Schlüsselwort, kann jedoch im strikten Modus nicht als Bezeichner deklariert werden)
- `from` ([`import x from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import))
- {{jsxref("Functions/get", "get")}}
- [`of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- {{jsxref("Functions/set", "set")}}

## Literale

> [!NOTE]
> Dieser Abschnitt behandelt Literale, die atomare Tokens sind. [Objektliterale](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Array-Literale](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation) sind [Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators), die aus einer Reihe von Tokens bestehen.

### Null-Literal

Weitere Informationen finden Sie unter [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

```js-nolint
null
```

### Boolean-Literal

Weitere Informationen finden Sie unter [Boolean-Typ](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type).

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

Dezimale Literale können mit einer Null (`0`) beginnen, auf die eine weitere Dezimalziffer folgt. Wenn jedoch alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies gilt als Legacy-Syntax, und mit `0` präfixierte Zahlenliterale verursachen — unabhängig davon, ob sie als Oktal- oder Dezimalzahlen interpretiert werden — im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) einen Syntaxfehler. Verwenden Sie daher stattdessen das Präfix `0o`.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

##### Exponentiell

Das dezimale Exponentialliteral wird durch das folgende Format angegeben: `beN`; dabei ist `b` eine Basiszahl (Ganzzahl oder Gleitkommazahl), gefolgt von einem Zeichen `E` oder `e` (das als Trennzeichen oder _Exponentindikator_ dient) und `N`, der _Exponent_ oder die _Potenz_ — eine Ganzzahl mit Vorzeichen.

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

Die Syntax für Binärzahlen verwendet eine führende Null, gefolgt vom lateinischen Klein- oder Großbuchstaben „B“ (`0b` oder `0B`). Jedes Zeichen nach `0b`, das nicht 0 oder 1 ist, beendet die literale Sequenz.

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### Oktal

Die Syntax für Oktalzahlen verwendet eine führende Null, gefolgt vom lateinischen Klein- oder Großbuchstaben „O“ (`0o` oder `0O)`. Jedes Zeichen nach `0o`, das außerhalb des Bereichs (01234567) liegt, beendet die literale Sequenz.

```js-nolint
0O755 // 493
0o644 // 420
```

#### Hexadezimal

Die Syntax für Hexadezimalzahlen verwendet eine führende Null, gefolgt vom lateinischen Klein- oder Großbuchstaben „X“ (`0x` oder `0X`). Jedes Zeichen nach `0x`, das außerhalb des Bereichs (0123456789ABCDEF) liegt, beendet die literale Sequenz.

```js-nolint
0xFFFFFFFFFFFFF // 4503599627370495
0xabcdef123456  // 188900967593046
0XA             // 10
```

#### BigInt-Literal

Der Typ [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type) ist ein numerischer primitiver Typ in JavaScript, der Ganzzahlen beliebiger Präzision darstellen kann. BigInt-Literale werden erstellt, indem `n` an das Ende einer Ganzzahl angehängt wird.

```js-nolint
123456789123456789n     // 123456789123456789
0o777777777777n         // 68719476735
0x123456789ABCDEFn      // 81985529216486895
0b11101001010101010101n // 955733
```

BigInt-Literale dürfen nicht mit `0` beginnen, um Verwechslungen mit Legacy-Oktalliteralen zu vermeiden.

```js-nolint example-bad
0755n; // SyntaxError: invalid BigInt syntax
```

Verwenden Sie für oktale `BigInt`-Zahlen immer eine Null gefolgt vom Buchstaben „o“ (Groß- oder Kleinschreibung):

```js example-good
0o755n;
```

Weitere Informationen zu `BigInt` finden Sie auch unter [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type).

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

Ein [String](/de/docs/Web/JavaScript/Guide/Data_structures#string_type)-Literal besteht aus null oder mehr Unicode-Codepunkten, die in einfache oder doppelte Anführungszeichen eingeschlossen sind. Unicode-Codepunkte können außerdem durch eine Escape-Sequenz dargestellt werden. Alle Codepunkte können in einem String-Literal direkt vorkommen, außer diesen Codepunkten:

- U+005C \ (Backslash)
- U+000D \<CR>
- U+000A \<LF>
- Derselbe Anführungszeichentyp, der das String-Literal beginnt

Alle Codepunkte können in Form einer Escape-Sequenz vorkommen. String-Literale werden zu ECMAScript-String-Werten ausgewertet. Beim Erzeugen dieser String-Werte werden Unicode-Codepunkte in UTF-16 kodiert.

```js-nolint
'foo'
"bar"
```

Die folgenden Unterabschnitte beschreiben verschiedene Escape-Sequenzen (`\` gefolgt von einem oder mehreren Zeichen), die in String-Literalen verfügbar sind. Jede nicht unten aufgeführte Escape-Sequenz wird zu einem „Identity-Escape“, das selbst zum Codepunkt wird. Beispielsweise entspricht `\z` `z`. Es gibt eine veraltete Syntax für oktale Escape-Sequenzen, die auf der Seite [Veraltete und obsolete Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) beschrieben wird. Viele dieser Escape-Sequenzen sind auch in regulären Ausdrücken gültig — siehe [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

#### Escape-Sequenzen

Sonderzeichen können mithilfe von Escape-Sequenzen kodiert werden:

| Escape-Sequenz                                             | Unicode-Codepunkt                                   |
| ---------------------------------------------------------- | --------------------------------------------------- |
| `\0`                                                       | Nullzeichen (U+0000 NULL)                           |
| `\'`                                                       | einfaches Anführungszeichen (U+0027 APOSTROPHE)     |
| `\"`                                                       | doppeltes Anführungszeichen (U+0022 QUOTATION MARK) |
| `\\`                                                       | Backslash (U+005C REVERSE SOLIDUS)                  |
| `\n`                                                       | neue Zeile (U+000A LINE FEED; LF)                   |
| `\r`                                                       | Wagenrücklauf (U+000D CARRIAGE RETURN; CR)          |
| `\v`                                                       | vertikaler Tabulator (U+000B LINE TABULATION)       |
| `\t`                                                       | Tabulator (U+0009 CHARACTER TABULATION)             |
| `\b`                                                       | Rückschritt (U+0008 BACKSPACE)                      |
| `\f`                                                       | Seitenvorschub (U+000C FORM FEED)                   |
| `\` gefolgt von einem [Zeilenabschluss](#zeilenabschlüsse) | leerer String                                       |

Die letzte Escape-Sequenz, `\` gefolgt von einem Zeilenabschluss, ist nützlich, um ein String-Literal auf mehrere Zeilen aufzuteilen, ohne seine Bedeutung zu ändern.

```js
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Stellen Sie sicher, dass nach dem Backslash kein Leerzeichen oder anderes Zeichen folgt (außer einem Zeilenumbruch), da dies andernfalls nicht funktioniert. Wenn die nächste Zeile eingerückt ist, sind die zusätzlichen Leerzeichen ebenfalls im Wert des Strings enthalten.

Sie können auch den Operator [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition) verwenden, um mehrere Strings zusammenzufügen:

```js
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Beide oben genannten Methoden erzeugen identische Strings.

#### Hexadezimale Escape-Sequenzen

Hexadezimale Escape-Sequenzen bestehen aus `\x`, gefolgt von genau zwei hexadezimalen Ziffern, die eine Codeeinheit oder einen Codepunkt im Bereich von 0x0000 bis 0x00FF darstellen.

```js
"\xA9"; // "©"
```

#### Unicode-Escape-Sequenzen

Eine Unicode-Escape-Sequenz besteht aus genau vier hexadezimalen Ziffern nach `\u`. Sie stellt eine Codeeinheit in der UTF-16-Kodierung dar. Für Codepunkte U+0000 bis U+FFFF entspricht die Codeeinheit dem Codepunkt. Codepunkte U+10000 bis U+10FFFF erfordern zwei Escape-Sequenzen, die die zwei Codeeinheiten (ein Surrogatpaar) darstellen, mit denen das Zeichen kodiert wird; das Surrogatpaar unterscheidet sich vom Codepunkt.

Siehe auch {{jsxref("String.fromCharCode()")}} und {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Unicode-Codepunkt-Escapes

Ein Unicode-Codepunkt-Escape besteht aus `\u{`, gefolgt von einem Codepunkt zur Basis Hexadezimal, gefolgt von `}`. Der Wert der hexadezimalen Ziffern muss einschließlich im Bereich von 0 bis 0x10FFFF liegen. Codepunkte im Bereich U+10000 bis U+10FFFF müssen nicht als Surrogatpaar dargestellt werden.

Siehe auch {{jsxref("String.fromCodePoint()")}} und {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// the same character represented as a surrogate pair
"\uD87E\uDC04";
```

### Literale für reguläre Ausdrücke

Literale für reguläre Ausdrücke werden von zwei Schrägstrichen (`/`) eingeschlossen. Der Lexer verarbeitet alle Zeichen bis zum nächsten nicht maskierten Schrägstrich oder bis zum Ende der Zeile, sofern der Schrägstrich nicht innerhalb einer Zeichenklasse (`[]`) vorkommt. Nach dem schließenden Schrägstrich können einige Zeichen vorkommen (nämlich jene, die [Teile von Bezeichnern](#bezeichner) sind), welche Flags angeben.

Die lexikalische Grammatik ist sehr nachsichtig: Nicht alle Literale für reguläre Ausdrücke, die als ein Token erkannt werden, sind gültige reguläre Ausdrücke.

Weitere Informationen finden Sie unter {{jsxref("RegExp")}}.

```js
/ab+c/g;
/[/]/;
```

Ein Literal für einen regulären Ausdruck darf nicht mit zwei Schrägstrichen (`//`) beginnen, da dies ein Zeilenkommentar wäre. Verwenden Sie `/(?:)/`, um einen leeren regulären Ausdruck anzugeben.

### Template-Literale

Ein Template-Literal besteht aus mehreren Tokens: `` `xxx${ `` (Template-Kopf), `}xxx${` (Template-Mitte) und `` }xxx` `` (Template-Ende) sind einzelne Tokens, während zwischen ihnen ein beliebiger Ausdruck stehen kann.

Weitere Informationen finden Sie unter [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals).

```js
`string text`;

`string text line 1
 string text line 2`;

`string text ${expression} string text`;

tag`string text ${expression} string text`;
```

## Automatische Semikolon-Einfügung

Die Syntaxdefinitionen einiger [JavaScript-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements) erfordern Semikolons (`;`) am Ende. Dazu gehören:

- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`using`](/de/docs/Web/JavaScript/Reference/Statements/using), [`await using`](/de/docs/Web/JavaScript/Reference/Statements/await_using)
- [Ausdrucksanweisungen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement)
- [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue), [`break`](/de/docs/Web/JavaScript/Reference/Statements/break), [`return`](/de/docs/Web/JavaScript/Reference/Statements/return), [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)
- Deklarationen von Klassenfeldern ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_elements))
- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import), [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)

Um die Sprache zugänglicher und bequemer zu machen, kann JavaScript jedoch beim Verarbeiten des Token-Streams automatisch Semikolons einfügen, sodass einige ungültige Token-Sequenzen in gültige Syntax „korrigiert“ werden können. Dieser Schritt erfolgt, nachdem der Programmtext gemäß der lexikalischen Grammatik in Tokens geparst wurde. Es gibt drei Fälle, in denen Semikolons automatisch eingefügt werden:

1\. Wenn ein durch die Grammatik nicht erlaubtes Token gefunden wird und es durch mindestens einen [Zeilenabschluss](#zeilenabschlüsse) (einschließlich eines Blockkommentars, der mindestens einen Zeilenabschluss enthält) vom vorherigen Token getrennt ist oder das Token `}` lautet, wird vor dem Token ein Semikolon eingefügt.

```js-nolint
{ 1
2 } 3

// is transformed by ASI into:

{ 1
;2 ;} 3;

// Which is valid grammar encoding three statements,
// each consisting of a number literal
```

Das abschließende `)` von [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) wird durch diese Regel ebenfalls als Sonderfall behandelt.

```js-nolint
do {
  // …
} while (condition) /* ; */ // ASI here
const a = 1
```

Semikolons werden jedoch nicht eingefügt, wenn das Semikolon dadurch zum Trennzeichen im Kopf der [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Anweisung würde.

```js-nolint example-bad
for (
  let a = 1 // No ASI here
  a < 10 // No ASI here
  a++
) {}
```

Semikolons werden außerdem niemals als [leere Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Empty) eingefügt. Wenn im folgenden Code beispielsweise nach `)` ein Semikolon eingefügt würde, wäre der Code gültig: mit einer leeren Anweisung als Rumpf von `if` und der `const`-Deklaration als separater Anweisung. Da automatisch eingefügte Semikolons jedoch keine leeren Anweisungen werden können, wird dadurch eine [Deklaration](/de/docs/Web/JavaScript/Reference/Statements#what_are_statements_declarations_and_expressions) zum Rumpf der `if`-Anweisung, was nicht gültig ist.

```js-nolint example-bad
if (Math.random() > 0.5)
const x = 1 // SyntaxError: Unexpected token 'const'
```

2\. Wenn das Ende des Eingabestreams von Tokens erreicht wird und der Parser nicht in der Lage ist, den einzelnen Eingabestream als vollständiges Programm zu parsen, wird am Ende ein Semikolon eingefügt.

```js-nolint
const a = 1 /* ; */ // ASI here
```

Diese Regel ergänzt die vorherige Regel, speziell für den Fall, dass es kein „anstößiges Token“, sondern das Ende des Eingabestreams gibt.

3\. Wenn die Grammatik an einer Stelle Zeilenabschlüsse verbietet, aber ein Zeilenabschluss gefunden wird, wird ein Semikolon eingefügt. Zu diesen Stellen gehören:

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

Hier wird [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment) nicht als Postfix-Operator behandelt, der auf die Variable `b` angewendet wird, da zwischen `b` und `++` ein Zeilenabschluss vorkommt.

```js-nolint
a = b
++c

// is transformed by ASI into

a = b;
++c;
```

Hier gibt die `return`-Anweisung `undefined` zurück, und `a + b` wird zu einer nicht erreichbaren Anweisung.

```js-nolint
return
a + b

// is transformed by ASI into

return;
a + b;
```

Beachten Sie, dass ASI nur ausgelöst wird, wenn ein Zeilenumbruch Tokens trennt, die andernfalls ungültige Syntax erzeugen würden. Wenn das nächste Token als Teil einer gültigen Struktur geparst werden kann, werden keine Semikolons eingefügt. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()

const b = 1
[1, 2, 3].forEach(console.log)
```

Da `()` als Funktionsaufruf interpretiert werden kann, würde es normalerweise keine ASI auslösen. Ebenso kann `[]` ein Memberzugriff sein. Der obige Code entspricht:

```js-nolint example-bad
const a = 1(1).toString();

const b = 1[1, 2, 3].forEach(console.log);
```

Dies ist zufällig gültige Syntax. `1[1, 2, 3]` ist ein [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) mit einem durch den [Kommaoperator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) verbundenen Ausdruck. Daher erhalten Sie beim Ausführen des Codes Fehler wie „1 is not a function“ und „Cannot read properties of undefined (reading 'forEach')“.

Innerhalb von Klassen können Klassenfelder und Generatormethoden ebenfalls problematisch sein.

```js-nolint example-bad
class A {
  a = 1
  *gen() {}
}
```

Dies wird verstanden als:

```js-nolint example-bad
class A {
  a = 1 * gen() {}
}
```

Und führt daher zu einem Syntaxfehler bei `{`.

Für den Umgang mit ASI gelten die folgenden Faustregeln, falls Sie einen Stil ohne Semikolons erzwingen möchten:

- Schreiben Sie Postfix-`++` und `--` in dieselbe Zeile wie ihre Operanden.

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

- Das `=>` einer Arrow-Funktion sollte sich in derselben Zeile wie das Ende ihrer Parameter befinden.

  ```js-nolint example-bad
  const foo = (a, b)
    => a + b
  ```

  ```js-nolint example-good
  const foo = (a, b) =>
    a + b
  ```

- Auf das `async` asynchroner Funktionen, Methoden usw. darf nicht direkt ein Zeilenabschluss folgen.

  ```js-nolint example-bad
  async
  function foo() {}
  ```

  ```js-nolint example-good
  async function
  foo() {}
  ```

- Das Schlüsselwort `using` in `using`- und `await using`-Anweisungen sollte in derselben Zeile wie der erste von ihm deklarierte Bezeichner stehen.

  ```js-nolint example-bad
  using
  resource = acquireResource()
  ```

  ```js-nolint example-good
  using resource
    = acquireResource()
  ```

- Wenn eine Zeile mit einem von `(`, `[`, `` ` ``, `+`, `-`, `/` (wie bei Regex-Literalen) beginnt, stellen Sie ihr ein Semikolon voran oder beenden Sie die vorherige Zeile mit einem Semikolon.

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

- Klassenfelder sollten vorzugsweise immer mit Semikolons abgeschlossen werden — zusätzlich zur vorherigen Regel (die eine Felddeklaration gefolgt von einer [berechneten Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) einschließt, da Letztere mit `[` beginnt) sind Semikolons auch zwischen einer Felddeklaration und einer Generatormethode erforderlich.

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

- [Leitfaden zu Grammatik und Typen](/de/docs/Web/JavaScript/Guide/Grammar_and_types)
- [Micro-feature from ES6, now in Firefox Aurora and Nightly: binary and octal numbers](https://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/) von Jeff Walden (2013)
- [JavaScript-Zeichen-Escape-Sequenzen](https://mathiasbynens.be/notes/javascript-escapes) von Mathias Bynens (2011)

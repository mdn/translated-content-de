---
title: Lexikalische Grammatik
slug: Web/JavaScript/Reference/Lexical_grammar
l10n:
  sourceCommit: 389605121ed8ea78cc1878f31bbca6759cc7417d
---

Diese Seite beschreibt die lexikalische Grammatik von JavaScript. JavaScript-Quelltext ist lediglich eine Folge von Zeichen. Damit der Interpreter ihn verstehen kann, muss die Zeichenfolge _geparst_ und in eine stärker strukturierte Darstellung überführt werden. Der erste Schritt des Parsens heißt [lexikalische Analyse](https://en.wikipedia.org/wiki/Lexical_analysis). Dabei wird der Text von links nach rechts durchlaufen und in eine Folge einzelner, atomarer Eingabeelemente umgewandelt. Einige Eingabeelemente sind für den Interpreter ohne Bedeutung und werden nach diesem Schritt entfernt. Dazu gehören [Leerzeichen](#leerzeichen) und [Kommentare](#kommentare). Die übrigen Elemente, darunter [Bezeichner](#bezeichner), [Schlüsselwörter](#schlüsselwörter), [Literale](#literale) und Interpunktionszeichen (überwiegend [Operatoren](/de/docs/Web/JavaScript/Reference/Operators)), werden für die weitere Syntaxanalyse verwendet. [Zeilenendezeichen](#zeilenendezeichen) und mehrzeilige Kommentare sind syntaktisch ebenfalls ohne Bedeutung, steuern aber die [automatische Semikolon-Einfügung](#automatische_semikolon-einfügung), durch die bestimmte ungültige Tokenfolgen gültig werden.

## Formatsteuerzeichen

Formatsteuerzeichen haben keine sichtbare Darstellung, werden aber verwendet, um die Interpretation des Textes zu steuern.

| Codepunkt | Name                  | Abkürzung | Beschreibung                                                                                                                                                                                                           |
| --------- | --------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| U+200C    | Zero Width Non-Joiner | \<ZWNJ>   | Wird zwischen Zeichen gesetzt, um in bestimmten Sprachen zu verhindern, dass sie zu Ligaturen verbunden werden ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_non-joiner)).                                     |
| U+200D    | Zero Width Joiner     | \<ZWJ>    | Wird zwischen Zeichen gesetzt, die normalerweise nicht verbunden würden, damit sie in bestimmten Sprachen in ihrer verbundenen Form dargestellt werden ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_joiner)). |
| U+FEFF    | Byte Order Mark       | \<BOM>    | Wird am Anfang eines Skripts verwendet, um es als Unicode zu kennzeichnen und die Erkennung der Textkodierung und Byte-Reihenfolge zu ermöglichen ([Wikipedia](https://en.wikipedia.org/wiki/Byte_order_mark)).        |

Im JavaScript-Quelltext werden \<ZWNJ> und \<ZWJ> als Bestandteile von [Bezeichnern](#bezeichner) behandelt. \<BOM> wird dagegen als [Leerzeichen](#leerzeichen) behandelt; wenn es nicht am Anfang eines Textes steht, wird es auch als Zero Width No-Break Space (\<ZWNBSP>) bezeichnet.

## Leerzeichen

{{Glossary("Whitespace", "Leerzeichen")}} verbessern die Lesbarkeit des Quelltextes und trennen Tokens voneinander. Für die Funktion des Codes sind diese Zeichen normalerweise nicht erforderlich. Häufig werden [Minifizierungswerkzeuge](https://en.wikipedia.org/wiki/Minification_%28programming%29) eingesetzt, um Leerzeichen zu entfernen und so die zu übertragende Datenmenge zu verringern.

| Codepunkt | Name                                | Abkürzung | Beschreibung                                                                                             | Escape-Sequenz |
| --------- | ----------------------------------- | --------- | -------------------------------------------------------------------------------------------------------- | -------------- |
| U+0009    | Zeichen-Tabulator                   | \<TAB>    | Horizontaler Tabulator                                                                                   | \t             |
| U+000B    | Zeilen-Tabulator                    | \<VT>     | Vertikaler Tabulator                                                                                     | \v             |
| U+000C    | Seitenvorschub                      | \<FF>     | Steuerzeichen für einen Seitenumbruch ([Wikipedia](https://en.wikipedia.org/wiki/Page_break#Form_feed)). | \f             |
| U+0020    | Leerzeichen                         | \<SP>     | Normales Leerzeichen                                                                                     |                |
| U+00A0    | Geschütztes Leerzeichen             | \<NBSP>   | Normales Leerzeichen, an dem jedoch kein Zeilenumbruch erfolgen darf                                     |                |
| U+FEFF    | Geschütztes Leerzeichen ohne Breite | \<ZWNBSP> | Wenn der BOM-Marker nicht am Anfang eines Skripts steht, ist er ein normales Leerzeichen.                |                |
| Weitere   | Andere Unicode-Leerzeichen          | \<USP>    | [Zeichen der allgemeinen Kategorie „Space_Separator“][space separator set]                               |                |

[space separator set]: https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D

> [!NOTE]
> Von den [Zeichen mit der Eigenschaft „White_Space“, die nicht zur allgemeinen Kategorie „Space_Separator“ gehören](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BWhite_Space%7D%26%5CP%7BGeneral_Category%3DSpace_Separator%7D), werden U+0009, U+000B und U+000C in JavaScript dennoch als Leerzeichen behandelt. U+0085 NEXT LINE hat keine besondere Bedeutung; die übrigen bilden die Menge der [Zeilenendezeichen](#zeilenendezeichen).

> [!NOTE]
> Änderungen am Unicode-Standard, den die JavaScript-Engine verwendet, können das Verhalten von Programmen beeinflussen. Beispielsweise wurde in ES2016 die als Referenz verwendete Unicode-Version von 5.1 auf 8.0.0 aktualisiert. Dadurch wechselte U+180E MONGOLIAN VOWEL SEPARATOR von der Kategorie „Space_Separator“ in die Kategorie „Format (Cf)“ und galt nicht mehr als Leerzeichen. Infolgedessen änderte sich das Ergebnis von [`"\u180E".trim().length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim) von `0` auf `1`.

## Zeilenendezeichen

Neben [Leerzeichen](#leerzeichen) verbessern auch Zeilenendezeichen die Lesbarkeit des Quelltextes. In einigen Fällen können sie jedoch die Ausführung von JavaScript-Code beeinflussen, da sie an bestimmten Stellen nicht zulässig sind. Zeilenendezeichen beeinflussen außerdem die [automatische Semikolon-Einfügung](#automatische_semikolon-einfügung).

Außerhalb der lexikalischen Grammatik werden Leerzeichen und Zeilenendezeichen häufig zusammengefasst. Beispielsweise entfernt {{jsxref("String.prototype.trim()")}} sämtliche Leerzeichen und Zeilenendezeichen am Anfang und Ende einer Zeichenfolge. Die [Zeichenklassen-Escape-Sequenz](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) `\s` in regulären Ausdrücken stimmt mit allen Leerzeichen und Zeilenendezeichen überein.

In ECMAScript werden nur die folgenden Unicode-Codepunkte als Zeilenendezeichen behandelt. Andere Zeichen für Zeilenumbrüche gelten als Leerzeichen, beispielsweise Line Tabulation (VT, U+000B).

| Codepunkt | Name                | Abkürzung | Beschreibung                                                        | Escape-Sequenz |
| --------- | ------------------- | --------- | ------------------------------------------------------------------- | -------------- |
| U+000A    | Line Feed           | \<LF>     | Zeichen für eine neue Zeile auf UNIX-Systemen.                      | \n             |
| U+000D    | Carriage Return     | \<CR>     | Zeichen für eine neue Zeile auf Commodore- und frühen Mac-Systemen. | \r             |
| U+2028    | Line Separator      | \<LS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline)                  |                |
| U+2029    | Paragraph Separator | \<PS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline)                  |                |

## Kommentare

Kommentare dienen dazu, JavaScript-Code mit Hinweisen, Anmerkungen, Vorschlägen oder Warnungen zu versehen. Das kann den Code leichter lesbar und verständlich machen. Kommentare können außerdem Code deaktivieren, sodass er nicht ausgeführt wird. Dies kann bei der Fehlersuche hilfreich sein.

In JavaScript gibt es seit Langem zwei Möglichkeiten, Kommentare in Code einzufügen: Zeilenkommentare und Blockkommentare. Hinzu kommt eine spezielle Syntax für Hashbang-Kommentare.

### Zeilenkommentare

Die erste Möglichkeit ist der Kommentar mit `//`. Dadurch wird der gesamte darauf folgende Text derselben Zeile zum Kommentar. Zum Beispiel:

```js
function comment() {
  // This is a one line JavaScript comment
  console.log("Hello world!");
}
comment();
```

### Blockkommentare

Die zweite Möglichkeit ist die wesentlich flexiblere Schreibweise `/* */`.

Sie können sie beispielsweise in einer einzelnen Zeile verwenden:

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

Auf Wunsch können Sie einen solchen Kommentar auch mitten in einer Zeile verwenden. Da dies den Code schwerer lesbar machen kann, sollten Sie dabei vorsichtig sein:

```js
function comment(x) {
  console.log("Hello " + x /* insert the value of x */ + " !");
}
comment("world");
```

Sie können auch Code deaktivieren, indem Sie ihn in einen Kommentar einschließen, sodass er nicht ausgeführt wird:

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

In diesem Fall wird der Aufruf von `console.log()` nie ausgeführt, da er sich innerhalb eines Kommentars befindet. Auf diese Weise lassen sich beliebig viele Codezeilen deaktivieren.

Blockkommentare, die mindestens ein Zeilenendezeichen enthalten, verhalten sich bei der [automatischen Semikolon-Einfügung](#automatische_semikolon-einfügung) wie [Zeilenendezeichen](#zeilenendezeichen).

### Hashbang-Kommentare

Es gibt eine spezielle dritte Kommentarsyntax: den **Hashbang-Kommentar**. Ein Hashbang-Kommentar verhält sich genau wie ein einzeiliger Kommentar mit `//`, beginnt jedoch mit `#!` und ist **nur ganz am Anfang eines Skripts oder Moduls gültig**. Beachten Sie außerdem, dass vor `#!` keinerlei Leerzeichen stehen dürfen. Der Kommentar umfasst alle Zeichen nach `#!` bis zum Ende der ersten Zeile. Es ist nur ein solcher Kommentar zulässig.

Hashbang-Kommentare in JavaScript ähneln den [Shebangs unter Unix](<https://en.wikipedia.org/wiki/Shebang_(Unix)>), die den Pfad zu einem bestimmten JavaScript-Interpreter angeben, mit dem das Skript ausgeführt werden soll. Bevor Hashbang-Kommentare standardisiert wurden, waren sie in Nicht-Browser-Umgebungen wie Node.js bereits de facto implementiert. Dort wurden sie aus dem Quelltext entfernt, bevor dieser an die Engine übergeben wurde. Ein Beispiel:

```js
#!/usr/bin/env node

console.log("Hello world");
```

Der JavaScript-Interpreter behandelt dies als normalen Kommentar. Eine semantische Bedeutung hat er nur für die Shell, wenn das Skript direkt in einer Shell ausgeführt wird.

> [!WARNING]
> Wenn Skripte direkt in einer Shell-Umgebung ausführbar sein sollen, kodieren Sie sie als UTF-8 ohne [BOM](https://en.wikipedia.org/wiki/Byte_order_mark). Ein BOM verursacht bei Code, der im Browser ausgeführt wird, zwar keine Probleme – er wird bei der UTF-8-Dekodierung entfernt, bevor der Quelltext analysiert wird –, eine Unix-/Linux-Shell erkennt jedoch den Hashbang nicht, wenn ihm ein BOM-Zeichen vorangestellt ist.

Verwenden Sie die Kommentarschreibweise `#!` ausschließlich, um einen JavaScript-Interpreter anzugeben. In allen anderen Fällen verwenden Sie einen Kommentar mit `//` oder einen mehrzeiligen Kommentar.

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

In JavaScript bestehen Bezeichner üblicherweise aus alphanumerischen Zeichen, Unterstrichen (`_`) und Dollarzeichen (`$`). Sie dürfen nicht mit einer Zahl beginnen. JavaScript-Bezeichner sind jedoch nicht auf {{Glossary("ASCII", "ASCII")}} beschränkt: Auch viele Unicode-Codepunkte sind zulässig. Genauer gilt:

- Das erste Zeichen kann ein beliebiges Zeichen der Kategorie [ID_Start](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Start%7D) sowie `_` oder `$` sein.
- Nach dem ersten Zeichen können Sie beliebige Zeichen der Kategorie [ID_Continue](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Continue%7D) verwenden. Dazu gehören U+200C (ZWNJ) und U+200D (ZWJ).

> [!NOTE]
> Wenn Sie aus irgendeinem Grund JavaScript-Quelltext selbst parsen müssen, gehen Sie nicht davon aus, dass alle Bezeichner dem Muster `/[A-Za-z_$][\w$]*/` folgen, also ausschließlich ASCII-Zeichen enthalten. Der Bereich zulässiger Bezeichner lässt sich mit dem regulären Ausdruck `/[$_\p{ID_Start}][$\p{ID_Continue}]*/u` beschreiben (ohne Unicode-Escape-Sequenzen).

Darüber hinaus erlaubt JavaScript in Bezeichnern [Unicode-Escape-Sequenzen](#unicode-escape-sequenzen) der Form `\u0000` oder `\u{000000}`. Sie kodieren denselben Zeichenfolgenwert wie die entsprechenden Unicode-Zeichen. Beispielsweise sind `你好` und `\u4f60\u597d` derselbe Bezeichner:

```js-nolint
const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello
```

Nicht an jeder Stelle ist die gesamte Bandbreite an Bezeichnern zulässig. Bestimmte Syntaxformen, etwa Funktionsdeklarationen, Funktionsausdrücke und Variablendeklarationen, erfordern Bezeichnernamen, die keine [reservierten Wörter](#reservierte_wörter) sind.

```js-nolint example-bad
function import() {} // Illegal: import is a reserved word.
```

Insbesondere bei privaten Elementen und Objekteigenschaften sind reservierte Wörter hingegen zulässig.

```js
const obj = { import: "value" }; // Legal despite `import` being reserved
class C {
  #import = "value";
}
```

## Schlüsselwörter

_Schlüsselwörter_ sind Tokens, die wie Bezeichner aussehen, in JavaScript aber eine besondere Bedeutung haben. Beispielsweise kennzeichnet das Schlüsselwort [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) vor einer Funktionsdeklaration die Funktion als asynchron.

Einige Schlüsselwörter sind _reserviert_. Das bedeutet, dass sie nicht als Bezeichner für Variablendeklarationen, Funktionsdeklarationen usw. verwendet werden dürfen. Sie werden häufig als _reservierte Wörter_ bezeichnet. Eine [Liste dieser reservierten Wörter](#reservierte_wörter) finden Sie weiter unten. Nicht alle Schlüsselwörter sind reserviert: Beispielsweise kann `async` überall als Bezeichner verwendet werden. Manche Schlüsselwörter sind nur _kontextabhängig reserviert_: `await` ist beispielsweise nur im Rumpf einer asynchronen Funktion reserviert, während `let` nur in Code im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) oder in `const`- und `let`-Deklarationen reserviert ist.

Bezeichner werden stets anhand ihres _Zeichenfolgenwerts_ verglichen. Escape-Sequenzen werden daher interpretiert. Das folgende Beispiel ist deshalb ebenfalls ein Syntaxfehler:

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

Die folgenden Wörter sind in der ECMAScript-Spezifikation als künftige Schlüsselwörter reserviert. Derzeit haben sie keine besondere Funktion, könnten sie aber später erhalten. Daher können sie nicht als Bezeichner verwendet werden.

Dieses Wort ist immer reserviert:

- `enum`

Die folgenden Wörter sind nur in Code im Strict Mode reserviert:

- `implements`
- `interface`
- `package`
- `private`
- `protected`
- `public`

#### Für die Zukunft reservierte Wörter in älteren Standards

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

Einige Bezeichner haben in bestimmten Kontexten eine besondere Bedeutung, ohne in irgendeiner Form reservierte Wörter zu sein. Dazu gehören:

- {{jsxref("Functions/arguments", "arguments")}} (kein Schlüsselwort, darf aber im Strict Mode nicht als Bezeichner deklariert werden)
- `as` ([`import * as ns from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import))
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)
- {{jsxref("Global_Objects/eval", "eval")}} (kein Schlüsselwort, darf aber im Strict Mode nicht als Bezeichner deklariert werden)
- `from` ([`import x from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import))
- {{jsxref("Functions/get", "get")}}
- [`of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- {{jsxref("Functions/set", "set")}}

## Literale

> [!NOTE]
> Dieser Abschnitt behandelt Literale, die atomare Tokens sind. [Objektliterale](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Array-Literale](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation) sind [Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators), die aus einer Folge von Tokens bestehen.

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

Dezimalliterale können mit einer Null (`0`) beginnen, auf die eine weitere Dezimalziffer folgt. Wenn jedoch alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies gilt als veraltete Syntax. Zahlenliterale mit vorangestellter `0` verursachen im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) einen Syntaxfehler, unabhängig davon, ob sie als oktal oder dezimal interpretiert werden. Verwenden Sie stattdessen das Präfix `0o`.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

##### Exponentialschreibweise

Ein Dezimalliteral in Exponentialschreibweise hat das Format `beN`. Dabei ist `b` die Basiszahl (eine Ganzzahl oder Gleitkommazahl), gefolgt von `E` oder `e` als Trennzeichen beziehungsweise _Exponentkennzeichen_. `N` ist der _Exponent_, also eine vorzeichenbehaftete Ganzzahl.

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

Die Binärschreibweise verwendet eine führende Null, gefolgt vom lateinischen Buchstaben „B“ in Klein- oder Großschreibung (`0b` oder `0B`). Nach dem Präfix sind nur die Ziffern `0` und `1` zulässig.

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### Oktal

Die Oktalschreibweise verwendet eine führende Null, gefolgt vom lateinischen Buchstaben „O“ in Klein- oder Großschreibung (`0o` oder `0O`). Nach dem Präfix müssen die Ziffern im Bereich `0`–`7` liegen.

```js-nolint
0O755 // 493
0o644 // 420
```

#### Hexadezimal

Die Hexadezimalschreibweise verwendet eine führende Null, gefolgt vom lateinischen Buchstaben „X“ in Klein- oder Großschreibung (`0x` oder `0X`). Nach dem Präfix müssen die Zeichen in den Bereichen `0`–`9`, `A`–`F` oder `a`–`f` liegen.

```js-nolint
0xFFFFFFFFFFFFF // 4503599627370495
0xabcdef123456  // 188900967593046
0XA             // 10
```

#### BigInt-Literal

Der Typ [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type) ist ein numerischer primitiver Typ in JavaScript, der Ganzzahlen beliebiger Genauigkeit darstellen kann. BigInt-Literale entstehen, indem an eine Ganzzahl ein `n` angehängt wird.

```js-nolint
123456789123456789n     // 123456789123456789
0o777777777777n         // 68719476735
0x123456789ABCDEFn      // 81985529216486895
0b11101001010101010101n // 955733
```

Dezimale BigInt-Literale dürfen keine führenden Nullen enthalten, um Verwechslungen mit der veralteten Schreibweise für Oktalliterale zu vermeiden.

```js-nolint example-bad
0755n; // SyntaxError: invalid BigInt syntax
```

Verwenden Sie für oktale `BigInt`-Zahlen immer eine Null, gefolgt vom Buchstaben „o“ in Groß- oder Kleinschreibung:

```js example-good
0o755n;
```

Weitere Informationen zu `BigInt` finden Sie unter [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type).

#### Trennzeichen in Zahlen

Um numerische Literale besser lesbar zu machen, können Unterstriche (`_`, `U+005F`) als Trennzeichen verwendet werden:

```js-nolint
1_000_000_000_000
1_050.95
0b1010_0001_1000_0101
0o2_2_5_6
0xA0_B0_C0
1_000_000_000_000_000_000_000n
```

Beachten Sie dabei die folgenden Einschränkungen:

```js-nolint example-bad
// More than one underscore in a row is not allowed
100__000; // SyntaxError

// Not allowed at the end of numeric literals
100_; // SyntaxError

// Can not be used after leading 0
0_1; // SyntaxError
```

### Zeichenfolgenliterale

Ein [Zeichenfolgenliteral](/de/docs/Web/JavaScript/Guide/Data_structures#string_type) besteht aus null oder mehr Unicode-Codepunkten, die von einfachen oder doppelten Anführungszeichen eingeschlossen sind. Unicode-Codepunkte können auch durch Escape-Sequenzen dargestellt werden. Mit Ausnahme der folgenden Codepunkte können alle Codepunkte direkt in einem Zeichenfolgenliteral vorkommen:

- U+005C \ (umgekehrter Schrägstrich)
- U+000D \<CR>
- U+000A \<LF>
- Das Anführungszeichen, mit dem das Zeichenfolgenliteral beginnt

Jeder Codepunkt kann in Form einer Escape-Sequenz auftreten. Zeichenfolgenliterale werden zu ECMAScript-String-Werten ausgewertet. Bei der Erzeugung dieser String-Werte werden Unicode-Codepunkte in UTF-16 kodiert.

```js-nolint
'foo'
"bar"
```

Die folgenden Unterabschnitte beschreiben die verschiedenen Escape-Sequenzen, die in Zeichenfolgenliteralen verfügbar sind (`\` gefolgt von einem oder mehreren Zeichen). Jede hier nicht aufgeführte Escape-Sequenz wird zu einem „Identity Escape“, das den Codepunkt selbst ergibt. Beispielsweise ist `\z` gleichbedeutend mit `z`. Eine veraltete Syntax für oktale Escape-Sequenzen wird auf der Seite [Veraltete und überholte Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) beschrieben. Viele dieser Escape-Sequenzen sind auch in regulären Ausdrücken gültig. Siehe [Zeichen-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

#### Escape-Sequenzen

Sonderzeichen können mit Escape-Sequenzen kodiert werden:

| Escape-Sequenz                                                | Unicode-Codepunkt                                   |
| ------------------------------------------------------------- | --------------------------------------------------- |
| `\0`                                                          | Nullzeichen (U+0000 NULL)                           |
| `\'`                                                          | einfaches Anführungszeichen (U+0027 APOSTROPHE)     |
| `\"`                                                          | doppeltes Anführungszeichen (U+0022 QUOTATION MARK) |
| `\\`                                                          | umgekehrter Schrägstrich (U+005C REVERSE SOLIDUS)   |
| `\n`                                                          | Zeilenumbruch (U+000A LINE FEED; LF)                |
| `\r`                                                          | Wagenrücklauf (U+000D CARRIAGE RETURN; CR)          |
| `\v`                                                          | vertikaler Tabulator (U+000B LINE TABULATION)       |
| `\t`                                                          | Tabulator (U+0009 CHARACTER TABULATION)             |
| `\b`                                                          | Rückschritt (U+0008 BACKSPACE)                      |
| `\f`                                                          | Seitenvorschub (U+000C FORM FEED)                   |
| `\` gefolgt von einem [Zeilenendezeichen](#zeilenendezeichen) | leere Zeichenfolge                                  |

Die letzte Escape-Sequenz – `\` gefolgt von einem Zeilenendezeichen – ist nützlich, um ein Zeichenfolgenliteral über mehrere Zeilen zu verteilen, ohne seine Bedeutung zu ändern.

```js
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Achten Sie darauf, dass nach dem umgekehrten Schrägstrich weder ein Leerzeichen noch ein anderes Zeichen steht, mit Ausnahme des Zeilenumbruchs. Andernfalls funktioniert dies nicht. Wenn die nächste Zeile eingerückt ist, sind die zusätzlichen Leerzeichen auch im Wert der Zeichenfolge enthalten.

Sie können auch den Operator [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition) verwenden, um mehrere Zeichenfolgen aneinanderzuhängen:

```js
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Beide oben genannten Methoden ergeben identische Zeichenfolgen.

#### Hexadezimale Escape-Sequenzen

Hexadezimale Escape-Sequenzen bestehen aus `\x`, gefolgt von genau zwei hexadezimalen Ziffern. Diese stellen eine Codeeinheit oder einen Codepunkt im Bereich von 0x0000 bis 0x00FF dar.

```js
"\xA9"; // "©"
```

#### Unicode-Escape-Sequenzen

Eine Unicode-Escape-Sequenz besteht aus `\u`, gefolgt von genau vier hexadezimalen Ziffern. Sie stellt eine Codeeinheit in der UTF-16-Kodierung dar. Für Codepunkte von U+0000 bis U+FFFF entspricht die Codeeinheit dem Codepunkt. Codepunkte von U+10000 bis U+10FFFF benötigen zwei Escape-Sequenzen für die beiden Codeeinheiten (ein Surrogatpaar), mit denen das Zeichen kodiert wird. Das Surrogatpaar ist nicht mit dem Codepunkt identisch.

Siehe auch {{jsxref("String.fromCharCode()")}} und {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Escape-Sequenzen für Unicode-Codepunkte

Eine Escape-Sequenz für einen Unicode-Codepunkt besteht aus `\u{`, gefolgt von einem hexadezimal angegebenen Codepunkt und `}`. Der Wert der hexadezimalen Ziffern muss einschließlich der Grenzen zwischen 0 und 0x10FFFF liegen. Codepunkte im Bereich U+10000 bis U+10FFFF müssen nicht als Surrogatpaar dargestellt werden.

Siehe auch {{jsxref("String.fromCodePoint()")}} und {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// the same character represented as a surrogate pair
"\uD87E\uDC04";
```

### Literale für reguläre Ausdrücke

Literale für reguläre Ausdrücke werden von zwei Schrägstrichen (`/`) eingeschlossen. Der Lexer liest alle Zeichen bis zum nächsten nicht mit einer Escape-Sequenz versehenen Schrägstrich oder bis zum Zeilenende, sofern der Schrägstrich nicht innerhalb einer Zeichenklasse (`[]`) steht. Nach dem schließenden Schrägstrich können bestimmte Zeichen stehen, nämlich solche, die [Bestandteil von Bezeichnern](#bezeichner) sein können. Sie kennzeichnen Flags.

Die lexikalische Grammatik ist sehr großzügig: Nicht jedes Literal für einen regulären Ausdruck, das als einzelnes Token erkannt wird, ist ein gültiger regulärer Ausdruck.

Weitere Informationen finden Sie unter {{jsxref("RegExp")}}.

```js
/ab+c/g;
/[/]/;
```

Ein Literal für einen regulären Ausdruck kann nicht mit zwei Schrägstrichen (`//`) beginnen, da dies einen Zeilenkommentar einleiten würde. Verwenden Sie `/(?:)/`, um einen leeren regulären Ausdruck anzugeben.

### Template-Literale

Ein Template-Literal besteht aus mehreren Tokens: `` `xxx${ `` (Template-Anfang), `}xxx${` (Template-Mittelteil) und `` }xxx` `` (Template-Ende) sind jeweils einzelne Tokens. Dazwischen können beliebige Ausdrücke stehen.

Weitere Informationen finden Sie unter [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals).

```js
`string text`;

`string text line 1
 string text line 2`;

`string text ${expression} string text`;

tag`string text ${expression} string text`;
```

## Automatische Semikolon-Einfügung

Die Syntaxdefinitionen einiger [JavaScript-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements) erfordern ein Semikolon (`;`) am Ende. Dazu gehören:

- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`using`](/de/docs/Web/JavaScript/Reference/Statements/using), [`await using`](/de/docs/Web/JavaScript/Reference/Statements/await_using)
- [Ausdrucksanweisungen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement)
- [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue), [`break`](/de/docs/Web/JavaScript/Reference/Statements/break), [`return`](/de/docs/Web/JavaScript/Reference/Statements/return), [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)
- Deklarationen von Klassenfeldern ([öffentliche](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [private](/de/docs/Web/JavaScript/Reference/Classes/Private_elements))
- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import), [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)

Damit die Sprache leichter zugänglich und bequemer zu verwenden ist, kann JavaScript beim Verarbeiten des Tokenstroms automatisch Semikolons einfügen. So können einige ungültige Tokenfolgen zu gültiger Syntax „korrigiert“ werden. Dieser Schritt erfolgt, nachdem der Programmtext gemäß der lexikalischen Grammatik in Tokens zerlegt wurde. In drei Fällen werden Semikolons automatisch eingefügt:

1\. Wenn ein nach der Grammatik unzulässiges Token auftritt und es vom vorherigen Token durch mindestens ein [Zeilenendezeichen](#zeilenendezeichen) getrennt ist (einschließlich eines Blockkommentars mit mindestens einem Zeilenendezeichen), oder wenn das Token `}` ist, wird vor dem Token ein Semikolon eingefügt.

```js-nolint
{ 1
2 } 3

// is transformed by ASI into:

{ 1
;2 ;} 3;

// Which is valid grammar encoding three statements,
// each consisting of a number literal
```

Auch die schließende Klammer `)` von [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) wird durch diese Regel als Sonderfall berücksichtigt.

```js-nolint
do {
  // …
} while (condition) /* ; */ // ASI here
const a = 1
```

Ein Semikolon wird jedoch nicht eingefügt, wenn es dadurch zum Trennzeichen im Kopf einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Anweisung würde.

```js-nolint example-bad
for (
  let a = 1 // No ASI here
  a < 10 // No ASI here
  a++
) {}
```

Semikolons werden auch niemals als [leere Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Empty) eingefügt. Würde beispielsweise im folgenden Code nach `)` ein Semikolon eingefügt, wäre der Code gültig: Der Rumpf der `if`-Anweisung wäre dann eine leere Anweisung und die `const`-Deklaration eine separate Anweisung. Da automatisch eingefügte Semikolons aber keine leeren Anweisungen bilden dürfen, würde eine [Deklaration](/de/docs/Web/JavaScript/Reference/Statements#what_are_statements_declarations_and_expressions) zum Rumpf der `if`-Anweisung werden. Das ist ungültig.

```js-nolint example-bad
if (Math.random() > 0.5)
const x = 1 // SyntaxError: Unexpected token 'const'
```

2\. Wenn das Ende des Token-Eingabestroms erreicht wird und der Parser den Eingabestrom nicht als vollständiges Programm parsen kann, wird am Ende ein Semikolon eingefügt.

```js-nolint
const a = 1 /* ; */ // ASI here
```

Diese Regel ergänzt die vorherige, insbesondere für den Fall, dass kein „unzulässiges Token“ vorliegt, sondern lediglich das Ende des Eingabestroms erreicht wurde.

3\. Wenn die Grammatik an einer Stelle Zeilenendezeichen verbietet, dort aber eines vorkommt, wird ein Semikolon eingefügt. Zu diesen Stellen gehören:

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

Hier wird [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment) nicht als Postfix-Operator behandelt, der auf die Variable `b` angewendet wird, da zwischen `b` und `++` ein Zeilenendezeichen steht.

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

Beachten Sie, dass die automatische Semikolon-Einfügung (ASI) nur ausgelöst wird, wenn ein Zeilenumbruch Tokens trennt, die andernfalls ungültige Syntax ergeben würden. Wenn das nächste Token als Teil einer gültigen Struktur geparst werden kann, wird kein Semikolon eingefügt. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()

const b = 1
[1, 2, 3].forEach(console.log)
```

Da `()` als Funktionsaufruf aufgefasst werden kann, löst es normalerweise keine automatische Semikolon-Einfügung aus. Ebenso kann `[]` ein Eigenschaftszugriff sein. Der obige Code entspricht:

```js-nolint example-bad
const a = 1(1).toString();

const b = 1[1, 2, 3].forEach(console.log);
```

Dies ist tatsächlich gültige Syntax. `1[1, 2, 3]` ist ein [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) mit einem durch [Kommas](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) verbundenen Ausdruck. Beim Ausführen des Codes erhalten Sie daher Fehler wie „1 is not a function“ und „Cannot read properties of undefined (reading 'forEach')“.

Innerhalb von Klassen können auch Klassenfelder und Generatormethoden eine Stolperfalle sein.

```js-nolint example-bad
class A {
  a = 1
  *gen() {}
}
```

Dies wird wie folgt interpretiert:

```js-nolint example-bad
class A {
  a = 1 * gen() {}
}
```

Daher entsteht bei `{` ein Syntaxfehler.

Wenn Sie einen Stil ohne Semikolons verwenden möchten, helfen Ihnen im Umgang mit ASI die folgenden Faustregeln:

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

- Schreiben Sie Ausdrücke nach `return`, `throw` oder `yield` in dieselbe Zeile wie das Schlüsselwort.

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

- Schreiben Sie ebenso den Label-Bezeichner nach `break` oder `continue` in dieselbe Zeile wie das Schlüsselwort.

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

- Schreiben Sie das `=>` einer Pfeilfunktion in dieselbe Zeile wie das Ende ihrer Parameterliste.

  ```js-nolint example-bad
  const foo = (a, b)
    => a + b
  ```

  ```js-nolint example-good
  const foo = (a, b) =>
    a + b
  ```

- Auf `async` bei asynchronen Funktionen, Methoden usw. darf nicht unmittelbar ein Zeilenendezeichen folgen.

  ```js-nolint example-bad
  async
  function foo() {}
  ```

  ```js-nolint example-good
  async function
  foo() {}
  ```

- Schreiben Sie das Schlüsselwort `using` in `using`- und `await using`-Anweisungen in dieselbe Zeile wie den ersten deklarierten Bezeichner.

  ```js-nolint example-bad
  using
  resource = acquireResource()
  ```

  ```js-nolint example-good
  using resource
    = acquireResource()
  ```

- Wenn eine Zeile mit `(`, `[`, `` ` ``, `+`, `-` oder `/` (wie bei Literalen für reguläre Ausdrücke) beginnt, stellen Sie ihr ein Semikolon voran oder beenden Sie die vorherige Zeile mit einem Semikolon.

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

- Beenden Sie Klassenfelder nach Möglichkeit immer mit einem Semikolon. Zusätzlich zur vorherigen Regel – die auch eine Felddeklaration betrifft, auf die eine [berechnete Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) folgt, da diese mit `[` beginnt – sind Semikolons auch zwischen einer Felddeklaration und einer Generatormethode erforderlich.

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

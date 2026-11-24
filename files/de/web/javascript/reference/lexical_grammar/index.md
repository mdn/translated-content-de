---
title: Lexikalische Grammatik
slug: Web/JavaScript/Reference/Lexical_grammar
l10n:
  sourceCommit: 52efe757952fde32b197b8ae9395f8f2a3bc7a9f
---

Diese Seite beschreibt die lexikalische Grammatik von JavaScript. JavaScript-Quelltext ist zunächst nur eine Folge von Zeichen. Damit der Interpreter ihn verstehen kann, muss der Text _geparst_ und in eine stärker strukturierte Darstellung überführt werden. Der erste Schritt beim Parsen heißt [lexikalische Analyse](https://en.wikipedia.org/wiki/Lexical_analysis): Dabei wird der Text von links nach rechts durchsucht und in eine Folge einzelner, atomarer Eingabeelemente umgewandelt. Einige Eingabeelemente sind für den Interpreter bedeutungslos und werden nach diesem Schritt entfernt – dazu gehören [Leerraum](#leerraum) und [Kommentare](#kommentare). Die übrigen Elemente, darunter [Bezeichner](#bezeichner), [Schlüsselwörter](#schlüsselwörter), [Literale](#literale) und Trennzeichen (hauptsächlich [Operatoren](/de/docs/Web/JavaScript/Reference/Operators)), werden für die weitere Syntaxanalyse verwendet. [Zeilenabschlusszeichen](#zeilenabschlusszeichen) und mehrzeilige Kommentare sind syntaktisch ebenfalls bedeutungslos. Sie steuern jedoch die [automatische Semikoloneinfügung](#automatische_semikoloneinfügung), durch die bestimmte ungültige Tokenfolgen gültig werden.

## Formatierungssteuerzeichen

Formatierungssteuerzeichen haben keine sichtbare Darstellung, dienen aber dazu, die Interpretation des Textes zu steuern.

| Codepunkt | Name                  | Abkürzung | Beschreibung                                                                                                                                                                                                             |
| --------- | --------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| U+200C    | Zero width non-joiner | \<ZWNJ>   | Wird zwischen Zeichen eingefügt, um in bestimmten Sprachen zu verhindern, dass sie zu Ligaturen verbunden werden ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_non-joiner)).                                     |
| U+200D    | Zero width joiner     | \<ZWJ>    | Wird zwischen Zeichen eingefügt, die normalerweise nicht verbunden würden, damit sie in bestimmten Sprachen in ihrer verbundenen Form dargestellt werden ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_joiner)). |
| U+FEFF    | Byte order mark       | \<BOM>    | Wird am Anfang eines Skripts verwendet, um es als Unicode zu kennzeichnen und die Erkennung der Textkodierung und Bytereihenfolge zu ermöglichen ([Wikipedia](https://en.wikipedia.org/wiki/Byte_order_mark)).           |

In JavaScript-Quelltext werden \<ZWNJ> und \<ZWJ> als Bestandteile von [Bezeichnern](#bezeichner) behandelt. \<BOM> wird dagegen als [Leerraum](#leerraum) behandelt; wenn es nicht am Textanfang steht, wird es auch als geschütztes Leerzeichen ohne Breite (\<ZWNBSP>) bezeichnet.

## Leerraum

{{Glossary("Whitespace", "Leerraumzeichen")}} verbessern die Lesbarkeit des Quelltexts und trennen Tokens voneinander. Für die Funktion des Codes sind diese Zeichen normalerweise nicht erforderlich. Häufig werden [Minifizierungswerkzeuge](https://en.wikipedia.org/wiki/Minification_%28programming%29) eingesetzt, um Leerraum zu entfernen und so die zu übertragende Datenmenge zu reduzieren.

| Codepunkt | Name                       | Abkürzung | Beschreibung                                                                                             | Escape-Sequenz |
| --------- | -------------------------- | --------- | -------------------------------------------------------------------------------------------------------- | -------------- |
| U+0009    | Character tabulation       | \<TAB>    | Horizontaler Tabulator                                                                                   | \t             |
| U+000B    | Line tabulation            | \<VT>     | Vertikaler Tabulator                                                                                     | \v             |
| U+000C    | Form feed                  | \<FF>     | Steuerzeichen für einen Seitenumbruch ([Wikipedia](https://en.wikipedia.org/wiki/Page_break#Form_feed)). | \f             |
| U+0020    | Space                      | \<SP>     | Normales Leerzeichen                                                                                     |                |
| U+00A0    | No-break space             | \<NBSP>   | Normales Leerzeichen, an dem jedoch kein Zeilenumbruch erfolgen darf                                     |                |
| U+FEFF    | Zero-width no-break space  | \<ZWNBSP> | Wenn die BOM-Markierung nicht am Anfang eines Skripts steht, ist sie ein normales Leerraumzeichen.       |                |
| Andere    | Andere Unicode-Leerzeichen | \<USP>    | [Zeichen der allgemeinen Kategorie „Space_Separator“][space separator set]                               |                |

[space separator set]: https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D

> [!NOTE]
> Von den [Zeichen mit der Eigenschaft „White_Space“, die nicht zur allgemeinen Kategorie „Space_Separator“ gehören](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BWhite_Space%7D%26%5CP%7BGeneral_Category%3DSpace_Separator%7D), werden U+0009, U+000B und U+000C in JavaScript dennoch als Leerraum behandelt. U+0085 NEXT LINE hat keine besondere Funktion; die übrigen Zeichen bilden die Gruppe der [Zeilenabschlusszeichen](#zeilenabschlusszeichen).

> [!NOTE]
> Änderungen am Unicode-Standard, den die JavaScript-Engine verwendet, können das Verhalten von Programmen beeinflussen. Beispielsweise wurde mit ES2016 der als Referenz verwendete Unicode-Standard von Version 5.1 auf 8.0.0 aktualisiert. Dadurch wurde U+180E MONGOLIAN VOWEL SEPARATOR von der Kategorie „Space_Separator“ in die Kategorie „Format (Cf)“ verschoben und galt nicht mehr als Leerraum. Infolgedessen änderte sich das Ergebnis von [`"\u180E".trim().length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim) von `0` zu `1`.

## Zeilenabschlusszeichen

Neben [Leerraumzeichen](#leerraum) verbessern Zeilenabschlusszeichen die Lesbarkeit des Quelltexts. In einigen Fällen können sie jedoch die Ausführung von JavaScript-Code beeinflussen, da sie an bestimmten Stellen nicht zulässig sind. Zeilenabschlusszeichen wirken sich außerdem auf die [automatische Semikoloneinfügung](#automatische_semikoloneinfügung) aus.

Außerhalb der lexikalischen Grammatik werden Leerraum und Zeilenabschlusszeichen häufig zusammengefasst. Beispielsweise entfernt {{jsxref("String.prototype.trim()")}} sämtlichen Leerraum und alle Zeilenabschlusszeichen am Anfang und Ende eines Strings. Die [Zeichenklassen-Escape-Sequenz](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) `\s` in regulären Ausdrücken erfasst sowohl Leerraum als auch Zeilenabschlusszeichen.

In ECMAScript werden nur die folgenden Unicode-Codepunkte als Zeilenabschlusszeichen behandelt. Andere Zeichen für Zeilenumbrüche gelten als Leerraum, beispielsweise Line Tabulation (VT, U+000B).

| Codepunkt | Name                | Abkürzung | Beschreibung                                                           | Escape-Sequenz |
| --------- | ------------------- | --------- | ---------------------------------------------------------------------- | -------------- |
| U+000A    | Line Feed           | \<LF>     | Zeichen für einen Zeilenumbruch in UNIX-Systemen.                      | \n             |
| U+000D    | Carriage Return     | \<CR>     | Zeichen für einen Zeilenumbruch in Commodore- und frühen Mac-Systemen. | \r             |
| U+2028    | Line Separator      | \<LS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline)                     |                |
| U+2029    | Paragraph Separator | \<PS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline)                     |                |

## Kommentare

Kommentare dienen dazu, JavaScript-Code um Hinweise, Anmerkungen, Vorschläge oder Warnungen zu ergänzen. Das kann den Code leichter lesbar und verständlich machen. Mit Kommentaren lässt sich Code auch deaktivieren, damit er nicht ausgeführt wird – ein nützliches Hilfsmittel beim Debuggen.

JavaScript bietet seit Langem zwei Arten von Kommentaren: Zeilenkommentare und Blockkommentare. Daneben gibt es eine besondere Hashbang-Kommentarsyntax.

### Zeilenkommentare

Die erste Möglichkeit ist ein Kommentar mit `//`. Dadurch wird der gesamte nachfolgende Text in derselben Zeile zum Kommentar. Zum Beispiel:

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

Sie können damit auch mehrzeilige Kommentare schreiben:

```js
function comment() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log("Hello world!");
}
comment();
```

Bei Bedarf können Sie einen Blockkommentar auch mitten in einer Zeile verwenden. Da dies den Code schwerer lesbar machen kann, sollten Sie diese Möglichkeit mit Bedacht einsetzen:

```js
function comment(x) {
  console.log("Hello " + x /* insert the value of x */ + " !");
}
comment("world");
```

Außerdem können Sie Code deaktivieren und seine Ausführung verhindern, indem Sie ihn in einen Kommentar einschließen:

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

In diesem Fall wird `console.log()` nie aufgerufen, da der Aufruf in einem Kommentar steht. Auf diese Weise können beliebig viele Codezeilen deaktiviert werden.

Blockkommentare, die mindestens ein Zeilenabschlusszeichen enthalten, verhalten sich bei der [automatischen Semikoloneinfügung](#automatische_semikoloneinfügung) wie [Zeilenabschlusszeichen](#zeilenabschlusszeichen).

### Hashbang-Kommentare

Als dritte, besondere Kommentarsyntax gibt es den **Hashbang-Kommentar**. Er verhält sich genau wie ein einzeiliger Kommentar mit `//`, beginnt jedoch mit `#!` und **ist nur ganz am Anfang eines Skripts oder Moduls gültig**. Vor `#!` darf sich keinerlei Leerraum befinden. Der Kommentar umfasst alle Zeichen nach `#!` bis zum Ende der ersten Zeile. Pro Skript oder Modul ist nur ein solcher Kommentar zulässig.

Hashbang-Kommentare in JavaScript ähneln den [Shebangs unter Unix](<https://en.wikipedia.org/wiki/Shebang_(Unix)>). Diese geben den Pfad zu einem bestimmten JavaScript-Interpreter an, mit dem Sie das Skript ausführen möchten. Bevor Hashbang-Kommentare standardisiert wurden, waren sie in Umgebungen außerhalb des Browsers wie Node.js bereits de facto implementiert. Dort wurden sie aus dem Quelltext entfernt, bevor dieser an die Engine übergeben wurde. Ein Beispiel:

```js
#!/usr/bin/env node

console.log("Hello world");
```

Der JavaScript-Interpreter behandelt den Hashbang wie einen normalen Kommentar. Eine Bedeutung hat er nur für die Shell, wenn das Skript direkt in einer Shell ausgeführt wird.

> [!WARNING]
> Wenn Skripte direkt in einer Shell-Umgebung ausführbar sein sollen, kodieren Sie sie als UTF-8 ohne [BOM](https://en.wikipedia.org/wiki/Byte_order_mark). Bei Code, der im Browser ausgeführt wird, verursacht eine BOM zwar keine Probleme – sie wird bei der UTF-8-Dekodierung entfernt, bevor der Quelltext analysiert wird. Eine Unix-/Linux-Shell erkennt den Hashbang jedoch nicht, wenn ihm ein BOM-Zeichen vorangestellt ist.

Verwenden Sie die Kommentarschreibweise `#!` ausschließlich zur Angabe eines JavaScript-Interpreters. Verwenden Sie in allen anderen Fällen einen Kommentar mit `//` oder einen mehrzeiligen Kommentar.

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

In JavaScript bestehen Bezeichner häufig aus Buchstaben und Ziffern, Unterstrichen (`_`) und Dollarzeichen (`$`). Sie dürfen nicht mit einer Ziffer beginnen. JavaScript-Bezeichner sind jedoch nicht auf {{Glossary("ASCII", "ASCII")}} beschränkt: Auch viele Unicode-Codepunkte sind zulässig. Genauer gesagt:

- Als erstes Zeichen ist jedes Zeichen der Kategorie [ID_Start](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Start%7D) sowie `_` und `$` zulässig.
- Nach dem ersten Zeichen ist jedes Zeichen der Kategorie [ID_Continue](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Continue%7D) zulässig. Dazu gehören auch U+200C (ZWNJ) und U+200D (ZWJ).

> [!NOTE]
> Falls Sie JavaScript-Quelltext aus irgendeinem Grund selbst parsen müssen, gehen Sie nicht davon aus, dass alle Bezeichner dem Muster `/[A-Za-z_$][\w$]*/` entsprechen, also ausschließlich ASCII-Zeichen enthalten. Der Bereich zulässiger Bezeichner lässt sich mit dem regulären Ausdruck `/[$_\p{ID_Start}][$\p{ID_Continue}]*/u` beschreiben (ohne Unicode-Escape-Sequenzen).

Darüber hinaus erlaubt JavaScript [Unicode-Escape-Sequenzen](#unicode-escape-sequenzen) in Bezeichnern, und zwar in der Form `\u0000` oder `\u{000000}`. Sie kodieren denselben String-Wert wie die entsprechenden Unicode-Zeichen. Beispielsweise sind `你好` und `\u4f60\u597d` dieselben Bezeichner:

```js-nolint
const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello
```

Nicht an jeder Stelle sind alle Bezeichner zulässig. Bestimmte Syntaxformen, etwa Funktionsdeklarationen, Funktionsausdrücke und Variablendeklarationen, erfordern Bezeichnernamen, die keine [reservierten Wörter](#reservierte_wörter) sind.

```js-nolint example-bad
function import() {} // Illegal: import is a reserved word.
```

Insbesondere bei privaten Elementen und Objekteigenschaften sind reservierte Wörter dagegen zulässig.

```js
const obj = { import: "value" }; // Legal despite `import` being reserved
class C {
  #import = "value";
}
```

## Schlüsselwörter

_Schlüsselwörter_ sind Tokens, die wie Bezeichner aussehen, in JavaScript aber eine besondere Bedeutung haben. Beispielsweise zeigt das Schlüsselwort [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) vor einer Funktionsdeklaration an, dass die Funktion asynchron ist.

Einige Schlüsselwörter sind _reserviert_. Das bedeutet, dass sie nicht als Bezeichner für Variablendeklarationen, Funktionsdeklarationen usw. verwendet werden dürfen. Sie werden häufig als _reservierte Wörter_ bezeichnet. [Eine Liste dieser reservierten Wörter](#reservierte_wörter) finden Sie weiter unten. Nicht alle Schlüsselwörter sind reserviert: Beispielsweise kann `async` überall als Bezeichner verwendet werden. Manche Schlüsselwörter sind nur _kontextabhängig reserviert_. So ist `await` nur innerhalb des Rumpfs einer asynchronen Funktion reserviert, während `let` nur in Code im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) oder bei `const`- und `let`-Deklarationen reserviert ist.

Bezeichner werden stets anhand ihres _String-Werts_ verglichen; Escape-Sequenzen werden dabei interpretiert. Daher liegt auch im folgenden Fall ein Syntaxfehler vor:

```js-nolint example-bad
const els\u{65} = 1;
// `els\u{65}` encodes the same identifier as `else`
```

### Reservierte Wörter

Diese Schlüsselwörter dürfen im JavaScript-Quelltext nirgends als Bezeichner für Variablen, Funktionen, Klassen usw. verwendet werden.

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

- {{jsxref("Statements/let", "let")}} (auch bei `const`- und `let`-Deklarationen sowie Klassendeklarationen reserviert)
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- {{jsxref("Operators/yield", "yield")}} (auch im Rumpf von Generatorfunktionen reserviert)

Das folgende Wort ist nur in Modulcode oder im Rumpf asynchroner Funktionen reserviert:

- [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

### Für die Zukunft reservierte Wörter

Die folgenden Wörter sind laut ECMAScript-Spezifikation als künftige Schlüsselwörter reserviert. Derzeit haben sie keine besondere Funktion. Da sich dies künftig ändern könnte, dürfen sie nicht als Bezeichner verwendet werden.

Immer reserviert ist:

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
> In diesem Abschnitt geht es um Literale, die atomare Tokens sind. [Objektliterale](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Array-Literale](/de/docs/Web/JavaScript/Reference/Operators/Array_initializer) sind [Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators), die aus einer Folge von Tokens bestehen.

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

#### Dezimalzahlen

```js-nolint
1234567890
42
```

Dezimale Literale können mit einer Null (`0`) beginnen, auf die eine weitere Dezimalziffer folgt. Wenn jedoch alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Diese Schreibweise gilt als veraltet. Zahlenliterale mit vorangestellter `0` verursachen im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) einen Syntaxfehler – unabhängig davon, ob sie als Oktal- oder Dezimalzahl interpretiert würden. Verwenden Sie stattdessen das Präfix `0o`.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

##### Exponentialschreibweise

Ein dezimales Exponentialliteral hat das Format `beN`: `b` ist eine Basiszahl (Ganz- oder Gleitkommazahl), gefolgt von `E` oder `e` als Trennzeichen beziehungsweise _Exponentenkennzeichen_ und `N` als _Exponent_ – einer vorzeichenbehafteten Ganzzahl.

```js-nolint
0e-5   // 0
0e+5   // 0
5e1    // 50
175e-2 // 1.75
1e3    // 1000
1e-3   // 0.001
1E3    // 1000
```

#### Binärzahlen

Die Schreibweise für Binärzahlen beginnt mit einer Null, gefolgt von einem kleinen oder großen lateinischen „B“ (`0b` oder `0B`). Nach dem Präfix sind nur die Ziffern `0` und `1` zulässig.

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### Oktalzahlen

Die Schreibweise für Oktalzahlen beginnt mit einer Null, gefolgt von einem kleinen oder großen lateinischen „O“ (`0o` oder `0O`). Die Ziffern nach dem Präfix müssen im Bereich von `0` bis `7` liegen.

```js-nolint
0O755 // 493
0o644 // 420
```

#### Hexadezimalzahlen

Die Schreibweise für Hexadezimalzahlen beginnt mit einer Null, gefolgt von einem kleinen oder großen lateinischen „X“ (`0x` oder `0X`). Nach dem Präfix sind die Ziffern und Buchstaben `0`–`9`, `A`–`F` und `a`–`f` zulässig.

```js-nolint
0xFFFFFFFFFFFFF // 4503599627370495
0xabcdef123456  // 188900967593046
0XA             // 10
```

#### BigInt-Literal

Der Typ [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type) ist ein numerischer primitiver Typ in JavaScript, der Ganzzahlen mit beliebiger Genauigkeit darstellen kann. Ein BigInt-Literal entsteht, indem an eine Ganzzahl `n` angehängt wird.

```js-nolint
123456789123456789n     // 123456789123456789
0o777777777777n         // 68719476735
0x123456789ABCDEFn      // 81985529216486895
0b11101001010101010101n // 955733
```

Dezimale BigInt-Literale dürfen keine führenden Nullen enthalten, damit sie nicht mit veralteten Oktalliteralen verwechselt werden.

```js-nolint example-bad
0755n; // SyntaxError: invalid BigInt syntax
```

Verwenden Sie für oktale `BigInt`-Zahlen immer eine Null, gefolgt vom Buchstaben „o“ in Groß- oder Kleinschreibung:

```js example-good
0o755n;
```

Weitere Informationen zu `BigInt` finden Sie unter [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type).

#### Numerische Trennzeichen

Zur besseren Lesbarkeit numerischer Literale können Unterstriche (`_`, `U+005F`) als Trennzeichen verwendet werden:

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

### String-Literale

Ein [String](/de/docs/Web/JavaScript/Guide/Data_structures#string_type)-Literal besteht aus null oder mehr Unicode-Codepunkten, die in einfache oder doppelte Anführungszeichen eingeschlossen sind. Unicode-Codepunkte können auch durch Escape-Sequenzen dargestellt werden. Mit Ausnahme der folgenden Codepunkte können alle Codepunkte direkt in einem String-Literal stehen:

- U+005C \ (Backslash)
- U+000D \<CR>
- U+000A \<LF>
- Das Anführungszeichen derselben Art, mit dem das String-Literal beginnt

Jeder Codepunkt kann als Escape-Sequenz dargestellt werden. String-Literale werden zu ECMAScript-String-Werten ausgewertet. Bei der Erzeugung dieser String-Werte werden Unicode-Codepunkte in UTF-16 kodiert.

```js-nolint
'foo'
"bar"
```

Die folgenden Unterabschnitte beschreiben verschiedene Escape-Sequenzen, die in String-Literalen verfügbar sind (`\` gefolgt von einem oder mehreren Zeichen). Jede hier nicht aufgeführte Escape-Sequenz wird zu einem „Identity Escape“ und ergibt den Codepunkt selbst. Beispielsweise ist `\z` dasselbe wie `z`. Eine veraltete Schreibweise für oktale Escape-Sequenzen wird auf der Seite [Veraltete und überholte Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) beschrieben. Viele dieser Escape-Sequenzen sind auch in regulären Ausdrücken gültig – siehe [Zeichen-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

#### Escape-Sequenzen

Sonderzeichen lassen sich mit Escape-Sequenzen kodieren:

| Escape-Sequenz                                                          | Unicode-Codepunkt                                   |
| ----------------------------------------------------------------------- | --------------------------------------------------- |
| `\0`                                                                    | Nullzeichen (U+0000 NULL)                           |
| `\'`                                                                    | Einfaches Anführungszeichen (U+0027 APOSTROPHE)     |
| `\"`                                                                    | Doppeltes Anführungszeichen (U+0022 QUOTATION MARK) |
| `\\`                                                                    | Backslash (U+005C REVERSE SOLIDUS)                  |
| `\n`                                                                    | Zeilenumbruch (U+000A LINE FEED; LF)                |
| `\r`                                                                    | Wagenrücklauf (U+000D CARRIAGE RETURN; CR)          |
| `\v`                                                                    | Vertikaler Tabulator (U+000B LINE TABULATION)       |
| `\t`                                                                    | Tabulator (U+0009 CHARACTER TABULATION)             |
| `\b`                                                                    | Rückschritt (U+0008 BACKSPACE)                      |
| `\f`                                                                    | Seitenvorschub (U+000C FORM FEED)                   |
| `\` gefolgt von einem [Zeilenabschlusszeichen](#zeilenabschlusszeichen) | Leerer String                                       |

Die letzte Escape-Sequenz – `\` gefolgt von einem Zeilenabschlusszeichen – ist nützlich, um ein String-Literal auf mehrere Zeilen zu verteilen, ohne seine Bedeutung zu ändern.

```js
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Achten Sie darauf, dass nach dem Backslash kein Leerzeichen oder anderes Zeichen außer dem Zeilenumbruch steht. Andernfalls funktioniert dies nicht. Wenn die nächste Zeile eingerückt ist, gehören die zusätzlichen Leerzeichen ebenfalls zum Wert des Strings.

Sie können auch den Operator [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition) verwenden, um mehrere Strings aneinanderzuhängen:

```js
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Beide oben genannten Methoden ergeben identische Strings.

#### Hexadezimale Escape-Sequenzen

Hexadezimale Escape-Sequenzen bestehen aus `\x` gefolgt von genau zwei hexadezimalen Ziffern. Diese stellen eine Codeeinheit oder einen Codepunkt im Bereich von 0x0000 bis 0x00FF dar.

```js
"\xA9"; // "©"
```

#### Unicode-Escape-Sequenzen

Eine Unicode-Escape-Sequenz besteht aus `\u` gefolgt von genau vier hexadezimalen Ziffern. Sie stellt eine Codeeinheit der UTF-16-Kodierung dar. Bei Codepunkten von U+0000 bis U+FFFF entspricht die Codeeinheit dem Codepunkt. Für Codepunkte von U+10000 bis U+10FFFF sind zwei Escape-Sequenzen erforderlich. Sie stellen die beiden Codeeinheiten dar – ein Surrogatpaar –, mit denen das Zeichen kodiert wird. Das Surrogatpaar ist nicht mit dem Codepunkt gleichzusetzen.

Siehe auch {{jsxref("String.fromCharCode()")}} und {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Unicode-Codepunkt-Escape-Sequenzen

Eine Unicode-Codepunkt-Escape-Sequenz besteht aus `\u{`, einem hexadezimal angegebenen Codepunkt und `}`. Der Wert der hexadezimalen Ziffern muss einschließlich der Grenzen zwischen 0 und 0x10FFFF liegen. Codepunkte im Bereich U+10000 bis U+10FFFF müssen dabei nicht als Surrogatpaar dargestellt werden.

Siehe auch {{jsxref("String.fromCodePoint()")}} und {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// the same character represented as a surrogate pair
"\uD87E\uDC04";
```

### Literale regulärer Ausdrücke

Literale regulärer Ausdrücke werden von zwei Schrägstrichen (`/`) eingeschlossen. Der Lexer liest alle Zeichen bis zum nächsten nicht maskierten Schrägstrich oder bis zum Zeilenende ein, es sei denn, der Schrägstrich steht innerhalb einer Zeichenklasse (`[]`). Nach dem schließenden Schrägstrich können bestimmte Zeichen stehen – insbesondere solche, die als [Bestandteile von Bezeichnern](#bezeichner) zulässig sind. Sie kennzeichnen Flags.

Die lexikalische Grammatik ist hier sehr großzügig: Nicht jedes Literal eines regulären Ausdrucks, das als einzelnes Token erkannt wird, ist auch ein gültiger regulärer Ausdruck.

Weitere Informationen finden Sie unter {{jsxref("RegExp")}}.

```js
/ab+c/g;
/[/]/;
```

Ein Literal eines regulären Ausdrucks kann nicht mit zwei Schrägstrichen (`//`) beginnen, da dies ein Zeilenkommentar wäre. Verwenden Sie `/(?:)/`, um einen leeren regulären Ausdruck anzugeben.

### Template-Literale

Ein Template-Literal besteht aus mehreren Tokens: `` `xxx${ `` (Template-Anfang), `}xxx${` (Template-Mittelteil) und `` }xxx` `` (Template-Ende) sind jeweils einzelne Tokens. Zwischen ihnen können beliebige Ausdrücke stehen.

Weitere Informationen finden Sie unter [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals).

```js
`string text`;

`string text line 1
 string text line 2`;

`string text ${expression} string text`;

tag`string text ${expression} string text`;
```

## Automatische Semikoloneinfügung

Die Syntaxdefinitionen einiger [JavaScript-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements) verlangen ein Semikolon (`;`) am Ende. Dazu gehören:

- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`using`](/de/docs/Web/JavaScript/Reference/Statements/using), [`await using`](/de/docs/Web/JavaScript/Reference/Statements/await_using)
- [Ausdrucksanweisungen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement)
- [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue), [`break`](/de/docs/Web/JavaScript/Reference/Statements/break), [`return`](/de/docs/Web/JavaScript/Reference/Statements/return), [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)
- Deklarationen von Klassenfeldern ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_elements))
- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import), [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)

Damit die Sprache leichter zugänglich und bequemer zu verwenden ist, kann JavaScript beim Verarbeiten des Tokenstroms automatisch Semikolons einfügen. Dadurch lassen sich manche ungültigen Tokenfolgen zu gültiger Syntax „korrigieren“. Dieser Schritt erfolgt, nachdem der Programmtext gemäß der lexikalischen Grammatik in Tokens zerlegt wurde. In drei Fällen werden Semikolons automatisch eingefügt:

1\. Wenn ein nach der Grammatik unzulässiges Token auftritt und es vom vorherigen Token durch mindestens ein [Zeilenabschlusszeichen](#zeilenabschlusszeichen) getrennt ist – einschließlich eines Blockkommentars mit mindestens einem Zeilenabschlusszeichen – oder wenn das Token `}` ist, wird vor diesem Token ein Semikolon eingefügt.

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

Es werden jedoch keine Semikolons eingefügt, wenn das Semikolon dadurch zum Trennzeichen im Kopf einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Anweisung würde.

```js-nolint example-bad
for (
  let a = 1 // No ASI here
  a < 10 // No ASI here
  a++
) {}
```

Semikolons werden außerdem nie als [leere Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Empty) eingefügt. Im folgenden Code wäre beispielsweise das Einfügen eines Semikolons nach `)` syntaktisch gültig: Der Rumpf der `if`-Anweisung wäre dann eine leere Anweisung und die `const`-Deklaration eine eigenständige Anweisung. Da automatisch eingefügte Semikolons aber keine leeren Anweisungen bilden dürfen, würde eine [Deklaration](/de/docs/Web/JavaScript/Reference/Statements#what_are_statements_declarations_and_expressions) zum Rumpf der `if`-Anweisung. Das ist nicht zulässig.

```js-nolint example-bad
if (Math.random() > 0.5)
const x = 1 // SyntaxError: Unexpected token 'const'
```

2\. Wenn das Ende des Token-Eingabestroms erreicht ist und der Parser den Eingabestrom nicht als vollständiges Programm parsen kann, wird am Ende ein Semikolon eingefügt.

```js-nolint
const a = 1 /* ; */ // ASI here
```

Diese Regel ergänzt die vorherige speziell für den Fall, dass kein „unzulässiges Token“ vorliegt, sondern der Eingabestrom endet.

3\. Wenn die Grammatik an einer bestimmten Stelle Zeilenabschlusszeichen verbietet, dort aber eines auftritt, wird ein Semikolon eingefügt. Zu diesen Stellen gehören:

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

Hier gibt die `return`-Anweisung `undefined` zurück; `a + b` wird zu einer unerreichbaren Anweisung.

```js-nolint
return
a + b

// is transformed by ASI into

return;
a + b;
```

Beachten Sie, dass die automatische Semikoloneinfügung nur ausgelöst wird, wenn ein Zeilenumbruch Tokens trennt, die andernfalls ungültige Syntax ergeben würden. Kann das nächste Token als Teil einer gültigen Struktur geparst werden, wird kein Semikolon eingefügt. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()

const b = 1
[1, 2, 3].forEach(console.log)
```

Da `()` als Funktionsaufruf interpretiert werden kann, löst es normalerweise keine automatische Semikoloneinfügung aus. Ebenso kann `[]` ein Zugriff auf ein Element sein. Der obige Code entspricht:

```js-nolint example-bad
const a = 1(1).toString();

const b = 1[1, 2, 3].forEach(console.log);
```

Diese Syntax ist tatsächlich gültig. `1[1, 2, 3]` ist ein [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) mit einem durch [Kommas](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) verbundenen Ausdruck. Bei der Ausführung des Codes erhalten Sie daher Fehler wie „1 is not a function“ und „Cannot read properties of undefined (reading 'forEach')“.

Auch innerhalb von Klassen können Klassenfelder und Generatormethoden eine Stolperfalle sein.

```js-nolint example-bad
class A {
  a = 1
  *gen() {}
}
```

Der Code wird folgendermaßen interpretiert:

```js-nolint example-bad
class A {
  a = 1 * gen() {}
}
```

Deshalb tritt bei `{` ein Syntaxfehler auf.

Wenn Sie einen Stil ohne Semikolons verwenden möchten, helfen Ihnen die folgenden Faustregeln beim Umgang mit der automatischen Semikoloneinfügung:

- Schreiben Sie Postfix-Operatoren `++` und `--` in dieselbe Zeile wie ihre Operanden.

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

- Schreiben Sie `=>` bei einer Arrow-Funktion in dieselbe Zeile wie das Ende ihrer Parameterliste.

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

- Schreiben Sie das Schlüsselwort `using` in `using`- und `await using`-Anweisungen in dieselbe Zeile wie den ersten deklarierten Bezeichner.

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

- Beenden Sie Klassenfelder nach Möglichkeit immer mit einem Semikolon. Zusätzlich zur vorherigen Regel – die auch eine Felddeklaration vor einer [berechneten Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) umfasst, da Letztere mit `[` beginnt – sind Semikolons auch zwischen einer Felddeklaration und einer Generatormethode erforderlich.

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

- [Grammatik und Typen](/de/docs/Web/JavaScript/Guide/Grammar_and_types) – Leitfaden
- [Kleine Neuerung aus ES6, jetzt in Firefox Aurora und Nightly: Binär- und Oktalzahlen](https://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/) von Jeff Walden (2013)
- [Zeichen-Escape-Sequenzen in JavaScript](https://mathiasbynens.be/notes/javascript-escapes) von Mathias Bynens (2011)

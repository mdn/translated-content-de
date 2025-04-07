---
title: Lexikalische Grammatik
slug: Web/JavaScript/Reference/Lexical_grammar
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{jsSidebar("Mehr")}}

Diese Seite beschreibt die lexikalische Grammatik von JavaScript. JavaScript-Quelltext ist lediglich eine Zeichenfolge – damit der Interpreter diesen verstehen kann, muss die Zeichenfolge in eine strukturiertere Darstellung _geparst_ werden. Der erste Schritt des Parsings wird als [lexikalische Analyse](https://de.wikipedia.org/wiki/Lexikalische_Analyse) bezeichnet, bei der der Text von links nach rechts gescannt und in eine Folge von einzelnen, atomaren Eingabeelementen umgewandelt wird. Einige Eingabeelemente sind für den Interpreter unerheblich und werden nach diesem Schritt entfernt – hierzu gehören [Leerzeichen](#leerzeichen) und [Kommentare](#kommentare). Die anderen, einschließlich [Bezeichner](#bezeichner), [Schlüsselwörter](#schlüsselwörter), [Literale](#literale) und Satzzeichen (meistens [Operatoren](/de/docs/Web/JavaScript/Reference/Operators)), werden für die weitere Syntaxanalyse verwendet. [Zeilenendzeichen](#zeilenendzeichen) und mehrzeilige Kommentare sind ebenfalls syntaktisch unbedeutend, sie leiten jedoch den Prozess der [automatischen Einfügung von Semikolons](#automatische_einfügung_von_semikolons) an, um bestimmte ungültige Tokenfolgen gültig zu machen.

## Steuerzeichen für die Formatierung

Steuerzeichen für die Formatierung haben keine visuelle Darstellung, sondern werden verwendet, um die Interpretation des Textes zu steuern.

| Codepunkt | Name                  | Abkürzung | Beschreibung                                                                                                                                                                                                            |
| --------- | --------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| U+200C    | Zero width non-joiner | \<ZWNJ>   | Wird zwischen Zeichen platziert, um zu verhindern, dass sie in bestimmten Sprachen zu Ligaturen verbunden werden ([Wikipedia](https://de.wikipedia.org/wiki/Zero-width_non-joiner)).                                    |
| U+200D    | Zero width joiner     | \<ZWJ>    | Wird zwischen Zeichen platziert, die normalerweise nicht verbunden werden, um die Zeichen in bestimmten Sprachen in ihrer verbundenen Form darzustellen ([Wikipedia](https://de.wikipedia.org/wiki/Zero-width_joiner)). |
| U+FEFF    | Byte Order Mark       | \<BOM>    | Wird am Anfang eines Skripts verwendet, um es als Unicode zu markieren und die Erkennung der Kodierung und Byte-Reihenfolge des Textes zu ermöglichen ([Wikipedia](https://de.wikipedia.org/wiki/Byte_order_mark)).     |

Im JavaScript-Quelltext werden \<ZWNJ> und \<ZWJ> als [Bezeichner](#bezeichner)-Teile behandelt, während \<BOM> (auch Zero-width no-break space \<ZWNBSP> genannt, wenn es nicht am Anfang des Textes ist) als [Leerzeichen](#leerzeichen) betrachtet wird.

## Leerzeichen

{{Glossary("Whitespace", "Leerzeichen")}}-Zeichen verbessern die Lesbarkeit des Quelltexts und trennen Tokens voneinander. Diese Zeichen sind für die Funktionalität des Codes normalerweise nicht notwendig. [Minifizierungswerkzeuge](https://de.wikipedia.org/wiki/Minification_%28programming%29) werden oft verwendet, um Leerzeichen zu entfernen, um die Datenmenge zu verringern, die übertragen werden muss.

| Codepunkt | Name                                 | Abkürzung | Beschreibung                                                                                   | Escape-Sequenz |
| --------- | ------------------------------------ | --------- | ---------------------------------------------------------------------------------------------- | -------------- |
| U+0009    | Tabulationszeichen                   | \<TAB>    | Horizontale Tabulation                                                                         | \t             |
| U+000B    | Zeilenlinienzeichen                  | \<VT>     | Vertikale Tabulation                                                                           | \v             |
| U+000C    | Seitenvorschub                       | \<FF>     | Seitenumbruchssteuerzeichen ([Wikipedia](https://de.wikipedia.org/wiki/Page_break#Form_feed)). | \f             |
| U+0020    | Leerzeichen                          | \<SP>     | Normales Leerzeichen                                                                           |                |
| U+00A0    | Untrennbares Leerzeichen             | \<NBSP>   | Normales Leerzeichen, aber kein Punkt, an dem eine Zeile umgebrochen werden kann               |                |
| U+FEFF    | Nullbreites untrennbares Leerzeichen | \<ZWNBSP> | Wenn nicht am Anfang eines Skripts, ist das BOM-Zeichen ein normales Leerzeichen-Zeichen.      |                |
| Andere    | Andere Unicode-Leerzeichen           | \<USP>    | [Zeichen in der "Space_Separator"-Allgemeinkategorie][space separator set]                     |                |

[space separator set]: https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D

> [!NOTE]
> Von den [Zeichen mit der "White_Space"-Eigenschaft, die sich nicht in der "Space_Separator"-Allgemeinkategorie befinden](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BWhite_Space%7D%26%5CP%7BGeneral_Category%3DSpace_Separator%7D), werden U+0009, U+000B und U+000C in JavaScript weiterhin als Leerzeichen betrachtet; U+0085 NEXT LINE hat keine spezielle Rolle; andere werden zum Satz der [Zeilenendzeichen](#zeilenendzeichen).

> [!NOTE]
> Änderungen am Unicode-Standard, der von der JavaScript-Engine verwendet wird, können das Verhalten von Programmen beeinflussen. Zum Beispiel aktualisierte ES2016 den referenzierten Unicode-Standard von 5.1 auf 8.0.0, was dazu führte, dass U+180E MONGOLIAN VOWEL SEPARATOR von der "Space_Separator"-Kategorie zur "Format (Cf)"-Kategorie verschoben wurde und nicht mehr als Leerzeichen gilt. Folglich änderte sich das Ergebnis von [`"\u180E".trim().length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim) von `0` auf `1`.

## Zeilenendzeichen

Zusätzlich zu den [Leerzeichen](#leerzeichen) werden Zeilenabschlusszeichen verwendet, um die Lesbarkeit des Quelltexts zu verbessern. In einigen Fällen können Zeilenabschlusszeichen jedoch die Ausführung von JavaScript-Code beeinflussen, da es einige Stellen gibt, an denen sie verboten sind. Zeilenabschlusszeichen beeinflussen auch den Prozess der [automatischen Einfügung von Semikolons](#automatische_einfügung_von_semikolons).

Außerhalb des Kontexts der lexikalischen Grammatik werden Leerzeichen und Zeilenendzeichen oft gleichgesetzt. Zum Beispiel entfernt {{jsxref("String.prototype.trim()")}} alle Leerzeichen und Zeilenendzeichen vom Anfang und Ende einer Zeichenkette. Die `\s` [Zeichenklassen-Fluchtsequenz](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) in regulären Ausdrücken entspricht allen Leerzeichen und Zeilenendzeichen.

Nur die folgenden Unicode-Codepunkte werden in ECMAScript als Zeilenendzeichen behandelt, andere Zeilenumbruchzeichen werden als Leerzeichen behandelt (zum Beispiel wird der Nächste Zeile, NEL, U+0085 als Leerraum angesehen).

| Codepunkt | Name            | Abkürzung | Beschreibung                                              | Escape-Sequenz |
| --------- | --------------- | --------- | --------------------------------------------------------- | -------------- |
| U+000A    | Zeilenumbruch   | \<LF>     | Neues Zeilenzeichen in UNIX-Systemen                      | \n             |
| U+000D    | Wagenrücklauf   | \<CR>     | Neues Zeilenzeichen in Commodore- und frühen Mac-Systemen | \r             |
| U+2028    | Zeilenseparator | \<LS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline)        |                |
| U+2029    | Absatzseparator | \<PS>     | [Wikipedia](https://en.wikipedia.org/wiki/Newline)        |                |

## Kommentare

Kommentare werden verwendet, um Hinweise, Notizen, Vorschläge oder Warnungen zum JavaScript-Code hinzuzufügen. Dies kann das Lesen und Verstehen erleichtern. Sie können auch verwendet werden, um Code zu deaktivieren und so zu verhindern, dass er ausgeführt wird; dies kann ein wertvolles Debugging-Werkzeug sein.

JavaScript bietet zwei langjährige Möglichkeiten, Kommentare in Code einzufügen: Zeilenkommentare und Blockkommentare. Zusätzlich gibt es eine spezielle Hashbang-Kommentar-Syntax.

### Zeilenkommentare

Die erste Methode ist der `//`-Kommentar; dieser macht den gesamten Text, der ihm auf derselben Zeile folgt, zu einem Kommentar. Zum Beispiel:

```js
function comment() {
  // This is a one line JavaScript comment
  console.log("Hello world!");
}
comment();
```

### Blockkommentare

Die zweite Methode ist der `/* */`-Stil, der viel flexibler ist.

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

Sie können ihn auch in der Mitte einer Zeile verwenden, wenn Sie möchten. Dies kann jedoch Ihren Code schwerer lesbar machen, daher sollte dies mit Vorsicht verwendet werden:

```js
function comment(x) {
  console.log("Hello " + x /* insert the value of x */ + " !");
}
comment("world");
```

Zusätzlich können Sie ihn verwenden, um Code zu deaktivieren und so dessen Ausführung zu verhindern, indem Sie den Code in einen Kommentar einwickeln, wie hier:

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

In diesem Fall wird der `console.log()`-Aufruf nie ausgeführt, da er sich innerhalb eines Kommentars befindet. Jede Anzahl von Codezeilen kann auf diese Weise deaktiviert werden.

Blockkommentare, die mindestens ein Zeilenendzeichen enthalten, verhalten sich wie [Zeilenendzeichen](#zeilenendzeichen) bei der [automatischen Einfügung von Semikolons](#automatische_einfügung_von_semikolons).

### Hashbang-Kommentare

Es gibt eine spezielle dritte Kommentarsyntax, den **Hashbang-Kommentar**. Ein Hashbang-Kommentar verhält sich genau wie ein einzeiliger (`//`) Kommentar, außer dass er mit `#!` beginnt und **nur am absoluten Anfang eines Skripts oder Moduls gültig ist**. Außerdem ist darauf zu achten, dass vor dem `#!` keine Art von Leerzeichen steht. Der Kommentar besteht aus allen Zeichen nach `#!` bis zum Ende der ersten Zeile; es ist nur ein solcher Kommentar zulässig.

Hashbang-Kommentare in JavaScript ähneln [Shebangs in Unix](<https://de.wikipedia.org/wiki/Shebang_(Unix)>), die den Pfad zu einem bestimmten JavaScript-Interpreter angeben, den Sie zur Ausführung des Scripts verwenden möchten. Bevor der Hashbang-Kommentar standardisiert wurde, war er bereits de-facto in Non-Browser-Hosts wie Node.js implementiert, wo er vor der Übergabe an die Engine aus dem Quelltext entfernt wurde. Ein Beispiel ist wie folgt:

```js
#!/usr/bin/env node

console.log("Hello world");
```

Der JavaScript-Interpreter behandelt ihn als normalen Kommentar – er hat nur dann eine semantische Bedeutung für die Shell, wenn das Skript direkt in einer Shell ausgeführt wird.

> [!WARNING]
> Wenn Sie möchten, dass Skripte direkt in einer Shell-Umgebung ausführbar sind, kodieren Sie sie in UTF-8 ohne [BOM](https://de.wikipedia.org/wiki/Byte_order_mark). Obwohl ein BOM bei der Codeausführung in einem Browser keine Probleme verursacht – da es während der UTF-8-Decodierung vor der Analyse des Quelltexts entfernt wird – wird eine Unix/Linux-Shell den Hashbang nicht erkennen, wenn er durch ein BOM-Zeichen eingeleitet wird.

Sie sollten den `#!`-Kommentarstil nur verwenden, um einen JavaScript-Interpreter anzugeben. In allen anderen Fällen nutzen Sie einfach einen `//`-Kommentar (oder einen mehrzeiligen Kommentar).

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

In JavaScript bestehen Bezeichner üblicherweise aus alphanumerischen Zeichen, Unterstrichen (`_`) und Dollarzeichen (`$`). Bezeichner dürfen nicht mit Zahlen beginnen. JavaScript-Bezeichner sind jedoch nicht nur auf {{Glossary("ASCII", "ASCII")}} beschränkt – viele Unicode-Codepunkte sind ebenfalls erlaubt. Namentlich:

- Startzeichen können jedes Zeichen in der [ID_Start](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Start%7D)-Kategorie plus `_` und `$` sein.
- Nach dem ersten Zeichen können Sie jedes Zeichen in der [ID_Continue](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Continue%7D)-Kategorie plus U+200C (ZWNJ) und U+200D (ZWJ) verwenden.

> [!NOTE]
> Wenn Sie aus irgendeinem Grund JavaScript-Quelltext selbst parsen müssen, gehen Sie nicht davon aus, dass alle Bezeichner dem Muster `/[A-Za-z_$][\w$]*/` folgen (d.h. nur ASCII)! Der Bereich der Bezeichner kann durch den regulären Ausdruck `/[$_\p{ID_Start}][$\p{ID_Continue}]*/u` (ohne Unicode-Escape-Sequenzen) beschrieben werden.

Zusätzlich erlaubt JavaScript die Verwendung von [Unicode-Escape-Sequenzen](#unicode-escape-sequenzen) in der Form von `\u0000` oder `\u{000000}` in Bezeichnern, die denselben Zeichenfolgenwert wie die tatsächlichen Unicode-Zeichen codieren. Zum Beispiel sind `你好` und `\u4f60\u597d` dieselben Bezeichner:

```js-nolint
const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello
```

Nicht alle Stellen akzeptieren den vollen Bereich der Bezeichner. Bestimmte Syntaxen, wie zum Beispiel Funktionsdeklarationen, Funktionsausdrücke und Variablendeklarationen, erfordern die Verwendung von Bezeichnernamen, die keine [reservierten Wörter](#reservierte_wörter) sind.

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

_Schlüsselwörter_ sind Token, die wie Bezeichner aussehen, aber spezielle Bedeutungen in JavaScript haben. Beispielsweise weist das Schlüsselwort [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) vor einer Funktionsdeklaration darauf hin, dass die Funktion asynchron ist.

Einige Schlüsselwörter sind _reserviert_, was bedeutet, dass sie nicht als Bezeichner für Variablendeklarationen, Funktionsdeklarationen usw. verwendet werden können. Sie werden oft als _reservierte Wörter_ bezeichnet. [Eine Liste dieser reservierten Wörter](#reservierte_wörter) wird unten bereitgestellt. Nicht alle Schlüsselwörter sind reserviert — zum Beispiel kann `async` überall als Bezeichner verwendet werden. Einige Schlüsselwörter sind nur _kontextuell reserviert_ — zum Beispiel ist `await` nur innerhalb des Körpers einer asynchronen Funktion reserviert und `let` ist nur im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)-Code oder in `const`- und `let`-Deklarationen reserviert.

Bezeichner werden immer am _Zeichenfolgenwert_ verglichen, sodass Escape-Zeichenfolgen interpretiert werden. Zum Beispiel ist dies immer noch ein Syntaxfehler:

```js-nolint example-bad
const els\u{65} = 1;
// `els\u{65}` encodes the same identifier as `else`
```

### Reservierte Wörter

Diese Schlüsselwörter können nicht als Bezeichner für Variablen, Funktionen, Klassen usw. überall im JavaScript-Quelltext verwendet werden.

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

- {{jsxref("Statements/let", "let")}} (ebenfalls reserviert in `const`-, `let`- und Klassendeklarationen)
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- {{jsxref("Operators/yield", "yield")}} (ebenfalls reserviert in Generator-Funktionskörpern)

Die folgenden sind nur reserviert, wenn sie in Modulcode oder asynchronen Funktionskörpern gefunden werden:

- [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

### Zukünftig reservierte Wörter

Die folgenden sind rez

erviert als zukünftige Schlüsselwörter in der ECMAScript-Spezifikation. Sie haben derzeit keine spezielle Funktionalität, könnten aber in Zukunft eine bekommen, daher können sie nicht als Bezeichner verwendet werden.

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

Die folgenden sind als zukünftige Schlüsselwörter in älteren ECMAScript-Spezifikationen (ECMAScript 1 bis 3) reserviert.

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

Einige Bezeichner haben eine besondere Bedeutung in bestimmten Kontexten, ohne dass sie reservierte Wörter irgendeiner Art sind. Dazu gehören:

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
> Dieser Abschnitt behandelt Literale, die atomare Token sind. [Objektliterale](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Array-Literale](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation) sind [Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators), die aus einer Reihe von Token bestehen.

### Null-Literal

Siehe auch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) für weitere Informationen.

```js-nolint
null
```

### Boolean-Literal

Siehe auch [Boolean-Typ](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type) für weitere Informationen.

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

Dezimalliterale können mit einer Null (`0`) beginnen, gefolgt von einer weiteren Dezimalziffer. Wenn jedoch alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies wird als veraltete Syntax angesehen, und Zahlenliterale, die mit `0` beginnen, sei es im oktalen oder dezimalen Sinne interpretiert, verursachen im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) einen Syntaxfehler – verwenden Sie stattdessen das Präfix `0o`.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

##### Exponential

Das dezimale Exponential-Literal wird durch das folgende Format angegeben: `beN`; wobei `b` eine Basiszahl (ganz oder fließend) ist, gefolgt von einem `E` oder `e`-Zeichen (das als Trennzeichen oder _Exponentialindikator_ dient) und `N`, das die _Exponential- oder Potenznummer_ ist – eine signierte Ganzzahl.

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

Die Binärzahlsyntax verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "B" (`0b` oder `0B`). Jedes Zeichen nach dem `0b`, das nicht 0 oder 1 ist, beendet die Literalsequenz.

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### Oktal

Die Oktalzahlsyntax verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "O" (`0o` or `0O`). Jedes Zeichen nach dem `0o`, das nicht im Bereich (01234567) liegt, beendet die Literalsequenz.

```js-nolint
0O755 // 493
0o644 // 420
```

#### Hexadezimal

Die Hexadezimalzahlsyntax verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "X" (`0x` oder `0X`). Jedes Zeichen nach dem `0x`, das nicht im Bereich (0123456789ABCDEF) liegt, beendet die Literalsequenz.

```js-nolint
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

#### BigInt-Literal

Der [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type)-Typ ist ein numerisches Primitive in JavaScript, das ganze Zahlen mit beliebiger Genauigkeit darstellen kann. BigInt-Literale werden erstellt, indem an das Ende einer Ganzzahl `n` angehängt wird.

```js-nolint
123456789123456789n     // 123456789123456789
0o777777777777n         // 68719476735
0x123456789ABCDEFn      // 81985529216486895
0b11101001010101010101n // 955733
```

BigInt-Literale dürfen nicht mit `0` beginnen, um Verwirrung mit veralteten Oktal-Literalen zu vermeiden.

```js-nolint example-bad
0755n; // SyntaxError: invalid BigInt syntax
```

Für oktale `BigInt`-Zahlen verwenden Sie immer Null gefolgt vom Buchstaben "o" (groß oder klein):

```js example-good
0o755n;
```

Weitere Informationen über `BigInt` finden Sie auch unter [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type).

#### Numerische Trenner

Zur Verbesserung der Lesbarkeit von numerischen Literalen können Unterstriche (`_`, `U+005F`) als Trenner verwendet werden:

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

Ein [string](/de/docs/Web/JavaScript/Guide/Data_structures#string_type) Literal ist null oder mehr Unicode-Codepunkte, die in einfache oder doppelte Anführungszeichen eingeschlossen sind. Unicode-Codepunkte können auch durch eine Escape-Sequenz dargestellt werden. Alle Codepunkte können wörtlich in einem String-Literal erscheinen, außer diesen Codepunkten:

- U+005C \ (Backslash)
- U+000D \<CR>
- U+000A \<LF>
- Die gleiche Art von Anführungszeichen, die das Stringliteral einleiten

Alle Codepunkte können in Form einer Escape-Sequenz erscheinen. String-Literale werden zu ECMAScript-Stringwerten ausgewertet. Beim Generieren dieser Stringwerte werden Unicode-Codepunkte UTF-16-enkodiert.

```js-nolint
'foo'
"bar"
```

Die folgenden Unterabschnitte beschreiben verschiedene Escape-Sequenzen (`\` gefolgt von einem oder mehreren Zeichen), die in String-Literalen verfügbar sind. Alle nicht aufgeführten Escape-Sequenzen werden zu "Identitäts-Escapes", die zum Codepunkt selbst werden. Zum Beispiel ist `\z` dasselbe wie `z`. Es gibt eine veraltete Oktalescape-Sequenz-Syntax, die auf der Seite [Veraltete und veraltete Merkmale](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) beschrieben wird. Viele dieser Escape-Sequenzen sind auch in regulären Ausdrücken gültig – siehe [Zeichenescape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

#### Escape-Sequenzen

Besondere Zeichen können mit Escape-Sequenzen kodiert werden:

| Escape-Sequenz                                              | Unicode-Codepunkt                                   |
| ----------------------------------------------------------- | --------------------------------------------------- |
| `\0`                                                        | null-Zeichen (U+0000 NULL)                          |
| `\'`                                                        | einzelnes Anführungszeichen (U+0027 APOSTROPHE)     |
| `\"`                                                        | doppeltes Anführungszeichen (U+0022 QUOTATION MARK) |
| `\\`                                                        | Backslash (U+005C REVERSE SOLIDUS)                  |
| `\n`                                                        | newline (U+000A LINE FEED; LF)                      |
| `\r`                                                        | carriage return (U+000D CARRIAGE RETURN; CR)        |
| `\v`                                                        | vertikaler Tabulator (U+000B LINE TABULATION)       |
| `\t`                                                        | Tabulator (U+0009 CHARACTER TABULATION)             |
| `\b`                                                        | Rückschritt (U+0008 BACKSPACE)                      |
| `\f`                                                        | Formularvorschub (U+000C FORM FEED)                 |
| `\` gefolgt von einem [Zeilenendzeichen](#zeilenendzeichen) | leere Zeichenfolge                                  |

Die letzte Escape-Sequenz, `\` gefolgt von einem Zeilenumbruch, ist nützlich, um ein Stringliteral über mehrere Zeilen zu teilen, ohne seine Bedeutung zu ändern.

```js
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Stellen Sie sicher, dass nach dem Backslash kein Leerzeichen oder ein anderes Zeichen steht (außer ein Zeilenumbruch), sonst funktioniert es nicht. Wenn die nächste Zeile eingerückt ist, sind die zusätzlichen Leerzeichen ebenfalls im Zeichenfolgenwert vorhanden.

Sie können den [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition)-Operator verwenden, um mehrere Zeichenfolgen zusammenzufügen, wie hier:

```js
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Beide obigen Methoden ergeben identische Strings.

#### Hexadezimale Escape-Sequenzen

Hexadezimale Escape-Sequenzen bestehen aus `\x`, gefolgt von genau zwei hexadezimalen Ziffern, die eine Codeeinheit oder einen Codepunkt im Bereich 0x0000 bis 0x00FF darstellen.

```js
"\xA9"; // "©"
```

#### Unicode-Escape-Sequenzen

Eine Unicode-Escape-Sequenz besteht aus genau vier hexadezimalen Ziffern, die auf `\u` folgen. Sie stellt eine Codeeinheit in der UTF-16-Kodierung dar. Für Codepunkte U+0000 bis U+FFFF ist die Codeeinheit gleich dem Codepunkt. Codepunkte U+10000 bis U+10FFFF erfordern zwei Escape-Sequenzen, die die zwei Codeeinheiten (ein Surrogatpaar) darstellen, die zur Kodierung des Zeichens verwendet werden; das Surrogatpaar unterscheidet sich vom Codepunkt.

Siehe auch {{jsxref("String.fromCharCode()")}} und {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Unicode-Codepunkt-Escapes

Ein Unicode-Codepunkt-Escape besteht aus `\u{`, gefolgt von einem Codepunkt in hexadezimaler Basis, gefolgt von `}`. Der Wert der hexadezimalen Ziffern muss im Bereich von 0 bis einschließlich 0x10FFFF liegen. Codepunkte im Bereich U+10000 bis U+10FFFF müssen nicht als Surrogatpaar dargestellt werden.

Siehe auch {{jsxref("String.fromCodePoint()")}} und {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// the same character represented as a surrogate pair
"\uD87E\uDC04";
```

### Reguläre Ausdrucksliterale

Reguläre Ausdrucksliterale sind von zwei Schrägstrichen (`/`) eingeschlossen. Der Lexer verbraucht alle Zeichen bis zum nächsten nicht-escaping Schrägstrich oder dem Ende der Zeile, es sei denn, der Schrägstrich erscheint innerhalb einer Zeichenklasse (`[]`). Einige Zeichen (nämlich diejenigen, die [Bezeichnerteile](#bezeichner) sind) können nach dem abschließenden Schrägstrich erscheinen und Flaggen kennzeichnen.

Die lexikalische Grammatik ist sehr nachsichtig: Nicht alle regulären Ausdrucksliterale, die als ein Token identifiziert werden, sind gültige reguläre Ausdrücke.

Siehe auch {{jsxref("RegExp")}} für weitere Informationen.

```js
/ab+c/g;
/[/]/;
```

Ein regulärer Ausdrucksliteral kann nicht mit zwei Schrägstrichen (`//`) beginnen, da das ein Zeilenkommentar wäre. Um einen leeren regulären Ausdruck anzugeben, verwenden Sie `/(?:)/`.

### Template-Literale

Ein Template-Literal besteht aus mehreren Tokens: `` `xxx${ `` (Template-Kopf), `}xxx${` (Template-Mitte) und `` }xxx` `` (Template-Schwanz) sind einzelne Tokens, während beliebige Ausdrücke zwischen ihnen stehen können.

Siehe auch [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) für weitere Informationen.

```js
`string text`;

`string text line 1
 string text line 2`;

`string text ${expression} string text`;

tag`string text ${expression} string text`;
```

## Automatische Einfügung von Semikolons

Die Syntaxdefinitionen einiger [JavaScript-Aussagen](/de/docs/Web/JavaScript/Reference/Statements) erfordern Semikolons (`;`) am Ende. Dazu gehören:

- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- [Ausdrucksaussagen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement)
- [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue), [`break`](/de/docs/Web/JavaScript/Reference/Statements/break), [`return`](/de/docs/Web/JavaScript/Reference/Statements/return), [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)
- Klassendeklarationen (öffentlich oder privat)
- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import), [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)

Um die Sprache jedoch zugänglicher und bequemer zu machen, ist JavaScript in der Lage, Semikolons automatisch einzufügen, wenn der Tokenstrom verarbeitet wird, sodass einige ungültige Tokenfolgen "korrigiert" werden können, um gültige Syntax zu erhalten. Dieser Schritt geschieht, nachdem der Programmtext gemäß der lexikalischen Grammatik in Token zerlegt wurde. Es gibt drei Fälle, in denen Semikolons automatisch eingefügt werden:

1\. Wenn ein in der Grammatik nicht zugelassener Token auftritt und er durch mindestens einen [Zeilenendzeichen](#zeilenendzeichen) (einschließlich eines Blockkommentars, der mindestens ein Zeilenendzeichen enthält) vom vorhergehenden Token getrennt ist, oder der Token ist "}", wird ein Semikolon vor dem Token eingefügt.

```js-nolint
{ 1
2 } 3

// is transformed by ASI into:

{ 1
;2 ;} 3;

// Which is valid grammar encoding three statements,
// each consisting of a number literal
```

Das abschließende ")" von [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) wird ebenfalls als Spezialfall durch diese Regel behandelt.

```js-nolint
do {
  // ...
} while (condition) /* ; */ // ASI here
const a = 1
```

Allerdings werden keine Semikolons eingefügt, wenn das Semikolon dann zum Trenner im Kopf der [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Anweisung wird.

```js-nolint example-bad
for (
  let a = 1 // No ASI here
  a < 10 // No ASI here
  a++
) {}
```

Semikolons werden auch nie eingefügt, wenn sie zu leeren Anweisungen werden. Im folgenden Code würde, falls nach dem ")" ein Semikolon eingefügt würde, der Code gültig sein, mit einer leeren Anweisung als `if`-Körper und der `const`-Deklaration als separate Anweisung. Da jedoch automatisch eingefügte Semikolons keine leeren Anweisungen werden können, führt dies dazu, dass eine [Deklaration](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations) zum Körper der `if`-Anweisung wird, was nicht gültig ist.

```js-nolint example-bad
if (Math.random() > 0.5)
const x = 1 // SyntaxError: Unexpected token 'const'
```

2\. Wenn das Ende des Eingabenstroms an Token erreicht ist und der Parser den einzelnen Eingabenstrom nicht als vollständiges Programm analysieren kann, wird am Ende ein Semikolon eingefügt.

```js-nolint
const a = 1 /* ; */ // ASI here
```

Diese Regel ergänzt die vorherige Regel, insbesondere für den Fall, dass es kein "störendes Token" gibt, jedoch das Ende des Eingabestroms.

3\. Wenn die Grammatik Zeilenendzeichen an einer Stelle verbietet, jedoch ein Zeilenendzeichen gefunden wird, wird ein Semikolon eingefügt. Diese Stellen umfassen:

- `expr <hier> ++`, `expr <hier> --`
- `continue <hier> lbl`
- `break <hier> lbl`
- `return <hier> expr`
- `throw <hier> expr`
- `yield <hier> expr`
- `yield <hier> * expr`
- `(param) <hier> => {}`
- `async <hier> function`, `async <hier> prop()`, `async <hier> function*`, `async <hier> *prop()`, `async <hier> (param) <hier> => {}`

Hier wird [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment) nicht als Nachsetzoperator betrachtet, der auf die Variable `b` angewendet wird, da ein Zeilenumbruch zwischen `b` und `++` auftritt.

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

Beachten Sie, dass ASI nur ausgelöst wird, wenn ein Zeilenumbruch Token trennt, die ansonsten ungültige Syntax erzeugen würden. Wenn das nächste Token als Teil einer gültigen Struktur analysiert werden kann, werden keine Semikolons eingefügt. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()

const b = 1
[1, 2, 3].forEach(console.log)
```

Da `()` als Funktionsaufruf betrachtet werden kann, würde ASI normalerweise nicht ausgelöst. Ebenso könnte `[]` ein Memberzugriff sein. Der obige Code ist äquivalent zu:

```js-nolint example-bad
const a = 1(1).toString();

const b = 1[1, 2, 3].forEach(console.log);
```

Dies ist zufällig eine gültige Syntax. `1[1, 2, 3]` ist ein [Eigenschaftsaccessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) mit einem [Komma](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator)-getrennten Ausdruck. Daher erhalten Sie Fehler wie "1 is not a function" und "Kann Eigenschaften von undefined nicht lesen (lesen 'forEach')", wenn Sie den Code ausführen.

Innerhalb von Klassen können Klassenfelder und Generator-Methoden ebenfalls eine Falle sein.

```js-nolint example-bad
class A {
  a = 1
  *gen() {}
}
```

Es wird als:

```js-nolint example-bad
class A {
  a = 1 * gen() {}
}
```

gesehen und wird daher einen Syntaxfehler um `{` verursachen.

Es gibt die folgenden Faustregeln für den Umgang mit ASI, wenn Sie einen kopfzeilenlosen Stil erzwingen möchten:

- Schreiben Sie den Nachsetz-`++` und `--` in derselben Zeile wie ihre Operanden.

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

- Das `=>` einer Pfeilfunktion sollte in derselben Zeile wie das Ende ihrer Parameter stehen.

  ```js-nolint example-bad
  const foo = (a, b)
    => a + b
  ```

  ```js-nolint example-good
  const foo = (a, b) =>
    a + b
  ```

- Das `async` von asynchronen Funktionen, Methoden usw. darf nicht direkt auf ein Zeilenendzeichen folgen.

  ```js-nolint example-bad
  async
  function foo() {}
  ```

  ```js-nolint example-good
  async function
  foo() {}
  ```

- Wenn eine Zeile mit einem der Zeichen `(`, `[`, `` ` ``, `+`, `-`, `/` (wie in regulären Ausdrücken) beginnt, fügen Sie ihr ein Semikolon hinzu, oder beenden Sie die vorherige Zeile mit einem Semikolon.

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

- Klassenfelder sollten vorzugsweise immer mit Semikolons beendet werden — zusätzlich zur vorhergehenden Regel (die eine Felderklärung beinhaltet, gefolgt von einem [berechneten Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names), da letzteres mit `[` beginnt), sind Semikolons auch zwischen einer Felderklärung und einer Generatormethode erforderlich.

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
- [JavaScript-Zeichenescape-Sequenzen](https://mathiasbynens.be/notes/javascript-escapes) von Mathias Bynens (2011)

---
title: Lexikalische Grammatik
slug: Web/JavaScript/Reference/Lexical_grammar
l10n:
  sourceCommit: 5c8d0ac21db572edebbd4ad428efca0af3ec1734
---

Diese Seite beschreibt die lexikalische Grammatik von JavaScript. JavaScript-Quelltext ist einfach eine Abfolge von Zeichen – damit der Interpreter ihn verstehen kann, muss der String in eine strukturierte Darstellung _geparst_ werden. Der erste Schritt des Parsens wird [lexikalische Analyse](https://de.wikipedia.org/wiki/Lexikalische_Analyse) genannt, bei der der Text von links nach rechts gescannt und in eine Abfolge von individuellen, atomaren Eingabeelementen umgewandelt wird. Einige Eingabeelemente sind für den Interpreter unbedeutend und werden nach diesem Schritt entfernt – dazu gehören [Leerzeichen](#leerzeichen) und [Kommentare](#kommentare). Die anderen, einschließlich [Bezeichner](#bezeichner), [Schlüsselwörter](#schlüsselwörter), [Literale](#literale) und Interpunktoren (meist [Operatoren](/de/docs/Web/JavaScript/Reference/Operators)), werden für die weitere syntaktische Analyse verwendet. [Zeilenabschlusszeichen](#zeilenabschlusszeichen) und mehrzeilige Kommentare sind ebenfalls syntaktisch unbedeutend, aber sie leiten den Prozess der [automatischen Einfügung von Semikolons](#automatische_einfügung_von_semikolons) an, um bestimmte ungültige Tokenfolgen gültig zu machen.

## Format-Steuerzeichen

Format-Steuerzeichen haben keine visuelle Darstellung, werden jedoch verwendet, um die Interpretation des Textes zu steuern.

| Codepunkt | Name                       | Abkürzung | Beschreibung                                                                                                                                                                                               |
| --------- | -------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| U+200C    | Nullbreite Ohne-Verbindung | \<ZWNJ>   | Zwischen Zeichen platziert, um zu verhindern, dass sie in bestimmten Sprachen zu Ligaturen verbunden werden ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_non-joiner)).                            |
| U+200D    | Nullbreite Verbinder       | \<ZWJ>    | Zwischen Zeichen platziert, die normalerweise nicht verbunden wären, um in bestimmten Sprachen eine verbundene Darstellung zu erzwingen ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_joiner)).    |
| U+FEFF    | Byte Order Mark            | \<BOM>    | Am Anfang eines Skripts verwendet, um es als Unicode zu kennzeichnen und die Erkennung der Textkodierung und Byte-Reihenfolge zu ermöglichen ([Wikipedia](https://en.wikipedia.org/wiki/Byte_order_mark)). |

Im JavaScript-Quelltext werden \<ZWNJ> und \<ZWJ> als [Bezeichner](#bezeichner)-Teile behandelt, während \<BOM> (auch Nullbreite Nicht-Trennendes Leerzeichen \<ZWNBSP> genannt, wenn nicht am Anfang des Textes) als [Leerzeichen](#leerzeichen) behandelt wird.

## Leerzeichen

{{Glossary("Whitespace", "Leerzeichen")}}-Zeichen verbessern die Lesbarkeit des Quelltextes und trennen die Tokens voneinander. Diese Zeichen sind normalerweise für die Funktionalität des Codes nicht notwendig. [Minimierungstools](<https://de.wikipedia.org/wiki/Minimierung_(Programmierung)>) werden oft verwendet, um Leerzeichen zu entfernen, um die Datenmenge zu reduzieren, die übertragen werden muss.

| Codepunkt | Name                                    | Abkürzung | Beschreibung                                                                                                | Escape-Sequenz |
| --------- | --------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------- | -------------- |
| U+0009    | Zeichen-Tabulator                       | \<TAB>    | Horizontale Tabulation                                                                                      | \t             |
| U+000B    | Zeilen-Tabulator                        | \<VT>     | Vertikale Tabulation                                                                                        | \v             |
| U+000C    | Formular-Vorschub                       | \<FF>     | Steuerzeichen zur Seitenumbruchkontrolle ([Wikipedia](https://en.wikipedia.org/wiki/Page_break#Form_feed)). | \f             |
| U+0020    | Leerzeichen                             | \<SP>     | Normales Leerzeichen                                                                                        |                |
| U+00A0    | Untrennbares Leerzeichen                | \<NBSP>   | Normales Leerzeichen, an dem ein Zeilenumbruch nicht erlaubt ist                                            |                |
| U+FEFF    | Nullbreite Nicht-Trennendes Leerzeichen | \<ZWNBSP> | Wenn nicht am Anfang eines Skriptes, ist das BOM-Markierung ein normales Leerzeichenzeichen.                |                |
| Andere    | Andere Unicode Leerzeichen              | \<USP>    | [Zeichen in der "Space_Separator" allgemeinen Kategorie][space separator set]                               |                |

[space separator set]: https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D

> [!NOTE]
> Von diesen [Zeichen mit der "White_Space"-Eigenschaft, die nicht in der "Space_Separator"-Kategorie sind](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BWhite_Space%7D%26%5CP%7BGeneral_Category%3DSpace_Separator%7D), werden U+0009, U+000B und U+000C immer noch als Leerzeichen in JavaScript behandelt; U+0085 NEXT LINE hat keine spezielle Rolle; andere bilden die Menge der [Zeilenabschlusszeichen](#zeilenabschlusszeichen).

> [!NOTE]
> Änderungen am von der JavaScript-Engine verwendeten Unicode-Standard können sich auf das Verhalten von Programmen auswirken. Zum Beispiel hat ES2016 den Referenz-Unicode-Standard von 5.1 auf 8.0.0 aktualisiert, wodurch U+180E MONGOLIAN VOWEL SEPARATOR von der "Space_Separator"-Kategorie in die "Format (Cf)"-Kategorie verschoben und zu einem Nicht-Leerzeichen gemacht wurde. Folglich änderte sich das Ergebnis von [`"\u180E".trim().length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim) von `0` zu `1`.

## Zeilenabschlusszeichen

Zusätzlich zu [Leerzeichen](#leerzeichen) werden Zeilenabschlusszeichen verwendet, um die Lesbarkeit des Quellcodes zu verbessern. Allerdings können Zeilenabschlusszeichen in einigen Fällen die Ausführung von JavaScript-Code beeinflussen, da es einige Stellen gibt, an denen sie verboten sind. Zeilenabschlusszeichen beeinflussen auch den Prozess der [automatischen Einfügung von Semikolons](#automatische_einfügung_von_semikolons).

Außerhalb des Kontexts der lexikalischen Grammatik werden Leerzeichen und Zeilenabschlusszeichen oft vermischt. Zum Beispiel entfernt {{jsxref("String.prototype.trim()")}} alle Leerzeichen und Zeilenabschlusszeichen vom Anfang und Ende eines Strings. Die `\s` [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) in regulären Ausdrücken entspricht allen Leerzeichen und Zeilenabschlusszeichen.

Nur die folgenden Unicode-Codepunkte werden in ECMAScript als Zeilenabschlusszeichen behandelt, andere Zeilenbrechcharaktere werden als Leerzeichen behandelt (zum Beispiel wird Next Line, NEL, U+0085 als Leerzeichen betrachtet).

| Codepoint | Name          | Abkürzung | Beschreibung                                          | Escape-Sequenz |
| --------- | ------------- | --------- | ----------------------------------------------------- | -------------- |
| U+000A    | Zeilenumbruch | \<LF>     | Neue Zeile in UNIX-Systemen.                          | \n             |
| U+000D    | Wagenrücklauf | \<CR>     | Neue Zeile in Commodore- und frühen Mac-Systemen.     | \r             |
| U+2028    | Zeilentrenner | \<LS>     | [Wikipedia](https://de.wikipedia.org/wiki/Neue_Zeile) |                |
| U+2029    | Absatztrenner | \<PS>     | [Wikipedia](https://de.wikipedia.org/wiki/Neue_Zeile) |                |

## Kommentare

Kommentare dienen dazu, Hinweise, Notizen, Vorschläge oder Warnungen im JavaScript-Code hinzuzufügen. Dadurch wird er leichter lesbar und verständlich. Sie können auch verwendet werden, um Code zu deaktivieren, um seine Ausführung zu verhindern; dies kann ein wertvolles Debugging-Tool sein.

JavaScript bietet zwei langjährige Möglichkeiten, Kommentare zu Code hinzuzufügen: Zeilenkommentare und Blockkommentare. Darüber hinaus gibt es eine spezielle Hashbang-Kommentarsyntax.

### Zeilenkommentare

Die erste Möglichkeit ist der `//`-Kommentar; dieser macht den gesamten Text, der ihm auf derselben Zeile folgt, zu einem Kommentar. Zum Beispiel:

```js
function comment() {
  // This is a one line JavaScript comment
  console.log("Hello world!");
}
comment();
```

### Blockkommentare

Die zweite Möglichkeit ist der Stil `/* */`, der viel flexibler ist.

Zum Beispiel können Sie ihn auf einer einzigen Zeile verwenden:

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

Sie können ihn auch in der Mitte einer Zeile verwenden, wenn Sie möchten, obwohl dies Ihren Code schwerer lesbar machen kann, daher sollte es mit Vorsicht verwendet werden:

```js
function comment(x) {
  console.log("Hello " + x /* insert the value of x */ + " !");
}
comment("world");
```

Darüber hinaus können Sie ihn verwenden, um Code zu deaktivieren und zu verhindern, dass er ausgeführt wird, indem Sie den Code in einen Kommentar einfügen, wie diesen:

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

In diesem Fall wird der `console.log()`-Aufruf niemals ausgeführt, da er sich innerhalb eines Kommentars befindet. Auf diese Weise können jede Anzahl von Codezeilen deaktiviert werden.

Blockkommentare, die mindestens ein Zeilenabschlusszeichen enthalten, verhalten sich wie [Zeilenabschlusszeichen](#zeilenabschlusszeichen) bei der [automatischen Einfügung von Semikolons](#automatische_einfügung_von_semikolons).

### Hashbang-Kommentare

Es gibt eine spezielle dritte Kommentarsyntax, den **Hashbang-Kommentar**. Ein Hashbang-Kommentar verhält sich genau wie ein einzeiliger (`//`) Kommentar, außer dass er mit `#!` beginnt und **nur am absoluten Anfang eines Skripts oder Moduls gültig ist**. Beachten Sie auch, dass vor dem `#!` kein Leerzeichen jeglicher Art erlaubt ist. Der Kommentar besteht aus allen Zeichen nach `#!` bis zum Ende der ersten Zeile; es ist nur ein solcher Kommentar erlaubt.

Hashbang-Kommentare in JavaScript ähneln [Shebangs in Unix](<https://en.wikipedia.org/wiki/Shebang_(Unix)>), die den Pfad zu einem spezifischen JavaScript-Interpreter angeben, den Sie zur Ausführung des Skripts verwenden möchten. Bevor der Hashbang-Kommentar standardisiert wurde, war er bereits de facto in Nicht-Browser-Hosts wie Node.js implementiert, wo er aus dem Quelltext entfernt wurde, bevor er an die Engine weitergegeben wurde. Ein Beispiel sieht folgendermaßen aus:

```js
#!/usr/bin/env node

console.log("Hello world");
```

Der JavaScript-Interpreter behandelt ihn als normalen Kommentar – er hat nur eine semantische Bedeutung für die Shell, wenn das Skript direkt in einer Shell ausgeführt wird.

> [!WARNING]
> Wenn Sie möchten, dass Skripte direkt in einer Shell-Umgebung ausführbar sind, kodieren Sie sie in UTF-8 ohne ein [BOM](https://de.wikipedia.org/wiki/Byte_order_mark). Obwohl ein BOM beim Code, der in einem Browser ausgeführt wird, keine Probleme verursacht – da er beim UTF-8-Dekodieren entfernt wird, bevor der Quelltext analysiert wird – wird eine Unix/Linux-Shell den Hashbang nicht erkennen, wenn davor ein BOM-Zeichen steht.

Sie sollten die Kommentarform `#!` nur verwenden, um einen JavaScript-Interpreter anzugeben. In allen anderen Fällen verwenden Sie einfach einen `//`-Kommentar (oder einen mehrzeiligen Kommentar).

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

In JavaScript bestehen Bezeichner häufig aus alphanumerischen Zeichen, Unterstrichen (`_`) und Dollarzeichen (`$`). Bezeichner dürfen nicht mit Zahlen beginnen. JavaScript-Bezeichner sind jedoch nicht nur auf {{Glossary("ASCII", "ASCII")}} beschränkt – viele Unicode-Codepunkte sind ebenfalls zugelassen. Namentlich:

- Startzeichen können jedes Zeichen in der [ID_Start](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Start%7D)-Kategorie plus `_` und `$` sein.
- Nach dem ersten Zeichen können Sie jedes Zeichen in der [ID_Continue](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Continue%7D)-Kategorie plus U+200C (ZWNJ) und U+200D (ZWJ) verwenden.

> [!NOTE]
> Wenn Sie aus irgendeinem Grund JavaScript-Quelltext selbst parsen müssen, nehmen Sie nicht an, dass alle Bezeichner dem Muster `/[A-Za-z_$][\w$]*/` (d.h. nur ASCII) entsprechen. Der Umfang der Bezeichner kann durch den Regex `/[$_\p{ID_Start}][$\p{ID_Continue}]*/u` (ohne Unicode-Escape-Sequenzen) beschrieben werden.

Darüber hinaus erlaubt JavaScript die Verwendung von [Unicode-Escape-Sequenzen](#unicode_escape-sequenzen) in der Form `\u0000` oder `\u{000000}` in Bezeichnern, die denselben Zeichenfolgenwert wie die tatsächlichen Unicode-Zeichen kodieren. Zum Beispiel sind `你好` und `\u4f60\u597d` dieselben Bezeichner:

```js-nolint
const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello
```

Nicht alle Orte akzeptieren den vollen Umfang der Bezeichner. Bestimmte Syntaxen wie Funktionsdeklara-tionen, Funktionsausdrücke und Variableldeklarationen erfordern die Verwendung von Bezeichnernamen, die keine [reservierten Wörter](#reservierte_wörter) sind.

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

_Schlüsselwörter_ sind Tokens, die wie Bezeichner aussehen, aber besondere Bedeutungen in JavaScript haben. Zum Beispiel deutet das Schlüsselwort [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) vor einer Funktionsdeklaration an, dass die Funktion asynchron ist.

Einige Schlüsselwörter sind _reserviert_, was bedeutet, dass sie nicht als Bezeichner für Variablendeklarationen, Funktionsdeklarationen usw. verwendet werden können. Sie werden oft als _reservierte Wörter_ bezeichnet. [Eine Liste dieser reservierten Wörter](#reservierte_wörter) ist unten angegeben. Nicht alle Schlüsselwörter sind reserviert – zum Beispiel kann `async` überall als Bezeichner verwendet werden. Einige Schlüsselwörter sind nur _kontextuell reserviert_ – zum Beispiel ist `await` nur innerhalb des Körpers einer asynchronen Funktion reserviert, und `let` ist nur im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-Code reserviert, oder `const` und `let`-Deklarationen.

Bezeichner werden immer nach _Zeichenfolgenwert_ verglichen, sodass Escape-Sequenzen interpretiert werden. Zum Beispiel ist dies immer noch ein Syntaxfehler:

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

Die folgenden sind nur reserviert, wenn sie im Strict Mode-Code gefunden werden:

- {{jsxref("Statements/let", "let")}} (auch reserviert in `const`, `let` und Klassendeklarationen)
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- {{jsxref("Operators/yield", "yield")}} (auch reserviert in Generatorfunktionskörpern)

Die folgenden sind nur reserviert, wenn sie im Modulcode oder in asynchronen Funktionskörpern gefunden werden:

- [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

### Zukünftige reservierte Wörter

Die folgenden sind als zukünftige Schlüsselwörter durch die ECMAScript-Spezifikation reserviert. Sie haben derzeit keine besondere Funktionalität, könnten aber in Zukunft, daher können sie nicht als Bezeichner verwendet werden.

Diese sind immer reserviert:

- `enum`

Die folgenden sind nur reserviert, wenn sie im Strict Mode-Code gefunden werden:

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

### Bezeichner mit speziellen Bedeutungen

Einige wenige Bezeichner haben in einigen Kontexten eine spezielle Bedeutung, ohne reservierte Wörter irgendeiner Art zu sein. Dazu gehören:

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

### Boolean-Literal

Siehe auch [boolescher Typ](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type) für weitere Informationen.

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

Dezimal-Literale können mit einer Null (`0`) beginnen, gefolgt von einer anderen Dezimalziffer. Wenn jedoch alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies wird als veraltete Syntax betrachtet, und Zahlenliterale mit Präfix `0`, ob als Oktal oder Dezimal interpretiert, verursachen einen Syntaxfehler im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) — verwenden Sie stattdessen das Präfix `0o`.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

##### Exponential

Das exponentielle Dezimal-Literal wird durch das folgende Format angegeben: `beN`; wobei `b` eine Basiszahl (ganz- oder Fließkommazahl) ist, gefolgt von einem `E` oder `e` Zeichen (das als Trenner oder _Exponentenanzeige_ dient) und `N`, das die _Exponent_ oder _Potenz_ Nummer ist - eine Ganzzahl mit Vorzeichen.

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

Die binäre Zahlensyntax verwendet eine führende Null gefolgt von einem kleinen oder großen lateinischen Buchstaben "B" (`0b` oder `0B`). Jedes Zeichen nach dem `0b`, das nicht 0 oder 1 ist, beendet die Literalsequenz.

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### Oktal

Die oktale Zahlensyntax verwendet eine führende Null gefolgt von einem kleinen oder großen lateinischen Buchstaben "O" (`0o` oder `0O`). Jedes Zeichen nach dem `0o`, das außerhalb des Bereichs (01234567) liegt, beendet die Literalsequenz.

```js-nolint
0O755 // 493
0o644 // 420
```

#### Hexadezimal

Die hexadezimale Zahlensyntax verwendet eine führende Null gefolgt von einem kleinen oder großen lateinischen Buchstaben "X" (`0x` oder `0X`). Jedes Zeichen nach dem `0x`, das außerhalb des Bereichs (0123456789ABCDEF) liegt, beendet die Literalsequenz.

```js-nolint
0xFFFFFFFFFFFFF // 4503599627370495
0xabcdef123456  // 188900967593046
0XA             // 10
```

#### BigInt Literal

Der [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type)-Typ ist ein numerischer primitiver Typ in JavaScript, der Ganzzahlen mit beliebiger Genauigkeit darstellen kann. BigInt-Literale werden erstellt, indem man `n` am Ende einer Ganzzahl anhängt.

```js-nolint
123456789123456789n     // 123456789123456789
0o777777777777n         // 68719476735
0x123456789ABCDEFn      // 81985529216486895
0b11101001010101010101n // 955733
```

BigInt-Literale dürfen nicht mit `0` beginnen, um Verwechslungen mit veralteten oktalen Literalen zu vermeiden.

```js-nolint example-bad
0755n; // SyntaxError: invalid BigInt syntax
```

Für oktale `BigInt`-Zahlen verwenden Sie immer eine Null gefolgt von dem Buchstaben "o" (groß oder klein):

```js example-good
0o755n;
```

Für weitere Informationen über `BigInt` siehe auch [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type).

#### Numerische Trennzeichen

Um die Lesbarkeit von numerischen Literalen zu verbessern, können Unterstriche (`_`, `U+005F`) als Trennzeichen verwendet werden:

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

### Zeichenfolgeliterale

Ein [Zeichenfolge](/de/docs/Web/JavaScript/Guide/Data_structures#string_type)-Literal ist null oder mehr Unicode-Codepunkte, die in einfache oder doppelte Anführungszeichen eingeschlossen sind. Unicode-Codepunkte können auch durch eine Escape-Sequenz dargestellt werden. Alle Codepunkte können wörtlich in einem Zeichenfolgeliteral erscheinen, mit Ausnahme dieser Codepunkte:

- U+005C \ (Rückschrägstrich)
- U+000D \<CR>
- U+000A \<LF>
- Die gleiche Art von Anführungszeichen, die den Zeichenfolgenliteral beginnt

Alle Codepunkte können in Form einer Escape-Sequenz erscheinen. Zeichenfolgeliterale evaluieren zu ECMAScript-Stringwerten. Bei der Generierung dieser Stringwerte werden Unicode-Codepunkte in UTF-16 kodiert.

```js-nolint
'foo'
"bar"
```

Die folgenden Abschnitte beschreiben verschiedene Escape-Sequenzen (`\` gefolgt von einem oder mehreren Zeichen), die in Zeichenfolgeliteralen verfügbar sind. Jede nicht aufgeführte Escape-Sequenz wird zu einer "Identitäts-Escape", die zum Codepunkt selbst wird. Zum Beispiel ist `\z` dasselbe wie `z`. Es gibt eine veraltete Oktal-Escape-Sequenz-Syntax, die auf der Seite [Veraltete und obsoleszente Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) beschrieben wird. Viele dieser Escape-Sequenzen sind auch in regulären Ausdrücken gültig – siehe [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

#### Escape-Sequenzen

Sonderzeichen können unter Verwendung von Escape-Sequenzen codiert werden:

| Escape-Sequenz                                                          | Unicode-Codepunkt                                   |
| ----------------------------------------------------------------------- | --------------------------------------------------- |
| `\0`                                                                    | Nullzeichen (U+0000 NULL)                           |
| `\'`                                                                    | einfaches Anführungszeichen (U+0027 APOSTROPHE)     |
| `\"`                                                                    | doppeltes Anführungszeichen (U+0022 QUOTATION MARK) |
| `\\`                                                                    | Rückschrägstrich (U+005C REVERSE SOLIDUS)           |
| `\n`                                                                    | neue Zeile (U+000A LINE FEED; LF)                   |
| `\r`                                                                    | Wagenrücklauf (U+000D CARRIAGE RETURN; CR)          |
| `\v`                                                                    | vertikaler Tabulator (U+000B LINE TABULATION)       |
| `\t`                                                                    | Tabulator (U+0009 CHARACTER TABULATION)             |
| `\b`                                                                    | Rückschritt (U+0008 BACKSPACE)                      |
| `\f`                                                                    | Formular-Vorschub (U+000C FORM FEED)                |
| `\` gefolgt von einem [Zeilenabschlusszeichen](#zeilenabschlusszeichen) | leerer String                                       |

Die letzte Escape-Sequenz, `\` gefolgt von einem Zeilenabschlusszeichen, ist nützlich, um ein Zeichenfolgeliteral über mehrere Zeilen zu verteilen, ohne dessen Bedeutung zu ändern.

```js
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Stellen Sie sicher, dass kein Leerzeichen oder ein anderes Zeichen nach dem Rückstrich (außer einem Zeilenumbruch) kommt, sonst funktioniert es nicht. Wenn die nächste Zeile eingerückt ist, sind die zusätzlichen Leerzeichen auch im Wert des Strings vorhanden.

Sie können auch den [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition)-Operator verwenden, um mehrere Strings zusammenzufügen, wie dies:

```js
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Beide der oben genannten Methoden ergeben identische Strings.

#### Hexadezimale Escape-Sequenzen

Hexadezimale Escape-Sequenzen bestehen aus `\x` gefolgt von genau zwei hexadezimalen Ziffern, die eine Codeeinheit oder einen Codepunkt im Bereich von 0x0000 bis 0x00FF darstellen.

```js
"\xA9"; // "©"
```

#### Unicode Escape-Sequenzen

Eine Unicode-Escape-Sequenz besteht aus genau vier hexadezimalen Ziffern nach `\u`. Sie stellt eine Codeeinheit in der UTF-16-Kodierung dar. Für Codepunkte U+0000 bis U+FFFF entspricht die Codeeinheit dem Codepunkt. Codepunkte von U+10000 bis U+10FFFF erfordern zwei Escape-Sequenzen, die die zwei Codeeinheiten (ein Surrogatpaar) darstellen, die verwendet werden, um das Zeichen zu kodieren; das Surrogatpaar unterscheidet sich vom Codepunkt.

Siehe auch {{jsxref("String.fromCharCode()")}} und {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Unicode Codepoint-Escapes

Ein Unicode-Codepoint-Escape besteht aus `\u{`, gefolgt von einem Codepunkt in der hexadezimalen Basis, gefolgt von `}`. Der Wert der hexadezimalen Ziffern muss im Bereich von 0 bis einschließlich 0x10FFFF liegen. Codepunkte im Bereich von U+10000 bis U+10FFFF müssen nicht als Surrogatpaar dargestellt werden.

Siehe auch {{jsxref("String.fromCodePoint()")}} und {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// the same character represented as a surrogate pair
"\uD87E\uDC04";
```

### Reguläre Ausdrucksliterale

Reguläre Ausdrucksliterale sind von zwei Schrägstrichen (`/`) eingeschlossen. Der Lexer konsumiert alle Zeichen bis zum nächsten unescaped Schrägstrich oder zum Ende der Zeile, es sei denn, der Schrägstrich erscheint innerhalb einer Zeichenklasse (`[]`). Einige Zeichen (nämlich die, die [Bezeichnerteile](#bezeichner) sind) können nach dem schließenden Schrägstrich erscheinen, um Flags zu kennzeichnen.

Die lexikalische Grammatik ist sehr nachsichtig: Nicht alle regulären Ausdrucksliterale, die als ein Token identifiziert werden, sind gültige reguläre Ausdrücke.

Siehe auch {{jsxref("RegExp")}} für weitere Informationen.

```js
/ab+c/g;
/[/]/;
```

Ein regulärer Ausdruck darf nicht mit zwei Schrägstrichen (`//`) beginnen, da dies ein Zeilenkommentar wäre. Um einen leeren regulären Ausdruck anzugeben, verwenden Sie `/(?:)/`.

### Template Literale

Ein Template-Literal besteht aus mehreren Tokens: `` `xxx${ `` (Template-Kopf), `}xxx${` (Template-Mitte) und `` }xxx` `` (Template-Ende) sind einzelne Tokens, während dazwischen beliebige Ausdrücke stehen können.

Siehe auch [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) für weitere Informationen.

```js
`string text`;

`string text line 1
 string text line 2`;

`string text ${expression} string text`;

tag`string text ${expression} string text`;
```

## Automatische Einfügung von Semikolons

Einige [JavaScript-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements) erfordern laut ihrer Syntaxdefinition Semikolons (`;`) am Ende. Dazu gehören:

- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), [`using`](/de/docs/Web/JavaScript/Reference/Statements/using), [`await using`](/de/docs/Web/JavaScript/Reference/Statements/await_using)
- [Ausdrucks-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement)
- [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue), [`break`](/de/docs/Web/JavaScript/Reference/Statements/break), [`return`](/de/docs/Web/JavaScript/Reference/Statements/return), [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)
- Klassenfeld-Deklarationen ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_elements))
- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import), [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)

Um die Sprache jedoch zugänglicher und bequemer zu machen, kann JavaScript Semikolons automatisch einfügen, wenn es den Token-Stream konsumiert, sodass einige ungültige Tokenfolgen zu einer gültigen Syntax "korrigiert" werden können. Dieser Schritt erfolgt, nachdem der Programmtext gemäß der lexikalischen Grammatik in Tokens geparst wurde. Es gibt drei Fälle, in denen Semikolons automatisch eingefügt werden:

1\. Wenn ein Token, das von der Grammatik nicht erlaubt ist, erkannt wird und es durch mindestens ein [Zeilenabschlusszeichen](#zeilenabschlusszeichen) (einschließlich eines Blockkommentars, der mindestens ein Zeilenabschlusszeichen enthält) vom vorherigen Token getrennt ist oder das Token "}" ist, wird vor dem Token ein Semikolon eingefügt.

```js-nolint
{ 1
2 } 3

// is transformed by ASI into:

{ 1
;2 ;} 3;

// Which is valid grammar encoding three statements,
// each consisting of a number literal
```

Das abschließende ")" von [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) wird von dieser Regel ebenfalls als Sonderfall behandelt.

```js-nolint
do {
  // …
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

Semikolons werden auch niemals als [leere Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Empty) eingefügt. Zum Beispiel, im folgenden Code, wenn ein Semikolon nach ")" eingefügt wird, dann wäre der Code gültig, mit einer leeren Anweisung als `if`-Körper und der `const`-Deklaration, die eine separate Anweisung ist. Da jedoch automatisch eingefügte Semikolons keine leeren Anweisungen werden können, wird dadurch eine [Deklaration](/de/docs/Web/JavaScript/Reference/Statements#what_are_statements_declarations_and_expressions) zum Körper der `if`-Anweisung, was nicht gültig ist.

```js-nolint example-bad
if (Math.random() > 0.5)
const x = 1 // SyntaxError: Unexpected token 'const'
```

2\. Wenn das Ende des Eingabestreams von Tokens erreicht ist und der Parser nicht in der Lage ist, den einzelnen Eingabestream als ein vollständiges Programm zu parsen, wird am Ende ein Semikolon eingefügt.

```js-nolint
const a = 1 /* ; */ // ASI here
```

Diese Regel ist eine Ergänzung zur vorherigen Regel, speziell für den Fall, dass es kein "angreifendes Token" gibt, sondern nur das Ende des Eingabestreams.

3\. Wenn die Grammatik in einem bestimmten Bereich keine Zeilenabschlusszeichen erlaubt, aber ein Zeilenabschlusszeichen gefunden wird, wird ein Semikolon eingefügt. Diese Bereiche umfassen:

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

Hier wird [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment) nicht als Nachsuffixoperator behandelt, der auf Variable `b` angewendet wird, da zwischen `b` und `++` ein Zeilenabschlusszeichen auftritt.

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

Beachten Sie, dass ASI nur ausgelöst wird, wenn ein Zeilenumbruch Tokens trennt, die sonst eine ungültige Syntax erzeugen würden. Wenn das nächste Token als Teil einer gültigen Struktur geparst werden kann, würden keine Semikolons eingefügt. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()

const b = 1
[1, 2, 3].forEach(console.log)
```

Da `()` als Funktionsaufruf angesehen werden kann, würde es normalerweise kein ASI auslösen. Ebenso kann `[]` ein Member-Zugriff sein. Der obige Code entspricht:

```js-nolint example-bad
const a = 1(1).toString();

const b = 1[1, 2, 3].forEach(console.log);
```

Dies stellt sich als eine gültige Syntax heraus. `1[1, 2, 3]` ist ein [Eigenschaftsaccessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) mit einem [Komma](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator)-verbundenen Ausdruck. Daher würden Sie beim Ausführen des Codes Fehler wie "1 ist keine Funktion" und "Eigenschaften von undefiniert (lesen 'forEach')" nicht lesen können erhalten.

Innerhalb von Klassen können Klassenfelder und generatormethoden ebenfalls eine Falle sein.

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

Und wird daher ein Syntaxfehler sein um `{`.

Es gibt die folgenden Faustregeln für den Umgang mit ASI, wenn Sie einen semikolonlosen Stil durchsetzen möchten:

- Schreiben Sie Nachsuffix `++` und `--` auf derselben Zeile wie ihre Operanden.

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

- In ähnlicher Weise sollte der Bezeichner nach `break` oder `continue` auf derselben Zeile wie das Schlüsselwort stehen.

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

- Das `=>` einer Pfeilfunktion sollte auf derselben Zeile wie das Ende ihrer Parameter stehen.

  ```js-nolint example-bad
  const foo = (a, b)
    => a + b
  ```

  ```js-nolint example-good
  const foo = (a, b) =>
    a + b
  ```

- Das `async` von asynchronen Funktionen, Methoden usw. kann nicht direkt auf ein Zeilenabschlusszeichen folgen.

  ```js-nolint example-bad
  async
  function foo() {}
  ```

  ```js-nolint example-good
  async function
  foo() {}
  ```

- Das Schlüsselwort `using` in `using` und `await using`-Anweisungen sollte auf derselben Zeile stehen wie der erste Bezeichner, den es deklariert.

  ```js-nolint example-bad
  using
  resource = acquireResource()
  ```

  ```js-nolint example-good
  using resource
    = acquireResource()
  ```

- Wenn eine Zeile mit einem der Zeichen `(`, `[`, `` ` ``, `+`, `-`, `/` (wie im regulären Ausdrucksliteral) beginnt, fügen Sie ein Semikolon voran oder schließen Sie die vorherige Zeile mit einem Semikolon ab.

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

- Klassenfelder sollten vorzugsweise immer mit Semikolons abgeschlossen werden – zusätzlich zur vorherigen Regel (die eine Felddeklaration umfasst, gefolgt von einer [berechneten Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names), da letztere mit `[` beginnt), sind auch zwischen einer Felddeklaration und einer Generatormethode erforderlich.

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

- [Leitfaden zur Grammatik und Typen](/de/docs/Web/JavaScript/Guide/Grammar_and_types)
- [Mikro-Feature von ES6, jetzt in Firefox Aurora und Nightly: binäre und oktale Zahlen](https://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/) von Jeff Walden (2013)
- [JavaScript Zeichen-Escape-Sequenzen](https://mathiasbynens.be/notes/javascript-escapes) von Mathias Bynens (2011)

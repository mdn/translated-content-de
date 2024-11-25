---
title: Lexikalische Grammatik
slug: Web/JavaScript/Reference/Lexical_grammar
l10n:
  sourceCommit: a53528ac568364c33c348d64bba264a4e01f236d
---

{{jsSidebar("Mehr")}}

Diese Seite beschreibt die lexikalische Grammatik von JavaScript. JavaScript-Quelltext ist einfach eine Zeichenfolge — damit der Interpreter sie verstehen kann, muss die Zeichenfolge in eine strukturiertere Darstellung _geparst_ werden. Der erste Schritt des Parsens wird [lexikalische Analyse](https://de.wikipedia.org/wiki/Lexikalische_Analyse) genannt, bei der der Text von links nach rechts gescannt und in eine Sequenz von einzelnen, atomaren Eingabeelementen umgewandelt wird. Einige Eingabeelemente sind für den Interpreter unbedeutend und werden nach diesem Schritt entfernt — dazu gehören [Leerzeichen](#leerzeichen) und [Kommentare](#kommentare). Die anderen, einschließlich [Bezeichner](#bezeichner), [Schlüsselwörter](#schlüsselwörter), [Literale](#literale) und Punctuatoren (meistens [Operatoren](/de/docs/Web/JavaScript/Reference/Operators)), werden für die weitere Syntaxanalyse verwendet. [Zeilenbegrenzer](#zeilenbegrenzer) und mehrzeilige Kommentare sind ebenfalls syntaktisch unbedeutend, aber sie leiten den Prozess der [automatischen Einfügung von Semikolons](#automatische_semikolon-einfügung) an, um bestimmte ungültige Token-Sequenzen gültig zu machen.

## Formatsteuerzeichen

Formatsteuerzeichen haben keine visuelle Darstellung, werden jedoch verwendet, um die Interpretation des Textes zu steuern.

| Codepunkt | Name                  | Abkürzung | Beschreibung                                                                                                                                                                                                            |
| --------- | --------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| U+200C    | Zero width non-joiner | \<ZWNJ>   | Zwischen Zeichen platziert, um zu verhindern, dass sie in bestimmten Sprachen zu Ligaturen verbunden werden ([Wikipedia](https://de.wikipedia.org/wiki/Breitengradler_Verbinder)).                                      |
| U+200D    | Zero width joiner     | \<ZWJ>    | Zwischen Zeichen platziert, die normalerweise nicht verbunden sind, um die Zeichen in bestimmten Sprachen in ihrer verbundenen Form darzustellen ([Wikipedia](https://de.wikipedia.org/wiki/Breitengradler_Verbinder)). |
| U+FEFF    | Byte order mark       | \<BOM>    | Wird am Anfang des Skripts verwendet, um es als Unicode zu markieren und die Erkennung der Textkodierung und Byte-Reihenfolge zu ermöglichen ([Wikipedia](https://de.wikipedia.org/wiki/Byteordnung)).                  |

Im JavaScript-Quelltext werden \<ZWNJ> und \<ZWJ> als [Bezeichner](#bezeichner)-Teile behandelt, während \<BOM> (auch als zero-width no-break space \<ZWNBSP> bezeichnet, wenn es nicht am Anfang des Textes steht) als [Leerzeichen](#leerzeichen) behandelt wird.

## Leerzeichen

{{Glossary("Whitespace", "Leerzeichen")}} verbessern die Lesbarkeit des Quelltextes und trennen Tokens voneinander. Diese Zeichen sind normalerweise für die Funktionalität des Codes nicht notwendig. [Minification-Tools](https://en.wikipedia.org/wiki/Minification_%28programming%29) werden häufig verwendet, um Leerzeichen zu entfernen und so die zu übertragende Datenmenge zu reduzieren.

| Codepunkt | Name                       | Abkürzung | Beschreibung                                                                                      | Escape-Sequenz |
| --------- | -------------------------- | --------- | ------------------------------------------------------------------------------------------------- | -------------- |
| U+0009    | Zeichen-Tabulator          | \<TAB>    | Horizontaler Tabulator                                                                            | \t             |
| U+000B    | Zeilen-Tabulator           | \<VT>     | Vertikaler Tabulator                                                                              | \v             |
| U+000C    | Seitenvorschub             | \<FF>     | Seitenumbruchskontrollzeichen ([Wikipedia](https://de.wikipedia.org/wiki/Seitenvorschubzeichen)). | \f             |
| U+0020    | Leerzeichen                | \<SP>     | Normales Leerzeichen                                                                              |                |
| U+00A0    | Geschütztes Leerzeichen    | \<NBSP>   | Normales Leerzeichen, aber keine Stelle, an der ein Zeilenumbruch erfolgen darf                   |                |
| U+FEFF    | Zero-width non-break space | \<ZWNBSP> | Wenn nicht am Anfang eines Skripts, ist der BOM-Marker ein normales Leerzeichen.                  |                |
| Andere    | Andere Unicode-Leerzeichen | \<USP>    | [Zeichen in der „Space_Separator“ allgemeinen Kategorie][space separator set]                     |                |

[space separator set]: https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D

> [!NOTE]
> Von den [Zeichen mit der „White_Space“-Eigenschaft, die nicht zur „Space_Separator“ allgemeinen Kategorie gehören](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BWhite_Space%7D%26%5CP%7BGeneral_Category%3DSpace_Separator%7D) werden die U+0009, U+000B und U+000C weiterhin als Leerzeichen in JavaScript behandelt; U+0085 NEXT LINE hat keine spezielle Rolle; andere bilden die Menge der [Zeilenbegrenzer](#zeilenbegrenzer).

> [!NOTE]
> Änderungen am Unicode-Standard, der von der JavaScript-Engine verwendet wird, können das Verhalten von Programmen beeinflussen. Zum Beispiel aktualisierte ES2016 den Unicode-Standard von 5.1 auf 8.0.0, wodurch U+180E MONGOLISCHER VOKAL-TRENNER von der Kategorie „Space_Separator“ in die Kategorie „Format (Cf)“ verschoben wurde und dadurch kein Leerzeichen mehr ist. Infolgedessen änderte sich das Ergebnis von [`"\u180E".trim().length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim) von `0` auf `1`.

## Zeilenbegrenzer

Zusätzlich zu den [Leerzeichen](#leerzeichen) werden Zeilenbegrenzungszeichen verwendet, um die Lesbarkeit des Quelltextes zu verbessern. In einigen Fällen können Zeilenbegrenzer jedoch die Ausführung von JavaScript-Code beeinflussen, da es einige Stellen gibt, an denen sie verboten sind. Zeilenbegrenzer beeinflussen auch den Prozess der [automatischen Einfügung von Semikolons](#automatische_semikolon-einfügung).

Außerhalb des Kontexts der lexikalischen Grammatik werden Leerzeichen und Zeilenbegrenzer oft gleichgestellt. Zum Beispiel entfernt {{jsxref("String.prototype.trim()")}} alle Leerzeichen und Zeilenbegrenzer vom Anfang und Ende einer Zeichenkette. Die `\s` [Zeichenklassen-Flucht](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) in regulären Ausdrücken passt zu allen Leerzeichen und Zeilenbegrenzern.

Nur die folgenden Unicode-Codepunkte werden in ECMAScript als Zeilenbegrenzer behandelt, andere zeilenbrechende Zeichen werden als Leerzeichen behandelt (zum Beispiel wird Next Line, NEL, U+0085 als Leerzeichen betrachtet).

| Codepunkt | Name          | Abkürzung | Beschreibung                                             | Escape-Sequenz |
| --------- | ------------- | --------- | -------------------------------------------------------- | -------------- |
| U+000A    | Zeilenumbruch | \<LF>     | Neue Zeichen in UNIX-Systemen.                           | \n             |
| U+000D    | Wagenrücklauf | \<CR>     | Neue Zeichen in Commodore- und frühen Mac-Systemen.      | \r             |
| U+2028    | Zeilentrenner | \<LS>     | [Wikipedia](https://de.wikipedia.org/wiki/Zeilenumbruch) |                |
| U+2029    | Absatztrenner | \<PS>     | [Wikipedia](https://de.wikipedia.org/wiki/Zeilenumbruch) |                |

## Kommentare

Kommentare werden verwendet, um Hinweise, Notizen, Vorschläge oder Warnungen in JavaScript-Code einzufügen. Dadurch wird es einfacher, den Code zu lesen und zu verstehen. Sie können auch verwendet werden, um Code zu deaktivieren, um seine Ausführung zu verhindern; dies kann ein wertvolles Debugging-Werkzeug sein.

JavaScript hat zwei langjährige Methoden, um Kommentare zum Code hinzuzufügen: Zeilenkommentare und Blockkommentare. Zusätzlich gibt es eine spezielle Hashbang-Kommentarsyntax.

### Zeilenkommentare

Die erste Methode ist der `//`-Kommentar; dadurch wird der gesamte Text, der ihm in derselben Zeile folgt, zu einem Kommentar. Zum Beispiel:

```js
function comment() {
  // This is a one line JavaScript comment
  console.log("Hello world!");
}
comment();
```

### Blockkommentare

Die zweite Methode ist der `/* */`-Stil, der viel flexibler ist.

Zum Beispiel können Sie ihn in einer einzigen Zeile verwenden:

```js
function comment() {
  /* This is a one line JavaScript comment */
  console.log("Hello world!");
}
comment();
```

Sie können auch mehrzeilige Kommentare erstellen, wie zum Beispiel:

```js
function comment() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log("Hello world!");
}
comment();
```

Sie können ihn auch in der Mitte einer Zeile verwenden, wenn Sie möchten, obwohl dies Ihren Code schwerer lesbar machen kann, sodass es mit Vorsicht verwendet werden sollte:

```js
function comment(x) {
  console.log("Hello " + x /* insert the value of x */ + " !");
}
comment("world");
```

Darüber hinaus können Sie es verwenden, um Code zu deaktivieren und so seine Ausführung zu verhindern, indem Sie den Code in einen Kommentar einfügen, wie zum Beispiel:

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

In diesem Fall wird der `console.log()`-Aufruf nie ausgeführt, da er sich innerhalb eines Kommentars befindet. Auf diese Weise können beliebig viele Codezeilen deaktiviert werden.

Blockkommentare, die mindestens einen Zeilenbegrenzer enthalten, verhalten sich wie [Zeilenbegrenzer](#zeilenbegrenzer) bei der [automatischen Einfügung von Semikolons](#automatische_semikolon-einfügung).

### Hashbang-Kommentare

Es gibt eine spezielle dritte Kommentarsyntax, den **Hashbang-Kommentar**. Ein Hashbang-Kommentar verhält sich genauso wie ein einzelner Zeilenkommentar (`//`), außer dass er mit `#!` beginnt und **nur am absoluten Anfang eines Skripts oder Moduls gültig ist**. Beachten Sie auch, dass vor dem `#!` kein Leerraum jeglicher Art erlaubt ist. Der Kommentar besteht aus allen Zeichen nach `#!` bis zum Ende der ersten Zeile; nur ein solcher Kommentar ist zulässig.

Hashbang-Kommentare in JavaScript ähneln [Shebangs in Unix](<https://en.wikipedia.org/wiki/Shebang_(Unix)>), die den Pfad zu einem bestimmten JavaScript-Interpreter angeben, den Sie zur Ausführung des Skripts verwenden möchten. Bevor der Hashbang-Kommentar standardisiert wurde, war er bereits de-facto in nicht-browserbasierten Hosts wie Node.js implementiert, wo er aus dem Quelltext entfernt wurde, bevor er an die Engine übergeben wurde. Ein Beispiel sieht folgendermaßen aus:

```js
#!/usr/bin/env node

console.log("Hello world");
```

Der JavaScript-Interpreter behandelt es als normalen Kommentar – es hat nur eine semantische Bedeutung für die Shell, wenn das Skript direkt in einer Shell ausgeführt wird.

> [!WARNING]
> Wenn Sie möchten, dass Skripte direkt in einer Shell-Umgebung ausgeführt werden können, kodieren Sie sie in UTF-8 ohne [BOM](https://en.wikipedia.org/wiki/Byte_order_mark). Obwohl ein BOM beim Ausführen von Code in einem Browser keine Probleme verursacht – da es während der UTF-8-Dekodierung entfernt wird, bevor der Quelltext analysiert wird – erkennt eine Unix/Linux-Shell den Hashbang nicht, wenn er von einem BOM-Zeichen vorhergegangen wird.

Sie sollten den Kommentarstil `#!` nur verwenden, um einen JavaScript-Interpreter anzugeben. In allen anderen Fällen verwenden Sie einfach einen `//`-Kommentar (oder einen mehrzeiligen Kommentar).

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

In JavaScript bestehen Bezeichner üblicherweise aus alphanumerischen Zeichen, Unterstrichen (`_`) und Dollarzeichen (`$`). Bezeichner dürfen nicht mit Zahlen beginnen. JavaScript-Bezeichner sind jedoch nicht nur auf {{Glossary("ASCII", "ASCII")}} beschränkt — viele Unicode-Codepunkte sind ebenfalls zulässig. Namentlich:

- Startzeichen können jedes Zeichen in der [ID_Start](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Start%7D) Kategorie plus `_` und `$` sein.
- Nach dem ersten Zeichen können Sie jedes Zeichen in der [ID_Continue](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Continue%7D) Kategorie plus U+200C (ZWNJ) und U+200D (ZWJ) verwenden.

> [!NOTE]
> Wenn Sie aus irgendeinem Grund selbst JavaScript-Quellcode parsen müssen, gehen Sie nicht davon aus, dass alle Bezeichner dem Muster `/[A-Za-z_$][\w$]*/` (d.h. nur ASCII) folgen! Der Bereich der Bezeichner kann durch das Regex `/[$_\p{ID_Start}][$\p{ID_Continue}]*/u` beschrieben werden (ohne Unicode-Escape-Sequenzen).

Darüber hinaus erlaubt JavaScript die Verwendung von [Unicode-Escape-Sequenzen](#unicode-escape-sequenzen) in der Form von `\u0000` oder `\u{000000}` in Bezeichnern, die denselben Zeichenfolgenwert wie die tatsächlichen Unicode-Zeichen kodieren. Zum Beispiel sind `你好` und `\u4f60\u597d` dieselben Bezeichner:

```js-nolint
const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello
```

Nicht alle Stellen akzeptieren den gesamten Bereich der Bezeichner. Bestimmte Syntaxen, wie Funktionsdeklarationen, Funktionsausdrücke und Variablendeklarationen, erfordern die Verwendung von Bezeichnernamen, die keine [reservierten Wörter](#reservierte_wörter) sind.

```js-nolint example-bad
function import() {} // Illegal: import is a reserved word.
```

Besonders hervorzuheben ist, dass private Eigenschaften und Objekteigenschaften reservierte Wörter erlauben.

```js
const obj = { import: "value" }; // Legal despite `import` being reserved
class C {
  #import = "value";
}
```

## Schlüsselwörter

_Schlüsselwörter_ sind Tokens, die wie Bezeichner aussehen, aber in JavaScript besondere Bedeutungen haben. Zum Beispiel zeigt das Schlüsselwort [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) vor einer Funktionsdeklaration an, dass die Funktion asynchron ist.

Einige Schlüsselwörter sind _reserviert_, was bedeutet, dass sie nicht als Bezeichner für Variablendeklarationen, Funktionsdeklarationen usw. verwendet werden können. Sie werden oft als _reservierte Wörter_ bezeichnet. [Eine Liste dieser reservierten Wörter](#reservierte_wörter) ist unten angegeben. Nicht alle Schlüsselwörter sind reserviert — zum Beispiel kann `async` überall als Bezeichner verwendet werden. Einige Schlüsselwörter sind nur _kontextuell reserviert_ — zum Beispiel ist `await` nur innerhalb des Rumpfes einer asynchronen Funktion reserviert, und `let` ist nur im Strict-Modus-Code oder in `const`- und `let`-Deklarationen reserviert.

Bezeichner werden immer nach _Zeichenfolgenwert_ verglichen, daher werden Escape-Sequenzen interpretiert. Zum Beispiel ist dies immer noch ein Syntaxfehler:

```js-nolint example-bad
const els\u{65} = 1;
// `els\u{65}` encodes the same identifier as `else`
```

### Reservierte Wörter

Diese Schlüsselwörter können nirgends im JavaScript-Quellcode als Bezeichner für Variablen, Funktionen, Klassen usw. verwendet werden.

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
- [`false`](#wahrheitswert-literal)
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
- [`true`](#wahrheitswert-literal)
- {{jsxref("Statements/try...catch", "try")}}
- {{jsxref("Operators/typeof", "typeof")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Operators/void", "void")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/with", "with")}}

Die folgenden sind nur reserviert, wenn sie im Strict-Modus-Code gefunden werden:

- {{jsxref("Statements/let", "let")}} (auch reserviert in `const`-, `let`- und Klassendeklarationen)
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- {{jsxref("Operators/yield", "yield")}} (auch reserviert in Generator-Funktionskörpern)

Die folgenden sind nur reserviert, wenn sie in Modulcode oder in asynchronen Funktionskörpern gefunden werden:

- [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

### Zukünftig reservierte Wörter

Die folgenden sind als zukünftige Schlüsselwörter durch die ECMAScript-Spezifikation reserviert. Sie haben derzeit keine spezielle Funktionalität, könnten dies jedoch in Zukunft tun, sodass sie nicht als Bezeichner verwendet werden können.

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

### Bezeichner mit speziellen Bedeutungen

Einige Bezeichner haben in einigen Kontexten eine besondere Bedeutung, ohne reservierte Wörter irgendeiner Art zu sein. Sie beinhalten:

- {{jsxref("Functions/arguments", "arguments")}} (kein Schlüsselwort, aber kann im Strict-Modus nicht als Bezeichner deklariert werden)
- `as` ([`import * as ns from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import))
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)
- {{jsxref("Global_Objects/eval", "eval")}} (kein Schlüsselwort, aber kann im Strict-Modus nicht als Bezeichner deklariert werden)
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

### Wahrheitswert-Literal

Siehe auch [Boolean-Typ](/de/docs/Web/JavaScript/Data_structures#boolean_type) für weitere Informationen.

```js-nolint
true
false
```

### Numerische Literale

Die [Nummer](/de/docs/Web/JavaScript/Data_structures#number_type) und [BigInt](/de/docs/Web/JavaScript/Data_structures#bigint_type) Typen verwenden numerische Literale.

#### Dezimal

```js-nolint
1234567890
42
```

Dezimalziffern können mit einer Null (`0`) beginnen, die von einer weiteren Dezimalziffer gefolgt wird, aber wenn alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies wird als veraltete Syntax betrachtet, und Zahl-Literale, die mit `0` beginnen, egal ob sie als Oktal oder Dezimal interpretiert werden, verursachen einen Syntaxfehler im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) — verwenden Sie also das Präfix `0o` stattdessen.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

##### Exponential

Das Dezimalexponential-Literal wird durch das folgende Format spezifiziert: `beN`; wobei `b` eine Basisnummer (integer oder floating) ist, gefolgt von einem `E` oder `e` Zeichen (das als Separator oder _Exponential-Indikator_ dient) und `N`, welches eine _Exponential- oder Potenzzahl_ – eine ganzzahlige Zahl mit Vorzeichen – ist.

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

Die binäre Zahlsyntax verwendet eine führende Null gefolgt von einem Klein- oder Großbuchstaben "B" (`0b` oder `0B`). Jedes Zeichen nach dem `0b`, das nicht 0 oder 1 ist, beendet die Literalfolge.

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### Oktal

Die Oktalzahlsyntax verwendet eine führende Null gefolgt von einem Klein- oder Großbuchstaben "O" (`0o` oder `0O`). Jedes Zeichen nach dem `0o`, das außerhalb des Bereichs (01234567) liegt, beendet die Literalfolge.

```js-nolint
0O755 // 493
0o644 // 420
```

#### Hexadezimal

Die hexadezimale Zahlsyntax verwendet eine führende Null gefolgt von einem Klein- oder Großbuchstaben "X" (`0x` oder `0X`). Jedes Zeichen nach dem `0x`, das außerhalb des Bereichs (0123456789ABCDEF) liegt, beendet die Literalfolge.

```js-nolint
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

#### BigInt-Literal

Der [BigInt](/de/docs/Web/JavaScript/Data_structures#bigint_type) Typ ist ein numerischer primitiver Typ in JavaScript, der Ganzzahlen mit beliebiger Präzision darstellen kann. BigInt-Literale werden erzeugt, indem dem Ende einer Ganzzahl ein `n` angefügt wird.

```js-nolint
123456789123456789n     // 123456789123456789
0o777777777777n         // 68719476735
0x123456789ABCDEFn      // 81985529216486895
0b11101001010101010101n // 955733
```

BigInt-Literale können nicht mit `0` beginnen, um Verwechslungen mit veralteten Oktal-Literalen zu vermeiden.

```js-nolint example-bad
0755n; // SyntaxError: invalid BigInt syntax
```

Für oktale `BigInt`-Zahlen verwenden Sie immer Null gefolgt vom Buchstaben "o" (Groß- oder Kleinbuchstabe):

```js example-good
0o755n;
```

Weitere Informationen über `BigInt` finden Sie auch in den [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Data_structures#bigint_type).

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

### Zeichenkettenliterale

Ein [Zeichenketten](/de/docs/Web/JavaScript/Data_structures#string_type)-Literale ist eine oder mehrere Unicode-Codepunkte, die in einfache oder doppelte Anführungszeichen eingeschlossen sind. Unicode-Codepunkte können auch durch eine Escape-Sequenz dargestellt werden. Alle Codepunkte können buchstäblich in einem Zeichenketten-Literal erscheinen, außer diesen Codepunkten:

- U+005C \ (Backslash)
- U+000D \<CR>
- U+000A \<LF>
- Die gleiche Art von Anführungszeichen, die das Zeichenketten-Literal beginnt

Jeder Codepunkt kann in Form einer Escape-Sequenz erscheinen. Zeichenketten-Literale werden zu ECMAScript-Stringwerten ausgewertet. Beim Erzeugen dieser Stringwerte werden Unicode-Codepunkte als UTF-16 kodiert.

```js-nolint
'foo'
"bar"
```

Die folgenden Unterabschnitte beschreiben verschiedene Escape-Sequenzen (`\` gefolgt von einem oder mehreren Zeichen), die in Zeichenketten-Literalen verfügbar sind. Jede nicht aufgeführte Escape-Sequenz wird zu einem „Identitäts-Escape“, der zum Codepunkt selbst wird. Zum Beispiel ist `\z` dasselbe wie `z`. Es gibt eine veraltete Oktal-Escape-Sequenz-Syntax, die auf der Seite [Veraltete und obsolet Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) beschrieben wird. Viele dieser Escape-Sequenzen sind auch in regulären Ausdrücken gültig – siehe [Zeichenescapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

#### Escape-Sequenzen

Sonderzeichen können mit Escape-Sequenzen kodiert werden:

| Escape-Sequenz                                            | Unicode-Codepunkt                                  |
| --------------------------------------------------------- | -------------------------------------------------- |
| `\0`                                                      | Null-Zeichen (U+0000 NULL)                         |
| `\'`                                                      | Einfaches Anführungszeichen (U+0027 APOSTROPHE)    |
| `\"`                                                      | Doppelte Anführungszeichen (U+0022 QUOTATION MARK) |
| `\\`                                                      | Backslash (U+005C REVERSE SOLIDUS)                 |
| `\n`                                                      | Neue Zeile (U+000A LINE FEED; LF)                  |
| `\r`                                                      | Wagenrücklauf (U+000D CARRIAGE RETURN; CR)         |
| `\v`                                                      | Vertikaler Tabulator (U+000B LINE TABULATION)      |
| `\t`                                                      | Tabulator (U+0009 CHARACTER TABULATION)            |
| `\b`                                                      | Rückschritt (U+0008 BACKSPACE)                     |
| `\f`                                                      | Seitenvorschub (U+000C FORM FEED)                  |
| `\` gefolgt von einem [Zeilenbegrenzer](#zeilenbegrenzer) | Leerzeichen                                        |

Die letzte Escape-Sequenz, `\` gefolgt von einem Zeilenbegrenzer, ist nützlich, um ein Zeichenketten-Literal über mehrere Zeilen zu verteilen, ohne dessen Bedeutung zu ändern.

```js
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Stellen Sie sicher, dass sich nach dem Backslash kein Leerzeichen oder ein anderes Zeichen befindet (außer ein Zeilenumbruch), da dies sonst nicht funktioniert. Wenn die nächste Zeile eingerückt ist, sind die zusätzlichen Leerzeichen ebenfalls im Wert der Zeichenkette vorhanden.

Sie können auch den [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition)-Operator verwenden, um mehrere Zeichenketten zusammenzufügen, wie folgt:

```js
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Beide der obigen Methoden führen zu identischen Zeichenketten.

#### Hexadezimale Escape-Sequenzen

Hexadezimale Escape-Sequenzen bestehen aus `\x`, gefolgt von genau zwei hexadezimalen Ziffern, die eine Code-Einheit oder einen Codepunkt im Bereich 0x0000 bis 0x00FF darstellen.

```js
"\xA9"; // "©"
```

#### Unicode-Escape-Sequenzen

Eine Unicode-Escape-Sequenz besteht aus genau vier hexadezimalen Ziffern, die auf `\u` folgen. Sie repräsentiert eine Code-Einheit in der UTF-16-Kodierung. Für Codepunkte U+0000 bis U+FFFF ist die Code-Einheit gleich dem Codepunkt. Codepunkte U+10000 bis U+10FFFF erfordern zwei Escape-Sequenzen, die die beiden Codeeinheiten (ein Surrogatpaar) darstellen, die verwendet werden, um das Zeichen zu kodieren; das Surrogatpaar ist vom Codepunkt getrennt.

Siehe auch {{jsxref("String.fromCharCode()")}} und {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Unicode-Codepunkt-Escapes

Ein Unicode-Codepunkt-Escape besteht aus `\u{`, gefolgt von einem Codepunkt im hexadezimalen System, gefolgt von `}`. Der Wert der hexadezimale Ziffern muss im Bereich von 0 bis 0x10FFFF liegen. Codepunkte im Bereich U+10000 bis U+10FFFF müssen nicht als Surrogatpaar dargestellt werden.

Siehe auch {{jsxref("String.fromCodePoint()")}} und {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// the same character represented as a surrogate pair
"\uD87E\uDC04";
```

### Reguläre Ausdrucks-Literale

Reguläre Ausdrucks-Literale sind von zwei Schrägstrichen (`/`) umschlossen. Der Lexer konsumiert alle Zeichen bis zum nächsten nicht-escaped Schrägstrich oder bis zum Ende der Zeile, es sei denn, der Schrägstrich erscheint innerhalb einer Zeichenklasse (`[]`). Einige Zeichen (namentlich die, die [Bezeichner-Teile](#bezeichner) sind) können nach dem schließenden Schrägstrich erscheinen und Flags bezeichnen.

Die lexikalische Grammatik ist sehr nachsichtig: Nicht alle regulären Ausdrucksliterale, die als ein Token identifiziert werden, sind gültige reguläre Ausdrücke.

Siehe auch {{jsxref("RegExp")}} für weitere Informationen.

```js-nolint
/ab+c/g
/[/]/
```

Ein reguläres Ausdrucks-Literal kann nicht mit zwei Schrägstrichen (`//`) beginnen, da dies ein Zeilenkommentar wäre. Um einen leeren regulären Ausdruck anzugeben, verwenden Sie `/(?:)/`.

### Template-Literale

Ein Template-Literal besteht aus mehreren Tokens: `` `xxx${ `` (Template-Kopf), `}xxx${` (Template-Mitte) und `` }xxx` `` (Template-Ende) sind einzelne Tokens, während dazwischen beliebige Ausdrücke kommen können.

Siehe auch [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) für weitere Informationen.

```js-nolint
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag`string text ${expression} string text`
```

## Automatische Semikolon-Einfügung

Einige [JavaScript-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements)' Syntaxdefinitionen erfordern Semikolons (`;`) am Ende. Diese schließen ein:

- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- [Ausdrucksanweisungen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement)
- [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue), [`break`](/de/docs/Web/JavaScript/Reference/Statements/break), [`return`](/de/docs/Web/JavaScript/Reference/Statements/return), [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)
- Klassenfeld-Deklarationen ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_properties))
- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import), [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)

Jedoch ist JavaScript, um die Sprache zugänglicher und bequemer zu machen, in der Lage, Semikolons automatisch einzufügen, wenn es den Token-Stream verarbeitet, sodass einige ungültige Token-Sequenzen in gültige Syntax „korrigiert“ werden können. Dieser Schritt erfolgt, nachdem der Programmtext entsprechend der lexikalischen Grammatik in Tokens geparst wurde. Es gibt drei Fälle, in denen Semikolons automatisch eingefügt werden:

1\. Wenn ein Token, das nicht durch die Grammatik erlaubt ist, auftritt und es vom vorhergehenden Token durch mindestens einen [Zeilenbegrenzer](#zeilenbegrenzer) (einschließlich eines Blockkommentars, der mindestens einen Zeilenbegrenzer enthält) getrennt ist oder das Token "}" ist, wird ein Semikolon vor dem Token eingefügt.

```js-nolint
{ 1
2 } 3

// is transformed by ASI into:

{ 1
;2 ;} 3;

// Which is valid grammar encoding three statements,
// each consisting of a number literal
```

Das End- ")" von [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) wird auch als besonderer Fall durch diese Regel behandelt.

```js-nolint
do {
  // ...
} while (condition) /* ; */ // ASI here
const a = 1
```

Jedoch werden Semikolons nicht eingefügt, wenn dann das Semikolon zum Separator in der Kopfzeile der [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Anweisung wird.

```js-nolint example-bad
for (
  let a = 1 // No ASI here
  a < 10 // No ASI here
  a++
) {}
```

Semikolons werden auch niemals als [leere Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Empty) eingefügt. Zum Beispiel in dem unten stehenden Code: Wenn ein Semikolon nach ")" eingefügt würde, wäre der Code gültig, mit einer leeren Anweisung als Körper der `if`-Anweisung und der `const`-Deklaration, die eine separate Anweisung wäre. Da jedoch automatisch eingefügte Semikolons nicht zu leeren Anweisungen werden, wird dies zu einer [Deklaration](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations), die der Körper der `if`-Anweisung wird, was nicht gültig ist.

```js-nolint example-bad
if (Math.random() > 0.5)
const x = 1 // SyntaxError: Unexpected token 'const'
```

2\. Wenn das Ende des Eingabestreams von Tokens erreicht wird und der Parser nicht in der Lage ist, den einzelnen Eingabestream als vollständiges Programm zu parsen, wird ein Semikolon am Ende eingefügt.

```js-nolint
const a = 1 /* ; */ // ASI here
```

Diese Regel ist eine Ergänzung zur vorhergehenden Regel, insbesondere für den Fall, dass es kein „störendes Token“ gibt, sondern das Ende des Eingabestreams erreicht ist.

3\. Wenn die Grammatik an irgendeiner Stelle Zeilenbegrenzer verbietet, aber ein Zeilenbegrenzer gefunden wird, wird ein Semikolon eingefügt. Diese Stellen umfassen:

- `expr <hier> ++`, `expr <hier> --`
- `continue <hier> lbl`
- `break <hier> lbl`
- `return <hier> expr`
- `throw <hier> expr`
- `yield <hier> expr`
- `yield <hier> * expr`
- `(param) <hier> => {}`
- `async <hier> function`, `async <hier> prop()`, `async <hier> function*`, `async <hier> *prop()`, `async <hier> (param) <hier> => {}`

Hier wird [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment) nicht als Postfix-Operator angesehen, der auf die Variable `b` angewendet wird, da ein Zeilenbegrenzer zwischen `b` und `++` steht.

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

Beachten Sie, dass ASI nur ausgelöst wird, wenn ein Zeilenumbruch Token trennt, die sonst ungültige Syntax ergeben würden. Wenn das nächste Token als Teil einer gültigen Struktur geparst werden kann, werden keine Semikolons eingefügt. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()

const b = 1
[1, 2, 3].forEach(console.log)
```

Da `()` als Funktionsaufruf angesehen werden kann, würde es normalerweise nicht ASI auslösen. Ebenso kann `[]` ein Mitgliedszugriff sein. Der obige Code ist gleichbedeutend mit:

```js-nolint example-bad
const a = 1(1).toString();

const b = 1[1, 2, 3].forEach(console.log);
```

Dies passiert, um gültige Syntax zu sein. `1[1, 2, 3]` ist ein [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) mit einem [Komma](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator)-verbundenen Ausdruck. Daher erhalten Sie Fehler wie "1 is not a function" und "Cannot read properties of undefined (reading 'forEach')" beim Ausführen des Codes.

Innerhalb von Klassen können Klassenfelder und Generator-Methoden ebenfalls eine Falle darstellen.

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

Es gibt folgende Regeln für den Umgang mit ASI, wenn Sie einen Semikolon-losen Stil durchsetzen möchten:

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

- Ebenso sollte das Label-Identifikator nach `break` oder `continue` in derselben Zeile wie das Schlüsselwort stehen.

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

- Das `=>` eines Pfeilfunktionen sollte in derselben Zeile wie das Ende ihrer Parameter stehen.

  ```js-nolint example-bad
  const foo = (a, b)
    => a + b
  ```

  ```js-nolint example-good
  const foo = (a, b) =>
    a + b
  ```

- Das `async` von asynchronen Funktionen, Methoden usw. kann nicht direkt von einem Zeilenbegrenzer gefolgt werden.

  ```js-nolint example-bad
  async
  function foo() {}
  ```

  ```js-nolint example-good
  async function
  foo() {}
  ```

- Wenn eine Zeile mit einem der folgenden Zeichen beginnt: `(`, `[`, `` ` ``, `+`, `-`, `/` (wie in regulären Ausdrucksliteralen), setzen Sie ein Semikolon vor oder beenden die vorherige Zeile mit einem Semikolon.

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

- Klassenfelder sollten vorzugsweise immer mit Semikolons beendet werden — zusätzlich zur vorherigen Regel (die eine Felddeklaration gefolgt von einer [berechneten Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) einschließt, da letztere mit `[` beginnt), sind Semikolons auch zwischen einer Felddeklaration und einer Generatormethode erforderlich.

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
- [JavaScript escape sequences](https://mathiasbynens.be/notes/javascript-escapes) von Mathias Bynens (2011)

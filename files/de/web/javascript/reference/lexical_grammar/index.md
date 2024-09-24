---
title: Lexikalische Grammatik
slug: Web/JavaScript/Reference/Lexical_grammar
l10n:
  sourceCommit: 4e5ecbf646a146b953da37bbdf22fabaefe92edb
---

{{jsSidebar("More")}}

Diese Seite beschreibt JavaScript's lexikalische Grammatik. JavaScript-Quelldatei ist nur eine Abfolge von Zeichen – damit der Interpreter sie versteht, muss der String in eine strukturiertere Darstellung _geparst_ werden. Der erste Schritt des Parsens wird [lexikalische Analyse](https://de.wikipedia.org/wiki/Lexikalische_Analyse) genannt, bei dem der Text von links nach rechts gelesen und in eine Abfolge von einzelnen, atomaren Eingabeelementen umgewandelt wird. Einige Eingabeelemente sind für den Interpreter unbedeutend und werden nach diesem Schritt entfernt – dazu gehören [Leerzeichen](#leerzeichen) und [Kommentare](#kommentare). Die anderen, einschließlich [Bezeichner](#bezeichner), [Schlüsselwörter](#schlüsselwörter), [Literale](#literale) und Punzken (meistens [Operatoren](/de/docs/Web/JavaScript/Reference/Operators)), werden für die weitere Syntaxanalyse verwendet. [Zeilenenden](#zeilenendenterminatoren) und mehrzeilige Kommentare sind auch syntaktisch unbedeutend, aber sie leiten den Prozess der [automatischen Einfügung von Semikolons](#automatische_einfügung_von_semikolons), um bestimmte ungültige Token-Abfolgen gültig zu machen.

## Formatsteuerungszeichen

Formatsteuerungszeichen haben keine visuelle Darstellung, werden aber verwendet, um die Interpretation des Texts zu steuern.

| Codepunkt | Name                  | Abkürzung   | Beschreibung                                                                                                                                                                                                                     |
| --------- | --------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| U+200C    | Breitenloser Nichtverbinder | \<ZWNJ>      | Zwischen Zeichen gesetzt, um zu verhindern, dass sie in bestimmten Sprachen zu Ligaturen verbunden werden ([Wikipedia](https://de.wikipedia.org/wiki/Zero-width_non-joiner)).                                                       |
| U+200D    | Breitenloser Verbinder   | \<ZWJ>       | Zwischen Zeichen gesetzt, die normalerweise nicht verbunden werden, um zu bewirken, dass sie in bestimmten Sprachen in ihrer verbundenen Form dargestellt werden ([Wikipedia](https://de.wikipedia.org/wiki/Zero-width_joiner)). |
| U+FEFF    | Byte-Order-Mark       | \<BOM>       | Am Anfang des Skripts, um es als Unicode zu kennzeichnen und die Erkennung der Textkodierung und der Byte-Reihenfolge zu ermöglichen ([Wikipedia](https://de.wikipedia.org/wiki/Byte_order_mark)).                               |

Im JavaScript-Quelltext werden \<ZWNJ> und \<ZWJ> als [Bezeichner](#bezeichner) Teile betrachtet, während \<BOM> (auch als breitenloser No-Break-Bereich \<ZWNBSP> bekannt, wenn er nicht am Anfang des Textes steht) als [Leerzeichen](#leerzeichen) betrachtet wird.

## Leerzeichen

[Leerzeichen](/de/docs/Glossary/Whitespace) Zeichen verbessern die Lesbarkeit des Quelltextes und trennen Token voneinander. Diese Zeichen sind in der Regel nicht notwendig für die Funktionalität des Codes. [Minifikation-Tools](https://de.wikipedia.org/wiki/Minifikation_%28programming%29) werden oft verwendet, um Leerzeichen zu entfernen, um die Datenmenge zu reduzieren, die übertragen werden muss.

| Codepunkt | Name                           | Abkürzung | Beschreibung                                                                                          | Escape-Sequenz |
| --------- | ------------------------------ | --------- | ----------------------------------------------------------------------------------------------------- | -------------- |
| U+0009    | Zeichentabulator               | \<TAB>    | Horizontale Tabulatoren                                                                               | \t             |
| U+000B    | Linientabulation               | \<VT>     | Vertikale Tabulatoren                                                                                 | \v             |
| U+000C    | Seitenvorschub                 | \<FF>     | Steuerzeichen zum Seitenumbruch ([Wikipedia](https://de.wikipedia.org/wiki/Page_break#Form_feed)).   | \f             |
| U+0020    | Leerzeichen                    | \<SP>     | Normales Leerzeichen                                                                                  |                |
| U+00A0    | Geschütztes Leerzeichen        | \<NBSP>   | Normales Leerzeichen, aber ohne Möglichkeit eines Zeilenumbruchs                                      |                |
| U+FEFF    | Breitenloses geschütztes Leerzeichen | \<ZWNBSP>  | Wenn nicht am Anfang eines Skripts, ist das BOM-Mark ein normales Leerzeichen.                        |                |
| Andere    | Andere Unicode-Leerzeichen     | \<USP>    | [Zeichen in der "Space_Separator"-Kategorie][space separator set]                                      |                |

[space separator set]: https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D

> [!NOTE]
> Unter den [Zeichen mit der "White_Space"-Eigenschaft, die aber nicht in der "Space_Separator"-Kategorie sind](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BWhite_Space%7D%26%5CP%7BGeneral_Category%3DSpace_Separator%7D), werden U+0009, U+000B und U+000C immer noch als Leerzeichen in JavaScript behandelt; U+0085 "NEXT LINE" hat keine besondere Rolle; andere werden zum Satz der [Zeilenenden](#zeilenendenterminatoren).

> [!NOTE]
> Änderungen am Unicode-Standard, der von der JavaScript-Engine verwendet wird, können das Verhalten von Programmen beeinflussen. Beispielweise hat ES2016 den referenzierten Unicode-Standard von 5.1 auf 8.0.0 aktualisiert, wodurch U+180E "MONGOLIAN VOWEL SEPARATOR" von der Kategorie "Space_Separator" in die Kategorie "Format (Cf)" verschoben wurde und kein Leerzeichen mehr darstellt. Folglich änderte sich das Ergebnis von [`"\u180E".trim().length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim) von `0` auf `1`.

## Zeilenendenterminatoren

Zusätzlich zu [Leerzeichen](#leerzeichen) werden Zeilenenden verwendet, um die Lesbarkeit des Quelltextes zu verbessern. In manchen Fällen können Zeilenendeterminatoren die Ausführung von JavaScript-Code beeinflussen, da es einige Stellen gibt, an denen sie verboten sind. Zeilenendeterminatoren beeinflussen auch den Prozess der [automatischen Einfügung von Semikolons](#automatische_einfügung_von_semikolons).

Außerhalb des Kontextes der lexikalischen Grammatik werden Leerzeichen und Zeilenendeterminatoren oft vermischt. Zum Beispiel entfernt {{jsxref("String.prototype.trim()")}} alle Leerzeichen und Zeilenendeterminatoren vom Anfang und Ende eines Strings. Der `\s` [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) in regulären Ausdrücken passt auf alle Leerzeichen und Zeilenendeterminatoren.

Nur die folgenden Unicode-Codepunkte werden in ECMAScript als Zeilenendeterminatoren behandelt, andere zeilenbrechende Zeichen werden als Leerzeichen behandelt (zum Beispiel wird Next Line, NEL, U+0085 als Leerzeichen betrachtet).

| Codepunkt | Name                | Abkürzung | Beschreibung                                            | Escape-Sequenz |
| --------- | ------------------- | --------- | ------------------------------------------------------ | -------------- |
| U+000A    | Zeilenumbruch (Line Feed) | \<LF>    | Neues Zeilenzeichen in UNIX-Systemen.                   | \n             |
| U+000D    | Wagenrücklauf                | \<CR>    | Neues Zeilenzeichen in Commodore- und frühen Mac-Systemen. | \r             |
| U+2028    | Zeilentrenner               | \<LS>    | [Wikipedia](https://de.wikipedia.org/wiki/Newline)     |                |
| U+2029    | Absatztrenner              | \<PS>    | [Wikipedia](https://de.wikipedia.org/wiki/Newline)     |                |

## Kommentare

Kommentare werden verwendet, um Hinweise, Notizen, Vorschläge oder Warnungen zum JavaScript-Code hinzuzufügen. Dies kann es einfacher machen, den Code zu lesen und zu verstehen. Sie können auch verwendet werden, um Code zu deaktivieren, damit er nicht ausgeführt wird; das kann ein wertvolles Debugging-Tool sein.

JavaScript hat zwei lang bestehende Möglichkeiten, Kommentare in den Code einzufügen: Zeilenkommentare und Blockkommentare. Zusätzlich gibt es eine spezielle Hashbang-Kommentarsyntax.

### Zeilenkommentare

Die erste Möglichkeit ist der `//` Kommentar; dies macht den gesamten Text, der ihm auf der gleichen Zeile folgt, zu einem Kommentar. Zum Beispiel:

```js
function comment() {
  // Dies ist ein einzeiliger JavaScript-Kommentar
  console.log("Hello world!");
}
comment();
```

### Blockkommentare

Die zweite Möglichkeit ist der `/* */` Stil, der viel flexibler ist.

Zum Beispiel können Sie ihn in einer einzelnen Zeile verwenden:

```js
function comment() {
  /* Dies ist ein einzeiliger JavaScript-Kommentar */
  console.log("Hello world!");
}
comment();
```

Sie können auch mehrzeilige Kommentare erstellen, wie hier:

```js
function comment() {
  /* Dieser Kommentar erstreckt sich über mehrere Zeilen. Beachten
     Sie, dass wir den Kommentar nicht beenden müssen, bis wir fertig sind. */
  console.log("Hello world!");
}
comment();
```

Sie können ihn auch in der Mitte einer Zeile verwenden, wenn Sie möchten, obwohl dies Ihren Code schwerer lesbar machen kann, daher sollte dies mit Vorsicht verwendet werden:

```js
function comment(x) {
  console.log("Hello " + x /* fügen Sie den Wert von x ein */ + " !");
}
comment("world");
```

Darüber hinaus können Sie ihn verwenden, um Code zu deaktivieren, damit er nicht ausgeführt wird, indem Sie Code in einem Kommentar einschließen, wie hier:

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

In diesem Fall wird der `console.log()`-Aufruf nie ausgeführt, da er in einem Kommentar enthalten ist. Eine beliebige Anzahl von Codezeilen kann auf diese Weise deaktiviert werden.

Blockkommentare, die mindestens einen Zeilenabschluss enthalten, verhalten sich wie [Zeilenabschlüsse](#zeilenendenterminatoren) bei der [automatischen Einfügung von Semikolons](#automatische_einfügung_von_semikolons).

### Hashbang-Kommentare

Es gibt eine spezielle dritte Kommentarsyntax, den **Hashbang-Kommentar**. Ein Hashbang-Kommentar verhält sich genau wie ein einzeiliger (`//`) Kommentar, außer dass er mit `#!` beginnt und **nur am absoluten Anfang eines Skripts oder Moduls gültig ist**. Beachten Sie auch, dass vor dem `#!` kein Leerzeichen erlaubt ist. Der Kommentar besteht aus allen Zeichen nach `#!` bis zum Ende der ersten Zeile; nur ein solcher Kommentar ist erlaubt.

Hashbang-Kommentare in JavaScript ähneln [Shebangs in Unix](<https://de.wikipedia.org/wiki/Shebang_(Unix)>), die den Pfad zu einem bestimmten JavaScript-Interpreter bereitstellen, den Sie zum Ausführen des Skripts verwenden möchten. Bevor der Hashbang-Kommentar standardisiert wurde, war er bereits in Nicht-Browser-Hosts wie Node.js de-facto implementiert, wo er aus dem Quelltext entfernt wurde, bevor er an die Engine übergeben wurde. Ein Beispiel sieht wie folgt aus:

```js
#!/usr/bin/env node

console.log("Hello world");
```

Der JavaScript-Interpreter behandelt ihn als normalen Kommentar — er hat nur eine semantische Bedeutung für die Shell, wenn das Skript direkt in einer Shell ausgeführt wird.

> [!WARNING]
> Wenn Sie möchten, dass Skripte direkt in einer Shell-Umgebung ausgeführt werden können, kodieren Sie sie in UTF-8 ohne ein [BOM](https://de.wikipedia.org/wiki/Byte_order_mark). Obwohl ein BOM keine Probleme für Code verursachen wird, der im Browser ausgeführt wird — da es während der UTF-8-Dekodierung entfernt wird, bevor der Quelltext analysiert wird — erkennt eine Unix/Linux-Shell das Hashbang nicht, wenn es von einem BOM-Zeichen vorangestellt wird.

Sie sollten den `#!`-Kommentarstil nur verwenden, um einen JavaScript-Interpreter anzugeben. In allen anderen Fällen sollten Sie nur einen `//`-Kommentar (oder einen mehrzeiligen Kommentar) verwenden.

## Bezeichner

Ein _Bezeichner_ wird verwendet, um einen Wert mit einem Namen zu verknüpfen. Bezeichner können an verschiedenen Stellen verwendet werden:

```js
const decl = 1; // Variablendeklaration (kann auch `let` oder `var` sein)
function fn() {} // Funktionsdeklaration
const obj = { key: "value" }; // Schlüssel von Objekten
// Klassen-Deklaration
class C {
  #priv = "value"; // Private Eigenschaft
}
lbl: console.log(1); // Etikett
```

In JavaScript bestehen Bezeichner normalerweise aus alphanumerischen Zeichen, Unterstrichen (`_`) und Dollar-Zeichen (`$`). Bezeichner dürfen nicht mit Ziffern beginnen. JavaScript-Bezeichner sind jedoch nicht nur auf {{Glossary("ASCII")}} beschränkt – viele Unicode-Codepunkte sind ebenfalls erlaubt. Genauer gesagt kann jedes Zeichen in der [ID_Start](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Start%7D)-Kategorie einen Bezeichner beginnen, während jedes Zeichen in der [ID_Continue](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Continue%7D)-Kategorie nach dem ersten Zeichen erscheinen kann.

> [!NOTE]
> Wenn Sie aus irgendeinem Grund JavaScript-Quelltext selbst analysieren müssen, gehen Sie nicht davon aus, dass alle Bezeichner dem Muster `/[A-Za-z_$][\w$]*/` (d.h. nur ASCII!) entsprechen! Der Bereich der Bezeichner kann durch den regulären Ausdruck `/[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*/u` beschrieben werden (ohne Unicode Escape Sequenzen).

Zusätzlich erlaubt JavaScript die Verwendung von [Unicode-Escape-Sequenzen](#unicode-escape-sequenzen) in der Form von `\u0000` oder `\u{000000}` in Bezeichnern, die denselben String-Wert wie die tatsächlichen Unicode-Zeichen kodieren. Zum Beispiel sind `你好` und `\u4f60\u597d` die gleichen Bezeichner:

```js-nolint
const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello
```

Nicht alle Stellen akzeptieren die vollständige Palette der Bezeichner. Bestimmte Syntaxen, wie Funktionsdeklarationen, Funktionsausdrücke und Variablendeklarationen erfordern die Verwendung von Bezeichnernamen, die keine [Reservierten Wörter](#reservierte_wörter) sind.

```js-nolint example-bad
function import() {} // Ungültig: import ist ein reserviertes Wort.
```

Am auffälligsten erlauben private Eigenschaften und Objekteigenschaften reservierte Wörter.

```js
const obj = { import: "value" }; // Legal, obwohl `import` reserviert ist
class C {
  #import = "value";
}
```

## Schlüsselwörter

_Schlüsselwörter_ sind Tokens, die wie Bezeichner aussehen, jedoch in JavaScript eine spezielle Bedeutung haben. Zum Beispiel zeigt das Schlüsselwort [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) vor einer Funktionsdeklaration an, dass die Funktion asynchron ist.

Einige Schlüsselwörter sind _reserviert_, was bedeutet, dass sie nicht als Bezeichner für Variablendeklarationen, Funktionsdeklarationen, etc. verwendet werden können. Sie werden oft als _reservierte Wörter_ bezeichnet. [Eine Liste dieser reservierten Wörter](#reservierte_wörter) ist unten aufgeführt. Nicht alle Schlüsselwörter sind reserviert — zum Beispiel kann `async` überall als Bezeichner verwendet werden. Einige Schlüsselwörter sind nur _kontextuell reserviert_ — zum Beispiel ist `await` nur innerhalb des Körpers einer asynchronen Funktion reserviert, und `let` ist nur in striktem Modus-Code reserviert oder bei `const`- und `let`-Deklarationen.

Bezeichner werden immer nach _String-Wert_ verglichen, sodass Escape-Sequenzen interpretiert werden. Zum Beispiel ist dies immer noch ein Syntaxfehler:

```js-nolint example-bad
const els\u{65} = 1;
// `els\u{65}` kodiert denselben Bezeichner wie `else`
```

### Reservierte Wörter

Diese Schlüsselwörter können nicht als Bezeichner für Variablen, Funktionen, Klassen, etc. irgendwo im JavaScript-Quelltext verwendet werden.

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

Die folgenden sind nur reserviert, wenn sie im strikten Modus-Code gefunden werden:

- {{jsxref("Statements/let", "let")}} (auch in `const`, `let` und Klassendeklarationen reserviert)
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- {{jsxref("Operators/yield", "yield")}} (auch in Generator-Funktionskörpern reserviert)

Die folgenden sind nur reserviert, wenn sie in Modulcode oder in asynchronen Funktionskörpern gefunden werden:

- [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

### Zukünftig reservierte Wörter

Die folgenden sind als zukünftige Schlüsselwörter durch die ECMAScript-Spezifikation reserviert. Sie haben derzeit keine spezielle Funktionalität, könnten aber in der Zukunft eine bekommen, weshalb sie nicht als Bezeichner verwendet werden können.

Diese sind immer reserviert:

- `enum`

Die folgenden sind nur reserviert, wenn sie im strikten Modus-Code gefunden werden:

- `implements`
- `interface`
- `package`
- `private`
- `protected`
- `public`

#### In älteren Standards zukünftig reservierte Wörter

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

### Bezeichner mit spezieller Bedeutung

Einige Bezeichner haben in bestimmten Kontexten eine spezielle Bedeutung, ohne reservierte Wörter irgendeiner Art zu sein. Dazu gehören:

- {{jsxref("Functions/arguments", "arguments")}} (kein Schlüsselwort, kann aber im strikten Modus nicht als Bezeichner deklariert werden)
- `as` ([`import * as ns from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import))
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)
- {{jsxref("Global_Objects/eval", "eval")}} (kein Schlüsselwort, kann aber im strikten Modus nicht als Bezeichner deklariert werden)
- `from` ([`import x from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import))
- {{jsxref("Functions/get", "get")}}
- [`of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- {{jsxref("Functions/set", "set")}}

## Literale

> [!NOTE]
> Dieser Abschnitt bespricht Literale, die atomare Tokens sind. [Objektliterale](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Arrayliterale](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation) sind [Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators), die aus einer Reihe von Tokens bestehen.

### Null-Literal

Siehe auch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) für mehr Informationen.

```js-nolint
null
```

### Boolean-Literal

Siehe auch [Boolean-Typ](/de/docs/Web/JavaScript/Data_structures#boolean_type) für mehr Informationen.

```js-nolint
true
false
```

### Numerische Literale

Die [Number](/de/docs/Web/JavaScript/Data_structures#number_type) und [BigInt](/de/docs/Web/JavaScript/Data_structures#bigint_type) Typen verwenden numerische Literale.

#### Dezimal

```js-nolint
1234567890
42
```

Dezimal-Literale können mit einer Null (`0`) gefolgt von einer weiteren Dezimalstelle beginnen, aber wenn alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies wird als Legacy-Syntax betrachtet, und Zahlenliterale mit der Präfixierung `0`, ob als Oktal oder Dezimal interpretiert, verursachen einen Syntaxfehler im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) – deshalb verwenden Sie das Präfix `0o` stattdessen.

```js-nolint example-bad
0888 // 888 wird als Dezimalwert interpretiert
0777 // wird als Oktalwert interpretiert, 511 im Dezimalsystem
```

##### Exponentiell

Das dezimale exponentielle Literal wird durch das folgende Format spezifiziert: `beN`; wobei `b` eine Basiseinzahl (ganz oder Gleitkomma) ist, gefolgt von einem `E` oder `e`-Zeichen (das als Trennzeichen oder _Exponenten-Indikator_ dient) und `N`, welches der _Exponential- oder Potenzwert_ ist – eine vorzeichenbehaftete ganze Zahl.

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

Die Binärzahlsyntax verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "B" (`0b` oder `0B`). Jedes Zeichen nach dem `0b`, das nicht 0 oder 1 ist, beendet die Lesezeile von Literalwerten.

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### Oktal

Die Oktalzahlsyntax verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "O" (`0o` oder `0O`). Jedes Zeichen nach dem `0o`, das außerhalb des Bereichs (01234567) ist, beendet die Lesezeile von Literalwerten.

```js-nolint
0O755 // 493
0o644 // 420
```

#### Hexadezimal

Die Hexadezimalzahlsyntax verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "X" (`0x` oder `0X`). Jedes Zeichen nach dem `0x`, das außerhalb des Bereichs (0123456789ABCDEF) ist, beendet die Lesezeile von Literalwerten.

```js-nolint
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

#### BigInt-Literal

Der [BigInt](/de/docs/Web/JavaScript/Data_structures#bigint_type)-Typ ist ein numerisches primitiven Typ in JavaScript, der Ganzzahlen mit beliebiger Genauigkeit darstellen kann. BigInt-Literale werden erstellt, indem `n` an das Ende einer Ganzzahl angehängt wird.

```js-nolint
123456789123456789n     // 123456789123456789
0o777777777777n         // 68719476735
0x123456789ABCDEFn      // 81985529216486895
0b11101001010101010101n // 955733
```

BigInt-Literale können nicht mit `0` beginnen, um Verwirrung mit älteren Oktal-Literalen zu vermeiden.

```js-nolint example-bad
0755n; // SyntaxError: Ungültige BigInt-Syntax
```

Für oktale `BigInt`-Zahlen, verwenden Sie immer Null gefolgt von dem Buchstaben "o" (groß oder klein):

```js example-good
0o755n;
```

Für mehr Informationen über `BigInt`, siehe auch [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Data_structures#bigint_type).

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
// Mehr als ein Unterstrich hintereinander ist nicht erlaubt
100__000; // SyntaxError

// Nicht erlaubt am Ende von numerischen Literalen
100_; // SyntaxError

// Kann nicht nach einer führenden 0 verwendet werden
0_1; // SyntaxError
```

### String-Literale

Ein [String](/de/docs/Web/JavaScript/Data_structures#string_type) Literal ist null oder mehr Unicode-Codepunkte, die in einfachen oder doppelten Anführungszeichen eingeschlossen sind. Unicode-Codepunkte können auch durch eine Escape-Sequenz dargestellt werden. Alle Codepunkte können in einem String-Literal wörtlich erscheinen, außer diesen Codepunkten:

- U+005C \ (Backslash)
- U+000D \<CR>
- U+000A \<LF>
- Die gleiche Art von Anführungszeichen, die das String-Literal beginnt

Alle Codepunkte können in Form einer Escape-Sequenz auftreten. String-Literale bewerten sich zu ECMAScript-String-Werten. Beim Generieren dieser String-Werte werden Unicode-Codepunkte als UTF-16 kodiert.

```js-nolint
'foo'
"bar"
```

Die folgenden Unterabschnitte beschreiben verschiedene Escape-Sequenzen (`\` gefolgt von einem oder mehreren Zeichen), die in String-Literalen verfügbar sind. Jede Escape-Sequenz, die nicht unten aufgeführt ist, wird zu einem "Identitäts-Escape", das sich in den Codepunkt selbst verwandelt. Zum Beispiel ist `\z` dasselbe wie `z`. Es gibt eine veraltete oktale Escape-Sequenz-Syntax, wie auf der Seite [Veraltete und obsolet gewordene Features](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) beschrieben. Viele dieser Escape-Sequenzen sind auch in regulären Ausdrücken gültig — siehe [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

#### Escape-Sequenzen

Sonderzeichen können mithilfe von Escape-Sequenzen kodiert werden:

| Escape-Sequenz                                        | Unicode Codepoint                          |
| ----------------------------------------------------- | ------------------------------------------ |
| `\0`                                                  | Null-Zeichen (U+0000 NULL)                 |
| `\'`                                                  | Einfaches Anführungszeichen (U+0027 APOSTROPHE) |
| `\"`                                                  | Doppelte Anführungszeichen (U+0022 QUOTATION MARK) |
| `\\`                                                  | Backslash (U+005C REVERSE SOLIDUS)         |
| `\n`                                                  | Neue Zeile (U+000A LINE FEED; LF)          |
| `\r`                                                  | Wagenrücklauf (U+000D CARRIAGE RETURN; CR) |
| `\v`                                                  | Vertikaler Tabulator (U+000B LINE TABULATION) |
| `\t`                                                  | Tabulator (U+0009 CHARACTER TABULATION)    |
| `\b`                                                  | Rückschritt (U+0008 BACKSPACE)             |
| `\f`                                                  | Seitenvorschub (U+000C FORM FEED)          |
| `\` gefolgt von einem [Zeilenabschluss](#zeilenendenterminatoren) | Leerzeichen                                |

Die letzte Escape-Sequenz, `\` gefolgt von einem Zeilenabschluss, ist nützlich, um ein String-Literal über mehrere Zeilen zu verteilen, ohne seine Bedeutung zu ändern.

```js
const longString =
  "Dies ist ein sehr langer String, der über mehrere \
Zeilen umgebrochen werden muss, weil mein Code \
sonst unleserlich ist.";
```

Stellen Sie sicher, dass es kein Leerzeichen oder irgendein anderes Zeichen nach dem Backslash gibt (außer für einen Zeilenumbruch), da es sonst nicht funktioniert. Wenn die nächste Zeile eingerückt ist, werden die zusätzlichen Leerzeichen auch im Wert des Strings vorhanden sein.

Sie können auch den [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition) Operator verwenden, um mehrere Strings, wie folgt, zu verknüpfen:

```js
const longString =
  "Dies ist ein sehr langer String, der über mehrere Zeilen " +
  "umgebrochen werden muss, weil mein Code " +
  "sonst unleserlich ist.";
```

Beide Methoden führen zu identischen Strings.

#### Hexadezimale Escape-Sequenzen

Hexadezimale Escape-Sequenzen bestehen aus `\x`, gefolgt von genau zwei hexadezimalen Ziffern, die eine Codeeinheit oder einen Codepunkt im Bereich 0x0000 bis 0x00FF darstellen.

```js
"\xA9"; // "©"
```

#### Unicode-Escape-Sequenzen

Eine Unicode-Escape-Sequenz besteht aus genau vier hexadezimalen Ziffern nach `\u`. Sie repräsentiert eine Code-Einheit in der UTF-16-Kodierung. Für die Codepunkte U+0000 bis U+FFFF ist die Code-Einheit gleich dem Codepunkt. Codepunkte von U+10000 bis U+10FFFF benötigen zwei Escape-Sequenzen, die die beiden Code-Einheiten (ein Surrogatpaar) darstellen, die zur Kodierung des Zeichens verwendet werden; das Surrogatpaar unterscheidet sich vom Codepunkt.

Siehe auch {{jsxref("String.fromCharCode()")}} und {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Unicode-Codepoint-Escapes

Ein Unicode-Codepoint-Escape besteht aus `\u{`, gefolgt von einem Codepunkt in hexadezimaler Basis, gefolgt von `}`. Der Wert der hexadezimalen Ziffern muss im Bereich 0 und 0x10FFFF eingeschlossen sein. Codepunkte im Bereich U+10000 bis U+10FFFF müssen nicht als Surrogatpaar dargestellt werden.

Siehe auch {{jsxref("String.fromCodePoint()")}} und {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK KOMPATIBILITÄT IDEOGRAPH-2F804 (U+2F804)

// dasselbe Zeichen, dargestellt als Surrogatpaar
"\uD87E\uDC04";
```

### Reguläre Ausdruck-Literale

Reguläre Ausdruck-Literale werden von zwei Schrägstrichen (`/`) eingeschlossen. Der Lexer liest alle Zeichen bis zum nächsten nicht-escape Schrägstrich oder zum Ende der Zeile, es sei denn, der Schrägstrich erscheint innerhalb einer Zeichenklasse (`[]`). Einige Zeichen (nämlich diejenigen, die [Identifier-Teile](#bezeichner) sind) können nach dem schließenden Schrägstrich erscheinen und Flags darstellen.

Die lexikalische Grammatik ist sehr nachsichtig: nicht alle regulären Ausdruck-Literale, die als ein Token identifiziert werden, sind gültige reguläre Ausdrücke.

Siehe auch {{jsxref("RegExp")}} für mehr Informationen.

```js-nolint
/ab+c/g
/[/]/
```

Ein reguläres Ausdruck-Literal kann nicht mit zwei Schrägstrichen (`//`) beginnen, da dies ein Zeilenkommentar wäre. Um einen leeren regulären Ausdruck anzugeben, verwenden Sie `/(?:)/`.

### Template Literale

Ein Template Literal besteht aus mehreren Token: `` `xxx${ `` (Templateanfang), `}xxx${` (Templatemitte) und `` }xxx` `` (Templateende) sind individuelle Token, während jeder Ausdruck zwischen ihnen vorkommen kann.

Siehe auch [Template Literale](/de/docs/Web/JavaScript/Reference/Template_literals) für mehr Informationen.

```js-nolint
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag`string text ${expression} string text`
```

## Automatische Einfügung von Semikolons

Einige [JavaScript-Aussagen](/de/docs/Web/JavaScript/Reference/Statements)' Syntaxdefinitionen erfordern Semikola (`;`) am Ende. Dazu gehören:

- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- [Ausdrucksaussagen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement)
- [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue), [`break`](/de/docs/Web/JavaScript/Reference/Statements/break), [`return`](/de/docs/Web/JavaScript/Reference/Statements/return), [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)
- Klassenfelddeklarationen ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_properties))
- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import), [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)

Um die Sprache jedoch zugänglicher und bequemer zu machen, kann JavaScript Semikola automatisch einfügen, wenn es den Token-Stream analysiert, sodass einige ungültige Token-Abfolgen "korrigiert" werden können, um gültige Syntax zu erzeugen. Dieser Schritt erfolgt, nachdem der Programmtext gemäß der lexikalischen Grammatik zu Tokens geparst wurde. Es gibt drei Fälle, in denen Semikola automatisch eingefügt werden:

1\. Wenn ein Token angetroffen wird, das nicht von der Grammatik erlaubt ist, und es ist vom vorherigen Token durch mindestens einen [Zeilenabschluss](#zeilenendenterminatoren) (einschließlich eines Blockkommentars, der mindestens einen Zeilenabschluss enthält) oder das Token "}" getrennt, wird ein Semikolon vor das Token eingefügt.

```js-nolint
{ 1
2 } 3

// wird von ASI in:

{ 1
;2 ;} 3;

// gewandelt, was eine gültige Grammatik ist, die drei Anweisungen kodiert,
// jede, bestehend aus einem Nummern-Literal
```

Das abschließende ")" von [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) wird als Sonderfall nach dieser Regel behandelt.

```js-nolint
do {
  // ...
} while (condition) /* ; */ // ASI hier
const a = 1
```

Semikola werden jedoch nicht eingefügt, wenn das Semikolon dann zum Trennzeichen im Kopf der [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Anweisung wird.

```js-nolint example-bad
for (
  let a = 1 // Kein ASI hier
  a < 10 // Kein ASI hier
  a++
) {}
```

Semikola werden auch nie als [leere Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Empty) eingefügt. Zum Beispiel, im Code unten, wenn ein Semikolon nach ")" eingefügt würde, dann wäre der Code gültig, mit einer leeren Anweisung als `if`-Körper und die `const`-Deklaration wäre eine separate Anweisung. Da jedoch automatisch eingefügte Semikola keine leeren Anweisungen werden können, wird dies eine [Deklaration](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations) als Körper der `if`-Anweisung, was nicht gültig ist.

```js-nolint example-bad
if (Math.random() > 0.5)
const x = 1 // SyntaxError: Unerwartetes Token 'const'
```

2\. Wenn das Ende des Token-Streams erreicht ist und der Parser nicht in der Lage ist, den einzelnen Eingabestream als vollständiges Programm zu parsen, wird am Ende ein Semikolon eingefügt.

```js-nolint
const a = 1 /* ; */ // ASI hier
```

Diese Regel ergänzt die vorherige Regel, speziell für den Fall, dass kein "fehlerhaftes Token" vorhanden ist, sondern das Ende des Eingabestreams.

3\. Wenn die Grammatik Zeilenabschlüsse an einer Stelle verbietet, an denen ein Zeilenabschluss gefunden wird, wird ein Semikolon eingefügt. Diese Stellen umfassen:

- `expr <hier> ++`, `expr <hier> --`
- `continue <hier> lbl`
- `break <hier> lbl`
- `return <hier> expr`
- `throw <hier> expr`
- `yield <hier> expr`
- `yield <hier> * expr`
- `(param) <hier> => {}`
- `async <hier> function`, `async <hier> prop()`, `async <hier> function*`, `async <hier> *prop()`, `async <hier> (param) <hier> => {}`

Hier wird [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment) nicht als Postfix-Operator angesehen, der auf die Variable `b` angewendet wird, da ein Zeilenabschluss zwischen `b` und `++` auftritt.

```js-nolint
a = b
++c

// wird durch ASI in

a = b;
++c;
```

Hier gibt die `return`-Anweisung `undefined` zurück und das `a + b` wird eine nicht erreichbare Anweisung.

```js-nolint
return
a + b

// wird durch ASI in

return;
a + b;
```

Beachtd Poleerken, dass ASI nur ausgelöst wird, wenn ein Zeilenumbruch liegt, der Token trennt, die sonst ungültige Syntax erzeugen würden. Wenn das nächste Token als Teil einer gültigen Struktur geparst werden kann, würden keine Semikola eingefügt. Beispielweise:

```js-nolint example-bad
const a = 1
(1).toString()

const b = 1
[1, 2, 3].forEach(console.log)
```

Da `()` als Funktionsaufruf angesehen werden kann, würde es normalerweise ASI nicht auslösen. Ebenso könnte `[]` ein Member-Zugriff sein. Der obige Code ist äquivalent zu:

```js-nolint example-bad
const a = 1(1).toString();

const b = 1[1, 2, 3].forEach(console.log);
```

Dies ist zufällig gültige Syntax. `1[1, 2, 3]` ist ein [Eigenschafts-Zugriffsoperator](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) mit einem durch [Komma](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) verbundenen Ausdruck. Daher würden Sie Fehler wie "1 ist keine Funktion" und "Eigenschaften von undefined können nicht gelesen werden (Lesevorgang 'forEach')" beim Ausführen des Codes bekommen.

Innerhalb von Klassen können Klassenfelder und Generatormethoden ebenfalls eine Falle darstellen.

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

Und wird somit zu einem Syntaxfehler um `{`.

Es gibt die folgenden Faustregeln zum Umgang mit ASI, wenn Sie einen semikolonfreien Stil erzwingen möchten:

- Schreiben Sie Postfix `++` und `--` in derselben Zeile wie ihre Operanden.

  ```js-nolint example-bad
  const a = b
  ++
  console.log(a) // ReferenceError: Ungültiger left-hand side Ausdruck in Präfix-Operation
  ```

  ```js-nolint example-good
  const a = b++
  console.log(a)
  ```

- Die Ausdrücke nach `return`, `throw` oder `yield` sollten in derselben Zeile wie das Schlüsselwort stehen.

  ```js-nolint example-bad
  function foo() {
    return
      1 + 1 // Gibt undefined zurück; 1 + 1 wird ignoriert
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

- Ähnlich sollte das Label-Identifikator nach `break` oder `continue` in derselben Zeile wie das Schlüsselwort stehen.

  ```js-nolint example-bad
  outerBlock: {
    innerBlock: {
      break
        outerBlock // SyntaxError: Ungültige break-Anweisung
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

- Das `async` bei async Funktionen, Methoden, etc. kann nicht direkt von einem Zeilenabschluss gefolgt werden.

  ```js-nolint example-bad
  async
  function foo() {}
  ```

  ```js-nolint example-good
  async function
  foo() {}
  ```

- Wenn eine Zeile mit einem der folgenden beginnt: `(`, `[`, `` ` ``, `+`, `-`, `/` (wie bei Regex-Literalen), dann setzen Sie ein Semikolon davor oder beenden Sie die vorherige Zeile mit einem Semikolon.

  ```js-nolint example-bad
  // Die () könnten mit der vorherigen Zeile als Funktionsaufruf verbunden werden
  (() => {
    // ...
  })()

  // Die [ könnte mit der vorherigen Zeile als Eigenschaftszugriff verbunden werden
  [1, 2, 3].forEach(console.log)

  // Die ` könnte mit der vorherigen Zeile als getaggter Template-String verbunden werden
  `string text ${data}`.match(pattern).forEach(console.log)

  // Das + könnte mit der vorherigen Zeile als binärer + Ausdruck verbunden werden
  +a.toString()

  // Das - könnte mit der vorherigen Zeile als binärer - Ausdruck verbunden werden
  -a.toString()

  // Das / könnte mit der vorherigen Zeile als Division-Ausdruck verbunden werden
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

- Klassenfelder sollten vorzugsweise immer mit Semikola beendet werden — zusätzlich zur vorherigen Regel (die auch eine Felddeklaration gefolgt von einer [berechneten Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) beinhaltet, da letztere mit `[` beginnt), sind Semikola auch zwischen einer Felddeklaration und einer Generatormethode erforderlich.

  ```js-nolint example-bad
  class A {
    a = 1
    [b] = 2
    *gen() {} // Wird gesehen als a = 1[b] = 2 * gen() {}
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Grammatik und Typen](/de/docs/Web/JavaScript/Guide/Grammar_and_types) Leitfaden
- [Micro-feature aus ES6, jetzt in Firefox Aurora und Nightly: binäre und oktale Zahlen](https://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/) von Jeff Walden (2013)
- [JavaScript-Zeichen-Escape-Sequenzen](https://mathiasbynens.be/notes/javascript-escapes) von Mathias Bynens (2011)

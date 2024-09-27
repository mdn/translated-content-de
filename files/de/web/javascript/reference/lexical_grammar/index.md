---
title: Lexikalische Grammatik
slug: Web/JavaScript/Reference/Lexical_grammar
l10n:
  sourceCommit: 4e5ecbf646a146b953da37bbdf22fabaefe92edb
---

{{jsSidebar("More")}}

Diese Seite beschreibt die lexikalische Grammatik von JavaScript. JavaScript-Quelltext ist nur eine Abfolge von Zeichen – damit der Interpreter ihn verstehen kann, muss die Zeichenkette in eine strukturiertere Darstellung _geparst_ werden. Der erste Schritt des Parsens wird [lexikalische Analyse](https://de.wikipedia.org/wiki/Lexikalische_Analyse) genannt, bei der der Text von links nach rechts gescannt und in eine Folge von einzelnen, atomaren Eingabeelementen umgewandelt wird. Einige Eingabeelemente sind für den Interpreter irrelevant und werden nach diesem Schritt entfernt – dazu gehören [Leerraum](#leerraum) und [Kommentare](#kommentare). Die anderen, zu denen [Bezeichner](#bezeichner), [Schlüsselwörter](#schlüsselwörter), [Literale](#literale) und Interpunktionszeichen (hauptsächlich [Operatoren](/de/docs/Web/JavaScript/Reference/Operators)) gehören, werden für weitere syntaktische Analysen verwendet. [Zeilenabschlüsse](#zeilenabschlüsse) und mehrzeilige Kommentare sind ebenfalls syntaktisch nicht signifikant, aber sie lenken den Prozess für [automatische Einfügung von Semikolons](#automatische_einfügung_von_semikolons), um bestimmte ungültige Token-Sequenzen gültig zu machen.

## Formatsteuerzeichen

Formatsteuerzeichen haben keine visuelle Darstellung, werden aber verwendet, um die Interpretation des Textes zu steuern.

| Code-Punkt | Name                  | Abkürzung | Beschreibung                                                                                                                                                                                                                  |
| ---------- | --------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| U+200C     | Zero Width Non-Joiner | \<ZWNJ>   | Zwischen Buchstaben gesetzt, um zu verhindern, dass sie in bestimmten Sprachen zu Ligaturen verbunden werden ([Wikipedia](https://de.wikipedia.org/wiki/Zero_Width_Non-Joiner)).                                              |
| U+200D     | Zero Width Joiner     | \<ZWJ>    | Zwischen Buchstaben gesetzt, die normalerweise nicht verbunden sind, damit die Buchstaben in bestimmten Sprachen in ihrer verbundenen Form dargestellt werden ([Wikipedia](https://de.wikipedia.org/wiki/Zero_Width_Joiner)). |
| U+FEFF     | Byte Order Mark       | \<BOM>    | Am Anfang des Skripts verwendet, um es als Unicode zu kennzeichnen und die Erkennung der Zeichencodierung und der Byte-Reihenfolge zu ermöglichen ([Wikipedia](https://de.wikipedia.org/wiki/Byte_Order_Mark)).               |

Im JavaScript-Quelltext werden \<ZWNJ> und \<ZWJ> als [Bezeichner](#bezeichner)-Teile behandelt, während \<BOM> (auch Zero Width No-Break Space \<ZWNBSP> genannt, wenn nicht am Anfang des Textes) als [Leerraum](#leerraum) behandelt wird.

## Leerraum

[Leerraum](/de/docs/Glossary/Whitespace)-Zeichen verbessern die Lesbarkeit des Quelltextes und trennen Tokens voneinander. Diese Zeichen sind in der Regel nicht erforderlich, damit der Code funktioniert. [Minimierungswerkzeuge](https://de.wikipedia.org/wiki/Minimierung_%28Programmierung%29) werden häufig verwendet, um Leerraum zu entfernen, um die zu übertragende Datenmenge zu reduzieren.

| Code-Punkt | Name                       | Abkürzung | Beschreibung                                                                                        | Escape-Sequenz |
| ---------- | -------------------------- | --------- | --------------------------------------------------------------------------------------------------- | -------------- |
| U+0009     | Zeichen-Tabulation         | \<TAB>    | Horizontale Tabulation                                                                              | \t             |
| U+000B     | Zeilen-Tabulation          | \<VT>     | Vertikale Tabulation                                                                                | \v             |
| U+000C     | Form Feed                  | \<FF>     | Steuerzeichen für Seitenumbruch ([Wikipedia](https://de.wikipedia.org/wiki/Seitenumbruch#Formfeed)) | \f             |
| U+0020     | Leerzeichen                | \<SP>     | Normales Leerzeichen                                                                                |                |
| U+00A0     | Untrennbares Leerzeichen   | \<NBSP>   | Normales Leerzeichen, aber keine Stelle, an der ein Umbruch stattfinden kann                        |                |
| U+FEFF     | Zero Width No-Break Space  | \<ZWNBSP> | Wenn nicht am Anfang eines Skripts, ist das BOM-Markierungszeichen ein normales Leerzeichen         |                |
| Andere     | Andere Unicode-Leerzeichen | \<USP>    | [Zeichen in der "Space_Separator"-Allgemeinkategorie][space separator set]                          |                |

[space separator set]: https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D

> [!NOTE]
> Von diesen [Zeichen mit der Eigenschaft "White_Space", aber nicht in der "Space_Separator"-Allgemeinkategorie](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BWhite_Space%7D%26%5CP%7BGeneral_Category%3DSpace_Separator%7D) werden U+0009, U+000B und U+000C in JavaScript immer noch als Leerzeichen behandelt; U+0085 NEXT LINE hat keine besondere Rolle; andere werden zur Menge der [Zeilenabschlüsse](#zeilenabschlüsse).

> [!NOTE]
> Änderungen am Unicode-Standard, der von der JavaScript-Engine verwendet wird, können das Verhalten von Programmen beeinflussen. Zum Beispiel hat ES2016 den Referenz-Unicode-Standard von 5.1 auf 8.0.0 aktualisiert, wodurch U+180E MONGOLIAN VOWEL SEPARATOR von der Kategorie "Space_Separator" in die Kategorie "Format (Cf)" verschoben wurde und somit keine Leerzeichen mehr darstellt. Infolgedessen änderte sich das Ergebnis von [`"\u180E".trim().length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim) von `0` auf `1`.

## Zeilenabschlüsse

Zusätzlich zu [Leerzeichen](#leerraum) werden Zeilenabschlusszeichen verwendet, um die Lesbarkeit des Quelltextes zu verbessern. In einigen Fällen können Zeilenabschlüsse jedoch die Ausführung von JavaScript-Code beeinflussen, da es einige Stellen gibt, an denen sie verboten sind. Zeilenabschlüsse beeinflussen auch den Prozess der [automatischen Einfügung von Semikolons](#automatische_einfügung_von_semikolons).

Außerhalb des Kontexts der lexikalischen Grammatik werden Leerzeichen und Zeilenabschlüsse oft vermischt. Zum Beispiel entfernt {{jsxref("String.prototype.trim()")}} alle Leerzeichen und Zeilenabschlüsse vom Anfang und Ende einer Zeichenkette. Die `\s` [Zeichenklassenflucht](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) in regulären Ausdrücken passt auf alle Leerzeichen und Zeilenabschlüsse.

Nur die folgenden Unicode-Codepunkte werden in ECMAScript als Zeilenabschlüsse behandelt, andere zeilenbrechende Zeichen werden als Leerzeichen behandelt (z. B. NEXT LINE, NEL, U+0085 wird als Leerzeichen betrachtet).

| Code-Punkt | Name            | Abkürzung | Beschreibung                                             | Escape-Sequenz |
| ---------- | --------------- | --------- | -------------------------------------------------------- | -------------- |
| U+000A     | Zeilenumbruch   | \<LF>     | Neue Zeilenzeichen in UNIX-Systemen                      | \n             |
| U+000D     | Wagenrücklauf   | \<CR>     | Neue Zeilenzeichen in Commodore- und frühen Mac-Systemen | \r             |
| U+2028     | Zeilenseparator | \<LS>     | [Wikipedia](https://de.wikipedia.org/wiki/Zeilenumbruch) |                |
| U+2029     | Absatzseparator | \<PS>     | [Wikipedia](https://de.wikipedia.org/wiki/Zeilenumbruch) |                |

## Kommentare

Kommentare werden verwendet, um Hinweise, Notizen, Vorschläge oder Warnungen zum JavaScript-Code hinzuzufügen. Dies kann das Lesen und Verstehen erleichtern. Sie können auch verwendet werden, um Code zu deaktivieren, um dessen Ausführung zu verhindern; dies kann ein wertvolles Debugging-Werkzeug sein.

JavaScript bietet zwei seit langem bestehende Möglichkeiten, Kommentare in den Code einzufügen: Zeilenkommentare und Blockkommentare. Zusätzlich gibt es eine spezielle Hashbang-Kommentarsyntax.

### Zeilenkommentare

Die erste Möglichkeit ist der `//` Kommentar; dies verwandelt den gesamten Text, der ihm auf derselben Zeile folgt, in einen Kommentar. Zum Beispiel:

```js
function comment() {
  // This is a one line JavaScript comment
  console.log("Hello world!");
}
comment();
```

### Blockkommentare

Die zweite Möglichkeit ist der `/* */` Stil, der viel flexibler ist.

Zum Beispiel können Sie ihn auf einer einzigen Zeile verwenden:

```js
function comment() {
  /* This is a one line JavaScript comment */
  console.log("Hello world!");
}
comment();
```

Sie können auch mehrzeilige Kommentare erstellen, wie folgt:

```js
function comment() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log("Hello world!");
}
comment();
```

Sie können ihn auch in der Mitte einer Zeile verwenden, wenn Sie möchten, wobei dies Ihren Code schwerer lesbar machen kann, daher sollte dies mit Vorsicht verwendet werden:

```js
function comment(x) {
  console.log("Hello " + x /* insert the value of x */ + " !");
}
comment("world");
```

Zusätzlich können Sie ihn verwenden, um Code zu deaktivieren, um zu verhindern, dass er ausgeführt wird, indem Sie den Code in einen Kommentar einfügen, wie folgt:

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

In diesem Fall wird der `console.log()` Aufruf nie ausgeführt, da er sich innerhalb eines Kommentars befindet. Auf diese Weise können beliebig viele Codezeilen deaktiviert werden.

Blockkommentare, die mindestens einen Zeilenabschluss enthalten, verhalten sich wie [Zeilenabschlüsse](#zeilenabschlüsse) bei der [automatischen Einfügung von Semikolons](#automatische_einfügung_von_semikolons).

### Hashbang-Kommentare

Es gibt eine spezielle dritte Kommentarsyntax, den **Hashbang-Kommentar**. Ein Hashbang-Kommentar verhält sich genau wie ein einzeiliger (`//`) Kommentar, mit der Ausnahme, dass er mit `#!` beginnt und **nur am absoluten Anfang eines Skripts oder Moduls gültig ist**. Beachten Sie auch, dass vor dem `#!` kein Leerraum jeglicher Art erlaubt ist. Der Kommentar besteht aus allen Zeichen nach `#!` bis zum Ende der ersten Zeile; nur ein solcher Kommentar ist erlaubt.

Hashbang-Kommentare in JavaScript ähneln [Shebangs in Unix](<https://de.wikipedia.org/wiki/Shebang_(Unix)>), die den Pfad zu einem bestimmten JavaScript-Interpreter angeben, den Sie zum Ausführen des Skripts verwenden möchten. Bevor der Hashbang-Kommentar standardisiert wurde, war er bereits de facto in nicht browserbasierten Hosts wie Node.js implementiert, wo er aus dem Quelltext entfernt wurde, bevor er an die Engine übergeben wurde. Ein Beispiel sieht folgendermaßen aus:

```js
#!/usr/bin/env node

console.log("Hello world");
```

Der JavaScript-Interpreter behandelt ihn als normalen Kommentar – er hat nur eine semantische Bedeutung für die Shell, wenn das Skript direkt in einer Shell ausgeführt wird.

> [!WARNING]
> Wenn Sie möchten, dass Skripte direkt in einer Shell-Umgebung ausführbar sind, kodieren Sie sie in UTF-8 ohne ein [BOM](https://de.wikipedia.org/wiki/Byte_Order_Mark). Obwohl ein BOM im Browser keinen Schaden verursacht – da es während der UTF-8-Dekodierung entfernt wird, bevor der Quelltext analysiert wird – wird eine Unix/Linux-Shell das Hashbang nicht erkennen, wenn es von einem BOM-Zeichen vorangestellt wird.

Sie sollten den `#!`-Kommentarstil nur verwenden, um einen JavaScript-Interpreter anzugeben. In allen anderen Fällen verwenden Sie einfach einen `//`-Kommentar (oder Mehrzeilenkommentar).

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

In JavaScript bestehen Bezeichner üblicherweise aus alphanumerischen Zeichen, Unterstrichen (`_`) und Dollarzeichen (`$`). Bezeichner dürfen nicht mit Zahlen beginnen. JavaScript-Bezeichner sind jedoch nicht nur auf [ASCII](/de/docs/Glossary/ASCII) beschränkt – auch viele Unicode-Codepunkte sind erlaubt. Namentlich kann jedes Zeichen in der [ID_Start](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Start%7D)-Kategorie einen Bezeichner beginnen, während jedes Zeichen in der [ID_Continue](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Continue%7D)-Kategorie nach dem ersten Zeichen erscheinen kann.

> [!NOTE]
> Wenn Sie aus irgendeinem Grund JavaScript-Quelltext selbst parsen müssen, gehen Sie nicht davon aus, dass alle Bezeichner dem Muster `/[A-Za-z_$][\w$]*/` (d. h. nur ASCII) folgen! Der Bereich der Bezeichner kann durch den Regex `/[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*/u` (ohne Unicode-Escape-Sequenzen) beschrieben werden.

Zusätzlich erlaubt JavaScript die Verwendung von [Unicode-Escape-Sequenzen](#unicode-escape-sequenzen) in der Form von `\u0000` oder `\u{000000}` in Bezeichnern, die denselben Zeichenfolgenwert wie die tatsächlichen Unicode-Zeichen kodieren. Zum Beispiel sind `你好` und `\u4f60\u597d` dieselben Bezeichner:

```js-nolint
const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello
```

Nicht alle Stellen akzeptieren den vollständigen Bereich von Bezeichnern. Bestimmte Syntaxen, wie Funktionsdeklarationen, Funktionsausdrücke und Variablendeklarationen erfordern die Verwendung von Bezeichnernamen, die keine [reservierten Wörter](#reservierte_wörter) sind.

```js-nolint example-bad
function import() {} // Illegal: import is a reserved word.
```

Am bemerkenswertesten ist, dass private Eigenschaften und Objekteigenschaften reservierte Wörter erlauben.

```js
const obj = { import: "value" }; // Legal despite `import` being reserved
class C {
  #import = "value";
}
```

## Schlüsselwörter

_Schlüsselwörter_ sind Tokens, die wie Bezeichner aussehen, aber spezielle Bedeutungen in JavaScript haben. Zum Beispiel zeigt das Schlüsselwort [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) vor einer Funktionsdeklaration an, dass die Funktion asynchron ist.

Einige Schlüsselwörter sind _reserviert_, was bedeutet, dass sie nicht als Bezeichner für Variablendeklarationen, Funktionsdeklarationen usw. verwendet werden können. Sie werden oft _reservierte Wörter_ genannt. [Eine Liste dieser reservierten Wörter](#reservierte_wörter) wird unten bereitgestellt. Nicht alle Schlüsselwörter sind reserviert – zum Beispiel kann `async` überall als Bezeichner verwendet werden. Einige Schlüsselwörter sind nur _kontextuell reserviert_ – zum Beispiel ist `await` nur im Körper einer asynchronen Funktion reserviert, und `let` ist nur im Strict-Modus-Code reserviert oder `const` und `let`-Deklarationen.

Bezeichner werden immer durch _Zeichenfolgenwert_ verglichen, sodass Escape-Sequenzen interpretiert werden. Zum Beispiel ist dies immer noch ein Syntaxfehler:

```js-nolint example-bad
const els\u{65} = 1;
// `els\u{65}` encodes the same identifier as `else`
```

### Reservierte Wörter

Diese Schlüsselwörter können nicht als Bezeichner für Variablen, Funktionen, Klassen usw. im gesamten JavaScript-Quellcode verwendet werden.

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
- [`false`](#boolean_literal)
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
- [`true`](#boolean_literal)
- {{jsxref("Statements/try...catch", "try")}}
- {{jsxref("Operators/typeof", "typeof")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Operators/void", "void")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/with", "with")}}

Die folgenden sind nur reserviert, wenn sie im Strict-Modus-Code gefunden werden:

- {{jsxref("Statements/let", "let")}} (ebenfalls reserviert in `const`, `let` und Klassendeklarationen)
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- {{jsxref("Operators/yield", "yield")}} (ebenfalls reserviert in Generatorfunktionenkörpern)

Die folgenden sind nur reserviert, wenn sie im Modulcode oder in asynchronen Funktionskörpern gefunden werden:

- [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

### Zukünftig reservierte Wörter

Die folgenden sind als zukünftige Schlüsselwörter durch die ECMAScript-Spezifikation reserviert. Sie haben derzeit keine spezielle Funktionalität, könnten aber in Zukunft, daher können sie nicht als Bezeichner verwendet werden.

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

Einige Bezeichner haben in bestimmten Kontexten eine spezielle Bedeutung, ohne dass sie reservierte Wörter sind. Dazu gehören:

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
> Dieser Abschnitt diskutiert Literale, die atomare Tokens sind. [Objektliterale](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Array-Literale](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation) sind [Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators), die aus einer Reihe von Tokens bestehen.

### Null Literal

Siehe auch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) für weitere Informationen.

```js-nolint
null
```

### Boolean Literal

Siehe auch [Boolean-Typ](/de/docs/Web/JavaScript/Data_structures#boolean_type) für weitere Informationen.

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

Dezimale Literale können mit einer Null (`0`) beginnen, gefolgt von einer weiteren Dezimalziffer, aber wenn alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als oktale Zahl interpretiert. Dies wird als veraltete Syntax angesehen, und Zahlenliterale mit der Präfix `0`, ob als oktal oder dezimal interpretiert, führen im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) zu einem Syntaxfehler – verwenden Sie daher das Präfix `0o` stattdessen.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

##### Exponentiell

Das dezimale exponentielle Literal wird durch das folgende Format angegeben: `beN`; wobei `b` eine Basiszahl ist (ganz oder gleitend), gefolgt von einem `E` oder `e`-Zeichen (das als Trennzeichen oder _Exponentenindikator_ dient) und `N`, das ist die _Exponenten_ oder _Potenznummer_ – eine vorzeichenbehaftete ganze Zahl.

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

Die Binärzahlsyntax verwendet eine führende Null gefolgt von einem kleinen oder großen lateinischen Buchstaben "B" (`0b` oder `0B`). Jedes Zeichen nach dem `0b`, das nicht 0 oder 1 ist, beendet die Literalsequenz.

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### Oktal

Die Oktalzahlsyntax verwendet eine führende Null gefolgt von einem kleinen oder großen lateinischen Buchstaben "O" (`0o` oder `0O)`. Jedes Zeichen nach dem `0o`, das sich außerhalb des Bereichs (01234567) befindet, beendet die Literalsequenz.

```js-nolint
0O755 // 493
0o644 // 420
```

#### Hexadezimal

Die Hexadezimalzahlsyntax verwendet eine führende Null gefolgt von einem kleinen oder großen lateinischen Buchstaben "X" (`0x` oder `0X`). Jedes Zeichen nach dem `0x`, das sich außerhalb des Bereichs (0123456789ABCDEF) befindet, beendet die Literalsequenz.

```js-nolint
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

#### BigInt Literal

Der [BigInt](/de/docs/Web/JavaScript/Data_structures#bigint_type) Typ ist ein numerisches Primitive in JavaScript, das ganze Zahlen mit beliebiger Präzision darstellen kann. BigInt-Literale werden erstellt, indem `n` an das Ende einer ganzen Zahl angehängt wird.

```js-nolint
123456789123456789n     // 123456789123456789
0o777777777777n         // 68719476735
0x123456789ABCDEFn      // 81985529216486895
0b11101001010101010101n // 955733
```

BigInt-Literale können nicht mit `0` beginnen, um Verwirrung mit veralteten Oktalliteralen zu vermeiden.

```js-nolint example-bad
0755n; // SyntaxError: invalid BigInt syntax
```

Für oktale `BigInt`-Zahlen verwenden Sie immer eine Null, gefolgt von dem Buchstaben "o" (Groß- oder Kleinbuchstabe):

```js example-good
0o755n;
```

Für weitere Informationen über `BigInt`, siehe auch [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Data_structures#bigint_type).

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

Ein [String](/de/docs/Web/JavaScript/Data_structures#string_type) Literal besteht aus null oder mehr Unicode-Codepunkten in einfachen oder doppelten Anführungszeichen. Unicode-Codepunkte können auch durch eine Escape-Sequenz dargestellt werden. Alle Codepunkte dürfen wörtlich in einem String-Literal erscheinen, außer diesen Codepunkten:

- U+005C \ (Backslash)
- U+000D \<CR>
- U+000A \<LF>
- Die gleiche Art von Anführungszeichen, die das String-Literal beginnt

Jeder Codepunkt kann in Form einer Escape-Sequenz erscheinen. String-Literale werden zu ECMAScript-String-Werten ausgewertet. Bei der Generierung dieser String-Werte werden Unicode-Codepunkte in UTF-16 kodiert.

```js-nolint
'foo'
"bar"
```

Die folgenden Unterabschnitte beschreiben verschiedene Escape-Sequenzen (`\` gefolgt von einem oder mehreren Zeichen), die in String-Literalen verfügbar sind. Jede Escape-Sequenz, die nicht unten aufgeführt ist, wird zu einer "Identitätsflucht", die zum Codepunkten selbst wird. Zum Beispiel ist `\z` dasselbe wie `z`. Es gibt eine veraltete Oktal-Escape-Sequenz-Syntax, die auf der Seite [Veraltete und obsolte Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) beschrieben wird. Viele dieser Escape-Sequenzen sind auch in regulären Ausdrücken gültig – siehe [Zeichenflucht](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

#### Escape-Sequenzen

Spezielle Zeichen können mit Escape-Sequenzen kodiert werden:

| Escape-Sequenz                                             | Unicode-Codepunkt                                   |
| ---------------------------------------------------------- | --------------------------------------------------- |
| `\0`                                                       | Nullzeichen (U+0000 NULL)                           |
| `\'`                                                       | einfaches Anführungszeichen (U+0027 APOSTROPHE)     |
| `\"`                                                       | doppeltes Anführungszeichen (U+0022 QUOTATION MARK) |
| `\\`                                                       | Backslash (U+005C REVERSE SOLIDUS)                  |
| `\n`                                                       | Zeilenumbruch (U+000A LINE FEED; LF)                |
| `\r`                                                       | Wagenrücklauf (U+000D CARRIAGE RETURN; CR)          |
| `\v`                                                       | vertikale Tabulation (U+000B LINE TABULATION)       |
| `\t`                                                       | Tab (U+0009 CHARACTER TABULATION)                   |
| `\b`                                                       | Backspace (U+0008 BACKSPACE)                        |
| `\f`                                                       | Formular-Feed (U+000C FORM FEED)                    |
| `\` gefolgt von einem [Zeilenabschluss](#zeilenabschlüsse) | leerer String                                       |

Die letzte Escape-Sequenz, `\` gefolgt von einem Zeilenabschluss, ist nützlich, um ein String-Literal über mehrere Zeilen aufzuteilen, ohne seine Bedeutung zu ändern.

```js
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Vergewissern Sie sich, dass kein Leerzeichen oder ein anderes Zeichen nach dem Backslash (außer einem Zeilenumbruch) vorhanden ist, da es sonst nicht funktioniert. Wenn die nächste Zeile eingerückt ist, sind auch die zusätzlichen Leerzeichen im Zeichenfolgenwert vorhanden.

Sie können auch den [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition)-Operator verwenden, um mehrere Strings aneinander zu hängen, wie folgt:

```js
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Beide der obigen Methoden führen zu identischen Strings.

#### Hexadezimale Escape-Sequenzen

Hexadezimale Escape-Sequenzen bestehen aus `\x` gefolgt von genau zwei hexadezimalen Ziffern, die eine Codeeinheit oder Codepunkt im Bereich von 0x0000 bis 0x00FF darstellen.

```js
"\xA9"; // "©"
```

#### Unicode-Escape-Sequenzen

Eine Unicode-Escape-Sequenz besteht aus genau vier hexadezimalen Ziffern nach `\u`. Sie stellt eine Codeeinheit in der UTF-16-Kodierung dar. Für Codepunkte U+0000 bis U+FFFF ist die Codeeinheit gleich dem Codepunkt. Codepunkte U+10000 bis U+10FFFF erfordern zwei Escape-Sequenzen, die die beiden Codeeinheiten (ein Surrogatpaar) darstellen, die zur Kodierung des Zeichens verwendet werden; das Surrogatpaar unterscheidet sich vom Codepunkt.

Siehe auch {{jsxref("String.fromCharCode()")}} und {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Unicode-Codepunkt-Escape-Sequenzen

Eine Unicode-Codepunkt-Escape-Sequenz besteht aus `\u{`, gefolgt von einem Codepunkt in hexadezimaler Basis, gefolgt von `}`. Der Wert der hexadezimalen Ziffern muss im Bereich von 0 bis 0x10FFFF einschließlich liegen. Codepunkte im Bereich U+10000 bis U+10FFFF müssen nicht als Surrogatpaar dargestellt werden.

Siehe auch {{jsxref("String.fromCodePoint()")}} und {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// the same character represented as a surrogate pair
"\uD87E\uDC04";
```

### Literale für reguläre Ausdrücke

Literale für reguläre Ausdrücke sind durch zwei Schrägstriche (`/`) eingeschlossen. Der Lexer verarbeitet alle Zeichen bis zum nächsten unescapierten Schrägstrich oder zum Ende der Zeile, es sei denn, der Schrägstrich erscheint innerhalb einer Zeichenklasse (`[]`). Einige Zeichen (nämlich solche, die [Bezeichnerteile](#bezeichner) sind) können nach dem abschließenden Schrägstrich erscheinen und Flags darstellen.

Die lexikalische Grammatik ist sehr nachsichtig: nicht alle regulären Ausdrucksliterale, die als ein Token identifiziert werden, sind gültige reguläre Ausdrücke.

Siehe auch {{jsxref("RegExp")}} für weitere Informationen.

```js-nolint
/ab+c/g
/[/]/
```

Ein reguläres Ausdrucksliteral kann nicht mit zwei Schrägstrichen (`//`) beginnen, da dies ein Zeilenkommentar wäre. Um einen leeren regulären Ausdruck anzugeben, verwenden Sie `/(?:)/`.

### Template-Literale

Ein Template-Literal besteht aus mehreren Tokens: `` `xxx${ `` (Template-Kopf), `}xxx${` (Template-Mitte) und `` }xxx` `` (Template-Ende) sind einzelne Tokens, während jedes beliebige Ausdruck dazwischen stehen kann.

Siehe auch [Template Literale](/de/docs/Web/JavaScript/Reference/Template_literals) für weitere Informationen.

```js-nolint
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag`string text ${expression} string text`
```

## Automatische Einfügung von Semikolons

Einige [JavaScript-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements)-Syntaxdefinitionen erfordern Semikolons (`;`) am Ende. Dazu gehören:

- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- [Ausdrucksanweisungen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement)
- [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue), [`break`](/de/docs/Web/JavaScript/Reference/Statements/break), [`return`](/de/docs/Web/JavaScript/Reference/Statements/return), [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)
- Deklarationen von Klassenfeldern ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_properties))
- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import), [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)

Um die Sprache jedoch einfacher und bequemer zu gestalten, kann JavaScript automatisch Semikolons einfügen, wenn es den Tokenstrom konsumiert, sodass einige ungültige Token-Sequenzen "korrigiert" werden können, um gültige Syntax zu erzeugen. Dieser Schritt erfolgt, nachdem der Programmtext gemäß der lexikalischen Grammatik in Tokens geparst wurde. Es gibt drei Fälle, in denen Semikolons automatisch eingefügt werden:

1\. Wenn ein Token gefunden wird, das von der Grammatik nicht zugelassen wird und es durch mindestens einen [Zeilenabschluss](#zeilenabschlüsse) (einschließlich eines Blockkommentars, der mindestens einen Zeilenabschluss enthält) von dem vorherigen Token getrennt ist oder das Token "}" ist, wird ein Semikolon vor dem Token eingefügt.

```js-nolint
{ 1
2 } 3

// is transformed by ASI into:

{ 1
;2 ;} 3;

// Which is valid grammar encoding three statements,
// each consisting of a number literal
```

Das abschließende ")" von [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) wird von dieser Regel ebenfalls als Sonderfall berücksichtigt.

```js-nolint
do {
  // ...
} while (condition) /* ; */ // ASI here
const a = 1
```

Es werden jedoch keine Semikolons eingefügt, wenn das Semikolon dann zum Trennzeichen im `for`-Anweisungskopf (engl.: `for` statement head) wird.

```js-nolint example-bad
for (
  let a = 1 // No ASI here
  a < 10 // No ASI here
  a++
) {}
```

Semikolons werden auch niemals als [leere Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Empty) eingefügt. Wenn in dem untenstehenden Code zum Beispiel nach dem ")" ein Semikolon eingefügt würde, wäre der Code gültig, mit einer leeren Anweisung als `if`-Körper und der `const`-Deklaration als separate Anweisung. Da automatisch eingefügte Semikolons jedoch keine leeren Anweisungen sein können, führt dies dazu, dass eine [Deklaration](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations) zum Körper der `if`-Anweisung wird, was nicht gültig ist.

```js-nolint example-bad
if (Math.random() > 0.5)
const x = 1 // SyntaxError: Unexpected token 'const'
```

2\. Wenn das Ende des Eingabestroms erreicht ist und der Parser den einzelnen Eingabestrom nicht als vollständiges Programm parsen kann, wird am Ende ein Semikolon eingefügt.

```js-nolint
const a = 1 /* ; */ // ASI here
```

Diese Regel ist eine Ergänzung zur vorherigen Regel, speziell für den Fall, in dem es kein "fehlerhaftes Token" gibt, sondern nur das Ende des Eingabestroms.

3\. Wenn die Grammatik Zeilenabschlüsse an einem Ort verbietet, an dem ein Zeilenabschluss gefunden wird, wird ein Semikolon eingefügt. Diese Orte umfassen:

- `expr <here> ++`, `expr <here> --`
- `continue <here> lbl`
- `break <here> lbl`
- `return <here> expr`
- `throw <here> expr`
- `yield <here> expr`
- `yield <here> * expr`
- `(param) <here> => {}`
- `async <here> function`, `async <here> prop()`, `async <here> function*`, `async <here> *prop()`, `async <here> (param) <here> => {}`

Hier wird [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment) nicht als Postfix-Operator behandelt, der auf die Variable `b` angewendet wird, da ein Zeilenabschluss zwischen `b` und `++` auftritt.

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

Beachten Sie, dass ASI (Automatische Semikolon-Einfügung) nur ausgelöst wird, wenn ein Zeilenumbruch Tokens trennt, die ansonsten ungültige Syntax erzeugen würden. Wenn das nächste Token als Teil einer gültigen Struktur geparst werden kann, werden Semikolons nicht eingefügt. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()

const b = 1
[1, 2, 3].forEach(console.log)
```

Da `()` als Funktionsaufruf angesehen werden kann, würde dies normalerweise keine ASI auslösen. Ähnlich kann `[]` ein Memberzugriff sein. Der obige Code ist äquivalent zu:

```js-nolint example-bad
const a = 1(1).toString();

const b = 1[1, 2, 3].forEach(console.log);
```

Dies ist zufälligerweise eine gültige Syntax. `1[1, 2, 3]` ist ein [Eigenschaftenzugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) mit einem durch [Komma](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) verbundenen Ausdruck. Daher würden Sie Fehler wie "1 is not a function" und "Cannot read properties of undefined (reading 'forEach')" beim Ausführen des Codes erhalten.

Innerhalb von Klassen können Klassenfelder und Generatormethoden auch eine Stolperfalle sein.

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

Und wird daher ein Syntaxfehler um `{` herum sein.

Es gibt die folgenden Faustregeln für den Umgang mit ASI, wenn Sie einen stilvoll semikolonlosen Stil erzwingen möchten:

- Schreiben Sie das Postfix `++` und `--` auf derselben Zeile wie ihre Operanden.

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

- Das `=>` einer Arrow-Funktion sollte in derselben Zeile wie das Ende ihrer Parameter stehen.

  ```js-nolint example-bad
  const foo = (a, b)
    => a + b
  ```

  ```js-nolint example-good
  const foo = (a, b) =>
    a + b
  ```

- Das `async` von asynchronen Funktionen, Methoden, etc. darf nicht direkt von einem Zeilenabschluss gefolgt werden.

  ```js-nolint example-bad
  async
  function foo() {}
  ```

  ```js-nolint example-good
  async function
  foo() {}
  ```

- Wenn eine Zeile mit einem der folgenden Zeichen beginnt: `(`, `[`, `` ` ``, `+`, `-`, `/` (wie in Regex-Literalen), fügen Sie ihr ein Semikolon voran oder enden Sie die vorherige Zeile mit einem Semikolon.

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

- Klassenfelder sollten vorzugsweise immer mit Semikolons beendet werden – zusätzlich zur vorherigen Regel (die eine Felder zur Deklaration gefolgt von einer [berechneten Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) einschließt, da Letzteres mit `[` beginnt), sind Semikolons auch erforderlich zwischen einer Felder zur Deklaration und einer Generatormethode.

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
- [JavaScript-Zeichenescape-Sequenzen](https://mathiasbynens.be/notes/javascript-escapes) von Mathias Bynens (2011)

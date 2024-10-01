---
title: Lexikalische Grammatik
slug: Web/JavaScript/Reference/Lexical_grammar
l10n:
  sourceCommit: 4e5ecbf646a146b953da37bbdf22fabaefe92edb
---

{{jsSidebar("More")}}

Diese Seite beschreibt die lexikalische Grammatik von JavaScript. Der JavaScript-Quelltext ist lediglich eine Abfolge von Zeichen — damit der Interpreter ihn verstehen kann, muss die Zeichenkette in eine strukturiertere Darstellung _geparst_ werden. Der erste Schritt des Parsens wird [lexikalische Analyse](https://de.wikipedia.org/wiki/Lexikalische_Analyse) genannt, bei dem der Text von links nach rechts gescannt und in eine Abfolge von einzelnen, atomaren Eingabeelementen umgewandelt wird. Einige Eingabeelemente sind für den Interpreter unerheblich und werden nach diesem Schritt entfernt — dazu gehören [Leerzeichen](#leerzeichen) und [Kommentare](#kommentare). Die anderen, einschließlich [Bezeichner](#bezeichner), [Schlüsselwörter](#schlüsselwörter), [Literale](#literale) und Punctuators (meistens [Operatoren](/de/docs/Web/JavaScript/Reference/Operators)), werden für die weitere syntaktische Analyse verwendet. [Zeilenbegrenzer](#zeilenbegrenzer) und mehrzeilige Kommentare sind ebenfalls syntaktisch unbedeutend, aber sie leiten den Prozess der [automatischen Einfügung von Semikolons](#automatische_einfügung_von_semikolons), um bestimmte ungültige Tokenfolgen gültig zu machen.

## Steuerzeichen für das Format

Steuerzeichen für das Format haben keine visuelle Darstellung, werden jedoch zur Steuerung der Interpretation des Textes verwendet.

| Codepunkt | Name                  | Abkürzung | Beschreibung                                                                                                                                                                                                        |
| --------- | --------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| U+200C    | Zero width non-joiner | \<ZWNJ>   | Zwischen Zeichen platziert, um zu verhindern, dass sie in bestimmten Sprachen zu Ligaturen verbunden werden ([Wikipedia](https://de.wikipedia.org/wiki/Zero-width_non-joiner)).                                     |
| U+200D    | Zero width joiner     | \<ZWJ>    | Zwischen Zeichen platziert, die normalerweise nicht verbunden werden, um die Darstellung ihrer verbundenen Form in bestimmten Sprachen zu erzwingen ([Wikipedia](https://de.wikipedia.org/wiki/Zero-width_joiner)). |
| U+FEFF    | Byte order mark       | \<BOM>    | Wird am Anfang des Scripts verwendet, um es als Unicode zu markieren und die Erkennung von Textkodierung und Byte-Reihenfolge zu ermöglichen ([Wikipedia](https://de.wikipedia.org/wiki/Byte_order_mark)).          |

Im JavaScript-Quelltext werden \<ZWNJ> und \<ZWJ> als Teile von [Bezeichnern](#bezeichner) behandelt, während \<BOM> (auch Zero-width no-break space \<ZWNBSP> genannt, wenn nicht am Anfang des Textes) als [Leerzeichen](#leerzeichen) behandelt wird.

## Leerzeichen

{{Glossary("Whitespace", "Leerzeichen")}} verbessern die Lesbarkeit von Quelltext und trennen Token voneinander. Diese Zeichen sind normalerweise für die Funktionalität des Codes nicht erforderlich. [Minifizierungstools](<https://de.wikipedia.org/wiki/Minifizieren_(Programmierung)>) werden häufig verwendet, um Leerzeichen zu entfernen und so die Menge an zu übertragenden Daten zu reduzieren.

| Codepunkt | Name                       | Abkürzung | Beschreibung                                                                                          | Escape-Sequenz |
| --------- | -------------------------- | --------- | ----------------------------------------------------------------------------------------------------- | -------------- |
| U+0009    | Character tabulation       | \<TAB>    | Horizontaler Tabulator                                                                                | \t             |
| U+000B    | Line tabulation            | \<VT>     | Vertikaler Tabulator                                                                                  | \v             |
| U+000C    | Form feed                  | \<FF>     | Steuerzeichen für Seitenwechsel ([Wikipedia](https://de.wikipedia.org/wiki/Seitenumbruch#Form_feed)). | \f             |
| U+0020    | Space                      | \<SP>     | Normales Leerzeichen                                                                                  |                |
| U+00A0    | No-break space             | \<NBSP>   | Normales Leerzeichen, jedoch ohne möglichen Zeilenumbruch                                             |                |
| U+FEFF    | Zero-width no-break space  | \<ZWNBSP> | Wenn nicht am Anfang eines Scripts, ist der BOM-Marker ein normales Leerzeichen.                      |                |
| Andere    | Andere Unicode-Leerzeichen | \<USP>    | [Zeichen in der Kategorie "Space_Separator" im Unicode-Standard][space separator set]                 |                |

[space separator set]: https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D

> [!NOTE]
> Von den [Zeichen mit der Eigenschaft "White_Space", die nicht in der Kategorie "Space_Separator" im Unicode-Standard enthalten sind](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BWhite_Space%7D%26%5CP%7BGeneral_Category%3DSpace_Separator%7D), werden U+0009, U+000B und U+000C weiterhin als Leerzeichen in JavaScript behandelt; U+0085 NEXT LINE hat keine spezielle Rolle; andere werden zur Gruppe der [Zeilenbegrenzer](#zeilenbegrenzer).

> [!NOTE]
> Änderungen des Unicode-Standards, der von der JavaScript-Engine verwendet wird, können das Verhalten von Programmen beeinflussen. Zum Beispiel hat ES2016 den Verweis des Unicode-Standards von 5.1 auf 8.0.0 aktualisiert, wodurch U+180E MONGOLIAN VOWEL SEPARATOR aus der Kategorie "Space_Separator" in die Kategorie "Format (Cf)" verschoben und nicht mehr als Leerzeichen betrachtet wurde. Infolgedessen änderte sich das Ergebnis von [`"\u180E".trim().length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/trim) von `0` auf `1`.

## Zeilenbegrenzer

Zusätzlich zu den [Leerzeichen](#leerzeichen) verbessern Zeichen, die Zeilen begrenzen, die Lesbarkeit des Quelltexts. In einigen Fällen können jedoch Zeilenbegrenzer die Ausführung von JavaScript-Code beeinflussen, da es einige Stellen gibt, an denen sie verboten sind. Zeilenbegrenzer beeinflussen auch den Prozess der [automatischen Einfügung von Semikolons](#automatische_einfügung_von_semikolons).

Außerhalb des Kontexts der lexikalischen Grammatik werden Leerzeichen und Zeilenbegrenzer häufig vermischt. Beispielsweise entfernt {{jsxref("String.prototype.trim()")}} alle Leerzeichen und Zeilenbegrenzer vom Anfang und Ende einer Zeichenkette. Die `\s` [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) in regulären Ausdrücken entspricht allen Leerzeichen und Zeilenbegrenzern.

Nur die folgenden Unicode-Codepunkte werden in ECMAScript als Zeilenbegrenzer behandelt, andere zeilenbrechende Zeichen werden als Leerzeichen behandelt (zum Beispiel wird Next Line, NEL, U+0085 als Leerzeichen betrachtet).

| Code punkt | Name          | Abkürzung | Beschreibung                                                 | Escape-Sequenz |
| ---------- | ------------- | --------- | ------------------------------------------------------------ | -------------- |
| U+000A     | Zeilenumbruch | \<LF>     | Neuer Zeilencharakter in UNIX-Systemen.                      | \n             |
| U+000D     | Wagenrücklauf | \<CR>     | Neuer Zeilencharakter in Commodore- und frühen Mac-Systemen. | \r             |
| U+2028     | Zeilentrenner | \<LS>     | [Wikipedia](https://de.wikipedia.org/wiki/Zeilenumbruch)     |                |
| U+2029     | Absatztrenner | \<PS>     | [Wikipedia](https://de.wikipedia.org/wiki/Zeilenumbruch)     |                |

## Kommentare

Kommentare werden verwendet, um Hinweise, Notizen, Vorschläge oder Warnungen in JavaScript-Code hinzuzufügen. Dies kann ihn leichter lesbar und verständlich machen. Sie können auch verwendet werden, um Code zu deaktivieren, um dessen Ausführung zu verhindern; dies kann ein wertvolles Debugging-Tool sein.

JavaScript bietet zwei lang bestehende Möglichkeiten, Kommentare zum Code hinzuzufügen: Zeilenkommentare und Blockkommentare. Zusätzlich gibt es eine spezielle Hashbang-Kommentarsyntax.

### Zeilenkommentare

Die erste Möglichkeit ist der `//` Kommentar, der den gesamten folgenden Text auf derselben Zeile zu einem Kommentar macht. Zum Beispiel:

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

Sie können auch mehrzeilige Kommentare machen, wie dieser:

```js
function comment() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log("Hello world!");
}
comment();
```

Sie können ihn auch in der Mitte einer Zeile verwenden, wenn Sie möchten, obwohl dies Ihren Code schwerer lesbar machen kann, daher sollte dies mit Vorsicht geschehen:

```js
function comment(x) {
  console.log("Hello " + x /* insert the value of x */ + " !");
}
comment("world");
```

Zusätzlich können Sie ihn verwenden, um Code zu deaktivieren, um dessen Ausführung zu verhindern, indem Sie den Code in einen Kommentar einwickeln, wie dieser:

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

In diesem Fall wird der `console.log()` Aufruf niemals ausgeführt, da er sich innerhalb eines Kommentars befindet. Jede Anzahl von Codezeilen kann auf diese Weise deaktiviert werden.

Blockkommentare, die mindestens einen Zeilenbegrenzer enthalten, verhalten sich wie [Zeilenbegrenzer](#zeilenbegrenzer) in der [automatischen Einfügung von Semikolons](#automatische_einfügung_von_semikolons).

### Hashbang-Kommentare

Es gibt eine spezielle dritte Kommentarsyntax, den **Hashbang-Kommentar**. Ein Hashbang-Kommentar verhält sich genau wie ein einzelzeiliger (`//`) Kommentar, außer dass er mit `#!` beginnt und **nur am absoluten Anfang eines Scripts oder Moduls gültig ist**. Beachten Sie auch, dass vor dem `#!` keine Art von Leerzeichen erlaubt sind. Der Kommentar besteht aus allen Zeichen nach `#!` bis zum Ende der ersten Zeile; nur ein solcher Kommentar ist erlaubt.

Hashbang-Kommentare in JavaScript ähneln [Shebangs in Unix](<https://de.wikipedia.org/wiki/Shebang_(Unix)>) die den Pfad zu einem bestimmten JavaScript-Interpreter bereitstellen, den Sie verwenden möchten, um das Script auszuführen. Bevor der Hashbang-Kommentar standardisiert wurde, war er bereits de-facto in Nicht-Browser-Hosts wie Node.js implementiert, wo er aus dem Quelltext entfernt wurde, bevor er an die Engine übergeben wurde. Ein Beispiel folgt:

```js
#!/usr/bin/env node

console.log("Hello world");
```

Der JavaScript-Interpreter behandelt ihn als normalen Kommentar — er hat nur dann eine semantische Bedeutung für die Shell, wenn das Skript direkt in einer Shell ausgeführt wird.

> [!WARNING]
> Wenn Sie möchten, dass Skripte direkt in einer Shell-Umgebung ausführbar sind, kodieren Sie sie in UTF-8 ohne einen [BOM](https://de.wikipedia.org/wiki/Byte_order_mark). Obwohl ein BOM für Code, der in einem Browser ausgeführt wird, keine Probleme verursacht — da er während der UTF-8-Decodierung entfernt wird, bevor der Quelltext analysiert wird — erkennt eine Unix/Linux-Shell den Hashbang nicht, wenn er von einem BOM-Zeichen vorangestellt wird.

Sie sollten nur den `#!` Kommentierstil verwenden, um einen JavaScript-Interpreter anzugeben. In allen anderen Fällen verwenden Sie einfach einen `//` Kommentar (oder einen mehrzeiligen Kommentar).

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

In JavaScript bestehen Bezeichner in der Regel aus alphanumerischen Zeichen, Unterstrichen (`_`) und Dollarzeichen (`$`). Bezeichner dürfen nicht mit Zahlen beginnen. JavaScript-Bezeichner sind jedoch nicht nur auf {{Glossary("ASCII", "ASCII")}} beschränkt — viele Unicode-Codepunkte sind ebenfalls zulässig. Genauer gesagt, jedes Zeichen in der [ID_Start](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Start%7D) Kategorie kann einen Bezeichner starten, während jedes Zeichen in der [ID_Continue](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Continue%7D) Kategorie nach dem ersten Zeichen erscheinen kann.

> [!NOTE]
> Sollten Sie aus irgendeinem Grund selbst JavaScript-Quellcode parsen müssen, nehmen Sie nicht an, dass alle Bezeichner dem Muster `/[A-Za-z_$][\w$]*/` (d.h. ASCII-only) folgen! Der Bereich der Bezeichner kann durch den regulären Ausdruck `/[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*/u` beschrieben werden (ohne Unicode-Escape-Sequenzen).

Darüber hinaus erlaubt JavaScript die Verwendung von [Unicode-Escape-Sequenzen](#unicode-escape-sequenzen) in der Form von `\u0000` oder `\u{000000}` in Bezeichnern, die denselben Zeichenkettenwert wie die tatsächlichen Unicode-Zeichen kodieren. Zum Beispiel sind `你好` und `\u4f60\u597d` dieselben Bezeichner:

```js-nolint
const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello
```

Nicht alle Stellen akzeptieren den vollständigen Bereich der Bezeichner. Bestimmte Syntaxen, wie Funktionsdeklarationen, Funktionsausdrücke und Variablendeklarationen, erfordern die Verwendung von Bezeichnernamen, die keine [Reservierten Wörter](#reservierte_wörter) sind.

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

_Schlüsselwörter_ sind Token, die wie Bezeichner aussehen, aber besondere Bedeutungen in JavaScript haben. Zum Beispiel zeigt das Schlüsselwort [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) vor einer Funktionsdeklaration an, dass die Funktion asynchron ist.

Einige Schlüsselwörter sind _reserviert_, was bedeutet, dass sie nicht als Bezeichner für Variablendeklarationen, Funktionsdeklarationen usw. verwendet werden können. Sie werden oft als _reservierte Wörter_ bezeichnet. [Eine Liste dieser reservierten Wörter](#reservierte_wörter) ist unten aufgeführt. Nicht alle Schlüsselwörter sind reserviert — zum Beispiel kann `async` überall als Bezeichner verwendet werden. Einige Schlüsselwörter sind nur _kontextuell reserviert_ — zum Beispiel ist `await` nur innerhalb des Rumpfes einer asynchronen Funktion reserviert, und `let` ist nur im strikten Moduscode reserviert, oder `const`- und `let`-Deklarationen.

Bezeichner werden immer nach _Zeichenkettenwert_ verglichen, daher werden Escape-Sequenzen interpretiert. Zum Beispiel ist das Folgende immer noch ein Syntaxfehler:

```js-nolint example-bad
const els\u{65} = 1;
// `els\u{65}` encodes the same identifier as `else`
```

### Reservierte Wörter

Diese Schlüsselwörter können nirgendwo in JavaScript-Quelltext als Bezeichner für Variablen, Funktionen, Klassen usw. verwendet werden.

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

Die folgenden sind nur reserviert, wenn sie im strikten Moduscode gefunden werden:

- {{jsxref("Statements/let", "let")}} (auch in `const`, `let` und Klassen-Deklarationen reserviert)
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
- {{jsxref("Operators/yield", "yield")}} (auch in Generatorfunktionsrumpfes reserviert)

Die folgenden sind nur reserviert, wenn sie im Modulcode oder im Rumpf einer asynchronen Funktion gefunden werden:

- [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)

### Zukünftig reservierte Wörter

Die folgenden sind als zukünftige Schlüsselwörter durch die ECMAScript-Spezifikation reserviert. Sie haben derzeit keine spezielle Funktionalität, könnten jedoch zu einem zukünftigen Zeitpunkt welche haben, daher können sie nicht als Bezeichner verwendet werden.

Diese sind immer reserviert:

- `enum`

Die folgenden sind nur reserviert, wenn sie im strikten Moduscode gefunden werden:

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

### Bezeichner mit besonderer Bedeutung

Einige wenige Bezeichner haben eine besondere Bedeutung in bestimmten Kontexten, ohne reservierte Wörter irgendeiner Art zu sein. Sie umfassen:

- {{jsxref("Functions/arguments", "arguments")}} (kein Schlüsselwort, aber kann im strikten Modus nicht als Bezeichner deklariert werden)
- `as` ([`import * as ns from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import))
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)
- {{jsxref("Global_Objects/eval", "eval")}} (kein Schlüsselwort, aber kann im strikten Modus nicht als Bezeichner deklariert werden)
- `from` ([`import x from "mod"`](/de/docs/Web/JavaScript/Reference/Statements/import))
- {{jsxref("Functions/get", "get")}}
- [`of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- {{jsxref("Functions/set", "set")}}

## Literale

> [!NOTE]
> Dieser Abschnitt behandelt Literale, die atomare Token sind. [Objektliterale](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) und [Arrayliterale](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation) sind [Ausdrücke](/de/docs/Web/JavaScript/Reference/Operators), die aus einer Reihe von Token bestehen.

### Null-Literal

Siehe auch [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) für weitere Informationen.

```js-nolint
null
```

### Boolean-Literal

Siehe auch [boolescher Typ](/de/docs/Web/JavaScript/Data_structures#boolean_type) für weitere Informationen.

```js-nolint
true
false
```

### Numerische Literale

Die [Number](/de/docs/Web/JavaScript/Data_structures#number_type)- und [BigInt](/de/docs/Web/JavaScript/Data_structures#bigint_type)-Typen verwenden numerische Literale.

#### Dezimal

```js-nolint
1234567890
42
```

Dezimalliterale können mit einer Null (`0`) beginnen, gefolgt von einer weiteren Dezimalziffer, aber wenn alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies gilt als veraltete Syntax, und Nummernliterale mit dem Präfix `0`, ob als oktal oder dezimal interpretiert, verursachen einen Syntaxfehler im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) — verwenden Sie stattdessen das Präfix `0o`.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

##### Exponential

Das Dezimalexponentialliteral wird durch das folgende Format angegeben: `beN`; wobei `b` eine Grundzahl (ganz oder fließend) ist, gefolgt von einem `E` oder `e` Zeichen (der als Trenner oder _Exponentialanzeiger_ dient) und `N`, was die _Exponential-_ oder _Potenzzahl_ ist – eine vorzeichenbehaftete Ganzzahl.

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

Die Binärzahlsyntax verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "B" (`0b` oder `0B`). Jedes Zeichen nach `0b`, das nicht 0 oder 1 ist, beendet die Literalreihe.

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### Oktal

Die Oktalzahlsyntax verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "O" (`0o` oder `0O`). Jedes Zeichen nach `0o`, das außerhalb des Bereichs (01234567) liegt, beendet die Literalserie.

```js-nolint
0O755 // 493
0o644 // 420
```

#### Hexadezimal

Die hexadezimale Zahlsyntax verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "X" (`0x` oder `0X`). Jedes Zeichen nach `0x`, das außerhalb des Bereichs (0123456789ABCDEF) liegt, beendet die Literalreihe.

```js-nolint
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

#### BigInt-Literal

Der [BigInt](/de/docs/Web/JavaScript/Data_structures#bigint_type)-Typ ist ein numerischer primitiver Typ in JavaScript, der ganze Zahlen mit beliebiger Präzision darstellt. BigInt-Literale werden durch Anhängen von `n` an das Ende einer ganzen Zahl erstellt.

```js-nolint
123456789123456789n     // 123456789123456789
0o777777777777n         // 68719476735
0x123456789ABCDEFn      // 81985529216486895
0b11101001010101010101n // 955733
```

BigInt-Literale können nicht mit `0` beginnen, um Verwechslungen mit veralteten Oktalliteralen zu vermeiden.

```js-nolint example-bad
0755n; // SyntaxError: invalid BigInt syntax
```

Für oktale `BigInt`-Zahlen verwenden Sie immer eine Null, gefolgt vom Buchstaben "o" (groß oder klein):

```js example-good
0o755n;
```

Für weitere Informationen über `BigInt` siehe auch [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Data_structures#bigint_type).

#### Numerische Trenner

Zur Verbesserung der Lesbarkeit numerischer Literale können Unterstriche (`_`, `U+005F`) als Trenner verwendet werden:

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

Ein [Zeichenketten](https://de/docs/Web/JavaScript/Data_structures#string_type)-Literal besteht aus null oder mehr Unicode-Codepunkten, die in einfache oder doppelte Anführungszeichen eingeschlossen sind. Unicode-Codepunkte können auch durch eine Escape-Sequenz dargestellt werden. Alle Codepunkte können wörtlich in einem Zeichenkettenliteral erscheinen, außer folgenden Codepunkten:

- U+005C \ (Rückwärtsstrich)
- U+000D \<CR>
- U+000A \<LF>
- Die gleiche Art von Anführungszeichen, mit der das Zeichenkettenliteral beginnt

Alle Codepunkte können in Form einer Escape-Sequenz erscheinen. Zeichenkettenliterale werden zu ECMAScript-Zeichenkettenwerten ausgewertet. Beim Generieren dieser Zeichenkettenwerte werden Unicode-Codepunkte in UTF-16 kodiert.

```js-nolint
'foo'
"bar"
```

Die folgenden Unterabschnitte beschreiben verschiedene Escape-Sequenzen (`\` gefolgt von einem oder mehreren Zeichen), die in Zeichenkettenliteralen verfügbar sind. Jede nicht aufgeführte Escape-Sequenz wird zu einem "Identitäts-Escape", das den Codepunkt selbst wird. Zum Beispiel ist `\z` dasselbe wie `z`. Es gibt eine veraltete oktale Escape-Sequenz-Syntax, die auf der Seite [Veraltete und veraltete Funktionen](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) beschrieben wird. Viele dieser Escape-Sequenzen sind auch in regulären Ausdrücken gültig — siehe [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

#### Escape-Sequenzen

Spezialzeichen können mit Escape-Sequenzen kodiert werden:

| Escape-Sequenz                                            | Unicode-Codepunkt                                 |
| --------------------------------------------------------- | ------------------------------------------------- |
| `\0`                                                      | Null-Zeichen (U+0000 NULL)                        |
| `\'`                                                      | Einfaches Anführungszeichen (U+0027 APOSTROPHE)   |
| `\"`                                                      | Doppels Anführungszeichen (U+0022 QUOTATION MARK) |
| `\\`                                                      | Rückwärtsschrägstrich (U+005C REVERSE SOLIDUS)    |
| `\n`                                                      | Neue Zeile (U+000A LINE FEED; LF)                 |
| `\r`                                                      | Wagenrücklauf (U+000D CARRIAGE RETURN; CR)        |
| `\v`                                                      | Vertikaltabulierung (U+000B LINE TABULATION)      |
| `\t`                                                      | Tabulator (U+0009 CHARACTER TABULATION)           |
| `\b`                                                      | Rücktaste (U+0008 BACKSPACE)                      |
| `\f`                                                      | Formularvorschub (U+000C FORM FEED)               |
| `\` gefolgt von einem [Zeilenbegrenzer](#zeilenbegrenzer) | Leerzeichen                                       |

Die letzte Escape-Sequenz, `\` gefolgt von einem ZEILENBEGRENZUNGSSTRICH, ist nützlich, um ein Zeichenkettenliteral über mehrere Zeilen zu verteilen, ohne dessen Bedeutung zu ändern.

```js
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Stellen Sie sicher, dass nach dem Rückwärtsschrägstrich kein Leerzeichen oder ein anderes Zeichen (außer einem Zeilenumbruch) folgt, da es sonst nicht funktionieren wird. Wenn die nächste Zeile eingerückt ist, sind die zusätzlichen Leerzeichen auch im Wert der Zeichenkette vorhanden.

Sie können auch den [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition)-Operator verwenden, um mehrere Zeichenketten zusammenzufügen, wie folgt:

```js
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Beide oben genannten Methoden führen zu identischen Zeichenketten.

#### Hexadezimale Escape-Sequenzen

Hexadezimale Escape-Sequenzen bestehen aus `\x`, gefolgt von genau zwei hexadezimalen Ziffern, die eine Codeeinheit oder einen Codepunkt im Bereich 0x0000 bis 0x00FF darstellen.

```js
"\xA9"; // "©"
```

#### Unicode-Escape-Sequenzen

Eine Unicode-Escape-Sequenz besteht aus genau vier hexadezimalen Ziffern nach `\u`. Sie stellt eine Codeeinheit in der UTF-16-Kodierung dar. Für Codepunkte im Bereich U+0000 bis U+FFFF ist die Codeeinheit gleich dem Codepunkt. Codepunkte von U+10000 bis U+10FFFF erfordern zwei Escape-Sequenzen, die die beiden Codeeinheiten (ein Surrogatpaar) darstellen, die zur Codierung des Zeichens verwendet werden; das Surrogatpaar unterscheidet sich vom Codepunkt.

Siehe auch {{jsxref("String.fromCharCode()")}} und {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Unicode-Codepunkt-Escape

Ein Unicode-Codepunkt-Escape besteht aus `\u{`, gefolgt von einem Codepunkt in hexadezimalem Format, gefolgt von `}`. Der Wert der hexadezimalen Ziffern muss im Bereich 0 und 0x10FFFF einschließlich liegen. Codepunkte im Bereich U+10000 bis U+10FFFF müssen nicht als Surrogatpaar dargestellt werden.

Siehe auch {{jsxref("String.fromCodePoint()")}} und {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// the same character represented as a surrogate pair
"\uD87E\uDC04";
```

### Reguläre Ausdrucksliterale

Reguläre Ausdrucksliterale werden von zwei Schrägstrichen (`/`) eingeschlossen. Der Lexer verbraucht alle Zeichen bis zum nächsten nicht-escaped Schrägstrich oder zum Ende der Zeile, es sei denn, der Schrägstrich erscheint innerhalb einer Zeichenklasse (`[]`). Einige Zeichen (nämlich diejenigen, die [Bezeichnerteile](#bezeichner) sind) können nach dem Schließenden Schrägstrich erscheinen und Flags kennzeichnen.

Die lexikalische Grammatik ist sehr nachsichtig: Nicht alle regulären Ausdrucksliterale, die als ein Token identifiziert werden, sind gültige reguläre Ausdrücke.

Siehe auch {{jsxref("RegExp")}} für weitere Informationen.

```js-nolint
/ab+c/g
/[/]/
```

Ein reguläres Ausdrucksliteral kann nicht mit zwei Schrägstrichen (`//`) beginnen, da dies ein Zeilenkommentar wäre. Um einen leeren regulären Ausdruck anzugeben, verwenden Sie `/(?:)/`.

### Template-Literale

Ein Template-Literal besteht aus mehreren Token: `` `xxx${ `` (Template Kopf), `}xxx${` (Template Mitte) und `` }xxx` `` (Template Ende) sind einzelne Token, während jede Ausdruck dazwischen kommen kann.

Siehe auch [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) für weitere Informationen.

```js-nolint
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag`string text ${expression} string text`
```

## Automatische Einfügung von Semikolons

Einige [JavaScript-Aussagen](/de/docs/Web/JavaScript/Reference/Statements)' Syntaxdefinitionen erfordern Semikolons (`;`) am Ende. Dazu gehören:

- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var), [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- [Ausdrucks-Aussagen](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement)
- [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue), [`break`](/de/docs/Web/JavaScript/Reference/Statements/break), [`return`](/de/docs/Web/JavaScript/Reference/Statements/return), [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)
- [`debugger`](/de/docs/Web/JavaScript/Reference/Statements/debugger)
- Deklarationen von Klassenfeldern ([öffentlich](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) oder [privat](/de/docs/Web/JavaScript/Reference/Classes/Private_properties))
- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import), [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)

Um die Sprache einfacher und bequemer zu gestalten, ist JavaScript jedoch in der Lage, Semikolons beim Konsumieren des Token-Streams automatisch einzufügen, sodass einige ungültige Token-Sequenzen "korrigiert" werden und eine gültige Syntax erhalten. Dieser Schritt erfolgt, nachdem der Programmtext gemäß der lexikalischen Grammatik in Token geparst wurde. Es gibt drei Fälle, in denen Semikolons automatisch eingefügt werden:

1\. Wenn ein Token auftritt, das von der Grammatik nicht erlaubt ist und es von dem vorherigen Token durch mindestens einen [Zeilenbegrenzer](#zeilenbegrenzer) (einschließlich eines Blockkomments, der mindestens einen Zeilenbegrenzer enthält) getrennt ist, oder das Token ist "}", dann wird vor dem Token ein Semikolon eingefügt.

```js-nolint
{ 1
2 } 3

// is transformed by ASI into:

{ 1
;2 ;} 3;

// Which is valid grammar encoding three statements,
// each consisting of a number literal
```

Das endende ")" von [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) wird ebenfalls als Sonderfall von dieser Regel behandelt.

```js-nolint
do {
  // ...
} while (condition) /* ; */ // ASI here
const a = 1
```

Jedoch werden Semikolons nicht eingefügt, wenn das Semikolon dann zum Separator in der [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) Anweisungskopf werden würde.

```js-nolint example-bad
for (
  let a = 1 // No ASI here
  a < 10 // No ASI here
  a++
) {}
```

Semikolons werden auch niemals als [leere Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/Empty) eingefügt. Beispielsweise würde, wenn in dem unten stehenden Code ein Semikolon nach ")" eingefügt wird, der Code gültig sein, mit einer leeren Anweisung als `if`-Körper und der `const`-Deklaration, die eine separate Anweisung ist. Da jedoch automatisch eingefügte Semikolons keine leeren Anweisungen werden können, verursacht dies, dass eine [Deklaration](/de/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations) zum Körper der `if`-Aussage wird, was nicht gültig ist.

```js-nolint example-bad
if (Math.random() > 0.5)
const x = 1 // SyntaxError: Unexpected token 'const'
```

2 \. Wenn das Ende des Eingabestreams der Token erreicht ist und der Parser nicht in der Lage ist, den einzelnen Eingabestream als ein vollständiges Programm zu analysieren, wird ein Semikolon am Ende eingefügt.

```js-nolint
const a = 1 /* ; */ // ASI here
```

Diese Regel ist eine Ergänzung zur vorherigen Regel, speziell für den Fall, dass kein "störendes Token" vorhanden ist, sondern das Ende des Eingabestreams erreicht ist.

3\. Wenn die Grammatik Zeilenbegrenzer an einigen Stellen verbietet, ein Zeilenbegrenzer jedoch gefunden wird, wird ein Semikolon eingefügt. Diese Stellen umfassen:

- `expr <hier> ++`, `expr <hier> --`
- `continue <hier> lbl`
- `break <hier> lbl`
- `return <hier> expr`
- `throw <hier> expr`
- `yield <hier> expr`
- `yield <hier> * expr`
- `(param) <hier> => {}`
- `async <hier> function`, `async <hier> prop()`, `async <hier> function*`, `async <hier> *prop()`, `async <hier> (param) <hier> => {}`

Hier wird [`++`](/de/docs/Web/JavaScript/Reference/Operators/Increment) nicht als Postfix-Operator betrachtet, der auf die Variable `b` angewendet wird, da ein Zeilenbegrenzer zwischen `b` und `++` vorkommt.

```js-nolint
a = b
++c

// is transformed by ASI into

a = b;
++c;
```

Hier gibt die `return`-Aussage `undefined` zurück, und `a + b` wird zu einer nicht erreichbaren Anweisung.

```js-nolint
return
a + b

// is transformed by ASI into

return;
a + b;
```

Beachten Sie, dass ASI nur ausgelöst wird, wenn ein Zeilenumbruch Token trennt, die ansonsten eine ungültige Syntax ergeben würden. Wenn das nächste Token als Teil einer gültigen Struktur geparst werden kann, würden keine Semikolons eingefügt. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()

const b = 1
[1, 2, 3].forEach(console.log)
```

Da `()` als Funktionsaufruf gesehen werden kann, würde es normalerweise nicht ASI auslösen. Ebenso könnte `[]` ein Zugriffsoperator sein. Der obige Code entspricht:

```js-nolint example-bad
const a = 1(1).toString();

const b = 1[1, 2, 3].forEach(console.log);
```

Dies ist zufällig eine gültige Syntax. `1[1, 2, 3]` ist ein [Eigenschaftsaccessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) mit einem [Komma](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator)-verbundenen Ausdruck. Daher würden Sie Fehler wie "1 ist keine Funktion" und "Properties von undefined nicht lesbar" erhalten, wenn der Code ausgeführt wird.

Innerhalb von Klassen können Klassenfelder und Generatormethoden ebenfalls eine Falle sein.

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

Und führt daher zu einem Syntaxfehler um `{`.

Es gibt die folgenden Faustregeln für den Umgang mit ASI, wenn Sie einen Stil ohne Semikolon durchsetzen möchten:

- Schreiben Sie Postfix `++` und `--` in derselben Zeile wie deren Operanden.

  ```js-nolint example-bad
  const a = b
  ++
  console.log(a) // ReferenceError: Invalid left-hand side expression in prefix operation
  ```

  ```js-nolint example-good
  const a = b++
  console.log(a)
  ```

- Die Ausdrücke nach `return`, `throw` oder `yield` sollten in derselben Zeile wie das Schlüsselwort sein.

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

- Ebenso sollte der Label-Bezeichner nach `break` oder `continue` in derselben Zeile wie das Schlüsselwort sein.

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

- Das `=>` eines Pfeilfunktionen sollte in derselben Zeile wie das Ende ihrer Parameter sein.

  ```js-nolint example-bad
  const foo = (a, b)
    => a + b
  ```

  ```js-nolint example-good
  const foo = (a, b) =>
    a + b
  ```

- Das `async` von asynchronen Funktionen, Methoden usw. darf nicht direkt von einem Zeilenbegrenzer gefolgt werden.

  ```js-nolint example-bad
  async
  function foo() {}
  ```

  ```js-nolint example-good
  async function
  foo() {}
  ```

- Wenn eine Zeile mit einem der folgenden Zeichen beginnt: `(`, `[`, `` ` ``, `+`, `-`, `/` (wie in Regex-Literalen), beginnen Sie mit einem Semikolon, oder beenden Sie die vorherige Zeile mit einem Semikolon.

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

- Klassenfelder sollten vorzugsweise immer mit Semikolons beendet werden — zusätzlich zur vorherigen Regel (die eine Felddeklaration gefolgt von einer [berechneten Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) beinhaltet, da letztere mit `[` beginnt), sind Semikolons auch zwischen einer Felddeklaration und einer Generatormethode erforderlich.

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
- [Micro-Feature aus ES6, jetzt in Firefox Aurora und Nightly: Binär- und Oktalzahlen](https://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/) von Jeff Walden (2013)
- [JavaScript-Zeichen-Escape-Sequenzen](https://mathiasbynens.be/notes/javascript-escapes) von Mathias Bynens (2011)

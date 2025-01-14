---
title: Zahlen und Zeichenketten
slug: Web/JavaScript/Guide/Numbers_and_strings
l10n:
  sourceCommit: c16a0ee78e5142b3bfcdaf57d595add3ce825f13
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Representing_dates_times")}}

Dieses Kapitel führt die beiden grundlegendsten Datentypen in JavaScript ein: Zahlen und Zeichenketten. Wir werden ihre zugrundeliegenden Darstellungen sowie Funktionen einführen, die verwendet werden, um mit ihnen zu arbeiten und Berechnungen durchzuführen.

## Zahlen

In JavaScript werden Zahlen im [Doppel-Präzision 64-Bit Binärformat IEEE 754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) implementiert (d. h. eine Zahl zwischen ±2^−1022 und ±2^+1023, oder etwa ±10^−308 bis ±10^+308, mit einer numerischen Genauigkeit von 53 Bit). Ganze Zahlen bis zu ±2^53 − 1 können exakt dargestellt werden.

Zusätzlich zur Darstellung von Gleitkommazahlen hat der Zahlentyp drei symbolische Werte: {{jsxref("Infinity")}}, `-Infinity` und {{jsxref("NaN")}} (not-a-number).

Siehe auch [JavaScript-Datentypen und -strukturen](/de/docs/Web/JavaScript/Data_structures) für den Kontext mit anderen primitiven Typen in JavaScript.

Sie können vier Typen von Zahlenliteralen verwenden: Dezimal, Binär, Oktal und Hexadezimal.

### Dezimalzahlen

```js-nolint
1234567890
42
```

Dezimalliterale können mit einer Null (`0`) gefolgt von einer anderen Dezimalziffer beginnen, aber wenn alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies wird als veraltete Syntax betrachtet, und Zahlenliterale mit `0` als Präfix, egal ob sie als Oktal oder Dezimal interpretiert werden, verursachen in [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) einen Syntaxfehler — verwenden Sie daher das `0o`-Präfix.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

### Binärzahlen

Die Binärzahlsyntax verwendet eine führende Null gefolgt von einem kleinen oder großen lateinischen Buchstaben "B" (`0b` oder `0B`). Wenn die Ziffern nach dem `0b` nicht 0 oder 1 sind, wird der folgende {{jsxref("SyntaxError")}} ausgelöst: "Missing binary digits after 0b".

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

### Oktalzahlen

Die Standardsyntax für Oktalzahlen besteht darin, ihnen das Präfix `0o` voranzustellen. Zum Beispiel:

```js-nolint
0O755 // 493
0o644 // 420
```

Es gibt auch eine veraltete Syntax für Oktalzahlen — indem der Oktalzahl eine Null vorangestellt wird: `0644 === 420` und `"\045" === "%"`. Wenn die Ziffern nach der `0` außerhalb des Bereichs 0 bis 7 liegen, wird die Zahl als Dezimalzahl interpretiert.

```js
const n = 0755; // 493
const m = 0644; // 420
```

[Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verbietet diese Oktalsyntax.

### Hexadezimalzahlen

Die Hexadezimalzahlsyntax verwendet eine führende Null gefolgt von einem kleinen oder großen lateinischen Buchstaben "X" (`0x` oder `0X`). Wenn die Ziffern nach 0x außerhalb des Bereichs (0123456789ABCDEF) liegen, wird der folgende {{jsxref("SyntaxError")}} ausgelöst: "Identifier starts immediately after numeric literal".

```js-nolint
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

### Exponentiation

```js-nolint
0e-5   // 0
0e+5   // 0
5e1    // 50
175e-2 // 1.75
1e3    // 1000
1e-3   // 0.001
1E3    // 1000
```

## Number-Objekt

Das eingebaute {{jsxref("Number")}}-Objekt hat Eigenschaften für numerische Konstanten, wie maximaler Wert, nicht-eine-Zahl und Unendlichkeit. Sie können die Werte dieser Eigenschaften nicht ändern und verwenden sie wie folgt:

```js
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
```

Sie beziehen sich immer auf eine Eigenschaft des vordefinierten `Number`-Objekts wie oben gezeigt und nicht auf eine Eigenschaft eines selbst erstellten `Number`-Objekts.

Die folgende Tabelle fasst die Eigenschaften des `Number`-Objekts zusammen.

| Eigenschaft                            | Beschreibung                                                                                                                    |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.MAX_VALUE")}}         | Die größte positive darstellbare Zahl (`1.7976931348623157e+308`)                                                               |
| {{jsxref("Number.MIN_VALUE")}}         | Die kleinste positive darstellbare Zahl (`5e-324`)                                                                              |
| {{jsxref("Number.NaN")}}               | Spezieller "nicht eine Zahl"-Wert                                                                                               |
| {{jsxref("Number.NEGATIVE_INFINITY")}} | Spezieller negativ unendlicher Wert; wird bei Überlauf zurückgegeben                                                            |
| {{jsxref("Number.POSITIVE_INFINITY")}} | Spezieller positiv unendlicher Wert; wird bei Überlauf zurückgegeben                                                            |
| {{jsxref("Number.EPSILON")}}           | Unterschied zwischen `1` und dem kleinsten darstellbaren Wert größer als `1` als {{jsxref("Number")}} (`2.220446049250313e-16`) |
| {{jsxref("Number.MIN_SAFE_INTEGER")}}  | Minimale sichere Ganzzahl in JavaScript (−2^53 + 1, oder `−9007199254740991`)                                                   |
| {{jsxref("Number.MAX_SAFE_INTEGER")}}  | Maximale sichere Ganzzahl in JavaScript (+2^53 − 1, oder `+9007199254740991`)                                                   |

| Methode                              | Beschreibung                                                                                                                                             |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.parseFloat()")}}    | Parst ein String-Argument und gibt eine Gleitkommazahl zurück. Entspricht der globalen {{jsxref("parseFloat()")}} Funktion.                              |
| {{jsxref("Number.parseInt()")}}      | Parst ein String-Argument und gibt eine Ganzzahl des angegebenen Radix oder der Basis zurück. Entspricht der globalen {{jsxref("parseInt()")}} Funktion. |
| {{jsxref("Number.isFinite()")}}      | Bestimmt, ob der übergebene Wert eine endliche Zahl ist.                                                                                                 |
| {{jsxref("Number.isInteger()")}}     | Bestimmt, ob der übergebene Wert eine Ganzzahl ist.                                                                                                      |
| {{jsxref("Number.isNaN()")}}         | Bestimmt, ob der übergebene Wert {{jsxref("NaN")}} ist. Robustere Version der ursprünglichen globalen {{jsxref("isNaN()")}} Funktion.                    |
| {{jsxref("Number.isSafeInteger()")}} | Bestimmt, ob der übergebene Wert eine Zahl ist, die eine _sichere Ganzzahl_ ist.                                                                         |

Das `Number`-Prototype bietet Methoden, um Informationen von `Number`-Objekten in verschiedenen Formaten abzurufen. Die folgende Tabelle fasst die Methoden von `Number.prototype` zusammen.

| Methode                                               | Beschreibung                                                                                          |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| {{jsxref("Number/toExponential", "toExponential()")}} | Gibt einen String zurück, der die Zahl in exponentieller Notation darstellt.                          |
| {{jsxref("Number/toFixed", "toFixed()")}}             | Gibt einen String zurück, der die Zahl in Festkommanotation darstellt.                                |
| {{jsxref("Number/toPrecision", "toPrecision()")}}     | Gibt einen String zurück, der die Zahl auf eine bestimmte Genauigkeit in Festkommanotation darstellt. |

## Math-Objekt

Das eingebaute {{jsxref("Math")}}-Objekt hat Eigenschaften und Methoden für mathematische Konstanten und Funktionen. Zum Beispiel hat die `Math`-Eigenschaft `PI` den Wert von Pi (3.141…), den Sie in einer Anwendung wie folgt verwenden würden:

```js
Math.PI;
```

Ähnlich sind Standardmathematische Funktionen Methoden von `Math`. Diese umfassen trigonometrische, logarithmische, exponentielle und andere Funktionen. Wenn Sie beispielsweise die trigonometrische Funktion Sinus verwenden möchten, schreiben Sie:

```js
Math.sin(1.56);
```

Beachten Sie, dass alle trigonometrischen Methoden von `Math` Argumente in Radianten annehmen.

Die folgende Tabelle fasst die Methoden des `Math`-Objekts zusammen.

<table class="standard-table">
  <caption>
    Methoden von
    <code>Math</code>
  </caption>
  <thead>
    <tr>
      <th scope="col">Methode</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{jsxref("Math.abs", "abs()")}}</td>
      <td>Absolutwert</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sin", "sin()")}},
        {{jsxref("Math.cos", "cos()")}},
        {{jsxref("Math.tan", "tan()")}}
      </td>
      <td>Standard trigonometrische Funktionen; mit dem Argument in Radianten.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.asin", "asin()")}},
        {{jsxref("Math.acos", "acos()")}},
        {{jsxref("Math.atan", "atan()")}},
        {{jsxref("Math.atan2", "atan2()")}}
      </td>
      <td>Inverse trigonometrische Funktionen; Rückgabewerte in Radianten.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sinh", "sinh()")}},
        {{jsxref("Math.cosh", "cosh()")}},
        {{jsxref("Math.tanh", "tanh()")}}
      </td>
      <td>Hyperbolische Funktionen; Argument in hyperbolischem Winkel.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.asinh", "asinh()")}},
        {{jsxref("Math.acosh", "acosh()")}},
        {{jsxref("Math.atanh", "atanh()")}}
      </td>
      <td>Inverse hyperbolische Funktionen; Rückgabewerte in hyperbolischem Winkel.</td>
    </tr>
    <tr>
      <td>
        <p>
          {{jsxref("Math.pow", "pow()")}},
          {{jsxref("Math.exp", "exp()")}},
          {{jsxref("Math.expm1", "expm1()")}},
          {{jsxref("Math.log", "log()")}},
          {{jsxref("Math.log10", "log10()")}},
          {{jsxref("Math.log1p", "log1p()")}},
          {{jsxref("Math.log2", "log2()")}}
        </p>
      </td>
      <td>Exponentielle und logarithmische Funktionen.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.floor", "floor()")}},
        {{jsxref("Math.ceil", "ceil()")}}
      </td>
      <td>
        Gibt die größte/kleinste ganze Zahl zurück, die kleiner/gleich bzw. größer/gleich einem Argument ist.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.min", "min()")}},
        {{jsxref("Math.max", "max()")}}
      </td>
      <td>
        Gibt den minimalen oder maximalen Wert (bzw.) einer kommagetrennten Liste von Zahlen als Argumente zurück.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Math.random", "random()")}}</td>
      <td>Gibt eine Zufallszahl zwischen 0 und 1 zurück.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.round", "round()")}},
        {{jsxref("Math.fround", "fround()")}},
        {{jsxref("Math.trunc", "trunc()")}},
      </td>
      <td>Rundungs- und Abschneidefunktionen.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sqrt", "sqrt()")}},
        {{jsxref("Math.cbrt", "cbrt()")}},
        {{jsxref("Math.hypot", "hypot()")}}
      </td>
      <td>
        Quadratwurzel, Kubikwurzel, Quadratwurzel der Summe von Quadratargumenten.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Math.sign", "sign()")}}</td>
      <td>
        Das Vorzeichen einer Nummer, das angibt, ob die Zahl positiv, negativ oder null ist.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.clz32", "clz32()")}},<br />{{jsxref("Math.imul", "imul()")}}
      </td>
      <td>
        Anzahl der führenden Nullbits in der 32-Bit-Binärdarstellung.<br />Das
        Ergebnis der C-ähnlichen 32-Bit-Multiplikation der beiden Argumente.
      </td>
    </tr>
  </tbody>
</table>

Im Gegensatz zu vielen anderen Objekten erstellen Sie niemals ein eigenes `Math`-Objekt. Sie verwenden immer das eingebaute `Math`-Objekt.

## BigInts

Ein Manko von Zahlenwerten ist, dass sie nur 64 Bit haben. In der Praxis können sie aufgrund der Verwendung der IEEE 754-Kodierung keine Ganzzahl darstellen, die größer ist als [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) (welches 2<sup>53</sup> - 1 ist) genau darstellen. Um den Bedarf an der Kodierung von Binärdaten zu befriedigen und um mit anderen Sprachen, die breite Ganzzahlen wie `i64` (64-Bit-Ganzzahlen) und `i128` (128-Bit-Ganzzahlen) bieten, interoperabel zu sein, bietet JavaScript auch einen weiteren Datentyp an, um _beliebig große Ganzzahlen_ darzustellen: [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

Ein BigInt kann als Ganzzahlliteral definiert werden, das mit `n` suffigiert wird:

```js
const b1 = 123n;
// Can be arbitrarily large.
const b2 = -1234567890987654321n;
```

BigInts können auch aus Zahlenwerten oder Zeichenkettenwerten mit dem [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Konstruktor erstellt werden.

```js
const b1 = BigInt(123);
// Using a string prevents loss of precision, since long number
// literals don't represent what they seem like.
const b2 = BigInt("-1234567890987654321");
```

Konzepterweise ist ein BigInt nur eine beliebig lange Bitfolge, die eine Ganzzahl kodiert. Sie können sicher beliebige arithmetische Operationen durchführen, ohne an Präzision zu verlieren oder einen Überlauf bzw. Unterlauf zu erleiden.

```js
const integer = 12 ** 34; // 4.9222352429520264e+36; only has limited precision
const bigint = 12n ** 34n; // 4922235242952026704037113243122008064n
```

Im Vergleich zu Zahlen bieten BigInt-Werte höhere Präzision, wenn es darum geht, große _Ganzzahlen_ darzustellen; sie können jedoch keine _Gleitkommazahlen_ darstellen. Zum Beispiel würde eine Division auf null runden:

```js
const bigintDiv = 5n / 2n; // 2n, because there's no 2.5 in BigInt
```

`Math`-Funktionen können nicht auf BigInt-Werten verwendet werden. Es gibt [einen offenen Vorschlag](https://github.com/tc39/proposal-bigint-math) zur Überladung bestimmter `Math`-Funktionen wie `Math.max()`, um BigInt-Werte zu erlauben.

Die Wahl zwischen BigInt und number hängt von Ihrem Anwendungsfall und dem Bereich Ihrer Eingaben ab. Die Präzision von numbers sollte bereits die meisten alltäglichen Aufgaben bewältigen können, und BigInts sind am besten geeignet, um Binärdaten zu verarbeiten.

Lesen Sie mehr darüber, was Sie mit BigInt-Werten machen können, im Abschnitt [Expressions and Operators](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bigint_operators) oder im [BigInt Reference](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

## Zeichenketten

Der {{Glossary("String", "String")}} Typ in JavaScript wird verwendet, um Textdaten darzustellen. Es ist eine Menge von "Elementen" von 16-Bit-Unsigned-Integer-Werten (UTF-16-Code-Einheiten). Jedes Element in der Zeichenkette nimmt eine Position in der Zeichenkette ein. Das erste Element ist bei Index 0, das nächste bei Index 1 und so weiter. Die Länge einer Zeichenkette ist die Anzahl der Elemente in ihr. Sie können Zeichenketten mit Zeichenkettenliteralen oder Zeichenkettenobjekten erstellen.

### Zeichenkettenliterale

Sie können Zeichenketten im Quellcode entweder mit einfachen oder doppelten Anführungszeichen angeben:

```js-nolint
'foo'
"bar"
```

Innerhalb eines Zeichenkettenliterals können die meisten Zeichen wörtlich eingegeben werden. Die einzigen Ausnahmen sind der Backslash (`\`, der eine Escape-Sequenz startet), das Zeichen für das Anführungszeichen, das verwendet wird, um die Zeichenkette einzuschließen und die Zeichenkette beendet, und das Zeilenumbruchszeichen, das einen Syntaxfehler verursacht, wenn es nicht von einem Backslash gefolgt wird.

Fortgeschrittenere Zeichenketten können mit Escape-Sequenzen erstellt werden:

#### Hexadezimale Escape-Sequenzen

Die Zahl nach \x wird als [hexadezimale](https://en.wikipedia.org/wiki/Hexadecimal) Zahl interpretiert.

```js-nolint
"\xA9" // "©"
```

#### Unicode-Escape-Sequenzen

Die Unicode-Escape-Sequenzen erfordern mindestens vier hexadezimale Ziffern nach dem `\u`.

```js-nolint
"\u00A9" // "©"
```

#### Unicode-Codepunkt-Esacapes

Durch Unicode-Codepunkt-Escapes kann jedes Zeichen mit hexadezimalen Zahlen escaped werden, sodass es möglich ist, Unicode-Codepunkte bis zu `0x10FFFF` zu verwenden. Mit den vierstelligen Unicode-Escapes ist es oft notwendig, die Surrogathälften separat zu schreiben, um das gleiche Ergebnis zu erzielen.

Siehe auch {{jsxref("String.fromCodePoint()")}} oder {{jsxref("String.prototype.codePointAt()")}}.

```js-nolint
"\u{2F804}"

// the same with simple Unicode escapes
"\uD87E\uDC04"
```

## Zeichenkettenobjekt

Sie können Methoden direkt auf einem Zeichenkettenwert aufrufen:

```js
console.log("hello".toUpperCase()); // HELLO
```

Die folgenden Methoden sind auf {{jsxref("String")}}-Werten verfügbar:

- Abfrage: das Zeichen oder der Zeichencode an einem bestimmten Zeichenkettenindex abrufen. Methoden umfassen {{jsxref("String/at", "at()")}}, {{jsxref("String/charAt", "charAt()")}}, {{jsxref("String/charCodeAt", "charCodeAt()")}} und {{jsxref("String/codePointAt", "codePointAt()")}}.
- Suche: Informationen über ein Teilzeichen, das einem Muster entspricht, erhalten oder testen, ob ein bestimmtes Teilzeichen vorhanden ist. Methoden umfassen {{jsxref("String/indexOf", "indexOf()")}}, {{jsxref("String/lastIndexOf", "lastIndexOf()")}}, {{jsxref("String/startsWith", "startsWith()")}}, {{jsxref("String/endsWith", "endsWith()")}}, {{jsxref("String/includes", "includes()")}}, {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}} und {{jsxref("String/search", "search()")}}.
- Zusammensetzung: Zeichenketten zu einer längeren Zeichenkette kombinieren. Methoden umfassen {{jsxref("String/padStart", "padStart()")}}, {{jsxref("String/padEnd", "padEnd()")}}, {{jsxref("String/concat", "concat()")}} und {{jsxref("String/repeat", "repeat()")}}.
- Zerlegung: eine Zeichenkette in kleinere Zeichenketten aufteilen. Methoden umfassen {{jsxref("String/split", "split()")}}, {{jsxref("String/slice", "slice()")}}, {{jsxref("String/substring", "substring()")}}, {{jsxref("String/substr", "substr()")}}, {{jsxref("String/trim", "trim()")}}, {{jsxref("String/trimStart", "trimStart()")}} und {{jsxref("String/trimEnd", "trimEnd()")}}.
- Transformation: eine neue Zeichenkette basierend auf dem Inhalt der aktuellen Zeichenkette zurückgeben. Methoden umfassen {{jsxref("String/toLowerCase", "toLowerCase()")}}, {{jsxref("String/toUpperCase", "toUpperCase()")}}, {{jsxref("String/toLocaleLowerCase", "toLocaleLowerCase()")}}, {{jsxref("String/toLocaleUpperCase", "toLocaleUpperCase()")}}, {{jsxref("String/normalize", "normalize()")}} und {{jsxref("String/toWellFormed", "toWellFormed()")}}.

Beim Arbeiten mit Zeichenketten gibt es zwei weitere Objekte, die wichtige Funktionen zur Zeichenkettenmanipulation bieten: {{jsxref("RegExp")}} und {{jsxref("Intl")}}. Diese werden in [reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_Expressions) und [Internationalisierung](/de/docs/Web/JavaScript/Guide/Internationalization) eingeführt.

## Template-Literale

[Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) sind Zeichenkettenliterale, die eingebettete Ausdrücke erlauben. Sie können mehrzeilige Zeichenketten und Zeichenketteninterpolation mit ihnen verwenden.

Template-Literale werden durch Backtick ([Gravis](https://en.wikipedia.org/wiki/Grave_accent)) Zeichen (`` ` ``) anstelle von doppelten oder einfachen Anführungszeichen eingeschlossen. Template-Literale können Platzhalter enthalten. Diese werden durch das Dollarzeichen und geschweifte Klammern (`${expression}`) angezeigt.

### Mehrzeilig

Alle in der Quelle eingefügten Zeilenumbruchszeichen sind Teil des Template-Literals. Mit normalen Zeichenketten müssten Sie die folgende Syntax verwenden, um mehrzeilige Zeichenketten zu erhalten:

```js
console.log(
  "string text line 1\n\
string text line 2",
);
// "string text line 1
// string text line 2"
```

Um denselben Effekt mit mehrzeiligen Zeichenketten zu erzielen, können Sie nun schreiben:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

### Eingebettete Ausdrücke

Um Ausdrücke innerhalb normaler Zeichenketten einzubetten, würden Sie die folgende Syntax verwenden:

```js
const five = 5;
const ten = 10;
console.log(
  "Fifteen is " + (five + ten) + " and not " + (2 * five + ten) + ".",
);
// "Fifteen is 15 and not 20."
```

Jetzt können Sie mit Template-Literalen den syntaktischen Zucker verwenden, der solche Ersetzungen lesbarer macht:

```js
const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
// "Fifteen is 15 and not 20."
```

Für weitere Informationen lesen Sie über [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference).

{{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Representing_dates_times")}}

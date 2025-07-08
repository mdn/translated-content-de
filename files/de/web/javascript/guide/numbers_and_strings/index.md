---
title: Zahlen und Strings
slug: Web/JavaScript/Guide/Numbers_and_strings
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Representing_dates_times")}}

Dieses Kapitel führt die beiden grundlegendsten Datentypen in JavaScript ein: Zahlen und Strings. Wir werden ihre zugrunde liegenden Repräsentationen vorstellen und Funktionen, die verwendet werden, um mit ihnen zu arbeiten und Berechnungen durchzuführen.

## Zahlen

In JavaScript werden Zahlen im [Doppelpräzisions-64-Bit-Binärformat IEEE 754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) implementiert (d.h. eine Zahl zwischen ±2^−1022 und ±2^+1023, oder etwa ±10^−308 bis ±10^+308, mit einer numerischen Präzision von 53 Bits). Ganzzahlen bis zu ±2^53 − 1 können exakt dargestellt werden.

Zusätzlich zur Darstellung von Fließkommazahlen hat der Zahlentyp drei symbolische Werte: {{jsxref("Infinity")}}, `-Infinity` und {{jsxref("NaN")}} (not-a-number).

Siehe auch [JavaScript-Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures) für den Kontext mit anderen primitiven Typen in JavaScript.

Sie können vier Arten von Zahl-Literalen verwenden: dezimal, binär, oktal und hexadezimal.

### Dezimalzahlen

```js-nolint
1234567890
42
```

Dezimal-Literale können mit einer Null (`0`) gefolgt von einer anderen Dezimalziffer beginnen, aber wenn alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies wird als veraltete Syntax betrachtet, und Zahl-Literale mit Präfix `0`, egal ob als Oktal oder Dezimal interpretiert, verursachen einen Syntaxfehler im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) — verwenden Sie stattdessen das Präfix `0o`.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

### Binärzahlen

Die Binärzahl-Syntax verwendet eine führende Null gefolgt von einem kleinen oder großen lateinischen Buchstaben "B" (`0b` oder `0B`). Wenn die Ziffern nach dem `0b` nicht 0 oder 1 sind, wird der folgende {{jsxref("SyntaxError")}} ausgelöst: "Fehlende binäre Ziffern nach 0b".

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

### Oktalzahlen

Die Standard-Syntax für Oktalzahlen ist, sie mit `0o` zu präfixieren. Zum Beispiel:

```js-nolint
0O755 // 493
0o644 // 420
```

Es gibt auch eine veraltete Syntax für Oktalzahlen — indem die Oktalzahl mit einer Null präfixiert wird: `0644 === 420` und `"\045" === "%"`. Wenn die Ziffern nach der `0` außerhalb des Bereichs 0 bis 7 liegen, wird die Zahl als Dezimalzahl interpretiert.

```js
const n = 0755; // 493
const m = 0644; // 420
```

[Strikter Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) verbietet diese Oktal-Syntax.

### Hexadezimalzahlen

Hexadezimalzahl-Syntax verwendet eine führende Null gefolgt von einem kleinen oder großen lateinischen Buchstaben "X" (`0x` oder `0X`). Wenn die Ziffern nach 0x außerhalb des Bereichs (0123456789ABCDEF) liegen, wird der folgende {{jsxref("SyntaxError")}} ausgelöst: "Bezeichner beginnt sofort nach Zahlenliteral".

```js-nolint
0xFFFFFFFFFFFFF // 4503599627370495
0xabcdef123456  // 188900967593046
0XA             // 10
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

Das eingebaute {{jsxref("Number")}}-Objekt hat Eigenschaften für numerische Konstanten, wie den Maximalwert, "not-a-number" und Unendlichkeit. Sie können die Werte dieser Eigenschaften nicht ändern, und Sie verwenden sie wie folgt:

```js
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
```

Sie beziehen sich immer auf eine Eigenschaft des vordefinierten `Number`-Objekts wie oben gezeigt und nicht auf eine Eigenschaft eines `Number`-Objekts, das Sie selbst erstellen.

Die folgende Tabelle fasst die Eigenschaften des `Number`-Objekts zusammen.

| Eigenschaft                            | Beschreibung                                                                                                                                                 |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{jsxref("Number.MAX_VALUE")}}         | Die größte darstellbare positive Zahl (`1.7976931348623157e+308`)                                                                                            |
| {{jsxref("Number.MIN_VALUE")}}         | Die kleinste darstellbare positive Zahl (`5e-324`)                                                                                                           |
| {{jsxref("Number.NaN")}}               | Spezieller "not a number"-Wert                                                                                                                               |
| {{jsxref("Number.NEGATIVE_INFINITY")}} | Spezieller negativer Unendlichkeitswert; wird bei Überlauf zurückgegeben                                                                                     |
| {{jsxref("Number.POSITIVE_INFINITY")}} | Spezieller positiver Unendlichkeitswert; wird bei Überlauf zurückgegeben                                                                                     |
| {{jsxref("Number.EPSILON")}}           | Unterschied zwischen `1` und dem kleinsten darstellbaren Wert größer als `1`, der als {{jsxref("Number")}} dargestellt werden kann (`2.220446049250313e-16`) |
| {{jsxref("Number.MIN_SAFE_INTEGER")}}  | Minimal sichere Ganzzahl in JavaScript (−2^53 + 1, oder `−9007199254740991`)                                                                                 |
| {{jsxref("Number.MAX_SAFE_INTEGER")}}  | Maximal sichere Ganzzahl in JavaScript (+2^53 − 1, oder `+9007199254740991`)                                                                                 |

| Methode                              | Beschreibung                                                                                                                                                           |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.parseFloat()")}}    | Analysiert ein String-Argument und gibt eine Gleitkommazahl zurück. Vergleichbar mit der globalen {{jsxref("parseFloat()")}}-Funktion.                                 |
| {{jsxref("Number.parseInt()")}}      | Analysiert ein String-Argument und gibt eine Ganzzahl im angegebenen Radix- oder Basis-System zurück. Vergleichbar mit der globalen {{jsxref("parseInt()")}}-Funktion. |
| {{jsxref("Number.isFinite()")}}      | Bestimmt, ob der übergebene Wert eine endliche Zahl ist.                                                                                                               |
| {{jsxref("Number.isInteger()")}}     | Bestimmt, ob der übergebene Wert eine Ganzzahl ist.                                                                                                                    |
| {{jsxref("Number.isNaN()")}}         | Bestimmt, ob der übergebene Wert {{jsxref("NaN")}} ist. Robustere Version der ursprünglichen globalen {{jsxref("isNaN()")}}.                                           |
| {{jsxref("Number.isSafeInteger()")}} | Bestimmt, ob der bereitgestellte Wert eine Zahl ist, die eine _sichere Ganzzahl_ ist.                                                                                  |

Das `Number`-Prototyp stellt Methoden bereit, um Informationen aus `Number`-Objekten in verschiedenen Formaten abzurufen. Die folgende Tabelle fasst die Methoden von `Number.prototype` zusammen.

| Methode                                               | Beschreibung                                                                                                |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number/toExponential", "toExponential()")}} | Gibt einen String zurück, der die Zahl in Exponentialschreibweise darstellt.                                |
| {{jsxref("Number/toFixed", "toFixed()")}}             | Gibt einen String zurück, der die Zahl in Festkomma-Schreibweise darstellt.                                 |
| {{jsxref("Number/toPrecision", "toPrecision()")}}     | Gibt einen String zurück, der die Zahl mit einer angegebenen Präzision in Festkomma-Schreibweise darstellt. |

## Math-Objekt

Das eingebaute {{jsxref("Math")}}-Objekt hat Eigenschaften und Methoden für mathematische Konstanten und Funktionen. Beispielsweise hat die `PI`-Eigenschaft des `Math`-Objekts den Wert von Pi (3,141…), den Sie in einer Anwendung folgendermaßen verwenden würden:

```js
Math.PI;
```

Ähnlich sind Standard-Mathematik-Funktionen Methoden von `Math`. Diese umfassen trigonometrische, logarithmische, exponentielle und andere Funktionen. Wenn Sie beispielsweise die trigonometrische Funktion Sinus verwenden möchten, würden Sie schreiben:

```js
Math.sin(1.56);
```

Beachten Sie, dass alle trigonometrischen Methoden von `Math` Argumente in Radiant annehmen.

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
      <td>Standard trigonometrische Funktionen; mit Argument in Radiant.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.asin", "asin()")}},
        {{jsxref("Math.acos", "acos()")}},
        {{jsxref("Math.atan", "atan()")}},
        {{jsxref("Math.atan2", "atan2()")}}
      </td>
      <td>Inverse trigonometrische Funktionen; Rückgabewerte in Radiant.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sinh", "sinh()")}},
        {{jsxref("Math.cosh", "cosh()")}},
        {{jsxref("Math.tanh", "tanh()")}}
      </td>
      <td>Hyperbolische Funktionen; Argument im Hyperbelwinkel.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.asinh", "asinh()")}},
        {{jsxref("Math.acosh", "acosh()")}},
        {{jsxref("Math.atanh", "atanh()")}}
      </td>
      <td>Inverse hyperbolische Funktionen; Rückgabewerte im Hyperbelwinkel.</td>
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
        Gibt die größte/kleinste Ganzzahl zurück, die kleiner/größer oder gleich einem Argument ist.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.min", "min()")}},
        {{jsxref("Math.max", "max()")}}
      </td>
      <td>
        Gibt den minimalen oder maximalen (jeweils) Wert einer durch Kommas getrennten Liste von Zahlen als Argumente zurück.
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
        Quadratwurzel, Kubikwurzel, Quadratwurzel der Summe der quadratischen Argumente.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("Math.sign", "sign()")}}</td>
      <td>
        Das Vorzeichen einer Zahl, das angibt, ob die Zahl positiv, negativ oder null ist.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.clz32", "clz32()")}},<br />{{jsxref("Math.imul", "imul()")}}
      </td>
      <td>
        Anzahl der führenden Null-Bits in der 32-Bit-Binärdarstellung.<br />Das
        Ergebnis der C-ähnlichen 32-Bit-Multiplikation der beiden Argumente.
      </td>
    </tr>
  </tbody>
</table>

Im Gegensatz zu vielen anderen Objekten erstellen Sie niemals ein eigenes `Math`-Objekt. Sie verwenden immer das eingebaute `Math`-Objekt.

## BigInts

Ein Mangel von Zahlenwerten ist, dass sie nur 64 Bits haben. In der Praxis, aufgrund der Verwendung von IEEE 754-Codierung, können sie keine Ganzzahl größer als [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) (das ist 2<sup>53</sup> - 1) präzise darstellen. Um das Bedürfnis nach der Codierung von Binärdaten zu erfüllen und um mit anderen Sprachen, die breite Ganzzahlen wie `i64` (64-Bit-Ganzzahlen) und `i128` (128-Bit-Ganzzahlen) anbieten, zusammenzuarbeiten, bietet JavaScript auch einen anderen Datentyp an, um _beliebig große Ganzzahlen_ darzustellen: [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

Ein BigInt kann als Ganzzahlenliteral definiert werden, das mit `n` endet:

```js
const b1 = 123n;
// Can be arbitrarily large.
const b2 = -1234567890987654321n;
```

BigInts können auch aus Zahlenwerten oder Stringwerten mithilfe des [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Konstruktors erstellt werden.

```js
const b1 = BigInt(123);
// Using a string prevents loss of precision, since long number
// literals don't represent what they seem like.
const b2 = BigInt("-1234567890987654321");
```

Konzeptionell ist ein BigInt einfach eine beliebig lange Sequenz von Bits, die eine Ganzzahl kodiert. Sie können sicher alle arithmetischen Operationen durchführen, ohne an Präzision zu verlieren oder ein Über- bzw. Unterlauf zu verursachen.

```js
const integer = 12 ** 34; // 4.9222352429520264e+36; only has limited precision
const bigint = 12n ** 34n; // 4922235242952026704037113243122008064n
```

Im Vergleich zu Zahlen bieten BigInt-Werte eine höhere Präzision beim Darstellen großer _Ganzzahlen_; sie können jedoch keine _Fließkommazahlen_ darstellen. Zum Beispiel würde eine Division auf null runden:

```js
const bigintDiv = 5n / 2n; // 2n, because there's no 2.5 in BigInt
```

`Math`-Funktionen können nicht auf BigInt-Werte angewendet werden; sie funktionieren nur mit Zahlen.

Die Wahl zwischen BigInt und Zahl hängt von Ihrem Anwendungsfall und dem Bereich Ihrer Eingaben ab. Die Präzision von Zahlen sollte in der Lage sein, die meisten alltäglichen Aufgaben bereits zu bewältigen, und BigInts sind am besten geeignet für den Umgang mit Binärdaten.

Lesen Sie mehr darüber, was Sie mit BigInt-Werten machen können, im Abschnitt [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bigint_operators) oder im [BigInt-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

## Strings

Der {{Glossary("String", "String")}}-Typ von JavaScript wird zur Darstellung von Textdaten verwendet. Es handelt sich um eine Menge von "Elementen" von 16-Bit-unsigned Integer-Werten (UTF-16-Codeeinheiten). Jedes Element in dem String nimmt eine Position im String ein. Das erste Element befindet sich am Index 0, das nächste an Index 1 und so weiter. Die Länge eines Strings ist die Anzahl der Elemente in ihm. Sie können Strings mithilfe von String-Literalen oder String-Objekten erstellen.

### String-Literale

Sie können Strings im Quellcode mit einfachen oder doppelten Anführungszeichen deklarieren:

```js-nolint
'foo'
"bar"
```

In einem String-Literal können die meisten Zeichen wörtlich eingegeben werden. Die einzigen Ausnahmen sind der Backslash (`\`, der eine Escape-Sequenz einleitet), das Anführungszeichen, das zum Einschließen des Strings verwendet wird, das den String beendet, und das Zeilenumbruchzeichen, das einen Syntaxfehler verursacht, wenn ihm nicht ein Backslash vorangeht.

Fortgeschrittenere Strings können mit Escape-Sequenzen erstellt werden:

#### Hexadezimale Escape-Sequenzen

Die Zahl nach \x wird als [Hexadezimalzahl](https://en.wikipedia.org/wiki/Hexadecimal) interpretiert.

```js-nolint
"\xA9" // "©"
```

#### Unicode-Escape-Sequenzen

Die Unicode-Escape-Sequenzen erfordern mindestens vier hexadezimale Ziffern nach `\u`.

```js-nolint
"\u00A9" // "©"
```

#### Unicode-Codepunkt-Escapes

Mit Unicode-Codepunkt-Escapes kann jedes Zeichen mit Hexadezimalzahlen maskiert werden, sodass es möglich ist, Unicode-Codepunkte bis zu `0x10FFFF` zu verwenden. Mit den vierstelligen Unicode-Escapes ist es oft notwendig, die Surrogat-Hälften separat zu schreiben, um dasselbe Ergebnis zu erzielen.

Siehe auch {{jsxref("String.fromCodePoint()")}} oder {{jsxref("String.prototype.codePointAt()")}}.

```js-nolint
"\u{2F804}"

// the same with simple Unicode escapes
"\uD87E\uDC04"
```

## String-Objekt

Sie können Methoden direkt auf einem String-Wert aufrufen:

```js
console.log("hello".toUpperCase()); // HELLO
```

Die folgenden Methoden sind auf {{jsxref("String")}}-Werten verfügbar:

- Abfrage: das Zeichen oder den Zeichencode an einem bestimmten String-Index abrufen. Methoden umfassen {{jsxref("String/at", "at()")}}, {{jsxref("String/charAt", "charAt()")}}, {{jsxref("String/charCodeAt", "charCodeAt()")}}, und {{jsxref("String/codePointAt", "codePointAt()")}}.
- Suche: Informationen zu einem Teilstring, der einem Muster entspricht, abrufen oder testen, ob ein bestimmter Teilstring existiert. Methoden umfassen {{jsxref("String/indexOf", "indexOf()")}}, {{jsxref("String/lastIndexOf", "lastIndexOf()")}}, {{jsxref("String/startsWith", "startsWith()")}}, {{jsxref("String/endsWith", "endsWith()")}}, {{jsxref("String/includes", "includes()")}}, {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, und {{jsxref("String/search", "search()")}}
- Zusammensetzung: Strings in einen längeren String kombinieren. Methoden umfassen {{jsxref("String/padStart", "padStart()")}}, {{jsxref("String/padEnd", "padEnd()")}}, {{jsxref("String/concat", "concat()")}}, und {{jsxref("String/repeat", "repeat()")}}.
- Zerlegung: Einen String in kleinere Strings aufteilen. Methoden umfassen {{jsxref("String/split", "split()")}}, {{jsxref("String/slice", "slice()")}}, {{jsxref("String/substring", "substring()")}}, {{jsxref("String/substr", "substr()")}}, {{jsxref("String/trim", "trim()")}}, {{jsxref("String/trimStart", "trimStart()")}}, und {{jsxref("String/trimEnd", "trimEnd()")}}.
- Transformation: Einen neuen String basierend auf dem Inhalt des aktuellen Strings zurückgeben. Methoden umfassen {{jsxref("String/toLowerCase", "toLowerCase()")}}, {{jsxref("String/toUpperCase", "toUpperCase()")}}, {{jsxref("String/toLocaleLowerCase", "toLocaleLowerCase()")}}, {{jsxref("String/toLocaleUpperCase", "toLocaleUpperCase()")}}, {{jsxref("String/normalize", "normalize()")}}, und {{jsxref("String/toWellFormed", "toWellFormed()")}}.

Beim Arbeiten mit Strings gibt es zwei weitere Objekte, die wichtige Funktionalität für die String-Manipulation bieten: {{jsxref("RegExp")}} und {{jsxref("Intl")}}. Sie werden in [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) und [Internationalisierung](/de/docs/Web/JavaScript/Guide/Internationalization) eingeführt.

## Template-Literale

[Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) sind String-Literale, die eingebettete Ausdrücke erlauben. Sie können mehrzeilige Strings und String-Interpolationsfunktionen mit ihnen verwenden.

Template-Literale werden von Backtick-Zeichen ([Gravis](https://en.wikipedia.org/wiki/Grave_accent)) (`` ` ``) anstelle von doppelten oder einfachen Anführungszeichen umschlossen. Template-Literale können Platzhalter enthalten. Diese werden durch das Dollarzeichen und geschweifte Klammern (`${expression}`) angezeigt.

### Mehrzeilig

Alle in den Quellcode eingefügten Zeilenumbruchzeichen sind Teil des Template-Literals. Mit normalen Strings müssten Sie die folgende Syntax verwenden, um mehrzeilige Strings zu erhalten:

```js
console.log(
  "string text line 1\n\
string text line 2",
);
// "string text line 1
// string text line 2"
```

Um denselben Effekt mit mehrzeiligen Strings zu erzielen, können Sie nun schreiben:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

### Eingebettete Ausdrücke

Um Ausdrücke innerhalb normaler Strings einzubetten, würden Sie die folgende Syntax verwenden:

```js
const five = 5;
const ten = 10;
console.log(
  "Fifteen is " + (five + ten) + " and not " + (2 * five + ten) + ".",
);
// "Fifteen is 15 and not 20."
```

Jetzt, mit Template-Literalen, können Sie die syntaktische Vereinfachung verwenden, um solche Substitutionen lesbarer zu machen:

```js
const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
// "Fifteen is 15 and not 20."
```

Für weitere Informationen, lesen Sie über [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference).

{{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Representing_dates_times")}}

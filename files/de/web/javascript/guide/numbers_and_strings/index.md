---
title: Zahlen und Zeichenfolgen
slug: Web/JavaScript/Guide/Numbers_and_strings
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Representing_dates_times")}}

Dieses Kapitel führt die beiden grundlegendsten Datentypen in JavaScript ein: Zahlen und Zeichenfolgen. Wir werden ihre zugrunde liegenden Darstellungen und Funktionen erläutern, die zur Arbeit mit ihnen und zur Durchführung von Berechnungen verwendet werden.

## Zahlen

In JavaScript werden Zahlen im [Double-Precision 64-Bit-Binärformat IEEE 754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) implementiert (d.h. eine Zahl zwischen ±2^−1022 und ±2^+1023, oder etwa ±10^−308 bis ±10^+308, mit einer numerischen Genauigkeit von 53 Bits). Ganze Zahlen bis zu ±2^53 − 1 können exakt dargestellt werden.

Zusätzlich zur Darstellung von Gleitkommazahlen hat der Zahlentyp drei symbolische Werte: {{jsxref("Infinity")}}, `-Infinity` und {{jsxref("NaN")}} (not-a-number).

Siehe auch [JavaScript-Datentypen und -Strukturen](/de/docs/Web/JavaScript/Guide/Data_structures) für den Kontext mit anderen primitiven Typen in JavaScript.

Es können vier Arten von Zahlenliteralen verwendet werden: dezimal, binär, oktal und hexadezimal.

### Dezimalzahlen

```js-nolint
1234567890
42
```

Dezimalliterale können mit einer Null (`0`) beginnen, gefolgt von einer weiteren Dezimalziffer. Wenn alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies wird als veraltete Syntax angesehen, und Zahlenliterale mit einer führenden `0` verursachen einen Syntaxfehler im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) — verwenden Sie stattdessen das Präfix `0o`.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

### Binärzahlen

Die Syntax für Binärzahlen verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "B" (`0b` oder `0B`). Wenn die Ziffern nach der `0b` keine 0 oder 1 sind, wird der folgende {{jsxref("SyntaxError")}} ausgelöst: "Missing binary digits after 0b".

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

### Oktalzahlen

Die Standardsyntax für Oktalzahlen besteht darin, sie mit `0o` zu präfixieren. Zum Beispiel:

```js-nolint
0O755 // 493
0o644 // 420
```

Es gibt auch eine veraltete Syntax für Oktalzahlen – durch Präfixierung der Oktalzahl mit einer Null: `0644 === 420` und `"\045" === "%"`. Wenn die Ziffern nach der `0` außerhalb des Bereichs von 0 bis 7 liegen, wird die Zahl als Dezimalzahl interpretiert.

```js
const n = 0755; // 493
const m = 0644; // 420
```

Der [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verbietet diese Oktalsyntax.

### Hexadezimalzahlen

Die Hexadezimalsyntax verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "X" (`0x` oder `0X`). Wenn die Ziffern nach 0x außerhalb des Bereichs (0123456789ABCDEF) liegen, wird der folgende {{jsxref("SyntaxError")}} ausgelöst: "Identifier starts immediately after numeric literal".

```js-nolint
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

### Potenzierung

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

Das eingebaute {{jsxref("Number")}}-Objekt hat Eigenschaften für numerische Konstanten, wie zum Beispiel den Maximalwert, "not-a-number" und Unendlichkeit. Sie können die Werte dieser Eigenschaften nicht ändern und verwenden sie wie folgt:

```js
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
```

Sie beziehen sich immer auf eine Eigenschaft des vordefinierten `Number`-Objekts, wie oben gezeigt, und nicht auf eine Eigenschaft eines selbst erstellten `Number`-Objekts.

Die folgende Tabelle fasst die Eigenschaften des `Number`-Objekts zusammen.

| Eigenschaft                            | Beschreibung                                                                                                                                 |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.MAX_VALUE")}}         | Die größte positive darstellbare Zahl (`1.7976931348623157e+308`)                                                                            |
| {{jsxref("Number.MIN_VALUE")}}         | Die kleinste positive darstellbare Zahl (`5e-324`)                                                                                           |
| {{jsxref("Number.NaN")}}               | Spezieller "not a number"-Wert                                                                                                               |
| {{jsxref("Number.NEGATIVE_INFINITY")}} | Spezieller negativer unendlicher Wert; wird bei Überlauf zurückgegeben                                                                       |
| {{jsxref("Number.POSITIVE_INFINITY")}} | Spezieller positiver unendlicher Wert; wird bei Überlauf zurückgegeben                                                                       |
| {{jsxref("Number.EPSILON")}}           | Differenz zwischen `1` und dem kleinsten Wert größer als `1`, der als {{jsxref("Number")}} dargestellt werden kann (`2.220446049250313e-16`) |
| {{jsxref("Number.MIN_SAFE_INTEGER")}}  | Kleinste sichere Ganzzahl in JavaScript (−2^53 + 1, oder `−9007199254740991`)                                                                |
| {{jsxref("Number.MAX_SAFE_INTEGER")}}  | Größte sichere Ganzzahl in JavaScript (+2^53 − 1, or `+9007199254740991`)                                                                    |

| Methode                              | Beschreibung                                                                                                                                                        |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.parseFloat()")}}    | Parst ein Zeichenfolgenargument und gibt eine Gleitkommazahl zurück. Gleiche Funktion wie die globale {{jsxref("parseFloat()")}}-Funktion.                          |
| {{jsxref("Number.parseInt()")}}      | Parst ein Zeichenfolgenargument und gibt eine Ganzzahl zur angegebenen Basis oder Radix zurück. Gleiche Funktion wie die globale {{jsxref("parseInt()")}}-Funktion. |
| {{jsxref("Number.isFinite()")}}      | Bestimmt, ob der übergebene Wert eine endliche Zahl ist.                                                                                                            |
| {{jsxref("Number.isInteger()")}}     | Bestimmt, ob der übergebene Wert eine Ganzzahl ist.                                                                                                                 |
| {{jsxref("Number.isNaN()")}}         | Bestimmt, ob der übergebene Wert {{jsxref("NaN")}} ist. Robustere Version der ursprünglichen globalen {{jsxref("isNaN()")}}-Funktion.                               |
| {{jsxref("Number.isSafeInteger()")}} | Bestimmt, ob der bereitgestellte Wert eine Zahl ist, die eine _sichere Ganzzahl_ ist.                                                                               |

Der `Number`-Prototyp bietet Methoden für die Informationsabfrage von `Number`-Objekten in verschiedenen Formaten. Die folgende Tabelle fasst die Methoden von `Number.prototype` zusammen.

| Methode                                               | Beschreibung                                                                                                       |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| {{jsxref("Number/toExponential", "toExponential()")}} | Gibt eine Zeichenfolge zurück, die die Zahl in Exponentialschreibweise darstellt.                                  |
| {{jsxref("Number/toFixed", "toFixed()")}}             | Gibt eine Zeichenfolge zurück, die die Zahl in Festkomma-Schreibweise darstellt.                                   |
| {{jsxref("Number/toPrecision", "toPrecision()")}}     | Gibt eine Zeichenfolge zurück, die die Zahl mit einer angegebenen Genauigkeit in Festkomma-Schreibweise darstellt. |

## Math-Objekt

Das eingebaute {{jsxref("Math")}}-Objekt bietet Eigenschaften und Methoden für mathematische Konstanten und Funktionen. Zum Beispiel hat die `PI`-Eigenschaft des `Math`-Objekts den Wert von Pi (3.141…), den Sie in einer Anwendung wie folgt verwenden würden:

```js
Math.PI;
```

Ähnlich sind Standard-Mathematikfunktionen Methoden von `Math`. Dazu gehören trigonometrische, logarithmische, exponentielle und andere Funktionen. Wenn Sie zum Beispiel die trigonometrische Funktion Sinus verwenden möchten, würden Sie schreiben:

```js
Math.sin(1.56);
```

Beachten Sie, dass alle trigonometrischen Methoden von `Math` Argumente im Bogenmaß erfordern.

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
      <td>Betrag</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sin", "sin()")}},
        {{jsxref("Math.cos", "cos()")}},
        {{jsxref("Math.tan", "tan()")}}
      </td>
      <td>Standard-trigonometrische Funktionen; mit dem Argument im Bogenmaß.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.asin", "asin()")}},
        {{jsxref("Math.acos", "acos()")}},
        {{jsxref("Math.atan", "atan()")}},
        {{jsxref("Math.atan2", "atan2()")}}
      </td>
      <td>Inverse trigonometrische Funktionen; Rückgabewerte im Bogenmaß.</td>
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
      <td>Inverse hyperbolische Funktionen; Rückgabewerte im hyperbolischen Winkel.</td>
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
        Gibt die größte/kleinste ganze Zahl zurück, die kleiner/größer oder gleich einem Argument ist.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.min", "min()")}},
        {{jsxref("Math.max", "max()")}}
      </td>
      <td>
        Gibt den minimalen oder maximalen (je nach Fall) Wert einer durch Kommas getrennten Liste von Zahlen als Argumente zurück.
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
      <td>Rundungs- und Trunkationsfunktionen.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sqrt", "sqrt()")}},
        {{jsxref("Math.cbrt", "cbrt()")}},
        {{jsxref("Math.hypot", "hypot()")}}
      </td>
      <td>
        Quadratwurzel, Kubikwurzel, Quadratwurzel der Summe der Quadrate der Argumente.
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
        Anzahl der führenden Null-Bits in der 32-Bit-Binärdarstellung.<br />Das Ergebnis der C-ähnlichen 32-Bit-Multiplikation der beiden Argumente.
      </td>
    </tr>
  </tbody>
</table>

Im Gegensatz zu vielen anderen Objekten erstellen Sie nie ein eigenes `Math`-Objekt. Sie verwenden immer das eingebaute `Math`-Objekt.

## BigInts

Ein Nachteil von Zahlenwerten ist, dass sie nur 64 Bits haben. In der Praxis können sie aufgrund der Verwendung der IEEE 754-Kodierung keine ganze Zahl größer als [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) (was 2<sup>53</sup> - 1 ist) genau darstellen. Um das Bedürfnis nach der Kodierung von Binärdaten zu lösen und um mit anderen Sprachen zusammenzuarbeiten, die breite Ganzzahlen wie `i64` (64-Bit-Ganzzahlen) und `i128` (128-Bit-Ganzzahlen) anbieten, bietet JavaScript auch einen anderen Datentyp zur Darstellung von _beliebig großen ganzen Zahlen_: [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

Ein BigInt kann als Ganzzahlliteral definiert werden, das mit `n` versehen ist:

```js
const b1 = 123n;
// Can be arbitrarily large.
const b2 = -1234567890987654321n;
```

BigInts können auch aus Zahlenwerten oder Zeichenfolgenwerten unter Verwendung des [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Konstruktors erstellt werden.

```js
const b1 = BigInt(123);
// Using a string prevents loss of precision, since long number
// literals don't represent what they seem like.
const b2 = BigInt("-1234567890987654321");
```

Konzeptionell ist ein BigInt einfach eine beliebig lange Bitfolge, die eine ganze Zahl kodiert. Sie können sicher alle arithmetischen Operationen durchführen, ohne Präzision zu verlieren oder Über-/Unterlauf zu haben.

```js
const integer = 12 ** 34; // 4.9222352429520264e+36; only has limited precision
const bigint = 12n ** 34n; // 4922235242952026704037113243122008064n
```

Im Vergleich zu Zahlen liefern BigInt-Werte eine höhere Präzision bei der Darstellung großer _ganzer Zahlen_; sie können jedoch keine _Gleitkommazahlen_ darstellen. Zum Beispiel würde eine Division auf Null runden:

```js
const bigintDiv = 5n / 2n; // 2n, because there's no 2.5 in BigInt
```

`Math`-Funktionen können nicht auf BigInt-Werte angewendet werden. Es gibt [einen offenen Vorschlag](https://github.com/tc39/proposal-bigint-math), bestimmte `Math`-Funktionen wie `Math.max()` zu überladen, um BigInt-Werte zuzulassen.

Die Entscheidung zwischen BigInt und Zahl hängt von Ihrem Anwendungsfall und dem Bereich Ihrer Eingaben ab. Die Präzision von Zahlen sollte bereits die meisten alltäglichen Aufgaben bewältigen können, und BigInts sind am besten geeignet für die Handhabung von Binärdaten.

Lesen Sie mehr darüber, was Sie mit BigInt-Werten tun können, im Abschnitt [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bigint_operators) oder in der [BigInt-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

## Zeichenfolgen

Der JavaScript-{{Glossary("String", "String")}}-Typ wird verwendet, um Textdaten darzustellen. Es ist eine Menge von "Elementen" von 16-Bit-Unsigned-Integer-Werten (UTF-16-Codeeinheiten). Jedes Element in der Zeichenfolge nimmt eine Position in der Zeichenfolge ein. Das erste Element befindet sich an Index 0, das nächste an Index 1 und so weiter. Die Länge einer Zeichenfolge ist die Anzahl der Elemente in ihr. Sie können Zeichenfolgen mit Zeichenfolgenliteralen oder Zeichenfolgenobjekten erstellen.

### Zeichenfolgenliterale

Sie können in Quellcodezeichenfolgen entweder mit einfachen oder doppelten Anführungszeichen deklarieren:

```js-nolint
'foo'
"bar"
```

In einem Zeichenfolgenliteral können die meisten Zeichen direkt eingegeben werden. Die einzigen Ausnahmen bilden der Rückschrägstrich (`\`, der eine Escape-Sequenz beginnt), das Anführungszeichen, das verwendet wird, um die Zeichenfolge einzuschließen, welches die Zeichenfolge beendet, und das Zeilenumbruchzeichen, das einen Syntaxfehler verursacht, wenn es nicht durch einen Rückschrägstrich vorangestellt ist.

Komplexere Zeichenfolgen können mit Escape-Sequenzen erstellt werden:

#### Hexadezimale Escape-Sequenzen

Die Zahl nach \x wird als [Hexadezimal](https://en.wikipedia.org/wiki/Hexadecimal)-Zahl interpretiert.

```js-nolint
"\xA9" // "©"
```

#### Unicode-Escape-Sequenzen

Die Unicode-Escape-Sequenzen erfordern mindestens vier hexadezimale Ziffern nach `\u`.

```js-nolint
"\u00A9" // "©"
```

#### Unicode-Codpunkte-Escapes

Mit Unicode-Codpunkt-Escapes kann jedes Zeichen unter Verwendung von Hexadezimalzahlen maskiert werden, sodass es möglich ist, Unicode-Codpunkte bis zu `0x10FFFF` zu verwenden. Mit den vierstelligen Unicode-Escapes ist es oft notwendig, getrennte Surrogat-Hälften zu schreiben, um das gleiche Ergebnis zu erzielen.

Siehe auch {{jsxref("String.fromCodePoint()")}} oder {{jsxref("String.prototype.codePointAt()")}}.

```js-nolint
"\u{2F804}"

// the same with simple Unicode escapes
"\uD87E\uDC04"
```

## Zeichenfolgen-Objekt

Sie können Methoden direkt auf einem Zeichenfolgenwert aufrufen:

```js
console.log("hello".toUpperCase()); // HELLO
```

Die folgenden Methoden sind auf {{jsxref("String")}}-Werten verfügbar:

- Abfrage: Erhalten Sie das Zeichen oder den Zeichencode an einem bestimmten Zeichenfolgenindex. Methoden umfassen {{jsxref("String/at", "at()")}}, {{jsxref("String/charAt", "charAt()")}}, {{jsxref("String/charCodeAt", "charCodeAt()")}}, und {{jsxref("String/codePointAt", "codePointAt()")}}.
- Suche: Erhalten Sie Informationen über ein Teilzeichenfolge, das einem Muster entspricht, oder prüfen Sie, ob eine bestimmte Teilzeichenfolge existiert. Methoden umfassen {{jsxref("String/indexOf", "indexOf()")}}, {{jsxref("String/lastIndexOf", "lastIndexOf()")}}, {{jsxref("String/startsWith", "startsWith()")}}, {{jsxref("String/endsWith", "endsWith()")}}, {{jsxref("String/includes", "includes()")}}, {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}}, und {{jsxref("String/search", "search()")}}.
- Zusammensetzung: Kombinieren Sie Zeichenfolgen zu einer längeren Zeichenfolge. Methoden umfassen {{jsxref("String/padStart", "padStart()")}}, {{jsxref("String/padEnd", "padEnd()")}}, {{jsxref("String/concat", "concat()")}}, und {{jsxref("String/repeat", "repeat()")}}.
- Zerlegung: Zerlegen Sie eine Zeichenfolge in kleinere Zeichenfolgen. Methoden umfassen {{jsxref("String/split", "split()")}}, {{jsxref("String/slice", "slice()")}}, {{jsxref("String/substring", "substring()")}}, {{jsxref("String/substr", "substr()")}}, {{jsxref("String/trim", "trim()")}}, {{jsxref("String/trimStart", "trimStart()")}}, und {{jsxref("String/trimEnd", "trimEnd()")}}.
- Transformation: Geben Sie eine neue Zeichenfolge basierend auf dem Inhalt der aktuellen Zeichenfolge zurück. Methoden umfassen {{jsxref("String/toLowerCase", "toLowerCase()")}}, {{jsxref("String/toUpperCase", "toUpperCase()")}}, {{jsxref("String/toLocaleLowerCase", "toLocaleLowerCase()")}}, {{jsxref("String/toLocaleUpperCase", "toLocaleUpperCase()")}}, {{jsxref("String/normalize", "normalize()")}}, und {{jsxref("String/toWellFormed", "toWellFormed()")}}.

Beim Arbeiten mit Zeichenfolgen gibt es zwei weitere Objekte, die wichtige Funktionalitäten für die Zeichenfolgenmanipulation bieten: {{jsxref("RegExp")}} und {{jsxref("Intl")}}. Sie werden in [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) und [Internationalisierung](/de/docs/Web/JavaScript/Guide/Internationalization) eingeführt.

## Template-Literale

[Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) sind Zeichenfolgenliterale mit eingebetteten Ausdrücken. Sie können mehrzeilige Zeichenfolgen und Funktionen zur Zeichenfolgeninterpolation mit ihnen verwenden.

Template-Literale werden durch Backticks ([Gravis-Akzent](https://en.wikipedia.org/wiki/Grave_accent)) (`` ` ``) anstelle von doppelten oder einfachen Anführungszeichen eingeschlossen. Template-Literale können Platzhalter enthalten, die durch das Dollarzeichen und geschweifte Klammern (`${expression}`) angezeigt werden.

### Mehrzeilige Zeichenfolgen

Alle im Quelltext eingefügten Zeilenumbrüche sind Bestandteil des Template-Literals. Bei normalen Zeichenfolgen müssten Sie die folgende Syntax verwenden, um mehrzeilige Zeichenfolgen zu erhalten:

```js
console.log(
  "string text line 1\n\
string text line 2",
);
// "string text line 1
// string text line 2"
```

Um den gleichen Effekt mit mehrzeiligen Zeichenfolgen zu erzielen, können Sie jetzt schreiben:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

### Eingebettete Ausdrücke

Zum Einbetten von Ausdrücken in normalen Zeichenfolgen würden Sie die folgende Syntax verwenden:

```js
const five = 5;
const ten = 10;
console.log(
  "Fifteen is " + (five + ten) + " and not " + (2 * five + ten) + ".",
);
// "Fifteen is 15 and not 20."
```

Jetzt können Sie mit Template-Literalen die syntaktische Vereinfachung nutzen, um solche Substitutionen lesbarer zu machen:

```js
const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
// "Fifteen is 15 and not 20."
```

Für weitere Informationen lesen Sie [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference).

{{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Representing_dates_times")}}

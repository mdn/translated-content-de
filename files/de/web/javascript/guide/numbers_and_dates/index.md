---
title: Zahlen und Daten
slug: Web/JavaScript/Guide/Numbers_and_dates
l10n:
  sourceCommit: 1bb0a2834d8e90495319ee9e52ecbc55e856e913
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Text_formatting")}}

Dieses Kapitel führt die Konzepte, Objekte und Funktionen ein, die verwendet werden, um mit Zahlen und Daten in JavaScript zu arbeiten und Berechnungen durchzuführen. Dies umfasst die Verwendung von Zahlen, die in verschiedenen Basen geschrieben sind, einschließlich Dezimal, Binär und Hexadezimal, sowie die Verwendung des globalen {{jsxref("Math")}}-Objekts, um eine Vielzahl mathematischer Operationen an Zahlen auszuführen.

## Zahlen

In JavaScript sind Zahlen in [doppelter Genauigkeit 64-Bit Binärformat IEEE 754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) implementiert (d.h. eine Zahl zwischen ±2^−1022 und ±2^+1023, oder etwa ±10^−308 bis ±10^+308, mit einer numerischen Genauigkeit von 53 Bits). Ganzzahlwerte bis zu ±2^53 − 1 können exakt dargestellt werden.

Zusätzlich zur Fähigkeit, Gleitkommazahlen darzustellen, hat der Zahlentyp drei symbolische Werte: {{jsxref("Infinity")}}, `-Infinity` und {{jsxref("NaN")}} (not-a-number).

Siehe auch [JavaScript-Datentypen und -Strukturen](/de/docs/Web/JavaScript/Data_structures) für den Kontext mit anderen primitiven Typen in JavaScript.

Sie können vier Arten von Zahl-Literalen verwenden: Dezimal-, Binär-, Oktal- und Hexadezimalzahlen.

### Dezimalzahlen

```js-nolint
1234567890
42
```

Dezimalzahlen-Literale können mit einer Null (`0`) gefolgt von einer anderen Dezimalziffer beginnen, aber wenn alle Ziffern nach der führenden Null (`0`) kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies wird als veraltete Syntax betrachtet, und Zahl-Literale, die mit `0` beginnen, werden in [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) entweder als Oktal- oder Dezimalzahl interpretiert und verursachen einen Syntaxfehler - daher verwenden Sie stattdessen das Präfix `0o`.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

### Binärzahlen

Die Syntax für Binärzahlen verwendet eine führende Null gefolgt von einem kleinen oder großen lateinischen Buchstaben "B" (`0b` oder `0B`). Wenn die Ziffern nach dem `0b` nicht 0 oder 1 sind, wird der folgende {{jsxref("SyntaxError")}} ausgelöst: "Binary digits nach 0b fehlen".

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

### Oktalzahlen

Die Standardsyntax für Oktalzahlen besteht darin, sie mit `0o` zu kennzeichnen. Zum Beispiel:

```js-nolint
0O755 // 493
0o644 // 420
```

Es gibt auch eine veraltete Syntax für Oktalzahlen, indem man der Oktalzahl eine Null voranstellt: `0644 === 420` und `"\045" === "%"`. Wenn die Ziffern nach dem `0` außerhalb des Bereichs 0 bis 7 liegen, wird die Zahl als Dezimalzahl interpretiert.

```js
const n = 0755; // 493
const m = 0644; // 420
```

[Strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verbietet diese Oktalsyntax.

### Hexadezimalzahlen

Die Syntax für Hexadezimalzahlen verwendet eine führende Null, gefolgt von einem kleinen oder großen lateinischen Buchstaben "X" (`0x` oder `0X`). Wenn die Ziffern nach 0x außerhalb des Bereichs (0123456789ABCDEF) liegen, wird der folgende {{jsxref("SyntaxError")}} ausgelöst: "Identifier starts immediately after numeric literal".

```js-nolint
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

### Potenzieren

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

Sie beziehen sich immer auf eine Eigenschaft des vordefinierten `Number`-Objekts wie oben gezeigt, und nicht als Eigenschaft eines selbst erstellten `Number`-Objekts.

Die folgende Tabelle fasst die Eigenschaften des `Number`-Objekts zusammen.

| Eigenschaft                            | Beschreibung                                                                                                                                   |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.MAX_VALUE")}}         | Die größte darstellbare positive Zahl (`1.7976931348623157e+308`)                                                                              |
| {{jsxref("Number.MIN_VALUE")}}         | Die kleinste darstellbare positive Zahl (`5e-324`)                                                                                             |
| {{jsxref("Number.NaN")}}               | Spezieller "nicht-eine-Zahl"-Wert                                                                                                              |
| {{jsxref("Number.NEGATIVE_INFINITY")}} | Spezieller negativer Unendlichkeitswert; wird bei Überläufen zurückgegeben                                                                     |
| {{jsxref("Number.POSITIVE_INFINITY")}} | Spezieller positiver Unendlichkeitswert; wird bei Überläufen zurückgegeben                                                                     |
| {{jsxref("Number.EPSILON")}}           | Unterschied zwischen `1` und dem kleinsten Wert größer als `1`, der als {{jsxref("Number")}} dargestellt werden kann (`2.220446049250313e-16`) |
| {{jsxref("Number.MIN_SAFE_INTEGER")}}  | Minimal sichere Ganzzahl in JavaScript (−2^53 + 1, oder `−9007199254740991`)                                                                   |
| {{jsxref("Number.MAX_SAFE_INTEGER")}}  | Maximal sichere Ganzzahl in JavaScript (+2^53 − 1, oder `+9007199254740991`)                                                                   |

| Methode                              | Beschreibung                                                                                                                                             |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.parseFloat()")}}    | Parst ein String-Argument und gibt eine Gleitkommazahl zurück. Entspricht der globalen {{jsxref("parseFloat()")}}-Funktion.                              |
| {{jsxref("Number.parseInt()")}}      | Parst ein String-Argument und gibt eine Ganzzahl mit der angegebenen Basis oder Radix zurück. Entspricht der globalen {{jsxref("parseInt()")}}-Funktion. |
| {{jsxref("Number.isFinite()")}}      | Bestimmt, ob der übergebene Wert eine endliche Zahl ist.                                                                                                 |
| {{jsxref("Number.isInteger()")}}     | Bestimmt, ob der übergebene Wert eine Ganzzahl ist.                                                                                                      |
| {{jsxref("Number.isNaN()")}}         | Bestimmt, ob der übergebene Wert {{jsxref("NaN")}} ist. Robustere Version der ursprünglichen globalen {{jsxref("isNaN()")}}.                             |
| {{jsxref("Number.isSafeInteger()")}} | Bestimmt, ob der angegebene Wert eine Zahl ist, die eine _sichere Ganzzahl_ ist.                                                                         |

Das `Number`-Prototyp bietet Methoden zur Informationsermittlung aus `Number`-Objekten in verschiedenen Formaten. Die folgende Tabelle fasst die Methoden des `Number.prototype` zusammen.

| Methode                                               | Beschreibung                                                                                                    |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number/toExponential", "toExponential()")}} | Gibt eine Zeichenkette zurück, die die Zahl in Exponentialschreibweise darstellt.                               |
| {{jsxref("Number/toFixed", "toFixed()")}}             | Gibt eine Zeichenkette zurück, die die Zahl in Festkommaschreibweise darstellt.                                 |
| {{jsxref("Number/toPrecision", "toPrecision()")}}     | Gibt eine Zeichenkette zurück, die die Zahl mit einer angegebenen Präzision in Festkommaschreibweise darstellt. |

## Math-Objekt

Das eingebaute {{jsxref("Math")}}-Objekt hat Eigenschaften und Methoden für mathematische Konstanten und Funktionen. Zum Beispiel hat die `Math`-Eigenschaft `PI` den Wert von Pi (3.141…), die Sie in einer Anwendung wie folgt verwenden würden

```js
Math.PI;
```

Ähnlich sind Standard-Mathematikfunktionen Methoden von `Math`. Diese beinhalten trigonometrische, logarithmische, exponentielle und andere Funktionen. Zum Beispiel, wenn Sie die trigonometrische Funktion Sinus verwenden möchten, würden Sie schreiben

```js
Math.sin(1.56);
```

Beachten Sie, dass alle trigonometrischen Methoden von `Math` Argumente in Radianten nehmen.

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
      <td>Standardtrigonometrische Funktionen; mit dem Argument in Radianten.</td>
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
      <td>Hyperbelfunktionen; Argument im hyperbolischen Winkel.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.asinh", "asinh()")}},
        {{jsxref("Math.acosh", "acosh()")}},
        {{jsxref("Math.atanh", "atanh()")}}
      </td>
      <td>Inverse Hyperbelfunktionen; Rückgabewerte im hyperbolischen Winkel.</td>
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
        Gibt die größte/kleinste ganze Zahl zurück, die kleiner/gleich oder größer/gleich als ein Argument ist.
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
      <td>Rundungs- und Trunkierungsfunktionen.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sqrt", "sqrt()")}},
        {{jsxref("Math.cbrt", "cbrt()")}},
        {{jsxref("Math.hypot", "hypot()")}}
      </td>
      <td>
        Quadratwurzel, Kubikwurzel, Quadratwurzel der Summe der Quadrat-Argumente.
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
        Anzahl der führenden Nullbits in der 32-Bit-Binärdarstellung.<br />Das
        Ergebnis der C-ähnlichen 32-Bit-Multiplikation der beiden Argumente.
      </td>
    </tr>
  </tbody>
</table>

Im Gegensatz zu vielen anderen Objekten erstellen Sie nie ein eigenes `Math`-Objekt. Sie verwenden stets das eingebaute `Math`-Objekt.

## BigInts

Ein Nachteil von Zahlenwerten ist, dass sie nur 64 Bit haben. In der Praxis können sie aufgrund der Verwendung der IEEE 754-Kodierung keine größeren Ganzzahlen als [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) (welches 2<sup>53</sup> - 1 ist) genau darstellen. Zur Lösung des Bedarfs an kodierten Binärdaten und zur Zusammenarbeit mit anderen Sprachen, die breite Ganzzahlen wie `i64` (64-Bit-Ganzzahlen) und `i128` (128-Bit-Ganzzahlen) anbieten, bietet JavaScript auch einen anderen Datentyp an, um _beliebig große Ganzzahlen_ zu repräsentieren: [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

Ein BigInt kann als ganzzahliges Literal definiert werden, das mit `n` suffigiert ist:

```js
const b1 = 123n;
// Can be arbitrarily large.
const b2 = -1234567890987654321n;
```

BigInts können auch aus Zahlenwerten oder Zeichenfolgenwerten mit dem [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Konstruktor erstellt werden.

```js
const b1 = BigInt(123);
// Using a string prevents loss of precision, since long number
// literals don't represent what they seem like.
const b2 = BigInt("-1234567890987654321");
```

Konzeptionell ist ein BigInt einfach eine beliebig lange Folge von Bits, die eine Ganzzahl kodiert. Sie können sicher beliebige arithmetische Operationen ohne Präzisionsverlust oder Über-/Unterlauf durchführen.

```js
const integer = 12 ** 34; // 4.9222352429520264e+36; only has limited precision
const bigint = 12n ** 34n; // 4922235242952026704037113243122008064n
```

Im Vergleich zu Zahlen bieten BigInt-Werte eine höhere Präzision bei der Darstellung großer _Ganzzahlen_; sie können jedoch keine _Gleitkommazahlen_ darstellen. Zum Beispiel würde eine Division auf null runden:

```js
const bigintDiv = 5n / 2n; // 2n, because there's no 2.5 in BigInt
```

`Math`-Funktionen können nicht auf BigInt-Werte angewendet werden. Es gibt [einen offenen Vorschlag](https://github.com/tc39/proposal-bigint-math), um bestimmte `Math`-Funktionen wie `Math.max()` zu überladen, um BigInt-Werte zuzulassen.

Die Wahl zwischen BigInt und Zahl hängt von Ihrem Anwendungsfall und dem Bereich Ihrer Eingabewerte ab. Die Genauigkeit von Zahlen sollte in der Lage sein, die meisten alltäglichen Aufgaben bereits zu bewältigen, und BigInts eignen sich am besten für die Verarbeitung von Binärdaten.

Lesen Sie mehr darüber, was Sie mit BigInt-Werten tun können, im Abschnitt [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bigint_operators) oder in der [BigInt-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

## Date-Objekt

JavaScript hat keinen Datentyp für Datum. Sie können jedoch das {{jsxref("Date")}}-Objekt und dessen Methoden verwenden, um mit Datum und Uhrzeit in Ihren Anwendungen zu arbeiten. Das `Date`-Objekt hat eine Vielzahl von Methoden zum Setzen, Abrufen und Manipulieren von Daten. Es hat keine Eigenschaften.

JavaScript behandelt Daten ähnlich wie Java. Die beiden Sprachen haben viele der gleichen Datumsfunktionen, und beide Sprachen speichern Daten als die Anzahl an Millisekunden seit Mitternacht am 1. Januar 1970, UTC, wobei ein Unix-Zeitstempel die Anzahl an Sekunden seit demselben Zeitpunkt ist. Der Zeitpunkt um Mitternacht am 1. Januar 1970, UTC wird als [Epoch](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) bezeichnet.

Der Bereich des `Date`-Objekts liegt bei -100.000.000 Tagen bis +100.000.000 Tagen relativ zur Epoche.

Um ein `Date`-Objekt zu erstellen:

```js
const dateObjectName = new Date([parameters]);
```

wobei `dateObjectName` der Name des zu erstellenden `Date`-Objekts ist; es kann ein neues Objekt oder eine Eigenschaft eines bestehenden Objekts sein.

Wenn Sie `Date` ohne das `new`-Schlüsselwort aufrufen, wird eine Zeichenkette zurückgegeben, die das aktuelle Datum und die Uhrzeit darstellt.

Die `Parameter` in der vorhergehenden Syntax können eines der folgenden sein:

- Nichts: erstellt das heutige Datum und die Uhrzeit. Zum Beispiel: `today = new Date();`.
- Ein String, der ein Datum in vielen verschiedenen Formen darstellt. Die genauen Formen unterscheiden sich zwischen den Engines, aber die folgende Form wird immer unterstützt: `YYYY-MM-DDTHH:mm:ss.sssZ`. Zum Beispiel: `xmas95 = new Date("1995-12-25")`. Wenn Sie Stunden, Minuten oder Sekunden weglassen, wird der Wert auf Null gesetzt.
- Eine Reihe von Ganzzahlen für Jahr, Monat und Tag. Zum Beispiel: `xmas95 = new Date(1995, 11, 25)`.
- Eine Reihe von Ganzzahlen für Jahr, Monat, Tag, Stunde, Minute und Sekunden. Zum Beispiel: `xmas95 = new Date(1995, 11, 25, 9, 30, 0);`.

### Methoden des Date-Objekts

Die Methoden des `Date`-Objekts zur Handhabung von Datum und Zeit fallen in diese breite Kategorien:

- "set"-Methoden, um Datums- und Zeitwerte in `Date`-Objekten zu setzen.
- "get"-Methoden, um Datums- und Zeitwerte von `Date`-Objekten zu erhalten.
- "to"-Methoden, um Zeichenkettenwerte von `Date`-Objekten zurückzugeben.
- Parse- und UTC-Methoden, um Zeichenfolgen von `Date`-Objekten zu bearbeiten.

Mit den "get"- und "set"-Methoden können Sie Sekunden, Minuten, Stunden, den Tag des Monats, den Wochentag, Monate und Jahre separat abrufen und einstellen. Es gibt eine `getDay`-Methode, die den Wochentag zurückgibt, aber keine entsprechende `setDay`-Methode, da der Wochentag automatisch eingestellt wird. Diese Methoden verwenden Ganzzahlen, um diese Werte wie folgt darzustellen:

- Sekunden und Minuten: 0 bis 59
- Stunden: 0 bis 23
- Tag: 0 (Sonntag) bis 6 (Samstag)
- Datum: 1 bis 31 (Tag des Monats)
- Monate: 0 (Januar) bis 11 (Dezember)
- Jahr: Jahre seit 1900

Zum Beispiel, angenommen, Sie definieren folgendes Datum:

```js
const xmas95 = new Date("1995-12-25");
```

Dann gibt `xmas95.getMonth()` 11 zurück und `xmas95.getFullYear()` gibt 1995 zurück.

Die `getTime`- und `setTime`-Methoden sind nützlich zum Vergleichen von Daten. Die `getTime`-Methode gibt die Anzahl von Millisekunden seit der Epoche für ein `Date`-Objekt zurück.

Zum Beispiel, der folgende Code zeigt die Anzahl der Tage, die im aktuellen Jahr verbleiben:

```js
const today = new Date();
const endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month
endYear.setFullYear(today.getFullYear()); // Set year to this year
const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft); // Returns days left in the year
```

Dieses Beispiel erstellt ein `Date`-Objekt namens `today`, das das heutige Datum enthält. Dann erstellt es ein `Date`-Objekt namens `endYear` und setzt das Jahr auf das aktuelle Jahr. Dann wird unter Verwendung der Anzahl der Millisekunden pro Tag die Anzahl der Tage zwischen `today` und `endYear` berechnet, indem `getTime` verwendet wird und auf eine ganze Anzahl von Tagen gerundet wird.

Die `parse`-Methode ist nützlich, um Werten von Datumsstrings bestehenden `Date`-Objekten zuzuweisen. Zum Beispiel, der folgende Code verwendet `parse` und `setTime`, um ein Datum zu dem `ipoDate`-Objekt zuzuweisen:

```js
const ipoDate = new Date();
ipoDate.setTime(Date.parse("Aug 9, 1995"));
```

### Beispiel

Im folgenden Beispiel gibt die Funktion `JSClock()` die Uhrzeit im Format einer digitalen Uhr zurück.

```js
function JSClock() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  let temp = String(hour % 12);
  if (temp === "0") {
    temp = "12";
  }
  temp += (minute < 10 ? ":0" : ":") + minute;
  temp += (second < 10 ? ":0" : ":") + second;
  temp += hour >= 12 ? " P.M." : " A.M.";
  return temp;
}
```

Die `JSClock`-Funktion erstellt zuerst ein neues `Date`-Objekt namens `time`; da keine Argumente angegeben sind, wird `time` mit dem aktuellen Datum und der aktuellen Uhrzeit erstellt. Dann weisen Aufrufe der Methoden `getHours`, `getMinutes` und `getSeconds` den Wert der aktuellen Stunde, Minute und Sekunde den Variablen `hour`, `minute` und `second` zu.

Die folgenden Aussagen bauen einen Zeichenfolgenwert auf, basierend auf der Uhrzeit. Die erste Aussage erstellt eine Variable `temp`. Ihr Wert ist `hour % 12`, was `hour` im 12-Stunden-System ist. Dann, wenn die Stunde `0` ist, wird sie auf `12` zurückgesetzt, sodass Mitternächte und Mittage als `12:00` anstelle von `0:00` angezeigt werden.

Die nächste Anweisung hängt einen `minute`-Wert an `temp` an. Wenn der Wert von `minute` kleiner als 10 ist, fügt der bedingte Ausdruck eine Zeichenkette mit einer vorangestellten Null hinzu; andernfalls fügt er eine Zeichenkette mit einem Trennpunkt hinzu. Dann fügt eine Anweisung einen Sekundenwert auf dieselbe Weise an `temp` an.

Schließlich fügt ein bedingter Ausdruck "P.M." an `temp` an, wenn `hour` 12 oder größer ist; andernfalls wird "A.M." an `temp` angefügt.

{{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Text_formatting")}}

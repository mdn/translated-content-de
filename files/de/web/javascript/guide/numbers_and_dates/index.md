---
title: Zahlen und Datumsangaben
slug: Web/JavaScript/Guide/Numbers_and_dates
l10n:
  sourceCommit: 1bb0a2834d8e90495319ee9e52ecbc55e856e913
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Text_formatting")}}

In diesem Kapitel werden die Konzepte, Objekte und Funktionen eingeführt, die in JavaScript zum Arbeiten mit Zahlen und Datumsangaben sowie für Berechnungen verwendet werden. Dazu gehört die Verwendung von Zahlen in verschiedenen Basen, einschließlich Dezimal-, Binär- und Hexadezimalsystem, sowie die Verwendung des globalen {{jsxref("Math")}}-Objekts, um eine Vielzahl mathematischer Operationen auf Zahlen durchzuführen.

## Zahlen

In JavaScript werden Zahlen im [doppelgenauen 64-Bit-Binärformat IEEE 754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) implementiert (d.h., eine Zahl zwischen ±2^−1022 und ±2^+1023 oder etwa ±10^−308 bis ±10^+308 mit einer numerischen Genauigkeit von 53 Bit). Ganzzahlwerte bis ±2^53 − 1 können genau dargestellt werden.

Zusätzlich zur Darstellung von Gleitkommazahlen hat der Zahlentyp drei symbolische Werte: {{jsxref("Infinity")}}, `-Infinity` und {{jsxref("NaN")}} (not-a-number).

Siehe auch [JavaScript-Datentypen und Strukturen](/de/docs/Web/JavaScript/Data_structures) für Kontext zu anderen primitiven Typen in JavaScript.

Sie können vier Arten von Zahlenliteralen verwenden: dezimal, binär, oktal und hexadezimal.

### Dezimalzahlen

```js-nolint
1234567890
42
```

Dezimalliterale können mit einer Null (`0`) gefolgt von einer weiteren Dezimalziffer beginnen, aber wenn alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als Oktalzahl interpretiert. Dies wird als alte Syntax betrachtet, und Zahlenliterale mit dem Präfix `0`, ob als Oktal oder Dezimal interpretiert, verursachen in [Strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) einen Syntaxfehler — verwenden Sie stattdessen das Präfix `0o`.

```js-nolint example-bad
0888 // 888 als Dezimal analysiert
0777 // als Oktal analysiert, 511 in Dezimal
```

### Binärzahlen

Die Syntax für Binärzahlen verwendet eine führende Null gefolgt von einem Klein- oder Großbuchstaben "B" (`0b` oder `0B`). Wenn die Ziffern nach dem `0b` nicht 0 oder 1 sind, wird der folgende {{jsxref("SyntaxError")}} ausgelöst: "Fehlende binäre Ziffern nach 0b".

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

### Oktalzahlen

Die standardmäßige Syntax für Oktalzahlen besteht darin, ihnen das Präfix `0o` voranzustellen. Zum Beispiel:

```js-nolint
0O755 // 493
0o644 // 420
```

Es gibt auch eine alte Syntax für Oktalzahlen — indem man der Oktalzahl eine Null voranstellt: `0644 === 420` und `"\045" === "%"`. Wenn die Ziffern nach der `0` außerhalb des Bereichs 0 bis 7 liegen, wird die Zahl als Dezimalzahl interpretiert.

```js
const n = 0755; // 493
const m = 0644; // 420
```

[Strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verbietet diese Oktalsyntax.

### Hexadezimalzahlen

Die Syntax für Hexadezimalzahlen verwendet eine führende Null gefolgt von einem Klein- oder Großbuchstaben "X" (`0x` oder `0X`). Wenn die Ziffern nach 0x außerhalb des Bereichs (0123456789ABCDEF) liegen, wird der folgende {{jsxref("SyntaxError")}} ausgelöst: "Identifier starts immediately after numeric literal".

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

Das eingebaute {{jsxref("Number")}}-Objekt hat Eigenschaften für numerische Konstanten, wie z.B. maximalen Wert, not-a-number und Unendlichkeit. Sie können die Werte dieser Eigenschaften nicht ändern und verwenden sie wie folgt:

```js
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
```

Sie verweisen immer auf eine Eigenschaft des vordefinierten `Number`-Objekts wie oben gezeigt und nicht auf eine Eigenschaft eines von Ihnen selbst erstellten `Number`-Objekts.

Die folgende Tabelle fasst die Eigenschaften des `Number`-Objekts zusammen.

| Eigenschaft                          | Beschreibung                                                                                                                             |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| {{jsxref("Number.MAX_VALUE")}}         | Die größte positive darstellbare Zahl (`1.7976931348623157e+308`)                                                                       |
| {{jsxref("Number.MIN_VALUE")}}         | Die kleinste positive darstellbare Zahl (`5e-324`)                                                                                       |
| {{jsxref("Number.NaN")}}               | Spezieller nicht-a-number-Wert                                                                                                           |
| {{jsxref("Number.NEGATIVE_INFINITY")}} | Spezieller negativer Unendlichkeitswert; bei Überlauf zurückgegeben                                                                       |
| {{jsxref("Number.POSITIVE_INFINITY")}} | Spezieller positiver Unendlichkeitswert; bei Überlauf zurückgegeben                                                                       |
| {{jsxref("Number.EPSILON")}}           | Differenz zwischen `1` und dem kleinsten darstellbaren Wert größer als 1 (`2.220446049250313e-16`)                                       |
| {{jsxref("Number.MIN_SAFE_INTEGER")}}  | Kleinste sichere Ganzzahl in JavaScript (−2^53 + 1 oder `−9007199254740991`)                                                             |
| {{jsxref("Number.MAX_SAFE_INTEGER")}}  | Größte sichere Ganzzahl in JavaScript (+2^53 − 1 oder `+9007199254740991`)                                                               |

| Methode                                | Beschreibung                                                                                                                            |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.parseFloat()")}}    | Analysiert ein Zeichenfolgenargument und gibt eine Gleitkommazahl zurück. Ähnlich wie die globale {{jsxref("parseFloat()")}}-Funktion.                |
| {{jsxref("Number.parseInt()")}}      | Analysiert ein Zeichenfolgenargument und gibt eine Ganzzahl zur angegebenen Basis zurück. Ähnlich wie die globale {{jsxref("parseInt()")}}-Funktion.             |
| {{jsxref("Number.isFinite()")}}      | Bestimmt, ob der übergebene Wert eine endliche Zahl ist.                                                                                   |
| {{jsxref("Number.isInteger()")}}     | Bestimmt, ob der übergebene Wert eine Ganzzahl ist.                                                                                       |
| {{jsxref("Number.isNaN()")}}         | Bestimmt, ob der übergebene Wert {{jsxref("NaN")}} ist. Robuster als die ursprüngliche globale {{jsxref("isNaN()")}}-Funktion.                   |
| {{jsxref("Number.isSafeInteger()")}} | Bestimmt, ob der bereitgestellte Wert eine Zahl ist, bei der es sich um eine _sichere Ganzzahl_ handelt.                                                       |

Das `Number`-Prototype-Objekt bietet Methoden zum Abrufen von Informationen aus `Number`-Objekten in verschiedenen Formaten. Die folgende Tabelle fasst die Methoden des `Number.prototype` zusammen.

| Methode                                               | Beschreibung                                                                                     |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| {{jsxref("Number/toExponential", "toExponential()")}} | Gibt eine Zeichenfolge zurück, die die Zahl in Exponentialschreibweise darstellt.                  |
| {{jsxref("Number/toFixed", "toFixed()")}}             | Gibt eine Zeichenfolge zurück, die die Zahl in Festkommaschreibweise darstellt.                     |
| {{jsxref("Number/toPrecision", "toPrecision()")}}     | Gibt eine Zeichenfolge zurück, die die Zahl mit einer bestimmten Genauigkeit in Festkommaschreibweise darstellt. |

## Math-Objekt

Das eingebaute {{jsxref("Math")}}-Objekt verfügt über Eigenschaften und Methoden für mathematische Konstanten und Funktionen. Zum Beispiel hat die `PI`-Eigenschaft des `Math`-Objekts den Wert von Pi (3.141…), den Sie in einer Anwendung wie folgt verwenden würden:

```js
Math.PI;
```

Ebenso sind Standardmathematische Funktionen Methoden von `Math`. Dazu zählen trigonometrische, logarithmische, exponentielle und andere Funktionen. Wenn Sie beispielsweise die trigonometrische Funktion Sinus verwenden möchten, würden Sie folgendes schreiben:

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
      <td>Absoluter Wert</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sin", "sin()")}},
        {{jsxref("Math.cos", "cos()")}},
        {{jsxref("Math.tan", "tan()")}}
      </td>
      <td>Standardtrigonometrische Funktionen; das Argument im Bogenmaß.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.asin", "asin()")}},
        {{jsxref("Math.acos", "acos()")}},
        {{jsxref("Math.atan", "atan()")}},
        {{jsxref("Math.atan2", "atan2()")}}
      </td>
      <td>Umkehrtrigonometrische Funktionen; Rückgabewerte im Bogenmaß.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.sinh", "sinh()")}},
        {{jsxref("Math.cosh", "cosh()")}},
        {{jsxref("Math.tanh", "tanh()")}}
      </td>
      <td>Hyperbolische Funktionen; Argument im hyperbolischen Winkel.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.asinh", "asinh()")}},
        {{jsxref("Math.acosh", "acosh()")}},
        {{jsxref("Math.atanh", "atanh()")}}
      </td>
      <td>Umkehrhyperbolische Funktionen; Rückgabewerte im hyperbolischen Winkel.</td>
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
        Gibt die größte/kleinste Ganzzahl, die kleiner/gleich bzw. größer/gleich einem Argument ist.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.min", "min()")}},
        {{jsxref("Math.max", "max()")}}
      </td>
      <td>
        Gibt den minimalen bzw. maximalen Wert einer kommagetrennten Liste von Zahlen als Argumente zurück.
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
      <td>Rundungs- und Abkürzungsfunktionen.</td>
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
        Anzahl der führenden Nullbits in der 32-Bit-binären Darstellung.<br />Das
        Ergebnis der C-ähnlichen 32-Bit-Multiplikation der beiden Argumente.
      </td>
    </tr>
  </tbody>
</table>

Im Gegensatz zu vielen anderen Objekten erstellen Sie nie ein eigenes `Math`-Objekt. Sie verwenden immer das integrierte `Math`-Objekt.

## BigInts

Ein Nachteil von Zahlenwerten ist, dass sie nur 64 Bit haben. In der Praxis können sie aufgrund der Verwendung der IEEE 754-Codierung keine Ganzzahl größer als [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) (also 2<sup>53</sup> - 1) genau darstellen. Um das Bedürfnis nach der Kodierung binärer Daten zu erfüllen und mit anderen Sprachen, die breite Ganzzahlen wie `i64` (64-Bit-Ganzzahlen) und `i128` (128-Bit-Ganzzahlen) bieten, interoperieren zu können, bietet JavaScript auch einen weiteren Datentyp zur Darstellung _beliebig großer Ganzzahlen_: [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

Ein BigInt kann als ganzzahliges Literal mit einem angehängten `n` definiert werden:

```js
const b1 = 123n;
// Kann beliebig groß sein.
const b2 = -1234567890987654321n;
```

BigInts können auch aus Zahlenwerten oder Zeichenfolgenwerten mit dem [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Konstruktor erstellt werden.

```js
const b1 = BigInt(123);
// Die Verwendung einer Zeichenfolge verhindert den Verlust von Präzision, da lange Zahlenliterale nicht das darstellen, was sie zu sein scheinen.
const b2 = BigInt("-1234567890987654321");
```

Konzeptionell ist ein BigInt einfach eine beliebig lange Sequenz von Bits, die eine Ganzzahl kodiert. Sie können beliebige arithmetische Operationen ohne Präzisionsverlust oder Über-/Unterlauf sicher durchführen.

```js
const integer = 12 ** 34; // 4.9222352429520264e+36; hat nur begrenzte Präzision
const bigint = 12n ** 34n; // 4922235242952026704037113243122008064n
```

Im Vergleich zu Zahlen bieten BigInt-Werte eine höhere Präzision bei der Darstellung großer _Ganzzahlen_; sie können jedoch keine _Gleitkommazahlen_ darstellen. Zum Beispiel würde eine Division auf Null runden:

```js
const bigintDiv = 5n / 2n; // 2n, weil es keine 2.5 bei BigInt gibt
```

`Math`-Funktionen können nicht auf BigInt-Werte angewendet werden. Es gibt [einen offenen Vorschlag](https://github.com/tc39/proposal-bigint-math), um bestimmte `Math`-Funktionen wie `Math.max()` zu überladen, um BigInt-Werte zu ermöglichen.

Die Wahl zwischen BigInt und Number hängt von Ihrem Anwendungsfall und dem Bereich Ihres Inputs ab. Die Präzision von Zahlen sollte bereits die meisten alltäglichen Aufgaben bewältigen können, und BigInts eignen sich am besten zur Handhabung binärer Daten.

Lesen Sie mehr darüber, was Sie mit BigInt-Werten tun können, im Abschnitt [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bigint_operators) oder in der [BigInt-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

## Date-Objekt

JavaScript verfügt nicht über einen Datentyp für Datum. Sie können jedoch das {{jsxref("Date")}}-Objekt und seine Methoden verwenden, um mit Daten und Zeiten in Ihren Anwendungen zu arbeiten. Das `Date`-Objekt hat eine große Anzahl von Methoden zum Setzen, Abrufen und Manipulieren von Daten. Es hat keine Eigenschaften.

JavaScript behandelt Daten ähnlich wie Java. Beide Sprachen haben viele der gleichen Datumsfunktionen, und beide Sprachen speichern Daten als die Anzahl der Millisekunden seit Mitternacht des Beginns des 1. Januars 1970, UTC, wobei ein Unix-Zeitstempel die Anzahl der Sekunden seit demselben Zeitpunkt ist. Der Zeitpunkt um Mitternacht am Beginn des 1. Januars 1970, UTC, wird als [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) bezeichnet.

Der Bereich des `Date`-Objekts reicht von -100.000.000 Tagen bis 100.000.000 Tagen relativ zur Epoche.

Um ein `Date`-Objekt zu erstellen:

```js
const dateObjectName = new Date([parameters]);
```

wobei `dateObjectName` der Name des erstellten `Date`-Objekts ist; es kann sich um ein neues Objekt oder eine Eigenschaft eines bestehenden Objekts handeln.

Wenn `Date` ohne das `new`-Schlüsselwort aufgerufen wird, wird eine Zeichenfolge zurückgegeben, die das aktuelle Datum und die Uhrzeit darstellt.

Die `Parameter` in der vorhergehenden Syntax können wie folgt aussehen:

- Nichts: Erstellt das heutige Datum und die Uhrzeit. Zum Beispiel: `today = new Date();`.
- Eine Zeichenfolge, die ein Datum in vielen verschiedenen Formen darstellt. Die genauen unterstützten Formen unterscheiden sich je nach Engine, aber die folgende Form wird immer unterstützt: `YYYY-MM-DDTHH:mm:ss.sssZ`. Zum Beispiel: `xmas95 = new Date("1995-12-25")`. Wenn Sie Stunden, Minuten oder Sekunden weglassen, wird der Wert auf null gesetzt.
- Eine Reihe von ganzzahligen Werten für Jahr, Monat und Tag. Zum Beispiel: `xmas95 = new Date(1995, 11, 25)`.
- Eine Reihe von ganzzahligen Werten für Jahr, Monat, Tag, Stunde, Minute und Sekunde. Zum Beispiel: `xmas95 = new Date(1995, 11, 25, 9, 30, 0);`.

### Methoden des Date-Objekts

Die Methoden des `Date`-Objekts zum Umgang mit Daten und Zeiten fallen in folgende Hauptkategorien:

- "set"-Methoden, um Datum- und Zeitwerte in `Date`-Objekten festzulegen.
- "get"-Methoden, um Datum- und Zeitwerte von `Date`-Objekten abzurufen.
- "to"-Methoden, um Zeichenfolgenwerte von `Date`-Objekten zurückzugeben.
- Parse- und UTC-Methoden, um Zeichenfolgen in `Date`-Objekten zu analysieren.

Mit den "get"- und "set"-Methoden können Sie Sekunden, Minuten, Stunden, den Tag des Monats, den Wochentag, Monate und Jahre separat abrufen und festlegen. Es gibt eine `getDay`-Methode, die den Wochentag zurückgibt, jedoch keine entsprechende `setDay`-Methode, da der Wochentag automatisch festgelegt wird. Diese Methoden verwenden Ganzzahlen, um diese Werte wie folgt darzustellen:

- Sekunden und Minuten: 0 bis 59
- Stunden: 0 bis 23
- Tag: 0 (Sonntag) bis 6 (Samstag)
- Datum: 1 bis 31 (Tag des Monats)
- Monate: 0 (Januar) bis 11 (Dezember)
- Jahr: Jahre seit 1900

Beispielsweise, angenommen, Sie definieren das folgende Datum:

```js
const xmas95 = new Date("1995-12-25");
```

Dann gibt `xmas95.getMonth()` 11 zurück und `xmas95.getFullYear()` gibt 1995 zurück.

Die `getTime`- und `setTime`-Methoden sind nützlich zum Vergleichen von Daten. Die `getTime`-Methode gibt die Anzahl der Millisekunden seit der Epoche für ein `Date`-Objekt zurück.

Beispielsweise zeigt der folgende Code die Anzahl der Tage bis zum Ende des aktuellen Jahres an:

```js
const today = new Date();
const endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Tag und Monat setzen
endYear.setFullYear(today.getFullYear()); // Jahr auf dieses Jahr setzen
const msPerDay = 24 * 60 * 60 * 1000; // Anzahl der Millisekunden pro Tag
let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft); // Gibt die Anzahl der verbleibenden Tage im Jahr zurück
```

Dieses Beispiel erstellt ein `Date`-Objekt namens `today`, das das heutige Datum enthält. Es erstellt dann ein `Date`-Objekt namens `endYear` und setzt das Jahr auf das aktuelle Jahr. Dann berechnet es mit der Anzahl der Millisekunden pro Tag die Anzahl der Tage zwischen `today` und `endYear`, wobei `getTime` verwendet und auf eine ganze Anzahl von Tagen gerundet wird.

Die `parse`-Methode ist nützlich, um Werte aus Datum-Zeichenfolgen vorhandenen `Date`-Objekten zuzuweisen. Beispielsweise verwendet der folgende Code `parse` und `setTime`, um einem `ipoDate`-Objekt einen Datumswert zuzuweisen:

```js
const ipoDate = new Date();
ipoDate.setTime(Date.parse("Aug 9, 1995"));
```

### Beispiel

Im folgenden Beispiel gibt die Funktion `JSClock()` die Zeit im Format einer digitalen Uhr zurück.

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

Die `JSClock`-Funktion erstellt zunächst ein neues `Date`-Objekt namens `time`; da keine Argumente angegeben sind, wird `time` mit dem aktuellen Datum und der aktuellen Zeit erstellt. Anschließend ordnen Aufrufe der Methoden `getHours`, `getMinutes` und `getSeconds` den Wert der aktuellen Stunde, Minute und Sekunde den Variablen `hour`, `minute` und `second` zu.

Die folgenden Anweisungen erstellen einen Zeichenfolgenwert basierend auf der Zeit. Die erste Anweisung erstellt eine Variable `temp`. Ihr Wert ist `hour % 12`, was `hour` im 12-Stunden-System ist. Wenn die Stunde `0` ist, wird sie auf `12` geändert, damit Mitternacht und Mittag als `12:00` statt `0:00` angezeigt werden.

Die nächste Anweisung fügt einen `minute`-Wert zu `temp` hinzu. Wenn der Wert von `minute` kleiner als 10 ist, fügt der bedingte Ausdruck eine Zeichenfolge mit einer vorausgehenden Null hinzu; andernfalls fügt er eine Zeichenfolge mit einem Trenn-Doppelpunkt hinzu. Anschließend fügt eine Anweisung einen Sekundenwert auf die gleiche Weise zu `temp` hinzu.

Letztlich fügt ein bedingter Ausdruck "P.M." zu `temp` hinzu, wenn `hour` 12 oder mehr ist; andernfalls wird "A.M." zu `temp` hinzugefügt.

{{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Text_formatting")}}

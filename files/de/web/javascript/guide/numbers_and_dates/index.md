---
title: Zahlen und Daten
slug: Web/JavaScript/Guide/Numbers_and_dates
l10n:
  sourceCommit: 1bb0a2834d8e90495319ee9e52ecbc55e856e913
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Text_formatting")}}

Dieses Kapitel führt in die Konzepte, Objekte und Funktionen ein, die verwendet werden, um mit Zahlen und Daten in JavaScript zu arbeiten und Berechnungen durchzuführen. Dies umfasst die Verwendung von Zahlen, die in verschiedenen Basen, einschließlich dezimal, binär und hexadezimal, geschrieben sind, sowie die Verwendung des globalen {{jsxref("Math")}} Objekts, um eine Vielzahl von mathematischen Operationen mit Zahlen durchzuführen.

## Zahlen

In JavaScript werden Zahlen im [Doppelgenaues 64-Bit-Binärformat IEEE 754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) implementiert (d.h., eine Zahl zwischen ±2^−1022 und ±2^+1023, oder etwa ±10^−308 bis ±10^+308, mit einer numerischen Präzision von 53 Bit). Ganzzahlige Werte bis ±2^53 − 1 können exakt dargestellt werden.

Zusätzlich zur Möglichkeit, Gleitkommazahlen darzustellen, hat der Zahlentyp drei symbolische Werte: {{jsxref("Infinity")}}, `-Infinity` und {{jsxref("NaN")}} (not-a-number).

Siehe auch [JavaScript-Datentypen und -strukturen](/de/docs/Web/JavaScript/Data_structures) für Kontext mit anderen primitiven Typen in JavaScript.

Sie können vier Arten von Zahlenliteralen verwenden: dezimal, binär, oktal und hexadezimal.

### Dezimalzahlen

```js-nolint
1234567890
42
```

Dezimalliterale können mit einer Null (`0`) beginnen, gefolgt von einer weiteren Dezimalziffer. Wenn jedoch alle Ziffern nach der führenden `0` kleiner als 8 sind, wird die Zahl als oktale Zahl interpretiert. Dies wird als veraltete Syntax betrachtet, und Zahlenliterale, die mit `0` beginnen, sei es oktal oder dezimal interpretiert, verursachen einen Syntaxfehler im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) — verwenden Sie stattdessen das Präfix `0o`.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

### Binärzahlen

Die Binärzahlsyntax verwendet eine führende Null gefolgt von einem Klein- oder Großbuchstaben "B" (`0b` oder `0B`). Wenn die Ziffern nach dem `0b` nicht 0 oder 1 sind, wird der folgende {{jsxref("SyntaxError")}} ausgelöst: "Fehlende Binärziffern nach 0b".

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

### Oktalzahlen

Die Standardsyntax für Oktalzahlen besteht darin, sie mit `0o` zu präfixen. Zum Beispiel:

```js-nolint
0O755 // 493
0o644 // 420
```

Es gibt auch eine veraltete Syntax für Oktalzahlen — indem die Oktalzahl mit einer Null vorangestellt wird: `0644 === 420` und `"\045" === "%"`. Wenn die Ziffern nach der `0` außerhalb des Bereichs von 0 bis 7 liegen, wird die Zahl als Dezimalzahl interpretiert.

```js
const n = 0755; // 493
const m = 0644; // 420
```

[Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verbietet diese Oktalsyntax.

### Hexadezimalzahlen

Die hexadezimale Zahlsyntax verwendet eine führende Null gefolgt von einem Klein- oder Großbuchstaben "X" (`0x` oder `0X`). Wenn die Ziffern nach 0x außerhalb des Bereichs (0123456789ABCDEF) liegen, wird der folgende {{jsxref("SyntaxError")}} ausgelöst: "Identifier starts immediately after numeric literal".

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

Das eingebaute {{jsxref("Number")}} Objekt verfügt über Eigenschaften für numerische Konstanten wie den Maximalwert, nicht-a-number und Unendlichkeit. Sie können die Werte dieser Eigenschaften nicht ändern und verwenden sie wie folgt:

```js
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
```

Sie verweisen immer auf eine Eigenschaft des vordefinierten `Number` Objekts wie oben gezeigt und nicht auf eine Eigenschaft eines `Number` Objekts, das Sie selbst erstellen.

Die folgende Tabelle fasst die Eigenschaften des `Number` Objekts zusammen.

| Eigenschaft                            | Beschreibung                                                                                                                    |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.MAX_VALUE")}}         | Der größte positive darstellbare Wert (`1.7976931348623157e+308`)                                                               |
| {{jsxref("Number.MIN_VALUE")}}         | Der kleinste positive darstellbare Wert (`5e-324`)                                                                              |
| {{jsxref("Number.NaN")}}               | Spezieller "nicht eine Zahl" Wert                                                                                               |
| {{jsxref("Number.NEGATIVE_INFINITY")}} | Spezieller negativer unendlicher Wert; wird bei Überlauf zurückgegeben                                                          |
| {{jsxref("Number.POSITIVE_INFINITY")}} | Spezieller positiver unendlicher Wert; wird bei Überlauf zurückgegeben                                                          |
| {{jsxref("Number.EPSILON")}}           | Unterschied zwischen `1` und dem kleinsten darstellbaren Wert größer als `1` als {{jsxref("Number")}} (`2.220446049250313e-16`) |
| {{jsxref("Number.MIN_SAFE_INTEGER")}}  | Mindestwert für sichere Ganzzahlen in JavaScript (−2^53 + 1, oder `−9007199254740991`)                                          |
| {{jsxref("Number.MAX_SAFE_INTEGER")}}  | Höchstwert für sichere Ganzzahlen in JavaScript (+2^53 − 1, oder `+9007199254740991`)                                           |

| Methode                              | Beschreibung                                                                                                                              |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.parseFloat()")}}    | Parst ein String-Argument und gibt eine Fließkommazahl zurück. Entspricht der globalen {{jsxref("parseFloat()")}} Funktion.               |
| {{jsxref("Number.parseInt()")}}      | Parst ein String-Argument und gibt eine Ganzzahl der angegebenen Basis zurück. Entspricht der globalen {{jsxref("parseInt()")}} Funktion. |
| {{jsxref("Number.isFinite()")}}      | Bestimmt, ob der übergebene Wert eine endliche Zahl ist.                                                                                  |
| {{jsxref("Number.isInteger()")}}     | Bestimmt, ob der übergebene Wert eine Ganzzahl ist.                                                                                       |
| {{jsxref("Number.isNaN()")}}         | Bestimmt, ob der übergebene Wert {{jsxref("NaN")}} ist. Robuster als die ursprüngliche globale {{jsxref("isNaN()")}} Funktion.            |
| {{jsxref("Number.isSafeInteger()")}} | Bestimmt, ob der bereitgestellte Wert eine _sichere Ganzzahl_ ist.                                                                        |

Das `Number` Prototyp bietet Methoden zum Abrufen von Informationen von `Number` Objekten in verschiedenen Formaten. Die folgende Tabelle fasst die Methoden von `Number.prototype` zusammen.

| Methode                                               | Beschreibung                                                                                                     |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number/toExponential", "toExponential()")}} | Gibt einen String zurück, der die Zahl in Exponentialschreibweise repräsentiert.                                 |
| {{jsxref("Number/toFixed", "toFixed()")}}             | Gibt einen String zurück, der die Zahl in Festkomma-Darstellung repräsentiert.                                   |
| {{jsxref("Number/toPrecision", "toPrecision()")}}     | Gibt einen String zurück, der die Zahl mit einer angegebenen Genauigkeit in Festkomma-Darstellung repräsentiert. |

## Math-Objekt

Das eingebaute {{jsxref("Math")}} Objekt verfügt über Eigenschaften und Methoden für mathematische Konstanten und Funktionen. Zum Beispiel hat die `PI`-Eigenschaft des `Math`-Objekts den Wert von Pi (3,141…), den Sie in einer Anwendung wie folgt verwenden würden

```js
Math.PI;
```

Ebenso sind Standardmathematische Funktionen Methoden von `Math`. Dazu gehören trigonometrische, logarithmische, exponentielle und andere Funktionen. Wenn Sie beispielsweise die trigonometrische Funktion Sinus verwenden möchten, würden Sie schreiben

```js
Math.sin(1.56);
```

Beachten Sie, dass alle trigonometrischen Methoden von `Math` Argumente im Bogenmaß annehmen.

Die folgende Tabelle fasst die Methoden des `Math` Objekts zusammen.

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
      <td>Standardtrigonometrische Funktionen; mit dem Argument im Bogenmaß.</td>
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
      <td>Hyperbolische Funktionen; Argument im hyperbolischen Winkel.</td>
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
        Gibt die größte/kleinste Ganzzahl zurück, die kleiner/gleich bzw.
        größer/gleich einem Argument ist.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Math.min", "min()")}},
        {{jsxref("Math.max", "max()")}}
      </td>
      <td>
        Gibt den minimalen oder maximalen (jeweils) Wert einer kommagetrennten
        Liste von Zahlen als Argumente zurück.
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
        Anzahl der führenden Nullen in der 32-Bit-Binärdarstellung.<br />Das
        Ergebnis der C-ähnlichen 32-Bit-Multiplikation der beiden Argumente.
      </td>
    </tr>
  </tbody>
</table>

Im Gegensatz zu vielen anderen Objekten erstellen Sie niemals ein `Math`-Objekt selbst. Sie verwenden immer das eingebaute `Math`-Objekt.

## BigInts

Ein Nachteil von Zahlenwerten ist, dass sie nur 64 Bit haben. In der Praxis können sie aufgrund der Verwendung der IEEE 754-Codierung keine Ganzzahl größer als [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) (welches 2<sup>53</sup> - 1 ist) genau darstellen. Um den Bedarf an der Codierung binärer Daten zu lösen und mit anderen Sprachen zu interagieren, die breite Ganzzahlen wie `i64` (64-Bit-Ganzzahlen) und `i128` (128-Bit-Ganzzahlen) bieten, bietet JavaScript einen anderen Datentyp, um _beliebig große Ganzzahlen_ darzustellen: [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

Ein BigInt kann als Ganzzahlenliteral definiert werden, das mit `n` versehen ist:

```js
const b1 = 123n;
// Can be arbitrarily large.
const b2 = -1234567890987654321n;
```

BigInts können auch aus Zahlenwerten oder Stringwerten mit dem [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Konstruktor erstellt werden.

```js
const b1 = BigInt(123);
// Using a string prevents loss of precision, since long number
// literals don't represent what they seem like.
const b2 = BigInt("-1234567890987654321");
```

Konzepte ausschließend, ist ein BigInt einfach eine beliebig lange Folge von Bits, die eine Ganzzahl codiert. Sie können sicher jede arithmetische Operation ohne Präzisionsverlust oder Über-/Unterlauf durchführen.

```js
const integer = 12 ** 34; // 4.9222352429520264e+36; only has limited precision
const bigint = 12n ** 34n; // 4922235242952026704037113243122008064n
```

Im Vergleich zu Zahlen liefern BigInt-Werte eine höhere Präzision bei der Darstellung großer _Ganzzahlen_; jedoch können sie keine _Fließkommazahlen_ darstellen. Zum Beispiel würde die Division auf Null runden:

```js
const bigintDiv = 5n / 2n; // 2n, because there's no 2.5 in BigInt
```

`Math`-Funktionen können nicht auf BigInt-Werte angewendet werden. Es gibt [ein offener Vorschlag](https://github.com/tc39/proposal-bigint-math), um bestimmte `Math`-Funktionen wie `Math.max()` zu überladen, um BigInt-Werte zuzulassen.

Die Wahl zwischen BigInt und Zahl hängt von Ihrem Anwendungsfall und dem Bereich Ihrer Eingaben ab. Die Präzision von Zahlen sollte in der Lage sein, die meisten alltäglichen Aufgaben bereits zu bewältigen, und BigInts sind am besten geeignet, um Binärdaten zu verarbeiten.

Lesen Sie mehr darüber, was Sie mit BigInt-Werten tun können im Abschnitt [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bigint_operators) oder in der [BigInt-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

## Date-Objekt

JavaScript hat keinen Datentyp für Datum. Sie können jedoch das {{jsxref("Date")}} Objekt und seine Methoden verwenden, um in Ihren Anwendungen mit Daten und Zeiten zu arbeiten. Das `Date` Objekt verfügt über eine Vielzahl von Methoden zum Setzen, Abrufen und Manipulieren von Daten, hat jedoch keine Eigenschaften.

JavaScript behandelt Daten ähnlich wie Java. Die beiden Sprachen haben viele der gleichen Datums-Methoden, und beide speichern Daten als die Anzahl der Millisekunden seit Mitternacht zu Beginn des 1. Januar 1970, UTC, wobei ein Unix-Timestamp die Anzahl der Sekunden seit demselben Zeitpunkt ist. Der Moment um Mitternacht zu Beginn des 1. Januar 1970, UTC, wird als [epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) bezeichnet.

Der `Date`-Objektbereich liegt bei -100.000.000 Tagen bis 100.000.000 Tagen relativ zur Epoche.

Um ein `Date`-Objekt zu erstellen:

```js
const dateObjectName = new Date([parameters]);
```

wobei `dateObjectName` der Name des zu erstellenden `Date`-Objekts ist; es kann sich um ein neues Objekt oder eine Eigenschaft eines bestehenden Objekts handeln.

Das Aufrufen von `Date` ohne das `new`-Schlüsselwort gibt einen String zurück, der das aktuelle Datum und die aktuelle Uhrzeit repräsentiert.

Die `parameter` in der vorstehenden Syntax können eines der folgenden sein:

- Nichts: erstellt das heutige Datum und die Zeit. Beispiel: `today = new Date();`.
- Ein String, der ein Datum in vielen verschiedenen Formen darstellt. Die genauen Formen, die unterstützt werden, unterscheiden sich zwischen den Engines, aber die folgende Form wird immer unterstützt: `YYYY-MM-DDTHH:mm:ss.sssZ`. Zum Beispiel, `xmas95 = new Date("1995-12-25")`. Wenn Sie Stunden, Minuten oder Sekunden weglassen, wird der Wert auf Null gesetzt.
- Eine Reihe von Ganzzahlen für Jahr, Monat und Tag. Beispiel: `xmas95 = new Date(1995, 11, 25)`.
- Eine Reihe von Ganzzahlen für Jahr, Monat, Tag, Stunde, Minute und Sekunde. Beispiel: `xmas95 = new Date(1995, 11, 25, 9, 30, 0);`.

### Methoden des Date-Objekts

Die `Date`-Objektmethoden zum Umgang mit Daten und Zeiten fallen in diese breiten Kategorien:

- "Set"-Methoden, um Werte für Datum und Uhrzeit in `Date`-Objekten festzulegen.
- "Get"-Methoden, um Werte für Datum und Uhrzeit aus `Date`-Objekten abzurufen.
- "To"-Methoden, um String-Werte aus `Date`-Objekten zurückzugeben.
- Parse- und UTC-Methoden, um `Date`-Strings zu analysieren.

Mit den "Get"- und "Set"-Methoden können Sie Sekunden, Minuten, Stunden, Tag des Monats, Wochentag, Monate und Jahre separat abrufen und festlegen. Es gibt eine `getDay`-Methode, die den Wochentag zurückgibt, aber keine entsprechende `setDay`-Methode, da der Wochentag automatisch festgelegt wird. Diese Methoden verwenden Ganzzahlen, um diese Werte wie folgt darzustellen:

- Sekunden und Minuten: 0 bis 59
- Stunden: 0 bis 23
- Tag: 0 (Sonntag) bis 6 (Samstag)
- Datum: 1 bis 31 (Tag des Monats)
- Monate: 0 (Januar) bis 11 (Dezember)
- Jahr: Jahre seit 1900

Zum Beispiel, nehmen wir an, Sie definieren das folgende Datum:

```js
const xmas95 = new Date("1995-12-25");
```

Dann gibt `xmas95.getMonth()` 11 zurück, und `xmas95.getFullYear()` gibt 1995 zurück.

Die Methoden `getTime` und `setTime` sind nützlich zum Vergleichen von Daten. Die `getTime` Methode gibt die Anzahl der Millisekunden seit der Epoche für ein `Date`-Objekt zurück.

Zum Beispiel zeigt der folgende Code die Anzahl der verbleibenden Tage des aktuellen Jahres an:

```js
const today = new Date();
const endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month
endYear.setFullYear(today.getFullYear()); // Set year to this year
const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft); // Returns days left in the year
```

Dieses Beispiel erstellt ein `Date`-Objekt namens `today`, das das heutige Datum enthält. Dann wird ein `Date`-Objekt namens `endYear` erstellt und das Jahr auf das aktuelle Jahr gesetzt. Mit der Anzahl der Millisekunden pro Tag wird dann die Anzahl der Tage zwischen `today` und `endYear` berechnet, mithilfe von `getTime` und Runden auf eine ganze Anzahl von Tagen.

Die `parse` Methode ist nützlich, um Werte aus Datum-Strings vorhandenen `Date`-Objekten zuzuweisen. Beispiel: Der folgende Code verwendet `parse` und `setTime`, um einem `ipoDate`-Objekt einen Datumswert zuzuweisen:

```js
const ipoDate = new Date();
ipoDate.setTime(Date.parse("Aug 9, 1995"));
```

### Beispiel

Im folgenden Beispiel gibt die Funktion `JSClock()` die Zeit im Format einer Digitaluhr zurück.

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

Die `JSClock`-Funktion erstellt zunächst ein neues `Date`-Objekt namens `time`; da keine Argumente angegeben sind, wird `time` mit dem aktuellen Datum und der Uhrzeit erstellt. Dann rufen die Methoden `getHours`, `getMinutes` und `getSeconds` den Wert der aktuellen Stunde, Minute und Sekunde auf und weisen ihn `hour`, `minute` und `second` zu.

Die folgenden Anweisungen bauen einen Stringwert basierend auf der Zeit auf. Die erste Anweisung erstellt eine Variable `temp`. Ihr Wert ist `hour % 12`, was `hour` im 12-Stunden-System entspricht. Wenn die Stunde `0` ist, wird sie auf `12` gesetzt, damit Mitternacht und Mittag als `12:00` anstelle von `0:00` angezeigt werden.

Die nächste Anweisung hängt einen `minute`-Wert an `temp` an. Ist der Wert von `minute` kleiner als 10, fügt der bedingte Ausdruck einen String mit vorangestellter Null hinzu; andernfalls fügt er einen String mit trennendem Doppelpunkt hinzu. Dann fügt eine Anweisung einen Sekundenwert zu `temp` auf die gleiche Weise hinzu.

Schließlich fügt ein bedingter Ausdruck "P.M." an `temp` an, wenn die `hour` 12 oder größer ist; andernfalls fügt er "A.M." an `temp` an.

{{PreviousNext("Web/JavaScript/Guide/Expressions_and_operators", "Web/JavaScript/Guide/Text_formatting")}}

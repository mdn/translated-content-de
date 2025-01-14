---
title: Darstellung von Daten & Uhrzeiten
slug: Web/JavaScript/Guide/Representing_dates_times
l10n:
  sourceCommit: c16a0ee78e5142b3bfcdaf57d595add3ce825f13
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Numbers_and_strings", "Web/JavaScript/Guide/Regular_expressions")}}

## Date-Objekt

JavaScript hat keinen spezifischen Datentyp für Daten. Sie können jedoch das {{jsxref("Date")}}-Objekt und dessen Methoden verwenden, um mit Daten und Uhrzeiten in Ihren Anwendungen zu arbeiten. Das `Date`-Objekt verfügt über zahlreiche Methoden zum Setzen, Abrufen und Manipulieren von Daten, es hat jedoch keine Eigenschaften.

JavaScript behandelt Daten ähnlich wie Java. Beide Sprachen verfügen über viele der gleichen Methoden für Daten, und beide speichern Daten als die Anzahl der Millisekunden seit Mitternacht zu Beginn des 1. Januar 1970, UTC, wobei ein Unix-Timestamp die Anzahl der Sekunden seit demselben Zeitpunkt ist. Der Zeitpunkt um Mitternacht zu Beginn des 1. Januar 1970, UTC wird als [Epoch](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) bezeichnet.

Der Bereich des `Date`-Objekts reicht von -100.000.000 Tagen bis 100.000.000 Tagen relativ zur Epoch.

Um ein `Date`-Objekt zu erstellen:

```js
const dateObjectName = new Date([parameters]);
```

wobei `dateObjectName` der Name des zu erstellenden `Date`-Objekts ist; es kann sich um ein neues Objekt oder eine Eigenschaft eines bestehenden Objekts handeln.

Ein Aufruf von `Date` ohne das Schlüsselwort `new` gibt eine Zeichenfolge zurück, die das aktuelle Datum und die Uhrzeit darstellt.

Die `Parameter` in der obigen Syntax können die folgenden sein:

- Nichts: erstellt das heutige Datum und die aktuelle Uhrzeit. Beispiel: `today = new Date();`.
- Eine Zeichenfolge, die ein Datum in verschiedenen Formaten darstellt. Die genau unterstützten Formate variieren zwischen den Engines, aber das folgende Format wird immer unterstützt: `YYYY-MM-DDTHH:mm:ss.sssZ`. Beispiel: `xmas95 = new Date("1995-12-25")`. Wenn Sie Stunden, Minuten oder Sekunden weglassen, wird der Wert auf Null gesetzt.
- Eine Reihe ganzer Zahlen für Jahr, Monat und Tag. Beispiel: `xmas95 = new Date(1995, 11, 25)`.
- Eine Reihe ganzer Zahlen für Jahr, Monat, Tag, Stunde, Minute und Sekunden. Beispiel: `xmas95 = new Date(1995, 11, 25, 9, 30, 0);`.

### Methoden des Date-Objekts

Die Methoden des `Date`-Objekts zur Bearbeitung von Daten und Uhrzeiten fallen in diese allgemeinen Kategorien:

- "set"-Methoden, um Datums- und Zeitwerte in `Date`-Objekten zu setzen.
- "get"-Methoden, um Datums- und Zeitwerte von `Date`-Objekten abzurufen.
- "to"-Methoden, um Zeichenfolgenwerte von `Date`-Objekten zurückzugeben.
- parse und UTC-Methoden, um `Date`-Zeichenfolgen zu analysieren.

Mit den "get"- und "set"-Methoden können Sie Sekunden, Minuten, Stunden, Tag des Monats, Wochentag, Monate und Jahre separat abrufen und setzen. Es gibt eine `getDay`-Methode, die den Wochentag zurückgibt, aber keine entsprechende `setDay`-Methode, da der Wochentag automatisch gesetzt wird. Diese Methoden verwenden Ganzzahlen, um diese Werte wie folgt darzustellen:

- Sekunden und Minuten: 0 bis 59
- Stunden: 0 bis 23
- Tag: 0 (Sonntag) bis 6 (Samstag)
- Datum: 1 bis 31 (Tag des Monats)
- Monate: 0 (Januar) bis 11 (Dezember)
- Jahr: Jahre seit 1900

Beispielsweise ergibt die folgende Datendefinition:

```js
const xmas95 = new Date("1995-12-25");
```

dass `xmas95.getMonth()` den Wert 11 zurückgibt und `xmas95.getFullYear()` den Wert 1995 zurückgibt.

Die `getTime`- und `setTime`-Methoden sind nützlich für den Vergleich von Daten. Die `getTime`-Methode gibt die Anzahl der Millisekunden seit der Epoch für ein `Date`-Objekt zurück.

Zum Beispiel zeigt der folgende Code die Anzahl der verbleibenden Tage im aktuellen Jahr an:

```js
const today = new Date();
const endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month
endYear.setFullYear(today.getFullYear()); // Set year to this year
const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft); // Returns days left in the year
```

Dieses Beispiel erstellt ein `Date`-Objekt namens `today`, das das heutige Datum enthält. Es erstellt dann ein `Date`-Objekt namens `endYear` und setzt das Jahr auf das aktuelle Jahr. Dann wird unter Verwendung der Anzahl der Millisekunden pro Tag die Anzahl der Tage zwischen `today` und `endYear` berechnet, wobei `getTime` verwendet und auf eine ganze Zahl von Tagen gerundet wird.

Die `parse`-Methode ist nützlich, um Werten aus Datumszeichenfolgen zu bestehenden `Date`-Objekten zuzuweisen. Zum Beispiel verwendet der folgende Code `parse` und `setTime`, um einen Datumswert dem `ipoDate`-Objekt zuzuweisen:

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

Die `JSClock`-Funktion erstellt zuerst ein neues `Date`-Objekt namens `time`; da keine Argumente angegeben sind, wird `time` mit dem aktuellen Datum und der Uhrzeit erstellt. Dann weisen Aufrufe der `getHours`, `getMinutes` und `getSeconds`-Methoden den Wert der aktuellen Stunde, Minute und Sekunde den Variablen `hour`, `minute` und `second` zu.

Die folgenden Aussagen erstellen einen Zeichenfolgenwert basierend auf der Uhrzeit. Die erste Aussage erstellt eine Variable `temp`. Ihr Wert ist `hour % 12`, was `hour` im 12-Stunden-System ist. Wenn die Stunde `0` ist, wird sie auf `12` neu zugewiesen, sodass Mitternacht und Mittag als `12:00` anstatt als `0:00` angezeigt werden.

Die nächste Anweisung fügt den `minute`-Wert zu `temp` hinzu. Wenn der Wert von `minute` kleiner als 10 ist, fügt der bedingte Ausdruck eine Zeichenfolge mit einer vorangestellten Null hinzu; andernfalls wird eine Zeichenfolge mit einem trennenden Doppelpunkt hinzugefügt. Dann fügt eine Anweisung auf die gleiche Weise den Sekundenwert zu `temp` hinzu.

Abschließend fügt ein bedingter Ausdruck "P.M." zu `temp` hinzu, wenn `hour` 12 oder größer ist; andernfalls fügt er "A.M." zu `temp` hinzu.

{{PreviousNext("Web/JavaScript/Guide/Numbers_and_strings", "Web/JavaScript/Guide/Regular_expressions")}}

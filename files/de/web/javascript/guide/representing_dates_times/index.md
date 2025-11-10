---
title: Darstellung von Daten und Zeiten
slug: Web/JavaScript/Guide/Representing_dates_times
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{PreviousNext("Web/JavaScript/Guide/Numbers_and_strings", "Web/JavaScript/Guide/Regular_expressions")}}

> [!NOTE]
> Das `Date`-Objekt wird jetzt als veraltet angesehen und sollte in neuem Code vermieden werden. Wir werden diese Seite bald mit modernen Alternativen aktualisieren.

## Date-Objekt

JavaScript verfügt nicht über einen Datentyp für Datum. Sie können jedoch das {{jsxref("Date")}}-Objekt und dessen Methoden verwenden, um in Ihren Anwendungen mit Daten und Zeiten zu arbeiten. Das `Date`-Objekt verfügt über eine Vielzahl von Methoden zum Setzen, Abfragen und Manipulieren von Daten, jedoch über keine Eigenschaften.

JavaScript behandelt Daten ähnlich wie Java. Beide Sprachen haben viele der gleichen Datums-Methoden, und beide speichern Daten als die Anzahl der Millisekunden seit Mitternacht am Beginn des 1. Januar 1970 UTC, wobei ein Unix-Timestamp die Anzahl der Sekunden seit demselben Zeitpunkt darstellt. Der Moment um Mitternacht am Beginn des 1. Januar 1970 UTC wird als [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) bezeichnet.

Der Bereich des `Date`-Objekts reicht von -100.000.000 Tagen bis 100.000.000 Tagen relativ zur Epoche.

Um ein `Date`-Objekt zu erstellen:

```js
const dateObjectName = new Date([parameters]);
```

wobei `dateObjectName` der Name des erstellten `Date`-Objekts ist; es kann sich um ein neues Objekt oder eine Eigenschaft eines vorhandenen Objekts handeln.

Der Aufruf von `Date` ohne das `new`-Schlüsselwort gibt einen String zurück, der das aktuelle Datum und die aktuelle Zeit darstellt.

Die `parameters` in der vorhergehenden Syntax können eines der folgenden sein:

- Nichts: erstellt das heutige Datum und die aktuelle Uhrzeit. Zum Beispiel `today = new Date();`.
- Ein String, der ein Datum darstellt, in vielen verschiedenen Formen. Die genauen Formen unterscheiden sich je nach Engine, aber die folgende Form wird immer unterstützt: `YYYY-MM-DDTHH:mm:ss.sssZ`. Beispielsweise `xmas95 = new Date("1995-12-25")`. Wenn Sie Stunden, Minuten oder Sekunden weglassen, wird der Wert auf null gesetzt.
- Eine Reihe von Ganzzahlen für Jahr, Monat und Tag. Zum Beispiel `xmas95 = new Date(1995, 11, 25)`.
- Eine Reihe von Ganzzahlen für Jahr, Monat, Tag, Stunde, Minute und Sekunden. Zum Beispiel `xmas95 = new Date(1995, 11, 25, 9, 30, 0);`.

### Methoden des Date-Objekts

Die Methoden des `Date`-Objekts zur Handhabung von Daten und Zeiten fallen in die folgenden Hauptkategorien:

- "set"-Methoden, um Datums- und Zeitwerte in `Date`-Objekten zu setzen.
- "get"-Methoden, um Datums- und Zeitwerte aus `Date`-Objekten zu erhalten.
- "to"-Methoden, um String-Werte aus `Date`-Objekten zurückzugeben.
- parse- und UTC-Methoden, um `Date`-Strings zu parsen.

Mit den "get"- und "set"-Methoden können Sie Sekunden, Minuten, Stunden, den Tag des Monats, den Wochentag, Monate und Jahre separat abfragen und setzen. Es gibt eine `getDay`-Methode, die den Wochentag zurückgibt, jedoch keine entsprechende `setDay`-Methode, da der Wochentag automatisch gesetzt wird. Diese Methoden verwenden Ganzzahlen zur Darstellung dieser Werte wie folgt:

- Sekunden und Minuten: 0 bis 59
- Stunden: 0 bis 23
- Wochentag: 0 (Sonntag) bis 6 (Samstag)
- Datum: 1 bis 31 (Tag des Monats)
- Monate: 0 (Januar) bis 11 (Dezember)
- Jahr: Jahre seit 1900

Zum Beispiel, wenn Sie das folgende Datum definieren:

```js
const xmas95 = new Date("1995-12-25");
```

Dann gibt `xmas95.getMonth()` 11 zurück und `xmas95.getFullYear()` gibt 1995 zurück.

Die `getTime`- und `setTime`-Methoden sind nützlich zum Vergleichen von Daten. Die `getTime`-Methode gibt die Anzahl der Millisekunden seit der Epoche für ein `Date`-Objekt zurück.

Beispielsweise zeigt der folgende Code die Anzahl der Tage an, die im aktuellen Jahr verbleiben:

```js
const today = new Date();
const endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month
endYear.setFullYear(today.getFullYear()); // Set year to this year
const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft); // Returns days left in the year
```

Dieses Beispiel erstellt ein `Date`-Objekt mit dem Namen `today`, das das heutige Datum enthält. Dann wird ein `Date`-Objekt namens `endYear` erstellt und das Jahr auf das aktuelle Jahr gesetzt. Dann berechnet es mithilfe der Anzahl der Millisekunden pro Tag die Anzahl der Tage zwischen `today` und `endYear`, indem `getTime` verwendet wird und auf eine ganze Anzahl von Tagen gerundet wird.

Die `parse`-Methode ist nützlich, um Werte aus Datumstrings bestehenden `Date`-Objekten zuzuweisen. Zum Beispiel verwendet der folgende Code `parse` und `setTime`, um einem `ipoDate`-Objekt einen Datumwert zuzuweisen:

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

Die `JSClock`-Funktion erstellt zuerst ein neues `Date`-Objekt namens `time`; da keine Argumente angegeben sind, wird `time` mit dem aktuellen Datum und der aktuellen Uhrzeit erstellt. Dann weisen Aufrufe der `getHours`, `getMinutes` und `getSeconds`-Methoden den Wert der aktuellen Stunde, Minute und Sekunde `hour`, `minute` und `second` zu.

Die folgenden Anweisungen erstellen einen String-Wert basierend auf der Zeit. Die erste Anweisung erstellt eine Variable `temp`. Ihr Wert ist `hour % 12`, was die `hour` im 12-Stunden-System ist. Dann wird `hour` bei einem Wert von `0` auf `12` neu zugewiesen, sodass Mitternacht und Mittag als `12:00` anstelle von `0:00` angezeigt werden.

Die nächste Anweisung fügt dem `temp`-Wert der `minute` hinzu. Wenn der Wert von `minute` kleiner als 10 ist, fügt der bedingte Ausdruck einen String mit einer vorangestellten Null hinzu; andernfalls fügt er einen String mit einem abgrenzenden Doppelpunkt hinzu. Dann fügt eine Anweisung auf die gleiche Weise einen Sekundenwert zu `temp` hinzu.

Schließlich fügt ein bedingter Ausdruck "P.M." zu `temp` hinzu, wenn `hour` 12 oder größer ist; andernfalls wird "A.M." zu `temp` hinzugefügt.

{{PreviousNext("Web/JavaScript/Guide/Numbers_and_strings", "Web/JavaScript/Guide/Regular_expressions")}}

---
title: Darstellung von Daten & Zeiten
slug: Web/JavaScript/Guide/Representing_dates_times
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Numbers_and_strings", "Web/JavaScript/Guide/Regular_expressions")}}

> [!NOTE]
> Das `Date`-Objekt gilt inzwischen als veraltet und sollte in neuem Code vermieden werden. Wir werden diese Seite bald mit modernen Alternativen aktualisieren.

## Date-Objekt

JavaScript besitzt keinen Datentyp für Datum. Sie können jedoch das {{jsxref("Date")}}-Objekt und seine Methoden verwenden, um in Ihren Anwendungen mit Daten und Zeiten zu arbeiten. Das `Date`-Objekt verfügt über zahlreiche Methoden zum Setzen, Abrufen und Bearbeiten von Daten, hat jedoch keine Eigenschaften.

JavaScript behandelt Daten ähnlich wie Java. Beide Sprachen verfügen über viele der gleichen Datumsmethoden und speichern Daten als die Anzahl von Millisekunden seit Mitternacht des 1. Januar 1970, UTC, wobei ein Unix-Timestamp die Anzahl der Sekunden seit demselben Zeitpunkt ist. Der Zeitpunkt am Mitternacht des 1. Januar 1970, UTC wird als [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) bezeichnet.

Der Bereich des `Date`-Objekts reicht von -100.000.000 Tagen bis 100.000.000 Tagen relativ zur Epoche.

Um ein `Date`-Objekt zu erstellen:

```js
const dateObjectName = new Date([parameters]);
```

wobei `dateObjectName` der Name des erstellten `Date`-Objekts ist; es kann ein neues Objekt oder eine Eigenschaft eines vorhandenen Objekts sein.

Das Aufrufen von `Date` ohne das Schlüsselwort `new` gibt eine Zeichenkette zurück, die das aktuelle Datum und die Uhrzeit darstellt.

Die `Parameter` in der obigen Syntax können eines der folgenden sein:

- Nichts: erstellt das heutige Datum und die Uhrzeit. Zum Beispiel, `today = new Date();`.
- Eine Zeichenkette, die ein Datum in vielen verschiedenen Formen darstellt. Die exakt unterstützten Formen unterscheiden sich zwischen den Engines, aber die folgende Form wird immer unterstützt: `YYYY-MM-DDTHH:mm:ss.sssZ`. Zum Beispiel, `xmas95 = new Date("1995-12-25")`. Wenn Sie Stunden, Minuten oder Sekunden weglassen, wird der Wert auf null gesetzt.
- Eine Gruppe von Integer-Werten für Jahr, Monat und Tag. Zum Beispiel, `xmas95 = new Date(1995, 11, 25)`.
- Eine Gruppe von Integer-Werten für Jahr, Monat, Tag, Stunde, Minute und Sekunden. Zum Beispiel, `xmas95 = new Date(1995, 11, 25, 9, 30, 0);`.

### Methoden des Date-Objekts

Die Methoden des `Date`-Objekts zur Behandlung von Daten und Zeiten fallen in diese breiten Kategorien:

- "set"-Methoden, um Datums- und Zeitwerte in `Date`-Objekten zu setzen.
- "get"-Methoden, um Datums- und Zeitwerte von `Date`-Objekten abzurufen.
- "to"-Methoden, um Zeichenwerte von `Date`-Objekten zurückzugeben.
- Parse- und UTC-Methoden, um `Date`-Zeichenketten zu parsen.

Mit den "get"- und "set"-Methoden können Sie Sekunden, Minuten, Stunden, Tag des Monats, Wochentag, Monate und Jahre separat abrufen und setzen. Es gibt eine `getDay`-Methode, die den Wochentag zurückgibt, aber keine entsprechende `setDay`-Methode, da der Wochentag automatisch gesetzt wird. Diese Methoden verwenden ganze Zahlen, um diese Werte wie folgt darzustellen:

- Sekunden und Minuten: 0 bis 59
- Stunden: 0 bis 23
- Tag: 0 (Sonntag) bis 6 (Samstag)
- Datum: 1 bis 31 (Tag des Monats)
- Monate: 0 (Januar) bis 11 (Dezember)
- Jahr: Jahre seit 1900

Angenommen, Sie definieren das folgende Datum:

```js
const xmas95 = new Date("1995-12-25");
```

Dann gibt `xmas95.getMonth()` 11 zurück, und `xmas95.getFullYear()` gibt 1995 zurück.

Die `getTime`- und `setTime`-Methoden sind nützlich zum Vergleichen von Daten. Die `getTime`-Methode gibt die Anzahl der Millisekunden seit der Epoche für ein `Date`-Objekt zurück.

Zum Beispiel zeigt der folgende Code die Anzahl der Tage, die im aktuellen Jahr verbleiben:

```js
const today = new Date();
const endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month
endYear.setFullYear(today.getFullYear()); // Set year to this year
const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft); // Returns days left in the year
```

Dieses Beispiel erstellt ein `Date`-Objekt namens `today`, das das heutige Datum enthält. Es erstellt dann ein `Date`-Objekt namens `endYear` und setzt das Jahr auf das aktuelle Jahr. Anschließend berechnet es mithilfe der Anzahl der Millisekunden pro Tag die Anzahl der Tage zwischen `today` und `endYear`, wobei `getTime` verwendet und auf eine ganze Zahl von Tagen gerundet wird.

Die `parse`-Methode ist nützlich, um Werte aus Datumszeichenketten bestehenden `Date`-Objekten zuzuweisen. Zum Beispiel verwendet der folgende Code `parse` und `setTime`, um einem `ipoDate`-Objekt einen Datumwert zuzuweisen:

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

Die `JSClock`-Funktion erstellt zuerst ein neues `Date`-Objekt namens `time`; da keine Argumente übergeben werden, wird `time` mit dem aktuellen Datum und der aktuellen Uhrzeit erstellt. Dann weisen die Aufrufe der `getHours`, `getMinutes` und `getSeconds`-Methoden den aktuellen Stunden-, Minuten- und Sekundenwert `hour`, `minute` und `second` zu.

Die folgenden Anweisungen bauen einen Zeichenwert basierend auf der Uhrzeit auf. Die erste Anweisung erstellt eine Variable `temp`. Ihr Wert ist `hour % 12`, was `hour` im 12-Stunden-System ist. Dann wird `hour` auf `12` gesetzt, wenn der Wert `0` ist, sodass Mitternacht und Mittagszeiten als `12:00` statt `0:00` angezeigt werden.

Die nächste Anweisung hängt einen `minute`-Wert an `temp` an. Wenn der Wert von `minute` kleiner als 10 ist, fügt der bedingte Ausdruck eine Zeichenkette mit einer führenden Null hinzu; andernfalls fügt er eine Zeichenkette mit einem trennenden Doppelpunkt hinzu. Dann fügt eine Anweisung einen Sekundenwert in derselben Weise an `temp` an.

Schließlich fügt ein bedingter Ausdruck "P.M." zu `temp` hinzu, wenn `hour` 12 oder größer ist; ansonsten fügt er "A.M." zu `temp` hinzu.

{{PreviousNext("Web/JavaScript/Guide/Numbers_and_strings", "Web/JavaScript/Guide/Regular_expressions")}}

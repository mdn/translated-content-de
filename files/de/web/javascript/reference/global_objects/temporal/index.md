---
title: Temporal
slug: Web/JavaScript/Reference/Global_Objects/Temporal
l10n:
  sourceCommit: c44f591049bc129b356acb0a9ce281974c035113
---

Das **`Temporal`**-Objekt ermöglicht die Verwaltung von Datum und Uhrzeit in verschiedenen Szenarien. Dazu gehören die integrierte Darstellung von Zeitzonen und Kalendersystemen, die Umrechnung von Uhrzeiten, Berechnungen, Formatierung und mehr. Es ist als vollständiger Ersatz für das {{jsxref("Date")}}-Objekt konzipiert.

## Beschreibung

Anders als die meisten globalen Objekte ist `Temporal` kein Konstruktor. Sie können es weder mit dem [`new`-Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden noch das `Temporal`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Temporal` sind statisch, genau wie beim {{jsxref("Math")}}-Objekt.

`Temporal` verfügt über eine umfangreiche und leistungsfähige API. Sie stellt über mehrere Klassen hinweg mehr als 200 Hilfsmethoden bereit und kann daher sehr komplex wirken. Im Folgenden erhalten Sie einen Überblick darüber, wie diese APIs zusammenhängen. Weitere Informationen finden Sie im Leitfaden [Datums- und Uhrzeitwerte darstellen](/de/docs/Web/JavaScript/Guide/Representing_dates_times) zum `Temporal`-Objekt und in der [Temporal-Rezeptsammlung](/de/docs/Web/JavaScript/Guide/Representing_dates_times/Cookbook) mit Codebeispielen für häufige Anwendungsfälle, darunter die Migration von `Date` zu `Temporal`.

### Hintergrund und Konzepte

JavaScript verfügt seit seinen Anfängen über das {{jsxref("Date")}}-Objekt zur Verarbeitung von Datum und Uhrzeit. Die `Date`-API basiert jedoch auf der wenig durchdachten Java-Klasse `java.util.Date`, die Anfang der 2010er-Jahre ersetzt wurde. Da JavaScript auf Abwärtskompatibilität setzt, ist `Date` weiterhin Teil der Sprache.

Die wichtigste Erkenntnis vorab lautet: **Die Verarbeitung von Datumsangaben ist komplex.** Viele Probleme von `Date` ließen sich durch zusätzliche Methoden beheben. Ein grundlegender Entwurfsfehler bleibt jedoch bestehen: Das Objekt stellt so viele Methoden bereit, dass oft unklar ist, welche davon verwendet werden sollte. Das führt zu unerwarteten Fallstricken. Eine gut gestaltete API muss nicht nur mehr ermöglichen, sondern auf jeder Abstraktionsebene auch _weniger_ tun. Fehlanwendungen zu verhindern ist ebenso wichtig wie Anwendungsfälle zu ermöglichen.

`Date`-Objekte erfüllen gleichzeitig zwei Aufgaben:

- Als [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date): die Anzahl der Millisekunden oder Nanosekunden, die seit einem festen Zeitpunkt, der sogenannten _Epoche_, vergangen sind.
- Als Kombination von [Komponenten](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_components_and_time_zones): Jahr, Monat, Tag, Stunde, Minute, Sekunde, Millisekunde und Nanosekunde. Jahr, Monat und Tag sind nur in Bezug auf ein _Kalendersystem_ sinnvoll. Zusammen mit einer Zeitzone lässt sich die gesamte Kombination einem eindeutigen Zeitpunkt zuordnen. `Date`-Objekte bieten Methoden zum Lesen und Ändern dieser Komponenten.

[Zeitzonen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) sind die Ursache vieler datumsbezogener Fehler. Wenn Sie mit einem `Date` nach dem Modell der „Kombination von Komponenten“ arbeiten, kann die Uhrzeit nur in zwei Zeitzonen angegeben werden: UTC und der lokalen Zeitzone des Geräts. Eine beliebige Zeitzone lässt sich nicht angeben. Ebenso fehlt das Konzept „ohne Zeitzone“: Bei Datumsangaben handelt es sich dabei um ein _Kalenderdatum_, bei Uhrzeiten um eine _Wanduhrzeit_ – also einen Wert, den Sie von einem Kalender oder einer Uhr ablesen. Wenn Sie beispielsweise einen täglichen Weckalarm einstellen, soll dieser unabhängig von der Sommerzeit oder einer Reise in eine andere Zeitzone um „8:00 Uhr“ ausgelöst werden.

Ein weiteres Konzept, das `Date` fehlt, ist das [Kalendersystem](#kalendersysteme). Die meisten Menschen kennen den gregorianischen Kalender: Er unterscheidet die Zeitrechnungen vor und nach Christus, hat zwölf Monate mit unterschiedlich vielen Tagen und ungefähr alle vier Jahre ein Schaltjahr. Bei anderen Kalendersystemen wie dem hebräischen, chinesischen oder japanischen Kalender gelten manche dieser Regeln jedoch nicht. Mit `Date` können Sie nur nach dem Modell des gregorianischen Kalenders arbeiten.

`Date` bringt weitere unerwünschte Altlasten mit sich: Alle Setter verändern das bestehende Objekt, was häufig unbeabsichtigte Nebenwirkungen verursacht. Außerdem lässt sich das [Format für Datums- und Uhrzeitzeichenfolgen](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) nicht auf konsistente Weise parsen. Die beste Lösung ist daher eine von Grund auf neu entwickelte API: `Temporal`.

### Überblick über die API

`Temporal` ist ein Namensraum wie {{jsxref("Intl")}}. Er enthält mehrere Klassen und Namensräume, die jeweils für einen bestimmten Aspekt der Verwaltung von Datum und Uhrzeit ausgelegt sind. Die Klassen lassen sich wie folgt gruppieren:

- Darstellung einer Zeitdauer, also der Differenz zwischen zwei Zeitpunkten: {{jsxref("Temporal.Duration")}}
- Darstellung eines Zeitpunkts:
  - Darstellung eines eindeutigen Zeitpunkts:
    - Als Zeitstempel: {{jsxref("Temporal.Instant")}}
    - Als Kombination von Datums- und Uhrzeitkomponenten mit einer Zeitzone: {{jsxref("Temporal.ZonedDateTime")}}
  - Darstellung eines Datums oder einer Uhrzeit ohne Zeitzone (alle mit dem Präfix „Plain“):
    - Datum (Jahr, Monat, Tag) + Uhrzeit (Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde, Nanosekunde): {{jsxref("Temporal.PlainDateTime")}} (Hinweis: `ZonedDateTime` entspricht `PlainDateTime` mit einer zusätzlichen Zeitzone.)
      - Datum (Jahr, Monat, Tag): {{jsxref("Temporal.PlainDate")}}
        - Jahr, Monat: {{jsxref("Temporal.PlainYearMonth")}}
        - Monat, Tag: {{jsxref("Temporal.PlainMonthDay")}}
      - Uhrzeit (Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde, Nanosekunde): {{jsxref("Temporal.PlainTime")}}

Daneben gibt es den Hilfsnamensraum {{jsxref("Temporal.Now")}}. Er stellt Methoden bereit, um die aktuelle Zeit in verschiedenen Formaten abzurufen.

### Gemeinsame Schnittstelle der Klassen

Der Namensraum `Temporal` enthält viele Klassen, die zahlreiche ähnliche Methoden besitzen. Die folgende Tabelle führt alle Methoden der einzelnen Klassen auf, mit Ausnahme der [Konvertierungsmethoden](#konvertierung_zwischen_klassen):

<table>
<thead>
<tr>
<td></td>
<th><code>Instant</code></th>
<th><code>ZonedDateTime</code></th>
<th><code>PlainDateTime</code></th>
<th><code>PlainDate</code></th>
<th><code>PlainTime</code></th>
<th><code>PlainYearMonth</code></th>
<th><code>PlainMonthDay</code></th>
</tr>
</thead>
<tbody>
<tr>
<th>Erstellung</th>
<td>{{jsxref("Temporal/Instant/Instant", "Instant()")}}<br>{{jsxref("Temporal/Instant/from", "Instant.from()")}}<br>{{jsxref("Temporal/Instant/fromEpochMilliseconds", "Instant.fromEpochMilliseconds()")}}<br>{{jsxref("Temporal/Instant/fromEpochNanoseconds", "Instant.fromEpochNanoseconds()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "ZonedDateTime()")}}<br>{{jsxref("Temporal/ZonedDateTime/from", "ZonedDateTime.from()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/PlainDateTime", "PlainDateTime()")}}<br>{{jsxref("Temporal/PlainDateTime/from", "PlainDateTime.from()")}}</td>
<td>{{jsxref("Temporal/PlainDate/PlainDate", "PlainDate()")}}<br>{{jsxref("Temporal/PlainDate/from", "PlainDate.from()")}}</td>
<td>{{jsxref("Temporal/PlainTime/PlainTime", "PlainTime()")}}<br>{{jsxref("Temporal/PlainTime/from", "PlainTime.from()")}}</td>
<td>{{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "PlainYearMonth()")}}<br>{{jsxref("Temporal/PlainYearMonth/from", "PlainYearMonth.from()")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "PlainMonthDay()")}}<br>{{jsxref("Temporal/PlainMonthDay/from", "PlainMonthDay.from()")}}</td>
</tr>
<tr>
<th>Aktualisierung</th>
<td>Nicht verfügbar</td>
<td>{{jsxref("Temporal/ZonedDateTime/with", "with()")}}<br>{{jsxref("Temporal/ZonedDateTime/withCalendar", "withCalendar()")}}<br>{{jsxref("Temporal/ZonedDateTime/withTimeZone", "withTimeZone()")}}<br>{{jsxref("Temporal/ZonedDateTime/withPlainTime", "withPlainTime()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/with", "with()")}}<br>{{jsxref("Temporal/PlainDateTime/withCalendar", "withCalendar()")}}<br>{{jsxref("Temporal/PlainDateTime/withPlainTime", "withPlainTime()")}}</td>
<td>{{jsxref("Temporal/PlainDate/with", "with()")}}<br>{{jsxref("Temporal/PlainDate/withCalendar", "withCalendar()")}}</td>
<td>{{jsxref("Temporal/PlainTime/with", "with()")}}</td>
<td>{{jsxref("Temporal/PlainYearMonth/with", "with()")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/with", "with()")}}</td>
</tr>
<tr>
<th>Berechnungen</th>
<td>{{jsxref("Temporal/Instant/add", "add()")}}<br>{{jsxref("Temporal/Instant/subtract", "subtract()")}}<br>{{jsxref("Temporal/Instant/since", "since()")}}<br>{{jsxref("Temporal/Instant/until", "until()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/add", "add()")}}<br>{{jsxref("Temporal/ZonedDateTime/subtract", "subtract()")}}<br>{{jsxref("Temporal/ZonedDateTime/since", "since()")}}<br>{{jsxref("Temporal/ZonedDateTime/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/add", "add()")}}<br>{{jsxref("Temporal/PlainDateTime/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainDateTime/since", "since()")}}<br>{{jsxref("Temporal/PlainDateTime/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainDate/add", "add()")}}<br>{{jsxref("Temporal/PlainDate/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainDate/since", "since()")}}<br>{{jsxref("Temporal/PlainDate/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainTime/add", "add()")}}<br>{{jsxref("Temporal/PlainTime/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainTime/since", "since()")}}<br>{{jsxref("Temporal/PlainTime/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainYearMonth/add", "add()")}}<br>{{jsxref("Temporal/PlainYearMonth/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainYearMonth/since", "since()")}}<br>{{jsxref("Temporal/PlainYearMonth/until", "until()")}}</td>
<td>Nicht verfügbar</td>
</tr>
<tr>
<th>Rundung</th>
<td>{{jsxref("Temporal/Instant/round", "round()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/round", "round()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/round", "round()")}}</td>
<td>Nicht verfügbar</td>
<td>{{jsxref("Temporal/PlainTime/round", "round()")}}</td>
<td>Nicht verfügbar</td>
<td>Nicht verfügbar</td>
</tr>
<tr>
<th>Vergleich</th>
<td>{{jsxref("Temporal/Instant/equals", "equals()")}}<br>{{jsxref("Temporal/Instant/compare", "Instant.compare()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/equals", "equals()")}}<br>{{jsxref("Temporal/ZonedDateTime/compare", "ZonedDateTime.compare()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/equals", "equals()")}}<br>{{jsxref("Temporal/PlainDateTime/compare", "PlainDateTime.compare()")}}</td>
<td>{{jsxref("Temporal/PlainDate/equals", "equals()")}}<br>{{jsxref("Temporal/PlainDate/compare", "PlainDate.compare()")}}</td>
<td>{{jsxref("Temporal/PlainTime/equals", "equals()")}}<br>{{jsxref("Temporal/PlainTime/compare", "PlainTime.compare()")}}</td>
<td>{{jsxref("Temporal/PlainYearMonth/equals", "equals()")}}<br>{{jsxref("Temporal/PlainYearMonth/compare", "PlainYearMonth.compare()")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/equals", "equals()")}}</td>
</tr>
<tr>
<th>Serialisierung</th>
<td>{{jsxref("Temporal/Instant/toJSON", "toJSON()")}}<br>{{jsxref("Temporal/Instant/toLocaleString", "toLocaleString()")}}<br>{{jsxref("Temporal/Instant/toString", "toString()")}}<br>{{jsxref("Temporal/Instant/valueOf", "valueOf()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/toJSON", "toJSON()")}}<br>{{jsxref("Temporal/ZonedDateTime/toLocaleString", "toLocaleString()")}}<br>{{jsxref("Temporal/ZonedDateTime/toString", "toString()")}}<br>{{jsxref("Temporal/ZonedDateTime/valueOf", "valueOf()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/toJSON", "toJSON()")}}<br>{{jsxref("Temporal/PlainDateTime/toLocaleString", "toLocaleString()")}}<br>{{jsxref("Temporal/PlainDateTime/toString", "toString()")}}<br>{{jsxref("Temporal/PlainDateTime/valueOf", "valueOf()")}}</td>
<td>{{jsxref("Temporal/PlainDate/toJSON", "toJSON()")}}<br>{{jsxref("Temporal/PlainDate/toLocaleString", "toLocaleString()")}}<br>{{jsxref("Temporal/PlainDate/toString", "toString()")}}<br>{{jsxref("Temporal/PlainDate/valueOf", "valueOf()")}}</td>
<td>{{jsxref("Temporal/PlainTime/toJSON", "toJSON()")}}<br>{{jsxref("Temporal/PlainTime/toLocaleString", "toLocaleString()")}}<br>{{jsxref("Temporal/PlainTime/toString", "toString()")}}<br>{{jsxref("Temporal/PlainTime/valueOf", "valueOf()")}}</td>
<td>{{jsxref("Temporal/PlainYearMonth/toJSON", "toJSON()")}}<br>{{jsxref("Temporal/PlainYearMonth/toLocaleString", "toLocaleString()")}}<br>{{jsxref("Temporal/PlainYearMonth/toString", "toString()")}}<br>{{jsxref("Temporal/PlainYearMonth/valueOf", "valueOf()")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/toJSON", "toJSON()")}}<br>{{jsxref("Temporal/PlainMonthDay/toLocaleString", "toLocaleString()")}}<br>{{jsxref("Temporal/PlainMonthDay/toString", "toString()")}}<br>{{jsxref("Temporal/PlainMonthDay/valueOf", "valueOf()")}}</td>
</tr>
</tbody>
</table>

Die folgende Tabelle zeigt, welche Eigenschaften die einzelnen Klassen bereitstellen. Dadurch wird deutlich, welche Informationen eine Klasse darstellen kann.

<table>
<thead>
<tr>
<td></td>
<th><code>Instant</code></th>
<th><code>ZonedDateTime</code></th>
<th><code>PlainDateTime</code></th>
<th><code>PlainDate</code></th>
<th><code>PlainTime</code></th>
<th><code>PlainYearMonth</code></th>
<th><code>PlainMonthDay</code></th>
</tr>
</thead>
<tbody>
<tr>
<th>Kalender</th>
<td>Nicht verfügbar</td>
<td>{{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/calendarId", "calendarId")}}</td>
<td>{{jsxref("Temporal/PlainDate/calendarId", "calendarId")}}</td>
<td>Nicht verfügbar</td>
<td>{{jsxref("Temporal/PlainYearMonth/calendarId", "calendarId")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/calendarId", "calendarId")}}</td>
</tr>
<tr>
<th>Jahresbezogen</th>
<td>Nicht verfügbar</td>
<td>{{jsxref("Temporal/ZonedDateTime/era", "era")}}<br>{{jsxref("Temporal/ZonedDateTime/eraYear", "eraYear")}}<br>{{jsxref("Temporal/ZonedDateTime/year", "year")}}<br>{{jsxref("Temporal/ZonedDateTime/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/era", "era")}}<br>{{jsxref("Temporal/PlainDateTime/eraYear", "eraYear")}}<br>{{jsxref("Temporal/PlainDateTime/year", "year")}}<br>{{jsxref("Temporal/PlainDateTime/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/PlainDateTime/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/PlainDateTime/daysInYear", "daysInYear")}}</td>
<td>{{jsxref("Temporal/PlainDate/era", "era")}}<br>{{jsxref("Temporal/PlainDate/eraYear", "eraYear")}}<br>{{jsxref("Temporal/PlainDate/year", "year")}}<br>{{jsxref("Temporal/PlainDate/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/PlainDate/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/PlainDate/daysInYear", "daysInYear")}}</td>
<td>Nicht verfügbar</td>
<td>{{jsxref("Temporal/PlainYearMonth/era", "era")}}<br>{{jsxref("Temporal/PlainYearMonth/eraYear", "eraYear")}}<br>{{jsxref("Temporal/PlainYearMonth/year", "year")}}<br>{{jsxref("Temporal/PlainYearMonth/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/PlainYearMonth/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/PlainYearMonth/daysInYear", "daysInYear")}}</td>
<td>Nicht verfügbar</td>
</tr>
<tr>
<th>Monatsbezogen</th>
<td>Nicht verfügbar</td>
<td>{{jsxref("Temporal/ZonedDateTime/month", "month")}}<br>{{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/month", "month")}}<br>{{jsxref("Temporal/PlainDateTime/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainDateTime/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainDate/month", "month")}}<br>{{jsxref("Temporal/PlainDate/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainDate/daysInMonth", "daysInMonth")}}</td>
<td>Nicht verfügbar</td>
<td>{{jsxref("Temporal/PlainYearMonth/month", "month")}}<br>{{jsxref("Temporal/PlainYearMonth/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainYearMonth/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/monthCode", "monthCode")}}</td>
</tr>
<tr>
<th>Wochenbezogen</th>
<td>Nicht verfügbar</td>
<td>{{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/PlainDateTime/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/PlainDateTime/daysInWeek", "daysInWeek")}}</td>
<td>{{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/PlainDate/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/PlainDate/daysInWeek", "daysInWeek")}}</td>
<td>Nicht verfügbar</td>
<td>Nicht verfügbar</td>
<td>Nicht verfügbar</td>
</tr>
<tr>
<th>Tagesbezogen</th>
<td>Nicht verfügbar</td>
<td>{{jsxref("Temporal/ZonedDateTime/day", "day")}}<br>{{jsxref("Temporal/ZonedDateTime/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/ZonedDateTime/dayOfYear", "dayOfYear")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/day", "day")}}<br>{{jsxref("Temporal/PlainDateTime/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/PlainDateTime/dayOfYear", "dayOfYear")}}</td>
<td>{{jsxref("Temporal/PlainDate/day", "day")}}<br>{{jsxref("Temporal/PlainDate/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/PlainDate/dayOfYear", "dayOfYear")}}</td>
<td>Nicht verfügbar</td>
<td>Nicht verfügbar</td>
<td>{{jsxref("Temporal/PlainMonthDay/day", "day")}}</td>
</tr>
<tr>
<th>Uhrzeitkomponenten</th>
<td>Nicht verfügbar</td>
<td>{{jsxref("Temporal/ZonedDateTime/hour", "hour")}}<br>{{jsxref("Temporal/ZonedDateTime/minute", "minute")}}<br>{{jsxref("Temporal/ZonedDateTime/second", "second")}}<br>{{jsxref("Temporal/ZonedDateTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/ZonedDateTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/ZonedDateTime/nanosecond", "nanosecond")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/hour", "hour")}}<br>{{jsxref("Temporal/PlainDateTime/minute", "minute")}}<br>{{jsxref("Temporal/PlainDateTime/second", "second")}}<br>{{jsxref("Temporal/PlainDateTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/PlainDateTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/PlainDateTime/nanosecond", "nanosecond")}}</td>
<td>Nicht verfügbar</td>
<td>{{jsxref("Temporal/PlainTime/hour", "hour")}}<br>{{jsxref("Temporal/PlainTime/minute", "minute")}}<br>{{jsxref("Temporal/PlainTime/second", "second")}}<br>{{jsxref("Temporal/PlainTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/PlainTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/PlainTime/nanosecond", "nanosecond")}}</td>
<td>Nicht verfügbar</td>
<td>Nicht verfügbar</td>
</tr>
<tr>
<th>Zeitzone</th>
<td>Nicht verfügbar</td>
<td>{{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}}<br>{{jsxref("Temporal/ZonedDateTime/offset", "offset")}}<br>{{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "offsetNanoseconds")}}<br>{{jsxref("Temporal/ZonedDateTime/hoursInDay", "hoursInDay")}}<br>{{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "getTimeZoneTransition()")}}<br>{{jsxref("Temporal/ZonedDateTime/startOfDay", "startOfDay()")}}</td>
<td>Nicht verfügbar</td>
<td>Nicht verfügbar</td>
<td>Nicht verfügbar</td>
<td>Nicht verfügbar</td>
<td>Nicht verfügbar</td>
</tr>
<tr>
<th>Zeit seit der Epoche</th>
<td>{{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}}<br>{{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "epochMilliseconds")}}<br>{{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}}</td>
<td>Nicht verfügbar</td>
<td>Nicht verfügbar</td>
<td>Nicht verfügbar</td>
<td>Nicht verfügbar</td>
<td>Nicht verfügbar</td>
</tr>
</tbody>
</table>

### Konvertierung zwischen Klassen

Die folgende Tabelle fasst alle Konvertierungsmethoden der einzelnen Klassen zusammen.

<table>
<tbody>
<tr>
<td rowspan="2" colspan="2"></td>
<td colspan="7">Konvertierung von …</td>
</tr>
<tr>
<th><code>Instant</code></th>
<th><code>ZonedDateTime</code></th>
<th><code>PlainDateTime</code></th>
<th><code>PlainDate</code></th>
<th><code>PlainTime</code></th>
<th><code>PlainYearMonth</code></th>
<th><code>PlainMonthDay</code></th>
</tr>
<tr><td rowspan="7">nach …</td><th><code>Instant</code></th><td>/</td><td>{{jsxref("Temporal/ZonedDateTime/toInstant", "toInstant()")}}</td><td colspan="5">Zuerst in <code>ZonedDateTime</code> konvertieren</td></tr>
<tr><th><code>ZonedDateTime</code></th><td>{{jsxref("Temporal/Instant/toZonedDateTimeISO", "toZonedDateTimeISO()")}}</td><td>/</td><td>{{jsxref("Temporal/PlainDateTime/toZonedDateTime", "toZonedDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toZonedDateTime", "toZonedDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toZonedDateTime", "PlainDate#toZonedDateTime()")}} (als Argument übergeben)</td><td rowspan="2" colspan="2">Zuerst in <code>PlainDate</code> konvertieren</td></tr>
<tr><th><code>PlainDateTime</code></th><td rowspan="5">Zuerst in <code>ZonedDateTime</code> konvertieren</td><td>{{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "toPlainDateTime()")}}</td><td>/</td><td>{{jsxref("Temporal/PlainDate/toPlainDateTime", "toPlainDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toPlainDateTime", "PlainDate#toPlainDateTime()")}} (als Argument übergeben)</td></tr>
<tr><th><code>PlainDate</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainDate", "toPlainDate()")}}</td><td>/</td><td>Keine gemeinsamen Informationen</td><td>{{jsxref("Temporal/PlainYearMonth/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainMonthDay/toPlainDate", "toPlainDate()")}}</td></tr>
<tr><th><code>PlainTime</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainTime", "toPlainTime()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainTime", "toPlainTime()")}}</td><td>Keine gemeinsamen Informationen</td><td>/</td><td colspan="2">Keine gemeinsamen Informationen</td></tr>
<tr><th><code>PlainYearMonth</code></th><td rowspan="2" colspan="2">Zuerst in <code>PlainDate</code> konvertieren</td><td>{{jsxref("Temporal/PlainDate/toPlainYearMonth", "toPlainYearMonth()")}}</td><td rowspan="2">Keine gemeinsamen Informationen</td><td>/</td><td>Zuerst in <code>PlainDate</code> konvertieren</td></tr>
<tr><th><code>PlainMonthDay</code></th><td>{{jsxref("Temporal/PlainDate/toPlainMonthDay", "toPlainMonthDay()")}}</td><td>Zuerst in <code>PlainDate</code> konvertieren</td><td>/</td></tr>
</tbody>
</table>

Diese Tabellen vermitteln Ihnen eine grundlegende Orientierung in der `Temporal`-API.

### Kalendersysteme

Ein Kalendersystem ordnet Tage üblicherweise in Zeitabschnitte wie Wochen, Monate, Jahre und Ären ein. Der größte Teil der Welt verwendet den gregorianischen Kalender. Daneben sind zahlreiche andere Kalendersysteme gebräuchlich, insbesondere in religiösen und kulturellen Zusammenhängen. Standardmäßig verwenden alle kalenderbezogenen `Temporal`-Objekte das Kalendersystem ISO 8601. Es basiert auf dem gregorianischen Kalender und definiert zusätzliche Regeln für die Nummerierung von Wochen. [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) listet die meisten Kalendersysteme auf, die Browser voraussichtlich unterstützen. Der folgende Überblick über den Aufbau von Kalendersystemen soll Ihnen verdeutlichen, welche Merkmale sich unterscheiden können.

Drei periodische Vorgänge sind auf der Erde besonders wichtig: ihr Umlauf um die Sonne (365,242 Tage pro Umlauf), der Umlauf des Mondes um die Erde (29,53 Tage von Neumond zu Neumond) und die Rotation der Erde um ihre eigene Achse (24 Stunden von Sonnenaufgang zu Sonnenaufgang). Alle Kulturen verwenden dieselbe Maßeinheit für einen „Tag“: 24 Stunden. Gelegentliche Änderungen wie die Sommerzeit gehören nicht zum Kalendersystem, sondern zu den Informationen einer [Zeitzone](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets).

- Manche Kalendersysteme legen ein Jahr hauptsächlich anhand der durchschnittlichen Länge von 365,242 Tagen fest: Ein Jahr hat 365 Tage, und ungefähr alle vier Jahre kommt ein zusätzlicher Tag hinzu, der _Schalttag_. Das Jahr kann weiter in Monate unterteilt werden. Diese Systeme heißen _Sonnenkalender_. Der gregorianische und der iranische Kalender sind Sonnenkalender.
- Andere Kalendersysteme legen einen Monat hauptsächlich anhand einer durchschnittlichen Länge von 29,5 Tagen fest, indem Monate abwechselnd 29 und 30 Tage haben. Zwölf Monate können dann zu einem Jahr mit 354 Tagen zusammengefasst werden. Diese Systeme heißen _Mondkalender_. Der islamische Kalender ist ein Mondkalender. Da ein Mondjahr nicht mit dem Zyklus der Jahreszeiten übereinstimmt, sind reine Mondkalender vergleichsweise selten.
- Wieder andere Kalendersysteme legen die Monate ebenfalls hauptsächlich anhand der Mondzyklen fest. Um die Abweichung von elf Tagen gegenüber dem Sonnenjahr auszugleichen, fügen sie ungefähr alle drei Jahre einen zusätzlichen Monat ein, den _Schaltmonat_. Diese Systeme heißen _lunisolare Kalender_. Der hebräische und der chinesische Kalender sind lunisolare Kalender.

In `Temporal` wird jedes Datum innerhalb eines Kalendersystems durch drei Komponenten eindeutig bestimmt: `year`, `month` und `day`. `year` ist normalerweise eine positive ganze Zahl, kann aber auch null oder negativ sein und nimmt im Zeitverlauf monoton zu. Das Jahr `1` (oder `0`, sofern vorhanden) bezeichnet den Beginn der Zeitrechnung des jeweiligen Kalendersystems und ist für jedes System frei festgelegt. `month` ist eine positive ganze Zahl, die jeweils um 1 steigt. Sie beginnt bei `1`, reicht bis `date.monthsInYear` und springt beim nächsten Jahr wieder auf `1`. Auch `day` ist eine positive ganze Zahl. Der Wert muss jedoch nicht bei 1 beginnen oder stets um 1 steigen, da politische Änderungen dazu führen können, dass Tage ausgelassen oder wiederholt werden. Im Allgemeinen steigt `day` jedoch monoton an und wird beim nächsten Monat zurückgesetzt.

Neben `year` kann in Kalendersystemen mit Ären auch die Kombination aus `era` und `eraYear` ein Jahr eindeutig bestimmen. Der gregorianische Kalender verwendet beispielsweise die Ären „CE“ (Common Era) und „BCE“ (Before Common Era). Das Jahr `-1` entspricht `{ era: "bce", eraYear: 2 }`. Beachten Sie, dass das Jahr `0` in allen Kalendersystemen existiert; im gregorianischen Kalender entspricht es aufgrund der [astronomischen Jahreszählung](https://en.wikipedia.org/wiki/Astronomical_year_numbering) dem Jahr 1 v. Chr. `era` ist eine Zeichenfolge in Kleinbuchstaben. `eraYear` ist eine beliebige ganze Zahl, die null oder negativ sein oder im Zeitverlauf sogar abnehmen kann – normalerweise bei der ältesten Ära.

> [!NOTE]
> Verwenden Sie `era` und `eraYear` immer zusammen; verwenden Sie keine der beiden Eigenschaften ohne die andere. Um Konflikte zu vermeiden, sollten Sie außerdem `year` nicht mit `era`/`eraYear` kombinieren, wenn Sie ein Jahr angeben. Wählen Sie eine Darstellung des Jahres und verwenden Sie diese konsequent.
>
> Vermeiden Sie folgende falsche Annahmen über Jahre:
>
> - Gehen Sie nicht davon aus, dass `era` und `eraYear` immer vorhanden sind; sie können `undefined` sein.
> - Gehen Sie nicht davon aus, dass `era` eine benutzerfreundliche Zeichenfolge ist. Verwenden Sie stattdessen `toLocaleString()`, um das Datum zu formatieren.
> - Gehen Sie nicht davon aus, dass zwei `year`-Werte aus verschiedenen Kalendersystemen vergleichbar sind. Verwenden Sie stattdessen die statische Methode `compare()`.
> - Gehen Sie nicht davon aus, dass Jahre 365 oder 366 Tage und zwölf Monate haben. Verwenden Sie stattdessen `daysInYear` und `monthsInYear`.
> - Gehen Sie nicht davon aus, dass Schaltjahre (`inLeapYear` ist `true`) einen zusätzlichen Tag haben; sie können auch einen zusätzlichen Monat haben.

Neben `month` kann auch `monthCode` einen Monat innerhalb eines Jahres eindeutig bestimmen. `monthCode` entspricht normalerweise dem Namen des Monats, `month` dagegen nicht. In lunisolaren Kalendern haben beispielsweise zwei Monate mit demselben `monthCode` unterschiedliche `month`-Werte, wenn einer in einem Schaltjahr liegt, der andere nicht und sie nach dem Schaltmonat liegen. Das liegt am eingefügten zusätzlichen Monat.

> [!NOTE]
> Um Konflikte zu vermeiden, sollten Sie `month` und `monthCode` nicht kombinieren, wenn Sie einen Monat angeben. Wählen Sie eine Darstellung des Monats und verwenden Sie diese konsequent. `month` ist hilfreicher, wenn Sie die Reihenfolge der Monate innerhalb eines Jahres benötigen, etwa beim Durchlaufen aller Monate. `monthCode` ist hilfreicher, wenn Sie den Monatsnamen benötigen, beispielsweise zum Speichern von Geburtstagen.
>
> Vermeiden Sie folgende falsche Annahmen über Monate:
>
> - Gehen Sie nicht davon aus, dass `monthCode` und `month` immer einander entsprechen.
> - Gehen Sie nicht von einer festen Anzahl von Tagen pro Monat aus. Verwenden Sie stattdessen `daysInMonth`.
> - Gehen Sie nicht davon aus, dass `monthCode` eine benutzerfreundliche Zeichenfolge ist. Verwenden Sie stattdessen `toLocaleString()`, um das Datum zu formatieren.
> - Speichern Sie Monatsnamen grundsätzlich nicht in einem Array oder Objekt zwischen. Obwohl `monthCode` innerhalb eines Kalendersystems normalerweise einem Monatsnamen entspricht, empfehlen wir, den Monatsnamen stets neu zu ermitteln, beispielsweise mit `date.toLocaleString("en-US", { calendar: date.calendarId, month: "long" })`.

Neben `day`, einem auf den Monat bezogenen Index, kann auch `dayOfYear` einen Tag innerhalb eines Jahres eindeutig bestimmen. `dayOfYear` ist eine positive ganze Zahl, die jeweils um 1 steigt. Sie beginnt bei `1` und reicht bis `date.daysInYear`.

Das Konzept einer „Woche“ ist nicht an ein astronomisches Ereignis gebunden, sondern kulturell festgelegt. Am häufigsten umfasst eine Woche `7` Tage. Sie kann aber auch 4, 5, 6, 8 oder mehr Tage haben – oder überhaupt keine feste Anzahl von Tagen. Die Anzahl der Tage einer Woche für ein bestimmtes Datum erhalten Sie über dessen `daysInWeek`. `Temporal` bestimmt Wochen anhand der Kombination aus `weekOfYear` und `yearOfWeek`. `weekOfYear` ist eine positive ganze Zahl, die bei `1` beginnt, jeweils um 1 steigt und beim nächsten Jahr wieder auf `1` springt. `yearOfWeek` entspricht im Allgemeinen `year`, kann aber am Anfang oder Ende eines Jahres davon abweichen: Eine Woche kann sich über zwei Jahre erstrecken, und `yearOfWeek` wählt nach den Regeln des Kalendersystems eines dieser beiden Jahre aus.

> [!NOTE]
> Verwenden Sie `weekOfYear` und `yearOfWeek` immer zusammen; kombinieren Sie `weekOfYear` nicht mit `year`.
>
> Vermeiden Sie folgende falsche Annahmen über Wochen:
>
> - Gehen Sie nicht davon aus, dass `weekOfYear` und `yearOfWeek` immer vorhanden sind; sie können `undefined` sein.
> - Gehen Sie nicht davon aus, dass Wochen immer sieben Tage lang sind. Verwenden Sie stattdessen `daysInWeek`.
> - Beachten Sie, dass die aktuelle `Temporal`-API keine Jahr-Woche-Datumsangaben unterstützt. Sie können mit diesen Eigenschaften daher weder Datumswerte erstellen noch Datumswerte als Jahr-Woche-Angaben serialisieren. Die Eigenschaften dienen nur zur Information.

### RFC-9557-Format

Alle `Temporal`-Klassen können im Format von [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) serialisiert und deserialisiert werden. Dieses Format basiert auf [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339). In seiner vollständigen Form sieht es wie folgt aus. Die Leerzeichen dienen nur der Lesbarkeit und dürfen in der tatsächlichen Zeichenfolge nicht vorkommen:

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

Für die einzelnen Klassen gelten unterschiedliche Anforderungen daran, welche Komponenten vorhanden sein müssen. In der Dokumentation jeder Klasse finden Sie deshalb einen Abschnitt mit dem Titel „RFC-9557-Format“, der das von der jeweiligen Klasse erkannte Format beschreibt.

Es ähnelt stark dem [Format für Datums- und Uhrzeitzeichenfolgen](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) von {{jsxref("Date")}}, das ebenfalls auf ISO 8601 basiert. Die wichtigsten Ergänzungen sind die Möglichkeit, Mikrosekunden- und Nanosekundenkomponenten sowie die Zeitzone und das Kalendersystem anzugeben.

### Darstellbare Datumswerte

Für alle `Temporal`-Objekte, die ein bestimmtes Kalenderdatum darstellen, gilt eine ähnliche Begrenzung des darstellbaren Bereichs: ±10<sup>8</sup> Tage (einschließlich) relativ zur Unix-Epoche. Das entspricht dem Bereich von Zeitpunkten zwischen `-271821-04-20T00:00:00` und `+275760-09-13T00:00:00`. Es ist derselbe Bereich wie bei [gültigen Datumswerten](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). Im Einzelnen gilt:

- {{jsxref("Temporal.Instant")}} und {{jsxref("Temporal.ZonedDateTime")}} wenden diese Grenze direkt auf ihren `epochNanoseconds`-Wert an.
- {{jsxref("Temporal.PlainDateTime")}} interpretiert Datum und Uhrzeit in der Zeitzone UTC und verlangt, dass der Wert innerhalb von ±(10<sup>8</sup> + 1) Tagen (ohne die Grenzwerte) relativ zur Unix-Epoche liegt. Der gültige Bereich reicht daher von `-271821-04-19T00:00:00` bis `+275760-09-14T00:00:00`, jeweils ohne die Grenzwerte. Dadurch kann jedes `ZonedDateTime` unabhängig von seinem Offset in ein `PlainDateTime` konvertiert werden.
- {{jsxref("Temporal.PlainDate")}} führt dieselbe Prüfung wie `PlainDateTime` für die Mittagszeit (`12:00:00`) des betreffenden Datums durch. Der gültige Bereich reicht daher von `-271821-04-19` bis `+275760-09-13`. Dadurch kann jedes `PlainDateTime` unabhängig von seiner Uhrzeit in ein `PlainDate` konvertiert werden und umgekehrt.
- {{jsxref("Temporal.PlainYearMonth")}} hat den gültigen Bereich `-271821-04` bis `+275760-09`. Dadurch kann jedes `PlainDate` unabhängig von seinem Tag in ein `PlainYearMonth` konvertiert werden. Eine Ausnahme besteht, wenn der erste Tag eines Monats in einem Nicht-ISO-Kalendersystem in den ISO-Monat `-271821-03` fällt.

`Temporal`-Objekte lassen sich nicht erstellen, wenn sie ein Datum oder eine Uhrzeit außerhalb dieser Grenzen darstellen würden. Dies gilt unter anderem für:

- Die Verwendung des Konstruktors oder der statischen Methode `from()`.
- Die Verwendung der Methode `with()` zum Aktualisieren von Kalenderfeldern.
- Die Verwendung von `add()`, `subtract()`, `round()` oder einer anderen Methode zum Ableiten neuer Instanzen.

## Statische Eigenschaften

- {{jsxref("Temporal.Duration")}}
  - : Stellt die Differenz zwischen zwei Zeitpunkten dar und kann für Berechnungen mit Datums- und Uhrzeitwerten verwendet werden. Grundlage ist eine Kombination von Werten für Jahre, Monate, Wochen, Tage, Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden und Nanosekunden.
- {{jsxref("Temporal.Instant")}}
  - : Stellt einen eindeutigen Zeitpunkt mit Nanosekundengenauigkeit dar. Grundlage ist die Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970 in UTC), ohne Zeitzone oder Kalendersystem.
- {{jsxref("Temporal.Now")}}
  - : Stellt Methoden bereit, um die aktuelle Zeit in verschiedenen Formaten abzurufen.
- {{jsxref("Temporal.PlainDate")}}
  - : Stellt ein Kalenderdatum ohne Uhrzeit oder Zeitzone dar. Ein Beispiel ist ein Kalendereintrag, der unabhängig von der Zeitzone den ganzen Tag dauert. Grundlage ist ein Datum nach ISO 8601 mit Feldern für Jahr, Monat und Tag sowie einem zugehörigen Kalendersystem.
- {{jsxref("Temporal.PlainDateTime")}}
  - : Stellt ein Datum (Kalenderdatum) und eine Uhrzeit (Wanduhrzeit) ohne Zeitzone dar. Grundlage ist die Kombination aus einem [Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate) mit einem zugehörigen Kalendersystem und einer [Uhrzeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime).
- {{jsxref("Temporal.PlainMonthDay")}}
  - : Stellt Monat und Tag eines Kalenderdatums ohne Jahr oder Zeitzone dar. Ein Beispiel ist ein Kalendereintrag, der jedes Jahr wiederkehrt und den ganzen Tag dauert. Grundlage ist ein Datum nach ISO 8601 mit Feldern für Jahr, Monat und Tag sowie einem zugehörigen Kalendersystem. Das Jahr dient dazu, Monat und Tag in Nicht-ISO-Kalendersystemen eindeutig zu bestimmen.
- {{jsxref("Temporal.PlainTime")}}
  - : Stellt eine Uhrzeit ohne Datum oder Zeitzone dar. Ein Beispiel ist ein wiederkehrendes Ereignis, das jeden Tag zur selben Uhrzeit stattfindet. Grundlage ist eine Kombination von Werten für Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde und Nanosekunde.
- {{jsxref("Temporal.PlainYearMonth")}}
  - : Stellt Jahr und Monat eines Kalenderdatums ohne Tag oder Zeitzone dar. Ein Beispiel ist ein Kalendereintrag, der den ganzen Monat dauert. Grundlage ist ein Datum nach ISO 8601 mit Feldern für Jahr, Monat und Tag sowie einem zugehörigen Kalendersystem. Der Tag dient dazu, Jahr und Monat in Nicht-ISO-Kalendersystemen eindeutig zu bestimmen.
- {{jsxref("Temporal.ZonedDateTime")}}
  - : Stellt ein Datum und eine Uhrzeit mit Zeitzone dar. Grundlage ist die Kombination aus einem [Zeitpunkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und einem Kalendersystem.
- `Temporal[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist die Zeichenfolge `"Temporal"`. Diese Eigenschaft wird von {{jsxref("Object.prototype.toString()")}} verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl.RelativeTimeFormat")}}
- {{jsxref("Intl.DurationFormat")}}
- [Temporal-Polyfill der Verantwortlichen für den Vorschlag](https://www.npmjs.com/package/@js-temporal/polyfill)
- [Temporal-Polyfill von FullCalendar](https://www.npmjs.com/package/temporal-polyfill)

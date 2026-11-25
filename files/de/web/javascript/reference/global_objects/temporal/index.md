---
title: Temporal
slug: Web/JavaScript/Reference/Global_Objects/Temporal
l10n:
  sourceCommit: 8cabac65af6de8faa8ef7af3389d4b6b601a4cb4
---

Das **`Temporal`**-Objekt ermöglicht die Verwaltung von Datum und Uhrzeit in verschiedenen Szenarien. Dazu gehören die integrierte Darstellung von Zeitzonen und Kalendersystemen, die Umrechnung von Ortszeiten, Berechnungen, Formatierung und vieles mehr. Es wurde als vollständiger Ersatz für das {{jsxref("Date")}}-Objekt entwickelt.

## Beschreibung

Anders als die meisten globalen Objekte ist `Temporal` kein Konstruktor. Sie können es weder mit dem [`new`-Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden noch das `Temporal`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Temporal` sind statisch (genau wie beim {{jsxref("Math")}}-Objekt).

`Temporal` verfügt über eine umfangreiche und leistungsfähige API. Mehrere Klassen stellen zusammen über 200 Hilfsmethoden bereit, sodass sie zunächst sehr komplex wirken kann. Im Folgenden erhalten Sie einen Überblick darüber, wie diese APIs zusammenhängen. Weitere Informationen finden Sie im Leitfaden [Datums- und Uhrzeitwerte darstellen](/de/docs/Web/JavaScript/Guide/Representing_dates_times) zum `Temporal`-Objekt sowie im [Temporal-Kochbuch](/de/docs/Web/JavaScript/Guide/Representing_dates_times/Cookbook) mit Codebeispielen für häufige Anwendungsfälle (einschließlich der Migration von `Date` zu `Temporal`).

### Hintergrund und Konzepte

JavaScript verfügt seit seinen Anfängen über das {{jsxref("Date")}}-Objekt zur Verarbeitung von Datum und Uhrzeit. Die `Date`-API basiert jedoch auf der unzureichend entworfenen Java-Klasse `java.util.Date`, die Anfang der 2010er-Jahre ersetzt wurde. Da JavaScript auf Abwärtskompatibilität ausgelegt ist, bleibt `Date` dennoch Teil der Sprache.

Die wichtigste Erkenntnis vorweg lautet: **Der Umgang mit Datumswerten ist komplex**. Viele Probleme von `Date` ließen sich durch zusätzliche Methoden beheben. Ein grundlegender Entwurfsfehler bleibt jedoch bestehen: Das Objekt stellt so viele Methoden bereit, dass Entwickler häufig unsicher sind, welche sie verwenden sollen. Das kann zu unerwarteten Problemen führen. Eine gut entworfene API muss nicht nur mehr leisten, sondern auf jeder Abstraktionsebene auch _weniger_ Zuständigkeiten haben. Fehlgebrauch zu verhindern ist ebenso wichtig wie Anwendungsfälle zu ermöglichen.

`Date`-Objekte erfüllen gleichzeitig zwei Funktionen:

- Als [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date): die Anzahl der Millisekunden oder Nanosekunden, die seit einem festen Zeitpunkt (der _Epoche_) vergangen sind.
- Als Kombination von [Komponenten](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_components_and_time_zones): Jahr, Monat, Tag, Stunde, Minute, Sekunde, Millisekunde und Nanosekunde. Die Angaben zu Jahr, Monat und Tag sind nur in Bezug auf ein _Kalendersystem_ sinnvoll. Zusammen mit einer Zeitzone entspricht die gesamte Kombination einem eindeutigen Zeitpunkt. `Date`-Objekte stellen Methoden zum Lesen und Ändern dieser Komponenten bereit.

[Zeitzonen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) sind die Ursache vieler Fehler im Umgang mit Datumswerten. Wenn Sie mit einem `Date` nach dem Modell der „Kombination von Komponenten“ arbeiten, kann die Uhrzeit nur in zwei Zeitzonen vorliegen: UTC und der lokalen Zeitzone des Geräts. Eine beliebige Zeitzone lässt sich nicht angeben. Ebenso fehlt das Konzept „ohne Zeitzone“: Bei Datumswerten spricht man von einem _Kalenderdatum_, bei Uhrzeiten von einer _Ortszeit_. Gemeint ist ein Wert, den Sie „von einem Kalender oder einer Uhr ablesen“. Wenn Sie beispielsweise einen täglichen Wecker stellen, soll er um „8:00 Uhr“ klingeln – unabhängig von der Sommerzeit oder davon, ob Sie in eine andere Zeitzone gereist sind.

Eine weitere Funktion, die `Date` fehlt, ist die Unterstützung für [Kalendersysteme](#kalender). Die meisten Menschen kennen den gregorianischen Kalender: Er kennt die beiden Epochen v. Chr. und n. Chr., hat 12 Monate mit unterschiedlich vielen Tagen und etwa alle vier Jahre ein Schaltjahr. Bei anderen Kalendersystemen, etwa dem hebräischen, chinesischen oder japanischen Kalender, gelten manche dieser Merkmale jedoch nicht. Mit `Date` können Sie nur nach dem Modell des gregorianischen Kalenders arbeiten.

`Date` hat weitere unerwünschte Altlasten: Alle Setter verändern das bestehende Objekt, was häufig unbeabsichtigte Nebeneffekte verursacht, und das [Datums-Uhrzeit-Zeichenfolgenformat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) lässt sich nicht einheitlich parsen. Die beste Lösung ist daher eine von Grund auf neue API: `Temporal`.

### Überblick über die API

`Temporal` ist ein Namensraum wie {{jsxref("Intl")}}. Er enthält mehrere Klassen und Namensräume, die jeweils für einen bestimmten Aspekt der Datums- und Zeitverwaltung vorgesehen sind. Die Klassen lassen sich wie folgt gruppieren:

- Darstellung einer Zeitdauer (der Differenz zwischen zwei Zeitpunkten): {{jsxref("Temporal.Duration")}}
- Darstellung eines Zeitpunkts:
  - Darstellung eines eindeutigen Zeitpunkts:
    - Als Zeitstempel: {{jsxref("Temporal.Instant")}}
    - Als Kombination von Datums- und Uhrzeitkomponenten mit einer Zeitzone: {{jsxref("Temporal.ZonedDateTime")}}
  - Darstellung eines Datums oder einer Uhrzeit ohne Zeitzone (alle entsprechenden Namen beginnen mit „Plain“):
    - Datum (Jahr, Monat, Tag) + Uhrzeit (Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde, Nanosekunde): {{jsxref("Temporal.PlainDateTime")}} (Hinweis: `ZonedDateTime` entspricht `PlainDateTime` mit einer zusätzlichen Zeitzone.)
      - Datum (Jahr, Monat, Tag): {{jsxref("Temporal.PlainDate")}}
        - Jahr, Monat: {{jsxref("Temporal.PlainYearMonth")}}
        - Monat, Tag: {{jsxref("Temporal.PlainMonthDay")}}
      - Uhrzeit (Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde, Nanosekunde): {{jsxref("Temporal.PlainTime")}}

Daneben gibt es den Hilfsnamensraum {{jsxref("Temporal.Now")}}. Er stellt Methoden bereit, mit denen Sie die aktuelle Zeit in verschiedenen Formaten abrufen können.

### Gemeinsame Schnittstelle der Klassen

Der `Temporal`-Namensraum enthält viele Klassen, die zahlreiche ähnliche Methoden besitzen. Die folgende Tabelle führt alle Methoden der einzelnen Klassen auf, mit Ausnahme der [Konvertierungsmethoden](#konvertierung-zwischen-klassen):

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

Die folgende Tabelle zeigt, welche Eigenschaften die einzelnen Klassen bereitstellen. So sehen Sie, welche Informationen eine Klasse darstellen kann.

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
<td colspan="7">Ausgangsklasse</td>
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
<tr><td rowspan="7">Zielklasse</td><th><code>Instant</code></th><td>/</td><td>{{jsxref("Temporal/ZonedDateTime/toInstant", "toInstant()")}}</td><td colspan="5">Zuerst in <code>ZonedDateTime</code> konvertieren</td></tr>
<tr><th><code>ZonedDateTime</code></th><td>{{jsxref("Temporal/Instant/toZonedDateTimeISO", "toZonedDateTimeISO()")}}</td><td>/</td><td>{{jsxref("Temporal/PlainDateTime/toZonedDateTime", "toZonedDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toZonedDateTime", "toZonedDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toZonedDateTime", "PlainDate#toZonedDateTime()")}} (als Argument übergeben)</td><td rowspan="2" colspan="2">Zuerst in <code>PlainDate</code> konvertieren</td></tr>
<tr><th><code>PlainDateTime</code></th><td rowspan="5">Zuerst in <code>ZonedDateTime</code> konvertieren</td><td>{{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "toPlainDateTime()")}}</td><td>/</td><td>{{jsxref("Temporal/PlainDate/toPlainDateTime", "toPlainDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toPlainDateTime", "PlainDate#toPlainDateTime()")}} (als Argument übergeben)</td></tr>
<tr><th><code>PlainDate</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainDate", "toPlainDate()")}}</td><td>/</td><td>Keine gemeinsamen Informationen</td><td>{{jsxref("Temporal/PlainYearMonth/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainMonthDay/toPlainDate", "toPlainDate()")}}</td></tr>
<tr><th><code>PlainTime</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainTime", "toPlainTime()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainTime", "toPlainTime()")}}</td><td>Keine gemeinsamen Informationen</td><td>/</td><td colspan="2">Keine gemeinsamen Informationen</td></tr>
<tr><th><code>PlainYearMonth</code></th><td rowspan="2" colspan="2">Zuerst in <code>PlainDate</code> konvertieren</td><td>{{jsxref("Temporal/PlainDate/toPlainYearMonth", "toPlainYearMonth()")}}</td><td rowspan="2">Keine gemeinsamen Informationen</td><td>/</td><td>Zuerst in <code>PlainDate</code> konvertieren</td></tr>
<tr><th><code>PlainMonthDay</code></th><td>{{jsxref("Temporal/PlainDate/toPlainMonthDay", "toPlainMonthDay()")}}</td><td>Zuerst in <code>PlainDate</code> konvertieren</td><td>/</td></tr>
</tbody>
</table>

Diese Tabellen geben Ihnen eine erste Orientierung innerhalb der `Temporal`-API.

### Kalender

Ein Kalender ordnet Tage, üblicherweise in Zeiträume wie Wochen, Monate, Jahre und Epochen. In weiten Teilen der Welt wird der gregorianische Kalender verwendet, doch insbesondere in religiösen und kulturellen Zusammenhängen sind viele andere Kalender gebräuchlich. Standardmäßig verwenden alle kalenderbezogenen `Temporal`-Objekte das Kalendersystem ISO 8601. Es basiert auf dem gregorianischen Kalender und definiert zusätzlich Regeln für die Wochennummerierung. [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) listet die meisten Kalender auf, die Browser voraussichtlich unterstützen. Der folgende Überblick über den Aufbau von Kalendersystemen soll Ihnen verdeutlichen, welche Merkmale sich zwischen Kalendern unterscheiden können.

Auf der Erde gibt es drei auffällige periodische Vorgänge: ihren Umlauf um die Sonne (365,242 Tage pro Umlauf), den Umlauf des Mondes um die Erde (29,53 Tage von Neumond zu Neumond) und die Drehung der Erde um ihre eigene Achse (24 Stunden von Sonnenaufgang zu Sonnenaufgang). Alle Kulturen kennen dieselbe Maßeinheit „Tag“ mit 24 Stunden. Gelegentliche Änderungen wie die Sommerzeit gehören nicht zum Kalender, sondern zu den Informationen einer [Zeitzone](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets).

- Manche Kalender legen ein Jahr im Mittel auf 365,242 Tage fest, indem sie Jahre mit 365 Tagen definieren und ungefähr alle vier Jahre einen zusätzlichen Tag, den _Schalttag_, einfügen. Das Jahr kann anschließend in Monate unterteilt werden. Solche Kalender heißen _Sonnenkalender_. Der gregorianische Kalender und der iranische Kalender (Solar Hijri) sind Sonnenkalender.
- Manche Kalender legen einen Monat im Mittel auf 29,5 Tage fest, indem sich Monate mit 29 und 30 Tagen abwechseln. Zwölf Monate können dann zu einem Jahr mit 354 Tagen zusammengefasst werden. Solche Kalender heißen _Mondkalender_. Der islamische Kalender ist ein Mondkalender. Da ein Mondjahr eine künstliche Einteilung ist und nicht mit dem Jahreszeitenzyklus übereinstimmt, sind reine Mondkalender eher selten.
- Bei manchen Kalendern richten sich die Monate ebenfalls hauptsächlich nach Mondzyklen. Um die Abweichung von elf Tagen gegenüber dem Sonnenjahr auszugleichen, wird ungefähr alle drei Jahre ein zusätzlicher Monat, der _Schaltmonat_, eingefügt. Solche Kalender heißen _lunisolare Kalender_. Der hebräische und der chinesische Kalender sind lunisolare Kalender.

In `Temporal` wird jedes Datum innerhalb eines Kalendersystems durch drei Komponenten eindeutig bestimmt: `year`, `month` und `day`. `year` ist üblicherweise eine positive ganze Zahl, kann aber auch null oder negativ sein und nimmt im Zeitverlauf monoton zu. Das Jahr `1` (oder `0`, falls vorhanden) bezeichnet den Beginn der Kalenderzählung; dieser wird für jeden Kalender willkürlich festgelegt. `month` ist eine positive ganze Zahl, die bei `1` beginnt, jedes Mal um 1 steigt und bei `date.monthsInYear` endet. Mit dem nächsten Jahr beginnt sie wieder bei `1`. Auch `day` ist eine positive ganze Zahl. Aufgrund politischer Änderungen können Tage jedoch übersprungen oder wiederholt werden; deshalb beginnt der Wert möglicherweise nicht bei 1 oder steigt nicht immer um 1. Im Allgemeinen nimmt `day` innerhalb eines Monats monoton zu und beginnt mit dem nächsten Monat wieder von vorn.

Neben `year` lässt sich ein Jahr in Kalendern mit Epochen auch durch die Kombination von `era` und `eraYear` eindeutig bestimmen. Der gregorianische Kalender verwendet beispielsweise die Epochen „CE“ (Common Era) und „BCE“ (Before Common Era). Das Jahr `-1` entspricht `{ era: "bce", eraYear: 2 }`. Beachten Sie, dass das Jahr `0` in allen Kalendern existiert; im gregorianischen Kalender entspricht es aufgrund der [astronomischen Jahreszählung](https://en.wikipedia.org/wiki/Astronomical_year_numbering) dem Jahr 1 v. Chr. `era` ist eine kleingeschriebene Zeichenfolge. `eraYear` ist eine beliebige ganze Zahl, die null oder negativ sein oder im Zeitverlauf sogar abnehmen kann (üblicherweise bei der ältesten Epoche).

> [!NOTE]
> Verwenden Sie `era` und `eraYear` immer zusammen; verwenden Sie nicht eine der Eigenschaften ohne die andere. Um Widersprüche zu vermeiden, sollten Sie bei der Angabe eines Jahres außerdem `year` nicht mit `era`/`eraYear` kombinieren. Entscheiden Sie sich für eine Darstellung und verwenden Sie sie durchgängig.
>
> Vermeiden Sie die folgenden falschen Annahmen über Jahre:
>
> - Gehen Sie nicht davon aus, dass `era` und `eraYear` immer vorhanden sind; sie können `undefined` sein.
> - Gehen Sie nicht davon aus, dass `era` eine benutzerfreundliche Zeichenfolge ist. Verwenden Sie stattdessen `toLocaleString()`, um das Datum zu formatieren.
> - Gehen Sie nicht davon aus, dass sich zwei `year`-Werte aus unterschiedlichen Kalendern direkt vergleichen lassen. Verwenden Sie stattdessen die statische Methode `compare()`.
> - Gehen Sie nicht davon aus, dass Jahre 365 oder 366 Tage und 12 Monate haben. Verwenden Sie stattdessen `daysInYear` und `monthsInYear`.
> - Gehen Sie nicht davon aus, dass Schaltjahre (`inLeapYear` ist `true`) einen zusätzlichen Tag haben; sie können stattdessen einen zusätzlichen Monat haben.

Neben `month` kann auch `monthCode` einen Monat innerhalb eines Jahres eindeutig bestimmen. `monthCode` entspricht üblicherweise dem Monatsnamen, `month` dagegen nicht. Bei lunisolaren Kalendern haben beispielsweise zwei Monate mit demselben `monthCode` unterschiedliche `month`-Werte, wenn der eine zu einem Schaltjahr gehört und der andere nicht und beide nach dem Schaltmonat liegen. Der Grund dafür ist der zusätzlich eingefügte Monat.

> [!NOTE]
> Um Widersprüche zu vermeiden, sollten Sie `month` und `monthCode` bei der Angabe eines Monats nicht kombinieren. Entscheiden Sie sich für eine Darstellung und verwenden Sie sie durchgängig. `month` ist nützlicher, wenn Sie die Reihenfolge der Monate innerhalb eines Jahres benötigen (etwa beim Durchlaufen der Monate). `monthCode` ist nützlicher, wenn Sie den Namen eines Monats benötigen (etwa beim Speichern von Geburtstagen).
>
> Vermeiden Sie die folgenden falschen Annahmen über Monate:
>
> - Gehen Sie nicht davon aus, dass `monthCode` und `month` immer einander entsprechen.
> - Gehen Sie nicht von einer festen Anzahl von Tagen pro Monat aus. Verwenden Sie stattdessen `daysInMonth`.
> - Gehen Sie nicht davon aus, dass `monthCode` eine benutzerfreundliche Zeichenfolge ist. Verwenden Sie stattdessen `toLocaleString()`, um das Datum zu formatieren.
> - Speichern Sie Monatsnamen grundsätzlich nicht in einem Array oder Objekt zwischen. Obwohl `monthCode` innerhalb eines Kalenders üblicherweise einem Monatsnamen entspricht, empfehlen wir, den Namen immer neu zu ermitteln, beispielsweise mit `date.toLocaleString("en-US", { calendar: date.calendarId, month: "long" })`.

Neben `day` (einem Index innerhalb des Monats) kann auch `dayOfYear` einen Tag innerhalb eines Jahres eindeutig bestimmen. `dayOfYear` ist eine positive ganze Zahl, die bei `1` beginnt, jedes Mal um 1 steigt und bei `date.daysInYear` endet.

Das Konzept einer „Woche“ ist nicht mit einem astronomischen Vorgang verbunden, sondern eine kulturelle Festlegung. Am häufigsten umfasst eine Woche `7` Tage. Sie kann aber auch 4, 5, 6, 8 oder mehr Tage haben – oder überhaupt keine feste Anzahl von Tagen. Die Anzahl der Tage der Woche, in die ein bestimmtes Datum fällt, erhalten Sie über dessen Eigenschaft `daysInWeek`. `Temporal` bestimmt Wochen durch die Kombination von `weekOfYear` und `yearOfWeek`. `weekOfYear` ist eine positive ganze Zahl, die bei `1` beginnt und jeweils um 1 steigt. Beim Wechsel zum nächsten Jahr beginnt die Zählung wieder bei `1`. `yearOfWeek` entspricht im Allgemeinen `year`, kann aber am Anfang oder Ende eines Jahres davon abweichen: Eine Woche kann sich über zwei Jahre erstrecken, und `yearOfWeek` ordnet sie nach den Regeln des Kalenders einem der beiden Jahre zu.

> [!NOTE]
> Verwenden Sie `weekOfYear` und `yearOfWeek` immer zusammen; kombinieren Sie `weekOfYear` nicht mit `year`.
>
> Vermeiden Sie die folgenden falschen Annahmen über Wochen:
>
> - Gehen Sie nicht davon aus, dass `weekOfYear` und `yearOfWeek` immer vorhanden sind; sie können `undefined` sein.
> - Gehen Sie nicht davon aus, dass Wochen immer 7 Tage haben. Verwenden Sie stattdessen `daysInWeek`.
> - Beachten Sie, dass die aktuelle `Temporal`-API keine Jahr-Woche-Datumsangaben unterstützt. Sie können mit diesen Eigenschaften daher weder Datumswerte erstellen noch Datumswerte in einer Jahr-Woche-Darstellung serialisieren. Die Eigenschaften dienen ausschließlich zur Information.

### RFC-9557-Format

Alle `Temporal`-Klassen können mit dem in [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) festgelegten Format serialisiert und deserialisiert werden. Es basiert auf [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339). In seiner vollständigen Form sieht das Format wie folgt aus (die Leerzeichen dienen nur der Lesbarkeit und dürfen in der tatsächlichen Zeichenfolge nicht vorkommen):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

Die Klassen stellen unterschiedliche Anforderungen daran, welche Komponenten vorhanden sein müssen. In der Dokumentation jeder Klasse finden Sie deshalb einen Abschnitt mit dem Titel „RFC-9557-Format“, der das von der jeweiligen Klasse erkannte Format beschreibt.

Das Format ähnelt stark dem [Datums-Uhrzeit-Zeichenfolgenformat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) von {{jsxref("Date")}}, das ebenfalls auf ISO 8601 basiert. Die wichtigsten Ergänzungen sind die Möglichkeit, Mikro- und Nanosekundenkomponenten sowie die Zeitzone und das Kalendersystem anzugeben.

### Darstellbare Datumswerte

Alle `Temporal`-Objekte, die ein bestimmtes Kalenderdatum darstellen, begrenzen den Bereich darstellbarer Datumswerte auf ähnliche Weise: auf ±10<sup>8</sup> Tage (einschließlich der Grenzwerte) relativ zur Unix-Epoche beziehungsweise auf den Zeitraum zwischen `-271821-04-20T00:00:00` und `+275760-09-13T00:00:00`. Dies ist derselbe Bereich wie für [gültige Datumswerte](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). Im Einzelnen gilt:

- {{jsxref("Temporal.Instant")}} und {{jsxref("Temporal.ZonedDateTime")}} wenden diese Grenze direkt auf ihren `epochNanoseconds`-Wert an.
- {{jsxref("Temporal.PlainDateTime")}} interpretiert Datum und Uhrzeit in der Zeitzone UTC und verlangt, dass sie weniger als 10<sup>8</sup> + 1 Tage von der Unix-Epoche entfernt sind (die Grenzwerte sind ausgeschlossen). Der gültige Bereich reicht daher von `-271821-04-19T00:00:00` bis `+275760-09-14T00:00:00`, jeweils ausschließlich. Dadurch lässt sich jedes `ZonedDateTime` unabhängig von seinem Offset in ein `PlainDateTime` konvertieren.
- {{jsxref("Temporal.PlainDate")}} führt dieselbe Prüfung wie `PlainDateTime` für die Mittagszeit (`12:00:00`) des betreffenden Datums durch. Der gültige Bereich reicht deshalb von `-271821-04-19` bis `+275760-09-13`. Dadurch lässt sich jedes `PlainDateTime` unabhängig von seiner Uhrzeit in ein `PlainDate` konvertieren und umgekehrt.
- {{jsxref("Temporal.PlainYearMonth")}} hat den gültigen Bereich von `-271821-04` bis `+275760-09`. Dadurch lässt sich jedes `PlainDate` unabhängig von seinem Tag in ein `PlainYearMonth` konvertieren (außer wenn der erste Tag eines Monats in einem Nicht-ISO-Kalender in den ISO-Monat `-271821-03` fällt).

`Temporal`-Objekte verweigern die Erstellung einer Instanz, die ein Datum oder eine Uhrzeit außerhalb dieser Grenzen darstellt. Das gilt unter anderem für:

- die Verwendung des Konstruktors oder der statischen Methode `from()`;
- die Verwendung von `with()` zum Aktualisieren von Kalenderfeldern;
- die Verwendung von `add()`, `subtract()`, `round()` oder einer anderen Methode zum Ableiten neuer Instanzen.

## Statische Eigenschaften

- {{jsxref("Temporal.Duration")}}
  - : Stellt die Differenz zwischen zwei Zeitpunkten dar und kann für Datums- und Uhrzeitberechnungen verwendet werden. Die grundlegende Darstellung ist eine Kombination von Werten für Jahre, Monate, Wochen, Tage, Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden und Nanosekunden.
- {{jsxref("Temporal.Instant")}}
  - : Stellt einen eindeutigen Zeitpunkt mit Nanosekundengenauigkeit dar. Die grundlegende Darstellung ist die Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC), ohne Zeitzone oder Kalendersystem.
- {{jsxref("Temporal.Now")}}
  - : Stellt Methoden bereit, mit denen Sie die aktuelle Zeit in verschiedenen Formaten abrufen können.
- {{jsxref("Temporal.PlainDate")}}
  - : Stellt ein Kalenderdatum dar (ein Datum ohne Uhrzeit oder Zeitzone), beispielsweise einen Kalendereintrag, der unabhängig von der Zeitzone den ganzen Tag dauert. Die grundlegende Darstellung ist ein ISO-8601-Kalenderdatum mit Feldern für Jahr, Monat und Tag sowie einem zugehörigen Kalendersystem.
- {{jsxref("Temporal.PlainDateTime")}}
  - : Stellt ein Datum (Kalenderdatum) und eine Uhrzeit (Ortszeit) ohne Zeitzone dar. Die grundlegende Darstellung ist eine Kombination aus einem [Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate) (mit zugehörigem Kalendersystem) und einer [Uhrzeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime).
- {{jsxref("Temporal.PlainMonthDay")}}
  - : Stellt den Monat und den Tag eines Kalenderdatums ohne Jahr oder Zeitzone dar, beispielsweise einen jährlich wiederkehrenden Kalendereintrag, der den ganzen Tag dauert. Die grundlegende Darstellung ist ein ISO-8601-Kalenderdatum mit Feldern für Jahr, Monat und Tag sowie einem zugehörigen Kalendersystem. Das Jahr dient dazu, Monat und Tag in Nicht-ISO-Kalendersystemen eindeutig zu bestimmen.
- {{jsxref("Temporal.PlainTime")}}
  - : Stellt eine Uhrzeit ohne Datum oder Zeitzone dar, beispielsweise ein wiederkehrendes Ereignis, das jeden Tag zur selben Uhrzeit stattfindet. Die grundlegende Darstellung ist eine Kombination von Werten für Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden und Nanosekunden.
- {{jsxref("Temporal.PlainYearMonth")}}
  - : Stellt das Jahr und den Monat eines Kalenderdatums ohne Tag oder Zeitzone dar, beispielsweise einen Kalendereintrag, der einen ganzen Monat dauert. Die grundlegende Darstellung ist ein ISO-8601-Kalenderdatum mit Feldern für Jahr, Monat und Tag sowie einem zugehörigen Kalendersystem. Der Tag dient dazu, Jahr und Monat in Nicht-ISO-Kalendersystemen eindeutig zu bestimmen.
- {{jsxref("Temporal.ZonedDateTime")}}
  - : Stellt ein Datum und eine Uhrzeit mit Zeitzone dar. Die grundlegende Darstellung ist eine Kombination aus einem [Zeitpunkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und einem Kalendersystem.
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

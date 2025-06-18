---
title: Temporal
slug: Web/JavaScript/Reference/Global_Objects/Temporal
l10n:
  sourceCommit: 4f1cf384a41cfeec89160dc238f1c8037bc502db
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal`** Objekt ermöglicht die Verwaltung von Datum und Uhrzeit in verschiedenen Szenarien, einschließlich der integrierten Zeitzonen- und Kalenderdarstellung, Wanduhren-Zeitumwandlungen, Arithmetik, Formatierungen und mehr. Es wurde als vollständiger Ersatz für das {{jsxref("Date")}} Objekt entworfen.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Temporal` kein Konstruktor. Sie können es nicht mit dem [`new`-Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `Temporal` Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Temporal` sind statisch (genauso wie das {{jsxref("Math")}} Objekt).

`Temporal` verfügt über eine komplexe und leistungsfähige API. Es stellt über 200 Hilfsmethoden über mehrere Klassen zur Verfügung, was zunächst sehr komplex erscheinen kann. Wir bieten Ihnen einen Überblick darüber, wie diese APIs zueinander in Beziehung stehen.

### Hintergrund und Konzepte

JavaScript verfügt seit seinen Anfängen über das {{jsxref("Date")}} Objekt zur Handhabung von Datum und Uhrzeit. Allerdings basiert die `Date` API auf der schlecht entworfenen `java.util.Date` Klasse aus Java, die in den frühen 2010er Jahren ersetzt wurde. Aufgrund des Ziels von JavaScript, die Rückwärtskompatibilität zu wahren, bleibt `Date` weiterhin in der Sprache bestehen.

Die wichtige Lektion, die der gesamten Einführung vorangestellt werden muss, ist, dass **das Arbeiten mit Daten komplex ist**. Die meisten Probleme von `Date` lassen sich durch das Hinzufügen weiterer Methoden beheben, aber ein grundlegender Designfehler bleibt: Es werden so viele Methoden auf demselben Objekt bereitgestellt, dass Entwickler oft verwirrt darüber sind, was sie verwenden sollen, was zu unerwarteten Fallstricken führt. Eine gut gestaltete API sollte nicht nur mehr können, sondern auch _weniger_ auf jeder Abstraktionsebene tun, denn die Vermeidung von Missbrauch ist genauso wichtig wie die Ermöglichung von Anwendungsfällen.

`Date` Objekte tragen gleichzeitig zwei "Hüte":

- Als [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date): die Anzahl der Millisekunden oder Nanosekunden, die seit einem festen Zeitpunkt (bekannt als _Epoch_) vergangen sind.
- Als Kombination von [Komponenten](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_components_and_time_zones): Jahr, Monat, Tag, Stunde, Minute, Sekunde, Millisekunde und Nanosekunde. Die Identifikatoren für Jahr, Monat und Tag machen nur im Zusammenhang mit einem _Kalendersystem_ Sinn. Die gesamte Kombination entspricht einem einzigartigen Moment in der Geschichte, wenn sie mit einer Zeitzone verbunden ist. `Date` Objekte bieten Methoden zum Lesen und Ändern dieser Komponenten.

[Zeitzonen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) sind die Ursache einer Vielzahl von datumsbezogenen Fehlern. Bei der Interaktion mit einem `Date` über das "Kombination der Komponenten"-Modell kann die Zeit nur in zwei Zeitzonen vorhanden sein: UTC und lokal (auf dem Gerät) und es gibt keine Möglichkeit, eine beliebige Zeitzone anzugeben. Außerdem fehlt das Konzept von "keine Zeitzone": Dies wird als _Kalenderdatum_ (für Daten) oder _Wanduhrzeit_ (für Zeiten) bezeichnet, was eine Zeit ist, die Sie "von einem Kalender oder einer Uhr ablesen". Zum Beispiel, wenn Sie einen täglichen Wecker stellen, möchten Sie ihn auf "8:00 AM" stellen, unabhängig davon, ob es sich um Sommerzeit handelt oder nicht, ob Sie in eine andere Zeitzone gereist sind usw.

Ein weiteres Merkmal, das `Date` fehlt, ist ein [Kalendersystem](#kalender). Die meisten Menschen sind mit dem Gregorianischen Kalender vertraut, in dem es zwei Epochen gibt, BC und AD; es gibt 12 Monate; jeder Monat hat eine unterschiedliche Anzahl von Tagen; es gibt ein Schaltjahr alle 4 Jahre; usw. Allerdings gelten einige dieser Konzepte möglicherweise nicht, wenn Sie mit einem anderen Kalendersystem arbeiten, wie dem Hebräischen Kalender, dem Chinesischen Kalender, dem Japanischen Kalender usw. Mit `Date` können Sie nur mit dem Gregorianischen Kalender arbeiten.

Es gibt viele andere unerwünschte Altlasten bei `Date`, wie zum Beispiel, dass alle Setter mutierend sind (was oft unerwünschte Nebeneffekte verursacht), das [Datums-Zeit-Zeichenfolgenformat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) sich nicht konsistent parsen lässt usw. Letztendlich ist die beste Lösung, eine neue API von Grund auf zu entwickeln, was `Temporal` ist.

### API-Übersicht

`Temporal` ist ein Namensraum, ähnlich wie {{jsxref("Intl")}}. Es enthält mehrere Klassen und Namensräume, von denen jeder speziell für einen bestimmten Aspekt der Datums- und Zeitverwaltung entwickelt wurde. Die Klassen können wie folgt gruppiert werden:

- Darstellung einer Zeitdauer (ein Unterschied zwischen zwei Zeitpunkten): {{jsxref("Temporal.Duration")}}
- Darstellung eines Zeitpunkts:
  - Darstellung eines einzigartigen Moments in der Geschichte:
    - Als Zeitstempel: {{jsxref("Temporal.Instant")}}
    - Als Kombination von Datums- und Zeitkomponenten, gepaart mit einer Zeitzone: {{jsxref("Temporal.ZonedDateTime")}}
  - Darstellung einer nicht zeitzonenbezogenen Zeit (alle mit "Plain" vorangestellt):
    - Datum (Jahr, Monat, Tag) + Zeit (Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde, Nanosekunde): {{jsxref("Temporal.PlainDateTime")}} (Hinweis: `ZonedDateTime` ist äquivalent zu `PlainDateTime` plus einer Zeitzone)
      - Datum (Jahr, Monat, Tag): {{jsxref("Temporal.PlainDate")}}
        - Jahr, Monat: {{jsxref("Temporal.PlainYearMonth")}}
        - Monat, Tag: {{jsxref("Temporal.PlainMonthDay")}}
      - Zeit (Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde, Nanosekunde): {{jsxref("Temporal.PlainTime")}}

Darüber hinaus gibt es auch einen weiteren Dienstprogramm-Namensraum, {{jsxref("Temporal.Now")}}, der Methoden zum Abrufen der aktuellen Zeit in verschiedenen Formaten bietet.

### Gemeinsame Klassenoberfläche

Es gibt viele Klassen im `Temporal`-Namensraum, aber sie teilen viele ähnliche Methoden. Die folgende Tabelle listet alle Methoden jeder Klasse auf (außer [Konvertierungsmethoden](#konvertierung_zwischen_klassen)):

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
<th>Aktualisierer</th>
<td>N/A</td>
<td>{{jsxref("Temporal/ZonedDateTime/with", "with()")}}<br>{{jsxref("Temporal/ZonedDateTime/withCalendar", "withCalendar()")}}<br>{{jsxref("Temporal/ZonedDateTime/withTimeZone", "withTimeZone()")}}<br>{{jsxref("Temporal/ZonedDateTime/withPlainTime", "withPlainTime()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/with", "with()")}}<br>{{jsxref("Temporal/PlainDateTime/withCalendar", "withCalendar()")}}<br>{{jsxref("Temporal/PlainDateTime/withPlainTime", "withPlainTime()")}}</td>
<td>{{jsxref("Temporal/PlainDate/with", "with()")}}<br>{{jsxref("Temporal/PlainDate/withCalendar", "withCalendar()")}}</td>
<td>{{jsxref("Temporal/PlainTime/with", "with()")}}</td>
<td>{{jsxref("Temporal/PlainYearMonth/with", "with()")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/with", "with()")}}</td>
</tr>
<tr>
<th>Arithmetik</th>
<td>{{jsxref("Temporal/Instant/add", "add()")}}<br>{{jsxref("Temporal/Instant/subtract", "subtract()")}}<br>{{jsxref("Temporal/Instant/since", "since()")}}<br>{{jsxref("Temporal/Instant/until", "until()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/add", "add()")}}<br>{{jsxref("Temporal/ZonedDateTime/subtract", "subtract()")}}<br>{{jsxref("Temporal/ZonedDateTime/since", "since()")}}<br>{{jsxref("Temporal/ZonedDateTime/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/add", "add()")}}<br>{{jsxref("Temporal/PlainDateTime/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainDateTime/since", "since()")}}<br>{{jsxref("Temporal/PlainDateTime/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainDate/add", "add()")}}<br>{{jsxref("Temporal/PlainDate/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainDate/since", "since()")}}<br>{{jsxref("Temporal/PlainDate/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainTime/add", "add()")}}<br>{{jsxref("Temporal/PlainTime/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainTime/since", "since()")}}<br>{{jsxref("Temporal/PlainTime/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainYearMonth/add", "add()")}}<br>{{jsxref("Temporal/PlainYearMonth/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainYearMonth/since", "since()")}}<br>{{jsxref("Temporal/PlainYearMonth/until", "until()")}}</td>
<td>N/A</td>
</tr>
<tr>
<th>Rundung</th>
<td>{{jsxref("Temporal/Instant/round", "round()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/round", "round()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/round", "round()")}}</td>
<td>N/A</td>
<td>{{jsxref("Temporal/PlainTime/round", "round()")}}</td>
<td>N/A</td>
<td>N/A</td>
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

Die folgende Tabelle fasst zusammen, welche Eigenschaften in jeder Klasse verfügbar sind und gibt Ihnen einen Eindruck davon, welche Informationen jede Klasse darstellen kann.

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
<td>N/A</td>
<td>{{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/calendarId", "calendarId")}}</td>
<td>{{jsxref("Temporal/PlainDate/calendarId", "calendarId")}}</td>
<td>N/A</td>
<td>{{jsxref("Temporal/PlainYearMonth/calendarId", "calendarId")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/calendarId", "calendarId")}}</td>
</tr>
<tr>
<th>Jahrbezogen</th>
<td>N/A</td>
<td>{{jsxref("Temporal/ZonedDateTime/era", "era")}}<br>{{jsxref("Temporal/ZonedDateTime/eraYear", "eraYear")}}<br>{{jsxref("Temporal/ZonedDateTime/year", "year")}}<br>{{jsxref("Temporal/ZonedDateTime/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/era", "era")}}<br>{{jsxref("Temporal/PlainDateTime/eraYear", "eraYear")}}<br>{{jsxref("Temporal/PlainDateTime/year", "year")}}<br>{{jsxref("Temporal/PlainDateTime/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/PlainDateTime/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/PlainDateTime/daysInYear", "daysInYear")}}</td>
<td>{{jsxref("Temporal/PlainDate/era", "era")}}<br>{{jsxref("Temporal/PlainDate/eraYear", "eraYear")}}<br>{{jsxref("Temporal/PlainDate/year", "year")}}<br>{{jsxref("Temporal/PlainDate/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/PlainDate/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/PlainDate/daysInYear", "daysInYear")}}</td>
<td>N/A</td>
<td>{{jsxref("Temporal/PlainYearMonth/era", "era")}}<br>{{jsxref("Temporal/PlainYearMonth/eraYear", "eraYear")}}<br>{{jsxref("Temporal/PlainYearMonth/year", "year")}}<br>{{jsxref("Temporal/PlainYearMonth/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/PlainYearMonth/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/PlainYearMonth/daysInYear", "daysInYear")}}</td>
<td>N/A</td>
</tr>
<tr>
<th>Monatsbezogen</th>
<td>N/A</td>
<td>{{jsxref("Temporal/ZonedDateTime/month", "month")}}<br>{{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/month", "month")}}<br>{{jsxref("Temporal/PlainDateTime/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainDateTime/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainDate/month", "month")}}<br>{{jsxref("Temporal/PlainDate/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainDate/daysInMonth", "daysInMonth")}}</td>
<td>N/A</td>
<td>{{jsxref("Temporal/PlainYearMonth/month", "month")}}<br>{{jsxref("Temporal/PlainYearMonth/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainYearMonth/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/monthCode", "monthCode")}}</td>
</tr>
<tr>
<th>Wochenbezogen</th>
<td>N/A</td>
<td>{{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/PlainDateTime/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/PlainDateTime/daysInWeek", "daysInWeek")}}</td>
<td>{{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/PlainDate/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/PlainDate/daysInWeek", "daysInWeek")}}</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<th>Tagesbezogen</th>
<td>N/A</td>
<td>{{jsxref("Temporal/ZonedDateTime/day", "day")}}<br>{{jsxref("Temporal/ZonedDateTime/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/ZonedDateTime/dayOfYear", "dayOfYear")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/day", "day")}}<br>{{jsxref("Temporal/PlainDateTime/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/PlainDateTime/dayOfYear", "dayOfYear")}}</td>
<td>{{jsxref("Temporal/PlainDate/day", "day")}}<br>{{jsxref("Temporal/PlainDate/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/PlainDate/dayOfYear", "dayOfYear")}}</td>
<td>N/A</td>
<td>N/A</td>
<td>{{jsxref("Temporal/PlainMonthDay/day", "day")}}</td>
</tr>
<tr>
<th>Zeitkomponenten</th>
<td>N/A</td>
<td>{{jsxref("Temporal/ZonedDateTime/hour", "hour")}}<br>{{jsxref("Temporal/ZonedDateTime/minute", "minute")}}<br>{{jsxref("Temporal/ZonedDateTime/second", "second")}}<br>{{jsxref("Temporal/ZonedDateTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/ZonedDateTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/ZonedDateTime/nanosecond", "nanosecond")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/hour", "hour")}}<br>{{jsxref("Temporal/PlainDateTime/minute", "minute")}}<br>{{jsxref("Temporal/PlainDateTime/second", "second")}}<br>{{jsxref("Temporal/PlainDateTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/PlainDateTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/PlainDateTime/nanosecond", "nanosecond")}}</td>
<td>N/A</td>
<td>{{jsxref("Temporal/PlainTime/hour", "hour")}}<br>{{jsxref("Temporal/PlainTime/minute", "minute")}}<br>{{jsxref("Temporal/PlainTime/second", "second")}}<br>{{jsxref("Temporal/PlainTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/PlainTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/PlainTime/nanosecond", "nanosecond")}}</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<th>Zeitzone</th>
<td>N/A</td>
<td>{{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}}<br>{{jsxref("Temporal/ZonedDateTime/offset", "offset")}}<br>{{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "offsetNanoseconds")}}<br>{{jsxref("Temporal/ZonedDateTime/hoursInDay", "hoursInDay")}}<br>{{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "getTimeZoneTransition()")}}<br>{{jsxref("Temporal/ZonedDateTime/startOfDay", "startOfDay()")}}</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<th>Epoch-Zeit</th>
<td>{{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}}<br>{{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "epochMilliseconds")}}<br>{{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}}</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

### Konvertierung zwischen Klassen

Die folgende Tabelle fasst alle Konvertierungsmethoden zusammen, die in jeder Klasse existieren.

<table>
<tbody>
<tr>
<td rowspan="2" colspan="2"></td>
<td colspan="7">Wie zu konvertieren von...</td>
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
<tr><td rowspan="7">zu...</td><th><code>Instant</code></th><td>/</td><td>{{jsxref("Temporal/ZonedDateTime/toInstant", "toInstant()")}}</td><td colspan="5">Zuerst in <code>ZonedDateTime</code> konvertieren</td></tr>
<tr><th><code>ZonedDateTime</code></th><td>{{jsxref("Temporal/Instant/toZonedDateTimeISO", "toZonedDateTimeISO()")}}</td><td>/</td><td>{{jsxref("Temporal/PlainDateTime/toZonedDateTime", "toZonedDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toZonedDateTime", "toZonedDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toZonedDateTime", "PlainDate#toZonedDateTime()")}} (als Argument übergeben)</td><td rowspan="2" colspan="2">Zuerst in <code>PlainDate</code> konvertieren</td></tr>
<tr><th><code>PlainDateTime</code></th><td rowspan="5">Zuerst in <code>ZonedDateTime</code> konvertieren</td><td>{{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "toPlainDateTime()")}}</td><td>/</td><td>{{jsxref("Temporal/PlainDate/toPlainDateTime", "toPlainDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toPlainDateTime", "PlainDate#toPlainDateTime()")}} (als Argument übergeben)</td></tr>
<tr><th><code>PlainDate</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainDate", "toPlainDate()")}}</td><td>/</td><td>Keine Informationsüberschneidung</td><td>{{jsxref("Temporal/PlainYearMonth/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainMonthDay/toPlainDate", "toPlainDate()")}}</td></tr>
<tr><th><code>PlainTime</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainTime", "toPlainTime()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainTime", "toPlainTime()")}}</td><td>Keine Informationsüberschneidung</td><td>/</td><td colspan="2">Keine Informationsüberschneidung</td></tr>
<tr><th><code>PlainYearMonth</code></th><td rowspan="2" colspan="2">Zuerst in <code>PlainDate</code> konvertieren</td><td>{{jsxref("Temporal/PlainDate/toPlainYearMonth", "toPlainYearMonth()")}}</td><td rowspan="2">Keine Informationsüberschneidung</td><td>/</td><td>Zuerst in <code>PlainDate</code> konvertieren</td></tr>
<tr><th><code>PlainMonthDay</code></th><td>{{jsxref("Temporal/PlainDate/toPlainMonthDay", "toPlainMonthDay()")}}</td><td>Zuerst in <code>PlainDate</code> konvertieren</td><td>/</td></tr>
</tbody>
</table>

Mit diesen Tabellen sollten Sie eine grundlegende Vorstellung davon bekommen, wie Sie in der `Temporal` API navigieren können.

### Kalender

Ein Kalender ist eine Methode, Tage zu organisieren, typischerweise in Perioden von Wochen, Monaten, Jahren und Epochen. Der größte Teil der Welt verwendet den Gregorianischen Kalender, aber es gibt viele andere Kalender, die besonders in religiösen und kulturellen Kontexten genutzt werden. Standardmäßig verwenden alle kalenderbewussten `Temporal` Objekte das ISO 8601 Kalendersystem, das auf dem Gregorianischen Kalender basiert und zusätzliche Wochen-Nummerierungsregeln definiert. [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) listet die meisten Kalender auf, die wahrscheinlich von Browsern unterstützt werden. Hier geben wir einen kurzen Überblick darüber, wie Kalendersysteme aufgebaut sind, um Ihnen zu helfen, die Faktoren zu verstehen, die zwischen Kalendern variieren können.

Es gibt drei prominente periodische Ereignisse auf der Erde: ihre Drehung um die Sonne (365,242 Tage für eine Revolution), die Drehung des Mondes um die Erde (29,53 Tage von Neumond zu Neumond) und ihre Drehung um ihre Achse (24 Stunden von Sonnenaufgang zu Sonnenaufgang). Jede Kultur hat das gleiche Maß eines „Tages“, das 24 Stunden beträgt. Gelegentliche Änderungen, wie die Sommerzeit, sind kein Teil des Kalenders, sondern Teil der Informationen der [Zeitzone](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets).

- Einige Kalender definieren hauptsächlich ein Jahr im Durchschnitt mit 365,242 Tagen, indem Jahre mit 365 Tagen festgelegt werden und etwa alle 4 Jahre ein zusätzlicher Tag, der _Schalttag_, hinzugefügt wird. Dann kann das Jahr weiter in Teile namens Monate unterteilt werden. Diese Kalender werden _Sonnenkalender_ genannt. Der Gregorianische Kalender und der Solar-Hijri-Kalender sind Sonnenkalender.
- Einige Kalender definieren primär einen Monat im Durchschnitt mit 29,5 Tagen, indem Monate abwechselnd 29 und 30 Tage haben. Dann können 12 Monate in ein Jahr von 354 Tagen gruppiert werden. Diese Kalender werden _Mondkalender_ genannt. Der Islamische Kalender ist ein Mondkalender. Da ein Mondjahr künstlich ist und nicht mit dem Jahreszeitenzyklus korreliert, sind Mondkalender im Allgemeinen seltener.
- Einige Kalender definieren Monate auch primär basierend auf Mondzyklen, ähnlich den Mondkalendern. Dann wird zur Kompensation der 11-tägigen Diskrepanz mit dem Sonnenjahr etwa alle 3 Jahre ein zusätzlicher Monat, der _Schaltmonat_, hinzugefügt. Diese Kalender werden _lunisolare Kalender_ genannt. Der Hebräische und der Chinesische Kalender sind lunisolare Kalender.

In `Temporal` wird jedes Datum unter einem Kalendersystem eindeutig durch drei Komponenten identifiziert: `year`, `month` und `day`. Während `year` typischerweise eine positive Ganzzahl ist, kann es auch null oder negativ sein und monoton mit der Zeit zunehmen. Das Jahr `1` (oder `0`, wenn es existiert) ist als Kalenderepoch bekannt und für jeden Kalender willkürlich. `month` ist eine positive Ganzzahl, die sich jedes Mal um 1 erhöht und bei `1` beginnt und bei `date.monthsInYear` endet, dann wieder auf `1` zurückgesetzt wird, wenn das Jahr fortschreitet. `day` ist auch eine positive Ganzzahl, beginnt jedoch möglicherweise nicht bei 1 oder erhöht sich jedes Mal um 1, da politische Änderungen dazu führen können, dass Tage übersprungen oder wiederholt werden. Im Allgemeinen erhöht sich `day` jedoch monoton und wird zurückgesetzt, wenn der Monat fortschreitet.

Zusätzlich zu `year` kann ein Jahr auch eindeutig durch die Kombination aus `era` und `eraYear` identifiziert werden, für Kalender, die Epochen verwenden. Beispielsweise verwendet der Gregorianische Kalender die Epoche "CE" (Common Era) und "BCE" (Before Common Era), und das Jahr `-1` entspricht dem Jahr `{ era: "bce", eraYear: 2 }` (beachten Sie, dass Jahr `0` immer für alle Kalender existiert; beim Gregorianischen Kalender entspricht es 1 BCE aufgrund [astronomischer Jahreszählung](https://en.wikipedia.org/wiki/Astronomical_year_numbering)). `era` ist eine Kleinbuchstaben-Zeichenfolge und `eraYear` ist eine willkürliche ganze Zahl, die null oder negativ sein kann oder sogar mit der Zeit abnehmen kann (gewöhnlich für die älteste Epoche).

> [!NOTE]
> Verwenden Sie immer `era` und `eraYear` als Paar; verwenden Sie keine Eigenschaft ohne die andere. Um Konflikte zu vermeiden, kombinieren Sie nicht `year` und `era`/`eraYear` beim Bestimmen eines Jahres. Wählen Sie eine Jahresdarstellung und verwenden Sie sie konsequent.
>
> Seien Sie vorsichtig mit den folgenden falschen Annahmen über Jahre:
>
> - Gehen Sie nicht davon aus, dass `era` und `eraYear` immer vorhanden sind; sie können `undefined` sein.
> - Gehen Sie nicht davon aus, dass `era` eine benutzerfreundliche Zeichenfolge ist; verwenden Sie `toLocaleString()`, um Ihr Datum zu formatieren.
> - Gehen Sie nicht davon aus, dass zwei `year`-Werte von verschiedenen Kalendern vergleichbar sind; verwenden Sie stattdessen die statische Methode `compare()`.
> - Gehen Sie nicht davon aus, dass Jahre 365/366 Tage und 12 Monate haben; verwenden Sie stattdessen `daysInYear` und `monthsInYear`.
> - Gehen Sie nicht davon aus, dass Schaltjahre (`inLeapYear` ist `true`) einen zusätzlichen Tag haben; sie könnten einen zusätzlichen Monat haben.

Zusätzlich zu `month` kann ein Monat in einem Jahr auch eindeutig durch den `monthCode` identifiziert werden. `monthCode` entspricht normalerweise dem Namen des Monats, nicht jedoch `month`. Zum Beispiel haben im Fall lunisolarer Kalender zwei Monate mit dem gleichen `monthCode`, von denen einer zu einem Schaltjahr gehört und der andere nicht, unterschiedliche `month`-Werte, wenn sie nach dem Schaltmonat kommen, aufgrund der Einfügung eines zusätzlichen Monats.

> [!NOTE]
> Um Konflikte zu vermeiden, kombinieren Sie nicht `month` und `monthCode` bei der Bestimmung eines Monats. Wählen Sie eine Monatsdarstellung und verwenden Sie sie konsequent. `month` ist nützlicher, wenn Sie die Reihenfolge der Monate in einem Jahr benötigen (z. B. beim Durchlaufen der Monate), während `monthCode` nützlicher ist, wenn Sie den Namen des Monats benötigen (z. B. beim Speichern von Geburtstagen).
>
> Seien Sie vorsichtig mit den folgenden falschen Annahmen über Monate:
>
> - Gehen Sie nicht davon aus, dass `monthCode` und `month` immer übereinstimmen.
> - Gehen Sie nicht von der Anzahl der Tage in einem Monat aus; verwenden Sie stattdessen `daysInMonth`.
> - Gehen Sie nicht davon aus, dass `monthCode` eine benutzerfreundliche Zeichenfolge ist; verwenden Sie `toLocaleString()`, um Ihr Datum zu formatieren.
> - Generell sollten Sie den Namen der Monate nicht in einem Array oder Objekt zwischenspeichern. Obwohl `monthCode` normalerweise innerhalb eines Kalenders dem Namen des Monats entspricht, empfehlen wir, den Namen des Monats immer mit Funktionen wie `date.toLocaleString("en-US", { calendar: date.calendarId, month: "long" })` zu berechnen.

Zusätzlich zu `day` (das ist ein monatlich-basierter Index) kann ein Tag in einem Jahr auch eindeutig durch den `dayOfYear` identifiziert werden. `dayOfYear` ist eine positive Ganzzahl, die sich jedes Mal um 1 erhöht und bei `1` beginnt und bei `date.daysInYear` endet.

Das Konzept einer "Woche" ist nicht mit einem astronomischen Ereignis verbunden, sondern ein kulturelles Konstrukt. Während die häufigste Länge `7` Tage beträgt, können Wochen auch 4, 5, 6, 8 oder mehr Tage haben — oder sogar keine feste Anzahl von Tagen insgesamt. Um die spezifische Anzahl der Tage der Woche eines Datums zu erhalten, verwenden Sie `daysInWeek` des Datums. `Temporal` identifiziert Wochen durch die Kombination aus `weekOfYear` und `yearOfWeek`. `weekOfYear` ist eine positive Ganzzahl, die sich jedes Mal um 1 erhöht und bei `1` beginnt, dann wieder auf `1` zurückgesetzt wird, wenn das Jahr fortschreitet. `yearOfWeek` ist in der Regel das gleiche wie `year`, kann sich jedoch zu Anfang oder Ende eines Jahres unterscheiden, da eine Woche zwei Jahre überspannen kann, und `yearOfWeek` wählt eines der beiden Jahre basierend auf den Regeln des Kalenders aus.

> [!NOTE]
> Verwenden Sie immer `weekOfYear` und `yearOfWeek` als Paar; verwenden Sie nicht `weekOfYear` und `year`.
>
> Seien Sie vorsichtig mit den folgenden falschen Annahmen über Wochen:
>
> - Gehen Sie nicht davon aus, dass `weekOfYear` und `yearOfWeek` immer vorhanden sind; sie können `undefined` sein.
> - Gehen Sie nicht davon aus, dass Wochen immer 7 Tage lang sind; verwenden Sie stattdessen `daysInWeek`.
> - Beachten Sie, dass die aktuelle `Temporal` API keine Jahr-Woche-Daten unterstützt, sodass Sie keine Daten mit diesen Eigenschaften konstruieren oder Daten in Jahr-Woche-Darstellungen serialisieren können. Sie sind nur informative Eigenschaften.

### RFC 9557 Format

Alle `Temporal` Klassen können im Format gemäß [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) serialisiert und deserialisiert werden, welches auf [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) basiert. Das Format, in seiner vollständigen Form, ist wie folgt (Leerzeichen sind nur zur Lesbarkeit und sollten nicht im tatsächlichen String enthalten sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

Verschiedene Klassen haben unterschiedliche Anforderungen an die Anwesenheit jedes Komponents, sodass Sie in der Dokumentation jeder Klasse einen Abschnitt mit dem Titel "RFC 9557 format" finden, der das von dieser Klasse erkannte Format angibt.

Dies ist sehr ähnlich dem [Datums-Zeit-Zeichenfolgenformat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format), das von {{jsxref("Date")}} verwendet wird und ebenfalls auf ISO 8601 basiert. Die wichtigste Erweiterung ist die Möglichkeit, Mikro- und Nanosekundenkomponenten anzugeben sowie die Möglichkeit, die Zeitzone und das Kalendersystem zu spezifizieren.

### Darstellbare Daten

Alle `Temporal` Objekte, die ein bestimmtes Kalendariumdatum darstellen, haben ein ähnliches Limit für den Bereich der darstellbaren Daten, nämlich ±10<sup>8</sup> Tage (inklusive) von der Unix-Epoche, oder den Bereich der Zeitpunkte von `-271821-04-20T00:00:00` bis `+275760-09-13T00:00:00`. Dies ist der gleiche Bereich wie bei [gültigen Daten](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). Genauer gesagt:

- {{jsxref("Temporal.Instant")}} und {{jsxref("Temporal.ZonedDateTime")}} wenden dieses Limit direkt auf ihren `epochNanoseconds` Wert an.
- {{jsxref("Temporal.PlainDateTime")}} interpretiert die Datum-Uhrzeit in der UTC-Zeitzone und erfordert, dass sie ±(10<sup>8</sup> + 1) Tage (exklusiv) von der Unix-Epoche ist, sodass ihr gültiger Bereich von `-271821-04-19T00:00:00` bis `+275760-09-14T00:00:00` exklusiv ist. Dies ermöglicht es jedem `ZonedDateTime`, in `PlainDateTime` konvertiert zu werden, unabhängig von seinem Offset.
- {{jsxref("Temporal.PlainDate")}} überprüft ebenso wie `PlainDateTime` das Datum auf Mittag (`12:00:00`) dieses Tages, sodass sein gültiger Bereich `-271821-04-19` bis `+275760-09-13` ist. Dies ermöglicht es jedem `PlainDateTime`, in `PlainDate` konvertiert zu werden, unabhängig von seiner Uhrzeit und umgekehrt.
- {{jsxref("Temporal.PlainYearMonth")}} hat den gültigen Bereich von `-271821-04` bis `+275760-09`. Dies ermöglicht es jedem `PlainDate`, in `PlainYearMonth` konvertiert zu werden, unabhängig von seinem Datum (außer wenn der erste Tag eines nicht-ISO Monats innerhalb des ISO Monats `-271821-03` fällt).

Die `Temporal` Objekte werden sich weigern, eine Instanz zu konstruieren, die ein Datum/Uhrzeit jenseits dieses Limits darstellt. Dies umfasst:

- Die Verwendung des Konstruktors oder der `from()` statischen Methode.
- Die Verwendung der `with()` Methode zum Aktualisieren von Kalenderfeldern.
- Die Verwendung von `add()`, `subtract()`, `round()` oder jeder anderen Methode zur Ableitung neuer Instanzen.

## Statische Eigenschaften

- {{jsxref("Temporal.Duration")}} {{experimental_inline}}
  - : Repräsentiert einen Unterschied zwischen zwei Zeitpunkten, der in Datum-/Uhrzeit-Arithmetik verwendet werden kann. Es wird im Wesentlichen als Kombination von Jahren, Monaten, Wochen, Tagen, Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden und Nanosekunden dargestellt.
- {{jsxref("Temporal.Instant")}} {{experimental_inline}}
  - : Repräsentiert einen einzigartigen Zeitpunkt mit Nanosekunden-Genauigkeit. Es wird im Wesentlichen als die Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) dargestellt, ohne jegliches Zeitzonen- oder Kalendersystem.
- {{jsxref("Temporal.Now")}} {{experimental_inline}}
  - : Bietet Methoden zur Abrufung der aktuellen Zeit in verschiedenen Formaten.
- {{jsxref("Temporal.PlainDate")}} {{experimental_inline}}
  - : Repräsentiert ein Kalenderdatum (ein Datum ohne eine Uhrzeit oder Zeitzone); zum Beispiel ein Ereignis in einem Kalender, das während des ganzen Tages unabhängig von der Zeitzone stattfindet. Es wird im Wesentlichen als ISO 8601 Kalenderdatum dargestellt, mit Jahr-, Monats- und Tagesfeldern und einem zugehörigen Kalendersystem.
- {{jsxref("Temporal.PlainDateTime")}} {{experimental_inline}}
  - : Repräsentiert ein Datum (Kalenderdatum) und eine Zeit (Wanduhrzeit) ohne Zeitzone. Es wird im Wesentlichen als Kombination aus einem [Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate) (mit einem zugehörigen Kalendersystem) und einer [Uhrzeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime) dargestellt.
- {{jsxref("Temporal.PlainMonthDay")}} {{experimental_inline}}
  - : Repräsentiert den Monat und Tag eines Kalenderdatums, ohne Jahr oder Zeitzone; zum Beispiel ein Ereignis in einem Kalender, das sich jedes Jahr wiederholt und den ganzen Tag stattfindet. Es wird im Wesentlichen als ISO 8601 Kalenderdatum dargestellt, mit Jahr-, Monats- und Tagesfeldern und einem zugehörigen Kalendersystem. Das Jahr wird zur Klärung des Monats-Tags in nicht ISO-Kalendersystemen herangezogen.
- {{jsxref("Temporal.PlainTime")}} {{experimental_inline}}
  - : Repräsentiert eine Zeit ohne Datum oder Zeitzone; zum Beispiel ein wiederkehrendes Ereignis, das jeden Tag zur gleichen Zeit stattfindet. Es wird im Wesentlichen als Kombination von Stunden-, Minuten-, Sekunden-, Millisekunden-, Mikrosekunden- und Nanosekundenwerten dargestellt.
- {{jsxref("Temporal.PlainYearMonth")}} {{experimental_inline}}
  - : Repräsentiert das Jahr und den Monat eines Kalenderdatums, ohne Tag oder Zeitzone; zum Beispiel ein Ereignis in einem Kalender, das während des gesamten Monats stattfindet. Es wird im Wesentlichen als ISO 8601 Kalenderdatum dargestellt, mit Jahr-, Monats- und Tagesfeldern und einem zugehörigen Kalendersystem. Der Tag wird verwendet, um das Jahr-Monat in nicht ISO-Kalendersystemen zu klären.
- {{jsxref("Temporal.ZonedDateTime")}} {{experimental_inline}}
  - : Repräsentiert ein Datum und eine Uhrzeit mit einer Zeitzone. Es wird im Wesentlichen als Kombination eines [Zeitpunkts](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und eines Kalendersystems dargestellt.
- `Temporal[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl.RelativeTimeFormat")}}
- {{jsxref("Intl.DurationFormat")}}

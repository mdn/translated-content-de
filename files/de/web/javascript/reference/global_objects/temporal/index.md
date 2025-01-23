---
title: Temporal
slug: Web/JavaScript/Reference/Global_Objects/Temporal
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal`**-Objekt ermöglicht die Verwaltung von Datum und Uhrzeit in verschiedenen Szenarien, einschließlich integrierter Zeitzonen- und Kalenderdarstellung, Wanduhren-Zeitumwandlungen, Arithmetik, Formatierung und mehr. Es ist als vollständiger Ersatz für das {{jsxref("Date")}}-Objekt konzipiert.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Temporal` kein Konstruktor. Sie können es weder mit dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden, noch das `Temporal`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Temporal` sind statisch (genau wie das {{jsxref("Math")}}-Objekt).

`Temporal` verfügt über eine komplexe und leistungsfähige API. Es stellt über 200 nützliche Methoden über mehrere Klassen bereit, was es sehr umfangreich erscheinen lassen kann. Wir werden einen Überblick darüber geben, wie diese APIs miteinander in Beziehung stehen.

### Hintergrund und Konzepte

JavaScript verfügt seit seinen frühen Tagen über das {{jsxref("Date")}}-Objekt zur Verwaltung von Datum und Uhrzeit. Die `Date`-API basiert jedoch auf der schlecht gestalteten `java.util.Date`-Klasse aus Java, die in den frühen 2010er Jahren ersetzt wurde; aber aufgrund des Ziels von JavaScript, die Rückwärtskompatibilität zu wahren, bleibt `Date` in der Sprache erhalten.

Die wichtige Lektion zum Vorwort der gesamten Einführung ist, dass **die Handhabung von Daten komplex ist**. Die meisten Probleme von `Date` können durch das Hinzufügen weiterer Methoden gelöst werden, aber ein grundlegender Designfehler bleibt bestehen: Es bietet so viele Methoden auf demselben Objekt an, dass Entwickler oft verwirrt sind, was sie verwenden sollen, was zu unerwarteten Fallstricken führt. Eine gut gestaltete API muss nicht nur mehr können, sondern sollte auf jeder Abstraktionsebene _weniger_ tun, weil die Verhinderung von Missbrauch genauso wichtig ist wie die Ermöglichung von Anwendungsfällen.

`Date`-Objekte tragen gleichzeitig zwei Hüte:

- Als ein [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date): die Anzahl der Millisekunden oder Nanosekunden, die seit einem festen Zeitpunkt (bekannt als _epoch_) vergangen sind.
- Als eine Kombination von [Komponenten](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_components_and_time_zones): Jahr, Monat, Tag, Stunde, Minute, Sekunde, Millisekunde und Nanosekunde. Die Jahr-, Monat- und Tag-Kennungen haben nur im Kontext eines _Kalendersystems_ eine Bedeutung. Die gesamte Kombination wird zu einem einzigartigen Moment in der Geschichte, wenn sie mit einer Zeitzone verbunden ist. `Date`-Objekte bieten Methoden zum Lesen und Modifizieren dieser Komponenten.

[Zeitzonen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) sind die Ursache für eine beträchtliche Anzahl von datumsbezogenen Fehlern. Bei der Interaktion mit einem `Date` über das Modell "Kombination aus Komponenten" kann die Uhrzeit nur in zwei Zeitzonen sein: UTC und lokal (Gerät), und es gibt keine Möglichkeit, eine beliebige Zeitzone anzugeben. Auch fehlt das Konzept von „keine Zeitzone“: Dies ist bekannt als ein _Kalenderdatum_ (für Daten) oder eine _Wanduhrzeit_ (für Uhrzeiten), was eine Zeit ist, die Sie „aus einem Kalender oder einer Uhr ablesen“. Wenn Sie beispielsweise einen täglichen Wecker stellen, möchten Sie ihn auf „8:00 Uhr“ einstellen, unabhängig davon, ob Sommerzeit ist oder nicht, ob Sie in eine andere Zeitzone gereist sind usw.

Ein weiteres Merkmal, das `Date` fehlt, ist ein [Kalendersystem](#kalender). Die meisten Menschen kennen den gregorianischen Kalender, bei dem es zwei Epochen, v. Chr. und n. Chr., gibt; es gibt 12 Monate; jeder Monat hat eine unterschiedliche Anzahl von Tagen; es gibt alle 4 Jahre ein Schaltjahr; und so weiter. Einige dieser Konzepte gelten jedoch möglicherweise nicht, wenn Sie mit einem anderen Kalendersystem arbeiten, wie dem hebräischen Kalender, dem chinesischen Kalender, dem japanischen Kalender usw. Mit `Date` können Sie nur mit dem gregorianischen Kalendermodell arbeiten.

Es gibt viele andere unerwünschte Altlasten bei `Date`, wie dass alle Set-Methoden veränderlich sind (was oft unerwünschte Nebeneffekte verursacht), das [Datums- und Zeitstring-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format), das nicht auf konsistente Weise analysiert werden kann usw. Letztendlich ist die beste Lösung, eine neue API von Grund auf zu erstellen, was `Temporal` ist.

### API-Übersicht

`Temporal` ist ein Namensraum, ähnlich wie {{jsxref("Intl")}}. Es enthält mehrere Klassen und Namensräume, von denen jeder dazu entwickelt wurde, einen bestimmten Aspekt der Verwaltung von Datum und Uhrzeit zu handhaben. Die Klassen können wie folgt gruppiert werden:

- Darstellung einer Zeitdauer (ein Unterschied zwischen zwei Zeitpunkten): {{jsxref("Temporal.Duration")}}
- Darstellung eines Zeitpunkts:
  - Darstellung eines einzigartigen Moments in der Geschichte:
    - Als Zeitstempel: {{jsxref("Temporal.Instant")}}
    - Als Kombination von Datums- und Zeitkomponenten gepaart mit einer Zeitzone: {{jsxref("Temporal.ZonedDateTime")}}
  - Darstellung eines zeitzonenunabhängigen Datums/Uhrzeit (alle mit dem Präfix "Plain"):
    - Datum (Jahr, Monat, Tag) + Zeit (Stunde, Minute, Sekunde, Millisekunde, Nanosekunde): {{jsxref("Temporal.PlainDateTime")}} (Hinweis: `ZonedDateTime` ist äquivalent zu `PlainDateTime` plus einer Zeitzone)
      - Datum (Jahr, Monat, Tag): {{jsxref("Temporal.PlainDate")}}
        - Jahr, Monat: {{jsxref("Temporal.PlainYearMonth")}}
        - Monat, Tag: {{jsxref("Temporal.PlainMonthDay")}}
      - Zeit (Stunde, Minute, Sekunde, Millisekunde, Nanosekunde): {{jsxref("Temporal.PlainTime")}}

Darüber hinaus gibt es auch einen anderen nützlichen Namensraum, {{jsxref("Temporal.Now")}}, der Methoden zum Abrufen der aktuellen Zeit in verschiedenen Formaten bereitstellt.

### Gemeinsame Klassenschnittstelle

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
<th>Updater</th>
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
<th>Runden</th>
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

Die folgende Tabelle fasst zusammen, welche Eigenschaften in jeder Klasse verfügbar sind, und gibt Ihnen einen Eindruck davon, welche Informationen jede Klasse darstellen kann.

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
<th>Jahresbezogen</th>
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
<th>Epoche-Zeit</th>
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
<td colspan="7">Wie konvertiere ich von...</td>
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
<tr><td rowspan="7">in...</td><th><code>Instant</code></th><td>/</td><td>{{jsxref("Temporal/ZonedDateTime/toInstant", "toInstant()")}}</td><td colspan="5">Zuerst in <code>ZonedDateTime</code> konvertieren</td></tr>
<tr><th><code>ZonedDateTime</code></th><td>{{jsxref("Temporal/Instant/toZonedDateTimeISO", "toZonedDateTimeISO()")}}</td><td>/</td><td>{{jsxref("Temporal/PlainDateTime/toZonedDateTime", "toZonedDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toZonedDateTime", "toZonedDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toZonedDateTime", "PlainDate#toZonedDateTime()")}} (als Argument übergeben)</td><td rowspan="2" colspan="2">Zuerst in <code>PlainDate</code> konvertieren</td></tr>
<tr><th><code>PlainDateTime</code></th><td rowspan="5">Zuerst in <code>ZonedDateTime</code> konvertieren</td><td>{{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "toPlainDateTime()")}}</td><td>/</td><td>{{jsxref("Temporal/PlainDate/toPlainDateTime", "toPlainDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toPlainDateTime", "PlainDate#toPlainDateTime()")}} (als Argument übergeben)</td></tr>
<tr><th><code>PlainDate</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainDate", "toPlainDate()")}}</td><td>/</td><td>keine Überlappung der Informationen</td><td>{{jsxref("Temporal/PlainYearMonth/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainMonthDay/toPlainDate", "toPlainDate()")}}</td></tr>
<tr><th><code>PlainTime</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainTime", "toPlainTime()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainTime", "toPlainTime()")}}</td><td>keine Überlappung der Informationen</td><td>/</td><td colspan="2">keine Überlappung der Informationen</td></tr>
<tr><th><code>PlainYearMonth</code></th><td rowspan="2" colspan="2">Zuerst in <code>PlainDate</code> konvertieren</td><td>{{jsxref("Temporal/PlainDate/toPlainYearMonth", "toPlainYearMonth()")}}</td><td rowspan="2">keine Überlappung der Informationen</td><td>/</td><td>Zuerst in <code>PlainDate</code> konvertieren</td></tr>
<tr><th><code>PlainMonthDay</code></th><td>{{jsxref("Temporal/PlainDate/toPlainMonthDay", "toPlainMonthDay()")}}</td><td>Zuerst in <code>PlainDate</code> konvertieren</td><td>/</td></tr>
</tbody>
</table>

Mit diesen Tabellen sollten Sie eine grundlegende Vorstellung davon haben, wie Sie die `Temporal`-API navigieren können.

### Kalender

Ein Kalender ist eine Möglichkeit, Tage zu organisieren, typischerweise in Perioden von Wochen, Monaten, Jahren und Epochen. Der größte Teil der Welt verwendet den gregorianischen Kalender, aber es gibt viele andere Kalender, die verwendet werden, insbesondere in religiösen und kulturellen Kontexten. Standardmäßig verwenden alle kalenderbewussten `Temporal`-Objekte das ISO 8601-Kalendersystem, das auf dem gregorianischen Kalender basiert und zusätzliche Wochen-Nummerierungsregeln definiert. {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}} listet die meisten Kalender auf, die wahrscheinlich von Browsern unterstützt werden. Hier bieten wir einen kurzen Überblick darüber, wie Kalendersysteme gebildet werden, um Ihnen zu helfen, welche Faktoren zwischen den Kalendern variieren können.

Es gibt drei prominente periodische Ereignisse auf der Erde: ihre Rotation um die Sonne (365,242 Tage für eine Umdrehung), die Rotation des Mondes um die Erde (29,53 Tage von Neumond zu Neumond) und ihre Rotation um ihre Achse (24 Stunden von Sonnenaufgang zu Sonnenaufgang). Jede Kultur hat das gleiche Maß eines "Tages", was 24 Stunden sind. Gelegentliche Änderungen wie die Sommerzeit sind kein Teil des Kalenders, sondern gehören zu den Informationen der [Zeitzone](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets).

- Einige Kalender definieren primär ein Jahr als 365,242 Tage im Durchschnitt, indem sie Jahre mit 365 Tagen definieren und etwa alle 4 Jahre einen zusätzlichen Tag, den _Schaltag_, hinzufügen. Dann kann das Jahr weiter in Teile namens Monate unterteilt werden. Diese Kalender werden _Sonnenkalender_ genannt. Der gregorianische Kalender und der persische Sonnenkalender sind Sonnenkalender.
- Einige Kalender definieren primär einen Monat als durchschnittlich 29,5 Tage, indem sie Monate definieren, die abwechselnd 29 und 30 Tage haben. Dann können 12 Monate in einem Jahr von 354 Tagen gruppiert werden. Diese Kalender werden _Mondkalender_ genannt. Der islamische Kalender ist ein Mondkalender. Da ein Mondjahr künstlich ist und nicht mit dem Jahreszeitenzyklus korreliert, sind Mondkalender im Allgemeinen seltener.
- Einige Kalender definieren auch primär Monate basierend auf Mondzyklen, wie Mondkalender. Dann wird zur Kompensation der 11-Tage-Differenz zum Sonnenjahr etwa alle 3 Jahre ein zusätzlicher Monat, der _Schaltmonat_, hinzugefügt. Diese Kalender werden _lunisolare Kalender_ genannt. Der hebräische Kalender und der chinesische Kalender sind lunisolare Kalender.

In `Temporal` wird jedes Datum unter einem Kalendersystem eindeutig durch drei Komponenten identifiziert: `year`, `month` und `day`. `year` ist eine ganze Zahl, die null oder negativ sein kann und monoton mit der Zeit zunimmt. Das Jahr `1` (oder `0`, falls vorhanden) wird als Kalenderepoche bezeichnet und ist für jeden Kalender willkürlich gewählt. `month` ist eine ganze Zahl, die jedes Mal um 1 zunimmt, beginnend bei `1` und endend bei `date.monthsInYear`, dann wird sie wieder auf `1` zurückgesetzt, wenn das Jahr fortschreitet. `day` ist auch eine positive Zahl, muss aber nicht bei 1 beginnen oder jedes Mal um 1 zunehmen, da politische Veränderungen dazu führen können, dass Tage übersprungen oder wiederholt werden. Aber im Allgemeinen erhöht sich `day` monoton und wird zurückgesetzt, wenn der Monat fortschreitet.

Zusätzlich zu `year` kann ein Jahr auch eindeutig durch die Kombination von `era` und `eraYear` identifiziert werden, für Kalender, die Epochen verwenden. Zum Beispiel verwendet der gregorianische Kalender die Epoche "CE" (Common Era) und "BCE" (Before Common Era), und das Jahr `-1` ist dasselbe wie `{ era: "bce", eraYear: 1 }`. `era` ist ein Kleinbuchstaben-String, und `eraYear` ist eine willkürliche ganze Zahl, die null oder negativ sein kann oder sogar mit der Zeit abnehmen kann (normalerweise für die älteste Epoche).

> [!NOTE]
> Verwenden Sie immer `era` und `eraYear` als Paar; verwenden Sie nicht eine Eigenschaft ohne die andere. Um Konflikte zu vermeiden, kombinieren Sie nicht `year` und `era`/`eraYear`, wenn Sie ein Jahr bezeichnen. Wählen Sie eine Jahresdarstellung und verwenden Sie sie konsistent.
>
> Vorsicht vor den folgenden falschen Annahmen über Jahre:
>
> - Gehen Sie nicht davon aus, dass `era` und `eraYear` immer vorhanden sind; sie können `undefined` sein.
> - Gehen Sie nicht davon aus, dass `era` eine benutzerfreundliche Zeichenfolge ist; verwenden Sie `toLocaleString()`, um Ihr Datum zu formatieren.
> - Gehen Sie nicht davon aus, dass zwei `year`-Werte aus verschiedenen Kalendern vergleichbar sind; verwenden Sie stattdessen die `compare()`-statische Methode.
> - Nehmen Sie nicht an, dass Jahre 365/366 Tage und 12 Monate haben; verwenden Sie `daysInYear` und `monthsInYear` stattdessen.
> - Nehmen Sie nicht an, dass Schaltjahre (`inLeapYear` ist `true`) einen zusätzlichen Tag haben; sie können einen zusätzlichen Monat haben.

Zusätzlich zu `month` kann ein Monat in einem Jahr auch eindeutig durch den `monthCode` identifiziert werden. `monthCode` entspricht normalerweise dem Namen des Monats, aber `month` nicht. Zum Beispiel werden im Fall von lunisolare Kalendern zwei Monate mit demselben `monthCode`, wobei einer zu einem Schaltjahr gehört und der andere nicht, unterschiedliche `month`-Werte haben, wenn sie nach dem Schaltmonat kommen, aufgrund der Hinzufügung eines zusätzlichen Monats.

> [!NOTE]
> Um Konflikte zu vermeiden, kombinieren Sie nicht `month` und `monthCode`, wenn Sie einen Monat bezeichnen. Wählen Sie eine Monatsdarstellung und verwenden Sie sie konsistent. `month` ist nützlicher, wenn Sie die Reihenfolge der Monate in einem Jahr benötigen (z. B. wenn Sie die Monate durchlaufen), während `monthCode` nützlicher ist, wenn Sie den Namen des Monats benötigen (z. B. wenn Sie Geburtstage speichern).
>
> Vorsicht vor den folgenden falschen Annahmen über Monate:
>
> - Gehen Sie nicht davon aus, dass `monthCode` und `month` immer übereinstimmen.
> - Gehen Sie nicht von einer bestimmten Anzahl von Tagen in einem Monat aus; verwenden Sie stattdessen `daysInMonth`.
> - Gehen Sie nicht davon aus, dass `monthCode` eine benutzerfreundliche Zeichenfolge ist; verwenden Sie `toLocaleString()`, um Ihr Datum zu formatieren.
> - Im Allgemeinen sollten Sie die Namen der Monate nicht in einem Array oder Objekt zwischenspeichern. Auch wenn `monthCode` normalerweise innerhalb eines Kalenders auf den Monatsnamen verweist, empfehlen wir, den Monatsnamen immer zu berechnen, indem Sie zum Beispiel `date.toLocaleString("en-US", { calendar: date.calendarId, month: "long" })` verwenden.

Zusätzlich zu `day` (das ein Monatsindex ist), kann ein Tag in einem Jahr auch eindeutig durch `dayOfYear` identifiziert werden. `dayOfYear` ist eine positive ganze Zahl, die jedes Mal um 1 zunimmt, beginnend bei `1` und endend bei `date.daysInYear`.

Das Konzept einer "Woche" ist nicht mit einem astronomischen Ereignis verbunden, sondern ein kulturelles Konstrukt. Daher können Wochen 4, 5, 6, 8 oder mehr Tage haben oder nicht einmal eine feste Anzahl von Tagen. Um die spezifische Anzahl der Tage der Woche eines Datums zu erhalten, verwenden Sie `daysInWeek` des Datums. `Temporal` identifiziert Wochen durch die Kombination von `weekOfYear` und `yearOfWeek`. `weekOfYear` ist eine positive ganze Zahl, die jedes Mal um 1 zunimmt, beginnend bei `1`, dann wird sie wieder auf `1` zurückgesetzt, wenn das Jahr fortschreitet. `yearOfWeek` ist normalerweise dasselbe wie `year`, kann aber am Anfang oder Ende eines jeden Jahres abweichen, da eine Woche zwei Jahre überqueren kann und `yearOfWeek` eines der beiden Jahre basierend auf den Regeln des Kalenders auswählt.

> [!NOTE]
> Verwenden Sie immer `weekOfYear` und `yearOfWeek` als Paar; verwenden Sie nicht `weekOfYear` und `year`.
>
> Vorsicht vor den folgenden falschen Annahmen über Wochen:
>
> - Gehen Sie nicht davon aus, dass `weekOfYear` und `yearOfWeek` immer vorhanden sind; sie können `undefined` sein.
> - Gehen Sie nicht davon aus, dass Wochen immer 7 Tage lang sind; verwenden Sie stattdessen `daysInWeek`.
> - Beachten Sie, dass die aktuelle `Temporal`-API keine Jahres-Wochen-Daten unterstützt, daher können Sie keine Daten mit diesen Eigenschaften konstruieren oder Daten in Jahres-Wochen-Darstellungen serialisieren. Es handelt sich nur um informative Eigenschaften.

### RFC 9557-Format

Alle `Temporal`-Klassen können mithilfe des in [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) festgelegten Formats serialisiert und deserialisiert werden, das auf [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) basiert. Das Format in seiner vollständigen Form sieht wie folgt aus (Leerzeichen dienen nur der Lesbarkeit und sollten im eigentlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm:ss.sssssssss [time_zone_id] [u-ca=calendar_id]
```

Verschiedene Klassen haben unterschiedliche Anforderungen an die Anwesenheit jeder Komponente. Daher finden Sie in der Dokumentation jeder Klasse einen Abschnitt mit dem Titel "RFC 9557-Format", der das von dieser Klasse erkannte Format angibt.

Dies ist dem [Datums- und Zeitstring-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) ähnlich, das von {{jsxref("Date")}} verwendet wird, welches ebenfalls auf ISO 8601 basiert. Die Hauptänderung ist die Möglichkeit, Mikro- und Nanosekundenkomponenten sowie die Zeitzone und das Kalendersystem anzugeben.

## Statische Eigenschaften

- {{jsxref("Temporal.Duration")}} {{experimental_inline}}
  - : Stellt einen Unterschied zwischen zwei Zeitpunkten dar, der in der Datum/Uhrzeit-Arithmetik verwendet werden kann. Es wird grundsätzlich als Kombination von Jahren, Monaten, Wochen, Tagen, Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden und Nanosekunden-Werte dargestellt.
- {{jsxref("Temporal.Instant")}} {{experimental_inline}}
  - : Stellt einen einzigartigen Punkt in der Geschichte dar, mit Nanosekunden-Genauigkeit. Es wird grundsätzlich als die Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) ohne Zeitzone oder Kalendersystem dargestellt.
- {{jsxref("Temporal.Now")}} {{experimental_inline}}
  - : Bietet Methoden zum Abrufen der aktuellen Zeit in verschiedenen Formaten.
- {{jsxref("Temporal.PlainDate")}} {{experimental_inline}}
  - : Stellt ein kalendarisches Datum dar (ein Datum ohne Zeit oder Zeitzone); zum Beispiel ein Ereignis in einem Kalender, das den ganzen Tag über stattfindet, egal in welcher Zeitzone es stattfindet. Es wird grundsätzlich als ISO 8601-Kalenderdatum, mit Jahr-, Monats- und Tagesfeldern und einem zugehörigen Kalendersystem dargestellt.
- {{jsxref("Temporal.PlainDateTime")}} {{experimental_inline}}
  - : Stellt ein Datum (Kalenderdatum) und eine Uhrzeit (Wanduhrzeit) ohne Zeitzone dar. Es wird grundlegend als eine Kombination aus einem [Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate) (mit einem zugehörigen Kalendersystem) und einer [Uhrzeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime) dargestellt.
- {{jsxref("Temporal.PlainMonthDay")}} {{experimental_inline}}
  - : Stellt den Monat und den Tag eines kalendarischen Datums dar, ohne Jahr oder Zeitzone; zum Beispiel ein Ereignis in einem Kalender, das jedes Jahr wiederkehrt und den ganzen Tag dauert. Es wird grundsätzlich als ISO 8601-Kalenderdatum, mit Jahr-, Monats- und Tagesfeldern und einem zugehörigen Kalendersystem dargestellt. Das Jahr wird verwendet, um den Monat-Tag in nicht-ISO-Kalendersystemen zu disambiguieren.
- {{jsxref("Temporal.PlainTime")}} {{experimental_inline}}
  - : Stellt eine Uhrzeit ohne Datum oder Zeitzone dar; zum Beispiel ein wiederkehrendes Ereignis, das jeden Tag zur selben Zeit stattfindet. Es wird grundlegend als eine Kombination von Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde und Nanosekunde-Werte dargestellt.
- {{jsxref("Temporal.PlainYearMonth")}} {{experimental_inline}}
  - : Stellt das Jahr und den Monat eines kalendarischen Datums dar, ohne Tag oder Zeitzone; zum Beispiel ein Ereignis in einem Kalender, das den ganzen Monat über stattfindet. Es wird grundsätzlich als ein ISO 8601-Kalenderdatum, mit Jahr-, Monats- und Tagesfeldern und einem zugehörigen Kalendersystem dargestellt. Der Tag wird verwendet, um das Jahr-Monat in nicht-ISO-Kalendersystemen zu disambiguieren.
- {{jsxref("Temporal.ZonedDateTime")}} {{experimental_inline}}
  - : Stellt ein Datum und eine Uhrzeit mit einer Zeitzone dar. Es wird grundsätzlich als eine Kombination aus einem [Moment](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und einem Kalendersystem dargestellt.
- `Temporal[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Temporal"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl.RelativeTimeFormat")}}
- {{jsxref("Intl.DurationFormat")}}

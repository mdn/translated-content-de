---
title: Temporal
slug: Web/JavaScript/Reference/Global_Objects/Temporal
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Das **`Temporal`** Objekt ermöglicht die Verwaltung von Datum und Uhrzeit in verschiedenen Szenarien, einschließlich der integrierten Darstellung von Zeitzonen und Kalendern, Wandzeitumrechnungen, Arithmetik, Formatierung und mehr. Es ist als vollständiger Ersatz für das {{jsxref("Date")}} Objekt konzipiert.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Temporal` kein Konstruktor. Sie können es nicht mit dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `Temporal` Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Temporal` sind statisch (genauso wie das {{jsxref("Math")}} Objekt).

`Temporal` verfügt über eine komplexe und leistungsstarke API. Es stellt über 200 Hilfsmethoden über mehrere Klassen bereit, wodurch es sehr komplex erscheinen kann. Wir bieten eine Übersicht auf hoher Ebene, wie diese APIs miteinander in Beziehung stehen.

### Hintergrund und Konzepte

JavaScript verfügt seit seinen frühen Tagen über das {{jsxref("Date")}} Objekt zur Handhabung von Datum und Uhrzeit. Die `Date` API basiert jedoch auf der schlecht gestalteten `java.util.Date` Klasse aus Java, die in den frühen 2010er Jahren ersetzt wurde; aber aufgrund von JavaScripts Ziel der Abwärtskompatibilität bleibt `Date` in der Sprache erhalten.

Die wichtige Lektion, die der gesamten Einführung vorausgeht, ist, dass **die Handhabung von Daten komplex ist**. Die meisten Probleme von `Date` können durch das Hinzufügen weiterer Methoden behoben werden, aber ein grundlegender Designfehler bleibt: Es werden so viele Methoden auf demselben Objekt offengelegt, dass Entwickler oft verwirrt sind, was zu unerwarteten Fallstricken führt. Eine gut gestaltete API muss nicht nur mehr tun, sondern auch _weniger_ auf jeder Abstraktionsebene, weil die Vermeidung von Missbrauch genauso wichtig ist wie die Ermöglichung von Anwendungsfällen.

`Date` Objekte tragen gleichzeitig zwei Hüte:

- Als ein [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date): die Anzahl der seit einem festen Zeitpunkt verstrichenen Millisekunden oder Nanosekunden (bekannt als die _Epoche_).
- Als eine Kombination von [Komponenten](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_components_and_time_zones): Jahr, Monat, Tag, Stunde, Minute, Sekunde, Millisekunde und Nanosekunde. Die Jahr-, Monat- und Tag-Identifikatoren machen nur im Bezug auf ein _Kalendersystem_ Sinn. Die ganze Kombination entspricht einem einzigartigen Zeitpunkt in der Geschichte, wenn sie mit einer Zeitzone verbunden ist. `Date` Objekte bieten Methoden zum Lesen und Ändern dieser Komponenten.

[Zeitzonen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) sind der Grund für eine beträchtliche Anzahl datei-bezogener Fehler. Bei der Interaktion mit einem `Date` über das Modell der "Kombination von Komponenten" kann die Zeit nur in zwei Zeitzonen angegeben werden: UTC und lokal (Gerät), und es gibt keine Möglichkeit, eine beliebige Zeitzone anzugeben. Es fehlt auch das Konzept von "keine Zeitzone": Dies ist bekannt als ein _Kalenderdatum_ (für Daten) oder _Wandzeit_ (für Zeiten), was eine Zeit ist, die man "von einem Kalender oder einer Uhr abliest". Wenn Sie beispielsweise einen täglichen Wecker stellen, möchten Sie ihn auf "8:00 Uhr" einstellen, unabhängig davon, ob es sich um Sommerzeit handelt oder nicht, ob Sie in eine andere Zeitzone gereist sind usw.

Ein zweites Feature, das `Date` fehlt, ist ein [Kalendersystem](#kalender). Die meisten Menschen kennen den Gregorianischen Kalender, bei dem es zwei Epochen gibt, BC und AD; es gibt 12 Monate; jeder Monat hat eine unterschiedliche Anzahl von Tagen; es gibt alle vier Jahre ein Schaltjahr; und so weiter. Einige dieser Konzepte gelten jedoch möglicherweise nicht, wenn Sie mit einem anderen Kalendersystem arbeiten, wie dem Hebräischen Kalender, dem Chinesischen Kalender, dem Japanischen Kalender usw. Mit `Date` können Sie nur mit dem Modell des Gregorianischen Kalenders arbeiten.

Es gibt viele andere unerwünschte Überbleibsel des `Date` Objekts, wie dass alle Set-Methoden veränderlich sind (was oft unerwünschte Nebeneffekte verursacht), das [Datums- und Uhrzeitzeichenfolgenformat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) nicht auf konsistente Weise analysiert werden kann usw. Letztendlich ist die beste Lösung, eine neue API von Grund auf zu erstellen, und das ist `Temporal`.

### API-Übersicht

`Temporal` ist ein Namensraum, ähnlich wie {{jsxref("Intl")}}. Es enthält mehrere Klassen und Namensräume, von denen jeder auf einen bestimmten Aspekt der Verwaltung von Datum und Uhrzeit ausgelegt ist. Die Klassen können wie folgt gruppiert werden:

- Darstellung einer Zeitdauer (ein Unterschied zwischen zwei Zeitpunkten): {{jsxref("Temporal.Duration")}}
- Darstellung eines Zeitpunktes:
  - Darstellung eines einzigartigen Punktes in der Geschichte:
    - Als Zeitstempel: {{jsxref("Temporal.Instant")}}
    - Als Kombination von Datums- und Zeitkomponenten mit einer Zeitzone: {{jsxref("Temporal.ZonedDateTime")}}
  - Darstellung eines datums- und zeitunempfindlichen Datums/Zeit (die alle mit "Plain" beginnen):
    - Datum (Jahr, Monat, Tag) + Zeit (Stunde, Minute, Sekunde, Millisekunde, Mikrossekunde, Nanosekunde): {{jsxref("Temporal.PlainDateTime")}} (Hinweis: `ZonedDateTime` entspricht `PlainDateTime` plus einer Zeitzone)
      - Datum (Jahr, Monat, Tag): {{jsxref("Temporal.PlainDate")}}
        - Jahr, Monat: {{jsxref("Temporal.PlainYearMonth")}}
        - Monat, Tag: {{jsxref("Temporal.PlainMonthDay")}}
      - Zeit (Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde, Nanosekunde): {{jsxref("Temporal.PlainTime")}}

Außerdem gibt es noch einen weiteren Hilfsnamensraum, {{jsxref("Temporal.Now")}}, der Methoden bereitstellt, um die aktuelle Zeit in verschiedenen Formaten zu erhalten.

### Gemeinsame Schnittstelle der Klassen

Es gibt viele Klassen im `Temporal` Namensraum, aber sie teilen viele ähnliche Methoden. Die folgende Tabelle listet alle Methoden jeder Klasse auf (außer [Umrechnungsmethoden](#umwandlung_zwischen_klassen)):

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
<th>Konstruktion</th>
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

Die folgende Tabelle fasst zusammen, welche Eigenschaften auf jeder Klasse verfügbar sind und gibt Ihnen eine Vorstellung davon, welche Informationen jede Klasse darstellen kann.

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
<th>Tagbezogen</th>
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

### Umwandlung zwischen Klassen

Die Tabelle unten fasst alle Umwandlungsmethoden zusammen, die auf jeder Klasse existieren.

<table>
<tbody>
<tr>
<td rowspan="2" colspan="2"></td>
<td colspan="7">Wie wird umgewandelt von...</td>
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
<tr><td rowspan="7">zu...</td><th><code>Instant</code></th><td>/</td><td>{{jsxref("Temporal/ZonedDateTime/toInstant", "toInstant()")}}</td><td colspan="5">Erst zu <code>ZonedDateTime</code> konvertieren</td></tr>
<tr><th><code>ZonedDateTime</code></th><td>{{jsxref("Temporal/Instant/toZonedDateTimeISO", "toZonedDateTimeISO()")}}</td><td>/</td><td>{{jsxref("Temporal/PlainDateTime/toZonedDateTime", "toZonedDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toZonedDateTime", "toZonedDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toZonedDateTime", "PlainDate#toZonedDateTime()")}} (als Argument übergeben)</td><td rowspan="2" colspan="2">Erst zu <code>PlainDate</code> konvertieren</td></tr>
<tr><th><code>PlainDateTime</code></th><td rowspan="5">Erst zu <code>ZonedDateTime</code> konvertieren</td><td>{{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "toPlainDateTime()")}}</td><td>/</td><td>{{jsxref("Temporal/PlainDate/toPlainDateTime", "toPlainDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toPlainDateTime", "PlainDate#toPlainDateTime()")}} (als Argument übergeben)</td></tr>
<tr><th><code>PlainDate</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainDate", "toPlainDate()")}}</td><td>/</td><td>Keine Überschneidung der Informationen</td><td>{{jsxref("Temporal/PlainYearMonth/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainMonthDay/toPlainDate", "toPlainDate()")}}</td></tr>
<tr><th><code>PlainTime</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainTime", "toPlainTime()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainTime", "toPlainTime()")}}</td><td>Keine Überschneidung der Informationen</td><td>/</td><td colspan="2">Keine Überschneidung der Informationen</td></tr>
<tr><th><code>PlainYearMonth</code></th><td rowspan="2" colspan="2">Erst zu <code>PlainDate</code> konvertieren</td><td>{{jsxref("Temporal/PlainDate/toPlainYearMonth", "toPlainYearMonth()")}}</td><td rowspan="2">Keine Überschneidung der Informationen</td><td>/</td><td>Erst zu <code>PlainDate</code> konvertieren</td></tr>
<tr><th><code>PlainMonthDay</code></th><td>{{jsxref("Temporal/PlainDate/toPlainMonthDay", "toPlainMonthDay()")}}</td><td>Erst zu <code>PlainDate</code> konvertieren</td><td>/</td></tr>
</tbody>
</table>

Mit diesen Tabellen sollten Sie eine grundlegende Vorstellung davon haben, wie man die `Temporal` API navigiert.

### Kalender

Ein Kalender ist eine Möglichkeit, Tage zu organisieren, typischerweise in Perioden von Wochen, Monaten, Jahren und Epochen. Der größte Teil der Welt verwendet den Gregorianischen Kalender, aber es gibt viele andere Kalender, die besonders in religiösen und kulturellen Kontexten verwendet werden. Standardmäßig verwenden alle kalenderfähigen `Temporal` Objekte das ISO 8601 Kalendersystem, das auf dem Gregorianischen Kalender basiert und zusätzliche Regeln zur Wochenzählung definiert. [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) listet die meisten Kalender auf, die wahrscheinlich von Browsern unterstützt werden. Hier geben wir eine kurze Übersicht darüber, wie Kalendersysteme gebildet werden, um Ihnen zu helfen, sich einzuprägen, welche Faktoren zwischen Kalendern variieren können.

Es gibt drei herausragende periodische Ereignisse auf der Erde: ihre Rotation um die Sonne (365,242 Tage für eine Umdrehung), die Rotation des Mondes um die Erde (29,53 Tage von Neumond zu Neumond) und ihre Rotation um ihre Achse (24 Stunden von Sonnenaufgang zu Sonnenaufgang). Jede Kultur hat das gleiche Maß für einen "Tag", der 24 Stunden beträgt. Gelegentliche Änderungen wie Sommerzeit sind nicht Bestandteil des Kalenders, sondern gehören zur [Zeitzonen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) Information.

- Einige Kalender definieren primär ein Jahr als im Durchschnitt 365,242 Tage, indem Jahre auf 365 Tage definiert werden und etwa alle 4 Jahre ein zusätzlicher Tag, der _Schalttag_, hinzugefügt wird. Das Jahr kann dann weiter in Teile, die Monate genannt werden, unterteilt werden. Diese Kalender werden _Sonnenkalender_ genannt. Der Gregorianische Kalender und der Solar Hijri Kalender sind Sonnenkalender.
- Einige Kalender definieren primär einen Monat als im Durchschnitt 29,5 Tage, indem Monate abwechselnd 29 und 30 Tage lang sind. Dann können 12 Monate zu einem Jahr von 354 Tagen gruppiert werden. Diese Kalender werden _Mondkalender_ genannt. Der Islamische Kalender ist ein Mondkalender. Weil ein Mondjahr künstlich ist und nicht mit dem Saisonzyklus korreliert, sind Mondkalender im Allgemeinen seltener.
- Einige Kalender definieren Monate auch primär basierend auf Mondzyklen, wie Mondkalender. Dann wird etwa alle 3 Jahre ein zusätzlicher Monat, der _Schaltmonat_, hinzugefügt, um die 11-Tage-Diskrepanz mit dem Sonnenjahr auszugleichen. Diese Kalender werden _lunisolare Kalender_ genannt. Der Hebräische Kalender und der Chinesische Kalender sind lunisolare Kalender.

In `Temporal` wird jedes Datum unter einem Kalendersystem eindeutig durch drei Komponenten identifiziert: `year`, `month` und `day`. Während `year` typischerweise eine positive ganze Zahl ist, kann es auch null oder negativ sein und erhöht sich monoton mit der Zeit. Das Jahr `1` (oder `0`, wenn es existiert) ist als die Kalenderepoch bekannt und ist für jeden Kalender willkürlich. `month` ist eine positive ganze Zahl, die bei jedem Mal um 1 größer wird, beginnend bei `1` und endend bei `date.monthsInYear`, dann wieder zurückgesetzt auf `1`, während das Jahr voranschreitet. `day` ist auch eine positive ganze Zahl, aber es kann nicht jedes Mal bei 1 beginnen oder um 1 zunehmen, da politische Veränderungen dazu führen können, dass Tage übersprungen oder wiederholt werden. Aber im Allgemeinen erhöht sich `day` monoton und wird zurückgesetzt, während der Monat voranschreitet.

Zusätzlich zu`year` kann ein Jahr auch durch die Kombination von `era` und `eraYear` eindeutig identifiziert werden, für Kalender, die Epochen verwenden. Beispielsweise verwendet der Gregorianische Kalender die Epoche "CE" (Common Era) und "BCE" (Before Common Era), und das Jahr `-1` ist dasselbe wie `{ era: "bce", eraYear: 2 }` (beachten Sie, dass das Jahr `0` immer für alle Kalender existiert; für den Gregorianischen Kalender entspricht es 1 v. Chr. aufgrund [astronomischer Jahreszählung](https://de.wikipedia.org/wiki/Astronomische_Jahresz%C3%A4hlung)). `era` ist eine Kleinbuchstaben-Zeichenfolge, und `eraYear` ist eine willkürliche ganze Zahl, die null oder negativ sein kann, oder sogar mit der Zeit abnehmen kann (normalerweise für die älteste Epoche).

> [!NOTE]
> Verwenden Sie immer `era` und `eraYear` im Paar; verwenden Sie keine Eigenschaft ohne die andere. Um Konflikte zu vermeiden, kombinieren Sie nicht `year` und `era`/`eraYear`, um ein Jahr zu bestimmen. Entscheiden Sie sich für eine Jahresdarstellung und verwenden Sie sie konsequent.
>
> Vorsicht vor den folgenden falschen Annahmen über Jahre:
>
> - Nehmen Sie nicht an, dass `era` und `eraYear` immer vorhanden sind; sie können `undefined` sein.
> - Nehmen Sie nicht an, dass `era` eine benutzerfreundliche Zeichenfolge ist; verwenden Sie `toLocaleString()`, um Ihr Datum zu formatieren.
> - Nehmen Sie nicht an, dass zwei `year` Werte aus verschiedenen Kalendern vergleichbar sind; verwenden Sie die statische Methode `compare()`.
> - Nehmen Sie nicht an, dass Jahre 365/366 Tage und 12 Monate haben; verwenden Sie stattdessen `daysInYear` und `monthsInYear`.
> - Nehmen Sie nicht an, dass Schaltjahre (`inLeapYear` ist `true`) einen zusätzlichen Tag haben; sie können einen zusätzlichen Monat haben.

Zusätzlich zu `month` kann ein Monat in einem Jahr ebenfalls durch den `monthCode` eindeutig identifiziert werden. `monthCode` entspricht normalerweise dem Namen des Monats, `month` jedoch nicht. Beispielsweise haben bei lunisolarischen Kalendern zwei Monate mit dem gleichen `monthCode`, von denen einer zu einem Schaltjahr gehört und der andere nicht, unterschiedliche `month` Werte, wenn sie nach dem Schaltmonat kommen, aufgrund der Einfügung eines zusätzlichen Monats.

> [!NOTE]
> Um Konflikte zu vermeiden, kombinieren Sie nicht `month` und `monthCode`, um einen Monat zu bestimmen. Entscheiden Sie sich für eine Monatsdarstellung und verwenden Sie sie konsequent. `month` ist nützlicher, wenn Sie die Reihenfolge der Monate in einem Jahr benötigen (z. B. beim Durchlaufen der Monate), während `monthCode` nützlicher ist, wenn Sie den Namen des Monats benötigen (z. B. beim Speichern von Geburtstagen).
>
> Vorsicht vor den folgenden falschen Annahmen über Monate:
>
> - Nehmen Sie nicht an, dass `monthCode` und `month` immer übereinstimmen.
> - Nehmen Sie nicht die Anzahl der Tage in einem Monat an; verwenden Sie stattdessen `daysInMonth`.
> - Nehmen Sie nicht an, dass `monthCode` eine benutzerfreundliche Zeichenfolge ist; verwenden Sie `toLocaleString()`, um Ihr Datum zu formatieren.
> - Allgemein sollten Sie den Namen der Monate nicht in einem Array oder Objekt zwischenspeichern. Auch wenn `monthCode` normalerweise innerhalb eines Kalenders zum Namen des Monats passt, empfehlen wir, den Namen des Monats immer mit, zum Beispiel, `date.toLocaleString("de-DE", { calendar: date.calendarId, month: "long" })` zu berechnen.

Zusätzlich zu `day` (das ein monatlicher Index ist) kann ein Tag in einem Jahr auch eindeutig durch `dayOfYear` identifiziert werden. `dayOfYear` ist eine positive ganze Zahl, die jedes Mal um 1 erhöht wird, beginnend bei `1` und endend bei `date.daysInYear`.

Das Konzept einer "Woche" ist mit keinem astronomischen Ereignis verbunden, sondern ein kulturelles Konstrukt. Während die häufigste Länge `7` Tage beträgt, können Wochen auch 4, 5, 6, 8 oder mehr Tage haben - oder sogar ganz ohne feste Anzahl von Tagen auskommen. Um die spezifische Anzahl an Tagen einer Woche eines Datums zu erhalten, verwenden Sie `daysInWeek` des Datums. `Temporal` identifiziert Wochen durch die Kombination von `weekOfYear` und `yearOfWeek`. `weekOfYear` ist eine positive ganze Zahl, die jedes Mal um 1 erhöht wird, beginnend bei `1`, dann wieder auf `1` zurückgesetzt wird, während das Jahr voranschreitet. `yearOfWeek` ist im Allgemeinen dasselbe wie `year`, kann jedoch am Anfang oder Ende eines jeden Jahres unterschiedlich sein, da eine Woche zwei Jahre überschreiten kann, und `yearOfWeek` eines der beiden Jahre basierend auf den Regeln des Kalenders auswählt.

> [!NOTE]
> Verwenden Sie immer `weekOfYear` und `yearOfWeek` im Paar; verwenden Sie nicht `weekOfYear` und `year`.
>
> Vorsicht vor den folgenden falschen Annahmen über Wochen:
>
> - Nehmen Sie nicht an, dass `weekOfYear` und `yearOfWeek` immer vorhanden sind; sie können `undefined` sein.
> - Nehmen Sie nicht an, dass Wochen immer 7 Tage lang sind; verwenden Sie stattdessen `daysInWeek`.
> - Beachten Sie, dass die aktuelle `Temporal` API keine Jahres-Wochen-Daten unterstützt, sodass Sie keine Daten mit diesen Eigenschaften erstellen oder Daten in Jahres-Wochen-Darstellungen serialisieren können. Sie sind nur informative Eigenschaften.

### RFC 9557 Format

Alle `Temporal` Klassen können unter Verwendung des im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) spezifizierten Formats serialisiert und deserialisiert werden, das auf [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) basiert. Das Format, in seiner vollständigen Form, ist wie folgt (Leerzeichen sind nur zur Lesbarkeit da und sollten im tatsächlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

Unterschiedliche Klassen haben unterschiedliche Anforderungen an das Vorhandensein jeder Komponente, daher finden Sie in der Dokumentation jeder Klasse einen Abschnitt mit dem Titel "RFC 9557 Format", der das von dieser Klasse anerkannte Format spezifiziert.

Dies ist dem [Datums- und Uhrzeitzeichenformat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) ähnlich, das von {{jsxref("Date")}} verwendet wird, das ebenfalls auf ISO 8601 basiert. Die Haupterweiterung ist die Möglichkeit, Mikro- und Nanosekundenkomponenten anzugeben, sowie die Möglichkeit, das Zeitzonen- und Kalendersystem anzugeben.

### Darstellbare Daten

Alle `Temporal` Objekte, die ein bestimmtes Kalenderdatum darstellen, legen ein ähnliches Limit für den Bereich der darstellbaren Daten fest, das ±10<sup>8</sup> Tage (einschließlich) von der Unix-Epoche, oder den Bereich der Momente von `-271821-04-20T00:00:00` bis `+275760-09-13T00:00:00`. Dies entspricht dem gleichen Bereich wie [gültige Daten](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). Genauer gesagt:

- {{jsxref("Temporal.Instant")}} und {{jsxref("Temporal.ZonedDateTime")}} wenden dieses Limit direkt auf ihren `epochNanoseconds` Wert an.
- {{jsxref("Temporal.PlainDateTime")}} interpretiert Datum und Uhrzeit in der UTC-Zeitzone und erfordert, dass sie ±(10<sup>8</sup> + 1) Tage (exklusiv) von der Unix-Epoche entfernt sind, sodass ihr gültiger Bereich `-271821-04-19T00:00:00` bis `+275760-09-14T00:00:00`, exklusiv ist. Dies ermöglicht es, dass jedes `ZonedDateTime` in ein `PlainDateTime` umgewandelt werden kann, unabhängig von seinem Offset.
- {{jsxref("Temporal.PlainDate")}} wendet den gleichen Check wie `PlainDateTime` auf den Mittag (`12:00:00`) dieses Datums an, sodass ihr gültiger Bereich `-271821-04-19` bis `+275760-09-13` ist. Dies ermöglicht es, dass jedes `PlainDateTime` in ein `PlainDate` umgewandelt werden kann, unabhängig von seiner Zeit, und umgekehrt.
- {{jsxref("Temporal.PlainYearMonth")}} hat den gültigen Bereich von `-271821-04` bis `+275760-09`. Dies ermöglicht es, dass jedes `PlainDate` in ein `PlainYearMonth` umgewandelt werden kann, unabhängig von seinem Datum (außer wenn der erste Tag eines nicht-ISO-Monats in den ISO-Monat `-271821-03` fällt).

Die `Temporal` Objekte werden sich weigern, eine Instanz zu erstellen, die ein Datum/Zeit jenseits dieses Limits darstellt. Dies schließt ein:

- Verwendung des Konstruktors oder der `from()` statischen Methode.
- Verwendung der `with()` Methode zum Aktualisieren von Kalenderfeldern.
- Verwendung von `add()`, `subtract()`, `round()`, oder anderen Methoden zur Ableitung neuer Instanzen.

## Statische Eigenschaften

- {{jsxref("Temporal.Duration")}} {{experimental_inline}}
  - : Stellt einen Unterschied zwischen zwei Zeitpunkten dar, der in der Datums-/Zeitarithmetik verwendet werden kann. Es wird grundlegend als eine Kombination von Jahren, Monaten, Wochen, Tagen, Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden und Nanosekunden Werten dargestellt.
- {{jsxref("Temporal.Instant")}} {{experimental_inline}}
  - : Stellt einen einzigartigen Moment in der Zeit dar, mit Nanosekunden-Genauigkeit. Es wird grundlegend als die Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) dargestellt, ohne Zeitzonen- oder Kalendersystem.
- {{jsxref("Temporal.Now")}} {{experimental_inline}}
  - : Bietet Methoden, um die aktuelle Zeit in verschiedenen Formaten zu erhalten.
- {{jsxref("Temporal.PlainDate")}} {{experimental_inline}}
  - : Stellt ein Kalenderdatum (ein Datum ohne Zeit oder Zeitzone) dar; zum Beispiel ein Ereignis im Kalender, das den ganzen Tag über passiert, egal welche Zeitzone gilt. Es wird grundlegend als ein ISO 8601 Kalenderdatum dargestellt, mit Jahr, Monat und Tag Feldern, und einem zugeordneten Kalendersystem.
- {{jsxref("Temporal.PlainDateTime")}} {{experimental_inline}}
  - : Stellt ein Datum (Kalenderdatum) und eine Zeit (Wandzeit) ohne Zeitzone dar. Es wird grundlegend als eine Kombination aus einem [Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate) (mit einem zugeordneten Kalendersystem) und einer [Zeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime) dargestellt.
- {{jsxref("Temporal.PlainMonthDay")}} {{experimental_inline}}
  - : Stellt den Monat und den Tag eines Kalenderdatums dar, ohne Jahr oder Zeitzone; zum Beispiel ein sich jährlich wiederholendes Ereignis, das den ganzen Tag über passiert. Es wird grundlegend als ein ISO 8601 Kalenderdatum dargestellt, mit Jahr, Monat und Tag Feldern, und einem zugeordneten Kalendersystem. Das Jahr wird verwendet, um den Monat-Tag in nicht-ISO-Kalendersystemen zu spezifizieren.
- {{jsxref("Temporal.PlainTime")}} {{experimental_inline}}
  - : Stellt eine Zeit ohne Datum oder Zeitzone dar; zum Beispiel ein sich wiederholendes Ereignis, das jeden Tag zur gleichen Zeit stattfindet. Es wird grundlegend als eine Kombination von Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde und Nanosekunde Werten dargestellt.
- {{jsxref("Temporal.PlainYearMonth")}} {{experimental_inline}}
  - : Stellt das Jahr und den Monat eines Kalenderdatums dar, ohne Tag oder Zeitzone; zum Beispiel ein Ereignis im Kalender, das den ganzen Monat über passiert. Es wird grundlegend als ein ISO 8601 Kalenderdatum dargestellt, mit Jahr, Monat und Tag Feldern, und einem zugeordneten Kalendersystem. Der Tag wird verwendet, um das Jahr-Monat in nicht-ISO-Kalendersystemen zu spezifizieren.
- {{jsxref("Temporal.ZonedDateTime")}} {{experimental_inline}}
  - : Stellt ein Datum und eine Uhrzeit mit einer Zeitzone dar. Es wird grundlegend als eine Kombination aus einem [Zeitpunkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone, und einem Kalendersystem dargestellt.
- `Temporal[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl.RelativeTimeFormat")}}
- {{jsxref("Intl.DurationFormat")}}

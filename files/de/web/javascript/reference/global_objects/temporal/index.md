---
title: Temporal
slug: Web/JavaScript/Reference/Global_Objects/Temporal
l10n:
  sourceCommit: 3cecb7942e8b1c5e12b58b2838a2fb8a3f4ef907
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal`**-Objekt ermöglicht die Verwaltung von Datum und Uhrzeit in verschiedenen Szenarien, einschließlich integrierter Zeitzonen- und Kalenderdarstellung, Wanduhrenzeitumkehrungen, Arithmetik, Formatierung und mehr. Es ist als vollständiger Ersatz für das {{jsxref("Date")}}-Objekt konzipiert.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Temporal` kein Konstruktor. Sie können es nicht mit dem [`new` operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `Temporal`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Temporal` sind statisch (genau wie das {{jsxref("Math")}}-Objekt).

`Temporal` hat eine ausgeklügelte und leistungsstarke API. Es stellt über 200 Hilfsmethoden über mehrere Klassen bereit, sodass es sehr komplex erscheinen kann. Wir geben einen Überblick darüber, wie diese APIs miteinander in Beziehung stehen.

### Hintergrund und Konzepte

JavaScript hat seit seinen Anfängen das {{jsxref("Date")}}-Objekt zur Handhabung von Datum und Uhrzeit. Die `Date`-API basiert jedoch auf der schlecht konzipierten Java-Klasse `java.util.Date`, welche in den frühen 2010er Jahren ersetzt wurde. Aufgrund des Ziels von JavaScript, die Abwärtskompatibilität zu wahren, bleibt `Date` in der Sprache erhalten.

Die wichtige Lektion, die der ganzen Einführung vorangestellt werden muss, ist, dass **die Handhabung von Daten komplex ist**. Viele der Probleme von `Date` können durch das Hinzufügen weiterer Methoden gelöst werden, aber ein grundlegender Designfehler bleibt bestehen: Es bietet so viele Methoden auf demselben Objekt an, dass Entwickler oft verwirrt sind, wann etwas zu verwenden ist, was zu unerwarteten Fallstricken führt. Eine gut gestaltete API sollte nicht nur mehr leisten, sondern auch _weniger_ auf jeder Abstraktionsebene tun, da die Verhinderung von Fehlanwendungen genauso wichtig ist wie das Ermöglichen von Anwendungsfällen.

`Date`-Objekte vereinen gleichzeitig zwei Rollen:

- Als [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date): die Anzahl der Millisekunden oder Nanosekunden, die seit einem festen Punkt in der Zeit (bekannt als _Epoch_) vergangen sind.
- Als Kombination von [Komponenten](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_components_and_time_zones): Jahr, Monat, Tag, Stunde, Minute, Sekunde, Millisekunde und Nanosekunde. Der Jahr-, Monat- und Tagfenster hat nur einen Sinn im Rahmen eines _Kalendersystems_. Die ganze Kombination entspricht einem einzigartigen Moment in der Geschichte, wenn sie mit einer Zeitzone verbunden ist. `Date`-Objekte bieten Methoden zum Lesen und Ändern dieser Komponenten.

[Zeitzonen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) sind die Ursache für eine bedeutende Anzahl von datumbezogenen Fehlern. Beim Interagieren mit einem `Date` über das Modell "Kombination von Komponenten" kann die Zeit nur in zwei Zeitzonen sein: UTC und lokal (Gerät), und es gibt keine Möglichkeit, eine beliebige Zeitzone anzugeben. Auch fehlt das Konzept der "keine Zeitzone": Dies wird als _Kalenderdatum_ (für Daten) oder _Uhrzeit_ (für Zeiten) bezeichnet, was eine Zeit ist, die "von einem Kalender oder einer Uhr abgelesen wird". Zum Beispiel, wenn Sie einen täglichen Weckalarm einstellen, möchten Sie ihn auf "8:00 Uhr" setzen, unabhängig davon, ob es sich um Sommerzeit handelt oder nicht, ob Sie in eine andere Zeitzone gereist sind, usw.

Ein weiteres Merkmal, das `Date` fehlt, ist ein [Kalendersystem](#kalender). Die meisten Menschen sind mit dem Gregorianischen Kalender vertraut, in dem es zwei Epochen gibt, v. Chr. und n. Chr.; es gibt 12 Monate; jeder Monat hat eine unterschiedliche Anzahl von Tagen; es gibt alle 4 Jahre ein Schaltjahr; und so weiter. Einige dieser Konzepte gelten jedoch möglicherweise nicht, wenn Sie mit einem anderen Kalendersystem arbeiten, wie dem Hebräischen Kalender, dem Chinesischen Kalender, dem Japanischen Kalender usw. Mit `Date` können Sie nur mit dem Modell des Gregorianischen Kalenders arbeiten.

Es gibt viele andere unerwünschte Erbschaften von `Date`, wie z.B., dass alle Setter mutierend sind (was oft unerwünschte Nebeneffekte verursacht), das [Datums-Zeitstring-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format), das nicht konsistent geparst werden kann, usw. Am Ende ist die beste Lösung, eine neue API von Grund auf neu zu erstellen, was `Temporal` ist.

### API-Übersicht

`Temporal` ist ein Namensraum, ähnlich wie {{jsxref("Intl")}}. Es enthält mehrere Klassen und Namensbereiche, von denen jeder dazu bestimmt ist, einen bestimmten Aspekt der Verwaltung von Datum und Zeit zu handhaben. Die Klassen können wie folgt gruppiert werden:

- Darstellung einer Zeitdauer (ein Unterschied zwischen zwei Zeitpunkten): {{jsxref("Temporal.Duration")}}
- Darstellung eines Zeitpunkts:
  - Darstellung eines einzigartigen Moments in der Geschichte:
    - Als Zeitstempel: {{jsxref("Temporal.Instant")}}
    - Als Kombination von Datums- und Uhrzeitkomponenten, gepaart mit einer Zeitzone: {{jsxref("Temporal.ZonedDateTime")}}
  - Darstellung eines zeitbereichs-unschlüssigen Datums/Zeit (alle mit "Plain" vorangestellt):
    - Datum (Jahr, Monat, Tag) + Zeit (Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde, Nanosekunde): {{jsxref("Temporal.PlainDateTime")}} (Hinweis: `ZonedDateTime` entspricht `PlainDateTime` plus einer Zeitzone)
      - Datum (Jahr, Monat, Tag): {{jsxref("Temporal.PlainDate")}}
        - Jahr, Monat: {{jsxref("Temporal.PlainYearMonth")}}
        - Monat, Tag: {{jsxref("Temporal.PlainMonthDay")}}
      - Zeit (Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde, Nanosekunde): {{jsxref("Temporal.PlainTime")}}

Des Weiteren gibt es einen weiteren Dienstnamensraum, {{jsxref("Temporal.Now")}}, der Methoden zum Abrufen der aktuellen Zeit in verschiedenen Formaten bereitstellt.

### Geteilte Klassenoberfläche

In dem `Temporal`-Namensraum gibt es viele Klassen, aber sie teilen viele ähnliche Methoden. Die folgende Tabelle listet alle Methoden jeder Klasse auf (außer [Konvertierungsmethoden](#konvertierung_zwischen_klassen)):

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
<th>Aritmetik</th>
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

Die folgende Tabelle fasst zusammen, welche Eigenschaften in jeder Klasse verfügbar sind und gibt Ihnen einen Überblick darüber, welche Informationen jede Klasse darstellen kann.

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
<th>Epoche Zeit</th>
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

Die folgende Tabelle fasst alle Konvertierungsmethoden zusammen, die in jeder Klasse vorhanden sind.

<table>
<tbody>
<tr>
<td rowspan="2" colspan="2"></td>
<td colspan="7">Wie man konvertiert von...</td>
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
<tr><td rowspan="7">zu...</td><th><code>Instant</code></th><td>/</td><td>{{jsxref("Temporal/ZonedDateTime/toInstant", "toInstant()")}}</td><td colspan="5">Zuerst in <code>ZonedDateTime</code> umwandeln</td></tr>
<tr><th><code>ZonedDateTime</code></th><td>{{jsxref("Temporal/Instant/toZonedDateTimeISO", "toZonedDateTimeISO()")}}</td><td>/</td><td>{{jsxref("Temporal/PlainDateTime/toZonedDateTime", "toZonedDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toZonedDateTime", "toZonedDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toZonedDateTime", "PlainDate#toZonedDateTime()")}} (als Argument übergeben)</td><td rowspan="2" colspan="2">Zuerst in <code>PlainDate</code> umwandeln</td></tr>
<tr><th><code>PlainDateTime</code></th><td rowspan="5">Zuerst in <code>ZonedDateTime</code> umwandeln</td><td>{{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "toPlainDateTime()")}}</td><td>/</td><td>{{jsxref("Temporal/PlainDate/toPlainDateTime", "toPlainDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toPlainDateTime", "PlainDate#toPlainDateTime()")}} (als Argument übergeben)</td></tr>
<tr><th><code>PlainDate</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainDate", "toPlainDate()")}}</td><td>/</td><td>Keine Überschneidung in der Information</td><td>{{jsxref("Temporal/PlainYearMonth/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainMonthDay/toPlainDate", "toPlainDate()")}}</td></tr>
<tr><th><code>PlainTime</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainTime", "toPlainTime()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainTime", "toPlainTime()")}}</td><td>Keine Überschneidung in der Information</td><td>/</td><td colspan="2">Keine Überschneidung in der Information</td></tr>
<tr><th><code>PlainYearMonth</code></th><td rowspan="2" colspan="2">Zuerst in <code>PlainDate</code> umwandeln</td><td>{{jsxref("Temporal/PlainDate/toPlainYearMonth", "toPlainYearMonth()")}}</td><td rowspan="2">Keine Überschneidung in der Information</td><td>/</td><td> Zuerst in <code>PlainDate</code> umwandeln</td></tr>
<tr><th><code>PlainMonthDay</code></th><td>{{jsxref("Temporal/PlainDate/toPlainMonthDay", "toPlainMonthDay()")}}</td><td>Zuerst in <code>PlainDate</code> umwandeln</td><td>/</td></tr>
</tbody>
</table>

Mit diesen Tabellen sollten Sie eine grundlegende Vorstellung davon haben, wie Sie die `Temporal`-API navigieren können.

### Kalender

Ein Kalender ist eine Methode zur Organisation von Tagen, typischerweise in Perioden von Wochen, Monaten, Jahren und Epochen. Die meisten der Welt nutzen den Gregorianischen Kalender, aber es gibt viele andere Kalender in Gebrauch, besonders im religiösen und kulturellen Kontext. Standardmäßig verwenden alle kalenderbewussten `Temporal`-Objekte das ISO 8601-Kalendersystem, das auf dem Gregorianischen Kalender basiert und zusätzliche Wochenzählregeln definiert. [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) listet die meisten der Kalendersysteme auf, die wahrscheinlich von Browsern unterstützt werden. Wir bieten hier einen kurzen Überblick darüber, wie Kalendersysteme gebildet werden, um Ihnen zu helfen, zu internalisieren, welche Faktoren zwischen Kalendern variieren können.

Es gibt drei prominente periodische Ereignisse auf der Erde: ihre Rotation um die Sonne (365,242 Tage für eine Umdrehung), die Rotation des Mondes um die Erde (29,53 Tage von Neumond zu Neumond) und ihre Rotation um ihre Achse (24 Stunden von Sonnenaufgang zu Sonnenaufgang). Jede Kultur hat dasselbe Maß für einen "Tag", das 24 Stunden ist. Gelegentliche Änderungen wie die Sommerzeit sind nicht Teil des Kalenders, sondern sind Teil der Informationen der [Zeitzone](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets).

- Einige Kalender definieren in erster Linie ein Jahr als durchschnittlich 365,242 Tage, indem sie Jahre mit 365 Tagen definieren und alle etwa 4 Jahre einen zusätzlichen Tag, den _Schalttag_, hinzufügen. Dann kann das Jahr weiter in Teile, die Monate genannt werden, geteilt werden. Diese Kalender werden _Sonnenkalender_ genannt. Der Gregorianische Kalender und der Solar Hijri Kalender sind Sonnenkalender.
- Einige Kalender definieren in erster Linie einen Monat als durchschnittlich 29,5 Tage, indem sie Monate alternierend aus 29 und 30 Tagen definieren. Dann können 12 Monate zu einem Jahr von 354 Tagen gruppiert werden. Diese Kalender werden _Mondkalender_ genannt. Der Islamische Kalender ist ein Mondkalender. Da ein Mondjahr künstlich ist und nicht mit dem Jahreszeitenzyklus korreliert, sind Mondkalender im Allgemeinen seltener.
- Einige Kalender definieren Monate auch in erster Linie basierend auf Mondzyklen, ähnlich wie Mondkalender. Dann wird zur Kompensation der 11-tägigen Diskrepanz zum Sonnenjahr etwa alle 3 Jahre ein zusätzlicher Monat, der _Schaltmonat_, hinzugefügt. Diese Kalender werden _luni-solare Kalender_ genannt. Der Hebräische Kalender und der Chinesische Kalender sind luni-solare Kalender.

In `Temporal` wird jedes Datum in einem Kalendersystem eindeutig durch drei Komponenten identifiziert: `year`, `month` und `day`. `year` ist eine ganze Zahl, die null oder negativ sein kann und monoton mit der Zeit zunimmt. Das Jahr `1` (oder `0`, wenn es existiert) ist als Kalender-Epoche bekannt und ist für jeden Kalender willkürlich. `month` ist eine ganze Zahl, die jedes Mal um 1 zunimmt, beginnend bei `1` und endend bei `date.monthsInYear`, dann bei Fortschreiten des Jahres wieder auf `1` zurückgesetzt wird. `day` ist ebenfalls eine positive ganze Zahl, kann aber möglicherweise nicht bei 1 starten oder jedes Mal um 1 zunehmen, da politische Änderungen dazu führen können, dass Tage übersprungen oder wiederholt werden. Aber im Allgemeinen steigt `day` monoton und setzt sich mit dem Fortschreiten des Monats zurück.

Zusätzlich zu `year` kann ein Jahr auch durch die Kombination von `era` und `eraYear` eindeutig identifiziert werden, für Kalender, die Epochen verwenden. Zum Beispiel verwendet der Gregorianische Kalender die Epoche "CE" (Common Era) und "BCE" (Before Common Era), und das Jahr `-1` ist dasselbe wie `{ era: "bce", eraYear: 1 }`. `era` ist ein Kleinbuchstabensymbol und `eraYear` ist eine willkürliche ganze Zahl, die null oder negativ sein oder sogar mit der Zeit abnehmen kann (normalerweise für die älteste Epoche).

> [!NOTE]
> Verwenden Sie immer `era` und `eraYear` als Paar; verwenden Sie keine Eigenschaft ohne die andere. Vermeiden Sie außerdem Konflikte, indem Sie `year` und `era`/`eraYear` nicht kombinieren, wenn Sie ein Jahr benennen. Wählen Sie eine Jahresdarstellung und verwenden Sie sie konsistent.
>
> Achten Sie auf die folgenden falschen Annahmen über Jahre:
>
> - Nehmen Sie nicht an, dass `era` und `eraYear` immer vorhanden sind; sie können `undefined` sein.
> - Nehmen Sie nicht an, dass `era` eine benutzerfreundliche Zeichenfolge ist; verwenden Sie `toLocaleString()`, um Ihr Datum zu formatieren.
> - Nehmen Sie nicht an, dass zwei `year`-Werte aus verschiedenen Kalendern vergleichbar sind; verwenden Sie stattdessen die statische Methode `compare()`.
> - Nehmen Sie nicht an, dass Jahre 365/366 Tage und 12 Monate haben; verwenden Sie stattdessen `daysInYear` und `monthsInYear`.
> - Nehmen Sie nicht an, dass Schaltjahre (`inLeapYear` ist `true`) einen zusätzlichen Tag haben; sie können einen zusätzlichen Monat haben.

Zusätzlich zu `month` kann ein Monat in einem Jahr auch durch den `monthCode` eindeutig identifiziert werden. `monthCode` entspricht in der Regel dem Monatsnamen, während `month` dies nicht tut. Zum Beispiel, im Fall von luni-solaren Kalendern, haben zwei Monate mit dem gleichen `monthCode`, von denen einer zu einem Schaltjahr und der andere nicht, unterschiedliche `month`-Werte, wenn sie nach dem Schaltmonat kommen, aufgrund der Einfügung eines zusätzlichen Monats.

> [!NOTE]
> Vermeiden Sie Konflikte, indem Sie `month` und `monthCode` nicht kombinieren, wenn Sie einen Monat benennen. Wählen Sie eine Monatsdarstellung und verwenden Sie sie konsistent. `month` ist nützlicher, wenn Sie die Reihenfolge der Monate in einem Jahr benötigen (z.B. beim Schleifen durch die Monate), während `monthCode` nützlicher ist, wenn Sie den Namen des Monats benötigen (z.B. beim Speichern von Geburtstagen).
>
> Achten Sie auf die folgenden falschen Annahmen über Monate:
>
> - Nehmen Sie nicht an, dass `monthCode` und `month` immer übereinstimmen.
> - Nehmen Sie nicht an, wie viele Tage ein Monat hat; verwenden Sie stattdessen `daysInMonth`.
> - Nehmen Sie nicht an, dass `monthCode` eine benutzerfreundliche Zeichenfolge ist; verwenden Sie `toLocaleString()`, um Ihr Datum zu formatieren.
> - Im Allgemeinen sollten Sie den Namen der Monate nicht in einem Array oder Objekt zwischenspeichern. Auch wenn `monthCode` normalerweise auf den Monatsnamen innerhalb eines Kalenders kartiert, empfehlen wir immer, den Monatsnamen mittels, beispielsweise, `date.toLocaleString("en-US", { calendar: date.calendarId, month: "long" })` zu berechnen.

Zusätzlich zu `day` (das ein monatsbasierter Index ist) kann ein Tag in einem Jahr auch durch den `dayOfYear` eindeutig identifiziert werden. `dayOfYear` ist eine positive ganze Zahl, die jedes Mal um 1 zunimmt, beginnend bei `1` und endend bei `date.daysInYear`.

Das Konzept einer "Woche" ist nicht mit einem astronomischen Ereignis verbunden, sondern ein kulturelles Konstrukt. Daher können Wochen 4, 5, 6, 8 oder mehr Tage haben oder nicht einmal eine feste Anzahl von Tagen. Um die spezifische Anzahl an Tagen der Woche eines Datums zu erhalten, verwenden Sie das `daysInWeek` des Datums. `Temporal` identifiziert Wochen durch die Kombination von `weekOfYear` und `yearOfWeek`. `weekOfYear` ist eine positive ganze Zahl, die jedes Mal um 1 zunimmt, beginnend bei `1`, dann bei Fortschreiten des Jahres wieder auf `1` zurückgesetzt wird. `yearOfWeek` ist im Allgemeinen dasselbe wie `year`, kann aber am Anfang oder Ende eines jeden Jahres unterschiedlich sein, da eine Woche zwei Jahre überspannen kann, und `yearOfWeek` eines der beiden Jahre basierend auf den Kalenderregeln auswählt.

> [!NOTE]
> Verwenden Sie immer `weekOfYear` und `yearOfWeek` als Paar; verwenden Sie keine `weekOfYear` und `year`.
>
> Achten Sie auf die folgenden falschen Annahmen über Wochen:
>
> - Nehmen Sie nicht an, dass `weekOfYear` und `yearOfWeek` immer vorhanden sind; sie können `undefined` sein.
> - Nehmen Sie nicht an, dass Wochen immer 7 Tage lang sind; verwenden Sie stattdessen `daysInWeek`.
> - Beachten Sie, dass die aktuelle `Temporal`-API keine Jahr-Woche-Daten unterstützt, sodass Sie keine Daten mit diesen Eigenschaften konstruieren oder Daten in Jahr-Woche-Darstellungen serialisieren können. Sie sind nur informationelle Eigenschaften.

### RFC 9557-Format

Alle `Temporal`-Klassen können serialisiert und deserialisiert werden, indem das Format verwendet wird, das in [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) spezifiziert ist, das auf [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) basiert. Das Format in seiner vollständigen Form ist wie folgt (Leerzeichen sind nur zur Lesbarkeit vorhanden und sollten in dem tatsächlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

Verschiedene Klassen haben unterschiedliche Anforderungen an die Anwesenheit jeder Komponente, sodass Sie einen Abschnitt mit dem Titel "RFC 9557-Format" in der Dokumentation jeder Klasse finden, der das von dieser Klasse erkannte Format spezifiziert.

Dies ist dem [Datums-Zeitstring-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format), das von {{jsxref("Date")}} verwendet wird, sehr ähnlich, welches ebenfalls auf ISO 8601 basiert. Der Hauptunterschied ist die Möglichkeit, Mikro- und Nanosekund-Komponenten anzugeben, sowie die Möglichkeit, die Zeitzone und das Kalendersystem anzugeben.

### Darstellbare Daten

Alle `Temporal`-Objekte, die ein bestimmtes Kalenderdatum darstellen, setzen eine ähnliche Grenze für den Bereich darstellbarer Daten, nämlich ±10<sup>8</sup> Tage (einschließlich) ab der Unix-Epoche, oder den Bereich von Momenten von `-271821-04-20T00:00:00` bis `+275760-09-13T00:00:00`. Dies ist derselbe Bereich wie [gültige Daten](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). Genauer gesagt:

- {{jsxref("Temporal.Instant")}} und {{jsxref("Temporal.ZonedDateTime")}} wenden dieses Limit direkt auf ihren `epochNanoseconds`-Wert an.
- {{jsxref("Temporal.PlainDateTime")}} interpretiert Datum und Uhrzeit in der UTC-Zeitzone und verlangt, dass sie sich ±(10<sup>8</sup> + 1) Tage (ausschließlich) von der Unix-Epoche befinden, sodass sein gültiger Bereich `-271821-04-19T00:00:00` bis `+275760-09-14T00:00:00` (ausschließlich) ist. Dies ermöglicht es, jedes `ZonedDateTime`-Objekt unabhängig von seinem Offset in ein `PlainDateTime` zu konvertieren.
- {{jsxref("Temporal.PlainDate")}} wendet denselben Check wie `PlainDateTime` auf den Mittag (`12:00:00`) dieses Datums an, wodurch sein gültiger Bereich `-271821-04-19` bis `+275760-09-13` ist. Dies ermöglicht es, jedes `PlainDateTime`-Objekt unabhängig von seiner Uhrzeit in ein `PlainDate` zu konvertieren und umgekehrt.
- {{jsxref("Temporal.PlainYearMonth")}} hat einen gültigen Bereich von `-271821-04` bis `+275760-09`. Dies ermöglicht es, jedes `PlainDate`-Objekt unabhängig von seinem Datum (außer wenn der erste Tag eines nicht-ISO-Monats in den ISO-Monat `-271821-03` fällt) in ein `PlainYearMonth` zu konvertieren.

Die `Temporal`-Objekte werden sich weigern, eine Instanz zu konstruieren, die ein Datum oder eine Uhrzeit jenseits dieser Grenze darstellt. Dazu gehört:

- Die Verwendung des Konstruktors oder der statischen Methode `from()`.
- Die Verwendung der `with()`-Methode zur Aktualisierung von Kalendersymbolen.
- Die Verwendung von `add()`, `subtract()`, `round()` oder einer anderen Methode zum Ableiten neuer Instanzen.

## Statische Eigenschaften

- {{jsxref("Temporal.Duration")}} {{experimental_inline}}
  - : Stellt einen Unterschied zwischen zwei Zeitpunkten dar, der in der Datum/Uhrzeit-Arithmetik verwendet werden kann. Es wird im Wesentlichen als eine Kombination von Jahren, Monaten, Wochen, Tagen, Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden und Nanosekunden dargestellt.
- {{jsxref("Temporal.Instant")}} {{experimental_inline}}
  - : Stellt einen einzigartigen Punkt in der Geschichte mit Nanosekunden-Genauigkeit dar. Es wird im Wesentlichen als die Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970 UTC) dargestellt, ohne jegliches Zeitzonensystem oder Kalendersystem.
- {{jsxref("Temporal.Now")}} {{experimental_inline}}
  - : Bietet Methoden, um die aktuelle Uhrzeit in verschiedenen Formaten zu erhalten.
- {{jsxref("Temporal.PlainDate")}} {{experimental_inline}}
  - : Stellt ein Kalenderdatum (ein Datum ohne Uhrzeit oder Zeitzone) dar; beispielsweise ein Ereignis auf einem Kalender, das den ganzen Tag stattfindet, unabhängig davon, in welcher Zeitzone es stattfindet. Es wird im Wesentlichen als ein ISO 8601 Kalenderdatum dargestellt, mit Jahr-, Monat- und Tagfeldern und einem zugeordneten Kalendersystem.
- {{jsxref("Temporal.PlainDateTime")}} {{experimental_inline}}
  - : Stellt ein Datum (Kalenderdatum) und eine Uhrzeit (Wanduhrzeit) ohne eine Zeitzone dar. Es wird im Wesentlichen als eine Kombination aus einem [Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate) (mit einem zugeordneten Kalendersystem) und einer [Zeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime) dargestellt.
- {{jsxref("Temporal.PlainMonthDay")}} {{experimental_inline}}
  - : Stellt den Monat und den Tag eines Kalenderdatums dar, ohne Jahr oder Zeitzone; z.B. ein Ereignis auf einem Kalender, das jedes Jahr wiederkehrt und den ganzen Tag passiert. Es wird im Wesentlichen als ein ISO 8601 Kalenderdatum dargestellt, mit Jahr-, Monat- und Tagfeldern und einem zugeordneten Kalendersystem. Das Jahr wird verwendet, um den Monat-Tag in nicht-ISO-Kalendersystemen zu unterscheiden.
- {{jsxref("Temporal.PlainTime")}} {{experimental_inline}}
  - : Stellt eine Uhrzeit ohne Datum oder Zeitzone dar; z.B. ein sich wiederholendes Ereignis, das jeden Tag zur gleichen Zeit passiert. Es wird im Wesentlichen als eine Kombination aus Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde und Nanosekunde dargestellt.
- {{jsxref("Temporal.PlainYearMonth")}} {{experimental_inline}}
  - : Stellt das Jahr und den Monat eines Kalenderdatums dar, ohne Tag oder Zeitzone; z.B. ein Ereignis auf einem Kalender, das den ganzen Monat passiert. Es wird im Wesentlichen als ein ISO 8601 Kalenderdatum dargestellt, mit Jahr-, Monat- und Tagfeldern und einem zugeordneten Kalendersystem. Der Tag wird verwendet, um Jahr-Monat in nicht-ISO-Kalendersystemen zu unterscheiden.
- {{jsxref("Temporal.ZonedDateTime")}} {{experimental_inline}}
  - : Stellt ein Datum und eine Uhrzeit mit einer Zeitzone dar. Es wird im Wesentlichen als eine Kombination aus einem [Instant](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und einem Kalendersystem dargestellt.
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

---
title: Temporal
slug: Web/JavaScript/Reference/Global_Objects/Temporal
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Das **`Temporal`**-Objekt ermöglicht die Verwaltung von Datum und Uhrzeit in verschiedenen Szenarien, darunter eingebaute Zeitzonen- und Kalenderdarstellung, Wanduhrenzeiteinheiten, Arithmetik, Formatierung und mehr. Es wurde als vollständiger Ersatz für das {{jsxref("Date")}}-Objekt entworfen.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Temporal` kein Konstruktor. Sie können es nicht mit dem [`new`-Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `Temporal`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Temporal` sind statisch (genau wie das {{jsxref("Math")}}-Objekt).

`Temporal` hat eine komplexe und leistungsstarke API. Es bietet über seine verschiedenen Klassen mehr als 200 Hilfsmethoden an und kann so sehr komplex wirken. Wir geben Ihnen einen Überblick darüber, wie diese APIs miteinander in Beziehung stehen.

### Hintergrund und Konzepte

JavaScript wird seit seinen ersten Tagen mit dem {{jsxref("Date")}}-Objekt für die Handhabung von Datum und Zeit ausgeliefert. Die `Date`-API basiert jedoch auf der schlecht gestalteten `java.util.Date`-Klasse aus Java, die Anfang der 2010er Jahre ersetzt wurde; aber aufgrund von JavaScripts Ziel der Abwärtskompatibilität bleibt `Date` in der Sprache erhalten.

Die wichtigste Lektion gleich zu Beginn der Einführung ist, dass **Datumshandhabung komplex ist**. Die meisten Probleme von `Date` sind durch das Hinzufügen weiterer Methoden behebbar, aber ein grundlegender Designfehler bleibt bestehen: Es bietet so viele Methoden auf demselben Objekt, dass Entwickler oft verwirrt sind, was sie verwenden sollen, was zu unerwarteten Problemen führt. Eine gut gestaltete API sollte nicht nur mehr können, sondern auf jeder Abstraktionsebene auch _weniger_ tun, weil die Vermeidung von Fehlanwendungen ebenso wichtig ist wie das Ermöglichen von Anwendungsfällen.

`Date`-Objekte haben eine Doppelfunktion:

- Als [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date): die Anzahl der Millisekunden oder Nanosekunden, die seit einem festgelegten Zeitpunkt (bekannt als _Epoch_) vergangen sind.
- Als Kombination von [Komponenten](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_components_and_time_zones): Jahr, Monat, Tag, Stunde, Minute, Sekunde, Millisekunde und Nanosekunde. Die Jahr-, Monat- und Tagbezeichner sind nur mit Bezug auf ein _Kalendersystem_ sinnvoll. Die gesamte Kombination entspricht einem einzigartigen Moment in der Geschichte, wenn sie mit einer Zeitzone verknüpft ist. `Date`-Objekte bieten Methoden zum Lesen und Modifizieren dieser Komponenten.

[Zeitzonen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) sind die Ursache für eine erhebliche Anzahl datumsbezogener Fehler. Bei der Interaktion mit einem `Date` über das Modell der "Komponentenkombination" kann die Zeit nur in zwei Zeitzonen sein: UTC und lokal (Gerät), und es gibt keine Möglichkeit, eine beliebige Zeitzone anzugeben. Außerdem fehlt das Konzept von "keine Zeitzone": Dies wird als _Kalenderdatum_ (für Daten) oder _Wanduhrzeit_ (für Zeiten) bezeichnet, was eine Zeit ist, die man "von einem Kalender oder einer Uhr abliest". Wenn Sie beispielsweise einen täglichen Wecker stellen, möchten Sie ihn auf "8:00 Uhr" stellen, unabhängig davon, ob Sommerzeit ist oder nicht, ob Sie in eine andere Zeitzone gereist sind usw.

Ein weiteres Merkmal, das bei `Date` fehlt, ist ein [Kalendersystem](#kalender). Die meisten Leute kennen den gregorianischen Kalender, in dem es zwei Epochen gibt, BC und AD; es gibt 12 Monate; jeder Monat hat eine unterschiedliche Anzahl von Tagen; es gibt ein Schaltjahr alle 4 Jahre; und so weiter. Einige dieser Konzepte gelten jedoch möglicherweise nicht, wenn Sie mit einem anderen Kalendersystem arbeiten, wie dem hebräischen Kalender, dem chinesischen Kalender, dem japanischen Kalender usw. Mit `Date` können Sie nur mit dem Modell des gregorianischen Kalenders arbeiten.

Es gibt viele andere unerwünschte Vermächtnisse von `Date`, wie zum Beispiel, dass alle Setzmethoden veränderlich sind (was oft unerwünschte Nebeneffekte verursacht), das [Datums-Zeit-String-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) nicht konsistent geparst werden kann usw. Am Ende ist der beste Lösungsansatz, eine neue API von Grund auf zu entwickeln, was `Temporal` ist.

### API-Übersicht

`Temporal` ist ein Namensraum, ähnlich wie {{jsxref("Intl")}}. Es enthält verschiedene Klassen und Namensräume, von denen jeder einen bestimmten Aspekt der Verwaltung von Datum und Uhrzeit behandelt. Die Klassen lassen sich wie folgt gruppieren:

- Darstellung einer Zeitdauer (ein Unterschied zwischen zwei Zeitpunkten): {{jsxref("Temporal.Duration")}}
- Darstellung eines Zeitpunkts:
  - Darstellung eines einzigartigen Moments in der Geschichte:
    - Als Zeitstempel: {{jsxref("Temporal.Instant")}}
    - Als Kombination aus Datums- und Zeitkomponenten gepaart mit einer Zeitzone: {{jsxref("Temporal.ZonedDateTime")}}
  - Darstellung eines zeitunbewussten Datums/Zeitpunkts (alle mit dem Präfix "Plain"):
    - Datum (Jahr, Monat, Tag) + Zeit (Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde, Nanosekunde): {{jsxref("Temporal.PlainDateTime")}} (Hinweis: `ZonedDateTime` entspricht `PlainDateTime` plus einer Zeitzone)
      - Datum (Jahr, Monat, Tag): {{jsxref("Temporal.PlainDate")}}
        - Jahr, Monat: {{jsxref("Temporal.PlainYearMonth")}}
        - Monat, Tag: {{jsxref("Temporal.PlainMonthDay")}}
      - Zeit (Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde, Nanosekunde): {{jsxref("Temporal.PlainTime")}}

Weiterhin gibt es einen weiteren Hilfsnamensraum, {{jsxref("Temporal.Now")}}, der Methoden zum Abrufen der aktuellen Zeit in verschiedenen Formaten bereitstellt.

### Gemeinsame Klassenschnittstelle

Es gibt viele Klassen im `Temporal`-Namensraum, aber sie teilen sich viele ähnliche Methoden. Die folgende Tabelle listet alle Methoden jeder Klasse auf (außer [Konvertierungsmethoden](#konvertierung_zwischen_klassen)):

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
<th>Erzeugung</th>
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
<td>N/V</td>
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
<td>N/V</td>
</tr>
<tr>
<th>Rundungen</th>
<td>{{jsxref("Temporal/Instant/round", "round()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/round", "round()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/round", "round()")}}</td>
<td>N/V</td>
<td>{{jsxref("Temporal/PlainTime/round", "round()")}}</td>
<td>N/V</td>
<td>N/V</td>
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

Die folgende Tabelle fasst zusammen, welche Eigenschaften in jeder Klasse verfügbar sind und vermittelt Ihnen eine Vorstellung davon, welche Informationen jede Klasse darstellen kann.

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
<td>N/V</td>
<td>{{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/calendarId", "calendarId")}}</td>
<td>{{jsxref("Temporal/PlainDate/calendarId", "calendarId")}}</td>
<td>N/V</td>
<td>{{jsxref("Temporal/PlainYearMonth/calendarId", "calendarId")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/calendarId", "calendarId")}}</td>
</tr>
<tr>
<th>Jahresbezogen</th>
<td>N/V</td>
<td>{{jsxref("Temporal/ZonedDateTime/era", "era")}}<br>{{jsxref("Temporal/ZonedDateTime/eraYear", "eraYear")}}<br>{{jsxref("Temporal/ZonedDateTime/year", "year")}}<br>{{jsxref("Temporal/ZonedDateTime/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/era", "era")}}<br>{{jsxref("Temporal/PlainDateTime/eraYear", "eraYear")}}<br>{{jsxref("Temporal/PlainDateTime/year", "year")}}<br>{{jsxref("Temporal/PlainDateTime/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/PlainDateTime/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/PlainDateTime/daysInYear", "daysInYear")}}</td>
<td>{{jsxref("Temporal/PlainDate/era", "era")}}<br>{{jsxref("Temporal/PlainDate/eraYear", "eraYear")}}<br>{{jsxref("Temporal/PlainDate/year", "year")}}<br>{{jsxref("Temporal/PlainDate/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/PlainDate/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/PlainDate/daysInYear", "daysInYear")}}</td>
<td>N/V</td>
<td>{{jsxref("Temporal/PlainYearMonth/era", "era")}}<br>{{jsxref("Temporal/PlainYearMonth/eraYear", "eraYear")}}<br>{{jsxref("Temporal/PlainYearMonth/year", "year")}}<br>{{jsxref("Temporal/PlainYearMonth/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/PlainYearMonth/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/PlainYearMonth/daysInYear", "daysInYear")}}</td>
<td>N/V</td>
</tr>
<tr>
<th>Monatsbezogen</th>
<td>N/V</td>
<td>{{jsxref("Temporal/ZonedDateTime/month", "month")}}<br>{{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/month", "month")}}<br>{{jsxref("Temporal/PlainDateTime/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainDateTime/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainDate/month", "month")}}<br>{{jsxref("Temporal/PlainDate/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainDate/daysInMonth", "daysInMonth")}}</td>
<td>N/V</td>
<td>{{jsxref("Temporal/PlainYearMonth/month", "month")}}<br>{{jsxref("Temporal/PlainYearMonth/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainYearMonth/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/monthCode", "monthCode")}}</td>
</tr>
<tr>
<th>Wochenbezogen</th>
<td>N/V</td>
<td>{{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/PlainDateTime/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/PlainDateTime/daysInWeek", "daysInWeek")}}</td>
<td>{{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/PlainDate/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/PlainDate/daysInWeek", "daysInWeek")}}</td>
<td>N/V</td>
<td>N/V</td>
<td>N/V</td>
</tr>
<tr>
<th>Tagesbezogen</th>
<td>N/V</td>
<td>{{jsxref("Temporal/ZonedDateTime/day", "day")}}<br>{{jsxref("Temporal/ZonedDateTime/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/ZonedDateTime/dayOfYear", "dayOfYear")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/day", "day")}}<br>{{jsxref("Temporal/PlainDateTime/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/PlainDateTime/dayOfYear", "dayOfYear")}}</td>
<td>{{jsxref("Temporal/PlainDate/day", "day")}}<br>{{jsxref("Temporal/PlainDate/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/PlainDate/dayOfYear", "dayOfYear")}}</td>
<td>N/V</td>
<td>N/V</td>
<td>{{jsxref("Temporal/PlainMonthDay/day", "day")}}</td>
</tr>
<tr>
<th>Zeitkomponenten</th>
<td>N/V</td>
<td>{{jsxref("Temporal/ZonedDateTime/hour", "hour")}}<br>{{jsxref("Temporal/ZonedDateTime/minute", "minute")}}<br>{{jsxref("Temporal/ZonedDateTime/second", "second")}}<br>{{jsxref("Temporal/ZonedDateTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/ZonedDateTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/ZonedDateTime/nanosecond", "nanosecond")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/hour", "hour")}}<br>{{jsxref("Temporal/PlainDateTime/minute", "minute")}}<br>{{jsxref("Temporal/PlainDateTime/second", "second")}}<br>{{jsxref("Temporal/PlainDateTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/PlainDateTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/PlainDateTime/nanosecond", "nanosecond")}}</td>
<td>N/V</td>
<td>{{jsxref("Temporal/PlainTime/hour", "hour")}}<br>{{jsxref("Temporal/PlainTime/minute", "minute")}}<br>{{jsxref("Temporal/PlainTime/second", "second")}}<br>{{jsxref("Temporal/PlainTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/PlainTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/PlainTime/nanosecond", "nanosecond")}}</td>
<td>N/V</td>
<td>N/V</td>
</tr>
<tr>
<th>Zeitzone</th>
<td>N/V</td>
<td>{{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}}<br>{{jsxref("Temporal/ZonedDateTime/offset", "offset")}}<br>{{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "offsetNanoseconds")}}<br>{{jsxref("Temporal/ZonedDateTime/hoursInDay", "hoursInDay")}}<br>{{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "getTimeZoneTransition()")}}<br>{{jsxref("Temporal/ZonedDateTime/startOfDay", "startOfDay()")}}</td>
<td>N/V</td>
<td>N/V</td>
<td>N/V</td>
<td>N/V</td>
<td>N/V</td>
</tr>
<tr>
<th>Epoche-Zeit</th>
<td>{{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}}<br>{{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "epochMilliseconds")}}<br>{{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}}</td>
<td>N/V</td>
<td>N/V</td>
<td>N/V</td>
<td>N/V</td>
<td>N/V</td>
</tr>
</tbody>
</table>

### Konvertierung zwischen Klassen

Die folgende Tabelle fasst alle Konvertierungsmethoden zusammen, die auf jeder Klasse existieren.

<table>
<tbody>
<tr>
<td rowspan="2" colspan="2"></td>
<td colspan="7">Wie man von... konvertiert</td>
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
<tr><th><code>PlainDate</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainDate", "toPlainDate()")}}</td><td>/</td><td>Keine Überlappung in Informationen</td><td>{{jsxref("Temporal/PlainYearMonth/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainMonthDay/toPlainDate", "toPlainDate()")}}</td></tr>
<tr><th><code>PlainTime</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainTime", "toPlainTime()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainTime", "toPlainTime()")}}</td><td>Keine Überlappung in Informationen</td><td>/</td><td colspan="2">Keine Überlappung in Informationen</td></tr>
<tr><th><code>PlainYearMonth</code></th><td rowspan="2" colspan="2">Zuerst in <code>PlainDate</code> konvertieren</td><td>{{jsxref("Temporal/PlainDate/toPlainYearMonth", "toPlainYearMonth()")}}</td><td rowspan="2">Keine Überlappung in Informationen</td><td>/</td><td>Zuerst in <code>PlainDate</code> konvertieren</td></tr>
<tr><th><code>PlainMonthDay</code></th><td>{{jsxref("Temporal/PlainDate/toPlainMonthDay", "toPlainMonthDay()")}}</td><td>Zuerst in <code>PlainDate</code> konvertieren</td><td>/</td></tr>
</tbody>
</table>

Mit diesen Tabellen sollten Sie ein grundlegendes Verständnis davon haben, wie Sie die `Temporal`-API navigieren können.

### Kalender

Ein Kalender ist eine Möglichkeit, Tage zu organisieren, typischerweise in Perioden von Wochen, Monaten, Jahren und Epochen. Die meisten Teile der Welt verwenden den gregorianischen Kalender, aber es gibt viele andere Kalender, die insbesondere in religiösen und kulturellen Kontexten verwendet werden. Standardmäßig verwenden alle kalenderbewussten `Temporal`-Objekte das ISO 8601-Kalendersystem, das auf dem gregorianischen Kalender basiert und zusätzliche Regeln zur Wochennummerierung definiert. [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) listet die meisten Kalender auf, die wahrscheinlich von Browsern unterstützt werden. Hier geben wir einen kurzen Überblick darüber, wie Kalendersysteme gebildet werden, um Ihnen zu helfen, zu verstehen, welche Faktoren zwischen Kalendern variieren können.

Es gibt drei prominente periodische Ereignisse auf der Erde: Ihre Rotation um die Sonne (365,242 Tage für eine Umdrehung), die Rotation des Mondes um die Erde (29,53 Tage von Neumond zu Neumond) und ihre Rotation um ihre Achse (24 Stunden von Sonnenaufgang zu Sonnenaufgang). Jede Kultur hat dieselbe Definition eines "Tages", das sind 24 Stunden. Gelegentliche Änderungen wie Sommerzeit gehören nicht zum Kalender, sondern sind Teil der [Zeitzonen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets)-Informationen.

- Einige Kalender definieren in erster Linie ein Jahr als durchschnittlich 365,242 Tage, indem sie Jahre mit 365 Tagen definieren und etwa alle 4 Jahre einen zusätzlichen Tag, den _Schalttag_, hinzufügen. Dann kann das Jahr weiter in Teile geteilt werden, die Monate genannt werden. Diese Kalender werden _Sonnenkalender_ genannt. Der gregorianische Kalender und der Solar Hijri-Kalender sind Sonnenkalender.
- Einige Kalender definieren in erster Linie einen Monat als durchschnittlich 29,5 Tage, indem sie Monate definieren, die zwischen 29 und 30 Tagen alternieren. Dann können 12 Monate in einem Jahr von 354 Tagen gruppiert werden. Diese Kalender werden _Mondkalender_ genannt. Der islamische Kalender ist ein Mondkalender. Da ein Mondjahr künstlich ist und nicht mit dem Jahreszeitenzyklus korreliert, sind Mondkalender im Allgemeinen seltener.
- Einige Kalender definieren ebenfalls in erster Linie Monate basierend auf Mondzyklen, wie Mondkalender. Um jedoch die 11-tägige Abweichung zum Sonnenjahr auszugleichen, wird etwa alle 3 Jahre ein weiterer Monat, der _Schaltmonat_, hinzugefügt. Diese Kalender werden _lunisolare Kalender_ genannt. Der hebräische Kalender und der chinesische Kalender sind lunisolare Kalender.

In `Temporal` wird jedes Datum unter einem Kalendersystem eindeutig durch drei Komponenten identifiziert: `year`, `month` und `day`. Während `year`zumeist eine positive ganze Zahl ist, kann es auch null oder negativ sein und monoton mit der Zeit zunehmen. Das Jahr `1` (oder `0`, falls es existiert) wird als Kalenderepoche bezeichnet und ist für jeden Kalender willkürlich. `month` ist eine positive ganze Zahl, die bei jedem Schritt um 1 erhöht wird, beginnend bei `1` und endend bei `date.monthsInYear`, und dann zurück auf `1` gesetzt wird, wenn das Jahr fortschreitet. `day` ist ebenfalls eine positive ganze Zahl, beginnt jedoch möglicherweise nicht bei 1 oder wird nicht jedes Mal um 1 erhöht, da politische Änderungen dazu führen können, dass Tage übersprungen oder wiederholt werden. Im Allgemeinen erhöht sich `day` jedoch monoton und wird zurückgesetzt, wenn der Monat fortschreitet.

Zusätzlich zu `year` kann ein Jahr auch eindeutig durch die Kombination von `era` und `eraYear` für Kalender identifiziert werden, die Epochen verwenden. Der gregorianische Kalender verwendet beispielsweise die Epoche "CE" (Common Era) und "BCE" (Before Common Era), und das Jahr `-1` entspricht `{ era: "bce", eraYear: 2 }` (beachten Sie, dass das Jahr `0` immer für alle Kalender existiert; im gregorianischen Kalender entspricht es 1 v.Chr. aufgrund der [astronomischen Jahrzählung](https://de.wikipedia.org/wiki/Astronomisches_Jahr)). `era` ist eine kleingeschriebene Zeichenkette, und `eraYear` ist eine beliebige ganze Zahl, die null oder negativ sein oder sogar mit der Zeit abnehmen kann (normalerweise für die älteste Epoche).

> [!HINWEIS]
> Verwenden Sie immer `era` und `eraYear` als Paar; verwenden Sie nicht eine Eigenschaft, ohne die andere zu verwenden. Vermeiden Sie zudem Konflikte, indem Sie `year` und `era`/`eraYear` nicht kombinieren, wenn Sie ein Jahr angeben. Wählen Sie eine Jahresdarstellung und verwenden Sie sie konsequent.
>
> Seien Sie vorsichtig bei den folgenden falschen Annahmen über Jahre:
>
> - Gehen Sie nicht davon aus, dass `era` und `eraYear` immer vorhanden sind; sie können `undefined` sein.
> - Gehen Sie nicht davon aus, dass `era` eine benutzerfreundliche Zeichenkette ist; verwenden Sie `toLocaleString()`, um Ihr Datum zu formatieren.
> - Gehen Sie nicht davon aus, dass zwei `year`-Werte aus verschiedenen Kalendern vergleichbar sind; verwenden Sie stattdessen die statische Methode `compare()`.
> - Gehen Sie nicht davon aus, dass Jahre 365/366 Tage und 12 Monate haben; verwenden Sie stattdessen `daysInYear` und `monthsInYear`.
> - Gehen Sie nicht davon aus, dass Schaltjahre (`inLeapYear` ist `true`) einen zusätzlichen Tag haben; sie können einen zusätzlichen Monat haben.

Zusätzlich zu `month` kann ein Monat in einem Jahr auch eindeutig durch den `monthCode` identifiziert werden. `monthCode` entspricht normalerweise dem Namen des Monats, `month` jedoch nicht. Zum Beispiel sind bei lunisolaren Kalendern zwei Monate mit demselben `monthCode`, wobei einer zu einem Schaltjahr gehört und der andere nicht, unterschiedliche `month`-Werte, wenn sie nach dem Schaltmonat folgen, aufgrund der Einfügung eines zusätzlichen Monats.

> [!HINWEIS]
> Um Konflikte zu vermeiden, kombinieren Sie `month` und `monthCode` nicht, wenn Sie einen Monat angeben. Wählen Sie eine Monatsdarstellung und verwenden Sie sie konsequent. `month` ist nützlicher, wenn Sie die Reihenfolge der Monate im Jahr benötigen (z.B. beim Durchlaufen der Monate), während `monthCode` nützlicher ist, wenn Sie den Namen des Monats benötigen (z.B. beim Speichern von Geburtstagen).
>
> Seien Sie vorsichtig bei den folgenden falschen Annahmen über Monate:
>
> - Gehen Sie nicht davon aus, dass `monthCode` und `month` immer korrespondieren.
> - Gehen Sie nicht von der Anzahl der Tage in einem Monat aus; verwenden Sie stattdessen `daysInMonth`.
> - Gehen Sie nicht davon aus, dass `monthCode` eine benutzerfreundliche Zeichenkette ist; verwenden Sie `toLocaleString()`, um Ihr Datum zu formatieren.
> - Speichern Sie im Allgemeinen den Namen der Monate nicht in einem Array oder Objekt. Auch wenn `monthCode` normalerweise dem Monatsnamen innerhalb eines Kalenders entspricht, empfehlen wir, stets den Monatsnamen zu berechnen, zum Beispiel mit `date.toLocaleString("de-DE", { calendar: date.calendarId, month: "long" })`.

Zusätzlich zu `day` (was ein monatsbasiertes Indiz ist) kann ein Tag in einem Jahr auch eindeutig durch `dayOfYear` identifiziert werden. `dayOfYear` ist eine positive Ganzzahl, die sich bei jedem Schritt um 1 erhöht, beginnend bei `1` und endend bei `date.daysInYear`.

Das Konzept einer "Woche" ist mit keinem astronomischen Ereignis verbunden, sondern ein kulturelles Konstrukt. Während die häufigste Länge `7` Tage beträgt, können Wochen auch 4, 5, 6, 8 oder mehr Tage haben — oder sogar gar keine feste Anzahl von Tagen. Um die spezifische Anzahl von Tagen der Woche eines Datums zu erhalten, verwenden Sie `daysInWeek` des Datums. `Temporal` identifiziert Wochen durch die Kombination von `weekOfYear` und `yearOfWeek`. `weekOfYear` ist eine positive Ganzzahl, die sich bei jedem Schritt um 1 erhöht, beginnend bei `1` und dann zu `1` zurücksetzt, wenn das Jahr fortschreitet. `yearOfWeek` ist im Allgemeinen dasselbe wie `year`, kann aber zu Beginn oder Ende jedes Jahres anders sein, weil eine Woche zwei Jahre überqueren kann, und `yearOfWeek` eines der beiden Jahre basierend auf den Regeln des Kalenders auswählt.

> [!HINWEIS]
> Verwenden Sie immer `weekOfYear` und `yearOfWeek` als Paar; verwenden Sie nicht `weekOfYear` und `year`.
>
> Seien Sie vorsichtig bei den folgenden falschen Annahmen über Wochen:
>
> - Gehen Sie nicht davon aus, dass `weekOfYear` und `yearOfWeek` immer vorhanden sind; sie können `undefined` sein.
> - Gehen Sie nicht davon aus, dass Wochen immer 7 Tage haben; verwenden Sie `daysInWeek`.
> - Beachten Sie, dass die aktuelle `Temporal`-API keine Jahr-Woche-Daten unterstützt, sodass Sie keine Daten mit diesen Eigenschaften konstruieren oder Daten in Jahr-Woche-Darstellungen serialisieren können. Sie sind nur informative Eigenschaften.

### RFC 9557 Format

Alle `Temporal`-Klassen können unter Verwendung des Formats gemäß [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) serialisiert und deserialisiert werden, das auf [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) basiert. Das Format in seiner vollständigen Form ist wie folgt (Leerzeichen dienen nur der Lesbarkeit und sollten im tatsächlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

Verschiedene Klassen haben unterschiedliche Anforderungen an die Anwesenheit jeder Komponente. In der Dokumentation jeder Klasse finden Sie einen Abschnitt mit dem Titel "RFC 9557 Format", der das von dieser Klasse erkannte Format spezifiziert.

Das ist sehr ähnlich zum [Datums-Zeit-String-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format), das von {{jsxref("Date")}} verwendet wird, welches ebenfalls auf ISO 8601 basiert. Die Hauptneuerung ist die Möglichkeit, Mikro- und Nanosekundenkomponenten anzugeben sowie die Zeitzone und das Kalendersystem zu spezifizieren.

### Darstellbare Daten

Alle `Temporal`-Objekte, die ein bestimmtes Kalendariumdatum darstellen, legen eine ähnliche Grenze für den Bereich der darstellbaren Daten fest, die ±10<sup>8</sup> Tage (einschließlich) ab der Unix-Epoche oder den Bereich der Momente von `-271821-04-20T00:00:00` bis `+275760-09-13T00:00:00` umfasst. Dies ist derselbe Bereich wie [gültige Daten](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). Genauer gesagt:

- {{jsxref("Temporal.Instant")}} und {{jsxref("Temporal.ZonedDateTime")}} wenden dieses Limit direkt auf ihren `epochNanoseconds`-Wert an.
- {{jsxref("Temporal.PlainDateTime")}} interpretiert das Datum und die Uhrzeit in der UTC-Zeitzone und erfordert, dass sie ±(10<sup>8</sup> + 1) Tage (exklusiv) von der Unix-Epoche entfernt sind, sodass ihr gültiger Bereich `-271821-04-19T00:00:00` bis `+275760-09-14T00:00:00` ist, exklusiv. Dies ermöglicht es jedem `ZonedDateTime`, unabhängig von seinem Offset in ein `PlainDateTime` konvertiert zu werden.
- {{jsxref("Temporal.PlainDate")}} führt die gleiche Überprüfung wie `PlainDateTime` zur Mittagszeit (12:00:00) dieses Datums durch, sodass ihr gültiger Bereich `-271821-04-19` bis `+275760-09-13` beträgt. Dies ermöglicht es jedem `PlainDateTime`, unabhängig von seiner Uhrzeit in ein `PlainDate` umgewandelt zu werden und umgekehrt.
- {{jsxref("Temporal.PlainYearMonth")}} hat den gültigen Bereich von `-271821-04` bis `+275760-09`. Dies ermöglicht es jedem `PlainDate`, unabhängig von seinem Datum (außer wenn der erste Tag eines nicht-ISO-Monats in den ISO-Monat `-271821-03` fällt) in ein `PlainYearMonth` umgewandelt zu werden.

Die `Temporal`-Objekte werden sich weigern, eine Instanz zu konstruieren, die ein Datum/Zeitp hätte, das über diesem Limit liegt. Dies schließt ein:

- Die Verwendung des Konstruktors oder der statischen Methode `from()`.
- Die Verwendung der Methode `with()` zur Aktualisierung von Kalendereinträgen.
- Die Verwendung von `add()`, `subtract()`, `round()` oder einer anderen Methode, um neue Instanzen abzuleiten.

## Statische Eigenschaften

- {{jsxref("Temporal.Duration")}}
  - : Stellt einen Unterschied zwischen zwei Zeitpunkten dar, der in der Datums-/Uhrzeitarithmetik verwendet werden kann. Es wird grundlegend als Kombination von Jahren, Monaten, Wochen, Tagen, Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden und Nanosekunden-Werten dargestellt.
- {{jsxref("Temporal.Instant")}}
  - : Stellt einen einzigartigen Punkt in der Zeit mit Nanosekundenpräzision dar. Es wird grundlegend als die Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) dargestellt, ohne jegliche Zeitzone oder Kalendersystem.
- {{jsxref("Temporal.Now")}}
  - : Bietet Methoden zum Abrufen der aktuellen Zeit in verschiedenen Formaten.
- {{jsxref("Temporal.PlainDate")}}
  - : Stellt ein Kalenderdatum dar (ein Datum ohne Zeit oder Zeitzone); zum Beispiel ein Ereignis in einem Kalender, das den ganzen Tag unabhängig von der Zeitzone geschieht, in der es stattfindet. Es wird grundlegend als ISO 8601-Kalenderdatum mit Jahr-, Monat- und Tagefeldern und einem zugehörigen Kalendersystem dargestellt.
- {{jsxref("Temporal.PlainDateTime")}}
  - : Stellt ein Datum (Kalenderdatum) und eine Uhrzeit (Wanduhrzeit) ohne Zeitzone dar. Es wird grundlegend als Kombination aus einem [Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate) (mit einem zugehörigen Kalendersystem) und einer [Zeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime) dargestellt.
- {{jsxref("Temporal.PlainMonthDay")}}
  - : Stellt den Monat und Tag eines Kalenderdatums dar, ohne Jahr oder Zeitzone; zum Beispiel ein Ereignis auf einem Kalender, das jedes Jahr wiederkehrt und den ganzen Tag über geschieht. Es wird grundlegend als ISO 8601-Kalenderdatum mit Jahr-, Monat- und Tagefeldern und einem zugehörigen Kalendersystem dargestellt. Das Jahr wird verwendet, um den Monat-Tag in nicht-ISO-Kalendersystemen zu klären.
- {{jsxref("Temporal.PlainTime")}}
  - : Stellt eine Zeit ohne Datum oder Zeitzone dar; zum Beispiel ein wiederkehrendes Ereignis, das jeden Tag zur gleichen Zeit stattfindet. Es wird grundlegend als Kombination von Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde und Nanosekunde dargestellt.
- {{jsxref("Temporal.PlainYearMonth")}}
  - : Stellt das Jahr und den Monat eines Kalenderdatums dar, ohne Tag oder Zeitzone; zum Beispiel ein Ereignis in einem Kalender, das den ganzen Monat über stattfindet. Es wird grundlegend als ISO 8601-Kalenderdatum mit Jahr-, Monat- und Tagefeldern und einem zugehörigen Kalendersystem dargestellt. Der Tag wird verwendet, um das Jahr-Monat in nicht-ISO-Kalendersystemen zu klären.
- {{jsxref("Temporal.ZonedDateTime")}}
  - : Stellt ein Datum und eine Uhrzeit mit einer Zeitzone dar. Es wird grundlegend als Kombination eines [Zeitpunkts](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und eines Kalendersystems dargestellt.
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
- [Temporal-Polyfill von den Vorschlagsbefürwortern](https://www.npmjs.com/package/@js-temporal/polyfill)
- [Temporal-Polyfill von FullCalendar](https://www.npmjs.com/package/temporal-polyfill)

---
title: Temporal
slug: Web/JavaScript/Reference/Global_Objects/Temporal
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Das **`Temporal`**-Objekt ermöglicht die Verwaltung von Datum und Uhrzeit in verschiedenen Szenarien, einschließlich integrierter Zeitzonen- und Kalenderdarstellung, Umwandlung von Wandzeit, Arithmetik, Formatierung und vielem mehr. Es ist als vollständiger Ersatz für das {{jsxref("Date")}}-Objekt konzipiert.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Temporal` kein Konstruktor. Sie können es nicht mit dem [`new` operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `Temporal`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Temporal` sind statisch (ähnlich wie das {{jsxref("Math")}}-Objekt).

`Temporal` verfügt über eine komplexe und leistungsstarke API. Es bietet über 200 Hilfsmethoden über mehrere Klassen, was es sehr komplex erscheinen lassen kann. Wir werden einen Überblick darüber geben, wie diese APIs miteinander in Beziehung stehen.

### Hintergrund und Konzepte

JavaScript hat das {{jsxref("Date")}}-Objekt zur Handhabung von Datum und Zeit seit seinen Anfängen. Die `Date`-API basiert jedoch auf der schlecht entworfenen `java.util.Date`-Klasse aus Java, die Anfang der 2010er Jahre ersetzt wurde. Aufgrund des Ziels der Rückwärtskompatibilität in JavaScript bleibt `Date` jedoch in der Sprache erhalten.

Das wichtige Vorab-Lernziel ist, dass **die Handhabung von Datum und Zeit komplex ist**. Die meisten Probleme von `Date` können durch das Hinzufügen weiterer Methoden behoben werden, aber ein grundlegender Designfehler bleibt bestehen: Es werden so viele Methoden auf demselben Objekt bereitgestellt, dass Entwickler oft verwirrt darüber sind, was sie verwenden sollen, was zu unerwarteten Fallstricken führt. Eine gut gestaltete API muss nicht nur mehr leisten, sondern auch pro Abstraktionsebene weniger tun, weil das Verhindern von Misbrauch genauso wichtig ist wie die Ermöglichung von Anwendungsfällen.

`Date`-Objekte haben zwei Funktionen gleichzeitig:

- Als [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date): die Anzahl der Millisekunden oder Nanosekunden, die seit einem festen Zeitpunkt (als _Epoch_ bekannt) vergangen sind.
- Als Kombination von [Komponenten](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_components_and_time_zones): Jahr, Monat, Tag, Stunde, Minute, Sekunde, Millisekunde und Nanosekunde. Die Identifikatoren Jahr, Monat und Tag haben nur mit Bezug auf ein _Kalendersystem_ Sinn. Die gesamte Kombination wird mit einer Zeitzone einem einzigartigen Moment in der Geschichte zugeordnet. `Date`-Objekte bieten Methoden zum Lesen und Ändern dieser Komponenten.

[Zeitzonen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) sind die Ursache für eine beträchtliche Anzahl von datumsbezogenen Fehlern. Bei der Interaktion mit einem `Date` über das Modell "Kombination von Komponenten" kann die Zeit nur in zwei Zeitzonen sein: UTC und lokal (Gerät), und es gibt keine Möglichkeit, eine beliebige Zeitzone anzugeben. Auch das Konzept der "keinen Zeitzone" fehlt: dies ist bekannt als _Kalenderdatum_ (für Daten) oder _Wandzeit_ (für Zeiten), was eine Zeit ist, die Sie "von einem Kalender oder einer Uhr ablesen". Wenn Sie beispielsweise einen täglichen Wecker einstellen, möchten Sie ihn auf "8:00 Uhr" einstellen, unabhängig davon, ob es sich um Sommerzeit handelt, ob Sie in eine andere Zeitzone gereist sind usw.

Eine zweite fehlende Funktion in `Date` ist ein [Kalendersystem](#kalender). Die meisten Menschen sind mit dem gregorianischen Kalender vertraut, bei dem es zwei Epochen gibt, v. Chr. und n. Chr.; es gibt 12 Monate; jeder Monat hat eine unterschiedliche Anzahl von Tagen; es gibt ein Schaltjahr alle 4 Jahre usw. Einige dieser Konzepte treffen jedoch möglicherweise nicht zu, wenn Sie mit einem anderen Kalendersystem arbeiten, wie zum Beispiel dem hebräischen Kalender, dem chinesischen Kalender, dem japanischen Kalender usw. Mit `Date` können Sie nur mit dem Modell des gregorianischen Kalenders arbeiten.

Es gibt viele andere unerwünschte Altlasten in Bezug auf `Date`, wie alle Methoden, die mutierenden sind (was oft unerwünschte Nebeneffekte verursacht), das [Format von Datum-Zeit-Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format), das auf konsistente Weise unmöglich zu parsen ist usw. Letztendlich ist die beste Lösung der Aufbau einer neuen API von Grund auf, was `Temporal` ist.

### API-Übersicht

`Temporal` ist ein Namensraum, wie {{jsxref("Intl")}}. Es enthält mehrere Klassen und Namensräume, die jeweils dafür ausgelegt sind, einen bestimmten Aspekt der Verwaltung von Datum und Uhrzeit zu behandeln. Die Klassen können folgendermaßen gruppiert werden:

- Darstellung einer Zeitspanne (ein Unterschied zwischen zwei Zeitpunkten): {{jsxref("Temporal.Duration")}}
- Darstellung eines Zeitpunkts:
  - Darstellung eines einzigartigen Moments in der Geschichte:
    - Als Zeitstempel: {{jsxref("Temporal.Instant")}}
    - Als Kombination von Datum-Zeit-Komponenten mit einer Zeitzone: {{jsxref("Temporal.ZonedDateTime")}}
  - Darstellung eines zeitzonenunabhängigen Datums/Zeitpunkts (alle mit "Plain" vorangestellt):
    - Datum (Jahr, Monat, Tag) + Uhrzeit (Stunde, Minute, Sekunde, Millisekunde, Nanosekunde): {{jsxref("Temporal.PlainDateTime")}} (Hinweis: `ZonedDateTime` entspricht `PlainDateTime` plus einer Zeitzone)
      - Datum (Jahr, Monat, Tag): {{jsxref("Temporal.PlainDate")}}
        - Jahr, Monat: {{jsxref("Temporal.PlainYearMonth")}}
        - Monat, Tag: {{jsxref("Temporal.PlainMonthDay")}}
      - Uhrzeit (Stunde, Minute, Sekunde, Millisekunde, Nanosekunde): {{jsxref("Temporal.PlainTime")}}

Zusätzlich gibt es auch einen anderen Utility-Namensraum, {{jsxref("Temporal.Now")}}, der Methoden zum Abrufen der aktuellen Zeit in verschiedenen Formaten bereitstellt.

### Gemeinsame Klassenoberfläche

Im `Temporal`-Namensraum gibt es viele Klassen, die viele ähnliche Methoden gemeinsam nutzen. Die folgende Tabelle listet alle Methoden jeder Klasse auf (außer [Konvertierungsmethoden](#konvertierung_zwischen_klassen)):

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

Die folgende Tabelle fasst zusammen, welche Eigenschaften in jeder Klasse verfügbar sind, und gibt Ihnen einen Überblick darüber, welche Informationen jede Klasse darstellen kann.

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
<th>Epoche</th>
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
<tr><td rowspan="7">zu...</td><th><code>Instant</code></th><td>/</td><td>{{jsxref("Temporal/ZonedDateTime/toInstant", "toInstant()")}}</td><td colspan="5">Zuerst in <code>ZonedDateTime</code> konvertieren</td></tr>
<tr><th><code>ZonedDateTime</code></th><td>{{jsxref("Temporal/Instant/toZonedDateTimeISO", "toZonedDateTimeISO()")}}</td><td>/</td><td>{{jsxref("Temporal/PlainDateTime/toZonedDateTime", "toZonedDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toZonedDateTime", "toZonedDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toZonedDateTime", "PlainDate#toZonedDateTime()")}} (als Argument übergeben)</td><td rowspan="2" colspan="2">Zuerst in <code>PlainDate</code> konvertieren</td></tr>
<tr><th><code>PlainDateTime</code></th><td rowspan="5">Zuerst in <code>ZonedDateTime</code> konvertieren</td><td>{{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "toPlainDateTime()")}}</td><td>/</td><td>{{jsxref("Temporal/PlainDate/toPlainDateTime", "toPlainDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toPlainDateTime", "PlainDate#toPlainDateTime()")}} (als Argument übergeben)</td></tr>
<tr><th><code>PlainDate</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainDate", "toPlainDate()")}}</td><td>/</td><td>Keine Überschneidung der Informationen</td><td>{{jsxref("Temporal/PlainYearMonth/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainMonthDay/toPlainDate", "toPlainDate()")}}</td></tr>
<tr><th><code>PlainTime</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainTime", "toPlainTime()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainTime", "toPlainTime()")}}</td><td>Keine Überschneidung der Informationen</td><td>/</td><td colspan="2">Keine Überschneidung der Informationen</td></tr>
<tr><th><code>PlainYearMonth</code></th><td rowspan="2" colspan="2">Zuerst in <code>PlainDate</code> konvertieren</td><td>{{jsxref("Temporal/PlainDate/toPlainYearMonth", "toPlainYearMonth()")}}</td><td rowspan="2">Keine Überschneidung der Informationen</td><td>/</td><td>Zuerst in <code>PlainDate</code> konvertieren</td></tr>
<tr><th><code>PlainMonthDay</code></th><td>{{jsxref("Temporal/PlainDate/toPlainMonthDay", "toPlainMonthDay()")}}</td><td>Zuerst in <code>PlainDate</code> konvertieren</td><td>/</td></tr>
</tbody>
</table>

Mit diesen Tabellen sollten Sie eine grundlegende Idee haben, wie Sie sich in der `Temporal`-API zurechtfinden können.

### Kalender

Ein Kalender ist eine Methode, um Tage zu organisieren, typischerweise in Perioden von Wochen, Monaten, Jahren und Epochen. Die meisten der Welt nutzen den gregorianischen Kalender, aber es gibt viele andere Kalender in Verwendung, besonders in religiösen und kulturellen Zusammenhängen. Standardmäßig verwenden alle kalenderbezogenen `Temporal`-Objekte das ISO 8601-Kalendersystem, das auf dem gregorianischen Kalender basiert und zusätzliche Regeln für die Nummerierung von Wochen definiert. {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}} listet die Kalender auf, die wahrscheinlich von Browsern unterstützt werden. Hier geben wir einen kurzen Überblick über die Entstehung von Kalendersystemen, um Ihnen zu helfen, die Faktoren zu verstehen, die zwischen Kalendern variieren können.

Es gibt drei bedeutende periodische Ereignisse auf der Erde: ihre Rotation um die Sonne (365,242 Tage für eine Umdrehung), die Rotation des Mondes um die Erde (29,53 Tage von Neumond zu Neumond) und ihre Rotation um die eigene Achse (24 Stunden von Sonnenaufgang zu Sonnenaufgang). Jede Kultur hat das gleiche Maß eines "Tages", das 24 Stunden beträgt. Gelegentliche Änderungen wie die Sommerzeit sind nicht Teil des Kalenders, sondern gehören zur Information der [Zeitzone](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets).

- Einige Kalender definieren ein Jahr hauptsächlich als durchschnittlich 365,242 Tage, indem Jahre mit 365 Tagen definiert werden und etwa alle 4 Jahre ein zusätzlicher Tag, der _Schalttag_, hinzugefügt wird. Dann kann das Jahr weiter in Teile namens Monate geteilt werden. Diese Kalender werden _Sonnenkalender_ genannt. Der gregorianische Kalender und der Solare Hijri-Kalender sind Sonnenkalender.
- Einige Kalender definieren einen Monat hauptsächlich als durchschnittlich 29,5 Tage, indem Monate abwechselnd 29 und 30 Tage haben. Dann können 12 Monate zu einem Jahr von 354 Tagen zusammengefasst werden. Diese Kalender werden _Mondkalender_ genannt. Der islamische Kalender ist ein Mondkalender. Da ein Mondjahr künstlich und nicht mit dem Jahreszeitenzyklus korreliert, sind Mondkalender im Allgemeinen seltener.
- Einige Kalender definieren Monate auch hauptsächlich basierend auf Mondzyklen, ähnlich wie Mondkalender. Dann, um die 11-Tage-Diskrepanz mit dem Sonnenjahr auszugleichen, wird etwa alle 3 Jahre ein zusätzlicher Monat, der _Schaltmonat_, hinzugefügt. Diese Kalender werden _lunisolare Kalender_ genannt. Der hebräische Kalender und der chinesische Kalender sind lunisolare Kalender.

In `Temporal` wird jedes Datum unter einem Kalendersystem eindeutig durch drei Komponenten identifiziert: `year`, `month` und `day`. `year` ist eine Ganzzahl, die null oder negativ sein kann, und die monoton über die Zeit zunimmt. Das Jahr `1` (oder `0`, falls vorhanden) ist als Kalenderepoche bekannt und für jeden Kalender willkürlich. `month` ist eine Ganzzahl, die sich bei jedem Mal um 1 erhöht, beginnend bei `1` und endend bei `date.monthsInYear`, und dann wieder zurück zu `1` gesetzt wird, während das Jahr voranschreitet. `day` ist ebenfalls eine positive Ganzzahl, aber es kann nicht bei 1 beginnen oder sich bei jedem Mal um 1 erhöhen, da politische Änderungen dazu führen können, dass Tage übersprungen oder wiederholt werden. Aber im Allgemeinen erhöht sich `day` monoton und wird zurückgesetzt, während der Monat voranschreitet.

Neben dem `year` kann ein Jahr auch durch die Kombination von `era` und `eraYear` eindeutig identifiziert werden, für Kalender, die Epochen verwenden. Zum Beispiel verwendet der gregorianische Kalender die Epoche "CE" (Common Era) und "BCE" (Before Common Era), und das Jahr `-1` ist dasselbe wie `{ era: "bce", eraYear: 1 }`. `era` ist ein Kleinbuchstabentext und `eraYear` ist eine willkürliche Ganzzahl, die null oder negativ sein kann und sogar mit der Zeit abnehmen kann (normalerweise für die älteste Epoche).

> [!NOTE]
> Verwenden Sie immer `era` und `eraYear` als Paar; verwenden Sie eine Eigenschaft nicht ohne die andere. Um Konflikte zu vermeiden, kombinieren Sie `year` nicht mit `era`/`eraYear`, wenn Sie ein Jahr festlegen. Wählen Sie eine Jahresdarstellung und verwenden Sie diese durchgängig.
>
> Achten Sie auf die folgenden falschen Annahmen über Jahre:
>
> - Gehen Sie nicht davon aus, dass `era` und `eraYear` immer vorhanden sind; sie können `undefined` sein.
> - Gehen Sie nicht davon aus, dass `era` eine benutzerfreundliche Zeichenkette ist; verwenden Sie `toLocaleString()`, um Ihr Datum zu formatieren.
> - Gehen Sie nicht davon aus, dass zwei `year`-Werte aus verschiedenen Kalendern vergleichbar sind; verwenden Sie stattdessen die statische Methode `compare()`.
> - Gehen Sie nicht davon aus, dass Jahre 365/366 Tage und 12 Monate haben; verwenden Sie stattdessen `daysInYear` und `monthsInYear`.
> - Gehen Sie nicht davon aus, dass Schaltjahre (`inLeapYear` ist `true`) einen zusätzlichen Tag haben; sie können einen zusätzlichen Monat haben.

Neben dem `month` kann ein Monat in einem Jahr auch durch den `monthCode` eindeutig identifiziert werden. `monthCode` entspricht normalerweise dem Namen des Monats, aber `month` nicht. Zum Beispiel, im Fall von lunisolaren Kalendern, haben zwei Monate mit dem selben `monthCode`, wobei einer zu einem Schaltjahr gehört und der andere nicht, unterschiedliche `month`-Werte, wenn sie nach dem Schaltmonat kommen, aufgrund des Einfügens eines zusätzlichen Monats.

> [!NOTE]
> Um Konflikte zu vermeiden, kombinieren Sie `month` und `monthCode` nicht, wenn Sie einen Monat festlegen. Wählen Sie eine Monatsdarstellung und verwenden Sie diese durchgängig. `month` ist nützlicher, wenn Sie die Reihenfolge der Monate in einem Jahr benötigen (z. B. beim Durchlaufen der Monate), während `monthCode` nützlicher ist, wenn Sie den Namen des Monats benötigen (z. B. beim Speichern von Geburtstagen).
>
> Achten Sie auf die folgenden falschen Annahmen über Monate:
>
> - Gehen Sie nicht davon aus, dass `monthCode` und `month` immer übereinstimmen.
> - Gehen Sie nicht von der Anzahl der Tage in einem Monat aus; verwenden Sie stattdessen `daysInMonth`.
> - Gehen Sie nicht davon aus, dass `monthCode` eine benutzerfreundliche Zeichenkette ist; verwenden Sie `toLocaleString()`, um Ihr Datum zu formatieren.
> - Im Allgemeinen sollten Sie den Namen von Monaten nicht in einem Array oder Objekt zwischenspeichern. Obwohl `monthCode` normalerweise mit dem Namen des Monats innerhalb eines Kalenders übereinstimmt, empfehlen wir immer, den Monatsnamen zu berechnen, indem Sie beispielsweise `date.toLocaleString("en-US", { calendar: date.calendarId, month: "long" })` verwenden.

Zusätzlich zu `day` (das ein monatsbasierter Index ist), kann ein Tag in einem Jahr auch durch `dayOfYear` eindeutig identifiziert werden. `dayOfYear` ist eine positive Ganzzahl, die sich jedes Mal um 1 erhöht, beginnend bei `1` und endend bei `date.daysInYear`.

Das Konzept einer "Woche" ist nicht mit einem astronomischen Ereignis verbunden, sondern ein kulturelles Konstrukt. Daher können Wochen 4, 5, 6, 8 oder mehr Tage haben oder nicht einmal eine feste Anzahl von Tagen. Um die spezifische Anzahl von Tagen der Woche eines Datums zu erhalten, verwenden Sie die `daysInWeek` des Datums. `Temporal` identifiziert Wochen durch die Kombination von `weekOfYear` und `yearOfWeek`. `weekOfYear` ist eine positive Ganzzahl, die sich jedes Mal um 1 erhöht, beginnend bei `1` und dann wieder auf `1` zurückgesetzt, während das Jahr voranschreitet. `yearOfWeek` ist im Allgemeinen dasselbe wie `year`, kann jedoch zu Beginn oder Ende jedes Jahres anders sein, da eine Woche zwei Jahre überschreiten kann, und `yearOfWeek` wählt, je nach den Regeln des Kalenders, eines der beiden Jahre aus.

> [!NOTE]
> Verwenden Sie immer `weekOfYear` und `yearOfWeek` als Paar; nutzen Sie nicht `weekOfYear` und `year`.
>
> Achten Sie auf die folgenden falschen Annahmen über Wochen:
>
> - Gehen Sie nicht davon aus, dass `weekOfYear` und `yearOfWeek` immer vorhanden sind; sie können `undefined` sein.
> - Gehen Sie nicht davon aus, dass Wochen immer 7 Tage lang sind; verwenden Sie stattdessen `daysInWeek`.
> - Beachten Sie, dass die aktuelle `Temporal`-API keine Jahr-Woche-Daten unterstützt, sodass Sie keine Daten mit diesen Eigenschaften erstellen oder Daten in Jahr-Woche-Darstellungen serialisieren können. Diese sind nur informelle Eigenschaften.

### RFC 9557-Format

Alle `Temporal`-Klassen können unter Verwendung des Formats gemäß [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) serialisiert und deserialisiert werden, das auf [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) basiert. Das Format, in seiner vollständigen Form, ist wie folgt (Zwischenräume sind nur zur Lesbarkeit und sollten im tatsächlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm:ss.sssssssss [time_zone_id] [u-ca=calendar_id]
```

Verschiedene Klassen haben unterschiedliche Anforderungen an die Anwesenheit der einzelnen Komponenten, weshalb Sie in der Dokumentation jeder Klasse einen Abschnitt mit dem Titel "RFC 9557-Format" finden, der das von dieser Klasse anerkannte Format spezifiziert.

Dies ist dem [Format von Datum-Zeit-Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) von {{jsxref("Date")}} sehr ähnlich, das ebenfalls auf ISO 8601 basiert. Die Hauptzugabe ist die Möglichkeit, Mikro- und Nanosekunden-Komponenten anzugeben, sowie die Möglichkeit, das Zeitzonen- und Kalendersystem anzugeben.

## Statische Eigenschaften

- {{jsxref("Temporal.Duration")}}
  - : Repräsentiert einen Unterschied zwischen zwei Zeitpunkten, der in Datum-/Zeit-Arithmetik verwendet werden kann. Es wird im Wesentlichen als Kombination aus Jahren, Monaten, Wochen, Tagen, Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden und Nanosekunden dargestellt.
- {{jsxref("Temporal.Instant")}}
  - : Repräsentiert einen einzigartigen Punkt in der Geschichte mit Nanosekundenpräzision. Es wird im Wesentlichen als die Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht am Beginn des 1. Januar 1970, UTC) dargestellt, ohne Berücksichtigung eines Zeitzonen- oder Kalendersystems.
- {{jsxref("Temporal.Now")}}
  - : Bietet Methoden zum Abrufen der aktuellen Zeit in verschiedenen Formaten.
- {{jsxref("Temporal.PlainDate")}}
  - : Repräsentiert ein Kalenderdatum (ein Datum ohne Zeit oder Zeitzone); zum Beispiel ein Ereignis in einem Kalender, das den ganzen Tag stattfindet, unabhängig davon, in welcher Zeitzone es stattfindet. Es wird im Wesentlichen als ein ISO 8601-Kalenderdatum mit den Feldern Jahr, Monat und Tag und einem zugeordneten Kalendersystem dargestellt.
- {{jsxref("Temporal.PlainDateTime")}}
  - : Repräsentiert ein Datum (Kalenderdatum) und eine Uhrzeit (Wandzeit) ohne Zeitzone. Es wird im Wesentlichen als Kombination aus einem [Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate) (mit einem zugeordneten Kalendersystem) und einer [Uhrzeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime) dargestellt.
- {{jsxref("Temporal.PlainMonthDay")}}
  - : Repräsentiert den Monat und den Tag eines Kalenderdatums, ohne Jahr oder Zeitzone; zum Beispiel ein Ereignis in einem Kalender, das jedes Jahr wiederkehrt und den ganzen Tag stattfindet. Es wird im Wesentlichen als ein ISO 8601-Kalenderdatum mit den Feldern Jahr, Monat und Tag und einem zugeordneten Kalendersystem dargestellt. Das Jahr wird verwendet, um den Monat-Tag in nicht-ISO-Kalendersystemen eindeutig zu identifizieren.
- {{jsxref("Temporal.PlainTime")}}
  - : Repräsentiert eine Uhrzeit ohne Datum oder Zeitzone; zum Beispiel ein wiederkehrendes Ereignis, das jeden Tag zur gleichen Zeit stattfindet. Es wird im Wesentlichen als Kombination von Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde und Nanosekunde dargestellt.
- {{jsxref("Temporal.PlainYearMonth")}}
  - : Repräsentiert das Jahr und den Monat eines Kalenderdatums, ohne Tag oder Zeitzone; zum Beispiel ein Ereignis in einem Kalender, das den ganzen Monat stattfindet. Es wird im Wesentlichen als ein ISO 8601-Kalenderdatum mit den Feldern Jahr, Monat und Tag dargestellt, wobei das Jahr verwendet wird, um den Jahr-Monat in nicht-ISO-Kalendersystemen eindeutig zu identifizieren.
- {{jsxref("Temporal.ZonedDateTime")}}
  - : Repräsentiert ein Datum und eine Uhrzeit mit einer Zeitzone. Es wird im Wesentlichen als Kombination aus einem [Moment](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und einem Kalendersystem dargestellt.
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

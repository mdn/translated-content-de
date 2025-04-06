---
title: Temporal
slug: Web/JavaScript/Reference/Global_Objects/Temporal
l10n:
  sourceCommit: ca7433e976637205b5292a6bd9a7357c4ac01557
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal`**-Objekt ermöglicht die Verwaltung von Datum und Uhrzeit in verschiedenen Szenarien, einschließlich der eingebauten Darstellung von Zeitzonen und Kalendern, Wanduhren-Zeitumwandlungen, Arithmetik, Formatierung und mehr. Es wurde als vollständiger Ersatz für das {{jsxref("Date")}}-Objekt konzipiert.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Temporal` kein Konstruktor. Sie können es weder mit dem [`new`-Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden, noch das `Temporal`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Temporal` sind statisch (ähnlich dem {{jsxref("Math")}}-Objekt).

`Temporal` hat eine komplizierte und leistungsstarke API. Es stellt über 200 Hilfsmethoden über mehrere Klassen zur Verfügung, sodass es sehr komplex erscheinen kann. Wir werden einen Überblick darüber geben, wie diese APIs miteinander in Beziehung stehen.

### Hintergrund und Konzepte

JavaScript verfügt seit seinen ersten Tagen über das {{jsxref("Date")}}-Objekt zur Handhabung von Datum und Uhrzeit. Die `Date`-API basiert jedoch auf der schlecht gestalteten Klasse `java.util.Date` aus Java, die bereits Anfang der 2010er Jahre ersetzt wurde. Aufgrund des Ziels der Rückwärtskompatibilität von JavaScript bleibt `Date` jedoch in der Sprache erhalten.

Die wichtige Lektion, die dieser Einführung vorausgehen sollte, ist, dass **das Handling von Daten komplex ist**. Die meisten Probleme von `Date` lassen sich durch das Hinzufügen weiterer Methoden beheben, aber ein grundlegender Designfehler bleibt bestehen: Es stellt so viele Methoden für dasselbe Objekt zur Verfügung, dass Entwickler oft verwirrt sind, was verwendet werden soll, was zu unerwarteten Fallstricken führt. Eine gut gestaltete API muss nicht nur mehr leisten, sondern sollte auf jeder Abstraktionsebene _weniger_ tun, da das Verhindern von Fehlanwendungen genauso wichtig ist wie das Ermöglichen von Anwendungsfällen.

`Date`-Objekte tragen gleichzeitig zwei Hüte:

- Als [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date): die Anzahl der Millisekunden oder Nanosekunden, die seit einem festen Zeitpunkt vergangen sind (bekannt als _Epoch_).
- Als Kombination von [Komponenten](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_components_and_time_zones): Jahr, Monat, Tag, Stunde, Minute, Sekunde, Millisekunde und Nanosekunde. Die Jahr-, Monat- und Tagsbezeichnungen machen nur in Bezug auf ein _Kalendersystem_ Sinn. Die ganze Kombination entspricht einem einzigartigen Augenblick in der Geschichte, wenn eine Zeitzone hinzugefügt wird. `Date`-Objekte bieten Methoden zum Lesen und Ändern dieser Komponenten.

[Zeitzonen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) sind Grund für eine beträchtliche Anzahl datumsbezogener Fehler. Wenn Sie mit einem `Date`-Objekt durch das "Kombination von Komponenten"-Modell interagieren, kann die Zeit nur in zwei Zeitzonen sein: UTC und lokal (Gerät), und es gibt keine Möglichkeit, eine beliebige Zeitzone anzugeben. Außerdem fehlt das Konzept von "keine Zeitzone": Dies wird als _Kalenderdatum_ (für Daten) oder _Wanduhrenzeit_ (für Zeiten) bezeichnet, was eine Zeit ist, die Sie "von einem Kalender oder einer Uhr ablesen". Zum Beispiel, wenn Sie einen täglichen Wecker stellen, möchten Sie ihn auf "8:00 Uhr" einstellen, unabhängig davon, ob Sommerzeit ist oder nicht, ob Sie in eine andere Zeitzone gereist sind, usw.

Ein weiteres fehlendes Merkmal von `Date` ist ein [Kalendersystem](#kalender). Die meisten Menschen kennen wahrscheinlich den gregorianischen Kalender, in dem es zwei Epochen, BC und AD gibt; es gibt 12 Monate; jeder Monat hat eine unterschiedliche Anzahl von Tagen; es gibt alle 4 Jahre ein Schaltjahr; und so weiter. Einige dieser Konzepte können jedoch nicht zutreffen, wenn Sie mit einem anderen Kalendersystem arbeiten, wie dem hebräischen Kalender, dem chinesischen Kalender, dem japanischen Kalender usw. Mit `Date` können Sie nur mit dem gregorianischen Kalendermodell arbeiten.

Es gibt viele andere unerwünschte Altlasten bei `Date`, wie zum Beispiel, dass alle Setter ändernd sind (was oft unerwünschte Nebenwirkungen verursacht), das [Datumszeit-String-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) nicht konsistent geparst werden kann usw. Letztendlich ist die beste Lösung, eine neue API von Grund auf zu erstellen, was `Temporal` ist.

### API-Übersicht

`Temporal` ist ein Namensraum, wie {{jsxref("Intl")}}. Es enthält mehrere Klassen und Namensräume, die jeweils entwickelt wurden, um einen bestimmten Aspekt der Verwaltung von Datum und Uhrzeit zu handhaben. Die Klassen können wie folgt gruppiert werden:

- Darstellung einer Zeitdauer (ein Unterschied zwischen zwei Zeitpunkten): {{jsxref("Temporal.Duration")}}
- Darstellung eines Zeitpunkts:
  - Darstellung eines einzigartigen Augenblicks in der Geschichte:
    - Als Zeitstempel: {{jsxref("Temporal.Instant")}}
    - Als Kombination von Datum-Zeit-Komponenten gepaart mit einer Zeitzone: {{jsxref("Temporal.ZonedDateTime")}}
  - Darstellung eines zeitzonenunabhängigen Datums/Zeit (die alle mit "Plain" beginnen):
    - Datum (Jahr, Monat, Tag) + Zeit (Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde, Nanosekunde): {{jsxref("Temporal.PlainDateTime")}} (Hinweis: `ZonedDateTime` entspricht `PlainDateTime` zuzüglich einer Zeitzone)
      - Datum (Jahr, Monat, Tag): {{jsxref("Temporal.PlainDate")}}
        - Jahr, Monat: {{jsxref("Temporal.PlainYearMonth")}}
        - Monat, Tag: {{jsxref("Temporal.PlainMonthDay")}}
      - Zeit (Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde, Nanosekunde): {{jsxref("Temporal.PlainTime")}}

Darüber hinaus gibt es einen zusätzlichen Hilfsnamensraum, {{jsxref("Temporal.Now")}}, der Methoden zum Abrufen der aktuellen Zeit in verschiedenen Formaten bereitstellt.

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
<th>Aktualisierung</th>
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

Die folgende Tabelle fasst zusammen, welche Eigenschaften in jeder Klasse verfügbar sind und vermittelt Ihnen ein Gefühl dafür, welche Informationen jede Klasse darstellen kann.

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
<th>Monatbezogen</th>
<td>N/A</td>
<td>{{jsxref("Temporal/ZonedDateTime/month", "month")}}<br>{{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/month", "month")}}<br>{{jsxref("Temporal/PlainDateTime/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainDateTime/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainDate/month", "month")}}<br>{{jsxref("Temporal/PlainDate/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainDate/daysInMonth", "daysInMonth")}}</td>
<td>N/A</td>
<td>{{jsxref("Temporal/PlainYearMonth/month", "month")}}<br>{{jsxref("Temporal/PlainYearMonth/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainYearMonth/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/monthCode", "monthCode")}}</td>
</tr>
<tr>
<th>Wochennah</th>
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
<td colspan="7">Wie man von ... konvertiert</td>
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
<tr><td rowspan="7">nach ...</td><th><code>Instant</code></th><td>/</td><td>{{jsxref("Temporal/ZonedDateTime/toInstant", "toInstant()")}}</td><td colspan="5">Zuerst in <code>ZonedDateTime</code> konvertieren</td></tr>
<tr><th><code>ZonedDateTime</code></th><td>{{jsxref("Temporal/Instant/toZonedDateTimeISO", "toZonedDateTimeISO()")}}</td><td>/</td><td>{{jsxref("Temporal/PlainDateTime/toZonedDateTime", "toZonedDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toZonedDateTime", "toZonedDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toZonedDateTime", "PlainDate#toZonedDateTime()")}} (als Argument übergeben)</td><td rowspan="2" colspan="2">Zuerst in <code>PlainDate</code> konvertieren</td></tr>
<tr><th><code>PlainDateTime</code></th><td rowspan="5">Zuerst in <code>ZonedDateTime</code> konvertieren</td><td>{{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "toPlainDateTime()")}}</td><td>/</td><td>{{jsxref("Temporal/PlainDate/toPlainDateTime", "toPlainDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toPlainDateTime", "PlainDate#toPlainDateTime()")}} (als Argument übergeben)</td></tr>
<tr><th><code>PlainDate</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainDate", "toPlainDate()")}}</td><td>/</td><td>Keine Überschneidung in den Informationen</td><td>{{jsxref("Temporal/PlainYearMonth/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainMonthDay/toPlainDate", "toPlainDate()")}}</td></tr>
<tr><th><code>PlainTime</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainTime", "toPlainTime()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainTime", "toPlainTime()")}}</td><td>Keine Überschneidung in den Informationen</td><td>/</td><td colspan="2">Keine Überschneidung in den Informationen</td></tr>
<tr><th><code>PlainYearMonth</code></th><td rowspan="2" colspan="2">Zuerst in <code>PlainDate</code> konvertieren</td><td>{{jsxref("Temporal/PlainDate/toPlainYearMonth", "toPlainYearMonth()")}}</td><td rowspan="2">Keine Überschneidung in den Informationen</td><td>/</td><td>Zuerst in <code>PlainDate</code> konvertieren</td></tr>
<tr><th><code>PlainMonthDay</code></th><td>{{jsxref("Temporal/PlainDate/toPlainMonthDay", "toPlainMonthDay()")}}</td><td>Zuerst in <code>PlainDate</code> konvertieren</td><td>/</td></tr>
</tbody>
</table>

Mit diesen Tabellen sollten Sie eine grundlegende Vorstellung davon haben, wie Sie die `Temporal`-API navigieren.

### Kalender

Ein Kalender ist eine Methode zur Organisation von Tagen, typischerweise in Perioden von Wochen, Monaten, Jahren und Epochen. Der größte Teil der Welt verwendet den gregorianischen Kalender, aber es gibt viele andere Kalender, insbesondere in religiösen und kulturellen Kontexten. Standardmäßig verwenden alle kalenderbewussten `Temporal`-Objekte das ISO 8601-Kalendersystem, das auf dem gregorianischen Kalender basiert und zusätzliche Wochen-Nummerierungsregeln definiert. [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) listet die meisten der Kalender auf, von denen Browser wahrscheinlich unterstützt werden. Hier bieten wir einen Überblick darüber, wie Kalendersysteme gebildet werden, um Ihnen zu helfen, zu verstehen, welche Faktoren zwischen Kalendern variieren können.

Es gibt drei prominente periodische Ereignisse auf der Erde: ihre Umlaufbahn um die Sonne (365,242 Tage für eine Umdrehung), die Umlaufbahn des Mondes um die Erde (29,53 Tage von Neumond zu Neumond), und ihre Rotation um ihre Achse (24 Stunden von Sonnenaufgang zu Sonnenaufgang). Jedes Kultur hat das gleiche Maß für einen "Tag", nämlich 24 Stunden. Gelegentliche Änderungen wie die Sommerzeit gehören nicht zum Kalender, sondern sind Teil der [Zeitzonen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets)-Informationen.

- Einige Kalender definieren primär ein Jahr als durchschnittlich 365,242 Tage, indem sie Jahre zu 365 Tagen definieren und alle 4 Jahre einen zusätzlichen Tag, den _Schalttag_, hinzufügen. Dann kann das Jahr weiter in Teile namens Monate unterteilt werden. Diese Kalender werden _Sonnenkalender_ genannt. Der gregorianische Kalender und der Solar Hijri Kalender sind Sonnenkalender.
- Einige Kalender definieren primär einen Monat als durchschnittlich 29,5 Tage, indem sie Monate abwechselnd auf 29 und 30 Tage definieren. Dann können 12 Monate zu einem Jahr von 354 Tagen gruppiert werden. Diese Kalender werden _Mondkalender_ genannt. Der islamische Kalender ist ein Mondkalender. Da ein Mondjahr künstlich ist und nicht mit dem Jahreszeitenzyklus korreliert, sind Mondkalender generell seltener.
- Einige Kalender definieren auch primär Monate basierend auf Mondzyklen, ähnlich wie Mondkalender. Dann wird zur Kompensation der 11-Tage-Abweichung zum Sonnenjahr etwa alle 3 Jahre ein zusätzlicher Monat, der _Schaltmonat_, hinzugefügt. Diese Kalender werden _lunisolare Kalender_ genannt. Der hebräische Kalender und der chinesische Kalender sind lunisolare Kalender.

In `Temporal` wird jedes Datum in einem Kalendersystem eindeutig durch drei Komponenten identifiziert: `year`, `month` und `day`. Während `year` typischerweise eine positive ganze Zahl ist, kann es auch null oder negativ sein und erhöht sich monotone mit der Zeit. Das Jahr `1` (oder `0`, falls vorhanden) ist bekannt als der Kalenderstart und ist für jeden Kalender willkürlich. `month` ist eine positive ganze Zahl, die jedes Mal um 1 erhöht wird, beginnend bei `1` und endend bei `date.monthsInYear`, dann zurück zu `1`, während das Jahr voranschreitet. `day` ist ebenfalls eine positive ganze Zahl, kann aber nicht immer bei 1 beginnen oder jedes Mal um 1 erhöht werden, da politische Veränderungen dazu führen können, dass Tage übersprungen oder wiederholt werden. Aber im Allgemeinen erhöht sich `day` monoton und setzt sich zurück, während der Monat fortschreitet.

Zusätzlich zu `year` kann ein Jahr auch durch die Kombination von `era` und `eraYear` eindeutig identifiziert werden, für Kalender, die Epochen verwenden. Zum Beispiel verwendet der gregorianische Kalender die Epoche "CE" (Common Era) und "BCE" (Before Common Era), und das Jahr `-1` entspricht `{ era: "bce", eraYear: 1 }`. `era` ist eine kleingeschriebene Zeichenkette, und `eraYear` ist eine beliebige ganze Zahl, die null oder negativ sein oder sogar mit der Zeit abnehmen kann (normalerweise für die älteste Epoche).

> [!NOTE]
> Verwenden Sie immer `era` und `eraYear` als Paar; nutzen Sie nicht eine Eigenschaft ohne die andere. Um Konflikte zu vermeiden, kombinieren Sie nicht `year` und `era`/`eraYear`, wenn Sie ein Jahr angeben. Wählen Sie eine Jahresdarstellung und verwenden Sie sie konsistent.
>
> Seien Sie vorsichtig bei den folgenden falschen Annahmen über Jahre:
>
> - Gehen Sie nicht davon aus, dass `era` und `eraYear` immer vorhanden sind; sie können `undefined` sein.
> - Gehen Sie nicht davon aus, dass `era` eine benutzerfreundliche Zeichenkette ist; verwenden Sie `toLocaleString()`, um Ihr Datum zu formatieren.
> - Gehen Sie nicht davon aus, dass zwei `year`-Werte aus verschiedenen Kalendern vergleichbar sind; verwenden Sie stattdessen die statische Methode `compare()`.
> - Gehen Sie nicht davon aus, dass Jahre 365/366 Tage und 12 Monate haben; verwenden Sie stattdessen `daysInYear` und `monthsInYear`.
> - Gehen Sie nicht davon aus, dass Schaltjahre (`inLeapYear` ist `true`) einen Tag mehr haben; sie können einen zusätzlichen Monat haben.

Zusätzlich zu `month` kann ein Monat in einem Jahr auch durch den `monthCode` eindeutig identifiziert werden. `monthCode` entspricht normalerweise dem Namen des Monats, aber `month` nicht. Zum Beispiel können im Fall von lunisolarer Kalender zwei Monate mit demselben `monthCode`, wobei einer zu einem Schaltjahr gehört und der andere nicht, unterschiedliche `month`-Werte haben, wenn sie auf den Schaltmonat folgen, aufgrund der Einfügung eines zusätzlichen Monats.

> [!NOTE]
> Um Konflikte zu vermeiden, kombinieren Sie nicht `month` und `monthCode`, wenn Sie einen Monat angeben. Wählen Sie eine Monatsdarstellung und verwenden Sie sie konsistent. `month` ist nützlicher, wenn Sie die Reihenfolge der Monate in einem Jahr benötigen (z. B. beim Durchlaufen der Monate), während `monthCode` nützlicher ist, wenn Sie den Namen des Monats benötigen (z. B. beim Speichern von Geburtstagen).
>
> Seien Sie vorsichtig bei den folgenden falschen Annahmen über Monate:
>
> - Gehen Sie nicht davon aus, dass `monthCode` und `month` immer übereinstimmen.
> - Gehen Sie nicht davon aus, dass die Anzahl der Tage in einem Monat konstant ist; verwenden Sie stattdessen `daysInMonth`.
> - Gehen Sie nicht davon aus, dass `monthCode` eine benutzerfreundliche Zeichenkette ist; verwenden Sie `toLocaleString()`, um Ihr Datum zu formatieren.
> - Im Allgemeinen sollten Sie den Namen der Monate nicht in einem Array oder Objekt zwischenspeichern. Auch wenn `monthCode` normalerweise innerhalb eines Kalenders dem Namen des Monats entspricht, empfehlen wir, den Monatsnamen immer mit Methoden wie `date.toLocaleString("en-US", { calendar: date.calendarId, month: "long" })` zu berechnen.

Neben `day` (das ist ein monatsbasierter Index) kann ein Tag in einem Jahr auch durch den `dayOfYear` eindeutig identifiziert werden. `dayOfYear` ist eine positive Ganzzahl, die jedes Mal um 1 erhöht wird, beginnend bei `1` und endend bei `date.daysInYear`.

Das Konzept einer "Woche" ist mit keinem astronomischen Ereignis verkettet, sondern ein kulturelles Konstrukt. Während die gebräuchlichste Länge `7` Tage ist, können Wochen auch 4, 5, 6, 8 oder mehr Tage haben — oder sogar völlig variabel sein. Um die spezifische Anzahl der Tage der Woche eines Datums zu erhalten, verwenden Sie die `daysInWeek`-Eigenschaft des Datums. `Temporal` identifiziert Wochen durch die Kombination von `weekOfYear` und `yearOfWeek`. `weekOfYear` ist eine positive Ganzzahl, die sich jedes Mal um 1 erhöht, beginnend bei `1`, dann zurück zu `1`, während das Jahr fortschreitet. `yearOfWeek` ist im Allgemeinen dasselbe wie `year`, kann aber zu Beginn oder Ende eines jeden Jahres unterschiedlich sein, da eine Woche zwei Jahre umfassen kann, und `yearOfWeek` wählt eines der beiden Jahre basierend auf den Regeln des Kalenders.

> [!NOTE]
> Verwenden Sie immer `weekOfYear` und `yearOfWeek` als Paar; verwenden Sie nicht `weekOfYear` und `year`.
>
> Seien Sie vorsichtig bei den folgenden falschen Annahmen über Wochen:
>
> - Gehen Sie nicht davon aus, dass `weekOfYear` und `yearOfWeek` immer vorhanden sind; sie können `undefined` sein.
> - Gehen Sie nicht davon aus, dass Wochen immer 7 Tage lang sind; verwenden Sie stattdessen `daysInWeek`.
> - Beachten Sie, dass die aktuelle `Temporal`-API keine Jahres-Woche-Daten unterstützt, sodass Sie keine Daten mit diesen Eigenschaften konstruieren oder Daten in Jahres-Woche-Darstellungen serialisieren können. Sie sind lediglich informationelle Eigenschaften.

### RFC 9557-Format

Alle `Temporal`-Klassen können im Format des [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) serialisiert und deserialisiert werden, das auf [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) basiert. Das Format, in seiner vollständigen Form, lautet wie folgt (Leerzeichen sind nur zur Lesbarkeit vorhanden und sollten im tatsächlichen Zeichenstring nicht vorkommen):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

Verschiedene Klassen haben unterschiedliche Anforderungen an die Präsenz jedes Komponents, sodass Sie in der Dokumentation jeder Klasse einen Abschnitt mit dem Titel "RFC 9557-Format" finden, der das von dieser Klasse erkannte Format angibt.

Dies ist dem [Datums-Zeit-String-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) sehr ähnlich, das von {{jsxref("Date")}} verwendet wird und ebenfalls auf ISO 8601 basiert. Die Hauptverbesserung besteht in der Möglichkeit, Mikro- und Nanosekundenkomponenten anzugeben sowie die Zeitzone und das Kalendersystem zu spezifizieren.

### Darstellbare Daten

Alle `Temporal`-Objekte, die ein spezifisches Kalenderdatum repräsentieren, unterliegen einer ähnlichen Grenze bezüglich des Bereichs darstellbarer Daten, die ±10<sup>8</sup> Tage (inklusive) ab der Unix-Epoche beträgt, oder der Bereich von Augenblicken von `-271821-04-20T00:00:00` bis `+275760-09-13T00:00:00`. Dies ist derselbe Bereich wie bei [gültigen Daten](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). Genauer gesagt:

- {{jsxref("Temporal.Instant")}} und {{jsxref("Temporal.ZonedDateTime")}} wenden dieses Limit direkt auf den `epochNanoseconds`-Wert an.
- {{jsxref("Temporal.PlainDateTime")}} interpretiert das Datum-Uhrzeit in der UTC-Zeitzone und erfordert, dass es ±(10<sup>8</sup> + 1) Tage (exklusiv) ab der Unix-Epoche ist, sodass der gültige Bereich von `-271821-04-19T00:00:00` bis `+275760-09-14T00:00:00` (exklusiv) reicht. Dadurch kann jedes `ZonedDateTime` in ein `PlainDateTime` konvertiert werden, unabhängig von seinem Offset.
- {{jsxref("Temporal.PlainDate")}} wendet denselben Check wie `PlainDateTime` auf den Mittag (`12:00:00`) dieses Datums an, sodass der gültige Bereich von `-271821-04-19` bis `+275760-09-13` reicht. Dies erlaubt es, jedes `PlainDateTime` in ein `PlainDate` zu konvertieren, unabhängig von seiner Zeit und umgekehrt.
- {{jsxref("Temporal.PlainYearMonth")}} hat den gültigen Bereich von `-271821-04` bis `+275760-09`. Dies erlaubt es, jedes `PlainDate` in ein `PlainYearMonth` zu konvertieren, unabhängig von seinem Datum (außer wenn der erste Tag eines nicht ISO-Monats in den ISO-Monat `-271821-03` fällt).

Die `Temporal`-Objekte werden es ablehnen, eine Instanz zu konstruieren, die ein Datum/Uhrzeit außerhalb dieses Limits darstellt. Dies beinhaltet:

- Verwenden des Konstruktors oder der `from()`-statischen Methode.
- Verwenden der `with()`-Methode zum Aktualisieren von Kalenderfeldern.
- Verwenden von `add()`, `subtract()`, `round()` oder einer anderen Methode, um neue Instanzen abzuleiten.

## Statische Eigenschaften

- {{jsxref("Temporal.Duration")}} {{experimental_inline}}
  - : Repräsentiert einen Unterschied zwischen zwei Zeitpunkten, die in Datum/Uhrzeit-Arithmetik verwendet werden können. Es wird grundsätzlich als eine Kombination von Jahren, Monaten, Wochen, Tagen, Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden und Nanosekundenwerten dargestellt.
- {{jsxref("Temporal.Instant")}} {{experimental_inline}}
  - : Repräsentiert einen einzigartigen Punkt in der Zeit mit Nanosekundenauflösung. Es wird grundsätzlich als die Anzahl der Nanosekunden dargestellt, die seit der Unix-Epoche vergangen sind (Mitternacht zu Beginn des 1. Januar 1970, UTC), ohne Zeitzonen- oder Kalendersystem.
- {{jsxref("Temporal.Now")}} {{experimental_inline}}
  - : Bietet Methoden zum Abrufen der aktuellen Zeit in verschiedenen Formaten.
- {{jsxref("Temporal.PlainDate")}} {{experimental_inline}}
  - : Repräsentiert ein Kalenderdatum (ein Datum ohne eine Uhrzeit oder Zeitzone); z. B. ein Ereignis in einem Kalender, das den ganzen Tag über passiert, unabhängig davon, in welcher Zeitzone es stattfindet. Es wird grundsätzlich als ein ISO 8601-Kalenderdatum repräsentiert, mit Jahres-, Monats- und Tagesfeldern und einem zugehörigen Kalendersystem.
- {{jsxref("Temporal.PlainDateTime")}} {{experimental_inline}}
  - : Repräsentiert ein Datum (Kalenderdatum) und eine Uhrzeit (Wanduhrenzeit) ohne eine Zeitzone. Es wird grundsätzlich als eine Kombination aus einem [Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate) (mit einem zugehörigen Kalendersystem) und einer [Uhrzeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime) repräsentiert.
- {{jsxref("Temporal.PlainMonthDay")}} {{experimental_inline}}
  - : Repräsentiert den Monat und Tag eines Kalenderdatums, ohne Jahr oder Zeitzone; z. B. ein Ereignis in einem Kalender, das jedes Jahr wiederkehrt und den ganzen Tag über stattfindet. Es wird grundsätzlich als ein ISO 8601-Kalenderdatum repräsentiert, mit Jahres-, Monats- und Tagesfeldern und einem zugehörigen Kalendersystem. Das Jahr wird verwendet, um den Monat-Tag in nicht ISO-Kalendersystemen zu unterscheiden.
- {{jsxref("Temporal.PlainTime")}} {{experimental_inline}}
  - : Repräsentiert eine Uhrzeit ohne ein Datum oder Zeitzone; z. B. ein wiederkehrendes Ereignis, das jeden Tag zur gleichen Uhrzeit stattfindet. Es wird grundsätzlich als eine Kombination von Stunden-, Minuten-, Sekunden-, Millisekunden-, Mikrosekunden- und Nanosekundenwerten repräsentiert.
- {{jsxref("Temporal.PlainYearMonth")}} {{experimental_inline}}
  - : Repräsentiert das Jahr und den Monat eines Kalenderdatums, ohne Tag oder Zeitzone; z. B. ein Ereignis in einem Kalender, das den ganzen Monat stattfindet. Es wird grundsätzlich als ein ISO 8601-Kalenderdatum repräsentiert, mit Jahres-, Monats- und Tagesfeldern und einem zugehörigen Kalendersystem. Der Tag wird verwendet, um das Jahr-Monat in nicht ISO-Kalendersystemen zu unterscheiden.
- {{jsxref("Temporal.ZonedDateTime")}} {{experimental_inline}}
  - : Repräsentiert ein Datum und eine Uhrzeit mit einer Zeitzone. Es wird grundsätzlich als eine Kombination von einem [Augenblick](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und einem Kalendersystem repräsentiert.
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

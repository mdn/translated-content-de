---
title: Temporal
slug: Web/JavaScript/Reference/Global_Objects/Temporal
l10n:
  sourceCommit: 791d6b6a04b1b8c09bc291ebadbc0f99a57dd5f7
---

{{SeeCompatTable}}

Das **`Temporal`** Objekt ermöglicht das Verwenden von Datum und Zeit in verschiedenen Szenarien, einschließlich integrierter Zeitzonen- und Kalenderdarstellung, Umwandlungen der Uhrzeit, Arithmetik, Formatierungen und mehr. Es ist als vollständiger Ersatz für das {{jsxref("Date")}}-Objekt konzipiert.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Temporal` kein Konstruktor. Sie können es nicht mit dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `Temporal`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Temporal` sind statisch (ähnlich wie das {{jsxref("Math")}}-Objekt).

`Temporal` verfügt über eine komplexe und leistungsfähige API. Es bietet über 200 Dienstmethoden über mehrere Klassen an, sodass es sehr komplex erscheinen kann. Wir geben einen Überblick darüber, wie diese APIs miteinander in Beziehung stehen.

### Hintergrund und Konzepte

JavaScript hat das {{jsxref("Date")}}-Objekt seit seinen Anfängen zur Verwaltung von Datum und Zeit. Allerdings basiert die `Date`-API auf der schlecht gestalteten `java.util.Date`-Klasse aus Java, die in den frühen 2010er Jahren ersetzt wurde; aufgrund des JavaScript-Ziels der Rückwärtskompatibilität bleibt `Date` jedoch in der Sprache bestehen.

Die wichtigste Lektion ist, dass die Handhabung von Daten _komplex_ ist. Die meisten Probleme von `Date` können durch Hinzufügen weiterer Methoden behoben werden, aber ein grundlegender Konstruktionsfehler bleibt: Es werden so viele Methoden auf demselben Objekt bereitgestellt, dass Entwickler oft verwirrt sind, was sie verwenden sollen, was zu unerwarteten Fallen führt. Eine gut gestaltete API muss nicht nur mehr tun, sondern auch weniger auf jeder Abstraktionsebene, da die Vermeidung von Fehlgebrauch genauso wichtig ist wie die Ermöglichung von Anwendungsfällen.

`Date`-Objekte haben gleichzeitig zwei Rollen:

- Als [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date): die Anzahl der Millisekunden oder Nanosekunden, die seit einem festen Zeitpunkt vergangen sind (bekannt als _Epoche_).
- Als Kombination von [Komponenten](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_components_and_time_zones): Jahr, Monat, Tag, Stunde, Minute, Sekunde, Millisekunde und Nanosekunde. Die Jahr-, Monat- und Tagbezeichnungen ergeben nur im Kontext eines _Kalendersystems_ einen Sinn. Die gesamte Kombination wird in Verbindung mit einer Zeitzone zu einem eindeutigen Zeitpunkt in der Geschichte. `Date`-Objekte bieten Methoden zum Lesen und Ändern dieser Komponenten.

[Zeitzonen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) sind eine häufige Quelle für datenbezogene Fehler. Wenn Sie über das Modell "Kombination von Komponenten" mit einem `Date` interagieren, kann die Zeit nur in zwei Zeitzonen angegeben werden: UTC und lokal (Gerät), und es gibt keine Möglichkeit, eine beliebige Zeitzone anzugeben. Es fehlt auch das Konzept der "keine Zeitzone": Dies wird als _Kalenderdatum_ (für Daten) oder _Wanduhrzeit_ (für Zeiten) bezeichnet, die eine Zeit ist, die Sie "von einem Kalender oder einer Uhr ablesen". Zum Beispiel, wenn Sie einen täglichen Wecker stellen, möchten Sie ihn auf "8:00 Uhr" stellen, unabhängig davon, ob es Sommerzeit ist, ob Sie in eine andere Zeitzone gereist sind usw.

Ein weiteres Merkmal, das `Date` fehlt, ist ein [Kalendersystem](#kalender). Die meisten Menschen sind mit dem gregorianischen Kalender vertraut, bei dem es zwei Epochen gibt, v. Chr. und n. Chr.; es gibt 12 Monate; jeder Monat hat eine unterschiedliche Anzahl von Tagen; es gibt alle 4 Jahre ein Schaltjahr usw. Einige dieser Konzepte gelten jedoch möglicherweise nicht, wenn Sie mit einem anderen Kalendersystem arbeiten, wie dem hebräischen Kalender, dem chinesischen Kalender, dem japanischen Kalender usw. Mit `Date` können Sie nur mit dem Modell des gregorianischen Kalenders arbeiten.

Es gibt viele andere unerwünschte Hinterlassenschaften von `Date`, wie dass alle Set-Methoden mutierend sind (was oft unerwünschte Nebenwirkungen verursacht), das [Datum-Uhrzeit-String-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format), das auf konsistente Weise schwer zu analysieren ist usw. Am Ende besteht die beste Lösung darin, eine neue API von Grund auf zu erstellen, was `Temporal` ist.

### API-Übersicht

`Temporal` ist ein Namensraum, wie {{jsxref("Intl")}}. Es enthält mehrere Klassen und Namespaces, die jeweils einen bestimmten Aspekt der Verwaltung von Datum und Zeit behandeln sollen. Die Klassen können wie folgt gruppiert werden:

- Darstellung einer Zeitdauer (ein Unterschied zwischen zwei Zeitpunkten): {{jsxref("Temporal.Duration")}}
- Darstellung eines Zeitpunkts:
  - Darstellung eines einzigartigen Zeitpunktes in der Geschichte:
    - Als Zeitstempel: {{jsxref("Temporal.Instant")}}
    - Als Kombination der Datums-Zeit-Komponenten mit einer Zeitzone: {{jsxref("Temporal.ZonedDateTime")}}
  - Darstellung eines zeitzonenunabhängigen Datums/Zeit (alle mit "Plain" vorangestellt):
    - Datum (Jahr, Monat, Tag) + Zeit (Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde, Nanosekunde): {{jsxref("Temporal.PlainDateTime")}} (Hinweis: `ZonedDateTime` ist gleichbedeutend mit `PlainDateTime` plus einer Zeitzone)
      - Datum (Jahr, Monat, Tag): {{jsxref("Temporal.PlainDate")}}
        - Jahr, Monat: {{jsxref("Temporal.PlainYearMonth")}}
        - Monat, Tag: {{jsxref("Temporal.PlainMonthDay")}}
      - Zeit (Stunde, Minute, Sekunde, Millisekunde, Mikrosekunde, Nanosekunde): {{jsxref("Temporal.PlainTime")}}

Darüber hinaus gibt es noch einen weiteren Dienst-Namespace, {{jsxref("Temporal.Now")}}, der Methoden zum Abrufen der aktuellen Zeit in verschiedenen Formaten bereitstellt.

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
<td>Nicht zutreffend</td>
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
<td>Nicht zutreffend</td>
</tr>
<tr>
<th>Rundung</th>
<td>{{jsxref("Temporal/Instant/round", "round()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/round", "round()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/round", "round()")}}</td>
<td>Nicht zutreffend</td>
<td>{{jsxref("Temporal/PlainTime/round", "round()")}}</td>
<td>Nicht zutreffend</td>
<td>Nicht zutreffend</td>
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
<td>Nicht zutreffend</td>
<td>{{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/calendarId", "calendarId")}}</td>
<td>{{jsxref("Temporal/PlainDate/calendarId", "calendarId")}}</td>
<td>Nicht zutreffend</td>
<td>{{jsxref("Temporal/PlainYearMonth/calendarId", "calendarId")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/calendarId", "calendarId")}}</td>
</tr>
<tr>
<th>Jahr-bezogene</th>
<td>Nicht zutreffend</td>
<td>{{jsxref("Temporal/ZonedDateTime/era", "era")}}<br>{{jsxref("Temporal/ZonedDateTime/eraYear", "eraYear")}}<br>{{jsxref("Temporal/ZonedDateTime/year", "year")}}<br>{{jsxref("Temporal/ZonedDateTime/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/era", "era")}}<br>{{jsxref("Temporal/PlainDateTime/eraYear", "eraYear")}}<br>{{jsxref("Temporal/PlainDateTime/year", "year")}}<br>{{jsxref("Temporal/PlainDateTime/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/PlainDateTime/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/PlainDateTime/daysInYear", "daysInYear")}}</td>
<td>{{jsxref("Temporal/PlainDate/era", "era")}}<br>{{jsxref("Temporal/PlainDate/eraYear", "eraYear")}}<br>{{jsxref("Temporal/PlainDate/year", "year")}}<br>{{jsxref("Temporal/PlainDate/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/PlainDate/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/PlainDate/daysInYear", "daysInYear")}}</td>
<td>Nicht zutreffend</td>
<td>{{jsxref("Temporal/PlainYearMonth/era", "era")}}<br>{{jsxref("Temporal/PlainYearMonth/eraYear", "eraYear")}}<br>{{jsxref("Temporal/PlainYearMonth/year", "year")}}<br>{{jsxref("Temporal/PlainYearMonth/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/PlainYearMonth/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/PlainYearMonth/daysInYear", "daysInYear")}}</td>
<td>Nicht zutreffend</td>
</tr>
<tr>
<th>Monat-bezogene</th>
<td>Nicht zutreffend</td>
<td>{{jsxref("Temporal/ZonedDateTime/month", "month")}}<br>{{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/month", "month")}}<br>{{jsxref("Temporal/PlainDateTime/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainDateTime/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainDate/month", "month")}}<br>{{jsxref("Temporal/PlainDate/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainDate/daysInMonth", "daysInMonth")}}</td>
<td>Nicht zutreffend</td>
<td>{{jsxref("Temporal/PlainYearMonth/month", "month")}}<br>{{jsxref("Temporal/PlainYearMonth/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainYearMonth/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/monthCode", "monthCode")}}</td>
</tr>
<tr>
<th>Woche-bezogene</th>
<td>Nicht zutreffend</td>
<td>{{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/PlainDateTime/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/PlainDateTime/daysInWeek", "daysInWeek")}}</td>
<td>{{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/PlainDate/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/PlainDate/daysInWeek", "daysInWeek")}}</td>
<td>Nicht zutreffend</td>
<td>Nicht zutreffend</td>
<td>Nicht zutreffend</td>
</tr>
<tr>
<th>Tag-bezogene</th>
<td>Nicht zutreffend</td>
<td>{{jsxref("Temporal/ZonedDateTime/day", "day")}}<br>{{jsxref("Temporal/ZonedDateTime/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/ZonedDateTime/dayOfYear", "dayOfYear")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/day", "day")}}<br>{{jsxref("Temporal/PlainDateTime/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/PlainDateTime/dayOfYear", "dayOfYear")}}</td>
<td>{{jsxref("Temporal/PlainDate/day", "day")}}<br>{{jsxref("Temporal/PlainDate/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/PlainDate/dayOfYear", "dayOfYear")}}</td>
<td>Nicht zutreffend</td>
<td>Nicht zutreffend</td>
<td>{{jsxref("Temporal/PlainMonthDay/day", "day")}}</td>
</tr>
<tr>
<th>Zeitkomponenten</th>
<td>Nicht zutreffend</td>
<td>{{jsxref("Temporal/ZonedDateTime/hour", "hour")}}<br>{{jsxref("Temporal/ZonedDateTime/minute", "minute")}}<br>{{jsxref("Temporal/ZonedDateTime/second", "second")}}<br>{{jsxref("Temporal/ZonedDateTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/ZonedDateTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/ZonedDateTime/nanosecond", "nanosecond")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/hour", "hour")}}<br>{{jsxref("Temporal/PlainDateTime/minute", "minute")}}<br>{{jsxref("Temporal/PlainDateTime/second", "second")}}<br>{{jsxref("Temporal/PlainDateTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/PlainDateTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/PlainDateTime/nanosecond", "nanosecond")}}</td>
<td>Nicht zutreffend</td>
<td>{{jsxref("Temporal/PlainTime/hour", "hour")}}<br>{{jsxref("Temporal/PlainTime/minute", "minute")}}<br>{{jsxref("Temporal/PlainTime/second", "second")}}<br>{{jsxref("Temporal/PlainTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/PlainTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/PlainTime/nanosecond", "nanosecond")}}</td>
<td>Nicht zutreffend</td>
<td>Nicht zutreffend</td>
</tr>
<tr>
<th>Zeitzone</th>
<td>Nicht zutreffend</td>
<td>{{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}}<br>{{jsxref("Temporal/ZonedDateTime/offset", "offset")}}<br>{{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "offsetNanoseconds")}}<br>{{jsxref("Temporal/ZonedDateTime/hoursInDay", "hoursInDay")}}<br>{{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "getTimeZoneTransition()")}}<br>{{jsxref("Temporal/ZonedDateTime/startOfDay", "startOfDay()")}}</td>
<td>Nicht zutreffend</td>
<td>Nicht zutreffend</td>
<td>Nicht zutreffend</td>
<td>Nicht zutreffend</td>
<td>Nicht zutreffend</td>
</tr>
<tr>
<th>Epoch-Zeit</th>
<td>{{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}}<br>{{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "epochMilliseconds")}}<br>{{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}}</td>
<td>Nicht zutreffend</td>
<td>Nicht zutreffend</td>
<td>Nicht zutreffend</td>
<td>Nicht zutreffend</td>
<td>Nicht zutreffend</td>
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
<tr><th><code>PlainDate</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainDate", "toPlainDate()")}}</td><td>/</td><td>Keine Überlappung an Informationen</td><td>{{jsxref("Temporal/PlainYearMonth/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainMonthDay/toPlainDate", "toPlainDate()")}}</td></tr>
<tr><th><code>PlainTime</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainTime", "toPlainTime()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainTime", "toPlainTime()")}}</td><td>Keine Überlappung an Informationen</td><td>/</td><td colspan="2">Keine Überlappung an Informationen</td></tr>
<tr><th><code>PlainYearMonth</code></th><td rowspan="2" colspan="2">Zuerst in <code>PlainDate</code> konvertieren</td><td>{{jsxref("Temporal/PlainDate/toPlainYearMonth", "toPlainYearMonth()")}}</td><td rowspan="2">Keine Überlappung an Informationen</td><td>/</td><td>Zuerst in <code>PlainDate</code> konvertieren</td></tr>
<tr><th><code>PlainMonthDay</code></th><td>{{jsxref("Temporal/PlainDate/toPlainMonthDay", "toPlainMonthDay()")}}</td><td>Zuerst in <code>PlainDate</code> konvertieren</td><td>/</td></tr>
</tbody>
</table>

Mit diesen Tabellen sollten Sie eine grundlegende Vorstellung davon haben, wie Sie die `Temporal`-API navigieren können.

### Kalender

Ein Kalender ist ein Mittel, um Tage zu organisieren, typischerweise in Perioden wie Wochen, Monate, Jahre und Epochen. Der größte Teil der Welt verwendet den gregorianischen Kalender, aber es gibt viele andere Kalender, die in religiösen und kulturellen Kontexten verwendet werden. Standardmäßig verwenden alle kalenderbezogenen `Temporal`-Objekte das ISO 8601-Kalendersystem, das auf dem gregorianischen Kalender basiert und zusätzliche Wochenregeln festlegt. [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) listet die meisten Kalender auf, die vermutlich von Browsern unterstützt werden. Hier bieten wir einen kurzen Überblick darüber, wie Kalendersysteme gebildet werden, um Ihnen zu helfen, welche Faktoren zwischen Kalendern variieren können.

Es gibt drei wesentliche periodische Ereignisse auf der Erde: Die Rotation um die Sonne (365,242 Tage für eine Umdrehung), die Rotation des Mondes um die Erde (29,53 Tage von einem Neumond zum nächsten) und die Rotation um ihre Achse (24 Stunden von Sonnenaufgang zu Sonnenaufgang). Jede Kultur hat das gleiche Maß für einen "Tag", nämlich 24 Stunden. Gelegentliche Änderungen wie die Sommerzeit sind nicht Teil des Kalenders, sondern Teil der [Zeitzonen](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets)-Informationen.

- Einige Kalender definieren ein Jahr primär als durchschnittlich 365,242 Tage, indem sie Jahre mit 365 Tagen definieren und etwa alle 4 Jahre einen Extratag, den _Schalttag_, hinzufügen. Dann kann das Jahr weiter in Monate unterteilt werden. Diese Kalender werden _Sonnenkalender_ genannt. Der gregorianische Kalender und der Solar-Hijri-Kalender sind Sonnenkalender.
- Einige Kalender definieren einen Monat primär als durchschnittlich 29,5 Tage, indem sie Monate bestimmen, die zwischen 29 und 30 Tagen wechseln. Dann können 12 Monate zu einem Jahr von 354 Tagen gruppiert werden. Diese Kalender werden _Mondkalender_ genannt. Der islamische Kalender ist ein Mondkalender. Da ein Mondjahr künstlich ist und nicht mit dem saisonalen Zyklus korreliert, sind Mondkalender allgemein seltener.
- Einige Kalender definieren Monate ebenfalls hauptsächlich basierend auf Mondzyklen, ähnlich wie Mondkalender. Dann wird, um die 11-Tage-Diskrepanz mit dem Sonnenjahr zu kompensieren, etwa alle 3 Jahre ein zusätzlicher Monat, der _Schaltmonat_, hinzugefügt. Diese Kalender werden _lunisolar Kalender_ genannt. Der hebräische Kalender und der chinesische Kalender sind lunisolare Kalender.

In `Temporal` wird jedes Datum unter einem Kalendersystem eindeutig durch drei Komponenten identifiziert: `year`, `month` und `day`. Während `year` normalerweise eine positive ganze Zahl ist, kann sie auch null oder negativ sein und monoton mit der Zeit zunehmen. Das Jahr `1` (oder `0`, wenn es existiert) ist als Kalenderepoche bekannt und ist für jeden Kalender willkürlich. `month` ist eine positive Ganzzahl, die sich jedes Mal um 1 erhöht und bei `1` beginnt und bei `date.monthsInYear` endet, dann zurück auf `1` zurückgesetzt wird, wenn das Jahr fortschreitet. `day` ist ebenfalls eine positive Ganzzahl, kann aber nicht bei 1 beginnen oder sich jedes Mal um 1 erhöhen, da politische Änderungen Tage überspringen oder wiederholen können. Im Allgemeinen erhöht sich `day` jedoch monoton und wird zurückgesetzt, wenn der Monat fortschreitet.

Zusätzlich zu `year` kann ein Jahr auch durch die Kombination von `era` und `eraYear` eindeutig identifiziert werden, für Kalender, die Epochen verwenden. Zum Beispiel verwendet der gregorianische Kalender die Epochen "CE" (Common Era) und "BCE" (Before Common Era), und das Jahr `-1` ist dasselbe wie `{ era: "bce", eraYear: 2 }` (Hinweis: dass Jahr `0` existiert immer für alle Kalender; für den gregorianischen Kalender entspricht es 1 v. Chr. aufgrund der [astronomischen Jahrzählung](https://en.wikipedia.org/wiki/Astronomical_year_numbering)). `era` ist eine Kleinschreibung und `eraYear` ist eine willkürliche Ganzzahl, die null oder negativ sein oder sogar mit der Zeit abnehmen kann (normalerweise für die älteste Epoche).

> [!NOTE]
> Verwenden Sie immer `era` und `eraYear` als Paar; verwenden Sie nicht eine Eigenschaft ohne die andere. Um Konflikte zu vermeiden, kombinieren Sie nicht `year` und `era`/`eraYear`, wenn Sie ein Jahr bezeichnen. Wählen Sie eine Jahresdarstellung und verwenden Sie sie konsequent.
>
> Hüten Sie sich vor den folgenden falschen Annahmen über Jahre:
>
> - Gehen Sie nicht davon aus, dass `era` und `eraYear` immer vorhanden sind; sie könnten `undefined` sein.
> - Nehmen Sie nicht an, dass `era` eine benutzerfreundliche Zeichenfolge ist; verwenden Sie `toLocaleString()`, um das Datum zu formatieren.
> - Gehen Sie nicht davon aus, dass zwei `year`-Werte aus unterschiedlichen Kalendern vergleichbar sind; verwenden Sie stattdessen die statische Methode `compare()`.
> - Nehmen Sie nicht an, dass Jahre 365/366 Tage und 12 Monate haben; verwenden Sie stattdessen `daysInYear` und `monthsInYear`.
> - Gehen Sie nicht davon aus, dass ein Schaltjahr (`inLeapYear` ist `true`) einen zusätzlichen Tag hat; es könnte einen zusätzlichen Monat haben.

Zusätzlich zu `month` kann ein Monat in einem Jahr auch durch den `monthCode` eindeutig identifiziert werden. `monthCode` ordnet sich normalerweise dem Namen des Monats zu, während `month` dies nicht tut. Zum Beispiel, im Fall von lunisolar Kalendern, werden zwei Monate mit demselben `monthCode`, bei denen einer zu einem Schaltjahr gehört und der anderer nicht, unterschiedliche `month`-Werte haben, wenn sie nach dem Schaltmonat auftreten, aufgrund der Einfügung eines zusätzlichen Monats.

> [!NOTE]
> Um Konflikte zu vermeiden, kombinieren Sie nicht `month` und `monthCode`, wenn Sie einen Monat bezeichnen. Wählen Sie eine Monatsdarstellung und verwenden Sie sie konsequent. `month` ist nützlicher, wenn Sie die Reihenfolge der Monate in einem Jahr benötigen (z. B. beim Durchlaufen der Monate), während `monthCode` nützlicher ist, wenn Sie den Namen des Monats benötigen (z. B. beim Speichern von Geburtstagen).
>
> Hüten Sie sich vor den folgenden falschen Annahmen über Monate:
>
> - Gehen Sie nicht davon aus, dass `monthCode` und `month` immer übereinstimmen.
> - Nehmen Sie nicht die Anzahl der Tage in einem Monat an; verwenden Sie `daysInMonth` stattdessen.
> - Nehmen Sie nicht an, dass `monthCode` eine benutzerfreundliche Zeichenfolge ist; verwenden Sie `toLocaleString()`, um das Datum zu formatieren.
> - Im Allgemeinen sollten Sie den Namen der Monate nicht in einem Array oder Objekt zwischenspeichern. Obwohl `monthCode` normalerweise dem Namen des Monats innerhalb eines Kalenders zugeordnet ist, empfehlen wir immer, den Monatsnamen mit z. B. `date.toLocaleString("de-DE", { calendar: date.calendarId, month: "long" })` zu berechnen.

Zusätzlich zu `day` (welches ein monatlicher Index ist) kann ein Tag in einem Jahr auch durch `dayOfYear` eindeutig identifiziert werden. `dayOfYear` ist eine positive Ganzzahl, die sich jedes Mal um 1 erhöht, beginnend bei `1` und endend bei `date.daysInYear`.

Das Konzept einer "Woche" ist mit keinem astronomischen Ereignis verbunden, sondern ist ein kulturelles Konstrukt. Während die häufigste Länge `7` Tage beträgt, können Wochen auch 4, 5, 6, 8 oder mehr Tage haben - oder sogar keine fixen Tage. Verwenden Sie die `daysInWeek`, um die spezifische Anzahl von Tagen der Woche eines Datums zu erhalten. `Temporal` identifiziert Wochen durch die Kombination von `weekOfYear` und `yearOfWeek`. `weekOfYear` ist eine positive Ganzzahl, die sich jedes Mal um 1 erhöht, beginnend bei `1`, dann zurück auf `1` gesetzt wird, wenn das Jahr fortschreitet. `yearOfWeek` ist im Allgemeinen dasselbe wie `year`, kann jedoch am Anfang oder Ende jedes Jahres unterschiedlich sein, da eine Woche zwei Jahre überschreiten kann und `yearOfWeek` basierend auf den Regeln des Kalenders eines der beiden Jahre auswählt.

> [!NOTE]
> Verwenden Sie stets `weekOfYear` und `yearOfWeek` als Paar; verwenden Sie nicht `weekOfYear` und `year`.
>
> Hüten Sie sich vor den folgenden falschen Annahmen über Wochen:
>
> - Gehen Sie nicht davon aus, dass `weekOfYear` und `yearOfWeek` immer vorhanden sind; sie könnten `undefined` sein.
> - Nehmen Sie nicht an, dass Wochen immer 7 Tage lang sind; verwenden Sie `daysInWeek` stattdessen.
> - Beachten Sie, dass die aktuelle `Temporal`-API keine Jahr-Woche-Daten unterstützt, sodass Sie keine Daten mit diesen Eigenschaften konstruieren oder Daten in Jahr-Woche-Darstellungen serialisieren können. Es sind lediglich informative Eigenschaften.

### RFC 9557-Format

Alle `Temporal`-Klassen können serialisiert und deserialisiert werden, indem das im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) spezifizierte Format verwendet wird, das auf [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) basiert. Das Format, in seiner vollständigen Form, ist wie folgt (Leerzeichen sind nur für die Lesbarkeit und sollten im tatsächlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

Verschiedene Klassen haben unterschiedliche Anforderungen an die Anwesenheit jeder Komponente, also finden Sie einen Abschnitt mit dem Titel "RFC 9557-Format" in der Dokumentation jeder Klasse, der das von dieser Klasse erkannte Format spezifiziert.

Dies ist dem [Datum-Uhrzeit-String-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) sehr ähnlich, das von {{jsxref("Date")}} verwendet wird, das ebenfalls auf ISO 8601 basiert. Die Hauptneuheit ist die Möglichkeit, Mikro- und Nanosekundenkomponenten anzugeben sowie Zeitzone und Kalendersystem anzugeben.

### Darstellbare Daten

Alle `Temporal`-Objekte, die ein spezifisches Kalenderdatum darstellen, legen eine ähnliche Begrenzung für den Bereich darstellbarer Daten auf, nämlich ±10<sup>8</sup> Tage (einschließlich) von der Unix-Epoche oder den Bereich von Momenten von `-271821-04-20T00:00:00` bis `+275760-09-13T00:00:00`. Dies entspricht demselben Bereich wie bei [gültigen Daten](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). Genauer:

- {{jsxref("Temporal.Instant")}} und {{jsxref("Temporal.ZonedDateTime")}} wenden dieses Limit direkt auf den `epochNanoseconds`-Wert an.
- {{jsxref("Temporal.PlainDateTime")}} interpretiert das Datum-Uhrzeit im UTC-Zeitzone und erfordert, dass es sich um ±(10<sup>8</sup> + 1) Tage (exklusiv) von der Unix-Epoche handelt, sodass ihr gültiger Bereich von `-271821-04-19T00:00:00` bis `+275760-09-14T00:00:00`, exklusiv, reicht. Dies ermöglicht, dass jeder `ZonedDateTime` in ein `PlainDateTime` umgewandelt werden kann, unabhängig von seinem Offset.
- {{jsxref("Temporal.PlainDate")}} wendet den gleichen Check wie `PlainDateTime` um den Mittag (`12:00:00`) dieses Datums an, sodass der gültige Bereich von `-271821-04-19` bis `+275760-09-13` reicht. Dies erlaubt, dass jedes `PlainDateTime` in ein `PlainDate` konvertiert werden kann, unabhängig von seiner Zeit, und umgekehrt.
- {{jsxref("Temporal.PlainYearMonth")}} hat den gültigen Bereich von `-271821-04` bis `+275760-09`. Dies erlaubt, dass ein beliebiges `PlainDate` in ein `PlainYearMonth` konvertiert werden kann, unabhängig vom Datum (außer wenn der erste Tag eines nicht-ISO-Monats im ISO-Monat `-271821-03` liegt).

Die `Temporal`-Objekte verweigern es, eine Instanz zu erstellen, die ein Datum/Zeit jenseits dieses Limits darstellt. Dies schließt ein:

- Verwendung des Konstruktors oder der statischen Methode `from()`.
- Verwendung der `with()`-Methode zur Aktualisierung von Kalenderfeldern.
- Verwendung von `add()`, `subtract()`, `round()` oder einer anderen Methode zur Ableitung neuer Instanzen.

## Statische Eigenschaften

- {{jsxref("Temporal.Duration")}} {{experimental_inline}}
  - : Repräsentiert einen Unterschied zwischen zwei Zeitpunkten, der in Arithmetik von Datum/Zeit verwendet werden kann. Es wird grundlegend als Kombination von Jahren, Monaten, Wochen, Tagen, Stunden, Minuten, Sekunden, Millisekunden, Mikrosekunden und Nanosekundenwerten dargestellt.
- {{jsxref("Temporal.Instant")}} {{experimental_inline}}
  - : Repräsentiert einen einzigartigen Zeitpunkt mit Nanosekunden-Genauigkeit. Es wird grundlegend als die Anzahl der Nanosekunden seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) dargestellt, ohne Zeitzone oder Kalendersystem.
- {{jsxref("Temporal.Now")}} {{experimental_inline}}
  - : Bietet Methoden zum Abrufen der aktuellen Zeit in verschiedenen Formaten.
- {{jsxref("Temporal.PlainDate")}} {{experimental_inline}}
  - : Repräsentiert ein Kalendarium (ein Datum ohne Zeit oder Zeitzone); zum Beispiel ein Ereignis in einem Kalender, das den ganzen Tag über unabhängig von der Zeitzone stattfindet. Es wird grundlegend als ISO 8601-Kalendarium mit Jahr-, Monat- und Tagesfeldern und einem assoziierten Kalendersystem dargestellt.
- {{jsxref("Temporal.PlainDateTime")}} {{experimental_inline}}
  - : Repräsentiert ein Datum (Kalendarium) und eine Zeit (Wanduhrzeit) ohne Zeitzone. Es wird grundlegend als Kombination eines [Datums](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate) (mit einem assoziierten Kalendersystem) und einer [Zeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime) dargestellt.
- {{jsxref("Temporal.PlainMonthDay")}} {{experimental_inline}}
  - : Repräsentiert den Monat und Tag eines Kalenderdatums ohne Jahr oder Zeitzone; zum Beispiel ein jährlich wiederkehrendes Ereignis, das den ganzen Tag über stattfindet. Es wird grundlegend als ISO 8601-Kalendarium mit Jahr-, Monat- und Tagesfeldern und einem assoziierten Kalendersystem dargestellt. Das Jahr wird verwendet, um den Monat-Tag in nicht-ISO-Kalendersystemen zu unterscheiden.
- {{jsxref("Temporal.PlainTime")}} {{experimental_inline}}
  - : Repräsentiert eine Zeit ohne Datum oder Zeitzone; zum Beispiel ein sich wiederholendes Ereignis, das jeden Tag zur gleichen Zeit stattfindet. Es wird grundlegend als Kombination von Stunde-, Minute-, Sekunde-, Millisekunde-, Mikrosekunde- und Nanosekundenwerten dargestellt.
- {{jsxref("Temporal.PlainYearMonth")}} {{experimental_inline}}
  - : Repräsentiert das Jahr und den Monat eines Kalenderdatums ohne Tag oder Zeitzone; zum Beispiel ein Ereignis auf einem Kalender, das während des ganzen Monats stattfindet. Es wird grundlegend als ISO 8601-Kalendarium mit Jahr-, Monat- und Tagesfeldern und einem assoziierten Kalendersystem dargestellt. Der Tag wird verwendet, um den Jahr-Monat in nicht-ISO-Kalendersystemen zu unterscheiden.
- {{jsxref("Temporal.ZonedDateTime")}} {{experimental_inline}}
  - : Repräsentiert ein Datum und Uhrzeit mit Zeitzone. Es wird grundlegend als Kombination eines [Moment](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und eines Kalendersystems dargestellt.
- `Temporal[Symbol.toStringTag]`
  - : Der Initialwert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Temporal"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl.RelativeTimeFormat")}}
- {{jsxref("Intl.DurationFormat")}}
- [Temporal Polyfill von den Vorschlags-Champions](https://www.npmjs.com/package/@js-temporal/polyfill)
- [Temporal Polyfill von FullCalendar](https://www.npmjs.com/package/temporal-polyfill)

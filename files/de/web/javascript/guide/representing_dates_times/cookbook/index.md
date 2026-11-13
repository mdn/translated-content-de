---
title: Temporal-Kochbuch
slug: Web/JavaScript/Guide/Representing_dates_times/Cookbook
l10n:
  sourceCommit: c44f591049bc129b356acb0a9ce281974c035113
---

> [!NOTE]
> Dieses Dokument basiert auf dem [Kochbuch](https://tc39.es/proposal-temporal/docs/cookbook.html) in der ursprünglichen Dokumentation des TC39-Vorschlags.

Dieser Leitfaden enthält Codebeispiele für häufige Anwendungsfälle von {{jsxref("Temporal")}}. Lesen Sie bei Bedarf zuerst den Leitfaden [Datums- und Zeitangaben darstellen](/de/docs/Web/JavaScript/Guide/Representing_dates_times), um die grundlegenden Konzepte und die API von `Temporal` kennenzulernen.

## Aktuelles Datum und aktuelle Uhrzeit

```js
const date = Temporal.Now.plainDateISO(); // Gets the current date
date.toString(); // returns the date in ISO 8601 date format

// If you additionally want the time:
Temporal.Now.plainDateTimeISO().toString(); // date and time in ISO 8601 format
```

Wenn Sie nur das Datum und nicht die Uhrzeit benötigen, verwenden Sie {{jsxref("Temporal.PlainDate")}}. Wenn Sie beides benötigen, verwenden Sie {{jsxref("Temporal.PlainDateTime")}}.

## Unix-Zeitstempel

```js
const timeStamp = Temporal.Now.instant();

// Timestamp in milliseconds
timeStamp.epochMilliseconds;

// Timestamp in seconds
Math.floor(timeStamp.epochMilliseconds / 1000);
```

## Zwischen Temporal-Typen und dem herkömmlichen Date konvertieren

### Vom herkömmlichen Date zu Temporal.Instant und/oder Temporal.ZonedDateTime

So konvertieren Sie ein herkömmliches {{jsxref("Date")}} in eine Instanz von {{jsxref("Temporal.Instant")}} oder {{jsxref("Temporal.ZonedDateTime")}}, die denselben exakten Zeitpunkt repräsentiert.

Wenn Sie ein `ZonedDateTime` benötigen, verwenden Sie die Methode {{jsxref("Temporal/Instant/toZonedDateTimeISO", "toZonedDateTimeISO()")}} des resultierenden `Instant`. Sie müssen eine Zeitzone angeben, da das herkömmliche `Date` nur einen exakten Zeitpunkt speichert, nicht aber eine Zeitzone.

Wenn Sie Methoden einer herkömmlichen `Date`-Instanz aufrufen, müssen Sie entscheiden, ob Sie diesen exakten Zeitpunkt als UTC-Wert interpretieren möchten (mit Methoden, deren Namen „UTC“ enthalten) oder in der aktuellen Systemzeitzone (mit den übrigen Methoden). Das kann verwirrend sein. `Temporal` bietet deshalb eine explizitere Möglichkeit dafür.

Um die lokale Zeitzone des Systems zu verwenden, was der Nutzung der Methoden {{jsxref("Date/getFullYear", "getFullYear()")}}, {{jsxref("Date/getMonth", "getMonth()")}} usw. des herkömmlichen `Date` entspricht, übergeben Sie {{jsxref("Temporal.Now.timeZoneId()")}} als Zeitzone. In einem Browser ist dies die Zeitzone der Benutzerin oder des Benutzers. Auf einem Server kann der Wert jedoch anders ausfallen als erwartet; vermeiden Sie dies daher in einer Serverumgebung.

```js
const legacyDate = new Date("1970-01-01T00:00:01Z");
const instant = legacyDate.toTemporalInstant();

console.log(instant.epochMilliseconds === legacyDate.getTime()); // true
console.log(instant.toString()); // '1970-01-01T00:00:01Z'

const zoned = instant.toZonedDateTimeISO(Temporal.Now.timeZoneId());

console.log(zoned.epochMilliseconds === legacyDate.getTime()); // true
```

Hier ist ein Beispiel für die Verwendung einer bestimmten Zeitzone. Insbesondere in einer Serverumgebung würden Sie diese Zeitzone aus anderen Daten beziehen, die Sie verarbeiten. Wenn auf die herkömmliche `Date`-Instanz mit den Methoden {{jsxref("Date/getUTCFullYear", "getUTCFullYear()")}}, {{jsxref("Date/getUTCMonth", "getUTCMonth()")}} usw. zugegriffen wurde, sollten Sie erwägen, einfach `Instant` zu verwenden. Falls Sie `ZonedDateTime` verwenden müssen, muss die angegebene Zeitzone möglicherweise `"UTC"` sein.

```js
const zoned2 = instant.toZonedDateTimeISO("Asia/Shanghai");

console.log(zoned2.epochMilliseconds === legacyDate.getTime()); // true
console.log(zoned2.timeZoneId); // 'Asia/Shanghai'
```

### Reine Datumswerte: vom herkömmlichen Date zu Temporal.PlainDate

Ein häufiger Fehler entsteht aus einer einfachen Frage: Welches Datum (Jahr, Monat und Tag) stellt dieses `Date` dar? Das Problem ist, dass die Antwort von der Zeitzone abhängt. Dasselbe `Date` kann in San Francisco den 31. Dezember, in London oder Tokio aber den 1. Januar bezeichnen.

Daher ist es entscheidend, das `Date` im Kontext der richtigen Zeitzone zu interpretieren, _bevor_ Sie Jahr, Monat oder Tag extrahieren oder Berechnungen mit Datumseinheiten durchführen, etwa um festzustellen, ob etwas gestern passiert ist. Aus diesem Grund hat `Temporal.Instant` (das `Temporal`-Äquivalent zu `Date`) keine Eigenschaften `year`, `month` oder `day`. Um in `Temporal` auf Datums- oder Zeiteinheiten zuzugreifen, muss eine Zeitzone angegeben werden, wie im obigen Codebeispiel beschrieben.

Ein weiterer fehleranfälliger Fall liegt vor, wenn `Date` verwendet wird, um einen reinen Datumswert wie das Geburtsdatum einer Person zu speichern. Bei `Date` werden solche Werte üblicherweise mit einer Uhrzeit um Mitternacht gespeichert. Um das Datum korrekt auszulesen, müssen Sie jedoch wissen, die Mitternacht welcher Zeitzone beim Erzeugen des `Date` verwendet wurde. Beispielsweise verwendet `new Date(2000, 0, 1)` die Zeitzone des aufrufenden Systems, während `new Date("2000-01-01")` UTC verwendet.

Um ein `Date`, das nur einen Datumswert enthält, korrekt in ein `Temporal.PlainDate` zu konvertieren, ohne Fehler um einen Tag zu riskieren, müssen Sie ermitteln, die Mitternacht welcher Zeitzone zum Erzeugen des `Date` verwendet wurde. Verwenden Sie anschließend dieselbe Zeitzone bei der Konvertierung von `Temporal.Instant` zu `Temporal.PlainDate`.

```js
// Convert a year/month/day `Date` to a `Temporal.PlainDate`. Uses the caller's time zone.
let date = new Date(2000, 0, 1);
// Sat Jan 01 2000 00:00:00 GMT-0800 (Pacific Standard Time)
let plainDate = date
  .toTemporalInstant() // 2000-01-01T08:00:00Z
  .toZonedDateTimeISO(Temporal.Now.timeZoneId()) // 2000-01-01T00:00:00-08:00[America/Los_Angeles]
  .toPlainDate(); // 2000-01-01

console.log(plainDate.toString()); // '2000-01-01'

// Convert a year/month/day `Date` to a `Temporal.PlainDate`. Uses UTC.
date = new Date(Date.UTC(2000, 0, 1));
// Fri Dec 31 1999 16:00:00 GMT-0800 (Pacific Standard Time)
date = new Date("2000-01-01T00:00Z");
// Fri Dec 31 1999 16:00:00 GMT-0800 (Pacific Standard Time)
plainDate = date
  .toTemporalInstant() // 2000-01-01T00:00:00Z
  .toZonedDateTimeISO("UTC") // 2000-01-01T00:00:00+00:00[UTC]
  .toPlainDate(); // 2000-01-01

console.log(plainDate.toString()); // '2000-01-01'
```

### Von Temporal-Typen zum herkömmlichen Date

Das herkömmliche `Date` repräsentiert einen exakten Zeitpunkt. Daher lässt sich eine Instanz von `Temporal.Instant` oder `Temporal.ZonedDateTime` einfach in eine entsprechende herkömmliche `Date`-Instanz konvertieren. Um `Instant` in ein herkömmliches `Date` zu konvertieren, verwenden Sie die Eigenschaft {{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}}.

```js
const instant = Temporal.Instant.from("2020-01-01T00:00:01.000999Z");
const result = new Date(instant.epochMilliseconds);

console.log(result.getTime()); // 1577836801000 // ms since Unix epoch
console.log(result.toISOString()); // '2020-01-01T00:00:01.000Z'
```

Dasselbe gilt für `ZonedDateTime`. Beachten Sie, dass das herkömmliche `Date` die Zeitzone des `ZonedDateTime` nicht beibehält.

```js
const zoned = Temporal.ZonedDateTime.from(
  "2020-01-01T00:00:01.001[Asia/Tokyo]",
);
const result2 = new Date(zoned.epochMilliseconds);

console.log(result2.getTime()); // 1577804401001 // note, different time
console.log(result2.toISOString()); // '2019-12-31T15:00:01.001Z'
```

Für die meisten Anwendungsfälle ist `new Date(x.epochMilliseconds)` ausreichend. Wenn Sie ein anderes Rundungsverhalten als Abschneiden wünschen, müssen Sie möglicherweise einen zusätzlichen Schritt mit {{jsxref("Temporal/Instant/round", "round()")}} hinzufügen. Hier werden beispielsweise 999 Mikrosekunden auf 1 Millisekunde gerundet.

```js
const result3 = new Date(
  instant.round({ smallestUnit: "millisecond" }).epochMilliseconds,
);

console.log(result3.getTime()); // 1577836801001
console.log(result3.toISOString()); // '2020-01-01T00:00:01.001Z'
```

## Erzeugung

### Eingabeelement für ein Kalenderdatum

Sie können `Temporal`-Objekte verwenden, um Eigenschaften eines Kalender-Steuerelements festzulegen. Das folgende Beispiel verwendet ein HTML-Element `<input type="date">`, bei dem alle Tage nach dem heutigen Tag deaktiviert und nicht auswählbar sind.

(Wie Sie ein `Temporal`-Objekt aus dem Kalender-Steuerelement auslesen, zeigt das Beispiel [Zukünftiges Datum](#wie_viele_tage_bis_zu_einem_zukünftigen_datum?).)

```html
<input type="date" id="calendar-input" />
```

```js
const datePicker = document.getElementById("calendar-input");
const today = Temporal.Now.plainDateISO();
datePicker.max = today;
datePicker.value = today;
```

{{EmbedLiveSample("Calendar input element", "100%", 100)}}

## Zwischen Typen konvertieren

### Mittag an einem bestimmten Datum

Ein Beispiel dafür, wie Sie ein Kalenderdatum (`Temporal.PlainDate`) und eine Uhrzeit ({{jsxref("Temporal.PlainTime")}}) zu einem `Temporal.PlainDateTime` kombinieren.

```js
const date = Temporal.PlainDate.from("2020-05-14");

const noonOnDate = date.toPlainDateTime(Temporal.PlainTime.from({ hour: 12 }));

console.log(noonOnDate.toString()); // '2020-05-14T12:00:00'
```

### Geburtstag im Jahr 2030

Ein Beispiel dafür, wie Sie einen Kalendertag ({{jsxref("Temporal.PlainMonthDay")}}) und ein Jahr zu einem `Temporal.PlainDate` kombinieren.

```js
const birthday = Temporal.PlainMonthDay.from("12-15");

const birthdayIn2030 = birthday.toPlainDate({ year: 2030 });
birthdayIn2030.dayOfWeek; // 7

console.log(birthdayIn2030.toString()); // '2030-12-15'
```

## Serialisierung

### Zeitpunkt mit Zeitzone aus Zeitpunkt und Zeitzone

Um einen exakten Zeitpunkt als `Temporal.Instant` in einen String zu serialisieren, verwenden Sie {{jsxref("Temporal/Instant/toString", "toString()")}}. Ohne Argumente erhalten Sie einen String in UTC.

```js
const instant = Temporal.Instant.from("2020-01-03T10:41:51Z");

const result = instant.toString();

console.log(result); // '2020-01-03T10:41:51Z'
console.log(instant.equals(Temporal.Instant.from(result))); // true
```

Wenn der String einen UTC-Offset enthalten soll, verwenden Sie die Option `timeZone` von `Temporal.Instant.prototype.toString()`. Sie erhalten dann eine Stringdarstellung der lokalen Uhrzeit in dieser Zeitzone, die dem exakten Zeitpunkt entspricht.

```js
const result2 = instant.toString({ timeZone: "America/Yellowknife" });

console.log(result2); // '2020-01-03T03:41:51-07:00'
console.log(instant.equals(Temporal.Instant.from(result2))); // true
```

Dabei geht die Information verloren, zu welcher Zeitzone der String gehört, da nur der UTC-Offset dieser Zeitzone zu diesem bestimmten exakten Zeitpunkt erhalten bleibt. Wenn der String auch den Namen der Zeitzone enthalten soll, verwenden Sie stattdessen `Temporal.ZonedDateTime`, das diese Information beibehält.

```js
const zoned = instant.toZonedDateTimeISO("Asia/Seoul");
const result3 = zoned.toString();

console.log(result3); // '2020-01-03T19:41:51+09:00[Asia/Seoul]'
console.log(instant.equals(Temporal.Instant.from(result3))); // true
console.log(zoned.equals(Temporal.ZonedDateTime.from(result3))); // true
```

## Sortieren

Jeder `Temporal`-Typ außer `Temporal.PlainMonthDay` verfügt über eine statische Methode {{jsxref("Temporal/PlainDateTime/compare", "compare()")}}. Sie können diese als Vergleichsfunktion an {{jsxref("Array.prototype.sort()")}} übergeben, um ein Array von `Temporal`-Werten zu sortieren.

### PlainDateTime-Werte sortieren

Sortieren Sie eine Liste von `Temporal.PlainDateTime`-Werten, beispielsweise um einen Konferenzplan in die richtige Reihenfolge zu bringen. Andere `Temporal`-Typen lassen sich auf genau dieselbe Weise sortieren. Die folgende Funktion gibt eine sortierte Kopie des Arrays zurück. Mit dem optionalen Argument `reverse` können Sie absteigend sortieren.

```js
function getSortedLocalDateTimes(dateTimes, reverse = false) {
  let newDateTimes = Array.from(dateTimes).sort(Temporal.PlainDateTime.compare);

  return reverse ? newDateTimes.reverse() : newDateTimes;
}

// Sorting some conferences without timezones for example vue.js Amsterdam 2020
const a = Temporal.PlainDateTime.from({
  year: 2020,
  day: 20,
  month: 2,
  hour: 8,
  minute: 45,
}); // Introduction
const b = Temporal.PlainDateTime.from({
  year: 2020,
  day: 21,
  month: 2,
  hour: 13,
  minute: 10,
}); // Lunch Break
const c = Temporal.PlainDateTime.from({
  year: 2020,
  day: 20,
  month: 2,
  hour: 15,
  minute: 30,
}); // Coffee Break
const results = getSortedLocalDateTimes([a, b, c]);
console.log(results.map((x) => x.toString()));
// ['2020-02-20T08:45:00', '2020-02-20T15:30:00', '2020-02-21T13:10:00']
```

### ISO-Datums- und Zeitstrings sortieren

Sortieren Sie eine Liste von Datums- und Zeitstrings nach ISO 8601 oder RFC 9557, beispielsweise um Protokolleinträge in die richtige Reihenfolge zu bringen. Die folgende Funktion nimmt ein Array von Strings entgegen, die als `Temporal.Instant`-Werte geparst werden können, und gibt eine nach exaktem Zeitpunkt sortierte Kopie zurück. Mit dem optionalen Argument `reverse` können Sie absteigend sortieren.

```js
function sortInstantStrings(strings, reverse = false) {
  const sortedInstants = strings
    .map((v) => [v, Temporal.Instant.from(v)])
    .sort(([, i1], [, i2]) => Temporal.Instant.compare(i1, i2))
    .map(([str]) => str);

  return reverse ? sortedInstants.reverse() : sortedInstants;
}

// simple string comparison order would not be correct here:
const a = "2020-01-23T17:04:36.491865121-08:00";
const b = "2020-02-10T17:04:36.491865121-08:00";
const c = "2020-04-01T05:01:00-04:00[America/New_York]";
const d = "2020-04-01T10:00:00+01:00[Europe/London]";
const e = "2020-04-01T11:02:00+02:00[Europe/Berlin]";

const results = sortInstantStrings([a, b, c, d, e]);

// results will have correct order
console.log(results);
// [
//   '2020-01-23T17:04:36.491865121-08:00',
//   '2020-02-10T17:04:36.491865121-08:00',
//   '2020-04-01T10:00:00+01:00[Europe/London]',
//   '2020-04-01T05:01:00-04:00[America/New_York]',
//   '2020-04-01T11:02:00+02:00[Europe/Berlin]'
// ]
```

## Runden

### Eine Uhrzeit auf volle Stunden abrunden

Verwenden Sie die Methode {{jsxref("Temporal/PlainTime/round", "round()")}} des jeweiligen `Temporal`-Typs, wenn Sie Zeitfelder runden möchten. Hier ist ein Beispiel, das eine Uhrzeit auf die zuletzt erreichte volle Stunde _abrundet_:

```js
const time = Temporal.PlainTime.from("12:38:28.138818731");

const wholeHour = time.round({ smallestUnit: "hour", roundingMode: "floor" });

console.log(wholeHour.toString()); // '12:00:00'
```

### Ein Datum auf den nächstgelegenen Monatsanfang runden

Runden ist nur für Zeitfelder definiert. Das Runden eines Datumsfelds kann mehrdeutig sein. Daher haben Typen, die nur ein Datum enthalten, wie `Temporal.PlainDate`, keine Methode `round()`. Wenn Sie beispielsweise ein Datum auf den nächstgelegenen Monat runden möchten, müssen Sie ausdrücklich festlegen, welche Art der Rundung Sie wünschen. Das folgende Beispiel rundet auf den nächstgelegenen Monatsanfang und bei gleichem Abstand auf:

```js
const date = Temporal.PlainDate.from("2018-09-16");

const firstOfCurrentMonth = date.with({ day: 1 });
const firstOfNextMonth = firstOfCurrentMonth.add({ months: 1 });

const sinceCurrent = date.since(firstOfCurrentMonth);
const untilNext = date.until(firstOfNextMonth);

const isCloserToNextMonth =
  Temporal.Duration.compare(sinceCurrent, untilNext) >= 0;
const nearestMonth = isCloserToNextMonth
  ? firstOfNextMonth
  : firstOfCurrentMonth;

console.log(nearestMonth.toString()); // '2018-10-01'
```

Unter [Ein Einführungsdatum verschieben](#ein_einführungsdatum_verschieben) finden Sie außerdem eine einfachere Möglichkeit, stets auf den _nächsten_ Monatsanfang aufzurunden.

## Zeitzonenkonvertierung

### Lokale Uhrzeit beibehalten

Ordnen Sie einem Datum und einer Uhrzeit ohne Zeitzone eine `Temporal.Instant`-Instanz zu, bei der das lokale Datum und die lokale Uhrzeit in einer angegebenen Zeitzone übereinstimmen. Das geht einfach mit <code>dateTime.<a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toZonedDateTime">toZonedDateTime</a>(timeZone).<a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toInstant">toInstant</a>()</code>. Das folgende Beispiel zeigt jedoch, wie sich andere Verfahren zur Auflösung von Mehrdeutigkeiten implementieren lassen als die in `Temporal` integrierten Modi `"compatible"`, `"earlier"`, `"later"` und `"reject"`. Die Funktion nimmt ein `Temporal.PlainDateTime`, eine Zeitzonenkennung und einen Modus zur Auflösung von Mehrdeutigkeiten entgegen (standardmäßig `"earlier"`). Sie gibt ein `Temporal.Instant` zurück und unterstützt zwei zusätzliche Modi:

- `"clipEarlier"`: Verwendet den früheren Zeitpunkt, wenn die Uhr zurückgestellt wird, oder den Zeitpunkt unmittelbar vor der Umstellung, wenn die Uhr vorgestellt wird.
- `"clipLater"`: Verwendet den späteren Zeitpunkt, wenn die Uhr zurückgestellt wird, oder den Zeitpunkt der Umstellung, wenn die Uhr vorgestellt wird.

```js
function getInstantWithLocalTimeInZone(
  dateTime,
  timeZone,
  disambiguation = "earlier",
) {
  // Handle the built-in modes first
  if (["compatible", "earlier", "later", "reject"].includes(disambiguation)) {
    return dateTime.toZonedDateTime(timeZone, { disambiguation }).toInstant();
  }

  const possibilities = ["earlier", "later"].map((disambiguation) =>
    dateTime.toZonedDateTime(timeZone, { disambiguation }),
  );
  const instants = possibilities
    .map((zdt) => zdt.toInstant())
    .reduce((a, b) => (a.equals(b) ? [a] : [a, b]));

  // Return only possibility if no disambiguation needed
  if (instants.length === 1) return instants[0];

  switch (disambiguation) {
    case "clipEarlier":
      if (possibilities[0].toPlainDateTime().equals(dateTime)) {
        return instants[0];
      }
      return possibilities[0]
        .getTimeZoneTransition("next")
        .subtract({ nanoseconds: 1 })
        .toInstant();
    case "clipLater":
      if (possibilities[1].toPlainDateTime().equals(dateTime)) {
        return instants[1];
      }
      return possibilities[0].getTimeZoneTransition("next").toInstant();
  }
  throw new RangeError(`invalid disambiguation ${disambiguation}`);
}

const nonexistentGermanWallTime =
  Temporal.PlainDateTime.from("2019-03-31T02:45");

const germanResults = {
  earlier: "2019-03-31T01:45:00+01:00",
  later: "2019-03-31T03:45:00+02:00",
  compatible: "2019-03-31T03:45:00+02:00",
  clipEarlier: "2019-03-31T01:59:59.999999999+01:00",
  clipLater: "2019-03-31T03:00:00+02:00",
};
for (const [disambiguation, result] of Object.entries(germanResults)) {
  console.log(
    getInstantWithLocalTimeInZone(
      nonexistentGermanWallTime,
      "Europe/Berlin",
      disambiguation,
    ).toString({
      timeZone: "Europe/Berlin",
    }) === result,
  ); // true
}

const doubleEasternBrazilianWallTime =
  Temporal.PlainDateTime.from("2019-02-16T23:45");

const brazilianResults = {
  earlier: "2019-02-16T23:45:00-02:00",
  later: "2019-02-16T23:45:00-03:00",
  compatible: "2019-02-16T23:45:00-02:00",
  clipEarlier: "2019-02-16T23:45:00-02:00",
  clipLater: "2019-02-16T23:45:00-03:00",
};
for (const [disambiguation, result] of Object.entries(brazilianResults)) {
  console.log(
    getInstantWithLocalTimeInZone(
      doubleEasternBrazilianWallTime,
      "America/Sao_Paulo",
      disambiguation,
    ).toString({
      timeZone: "America/Sao_Paulo",
    }) === result,
  ); // true
}
```

### Exakten Zeitpunkt beibehalten

Ordnen Sie einem Datum und einer Uhrzeit mit Zeitzone ein Datum und eine Uhrzeit in einer anderen Zielzeitzone zu, die denselben exakten Zeitpunkt repräsentieren. Dies kann bei der Konvertierung von durch Benutzer eingegebenen Datums- und Zeitwerten zwischen Zeitzonen nützlich sein.

```js
const source = Temporal.ZonedDateTime.from("2020-01-09T00:00[America/Chicago]");

const result = source.withTimeZone("America/Los_Angeles");

// On this date, when it's midnight in Chicago, it's 10 PM the previous night in LA
console.log(result.toString());
// '2020-01-08T22:00:00-08:00[America/Los_Angeles]'
```

Hier ist ein weiteres, ähnliches Beispiel, bei dem die Zeitzone für zukünftige Ereignisse verwendet wird. Die Zeiten und Orte einer Reihe zukünftiger Besprechungen werden als Paar von Strings gespeichert: einer für das Kalenderdatum und die lokale Uhrzeit, der andere für die Zeitzone. Sie können nicht als exakter Zeitpunkt gespeichert werden, da sich die Zeitzonenregeln für die Sommerzeit bis zum Ereignis ändern könnten – Brasilien hat beispielsweise 2019 die Sommerzeit abgeschafft. Die Besprechung würde aber weiterhin zur selben lokalen Uhrzeit an diesem Datum stattfinden. Wenn sich die Zeitzonenregeln änderten, änderte sich daher der exakte Zeitpunkt des Ereignisses.

Dieses Beispiel berechnet die Anfangszeiten aller Ecma-TC39-Besprechungen im Jahr 2019 in der Ortszeit von Tokio.

```js
// Dates of the 2019 TC39 meetings:
const tc39meetings = [
  {
    dateTime: "2019-01-28T10:00",
    timeZone: "America/Phoenix",
  },
  {
    dateTime: "2019-03-26T10:00",
    timeZone: "America/New_York",
  },
  {
    dateTime: "2019-06-04T10:00",
    timeZone: "Europe/Berlin",
  },
  {
    dateTime: "2019-07-23T10:00",
    timeZone: "America/Los_Angeles",
  },
  {
    dateTime: "2019-10-01T10:00",
    timeZone: "America/New_York",
  },
  {
    dateTime: "2019-12-03T10:00",
    timeZone: "America/Los_Angeles",
  },
];

// To follow the meetings remotely from Tokyo, calculate the times you would
// need to join:
const localTimeZone = "Asia/Tokyo";
const localTimes = tc39meetings.map(({ dateTime, timeZone }) => {
  return Temporal.PlainDateTime.from(dateTime)
    .toZonedDateTime(timeZone, { disambiguation: "reject" })
    .withTimeZone(localTimeZone)
    .toPlainDateTime();
});

console.log(localTimes.map((dt) => dt.toString()));
// [
//   "2019-01-29T02:00:00",
//   "2019-03-26T23:00:00",
//   "2019-06-04T17:00:00",
//   "2019-07-24T02:00:00",
//   "2019-10-01T23:00:00",
//   "2019-12-04T03:00:00",
// ]
```

### Tägliches Ereignis zur Ortszeit

Berechnen Sie ähnlich wie im vorherigen Beispiel die exakten Zeitpunkte eines täglich zu einer bestimmten Ortszeit in einer bestimmten Zeitzone stattfindenden Ereignisses. Der folgende Generator nimmt ein anfängliches `Temporal.PlainDate`, ein `Temporal.PlainTime` und eine Zeitzonenkennung entgegen und liefert jedes Ereignis als `Temporal.Instant`.

```js
function* calculateDailyOccurrence(startDate, plainTime, timeZone) {
  for (let date = startDate; ; date = date.add({ days: 1 })) {
    yield date.toZonedDateTime({ plainTime, timeZone }).toInstant();
  }
}

// Daily meeting at 8 AM California time
const startDate = Temporal.PlainDate.from("2017-03-10");
const time = Temporal.PlainTime.from("08:00");
const timeZone = "America/Los_Angeles";
const iter = calculateDailyOccurrence(startDate, time, timeZone);

console.log(iter.next().value.toString()); // '2017-03-10T16:00:00Z'
console.log(iter.next().value.toString()); // '2017-03-11T16:00:00Z'
// DST change:
console.log(iter.next().value.toString()); // '2017-03-12T15:00:00Z'
console.log(iter.next().value.toString()); // '2017-03-13T15:00:00Z'
```

### UTC-Offset für ein Ereignis mit Zeitzone als String

Verwenden Sie `Temporal.Instant.prototype.toZonedDateTimeISO()` und {{jsxref("Temporal/ZonedDateTime/offset", "offset")}}, um einer `Temporal.Instant`-Instanz und einer Zeitzone den UTC-Offset zu diesem exakten Zeitpunkt in dieser Zeitzone als String zuzuordnen.

```js
const instant = Temporal.Instant.from("2020-01-09T00:00Z");

const source = instant.toZonedDateTimeISO("America/New_York");
source.offset; // '-05:00'
```

### UTC-Offset für ein Ereignis mit Zeitzone als Sekundenzahl

Verwenden Sie entsprechend `Temporal.Instant.prototype.toZonedDateTimeISO()` und {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "offsetNanoseconds")}}, um den Offset als Sekundenzahl zu erhalten. (Denken Sie daran, durch 10<sup>9</sup> zu teilen, um Nanosekunden in Sekunden umzurechnen.)

```js
const instant = Temporal.Instant.from("2020-01-09T00:00Z");

instant.toZonedDateTimeISO("America/New_York").offsetNanoseconds / 1e9;
// -18000
```

### Offset zwischen zwei Zeitzonen zu einem exakten Zeitpunkt

Mit `Temporal.Instant.prototype.toZonedDateTimeISO()` und `Temporal.ZonedDateTime.offsetNanoseconds` können Sie außerdem einer `Temporal.Instant`-Instanz und zwei Zeitzonen die Differenz der UTC-Offsets dieser Zeitzonen zu diesem exakten Zeitpunkt als vorzeichenbehaftete Sekundenzahl zuordnen.

```js
function getUtcOffsetDifferenceSecondsAtInstant(
  instant,
  sourceTimeZone,
  targetTimeZone,
) {
  const sourceOffsetNs =
    instant.toZonedDateTimeISO(sourceTimeZone).offsetNanoseconds;
  const targetOffsetNs =
    instant.toZonedDateTimeISO(targetTimeZone).offsetNanoseconds;
  return (targetOffsetNs - sourceOffsetNs) / 1e9;
}

const instant = Temporal.Instant.from("2020-01-09T00:00Z");

// At this exact time, Chicago is 3600 seconds earlier than New York
console.log(
  getUtcOffsetDifferenceSecondsAtInstant(
    instant,
    "America/New_York",
    "America/Chicago",
  ),
); // -3600
```

### Mit Datums- und Zeitangaben an einem festen Standort arbeiten

Hier ist ein Beispiel für die Verwendung von `Temporal` in einem Diagramm. Es zeigt fiktive Aktivitätsdaten für einen Lagertank an einem festen Standort (Stockholm, Schweden). Das Diagramm beginnt immer um Mitternacht am Standort des Tanks, die Beschriftungen verwenden jedoch die Zeitzone der betrachtenden Person.

```html hidden
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
<canvas id="storage-tank" width="600" height="400"></canvas>
```

```js
// Generate fictitious "data"
const start = Temporal.Now.instant().subtract({ hours: 24 });
const blank = Array(24 * 12);
const tankDataX = Array.from(blank, (_, ix) => start.add({ minutes: ix * 5 }));
const tankDataY = Array.from(blank);
tankDataY[0] = 25;
for (let ix = 1; ix < tankDataY.length; ix++) {
  tankDataY[ix] = Math.max(0, tankDataY[ix - 1] + 3 * (Math.random() - 0.5));
}

// tankDataX and tankDataY are X and Y-axis data for the last 24 hours,
// obtained from elsewhere, e.g. const [tankDataX, tankDataY] = fetchData();
// tankDataX is an array of Temporal.Instant, and tankDataY is an array of numbers.

// Show data starting from the most recent midnight in the tank's location (Stockholm)
const tankTimeZone = "Europe/Stockholm";
const labelFormatter = new Intl.DateTimeFormat(undefined, {
  weekday: "short",
  hour: "numeric",
  minute: "numeric",
  timeZone: Temporal.Now.timeZoneId(),
});
const browserCalendar = labelFormatter.resolvedOptions().calendar;
const tankMidnight = Temporal.Now.zonedDateTimeISO()
  .withCalendar(browserCalendar)
  .withTimeZone(tankTimeZone)
  .startOfDay()
  .toInstant();
const atOrAfterMidnight = (x) => Temporal.Instant.compare(x, tankMidnight) >= 0;
const dataStartIndex = tankDataX.findIndex(atOrAfterMidnight);
const graphLabels = tankDataX
  .slice(dataStartIndex)
  .map((x) => labelFormatter.format(x));
const graphPoints = tankDataY.slice(dataStartIndex);

const ctx = document.getElementById("storage-tank").getContext("2d");
// The graph is made with Chart.js (https://www.chartjs.org/)
new Chart(ctx, {
  type: "line",
  data: {
    labels: graphLabels,
    datasets: [
      {
        label: "Fill level",
        data: graphPoints,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Stockholm storage tank",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
```

{{EmbedLiveSample("Dealing with dates and times in a fixed location", "100%", 500)}}

### Eine Besprechung über Zeitzonen hinweg planen

Im Web gibt es verschiedene Werkzeuge, um Besprechungszeiten zu finden, die für die Zeitzonen aller Teilnehmenden geeignet sind. Dazu gehören [World Time Buddy](https://www.worldtimebuddy.com/) und [World Clock Meeting Planner](https://www.timeanddate.com/worldclock/meeting.html); entsprechende Funktionen sind auch in verschiedener Kalendersoftware integriert.

```css hidden
#meeting-planner {
  border-collapse: separate;
  border-spacing: 0 10px;
  font-size: 0.6rem;
  text-align: center;
}

/* https://materializecss.com/color.html */
.time-0,
.time-1,
.time-2,
.time-3,
.time-4,
.time-5,
.time-22,
.time-23 {
  background-color: #ef9a9a; /* red lighten-3 */
  border-color: #e57373; /* red lighten-2 */
  border-style: solid;
  border-width: 0 1px;
}
.time-6,
.time-7,
.time-18,
.time-19,
.time-20,
.time-21 {
  background-color: #fff59d; /* yellow lighten-3 */
  border-color: #ffd54f; /* amber lighten-2 */
  border-style: solid;
  border-width: 0 1px;
}
.time-8,
.time-9,
.time-10,
.time-11,
.time-12,
.time-13,
.time-14,
.time-15,
.time-16,
.time-17 {
  background-color: #a5d6a7; /* green lighten-3 */
  border-color: #81c784; /* green lighten-2 */
  border-style: solid;
  border-width: 0 1px;
}

.time-0 {
  border-bottom-left-radius: 12px;
  border-left-color: white;
  border-left-width: 2px;
  border-top-left-radius: 12px;
  font-weight: bold;
}
.time-23 {
  border-bottom-right-radius: 12px;
  border-right-color: white;
  border-right-width: 2px;
  border-top-right-radius: 12px;
}

.time-current {
  border: 2px solid black;
}
```

```html hidden
<table id="meeting-planner"></table>
```

```js
// Display local time zone and three others
const browserCalendar = new Intl.DateTimeFormat().resolvedOptions().calendar;
const now = Temporal.Now.zonedDateTimeISO().withCalendar(browserCalendar);
const timeZones = [
  { name: "Here", tz: now.timeZoneId },
  { name: "New York", tz: "America/New_York" },
  { name: "London", tz: "Europe/London" },
  { name: "Tokyo", tz: "Asia/Tokyo" },
];

// Start the table at midnight local time
const startTime = now.startOfDay();

// Build the table
const table = document.getElementById("meeting-planner");
timeZones.forEach(({ name, tz }) => {
  const row = document.createElement("tr");

  const title = document.createElement("td");
  const startTimeHere = startTime.withTimeZone(tz);
  title.textContent = `${name} (UTC${startTimeHere.offset})`;
  row.appendChild(title);

  for (let hours = 0; hours < 24; hours++) {
    const cell = document.createElement("td");

    const columnTime = startTimeHere.add({ hours });
    cell.className = `time-${columnTime.hour}`;

    // Highlight the current hour in each row
    if (hours === now.hour) cell.className += " time-current";

    // Show the date in midnight cells
    let formatOptions;
    if (columnTime.hour === columnTime.startOfDay().hour) {
      formatOptions = { month: "short", day: "numeric" };
    } else {
      formatOptions = { hour: "numeric" };
    }
    cell.textContent = columnTime.toLocaleString(undefined, formatOptions);
    row.appendChild(cell);
  }

  table.appendChild(row);
});
```

{{EmbedLiveSample("Book a meeting across time zones", "100%", 200)}}

## Arithmetik

### Wie viele Tage bis zu einem zukünftigen Datum?

Ein HTML-Beispielformular, inspiriert vom [Tage-Rechner](https://www.timeanddate.com/date/durationresult.html) auf timeanddate.com:

```html
<form>
  <label>
    Enter future date:
    <input type="date" name="futuredate" />
  </label>
  <button>Submit</button>
</form>

<div id="futuredate-results"></div>
```

```js
// Initialize the input; see 'Calendar input element'.
const futureDatePicker = document.querySelector('input[name="futuredate"]');
const today = Temporal.Now.plainDateISO();
futureDatePicker.min = today;
futureDatePicker.value = today.add({ months: 1 });

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const futuredateParam = futureDatePicker.value;
  if (!futuredateParam) return;

  const browserCalendar = new Intl.DateTimeFormat().resolvedOptions().calendar;
  const futureDate =
    Temporal.PlainDate.from(futuredateParam).withCalendar(browserCalendar);
  const today = Temporal.Now.plainDateISO().withCalendar(browserCalendar);
  const until = today.until(futureDate, { largestUnit: "day" });
  const untilMonths = until.round({ largestUnit: "month", relativeTo: today });

  const dayString = until.toLocaleString();
  const results = document.getElementById("futuredate-results");
  results.innerHTML = `
    <p>From and including: <strong>${today.toLocaleString()}</strong></p>
    <p>To but not including: <strong>${futureDate.toLocaleString()}</strong></p>
    <h4>Result: ${dayString}</h4>
    <p>It is ${dayString} from the start date to the end date, but not
    including the end date.</p>
    <p>Or ${untilMonths.toLocaleString()} excluding the end date.</p>
  `;
});
```

{{EmbedLiveSample("How many days until a future date", "100%", 350)}}

### Auf bestimmte Einheiten begrenzte Zeitspanne zwischen jetzt und einem vergangenen oder zukünftigen Ereignis mit Zeitzone

Berechnen Sie die Differenz zwischen zwei `Temporal.Instant`-Instanzen als `Temporal.Duration`-Instanz (positiv oder negativ), die die Zeitspanne zwischen den beiden Zeitpunkten darstellt, ohne größere Einheiten als die angegebenen zu verwenden. So können Sie beispielsweise einen aussagekräftigen Countdown mit oder ohne Monate oder Tage anzeigen.

```js
const result = Temporal.Instant.from("2020-01-09T04:00Z").since(
  Temporal.Instant.from("2020-01-09T00:00Z"),
  {
    largestUnit: "hour",
  },
);
console.log(`${result}`); // 'PT4H'

const result2 = Temporal.Instant.from("2020-01-09T00:00Z").until(
  Temporal.Instant.from("2020-01-09T04:00Z"),
  {
    largestUnit: "minute",
  },
);
console.log(`${result2}`); // 'PT240M'

// Example of using it in a countdown:

const duration = Temporal.Now.instant().until(
  Temporal.Instant.from("2020-04-01T13:00-07:00[America/Los_Angeles]"),
);
`It's ${duration.abs().toLocaleString()} ${duration.sign < 0 ? "since" : "until"} the TC39 Temporal presentation`;
```

### Nächste Offset-Änderung in einer Zeitzone

Ordnen Sie einer `Temporal.ZonedDateTime`-Instanz eine andere `Temporal.ZonedDateTime`-Instanz zu, die den nächstfolgenden exakten Zeitpunkt repräsentiert, an dem sich der Offset in der Zeitzone ändert, beispielsweise um Erinnerungen einzurichten. Die folgende Funktion nimmt außerdem einen `inclusive`-Wert entgegen, um eine Änderung zum Ausgangszeitpunkt einzubeziehen, und gibt `null` zurück, wenn keine Änderung bekannt ist.

```js
function getNextOffsetTransitionFromExactTime(zonedDateTime, inclusive) {
  let nearest;
  if (inclusive) {
    // In case instant itself is the exact time of a transition:
    nearest = zonedDateTime
      .subtract({ nanoseconds: 1 })
      .getTimeZoneTransition("next");
  } else {
    nearest = zonedDateTime.getTimeZoneTransition("next");
  }
  return nearest;
}

const nycTime = Temporal.ZonedDateTime.from(
  "2019-04-16T21:01Z[America/New_York]",
);

const nextTransition = getNextOffsetTransitionFromExactTime(nycTime, false);
console.log(nextTransition.toString());
// '2019-11-03T01:00:00-05:00[America/New_York]'

// Inclusive
const sameTransition = getNextOffsetTransitionFromExactTime(
  nextTransition,
  true,
);
console.log(sameTransition.toString() === nextTransition.toString()); // true

// No known future DST transitions in a time zone
const reginaTime = Temporal.ZonedDateTime.from(
  "2019-04-16T21:01Z[America/Regina]",
);
console.log(getNextOffsetTransitionFromExactTime(reginaTime)); // null
```

### Einen exakten Zeitpunkt mit Geschäftszeiten vergleichen

Die folgende Funktion nimmt ein `Temporal.ZonedDateTime`, einen Wochenplan und ein `Temporal.Duration` entgegen, das festlegt, welcher Zeitraum als „bald“ gilt. Sie gibt „öffnet bald“, „geöffnet“, „schließt bald“ oder „geschlossen“ zurück. Der Plan ist ein Array mit sieben Einträgen, beginnend mit Sonntag. Jeder Eintrag ist entweder `null` für einen geschlossenen Tag oder ein Objekt mit den Eigenschaften `open` und `close`, die `Temporal.PlainTime`-Werte enthalten.

```js
function getBusinessOpenStateText(now, businessHours, soonWindow) {
  const compare = Temporal.ZonedDateTime.compare;
  function inRange(zdt, start, end) {
    return compare(zdt, start) >= 0 && compare(zdt, end) < 0;
  }

  // Because of times wrapping around at midnight, we may need to consider
  // yesterday's and tomorrow's hours as well
  for (const delta of [-1, 0]) {
    const openDate = now.toPlainDate().add({ days: delta });
    // convert weekday (1..7) to 0-based index, for array:
    const index = (openDate.dayOfWeek + 7) % 7;
    if (!businessHours[index]) continue;

    const timeZone = now.timeZoneId;
    const { open: openTime, close: closeTime } = businessHours[index];
    const open = openDate.toZonedDateTime({ plainTime: openTime, timeZone });
    const isWrap = Temporal.PlainTime.compare(closeTime, openTime) < 0;
    const closeDate = isWrap ? openDate.add({ days: 1 }) : openDate;
    const close = closeDate.toZonedDateTime({ plainTime: closeTime, timeZone });

    if (inRange(now, open, close)) {
      return compare(now, close.subtract(soonWindow)) >= 0
        ? "closing soon"
        : "open";
    }
    if (inRange(now.add(soonWindow), open, close)) return "opening soon";
  }
  return "closed";
}

// For example, a restaurant or bar might have opening hours that go past
// midnight; make sure this is handled correctly
const businessHours = [
  /* Sun */ {
    open: Temporal.PlainTime.from("13:00"),
    close: Temporal.PlainTime.from("20:30"),
  },
  /* Mon */ null, // closed Mondays
  /* Tue */ {
    open: Temporal.PlainTime.from("11:00"),
    close: Temporal.PlainTime.from("20:30"),
  },
  /* Wed */ {
    open: Temporal.PlainTime.from("11:00"),
    close: Temporal.PlainTime.from("20:30"),
  },
  /* Thu */ {
    open: Temporal.PlainTime.from("11:00"),
    close: Temporal.PlainTime.from("22:00"),
  },
  /* Fri */ {
    open: Temporal.PlainTime.from("11:00"),
    close: Temporal.PlainTime.from("00:00"),
  },
  /* Sat */ {
    open: Temporal.PlainTime.from("11:00"),
    close: Temporal.PlainTime.from("02:00"),
  },
];

const now = Temporal.ZonedDateTime.from(
  "2019-04-07T00:00+02:00[Europe/Berlin]",
);
const soonWindow = Temporal.Duration.from({ minutes: 30 });
const saturdayNightState = getBusinessOpenStateText(
  now,
  businessHours,
  soonWindow,
);
console.log(saturdayNightState); // 'open'

const lastCall = now.add({ hours: 1, minutes: 50 });
console.log(lastCall.toString()); // '2019-04-07T01:50:00+02:00[Europe/Berlin]'
const lastCallState = getBusinessOpenStateText(
  lastCall,
  businessHours,
  soonWindow,
);
console.log(lastCallState); // 'closing soon'

const tuesdayEarly = now.add({ days: 2, hours: 6 });
const tuesdayEarlyState = getBusinessOpenStateText(
  tuesdayEarly,
  businessHours,
  soonWindow,
);
console.log(tuesdayEarlyState); // 'closed'
```

### Abflugzeit, Ankunftszeit und Flugdauer

Berechnen Sie aus Abflug- und Ankunftszeiten mit jeweiliger Zeitzone die Reisedauer in Einheiten, die nicht größer als Stunden sind. (Standardmäßig sind Differenzen zwischen ZonedDateTime-Instanzen exakte Differenzen in Zeiteinheiten.)

```js
const departure = Temporal.ZonedDateTime.from(
  "2020-03-08T11:55:00+08:00[Asia/Hong_Kong]",
);
const arrival = Temporal.ZonedDateTime.from(
  "2020-03-08T09:50:00-07:00[America/Los_Angeles]",
);

const flightTime = departure.until(arrival);

console.log(flightTime.toString()); // 'PT12H55M'
```

Ermitteln Sie aus einer Abflugzeit mit Zeitzone und einer Flugdauer mithilfe zeitzonenbewusster Berechnungen die Ankunftszeit in der Zeitzone des Zielorts.

```js
const departure = Temporal.ZonedDateTime.from(
  "2020-03-08T11:55:00+08:00[Asia/Hong_Kong]",
);
const flightTime = Temporal.Duration.from({ minutes: 775 });

const arrival = departure.add(flightTime).withTimeZone("America/Los_Angeles");

console.log(arrival.toString());
// '2020-03-08T09:50:00-07:00[America/Los_Angeles]'
```

### Ein Einführungsdatum verschieben

Die folgende Funktion nimmt ein `Temporal.PlainDate` und eine Anzahl von Tagen Verzögerung entgegen (beispielsweise die Zeit, die für eine Genehmigung benötigt wurde). Sie gibt ein `Temporal.PlainDate` für den Anfang des Monats zurück, der auf das verschobene Datum folgt.

```js
function plusAndRoundToMonthStart(date, delayDays) {
  return (
    date
      .add({ days: delayDays })
      .add({ months: 1 })
      // constrains to end of month if needed, e.g. Jan 31 -> Feb 28
      .with({ day: 1 })
  );
}

const oldLaunchDate = Temporal.PlainDate.from("2019-06-01");

const fifteenDaysDelay = plusAndRoundToMonthStart(oldLaunchDate, 15);
console.log(fifteenDaysDelay.toString()); // '2019-07-01'

const sixtyDaysDelay = plusAndRoundToMonthStart(oldLaunchDate, 60);
console.log(sixtyDaysDelay.toString()); // '2019-08-01'
```

### Eine Erinnerung vor dem Erreichen einer Rekordzeit planen

Wenn Sie einen Rekord betrachten (beispielsweise eine persönliche Bestzeit in einer Sportart), möchten Sie vielleicht kurz vor dem Übertreffen dieses Rekords eine Benachrichtigung erhalten. Dieses Beispiel nimmt den Rekord als `Temporal.Duration`, den exakten Startzeitpunkt des aktuellen Versuchs als `Temporal.Instant` und ein weiteres `Temporal.Duration` entgegen. Letzteres gibt an, wie lange vor dem potenziell rekordverdächtigen exakten Zeitpunkt Sie benachrichtigt werden möchten. Die Funktion gibt den exakten Zeitpunkt zurück, zu dem eine Benachrichtigung gesendet werden könnte, beispielsweise: „Weiter so! Noch 5 Minuten bis zu Ihrer persönlichen Bestleistung!“

Dies könnte für das Aufzeichnen von Trainingseinheiten und für Rennen verwendet werden (auch für _lange_ Rennen, die möglicherweise Zeitzonen überschreiten, wie die Bullrun Rally, Iditarod, Self-Transcendence 3100 und Clipper Round The World). Ebenso eignet es sich für zeitlich unbegrenzte Varianten wie Serien von Ereignissen, die täglich stattfinden.

```js
function getInstantBeforeOldRecord(start, previousRecord, noticeWindow) {
  return start.add(previousRecord).subtract(noticeWindow);
}

// Start of the men's 10000 meters at the Rio de Janeiro 2016 Olympic Games
const raceStart = Temporal.Instant.from(
  "2016-08-13T21:27-03:00[America/Sao_Paulo]",
);
// Kenenisa Bekele's world record set in 2005
const record = Temporal.Duration.from({
  minutes: 26,
  seconds: 17,
  milliseconds: 530,
});
const noticeWindow = Temporal.Duration.from({ minutes: 1 });
// Time to send a "hurry up, can you finish the race in 1 minute?" push
// notification to all the runners
const reminderAt = getInstantBeforeOldRecord(raceStart, record, noticeWindow);

console.log(reminderAt.toString()); // '2016-08-14T00:52:17.53Z'
```

### Der n-te Wochentag im Monat

Die folgende Funktion nimmt ein {{jsxref("Temporal.PlainYearMonth")}} entgegen und gibt ein `Temporal.PlainDate` zurück, das den ersten Dienstag des Monats repräsentiert. Sie lässt sich für andere Wochentage anpassen.

```js
function getFirstTuesday(queriedMonth) {
  // We first need to convert to a date
  const firstOfMonth = queriedMonth.toPlainDate({ day: 1 });

  // We have Monday = 1, Sunday = 7, and we want to add a positive number
  // smaller than 7 to get to the first Tuesday.
  // If we're already on a Tuesday (2) then we want to add 0.
  // So for the first of the month being a Monday through Sunday the additions are:
  //    1, 0, 6, 5, 4, 3, 2 which is given by that formula.
  // This lookup table makes this example easier to read, but you can also
  // calculate the answer: (7 + desiredWeekday - firstOfMonth.dayOfWeek) % 7
  return firstOfMonth.add({
    days: [1, 0, 6, 5, 4, 3, 2][firstOfMonth.dayOfWeek - 1],
  });
}

const myMonth = Temporal.PlainYearMonth.from("2020-02");
const firstTuesdayOfMonth = getFirstTuesday(myMonth);
console.log(firstTuesdayOfMonth.toString()); // '2020-02-04'
console.log(firstTuesdayOfMonth.dayOfWeek); // 2

// Similarly, to get the second Tuesday:
const secondWeek = myMonth.toPlainDate({ day: 8 });
const secondTuesday = secondWeek.add({
  days: [1, 0, 6, 5, 4, 3, 2][secondWeek.dayOfWeek - 1],
});
console.log(secondTuesday.day === firstTuesdayOfMonth.day + 7); // true

// And the last Tuesday:
const lastOfMonth = myMonth.toPlainDate({ day: myMonth.daysInMonth });
const lastTuesday = lastOfMonth.subtract({
  days: [6, 0, 1, 2, 3, 4, 5][lastOfMonth.dayOfWeek - 1],
});
console.log(lastTuesday.toString()); // '2020-02-25'
console.log(lastTuesday.dayOfWeek); // 2
// or:
const lastTuesday2 = lastOfMonth.subtract({
  days: (7 + lastOfMonth.dayOfWeek - 2) % 7,
});
console.log(Temporal.PlainDate.compare(lastTuesday, lastTuesday2)); // 0
```

Die folgende Funktion nimmt ein `Temporal.PlainYearMonth` und einen Wochentag von 1 (Montag) bis 7 (Sonntag) entgegen. Sie gibt ein chronologisch geordnetes Array von `Temporal.PlainDate`-Instanzen für alle entsprechenden Tage im Monat zurück.

```js
function getWeeklyDaysInMonth(yearMonth, dayNumberOfTheWeek) {
  const firstOfMonth = yearMonth.toPlainDate({ day: 1 });
  let nextWeekday = firstOfMonth.add({
    days: (7 + dayNumberOfTheWeek - firstOfMonth.dayOfWeek) % 7,
  });
  const result = [];
  while (nextWeekday.month === yearMonth.month) {
    result.push(nextWeekday);
    nextWeekday = nextWeekday.add({ days: 7 });
  }
  return result;
}

console.log(
  getWeeklyDaysInMonth(Temporal.PlainYearMonth.from("2020-02"), 1).join(" "),
); // '2020-02-03 2020-02-10 2020-02-17 2020-02-24'
console.log(
  getWeeklyDaysInMonth(Temporal.PlainYearMonth.from("2020-02"), 6).join(" "),
); // '2020-02-01 2020-02-08 2020-02-15 2020-02-22 2020-02-29'
```

Die folgende Funktion nimmt ein `Temporal.PlainDate` entgegen und gibt die Anzahl der vorhergehenden Tage in dessen Monat zurück, die auf denselben Wochentag fallen.

```js
function countPrecedingWeeklyDaysInMonth(date) {
  // This doesn't actually require Temporal
  return Math.floor((date.day - 1) / 7);
}

console.log(
  countPrecedingWeeklyDaysInMonth(Temporal.PlainDate.from("2020-02-28")),
); // 3
console.log(
  countPrecedingWeeklyDaysInMonth(Temporal.PlainDate.from("2020-02-29")),
); // 4
```

### Den Tag des Monats ändern

Hier sind einige Beispiele dafür, wie Sie bei einem vorhandenen Datum den Tag des Monats ändern können.

```js
const date = Temporal.PlainDate.from("2020-04-14");

// Third day of next month:

const thirdOfNextMonth = date.add({ months: 1 }).with({ day: 3 });

console.log(thirdOfNextMonth.toString()); // '2020-05-03'

// Last day of this month:

const lastOfThisMonth = date.with({ day: date.daysInMonth });

console.log(lastOfThisMonth.toString()); // '2020-04-30'

// On the 18th of this month at 8 PM:

const thisMonth18thAt8PM = date
  .with({ day: 18 })
  .toPlainDateTime(Temporal.PlainTime.from("20:00"));

console.log(thisMonth18thAt8PM.toString()); // '2020-04-18T20:00:00'
```

### Dasselbe Datum in einem anderen Monat

Ebenso zeigen die folgenden Beispiele, wie Sie bei einem vorhandenen Datum den Monat ändern, aber Tag und Jahr beibehalten.

Je nach gewünschtem Verhalten müssen Sie die passende Option `overflow` wählen. Der Standardwert `"constrain"` sollte jedoch für die meisten Fälle geeignet sein.

```js
const date = Temporal.PlainDate.from("2020-05-31");

// Same date and time, but in February
// (and use the last day if the date doesn't exist in February):

const feb = date.with({ month: 2 });

console.log(feb.toString()); // '2020-02-29'

// Same date and time, but in April
// (and throw an exception if the date doesn't exist in April):

date.with({ month: 4 }, { overflow: "reject" }); // Throws a RangeError
```

### Nächstes wöchentliches Ereignis

Die folgende Funktion nimmt ein anfängliches `Temporal.ZonedDateTime`, einen Wochentag von 1 (Montag) bis 7 (Sonntag), ein `Temporal.PlainTime` und eine Zeitzonenkennung entgegen. Sie gibt ein `Temporal.ZonedDateTime` zurück, das den nächsten Zeitpunkt des wöchentlichen Ereignisses repräsentiert (beispielsweise „jeden Donnerstag um 08:45 Uhr kalifornischer Zeit“).

```js
function nextWeeklyOccurrence(now, weekday, eventTime, eventTimeZone) {
  const nowInEventTimeZone = now.withTimeZone(eventTimeZone);
  const nextDate = nowInEventTimeZone
    .toPlainDate()
    .add({ days: (weekday + 7 - nowInEventTimeZone.dayOfWeek) % 7 });
  let nextOccurrence = nextDate.toZonedDateTime({
    plainTime: eventTime,
    timeZone: eventTimeZone,
  });

  // Handle the case where the event is today but already happened
  if (Temporal.ZonedDateTime.compare(now, nextOccurrence) > 0) {
    nextOccurrence = nextOccurrence.add({ weeks: 1 });
  }

  return nextOccurrence.withTimeZone(now.timeZoneId);
}

// "Weekly on Thursdays at 08:45 California time":
const weekday = 4;
const eventTime = Temporal.PlainTime.from("08:45");
const eventTimeZone = "America/Los_Angeles";

const rightBefore = Temporal.ZonedDateTime.from(
  "2020-03-26T15:30+00:00[Europe/London]",
);
let next = nextWeeklyOccurrence(rightBefore, weekday, eventTime, eventTimeZone);
console.log(next.toString()); // '2020-03-26T15:45:00+00:00[Europe/London]'

const rightAfter = Temporal.ZonedDateTime.from(
  "2020-03-26T16:00+00:00[Europe/London]",
);
next = nextWeeklyOccurrence(rightAfter, weekday, eventTime, eventTimeZone);
console.log(next.toString()); // '2020-04-02T16:45:00+01:00[Europe/London]'
```

### Wochentag eines jährlichen Ereignisses

In manchen Ländern gibt es einen zusätzlichen arbeitsfreien „Brückentag“ am Montag oder Freitag, wenn ein Feiertag auf einen Dienstag oder Donnerstag fällt, damit Beschäftigte ein langes Wochenende haben. Die folgende Funktion nimmt ein `Temporal.PlainMonthDay` und ein Jahr entgegen und gibt ein Array von `Temporal.PlainDate`-Werten für den Feiertag und gegebenenfalls den Brückentag zurück. Fällt der Feiertag auf ein Wochenende, gibt sie ein leeres Array zurück.

```js
function bridgePublicHolidays(holiday, year) {
  const date = holiday.toPlainDate({ year });
  switch (date.dayOfWeek) {
    case 1: // Mon
    case 3: // Wed
    case 5: // Fri
      return [date];
    case 2: // Tue; take Monday off
      return [date.subtract({ days: 1 }), date];
    case 4: // Thu; take Friday off
      return [date, date.add({ days: 1 })];
    case 6: // Sat
    case 7: // Sun
      return [];
  }
}

const laborDay = Temporal.PlainMonthDay.from("05-01");

// No bridge day
console.log(bridgePublicHolidays(laborDay, 2020).map((d) => d.toString()));
// ['2020-05-01']

// Bridge day
console.log(bridgePublicHolidays(laborDay, 2018).map((d) => d.toString()));
// ['2018-04-30', '2018-05-01']

// Bad luck, the holiday is already on a weekend
console.log(bridgePublicHolidays(laborDay, 2021).map((d) => d.toString()));
// []
```

---
title: Intl.DateTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
l10n:
  sourceCommit: 90cb2bec97539adbf89c5f0335a344eca6e0f3d4
---

{{JSRef}}

Die **`formatToParts()`**-Methode von {{jsxref("Intl.DateTimeFormat")}}-Instanzen ermöglicht die lokalisierte Formatierung von Strings, die von diesem `Intl.DateTimeFormat`-Objekt erzeugt werden.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-formattoparts.html", "taller")}}

## Syntax

```js-nolint
formatToParts(date)
```

### Parameter

- `date` {{optional_inline}}
  - : Das Datum, das formatiert werden soll.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, das das formatierte Datum in Teilen enthält.

## Beschreibung

Die `formatToParts()`-Methode ist nützlich für benutzerdefinierte Formatierungen von Datumsstrings. Sie gibt ein {{jsxref("Array")}} von Objekten zurück, das die lokalspezifischen Tokens enthält, aus denen es möglich ist, benutzerdefinierte Strings zu erstellen, während die lokalspezifischen Teile erhalten bleiben. Die Struktur, die die `formatToParts()`-Methode zurückgibt, sieht folgendermaßen aus:

```js
[
  { type: "day", value: "17" },
  { type: "weekday", value: "Monday" },
];
```

Mögliche Typen sind die folgenden:

- `day`
  - : Der String, der für den Tag verwendet wird, zum Beispiel `"17"`.
- `dayPeriod`
  - : Der String, der für den Tageszeitraum verwendet wird, zum Beispiel `"AM"`,
    `"PM"`, `"in the morning"` oder `"noon"`.
- `era`
  - : Der String, der für die Ära verwendet wird, zum Beispiel `"BC"` oder `"AD"`.
- `fractionalSecond`
  - : Der String, der für die Bruchteile von Sekunden verwendet wird, zum Beispiel `"0"` oder `"00"` oder `"000"`.
- `hour`
  - : Der String, der für die Stunde verwendet wird, zum Beispiel `"3"` oder `"03"`.
- `literal`
  - : Der String, der zur Trennung von Datums- und Zeitwerten verwendet wird, zum Beispiel `"/"`,
    `","`, `"Uhr"`, `"de"`, etc.
- `minute`
  - : Der String, der für die Minute verwendet wird, zum Beispiel `"00"`.
- `month`
  - : Der String, der für den Monat verwendet wird, zum Beispiel `"12"`.
- `relatedYear`
  - : Der String, der für das verwandte vierstellige gregorianische Jahr verwendet wird, falls die Darstellung des Kalenders ein JahrName anstelle eines Jahres wäre, zum Beispiel `"2019"`.
- `second`
  - : Der String, der für die Sekunde verwendet wird, zum Beispiel `"07"` oder `"42"`.
- `timeZoneName`
  - : Der String, der für den Namen der Zeitzone verwendet wird, zum Beispiel `"UTC"`. Standard ist die Zeitzone der aktuellen Umgebung.
- `weekday`
  - : Der String, der für den Wochentag verwendet wird, zum Beispiel `"M"`, `"Monday"` oder `"Montag"`.
- `year`
  - : Der String, der für das Jahr verwendet wird, zum Beispiel `"2012"` oder `"96"`.
- `yearName`
  - : Der String, der in relevanten Zusammenhängen für das JahrName verwendet wird, zum Beispiel `"geng-zi"`.

## Beispiele

`DateTimeFormat` gibt lokalisierte, undurchsichtige Strings aus, die nicht direkt manipuliert werden können:

```js
const date = Date.UTC(2012, 11, 17, 3, 0, 42);

const formatter = new Intl.DateTimeFormat("en-us", {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  fractionalSecondDigits: 3,
  hour12: true,
  timeZone: "UTC",
});

formatter.format(date);
// "Monday, 12/17/2012, 3:00:42.000 AM"
```

Allerdings besteht in vielen Benutzeroberflächen der Wunsch, die Formatierung dieses
Strings anzupassen. Die `formatToParts`-Methode ermöglicht die lokalisierte Formatierung von Strings,
die von `DateTimeFormat`-Formatierern produziert werden, indem Sie Ihnen den String in Teilen zur Verfügung stellt:

```js
formatter.formatToParts(date);

// Rückgabewert:
[
  { type: "weekday", value: "Monday" },
  { type: "literal", value: ", " },
  { type: "month", value: "12" },
  { type: "literal", value: "/" },
  { type: "day", value: "17" },
  { type: "literal", value: "/" },
  { type: "year", value: "2012" },
  { type: "literal", value: ", " },
  { type: "hour", value: "3" },
  { type: "literal", value: ":" },
  { type: "minute", value: "00" },
  { type: "literal", value: ":" },
  { type: "second", value: "42" },
  { type: "fractionalSecond", value: "000" },
  { type: "literal", value: " " },
  { type: "dayPeriod", value: "AM" },
];
```

Nun sind die Informationen getrennt verfügbar und können wieder in benutzerdefinierter Weise formatiert und zusammengefügt werden. Zum Beispiel durch die Verwendung von {{jsxref("Array.prototype.map()")}},
[Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions),
einer [switch case Anweisung](/de/docs/Web/JavaScript/Reference/Statements/switch),
[Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals),
und {{jsxref("Array.prototype.join()")}}.

```js
const dateString = formatter
  .formatToParts(date)
  .map(({ type, value }) => {
    switch (type) {
      case "dayPeriod":
        return `<em>${value}</em>`;
      default:
        return value;
    }
  })
  .join("");
```

Dieses wird den Tageszeitraum hervorheben, wenn die `formatToParts()`-Methode verwendet wird.

```js
console.log(formatter.format(date));
// "Monday, 12/17/2012, 3:00:42.000 AM"

console.log(dateString);
// "Monday, 12/17/2012, 3:00:42.000 <em>AM</em>"
```

### Benannte Jahre und gemischte Kalender

In einigen Fällen verwenden Kalender benannte Jahre. Chinesische und tibetische Kalender beispielsweise,
nutzen einen 60-jährigen [Sexagesimalzyklus](https://en.wikipedia.org/wiki/Sexagenary_cycle) von benannten Jahren.
Diese Jahre werden durch Beziehung zu
entsprechenden Jahren im gregorianischen Kalender unterschieden. Wenn dies der Fall ist, wird das Ergebnis von
`formatToParts()` einen Eintrag für `relatedYear` enthalten, wenn ein
Jahr normalerweise vorhanden wäre, der das vierstellige gregorianische Jahr enthält, anstelle eines
Eintrags für `year`. Einen Eintrag im Bag für `year` festzulegen (mit einem beliebigen
Wert) wird sowohl das gregorianische `relatedYear` als auch das `yearName` ausgeben:

```js
const opts = { year: "numeric", month: "numeric", day: "numeric" };
const df = new Intl.DateTimeFormat("zh-u-ca-chinese", opts);
df.formatToParts(Date.UTC(2012, 11, 17, 3, 0, 42));

// Rückgabewert
[
  { type: "relatedYear", value: "2012" },
  { type: "literal", value: "年" },
  { type: "month", value: "十一月" },
  { type: "day", value: "4" },
];
```

Wenn die `year`-Option nicht im Bag festgelegt ist (auf einen beliebigen Wert), wird das Ergebnis
nur das `relatedYear` enthalten:

```js
const df = new Intl.DateTimeFormat("zh-u-ca-chinese");
df.formatToParts(Date.UTC(2012, 11, 17, 3, 0, 42));

// Rückgabewert
[
  { type: "relatedYear", value: "2012" },
  { type: "literal", value: "年" },
  { type: "month", value: "十一月" },
  { type: "day", value: "4" },
];
```

In Fällen, in denen das `year` ausgegeben würde, kann `.format()`
diese normalerweise nebeneinander darstellen:

```js
const df = new Intl.DateTimeFormat("zh-u-ca-chinese", { year: "numeric" });
df.format(Date.UTC(2012, 11, 17, 3, 0, 42)); // 2012壬辰年
```

Dies macht es auch möglich, in `format` sowohl Locale als auch Kalender zu mischen:

```js
const df = new Intl.DateTimeFormat("en-u-ca-chinese", { year: "numeric" });
const date = Date.UTC(2012, 11, 17, 3, 0, 42);
df.format(date); // 2012(ren-chen)
```

Und `formatToParts`:

```js
const opts = { month: "numeric", day: "numeric", year: "numeric" };
const df = new Intl.DateTimeFormat("en-u-ca-chinese", opts);
const date = Date.UTC(2012, 11, 17, 3);
df.formatToParts(date);
// [
//   { type: 'month', value: '11' },
//   { type: 'literal', value: '/' },
//   { type: 'day', value: '4' },
//   { type: 'literal', value: '/' },
//   { type: 'relatedYear', value: '2012' }
// ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl/DateTimeFormat/format", "Intl.DateTimeFormat.prototype.format()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}

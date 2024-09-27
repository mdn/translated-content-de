---
title: Intl.DateTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
l10n:
  sourceCommit: 90cb2bec97539adbf89c5f0335a344eca6e0f3d4
---

{{JSRef}}

Die **`formatToParts()`** Methode von Instanzen des Objekts {{jsxref("Intl.DateTimeFormat")}} ermöglicht die lokalspezifische Formatierung von durch dieses `Intl.DateTimeFormat`-Objekt erzeugten Zeichenfolgen.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-formattoparts.html", "taller")}}

## Syntax

```js-nolint
formatToParts(date)
```

### Parameter

- `date` {{optional_inline}}
  - : Das zu formatierende Datum.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, das das formatierte Datum in Teilen enthält.

## Beschreibung

Die `formatToParts()` Methode ist nützlich für die benutzerdefinierte Formatierung von Datumszeichenfolgen. Sie gibt ein {{jsxref("Array")}} von Objekten zurück, das die lokalspezifischen Token enthält, mit denen es möglich ist, benutzerdefinierte Zeichenfolgen zu erstellen, während die lokalspezifischen Teile beibehalten werden. Die Struktur, die die `formatToParts()` Methode zurückgibt, sieht folgendermaßen aus:

```js
[
  { type: "day", value: "17" },
  { type: "weekday", value: "Monday" },
];
```

Mögliche Typen sind die folgenden:

- `day`
  - : Die Zeichenfolge für den Tag, zum Beispiel `"17"`.
- `dayPeriod`
  - : Die Zeichenfolge für den Tagesabschnitt, zum Beispiel `"AM"`,
    `"PM"`, `"am Morgen"` oder `"Mittag"`
- `era`
  - : Die Zeichenfolge für die Ära, zum Beispiel `"BC"` oder `"AD"`.
- `fractionalSecond`
  - : Die Zeichenfolge für die Bruchteile von Sekunden, zum Beispiel `"0"` oder `"00"` oder `"000"`.
- `hour`
  - : Die Zeichenfolge für die Stunde, zum Beispiel `"3"` oder `"03"`.
- `literal`
  - : Die Zeichenfolge, die zur Trennung von Datums- und Zeitwerten verwendet wird, zum Beispiel `"/"`,
    `","`, `"Uhr"`, `"de"`, etc.
- `minute`
  - : Die Zeichenfolge für die Minute, zum Beispiel `"00"`.
- `month`
  - : Die Zeichenfolge für den Monat, zum Beispiel `"12"`.
- `relatedYear`
  - : Die Zeichenfolge für das verwandte 4-stellige gregorianische Jahr, falls die Darstellung des Kalenders anstelle eines Jahres einen JahrNamen wäre, zum Beispiel `"2019"`.
- `second`
  - : Die Zeichenfolge für die Sekunde, zum Beispiel `"07"` oder `"42"`.
- `timeZoneName`
  - : Die Zeichenfolge für den Namen der Zeitzone, zum Beispiel `"UTC"`. Standardmäßig die Zeitzone der aktuellen Umgebung.
- `weekday`
  - : Die Zeichenfolge für den Wochentag, zum Beispiel `"M"`, `"Monday"`, oder `"Montag"`.
- `year`
  - : Die Zeichenfolge für das Jahr, zum Beispiel `"2012"` oder `"96"`.
- `yearName`
  - : Die Zeichenfolge für den JahrNamen in relevanten Kontexten, zum Beispiel `"geng-zi"`

## Beispiele

`DateTimeFormat` erzeugt lokalisierte, undurchsichtige Zeichenfolgen, die nicht direkt manipuliert werden können:

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

Jedoch besteht in vielen Benutzeroberflächen das Bedürfnis, die Formatierung dieser
Zeichenfolge anzupassen. Die `formatToParts`-Methode ermöglicht eine lokalspezifische Formatierung von Zeichenfolgen, die von `DateTimeFormat`-Formatierern
erzeugt werden, indem sie die Zeichenfolge in Teile zerlegt:

```js
formatter.formatToParts(date);

// return value:
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

Nun sind die Informationen separat verfügbar und können auf eine benutzerdefinierte Weise formatiert und wieder zusammengefügt werden. Zum Beispiel unter Verwendung von {{jsxref("Array.prototype.map()")}},
[Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions),
einer [switch-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/switch),
[Template-Strings](/de/docs/Web/JavaScript/Reference/Template_literals),
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

Dies wird den Tagesabschnitt hervorheben, wenn die `formatToParts()`-Methode verwendet wird.

```js
console.log(formatter.format(date));
// "Monday, 12/17/2012, 3:00:42.000 AM"

console.log(dateString);
// "Monday, 12/17/2012, 3:00:42.000 <em>AM</em>"
```

### Benannte Jahre und gemischte Kalender

In einigen Fällen verwenden Kalender benannte Jahre. Chinesische und Tibetische Kalender, zum Beispiel,
verwenden einen 60-jährigen [Sexagenarenzyklus](https://de.wikipedia.org/wiki/Sexagenarenzyklus) von benannten Jahren.
Diese Jahre werden durch Bezugnahme auf
verknüpfte Jahre im Gregorianischen Kalender abgegrenzt. Wenn dies der Fall ist, wird das Ergebnis von
`formatToParts()` einen Eintrag für `relatedYear` enthalten, wenn
statt eines Eintrags für `year` ein Jahr normalerweise vorhanden wäre, der das 4-stellige Gregorianische Jahr enthält. Das Setzen eines Eintrags im Bag für `year` (mit jedem
Wert) führt sowohl zu dem als auch zum `yearName`
Gregorianischen `relatedYear`:

```js
const opts = { year: "numeric", month: "numeric", day: "numeric" };
const df = new Intl.DateTimeFormat("zh-u-ca-chinese", opts);
df.formatToParts(Date.UTC(2012, 11, 17, 3, 0, 42));

// return value
[
  { type: "relatedYear", value: "2012" },
  { type: "literal", value: "年" },
  { type: "month", value: "十一月" },
  { type: "day", value: "4" },
];
```

Wenn die `year`-Option im Bag (auf irgendeinen Wert) nicht gesetzt ist, wird das Ergebnis nur den `relatedYear` enthalten:

```js
const df = new Intl.DateTimeFormat("zh-u-ca-chinese");
df.formatToParts(Date.UTC(2012, 11, 17, 3, 0, 42));

// return value
[
  { type: "relatedYear", value: "2012" },
  { type: "literal", value: "年" },
  { type: "month", value: "十一月" },
  { type: "day", value: "4" },
];
```

In Fällen, in denen das `year` ausgegeben würde, kann `.format()` diese häufig nebeneinander darstellen:

```js
const df = new Intl.DateTimeFormat("zh-u-ca-chinese", { year: "numeric" });
df.format(Date.UTC(2012, 11, 17, 3, 0, 42)); // 2012壬辰年
```

Dies ermöglicht auch das Mischen von Locale und Kalender sowohl in `format`:

```js
const df = new Intl.DateTimeFormat("en-u-ca-chinese", { year: "numeric" });
const date = Date.UTC(2012, 11, 17, 3, 0, 42);
df.format(date); // 2012(ren-chen)
```

Als auch in `formatToParts`:

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

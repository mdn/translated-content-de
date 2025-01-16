---
title: Intl.DateTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
l10n:
  sourceCommit: 1574e4728b2d31b8898f84843a9832253790c516
---

{{JSRef}}

Die **`formatToParts()`** Methode von {{jsxref("Intl.DateTimeFormat")}}-Instanzen gibt ein Array von Objekten zurück, die jeweils einen Teil des formatierten Strings repräsentieren, der von {{jsxref("Intl/DatetimeFormat/format", "format()")}} zurückgegeben würde. Diese Methode ist nützlich, um benutzerdefinierte Strings aus den lokalisierungsspezifischen Tokens zu erstellen.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-formattoparts.html", "taller")}}

## Syntax

```js-nolint
formatToParts(date)
```

### Parameter

- `date`
  - : Das Datum, das formatiert werden soll. Wird es weggelassen, wird das aktuelle Datum formatiert (wie von {{jsxref("Date.now()")}} zurückgegeben), was etwas verwirrend sein könnte. Es wird daher empfohlen, immer explizit ein Datum zu übergeben.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die das formatierte Datum in Teilen enthalten. Jedes Objekt hat zwei Eigenschaften, `type` und `value`, die jeweils einen String enthalten. Die String-Konkatenation von `value` in der angegebenen Reihenfolge ergibt denselben String wie {{jsxref("Intl/DateTimeFormat/format", "format()")}}. Der `type` kann einer der [Datum-Zeit-Komponenten](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) sein:

- `weekday`
  - : Zum Beispiel `"M"`, `"Monday"`, oder `"Montag"`.
- `era`
  - : Zum Beispiel `"BC"` oder `"AD"`.
- `year`
  - : Zum Beispiel `"2012"` oder `"96"`.
- `month`
  - : Zum Beispiel `"12"` oder `"January"`.
- `day`
  - : Zum Beispiel `"17"`.
- `dayPeriod`
  - : Zum Beispiel `"AM"`, `"PM"`, `"in the morning"` oder `"noon"`.
- `hour`
  - : Zum Beispiel `"3"` oder `"03"`.
- `minute`
  - : Zum Beispiel `"00"`.
- `second`
  - : Zum Beispiel `"07"` oder `"42"`.
- `fractionalSecond`
  - : Zum Beispiel `"0"`, `"00"`, oder `"000"`.
- `timeZoneName`
  - : Zum Beispiel `"UTC"`, `"CET"` oder `"Central European Time"`.

Der `type` kann auch einer der folgenden sein:

- `literal`
  - : Jeder String, der Teil des Formatmusters ist und nicht vom `date` beeinflusst wird; zum Beispiel `"/"`, `", "`, `"o'clock"`, `"de"`, `" "`, etc.
- `relatedYear`
  - : Ein 4-stelliges gregorianisches Jahr, falls die Darstellung des Kalenders ein `yearName` anstelle eines Jahres wäre; zum Beispiel `"2019"`. Siehe [benannte Jahre](#benannte_jahre) für weitere Details.
- `yearName`
  - : Der Name, der dem Jahr gegeben wird, gewöhnlich in Kalendern ohne das Konzept fortlaufender Jahre; zum Beispiel `"geng-zi"`.
- `unknown`
  - : Reserviert für jedes Token, das nicht als eines der obigen erkannt wird; sollte selten vorkommen.

## Beispiele

### Verwendung von formatToParts()

Die Methode `format()` gibt lokalisierte, undurchsichtige Strings aus, die nicht direkt manipuliert werden können:

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

In vielen Benutzeroberflächen möchten Sie jedoch das Format dieses Strings anpassen oder mit anderen Texten verweben. Die Methode `formatToParts()` liefert die gleichen Informationen in Teilen:

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

Nun sind die Informationen separat verfügbar, und sie können auf eine angepasste Weise formatiert und wieder verbunden werden. Zum Beispiel, indem {{jsxref("Array.prototype.map()")}}, [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), eine [switch-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/switch), [Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) und {{jsxref("Array.prototype.join()")}} verwendet werden, um zusätzliche Markups für bestimmte Komponenten einzufügen.

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

console.log(dateString);
// "Monday, 12/17/2012, 3:00:42.000 <em>AM</em>"
```

### Benannte Jahre

Einige Kalender verwenden benannte Jahre; zum Beispiel verwenden der chinesische und tibetische Kalender einen 60-jährigen [Sexagenarzzyklus](https://en.wikipedia.org/wiki/Sexagenary_cycle) von benannten Jahren. Diese Kalender haben keine universelle Methode, um jedes Jahr eindeutig zu nummerieren, daher werden die Jahre in Bezug zu den entsprechenden Jahren im gregorianischen Kalender unterschieden. In diesem Fall wird, wenn der `DateTimeFormat` so konfiguriert ist, dass er die Jahreskomponente ausgibt, ein Token für `relatedYear` anstelle von `year` ausgegeben.

```js
const df = new Intl.DateTimeFormat("zh-u-ca-chinese");
df.formatToParts(Date.UTC(2012, 11, 17, 3, 0, 42));

// return value:
[
  { type: "relatedYear", value: "2012" },
  { type: "literal", value: "年" },
  { type: "month", value: "十一月" },
  { type: "day", value: "4" },
];
```

Manchmal entspricht die Kombination von Datum-Zeit-Komponentenoptionen einem Format, das auch ein `yearName` enthält. Es gibt keine separate Option, die steuert, ob `yearName` angezeigt wird oder nicht. Zum Beispiel führt die folgende Optionseinstellung dazu, dass `month` auf `"long"` gesetzt wird und ein `yearName`-Token resultiert, obwohl `year` immer noch `"numeric"` ist:

```js
const opts = { year: "numeric", month: "long", day: "numeric" };
const df = new Intl.DateTimeFormat("zh-u-ca-chinese", opts);
df.formatToParts(Date.UTC(2012, 11, 17, 3, 0, 42));

// return value:
[
  { type: "relatedYear", value: "2012" },
  { type: "yearName", value: "壬辰" },
  { type: "literal", value: "年" },
  { type: "month", value: "十一月" },
  { type: "day", value: "4" },
];
```

Da `format()` einfach alle `value`-Strings zusammenführt, werden Sie das gregorianische Jahr und den Jahrnamen zusammen in der Ausgabe in diesem Fall sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl/DateTimeFormat/format", "Intl.DateTimeFormat.prototype.format()")}}

---
title: Intl.DateTimeFormat.prototype.formatToParts()
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}

Die **`formatToParts()`**-Methode von {{jsxref("Intl.DateTimeFormat")}} Instanzen gibt ein Array von Objekten zurück, die jeweils einen Teil des formatierten Strings repräsentieren, der von {{jsxref("Intl/DatetimeFormat/format", "format()")}} zurückgegeben würde. Dies ist nützlich, um benutzerdefinierte Zeichenfolgen aus den lokalisierungsspezifischen Tokens zu erstellen.

{{InteractiveExample("JavaScript Demo: Intl.DateTimeFormat.prototype.formatToParts()", "taller")}}

```js interactive-example
const date = new Date(2012, 5);
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dateTimeFormat = new Intl.DateTimeFormat("en-US", options);

const parts = dateTimeFormat.formatToParts(date);
const partValues = parts.map((p) => p.value);

console.log(partValues);
// Expected output: "["Friday", ", ", "June", " ", "1", ", ", "2012"]"
```

## Syntax

```js-nolint
formatToParts(date)
```

### Parameter

- `date` {{optional_inline}}

  - : Das Datum, das formatiert werden soll. Kann ein {{jsxref("Date")}} oder {{jsxref("Temporal.PlainDateTime")}} Objekt sein. Außerdem kann es sich um ein {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}} oder {{jsxref("Temporal.PlainMonthDay")}} Objekt handeln, wenn das `DateTimeFormat` Objekt so konfiguriert wurde, dass es mindestens einen relevanten Teil des Datums druckt.

    > [!NOTE]
    > Ein {{jsxref("Temporal.ZonedDateTime")}} Objekt wird immer einen `TypeError` auslösen; verwenden Sie stattdessen {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} oder konvertieren Sie es in ein {{jsxref("Temporal.PlainDateTime")}} Objekt.

    Wenn es weggelassen wird, wird das aktuelle Datum formatiert (wie von {{jsxref("Date.now()")}} zurückgegeben), was leicht verwirrend sein kann. Es ist daher ratsam, immer explizit ein Datum zu übergeben.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die das formatierte Datum in Teilen enthalten. Jedes Objekt hat zwei Eigenschaften, `type` und `value`, die jeweils eine Zeichenfolge enthalten. Das Verkettungsergebnis von `value` in der angegebenen Reihenfolge ergibt denselben String wie {{jsxref("Intl/DateTimeFormat/format", "format()")}}. Der `type` kann eine der [Datums- und Zeitkomponenten](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) sein:

- `weekday`
  - : Zum Beispiel `"M"`, `"Monday"` oder `"Montag"`.
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
  - : Zum Beispiel `"0"`, `"00"` oder `"000"`.
- `timeZoneName`
  - : Zum Beispiel `"UTC"`, `"CET"` oder `"Central European Time"`.

Der `type` kann auch einer der folgenden sein:

- `literal`
  - : Beliebige Zeichenfolge, die Teil des Formatmusters ist und nicht vom `date` beeinflusst wird; zum Beispiel `"/"`, `", "`, `"o'clock"`, `"de"`, `" "`, usw.
- `relatedYear`
  - : Ein 4-stelliges gregorianisches Jahr in dem Fall, dass die Darstellung des Kalenders einen `yearName` anstelle eines Jahres wäre; zum Beispiel `"2019"`. Siehe [named years](#benannte_jahre) für weitere Details.
- `yearName`
  - : Der Name, der dem Jahr gegeben wird, normalerweise in Kalendern ohne das Konzept kontinuierlicher Jahre; zum Beispiel `"geng-zi"`.
- `unknown`
  - : Reserviert für jedes Token, das nicht als eines der oben genannten erkannt wird; sollte selten auftreten.

## Beispiele

### Verwendung von formatToParts()

Die `format()` Methode gibt lokalisierte, undurchsichtige Zeichenfolgen aus, die nicht direkt manipuliert werden können:

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

In vielen Benutzeroberflächen möchten Sie jedoch möglicherweise die Formatierung dieser Zeichenfolge anpassen oder sie mit anderen Texten interleiten. Die `formatToParts()` Methode liefert dieselben Informationen in Teilen:

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

Jetzt sind die Informationen separat verfügbar und können auf eine benutzerdefinierte Weise formatiert und erneut verkettet werden. Zum Beispiel durch die Verwendung von {{jsxref("Array.prototype.map()")}}, [arrow functions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), einer [switch-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/switch), [Vorlageliteralen](/de/docs/Web/JavaScript/Reference/Template_literals), und {{jsxref("Array.prototype.join()")}}, um zusätzliche Markup für bestimmte Komponenten einzufügen.

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

Einige Kalender verwenden benannte Jahre; beispielsweise verwenden der chinesische und tibetische Kalender einen 60-jährigen [sexagenarischen Zyklus](https://en.wikipedia.org/wiki/Sexagenary_cycle) von benannten Jahren. Diese Kalender haben keine universelle Methode zur eindeutigen Nummerierung jedes Jahres, daher werden Jahre durch die Beziehung zu entsprechenden Jahren im gregorianischen Kalender unterschieden. In diesem Fall, wenn das `DateTimeFormat` so konfiguriert ist, dass es die Jahr-Komponente ausgibt, wird ein Token für `relatedYear` statt `year` ausgegeben.

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

Manchmal passt die Kombination von Komponentenoptionen für Datum und Uhrzeit zu einem Format, das auch einen `yearName` enthält. Es gibt keine separate Option, die steuert, ob `yearName` angezeigt wird oder nicht. Zum Beispiel setzen die unten aufgeführten Optionen `month` auf `"long"` und führen zu einem `yearName`-Token, obwohl `year` immer noch `"numeric"` ist:

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

Da `format()` einfach alle `value`-Strings zusammenfügt, sehen Sie in diesem Fall das gregorianische Jahr und den Jahrnamen zusammen in der Ausgabe.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl/DateTimeFormat/format", "Intl.DateTimeFormat.prototype.format()")}}

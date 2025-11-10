---
title: Intl.DateTimeFormat.prototype.formatToParts()
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die Methode **`formatToParts()`** von {{jsxref("Intl.DateTimeFormat")}}-Instanzen gibt ein Array von Objekten zurück, die jeden Teil des formatierten Strings darstellen, der von {{jsxref("Intl/DatetimeFormat/format", "format()")}} zurückgegeben würde. Sie ist nützlich, um benutzerdefinierte Strings aus den lokalspezifischen Tokens zu erstellen.

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
  - : Das zu formatierende Datum. Kann ein {{jsxref("Date")}}- oder {{jsxref("Temporal.PlainDateTime")}}-Objekt sein. Zusätzlich kann es ein {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}} oder {{jsxref("Temporal.PlainMonthDay")}}-Objekt sein, wenn das `DateTimeFormat`-Objekt konfiguriert wurde, um mindestens einen relevanten Teil des Datums auszugeben.

    > [!NOTE]
    > Ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt wird immer einen `TypeError` werfen; verwenden Sie stattdessen {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} oder konvertieren Sie es in ein {{jsxref("Temporal.PlainDateTime")}}-Objekt.

    Wenn es weggelassen wird, wird das aktuelle Datum formatiert (wie von {{jsxref("Date.now()")}} zurückgegeben), was etwas verwirrend sein könnte, daher wird empfohlen, immer explizit ein Datum zu übergeben.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, das das formatierte Datum in Teilen enthält. Jedes Objekt hat zwei Eigenschaften, `type` und `value`, die jeweils einen String enthalten. Die Stringverkettung von `value`, in der angegebenen Reihenfolge, führt zu demselben String wie {{jsxref("Intl/DateTimeFormat/format", "format()")}}. Der `type` kann einer der [date-time components](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) sein:

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
  - : Jeder String, der Teil des Formatmusters ist und nicht vom `date` beeinflusst wird; zum Beispiel `"/"`, `", "`, `"o'clock"`, `"de"`, `" "`, usw.
- `relatedYear`
  - : Ein 4-stelliges Gregorianisches Jahr, falls die Darstellung des Kalenders ein `yearName` anstelle eines Jahres wäre; zum Beispiel `"2019"`. Siehe [named years](#benannte_jahre) für weitere Details.
- `yearName`
  - : Der dem Jahr gegebene Name, normalerweise in Kalendern ohne das Konzept kontinuierlicher Jahre; zum Beispiel `"geng-zi"`.
- `unknown`
  - : Reserviert für jedes Token, das nicht als eines der oben genannten erkannt wird; sollte selten auftreten.

## Beispiele

### Verwendung von formatToParts()

Die `format()`-Methode gibt lokalisierte, undurchsichtige Strings aus, die nicht direkt manipuliert werden können:

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

In vielen Benutzeroberflächen möchten Sie jedoch möglicherweise das Format dieses Strings anpassen oder mit anderen Texten vermischen. Die `formatToParts()`-Methode liefert dieselben Informationen in Teilen:

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

Jetzt sind die Informationen separat verfügbar und können auf eine benutzerdefinierte Weise formatiert und wieder zusammengesetzt werden. Zum Beispiel durch die Verwendung von {{jsxref("Array.prototype.map()")}}, [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), einer [switch-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/switch), [Template-Literals](/de/docs/Web/JavaScript/Reference/Template_literals) und {{jsxref("Array.prototype.join()")}}, um zusätzliche Markups für bestimmte Komponenten einzufügen.

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

Einige Kalender verwenden benannte Jahre; zum Beispiel verwenden die chinesischen und tibetischen Kalender einen 60-jährigen [Seksagenarz-Zyklus](https://en.wikipedia.org/wiki/Sexagenary_cycle) benannter Jahre. Diese Kalender haben keine universelle Methode, jedes Jahr eindeutig zu nummerieren, daher werden Jahre anhand ihrer Beziehung zu entsprechenden Jahren im Gregorianischen Kalender unterschieden. In diesem Fall wird, wenn das `DateTimeFormat` konfiguriert ist, um die Jahreskomponente auszugeben, ein Token für `relatedYear` anstelle von `year` ausgegeben.

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

Manchmal führt die Kombination von date-time components-Optionen zu einem Format, das auch einen `yearName` beinhaltet. Es gibt keine separate Option, die steuert, ob `yearName` angezeigt wird oder nicht. Zum Beispiel führen die unten angegebenen Optionen dazu, dass `month` auf `"long"` gesetzt wird und ein `yearName`-Token ergibt, obwohl `year` immer noch `"numeric"` ist:

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

Da `format()` einfach alle `value`-Strings zusammenverkettet, sehen Sie in diesem Fall das Gregorianische Jahr und den Jahrnamen zusammen in der Ausgabe.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl/DateTimeFormat/format", "Intl.DateTimeFormat.prototype.format()")}}

---
title: Intl.DateTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`formatToParts()`** von {{jsxref("Intl.DateTimeFormat")}}-Instanzen gibt ein Array von Objekten zurück, das jede Komponente des formatierten Strings darstellt, der von {{jsxref("Intl/DatetimeFormat/format", "format()")}} zurückgegeben würde. Dies ist nützlich, um benutzerdefinierte Zeichenfolgen aus den lokalen spezifischen Token zu erstellen.

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

  - : Das zu formatierende Datum. Kann ein {{jsxref("Date")}}- oder {{jsxref("Temporal.PlainDateTime")}}-Objekt sein. Zusätzlich kann es ein {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, oder {{jsxref("Temporal.PlainMonthDay")}}-Objekt sein, falls das `DateTimeFormat`-Objekt so konfiguriert wurde, dass mindestens ein relevanter Teil des Datums dargestellt wird.

    > [!NOTE]
    > Ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt führt immer zu einem `TypeError`. Verwenden Sie stattdessen {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} oder konvertieren Sie es in ein {{jsxref("Temporal.PlainDateTime")}}-Objekt.

    Wird es weggelassen, wird das aktuelle Datum (wie durch {{jsxref("Date.now()")}} zurückgegeben) formatiert, was leicht verwirrend sein kann. Es wird daher empfohlen, immer explizit ein Datum zu übergeben.

### Rückgabewert

Ein {{jsxref("Array")}} aus Objekten, die das formatierte Datum in Teile aufteilen. Jedes Objekt hat zwei Eigenschaften, `type` und `value`, die jeweils eine Zeichenfolge enthalten. Die Verkettung der `value`-Zeichenfolgen in der bereitgestellten Reihenfolge ergibt dieselbe Zeichenfolge wie {{jsxref("Intl/DateTimeFormat/format", "format()")}}. Der `type` kann einer der [Datum-Zeit-Komponenten](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) sein:

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
  - : Jede Zeichenfolge, die Teil des Formatmusters ist und nicht vom `date` beeinflusst wird, z. B. `"/"`, `", "`, `"o'clock"`, `"de"`, `" "`, usw.
- `relatedYear`
  - : Ein 4-stelliges gregorianisches Jahr, falls die Darstellung des Kalenders eher ein `yearName` anstelle eines Jahres wäre, beispielsweise `"2019"`. Siehe [benannte Jahre](#benannte_jahre) für weitere Details.
- `yearName`
  - : Der Name, der dem Jahr zugeordnet ist, normalerweise in Kalendern ohne das Konzept kontinuierlicher Jahre, z. B. `"geng-zi"`.
- `unknown`
  - : Reserviert für jedes Token, das nicht als eines der oben genannten erkannt wird; sollte selten vorkommen.

## Beispiele

### Verwendung von formatToParts()

Die `format()`-Methode liefert lokalisierte, undurchsichtige Zeichenfolgen, die nicht direkt manipuliert werden können:

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

Jedoch möchten Sie in vielen Benutzeroberflächen möglicherweise die Formatierung dieses Strings anpassen oder sie mit anderem Text kombinieren. Die `formatToParts()`-Methode liefert dieselben Informationen in Einzelteilen:

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

Nun sind die Informationen separat verfügbar und können auf benutzerdefinierte Weise formatiert und erneut verknüpft werden. Zum Beispiel durch Verwendung von {{jsxref("Array.prototype.map()")}}, [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), einer [switch-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/switch), [Template-Literals](/de/docs/Web/JavaScript/Reference/Template_literals) und {{jsxref("Array.prototype.join()")}}, um zusätzliche Markups für bestimmte Komponenten einzufügen.

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

Einige Kalender verwenden benannte Jahre. Beispielsweise nutzen der chinesische und tibetische Kalender einen 60-jährigen [Sexagesimalzyklus](<https://de.wikipedia.org/wiki/%C3%84ra_(Chronologie)#Chinesischer_Kalender>) benannter Jahre. Diese Kalender haben keine universelle Methode, jedes Jahr eindeutig zu nummerieren, sodass Jahre durch Beziehung zu den entsprechenden Jahren im Gregorianischen Kalender unterschieden werden. In diesem Fall wird, wenn das `DateTimeFormat` so konfiguriert ist, dass die Jahreskomponente ausgegeben wird, ein Token für `relatedYear` anstelle von `year` ausgegeben.

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

Manchmal führt die Kombination von Datum-Zeit-Komponentenoptionen zu einem Format, das auch ein `yearName` enthält. Es gibt keine separate Option, die steuert, ob `yearName` angezeigt wird oder nicht. Zum Beispiel führt die folgende Einstellung von `month` auf `"long"` zu einem `yearName`-Token, obwohl `year` weiterhin `"numeric"` ist:

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

Da `format()` einfach alle `value`-Zeichenfolgen zusammenfügt, sehen Sie in diesem Fall sowohl das gregorianische Jahr als auch den Jahrnamen in der Ausgabe.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl/DateTimeFormat/format", "Intl.DateTimeFormat.prototype.format()")}}

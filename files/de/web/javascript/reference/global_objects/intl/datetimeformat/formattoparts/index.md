---
title: Intl.DateTimeFormat.prototype.formatToParts()
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`formatToParts()`**-Methode von Instanzen von {{jsxref("Intl.DateTimeFormat")}} gibt ein Array von Objekten zurück, die jeweils einen Teil des formatierten Strings darstellen, der von {{jsxref("Intl/DatetimeFormat/format", "format()")}} zurückgegeben werden würde. Diese Methode ist nützlich, um benutzerdefinierte Strings aus den lokalisierungsspezifischen Token zu erstellen.

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

  - : Das zu formatierende Datum. Kann ein {{jsxref("Date")}}-Objekt oder ein {{jsxref("Temporal.PlainDateTime")}}-Objekt sein. Zusätzlich kann es ein {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}} oder {{jsxref("Temporal.PlainMonthDay")}}-Objekt sein, wenn das `DateTimeFormat`-Objekt so konfiguriert wurde, dass es mindestens einen relevanten Teil des Datums ausgibt.

    > [!NOTE]
    > Ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt wird immer einen `TypeError` werfen; verwenden Sie stattdessen {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} oder konvertieren Sie es in ein {{jsxref("Temporal.PlainDateTime")}}-Objekt.

    Wenn es weggelassen wird, wird das aktuelle Datum (wie von {{jsxref("Date.now()")}} zurückgegeben) formatiert, was leicht verwirrend sein könnte. Es ist daher ratsam, immer explizit ein Datum zu übergeben.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die das formatierten Datum in Teilen enthalten. Jedes Objekt hat zwei Eigenschaften, `type` und `value`, die jeweils einen String enthalten. Die String-Konkatenation von `value` in der angegebenen Reihenfolge führt zum gleichen String wie {{jsxref("Intl/DateTimeFormat/format", "format()")}}. Der `type` kann einer der [Datum-Zeit-Komponenten](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) sein:

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
  - : Jeder String, der Teil des Formatmusters ist und nicht vom `date` beeinflusst wird; zum Beispiel `"/"`, `", "`, `"o'clock"`, `"de"`, `" "`, etc.
- `relatedYear`
  - : Ein 4-stelliges Gregorianisches Jahr, falls die Darstellung des Kalenders ein `yearName` anstelle eines Jahres wäre; zum Beispiel `"2019"`. Siehe [benannte Jahre](#benannte_jahre) für mehr Details.
- `yearName`
  - : Der Name, der dem Jahr gegeben wird, normalerweise in Kalendern ohne das Konzept von fortlaufenden Jahren; zum Beispiel `"geng-zi"`.
- `unknown`
  - : Reserviert für jedes Token, das nicht als eines der obigen erkannt wird; sollte selten vorkommen.

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

Jedoch kann es in vielen Benutzeroberflächen notwendig sein, die Formatierung dieses Strings anzupassen oder ihn mit anderen Texten zu vermischen. Die `formatToParts()`-Methode liefert dieselbe Information in Teilen:

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

Nun sind die Informationen separat verfügbar und können auf individuelle Weise formatiert und wieder zusammengefügt werden. Zum Beispiel durch Verwendung von {{jsxref("Array.prototype.map()")}}, [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), einer [switch-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/switch), [Template-Literals](/de/docs/Web/JavaScript/Reference/Template_literals) und {{jsxref("Array.prototype.join()")}}, um zusätzlichen Markup für bestimmte Komponenten einzufügen.

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

Einige Kalender verwenden benannte Jahre; zum Beispiel verwenden die chinesischen und tibetischen Kalender einen 60-Jahres-[Sexagenärzyklus](https://en.wikipedia.org/wiki/Sexagenary_cycle) von benannten Jahren. Diese Kalender haben keine universelle Methode, um jedes Jahr eindeutig zu nummerieren, daher werden Jahre durch die Beziehung zu entsprechenden Jahren im Gregorianischen Kalender unterschieden. In diesem Fall, wenn das `DateTimeFormat` so konfiguriert ist, das Jahr als Komponente auszugeben, wird ein Token für `relatedYear` anstelle von `year` ausgegeben.

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

Manchmal führt die Kombination von Datum-Zeit-Komponentenoptionen zu einem Format, das auch einen `yearName` enthält. Es gibt keine separate Option, die steuert, ob `yearName` angezeigt wird oder nicht. Zum Beispiel setzen die unten stehenden Optionen `month` auf `"long"` und führen zu einem `yearName`-Token, obwohl `year` immer noch `"numeric"` ist:

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

Da `format()` einfach alle `value`-Strings zusammenfügt, werden Sie in diesem Fall das Gregorianische Jahr und den Jahrnamen zusammen im Ausgabe sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl/DateTimeFormat/format", "Intl.DateTimeFormat.prototype.format()")}}

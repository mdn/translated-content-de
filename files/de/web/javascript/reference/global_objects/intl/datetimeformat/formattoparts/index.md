---
title: Intl.DateTimeFormat.prototype.formatToParts()
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
l10n:
  sourceCommit: 98972b1f827b7374e28aee591a73044ffd8fb758
---

Die Methode **`formatToParts()`** von {{jsxref("Intl.DateTimeFormat")}}-Instanzen gibt ein Array von Objekten zurück, die jeweils einen Teil der formatierten Zeichenfolge darstellen, die {{jsxref("Intl/DateTimeFormat/format", "format()")}} zurückgeben würde. Sie ist nützlich, um aus gebietsschemaspezifischen Bestandteilen eigene Zeichenfolgen zusammenzusetzen.

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
// Expected output: Array ["Friday", ", ", "June", " ", "1", ", ", "2012"]
```

## Syntax

```js-nolint
formatToParts(date)
```

### Parameter

- `date` {{optional_inline}}
  - : Das zu formatierende Datum. Dies kann ein {{jsxref("Date")}}- oder {{jsxref("Temporal.PlainDateTime")}}-Objekt sein. Es kann auch ein {{jsxref("Temporal.PlainTime")}}-, {{jsxref("Temporal.PlainDate")}}-, {{jsxref("Temporal.PlainYearMonth")}}- oder {{jsxref("Temporal.PlainMonthDay")}}-Objekt sein, sofern das `DateTimeFormat`-Objekt so konfiguriert wurde, dass es mindestens einen für das jeweilige Objekt relevanten Bestandteil ausgibt.

    > [!NOTE]
    > Bei einem {{jsxref("Temporal.ZonedDateTime")}}-Objekt wird immer ein `TypeError` ausgelöst. Verwenden Sie stattdessen {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} oder konvertieren Sie es in ein {{jsxref("Temporal.PlainDateTime")}}-Objekt.

    Wenn Sie `date` weglassen, wird das aktuelle Datum formatiert (wie von {{jsxref("Date.now()")}} zurückgegeben). Da dies verwirrend sein kann, empfiehlt es sich, ein Datum immer ausdrücklich anzugeben.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die jeweils einen Teil des formatierten Datums enthalten. Jedes Objekt hat die beiden Eigenschaften `type` und `value`, die jeweils eine Zeichenfolge enthalten. Werden die `value`-Zeichenfolgen in der angegebenen Reihenfolge verkettet, ergibt sich dieselbe Zeichenfolge wie bei {{jsxref("Intl/DateTimeFormat/format", "format()")}}. `type` kann eine der folgenden [Datum-Uhrzeit-Komponenten](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) sein:

- `weekday`
  - : Zum Beispiel `"T"`, `"Tuesday"` oder `"Dienstag"`.
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

`type` kann auch einen der folgenden Werte haben:

- `literal`
  - : Eine beliebige Zeichenfolge, die Teil des Formatmusters ist und nicht von `date` beeinflusst wird, zum Beispiel `"/"`, `", "`, `"o'clock"`, `"de"` oder `" "`.
- `relatedYear`
  - : Eine vierstellige gregorianische Jahreszahl, falls der Kalender statt einer Jahreszahl einen `yearName` verwendet, zum Beispiel `"2019"`. Weitere Informationen finden Sie unter [Benannte Jahre](#benannte_jahre).
- `yearName`
  - : Der Name des Jahres, üblicherweise in Kalendern ohne fortlaufende Jahreszählung, zum Beispiel `"geng-zi"`.
- `unknown`
  - : Reserviert für Bestandteile, die keiner der obigen Kategorien zugeordnet werden können; sollte nur selten vorkommen.

## Beispiele

### formatToParts() verwenden

Die Methode `format()` gibt lokalisierte Zeichenfolgen zurück, deren Bestandteile sich nicht direkt bearbeiten lassen:

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

In vielen Benutzeroberflächen möchten Sie die Formatierung dieser Zeichenfolge jedoch anpassen oder sie mit anderem Text kombinieren. Die Methode `formatToParts()` gibt dieselben Informationen in einzelnen Teilen zurück:

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
  { type: "literal", value: "." },
  { type: "fractionalSecond", value: "000" },
  { type: "literal", value: " " },
  { type: "dayPeriod", value: "AM" },
];
```

Die Informationen liegen nun getrennt vor und können auf eigene Weise formatiert und wieder zusammengesetzt werden. Beispielsweise können Sie mit {{jsxref("Array.prototype.map()")}}, [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), einer [switch-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/switch), [Template-Literalen](/de/docs/Web/JavaScript/Reference/Template_literals) und {{jsxref("Array.prototype.join()")}} zusätzliche Auszeichnung für bestimmte Bestandteile einfügen.

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

Einige Kalender verwenden benannte Jahre. Der chinesische und der tibetische Kalender verwenden beispielsweise einen 60-jährigen [Sexagesimalzyklus](https://en.wikipedia.org/wiki/Sexagenary_cycle) benannter Jahre. In diesen Kalendern gibt es keine allgemeingültige Möglichkeit, jedes Jahr eindeutig zu nummerieren. Daher werden die Jahre anhand ihrer Zuordnung zu den entsprechenden Jahren des gregorianischen Kalenders unterschieden. Ist `DateTimeFormat` so konfiguriert, dass die Jahreskomponente ausgegeben wird, wird in diesem Fall `relatedYear` statt `year` ausgegeben.

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

Manchmal entspricht die Kombination der Optionen für Datum-Uhrzeit-Komponenten einem Format, das auch einen `yearName` enthält. Es gibt keine separate Option, mit der sich die Anzeige von `yearName` steuern lässt. Die folgenden Optionen setzen beispielsweise `month` auf `"long"` und führen zu einem `yearName`-Bestandteil, obwohl `year` weiterhin auf `"numeric"` gesetzt ist:

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

Da `format()` lediglich alle `value`-Zeichenfolgen verkettet, erscheinen in diesem Fall sowohl das gregorianische Jahr als auch der Jahresname in der Ausgabe.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl/DateTimeFormat/format", "Intl.DateTimeFormat.prototype.format()")}}

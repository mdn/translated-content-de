---
title: Intl.DateTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die Methode **`formatToParts()`** von {{jsxref("Intl.DateTimeFormat")}}-Instanzen gibt ein Array von Objekten zurück, die jeweils einen Teil des formatierten Strings darstellen, der von {{jsxref("Intl/DatetimeFormat/format", "format()")}} zurückgegeben würde. Sie ist nützlich, um benutzerdefinierte Strings aus den lokalspezifischen Tokens zu erstellen.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-formattoparts.html", "taller")}}

## Syntax

```js-nolint
formatToParts(date)
```

### Parameter

- `date` {{optional_inline}}

  - : Das zu formatierende Datum. Kann ein Objekt von {{jsxref("Date")}} oder {{jsxref("Temporal.PlainDateTime")}} sein. Zusätzlich kann es ein Objekt von {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}} oder {{jsxref("Temporal.PlainMonthDay")}} sein, wenn das `DateTimeFormat`-Objekt konfiguriert wurde, um mindestens einen relevanten Teil des Datums auszugeben.

    > [!NOTE]
    > Ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt wird immer einen `TypeError` werfen; verwenden Sie stattdessen {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} oder konvertieren Sie es in ein {{jsxref("Temporal.PlainDateTime")}}-Objekt.

    Ein Auslassen führt zur Formatierung des aktuellen Datums (wie von {{jsxref("Date.now()")}} zurückgegeben), was leicht verwirrend sein könnte. Daher ist es ratsam, immer explizit ein Datum zu übergeben.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die das formatierte Datum in Teilen enthalten. Jedes Objekt hat zwei Eigenschaften, `type` und `value`, die jeweils einen String enthalten. Die Verkettung der `value`-Strings in der angegebenen Reihenfolge ergibt denselben String wie {{jsxref("Intl/DateTimeFormat/format", "format()")}}. Der `type` kann einer der [Datum-Zeit-Komponenten](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options) sein:

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
  - : Ein vierstelliges gregorianisches Jahr, falls die Darstellung des Kalenders ein `yearName` statt eines Jahres wäre; zum Beispiel `"2019"`. Siehe [benannte Jahre](#benannte_jahre) für mehr Details.
- `yearName`
  - : Der Name, der dem Jahr gegeben wird, üblicherweise in Kalendern ohne das Konzept kontinuierlicher Jahre; zum Beispiel `"geng-zi"`.
- `unknown`
  - : Reserviert für jedes Token, das als keines der oben genannten erkannt wird; sollte selten auftreten.

## Beispiele

### Verwendung von formatToParts()

Die `format()`-Methode gibt lokalisierte, intransparente Strings aus, die nicht direkt manipuliert werden können:

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

In vielen Benutzeroberflächen möchten Sie jedoch möglicherweise die Formatierung dieses Strings anpassen oder ihn mit anderen Texten durchweben. Die `formatToParts()`-Methode erzeugt dieselben Informationen in Teilen:

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

Nun sind die Informationen separat verfügbar und können in individuell angepasster Weise formatiert und wieder zusammengefügt werden. Zum Beispiel durch Verwendung von {{jsxref("Array.prototype.map()")}}, [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), einer [Switch-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/switch), [Template Literals](/de/docs/Web/JavaScript/Reference/Template_literals), und {{jsxref("Array.prototype.join()")}}, um zusätzliche Markup für bestimmte Komponenten einzufügen.

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

Einige Kalender verwenden benannte Jahre; zum Beispiel verwenden die chinesischen und tibetischen Kalender einen 60-jährigen [sexagenären Zyklus](https://en.wikipedia.org/wiki/Sexagenary_cycle) von benannten Jahren. Diese Kalender haben keine universelle Möglichkeit, jedes Jahr unmissverständlich zu nummerieren, so dass Jahre durch die Beziehung zu entsprechenden Jahren im gregorianischen Kalender geklärt werden. In diesem Fall, wenn `DateTimeFormat` so konfiguriert ist, dass die Jahreskomponente ausgegeben wird, wird ein Token für `relatedYear` statt `year` ausgegeben.

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

Manchmal entspricht die Kombination von Datum-Zeit-Komponentenoptionen einem Format, das auch ein `yearName` enthält. Es gibt keine separate Option, die steuert, ob `yearName` angezeigt wird oder nicht. Zum Beispiel führt die nachstehende Optionseinstellung für `month` auf `"long"` zu einem `yearName`-Token, obwohl `year` weiterhin `"numeric"` ist:

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

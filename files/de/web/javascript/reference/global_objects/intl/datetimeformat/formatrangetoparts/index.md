---
title: Intl.DateTimeFormat.prototype.formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRangeToParts
l10n:
  sourceCommit: 1574e4728b2d31b8898f84843a9832253790c516
---

{{JSRef}}

Die **`formatRangeToParts()`** Methode von {{jsxref("Intl.DateTimeFormat")}} Instanzen gibt ein Array von Objekten zurück, das jeden Teil des formatierten Strings repräsentiert, der von {{jsxref("Intl/DatetimeFormat/formatRange", "formatRange()")}} zurückgegeben würde. Sie ist nützlich zum Erstellen angepasster Strings aus den lokalspezifischen Tokens.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-formatrangetoparts.html", "taller")}}

## Syntax

```js-nolint
formatRangeToParts(startDate, endDate)
```

### Parameter

- `startDate`
  - : Ein {{jsxref("Date")}} Objekt, das den Beginn des Datumsbereichs darstellt.
- `endDate`
  - : Ein {{jsxref("Date")}} Objekt, das das Ende des Datumsbereichs darstellt.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, das den formatierten Datumsbereich in Teilen enthält. Jedes Objekt hat drei Eigenschaften: `type`, `value` und `source`, die jeweils einen String enthalten. Die String-Konkatenation von `value` in der angegebenen Reihenfolge ergibt denselben String wie {{jsxref("Intl/DateTimeFormat/formatRange", "formatRange()")}}. Der `type` kann dieselben Werte wie {{jsxref("Intl/DateTimeFormat/formatToParts", "formatToParts()")}} haben. Die `source` kann eine der folgenden sein:

- `startRange`
  - : Das Token ist Teil des Anfangsdatums.
- `endRange`
  - : Das Token ist Teil des Enddatums.
- `shared`
  - : Das Token wird zwischen Beginn und Ende geteilt; zum Beispiel, wenn das Start- und Enddatum denselben Tageszeitraum teilen, kann dieses Token wiederverwendet werden. Alle Literale, die Teil des Bereichsmusters selbst sind, wie der `" – "` Separator, sind ebenfalls als `shared` markiert.

Wenn Start- und Enddatum bei der angegebenen Präzision des Outputs gleich sind, hat der Output dieselbe Liste von Tokens wie der Aufruf von {{jsxref("Intl/DateTimeFormat/formatToParts", "formatToParts()")}} für das Startdatum, wobei alle Tokens als `source: "shared"` markiert sind.

## Beispiele

### Verwendung von formatRangeToParts()

Die `formatRange()` Methode gibt lokalisierte, undurchsichtige Strings aus, die nicht direkt manipuliert werden können:

```js
const date1 = new Date(Date.UTC(1906, 0, 10, 10, 0, 0)); // Wed, 10 Jan 1906 10:00:00 GMT
const date2 = new Date(Date.UTC(1906, 0, 10, 11, 0, 0)); // Wed, 10 Jan 1906 11:00:00 GMT

const fmt = new Intl.DateTimeFormat("en", {
  hour: "numeric",
  minute: "numeric",
});

console.log(fmt.formatRange(date1, date2)); // '10:00 – 11:00 AM'
```

In vielen Benutzeroberflächen möchten Sie jedoch möglicherweise die Formatierung dieses Strings anpassen oder mit anderen Texten verflechten. Die `formatRangeToParts()` Methode liefert dieselben Informationen in Teilen:

```js
console.log(fmt.formatRangeToParts(date1, date2));

// return value:
[
  { type: "hour", value: "10", source: "startRange" },
  { type: "literal", value: ":", source: "startRange" },
  { type: "minute", value: "00", source: "startRange" },
  { type: "literal", value: " – ", source: "shared" },
  { type: "hour", value: "11", source: "endRange" },
  { type: "literal", value: ":", source: "endRange" },
  { type: "minute", value: "00", source: "endRange" },
  { type: "literal", value: " ", source: "shared" },
  { type: "dayPeriod", value: "AM", source: "shared" },
];
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}}

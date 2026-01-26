---
title: Temporal.PlainDateTime.prototype.dayOfWeek
short-title: dayOfWeek
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/dayOfWeek
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`dayOfWeek`** Zugriffs-Eigenschaft von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex in der Woche dieses Datums darstellt. Tage in einer Woche werden sequentiell von `1` bis {{jsxref("Temporal/PlainDateTime/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen zugeordnet ist. Es ist kalenderabhängig ([calendar](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)).

Der set-Zugriff von `dayOfWeek` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Um ein neues `Temporal.PlainDateTime`-Objekt mit dem gewünschten neuen `dayOfWeek`-Wert zu erstellen, verwenden Sie die Methode {{jsxref("Temporal/PlainDateTime/add", "add()")}} oder {{jsxref("Temporal/PlainDateTime/subtract", "subtract()")}} mit der entsprechenden Anzahl an `days`.

Für allgemeine Informationen und mehr Beispiele, siehe {{jsxref("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}.

## Beispiele

### Verwendung von dayOfWeek

```js
const dt = Temporal.PlainDateTime.from("2021-07-01");
console.log(dt.dayOfWeek); // 4; Thursday
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}}
- {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}}
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/PlainDateTime/day", "Temporal.PlainDateTime.prototype.day")}}
- {{jsxref("Temporal/PlainDateTime/dayOfYear", "Temporal.PlainDateTime.prototype.dayOfYear")}}
- {{jsxref("Temporal/PlainDateTime/daysInWeek", "Temporal.PlainDateTime.prototype.daysInWeek")}}
- {{jsxref("Temporal/PlainDateTime/weekOfYear", "Temporal.PlainDateTime.prototype.weekOfYear")}}
- {{jsxref("Temporal/PlainDateTime/yearOfWeek", "Temporal.PlainDateTime.prototype.yearOfWeek")}}
- {{jsxref("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}

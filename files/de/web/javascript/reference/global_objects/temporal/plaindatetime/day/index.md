---
title: Temporal.PlainDateTime.prototype.day
short-title: day
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/day
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`day`** Zugriffseigenschaft von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt eine positive ganze Zahl zurück, die den auf 1 basierenden Tagesindex im Monat dieses Datums darstellt, was derselbe Tag ist, den Sie auf einem Kalender sehen würden. Es ist [kalenderabhängig](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).

Der Set-Zugriff von `day` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainDateTime/with", "with()")}} Methode, um ein neues `Temporal.PlainDateTime` Objekt mit dem gewünschten neuen Wert zu erstellen.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}.

## Beispiele

### Verwendung von day

```js
const dt = Temporal.PlainDateTime.from("2021-07-01"); // ISO 8601 calendar
console.log(dt.day); // 1
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
- {{jsxref("Temporal/PlainDateTime/year", "Temporal.PlainDateTime.prototype.year")}}
- {{jsxref("Temporal/PlainDateTime/month", "Temporal.PlainDateTime.prototype.month")}}
- {{jsxref("Temporal/PlainDateTime/daysInMonth", "Temporal.PlainDateTime.prototype.daysInMonth")}}
- {{jsxref("Temporal/PlainDateTime/dayOfWeek", "Temporal.PlainDateTime.prototype.dayOfWeek")}}
- {{jsxref("Temporal/PlainDateTime/dayOfYear", "Temporal.PlainDateTime.prototype.dayOfYear")}}
- {{jsxref("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}

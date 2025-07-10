---
title: Temporal.PlainDate.prototype.yearOfWeek
short-title: yearOfWeek
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/yearOfWeek
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`yearOfWeek`** Zugriffseigenschaft von {{jsxref("Temporal.PlainDate")}} Instanzen gibt eine ganze Zahl zurück, die das Jahr darstellt, das mit der {{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}} dieses Datums gepaart werden soll, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Sie ist vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) abhängig.

Normalerweise ist dies das Jahr des Datums, aber bei ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des Vorjahres oder der ersten Woche des nächsten Jahres zugeordnet werden, wodurch sich das `yearOfWeek` um 1 unterscheidet. Weitere Details finden Sie unter {{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}}.

Der set-Zugriff von `yearOfWeek` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Siehe die Beispiele auf der Seite {{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}
- {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
- {{jsxref("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}
- {{jsxref("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}}
- {{jsxref("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}
- {{jsxref("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}}
- {{jsxref("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}

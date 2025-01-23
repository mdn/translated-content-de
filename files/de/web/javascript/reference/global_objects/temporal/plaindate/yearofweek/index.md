---
title: Temporal.PlainDate.prototype.yearOfWeek
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/yearOfWeek
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die Zugriffs-Eigenschaft **`yearOfWeek`** von {{jsxref("Temporal.PlainDate")}}-Instanzen gibt eine Ganzzahl zurück, die das Jahr angibt, das mit der {{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}} dieses Datums gepaart werden soll, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Sie ist vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) abhängig.

In der Regel handelt es sich um das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des Vorjahres oder der ersten Woche des nächsten Jahres zugeordnet werden, was dazu führt, dass sich die `yearOfWeek` um 1 unterscheidet. Siehe {{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}} für weitere Details.

Der Setz-Zugriff von `yearOfWeek` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

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

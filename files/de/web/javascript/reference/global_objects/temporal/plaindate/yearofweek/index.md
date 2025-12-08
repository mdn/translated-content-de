---
title: Temporal.PlainDate.prototype.yearOfWeek
short-title: yearOfWeek
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/yearOfWeek
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`yearOfWeek`** Zugriffs-Eigenschaft von {{jsxref("Temporal.PlainDate")}} Instanzen gibt eine Ganzzahl zurück, die das Jahr repräsentiert, das mit dem {{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}} dieses Datums gepaart wird, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Es ist [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.

Normalerweise ist dies das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des vorangegangenen Jahres oder der ersten Woche des nächsten Jahres zugeordnet werden, wodurch sich `yearOfWeek` um 1 unterscheiden kann. Siehe {{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}} für weitere Details.

Der Set-Accessor von `yearOfWeek` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

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

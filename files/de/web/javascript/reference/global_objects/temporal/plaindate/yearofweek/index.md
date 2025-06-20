---
title: Temporal.PlainDate.prototype.yearOfWeek
short-title: yearOfWeek
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/yearOfWeek
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`yearOfWeek`** Accessor-Eigenschaft von {{jsxref("Temporal.PlainDate")}} Instanzen gibt eine ganze Zahl zurück, die das Jahr repräsentiert, das mit der {{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}} dieses Datums kombiniert werden soll, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Sie ist abhängig vom [calendar](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).

Normalerweise entspricht dies dem Jahr des Datums, aber nach ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet werden, was dazu führt, dass sich `yearOfWeek` um 1 unterscheidet. Weitere Details finden Sie unter {{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}}.

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

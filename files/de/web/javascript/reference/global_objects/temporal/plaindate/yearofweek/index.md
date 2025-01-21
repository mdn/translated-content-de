---
title: Temporal.PlainDate.prototype.yearOfWeek
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/yearOfWeek
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die Zugriffseigenschaft **`yearOfWeek`** von Instanzen des {{jsxref("Temporal.PlainDate")}} gibt eine Ganzzahl zurück, die das Jahr darstellt, das mit der {{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}} dieses Datums kombiniert werden soll, oder `undefined`, wenn der Kalender kein klar definiertes Wochensystem hat. Es hängt vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) ab.

Normalerweise ist dies das Jahr des Datums. Für ISO 8601 können jedoch die ersten und letzten Tage des Jahres der letzten Woche des Vorjahres oder der ersten Woche des folgenden Jahres zugeordnet werden, wodurch sich `yearOfWeek` um 1 unterscheidet. Weitere Details finden Sie unter {{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}}.

Der Set-Zugriff von `yearOfWeek` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

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

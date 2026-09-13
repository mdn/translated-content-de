---
title: "PerformanceTiming: domComplete-Eigenschaft"
short-title: domComplete
slug: Web/API/PerformanceTiming/domComplete
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Performance API")}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist in der [Navigation Timing Level 2-Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle.

Die veraltete
**`PerformanceTiming.domComplete`**
schreibgeschützte Eigenschaft gibt ein `unsigned long long` zurück, das den Zeitpunkt darstellt, in Millisekunden seit der UNIX-Epoche, zu dem der Parser seine Arbeit am Hauptdokument abgeschlossen hat, also wenn der [`Document.readyState`](/de/docs/Web/API/Document/readyState) zu `'complete'` wechselt und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)-Ereignis ausgelöst wird.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle, zu der es gehört.

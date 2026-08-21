---
title: "PerformanceTiming: domLoading-Eigenschaft"
short-title: domLoading
slug: Web/API/PerformanceTiming/domLoading
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Performance API")}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
> Schnittstelle.

Die veraltete, schreibgeschützte Eigenschaft **`PerformanceTiming.domLoading`** gibt ein `unsigned long long` zurück, das den Moment in Millisekunden seit der UNIX-Epoche darstellt, an dem der Parser seine Arbeit begann, also wenn dessen [`Document.readyState`](/de/docs/Web/API/Document/readyState) auf `'loading'` wechselt und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis ausgelöst wird.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle, zu der sie gehört.

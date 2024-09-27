---
title: "PerformanceTiming: domLoading-Eigenschaft"
short-title: domLoading
slug: Web/API/PerformanceTiming/domLoading
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im Rahmen der [Navigation Timing Level 2-Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte benutzen Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) Schnittstelle.

Die veraltete, schreibgeschützte Eigenschaft **`PerformanceTiming.domLoading`** gibt ein `unsigned long long` zurück, das den Zeitpunkt in Millisekunden seit der UNIX-Epoche darstellt, an dem der Parser seine Arbeit aufgenommen hat. Dies ist der Moment, in dem sich der [`Document.readyState`](/de/docs/Web/API/Document/readyState) auf `'loading'` ändert und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event) Ereignis ausgelöst wird.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle, zu der es gehört.

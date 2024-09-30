---
title: "PerformanceTiming: domLoading-Eigenschaft"
short-title: domLoading
slug: Web/API/PerformanceTiming/domLoading
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist in der [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle.

Die veraltete
**`PerformanceTiming.domLoading`**
Eigenschaft, die nur-lesend ist, gibt ein `unsigned long long` zurück, das den Zeitpunkt in Millisekunden seit der UNIX-Epoche darstellt, als der Parser seine Arbeit begann, also als sich der [`Document.readyState`](/de/docs/Web/API/Document/readyState) zu `'loading'` änderte und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)-Ereignis ausgelöst wurde.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle, zu der es gehört.

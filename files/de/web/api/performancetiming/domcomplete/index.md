---
title: "PerformanceTiming: domComplete-Eigenschaft"
short-title: domComplete
slug: Web/API/PerformanceTiming/domComplete
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
> Schnittstelle.

Die veraltete
**`PerformanceTiming.domComplete`**
schreibgeschützte Eigenschaft gibt ein `unsigned long long` zurück, das den Moment in Millisekunden seit der UNIX-Epoche darstellt, in dem der Parser seine Arbeit am Hauptdokument beendet hat, das heißt, wenn sein [`Document.readyState`](/de/docs/Web/API/Document/readyState) zu
`'complete'` wechselt und das entsprechende [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)-Ereignis ausgelöst wird.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle, zu der sie gehört.

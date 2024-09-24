---
title: "PerformanceTiming: domComplete-Eigenschaft"
short-title: domComplete
slug: Web/API/PerformanceTiming/domComplete
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Dieses Interface dieser Eigenschaft ist in der [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen das {{domxref("PerformanceNavigationTiming")}} Interface.

Die veraltete, nur lesbare Eigenschaft
**`PerformanceTiming.domComplete`**
gibt ein `unsigned long long` zurück, welches den Moment darstellt,
in Millisekunden seit der UNIX-Epoche, als der Parser seine Arbeit am Hauptdokument abgeschlossen hat, also wenn sich der {{domxref("Document.readyState")}} auf
`'complete'` ändert und das entsprechende {{domxref("Document/readystatechange_event", "readystatechange")}}-Ereignis
ausgelöst wird.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("PerformanceTiming")}}-Interface, zu dem es gehört.

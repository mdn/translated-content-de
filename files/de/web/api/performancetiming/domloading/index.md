---
title: "PerformanceTiming: domLoading-Eigenschaft"
short-title: domLoading
slug: Web/API/PerformanceTiming/domLoading
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die {{domxref("PerformanceNavigationTiming")}}
> Schnittstelle.

Die veraltete
**`PerformanceTiming.domLoading`**
schreibgeschützte Eigenschaft gibt ein `unsigned long long` zurück, das den Moment repräsentiert,
in Millisekunden seit der UNIX-Epoche, als der Parser seine Arbeit begann, also wenn sich der
{{domxref("Document.readyState")}} zu `'loading'` ändert und das
entsprechende {{domxref("Document/readystatechange_event", "readystatechange")}}-Ereignis ausgelöst wird.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Die {{domxref("PerformanceTiming")}} Schnittstelle, zu der sie gehört.

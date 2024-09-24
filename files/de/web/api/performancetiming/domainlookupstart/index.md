---
title: "PerformanceTiming: domainLookupStart-Eigenschaft"
short-title: domainLookupStart
slug: Web/API/PerformanceTiming/domainLookupStart
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist in der [Navigation Timing Level 2-Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die {{domxref("PerformanceNavigationTiming")}}
> Schnittstelle.

Die veraltete, schreibgeschützte Eigenschaft
**`PerformanceTiming.domainLookupStart`**
liefert ein `unsigned long long`, das den Zeitpunkt angibt, in Millisekunden seit dem UNIX-Epoch, zu dem die Domainabfrage beginnt. Wenn eine persistente Verbindung verwendet wird oder die Informationen in einem Cache oder einer lokalen Ressource gespeichert sind, wird der Wert derselbe sein wie {{domxref("PerformanceTiming.fetchStart")}}.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle {{domxref("PerformanceTiming")}}, zu der sie gehört.

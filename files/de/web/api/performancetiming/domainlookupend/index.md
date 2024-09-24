---
title: "PerformanceTiming: Eigenschaft domainLookupEnd"
short-title: domainLookupEnd
slug: Web/API/PerformanceTiming/domainLookupEnd
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die {{domxref("PerformanceNavigationTiming")}} Schnittstelle.

Die veraltete schreibgeschützte Eigenschaft **`PerformanceTiming.domainLookupEnd`** gibt ein `unsigned long long` zurück, das den Zeitpunkt in Millisekunden seit dem UNIX-Epoch darstellt, zu dem die DNS-Abfrage abgeschlossen ist. Wenn eine dauerhafte Verbindung verwendet wird oder die Informationen im Cache oder in einer lokalen Ressource gespeichert sind, entspricht der Wert dem von {{domxref("PerformanceTiming.fetchStart")}}.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("PerformanceTiming")}} Schnittstelle, zu der sie gehört.

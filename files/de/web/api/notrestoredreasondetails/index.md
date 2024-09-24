---
title: Gründe für Nichtwiederherstellung Details
slug: Web/API/NotRestoredReasonDetails
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`NotRestoredReasonDetails`**-Schnittstelle der {{domxref("Performance API", "Performance API", "", "nocode")}} repräsentiert einen einzelnen Grund, warum eine navigierte Seite daran gehindert wurde, den Vorwärts-/Rückwärts-Cache ({{Glossary("bfcache")}}) zu verwenden.

Ein Array von `NotRestoredReasonDetails`-Objekten kann über die Eigenschaft {{domxref("NotRestoredReasons.reasons")}} zugegriffen werden.

## Instanzeigenschaften

- {{domxref("NotRestoredReasonDetails.reason", "reason")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zeichenkette, die einen Grund beschreibt, warum die Seite daran gehindert wurde, den Vorwärts-/Rückwärts-Cache zu verwenden.

## Instanzmethoden

- {{domxref("NotRestoredReasonDetails.toJSON", "toJSON()")}} {{Experimental_Inline}}
  - : Ein {{Glossary("Serialization","Serializer")}}; gibt eine JSON-Darstellung des `NotRestoredReasonDetails`-Objekts zurück.

## Beispiele

Siehe [Überwachung der bfcache-Sperrgründe](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überwachung der bfcache-Sperrgründe](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- {{domxref("PerformanceNavigationTiming.notRestoredReasons")}}

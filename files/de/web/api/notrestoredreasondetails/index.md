---
title: NotRestoredReasonDetails
slug: Web/API/NotRestoredReasonDetails
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`NotRestoredReasonDetails`**-Schnittstelle der [Performance API](/de/docs/Web/API/Performance_API) stellt einen einzigen Grund dar, warum eine navigierte Seite daran gehindert wurde, den Back-/Forward-Cache ({{Glossary("bfcache", "bfcache")}}) zu verwenden.

Ein Array von `NotRestoredReasonDetails`-Objekten kann über die [`NotRestoredReasons.reasons`](/de/docs/Web/API/NotRestoredReasons/reasons)-Eigenschaft aufgerufen werden.

## Instanzeigenschaften

- [`reason`](/de/docs/Web/API/NotRestoredReasonDetails/reason) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der einen Grund beschreibt, warum die Seite daran gehindert wurde, den Back-/Forward-Cache zu verwenden.

## Instanzmethoden

- [`toJSON()`](/de/docs/Web/API/NotRestoredReasonDetails/toJSON) {{Experimental_Inline}}
  - : Ein {{Glossary("Serialization", "Serializer")}}; gibt eine JSON-Darstellung des `NotRestoredReasonDetails`-Objekts zurück.

## Beispiele

Siehe [Überwachung der Gründe für bfcache-Blockierung](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überwachung der Gründe für bfcache-Blockierung](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)

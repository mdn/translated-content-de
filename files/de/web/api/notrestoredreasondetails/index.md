---
title: NotRestoredReasonDetails
slug: Web/API/NotRestoredReasonDetails
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die Schnittstelle **`NotRestoredReasonDetails`** der [Performance API](/de/docs/Web/API/Performance_API) repräsentiert einen einzelnen Grund, warum eine Seite nach einer Navigation den Back/Forward-Cache ({{Glossary("bfcache", "bfcache")}}) nicht verwenden konnte.

Auf ein Array von `NotRestoredReasonDetails`-Objekten kann über die Eigenschaft [`NotRestoredReasons.reasons`](/de/docs/Web/API/NotRestoredReasons/reasons) zugegriffen werden.

## Instanzeigenschaften

- [`reason`](/de/docs/Web/API/NotRestoredReasonDetails/reason) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zeichenfolge, die einen Grund beschreibt, warum die Seite den Back/Forward-Cache nicht verwenden konnte.

## Instanzmethoden

- [`toJSON()`](/de/docs/Web/API/NotRestoredReasonDetails/toJSON) {{Experimental_Inline}}
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `NotRestoredReasonDetails`-Objekt repräsentiert. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Beispiele

Beispiele finden Sie unter [Gründe für die Blockierung des bfcache überwachen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gründe für die Blockierung des bfcache überwachen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)

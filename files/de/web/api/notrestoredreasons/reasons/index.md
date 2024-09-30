---
title: "NotRestoredReasons: reasons-Eigenschaft"
short-title: reasons
slug: Web/API/NotRestoredReasons/reasons
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`reasons`** der [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Schnittstelle gibt ein Array von [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails)-Objekten zurück, von denen jedes einen Grund darstellt, warum die navigierte Seite daran gehindert wurde, den Vor-/Zurück-Cache ([bfcache](/de/docs/Glossary/bfcache)) zu verwenden.

## Wert

Ein Array von [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails)-Objekten. Siehe [Blockierungsgründe](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons#blocking_reasons) für eine Liste der möglichen Blockierungsgründe.

Befindet sich das Dokument in einem Cross-Origin-{{htmlelement("iframe")}}, gibt `reasons` `null` zurück, aber das übergeordnete Dokument kann einen `reason` von `"masked"` anzeigen, wenn irgendwelche `<iframe>`s die Nutzung des bfcache für den obersten Frame blockiert haben.

## Beispiele

Siehe [Überwachen von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überwachen von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)

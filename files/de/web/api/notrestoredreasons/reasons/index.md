---
title: "NotRestoredReasons: Eigenschaft reasons"
short-title: Gründe
slug: Web/API/NotRestoredReasons/reasons
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`reasons`** schreibgeschützte Eigenschaft des {{domxref("NotRestoredReasons")}}-Interfaces gibt ein Array von {{domxref("NotRestoredReasonDetails")}}-Objekten zurück, von denen jedes einen Grund repräsentiert, warum die navigierte Seite daran gehindert wurde, den Vorwärts-/Rückwärts-Cache ({{Glossary("bfcache")}}) zu nutzen.

## Wert

Ein Array von {{domxref("NotRestoredReasonDetails")}}-Objekten. Siehe [Blockierungsgründe](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons#blocking_reasons) für eine Liste der möglichen Blockierungsgründe.

Befindet sich das Dokument in einem Cross-Origin-{{htmlelement("iframe")}}, wird `reasons` `null` zurückgeben, aber das übergeordnete Dokument kann einen `reason` von `"masked"` anzeigen, wenn ein `<iframe>` die Nutzung von bfcache für den Haupt-Frame blockiert hat.

## Beispiele

Siehe [Überwachung von bfcache Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überwachung von bfcache Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- {{domxref("PerformanceNavigationTiming.notRestoredReasons")}}

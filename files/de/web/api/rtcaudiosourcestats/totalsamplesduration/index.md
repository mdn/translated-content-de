---
title: "RTCAudioSourceStats: totalSamplesDuration-Eigenschaft"
short-title: totalSamplesDuration
slug: Web/API/RTCAudioSourceStats/totalSamplesDuration
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`totalSamplesDuration`**-Eigenschaft des [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats)-Wörterbuchs stellt die kombinierte Dauer aller von der Medienquelle erzeugten Samples über die Lebensdauer dieses Statistikobjekts dar, gemessen in Sekunden.
Es schließt keine Samples ein, die vor dem Erreichen dieser Medienquelle verworfen wurden. <!-- Verworfene Samples in `droppedSamplesDuration`; nicht implementiert -->

Diese Eigenschaft kann zusammen mit [`totalAudioEnergy`](/de/docs/Web/API/RTCAudioSourceStats/totalAudioEnergy) verwendet werden, um einen [durchschnittlichen Audiopegel über verschiedene Intervalle](/de/docs/Web/API/RTCAudioSourceStats#description) zu berechnen.

> [!NOTE]
> Für die Audiodauer von remote bezogenen Tracks siehe [`RTCInboundRtpStreamStats.totalSamplesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalSamplesDuration).

## Wert

Eine Zahl, die die Gesamtdauer aller von dieser Quelle erzeugten Samples über die Lebensdauer dieses Statistikobjekts angibt, gemessen in Sekunden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

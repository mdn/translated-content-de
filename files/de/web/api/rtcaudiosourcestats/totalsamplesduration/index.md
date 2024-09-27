---
title: "RTCAudioSourceStats: totalSamplesDuration-Eigenschaft"
short-title: totalSamplesDuration
slug: Web/API/RTCAudioSourceStats/totalSamplesDuration
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`totalSamplesDuration`**-Eigenschaft des [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats)-Verzeichnisses repräsentiert die kombinierte Dauer aller von der Medienquelle über die Lebensdauer dieses Statistikobjekts erzeugten Samples, in Sekunden.
Sie umfasst keine Samples, die vor dem Erreichen dieser Medienquelle verworfen wurden. <!-- Verworfene Samples in `droppedSamplesDuration`; nicht implementiert -->

Dies kann zusammen mit [`totalAudioEnergy`](/de/docs/Web/API/RTCAudioSourceStats/totalAudioEnergy) verwendet werden, um einen [durchschnittlichen Audiopegel über verschiedene Intervalle](/de/docs/Web/API/RTCAudioSourceStats#description) zu berechnen.

> [!NOTE]
> Für die Audiodauer von Tracks aus entfernten Quellen siehe [`RTCInboundRtpStreamStats.totalSamplesDuration`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalSamplesDuration).

## Wert

Eine Zahl, die die Gesamtdauer aller von dieser Quelle produzierten Samples über die Lebensdauer dieses Statistikobjekts angibt, in Sekunden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

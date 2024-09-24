---
title: "RTCAudioSourceStats: Eigenschaft totalSamplesDuration"
short-title: totalSamplesDuration
slug: Web/API/RTCAudioSourceStats/totalSamplesDuration
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`totalSamplesDuration`**-Eigenschaft des {{domxref("RTCAudioSourceStats")}}-Wörterbuchs repräsentiert die gesamte Dauer aller vom Medienquellobjekt im Laufe der Lebensdauer dieses Statistikobjekts erzeugten Samples, in Sekunden. Es schließt keine Samples ein, die vor dem Erreichen dieser Medienquelle verworfen wurden. <!-- Dropped samples in `droppedSamplesDuration`; not implemented -->

Dies kann zusammen mit {{domxref("RTCAudioSourceStats.totalAudioEnergy", "totalAudioEnergy")}} verwendet werden, um einen [durchschnittlichen Audiopegel über verschiedene Intervalle](/de/docs/Web/API/RTCAudioSourceStats#description) zu berechnen.

> [!NOTE]
> Für die Audiodauer von aus der Ferne bezogenen Spuren, siehe {{domxref("RTCInboundRtpStreamStats.totalSamplesDuration")}}.

## Wert

Eine Zahl, die die Gesamtdauer aller von dieser Quelle über die Lebensdauer dieses Statistikobjekts produzierten Samples in Sekunden angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

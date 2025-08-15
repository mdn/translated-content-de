---
title: "RTCInboundRtpStreamStats: totalSamplesDuration-Eigenschaft"
short-title: totalSamplesDuration
slug: Web/API/RTCInboundRtpStreamStats/totalSamplesDuration
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`totalSamplesDuration`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs gibt die Gesamtdauer aller empfangenen Audio-Samples an.
Mit anderen Worten, die aktuelle Dauer des Tracks.

Diese Eigenschaft kann zusammen mit [`totalAudioEnergy`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAudioEnergy) verwendet werden, um einen durchschnittlichen Audiopegel über verschiedene Zeitintervalle zu berechnen.

> [!NOTE]
> Der Wert ist für Videostreams undefiniert.

## Wert

Eine positive Zahl, in Sekunden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCAudioSourceStats.totalSamplesDuration`](/de/docs/Web/API/RTCAudioSourceStats/totalSamplesDuration) für die Audiodauer gesendeter Samples.
- [`totalSamplesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalSamplesReceived)

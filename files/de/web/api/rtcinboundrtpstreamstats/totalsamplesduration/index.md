---
title: "RTCInboundRtpStreamStats: totalSamplesDuration-Eigenschaft"
short-title: totalSamplesDuration
slug: Web/API/RTCInboundRtpStreamStats/totalSamplesDuration
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebRTC")}}

Die **`totalSamplesDuration`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Dictionaries gibt die Gesamtdauer aller empfangenen Audiodatenproben an.
Mit anderen Worten, die aktuelle Dauer des Tracks.

Dies kann zusammen mit [`totalAudioEnergy`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAudioEnergy) verwendet werden, um einen durchschnittlichen Audiopegel über verschiedene Intervalle zu berechnen.

> [!NOTE]
> Der Wert ist für Videostreams undefiniert.

## Wert

Eine positive Zahl, in Sekunden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCAudioSourceStats.totalSamplesDuration`](/de/docs/Web/API/RTCAudioSourceStats/totalSamplesDuration) für die Audiodauer gesendeter Proben.
- [`totalSamplesReceived`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalSamplesReceived)

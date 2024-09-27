---
title: "RTCInboundRtpStreamStats: bytesReceived-Eigenschaft"
short-title: bytesReceived
slug: Web/API/RTCInboundRtpStreamStats/bytesReceived
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die **`bytesReceived`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs ist ein Ganzzahlenwert, der die Gesamtzahl der bisher von dieser Synchronisationsquelle (SSRC) empfangenen Bytes angibt.

## Wert

Ein nicht signierter Ganzzahlenwert, der die bisher über diesen RTP-Stream empfangene Gesamtanzahl von Bytes angibt, ausgenommen Header- und Auffüllbytes. Dieser Wert kann verwendet werden, um eine Annäherung an die durchschnittliche Mediendatenrate zu berechnen:

```js
avgDataRate = rtcInboundRtpStreamStats.bytesReceived / elapsedTime;
```

Dieser Wert wird auf null zurückgesetzt, wenn sich die SSRC-Kennung des Senders aus irgendeinem Grund ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

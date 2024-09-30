---
title: "RTCInboundRtpStreamStats: bytesReceived-Eigenschaft"
short-title: bytesReceived
slug: Web/API/RTCInboundRtpStreamStats/bytesReceived
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die **`bytesReceived`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs ist ein ganzzahliger Wert, der die Gesamtanzahl der bisher von dieser Synchronisationsquelle (SSRC) empfangenen Bytes angibt.

## Wert

Ein vorzeichenloser ganzzahliger Wert, der die Gesamtanzahl der bisher in diesem RTP-Stream empfangenen Bytes angibt, ohne Header- und Padding-Bytes. Dieser Wert kann verwendet werden, um eine Näherung der durchschnittlichen Mediendatenrate zu berechnen:

```js
avgDataRate = rtcInboundRtpStreamStats.bytesReceived / elapsedTime;
```

Dieser Wert wird auf null zurückgesetzt, wenn sich die SSRC-Kennung des Senders aus irgendeinem Grund ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

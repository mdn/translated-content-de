---
title: "RTCInboundRtpStreamStats: bytesReceived-Eigenschaft"
short-title: bytesReceived
slug: Web/API/RTCInboundRtpStreamStats/bytesReceived
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die **`bytesReceived`**-Eigenschaft des {{domxref("RTCInboundRtpStreamStats")}}-Wörterbuchs ist ein ganzzahliger Wert, der die Gesamtanzahl der bisher von dieser Synchronisationsquelle (SSRC) empfangenen Bytes angibt.

## Wert

Ein nicht-vorzeichenbehafteter ganzzahliger Wert, der die Gesamtanzahl der bisher auf diesem RTP-Stream empfangenen Bytes angibt, abgesehen von Header- und Auffüllbytes. Dieser Wert kann verwendet werden, um eine Annäherung der durchschnittlichen Mediendatenrate zu berechnen:

```js
avgDataRate = rtcInboundRtpStreamStats.bytesReceived / elapsedTime;
```

Dieser Wert wird auf null zurückgesetzt, wenn sich aus irgendeinem Grund die SSRC-Kennung des Senders ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

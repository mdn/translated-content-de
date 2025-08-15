---
title: "RTCInboundRtpStreamStats: bytesReceived-Eigenschaft"
short-title: bytesReceived
slug: Web/API/RTCInboundRtpStreamStats/bytesReceived
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`bytesReceived`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die gesamte Anzahl der bisher von dieser Synchronisationsquelle (SSRC) empfangenen Bytes an, ohne die Header- und Padding-Bytes einzuschließen.

Der Wert kann verwendet werden, um eine Annäherung an die durchschnittliche Medien-Datenrate zu berechnen:

```js
avgDataRate = rtcInboundRtpStreamStats.bytesReceived / elapsedTime;
```

Der Eigenschaftswert wird auf null zurückgesetzt, wenn sich die SSRC-Kennung des Senders aus irgendeinem Grund ändert.

## Wert

Eine positive ganze Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

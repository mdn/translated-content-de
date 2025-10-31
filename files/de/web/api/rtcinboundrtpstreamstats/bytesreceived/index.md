---
title: "RTCInboundRtpStreamStats: bytesReceived-Eigenschaft"
short-title: bytesReceived
slug: Web/API/RTCInboundRtpStreamStats/bytesReceived
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebRTC")}}

Die **`bytesReceived`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die Gesamtanzahl der Bytes an, die bisher von dieser Synchronisationsquelle (SSRC) empfangen wurden, ohne Header- und Padding-Bytes einzuschließen.

Der Wert kann verwendet werden, um eine Annäherung der durchschnittlichen Mediendatenrate zu berechnen:

```js
avgDataRate = rtcInboundRtpStreamStats.bytesReceived / elapsedTime;
```

Der Eigenschaftswert wird auf null zurückgesetzt, wenn sich aus irgendeinem Grund die SSRC-Kennung des Senders ändert.

## Wert

Eine positive ganze Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

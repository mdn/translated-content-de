---
title: "RTCOutboundRtpStreamStats: active-Eigenschaft"
short-title: active
slug: Web/API/RTCOutboundRtpStreamStats/active
l10n:
  sourceCommit: 49bbddc34034e59a63c0b2cda79e45c94ea9daa9
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`active`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist ein Boolean, der anzeigt, ob dieser RTP-Stream zum Senden konfiguriert ist oder deaktiviert ist.

Zum Beispiel wäre dies `false`, wenn die Spur, die dem Stream entspricht, ihre [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)-Eigenschaft auf `false` gesetzt hätte. Beachten Sie, dass ein aktiver Stream möglicherweise trotzdem nicht sendet, wenn zum Beispiel der Stream durch Netzwerkbedingungen eingeschränkt wird.

## Wert

`true`, wenn der Stream zum Senden aktiviert ist, andernfalls `false`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

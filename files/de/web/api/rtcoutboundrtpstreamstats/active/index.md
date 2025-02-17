---
title: "RTCOutboundRtpStreamStats: active-Eigenschaft"
short-title: active
slug: Web/API/RTCOutboundRtpStreamStats/active
l10n:
  sourceCommit: 7f29fefe27ee8362a8b5f36255f942a2358cc8f8
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`active`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist ein boolean, der anzeigt, ob dieser RTP-Stream zum Senden konfiguriert ist oder ob er deaktiviert ist.

Zum Beispiel wäre dieser Wert `false`, wenn das zugehörige Track des Streams die [`MediaStreamTrack.enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)-Eigenschaft auf `false` gesetzt hätte.
Beachten Sie, dass ein aktiver Stream möglicherweise trotzdem nichts sendet, wenn der Stream beispielsweise durch Netzwerkbedingungen eingeschränkt ist.

## Wert

`true`, wenn der Stream zum Senden aktiviert ist, `false` andernfalls.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

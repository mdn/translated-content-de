---
title: "RTCOutboundRtpStreamStats: keyFramesEncoded-Eigenschaft"
short-title: keyFramesEncoded
slug: Web/API/RTCOutboundRtpStreamStats/keyFramesEncoded
l10n:
  sourceCommit: 7f29fefe27ee8362a8b5f36255f942a2358cc8f8
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`keyFramesEncoded`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs repräsentiert die Gesamtanzahl der Schlüsselbilder (key frames), die in diesem RTP-Medienstream erfolgreich kodiert wurden. Dies umfasst beispielsweise Schlüsselbilder in VP8 ({{rfc("6386")}}) oder IDR-Frames in H.264 ({{rfc("6184")}}).

Beachten Sie, dass die Anzahl der Delta-Frames berechnet wird, indem dieser Wert von der Gesamtanzahl der Frames abgezogen wird ([`framesEncoded`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesEncoded) - `keyFramesEncoded`).

> [!NOTE]
> Der Wert existiert nicht für Audio.

## Wert

Eine positive ganze Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

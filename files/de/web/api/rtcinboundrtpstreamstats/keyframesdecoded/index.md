---
title: "RTCInboundRtpStreamStats: keyFramesDecoded-Eigenschaft"
short-title: keyFramesDecoded
slug: Web/API/RTCInboundRtpStreamStats/keyFramesDecoded
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`keyFramesDecoded`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs repräsentiert die Gesamtanzahl der Schlüsselbilder (Keyframes), die in diesem RTP-Medienstrom erfolgreich dekodiert wurden. Dies schließt zum Beispiel Schlüsselbilder in VP8 ({{rfc("6386")}}) oder IDR-Frames in H.264 ({{rfc("6184")}}) ein.

Beachten Sie, dass die Anzahl der Delta-Frames berechnet wird, indem dieser Wert von der Gesamtanzahl der Frames ([`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded) - `keyFramesEncoded`) subtrahiert wird.

> [!NOTE]
> Die Eigenschaft ist für Audioströme undefiniert.

## Wert

Eine positive ganze Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

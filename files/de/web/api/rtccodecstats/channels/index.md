---
title: "RTCCodecStats: Kanäle-Eigenschaft"
short-title: Kanäle
slug: Web/API/RTCCodecStats/channels
l10n:
  sourceCommit: e82d46feb66ed523ed8f74bd0bd6f4153c87acbb
---

{{APIRef("WebRTC")}}

Die **`channels`**-Eigenschaft des [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Wörterbuchs ist eine positive Zahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.

Für Audiocodecs gibt ein Wert von 1 Mono-Sound an, während 2 Stereo bedeutet.

## Werte

Eine positive Zahl, die die Anzahl der Kanäle angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- `codecs.channels`-Option im Parameter, der an [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences#channels) und [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#channels) übergeben wird.
- `codecs.channels` im Objekt, das von [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#channels) und [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters#channels) zurückgegeben wird.

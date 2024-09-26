---
title: "RTCCodecStats: Eigenschaft channels"
short-title: channels
slug: Web/API/RTCCodecStats/channels
l10n:
  sourceCommit: e82d46feb66ed523ed8f74bd0bd6f4153c87acbb
---

{{APIRef("WebRTC")}}

Die **`channels`**-Eigenschaft des {{domxref("RTCCodecStats")}}-Wörterbuchs ist eine positive Zahl, die die Anzahl der vom Codec unterstützten Kanäle enthält.

Für Audiocodecs gibt ein Wert von 1 monauralen Klang an, während 2 Stereo bedeutet.

## Werte

Eine positive Zahl, die die Anzahl der Kanäle angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die `codecs.channels`-Option im Parameter, der an [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences#channels) und [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#channels) übergeben wird.
- `codecs.channels` im Objekt zurückgegeben von [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#channels) und [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters#channels).
---
title: "RTCCodecStats: payloadType-Eigenschaft"
short-title: payloadType
slug: Web/API/RTCCodecStats/payloadType
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{APIRef("WebRTC")}}

Die **`payloadType`**-Eigenschaft des [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Wörterbuchs ist eine positive ganze Zahl im Bereich von 0 bis 127, die das Format der {{Glossary("RTP", "RTP")}}-Nutzdaten beschreibt, die beim Codieren oder Dekodieren von RTP verwendet werden.

## Wert

Eine positive ganze Zahl zwischen 0 und 127.

Die Zuordnungen von Werten zu Formaten sind in RFC3550 definiert, und insbesondere in [Abschnitt 6: Nutzdatentyp-Definitionen](https://www.rfc-editor.org/info/rfc3551/#section-6) von RFC3551.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- `payloadType` zurückgegeben von [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata#payloadtype)
- `payloadType` zurückgegeben von [`RTCEncodedVideoFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata#payloadtype)
- `codecs.payloadType`-Option in Parameter, der an [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#payloadtype) übergeben wird.
- `codecs.payloadType` im Objekt, das von [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#payloadtype) und [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters#payloadtype) zurückgegeben wird.

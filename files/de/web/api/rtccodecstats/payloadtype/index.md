---
title: "RTCCodecStats: payloadType-Eigenschaft"
short-title: payloadType
slug: Web/API/RTCCodecStats/payloadType
l10n:
  sourceCommit: 5f5d8299c2889f9e93d2aa7bd572eb883ee91f62
---

{{APIRef("WebRTC")}}

Die **`payloadType`**-Eigenschaft des [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Wörterbuchs ist eine positive Ganzzahl im Bereich von 0 bis 127, die das Format der {{Glossary("RTP", "RTP")}}-Nutzlast beschreibt, die im RTP-Codecodierungs- oder Decodierungsprozess verwendet wird.

## Wert

Eine positive Ganzzahl zwischen 0 und 127.

Die Zuordnung von Werten zu Formaten ist in RFC3550 definiert und insbesondere in [Abschnitt 6: Nutzlasttyp-Definitionen](https://www.rfc-editor.org/rfc/rfc3551#section-6) von RFC3551 genauer beschrieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- `payloadType`, zurückgegeben von [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata#payloadtype)
- `payloadType`, zurückgegeben von [`RTCEncodedVideoFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata#payloadtype)
- `codecs.payloadType`-Option in dem Parameter, der an [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#payloadtype) übergeben wird.
- `codecs.payloadType` in dem von [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#payloadtype) und [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters#payloadtype) zurückgegebenen Objekt.

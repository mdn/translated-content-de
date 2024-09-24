---
title: "RTCCodecStats: Eigenschaft payloadType"
short-title: payloadType
slug: Web/API/RTCCodecStats/payloadType
l10n:
  sourceCommit: 5f5d8299c2889f9e93d2aa7bd572eb883ee91f62
---

{{APIRef("WebRTC")}}

Die **`payloadType`**-Eigenschaft des {{domxref("RTCCodecStats")}}-Wörterbuchs ist eine positive Ganzzahl im Bereich von 0 bis 127, die das Format des {{glossary("RTP")}}-Payloads beschreibt, das bei der RTP-Codierung oder -Decodierung verwendet wird.

## Wert

Eine positive Ganzzahl zwischen 0 und 127.

Die Zuordnungen von Werten zu Formaten sind in RFC3550 definiert und genauer in [Abschnitt 6: Payload-Typ-Definitionen](https://www.rfc-editor.org/rfc/rfc3551#section-6) von RFC3551 zu finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- `payloadType` zurückgegeben von [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata#payloadtype)
- `payloadType` zurückgegeben von [`RTCEncodedVideoFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata#payloadtype)
- `codecs.payloadType` Option in Parameter übergeben an [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#payloadtype).
- `codecs.payloadType` in Objekt zurückgegeben von [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#payloadtype) und [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters#payloadtype).

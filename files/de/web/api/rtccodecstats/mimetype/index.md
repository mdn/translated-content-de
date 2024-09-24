---
title: "RTCCodecStats: mimeType-Eigenschaft"
short-title: mimeType
slug: Web/API/RTCCodecStats/mimeType
l10n:
  sourceCommit: 5f5d8299c2889f9e93d2aa7bd572eb883ee91f62
---

{{APIRef("WebRTC")}}

Die **`mimeType`**-Eigenschaft des {{domxref("RTCCodecStats")}} Wörterbuchs ist eine Zeichenkette, die den {{glossary("MIME type")}} und Subtyp des Codecs enthält.

Dies hat die Form `"type/subtype"`, wie zum Beispiel "video/VP8" oder "audio/opus", wie im [IANA-Register der gültigen MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2) definiert.

## Werte

Eine Zeichenkette, die den MIME-Typ/Subtyp des Codecs angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- `codecs.mimeType`-Option im Parameter, der an [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences#mimetype) und [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#mimetype) übergeben wird.
- `codecs.mimeType` im Objekt, das von [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#mimetype) und [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters#mimetype) zurückgegeben wird.

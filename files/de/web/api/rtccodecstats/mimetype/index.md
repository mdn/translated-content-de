---
title: "RTCCodecStats: mimeType-Eigenschaft"
short-title: mimeType
slug: Web/API/RTCCodecStats/mimeType
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

{{APIRef("WebRTC")}}

Die **`mimeType`**-Eigenschaft des Wörterbuchs [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats) ist ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} und -Subtyp des Codecs enthält.

Dies hat die Form `"type/subtype"`, etwa „video/VP8“ oder „audio/opus“, wie im [IANA-Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-2) definiert.

## Werte

Ein String, der den MIME-Typ/-Subtyp des Codecs angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Option `codecs.mimeType` im Parameter, der an [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences#mimetype) und [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters#mimetype) übergeben wird.
- `codecs.mimeType` im Objekt, das von [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters#mimetype) und [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters#mimetype) zurückgegeben wird.

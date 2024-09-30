---
title: "RTCRemoteInboundRtpStreamStats: kind-Eigenschaft"
short-title: kind
slug: Web/API/RTCRemoteInboundRtpStreamStats/kind
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`kind`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs ist ein String, der angibt, ob der beschriebene [RTP](/de/docs/Glossary/RTP)-Stream Audio- oder Videomedien enthält.

Dieser String wird immer gleich sein wie das [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) des von dem Stream übertragenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekts.
Er wird auch mit dem Medientyp des Codecs übereinstimmen, der mit diesen Statistikobjekten verbunden ist (d. h. dem MIME-Typ der zugehörigen [`RTCCodecStats.mimeType`](/de/docs/Web/API/RTCCodecStats/mimeType)-Eigenschaft des Codecs).

## Wert

`kind` ist immer eines von:

- `"audio"`
  - : Der Stream enthält Audiomedien.
- `"video"`
  - : Der Stream enthält Videomedien.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: "RTCRemoteOutboundRtpStreamStats: kind-Eigenschaft"
short-title: kind
slug: Web/API/RTCRemoteOutboundRtpStreamStats/kind
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`kind`**-Eigenschaft des [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Wörterbuchs ist ein String, der angibt, ob der beschriebene {{Glossary("RTP", "RTP")}}-Stream Audio- oder Videomedien enthält.

Dieser String entspricht immer dem [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekts, das von dem Stream übertragen wird. Es wird auch mit dem Medientyp der [`RTCCodecStats.codec`](/de/docs/Web/API/RTCCodecStats/codec)-Eigenschaft des Statistikobjekts übereinstimmen.

## Wert

Die Arten sind immer eine der folgenden:

- `"audio"`
  - : Der Stream enthält Audiodaten.
- `"video"`
  - : Der Stream enthält Videodaten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: "RTCRemoteOutboundRtpStreamStats: Kind-Eigenschaft"
short-title: kind
slug: Web/API/RTCRemoteOutboundRtpStreamStats/kind
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`kind`**-Eigenschaft des [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Wörterbuchs ist ein String, der angibt, ob der beschriebene [RTP](/de/docs/Glossary/RTP)-Stream Audio- oder Videomaterial enthält.

Dieser String wird immer derselbe sein wie die [`kind`](/de/docs/Web/API/MediaStreamTrack/kind)-Eigenschaft des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekts, das vom Stream getragen wird.
Er wird auch mit der Medientyp-Eigenschaft der Statistiken des [`RTCCodecStats.codec`](/de/docs/Web/API/RTCCodecStats/codec)-Objekts übereinstimmen.

## Wert

Die möglichen Werte sind immer einer der folgenden:

- `"audio"`
  - : Der Stream enthält Audiomaterial.
- `"video"`
  - : Der Stream enthält Videomaterial.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

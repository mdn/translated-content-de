---
title: "RTCInboundRtpStreamStats: kind Eigenschaft"
short-title: kind
slug: Web/API/RTCInboundRtpStreamStats/kind
l10n:
  sourceCommit: 03b4a9d11d37c9d0be0804669467eadf2d72f2a3
---

{{APIRef("WebRTC")}}

Die **`kind`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs ist ein String, der angibt, ob der beschriebene {{Glossary("RTP", "RTP")}}-Stream Audio- oder Videomedien enthält.

Dieser String wird immer derselbe sein wie der [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekts, das vom Stream getragen wird. Er wird auch mit dem Medientyp des Codecs übereinstimmen, der mit diesen Statistikobjekten verbunden ist (d.h. der MIME-Typ der verbundenen Codec-Eigenschaft [`RTCCodecStats.mimeType`](/de/docs/Web/API/RTCCodecStats/mimeType)).

## Wert

Das `kind` ist immer eines der folgenden:

- `"audio"`
  - : Der Stream enthält Audiomedien.
- `"video"`
  - : Der Stream enthält Videomedien.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

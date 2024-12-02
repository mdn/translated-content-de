---
title: "RTCOutboundRtpStreamStats: kind-Eigenschaft"
short-title: kind
slug: Web/API/RTCOutboundRtpStreamStats/kind
l10n:
  sourceCommit: 03b4a9d11d37c9d0be0804669467eadf2d72f2a3
---

{{APIRef("WebRTC")}}

Die **`kind`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist ein String, der angibt, ob der beschriebene {{Glossary("RTP", "RTP")}}-Stream Audio- oder Videomedien enthält.

Dieser String entspricht immer dem [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) des von dem Stream getragenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekts. Es wird auch dem Medientyp des Codecs entsprechen, der mit diesem Statistikobjekt verknüpft ist (d. h. der MIME-Typ der [`RTCCodecStats.mimeType`](/de/docs/Web/API/RTCCodecStats/mimeType)-Eigenschaft des zugehörigen Codecs).

## Wert

Der Typ ist immer einer der folgenden:

- `"audio"`
  - : Der Stream enthält Audiodaten.
- `"video"`
  - : Der Stream enthält Videodaten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

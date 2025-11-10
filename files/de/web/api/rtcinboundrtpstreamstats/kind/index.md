---
title: "RTCInboundRtpStreamStats: kind-Eigenschaft"
short-title: kind
slug: Web/API/RTCInboundRtpStreamStats/kind
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebRTC")}}

Die **`kind`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs ist ein String, der anzeigt, ob der beschriebene {{Glossary("RTP", "RTP")}}-Stream Audio- oder Videomedien enthält.

Dieser String wird immer der gleiche sein wie der [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekts, das vom Stream transportiert wird. Er wird auch dem Medientyp des Codecs entsprechen, der mit diesem Statistikobjekt verbunden ist (d.h. dem MIME-Typ der [`RTCCodecStats.mimeType`](/de/docs/Web/API/RTCCodecStats/mimeType)-Eigenschaft des zugehörigen Codecs).

## Wert

Der Wert von kind ist immer einer der folgenden:

- `"audio"`
  - : Der Stream enthält Audiodaten.
- `"video"`
  - : Der Stream enthält Videodaten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

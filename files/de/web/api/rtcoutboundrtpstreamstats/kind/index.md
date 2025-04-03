---
title: "RTCOutboundRtpStreamStats: kind-Eigenschaft"
short-title: kind
slug: Web/API/RTCOutboundRtpStreamStats/kind
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebRTC")}}

Die **`kind`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist ein String, der angibt, ob der beschriebene {{Glossary("RTP", "RTP")}}-Stream Audio- oder Videodaten enthält.

Dieser String entspricht immer dem [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) des von dem Stream übertragenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekts. Er wird auch mit dem Medientyp des Codecs übereinstimmen, der mit diesem Statistikobjekt verbunden ist (d.h. dem MIME-Typ der [`RTCCodecStats.mimeType`](/de/docs/Web/API/RTCCodecStats/mimeType)-Eigenschaft des zugehörigen Codecs).

## Wert

Der Wert von kind ist immer einer der folgenden:

- `"audio"`
  - : Der Stream enthält Audio-Daten.
- `"video"`
  - : Der Stream enthält Video-Daten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: "RTCRemoteInboundRtpStreamStats: kind-Eigenschaft"
short-title: kind
slug: Web/API/RTCRemoteInboundRtpStreamStats/kind
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebRTC")}}

Die **`kind`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs ist ein String, der angibt, ob der beschriebene {{Glossary("RTP", "RTP")}}-Stream Audio- oder Videomedien enthält.

Dieser String entspricht immer dem [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekts, das vom Stream getragen wird. Er wird auch dem Medientyp des Codecs entsprechen, der mit diesen Statistikobjekten verknüpft ist (d.h. dem MIME-Typ der [MIME-Typ](/de/docs/Web/Media and Webrtc/Media type detection/Types) der zugehörigen Codec's [`RTCCodecStats.mimeType`](/de/docs/Web/API/RTCCodecStats/mimeType)-Eigenschaft).

## Wert

Der `kind` ist immer einer von:

- `"audio"`
  - : Der Stream enthält Audiomedien.
- `"video"`
  - : Der Stream enthält Videomedien.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

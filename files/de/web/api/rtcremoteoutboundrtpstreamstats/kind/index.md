---
title: "RTCRemoteOutboundRtpStreamStats: kind-Eigenschaft"
short-title: kind
slug: Web/API/RTCRemoteOutboundRtpStreamStats/kind
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`kind`**-Eigenschaft des {{domxref("RTCRemoteOutboundRtpStreamStats")}} Wörterbuchs ist ein String, der angibt, ob der beschriebene {{Glossary("RTP")}}-Stream Audio- oder Videomedien enthält.

Dieser String wird immer derselbe wie das {{domxref("MediaStreamTrack.kind", "kind")}} des {{domxref("MediaStreamTrack")}}-Objekts sein, das vom Stream übertragen wird. Er wird auch mit dem Medientyp der {{domxref("RTCCodecStats.codec")}}-Eigenschaft des Statistikobjekts übereinstimmen.

## Wert

Die Arten sind immer eine der folgenden:

- `"audio"`
  - : Der Stream enthält Audiomedien.
- `"video"`
  - : Der Stream enthält Videomedien.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

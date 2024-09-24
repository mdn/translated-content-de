---
title: "RTCRemoteInboundRtpStreamStats: Art-Eigenschaft"
short-title: Art
slug: Web/API/RTCRemoteInboundRtpStreamStats/kind
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`kind`**-Eigenschaft des {{domxref("RTCRemoteInboundRtpStreamStats")}}-Wörterbuchs ist ein String, der anzeigt, ob der beschriebene {{Glossary("RTP")}}-Stream Audio- oder Videomaterial enthält.

Dieser String entspricht immer der {{domxref("MediaStreamTrack.kind", "kind")}} des {{domxref("MediaStreamTrack")}}-Objekts, das vom Stream übertragen wird. Er wird auch mit dem Medientyp des Codecs übereinstimmen, der mit diesem Statistikobjekt verbunden ist (d.h. dem MIME-Typ der {{domxref("RTCCodecStats.mimeType")}}-Eigenschaft des zugehörigen Codecs).

## Wert

Die Art ist immer eine der folgenden:

- `"audio"`
  - : Der Stream enthält Audio-Medien.
- `"video"`
  - : Der Stream enthält Video-Medien.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

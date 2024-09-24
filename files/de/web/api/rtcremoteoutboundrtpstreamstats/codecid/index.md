---
title: "RTCRemoteOutboundRtpStreamStats: codecId-Eigenschaft"
short-title: codecId
slug: Web/API/RTCRemoteOutboundRtpStreamStats/codecId
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`codecId`**-Eigenschaft des {{domxref("RTCRemoteOutboundRtpStreamStats")}} Wörterbuchs ist eine Zeichenkette, die das Objekt eindeutig identifiziert, das untersucht wurde, um die Daten in den {{domxref("RTCCodecStats")}} für den {{Glossary("RTP")}}-Stream zu erzeugen.

`RTCRemoteOutboundRtpStreamStats`- und `RTCCodecStats`-Objekte werden korreliert, indem der {{domxref("RTCStatsReport")}} iteriert wird, um die Statistik-Objekte zu finden, bei denen `RTCRemoteOutboundRtpStreamStats.codecId` gleich {{domxref("RTCCodecStats.id")}} ist.

## Wert

Eine Zeichenkette, die die {{domxref("RTCCodecStats.id","id")}} des Objekts enthält, das untersucht wurde, um das mit diesem RTP-Stream verknüpfte {{domxref("RTCCodecStats")}}-Objekt zu erzeugen.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

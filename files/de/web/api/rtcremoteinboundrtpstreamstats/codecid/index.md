---
title: "RTCRemoteInboundRtpStreamStats: codecId-Eigenschaft"
short-title: codecId
slug: Web/API/RTCRemoteInboundRtpStreamStats/codecId
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{APIRef("WebRTC")}}

Die **`codecId`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs ist ein String, der das Objekt eindeutig identifiziert, das untersucht wurde, um die Daten in den [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats) für den [RTP](/de/docs/Glossary/RTP)-Stream zu erzeugen.

`RTCRemoteInboundRtpStreamStats`- und `RTCCodecStats`-Objekte werden durch Iteration des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) korreliert, um die Statistikobjekte zu finden, bei denen `RTCRemoteInboundRtpStreamStats.codecId` gleich [`RTCCodecStats.id`](/de/docs/Web/API/RTCCodecStats/id) ist.

## Wert

Ein String, der die [`id`](/de/docs/Web/API/RTCCodecStats/id) des Objekts enthält, das untersucht wurde, um das zugehörige [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekt für diesen RTP-Stream zu erzeugen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

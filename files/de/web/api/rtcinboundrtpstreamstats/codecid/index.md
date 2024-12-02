---
title: "RTCInboundRtpStreamStats: codecId-Eigenschaft"
short-title: codecId
slug: Web/API/RTCInboundRtpStreamStats/codecId
l10n:
  sourceCommit: 03b4a9d11d37c9d0be0804669467eadf2d72f2a3
---

{{APIRef("WebRTC")}}

Die **`codecId`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs ist ein String, der das Objekt eindeutig identifiziert, das untersucht wurde, um die Daten im [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats) für den {{Glossary("RTP", "RTP")}}-Stream zu erzeugen.

`RTCInboundRtpStreamStats`- und `RTCCodecStats`-Objekte werden korreliert, indem über den [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) iteriert wird, um die Statistikobjekte zu finden, bei denen `RTCInboundRtpStreamStats.codecId` gleich [`RTCCodecStats.id`](/de/docs/Web/API/RTCCodecStats/id) ist.

## Wert

Ein String, der die [`id`](/de/docs/Web/API/RTCCodecStats/id) des Objekts enthält, das untersucht wurde, um das [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekt zu erzeugen, das mit diesem RTP-Stream verbunden ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

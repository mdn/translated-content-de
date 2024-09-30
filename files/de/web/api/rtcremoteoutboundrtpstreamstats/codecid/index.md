---
title: "RTCRemoteOutboundRtpStreamStats: codecId-Eigenschaft"
short-title: codecId
slug: Web/API/RTCRemoteOutboundRtpStreamStats/codecId
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`codecId`**-Eigenschaft des [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Wörterbuchs ist ein String, der das Objekt, das inspiziert wurde, um die Daten in den [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats) für den [RTP](/de/docs/Glossary/RTP)-Stream zu erzeugen, eindeutig identifiziert.

`RTCRemoteOutboundRtpStreamStats`- und `RTCCodecStats`-Objekte werden korreliert, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen wird, um die Statistikobjekte zu finden, bei denen `RTCRemoteOutboundRtpStreamStats.codecId` gleich [`RTCCodecStats.id`](/de/docs/Web/API/RTCCodecStats/id) ist.

## Wert

Ein String, der die [`id`](/de/docs/Web/API/RTCCodecStats/id) des Objekts enthält, das inspiziert wurde, um das mit diesem RTP-Stream verbundene [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekt zu erzeugen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

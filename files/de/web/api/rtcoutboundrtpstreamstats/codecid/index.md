---
title: "RTCOutboundRtpStreamStats: codecId-Eigenschaft"
short-title: codecId
slug: Web/API/RTCOutboundRtpStreamStats/codecId
l10n:
  sourceCommit: 03b4a9d11d37c9d0be0804669467eadf2d72f2a3
---

{{APIRef("WebRTC")}}

Die **`codecId`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist ein String, der das Objekt, das inspiziert wurde, um die Daten in den [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats) für den {{Glossary("RTP", "RTP")}}-Stream zu erzeugen, eindeutig identifiziert.

`RTCOutboundRtpStreamStats`- und `RTCCodecStats`-Objekte werden korreliert, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchiteriert wird, um die Statistikobjekte zu finden, bei denen `RTCOutboundRtpStreamStats.codecId` gleich [`RTCCodecStats.id`](/de/docs/Web/API/RTCCodecStats/id) ist.

## Wert

Ein String, der die [`id`](/de/docs/Web/API/RTCCodecStats/id) des Objekts enthält, das inspiziert wurde, um das [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekt zu erzeugen, das mit diesem RTP-Stream verbunden ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

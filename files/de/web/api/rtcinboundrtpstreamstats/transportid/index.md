---
title: "RTCInboundRtpStreamStats: transportId-Eigenschaft"
short-title: transportId
slug: Web/API/RTCInboundRtpStreamStats/transportId
l10n:
  sourceCommit: 03b4a9d11d37c9d0be0804669467eadf2d72f2a3
---

{{APIRef("WebRTC")}}

Die **`transportId`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats) Wörterbuchs ist ein String, der das zugehörige [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Statistikobjekt für den zugrunde liegenden Transport dieses RTP-Streams eindeutig identifiziert.

`RTCInboundRtpStreamStats`- und `RTCTransportStats`-Objekte werden korreliert, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen wird, um die Statistikobjekte zu finden, bei denen `RTCInboundRtpStreamStats.transportId` gleich [`RTCTransportStats.id`](/de/docs/Web/API/RTCTransportStats/id) ist.

## Wert

Ein String, der die [`id`](/de/docs/Web/API/RTCTransportStats/id) des Objekts enthält, das inspiziert wurde, um das [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt zu erzeugen, das mit diesem RTP-Stream verknüpft ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

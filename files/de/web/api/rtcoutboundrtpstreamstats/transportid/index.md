---
title: "RTCOutboundRtpStreamStats: transportId-Eigenschaft"
short-title: transportId
slug: Web/API/RTCOutboundRtpStreamStats/transportId
l10n:
  sourceCommit: 03b4a9d11d37c9d0be0804669467eadf2d72f2a3
---

{{APIRef("WebRTC")}}

Die **`transportId`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist eine Zeichenkette, die das zugehörige [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Statistikobjekt für den zugrunde liegenden Transport dieses RTP-Streams eindeutig identifiziert.

`RTCOutboundRtpStreamStats`- und `RTCTransportStats`-Objekte werden durch Iteration über den [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) korreliert, um die Statistikobjekte zu finden, bei denen `RTCOutboundRtpStreamStats.transportId` gleich dem [`RTCTransportStats.id`](/de/docs/Web/API/RTCTransportStats/id) ist.

## Wert

Eine Zeichenkette, die die [`id`](/de/docs/Web/API/RTCTransportStats/id) des Objekts enthält, das inspiziert wurde, um das [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt zu erzeugen, das mit diesem RTP-Stream verknüpft ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

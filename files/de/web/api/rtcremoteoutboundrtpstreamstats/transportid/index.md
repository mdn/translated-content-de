---
title: "RTCRemoteOutboundRtpStreamStats: transportId-Eigenschaft"
short-title: transportId
slug: Web/API/RTCRemoteOutboundRtpStreamStats/transportId
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`transportId`**-Eigenschaft des [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats) Wörterbuchs ist ein String, der das zugehörige [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) Statistikobjekt für den zugrunde liegenden Transport dieses RTP-Streams eindeutig identifiziert.

`RTCRemoteOutboundRtpStreamStats` und `RTCTransportStats` Objekte werden korreliert, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) iteriert wird, um die Statistikobjekte zu finden, bei denen `RTCRemoteOutboundRtpStreamStats.transportId` gleich [`RTCTransportStats.id`](/de/docs/Web/API/RTCTransportStats/id) ist.

## Wert

Ein String, der die [`id`](/de/docs/Web/API/RTCTransportStats/id) des Objekts enthält, das untersucht wurde, um das zugehörige [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) Objekt für diesen RTP-Stream zu erzeugen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

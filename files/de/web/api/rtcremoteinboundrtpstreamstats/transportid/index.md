---
title: "RTCRemoteInboundRtpStreamStats: transportId-Eigenschaft"
short-title: transportId
slug: Web/API/RTCRemoteInboundRtpStreamStats/transportId
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`transportId`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Dictionaries ist ein String, der das zugehörige [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Statistikobjekt für den zugrunde liegenden Transport dieses RTP-Streams eindeutig identifiziert.

`RTCRemoteInboundRtpStreamStats` und `RTCTransportStats`-Objekte werden durch Iteration des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) korreliert, um die Statistikobjekte zu finden, bei denen `RTCRemoteInboundRtpStreamStats.transportId` gleich [`RTCTransportStats.id`](/de/docs/Web/API/RTCTransportStats/id) ist.

## Wert

Ein String, der die [`id`](/de/docs/Web/API/RTCTransportStats/id) des Objekts enthält, das untersucht wurde, um das [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt zu erzeugen, das mit diesem RTP-Stream verbunden ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

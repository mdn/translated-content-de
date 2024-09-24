---
title: "RTCRemoteOutboundRtpStreamStats: Eigenschaft transportId"
short-title: transportId
slug: Web/API/RTCRemoteOutboundRtpStreamStats/transportId
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`transportId`**-Eigenschaft des {{domxref("RTCRemoteOutboundRtpStreamStats")}}-Wörterbuchs ist ein String, der das zugehörige {{domxref("RTCTransportStats")}}-Statistikobjekt für den zugrunde liegenden Transport dieses RTP-Streams eindeutig identifiziert.

`RTCRemoteOutboundRtpStreamStats`- und `RTCTransportStats`-Objekte werden korreliert, indem im {{domxref("RTCStatsReport")}} iteriert wird, um die Statistikobjekte zu finden, bei denen `RTCRemoteOutboundRtpStreamStats.transportId` gleich {{domxref("RTCTransportStats.id")}} ist.

## Wert

Ein String, der die {{domxref("RTCTransportStats.id","ID")}} des Objekts enthält, das untersucht wurde, um das mit diesem RTP-Stream verbundene {{domxref("RTCTransportStats")}}-Objekt zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

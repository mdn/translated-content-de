---
title: "RTCRemoteInboundRtpStreamStats: transportId-Eigenschaft"
short-title: transportId
slug: Web/API/RTCRemoteInboundRtpStreamStats/transportId
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`transportId`**-Eigenschaft des {{domxref("RTCRemoteInboundRtpStreamStats")}} Wörterbuchs ist ein String, der das zugehörige {{domxref("RTCTransportStats")}} Statistikobjekt eindeutig identifiziert, das für den zugrunde liegenden Transport dieses RTP-Streams verantwortlich ist.

`RTCRemoteInboundRtpStreamStats` und `RTCTransportStats` Objekte werden korreliert, indem der {{domxref("RTCStatsReport")}} durchlaufen wird, um die Statistikobjekte zu finden, bei denen `RTCRemoteInboundRtpStreamStats.transportId` gleich {{domxref("RTCTransportStats.id")}} ist.

## Wert

Ein String, der die {{domxref("RTCTransportStats.id","id")}} des Objekts enthält, das untersucht wurde, um das mit diesem RTP-Stream verbundene {{domxref("RTCTransportStats")}} Objekt zu erzeugen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: "RTCVideoSourceStats: type-Eigenschaft"
short-title: type
slug: Web/API/RTCVideoSourceStats/type
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des {{domxref("RTCVideoSourceStats")}}-Wörterbuchs ist ein String mit dem Wert `media-source`.

Der Typ `media-source` identifiziert den Typ der Statistik entweder als {{domxref("RTCAudioSourceStats")}} oder als {{domxref("RTCVideoSourceStats")}}, wenn man die {{domxref("RTCStatsReport")}}-Objekte durchgeht, die von {{domxref("RTCRtpSender.getStats()")}} oder {{domxref("RTCPeerConnection.getStats()")}} zurückgegeben werden.
Der Statistiktyp kann weiter differenziert werden, indem man das Attribut {{domxref("RTCVideoSourceStats.kind", "kind")}} verwendet, das für `RTCVideoSourceStats` den Wert `video` haben wird.

## Wert

Ein String mit dem Wert `media-source`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

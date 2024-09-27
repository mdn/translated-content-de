---
title: "RTCVideoSourceStats: type-Eigenschaft"
short-title: type
slug: Web/API/RTCVideoSourceStats/type
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats)-Wörterbuchs ist ein String mit dem Wert `media-source`.

Der Typ `media-source` identifiziert die Art der Statistik entweder als [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats) oder [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats) beim Durchlaufen des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), das von [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) oder [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird. Die Art der Statistik kann weiter unterschieden werden mit Hilfe des [`kind`](/de/docs/Web/API/RTCVideoSourceStats/kind), das für `RTCVideoSourceStats` `video` sein wird.

## Wert

Ein String mit dem Wert `media-source`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

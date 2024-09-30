---
title: "RTCAudioSourceStats: Eigenschaft type"
short-title: type
slug: Web/API/RTCAudioSourceStats/type
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats)-Wörterbuchs ist ein String mit dem Wert `media-source`.

Der Typ `media-source` identifiziert die Art der Statistik entweder als [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats) oder [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats) beim Durchlaufen des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), das von [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) oder [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird.
Die Art der Statistiken kann weiter differenziert werden durch die Verwendung von [`kind`](/de/docs/Web/API/RTCAudioSourceStats/kind), das für `RTCAudioSourceStats` `audio` sein wird.

## Wert

Ein String mit dem Wert `media-source`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

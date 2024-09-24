---
title: "RTCAudioSourceStats: Eigenschaft type"
short-title: type
slug: Web/API/RTCAudioSourceStats/type
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des {{domxref("RTCAudioSourceStats")}}-Dictionaries ist ein String mit dem Wert `media-source`.

Der Typ `media-source` identifiziert die Art der Statistiken entweder als {{domxref("RTCAudioSourceStats")}} oder {{domxref("RTCVideoSourceStats")}}, wenn der {{domxref("RTCStatsReport")}} durchlaufen wird, der von {{domxref("RTCRtpSender.getStats()")}} oder {{domxref("RTCPeerConnection.getStats()")}} zurückgegeben wird. Die Art der Statistiken kann weiter unterschieden werden, indem die {{domxref("RTCAudioSourceStats.kind", "kind")}}-Eigenschaft verwendet wird, die für `RTCAudioSourceStats` `audio` sein wird.

## Wert

Ein String mit dem Wert `media-source`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

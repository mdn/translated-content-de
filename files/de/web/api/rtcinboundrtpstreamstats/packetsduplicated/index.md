---
title: "RTCInboundRtpStreamStats: Eigenschaft packetsDuplicated"
short-title: packetsDuplicated
slug: Web/API/RTCInboundRtpStreamStats/packetsDuplicated
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die **`packetsDuplicated`**-Eigenschaft des {{domxref("RTCInboundRtpStreamStats")}}-Wörterbuchs gibt die Gesamtanzahl der Pakete an, die verworfen wurden, weil sie Duplikate zuvor empfangener Pakete waren.

Diese Pakete werden nicht von der {{domxref("RTCInboundRtpStreamStats.packetsDiscarded", "packetsDiscarded")}}-Eigenschaft erfasst.

## Wert

Ein ganzzahliger Wert, der angibt, wie viele doppelte Pakete bisher vom lokalen Ende dieses RTP-Streams empfangen wurden. Diese doppelten Pakete sind nicht in der {{domxref("RTCInboundRtpStreamStats.packetsDiscarded", "packetsDiscarded")}}-Eigenschaft enthalten.

## Anwendungshinweise

Doppelte Pakete werden erkannt, wenn ein Paket die gleiche RTP-Sequenznummer wie ein anderes Paket hat, das bereits verarbeitet wurde. Jedes Mal, wenn ein Paket wiederholt wird, wird der Wert von `packetsDuplicated` erhöht, auch wenn dasselbe Paket mehr als zweimal empfangen wird.

Sie können eine genauere Erfassung der verlorenen Pakete im Stream erhalten, indem Sie `packetsDuplicated` zu {{domxref("RTCInboundRtpStreamStats.packetsLost", "packetsLost")}} addieren. Der resultierende Wert wird positiv sein, obwohl er nicht mit der in {{RFC(3660)}} berechneten Zählung übereinstimmen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

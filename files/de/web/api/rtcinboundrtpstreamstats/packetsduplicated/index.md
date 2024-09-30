---
title: "RTCInboundRtpStreamStats: packetsDuplicated Eigenschaft"
short-title: packetsDuplicated
slug: Web/API/RTCInboundRtpStreamStats/packetsDuplicated
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die **`packetsDuplicated`** Eigenschaft
des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats) Wörterbuchs gibt die Gesamtanzahl der Pakete an, die verworfen wurden, weil sie Duplikate von zuvor empfangenen Paketen waren.

Diese Pakete werden nicht von der
[`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded) Eigenschaft gezählt.

## Wert

Ein ganzzahliger Wert, der angibt, wie viele doppelte Pakete bisher vom lokalen Ende dieses RTP-Streams empfangen wurden. Diese doppelten Pakete sind in der
[`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded) Eigenschaft nicht enthalten.

## Nutzungshinweise

Doppelte Pakete werden erkannt, wenn ein Paket die gleiche RTP-Sequenznummer wie ein anderes zuvor verarbeitetes Paket hat. Jedes Mal, wenn ein Paket wiederholt wird, wird der Wert von `packetsDuplicated` erhöht, selbst wenn dasselbe Paket mehr als zweimal empfangen wird.

Sie können eine genauere Erfassung der Anzahl verlorener Pakete im Stream erhalten, indem Sie `packetsDuplicated` zu
[`packetsLost`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsLost) hinzufügen. Der resultierende Wert wird positiv sein, auch wenn er nicht mit der in {{RFC(3660)}} berechneten Anzahl übereinstimmt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

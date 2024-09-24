---
title: "RTCOutboundRtpStreamStats: firCount-Eigenschaft"
short-title: firCount
slug: Web/API/RTCOutboundRtpStreamStats/firCount
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die **`firCount`**-Eigenschaft des {{domxref("RTCOutboundRtpStreamStats")}}-Wörterbuchs gibt die Anzahl der **Full Intra Request** (**FIR**) an, die der entfernte {{domxref("RTCRtpReceiver")}} an diesen {{domxref("RTCRtpSender")}} gesendet hat.

Ein FIR-Paket wird gesendet, wenn der Empfänger feststellt, dass er zurückgefallen ist und Frames überspringen muss, um aufzuholen; der Sender sollte als Antwort darauf einen vollständigen Frame anstelle eines Delta-Frames senden.

Verfügbar nur für Videomedien.

## Wert

Ein Integer-Wert, der angibt, wie viele FIR-Pakete vom Sender während der aktuellen Verbindung empfangen wurden. Diese Statistik ist nur für Videospuren verfügbar.

Der Empfänger sendet ein FIR-Paket an den Sender, sobald er zurückfällt oder Pakete verliert und aufgrund der verlorenen Daten den eingehenden Stream nicht mehr dekodieren kann. Dies teilt dem Sender mit, dass er einen vollständigen Frame anstelle eines Delta-Frames senden soll, damit der Empfänger aufholen kann.

Je höher `firCount` ist, desto häufiger wurden Frames verworfen, was ein Hinweis darauf sein kann, dass die Bitrate des Mediums zu hoch für die verfügbare Bandbreite ist oder dass das empfangende Gerät überlastet ist und daher nicht in der Lage ist, die eingehenden Daten zu verarbeiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

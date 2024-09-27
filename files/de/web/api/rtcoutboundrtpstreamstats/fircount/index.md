---
title: "RTCOutboundRtpStreamStats: firCount-Eigenschaft"
short-title: firCount
slug: Web/API/RTCOutboundRtpStreamStats/firCount
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die **`firCount`**-Eigenschaft des
[`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs gibt die Anzahl der **Full Intra Request** (**FIR**) an, die der entfernte
[`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) an diesen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendet hat.

Ein FIR-Paket wird gesendet, wenn der Empfänger feststellt, dass er hinterherhinkt und Frames überspringen muss, um aufzuholen; der Sender sollte darauf reagieren, indem er ein vollständiges Frame anstelle eines Delta-Frames sendet.

Nur bei Videomedien verfügbar.

## Wert

Ein ganzzahliger Wert, der angibt, wie viele FIR-Pakete der Sender während der aktuellen Verbindung empfangen hat. Diese Statistik ist nur für Videospuren verfügbar.

Der Empfänger sendet ein FIR-Paket an den Sender, wann immer er zurückfällt oder Pakete verliert und den eingehenden Stream aufgrund der verlorenen Daten nicht mehr dekodieren kann. Dies teilt dem Sender mit, dass er ein vollständiges Frame anstelle eines Delta-Frames senden soll, damit der Empfänger aufholen kann.

Je höher `firCount` ist, desto häufiger wurden Frames verworfen, was darauf hinweisen kann, dass die Bitrate der Medien zu hoch für die verfügbare Bandbreite ist oder dass das Empfangsgerät überlastet ist und daher nicht in der Lage ist, die eingehenden Daten zu verarbeiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

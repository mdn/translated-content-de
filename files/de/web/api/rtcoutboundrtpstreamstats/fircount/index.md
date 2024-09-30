---
title: "RTCOutboundRtpStreamStats: firCount-Eigenschaft"
short-title: firCount
slug: Web/API/RTCOutboundRtpStreamStats/firCount
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die **`firCount`**-Eigenschaft des
[`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs gibt die Anzahl der
**Full Intra Request** (**FIR**) an, die der entfernte
[`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) an diesen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendet hat.

Ein FIR-Paket wird gesendet, wenn der Empfänger feststellt, dass er ins Hintertreffen geraten ist und Frames überspringen muss, um aufzuholen; der Sender sollte darauf reagieren, indem er einen vollständigen Frame statt eines Delta-Frames sendet.

Verfügbar nur für Videomedien.

## Wert

Ein ganzzahliger Wert, der angibt, wie viele FIR-Pakete vom Sender während der aktuellen Verbindung empfangen wurden. Diese Statistik ist nur für Videospuren verfügbar.

Der Empfänger sendet ein FIR-Paket an den Sender, wenn er ins Hintertreffen gerät oder Pakete verliert und den eingehenden Stream aufgrund der verlorenen Daten nicht mehr dekodieren kann. Dies teilt dem Sender mit, dass er einen vollständigen Frame anstelle eines Delta-Frames senden soll, damit der Empfänger aufholen kann.

Je höher `firCount` ist, desto häufiger wurden Frames fallen gelassen. Dies kann ein Hinweis darauf sein, dass die Bitrate der Medien für die verfügbare Bandbreite zu hoch ist oder dass das empfangende Gerät überlastet ist und daher die eingehenden Daten nicht verarbeiten kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

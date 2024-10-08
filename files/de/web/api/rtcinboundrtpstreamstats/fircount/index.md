---
title: "RTCInboundRtpStreamStats: firCount-Eigenschaft"
short-title: firCount
slug: Web/API/RTCInboundRtpStreamStats/firCount
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die **`firCount`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt an, wie viele **Full Intra Request** (**FIR**)-Pakete vom Empfänger an den Sender gesendet wurden.

Der Empfänger sendet ein FIR-Paket, wenn der Stream zurückfällt und Frames überspringen muss, um aufzuholen.

## Wert

Ein ganzzahliger Wert, der angibt, wie viele FIR-Pakete vom Sender während der aktuellen Verbindung empfangen wurden. Diese Statistik ist nur für Videospuren verfügbar.

Der Empfänger sendet ein FIR-Paket an den Sender, wenn er zurückfällt oder Pakete verliert und den eingehenden Stream aufgrund der verlorenen Daten nicht mehr decodieren kann. Dies teilt dem Sender mit, ein vollständiges Frame anstelle eines Delta-Frames zu senden, damit der Empfänger aufholen kann.

Je höher `firCount` ist, desto häufiger wurden Frames fallengelassen, was ein Hinweis darauf sein kann, dass die Bitrate der Medien zu hoch für die verfügbare Bandbreite ist oder dass das empfangende Gerät überlastet ist und daher nicht in der Lage ist, die eingehenden Daten zu verarbeiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

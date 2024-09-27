---
title: "RTCInboundRtpStreamStats: firCount-Eigenschaft"
short-title: firCount
slug: Web/API/RTCInboundRtpStreamStats/firCount
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die **`firCount`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs zeigt an, wie viele **Full Intra Request** (**FIR**)-Pakete vom Empfänger zum Sender gesendet wurden.

Der Empfänger sendet ein FIR-Paket, wenn der Stream in Rückstand gerät und Frames übersprungen werden müssen, um wieder aufzuholen.

## Wert

Ein ganzzahliger Wert, der angibt, wie viele FIR-Pakete während der aktuellen Verbindung vom Sender empfangen wurden. Diese Statistik ist nur für Videospuren verfügbar.

Der Empfänger sendet ein FIR-Paket an den Sender, wenn er in Rückstand gerät oder Pakete verliert und den eingehenden Stream aufgrund der verlorenen Daten nicht mehr dekodieren kann. Dies signalisiert dem Sender, ein vollständiges Frame anstelle eines Delta-Frames zu senden, damit der Empfänger wieder aufholen kann.

Je höher `firCount` ist, desto häufiger wurden Frames verworfen, was darauf hinweisen kann, dass die Bitrate der Medien zu hoch für die verfügbare Bandbreite ist oder dass das empfangende Gerät überfordert ist und daher die eingehenden Daten nicht verarbeiten kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

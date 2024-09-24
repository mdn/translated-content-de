---
title: "RTCRtpStreamStats: Eigenschaft firCount"
short-title: firCount
slug: Web/API/RTCRtpStreamStats/firCount
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

Die **`firCount`**-Eigenschaft des
{{domxref("RTCRtpStreamStats")}}-Wörterbuchs gibt an, wie viele **Full Intra Request** (**FIR**)-Pakete vom Empfänger an den Sender gesendet wurden.

Dies ist ein Maß dafür, wie oft der Stream in Rückstand gerät und Frames überspringen muss, um aufzuholen.

## Wert

Ein ganzzahliger Wert, der angibt, wie viele FIR-Pakete während der aktuellen Verbindung vom Sender empfangen wurden. Dieser Wert ist nur bei Empfängern für Videospuren verfügbar.

Der Empfänger sendet ein FIR-Paket an den Sender, sobald er in Rückstand gerät oder Pakete verliert und den eingehenden Stream aufgrund der verlorenen Daten nicht mehr dekodieren kann. Dies fordert den Sender auf, ein vollständiges Bild anstelle eines Delta-Frames zu senden, sodass der Empfänger wieder aufholen kann.

Je höher `firCount` ist, desto häufiger wurden Frames ausgelassen, was ein Hinweis darauf sein kann, dass die Bitrate der Medien zu hoch für die verfügbare Bandbreite ist oder dass das empfangende Gerät überlastet ist und daher die eingehenden Daten nicht verarbeiten kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

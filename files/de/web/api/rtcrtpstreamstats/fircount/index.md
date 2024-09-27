---
title: "RTCRtpStreamStats: firCount-Eigenschaft"
short-title: firCount
slug: Web/API/RTCRtpStreamStats/firCount
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

Die **`firCount`**-Eigenschaft des
[`RTCRtpStreamStats`](/de/docs/Web/API/RTCRtpStreamStats)-Wörterbuchs gibt an, wie viele **Full Intra Request** (**FIR**)-Pakete vom Empfänger an den Sender gesendet wurden.

Dies ist ein Maß dafür, wie oft der Stream zurückfällt und Frames übersprungen werden müssen, um wieder aufzuholen.

## Wert

Ein ganzzahliger Wert, der angibt, wie viele FIR-Pakete vom Sender während der aktuellen Verbindung empfangen wurden. Dieser Wert ist nur auf Empfängern für Videospuren verfügbar.

Der Empfänger sendet ein FIR-Paket an den Sender, wenn er zurückfällt oder Pakete verliert und den eingehenden Stream aufgrund der verloren gegangenen Daten nicht länger decodieren kann. Dies teilt dem Sender mit, ein vollständiges Bild statt eines Delta-Bilds zu senden, damit der Empfänger wieder aufholen kann.

Je höher `firCount` ist, desto häufiger wurden Frames fallen gelassen. Dies kann darauf hindeuten, dass die Bitrate des Mediums zu hoch für die verfügbare Bandbreite ist oder dass das empfangende Gerät überlastet ist und daher nicht in der Lage ist, die eingehenden Daten zu verarbeiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

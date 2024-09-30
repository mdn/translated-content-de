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

Dies ist ein Maß dafür, wie oft der Stream hinterherhinkt und Frames überspringen muss, um aufzuholen.

## Wert

Ein ganzzahliger Wert, der angibt, wie viele FIR-Pakete vom Sender während der aktuellen Verbindung empfangen wurden. Dieser Wert ist nur bei Empfängern von Videostreams verfügbar.

Der Empfänger sendet ein FIR-Paket an den Sender, wenn er hinterherhinkt oder Pakete verliert und den eingehenden Stream aufgrund der verlorenen Daten nicht mehr decodieren kann. Dies teilt dem Sender mit, ein Vollbild anstelle eines Delta-Frames zu senden, damit der Empfänger aufholen kann.

Je höher der `firCount` ist, desto häufiger wurden Frames verworfen. Dies kann darauf hindeuten, dass die Bitrate des Mediums zu hoch für die verfügbare Bandbreite ist oder dass das empfangende Gerät überlastet ist und daher nicht in der Lage ist, die eingehenden Daten zu verarbeiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

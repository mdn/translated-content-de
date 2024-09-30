---
title: "RTCIceCandidatePairStats: availableIncomingBitrate Eigenschaft"
short-title: availableIncomingBitrate
slug: Web/API/RTCIceCandidatePairStats/availableIncomingBitrate
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`availableIncomingBitrate`** des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) gibt einen Wert zurück, der die verfügbare eingehende Kapazität der Netzwerkverbindung, die durch das Kandidatenpaar repräsentiert wird, anzeigt. Je höher der Wert, desto mehr Bandbreite kann für eingehende Daten angenommen werden.

Die ausgehende verfügbare Bitrate kann über [`availableoutgoingBitrate`](/de/docs/Web/API/RTCIceCandidatePairStats/availableoutgoingBitrate) abgerufen werden.

## Syntax

```js-nolint
availableIncomingBitrate = rtcIceCandidatePairStats.availableIncomingBitrate
```

### Wert

Ein Fließkommawert, der die Menge der verfügbaren Bandbreite für eingehende Daten auf der Netzwerkverbindung beschreibt, die durch das `RTCIceCandidatePair` beschrieben wird. Der Wert wird in Bit pro Sekunde angegeben und über ein Intervall von einer Sekunde berechnet.

Der zurückgegebene Wert wird berechnet, indem die verfügbare Bitrate für jeden [RTP](/de/docs/Glossary/RTP)-Stream zusammengezählt wird, der die durch dieses Kandidatenpaar beschriebene Verbindung nutzt. Der zurückgegebene Wert berücksichtigt nicht den Overhead, der durch zugrunde liegende Protokolle wie IP, UDP oder TCP verursacht wird.

> [!NOTE]
> Der zurückgegebene Wert wird mit einer Methode berechnet, die dem Transport Independent Application Specific Maximum (TIAS) ähnlich, aber nicht identisch ist, wie in {{RFC(3890, "", "6.2")}} beschrieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

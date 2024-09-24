---
title: "RTCIceCandidatePairStats: availableIncomingBitrate-Eigenschaft"
short-title: availableIncomingBitrate
slug: Web/API/RTCIceCandidatePairStats/availableIncomingBitrate
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`availableIncomingBitrate`** von {{domxref("RTCIceCandidatePairStats")}} gibt einen Wert zurück, der auf die verfügbare eingehende Kapazität der Netzwerkverbindung hinweist, die durch das Kandidatenpaar repräsentiert wird. Je höher der Wert, desto mehr Bandbreite können Sie für eingehende Daten annehmen.

Sie können die ausgehende verfügbare Bitrate von {{domxref("RTCIceCandidatePairStats.availableoutgoingBitrate", "availableoutgoingBitrate")}} erhalten.

## Syntax

```js-nolint
availableIncomingBitrate = rtcIceCandidatePairStats.availableIncomingBitrate
```

### Wert

Ein Gleitkommawert, der die Menge an verfügbarer Bandbreite für eingehende Daten auf der Netzwerkverbindung beschreibt, die durch das `RTCIceCandidatePair` beschrieben wird. Der Wert wird in Bit pro Sekunde angegeben und über ein Intervall von einer Sekunde berechnet.

Der zurückgegebene Wert wird berechnet, indem die verfügbare Bitrate für jeden {{Glossary("RTP")}}-Stream addiert wird, der die durch dieses Kandidatenpaar beschriebene Verbindung verwendet. Der zurückgegebene Wert berücksichtigt nicht den Overhead, der durch zugrunde liegende Protokolle wie IP, UDP oder TCP verursacht wird.

> [!NOTE]
> Der zurückgegebene Wert wird nach einer Methode berechnet, die der Transport Independent Application Specific Maximum (TIAS) ähnelt, jedoch nicht identisch ist, wie in {{RFC(3890, "", "6.2")}} beschrieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

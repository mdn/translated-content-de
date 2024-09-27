---
title: "RTCIceCandidatePairStats: availableIncomingBitrate Eigenschaft"
short-title: availableIncomingBitrate
slug: Web/API/RTCIceCandidatePairStats/availableIncomingBitrate
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) Eigenschaft **`availableIncomingBitrate`** gibt einen Wert zurück, der die verfügbare eingehende Kapazität der durch das Kandidatenpaar repräsentierten Netzwerkverbindung anzeigt. Je höher der Wert, desto mehr Bandbreite können Sie für eingehende Daten annehmen.

Sie können die ausgehende verfügbare Bitrate von [`availableOutgoingBitrate`](/de/docs/Web/API/RTCIceCandidatePairStats/availableoutgoingBitrate) erhalten.

## Syntax

```js-nolint
availableIncomingBitrate = rtcIceCandidatePairStats.availableIncomingBitrate
```

### Wert

Ein Gleitkommawert, der die Menge an verfügbarer Bandbreite für eingehende Daten auf der durch den `RTCIceCandidatePair` beschriebenen Netzwerkverbindung annähert. Der Wert wird in Bits pro Sekunde angegeben und über ein Intervall von 1 Sekunde berechnet.

Der zurückgegebene Wert wird berechnet, indem die verfügbare Bitrate für jeden [RTP](/de/docs/Glossary/RTP)-Stream addiert wird, der die durch dieses Kandidatenpaar beschriebene Verbindung nutzt. Der zurückgegebene Wert berücksichtigt nicht den Overhead, der durch zugrunde liegende Protokolle wie IP, UDP oder TCP eingeführt wird.

> [!NOTE]
> Der zurückgegebene Wert wird unter Verwendung einer Methode berechnet, die der Transport Independent Application Specific Maximum (TIAS) ähnelt—jedoch nicht identisch ist—, wie in {{RFC(3890, "", "6.2")}} beschrieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

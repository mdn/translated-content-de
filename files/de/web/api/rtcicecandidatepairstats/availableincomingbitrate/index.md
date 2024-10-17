---
title: "RTCIceCandidatePairStats: availableIncomingBitrate-Eigenschaft"
short-title: availableIncomingBitrate
slug: Web/API/RTCIceCandidatePairStats/availableIncomingBitrate
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("WebRTC")}}

Die [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Eigenschaft **`availableIncomingBitrate`** gibt einen Wert zurück, der die verfügbare Eingabekapazität der Netzverbindung darstellt, die durch das Kandidatenpaar repräsentiert wird. Je höher der Wert, desto mehr Bandbreite steht für eingehende Daten zur Verfügung.

Sie können die verfügbare ausgehende Bitrate von [`availableOutgoingBitrate`](/de/docs/Web/API/RTCIceCandidatePairStats/availableOutgoingBitrate) abrufen.

## Syntax

```js-nolint
availableIncomingBitrate = rtcIceCandidatePairStats.availableIncomingBitrate
```

### Wert

Ein Gleitkommawert, der die Menge der verfügbaren Bandbreite für eingehende Daten auf der Netzverbindung beschreibt, die durch das `RTCIceCandidatePair` beschrieben wird. Der Wert wird in Bits pro Sekunde angegeben und über ein Intervall von 1 Sekunde berechnet.

Der zurückgegebene Wert wird berechnet, indem die verfügbare Bitrate für jeden {{Glossary("RTP", "RTP")}}-Stream, der die durch dieses Kandidatenpaar beschriebene Verbindung nutzt, summiert wird. Der zurückgegebene Wert berücksichtigt nicht den Overhead, der durch zugrunde liegende Protokolle wie IP, UDP oder TCP eingeführt wird.

> [!NOTE]
> Der zurückgegebene Wert wird mit einer Methode berechnet, die ähnlich, aber nicht identisch mit dem Transport Independent Application Specific Maximum (TIAS) ist, das in {{RFC(3890, "", "6.2")}} beschrieben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

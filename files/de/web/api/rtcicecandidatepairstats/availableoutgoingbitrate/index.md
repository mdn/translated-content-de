---
title: "RTCIceCandidatePairStats: Eigenschaft availableOutgoingBitrate"
short-title: availableOutgoingBitrate
slug: Web/API/RTCIceCandidatePairStats/availableOutgoingBitrate
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`availableOutgoingBitrate`** von [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) gibt einen Wert zurück, der die verfügbare Ausgangskapazität der Netzwerkverbindung darstellt, die durch das Kandidatenpaar repräsentiert wird. Je höher der Wert, desto mehr Bandbreite kann für ausgehende Daten angenommen werden.

Den verfügbaren eingehenden Bitratenwert können Sie unter [`availableIncomingBitrate`](/de/docs/Web/API/RTCIceCandidatePairStats/availableIncomingBitrate) abrufen.

## Wert

Ein Gleitkommawert, der die Menge der verfügbaren Bandbreite für ausgehende Daten auf der durch das `RTCIceCandidatePair` beschriebenen Netzwerkverbindung approximiert. Der Wert wird in Bits pro Sekunde angegeben und über ein 1-Sekunden-Intervall berechnet.

Der zurückgegebene Wert ist `undefined` in jeder der folgenden Situationen:

- Die zugrunde liegende Implementierung unterstützt die Berechnung einer senderseitigen Schätzung des ausgehenden Bitratenrahmens nicht.
- Das durch dieses Objekt beschriebene [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair) wurde nie verwendet.
- Das Kandidatenpaar war einmal in Gebrauch, ist es aber nicht mehr.

Der zurückgegebene Wert wird berechnet, indem die verfügbare Bitrate für jeden {{Glossary("RTP", "RTP")}} Stream addiert wird, der die Verbindung verwendet, die durch dieses Kandidatenpaar beschrieben wird. Der zurückgegebene Wert berücksichtigt nicht den Overhead, der durch zugrunde liegende Protokolle wie IP, UDP oder TCP eingeführt wird.

> [!NOTE]
> Der zurückgegebene Wert wird mit einer Methode berechnet, die der Transport Independent Application Specific Maximum (TIAS) ähnlich ist – aber nicht identisch damit – die in {{RFC(3890, "", "6.2")}} beschrieben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

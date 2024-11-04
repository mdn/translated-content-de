---
title: "RTCIceCandidatePairStats: availableIncomingBitrate-Eigenschaft"
short-title: availableIncomingBitrate
slug: Web/API/RTCIceCandidatePairStats/availableIncomingBitrate
l10n:
  sourceCommit: 2c2b213b9a7d391732c94dd35928edf9ff34d8ed
---

{{APIRef("WebRTC")}}

Die **`availableIncomingBitrate`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) Dictionaries zeigt die verfügbare eingehende Kapazität der Netzwerkverbindung an, die durch das Kandidatenpaar repräsentiert wird. Je höher der Wert, desto mehr Bandbreite kann für eingehende Daten angenommen werden.

Die ausgehende verfügbare Bitrate können Sie über [`availableOutgoingBitrate`](/de/docs/Web/API/RTCIceCandidatePairStats/availableOutgoingBitrate) erhalten.

## Wert

Eine Zahl, die die verfügbare Bandbreite für eingehende Daten auf der Netzwerkverbindung, die durch das `RTCIceCandidatePair` beschrieben wird, approximiert.
Der Wert wird in Bit pro Sekunde angegeben und über ein 1-Sekunden-Intervall berechnet.

Der zurückgegebene Wert wird berechnet, indem die verfügbare Bitrate für jeden {{Glossary("RTP", "RTP")}}-Stream addiert wird, der die durch dieses Kandidatenpaar beschriebene Verbindung nutzt. Der zurückgegebene Wert berücksichtigt nicht den durch zugrunde liegende Protokolle eingeführten Overhead, einschließlich IP, UDP oder TCP.

> [!NOTE]
> Der zurückgegebene Wert wird mit einer Methode berechnet, die der Transport Independent Application Specific Maximum (TIAS), beschrieben in {{RFC(3890, "", "6.2")}}, ähnlich ist – aber nicht identisch zu ihr ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: "RTCIceCandidatePairStats: Eigenschaft availableIncomingBitrate"
short-title: availableIncomingBitrate
slug: Web/API/RTCIceCandidatePairStats/availableIncomingBitrate
l10n:
  sourceCommit: 7c03abf6c6abaf0013f6606cae9cb97717415cce
---

{{APIRef("WebRTC")}}

Die **`availableIncomingBitrate`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs gibt die verfügbare eingehende Kapazität der Netzwerkverbindung an, die durch das Kandidatenpaar dargestellt wird.
Je höher der Wert, desto mehr Bandbreite kann für eingehende Daten angenommen werden.

Die ausgehende verfügbare Bitrate kann über [`availableOutgoingBitrate`](/de/docs/Web/API/RTCIceCandidatePairStats/availableOutgoingBitrate) abgerufen werden.

## Wert

Eine Zahl, die die Menge an verfügbarer Bandbreite für eingehende Daten auf der Netzwerkverbindung beschreibt, die durch das `RTCIceCandidatePair` beschrieben wird.
Der Wert wird in Bits pro Sekunde angegeben und über einen 1-Sekunden-Intervall berechnet.

Der zurückgegebene Wert wird berechnet, indem die verfügbare Bitrate für jeden {{Glossary("RTP", "RTP")}}-Stream, der die durch dieses Kandidatenpaar beschriebene Verbindung nutzt, summiert wird.
Der zurückgegebene Wert berücksichtigt dabei nicht den Overhead, der durch die zugrunde liegenden Protokolle wie IP, UDP oder TCP eingeführt wird.

> [!NOTE]
> Der zurückgegebene Wert wird mit einer Methode berechnet, die ähnlich, aber nicht identisch mit dem Transport Independent Application Specific Maximum (TIAS) ist, wie in {{RFC(3890, "", "6.2")}} beschrieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

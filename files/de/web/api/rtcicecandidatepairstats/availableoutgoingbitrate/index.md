---
title: "RTCIceCandidatePairStats: availableOutgoingBitrate-Eigenschaft"
short-title: availableOutgoingBitrate
slug: Web/API/RTCIceCandidatePairStats/availableOutgoingBitrate
l10n:
  sourceCommit: 2c2b213b9a7d391732c94dd35928edf9ff34d8ed
---

{{APIRef("WebRTC")}}

Die **`availableOutgoingBitrate`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs gibt die verfügbare ausgehende Kapazität der durch das Kandidatenpaar dargestellten Netzwerkverbindung an. Je höher der Wert, desto mehr Bandbreite können Sie für ausgehende Daten voraussetzen.

Sie können die verfügbare eingehende Bitrate von [`availableIncomingBitrate`](/de/docs/Web/API/RTCIceCandidatePairStats/availableIncomingBitrate) abrufen.

## Wert

Eine Zahl, die die verfügbare Bandbreite für ausgehende Daten auf der durch das `RTCIceCandidatePair` beschriebenen Netzwerkverbindung approximiert. Der Wert wird in Bits pro Sekunde angegeben und über ein 1-Sekunden-Intervall berechnet.

Der zurückgegebene Wert ist `undefined` in jeder der folgenden Situationen:

- Die zugrunde liegende Implementierung unterstützt die Berechnung einer Sender-seitigen Schätzung der ausgehenden Bitrate nicht.
- Das durch dieses Objekt beschriebene [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair) wurde nie verwendet.
- Das Kandidatenpaar war einst in Gebrauch, ist es aber nicht mehr.

Der zurückgegebene Wert wird berechnet, indem die verfügbare Bitrate für jeden {{Glossary("RTP", "RTP")}}-Stream addiert wird, der die durch dieses Kandidatenpaar beschriebene Verbindung nutzt. Der zurückgegebene Wert berücksichtigt nicht den durch grundlegende Protokolle eingeführten Overhead, einschließlich IP, UDP oder TCP.

> [!NOTE]
> Der zurückgegebene Wert wird mit einer Methode berechnet, die dem Transport Independent Application Specific Maximum (TIAS), wie in {{RFC(3890, "", "6.2")}} beschrieben, ähnlich – aber nicht identisch – ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

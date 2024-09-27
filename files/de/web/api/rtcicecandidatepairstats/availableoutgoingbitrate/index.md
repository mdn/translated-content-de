---
title: "RTCIceCandidatePairStats: availableOutgoingBitrate-Eigenschaft"
short-title: availableOutgoingBitrate
slug: Web/API/RTCIceCandidatePairStats/availableOutgoingBitrate
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Eigenschaft **`availableOutgoingBitrate`** liefert einen Wert, der die verfügbare ausgehende Kapazität der durch das Kandidatenpaar dargestellten Netzwerkverbindung angibt. Je höher der Wert, desto mehr Bandbreite können Sie für ausgehende Daten annehmen.

Sie können die eingehende verfügbare Bitrate von [`availableIncomingBitrate`](/de/docs/Web/API/RTCIceCandidatePairStats/availableIncomingBitrate) abrufen.

## Wert

Ein Gleitkommawert, der die verfügbare Bandbreite für ausgehende Daten auf der durch das `RTCIceCandidatePair` beschriebenen Netzwerkverbindung annähert. Der Wert wird in Bits pro Sekunde angegeben und über ein 1-Sekunden-Intervall berechnet.

Der zurückgegebene Wert ist `undefined` in den folgenden Situationen:

- Die zugrunde liegende Implementierung unterstützt die Berechnung einer Sender-Seite-Schätzung der ausgehenden Bitrate nicht.
- Das durch dieses Objekt beschriebene [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair) wurde nie verwendet.
- Das Kandidatenpaar war einmal in Gebrauch, ist es aber nicht mehr.

Der zurückgegebene Wert wird berechnet, indem die verfügbare Bitrate für jeden [RTP](/de/docs/Glossary/RTP)-Stream addiert wird, der die durch dieses Kandidatenpaar beschriebene Verbindung nutzt. Der zurückgegebene Wert berücksichtigt nicht den durch zugrunde liegende Protokolle, einschließlich IP, UDP oder TCP, eingeführten Overhead.

> [!NOTE]
> Der zurückgegebene Wert wird mit einer Methode berechnet, die der Transport Independent Application Specific Maximum (TIAS), wie in {{RFC(3890, "", "6.2")}} beschrieben, ähnlich ist, aber nicht identisch ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

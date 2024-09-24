---
title: "RTCIceCandidatePairStats: Eigenschaft availableOutgoingBitrate"
short-title: availableOutgoingBitrate
slug: Web/API/RTCIceCandidatePairStats/availableOutgoingBitrate
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`availableOutgoingBitrate`** des {{domxref("RTCIceCandidatePairStats")}} gibt einen Wert zurück, der auf die verfügbare ausgehende Kapazität der Netzwerkverbindung hinweist, die durch das Kandidatenpaar repräsentiert wird. Je höher der Wert ist, desto mehr Bandbreite können Sie für ausgehende Daten annehmen.

Sie können die verfügbare eingehende Bitrate von {{domxref("RTCIceCandidatePairStats.availableIncomingBitrate", "availableIncomingBitrate")}} abrufen.

## Wert

Ein Gleitkommawert, der die Menge der verfügbaren Bandbreite für ausgehende Daten auf der durch das `RTCIceCandidatePair` beschriebenen Netzwerkverbindung annähernd beschreibt. Der Wert wird in Bit pro Sekunde angegeben und über ein Intervall von 1 Sekunde berechnet.

Der zurückgegebene Wert ist `undefined` in jeder der folgenden Situationen:

- Die zugrunde liegende Implementierung unterstützt keine Berechnung einer senderseitigen Schätzung der ausgehenden Bitrate.
- Das durch dieses Objekt beschriebene {{domxref("RTCIceCandidatePair")}} wurde nie verwendet.
- Das Kandidatenpaar war einmal in Gebrauch, ist es aber nicht mehr.

Der zurückgegebene Wert wird berechnet, indem die verfügbare Bitrate für jeden {{Glossary("RTP")}}-Stream aufaddiert wird, der die durch dieses Kandidatenpaar beschriebene Verbindung nutzt. Der zurückgegebene Wert berücksichtigt nicht den Overhead, der durch zugrunde liegende Protokolle wie IP, UDP oder TCP eingeführt wird.

> [!NOTE]
> Der zurückgegebene Wert wird mit einer Methode berechnet, die der Transport Independent Application Specific Maximum (TIAS), beschrieben in {{RFC(3890, "", "6.2")}}, ähnlich ist, aber nicht identisch damit.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

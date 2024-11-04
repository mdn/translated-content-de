---
title: "RTCIceCandidatePairStats: lastPacketReceivedTimestamp-Eigenschaft"
short-title: lastPacketReceivedTimestamp
slug: Web/API/RTCIceCandidatePairStats/lastPacketReceivedTimestamp
l10n:
  sourceCommit: 2c2b213b9a7d391732c94dd35928edf9ff34d8ed
---

{{APIRef("WebRTC")}}

Die **`lastPacketReceivedTimestamp`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs gibt an, zu welchem Zeitpunkt die Verbindung, die durch das Kandidatenpaar beschrieben wird, zuletzt ein Paket empfangen hat.

{{Glossary("STUN", "STUN")}}-Pakete sind nicht enthalten.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitstempel angibt, an dem die Verbindung, beschrieben durch das Kandidatenpaar, zuletzt ein Paket empfangen hat, STUN-Pakete ausgeschlossen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: "RTCIceCandidatePairStats: currentRoundTripTime-Eigenschaft"
short-title: currentRoundTripTime
slug: Web/API/RTCIceCandidatePairStats/currentRoundTripTime
l10n:
  sourceCommit: 2c2b213b9a7d391732c94dd35928edf9ff34d8ed
---

{{APIRef("WebRTC")}}

Die **`currentRoundTripTime`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs gibt die Anzahl der Sekunden an, die benötigt werden, um Daten von diesem Peer zum entfernten Peer und zurück über die Verbindung zu senden, die durch dieses Paar von {{Glossary("ICE", "ICE")}}-Kandidaten beschrieben wird.

## Wert

Eine Zahl, die die Round-Trip-Zeit in Sekunden für die Verbindung angibt, die durch das Paar von Kandidaten beschrieben wird, für das dieses `RTCIceCandidatePairStats`-Objekt Statistiken bietet.

Dieser Wert wird berechnet, indem die Zeit beobachtet wird, die zwischen dem Senden der zuletzt erfolgten {{Glossary("STUN", "STUN")}}-Anfrage an den entfernten Peer und dem Eintreffen der Antwort auf diese Anfrage vergangen ist.
Diese Informationen können sowohl von laufenden STUN-Konnektivitätsüberprüfungen als auch von Anfragen zur Zustimmung stammen, die beim anfänglichen Öffnen der Verbindung gestellt wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

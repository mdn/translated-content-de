---
title: "RTCRemoteOutboundRtpStreamStats: remoteTimestamp-Eigenschaft"
short-title: remoteTimestamp
slug: Web/API/RTCRemoteOutboundRtpStreamStats/remoteTimestamp
l10n:
  sourceCommit: ffe914fa3268cbc0d84648d156d19c7df3a587b9
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`remoteTimestamp`** von [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats) gibt den Zeitstempel auf dem entfernten Peer an, zu dem diese Statistiken gesendet wurden. Dies unterscheidet sich von `timestamp`, der den Zeitpunkt angibt, zu dem die Statistiken lokal erzeugt oder empfangen wurden.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der den Zeitstempel auf dem entfernten Peer angibt, zu dem dieser die Statistiken gesendet hat. Dies unterscheidet sich vom Wert `timestamp`, der die Zeit angibt, zu der die Statistiken vom lokalen Peer erzeugt oder empfangen wurden.

Wenn diese Eigenschaft vorhanden ist, stammt sie aus dem [RTCP](/de/docs/Glossary/RTCP) Sender Report (SR)-Block, der die Uhrzeit auf dem entfernten Peer zum Zeitpunkt des Sendens der Nachricht widerspiegelt. Beachten Sie, dass dies bedeutet, dass die Uhr möglicherweise nicht mit der lokalen Uhr synchronisiert ist und dass sowohl die aktuelle Zeit als auch die Geschwindigkeit, mit der die Uhr läuft, sich in gewissem Maße unterscheiden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

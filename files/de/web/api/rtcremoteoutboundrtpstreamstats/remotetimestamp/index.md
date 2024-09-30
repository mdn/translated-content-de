---
title: "RTCRemoteOutboundRtpStreamStats: Eigenschaft remoteTimestamp"
short-title: remoteTimestamp
slug: Web/API/RTCRemoteOutboundRtpStreamStats/remoteTimestamp
l10n:
  sourceCommit: ffe914fa3268cbc0d84648d156d19c7df3a587b9
---

{{APIRef("WebRTC")}}

Die [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Eigenschaft **`remoteTimestamp`** gibt den Zeitstempel beim entfernten Peer an, zu dem diese Statistiken gesendet wurden.
Dies unterscheidet sich von `timestamp`, welches den Zeitpunkt angibt, zu dem die Statistiken lokal erstellt oder empfangen wurden.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der den Zeitstempel beim entfernten Peer angibt, zu dem er diese Statistiken gesendet hat.
Dies unterscheidet sich von dem Wert `timestamp`, welcher den Zeitpunkt angibt, zu dem die Statistiken vom lokalen Peer erstellt oder empfangen wurden.

Falls diese Eigenschaft vorhanden ist, stammt sie aus dem [RTCP](/de/docs/Glossary/RTCP) Sender Report (SR)-Block, der die Uhr beim entfernten Peer zu dem Zeitpunkt widerspiegelt, zu dem die Nachricht gesendet wurde.
Bitte beachten Sie, dass dies bedeutet, dass die Uhr nicht mit der lokalen Uhr synchronisiert sein muss und dass sowohl die aktuelle Zeit als auch das Tempo, mit dem die Uhr läuft, bis zu einem gewissen Grad unterschiedlich sein können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

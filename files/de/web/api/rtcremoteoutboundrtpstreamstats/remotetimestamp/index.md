---
title: "RTCRemoteOutboundRtpStreamStats: Eigenschaft remoteTimestamp"
short-title: remoteTimestamp
slug: Web/API/RTCRemoteOutboundRtpStreamStats/remoteTimestamp
l10n:
  sourceCommit: ffe914fa3268cbc0d84648d156d19c7df3a587b9
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`remoteTimestamp`** des {{domxref("RTCRemoteOutboundRtpStreamStats")}} zeigt den Zeitstempel auf dem entfernten Peer an, zu dem diese Statistiken gesendet wurden. Dies unterscheidet sich von `timestamp`, das die Zeit angibt, zu der die Statistiken lokal erzeugt oder empfangen wurden.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}-Wert, der den Zeitstempel auf dem entfernten Peer angibt, zu dem es diese Statistiken gesendet hat.
Dies unterscheidet sich vom Wert `timestamp`, der die Zeit angibt, zu der die Statistiken vom lokalen Peer erzeugt oder empfangen wurden.

Wenn diese Eigenschaft vorhanden ist, stammt sie aus dem {{Glossary("RTCP")}} Sender Report (SR)-Block, der die Uhrzeit auf dem entfernten Peer zu dem Zeitpunkt widerspiegelt, zu dem die Nachricht gesendet wurde.
Beachten Sie, dass dies bedeutet, dass die Uhr möglicherweise nicht mit der lokalen Uhr synchronisiert ist und dass sowohl die aktuelle Zeit als auch die Geschwindigkeit, mit der die Uhr läuft, bis zu einem gewissen Grad unterschiedlich sein können.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

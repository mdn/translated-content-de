---
title: "RTCRtpSender: Transport-Eigenschaft"
short-title: transport
slug: Web/API/RTCRtpSender/transport
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`transport`**-Eigenschaft eines
{{domxref("RTCRtpSender")}}-Objekts liefert das {{domxref("RTCDtlsTransport")}}-Objekt,
das zur Interaktion mit dem zugrunde liegenden Transport verwendet wird, über den der Sender
Pakete des Real-time Transport Control Protocol ({{Glossary("RTCP")}}) austauscht.

Dieser Transport ist verantwortlich für den Empfang der Mediendaten über den
{{domxref("RTCRtpReceiver.track", "Track")}} des Senders.

## Wert

Ein {{domxref("RTCDtlsTransport")}}-Objekt, das den zugrunde liegenden Transport darstellt,
der vom Sender zum Austausch von Paketen mit dem entfernten Peer verwendet wird, oder `null`, wenn
der Sender noch nicht mit einem Transport verbunden ist.

## Beschreibung

Wenn der `RTCRtpSender` zuerst erstellt wird, ist der Wert von
`transport` `null`. Dies wird durch ein
`RTCDtlsTransport` ersetzt, sobald der Transport des Senders aufgebaut wurde.

Beachten Sie, dass bei aktivem Bundling – also, wenn der {{domxref("RTCPeerConnection")}}
mit einem Konfigurationsobjekt erstellt wurde, dessen `bundlePolicy` `max-compat`
oder `max-bundle` ist – mehrere Sender denselben Transport teilen können; in diesem
Fall nutzen alle dieselbe Verbindung, um {{Glossary("RTP")}}- und {{Glossary("RTCP")}}-Pakete
zu senden und/oder zu empfangen.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

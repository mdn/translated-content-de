---
title: "RTCRtpSender: transport-Eigenschaft"
short-title: transport
slug: Web/API/RTCRtpSender/transport
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`transport`** Eigenschaft eines
[`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekts liefert das [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) Objekt,
das zur Interaktion mit dem zugrunde liegenden Transport verwendet wird, über den der Sender
Real-time Transport Control Protocol ([RTCP](/de/docs/Glossary/RTCP))-Pakete austauscht.

Dieser Transport ist verantwortlich für den Empfang der Daten für die Medien auf dem [`track`](/de/docs/Web/API/RTCRtpReceiver/track) des Senders.

## Wert

Ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) Objekt, das den zugrunde liegenden Transport darstellt, der vom Sender verwendet wird, um Pakete mit dem entfernten Peer auszutauschen, oder `null`, wenn der Sender noch nicht mit einem Transport verbunden ist.

## Beschreibung

Wenn der `RTCRtpSender` erstmals erstellt wird, ist der Wert von
`transport` `null`. Dies wird durch ein
`RTCDtlsTransport` ersetzt, sobald der Transport des Senders eingerichtet ist.

Beachten Sie, dass, wenn Bundling in Kraft ist—das heißt, wenn die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
mit einem Konfigurationsobjekt erstellt wurde, dessen `bundlePolicy` `max-compat`
oder `max-bundle` ist—mehrere Sender möglicherweise den gleichen Transport teilen; in diesem
Fall verwenden alle von ihnen die gleiche Verbindung zum Senden und/oder Empfangen
von [RTP](/de/docs/Glossary/RTP)- und [RTCP](/de/docs/Glossary/RTCP)-Paketen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

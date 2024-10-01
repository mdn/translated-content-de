---
title: "RTCRtpSender: transport Eigenschaft"
short-title: transport
slug: Web/API/RTCRtpSender/transport
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`transport`**-Eigenschaft eines [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekts liefert das [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)-Objekt, das zur Interaktion mit dem zugrunde liegenden Transport verwendet wird, über den der Sender Real-time Transport Control Protocol ({{Glossary("RTCP", "RTCP")}})-Pakete austauscht.

Dieser Transport ist für den Empfang der Daten für die Medien auf dem `track` des Senders verantwortlich.

## Wert

Ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)-Objekt, das den zugrunde liegenden Transport repräsentiert, den der Sender zum Austauschen von Paketen mit dem Remote-Peer verwendet, oder `null`, wenn der Sender noch nicht mit einem Transport verbunden ist.

## Beschreibung

Wenn der `RTCRtpSender` zuerst erstellt wird, ist der Wert von `transport` `null`. Dieser wird durch ein `RTCDtlsTransport` ersetzt, sobald der Transport des Senders etabliert ist.

Beachten Sie, dass beim Bunden - das heißt, wenn die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) mit einem Konfigurationsobjekt erstellt wurde, dessen `bundlePolicy` `max-compat` oder `max-bundle` ist - mehrere Sender denselben Transport teilen können; in diesem Fall benutzen alle die gleiche Verbindung, um RTP und RTCP-Pakete zu senden und/oder zu empfangen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

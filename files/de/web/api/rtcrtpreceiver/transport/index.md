---
title: "RTCRtpReceiver: transport-Eigenschaft"
short-title: transport
slug: Web/API/RTCRtpReceiver/transport
l10n:
  sourceCommit: 5e3c69527de87e8ff9407de62e919db9254f0627
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`transport`**-Eigenschaft eines [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekts liefert das [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)-Objekt, das verwendet wird, um mit dem zugrunde liegenden Transport zu interagieren, über den der Empfänger Real-time Transport Control Protocol ({{Glossary("RTCP", "RTCP")}})-Pakete austauscht.

Dieser Transport ist dafür verantwortlich, die Daten für die Medien auf dem [`track`](/de/docs/Web/API/RTCRtpReceiver/track) des Empfängers zu empfangen.

## Wert

Ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)-Objekt, das den zugrunde liegenden Transport repräsentiert, der vom Empfänger verwendet wird, um Pakete mit dem Remote-Peer auszutauschen, oder `null`, wenn der Empfänger noch nicht mit einem Transport verbunden ist.

## Beschreibung

Wenn der `RTCRtpReceiver` zuerst erstellt wird, ist der Wert von `transport` `null`. Dies wird durch ein `RTCDtlsTransport` ersetzt, sobald der Transport des Empfängers eingerichtet wurde.

Beachten Sie, dass wenn Bundling verwendet wird – das heißt, wenn die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) mit einem Konfigurationsobjekt erstellt wurde, dessen `bundlePolicy` entweder `max-compat` oder `max-bundle` ist – mehrere Empfänger denselben Transport teilen können; in diesem Fall verwenden alle denselben Verbindungskanal, um {{Glossary("RTP", "RTP")}}- und {{Glossary("RTCP", "RTCP")}}-Pakete zu senden und/oder zu empfangen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

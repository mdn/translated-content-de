---
title: "RTCRtpReceiver: transport-Eigenschaft"
short-title: transport
slug: Web/API/RTCRtpReceiver/transport
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`transport`**-Eigenschaft eines
[`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekts stellt das [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)-Objekt bereit,
das verwendet wird, um mit dem zugrunde liegenden Transport zu interagieren, über den der Empfänger
Real-time Transport Control Protocol ({{Glossary("RTCP", "RTCP")}})-Pakete austauscht.

Dieser Transport ist verantwortlich für den Empfang der Daten für die Medien auf der
[`track`](/de/docs/Web/API/RTCRtpReceiver/track) des Empfängers.

### Wert

Ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)-Objekt, das den zugrunde liegenden Transport repräsentiert,
der vom Empfänger verwendet wird, um Pakete mit dem entfernten Peer auszutauschen, oder `null`, wenn
der Empfänger noch nicht mit einem Transport verbunden ist.

## Beschreibung

Wenn der `RTCRtpReceiver` zuerst erstellt wird, ist der Wert von
`transport` `null`. Dies wird durch ein
`RTCDtlsTransport` ersetzt, sobald der Transport des Empfängers eingerichtet wurde.

Beachten Sie, dass bei aktiviertem Bundling - das heißt, wenn der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
mit einem Konfigurationsobjekt erstellt wurde, dessen `bundlePolicy` `max-compat`
oder `max-bundle` ist - mehrere Empfänger möglicherweise denselben Transport gemeinsam nutzen; in diesem
Fall verwenden alle dieselbe Verbindung, um {{Glossary("RTP", "RTP")}}- und {{Glossary("RTCP", "RTCP")}}-Pakete zu senden und/oder zu empfangen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

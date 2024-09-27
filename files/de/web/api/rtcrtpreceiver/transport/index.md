---
title: "RTCRtpReceiver: transport-Eigenschaft"
short-title: transport
slug: Web/API/RTCRtpReceiver/transport
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`transport`**-Eigenschaft eines
[`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekts stellt das [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)-Objekt bereit,
das zur Interaktion mit dem zugrunde liegenden Transport verwendet wird, über den der Empfänger
Pakete des Real-time Transport Control Protocol ([RTCP](/de/docs/Glossary/RTCP)) austauscht.

Dieser Transport ist für den Empfang der Daten für die Medien auf dem [`track`](/de/docs/Web/API/RTCRtpReceiver/track) des Empfängers verantwortlich.

## Syntax

```js-nolint
rtcRtpReceiver.transport
```

### Wert

Ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)-Objekt, das den zugrunde liegenden Transport darstellt,
der vom Empfänger verwendet wird, um Pakete mit dem entfernten Peer auszutauschen, oder `null`, wenn der Empfänger noch nicht mit einem Transport verbunden ist.

## Beschreibung

Wenn der `RTCRtpReceiver` zuerst erstellt wird, ist der Wert von
`transport` `null`. Dieser wird durch ein
`RTCDtlsTransport` ersetzt, sobald der Transport des Empfängers festgelegt wurde.

Beachten Sie, dass bei aktivem Bundling - das ist der Fall, wenn der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
mit einem Konfigurationsobjekt erstellt wurde, dessen `bundlePolicy` `max-compat`
oder `max-bundle` ist - mehrere Empfänger denselben Transport teilen können; in diesem
Fall verwenden alle dieselbe Verbindung, um [RTP](/de/docs/Glossary/RTP)- und [RTCP](/de/docs/Glossary/RTCP)-Pakete zu senden und/oder zu empfangen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

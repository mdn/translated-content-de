---
title: "RTCRtpReceiver: transport-Eigenschaft"
short-title: transport
slug: Web/API/RTCRtpReceiver/transport
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`transport`**-Eigenschaft eines [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekts liefert das [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)-Objekt, welches verwendet wird, um mit dem zugrunde liegenden Transport zu interagieren, über den der Empfänger Real-time Transport Control Protocol ({{Glossary("RTCP", "RTCP")}})-Pakete austauscht.

Dieser Transport ist verantwortlich für den Empfang der Daten für die Medien auf der [`track`](/de/docs/Web/API/RTCRtpReceiver/track) des Empfängers.

## Syntax

```js-nolint
rtcRtpReceiver.transport
```

### Wert

Ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)-Objekt, das den zugrunde liegenden Transport darstellt, der vom Empfänger benutzt wird, um Pakete mit dem entfernten Peer auszutauschen, oder `null`, wenn der Empfänger noch nicht mit einem Transport verbunden ist.

## Beschreibung

Wenn der `RTCRtpReceiver` zum ersten Mal erstellt wird, ist der Wert von `transport` `null`. Dies wird durch ein `RTCDtlsTransport` ersetzt, sobald der Transport des Empfängers eingerichtet wurde.

Beachten Sie, dass beim Bundling – das heißt, wenn die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) mit einem Konfigurationsobjekt erstellt wurde, dessen `bundlePolicy` `max-compat` oder `max-bundle` ist – mehrere Empfänger möglicherweise denselben Transport teilen; in diesem Fall verwenden alle dieselbe Verbindung zum Senden und/oder Empfangen von {{Glossary("RTP", "RTP")}}- und {{Glossary("RTCP", "RTCP")}}-Paketen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

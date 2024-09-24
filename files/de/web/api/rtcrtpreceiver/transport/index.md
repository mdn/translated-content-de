---
title: "RTCRtpReceiver: transport-Eigenschaft"
short-title: transport
slug: Web/API/RTCRtpReceiver/transport
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`transport`**-Eigenschaft eines
{{domxref("RTCRtpReceiver")}}-Objekts liefert das {{domxref("RTCDtlsTransport")}}-Objekt,
das verwendet wird, um mit dem zugrunde liegenden Transport zu interagieren, über den der Empfänger
Pakete des Real-time Transport Control Protocol ({{Glossary("RTCP")}}) austauscht.

Dieser Transport ist verantwortlich für den Empfang der Daten für die Medien auf dem
{{domxref("RTCRtpReceiver.track", "Track")}} des Empfängers.

## Syntax

```js-nolint
rtcRtpReceiver.transport
```

### Wert

Ein {{domxref("RTCDtlsTransport")}}-Objekt, das den zugrunde liegenden Transport repräsentiert,
der vom Empfänger verwendet wird, um Pakete mit dem Remote Peer auszutauschen, oder `null`, wenn
der Empfänger noch nicht mit einem Transport verbunden ist.

## Beschreibung

Wenn der `RTCRtpReceiver` zuerst erstellt wird, ist der Wert von
`transport` `null`. Dies wird durch ein
`RTCDtlsTransport` ersetzt, sobald der Transport des Empfängers etabliert wurde.

Beachten Sie, dass bei aktivem Bundling - das heißt, wenn die {{domxref("RTCPeerConnection")}}
mit einem Konfigurationsobjekt erstellt wurde, dessen `bundlePolicy` auf `max-compat`
oder `max-bundle` gesetzt ist - mehrere Empfänger möglicherweise denselben Transport teilen; in diesem
Fall verwenden alle dieselbe Verbindung, um {{Glossary("RTP")}}- und {{Glossary("RTCP")}}-Pakete
zu senden und/oder zu empfangen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

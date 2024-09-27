---
title: "RTCPeerConnection: Methode getTransceivers()"
short-title: getTransceivers()
slug: Web/API/RTCPeerConnection/getTransceivers
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`getTransceivers()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle gibt eine Liste der [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Objekte zurück, die zur Übertragung und zum Empfang von Daten über die Verbindung verwendet werden.

## Syntax

```js-nolint
getTransceivers()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Objekten, die die Transceiver darstellen, welche die gesamte Medienübertragung und -empfang auf der `RTCPeerConnection` abwickeln.
Das Array ist in der Reihenfolge, in der die Transceiver zur Verbindung hinzugefügt wurden.
Das Array enthält keine Transceiver, die bereits [gestoppt](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) wurden (nach Angebot/Antwort).

## Beispiele

Der folgende Codeausschnitt stoppt alle Transceiver, die mit einer `RTCPeerConnection` verbunden sind.

```js
pc.getTransceivers().forEach((transceiver) => {
  transceiver.stop();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver)
- {{jsxref("Array.forEach()")}}

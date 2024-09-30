---
title: "RTCPeerConnection: getTransceivers()-Methode"
short-title: getTransceivers()
slug: Web/API/RTCPeerConnection/getTransceivers
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`getTransceivers()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle gibt eine Liste der [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Objekte zurück, die verwendet werden, um Daten in der Verbindung zu senden und zu empfangen.

## Syntax

```js-nolint
getTransceivers()
```

### Parameter

Keine.

### Rückgabewert

Ein Array der [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Objekte, die die Transceiver darstellen, die das Senden und Empfangen aller Medien auf der `RTCPeerConnection` verwalten. Das Array befindet sich in der Reihenfolge, in der die Transceiver zur Verbindung hinzugefügt wurden. Das Array schließt keine Transceiver ein, die bereits [gestoppt](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) wurden (nach Angebot/Antwort).

## Beispiele

Der folgende Codeabschnitt stoppt alle Transceiver, die mit einer `RTCPeerConnection` verbunden sind.

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

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Signaling und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [`RTCPeerConnection.addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver)
- {{jsxref("Array.forEach()")}}

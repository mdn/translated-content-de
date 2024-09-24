---
title: "RTCPeerConnection: Methode getTransceivers()"
short-title: getTransceivers()
slug: Web/API/RTCPeerConnection/getTransceivers
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`getTransceivers()`** Methode des {{domxref("RTCPeerConnection")}} Interfaces gibt eine Liste der {{domxref("RTCRtpTransceiver")}} Objekte zurück, die verwendet werden, um Daten auf der Verbindung zu senden und zu empfangen.

## Syntax

```js-nolint
getTransceivers()
```

### Parameter

Keine.

### Rückgabewert

Ein Array der {{domxref("RTCRtpTransceiver")}} Objekte, die die Transceiver darstellen, die das Senden und Empfangen aller Medien auf der `RTCPeerConnection` handhaben. Das Array ist in der Reihenfolge, in der die Transceiver zur Verbindung hinzugefügt wurden. Das Array beinhaltet keine Transceiver, die bereits [gestoppt](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) wurden (nach Angebot/Antwort).

## Beispiele

Der folgende Code-Schnipsel stoppt alle Transceiver, die mit einer `RTCPeerConnection` verbunden sind.

```js
pc.getTransceivers().forEach((transceiver) => {
  transceiver.stop();
});
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- {{domxref("RTCPeerConnection.addTransceiver()")}}
- {{jsxref("Array.forEach()")}}

---
title: "RTCPeerConnection: addTransceiver()-Methode"
short-title: addTransceiver()
slug: Web/API/RTCPeerConnection/addTransceiver
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC")}}

Die **`addTransceiver()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle erstellt einen neuen [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) und fügt ihn der Menge der Transceiver hinzu, die mit der `RTCPeerConnection` verbunden sind. Jeder Transceiver repräsentiert einen bidirektionalen Stream, mit sowohl einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) als auch einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), die damit assoziiert sind.

## Syntax

```js-nolint
addTransceiver(trackOrKind)
addTransceiver(trackOrKind, init)
```

### Parameter

- `trackOrKind`
  - : Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), das dem Transceiver zugeordnet wird, oder ein String, der als [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) des Empfängers [`track`](/de/docs/Web/API/RTCRtpReceiver/track) und somit des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) selbst verwendet wird.
- `init` {{optional_inline}}
  - : Ein Objekt zur Angabe von Optionen beim Erstellen des neuen Transceivers. Mögliche Werte sind:
    - `direction` {{optional_inline}}
      - : Die bevorzugte Richtung des neuen Transceivers. Dieser Wert wird verwendet, um die [`RTCRtpTransceiver.direction`](/de/docs/Web/API/RTCRtpTransceiver/direction)-Eigenschaft des neuen [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Objekts zu initialisieren.
    - `sendEncodings` {{optional_inline}}
      - : Ein Array von Encodings, die beim Senden von RTP-Medien vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) zugelassen sind. Dies entspricht dem [`parameter.encodings`](/de/docs/Web/API/RTCRtpSender/setParameters#encodings)-Array, das an [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) übergeben wird.
    - `streams` {{optional_inline}}
      - : Eine Liste von [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekten, die zum [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) des Transceivers hinzugefügt werden; wenn das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis der Remote-Peer's [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) eintritt, sind dies die Streams, die durch dieses Ereignis angegeben werden.

### Rückgabewert

Das [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Objekt, das verwendet wird, um die Mediendaten auszutauschen.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `trackOrKind` weder `"audio"` noch `"video"` war.

    Wenn das `sendEncodings`-Argument verwendet wird, kann dieser Fehler auch auftreten, wenn es ein schlecht formatiertes `rid`-Mitglied gibt, einige, aber nicht alle Encodings ein `rid`-Mitglied enthalten, oder wenn verschiedene Encodings denselben `rid`-Wert haben.

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn eines der `sendEncodings`-Encodings einen `maxFramerate`-Wert von weniger als 0.0 oder einen `scaleResolutionDownBy`-Wert von weniger als 1.0 hat.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Methode aufgerufen wird, während die zugehörige Verbindung geschlossen ist.

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das `sendEncodings`-Argument verwendet wird und einen schreibgeschützten Parameter außer `rid` enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) erstellt ebenfalls Transceiver
- [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) und [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)

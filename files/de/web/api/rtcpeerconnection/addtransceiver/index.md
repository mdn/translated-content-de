---
title: "RTCPeerConnection: Methode addTransceiver()"
short-title: addTransceiver()
slug: Web/API/RTCPeerConnection/addTransceiver
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`addTransceiver()`** Methode des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Schnittstellen erstellt einen neuen [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) und fügt ihn zu der Menge von Transceivern hinzu, die mit der `RTCPeerConnection` assoziiert sind. Jeder Transceiver repräsentiert einen bidirektionalen Stream, mit sowohl einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) als auch einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), die damit verbunden sind.

## Syntax

```js-nolint
addTransceiver(trackOrKind)
addTransceiver(trackOrKind, init)
```

### Parameter

- `trackOrKind`
  - : Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der mit dem Transceiver assoziiert werden soll, oder ein String, der als [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) des Empfängers [`track`](/de/docs/Web/API/RTCRtpReceiver/track) und damit des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) selbst verwendet wird.
- `init` {{optional_inline}}
  - : Ein Objekt zur Angabe von Optionen beim Erstellen des neuen Transceivers. Mögliche Werte sind:
    - `direction` {{optional_inline}}
      - : Die bevorzugte Richtung des neuen Transceivers. Dieser Wert wird verwendet, um die neue [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) Objekt-Eigenschaft [`RTCRtpTransceiver.direction`](/de/docs/Web/API/RTCRtpTransceiver/direction) zu initialisieren.
    - `sendEncodings` {{optional_inline}}
      - : Ein Array von Kodierungen, die beim Senden von RTP-Medien vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) erlaubt sind. Dies ist dasselbe wie das [`parameter.encodings`](/de/docs/Web/API/RTCRtpSender/setParameters#encodings) Array, das an [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) übergeben wird.
    - `streams` {{optional_inline}}
      - : Eine Liste von [`MediaStream`](/de/docs/Web/API/MediaStream) Objekten, die dem Transceiver's [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) hinzugefügt werden sollen; wenn das [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) des entfernten Peers das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event) Ereignis auslöst, sind dies die Streams, die durch dieses Ereignis spezifiziert werden.

### Rückgabewert

Das [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) Objekt, das verwendet wird, um die Mediendaten auszutauschen.

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Wird ausgelöst, wenn `trackOrKind` weder `"audio"` noch `"video"` war.

    Wenn das Argument `sendEncodings` verwendet wird, kann dieser Fehler auch ausgelöst werden, wenn es ein schlecht formatiertes `rid` Mitglied gibt, einige, aber nicht alle Kodierungen ein `rid` Mitglied enthalten oder verschiedene Kodierungen denselben `rid` Wert haben.

- {{jsxref("RangeError")}}

  - : Wird ausgelöst, wenn eine der `sendEncodings` Kodierungen einen `maxFramerate` Wert kleiner als 0,0 oder einen `scaleResolutionDownBy` Wert kleiner als 1,0 hat.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn die Methode aufgerufen wird, während die zugeordnete Verbindung geschlossen ist.

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das `sendEncodings` Argument verwendet wird und einen schreibgeschützten Parameter außer `rid` enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in das Echtzeit-Transportprotokoll (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) erstellt ebenfalls Transceiver
- [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) und [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)

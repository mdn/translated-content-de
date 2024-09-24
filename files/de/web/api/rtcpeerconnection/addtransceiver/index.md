---
title: "RTCPeerConnection: addTransceiver()-Methode"
short-title: addTransceiver()
slug: Web/API/RTCPeerConnection/addTransceiver
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`addTransceiver()`**-Methode des {{domxref("RTCPeerConnection")}}-Interfaces erstellt einen neuen {{domxref("RTCRtpTransceiver")}} und fügt ihn der Menge von Transceivern hinzu, die mit der `RTCPeerConnection` assoziiert sind. Jeder Transceiver repräsentiert einen bidirektionalen Stream, der sowohl einen {{domxref("RTCRtpSender")}} als auch einen {{domxref("RTCRtpReceiver")}} enthält.

## Syntax

```js-nolint
addTransceiver(trackOrKind)
addTransceiver(trackOrKind, init)
```

### Parameter

- `trackOrKind`
  - : Ein {{domxref("MediaStreamTrack")}}, der mit dem Transceiver assoziiert wird, oder ein String, der als {{domxref("MediaStreamTrack.kind", "kind")}} des Empfängers-{{domxref("RTCRtpReceiver.track", "track")}} und damit auch des {{domxref("RTCRtpReceiver")}} selbst verwendet wird.
- `init` {{optional_inline}}
  - : Ein Objekt zum Spezifizieren von Optionen beim Erstellen des neuen Transceivers.
    Mögliche Werte sind:
    - `direction` {{optional_inline}}
      - : Die bevorzugte Ausrichtung des neuen Transceivers. Dieser Wert wird verwendet, um die neue {{domxref("RTCRtpTransceiver")}}-Objekteigenschaft {{domxref("RTCRtpTransceiver.direction")}} zu initialisieren.
    - `sendEncodings` {{optional_inline}}
      - : Ein Array von Codierungen, die beim Senden von RTP-Medien vom {{domxref("RTCRtpSender")}} erlaubt sind.
        Dies entspricht dem [`parameter.encodings`](/de/docs/Web/API/RTCRtpSender/setParameters#encodings)-Array, das an {{domxref("RTCRtpSender.setParameters()")}} übergeben wird.
    - `streams` {{optional_inline}}
      - : Eine Liste von {{domxref("MediaStream")}}-Objekten, die dem {{domxref("RTCRtpReceiver")}}-Transceiver hinzugefügt werden; wenn das Track-Event des {{domxref("RTCPeerConnection")}} der entfernten Gegenstelle ausgelöst wird, sind dies die Streams, die durch dieses Event spezifiziert werden.

### Rückgabewert

Das {{domxref("RTCRtpTransceiver")}}-Objekt, das zum Austausch der Mediendaten verwendet wird.

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Wird ausgelöst, wenn `trackOrKind` weder `"audio"` noch `"video"` ist.

    Falls das `sendEncodings`-Argument verwendet wird, kann dieser Fehler auch ausgelöst werden, wenn es ein schlecht formatiertes `rid`-Element gibt, einige, aber nicht alle Codierungen ein `rid`-Element enthalten oder verschiedene Codierungen denselben `rid`-Wert haben.

- {{jsxref("RangeError")}}

  - : Wird ausgelöst, wenn eine der `sendEncodings`-Codierungen einen `maxFramerate`-Wert kleiner als 0.0 oder einen `scaleResolutionDownBy`-Wert kleiner als 1.0 hat.

- `InvalidStateError` {{domxref("DOMException")}}

  - : Wird ausgelöst, wenn die Methode aufgerufen wird, während die zugehörige Verbindung geschlossen ist.

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das `sendEncodings`-Argument verwendet wird und ein schreibgeschützter Parameter außer `rid` enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in das Echtzeit-Transportprotokoll (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- {{domxref("RTCPeerConnection.addTrack()")}} erstellt ebenfalls Transceiver
- {{domxref("RTCRtpReceiver")}} und {{domxref("RTCRtpSender")}}

---
title: "RTCDataChannel: close()-Methode"
short-title: close()
slug: Web/API/RTCDataChannel/close
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("WebRTC")}}

Die **`RTCDataChannel.close()`**-Methode schließt den
[`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel). Beide Peers dürfen diese Methode aufrufen, um die Schließung des Kanals einzuleiten.

Das Schließen des Datenkanals erfolgt nicht sofort. Der größte Teil des Schließungsvorgangs wird asynchron abgewickelt; Sie können erkennen, wann der Kanal vollständig geschlossen ist, indem Sie auf ein [`close`](/de/docs/Web/API/RTCDataChannel/close_event)-Ereignis auf dem Datenkanal achten.

Die Abfolge der Ereignisse, die als Reaktion auf den Aufruf dieser Methode auftreten:

1. [`RTCDataChannel.readyState`](/de/docs/Web/API/RTCDataChannel/readyState) wird auf `closing` gesetzt.
2. Ein Hintergrundprozess wird eingerichtet, um die restlichen Schritte unten zu bearbeiten, und `close()` kehrt zum Aufrufer zurück.
3. Die Transportschicht verarbeitet alle gepufferten Nachrichten; die Protokollschicht entscheidet, ob sie gesendet oder verworfen werden.
4. Der zugrunde liegende Datentransport wird geschlossen.
5. Die [`RTCDataChannel.readyState`](/de/docs/Web/API/RTCDataChannel/readyState)-Eigenschaft wird auf
   `closed` gesetzt.
6. Wenn der Transport mit einem Fehler geschlossen wurde,
   wird dem `RTCDataChannel` ein
   [`error`](/de/docs/Web/API/RTCDataChannel/error_event)-Ereignis
   gesendet, dessen [`name`](/de/docs/Web/API/DOMException/name) auf `NetworkError` gesetzt ist.
7. Ein [`close`](/de/docs/Web/API/RTCDataChannel/close_event)-Ereignis wird an den Kanal gesendet.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const pc = new RTCPeerConnection();
const dc = pc.createDataChannel("my channel");

dc.onmessage = (event) => {
  console.log(`received: ${event.data}`);
  dc.close(); // We decided to close after the first received message
};

dc.onopen = () => {
  console.log("datachannel open");
};

dc.onclose = () => {
  console.log("datachannel close");
};

// Now negotiate the connection and so forth…
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [`RTCDataChannel.readyState`](/de/docs/Web/API/RTCDataChannel/readyState)
- [`close`](/de/docs/Web/API/RTCDataChannel/close_event)-Ereignis

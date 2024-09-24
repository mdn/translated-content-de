---
title: "RTCDataChannel: close()-Methode"
short-title: close()
slug: Web/API/RTCDataChannel/close
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("WebRTC")}}

Die **`RTCDataChannel.close()`**-Methode schließt den
{{domxref("RTCDataChannel")}}. Beide Peers dürfen diese Methode aufrufen, um die Schließung des Kanals einzuleiten.

Die Schließung des Datenkanals erfolgt nicht sofort. Der Großteil des Schließvorgangs wird asynchron durchgeführt; Sie können erkennen, wann der Kanal vollständig geschlossen ist, indem Sie auf ein {{DOMxRef("RTCDataChannel.close_event", "close")}}-Ereignis auf dem Datenkanal achten.

Die Abfolge der Ereignisse, die als Reaktion auf den Aufruf dieser Methode auftreten:

1. {{domxref("RTCDataChannel.readyState")}} wird auf `closing` gesetzt.
2. Eine Hintergrundaufgabe wird eingerichtet, um die restlichen Schritte unten zu bearbeiten, und `close()` kehrt zum Aufrufer zurück.
3. Die Transportschicht verarbeitet alle gepufferten Nachrichten; die Protokollschicht entscheidet, ob sie gesendet oder verworfen werden sollen.
4. Der zugrunde liegende Datentransport wird geschlossen.
5. Die {{domxref("RTCDataChannel.readyState")}}-Eigenschaft wird auf
   `closed` gesetzt.
6. Wenn der Transport mit einem Fehler geschlossen wurde,
   wird dem `RTCDataChannel` ein
   {{DOMxRef("RTCDataChannel.error_event", "error")}}-Ereignis gesendet
   mit seinem {{DOMxRef("DOMException.name", "name")}} auf `NetworkError` gesetzt.
7. Ein {{domxref("RTCDataChannel.close_event", "close")}}-Ereignis wird an den Kanal gesendet.

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
  dc.close(); // Wir haben uns entschieden, nach der ersten empfangenen Nachricht zu schließen
};

dc.onopen = () => {
  console.log("datachannel open");
};

dc.onclose = () => {
  console.log("datachannel close");
};

// Jetzt die Verbindung aushandeln und so weiter…
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCDataChannel.readyState")}}
- {{DOMxRef("RTCDataChannel.close_event", "close")}}-Ereignis

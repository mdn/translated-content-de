---
title: RTCDataChannel
slug: Web/API/RTCDataChannel
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("WebRTC")}}

Die Schnittstelle **`RTCDataChannel`** repräsentiert einen Netzwerkkanal, der für bidirektionale Peer-to-Peer-Übertragungen von beliebigen Daten verwendet werden kann. Jeder Datenkanal ist mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verknüpft, und jede Peer-Verbindung kann bis zu einem theoretischen Maximum von 65.534 Datenkanälen besitzen (die tatsächliche Grenze kann von Browser zu Browser variieren).

Um einen Datenkanal zu erstellen und einen Remote-Peer einzuladen, treten Sie mit der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Methode [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) in Kontakt. Der Peer, der eingeladen wird, Daten auszutauschen, erhält ein [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Ereignis (vom Typ [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent)), um darüber informiert zu werden, dass der Datenkanal zur Verbindung hinzugefügt wurde.

`RTCDataChannel` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`binaryType`](/de/docs/Web/API/RTCDataChannel/binaryType)
  - : Ein String, der den Typ des Objekts angibt, das verwendet werden soll, um empfangene Binärdaten auf dem `RTCDataChannel` zu repräsentieren. Die Werte sind die gleichen wie auf der [`WebSocket.binaryType`](/de/docs/Web/API/WebSocket/binaryType)-Eigenschaft erlaubt: `blob`, wenn [`Blob`](/de/docs/Web/API/Blob)-Objekte verwendet werden, oder `arraybuffer`, wenn {{jsxref("ArrayBuffer")}}-Objekte verwendet werden. Der Standardwert ist `blob`.
- [`bufferedAmount`](/de/docs/Web/API/RTCDataChannel/bufferedAmount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Bytes an Daten zurück, die derzeit in der Warteschlange stehen, um über den Datenkanal gesendet zu werden.
- [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold)
  - : Legt die Anzahl der Bytes fest, die als "wenig" gepuffert eingehende Daten gelten. Der Standardwert ist 0.
- [`id`](/de/docs/Web/API/RTCDataChannel/id) {{ReadOnlyInline}}
  - : Gibt eine ID-Nummer (zwischen 0 und 65.534) zurück, die den `RTCDataChannel` eindeutig identifiziert.
- [`label`](/de/docs/Web/API/RTCDataChannel/label) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der einen Namen enthält, der den Datenkanal beschreibt. Diese Bezeichnungen müssen nicht eindeutig sein.
- [`maxPacketLifeTime`](/de/docs/Web/API/RTCDataChannel/maxPacketLifeTime) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Millisekunden zurück, die der Browser Zeit hat, um zu versuchen, eine Nachricht zu übertragen, so wie es beim Erstellen des Datenkanals festgelegt wurde, oder `null`.
- [`maxRetransmits`](/de/docs/Web/API/RTCDataChannel/maxRetransmits) {{ReadOnlyInline}}
  - : Gibt die maximale Anzahl der Versuche zurück, die der Browser unternehmen soll, um eine Nachricht erneut zu senden, bevor er aufgibt, wie es beim Erstellen des Datenkanals festgelegt wurde, oder `null`, was anzeigt, dass es kein Maximum gibt.
- [`negotiated`](/de/docs/Web/API/RTCDataChannel/negotiated) {{ReadOnlyInline}}
  - : Gibt an, ob die Verbindung des `RTCDataChannel` von der Web-App (`true`) oder von der WebRTC-Schicht (`false`) ausgehandelt wurde. Der Standardwert ist `false`.
- [`ordered`](/de/docs/Web/API/RTCDataChannel/ordered) {{ReadOnlyInline}}
  - : Gibt an, ob der Datenkanal die geordnete Lieferung von Nachrichten garantiert; der Standardwert ist `true`, was darauf hinweist, dass der Datenkanal tatsächlich geordnet ist.
- [`protocol`](/de/docs/Web/API/RTCDataChannel/protocol) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Namen des verwendeten Unterprotokolls enthält. Wenn kein Protokoll beim Erstellen des Datenkanals angegeben wurde, ist der Wert dieser Eigenschaft der leere String (`""`).
- [`readyState`](/de/docs/Web/API/RTCDataChannel/readyState) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Zustand der zugrunde liegenden Datenverbindung des Datenkanals anzeigt. Es kann einen der folgenden Werte haben: `connecting`, `open`, `closing` oder `closed`.

### Veraltete Eigenschaften

- [`reliable`](/de/docs/Web/API/RTCDataChannel/reliable) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, ob der Datenkanal _zuverlässig_ ist oder nicht.

## Instanz-Methoden

_Erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`close()`](/de/docs/Web/API/RTCDataChannel/close)
  - : Schließt den `RTCDataChannel`. Jeder der Partner kann diese Methode aufrufen, um die Schließung des Kanals einzuleiten.
- [`send()`](/de/docs/Web/API/RTCDataChannel/send)
  - : Sendet Daten über den Datenkanal an den Remote-Peer.

## Ereignisse

- [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)
  - : Wird gesendet, wenn die Anzahl der Bytes an Daten im ausgehenden Datenpuffer unter den durch [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) angegebenen Wert fällt.
- [`close`](/de/docs/Web/API/RTCDataChannel/close_event)
  - : Wird gesendet, wenn der zugrunde liegende Datenverkehr geschlossen wird.
- [`closing`](/de/docs/Web/API/RTCDataChannel/closing_event)
  - : Wird gesendet, wenn der zugrunde liegende Datenverkehr dabei ist, sich zu schließen.
- [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
  - : Wird gesendet, wenn ein Fehler auf dem Datenkanal auftritt.
- [`message`](/de/docs/Web/API/RTCDataChannel/message_event)
  - : Wird gesendet, wenn eine Nachricht vom Remote-Peer empfangen wurde. Der Inhalt der Nachricht kann in der [`data`](/de/docs/Web/API/MessageEvent/data)-Eigenschaft des Ereignisses gefunden werden.
- [`open`](/de/docs/Web/API/RTCDataChannel/open_event)
  - : Wird gesendet, wenn der Datenkanal erstmals geöffnet wird oder wenn die bestehende zugrunde liegende Verbindung eines Datenkanals erneut geöffnet wird.

## Datenformat

Das zugrunde liegende Datenformat wird durch die IEEE-Spezifikation [SDP Offer/Answer Procedures for SCTP over DTLS Transport (RFC 8841)](https://datatracker.ietf.org/doc/rfc8841/) definiert. Das aktuelle Format spezifiziert sein Protokoll entweder als `"UDP/DTLS/SCTP"` (UDP mit DTLS und SCTP) oder `"TCP/DTLS/SCTP"` (TCP mit DTLS und SCTP). Ältere Browser könnten nur `"DTLS/SCTP"` spezifizieren.

## Beispiel

```js
const pc = new RTCPeerConnection();
const dc = pc.createDataChannel("my channel");

dc.onmessage = (event) => {
  console.log(`received: ${event.data}`);
};

dc.onopen = () => {
  console.log("datachannel open");
};

dc.onclose = () => {
  console.log("datachannel close");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)

---
title: RTCDataChannel
slug: Web/API/RTCDataChannel
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("WebRTC")}}

Die **`RTCDataChannel`**-Schnittstelle stellt einen Netzwerkkanal dar, der für bidirektionale Peer-to-Peer-Übertragungen beliebiger Daten verwendet werden kann. Jeder Datenkanal ist mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verbunden, und jede Peer-Verbindung kann theoretisch bis zu 65.534 Datenkanäle haben (das tatsächliche Limit kann je nach Browser variieren).

Um einen Datenkanal zu erstellen und einen Remote-Peer einzuladen, rufen Sie die Methode [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auf. Der Peer, der eingeladen wird, um Daten auszutauschen, erhält ein [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Ereignis (dieses hat den Typ [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent)), um mitzuteilen, dass der Datenkanal zur Verbindung hinzugefügt wurde.

`RTCDataChannel` ist ein [transferierbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`binaryType`](/de/docs/Web/API/RTCDataChannel/binaryType)
  - : Ein String, der den Objekttyp angibt, der verwendet werden soll, um binäre Daten, die auf dem `RTCDataChannel` empfangen werden, darzustellen. Die Werte sind die gleichen wie bei der [`WebSocket.binaryType`](/de/docs/Web/API/WebSocket/binaryType)-Eigenschaft erlaubt: `blob`, wenn [`Blob`](/de/docs/Web/API/Blob)-Objekte verwendet werden, oder `arraybuffer`, wenn {{jsxref("ArrayBuffer")}}-Objekte verwendet werden. Der Standard ist `arraybuffer`.
- [`bufferedAmount`](/de/docs/Web/API/RTCDataChannel/bufferedAmount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Datenbytes zurück, die derzeit zur Übertragung über den Datenkanal in die Warteschlange gestellt sind.
- [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold)
  - : Gibt die Anzahl der Datenbytes an, die als "niedrig" gepuffert gelten. Der Standardwert ist 0.
- [`id`](/de/docs/Web/API/RTCDataChannel/id) {{ReadOnlyInline}}
  - : Gibt eine ID-Nummer (zwischen 0 und 65.534) zurück, die den `RTCDataChannel` eindeutig identifiziert.
- [`label`](/de/docs/Web/API/RTCDataChannel/label) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der einen Namen enthält, der den Datenkanal beschreibt. Diese Bezeichnungen müssen nicht eindeutig sein.
- [`maxPacketLifeTime`](/de/docs/Web/API/RTCDataChannel/maxPacketLifeTime) {{ReadOnlyInline}}
  - : Gibt die Zeitdauer in Millisekunden zurück, die der Browser hat, um zu versuchen, eine Nachricht zu übertragen, wie sie beim Erstellen des Datenkanals festgelegt wurde, oder `null`.
- [`maxRetransmits`](/de/docs/Web/API/RTCDataChannel/maxRetransmits) {{ReadOnlyInline}}
  - : Gibt die maximale Anzahl von Versuchen zurück, die der Browser unternehmen sollte, um eine Nachricht erneut zu übertragen, bevor er aufgibt, wie beim Erstellen des Datenkanals festgelegt wurde, oder `null`, was darauf hinweist, dass es kein Maximum gibt.
- [`negotiated`](/de/docs/Web/API/RTCDataChannel/negotiated) {{ReadOnlyInline}}
  - : Gibt an, ob die Verbindung des `RTCDataChannel` von der Web-App (`true`) oder von der WebRTC-Schicht (`false`) ausgehandelt wurde. Der Standard ist `false`.
- [`ordered`](/de/docs/Web/API/RTCDataChannel/ordered) {{ReadOnlyInline}}
  - : Gibt an, ob der Datenkanal die Reihenfolge der Nachrichtenlieferung garantiert; der Standard ist `true`, was darauf hinweist, dass der Datenkanal tatsächlich geordnet ist.
- [`priority`](/de/docs/Web/API/RTCDataChannel/priority) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen String zurück, der die Priorität des Datenkanals angibt, wie sie beim Erstellen des Datenkanals festgelegt wurde oder wie sie vom Benutzeragenten zugewiesen wurde. Mögliche Werte sind `"very-low"`, `"low"`, `"medium"` oder `"high"`.
- [`protocol`](/de/docs/Web/API/RTCDataChannel/protocol) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Namen des verwendeten Subprotokolls enthält. Wenn kein Protokoll angegeben wurde, als der Datenkanal erstellt wurde, ist der Wert dieser Eigenschaft der leere String (`""`).
- [`readyState`](/de/docs/Web/API/RTCDataChannel/readyState) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Zustand der zugrunde liegenden Datenverbindung des Datenkanals angibt. Er kann einen der folgenden Werte haben: `connecting`, `open`, `closing` oder `closed`.

### Veraltete Eigenschaften

- [`reliable`](/de/docs/Web/API/RTCDataChannel/reliable) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, ob der Datenkanal _zuverlässig_ ist.

## Instanzmethoden

_Erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`close()`](/de/docs/Web/API/RTCDataChannel/close)
  - : Schließt den `RTCDataChannel`. Jeder Peer darf diese Methode aufrufen, um die Schließung des Kanals zu initiieren.
- [`send()`](/de/docs/Web/API/RTCDataChannel/send)
  - : Sendet Daten über den Datenkanal zum Remote-Peer.

## Ereignisse

- [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)
  - : Wird gesendet, wenn die Anzahl der Datenbytes im ausgehenden Datenpuffer unter den durch [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) angegebenen Wert fällt.
- [`close`](/de/docs/Web/API/RTCDataChannel/close_event)
  - : Wird gesendet, wenn der zugrunde liegende Datentransport geschlossen wird.
- [`closing`](/de/docs/Web/API/RTCDataChannel/closing_event)
  - : Wird gesendet, wenn der zugrunde liegende Datentransport kurz davor steht, geschlossen zu werden.
- [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
  - : Wird gesendet, wenn ein Fehler auf dem Datenkanal auftritt.
- [`message`](/de/docs/Web/API/RTCDataChannel/message_event)
  - : Wird gesendet, wenn eine Nachricht vom Remote-Peer empfangen wurde. Der Nachrichtentext kann in der [`data`](/de/docs/Web/API/MessageEvent/data)-Eigenschaft des Ereignisses gefunden werden.
- [`open`](/de/docs/Web/API/RTCDataChannel/open_event)
  - : Wird gesendet, wenn der Datenkanal zuerst geöffnet wird oder wenn die zugrunde liegende Verbindung eines bestehenden Datenkanals erneut geöffnet wird.

## Datenformat

Das zugrunde liegende Datenformat wird durch die IEEE-Spezifikation [SDP Offer/Answer Procedures for SCTP over DTLS Transport (RFC 8841)](https://datatracker.ietf.org/doc/rfc8841/) definiert. Das aktuelle Format spezifiziert sein Protokoll als entweder `"UDP/DTLS/SCTP"` (UDP, das DTLS, das SCTP trägt) oder `"TCP/DTLS/SCTP"` (TCP, das DTLS, das SCTP trägt). Ältere Browser geben möglicherweise nur `"DTLS/SCTP"` an.

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

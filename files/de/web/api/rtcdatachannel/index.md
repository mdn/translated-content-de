---
title: RTCDataChannel
slug: Web/API/RTCDataChannel
l10n:
  sourceCommit: ea27e601462e6435fa35773a5b0504fe78b5cfa5
---

{{APIRef("WebRTC")}}

Das **`RTCDataChannel`**-Interface repräsentiert einen Netzwerkkanal, der für bidirektionale Peer-to-Peer-Übertragungen beliebiger Daten verwendet werden kann. Jeder Datenkanal ist mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verbunden, und jede Peer-Verbindung kann theoretisch maximal 65.534 Datenkanäle haben (das tatsächliche Limit kann je nach Browser variieren).

Um einen Datenkanal zu erstellen und einen Remote-Peer einzuladen, ihm beizutreten, rufen Sie die Methode [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auf. Der Peer, der eingeladen wird, Daten auszutauschen, empfängt ein [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Ereignis (vom Typ [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent)), das informiert, dass der Datenkanal zur Verbindung hinzugefügt wurde.

`RTCDataChannel` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`binaryType`](/de/docs/Web/API/RTCDataChannel/binaryType)
  - : Ein String, der den Objekttyp angibt, der verwendet werden soll, um binäre Daten zu repräsentieren, die auf dem `RTCDataChannel` empfangen werden. Die Werte sind die gleichen wie bei der [`WebSocket.binaryType`](/de/docs/Web/API/WebSocket/binaryType)-Eigenschaft zulässig: `blob`, wenn [`Blob`](/de/docs/Web/API/Blob)-Objekte verwendet werden, oder `arraybuffer`, wenn {{jsxref("ArrayBuffer")}}-Objekte verwendet werden. Der Standardwert ist `arraybuffer`.
- [`bufferedAmount`](/de/docs/Web/API/RTCDataChannel/bufferedAmount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Bytes von Daten zurück, die derzeit zur Übertragung über den Datenkanal in der Warteschlange stehen.
- [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold)
  - : Gibt die Anzahl der Bytes des gepufferten ausgehenden Daten an, die als "niedrig" angesehen wird. Der Standardwert ist 0.
- [`id`](/de/docs/Web/API/RTCDataChannel/id) {{ReadOnlyInline}}
  - : Gibt eine ID-Nummer (zwischen 0 und 65.534) zurück, die das `RTCDataChannel` eindeutig identifiziert.
- [`label`](/de/docs/Web/API/RTCDataChannel/label) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der einen Namen enthält, der den Datenkanal beschreibt. Diese Bezeichnungen müssen nicht eindeutig sein.
- [`maxPacketLifeTime`](/de/docs/Web/API/RTCDataChannel/maxPacketLifeTime) {{ReadOnlyInline}}
  - : Gibt die Zeitspanne in Millisekunden zurück, die der Browser hat, um zu versuchen, eine Nachricht zu übertragen, wie beim Erstellen des Datenkanals festgelegt, oder `null`.
- [`maxRetransmits`](/de/docs/Web/API/RTCDataChannel/maxRetransmits) {{ReadOnlyInline}}
  - : Gibt die maximale Anzahl von Übertragungsversuchen zurück, die der Browser unternehmen sollte, bevor er aufgibt, wie beim Erstellen des Datenkanals festgelegt, oder `null`, was darauf hinweist, dass es kein Maximum gibt.
- [`negotiated`](/de/docs/Web/API/RTCDataChannel/negotiated) {{ReadOnlyInline}}
  - : Gibt an, ob die Verbindung des `RTCDataChannel` von der Webanwendung (`true`) oder der WebRTC-Schicht (`false`) ausgehandelt wurde. Der Standard ist `false`.
- [`ordered`](/de/docs/Web/API/RTCDataChannel/ordered) {{ReadOnlyInline}}
  - : Gibt an, ob der Datenkanal die Zustellreihenfolge von Nachrichten gewährleistet; der Standardwert ist `true`, was darauf hinweist, dass der Datenkanal in der Tat geordnet ist.
- [`protocol`](/de/docs/Web/API/RTCDataChannel/protocol) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Namen des verwendeten Subprotokolls enthält. Wenn beim Erstellen des Datenkanals kein Protokoll angegeben wurde, ist der Wert dieser Eigenschaft der leere String (`""`).
- [`readyState`](/de/docs/Web/API/RTCDataChannel/readyState) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Zustand der zugrunde liegenden Datenverbindung des Datenkanals anzeigt. Es kann einen der folgenden Werte haben: `connecting`, `open`, `closing` oder `closed`.

### Veraltete Eigenschaften

- [`reliable`](/de/docs/Web/API/RTCDataChannel/reliable) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, ob der Datenkanal _zuverlässig_ ist.

## Instanz-Methoden

_Erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`close()`](/de/docs/Web/API/RTCDataChannel/close)
  - : Schließt das `RTCDataChannel`. Beide Peers dürfen diese Methode aufrufen, um die Schließung des Kanals einzuleiten.
- [`send()`](/de/docs/Web/API/RTCDataChannel/send)
  - : Sendet Daten über den Datenkanal an den Remote-Peer.

## Ereignisse

- [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)
  - : Wird gesendet, wenn die Anzahl der Bytes von Daten im ausgehenden Datenpuffer unter den durch [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) festgelegten Wert fällt.
- [`close`](/de/docs/Web/API/RTCDataChannel/close_event)
  - : Wird gesendet, wenn der zugrunde liegende Datentransport geschlossen wird.
- [`closing`](/de/docs/Web/API/RTCDataChannel/closing_event)
  - : Wird gesendet, wenn der zugrunde liegende Datentransport zu schließen beginnt.
- [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
  - : Wird gesendet, wenn ein Fehler auf dem Datenkanal auftritt.
- [`message`](/de/docs/Web/API/RTCDataChannel/message_event)
  - : Wird gesendet, wenn eine Nachricht vom Remote-Peer empfangen wurde. Der Nachrichteninhalt kann in der [`data`](/de/docs/Web/API/MessageEvent/data)-Eigenschaft des Ereignisses gefunden werden.
- [`open`](/de/docs/Web/API/RTCDataChannel/open_event)
  - : Wird gesendet, wenn der Datenkanal zuerst geöffnet wird oder wenn die zugrunde liegende Verbindung eines bestehenden Datenkanals erneut geöffnet wird.

## Datenformat

Das zugrunde liegende Datenformat ist in der IEEE-Spezifikation [SDP Offer/Answer Procedures for SCTP over DTLS Transport (RFC 8841)](https://datatracker.ietf.org/doc/rfc8841/) definiert. Das aktuelle Format spezifiziert sein Protokoll entweder als `"UDP/DTLS/SCTP"` (UDP überträgt DTLS überträgt SCTP) oder `"TCP/DTLS/SCTP"` (TCP überträgt DTLS überträgt SCTP). Ältere Browser können nur `"DTLS/SCTP"` angeben.

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

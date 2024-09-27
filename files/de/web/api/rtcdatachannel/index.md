---
title: RTCDataChannel
slug: Web/API/RTCDataChannel
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("WebRTC")}}

Die **`RTCDataChannel`**-Schnittstelle repräsentiert einen Netzwerkkanal, der für bidirektionale Peer-to-Peer-Übertragungen beliebiger Daten verwendet werden kann. Jeder Datenkanal ist mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verbunden, und jede Peer-Verbindung kann theoretisch bis zu 65.534 Datenkanäle haben (das tatsächliche Limit kann je nach Browser variieren).

Um einen Datenkanal zu erstellen und einen Remote-Peer einzuladen, müssen Sie die Methode [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) aufrufen. Der Peer, der eingeladen wird, Daten auszutauschen, erhält ein [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Ereignis (vom Typ [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent)), das signalisiert, dass der Datenkanal zur Verbindung hinzugefügt wurde.

`RTCDataChannel` ist ein [transferierbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`binaryType`](/de/docs/Web/API/RTCDataChannel/binaryType)
  - : Ein String, der den Typ des Objekts angibt,
    das verwendet werden soll, um binäre Daten darzustellen, die auf dem `RTCDataChannel` empfangen wurden.
    Die Werte sind dieselben wie bei der Eigenschaft [`WebSocket.binaryType`](/de/docs/Web/API/WebSocket/binaryType) erlaubt:
    `blob`, wenn [`Blob`](/de/docs/Web/API/Blob)-Objekte verwendet werden,
    oder `arraybuffer`, wenn {{jsxref("ArrayBuffer")}}-Objekte verwendet werden.
    Der Standard ist `blob`.
- [`bufferedAmount`](/de/docs/Web/API/RTCDataChannel/bufferedAmount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Bytes an Daten zurück,
    die derzeit in der Warteschlange stehen, um über den Datenkanal gesendet zu werden.
- [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold)
  - : Gibt die Anzahl der Bytes ausgehender Daten in der Warteschlange an, die als "niedrig" gelten.
    Der Standardwert ist 0.
- [`id`](/de/docs/Web/API/RTCDataChannel/id) {{ReadOnlyInline}}
  - : Gibt eine ID-Nummer (zwischen 0 und 65.534) zurück,
    die den `RTCDataChannel` eindeutig identifiziert.
- [`label`](/de/docs/Web/API/RTCDataChannel/label) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der einen Namen enthält, der den Datenkanal beschreibt.
    Diese Labels müssen nicht eindeutig sein.
- [`maxPacketLifeTime`](/de/docs/Web/API/RTCDataChannel/maxPacketLifeTime) {{ReadOnlyInline}}
  - : Gibt die Menge an Zeit in Millisekunden zurück,
    die dem Browser erlaubt ist, zu versuchen, eine Nachricht zu übertragen,
    wie beim Erstellen des Datenkanals festgelegt,
    oder `null`.
- [`maxRetransmits`](/de/docs/Web/API/RTCDataChannel/maxRetransmits) {{ReadOnlyInline}}
  - : Gibt die maximale Anzahl an Versuchen zurück,
    die der Browser unternehmen sollte, um eine Nachricht erneut zu übertragen, bevor er aufgibt,
    wie beim Erstellen des Datenkanals festgelegt,
    oder `null`, was anzeigt, dass es kein Maximum gibt.
- [`negotiated`](/de/docs/Web/API/RTCDataChannel/negotiated) {{ReadOnlyInline}}
  - : Gibt an,
    ob die Verbindung des `RTCDataChannel` von der Web-App
    (`true`)
    oder von der WebRTC-Schicht (`false`) ausgehandelt wurde.
    Der Standardwert ist `false`.
- [`ordered`](/de/docs/Web/API/RTCDataChannel/ordered) {{ReadOnlyInline}}
  - : Gibt an, ob der Datenkanal eine geordnete Zustellung von Nachrichten garantiert;
    der Standardwert ist `true`, was darauf hinweist, dass der Datenkanal tatsächlich geordnet ist.
- [`protocol`](/de/docs/Web/API/RTCDataChannel/protocol) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Namen des verwendeten Unterprotokolls enthält.
    Wenn beim Erstellen des Datenkanals kein Protokoll angegeben wurde,
    ist der Wert dieser Eigenschaft der leere String (`""`).
- [`readyState`](/de/docs/Web/API/RTCDataChannel/readyState) {{ReadOnlyInline}}
  - : Gibt einen String zurück,
    der den Zustand der zugrunde liegenden Datenverbindung des Datenkanals anzeigt.
    Er kann einen der folgenden Werte haben:
    `connecting`, `open`, `closing` oder `closed`.

### Veraltete Eigenschaften

- [`reliable`](/de/docs/Web/API/RTCDataChannel/reliable) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, ob der Datenkanal _zuverlässig_ ist.

## Instanz-Methoden

_Erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`close()`](/de/docs/Web/API/RTCDataChannel/close)
  - : Schließt den `RTCDataChannel`.
    Es ist beiden Peers erlaubt, diese Methode aufzurufen,
    um die Schließung des Kanals einzuleiten.
- [`send()`](/de/docs/Web/API/RTCDataChannel/send)
  - : Sendet Daten über den Datenkanal an den Remote-Peer.

## Ereignisse

- [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)
  - : Wird gesendet,
    wenn die Anzahl der Bytes an Daten in der ausgehenden Datenwarteschlange
    unter den durch [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) angegebenen Wert fällt.
- [`close`](/de/docs/Web/API/RTCDataChannel/close_event)
  - : Wird gesendet, wenn der zugrunde liegende Datentransport geschlossen wird.
- [`closing`](/de/docs/Web/API/RTCDataChannel/closing_event)
  - : Wird gesendet, wenn der zugrunde liegende Datentransport beginnt zu schließen.
- [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
  - : Wird gesendet, wenn ein Fehler auf dem Datenkanal auftritt.
- [`message`](/de/docs/Web/API/RTCDataChannel/message_event)
  - : Wird gesendet, wenn eine Nachricht vom Remote-Peer empfangen wurde.
    Der Inhalt der Nachricht kann
    in der [`data`](/de/docs/Web/API/MessageEvent/data)-Eigenschaft des Ereignisses gefunden werden.
- [`open`](/de/docs/Web/API/RTCDataChannel/open_event)
  - : Wird gesendet, wenn der Datenkanal erstmals geöffnet wird,
    oder wenn die zugrunde liegende Verbindung eines bestehenden Datenkanals wieder geöffnet wird.

## Datenformat

Das zugrunde liegende Datenformat wird durch die IEEE-Spezifikation [SDP Offer/Answer Procedures for SCTP über DTLS Transport (RFC 8841)](https://datatracker.ietf.org/doc/rfc8841/) definiert. Das aktuelle Format gibt sein Protokoll entweder als `"UDP/DTLS/SCTP"` (UDP trägt DTLS, das SCTP trägt) oder `"TCP/DTLS/SCTP"` (TCP trägt DTLS, das SCTP trägt) an. Ältere Browser könnten nur `"DTLS/SCTP"` angeben.

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

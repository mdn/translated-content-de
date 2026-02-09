---
title: RTCDataChannel
slug: Web/API/RTCDataChannel
l10n:
  sourceCommit: edfa7accf30f93ad25735fee3bffd118f107bea9
---

{{APIRef("WebRTC")}}

Die **`RTCDataChannel`**-Schnittstelle repräsentiert einen Netzwerkkanal, der für bidirektionale Peer-to-Peer-Übertragungen beliebiger Daten verwendet werden kann. Jeder Datenkanal ist mit einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verbunden, und jede Peer-Verbindung kann bis zu theoretisch maximal 65.534 Datenkanäle haben (das tatsächliche Limit kann je nach Browser variieren).

Um einen Datenkanal zu erstellen und einen entfernten Peer zur Teilnahme einzuladen, rufen Sie die Methode [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auf. Der zur Datenübertragung eingeladene Peer erhält ein [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)-Ereignis (vom Typ [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent)), um ihm mitzuteilen, dass der Datenkanal zur Verbindung hinzugefügt wurde.

`RTCDataChannel` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`binaryType`](/de/docs/Web/API/RTCDataChannel/binaryType)
  - : Ein String, der den Objekttyp angibt,
    der zur Darstellung binärer Daten auf dem `RTCDataChannel` verwendet werden soll.
    Die Werte entsprechen denen, die in der Eigenschaft [`WebSocket.binaryType`](/de/docs/Web/API/WebSocket/binaryType) zulässig sind:
    `blob`, wenn [`Blob`](/de/docs/Web/API/Blob)-Objekte verwendet werden,
    oder `arraybuffer`, wenn {{jsxref("ArrayBuffer")}}-Objekte verwendet werden.
    Der Standardwert ist `arraybuffer`.
- [`bufferedAmount`](/de/docs/Web/API/RTCDataChannel/bufferedAmount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Bytes von Daten zurück,
    die derzeit zur Übertragung über den Datenkanal in die Warteschlange gestellt sind.
- [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold)
  - : Gibt die Anzahl von Bytes gepufferter ausgehender Daten an, die als "niedrig" angesehen werden.
    Der Standardwert ist 0.
- [`id`](/de/docs/Web/API/RTCDataChannel/id) {{ReadOnlyInline}}
  - : Gibt eine ID-Nummer zurück (zwischen 0 und 65.534),
    die den `RTCDataChannel` eindeutig identifiziert.
- [`label`](/de/docs/Web/API/RTCDataChannel/label) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Namen des Datenkanals beschreibt.
    Diese Bezeichnungen müssen nicht eindeutig sein.
- [`maxPacketLifeTime`](/de/docs/Web/API/RTCDataChannel/maxPacketLifeTime) {{ReadOnlyInline}}
  - : Gibt die Zeitspanne in Millisekunden zurück,
    die dem Browser erlaubt ist, zu versuchen, eine Nachricht zu übertragen,
    wie beim Erstellen des Datenkanals festgelegt,
    oder `null`.
- [`maxRetransmits`](/de/docs/Web/API/RTCDataChannel/maxRetransmits) {{ReadOnlyInline}}
  - : Gibt die maximale Anzahl von Übertragungsversuchen zurück,
    die der Browser unternehmen sollte, um eine Nachricht erneut zu senden, bevor er aufgibt,
    wie beim Erstellen des Datenkanals festgelegt,
    oder `null`, was anzeigt, dass es kein Maximum gibt.
- [`negotiated`](/de/docs/Web/API/RTCDataChannel/negotiated) {{ReadOnlyInline}}
  - : Gibt an,
    ob die Verbindung des `RTCDataChannel` durch die Webanwendung
    (`true`)
    oder durch die WebRTC-Schicht (`false`) verhandelt wurde.
    Der Standardwert ist `false`.
- [`ordered`](/de/docs/Web/API/RTCDataChannel/ordered) {{ReadOnlyInline}}
  - : Gibt an, ob der Datenkanal garantiert, dass Nachrichten in der richtigen Reihenfolge geliefert werden;
    der Standardwert ist `true`, was bedeutet, dass der Datenkanal tatsächlich geordnet ist.
- [`priority`](/de/docs/Web/API/RTCDataChannel/priority) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Priorität des Datenkanals angibt,
    wie beim Erstellen des Kanals festgelegt, oder wie vom benutzeragenten zugewiesen.
    Mögliche Werte sind `"very-low"`, `"low"`, `"medium"` oder `"high"`.
- [`protocol`](/de/docs/Web/API/RTCDataChannel/protocol) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Namen des verwendeten Subprotokolls enthält.
    Wurde kein Protokoll angegeben,
    als der Datenkanal erstellt wurde,
    ist der Wert dieser Eigenschaft der leere String (`""`).
- [`readyState`](/de/docs/Web/API/RTCDataChannel/readyState) {{ReadOnlyInline}}
  - : Gibt einen String zurück,
    der den Zustand der zugrunde liegenden Datenverbindung des Datenkanals angibt.
    Er kann einen der folgenden Werte haben:
    `connecting`, `open`, `closing` oder `closed`.

### Veraltete Eigenschaften

- [`reliable`](/de/docs/Web/API/RTCDataChannel/reliable) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, ob der Datenkanal _zuverlässig_ ist oder nicht.

## Instanz-Methoden

_Erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`close()`](/de/docs/Web/API/RTCDataChannel/close)
  - : Schließt den `RTCDataChannel`.
    Entweder Peer darf diese Methode aufrufen,
    um den Kanal zu schließen.
- [`send()`](/de/docs/Web/API/RTCDataChannel/send)
  - : Sendet Daten über den Datenkanal an den entfernten Peer.

## Ereignisse

- [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)
  - : Wird gesendet,
    wenn die Anzahl der Bytes von Daten im ausgehenden Datenpuffer
    unter den Wert fällt, der mit [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) angegeben wurde.
- [`close`](/de/docs/Web/API/RTCDataChannel/close_event)
  - : Wird gesendet, wenn der zugrunde liegende Datentransport geschlossen wird.
- [`closing`](/de/docs/Web/API/RTCDataChannel/closing_event)
  - : Wird gesendet, wenn der zugrunde liegende Datentransport kurz vor dem Schließen steht.
- [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
  - : Wird gesendet, wenn ein Fehler auf dem Datenkanal auftritt.
- [`message`](/de/docs/Web/API/RTCDataChannel/message_event)
  - : Wird gesendet, wenn eine Nachricht vom entfernten Peer empfangen wurde.
    Der Inhalt der Nachricht kann in der Eigenschaft [`data`](/de/docs/Web/API/MessageEvent/data) des Ereignisses gefunden werden.
- [`open`](/de/docs/Web/API/RTCDataChannel/open_event)
  - : Wird gesendet, wenn der Datenkanal erstmals geöffnet wird,
    oder wenn die zugrunde liegende Verbindung eines bestehenden Datenkanals wieder geöffnet wird.

## Datenformat

Das zugrunde liegende Datenformat wird durch die IEEE-Spezifikation [SDP Offer/Answer Procedures for SCTP over DTLS Transport(RFC 8841)](https://datatracker.ietf.org/doc/rfc8841/) definiert. Das aktuelle Format spezifiziert sein Protokoll als entweder `"UDP/DTLS/SCTP"` (UDP mit DTLS mit SCTP) oder `"TCP/DTLS/SCTP"` (TCP mit DTLS mit SCTP). Ältere Browser spezifizieren möglicherweise nur `"DTLS/SCTP"`.

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

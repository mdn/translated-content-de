---
title: RTCDataChannel
slug: Web/API/RTCDataChannel
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("WebRTC")}}

Die **`RTCDataChannel`** Schnittstelle repräsentiert einen Netzwerkkanal, der für bidirektionale Peer-to-Peer-Übertragungen beliebiger Daten verwendet werden kann. Jeder Datenkanal ist mit einem {{DOMxRef("RTCPeerConnection")}} assoziiert, und jede Peer-Verbindung kann theoretisch bis zu 65.534 Datenkanäle haben (die tatsächliche Begrenzung kann je nach Browser variieren).

Um einen Datenkanal zu erstellen und einen entfernten Peer aufzufordern, sich anzuschließen, rufen Sie die Methode {{DOMxRef("RTCPeerConnection.createDataChannel", "createDataChannel()")}} von {{DOMxRef("RTCPeerConnection")}} auf. Der Peer, der eingeladen wird, Daten auszutauschen, erhält ein {{DOMxRef("RTCPeerConnection.datachannel_event", "datachannel")}} Ereignis (vom Typ {{DOMxRef("RTCDataChannelEvent")}}), um ihm mitzuteilen, dass der Datenkanal zur Verbindung hinzugefügt wurde.

`RTCDataChannel` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von {{DOMxRef("EventTarget")}}._

- {{DOMxRef("RTCDataChannel.binaryType", "binaryType")}}
  - : Ein String, der den Typ des Objekts angibt, das zur Darstellung von binären Daten verwendet werden soll, die im `RTCDataChannel` empfangen werden. Die Werte sind dieselben wie bei der {{DOMxRef("WebSocket.binaryType")}}-Eigenschaft erlaubt: `blob` wenn {{DOMxRef("Blob")}} Objekte verwendet werden, oder `arraybuffer` wenn {{jsxref("ArrayBuffer")}} Objekte verwendet werden. Der Standardwert ist `blob`.
- {{DOMxRef("RTCDataChannel.bufferedAmount", "bufferedAmount")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Bytes Daten zurück, die derzeit zur Übertragung über den Datenkanal in der Warteschlange stehen.
- {{DOMxRef("RTCDataChannel.bufferedAmountLowThreshold", "bufferedAmountLowThreshold")}}
  - : Gibt die Anzahl der Bytes an gepufferten ausgehenden Daten an, die als "gering" betrachtet werden. Der Standardwert ist 0.
- {{DOMxRef("RTCDataChannel.id", "id")}} {{ReadOnlyInline}}
  - : Gibt eine ID-Nummer (zwischen 0 und 65.534) zurück, die den `RTCDataChannel` eindeutig identifiziert.
- {{DOMxRef("RTCDataChannel.label", "label")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der einen Namen enthält, der den Datenkanal beschreibt. Diese Bezeichnungen müssen nicht eindeutig sein.
- {{DOMxRef("RTCDataChannel.maxPacketLifeTime", "maxPacketLifeTime")}} {{ReadOnlyInline}}
  - : Gibt die Zeit in Millisekunden zurück, die dem Browser zur Verfügung steht, um zu versuchen, eine Nachricht zu übertragen, wie bei der Erstellung des Datenkanals festgelegt, oder `null`.
- {{DOMxRef("RTCDataChannel.maxRetransmits", "maxRetransmits")}} {{ReadOnlyInline}}
  - : Gibt die maximale Anzahl der Versuche zurück, die der Browser unternehmen soll, um eine Nachricht erneut zu übertragen, bevor er aufgibt, wie bei der Erstellung des Datenkanals festgelegt, oder `null`, was anzeigt, dass es kein Maximum gibt.
- {{DOMxRef("RTCDataChannel.negotiated", "negotiated")}} {{ReadOnlyInline}}
  - : Gibt an, ob die Verbindung des `RTCDataChannel`'s von der Web-App (`true`) oder von der WebRTC-Schicht (`false`) verhandelt wurde. Der Standardwert ist `false`.
- {{DOMxRef("RTCDataChannel.ordered", "ordered")}} {{ReadOnlyInline}}
  - : Gibt an, ob der Datenkanal die geordnete Zustellung von Nachrichten garantiert; der Standardwert ist `true`, was bedeutet, dass der Datenkanal tatsächlich geordnet ist.
- {{DOMxRef("RTCDataChannel.protocol", "protocol")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Namen des verwendeten Subprotokolls enthält. Wenn beim Erstellen des Datenkanals kein Protokoll angegeben wurde, dann ist der Wert dieser Eigenschaft der leere String (`""`).
- {{DOMxRef("RTCDataChannel.readyState", "readyState")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Status der zugrunde liegenden Datenverbindung des Datenkanals angibt. Es kann einen der folgenden Werte haben: `connecting`, `open`, `closing` oder `closed`.

### Veraltete Eigenschaften

- {{DOMxRef("RTCDataChannel.reliable", "reliable")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt an, ob der Datenkanal _zuverlässig_ ist.

## Instanzmethoden

_Erbt auch Methoden von {{DOMxRef("EventTarget")}}._

- {{DOMxRef("RTCDataChannel.close", "close()")}}
  - : Schließt den `RTCDataChannel`. Beide Peers dürfen diese Methode aufrufen, um die Schließung des Kanals einzuleiten.
- {{DOMxRef("RTCDataChannel.send", "send()")}}
  - : Sendet Daten über den Datenkanal an den entfernten Peer.

## Ereignisse

- {{domxref("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}}
  - : Gesendet, wenn die Anzahl der Bytes von Daten im ausgehenden Datenpuffer unter den durch {{domxref("RTCDataChannel.bufferedAmountLowThreshold", "bufferedAmountLowThreshold")}} angegebenen Wert fällt.
- {{domxref("RTCDataChannel.close_event", "close")}}
  - : Gesendet, wenn der zugrunde liegende Datentransport geschlossen wird.
- {{domxref("RTCDataChannel.closing_event", "closing")}}
  - : Gesendet, wenn der zugrunde liegende Datentransport kurz davor ist, zu schließen.
- {{domxref("RTCDataChannel.error_event", "error")}}
  - : Gesendet, wenn ein Fehler auf dem Datenkanal auftritt.
- {{domxref("RTCDataChannel.message_event", "message")}}
  - : Gesendet, wenn eine Nachricht vom entfernten Peer empfangen wurde. Der Inhalt der Nachricht kann in der Eigenschaft {{domxref("MessageEvent.data", "data")}} des Ereignisses gefunden werden.
- {{domxref("RTCDataChannel.open_event", "open")}}
  - : Gesendet, wenn der Datenkanal erstmals geöffnet wird oder wenn die zugrunde liegende Verbindung eines bestehenden Datenkanals wieder geöffnet wird.

## Datenformat

Das zugrunde liegende Datenformat wird durch die IEEE-Spezifikation [SDP Offer/Answer Procedures for SCTP over DTLS Transport(RFC 8841)](https://datatracker.ietf.org/doc/rfc8841/) definiert. Das aktuelle Format spezifiziert sein Protokoll entweder als `"UDP/DTLS/SCTP"` (UDP, das DTLS, das SCTP trägt) oder `"TCP/DTLS/SCTP"` (TCP, das DTLS, das SCTP trägt). Ältere Browser können möglicherweise nur `"DTLS/SCTP"` spezifizieren.

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

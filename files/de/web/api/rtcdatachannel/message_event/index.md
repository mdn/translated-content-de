---
title: "RTCDataChannel: message-Ereignis"
short-title: message
slug: Web/API/RTCDataChannel/message_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebRTC")}}

Das WebRTC **`message`**-Ereignis wird an den `onmessage` Ereignis-Handler eines [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekts gesendet, wenn eine Nachricht vom entfernten Peer empfangen wurde.

> [!NOTE]
> Das `message`-Ereignis verwendet als Ereignisobjekttyp die [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Schnittstelle, die durch die HTML-Spezifikation definiert ist.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Blasenbildung aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("message", (event) => { })

onmessage = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`MessageEvent.data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die Daten, die vom Ereignisauslöser gesendet wurden.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Ereignisauslösers darstellt.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Ein Verweis auf den Ereignisauslöser, eines von {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker).
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, die die mit dem Kanal verbundenen Ports darstellen, durch den die Nachricht gesendet wird (wo zutreffend, z.B. bei Kanal-Messaging oder beim Senden einer Nachricht an einen Shared Worker).

## Beispiele

Für ein gegebenes [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), `dc`, das für eine Peer-Verbindung mit seiner Methode [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) erstellt wurde, richtet dieser Code einen Handler für eingehende Nachrichten ein und reagiert auf diese, indem er die im Nachrichtentext enthaltenen Daten dem aktuellen Dokument als neues {{HTMLElement("p")}} (Paragraph) Element hinzufügt.

```js
dc.addEventListener(
  "message",
  (event) => {
    let newParagraph = document.createElement("p");
    let textNode = document.createTextNode(event.data);
    newParagraph.appendChild(textNode);

    document.body.appendChild(newParagraph);
  },
  false,
);
```

Zuerst erstellen wir das neue Paragraph-Element und fügen die Nachrichtendaten als neuen Textknoten hinzu. Anschließend fügen wir das neue Paragraph am Ende des Dokumentenbodies hinzu.

Sie können auch die `onmessage`-Ereignis-Handler-Eigenschaft eines `RTCDataChannel`-Objekts verwenden, um den Ereignis-Handler festzulegen:

```js
dc.onmessage = (event) => {
  let newParagraph = document.createElement("p");
  let textNode = document.createTextNode(event.data);
  newParagraph.appendChild(textNode);

  document.body.appendChild(newParagraph);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- Verwandte Ereignisse: [`open`](/de/docs/Web/API/RTCDataChannel/open_event), [`close`](/de/docs/Web/API/RTCDataChannel/close_event) und [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
- [`RTCDataChannel.send()`](/de/docs/Web/API/RTCDataChannel/send)

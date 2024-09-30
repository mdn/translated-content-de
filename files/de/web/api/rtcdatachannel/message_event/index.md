---
title: "RTCDataChannel: message Ereignis"
short-title: message
slug: Web/API/RTCDataChannel/message_event
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Das WebRTC-**`message`**-Ereignis wird an den `onmessage`-Ereignishandler auf einem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt gesendet, wenn eine Nachricht von der entfernten Gegenstelle empfangen wurde.

> [!NOTE]
> Das `message`-Ereignis verwendet als sein Ereignisobjekttyp die [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Schnittstelle, die von der HTML-Spezifikation definiert wird.

Dieses Ereignis ist nicht abbruchbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`MessageEvent.data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die vom Nachrichtensender gesendeten Daten.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtensenders repräsentiert.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Eine Referenz auf den Nachrichtensender, eines der [WindowProxy](/de/docs/Glossary/WindowProxy), [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker).
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, das die Ports darstellt, die mit dem Kanal verbunden sind, über den die Nachricht gesendet wird (wo zutreffend, z. B. in der Kanalkommunikation oder beim Senden einer Nachricht an einen gemeinsamen Worker).

## Beispiele

Für ein gegebenes [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), `dc`, das für eine Peer-Verbindung mit seiner [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)-Methode erstellt wurde, richtet dieser Code einen Handler für eingehende Nachrichten ein und bearbeitet sie, indem er die in der Nachricht enthaltenen Daten als neues {{HTMLElement("p")}} (Absatz)-Element zum aktuellen Dokument hinzufügt.

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

Zuerst erstellen wir das neue Absatz-Element und fügen die Nachrichtendaten als neuen Textknoten hinzu. Dann fügen wir den neuen Absatz am Ende des Body-Dokuments an.

Sie können auch die `onmessage`-Ereignishandler-Eigenschaft eines `RTCDataChannel`-Objekts verwenden, um den Ereignishandler festzulegen:

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

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- Verwandte Ereignisse: [`open`](/de/docs/Web/API/RTCDataChannel/open_event), [`close`](/de/docs/Web/API/RTCDataChannel/close_event), und [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
- [`RTCDataChannel.send()`](/de/docs/Web/API/RTCDataChannel/send)

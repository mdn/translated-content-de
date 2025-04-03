---
title: "RTCDataChannel: message Ereignis"
short-title: message
slug: Web/API/RTCDataChannel/message_event
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebRTC")}}

Das WebRTC **`message`**-Ereignis wird dem `onmessage` Ereignishandler auf einem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt gesendet, wenn eine Nachricht vom entfernten Peer empfangen wurde.

> [!NOTE]
> Das `message`-Ereignis verwendet als seinen Ereignisobjekttyp die [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Schnittstelle, die durch die HTML-Spezifikation definiert ist.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht propagiert.

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
  - : Die von dem Nachrichtenemitter gesendeten Daten.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtenemitters repräsentiert.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Eine Referenz zum Nachrichtenemitter, einer von {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker).
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, die die Ports repräsentieren, die mit dem Kanal assoziiert sind, durch den die Nachricht gesendet wird (wo zutreffend, z.B. bei Kanalmeldungen oder wenn eine Nachricht an einen geteilten Worker gesendet wird).

## Beispiele

Für einen gegebenen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), `dc`, der für eine Peer-Verbindung mit seiner [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)-Methode erstellt wurde, richtet dieser Code einen Handler für eingehende Nachrichten ein und reagiert darauf, indem die im Nachricht enthaltenden Daten dem aktuellen Dokument als neues {{HTMLElement("p")}}-Element (Absatz) hinzugefügt werden.

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

Wir erstellen zuerst das neue Absatz-Element und fügen die Nachrichtendaten als neuen Textknoten hinzu. Dann hängen wir den neuen Absatz am Ende des Körperteils des Dokuments an.

Sie können auch die `onmessage`-Ereignishandlereigenschaft eines `RTCDataChannel`-Objekts verwenden, um den Ereignishandler einzustellen:

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
- Verwandte Ereignisse: [`open`](/de/docs/Web/API/RTCDataChannel/open_event), [`close`](/de/docs/Web/API/RTCDataChannel/close_event), und [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
- [`RTCDataChannel.send()`](/de/docs/Web/API/RTCDataChannel/send)

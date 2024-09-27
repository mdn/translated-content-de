---
title: "RTCDataChannel: message Ereignis"
short-title: message
slug: Web/API/RTCDataChannel/message_event
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Das WebRTC **`message`**-Ereignis wird an den `onmessage` Ereignis-Handler eines [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekts gesendet, wenn eine Nachricht vom entfernten Peer empfangen wurde.

> [!NOTE]
> Das `message`-Ereignis verwendet als Objekttyp das [`MessageEvent`](/de/docs/Web/API/MessageEvent) Interface, das in der HTML-Spezifikation definiert ist.

Dieses Ereignis ist nicht abbrechbar und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface, [`Event`](/de/docs/Web/API/Event)._

- [`MessageEvent.data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die vom Nachrichtensender gesendeten Daten.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtensenders repräsentiert.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Ein Verweis auf den Nachrichtensender, einer von [WindowProxy](/de/docs/Glossary/WindowProxy), [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker).
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, die die Ports darstellen, die mit dem Kanal verbunden sind, über den die Nachricht gesendet wird (wo zutreffend, z.B. beim Channel-Messaging oder beim Senden einer Nachricht an einen gemeinsam genutzten Worker).

## Beispiele

Für einen gegebenen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), `dc`, der für eine Peer-Verbindung mit seiner [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)-Methode erstellt wurde, richtet dieser Code einen Handler für eingehende Nachrichten ein und verarbeitet diese, indem er die im Nachrichtendaten enthaltenen Elemente als neues {{HTMLElement("p")}} (Absatz) Element zum aktuellen Dokument hinzufügt.

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

Zuerst erstellen wir das neue Absatzelement und fügen die Nachrichtendaten als neuen Textknoten hinzu. Anschließend fügen wir den neuen Absatz ans Ende des Dokuments im `body` an.

Sie können auch die `onmessage` Ereignis-Handler-Eigenschaft eines `RTCDataChannel`-Objekts verwenden, um den Ereignis-Handler zu setzen:

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

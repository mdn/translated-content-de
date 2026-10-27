---
title: "RTCDataChannel: message-Ereignis"
short-title: message
slug: Web/API/RTCDataChannel/message_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("WebRTC")}}

Das WebRTC-Ereignis **`message`** wird an den `onmessage`-Ereignishandler eines [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekts gesendet, wenn eine Nachricht vom entfernten Peer empfangen wurde.

> [!NOTE]
> Das `message`-Ereignis verwendet als Ereignisobjekttyp die in der HTML-Spezifikation definierte Schnittstelle [`MessageEvent`](/de/docs/Web/API/MessageEvent).

Dieses Ereignis kann nicht abgebrochen werden und breitet sich nicht nach oben aus.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("message", (event) => { })
```

Alternativ können Sie den Handler der [Ereignishandler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onmessage = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Beispiele

Für einen gegebenen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), `dc`, der für eine Peer-Verbindung mit deren Methode [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) erstellt wurde, richtet dieser Code einen Handler für eingehende Nachrichten ein. Er verarbeitet sie, indem er die in der Nachricht enthaltenen Daten als neues {{HTMLElement("p")}}-Element (Absatz) zum aktuellen Dokument hinzufügt.

```js
dc.addEventListener("message", (event) => {
  let newParagraph = document.createElement("p");
  let textNode = document.createTextNode(event.data);
  newParagraph.appendChild(textNode);

  document.body.appendChild(newParagraph);
});
```

Zuerst erstellen wir das neue Absatzelement und fügen ihm die Nachrichtendaten als neuen Textknoten hinzu. Anschließend hängen wir den neuen Absatz an das Ende des Dokument-Bodys an.

Sie können den Ereignishandler auch über die `onmessage`-Ereignishandler-Eigenschaft eines `RTCDataChannel`-Objekts festlegen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onmessage` hinzugefügte Ereignis-Listener ersetzt werden:

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
- Verwandte Ereignisse: [`open`](/de/docs/Web/API/RTCDataChannel/open_event), [`close`](/de/docs/Web/API/RTCDataChannel/close_event) und [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
- [`RTCDataChannel.send()`](/de/docs/Web/API/RTCDataChannel/send)

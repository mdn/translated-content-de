---
title: "RTCDataChannel: message-Ereignis"
short-title: message
slug: Web/API/RTCDataChannel/message_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebRTC")}}

Das WebRTC **`message`**-Ereignis wird an den `onmessage`-Ereignis-Handler eines [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekts gesendet, wenn eine Nachricht vom entfernten Peer empfangen wurde.

> [!NOTE]
> Das `message`-Ereignis verwendet als Event-Objekttyp das [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Interface, das durch die HTML-Spezifikation definiert ist.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("message", (event) => { })

onmessage = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Beispiele

Für ein gegebenes [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), `dc`, das für eine Peer-Verbindung unter Verwendung der Methode [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) erstellt wurde, setzt dieser Code einen Handler für eingehende Nachrichten auf und verarbeitet diese, indem die im Ereignis enthaltenen Daten als neues {{HTMLElement("p")}}-Element (Absatz) in das aktuelle Dokument eingefügt werden.

```js
dc.addEventListener("message", (event) => {
  let newParagraph = document.createElement("p");
  let textNode = document.createTextNode(event.data);
  newParagraph.appendChild(textNode);

  document.body.appendChild(newParagraph);
});
```

Wir erstellen zunächst das neue Absatz-Element und fügen die Nachrichtendaten als neuen Textknoten hinzu. Dann fügen wir den neuen Absatz an das Ende des Dokumentkörpers an.

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

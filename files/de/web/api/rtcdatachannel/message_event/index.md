---
title: "RTCDataChannel: message Ereignis"
short-title: message
slug: Web/API/RTCDataChannel/message_event
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{APIRef("WebRTC")}}

Das WebRTC-**`message`**-Ereignis wird an den `onmessage`-Ereignishandler eines [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekts gesendet, wenn eine Nachricht vom Remote-Peer empfangen wurde.

> [!NOTE]
> Das `message`-Ereignis verwendet als Ereignisobjekttyp das [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Interface, das durch die HTML-Spezifikation definiert ist.

Dieses Ereignis ist nicht abbruchfähig und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("message", (event) => { })

onmessage = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface, [`Event`](/de/docs/Web/API/Event)._

- [`MessageEvent.data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die von der Nachrichtenquelle gesendeten Daten.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung der Nachrichtenquelle repräsentiert.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Ein Verweis auf die Nachrichtenquelle, einer von {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker).
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, die die mit dem Kanal, über den die Nachricht gesendet wird, assoziierten Ports darstellen (wo zutreffend, z.B. bei Kanalnachrichten oder beim Senden einer Nachricht an einen Shared Worker).

## Beispiele

Für ein gegebenes [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), `dc`, das für eine Peer-Verbindung mit seiner [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)-Methode erstellt wurde, richtet dieser Code einen Handler für eingehende Nachrichten ein und reagiert darauf, indem die im Nachrichtentext enthaltenen Daten als neues {{HTMLElement("p")}}- (Paragraph-)Element dem aktuellen Dokument hinzugefügt werden.

```js
dc.addEventListener("message", (event) => {
  let newParagraph = document.createElement("p");
  let textNode = document.createTextNode(event.data);
  newParagraph.appendChild(textNode);

  document.body.appendChild(newParagraph);
});
```

Wir erstellen zuerst das neue Absatz-Element und fügen die Nachrichtendaten als neuen Textknoten hinzu. Dann fügen wir den neuen Absatz am Ende des Body des Dokuments an.

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

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- Verwandte Ereignisse: [`open`](/de/docs/Web/API/RTCDataChannel/open_event), [`close`](/de/docs/Web/API/RTCDataChannel/close_event) und [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
- [`RTCDataChannel.send()`](/de/docs/Web/API/RTCDataChannel/send)

---
title: "RTCDataChannel: Nachricht-Ereignis"
short-title: Nachricht
slug: Web/API/RTCDataChannel/message_event
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Das WebRTC **`message`**-Ereignis wird an den `onmessage`-Ereignis-Handler eines {{domxref("RTCDataChannel")}}-Objekts gesendet, wenn eine Nachricht vom entfernten Peer empfangen wurde.

> [!NOTE]
> Das `message`-Ereignis verwendet die Schnittstelle {{domxref("MessageEvent")}} als Objekttyp, die durch die HTML-Spezifikation definiert ist.

Dieses Ereignis kann nicht abgebrochen werden und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## Ereignistyp

Ein {{domxref("MessageEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Erbt ebenfalls Eigenschaften von der übergeordneten Schnittstelle, {{domxref("Event")}}._

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : Die Daten, die vom Nachrichten-Emitter gesendet wurden.
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : Ein String, der die Herkunft des Nachrichten-Emitters repräsentiert.
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis repräsentiert.
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : Eine Referenz auf den Nachrichten-Emitter, eine von {{glossary("WindowProxy")}}, {{domxref("MessagePort")}} oder {{domxref("ServiceWorker")}}.
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : Ein Array von {{domxref("MessagePort")}}-Objekten, die die Ports darstellen, die mit dem Kanal assoziiert sind, durch den die Nachricht gesendet wird (wo zutreffend, z.B. bei Kanalnachrichten oder beim Senden einer Nachricht an einen Shared Worker).

## Beispiele

Für ein gegebenes {{domxref("RTCDataChannel")}}, `dc`, das für eine Peer-Verbindung mit der Methode {{domxref("RTCPeerConnection.createDataChannel", "createDataChannel()")}} erstellt wurde, legt dieser Code einen Handler für eingehende Nachrichten fest und verarbeitet diese, indem die im Nachrichtentext enthaltenen Daten als {{HTMLElement("p")}}-Element (Absatz) dem aktuellen Dokument hinzugefügt werden.

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

Wir erstellen zunächst das neue Absatzelement und fügen die Nachrichtendaten als neuen Textknoten hinzu. Dann hängen wir den neuen Absatz an das Ende des Dokumentkörpers an.

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

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- Verwandte Ereignisse: {{domxref("RTCDataChannel.open_event", "open")}}, {{domxref("RTCDataChannel.close_event", "close")}}, und {{domxref("RTCDataChannel.error_event", "error")}}
- {{domxref("RTCDataChannel.send()")}}

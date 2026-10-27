---
title: "Window: message-Ereignis"
short-title: message
slug: Web/API/Window/message_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("HTML DOM")}}

Das `message`-Ereignis wird auf einem [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst, wenn das Fenster eine Nachricht empfängt, beispielsweise durch einen Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("message", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onmessage = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Es erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Beispiele

Angenommen, ein Skript sendet mit folgendem Code eine Nachricht an einen anderen Browsing-Kontext, beispielsweise an ein anderes [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe):

```js
const targetFrame = window.top.frames[1];
const targetOrigin = "https://example.org";
const windowMessageButton = document.querySelector("#window-message");

windowMessageButton.addEventListener("click", () => {
  targetFrame.postMessage("hello there", targetOrigin);
});
```

Der Empfänger kann mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) und folgendem Code auf die Nachricht warten:

```js
window.addEventListener("message", (event) => {
  console.log(`Received message: ${event.data}`);
});
```

Alternativ kann der Listener die Event-Handler-Eigenschaft `onmessage` verwenden. Beachten Sie jedoch, dass dadurch andere mit `onmessage` hinzugefügte Event-Listener ersetzt werden, sofern vorhanden:

```js
window.onmessage = (event) => {
  console.log(`Received message: ${event.data}`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandtes Ereignis: [`messageerror`](/de/docs/Web/API/Window/messageerror_event).
- [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage).

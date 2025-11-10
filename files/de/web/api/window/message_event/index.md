---
title: "Window: message event"
short-title: message
slug: Web/API/Window/message_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das `message`-Ereignis wird auf einem [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst, wenn das Fenster eine Nachricht empfängt, zum Beispiel durch einen Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsingskontext.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht an andere Elemente weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungs-Eigenschaft.

```js-nolint
addEventListener("message", (event) => { })

onmessage = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`MessageEvent.data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die von dem Nachrichtensender übermittelten Daten.
- [`MessageEvent.origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtensenders repräsentiert.
- [`MessageEvent.lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- [`MessageEvent.source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
  - : Eine `MessageEventSource` (die ein {{Glossary("WindowProxy", "WindowProxy")}}, [`MessagePort`](/de/docs/Web/API/MessagePort) oder [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann), die den Nachrichtensender repräsentiert.
- [`MessageEvent.ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}
  - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, die die Ports repräsentieren, die mit dem Kanal verbunden sind, über den die Nachricht gesendet wird (soweit zutreffend, z. B. bei der Kanalnachrichtenübertragung oder beim Senden einer Nachricht an einen Shared Worker).

## Beispiele

Angenommen, ein Skript sendet eine Nachricht an einen anderen Browsing-Kontext, wie ein anderes [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), mit Code wie diesem:

```js
const targetFrame = window.top.frames[1];
const targetOrigin = "https://example.org";
const windowMessageButton = document.querySelector("#window-message");

windowMessageButton.addEventListener("click", () => {
  targetFrame.postMessage("hello there", targetOrigin);
});
```

Der Empfänger kann für die Nachricht mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) lauschen, indem er Code wie diesen verwendet:

```js
window.addEventListener("message", (event) => {
  console.log(`Received message: ${event.data}`);
});
```

Alternativ könnte der Listener die `onmessage`-Ereignisbehandlungseigenschaft verwenden:

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

- Verwandte Ereignisse: [`messageerror`](/de/docs/Web/API/Window/messageerror_event).
- [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage).

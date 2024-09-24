---
title: "Fenster: Nachricht-Ereignis"
short-title: Nachricht
slug: Web/API/Window/message_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Das `message`-Ereignis wird auf einem {{domxref('Window')}}-Objekt ausgelöst, wenn das Fenster eine Nachricht erhält, beispielsweise durch einen Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.

Dieses Ereignis ist nicht abbrechbar und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## Ereignistyp

Ein {{domxref("MessageEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, {{domxref("Event")}}._

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : Die von dem Nachrichtensender gesendeten Daten.
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtensenders darstellt.
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : Eine `MessageEventSource` (die ein {{glossary("WindowProxy")}}, {{domxref("MessagePort")}}, oder {{domxref("ServiceWorker")}} Objekt sein kann), die den Nachrichtensender darstellt.
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : Ein Array von {{domxref("MessagePort")}}-Objekten, das die mit dem Kanal verbundenen Ports darstellt, durch den die Nachricht gesendet wird (wo zutreffend, z.B. bei Kanal-Nachrichten oder beim Senden einer Nachricht an einen gemeinsamen Worker).

## Beispiele

Angenommen, ein Skript sendet eine Nachricht an einen anderen Browsing-Kontext, wie ein anderes [`<iframe>`](/de/docs/Web/HTML/Element/iframe), mit einem Code wie diesem:

```js
const targetFrame = window.top.frames[1];
const targetOrigin = "https://example.org";
const windowMessageButton = document.querySelector("#window-message");

windowMessageButton.addEventListener("click", () => {
  targetFrame.postMessage("hello there", targetOrigin);
});
```

Der Empfänger kann auf die Nachricht hören, indem er [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mit einem Code wie diesem verwendet:

```js
window.addEventListener("message", (event) => {
  console.log(`Received message: ${event.data}`);
});
```

Alternativ könnte der Listener die `onmessage`-Ereignishandler-Eigenschaft verwenden:

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

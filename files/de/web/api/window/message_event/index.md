---
title: "Window: message event"
short-title: message
slug: Web/API/Window/message_event
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Das `message`-Ereignis wird bei einem [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst, wenn das Fenster eine Nachricht erhält, zum Beispiel durch einen Aufruf von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) aus einem anderen Browsing-Kontext.

Dieses Ereignis ist nicht abbruchfähig und wird nicht propagiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignisbehandlereigenschaft.

```js-nolint
addEventListener("message", (event) => { })

onmessage = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Beispiele

Angenommen, ein Skript sendet eine Nachricht an einen anderen Browsing-Kontext, wie ein anderes [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe), mit folgendem Code:

```js
const targetFrame = window.top.frames[1];
const targetOrigin = "https://example.org";
const windowMessageButton = document.querySelector("#window-message");

windowMessageButton.addEventListener("click", () => {
  targetFrame.postMessage("hello there", targetOrigin);
});
```

Der Empfänger kann mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf die Nachricht hören, mit folgendem Code:

```js
window.addEventListener("message", (event) => {
  console.log(`Received message: ${event.data}`);
});
```

Alternativ könnte der Listener die `onmessage`-Ereignisbehandlereigenschaft nutzen:

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

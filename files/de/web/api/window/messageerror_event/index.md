---
title: "Window: messageerror Ereignis"
short-title: messageerror
slug: Web/API/Window/messageerror_event
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Das `messageerror`-Ereignis wird bei einem [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst, wenn es eine Nachricht empfängt, die nicht deserialisiert werden kann.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("messageerror", (event) => { })

onmessageerror = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Beispiele

Hören Sie auf `messageerror` mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js
window.addEventListener("messageerror", (event) => {
  console.error(event);
});
```

Das Gleiche, aber mit der `onmessageerror`-Ereignis-Handler-Eigenschaft:

```js
window.onmessageerror = (event) => {
  console.error(event);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)
- Verwandte Ereignisse: [`message`](/de/docs/Web/API/Window/message_event).

---
title: "Window: messageerror-Ereignis"
short-title: messageerror
slug: Web/API/Window/messageerror_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("HTML DOM")}}

Das Ereignis `messageerror` wird auf einem [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst, wenn es eine Nachricht empfängt, die nicht deserialisiert werden kann.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("messageerror", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onmessageerror = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Beispiele

So reagieren Sie mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf `messageerror`:

```js
window.addEventListener("messageerror", (event) => {
  console.error(event);
});
```

Dasselbe mit der Event-Handler-Eigenschaft `onmessageerror`. Beachten Sie jedoch, dass dadurch gegebenenfalls andere Ereignis-Listener ersetzt werden, die über `onmessageerror` hinzugefügt wurden:

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
- Zugehöriges Ereignis: [`message`](/de/docs/Web/API/Window/message_event).

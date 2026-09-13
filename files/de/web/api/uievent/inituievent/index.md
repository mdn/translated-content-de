---
title: "UIEvent: initUIEvent() Methode"
short-title: initUIEvent()
slug: Web/API/UIEvent/initUIEvent
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

{{APIRef("UI Events")}}

Die **`UIEvent.initUIEvent()`** Methode initialisiert ein UI-Event, sobald es erstellt wurde.

Ereignisse, die auf diese Weise initialisiert werden, müssen mit der [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) Methode erstellt worden sein. Diese Methode muss aufgerufen werden, um das Ereignis zu setzen, bevor es mittels [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wird. Einmal ausgelöst, hat es keine Wirkung mehr.

> [!WARNING]
> Verwenden Sie diese Methode nicht mehr, da sie veraltet ist.
>
> Verwenden Sie stattdessen spezifische Ereignis-Konstruktoren, wie [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent). Die Seite über [Erstellen und Auslösen von Ereignissen](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events) gibt mehr Informationen darüber, wie diese zu verwenden sind.

## Syntax

```js-nolint
initUIEvent(type, canBubble, cancelable, view, detail)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses definiert.
- `canBubble`
  - : Ein boolescher Wert, der entscheidet, ob das Ereignis die Ereigniskette hinaufblasen soll oder nicht. Einmal gesetzt, gibt die schreibgeschützte Eigenschaft [`Event.bubbles`](/de/docs/Web/API/Event/bubbles) ihren Wert.
- `cancelable`
  - : Ein boolescher Wert, der definiert, ob das Ereignis abgebrochen werden kann. Einmal gesetzt, gibt die schreibgeschützte Eigenschaft [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) ihren Wert.
- `view`
  - : Ist das {{Glossary("WindowProxy", "WindowProxy")}}, das mit dem Ereignis verknüpft ist.
- `detail`
  - : Ein `unsigned long`, der einige Detailinformationen über das Ereignis angibt, abhängig vom Ereignistyp. Bei Mausereignissen gibt er an, wie oft die Maus an einem bestimmten Bildschirmort angeklickt wurde.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const e = document.createEvent("UIEvent");
// creates a click event that bubbles, can be canceled,
// and with its view and detail property initialized to window and 1,
// respectively
e.initUIEvent("click", true, true, window, 1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`UIEvent`](/de/docs/Web/API/UIEvent)
- Der Konstruktor, der anstelle dieser veralteten Methode verwendet werden soll:
  [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent). Es können auch spezifischere Konstruktoren verwendet werden.

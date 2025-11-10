---
title: "UIEvent: initUIEvent() Methode"
short-title: initUIEvent()
slug: Web/API/UIEvent/initUIEvent
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{APIRef("UI Events")}} {{deprecated_header}}

Die **`UIEvent.initUIEvent()`** Methode initialisiert ein UI-Event, nachdem es erstellt wurde.

Events, die auf diese Weise initialisiert werden, müssen mit der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellt worden sein. Diese Methode muss aufgerufen werden, um das Event festzulegen, bevor es mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wird. Einmal ausgelöst, hat sie keine weitere Funktion.

> [!WARNING]
> Verwenden Sie diese Methode nicht mehr, da sie veraltet ist.
>
> Verwenden Sie stattdessen spezifische Event-Konstruktoren, wie [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent). Die Seite zum [Erstellen und Auslösen von Events](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events) bietet weitere Informationen zur Verwendung dieser.

## Syntax

```js-nolint
initUIEvent(type, canBubble, cancelable, view, detail)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Events definiert.
- `canBubble`
  - : Ein boolescher Wert, der festlegt, ob das Event durch die Ereigniskette nach oben blubbern soll oder nicht. Einmal festgelegt, gibt die schreibgeschützte Eigenschaft [`Event.bubbles`](/de/docs/Web/API/Event/bubbles) ihren Wert an.
- `cancelable`
  - : Ein boolescher Wert, der festlegt, ob das Event abgebrochen werden kann. Einmal festgelegt, gibt die schreibgeschützte Eigenschaft [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) ihren Wert an.
- `view`
  - : Ist der {{Glossary("WindowProxy", "WindowProxy")}}, der mit dem Event assoziiert ist.
- `detail`
  - : Ein `unsigned long`, der einige Detailinformationen über das Event angibt, abhängig vom Ereignistyp. Bei Mausereignissen gibt es an, wie oft die Maus an einem bestimmten Bildschirmort geklickt wurde.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const e = document.createEvent("UIEvent");
// creates a click event that bubbles, can be cancelled,
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
- Der Konstruktor, der anstelle dieser veralteten Methode verwendet werden sollte:
  [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent). Auch spezifischere Konstruktoren können verwendet werden.

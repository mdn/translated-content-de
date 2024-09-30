---
title: "UIEvent: initUIEvent() Methode"
short-title: initUIEvent()
slug: Web/API/UIEvent/initUIEvent
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("UI Events")}} {{deprecated_header}}

Die **`UIEvent.initUIEvent()`** Methode initialisiert ein UI-Ereignis, nachdem es erstellt wurde.

Ereignisse, die auf diese Weise initialisiert werden, müssen mit der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellt worden sein. Diese Methode muss aufgerufen werden, um das Ereignis zu setzen, bevor es mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wird. Einmal ausgelöst, tut es nichts mehr.

> [!WARNING]
> Verwenden Sie diese Methode nicht mehr, da sie veraltet ist.
>
> Stattdessen sollten Sie spezifische Ereignis-Konstruktoren verwenden, wie z.B. [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent). Die Seite [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events) bietet weitere Informationen darüber, wie diese verwendet werden.

## Syntax

```js-nolint
initUIEvent(type, canBubble, cancelable, view, detail)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses definiert.
- `canBubble`
  - : Ein boolescher Wert, der entscheidet, ob das Ereignis die Ereigniskette hinauf propagiert werden soll oder nicht. Einmal gesetzt, gibt die schreibgeschützte Eigenschaft [`Event.bubbles`](/de/docs/Web/API/Event/bubbles) ihren Wert zurück.
- `cancelable`
  - : Ein boolescher Wert, der definiert, ob das Ereignis abgebrochen werden kann. Einmal gesetzt, gibt die schreibgeschützte Eigenschaft [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) ihren Wert zurück.
- `view`
  - : Ist das [WindowProxy](/de/docs/Glossary/WindowProxy), das mit dem Ereignis assoziiert ist.
- `detail`
  - : Ein `unsigned long`, der einige Detailinformationen über das Ereignis angibt, abhängig vom Typ des Ereignisses. Bei Mausereignissen gibt es an, wie oft die Maus an einer bestimmten Bildschirmposition geklickt wurde.

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
  [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent). Es können auch spezifischere Konstruktoren verwendet werden.

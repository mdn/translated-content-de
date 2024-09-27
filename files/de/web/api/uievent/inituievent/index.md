---
title: "UIEvent: initUIEvent() Methode"
short-title: initUIEvent()
slug: Web/API/UIEvent/initUIEvent
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("UI Events")}} {{deprecated_header}}

Die **`UIEvent.initUIEvent()`**-Methode initialisiert ein UI-Ereignis, nachdem es erstellt wurde.

Ereignisse, die auf diese Weise initialisiert werden, müssen mit der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellt worden sein. Diese Methode muss aufgerufen werden, um das Ereignis festzulegen, bevor es mittels [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wird. Einmal ausgelöst, tut es nichts mehr.

> [!WARNING]
> Verwenden Sie diese Methode nicht mehr, da sie veraltet ist.
>
> Verwenden Sie stattdessen spezifische Ereignis-Konstruktoren, wie z.B. [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent). Die Seite über [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events) bietet mehr Informationen zur Nutzung dieser.

## Syntax

```js-nolint
initUIEvent(type, canBubble, cancelable, view, detail)
```

### Parameter

- `type`
  - : Ein Zeichenfolgenwert, der den Typ des Ereignisses definiert.
- `canBubble`
  - : Ein boolescher Wert, der entscheidet, ob das Ereignis in der Ereigniskette nach oben steigen soll oder nicht. Einmal festgelegt, gibt die schreibgeschützte Eigenschaft [`Event.bubbles`](/de/docs/Web/API/Event/bubbles) dessen Wert an.
- `cancelable`
  - : Ein boolescher Wert, der definiert, ob das Ereignis abgebrochen werden kann. Einmal festgelegt, gibt die schreibgeschützte Eigenschaft [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) dessen Wert an.
- `view`
  - : Ist das [WindowProxy](/de/docs/Glossary/WindowProxy), das mit dem Ereignis verbunden ist.
- `detail`
  - : Ein `unsigned long`, der einige Detailinformationen über das Ereignis angibt, abhängig vom Ereignistyp. Bei Mausereignissen zeigt es an, wie oft die Maus an einem bestimmten Bildschirmort geklickt wurde.

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

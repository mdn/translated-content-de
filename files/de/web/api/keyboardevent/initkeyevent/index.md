---
title: "KeyboardEvent: Methode initKeyEvent()"
short-title: initKeyEvent()
slug: Web/API/KeyboardEvent/initKeyEvent
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}

> [!WARNING]
> Verwenden Sie diese Methode NICHT; verwenden Sie stattdessen den {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}} Konstruktor!
>
> Die Methode wurde aus der DOM-Spezifikation entfernt und wird von keinem aktuellen Browser unterstützt.
> Firefox versteckt diese Methode hinter der Einstellung (`dom.keyboardevent.init_key_event.enabled`) ab Version 93 und plant, sie kurz darauf zu entfernen.

{{deprecated_header}}

Die **`KeyboardEvent.initKeyEvent()`** Methode wird verwendet, um den Wert eines Ereignisses zu initialisieren, das mit {{domxref("document.createEvent")}} `("KeyboardEvent")` erstellt wurde. Ereignisse, die auf diese Weise initialisiert werden, müssen mit der Methode {{domxref("document.createEvent")}} `("KeyboardEvent")` erstellt worden sein. `initKeyEvent()` muss aufgerufen werden, um das Ereignis zu setzen, bevor es [ausgelöst](/de/docs/Web/API/EventTarget/dispatchEvent) wird.

## Syntax

```js-nolint
initKeyEvent (type, bubbles, cancelable, view,
                    ctrlKey, altKey, shiftKey, metaKey,
                    keyCode, charCode)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses repräsentiert.
- `bubbles`
  - : Ein boolescher Wert, der angibt, ob das Ereignis durch die
    Ereigniskette aufsteigen soll oder nicht (siehe [bubbles](/de/docs/Web/API/Event/bubbles)).
- `cancelable`
  - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann (siehe [cancelable](/de/docs/Web/API/Event/cancelable)).
- `view`
  - : Gibt die {{domxref("UIEvent.view")}} an; dieser Wert kann `null` sein.
- `ctrlKey`
  - : Ein boolescher Wert, der `true` ist, wenn die virtuelle Taste, die
    erzeugt werden soll, eine Kombination von Tasten mit der <kbd>Ctrl</kbd>-Taste ist.
- `altKey`
  - : Ein boolescher Wert, der `true` ist, wenn die virtuelle Taste, die
    erzeugt werden soll, eine Kombination von Tasten mit der <kbd>Alt</kbd>-Taste ist.
- `shiftKey`
  - : Ein boolescher Wert, der `true` ist, wenn die virtuelle Taste, die erzeugt werden soll,
    eine Kombination von Tasten mit der <kbd>Shift</kbd>-Taste ist.
- `metaKey`
  - : Ein boolescher Wert, der `true` ist, wenn die virtuelle Taste, die
    erzeugt werden soll, eine Kombination von Tasten mit der <kbd>Meta</kbd>-Taste ist.
- `keyCode`
  - : Ein `unsigned long`, der den virtuellen Tastenwert der
    gedrückten Taste repräsentiert, andernfalls `0`. Siehe {{domxref("KeyboardEvent.keyCode")}} für die Liste der Tasten-Codes.
- `charCode`
  - : Ein `unsigned long`, der das Unicode-Zeichen repräsentiert, das
    der gedrückten Taste zugeordnet ist, andernfalls `0`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const event = document.createEvent("KeyboardEvent"); // Ein Tastaturereignis erstellen
// Das Ereignis definieren
event.initKeyEvent(
  "keypress", // typeArg
  true, // canBubbleArg
  true, // cancelableArg
  null, // viewArg, specifies UIEvent.view. This value may be null.
  false, // ctrlKeyArg,
  false, // altKeyArg,
  false, // shiftKeyArg,
  false, // metaKeyArg,
  9, // keyCodeArg
  0,
); // charCodeArg);

document.getElementById("blah").dispatchEvent(event);
```

## Spezifikationen

Diese Implementierung von Tastaturereignissen basiert auf der Tastenereignis-Spezifikation in den [frühen Versionen von DOM 2 Events](https://www.w3.org/TR/1999/WD-DOM-Level-2-19990923/events.html), die später aus dieser Spezifikation entfernt wurde zugunsten von {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}, die stattdessen verwendet werden sollte.

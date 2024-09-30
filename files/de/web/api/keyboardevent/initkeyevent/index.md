---
title: "KeyboardEvent: initKeyEvent()-Methode"
short-title: initKeyEvent()
slug: Web/API/KeyboardEvent/initKeyEvent
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}

> [!WARNING]
> Verwenden Sie diese Methode NICHT; Nutzen Sie stattdessen den [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent) Konstruktor!
>
> Die Methode wurde aus der DOM-Spezifikation entfernt und wird von keinem aktuellen Browser unterstützt.
> Firefox verbirgt diese Methode hinter der Einstellung (`dom.keyboardevent.init_key_event.enabled`) ab Version 93 und plant, sie kurz danach zu entfernen.

{{deprecated_header}}

Die **`KeyboardEvent.initKeyEvent()`**-Methode wird verwendet, um den Wert eines Ereignisses zu initialisieren, das mit [`document.createEvent`](/de/docs/Web/API/Document/createEvent) `("KeyboardEvent")` erstellt wurde. Auf diese Weise initialisierte Ereignisse müssen mit der [`document.createEvent`](/de/docs/Web/API/Document/createEvent) `("KeyboardEvent")`-Methode erstellt worden sein. `initKeyEvent()` muss aufgerufen werden, um das Ereignis festzulegen, bevor es [dispatched](/de/docs/Web/API/EventTarget/dispatchEvent) wird.

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
  - : Ein boolescher Wert, der angibt, ob das Ereignis durch die Ereigniskette nach oben weitergereicht werden soll oder nicht (siehe [bubbles](/de/docs/Web/API/Event/bubbles)).
- `cancelable`
  - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann (siehe [cancelable](/de/docs/Web/API/Event/cancelable)).
- `view`
  - : Gibt das [`UIEvent.view`](/de/docs/Web/API/UIEvent/view) an; dieser Wert kann `null` sein.
- `ctrlKey`
  - : Ein boolescher Wert, der `true` ist, wenn der zu generierende virtuelle Schlüssel eine Kombination von Tasten enthält, die die <kbd>Strg</kbd> Taste enthalten.
- `altKey`
  - : Ein boolescher Wert, der `true` ist, wenn der zu generierende virtuelle Schlüssel eine Kombination von Tasten enthält, die die <kbd>Alt</kbd> Taste enthalten.
- `shiftKey`
  - : Ein boolescher Wert, der `true` ist, wenn der zu generierende virtuelle Schlüssel eine Kombination von Tasten enthält, die die <kbd>Shift</kbd> Taste enthalten.
- `metaKey`
  - : Ein boolescher Wert, der `true` ist, wenn der zu generierende virtuelle Schlüssel eine Kombination von Tasten enthält, die die <kbd>Meta</kbd> Taste enthalten.
- `keyCode`
  - : Ein `unsigned long`, der den virtuellen Tastencode-Wert der gedrückten Taste repräsentiert, sonst `0`. Siehe [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) für die Liste der Tastencodes.
- `charCode`
  - : Ein `unsigned long`, der das Unicode-Zeichen, das mit der gedrückten Taste verbunden ist, repräsentiert, sonst `0`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const event = document.createEvent("KeyboardEvent"); // create a key event
// define the event
event.initKeyEvent(
  "keypress", // typeArg,
  true, // canBubbleArg,
  true, // cancelableArg,
  null, // viewArg, Specifies UIEvent.view. This value may be null.
  false, // ctrlKeyArg,
  false, // altKeyArg,
  false, // shiftKeyArg,
  false, // metaKeyArg,
  9, // keyCodeArg,
  0,
); // charCodeArg);

document.getElementById("blah").dispatchEvent(event);
```

## Spezifikationen

Diese Implementierung von Tastaturereignissen basiert auf der Tastenereignis-Spezifikation in den [frühen Versionen von DOM 2 Events](https://www.w3.org/TR/1999/WD-DOM-Level-2-19990923/events.html), die später aus dieser Spezifikation entfernt wurde zugunsten von [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent), das stattdessen verwendet werden sollte.

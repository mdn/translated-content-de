---
title: "KeyboardEvent: initKeyEvent()-Methode"
short-title: initKeyEvent()
slug: Web/API/KeyboardEvent/initKeyEvent
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("UI Events")}}

> [!WARNING]
> Verwenden Sie diese Methode NICHT; Nutzen Sie stattdessen den [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent)-Konstruktor!
>
> Die Methode wurde aus der DOM-Spezifikation entfernt und wird von keinem aktuellen Browser unterstützt.
> Firefox verbirgt diese Methode hinter der Einstellung (`dom.keyboardevent.init_key_event.enabled`) ab Version 93 und plant, sie kurz danach zu entfernen.

{{deprecated_header}}

Die **`KeyboardEvent.initKeyEvent()`**-Methode wird verwendet, um den Wert eines Ereignisses zu initialisieren, das mit [`document.createEvent`](/de/docs/Web/API/Document/createEvent) `("KeyboardEvent")` erstellt wurde. Ereignisse, die auf diese Weise initialisiert werden, müssen mit der Methode [`document.createEvent`](/de/docs/Web/API/Document/createEvent) `("KeyboardEvent")` erstellt worden sein. `initKeyEvent()` muss aufgerufen werden, um das Ereignis zu setzen, bevor es [ausgelöst](/de/docs/Web/API/EventTarget/dispatchEvent) wird.

## Syntax

```js-nolint
initKeyEvent(type, bubbles, cancelable, view,
                    ctrlKey, altKey, shiftKey, metaKey,
                    keyCode, charCode)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses darstellt.
- `bubbles`
  - : Ein boolescher Wert, der angibt, ob das Ereignis in der Ereigniskette nach oben weitergegeben werden soll (siehe [bubbles](/de/docs/Web/API/Event/bubbles)).
- `cancelable`
  - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann (siehe [cancelable](/de/docs/Web/API/Event/cancelable)).
- `view`
  - : Spezifiziert das [`UIEvent.view`](/de/docs/Web/API/UIEvent/view); dieser Wert kann `null` sein.
- `ctrlKey`
  - : Ein boolescher Wert, der `true` ist, wenn die zu erstellende virtuelle Taste eine Kombination von Tasten ist, die die <kbd>Strg</kbd>-Taste enthält.
- `altKey`
  - : Ein boolescher Wert, der `true` ist, wenn die zu erstellende virtuelle Taste eine Kombination von Tasten ist, die die <kbd>Alt</kbd>-Taste enthält.
- `shiftKey`
  - : Ein boolescher Wert, der `true` ist, wenn die zu erstellende virtuelle Taste eine Kombination von Tasten ist, die die <kbd>Umschalt</kbd>-Taste enthält.
- `metaKey`
  - : Ein boolescher Wert, der `true` ist, wenn die zu erstellende virtuelle Taste eine Kombination von Tasten ist, die die <kbd>Meta</kbd>-Taste enthält.
- `keyCode`
  - : Ein `unsigned long`, der den virtuellen Tastenwert der gedrückten Taste darstellt, andernfalls `0`. Siehe [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) für die Liste der Tasten-Codes.
- `charCode`
  - : Ein `unsigned long`, der das Unicode-Zeichen darstellt, das mit der gedrückten Taste in Verbindung steht, andernfalls `0`.

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

Diese Implementierung von Tastaturereignissen basiert auf der Tastenereignis-Spezifikation in den [frühen Versionen von DOM 2 Events](https://www.w3.org/TR/1999/WD-DOM-Level-2-19990923/events.html), die später aus dieser Spezifikation entfernt wurde zugunsten von [`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent), die stattdessen verwendet werden sollte.

---
title: "KeyboardEvent: initKeyEvent() Methode"
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
> Firefox versteckt diese Methode hinter der Einstellung (`dom.keyboardevent.init_key_event.enabled`) ab Version 93 und plant, sie kurz danach zu entfernen.

{{deprecated_header}}

Die **`KeyboardEvent.initKeyEvent()`** Methode wird verwendet, um den Wert eines über
[`document.createEvent`](/de/docs/Web/API/Document/createEvent) `("KeyboardEvent")` erstellten Ereignisses zu initialisieren. Ereignisse, die auf diese Weise initialisiert werden, müssen mit der
[`document.createEvent`](/de/docs/Web/API/Document/createEvent) `("KeyboardEvent")` Methode erstellt worden sein.
`initKeyEvent()` muss aufgerufen werden, um das Ereignis einzustellen, bevor es [ausgelöst](/de/docs/Web/API/EventTarget/dispatchEvent) wird.

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
  - : Ein boolescher Wert, der angibt, ob das Ereignis in der Ereigniskette aufsteigen soll oder nicht (siehe [bubbles](/de/docs/Web/API/Event/bubbles)).
- `cancelable`
  - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann (siehe [cancelable](/de/docs/Web/API/Event/cancelable)).
- `view`
  - : Gibt das [`UIEvent.view`](/de/docs/Web/API/UIEvent/view) an; dieser Wert kann `null` sein.
- `ctrlKey`
  - : Ein boolescher Wert, der `true` ist, wenn die zu generierende virtuelle Taste eine Kombination von Tasten enthält, die die <kbd>Ctrl</kbd>-Taste beinhalten.
- `altKey`
  - : Ein boolescher Wert, der `true` ist, wenn die zu generierende virtuelle Taste eine Kombination von Tasten enthält, die die <kbd>Alt</kbd>-Taste beinhalten.
- `shiftKey`
  - : Ein boolescher Wert, der `true` ist, wenn die zu generierende virtuelle Taste eine Kombination von Tasten enthält, die die <kbd>Shift</kbd>-Taste beinhalten.
- `metaKey`
  - : Ein boolescher Wert, der `true` ist, wenn die zu generierende virtuelle Taste eine Kombination von Tasten enthält, die die <kbd>Meta</kbd>-Taste beinhalten.
- `keyCode`
  - : Ein `unsigned long`, der den virtuellen Schlüsselcode der gedrückten Taste repräsentiert, ansonsten `0`. Siehe [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) für die Liste der Schlüsselcodes.
- `charCode`
  - : Ein `unsigned long`, der das Unicode-Zeichen repräsentiert, das mit der gedrückten Taste assoziiert ist, ansonsten `0`.

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

Diese Implementierung von Tastaturereignissen basiert auf der Spezifikation der Tastenereignisse in den [frühen Versionen von DOM 2 Events](https://www.w3.org/TR/1999/WD-DOM-Level-2-19990923/events.html), die später zugunsten von
[`KeyboardEvent()`](/de/docs/Web/API/KeyboardEvent/KeyboardEvent) aus dieser Spezifikation entfernt wurde, welche stattdessen verwendet werden sollte.

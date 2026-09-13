---
title: "TextEvent: initTextEvent()-Methode"
short-title: initTextEvent()
slug: Web/API/TextEvent/initTextEvent
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("UI Events")}}

Die **`initTextEvent()`**-Methode der [`TextEvent`](/de/docs/Web/API/TextEvent)-Schnittstelle initialisiert den Wert eines `TextEvent`, nachdem es erstellt wurde.

Diese Methode muss aufgerufen werden, um das Ereignis festzulegen, bevor es mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wird.

> [!NOTE]
> Im Allgemeinen werden Sie diese Ereignisse nicht selbst erstellen; sie werden vom Browser erstellt.

## Syntax

```js-nolint
initTextEvent(type)
initTextEvent(type, bubbles)
initTextEvent(type, bubbles, cancelable)
initTextEvent(type, bubbles, cancelable, view)
initTextEvent(type, bubbles, cancelable, view, data)
```

### Parameter

- `type`
  - : Ein String, um den [`type`](/de/docs/Web/API/Event/type) des Ereignisses festzulegen.
    Es gibt nur einen Ereignistyp für ein [`TextEvent`](/de/docs/Web/API/TextEvent): `textInput`.
- `bubbles` {{optional_inline}}
  - : Ein Boolean, der angibt, ob das Ereignis aufsteigen kann oder nicht. Standardmäßig `false`. Setzt den Wert von [`Event.bubbles`](/de/docs/Web/API/Event/bubbles).
- `cancelable` {{optional_inline}}
  - : Ein Boolean, der angibt, ob die Standardaktion des Ereignisses verhindert werden kann oder nicht. Standardmäßig `false`. Setzt den Wert von [`Event.cancelable`](/de/docs/Web/API/Event/cancelable).
- `view` {{optional_inline}}
  - : Das {{Glossary("WindowProxy", "WindowProxy")}}-Objekt, von dem das Ereignis erzeugt wurde. Standardmäßig `null`.
- `data` {{optional_inline}}
  - : Ein String, um das Datenattribut des Ereignisses festzulegen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

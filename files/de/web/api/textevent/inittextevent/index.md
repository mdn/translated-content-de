---
title: "TextEvent: initTextEvent() Methode"
short-title: initTextEvent()
slug: Web/API/TextEvent/initTextEvent
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("UI Events")}}{{deprecated_header}}

Die **`initTextEventEvent()`**-Methode des [`TextEvent`](/de/docs/Web/API/TextEvent)-Interfaces initialisiert den Wert eines `TextEvent`, nachdem es erstellt wurde.

Diese Methode muss aufgerufen werden, um das Ereignis einzustellen, bevor es mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wird.

> [!NOTE]
> Allgemein werden Sie diese Ereignisse nicht selbst erstellen; sie werden vom Browser erstellt.

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
  - : Ein String, um den [`type`](/de/docs/Web/API/Event/type) des Events festzulegen.
    Es gibt nur einen Ereignistyp für ein [`TextEvent`](/de/docs/Web/API/TextEvent): `textInput`.
- `bubbles` {{optional_inline}}
  - : Ein Boolean, der angibt, ob das Ereignis aufsteigen kann oder nicht. Standardmäßig `false`. Setzt den Wert von [`Event.bubbles`](/de/docs/Web/API/Event/bubbles).
- `cancelable` {{optional_inline}}
  - : Ein Boolean, der angibt, ob die Standardaktion des Ereignisses verhindert werden kann oder nicht. Standardmäßig `false`. Setzt den Wert von [`Event.cancelable`](/de/docs/Web/API/Event/cancelable).
- `view` {{optional_inline}}
  - : Das [WindowProxy](/de/docs/Glossary/WindowProxy)-Objekt, von dem das Ereignis generiert wurde. Standardmäßig `null`.
- `data` {{optional_inline}}
  - : Ein String, um das Datenattribut des Ereignisses festzulegen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

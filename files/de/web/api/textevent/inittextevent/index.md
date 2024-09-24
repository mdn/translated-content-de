---
title: "TextEvent: Methode initTextEvent()"
short-title: initTextEvent()
slug: Web/API/TextEvent/initTextEvent
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("UI Events")}}{{deprecated_header}}

Die **`initTextEventEvent()`**-Methode der {{domxref("TextEvent")}}-Schnittstelle initialisiert den Wert eines `TextEvent`, nachdem es erstellt wurde.

Diese Methode muss aufgerufen werden, um das Ereignis zu setzen, bevor es mit {{domxref("EventTarget.dispatchEvent()")}} gesendet wird.

> [!NOTE]
> In der Regel werden Sie diese Ereignisse nicht selbst erstellen; sie werden vom Browser erzeugt.

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
  - : Ein String, um den {{domxref("Event.type", "type")}} des Ereignisses festzulegen.
    Es gibt nur einen Ereignistyp für ein {{domxref("TextEvent")}}: `textInput`.
- `bubbles` {{optional_inline}}
  - : Ein boolean, der angibt, ob das Ereignis blubbern kann oder nicht. Standardmäßig `false`. Legt den Wert von {{domxref("Event.bubbles")}} fest.
- `cancelable` {{optional_inline}}
  - : Ein boolean, der angibt, ob die Standardaktion des Ereignisses verhindert werden kann oder nicht. Standardmäßig `false`. Legt den Wert von {{domxref("Event.cancelable")}} fest.
- `view` {{optional_inline}}
  - : Das {{glossary("WindowProxy")}}-Objekt, von dem das Ereignis generiert wurde. Standardmäßig `null`.
- `data` {{optional_inline}}
  - : Ein String, um das Datenattribut des Ereignisses festzulegen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

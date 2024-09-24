---
title: "InputEvent: InputEvent() Konstruktor"
short-title: InputEvent()
slug: Web/API/InputEvent/InputEvent
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("UI Events")}}

Der **`InputEvent()`** Konstruktor erstellt ein neues {{domxref("InputEvent")}} Objekt.

## Syntax

```js-nolint
new InputEvent(type)
new InputEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitive und Browser setzen es auf `beforeinput` oder `input`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("UIEvent/UIEvent", "UIEvent()")}} definierten Eigenschaften_ folgende Eigenschaften haben kann:
    - `inputType` {{optional_inline}}
      - : Ein String, der die Art der Änderung für bearbeitbare Inhalte angibt, wie zum Beispiel das Einfügen, Löschen oder Formatieren von Text.
    - `data` {{optional_inline}}
      - : Ein String, der Zeichen enthält, die eingefügt werden sollen.
        Dies kann ein leerer String sein, wenn durch die Änderung kein Text eingefügt wird
        (zum Beispiel beim Löschen von Zeichen).
    - `isComposing` {{optional_inline}}
      - : Ein Boolean, der angibt, dass das Ereignis Teil einer Kompositionssitzung ist, das heißt nach einem {{domxref("Element/compositionstart_event", "compositionstart")}} Ereignis, aber vor einem {{domxref("Element/compositionend_event", "compositionend")}} Ereignis. Der Standardwert ist `false`.

### Rückgabewert

Ein neues {{domxref("InputEvent")}} Objekt.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("InputEvent")}}, die Schnittstelle der Objekte, die es konstruiert.

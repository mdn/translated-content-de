---
title: "InputEvent: InputEvent() Konstruktor"
short-title: InputEvent()
slug: Web/API/InputEvent/InputEvent
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("UI Events")}}

Der **`InputEvent()`** Konstruktor erstellt ein neues [`InputEvent`](/de/docs/Web/API/InputEvent) Objekt.

## Syntax

```js-nolint
new InputEvent(type)
new InputEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und Browser setzen es auf `beforeinput`, oder `input`.
- `options` {{optional_inline}}
  - : Ein Objekt, das, _zusätzlich zu den in [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent) definierten Eigenschaften_, die folgenden Eigenschaften haben kann:
    - `inputType` {{optional_inline}}
      - : Ein String, der den Typ der Änderung für bearbeitbaren Inhalt angibt,
        wie zum Beispiel das Einfügen, Löschen oder Formatieren von Text.
    - `data` {{optional_inline}}
      - : Ein String, der die einzufügenden Zeichen enthält.
        Dies kann ein leerer String sein, wenn die Änderung keinen Text einfügt
        (wie zum Beispiel beim Löschen von Zeichen).
    - `isComposing` {{optional_inline}}
      - : Ein Boolean, der anzeigt, dass das Ereignis Teil einer Kompositionssitzung ist,
        was bedeutet, dass es nach einem [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event) Ereignis, aber vor einem [`compositionend`](/de/docs/Web/API/Element/compositionend_event) Ereignis auftritt. Der Standard ist `false`.

### Rückgabewert

Ein neues [`InputEvent`](/de/docs/Web/API/InputEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`InputEvent`](/de/docs/Web/API/InputEvent), die Schnittstelle der Objekte, die es konstruiert.

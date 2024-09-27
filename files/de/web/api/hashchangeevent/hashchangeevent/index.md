---
title: "HashChangeEvent: HashChangeEvent() Konstruktor"
short-title: HashChangeEvent()
slug: Web/API/HashChangeEvent/HashChangeEvent
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("HTML DOM")}}

Der **`HashChangeEvent()`** Konstruktor erstellt ein neues [`HashChangeEvent`](/de/docs/Web/API/HashChangeEvent) Objekt, das vom [`hashchange`](/de/docs/Web/API/Window/hashchange_event) Ereignis verwendet wird, das am [`window`](/de/docs/Web/API/Window) Objekt ausgelöst wird, wenn sich das Fragment der URL ändert.

> [!NOTE]
> Ein Webentwickler muss diesen Konstruktor normalerweise nicht aufrufen, da der Browser diese Objekte selbst erstellt, wenn [`hashchange`](/de/docs/Web/API/Window/hashchange_event) Ereignisse ausgelöst werden.

## Syntax

```js-nolint
new HashChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitive und Browser setzen es auf `hashchange`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften enthält:
    - `oldURL` {{optional_inline}}
      - : Ein String, der die alte URL enthält. Der Standardwert ist der leere String (`""`).
    - `newURL` {{optional_inline}}
      - : Ein String, der die neue URL enthält. Der Standardwert ist der leere String (`""`).

### Rückgabewert

Ein neues [`HashChangeEvent`](/de/docs/Web/API/HashChangeEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`hashchange`](/de/docs/Web/API/Window/hashchange_event) Ereignis

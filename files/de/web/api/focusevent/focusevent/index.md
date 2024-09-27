---
title: "FocusEvent: FocusEvent() Konstruktor"
short-title: FocusEvent()
slug: Web/API/FocusEvent/FocusEvent
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("UI Events")}}

Der **`FocusEvent()`** Konstruktor gibt ein neu erstelltes [`FocusEvent`](/de/docs/Web/API/FocusEvent)-Objekt mit einem optionalen [`EventTarget`](/de/docs/Web/API/EventTarget) zurück. Wenn das Ereignis sowohl eine Quelle als auch ein Ziel hat, muss der `relatedTarget`-Wert auf das andere Ziel gesetzt werden.

## Syntax

```js-nolint
new FocusEvent(type)
new FocusEvent(type, options)
```

### Parameter

_Der `FocusEvent()` Konstruktor erbt auch Argumente von
[`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent) und von [`Event()`](/de/docs/Web/API/Event/Event)._

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und Browser setzen ihn auf `blur`, `focus`, `focusin` oder `focusout`.
- `options` {{optional_inline}}
  - : Ein Objekt, das neben den in [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent) definierten Eigenschaften die folgenden Eigenschaften haben kann:
    - `relatedTarget` {{optional_inline}}
      - : Ein [`EventTarget`](/de/docs/Web/API/EventTarget), das das sekundäre Ziel eines [`FocusEvent`](/de/docs/Web/API/FocusEvent) repräsentiert. Standardmäßig ist es `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`FocusEvent`](/de/docs/Web/API/FocusEvent)-Interface, zu dem es gehört.

---
title: "FocusEvent: FocusEvent() Konstruktor"
short-title: FocusEvent()
slug: Web/API/FocusEvent/FocusEvent
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("UI Events")}}

Der **`FocusEvent()`** Konstruktor gibt ein neu erstelltes {{domxref("FocusEvent")}}-Objekt mit einem optionalen {{domxref("EventTarget")}} zurück. Wenn das Ereignis sowohl eine Quelle als auch ein Ziel hat, muss der `relatedTarget`-Wert auf das andere Ziel gesetzt werden.

## Syntax

```js-nolint
new FocusEvent(type)
new FocusEvent(type, options)
```

### Parameter

_Der `FocusEvent()` Konstruktor erbt auch Argumente von {{domxref("UIEvent.UIEvent", "UIEvent()")}} und von {{domxref("Event.Event", "Event()")}}._

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und Browser setzen es auf `blur`, `focus`, `focusin` oder `focusout`.
- `options` {{optional_inline}}
  - : Ein Objekt, das zusätzlich zu den in {{domxref("UIEvent/UIEvent", "UIEvent()")}} definierten Eigenschaften die folgenden Eigenschaften haben kann:
    - `relatedTarget` {{optional_inline}}
      - : Ein {{domxref("EventTarget")}}, das das sekundäre Ziel eines {{domxref("FocusEvent")}} darstellt. Es ist standardmäßig auf `null` gesetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("FocusEvent")}}-Interface, zu dem es gehört.

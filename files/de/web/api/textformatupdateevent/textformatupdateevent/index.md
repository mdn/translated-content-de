---
title: "TextFormatUpdateEvent: TextFormatUpdateEvent() Konstruktor"
short-title: TextFormatUpdateEvent()
slug: Web/API/TextFormatUpdateEvent/TextFormatUpdateEvent
l10n:
  sourceCommit: a6f2a5b313727d983c369dec91c4c7418b1b4f74
---

{{APIRef("TextFormatUpdateEvent API")}}{{SeeCompatTable}}

Der **`TextFormatUpdateEvent()`** Konstruktor gibt ein neues {{DOMxRef("TextFormatUpdateEvent")}} Objekt zurück.

## Syntax

```js-nolint
new TextFormatUpdateEvent(type)
new TextFormatUpdateEvent(type, options)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Events repräsentiert. Mögliche Werte: `"textformatupdate"`.
- `options` {{optional_inline}}
  - : Ein optionales Objekt mit den folgenden Eigenschaften:
    - `textFormats`
      - : Ein {{jsxref("Array")}} von {{domxref("TextFormat")}} Objekten, die die zu diesem Event anzuwendenden Textformate darstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{DOMxRef("TextFormatUpdateEvent")}} Interface, zu dem es gehört.

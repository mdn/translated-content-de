---
title: "CSSTransformValue: CSSTransformValue() Konstruktor"
short-title: CSSTransformValue()
slug: Web/API/CSSTransformValue/CSSTransformValue
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Der **`CSSTransformValue()`** Konstruktor erstellt ein neues [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)-Objekt, das eine Liste einzelner Transformationsobjekte repräsentiert.

## Syntax

```js-nolint
new CSSTransformValue(transforms)
```

### Parameter

- `transforms`
  - : Eine Liste von [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)-Objekten, über die iteriert wird.

### Rückgabewert

Ein neues [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `transforms` leer ist.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

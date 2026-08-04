---
title: "CSSTransformValue: CSSTransformValue() Konstruktor"
short-title: CSSTransformValue()
slug: Web/API/CSSTransformValue/CSSTransformValue
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der **`CSSTransformValue()`** Konstruktor erstellt ein neues [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)-Objekt, das eine Liste von einzelnen Transformationsobjekten repräsentiert.

## Syntax

```js-nolint
new CSSTransformValue(transforms)
```

### Parameter

- `transforms`
  - : Eine Liste von [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)-Objekten, über die iteriert werden soll.

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

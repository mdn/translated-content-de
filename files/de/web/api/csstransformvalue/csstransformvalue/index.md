---
title: "CSSTransformValue: CSSTransformValue()-Konstruktor"
short-title: CSSTransformValue()
slug: Web/API/CSSTransformValue/CSSTransformValue
l10n:
  sourceCommit: b9426971d8a2176ad015a0fd01df59ec79760898
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der Konstruktor **`CSSTransformValue()`** erstellt ein neues [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)-Objekt, das einen `transform-list`-Wert repräsentiert, der aus den angegebenen [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)-Objekten besteht.

## Syntax

```js-nolint
new CSSTransformValue(transforms)
```

### Parameter

- `transforms`
  - : Ein Array von [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)-Objekten.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `transforms` leer ist.

## Beispiele

### Grundlegende Verwendung

```js
const transform = new CSSTransformValue([
  new CSSTranslate(CSS.px(10), CSS.px(20)),
  new CSSScale(2, 3),
]);

console.log(transform.length); // 2
console.log(transform.toString()); // "translate(10px, 20px) scale(2, 3)"
```

### Umgang mit einem leeren Array

Der Konstruktor löst einen `TypeError` aus, wenn `transforms` leer ist:

```js
try {
  const transform = new CSSTransformValue([]);
} catch (e) {
  console.log(e); // TypeError
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)
- [`CSSTransformValue.entries()`](/de/docs/Web/API/CSSTransformValue/entries)
- [`CSSTransformValue.forEach()`](/de/docs/Web/API/CSSTransformValue/forEach)
- [`CSSTransformValue.is2D`](/de/docs/Web/API/CSSTransformValue/is2D)
- [`CSSTransformValue.keys()`](/de/docs/Web/API/CSSTransformValue/keys)
- [`CSSTransformValue.length`](/de/docs/Web/API/CSSTransformValue/length)
- [`CSSTransformValue.toMatrix()`](/de/docs/Web/API/CSSTransformValue/toMatrix)
- [`CSSTransformValue.values()`](/de/docs/Web/API/CSSTransformValue/values)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)

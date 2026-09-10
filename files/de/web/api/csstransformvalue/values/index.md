---
title: "CSSTransformValue: values()-Methode"
short-title: values()
slug: Web/API/CSSTransformValue/values
l10n:
  sourceCommit: b9426971d8a2176ad015a0fd01df59ec79760898
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`values()`**-Methode des [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)-Interface gibt einen neuen _Array-Iterator_ zurück, der jedes Element im Objekt liefert.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iteratorobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

### Über Werte iterieren

```js
const transform = new CSSTransformValue([
  new CSSTranslate(CSS.px(10), CSS.px(20)),
  new CSSScale(2, 3),
]);

for (const component of transform.values()) {
  console.log(component.toString());
}
// "translate(10px, 20px)"
// "scale(2, 3)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSTransformValue()`](/de/docs/Web/API/CSSTransformValue/CSSTransformValue)
- [`CSSTransformValue.entries()`](/de/docs/Web/API/CSSTransformValue/entries)
- [`CSSTransformValue.forEach()`](/de/docs/Web/API/CSSTransformValue/forEach)
- [`CSSTransformValue.keys()`](/de/docs/Web/API/CSSTransformValue/keys)
- [`CSSTransformValue.length`](/de/docs/Web/API/CSSTransformValue/length)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)

---
title: "CSSTransformValue: Methode entries()"
short-title: entries()
slug: Web/API/CSSTransformValue/entries
l10n:
  sourceCommit: b9426971d8a2176ad015a0fd01df59ec79760898
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Methode **`entries()`** der Schnittstelle [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue) gibt einen neuen _Array-Iterator_ zurück, der für jedes Element im Objekt `[index, value]`-Paare liefert.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iteratorobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

### Über Index/Wert-Paare iterieren

```js
const transform = new CSSTransformValue([
  new CSSTranslate(CSS.px(10), CSS.px(20)),
  new CSSScale(2, 3),
]);

for (const [index, component] of transform.entries()) {
  console.log(index, component.toString());
}
// 0 "translate(10px, 20px)"
// 1 "scale(2, 3)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSTransformValue()`](/de/docs/Web/API/CSSTransformValue/CSSTransformValue)
- [`CSSTransformValue.forEach()`](/de/docs/Web/API/CSSTransformValue/forEach)
- [`CSSTransformValue.keys()`](/de/docs/Web/API/CSSTransformValue/keys)
- [`CSSTransformValue.length`](/de/docs/Web/API/CSSTransformValue/length)
- [`CSSTransformValue.values()`](/de/docs/Web/API/CSSTransformValue/values)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)

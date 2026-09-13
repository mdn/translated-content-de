---
title: "CSSTransformValue: Methode keys()"
short-title: keys()
slug: Web/API/CSSTransformValue/keys
l10n:
  sourceCommit: b9426971d8a2176ad015a0fd01df59ec79760898
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Methode **`keys()`** der Schnittstelle [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue) gibt einen neuen _Array-Iterator_ zurück, der den Index jedes Elements im Objekt liefert.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beispiele

### Über Indizes iterieren

```js
const transform = new CSSTransformValue([
  new CSSTranslate(CSS.px(10), CSS.px(20)),
  new CSSScale(2, 3),
]);

for (const index of transform.keys()) {
  console.log(index);
}
// 0
// 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSTransformValue()`](/de/docs/Web/API/CSSTransformValue/CSSTransformValue)
- [`CSSTransformValue.entries()`](/de/docs/Web/API/CSSTransformValue/entries)
- [`CSSTransformValue.forEach()`](/de/docs/Web/API/CSSTransformValue/forEach)
- [`CSSTransformValue.length`](/de/docs/Web/API/CSSTransformValue/length)
- [`CSSTransformValue.values()`](/de/docs/Web/API/CSSTransformValue/values)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)

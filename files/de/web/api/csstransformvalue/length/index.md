---
title: "CSSTransformValue: length-Eigenschaft"
short-title: length
slug: Web/API/CSSTransformValue/length
l10n:
  sourceCommit: b9426971d8a2176ad015a0fd01df59ec79760898
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`length`** des Interfaces [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue) gibt die Anzahl der Elemente im Objekt zurück.

## Wert

Eine Ganzzahl.

## Beispiele

### Grundlegende Verwendung

```js
const transform = new CSSTransformValue([
  new CSSTranslate(CSS.px(10), CSS.px(20)),
  new CSSScale(2, 3),
]);

console.log(transform.length); // 2
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
- [`CSSTransformValue.values()`](/de/docs/Web/API/CSSTransformValue/values)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)

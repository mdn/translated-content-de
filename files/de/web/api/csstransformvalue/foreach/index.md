---
title: "CSSTransformValue: Methode forEach()"
short-title: forEach()
slug: Web/API/CSSTransformValue/forEach
l10n:
  sourceCommit: b9426971d8a2176ad015a0fd01df59ec79760898
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Methode **`forEach()`** des Interfaces [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue) führt eine bereitgestellte Funktion einmal für jedes Element im Objekt aus.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Die für jedes Element auszuführende Funktion, die drei Argumente erhält:
    - `currentValue`
      - : Das aktuell verarbeitete Element.
    - `index` {{optional_inline}}
      - : Der Index des aktuell verarbeiteten Elements.
    - `array` {{optional_inline}}
      - : Der `CSSTransformValue`, für den `forEach()` aufgerufen wird.
- `thisArg` {{optional_inline}}
  - : Wert, der bei der Ausführung von `callbackFn` als `this` verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Iteration mit forEach()

```js
const transform = new CSSTransformValue([
  new CSSTranslate(CSS.px(10), CSS.px(20)),
  new CSSScale(2, 3),
]);

transform.forEach((component, index) => {
  console.log(index, component.toString());
});
// 0 "translate(10px, 20px)"
// 1 "scale(2, 3)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSTransformValue()`](/de/docs/Web/API/CSSTransformValue/CSSTransformValue)
- [`CSSTransformValue.entries()`](/de/docs/Web/API/CSSTransformValue/entries)
- [`CSSTransformValue.keys()`](/de/docs/Web/API/CSSTransformValue/keys)
- [`CSSTransformValue.length`](/de/docs/Web/API/CSSTransformValue/length)
- [`CSSTransformValue.values()`](/de/docs/Web/API/CSSTransformValue/values)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)

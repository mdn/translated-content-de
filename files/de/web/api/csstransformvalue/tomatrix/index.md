---
title: "CSSTransformValue: Methode toMatrix()"
short-title: toMatrix()
slug: Web/API/CSSTransformValue/toMatrix
l10n:
  sourceCommit: b9426971d8a2176ad015a0fd01df59ec79760898
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Methode **`toMatrix()`** des Interfaces [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue) gibt ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt zurück.

Die zurückgegebene Matrix ist das Produkt der Matrizen jedes [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent) in der `CSSTransformValue`. Sie wird berechnet, indem nacheinander für jede Komponente [`CSSTransformComponent.toMatrix()`](/de/docs/Web/API/CSSTransformComponent/toMatrix) aufgerufen und die Ergebnisse in der angegebenen Reihenfolge miteinander multipliziert werden.

## Syntax

```js-nolint
toMatrix()
```

### Parameter

Keine.

### Rückgabewert

Ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn Längen, die an der Erzeugung der Matrix beteiligt sind, keine mit px kompatiblen Einheiten haben, etwa relative Längen oder Prozentangaben.

## Beispiele

### Eine Transformation in eine Matrix umwandeln

```js
const transform = new CSSTransformValue([
  new CSSTranslate(CSS.px(10), CSS.px(20)),
  new CSSScale(2, 3),
]);

const matrix = transform.toMatrix();
console.log(matrix.a, matrix.d); // 2 3
console.log(matrix.e, matrix.f); // 10 20
```

### Inkompatible Einheiten behandeln

`toMatrix()` löst eine Ausnahme aus, wenn die Länge einer Komponente nicht in Pixel aufgelöst werden kann, beispielsweise bei einer Prozentangabe:

```js
const transform = new CSSTransformValue([
  new CSSTranslate(CSS.percent(50), CSS.px(20)),
]);

try {
  transform.toMatrix();
} catch (e) {
  console.log(e); // TypeError
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSTransformValue()`](/de/docs/Web/API/CSSTransformValue/CSSTransformValue)
- [`CSSTransformComponent.toMatrix()`](/de/docs/Web/API/CSSTransformComponent/toMatrix)
- [`CSSTransformValue.is2D`](/de/docs/Web/API/CSSTransformValue/is2D)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)

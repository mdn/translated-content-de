---
title: "CSSTransformComponent: Methode toMatrix()"
short-title: toMatrix()
slug: Web/API/CSSTransformComponent/toMatrix
l10n:
  sourceCommit: b9426971d8a2176ad015a0fd01df59ec79760898
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Methode **`toMatrix()`** der Schnittstelle [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent) gibt ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt zurück.

Alle Transformationsfunktionen können mathematisch als 4x4-Transformationsmatrix dargestellt werden.

> [!NOTE]
> Die Eigenschaft `is2D` beeinflusst, welche Transformation und damit welcher Matrixtyp zurückgegeben wird.
> CSS-2D- und -3D-Transformationen unterscheiden sich aus Gründen der Abwärtskompatibilität.
> Eine kurze Erklärung zu 2D- im Vergleich zu 3D-Transformationen finden Sie unter [Verwenden von CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using).

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
  - : Wird ausgelöst, wenn Längen, die an der Erzeugung der Matrix beteiligt sind, keine mit px kompatiblen Einheiten haben (etwa relative Längen oder Prozentangaben).

## Beispiele

### Eine Komponente in eine Matrix umwandeln

```js
const translate = new CSSTranslate(CSS.px(10), CSS.px(20));

const matrix = translate.toMatrix();
console.log(matrix.e, matrix.f); // 10 20
```

### Umgang mit inkompatiblen Einheiten

`toMatrix()` löst einen Fehler aus, wenn eine Länge nicht in Pixel aufgelöst werden kann, beispielsweise eine Prozentangabe:

```js
const translate = new CSSTranslate(CSS.percent(50), CSS.px(20));

try {
  translate.toMatrix();
} catch (e) {
  console.log(e); // TypeError
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSTransformComponent.is2D`](/de/docs/Web/API/CSSTransformComponent/is2D)
- [`CSSTransformComponent.toString()`](/de/docs/Web/API/CSSTransformComponent/toString)
- [`CSSTransformValue.toMatrix()`](/de/docs/Web/API/CSSTransformValue/toMatrix)
- [Verwenden des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)

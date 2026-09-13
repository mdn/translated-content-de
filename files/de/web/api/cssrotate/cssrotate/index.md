---
title: "CSSRotate: CSSRotate()-Konstruktor"
short-title: CSSRotate()
slug: Web/API/CSSRotate/CSSRotate
l10n:
  sourceCommit: b9426971d8a2176ad015a0fd01df59ec79760898
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der Konstruktor **`CSSRotate()`** erstellt ein neues [`CSSRotate`](/de/docs/Web/API/CSSRotate)-Objekt, das den Wert {{cssxref("transform-function/rotate", "rotate()")}} der individuellen {{cssxref("transform")}}-CSS-Eigenschaft darstellt.

Dies kann entweder als 2D-Drehung um einen bestimmten Winkel oder als 3D-Drehung um einen Winkel entlang einer bestimmten Achse angegeben werden.

## Syntax

```js-nolint
new CSSRotate(angle)
new CSSRotate(x, y, z, angle)
```

### Parameter

- [`angle`](/de/docs/Web/API/CSSRotate/angle)
  - : Ein Wert für den Drehwinkel des zu erstellenden [`CSSRotate`](/de/docs/Web/API/CSSRotate)-Objekts.
    Dieser muss ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) sein.
- [`x`](/de/docs/Web/API/CSSRotate/x) {{optional_inline}}
  - : Eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Wert, der die x-Koordinate des Drehachsenvektors des zu erstellenden [`CSSRotate`](/de/docs/Web/API/CSSRotate)-Objekts angibt.
    Wird nur beim Erstellen einer 3D-Drehung verwendet und ist dafür erforderlich; die Form mit 2 Argumenten impliziert eine Drehachse von `(0, 0, 1)` (der z-Achse).
- [`y`](/de/docs/Web/API/CSSRotate/y) {{optional_inline}}
  - : Eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Wert, der die y-Koordinate des Drehachsenvektors des zu erstellenden [`CSSRotate`](/de/docs/Web/API/CSSRotate)-Objekts angibt.
    Wird nur beim Erstellen einer 3D-Drehung verwendet und ist dafür erforderlich.
- [`z`](/de/docs/Web/API/CSSRotate/z) {{optional_inline}}
  - : Eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Wert, der die z-Koordinate des Drehachsenvektors des zu erstellenden [`CSSRotate`](/de/docs/Web/API/CSSRotate)-Objekts angibt.
    Wird nur beim Erstellen einer 3D-Drehung verwendet und ist dafür erforderlich.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Wird ausgelöst, wenn der Wert der Eigenschaft `angle` kein [`<angle>`](/de/docs/Web/CSS/Reference/Values/angle)-Wert ist oder `CSSRotate.x`, `CSSRotate.y`, `CSSRotate.z` keine [`<number>`](/de/docs/Web/CSS/Reference/Values/number)-Werte sind.

## Beispiele

### Erstellen einer 2D-Drehung

Die Form mit 2 Argumenten akzeptiert nur einen Winkel und impliziert eine Drehung um die z-Achse (entspricht `rotate3d(0, 0, 1, angle)`):

```js
const rotate2D = new CSSRotate(CSS.deg(45));

console.log(rotate2D.is2D); // true
console.log(rotate2D.toString()); // "rotate(45deg)"
```

### Erstellen einer 3D-Drehung

Die Form mit 4 Argumenten akzeptiert die Koordinaten der Drehachse, gefolgt vom Winkel:

```js
const rotate3D = new CSSRotate(1, 1, 0, CSS.deg(45));

console.log(rotate3D.is2D); // false
console.log(rotate3D.toString()); // "rotate3d(1, 1, 0,45deg)"
```

### Umgang mit einem ungültigen Winkel

```js
try {
  const rotate = new CSSRotate(CSS.px(45));
} catch (e) {
  console.log(e); // TypeError: px is not an angle
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSRotate.angle`](/de/docs/Web/API/CSSRotate/angle)
- [`CSSRotate.x`](/de/docs/Web/API/CSSRotate/x)
- [`CSSRotate.y`](/de/docs/Web/API/CSSRotate/y)
- [`CSSRotate.z`](/de/docs/Web/API/CSSRotate/z)
- [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)

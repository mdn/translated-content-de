---
title: "CSSRotate: CSSRotate()-Konstruktor"
short-title: CSSRotate()
slug: Web/API/CSSRotate/CSSRotate
l10n:
  sourceCommit: ca4b3f28ed0e1ae9817e84a2eab11c2184a0603b
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der **`CSSRotate()`**-Konstruktor erstellt ein neues [`CSSRotate`](/de/docs/Web/API/CSSRotate)-Objekt, das den {{cssxref("transform-function/rotate", "rotate()")}}-Wert der individuellen CSS-Eigenschaft {{cssxref("transform")}} repräsentiert.

Die Rotation kann entweder als 2D-Rotation um einen bestimmten Winkel oder als 3D-Rotation um eine bestimmte Achse angegeben werden.

## Syntax

```js-nolint
new CSSRotate(angle)
new CSSRotate(x, y, z, angle)
```

### Parameter

- [`angle`](/de/docs/Web/API/CSSRotate/angle)
  - : Der Rotationswinkel des zu erstellenden [`CSSRotate`](/de/docs/Web/API/CSSRotate)-Objekts.
    Der Wert muss ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) sein.
- [`x`](/de/docs/Web/API/CSSRotate/x) {{optional_inline}}
  - : Eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Wert, der die x-Koordinate des Rotationsachsenvektors des zu erstellenden [`CSSRotate`](/de/docs/Web/API/CSSRotate)-Objekts angibt.
    Wird nur beim Erstellen einer 3D-Rotation verwendet und ist dafür erforderlich; die Form mit zwei Argumenten setzt eine Rotationsachse von `(0, 0, 1)` (die z-Achse) voraus.
- [`y`](/de/docs/Web/API/CSSRotate/y) {{optional_inline}}
  - : Eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Wert, der die y-Koordinate des Rotationsachsenvektors des zu erstellenden [`CSSRotate`](/de/docs/Web/API/CSSRotate)-Objekts angibt.
    Wird nur beim Erstellen einer 3D-Rotation verwendet und ist dafür erforderlich.
- [`z`](/de/docs/Web/API/CSSRotate/z) {{optional_inline}}
  - : Eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Wert, der die z-Koordinate des Rotationsachsenvektors des zu erstellenden [`CSSRotate`](/de/docs/Web/API/CSSRotate)-Objekts angibt.
    Wird nur beim Erstellen einer 3D-Rotation verwendet und ist dafür erforderlich.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Wert der Eigenschaft `angle` kein [`<angle>`](/de/docs/Web/CSS/Reference/Values/angle)-Wert ist oder `CSSRotate.x`, `CSSRotate.y` oder `CSSRotate.z` keine [`<number>`](/de/docs/Web/CSS/Reference/Values/number)-Werte sind.

## Beispiele

### Eine 2D-Rotation erstellen

Die Form mit zwei Argumenten verwendet nur einen Winkel und setzt eine Rotation um die z-Achse voraus (entspricht `rotate3d(0, 0, 1, angle)`):

```js
const rotate2D = new CSSRotate(CSS.deg(45));

console.log(rotate2D.is2D); // true
console.log(rotate2D.toString()); // "rotate(45deg)"
```

### Eine 3D-Rotation erstellen

Die Form mit vier Argumenten verwendet die Koordinaten der Rotationsachse, gefolgt vom Winkel:

```js
const rotate3D = new CSSRotate(1, 1, 0, CSS.deg(45));

console.log(rotate3D.is2D); // false
console.log(rotate3D.toString()); // "rotate3d(1, 1, 0,45deg)"
```

### Einen ungültigen Winkel behandeln

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

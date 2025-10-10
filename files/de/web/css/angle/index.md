---
title: <angle>
slug: Web/CSS/angle
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Der **`<angle>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) repräsentiert einen Winkelwert, der in Grad, Gon, Radiant oder Umdrehungen ausgedrückt wird. Er wird beispielsweise in {{cssxref("&lt;gradient&gt;")}}s und in einigen {{cssxref("transform")}}-Funktionen verwendet.

{{InteractiveExample("CSS Demo: &lt;angle&gt;")}}

```css interactive-example-choice
transform: rotate(45deg);
```

```css interactive-example-choice
transform: rotate(3.1416rad);
```

```css interactive-example-choice
transform: rotate(-50grad);
```

```css interactive-example-choice
transform: rotate(1.75turn);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This box can rotate to different angles.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #0118f3;
  padding: 0.75em;
  width: 180px;
  height: 120px;
  color: white;
}
```

## Syntax

Der `<angle>` Datenyp besteht aus einem {{cssxref("&lt;number&gt;")}}, gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen Dimensionen gibt es keinen Abstand zwischen dem Einheitensymbol und der Zahl. Die Winkeleinheit ist optional nach der Zahl `0`.

Optional kann es durch ein einzelnes `+` oder `-` Vorzeichen vorangestellt werden. Positive Zahlen repräsentieren Uhrzeigerrichtung-Winkel, während negative Zahlen Gegenuhrzeigerrichtung-Winkel darstellen. Für statische Eigenschaften einer bestimmten Einheit kann jeder Winkel durch verschiedene äquivalente Werte dargestellt werden. Beispielsweise entspricht `90deg` `-270deg`, und `1turn` entspricht `4turn`. Für dynamische Eigenschaften, wie bei der Anwendung einer {{cssxref("animation")}} oder {{cssxref("transition")}}, wird der Effekt dennoch unterschiedlich sein.

### Einheiten

- `deg`
  - : Repräsentiert einen Winkel in [Grad](https://en.wikipedia.org/wiki/Degree_%28angle%29). Ein vollständiger Kreis sind `360deg`. Beispiele: `0deg`, `90deg`, `14.23deg`.
- `grad`
  - : Repräsentiert einen Winkel in [Gon](https://en.wikipedia.org/wiki/Gradian). Ein vollständiger Kreis sind `400grad`. Beispiele: `0grad`, `100grad`, `38.8grad`.
- `rad`
  - : Repräsentiert einen Winkel in [Radiant](https://en.wikipedia.org/wiki/Radian). Ein vollständiger Kreis sind 2π Radiant, was ungefähr `6.2832rad` entspricht. `1rad` ist 180/π Grad. Beispiele: `0rad`, `1.0708rad`, `6.2832rad`.
- `turn`
  - : Repräsentiert einen Winkel in einer Anzahl von Umdrehungen. Ein vollständiger Kreis ist `1turn`. Beispiele: `0turn`, `0.25turn`, `1.2turn`.

## Beispiele

### Einstellen eines Uhrzeigerrichtung-Rechten Winkels

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angle90.png" alt="Ein Diagramm zeigt eine 90-Grad-Uhrzeigerrichtung-Drehung entlang eines Kreises, indem es vom oberen Punkt zum rechten Punkt bewegt wird." /></td>
      <td><code>90deg = 100grad = 0.25turn ≈ 1.5708rad</code></td>
    </tr>
  </tbody>
</table>

### Einstellen eines flachen Winkels

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angle180.png" alt="Ein Diagramm zeigt eine 180-Grad-Uhrzeigerrichtung-Drehung entlang eines Kreises, indem es vom oberen Punkt zum unteren Punkt bewegt wird." /></td>
      <td><code>180deg = 200grad = 0.5turn ≈ 3.1416rad</code></td>
    </tr>
  </tbody>
</table>

### Einstellen eines Gegenuhrzeigerrichtung-Rechten Winkels

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angleminus90.png" alt="Ein Diagramm zeigt eine 90-Grad-Gegenuhrzeigerrichtung-Drehung entlang eines Kreises, indem es vom oberen Punkt zum linken Punkt bewegt wird." /></td>
      <td><code>-90deg = -100grad = -0.25turn ≈ -1.5708rad</code></td>
    </tr>
  </tbody>
</table>

### Einstellen eines Nullwinkels

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angle0.png" alt="Ein Diagramm zeigt eine 0-Grad-Drehung. Es gibt keine Bewegung." /></td>
      <td><code>0 = 0deg = 0grad = 0turn = 0rad</code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Datentypen](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types)
- Der [`<gradient>`](/de/docs/Web/CSS/gradient) Typ
- CSS-Drehtransformationen: [`rotate()`](/de/docs/Web/CSS/transform-function/rotate), [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d), [`rotateX()`](/de/docs/Web/CSS/transform-function/rotateX), [`rotateY()`](/de/docs/Web/CSS/transform-function/rotateY), und [`rotateZ()`](/de/docs/Web/CSS/transform-function/rotateZ)
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms)
- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)

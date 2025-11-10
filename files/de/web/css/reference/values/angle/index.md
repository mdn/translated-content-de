---
title: <angle>
slug: Web/CSS/Reference/Values/angle
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`<angle>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert einen Winkelwert, der in Grad, Gon, Radianten oder Umdrehungen ausgedrückt wird. Er wird zum Beispiel in {{cssxref("&lt;gradient&gt;")}}s und in einigen {{cssxref("transform")}}-Funktionen verwendet.

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

Der `<angle>`-Datentyp besteht aus einem {{cssxref("&lt;number&gt;")}} gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen Dimensionen gibt es keinen Abstand zwischen dem Einheitensymbol und der Zahl. Die Winkeleinheit ist nach der Zahl `0` optional.

Optional kann ein einzelnes `+` oder `-` Zeichen vorangestellt werden. Positive Zahlen repräsentieren im Uhrzeigersinn verlaufende Winkel, während negative Zahlen gegen den Uhrzeigersinn verlaufende Winkel darstellen. Für statische Eigenschaften einer gegebenen Einheit kann jeder Winkel durch verschiedene äquivalente Werte ausgedrückt werden. Zum Beispiel entspricht `90deg` `-270deg`, und `1turn` entspricht `4turn`. Für dynamische Eigenschaften, wie bei der Anwendung einer {{cssxref("animation")}} oder {{cssxref("transition")}}, wird der Effekt jedoch unterschiedlich sein.

### Einheiten

- `deg`
  - : Repräsentiert einen Winkel in [Grad (degrees)](https://en.wikipedia.org/wiki/Degree_%28angle%29). Ein voller Kreis beträgt `360deg`. Beispiele: `0deg`, `90deg`, `14.23deg`.
- `grad`
  - : Repräsentiert einen Winkel in [Gon (gradians)](https://en.wikipedia.org/wiki/Gradian). Ein voller Kreis beträgt `400grad`. Beispiele: `0grad`, `100grad`, `38.8grad`.
- `rad`
  - : Repräsentiert einen Winkel in [Radianten](https://en.wikipedia.org/wiki/Radian). Ein voller Kreis ist 2π Radianten, das ungefähr `6.2832rad` entspricht. `1rad` entspricht 180/π Grad. Beispiele: `0rad`, `1.0708rad`, `6.2832rad`.
- `turn`
  - : Repräsentiert einen Winkel in einer Anzahl von Umdrehungen. Ein voller Kreis beträgt `1turn`. Beispiele: `0turn`, `0.25turn`, `1.2turn`.

## Beispiele

### Einen im Uhrzeigersinn verlaufenden rechten Winkel einstellen

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angle90.png" alt="Ein Diagramm zeigt eine im Uhrzeigersinn verlaufende 90-Grad-Drehung entlang eines Kreises, indem es vom obersten Punkt zum rechtsten Punkt wechselt." /></td>
      <td><code>90deg = 100grad = 0.25turn ≈ 1.5708rad</code></td>
    </tr>
  </tbody>
</table>

### Einen geraden Winkel einstellen

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angle180.png" alt="Ein Diagramm zeigt eine im Uhrzeigersinn verlaufende 180-Grad-Drehung entlang eines Kreises, indem es vom obersten Punkt zum untersten Punkt wechselt." /></td>
      <td><code>180deg = 200grad = 0.5turn ≈ 3.1416rad</code></td>
    </tr>
  </tbody>
</table>

### Einen gegen den Uhrzeigersinn verlaufenden rechten Winkel einstellen

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angleminus90.png" alt="Ein Diagramm zeigt eine gegen den Uhrzeigersinn verlaufende 90-Grad-Drehung entlang eines Kreises, indem es vom obersten Punkt zum linkesten Punkt wechselt." /></td>
      <td><code>-90deg = -100grad = -0.25turn ≈ -1.5708rad</code></td>
    </tr>
  </tbody>
</table>

### Einen Nullwinkel einstellen

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

- [CSS-Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types)
- Der [`<gradient>`](/de/docs/Web/CSS/Reference/Values/gradient) Typ
- CSS-Drehtransformationen: [`rotate()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotate), [`rotate3d()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotate3d), [`rotateX()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotateX), [`rotateY()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotateY), und [`rotateZ()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotateZ)
- [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms)
- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using)
- [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/Guides/Images/Using_gradients)

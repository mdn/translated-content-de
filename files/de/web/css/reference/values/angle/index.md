---
title: <angle>
slug: Web/CSS/Reference/Values/angle
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Der **`<angle>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert einen Winkelwert, der in Grad, Gon, Radiant oder Turn ausgedrückt wird. Er wird zum Beispiel in {{cssxref("gradient")}}en und in einigen {{cssxref("transform")}}-Funktionen verwendet.

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

Der `<angle>`-Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}} gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen Dimensionen gibt es keinen Abstand zwischen dem Einheitensuffix und der Zahl. Die Winkeleinheit ist optional hinter der Zahl `0`.

Optional kann es von einem einzelnen `+`- oder `-`-Zeichen vorangestellt werden. Positive Zahlen repräsentieren Uhrzeigersinnwinkel, während negative Zahlen gegen den Uhrzeigersinnwinkel darstellen. Für statische Eigenschaften einer gegebenen Einheit kann jeder Winkel durch verschiedene äquivalente Werte dargestellt werden. Zum Beispiel entspricht `90deg` `-270deg`, und `1turn` entspricht `4turn`. Bei dynamischen Eigenschaften, wie bei der Anwendung einer {{cssxref("animation")}} oder {{cssxref("transition")}}, wird der Effekt dennoch unterschiedlich sein.

### Einheiten

- `deg`
  - : Repräsentiert einen Winkel in [Grad](https://de.wikipedia.org/wiki/Grad_%28Winkel%29). Ein vollständiger Kreis sind `360deg`. Beispiele: `0deg`, `90deg`, `14.23deg`.
- `grad`
  - : Repräsentiert einen Winkel in [Gon](https://de.wikipedia.org/wiki/Gon). Ein vollständiger Kreis sind `400grad`. Beispiele: `0grad`, `100grad`, `38.8grad`.
- `rad`
  - : Repräsentiert einen Winkel in [Radiant](https://de.wikipedia.org/wiki/Radiant). Ein vollständiger Kreis sind 2π Radiant, was ungefähr `6.2832rad` entspricht. `1rad` sind 180/π Grad. Beispiele: `0rad`, `1.0708rad`, `6.2832rad`.
- `turn`
  - : Repräsentiert einen Winkel in Anzahl von Turns. Ein vollständiger Kreis ist `1turn`. Beispiele: `0turn`, `0.25turn`, `1.2turn`.

## Beispiele

### Einstellung eines 90-Grad-Winkels im Uhrzeigersinn

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angle90.png" alt="Ein Diagramm, das eine 90-Grad-Drehung im Uhrzeigersinn entlang eines Kreises zeigt, indem vom obersten Punkt zum rechtsseitigsten Punkt bewegt wird." /></td>
      <td><code>90deg = 100grad = 0.25turn ≈ 1.5708rad</code></td>
    </tr>
  </tbody>
</table>

### Einstellung eines flachen Winkels

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angle180.png" alt="Ein Diagramm, das eine 180-Grad-Drehung im Uhrzeigersinn entlang eines Kreises zeigt, indem vom obersten Punkt zum untersten Punkt bewegt wird." /></td>
      <td><code>180deg = 200grad = 0.5turn ≈ 3.1416rad</code></td>
    </tr>
  </tbody>
</table>

### Einstellung eines 90-Grad-Winkels gegen den Uhrzeigersinn

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angleminus90.png" alt="Ein Diagramm, das eine 90-Grad-Drehung gegen den Uhrzeigersinn entlang eines Kreises zeigt, indem vom obersten Punkt zum linksseitigsten Punkt bewegt wird." /></td>
      <td><code>-90deg = -100grad = -0.25turn ≈ -1.5708rad</code></td>
    </tr>
  </tbody>
</table>

### Einstellung eines Nullwinkels

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angle0.png" alt="Ein Diagramm, das eine 0-Grad-Drehung zeigt. Es gibt keine Bewegung." /></td>
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
- Der {{cssxref("gradient")}}-Typ
- CSS-Drehtransformationen: [`rotate()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotate), [`rotate3d()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotate3d), [`rotateX()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotateX), [`rotateY()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotateY), und [`rotateZ()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotateZ)
- [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms)
- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms/Using)
- [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/Guides/Images/Using_gradients)

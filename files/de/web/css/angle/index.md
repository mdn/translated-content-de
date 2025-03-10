---
title: <angle>
slug: Web/CSS/angle
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Der **`<angle>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen Winkelwert, der in Grad, Gon, Radiant oder Drehungen ausgedrückt wird. Er wird zum Beispiel in {{cssxref("&lt;gradient&gt;")}}s und einigen {{cssxref("transform")}} Funktionen verwendet.

{{InteractiveExample("CSS Demo: &amp;lt;angle&amp;gt;")}}

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

Der `<angle>` Datentyp besteht aus einem {{cssxref("&lt;number&gt;")}}, gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen Dimensionen gibt es keinen Leerraum zwischen der Einheit und der Zahl. Die Winkeleinheit ist optional nach der Zahl `0`.

Optional kann sie durch ein einzelnes `+` oder `-` Zeichen vorangestellt werden. Positive Zahlen repräsentieren Winkel im Uhrzeigersinn, während negative Zahlen Winkel gegen den Uhrzeigersinn repräsentieren. Für statische Eigenschaften einer gegebenen Einheit kann jeder Winkel durch verschiedene äquivalente Werte dargestellt werden. Zum Beispiel entspricht `90deg` `-270deg`, und `1turn` entspricht `4turn`. Bei dynamischen Eigenschaften, wie bei der Anwendung einer {{cssxref("animation")}} oder {{cssxref("transition")}}, wird der Effekt jedoch unterschiedlich sein.

### Einheiten

- `deg`
  - : Repräsentiert einen Winkel in [Grad](https://en.wikipedia.org/wiki/Degree_%28angle%29). Ein voller Kreis beträgt `360deg`. Beispiele: `0deg`, `90deg`, `14.23deg`.
- `grad`
  - : Repräsentiert einen Winkel in [Gon](https://en.wikipedia.org/wiki/Gradian). Ein voller Kreis beträgt `400grad`. Beispiele: `0grad`, `100grad`, `38.8grad`.
- `rad`
  - : Repräsentiert einen Winkel in [Radiant](https://en.wikipedia.org/wiki/Radian). Ein voller Kreis beträgt 2π Radianten, was ungefähr `6.2832rad` entspricht. `1rad` sind 180/π Grad. Beispiele: `0rad`, `1.0708rad`, `6.2832rad`.
- `turn`
  - : Repräsentiert einen Winkel in einer Anzahl von Drehungen. Ein voller Kreis beträgt `1turn`. Beispiele: `0turn`, `0.25turn`, `1.2turn`.

## Beispiele

### Einstellen eines rechtslaufenden rechten Winkels

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angle90.png" alt="Ein Diagramm, das eine rechtsdrehende 90-Grad-Drehung entlang eines Kreises zeigt, indem vom obersten Punkt zum rechten Punkt bewegt wird." /></td>
      <td><code>90deg = 100grad = 0.25turn ≈ 1.5708rad</code></td>
    </tr>
  </tbody>
</table>

### Einstellen eines flachen Winkels

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angle180.png" alt="Ein Diagramm, das eine rechtsdrehende 180-Grad-Drehung entlang eines Kreises zeigt, indem vom obersten Punkt zum untersten Punkt bewegt wird." /></td>
      <td><code>180deg = 200grad = 0.5turn ≈ 3.1416rad</code></td>
    </tr>
  </tbody>
</table>

### Einstellen eines linksdrehenden rechten Winkels

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angleminus90.png" alt="Ein Diagramm, das eine linksdrehende 90-Grad-Drehung entlang eines Kreises zeigt, indem vom obersten Punkt zum linken Punkt bewegt wird." /></td>
      <td><code>-90deg = -100grad = -0.25turn ≈ -1.5708rad</code></td>
    </tr>
  </tbody>
</table>

### Einstellen eines Nullwinkels

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

- [CSS Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
- Der [`<gradient>`](/de/docs/Web/CSS/gradient) Typ
- CSS Rotations-Transformationen: [`rotate()`](/de/docs/Web/CSS/transform-function/rotate), [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d), [`rotateX()`](/de/docs/Web/CSS/transform-function/rotateX), [`rotateY()`](/de/docs/Web/CSS/transform-function/rotateY), und [`rotateZ()`](/de/docs/Web/CSS/transform-function/rotateZ)
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms)
- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)

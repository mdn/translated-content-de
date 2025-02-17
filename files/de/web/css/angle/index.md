---
title: <angle>
slug: Web/CSS/angle
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<angle>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen Winkelwert, der in Grad, Gon, Radianten oder Umdrehungen ausgedrückt wird. Er wird beispielsweise in {{cssxref("&lt;gradient&gt;")}}s und in einigen {{cssxref("transform")}}-Funktionen verwendet.

{{EmbedInteractiveExample("pages/css/type-angle.html")}}

## Syntax

Der `<angle>`-Datentyp besteht aus einem {{cssxref("&lt;number&gt;")}}, gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen Dimensionen gibt es keinen Leerraum zwischen der Einheit und der Zahl. Die Winkeleinheit ist nach der Zahl `0` optional.

Optional kann ein einzelnes `+`- oder `-`-Vorzeichen vorangestellt sein. Positive Zahlen repräsentieren Winkel im Uhrzeigersinn, während negative Zahlen Winkel gegen den Uhrzeigersinn darstellen. Für statische Eigenschaften einer gegebenen Einheit können Winkel durch verschiedene äquivalente Werte dargestellt werden. Zum Beispiel entspricht `90deg` `-270deg`, und `1turn` entspricht `4turn`. Für dynamische Eigenschaften, wie bei der Anwendung einer {{cssxref("animation")}} oder {{cssxref("transition")}}, kann der Effekt jedoch unterschiedlich sein.

### Einheiten

- `deg`
  - : Repräsentiert einen Winkel in [Grad](https://de.wikipedia.org/wiki/Grad_(Winkeleinheit)). Ein voller Kreis entspricht `360deg`. Beispiele: `0deg`, `90deg`, `14.23deg`.
- `grad`
  - : Repräsentiert einen Winkel in [Gon](https://de.wikipedia.org/wiki/Gon_(Winkeleinheit)). Ein voller Kreis entspricht `400grad`. Beispiele: `0grad`, `100grad`, `38.8grad`.
- `rad`
  - : Repräsentiert einen Winkel in [Radianten](https://de.wikipedia.org/wiki/Radiant). Ein voller Kreis entspricht 2π Radianten, was etwa `6.2832rad` entspricht. `1rad` entspricht 180/π Grad. Beispiele: `0rad`, `1.0708rad`, `6.2832rad`.
- `turn`
  - : Repräsentiert einen Winkel in einer Anzahl von Umdrehungen. Ein voller Kreis entspricht `1turn`. Beispiele: `0turn`, `0.25turn`, `1.2turn`.

## Beispiele

### Einstellung eines rechten Winkels im Uhrzeigersinn

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angle90.png" alt="Ein Diagramm, das eine 90-Grad-Drehung im Uhrzeigersinn entlang eines Kreises zeigt, indem man sich vom oberen Punkt zum rechten Punkt bewegt." /></td>
      <td><code>90deg = 100grad = 0.25turn ≈ 1.5708rad</code></td>
    </tr>
  </tbody>
</table>

### Einstellung eines geraden Winkels

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angle180.png" alt="Ein Diagramm, das eine 180-Grad-Drehung im Uhrzeigersinn entlang eines Kreises zeigt, indem man sich vom oberen Punkt zum unteren Punkt bewegt." /></td>
      <td><code>180deg = 200grad = 0.5turn ≈ 3.1416rad</code></td>
    </tr>
  </tbody>
</table>

### Einstellung eines rechten Winkels gegen den Uhrzeigersinn

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angleminus90.png" alt="Ein Diagramm, das eine -90-Grad-Drehung gegen den Uhrzeigersinn entlang eines Kreises zeigt, indem man sich vom oberen Punkt zum linken Punkt bewegt." /></td>
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

- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
- Der [`<gradient>`](/de/docs/Web/CSS/gradient)-Typ
- CSS-Dreh-Transformationen: [`rotate()`](/de/docs/Web/CSS/transform-function/rotate), [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d), [`rotateX()`](/de/docs/Web/CSS/transform-function/rotateX), [`rotateY()`](/de/docs/Web/CSS/transform-function/rotateY) und [`rotateZ()`](/de/docs/Web/CSS/transform-function/rotateZ)
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms)
- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- [Verwendung von CSS-Gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)

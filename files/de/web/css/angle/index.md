---
title: <angle>
slug: Web/CSS/angle
l10n:
  sourceCommit: 48813be4b5187c6a17e744e7f9ba37a146302847
---

{{CSSRef}}

Der **`<angle>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert einen Winkelwert, der in Grad, Neugrad, Radiant oder Umdrehungen ausgedrückt wird. Er wird beispielsweise in {{cssxref("&lt;gradient&gt;")}}-Verläufen und in einigen {{cssxref("transform")}}-Funktionen verwendet.

{{EmbedInteractiveExample("pages/css/type-angle.html")}}

## Syntax

Der `<angle>`-Datentyp besteht aus einer {{cssxref("&lt;number&gt;")}}, gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen Maßeinheiten gibt es keinen Abstand zwischen dem Einheitsliteral und der Zahl. Die Winkeleinheit ist nach der Zahl `0` optional.

Optional kann ein einzelnes `+`- oder `-`-Zeichen vorangestellt werden. Positive Zahlen repräsentieren Winkel im Uhrzeigersinn, während negative Zahlen Winkel gegen den Uhrzeigersinn darstellen. Für statische Eigenschaften einer gegebenen Einheit kann jeder Winkel durch verschiedene äquivalente Werte dargestellt werden. Zum Beispiel entsprechen `90deg` `-270deg` und `1turn` entspricht `4turn`. Für dynamische Eigenschaften, wie bei Anwendung von {{cssxref("animation")}} oder {{cssxref("transition")}}, wird die Wirkung dennoch unterschiedlich sein.

### Einheiten

- `deg`
  - : Repräsentiert einen Winkel in [Grad](https://en.wikipedia.org/wiki/Degree_%28angle%29). Ein voller Kreis entspricht `360deg`. Beispiele: `0deg`, `90deg`, `14.23deg`.
- `grad`
  - : Repräsentiert einen Winkel in [Neugrad](https://en.wikipedia.org/wiki/Gradian). Ein voller Kreis entspricht `400grad`. Beispiele: `0grad`, `100grad`, `38.8grad`.
- `rad`
  - : Repräsentiert einen Winkel in [Radianten](https://en.wikipedia.org/wiki/Radian). Ein voller Kreis entspricht 2π Radianten, was ungefähr `6.2832rad` entspricht. `1rad` entspricht 180/π Grad. Beispiele: `0rad`, `1.0708rad`, `6.2832rad`.
- `turn`
  - : Repräsentiert einen Winkel in einer Anzahl von Umdrehungen. Ein voller Kreis entspricht `1turn`. Beispiele: `0turn`, `0.25turn`, `1.2turn`.

## Beispiele

### Einstellen eines rechtsläufigen rechten Winkels

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angle90.png" alt="Ein Diagramm zeigt eine rechtsläufige 90-Grad-Drehung entlang eines Kreises durch Bewegung vom oberen Punkt zum rechten Punkt." /></td>
      <td><code>90deg = 100grad = 0.25turn ≈ 1.5708rad</code></td>
    </tr>
  </tbody>
</table>

### Einstellen eines flachen Winkels

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angle180.png" alt="Ein Diagramm zeigt eine rechtsläufige 180-Grad-Drehung entlang eines Kreises durch Bewegung vom oberen Punkt zum untersten Punkt." /></td>
      <td><code>180deg = 200grad = 0.5turn ≈ 3.1416rad</code></td>
    </tr>
  </tbody>
</table>

### Einstellen eines gegen den Uhrzeigersinn verlaufenden rechten Winkels

<table class="standard-table">
  <tbody>
    <tr>
      <td><img class="default internal" src="angleminus90.png" alt="Ein Diagramm zeigt eine gegen den Uhrzeigersinn verlaufende 90-Grad-Drehung entlang eines Kreises durch Bewegung vom oberen Punkt zum linken Punkt." /></td>
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

- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Types)
- Der [`<gradient>`](/de/docs/Web/CSS/gradient)-Typ
- CSS-Drehtransformationen: [`rotate()`](/de/docs/Web/CSS/transform-function/rotate), [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d), [`rotateX()`](/de/docs/Web/CSS/transform-function/rotateX), [`rotateY()`](/de/docs/Web/CSS/transform-function/rotateY) und [`rotateZ()`](/de/docs/Web/CSS/transform-function/rotateZ)
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms)
- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)

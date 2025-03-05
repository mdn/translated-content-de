---
title: border-bottom-left-radius
slug: Web/CSS/border-bottom-left-radius
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`border-bottom-left-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft rundet die untere linke Ecke eines Elements ab, indem sie den Radius (oder den Radius der Halb-Haupt- und Halb-Nebenachsen) der Ellipse angibt, die die Krümmung der Ecke definiert.

{{EmbedInteractiveExample("pages/css/border-bottom-left-radius.html")}}

Die Abrundung kann ein Kreis oder eine Ellipse sein, oder wenn einer der Werte `0` ist, wird keine Abrundung vorgenommen und die Ecke bleibt quadratisch.

![border-bottom-left-radius.png](border-bottom-left-radius.png)

Ein Hintergrund, sei es ein Bild oder eine Farbe, wird an der Grenze abgeschnitten, auch an einer abgerundeten; der genaue Ort des Zuschnitts wird durch den Wert der {{cssxref("background-clip")}} Eigenschaft definiert.

> [!NOTE]
> Wenn der Wert dieser Eigenschaft nicht in einer {{cssxref("border-radius")}} Kurzform-Eigenschaft gesetzt wird, die nach der `border-bottom-left-radius` CSS-Eigenschaft auf das Element angewendet wird, wird der Wert dieser Eigenschaft von der [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) auf seinen Anfangswert zurückgesetzt.

## Syntax

```css
/* the corner is a circle */
/* border-bottom-left-radius: radius */
border-bottom-left-radius: 3px;

/* Percentage values */

/* circle if box is a square or ellipse if box is a rectangle */
border-bottom-left-radius: 20%;

/* same as above: 20% of horizontal(width) and vertical(height) */
border-bottom-left-radius: 20% 20%;

/* 20% of horizontal(width) and 10% of vertical(height) */
border-bottom-left-radius: 20% 10%;

/* the corner is an ellipse */
/* border-bottom-left-radius: horizontal vertical */
border-bottom-left-radius: 0.5em 1em;

/* Global values */
border-bottom-left-radius: inherit;
border-bottom-left-radius: initial;
border-bottom-left-radius: revert;
border-bottom-left-radius: revert-layer;
border-bottom-left-radius: unset;
```

Mit einem Wert:

- Der Wert ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der den Radius des Kreises angibt, der für die Grenze in dieser Ecke verwendet werden soll.

Mit zwei Werten:

- Der erste Wert ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der die horizontale Halb-Hauptachse der Ellipse angibt, die für die Grenze in dieser Ecke verwendet werden soll.
- Der zweite Wert ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der die vertikale Halb-Hauptachse der Ellipse angibt, die für die Grenze in dieser Ecke verwendet werden soll.

### Werte

- `<length-percentage>`
  - : Bezeichnet die Größe des Kreisradius oder der Halb-Haupt- und Halb-Nebenachsen der Ellipse. Als absolute Länge kann es in jeder Einheit ausgedrückt werden, die vom CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubt ist. Prozentwerte für die horizontale Achse beziehen sich auf die Breite des Kastens, Prozentwerte für die vertikale Achse beziehen sich auf die Höhe des Kastens. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Bogen eines Kreises

Ein einzelner `<length>` Wert ergibt einen Bogen eines Kreises.

```html hidden
<div></div>
```

```css
div {
  border-bottom-left-radius: 40px;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Arc_of_a_circle")}}

### Bogen einer Ellipse

Zwei verschiedene `<length>` Werte ergeben einen Bogen einer Ellipse.

```html hidden
<div></div>
```

```css
div {
  border-bottom-left-radius: 40px 20px;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Arc_of_an_ellipse")}}

### Quadratisches Element mit prozentualem Radius

Ein quadratisches Element mit einem einzigen `<percentage>` Wert ergibt einen Bogen eines Kreises.

```html hidden
<div></div>
```

```css
div {
  border-bottom-left-radius: 40%;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Square_element_with_percentage_radius")}}

### Nicht-quadratisches Element mit prozentualem Radius

Ein nicht-quadratisches Element mit einem einzigen `<percentage>` Wert ergibt einen Bogen einer Ellipse.

```html hidden
<div></div>
```

```css
div {
  border-bottom-left-radius: 40%;
  background-color: lightgreen;
  border: solid 1px black;
  width: 200px;
  height: 100px;
}
```

{{EmbedLiveSample("Non-square_element_with_percentage_radius")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("border-radius")}} Kurzform-Eigenschaft
- {{cssxref("border-top-right-radius")}}, {{cssxref("border-bottom-right-radius")}}, und {{cssxref("border-top-left-radius")}}

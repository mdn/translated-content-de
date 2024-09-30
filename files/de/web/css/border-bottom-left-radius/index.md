---
title: border-bottom-left-radius
slug: Web/CSS/border-bottom-left-radius
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`border-bottom-left-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft rundet die untere linke Ecke eines Elements ab, indem sie den Radius (oder den Radius der Haupt- und Nebenachse) der Ellipse angibt, die die Krümmung der Ecke definiert.

{{EmbedInteractiveExample("pages/css/border-bottom-left-radius.html")}}

Die Abrundung kann ein Kreis oder eine Ellipse sein, oder wenn einer der Werte `0` ist, wird keine Abrundung vorgenommen und die Ecke bleibt eckig.

![border-bottom-left-radius.png](border-bottom-left-radius.png)

Ein Hintergrund, sei es ein Bild oder eine Farbe, wird an der Grenze abgeschnitten, selbst bei einer abgerundeten; der genaue Ort der Abschneidung wird durch den Wert der {{cssxref("background-clip")}} Eigenschaft definiert.

> [!NOTE]
> Wenn der Wert dieser Eigenschaft nicht in einer {{cssxref("border-radius")}} Kurzschreibweise gesetzt ist, die nach der `border-bottom-left-radius` CSS-Eigenschaft auf das Element angewendet wird, wird der Wert dieser Eigenschaft durch die [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) auf den Ausgangswert zurückgesetzt.

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

- Der Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} und bezeichnet den Radius des Kreises, der für die Grenze in dieser Ecke verwendet wird.

Mit zwei Werten:

- Der erste Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} und bezeichnet die horizontale Hauptachse der Ellipse, die für die Grenze in dieser Ecke verwendet wird.
- Der zweite Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} und bezeichnet die vertikale Hauptachse der Ellipse, die für die Grenze in dieser Ecke verwendet wird.

### Werte

- `<length-percentage>`
  - : Bezeichnet die Größe des Kreisesradius oder der Haupt- und Nebenachsen der Ellipse. Als absolute Länge kann er in jeder Einheit ausgedrückt werden, die vom CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubt ist. Prozentsätze für die horizontale Achse beziehen sich auf die Breite des Rahmens, Prozentsätze für die vertikale Achse beziehen sich auf die Höhe des Rahmens. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Bogen eines Kreises

Ein einzelner `<length>` Wert erzeugt einen Bogen eines Kreises.

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

Zwei verschiedene `<length>` Werte erzeugen einen Bogen einer Ellipse.

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

### Quadratförmiges Element mit Prozentsatzradius

Ein quadratförmiges Element mit einem einzelnen `<percentage>` Wert erzeugt einen Bogen eines Kreises.

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

### Nicht-quadratförmiges Element mit Prozentsatzradius

Ein nicht-quadratförmiges Element mit einem einzelnen `<percentage>` Wert erzeugt einen Bogen einer Ellipse.

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

- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("border-top-right-radius")}}, {{cssxref("border-bottom-right-radius")}}, und {{cssxref("border-top-left-radius")}}

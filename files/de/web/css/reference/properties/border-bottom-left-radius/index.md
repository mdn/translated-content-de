---
title: border-bottom-left-radius
slug: Web/CSS/Reference/Properties/border-bottom-left-radius
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`border-bottom-left-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft rundet die untere linke Ecke eines Elements ab, indem der Radius (oder der Radius der Halbmajor- und Halbminorachsen) der Ellipse angegeben wird, die die Krümmung der Ecke definiert.

{{InteractiveExample("CSS Demo: border-bottom-left-radius")}}

```css interactive-example-choice
border-bottom-left-radius: 80px 80px;
```

```css interactive-example-choice
border-bottom-left-radius: 250px 100px;
```

```css interactive-example-choice
border-bottom-left-radius: 50%;
```

```css interactive-example-choice
border-bottom-left-radius: 50%;
border: black 10px double;
background-clip: content-box;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a bottom left rounded corner.
  </div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #5b6dcd;
  color: white;
  padding: 10px;
}
```

Die Abrundung kann ein Kreis oder eine Ellipse sein, oder wenn einer der Werte `0` ist, wird keine Abrundung vorgenommen und die Ecke ist quadratisch.

![border-bottom-left-radius.png](border-bottom-left-radius.png)

Ein Hintergrund, sei es ein Bild oder eine Farbe, wird an der Grenze abgeschnitten, selbst bei einer abgerundeten; der genaue Ort der Abschneidung wird durch den Wert der {{cssxref("background-clip")}} Eigenschaft definiert.

> [!NOTE]
> Wenn der Wert dieser Eigenschaft nicht in einer {{cssxref("border-radius")}} Kurzschreibweise gesetzt ist, die auf das Element nach der `border-bottom-left-radius` CSS-Eigenschaft angewendet wird, wird der Wert dieser Eigenschaft durch die [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) auf seinen Anfangswert zurückgesetzt.

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

- der Wert ist eine {{cssxref("&lt;length&gt;")}} oder eine {{cssxref("&lt;percentage&gt;")}}, die den Radius des Kreises angibt, der für die Grenze in dieser Ecke verwendet werden soll.

Mit zwei Werten:

- der erste Wert ist eine {{cssxref("&lt;length&gt;")}} oder eine {{cssxref("&lt;percentage&gt;")}}, die die horizontale Halbmajorachse der Ellipse angibt, die für die Grenze in dieser Ecke verwendet werden soll.
- der zweite Wert ist eine {{cssxref("&lt;length&gt;")}} oder eine {{cssxref("&lt;percentage&gt;")}}, die die vertikale Halbmajorachse der Ellipse angibt, die für die Grenze in dieser Ecke verwendet werden soll.

### Werte

- `<length-percentage>`
  - : Bezeichnet die Größe des Kreisradius oder der Halbmajor- und Halbminorachsen der Ellipse. Als absolute Länge kann es in jeder Einheit ausgedrückt werden, die vom CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubt ist. Prozentwerte für die horizontale Achse beziehen sich auf die Breite der Box, Prozentwerte für die vertikale Achse beziehen sich auf die Höhe der Box. Negative Werte sind ungültig.

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

Zwei unterschiedliche `<length>` Werte erzeugen einen Bogen einer Ellipse.

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

### Quadratisches Element mit Prozentwert-Radius

Ein quadratisches Element mit einem einzigen `<percentage>` Wert erzeugt einen Bogen eines Kreises.

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

### Nicht-quadratisches Element mit Prozentwert-Radius

Ein nicht-quadratisches Element mit einem einzigen `<percentage>` Wert erzeugt einen Bogen einer Ellipse.

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

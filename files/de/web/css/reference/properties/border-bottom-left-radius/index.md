---
title: "`border-bottom-left-radius` CSS property"
short-title: border-bottom-left-radius
slug: Web/CSS/Reference/Properties/border-bottom-left-radius
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`border-bottom-left-radius`** [CSS](/de/docs/Web/CSS)-Eigenschaft rundet die untere linke Ecke eines Elements, indem sie den Radius (oder die Radien der Halbachsen) der Ellipse angibt, die die Krümmung der Ecke definiert.

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

- Der Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, die den Radius des Kreises angeben, der für die Grenze in dieser Ecke verwendet wird.

Mit zwei Werten:

- Der erste Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, die die horizontale Hauptachse der Ellipse angeben, die für die Grenze in dieser Ecke verwendet wird.
- Der zweite Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, die die vertikale Hauptachse der Ellipse angeben, die für die Grenze in dieser Ecke verwendet wird.

### Werte

- `<length-percentage>`
  - : Gibt die Größe des Kreisradius oder der Haupt- und Nebenachsen der Ellipse an. Als absolute Länge kann sie in jeder Einheit ausgedrückt werden, die durch den CSS-Datentyp {{cssxref("&lt;length&gt;")}} erlaubt ist. Prozentwerte für die horizontale Achse beziehen sich auf die Breite der Box, Prozentwerte für die vertikale Achse beziehen sich auf die Höhe der Box. Negative Werte sind ungültig.

## Beschreibung

Die Abrundung kann ein Kreis oder eine Ellipse sein, oder wenn einer der Werte `0` ist, wird keine Abrundung vorgenommen und die Ecke bleibt eckig.

![border-bottom-left-radius.png](border-bottom-left-radius.png)

Ein Hintergrund, sei es ein Bild oder eine Farbe, wird an der Grenze abgeschnitten, auch bei einer abgerundeten. Die genaue Position des Schnitts wird durch den Wert der {{cssxref("background-clip")}}-Eigenschaft definiert.

> [!NOTE]
> Wenn der Wert dieser Eigenschaft nicht in einer {{cssxref("border-radius")}}-Kurzform-Eigenschaft gesetzt ist, die nach der CSS-Eigenschaft `border-bottom-left-radius` auf das Element angewendet wird, wird der Wert dieser Eigenschaft auf seinen Anfangswert durch die [Kurzform-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) zurückgesetzt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Bogen eines Kreises

Ein einzelner `<length>`-Wert erzeugt einen Bogen eines Kreises.

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

Zwei verschiedene `<length>`-Werte erzeugen einen Bogen einer Ellipse.

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

### Quadratisches Element mit Prozent-Radius

Ein quadratisches Element mit einem einzigen `<percentage>`-Wert erzeugt einen Bogen eines Kreises.

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

### Nicht-quadratisches Element mit Prozent-Radius

Ein nicht-quadratisches Element mit einem einzigen `<percentage>`-Wert erzeugt einen Bogen einer Ellipse.

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

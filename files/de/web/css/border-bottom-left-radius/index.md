---
title: border-bottom-left-radius
slug: Web/CSS/border-bottom-left-radius
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border-bottom-left-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft rundet die untere linke Ecke eines Elements ab, indem sie den Radius (oder den Radius der halb-haupt- und halb-nebenachsen) der Ellipse angibt, die die Krümmung der Ecke definiert.

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

Die Abrundung kann ein Kreis oder eine Ellipse sein, oder falls einer der Werte `0` ist, erfolgt keine Abrundung und die Ecke ist quadratisch.

![border-bottom-left-radius.png](border-bottom-left-radius.png)

Ein Hintergrund, sei es ein Bild oder eine Farbe, wird am Rand abgeschnitten, auch wenn dieser abgerundet ist; der genaue Ort des Zuschnitts wird durch den Wert der {{cssxref("background-clip")}} Eigenschaft definiert.

> [!NOTE]
> Wenn der Wert dieser Eigenschaft nicht in einer {{cssxref("border-radius")}} Kurzform-Eigenschaft gesetzt ist, die nach der `border-bottom-left-radius` CSS-Eigenschaft auf das Element angewendet wird, wird der Wert dieser Eigenschaft von der [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) auf seinen Anfangswert zurückgesetzt.

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

- der Wert ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der den Radius des Kreises angibt, der für die Ecke verwendet werden soll.

Mit zwei Werten:

- der erste Wert ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der die horizontale halb-hauptachse der Ellipse angibt, die für die Ecke verwendet werden soll.
- der zweite Wert ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der die vertikale halb-hauptachse der Ellipse angibt, die für die Ecke verwendet werden soll.

### Werte

- `<length-percentage>`
  - : Gibt die Größe des Kreisbogenradius oder der halb-haupt- und halb-nebenachsen der Ellipse an. Als absolute Länge kann sie in jeder von der CSS {{cssxref("&lt;length&gt;")}} Datenklasse erlaubten Einheit ausgedrückt werden. Prozentsätze für die horizontale Achse beziehen sich auf die Breite des Kastens, Prozentsätze für die vertikale Achse beziehen sich auf die Höhe des Kastens. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Kreisbogen

Ein einzelner `<length>` Wert erzeugt einen Kreisbogen.

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

### Ellipsenbogen

Zwei verschiedene `<length>` Werte erzeugen einen Ellipsenbogen.

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

### Quadratisches Element mit Prozentsatzradius

Ein quadratisches Element mit einem einzigen `<percentage>` Wert erzeugt einen Kreisbogen.

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

### Nicht-quadratisches Element mit Prozentsatzradius

Ein nicht-quadratisches Element mit einem einzigen `<percentage>` Wert erzeugt einen Ellipsenbogen.

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

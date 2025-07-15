---
title: border-bottom-right-radius
slug: Web/CSS/border-bottom-right-radius
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border-bottom-right-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft rundet die untere rechte Ecke eines Elements, indem sie den Radius (oder den Radius der Halbmajor- und Halbminorachsen) der Ellipse angibt, die die Krümmung der Ecke definiert.

{{InteractiveExample("CSS Demo: border-bottom-right-radius")}}

```css interactive-example-choice
border-bottom-right-radius: 80px 80px;
```

```css interactive-example-choice
border-bottom-right-radius: 250px 100px;
```

```css interactive-example-choice
border-bottom-right-radius: 50%;
```

```css interactive-example-choice
border-bottom-right-radius: 50%;
border: black 10px double;
background-clip: content-box;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a bottom right rounded corner.
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

Das Abrunden kann ein Kreis oder eine Ellipse sein, oder wenn einer der Werte `0` ist, erfolgt kein Abrunden und die Ecke bleibt quadratisch.

![border-bottom-right-radius.png](border-bottom-right-radius.png)

Ein Hintergrund, sei es ein Bild oder eine Farbe, wird an der Grenze geclippt, selbst eine abgerundete; der genaue Ort des Clippings wird durch den Wert der {{cssxref("background-clip")}} Eigenschaft definiert.

> [!NOTE]
> Wenn der Wert dieser Eigenschaft nicht in einer {{cssxref("border-radius")}} Kurzform-Eigenschaft gesetzt ist, die nach der `border-bottom-right-radius` CSS-Eigenschaft auf das Element angewendet wird, wird der Wert dieser Eigenschaft durch die [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) auf seinen Anfangswert zurückgesetzt.

## Syntax

```css
/* The corner is a circle */
/* border-bottom-right-radius: radius */
border-bottom-right-radius: 3px;

/* Percentage values */
border-bottom-right-radius: 20%; /* corner of a circle if box is a square or else corner of a rectangle */
border-bottom-right-radius: 20% 20%; /* same as above */ /* 20% of horizontal(width) and vertical(height) */
border-bottom-right-radius: 20% 10%; /* 20% of horizontal(width) and 10% of vertical(height) */

/*The corner is an ellipse */
/* border-bottom-right-radius: horizontal vertical */
border-bottom-right-radius: 0.5em 1em;

/* Global values */
border-bottom-right-radius: inherit;
border-bottom-right-radius: initial;
border-bottom-right-radius: revert;
border-bottom-right-radius: revert-layer;
border-bottom-right-radius: unset;
```

Mit einem Wert:

- der Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, die den Radius des Kreises angibt, der für die Grenze in dieser Ecke verwendet werden soll.

Mit zwei Werten:

- der erste Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, die die horizontale Halbmajorachse der Ellipse angibt, die für die Grenze in dieser Ecke verwendet werden soll.
- der zweite Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, die die vertikale Halbmajorachse der Ellipse angibt, die für die Grenze in dieser Ecke verwendet werden soll.

### Werte

- `<length-percentage>`
  - : Gibt die Größe des Kreisradius oder die Halbmajor- und Halbminorachsen der Ellipse an. Als absolute Länge kann sie in jeder vom CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubten Einheit ausgedrückt werden. Prozentsätze für die horizontale Achse beziehen sich auf die Breite der Box, Prozentsätze für die vertikale Achse beziehen sich auf die Höhe der Box. Negative Werte sind ungültig.

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
  border-bottom-right-radius: 40px;
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
  border-bottom-right-radius: 40px 20px;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Arc_of_an_ellipse")}}

### Quadratisches Element mit prozentualem Radius

Ein quadratisches Element mit einem einzigen `<percentage>` Wert erzeugt einen Bogen eines Kreises.

```html hidden
<div></div>
```

```css
div {
  border-bottom-right-radius: 40%;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Square_element_with_percentage_radius")}}

### Nicht-quadratisches Element mit prozentualem Radius

Ein nicht-quadratisches Element mit einem einzigen `<percentage>` Wert erzeugt einen Bogen einer Ellipse.

```html hidden
<div></div>
```

```css
div {
  border-bottom-right-radius: 40%;
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
- {{cssxref("border-top-right-radius")}}, {{cssxref("border-bottom-left-radius")}}, und {{cssxref("border-top-left-radius")}}

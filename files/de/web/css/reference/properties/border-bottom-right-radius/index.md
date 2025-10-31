---
title: border-bottom-right-radius
slug: Web/CSS/Reference/Properties/border-bottom-right-radius
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`border-bottom-right-radius`** [CSS](/de/docs/Web/CSS)-Eigenschaft rundet die untere rechte Ecke eines Elements ab, indem der Radius (oder die Radien der Haupt- und Nebenachsen) der Ellipse angegeben wird, die die Krümmung der Ecke definiert.

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

Das Abrunden kann entweder ein Kreis oder eine Ellipse sein, oder wenn einer der Werte `0` ist, wird keine Abrundung vorgenommen und die Ecke bleibt eckig.

![border-bottom-right-radius.png](border-bottom-right-radius.png)

Ein Hintergrund, sei es ein Bild oder eine Farbe, wird an der Grenze, selbst an einer abgerundeten, abgeschnitten; der genaue Ort des Abschneidens wird durch den Wert der {{cssxref("background-clip")}}-Eigenschaft definiert.

> [!NOTE]
> Wenn der Wert dieser Eigenschaft nicht in einer {{cssxref("border-radius")}}-Kurzschreibweise gesetzt ist, die auf das Element nach der `border-bottom-right-radius` CSS-Eigenschaft angewendet wird, wird der Wert dieser Eigenschaft durch die [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) auf ihren Anfangswert zurückgesetzt.

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

- Der Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der den Radius des Kreises für die Ecke angibt.

Mit zwei Werten:

- Der erste Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der die horizontale Hauptachse der Ellipse für die Ecke angibt.
- Der zweite Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der die vertikale Hauptachse der Ellipse für die Ecke angibt.

### Werte

- `<length-percentage>`
  - : Bezeichnet die Größe des Kreisradius oder die Halbachsen der Ellipse. Als absolute Länge kann sie in jeder von der CSS {{cssxref("&lt;length&gt;")}}-Datenart erlaubten Einheit ausgedrückt werden. Prozentangaben für die horizontale Achse beziehen sich auf die Breite der Box, Prozentangaben für die vertikale Achse beziehen sich auf die Höhe der Box. Negative Werte sind ungültig.

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
  border-bottom-right-radius: 40px;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Arc_of_a_circle")}}

### Bogen einer Ellipse

Zwei unterschiedliche `<length>`-Werte erzeugen einen Bogen einer Ellipse.

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

Ein quadratisches Element mit einem einzelnen `<percentage>`-Wert erzeugt einen Bogen eines Kreises.

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

Ein nicht-quadratisches Element mit einem einzelnen `<percentage>`-Wert erzeugt einen Bogen einer Ellipse.

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

- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("border-top-right-radius")}}, {{cssxref("border-bottom-left-radius")}}, und {{cssxref("border-top-left-radius")}}

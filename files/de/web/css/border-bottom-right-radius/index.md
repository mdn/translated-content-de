---
title: border-bottom-right-radius
slug: Web/CSS/border-bottom-right-radius
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`border-bottom-right-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft rundet die untere rechte Ecke eines Elements ab, indem der Radius (oder der Radius der Haupt- und Nebenachse) der Ellipse, die die Krümmung der Ecke definiert, angegeben wird.

{{EmbedInteractiveExample("pages/css/border-bottom-right-radius.html")}}

Die Abrundung kann ein Kreis oder eine Ellipse sein, oder wenn einer der Werte `0` ist, wird keine Abrundung durchgeführt und die Ecke ist rechtwinklig.

![border-bottom-right-radius.png](border-bottom-right-radius.png)

Ein Hintergrund, sei es ein Bild oder eine Farbe, wird am Rand abgeschnitten, sogar ein abgerundeter; der genaue Ort des Abschneidens wird durch den Wert der {{cssxref("background-clip")}} Eigenschaft definiert.

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

- Der Wert ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der den Radius des zu verwendenden Kreises für den Rand in dieser Ecke angibt.

Mit zwei Werten:

- Der erste Wert ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der die horizontale Halbachse der zu verwendenden Ellipse für den Rand in dieser Ecke angibt.
- Der zweite Wert ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der die vertikale Halbachse der zu verwendenden Ellipse für den Rand in dieser Ecke angibt.

### Werte

- `<length-percentage>`
  - : Gibt die Größe des Kreisradius oder der Haupt- und Nebenachsen der Ellipse an. Als absolute Länge kann es in jeder von den CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubten Einheit ausgedrückt werden. Prozentsätze für die horizontale Achse beziehen sich auf die Breite des Kastens, Prozentsätze für die vertikale Achse beziehen sich auf die Höhe des Kastens. Negative Werte sind ungültig.

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
  border-bottom-right-radius: 40px;
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
  border-bottom-right-radius: 40px 20px;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Arc_of_an_ellipse")}}

### Rechteckiges Element mit prozentualem Radius

Ein rechteckiges Element mit einem einzigen `<percentage>` Wert erzeugt einen Kreisbogen.

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

### Nicht-rechteckiges Element mit prozentualem Radius

Ein nicht-rechteckiges Element mit einem einzigen `<percentage>` Wert erzeugt einen Ellipsenbogen.

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

---
title: border-top-left-radius
slug: Web/CSS/Reference/Properties/border-top-left-radius
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`border-top-left-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft rundet die obere linke Ecke eines Elements, indem der Radius (oder die Radien der Haupt- und Nebenachse) der Ellipse angegeben wird, die die Krümmung der Ecke definiert.

{{InteractiveExample("CSS Demo: border-top-left-radius")}}

```css interactive-example-choice
border-top-left-radius: 80px 80px;
```

```css interactive-example-choice
border-top-left-radius: 250px 100px;
```

```css interactive-example-choice
border-top-left-radius: 50%;
```

```css interactive-example-choice
border-top-left-radius: 50%;
border: black 10px double;
background-clip: content-box;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a top left rounded corner.
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

Die Abrundung kann ein Kreis oder eine Ellipse sein, oder wenn einer der Werte `0` ist, erfolgt keine Abrundung und die Ecke bleibt quadratisch.

![border-radius.png](border-radius.png)

Ein Hintergrund, sei es ein Bild oder eine Farbe, wird an der Grenze, auch einer abgerundeten, abgeschnitten. Der genaue Ort des Zuschnitts wird durch den Wert der {{cssxref("background-clip")}} Eigenschaft definiert.

> [!NOTE]
> Wenn der Wert dieser Eigenschaft nicht in einer {{cssxref("border-radius")}} Kurzform-Eigenschaft gesetzt wird, die nach der `border-top-left-radius` CSS-Eigenschaft auf das Element angewendet wird, wird der Wert dieser Eigenschaft von der [Kurzform-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) auf seinen ursprünglichen Wert zurückgesetzt.

## Syntax

```css
/* the corner is a circle */
/* border-top-left-radius: radius */
border-top-left-radius: 3px;

/* the corner is an ellipse */
/* border-top-left-radius: horizontal vertical */
border-top-left-radius: 0.5em 1em;

border-top-left-radius: inherit;

/* Global values */
border-top-left-radius: inherit;
border-top-left-radius: initial;
border-top-left-radius: revert;
border-top-left-radius: revert-layer;
border-top-left-radius: unset;
```

Mit einem Wert:

- Der Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der den Radius des Kreises angibt, der für die Grenze in dieser Ecke verwendet wird.

Mit zwei Werten:

- Der erste Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der die horizontale Hauptachse der Ellipse angibt, die für die Grenze in dieser Ecke verwendet wird.
- Der zweite Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der die vertikale Hauptachse der Ellipse angibt, die für die Grenze in dieser Ecke verwendet wird.

### Werte

- `<length-percentage>`
  - : Gibt die Größe des Kreisradius oder der Haupt- und Nebenachse der Ellipse an. Als absolute Länge kann es in jeder von der CSS {{cssxref("&lt;length&gt;")}} Datenart erlaubten Einheit ausgedrückt werden. Prozentwerte für die horizontale Achse beziehen sich auf die Breite des Kastens, Prozentwerte für die vertikale Achse beziehen sich auf die Höhe des Kastens. Negative Werte sind ungültig.

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
  border-top-left-radius: 40px;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Arc_of_a_circle")}}

### Ellipsenbogen

Zwei unterschiedliche `<length>` Werte erzeugen einen Ellipsenbogen.

```html hidden
<div></div>
```

```css
div {
  border-top-left-radius: 40px 20px;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Arc_of_an_ellipse")}}

### Quadratisches Element mit Prozentwert-Radius

Ein quadratisches Element mit einem einzelnen `<percentage>` Wert erzeugt einen Kreisbogen.

```html hidden
<div></div>
```

```css
div {
  border-top-left-radius: 40%;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Square_element_with_percentage_radius")}}

### Nicht-quadratisches Element mit Prozentwert-Radius

Ein nicht-quadratisches Element mit einem einzelnen `<percentage>` Wert erzeugt einen Ellipsenbogen.

```html hidden
<div></div>
```

```css
div {
  border-top-left-radius: 40%;
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
- {{cssxref("border-top-right-radius")}}, {{cssxref("border-bottom-right-radius")}}, und {{cssxref("border-bottom-left-radius")}}

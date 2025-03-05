---
title: border-top-right-radius
slug: Web/CSS/border-top-right-radius
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`border-top-right-radius`** [CSS](/de/docs/Web/CSS)-Eigenschaft rundet die obere rechte Ecke eines Elements ab, indem der Radius (oder der Radius der semi-großen und semi-kleinen Achsen) der Ellipse angegeben wird, die die Krümmung der Ecke definiert.

{{EmbedInteractiveExample("pages/css/border-top-right-radius.html")}}

Die Abrundung kann ein Kreis oder eine Ellipse sein. Wenn einer der Werte `0` ist, wird keine Abrundung vorgenommen und die Ecke bleibt quadratisch.

![border-top-right-radius.png](border-top-right-radius.png)

Ein Hintergrund, sei es ein Bild oder eine Farbe, wird an der Grenze abgeschnitten, sogar an einer abgerundeten; der genaue Ort des Zuschnitts wird durch den Wert der {{cssxref("background-clip")}}-Eigenschaft definiert.

> [!NOTE]
> Wenn der Wert dieser Eigenschaft nicht in einer {{cssxref("border-radius")}}-Kurzschreibweise festgelegt ist, die nach der `border-top-right-radius` CSS-Eigenschaft auf das Element angewendet wird, wird der Wert dieser Eigenschaft durch die [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) auf den Anfangswert zurückgesetzt.

## Syntax

```css
/* the corner is a circle */
/* border-top-right-radius: radius */
border-top-right-radius: 3px;

/* the corner is an ellipse */
/* border-top-right-radius: horizontal vertical */
border-top-right-radius: 0.5em 1em;

border-top-right-radius: inherit;

/* Global values */
border-top-right-radius: inherit;
border-top-right-radius: initial;
border-top-right-radius: revert;
border-top-right-radius: revert-layer;
border-top-right-radius: unset;
```

Mit einem Wert:

- Der Wert ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der den Radius des Kreises angibt, der für die Umrandung in dieser Ecke verwendet werden soll.

Mit zwei Werten:

- Der erste Wert ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der die horizontale semi-große Achse der Ellipse angibt, die für die Umrandung in dieser Ecke verwendet werden soll.
- Der zweite Wert ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der die vertikale semi-große Achse der Ellipse angibt, die für die Umrandung in dieser Ecke verwendet werden soll.

### Werte

- `<length-percentage>`
  - : Gibt die Größe des Kreisradius oder der semi-großen und semi-kleinen Achsen der Ellipse an. Als absolute Länge kann sie in jeder Einheit angegeben werden, die vom CSS-Datentyp {{cssxref("&lt;length&gt;")}} erlaubt ist. Prozentsätze für die horizontale Achse beziehen sich auf die Breite des Kastens, Prozentsätze für die vertikale Achse beziehen sich auf die Höhe des Kastens. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Kreisbogen

Ein einzelner `<length>`-Wert erzeugt einen Kreisbogen.

```html hidden
<div></div>
```

```css
div {
  border-top-right-radius: 40px;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Arc_of_a_circle")}}

### Ellipsenbogen

Zwei unterschiedliche `<length>`-Werte erzeugen einen Ellipsenbogen.

```html hidden
<div></div>
```

```css
div {
  border-top-right-radius: 40px 20px;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Arc_of_an_ellipse")}}

### Quadratisches Element mit Prozentwert-Radius

Ein quadratisches Element mit einem einzigen `<percentage>`-Wert erzeugt einen Kreisbogen.

```html hidden
<div></div>
```

```css
div {
  border-top-right-radius: 40%;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Square_element_with_percentage_radius")}}

### Nicht-quadratisches Element mit Prozentwert-Radius

Ein nicht-quadratisches Element mit einem einzigen `<percentage>`-Wert erzeugt einen Ellipsenbogen.

```html hidden
<div></div>
```

```css
div {
  border-top-right-radius: 40%;
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

- {{cssxref("border-radius")}}-Kurzschreibweise
- {{cssxref("border-bottom-right-radius")}}, {{cssxref("border-bottom-left-radius")}}, und {{cssxref("border-top-left-radius")}}

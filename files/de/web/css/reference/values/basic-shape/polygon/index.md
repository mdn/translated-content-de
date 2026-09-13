---
title: "`polygon()` CSS-Funktion"
short-title: polygon()
slug: Web/CSS/Reference/Values/basic-shape/polygon
l10n:
  sourceCommit: 6edb918a9e6bd17858d48dcfa5d76aa5ed5b9659
---

Die **`polygon()`** [CSS](/de/docs/Web/CSS) Funktion ist einer der {{cssxref("basic-shape")}} [Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types). Sie wird verwendet, um ein [Polygon](https://de.wikipedia.org/wiki/Polygon) zu zeichnen, indem ein oder mehrere Koordinatenpaare angegeben werden, von denen jedes einen Eckpunkt der Form darstellt.

{{InteractiveExample("CSS Demo: polygon()")}}

```css interactive-example-choice
clip-path: polygon(
  0% 20%,
  60% 20%,
  60% 0%,
  100% 50%,
  60% 100%,
  60% 80%,
  0% 80%
);
```

```css interactive-example-choice
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#default-example {
  background: #ffee99;
}

#example-element {
  background: linear-gradient(to bottom right, #ff5522, #0055ff);
  width: 100%;
  height: 100%;
}
```

## Syntax

```css-nolint
/* Coordinate list */
polygon(50% 2.4%, 34.5% 33.8%, 0% 38.8%, 25% 63.1%, 19.1% 97.6%)
polygon(0px 0px, 200px 100px, 0px 200px)
polygon(0% 0px, 100% 100px, 0px 100%)
polygon(0 0, 50% 1rem, 100% 2vw, calc(100% - 20px) 100%, 0 100%)

/* Coordinate list with fill-rule and/or round value */
polygon(nonzero, 0% 0%, 50% 50%, 0% 100%)
polygon(round 20px, 0% 0%, 50% 50%, 0% 100%)
polygon(evenodd round 2em, 0% 0%, 50% 50%, 0% 100%)
```

### Parameter

Die `polygon()`-Funktion akzeptiert als optionalen ersten Parameter Werte, die das Erscheinungsbild des Polygons ändern — ein {{SVGAttr("fill-rule")}} Schlüsselwort, das `round` Schlüsselwort gefolgt von einem {{cssxref("length")}} Wert oder beides. Die Komponenten des ersten Parameters werden durch Leerzeichen getrennt. Die anderen Parameter sind durch Leerzeichen getrennte x/y Koordinatenpaare von {{cssxref("length-percentage")}} Werten.

- [`<fill-rule>`](/de/docs/Web/SVG/Reference/Attribute/fill-rule) {{optional_inline}}
  - : Ein Schlüsselwort, das `nonzero` (der Standardwert) oder `evenodd` entspricht und den Algorithmus angibt, der zum Füllen der Polygonform verwendet wird.
- `round <length>` {{optional_inline}}
  - : Das `round` Schlüsselwort gibt an, dass das Polygon abgerundete Ecken haben soll, und der begleitende {{cssxref("length")}} Wert bestimmt den Radius dieser Ecken.
- {{cssxref("length-percentage")}}
  - : Jeder Eckpunkt oder Punkt des Polygons wird durch ein durch Leerzeichen getrenntes Paar von `<length-percentage>` Werten dargestellt, die die x/y Koordinaten des Eckpunkts relativ zum [Referenzrahmen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside#the_reference_box) der Form definieren.

### Rückgabewert

Ein {{cssxref("basic-shape")}} Wert.

## Beschreibung

Mit der `polygon()`-Funktion können Sie nahezu jede Form erstellen, indem Sie die x/y Koordinaten ihrer Eckpunkte oder Punkte als durch Kommas getrennte Paare von {{cssxref("length-percentage")}} Werten angeben:

<code>polygon(x<sub>1</sub> y<sub>1</sub>, x<sub>2</sub> y<sub>2</sub>, x<sub>3</sub> y<sub>3</sub>, x<sub>4</sub> y<sub>4</sub>, x<sub>n</sub> y<sub>n</sub>)</code>

Obwohl nur ein einzelner Punkt erforderlich ist, um einen gültigen `polygon()` Funktionswert zu erstellen, sind mindestens 3 Punkte erforderlich, um eine Form (ein Dreieck) zu erstellen. Es gibt keine obere Grenze für die Anzahl der Punkte, die angegeben werden können. Die Form wird durch die angegebenen Punkte in der Reihenfolge gezeichnet, in der sie in der Funktion erscheinen, wobei automatisch eine letzte Linie zwischen dem letzten und dem ersten Punkt gezogen wird, um die Form zu schließen.

Wir könnten die Koordinaten einer Dreiecksform so definieren:

| Achse | Punkt 1 | Punkt 2 | Punkt 3 |
| ----- | ------- | ------- | ------- |
| x     | 0%      | 100%    | 100%    |
| y     | 0%      | 0%      | 100%    |

Wir können diese Koordinaten auf die CSS-Eigenschaft {{cssxref("clip-path")}} in einer `polygon()`-Funktion wie folgt anwenden:

```css
clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
```

Dies erzeugt eine Dreiecksform, die die Hälfte des Bereichs ihres übergeordneten Containers abdeckt, indem die Koordinaten von drei ihrer vier Ecken angegeben werden: oben links (`0% 0%`), oben rechts (`100% 0%`) und unten rechts (`100% 100%`). Angenommen, wir haben einen 200x200px Container mit einem grünen Hintergrund:

```html hidden live-sample___basic
<div class="box"></div>
```

```css hidden live-sample___basic
.box {
  width: 200px;
  height: 200px;
  background-color: green;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
}
```

{{EmbedLiveSample("basic", '100%', 200)}}

### Die Wirkung der Punktreihenfolge

Die Reihenfolge, in der Sie die Punkte definieren, kann zu unterschiedlichen Formen führen. Zum Beispiel verwenden die folgenden beiden `clip-path` Deklarationen beide eine `polygon()`-Funktion mit X/Y Koordinatenpaaren für die vier Ecken des Containers, jedoch in unterschiedlicher Reihenfolge.

```css
clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
clip-path: polygon(0% 0%, 100% 0%, 0% 100%, 100% 100%);
```

```html hidden live-sample___different-order
<div class="box"></div>
<div class="box box2"></div>
```

```css hidden live-sample___different-order
body {
  display: flex;
  gap: 20px;
}

.box {
  width: 200px;
  height: 200px;
  background-color: purple;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

.box2 {
  clip-path: polygon(0% 0%, 100% 0%, 0% 100%, 100% 100%);
}
```

Die erste Funktion zeichnet ein Quadrat, während die zweite eine Sanduhrform zeichnet.

{{EmbedLiveSample("different-order", '100%', 200)}}

### Angeben von Polygonmodifikatoren

Die `polygon()`-Funktion akzeptiert einen optionalen ersten Parameter, der das Rendering der resultierenden Form verändert. Der Parameterwert kann eines oder beide der folgenden beinhalten, getrennt durch Leerzeichen:

- Ein [`<fill-rule>`](/de/docs/Web/SVG/Reference/Attribute/fill-rule) Schlüsselwort, das `nonzero` (der Standardwert) oder `evenodd` entspricht und den Algorithmus zum Füllen der Polygonform angibt. Dies hat nur Auswirkungen, wenn die zwischen den Koordinatenwerten gezeichneten Linien sich überlappen.
- Das `round` Schlüsselwort gefolgt von einem {{cssxref("length")}} Wert. Dies gibt an, dass das Polygon abgerundete Ecken haben soll, wobei der `<length>` Wert den Radius dieser Ecken angibt.

Zum Beispiel könnten wir das vorherige Dreieckbeispiel erweitern und abgerundete Ecken hinzufügen:

```css
clip-path: polygon(round 20px, 0% 0%, 100% 0%, 100% 100%);
```

```html hidden live-sample___basic-rounded
<div class="box"></div>
```

```css hidden live-sample___basic-rounded
.box {
  width: 200px;
  height: 200px;
  background-color: green;
  clip-path: polygon(round 20px, 0% 0%, 100% 0%, 100% 100%);
}
```

Dies führt zur gleichen Dreiecksform, aber mit `20px` Radius abgerundeten Ecken:

{{EmbedLiveSample("basic-rounded", '100%', 200)}}

> [!NOTE]
> In jedem Fall wird der Eckenradius gekappt, um sicherzustellen, dass er niemals größer als die Hälfte der Länge eines Liniensegments ist. Der maximale Eckenradius wird auf das kleinere von `tan(corner-angle/2) * (segment-length / 2)` begrenzt, bewertet gegen beide Liniensegmente, die die Ecke bilden. [Die Spezifikation](https://drafts.csswg.org/css-shapes-1/#funcdef-basic-shape-polygon) enthält weitere Details für Interessierte.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein Dreieck erstellen

In diesem Beispiel wird ein Dreieck gebildet, indem die Koordinaten seiner drei Punkte definiert werden.

#### HTML

```html live-sample___triangle
<div class="triangle"></div>
```

#### CSS

```css live-sample___triangle
.triangle {
  width: 400px;
  height: 400px;
  background-color: magenta;
  clip-path: polygon(100% 0%, 50% 50%, 100% 100%);
}
```

#### Ergebnis

{{EmbedLiveSample("triangle", '100%', 400)}}

Die Koordinaten für das Dreieck sind die obere rechte Ecke (`100% 0%`), der Mittelpunkt (`50% 50%`) und die untere rechte Ecke (`100% 100%`) des Containers.

### Einen abgerundeten Stern erstellen

In diesem Beispiel erstellen wir eine Sternform und verwenden das `round` Schlüsselwort, um die Ecken abzurunden.

#### HTML

```html live-sample___star
<div class="star"></div>
```

#### CSS

```css live-sample___star
.star {
  width: 400px;
  height: 400px;
  background-color: hotpink;
  clip-path: polygon(
    round 20px,
    50% 5%,
    60.85% 27.48%,
    85.22% 21.99%,
    74.38% 44.44%,
    93.88% 60.01%,
    69.57% 65.56%,
    69.53% 90.55%,
    50% 75%,
    30.47% 90.55%,
    30.43% 65.56%,
    6.12% 60.01%,
    25.62% 44.44%,
    14.78% 21.99%,
    39.15% 27.48%
  );
}
```

```css hidden live-sample___basic-rounded live-sample___star
@supports not (clip-path: polygon(round 20px, 0% 0%, 100% 0%, 100% 100%)) {
  body::before {
    font-family: sans-serif;
    content: "Your browser does not support the polygon() function's round keyword.";
    background-color: wheat;
    padding: 1rem 0;
    text-align: center;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("star", '100%', 400)}}

### Ein Polygon für shape-outside festlegen

In diesem Beispiel wird eine Form erstellt, der der Text folgt, unter Verwendung der {{cssxref("shape-outside")}} Eigenschaft.

```html live-sample___shape-outside
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___shape-outside
.box {
  width: 250px;
}

.shape {
  float: left;
  shape-outside: polygon(
    0 5%,
    15% 12%,
    30% 15%,
    40% 26%,
    45% 35%,
    45% 45%,
    40% 55%,
    10% 90%,
    10% 98%,
    8% 100%,
    0 100%
  );
  width: 300px;
  height: 320px;
}

p {
  font-size: 0.9rem;
}
```

{{EmbedLiveSample("shape-outside", '100%', 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("border-shape")}}, {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Leitfaden zu Grundformen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside)

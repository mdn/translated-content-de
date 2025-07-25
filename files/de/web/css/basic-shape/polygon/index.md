---
title: polygon()
slug: Web/CSS/basic-shape/polygon
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`polygon()`** [CSS](/de/docs/Web/CSS) Funktion ist eine der {{cssxref("&lt;basic-shape&gt;")}} [Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types). Sie wird verwendet, um ein [Polygon](https://en.wikipedia.org/wiki/Polygon) zu zeichnen, indem ein oder mehrere Paare von Koordinaten angegeben werden, von denen jedes einen Eckpunkt der Form darstellt.

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
  background: #fe9;
}

#example-element {
  background: linear-gradient(to bottom right, #f52, #05f);
  width: 100%;
  height: 100%;
}
```

## Syntax

```css-nolint
/* Specified as coordinate list */
/* polygon(<length-percentage> <length-percentage>, ... )*/
polygon(50% 2.4%, 34.5% 33.8%, 0% 38.8%, 25% 63.1%, 19.1% 97.6%)
polygon(0px 0px, 200px 100px, 0px 200px)
polygon(0% 0px, 100% 100px, 0px 100%)
polygon(0 0, 50% 1rem, 100% 2vw, calc(100% - 20px) 100%, 0 100%)

/* Specified as coordinate list and fill rule*/
/* polygon(<fill-rule> <length-percentage> <length-percentage>, ... )*/
polygon(nonzero, 0% 0%, 50% 50%, 0% 100%)
polygon(evenodd, 0% 0%, 50% 50%, 0% 100%)
```

Die `polygon()` Parameter sind durch Kommas und optionalen Leerzeichen getrennt. Der erste Parameter ist ein optionaler [`<fill-rule>`](/de/docs/Web/SVG/Reference/Attribute/fill-rule) Wert. Zusätzliche Parameter sind Punkte, die das Polygon definieren. Jeder Punkt ist ein Paar von x/y Koordinaten {{cssxref("length-percentage")}} Werten, getrennt durch ein Leerzeichen, z. B. "0 0" und "100% 100%" für die linke/obere und untere/rechte Ecke.

Note: Das SVG [`<polygon>`](/de/docs/Web/SVG/Reference/Element/polygon) Element hat separate Attribute für [`fill-rule`](/de/docs/Web/SVG/Reference/Attribute/fill-rule) und [`points`](/de/docs/Web/SVG/Reference/Attribute/points), und `points` ist flexibel in der Verwendung von Leerzeichen und Komma als Trennzeichen. CSS `polygon()` Regeln für Trennzeichen sind strikt einzuhalten.

### Parameter

- [`<fill-rule>`](/de/docs/Web/SVG/Reference/Attribute/fill-rule) {{optional_inline}}
  - : Ein optionaler Wert von `nonzero` (der Standardwert bei Auslassung) oder `evenodd`, der die Füllregel angibt.
- {{cssxref("length-percentage")}}
  - : Jeder Eckpunkt des Polygons wird durch ein Paar von `<length-percentage>` Werten dargestellt, die die x/y Koordinaten des Eckpunkts relativ zur [Referenzbox](/de/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box) der Form angeben.

### Rückgabewert

Gibt einen {{cssxref("basic-shape")}} Wert zurück.

## Beschreibung

Mit der `polygon()` Funktion können Sie fast jede beliebige Form erstellen, indem Sie die Koordinaten ihrer Punkte angeben. Die Reihenfolge, in der Sie die Punkte definieren, ist wichtig und kann zu unterschiedlichen Formen führen. Die `polygon()` Funktion erfordert mindestens 3 Punkte, was ein Dreieck erzeugt, aber es gibt keine Obergrenze.

Die `polygon()` Funktion akzeptiert kommagetrennte Koordinaten oder Punkte als ihre Werte. Jeder Punkt wird durch ein Paar von durch Leerzeichen getrennten `x` und `y` Werten dargestellt, die die Koordinaten der Punkte innerhalb des Polygons anzeigen.

<code>polygon(x<sub>1</sub> y<sub>1</sub>, x<sub>2</sub> y<sub>2</sub>, x<sub>3</sub> y<sub>3</sub>, x<sub>4</sub> y<sub>4</sub>, x<sub>n</sub> y<sub>n</sub>)</code>

Unter Berücksichtigung der obigen Angaben kann die Zuordnung der Koordinaten des Containers wie folgt visualisiert werden:

| Achse | Punkt 1 | Punkt 2 | Punkt 3 | Punkt 4 | Punkt n       |
| ----- | ------- | ------- | ------- | ------- | ------------- |
| x     | 0%      | 100%    | 100%    | 0%      | x<sub>n</sub> |
| y     | 0%      | 0%      | 100%    | 100%    | y<sub>n</sub> |

Diese Koordinaten auf die CSS {{cssxref("clip-path")}} Eigenschaft anwenden mit der `polygon()` Funktion:

```css
clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
```

Dies würde eine rechteckige Form in der Größe ihres Elterninhalts erstellen, indem die Koordinaten ihrer vier Ecken angegeben werden: oben-links (`0% 0%`), oben-rechts (`100% 0%`), unten-rechts (`100% 100%`), und unten-links (`0% 100%`).

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein Dreieck erstellen

In diesem Beispiel wird ein Dreieck gebildet, indem die Koordinaten seiner drei Punkte definiert werden.

#### HTML

```html
<div class="triangle"></div>
```

#### CSS

```css
.triangle {
  width: 400px;
  height: 400px;
  background-color: magenta;
  clip-path: polygon(100% 0%, 50% 50%, 100% 100%);
}
```

#### Ergebnis

{{EmbedLiveSample("Create a triangle", '100%', 400)}}

Die Koordinaten für das Dreieck sind die obere rechte Ecke (`100% 0%`), der Mittelpunkt (`50% 50%`), und die untere rechte Ecke (`100% 100%`) des Containers.

### Ein Polygon für shape-outside festlegen

In diesem Beispiel wird eine Form geschaffen, um den Text mithilfe der {{cssxref("shape-outside")}} Eigenschaft zu begleiten.

```html
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

```css
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

{{EmbedLiveSample("Setting a polygon for shape-outside", '100%', 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Leitfaden für Basic Shapes](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)

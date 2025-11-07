---
title: polygon()
slug: Web/CSS/Reference/Values/basic-shape/polygon
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`polygon()`** [CSS](/de/docs/Web/CSS) Funktion ist eine der {{cssxref("&lt;basic-shape&gt;")}} [Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types). Sie wird verwendet, um ein [Polygon](https://de.wikipedia.org/wiki/Polygon) zu zeichnen, indem ein oder mehrere Koordinatenpaare bereitgestellt werden, die jeweils einen Scheitelpunkt der Form darstellen.

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

Die Parameter der `polygon()` Funktion sind durch ein Komma und optional durch Leerzeichen getrennt. Der erste Parameter ist ein optionaler [`<fill-rule>`](/de/docs/Web/SVG/Reference/Attribute/fill-rule) Wert. Weitere Parameter sind Punkte, die das Polygon definieren. Jeder Punkt ist ein Paar von x/y Koordinaten {{cssxref("length-percentage")}} Werten, getrennt durch ein Leerzeichen, z.B. "0 0" und "100% 100%" für die linke/obere und rechte/unten Ecken.

> [!NOTE] Das SVG [`<polygon>`](/de/docs/Web/SVG/Reference/Element/polygon) Element hat separate Attribute für [`fill-rule`](/de/docs/Web/SVG/Reference/Attribute/fill-rule) und [`points`](/de/docs/Web/SVG/Reference/Attribute/points), und `points` ist flexibel bezüglich der Verwendung von Leer- und Kommatrennzeichen. Die CSS `polygon()` Regeln für Trennzeichen werden strikt durchgesetzt.

### Parameter

- [`<fill-rule>`](/de/docs/Web/SVG/Reference/Attribute/fill-rule) {{optional_inline}}
  - : Ein optionaler Wert von `nonzero` (der Standardwert, wenn er weggelassen wird) oder `evenodd`, der die Füllregel festlegt.
- {{cssxref("length-percentage")}}
  - : Jeder Scheitelpunkt des Polygons wird durch ein Paar von `<length-percentage>` Werten dargestellt, die die x/y-Koordinaten des Scheitelpunkts relativ zur [Referenzbox](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside#the_reference_box) der Form angeben.

### Rückgabewert

Gibt einen {{cssxref("basic-shape")}} Wert zurück.

## Beschreibung

Sie können mit der `polygon()` Funktion fast jede Form erstellen, indem Sie die Koordinaten der Punkte angeben. Die Reihenfolge, in der Sie die Punkte definieren, ist wichtig und kann zu unterschiedlichen Formen führen. Die `polygon()` Funktion erfordert mindestens 3 Punkte, was ein Dreieck erzeugt, aber es gibt keine obere Grenze.

Die `polygon()` Funktion akzeptiert durch Kommas getrennte Koordinaten oder Punkte als Werte. Jeder Punkt wird durch ein Paar von leerzeichengetrennten `x` und `y` Werten dargestellt, die die Koordinaten der Punkte innerhalb des Polygons angeben.

<code>polygon(x<sub>1</sub> y<sub>1</sub>, x<sub>2</sub> y<sub>2</sub>, x<sub>3</sub> y<sub>3</sub>, x<sub>4</sub> y<sub>4</sub>, x<sub>n</sub> y<sub>n</sub>)</code>

In Anbetracht dessen kann die Abbildung der Koordinaten des Containers wie folgt visualisiert werden:

| Achse | Punkt 1 | Punkt 2 | Punkt 3 | Punkt 4 | Punkt n       |
| ----- | ------- | ------- | ------- | ------- | ------------- |
| x     | 0%      | 100%    | 100%    | 0%      | x<sub>n</sub> |
| y     | 0%      | 0%      | 100%    | 100%    | y<sub>n</sub> |

Die Anwendung dieser Koordinaten auf die CSS {{cssxref("clip-path")}} Eigenschaft unter Verwendung der `polygon()` Funktion:

```css
clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
```

Dies würde eine rechteckige Form in der Größe des übergeordneten Inhalts erzeugen, indem die Koordinaten ihrer vier Ecken angegeben werden: oben links (`0% 0%`), oben rechts (`100% 0%`), unten rechts (`100% 100%`) und unten links (`0% 100%`).

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein Dreieck erstellen

In diesem Beispiel wird ein Dreieck durch die Definition der Koordinaten seiner drei Punkte gebildet.

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

{{EmbedLiveSample("Ein Dreieck erstellen", '100%', 400)}}

Die Koordinaten für das Dreieck sind die obere rechte Ecke (`100% 0%`), der Mittelpunkt (`50% 50%`) und die untere rechte Ecke (`100% 100%`) des Containers.

### Ein Polygon für `shape-outside` festlegen

In diesem Beispiel wird eine Form für den Textfluss unter Verwendung der {{cssxref("shape-outside")}} Eigenschaft erstellt.

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

{{EmbedLiveSample("Ein Polygon für shape-outside festlegen", '100%', 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Leitfaden zu Grundformen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside)

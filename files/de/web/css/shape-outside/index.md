---
title: shape-outside
slug: Web/CSS/shape-outside
l10n:
  sourceCommit: 919d97a4bda8004f63f655d3f9576c27a82c8a2a
---

{{CSSRef}}

Die **`shape-outside`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert eine Form – die möglicherweise nicht rechteckig ist – um die der angrenzende inline Inhalt umfließen soll. Standardmäßig fließt der Inline-Inhalt um das Margin-Box; `shape-outside` bietet eine Möglichkeit, dieses Umfließen anzupassen. Dadurch wird es möglich, Text um komplexe Objekte anstelle von rechteckigen Kästen fließen zu lassen.

{{EmbedInteractiveExample("pages/css/shape-outside.html")}}

## Syntax

```css
/* Keyword values */
shape-outside: none;
shape-outside: margin-box;
shape-outside: content-box;
shape-outside: border-box;
shape-outside: padding-box;

/* Function values */
shape-outside: circle();
shape-outside: ellipse();
shape-outside: inset(10px 10px 10px 10px);
shape-outside: polygon(10px 10px, 20px 20px, 30px 30px);

/* Shape box with basic shape */
shape-outside: circle() border-box;
shape-outside: margin-box ellipse();

/* <url> value */
shape-outside: url(image.png);

/* <gradient> value */
shape-outside: linear-gradient(45deg, #fff 150px, red 150px);

/* Global values */
shape-outside: inherit;
shape-outside: initial;
shape-outside: revert;
shape-outside: revert-layer;
shape-outside: unset;
```

Die `shape-outside` Eigenschaft wird mit den Werten aus der untenstehenden Liste angegeben, die den _Float-Bereich_ für _Float-Elemente_ definieren. Der Float-Bereich bestimmt die Form, um die Inline-Inhalte (Float-Elemente) fließen.

### Werte

- `none`
  - : Der Float-Bereich ist nicht beeinflusst. Der Inline-Inhalt umfließt wie üblich die Margin-Box des Elements.
- `<shape-box>`

  - : Der Float-Bereich wird gemäß der Form der Kanten eines Float-Elements berechnet (wie durch das [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) definiert). Dies kann `margin-box`, `border-box`, `padding-box` oder `content-box` sein. Die Form schließt jede Krümmung ein, die durch die {{cssxref("border-radius")}} Eigenschaft erzeugt wird (ein Verhalten, das ähnlich zu {{cssxref("background-clip")}} ist).

    - `margin-box`
      - : Definiert die Form, die durch die äußere Margin-Kante eingeschlossen wird. Die Eckenradien dieser Form werden durch die entsprechenden {{cssxref("border-radius")}}- und {{cssxref("margin")}}-Werte bestimmt. Wenn das Verhältnis `border-radius / margin` `1` oder mehr beträgt, ist der Eckenradius der Margin-Box `border-radius + margin`. Wenn das Verhältnis kleiner als `1` ist, dann ist der Eckenradius der Margin-Box `border-radius + (margin * (1 + (ratio - 1) ^ 3))`.
    - `border-box`
      - : Definiert die Form, die durch die äußere Border-Kante eingeschlossen wird. Die Form folgt den normalen Regeln zur Formgebung des Außenrands des Border für Eckenradien.
    - `padding-box`
      - : Definiert die Form, die durch die äußere Padding-Kante eingeschlossen wird. Die Form folgt den normalen Regeln zur Formgebung des Innenrands des Border für Eckenradien.
    - `content-box`
      - : Definiert die Form, die durch die äußere Content-Kante eingeschlossen wird. Jeder Eckenradius dieser Box ist das größere von `0` oder `border-radius - border-width - padding`.

- {{cssxref("&lt;basic-shape&gt;")}}
  - : Der Float-Bereich wird basierend auf der durch eine {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/circle","circle()")}}, {{cssxref("basic-shape/ellipse","ellipse()")}} oder {{cssxref("basic-shape/polygon","polygon()")}} Funktion geschaffenen Form berechnet; andere `<basic-shape>` Funktionen sind ungültig. Wenn ein `<shape-box>` ebenfalls angegeben wird, definiert es das Referenzfeld für die `<basic-shape>` Funktion. Ansonsten ist das Referenzfeld standardmäßig `margin-box`.
- {{cssxref("&lt;image&gt;")}}
  - : Der Float-Bereich wird basierend auf dem Alphakanal des angegebenen {{cssxref("&lt;image&gt;")}} berechnet, wie durch {{cssxref("shape-image-threshold")}} definiert.

> [!NOTE]
> Wenn das Bild ungültig ist, ist der Effekt so, als ob das Schlüsselwort `none` angegeben wurde. Zusätzlich muss das Bild mit {{Glossary("CORS", "CORS")}}-Headern bereitgestellt werden, die seine Verwendung erlauben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Text im Trichterverfahren

#### HTML

```html
<div class="main">
  <div class="left"></div>
  <div class="right"></div>
  <p>
    Sometimes a web page's text content appears to be funneling your attention
    towards a spot on the page to drive you to follow a particular link.
    Sometimes you don't notice.
  </p>
</div>
```

#### CSS

```css
.main {
  width: 530px;
}

.left,
.right {
  background-color: lightgray;
  height: 12ex;
  width: 40%;
}

.left {
  clip-path: polygon(0 0, 100% 100%, 0 100%);
  float: left;
  shape-outside: polygon(0 0, 100% 100%, 0 100%);
}

.right {
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
  float: right;
  shape-outside: polygon(100% 0, 100% 100%, 0 100%);
}

p {
  text-align: center;
}
```

#### Ergebnis

{{EmbedLiveSample("funneling_text", "100%", 130)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Formen](/de/docs/Web/CSS/CSS_shapes)
- [Überblick über Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- {{cssxref("&lt;basic-shape&gt;")}}
- {{cssxref("shape-margin")}}
- {{cssxref("shape-image-threshold")}}

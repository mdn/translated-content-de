---
title: shape-outside
slug: Web/CSS/shape-outside
l10n:
  sourceCommit: 49deb909f88e0ebeab1e34ead70183b5c7bd98d1
---

{{CSSRef}}

Die **`shape-outside`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert eine Form, die nicht rechteckig sein kann, um die sich der benachbarte Inline-Inhalt wickeln soll. Standardmäßig wickelt sich Inline-Inhalt um seine Randbox; `shape-outside` bietet eine Möglichkeit, dieses Umwickeln anzupassen und so den Text um komplexe Objekte statt um einfache Boxen zu wickeln.

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

Die `shape-outside` Eigenschaft wird unter Verwendung der unten aufgeführten Werte angegeben, die den _Float-Bereich_ für _Float-Elemente_ definieren. Der Float-Bereich bestimmt die Form, um die sich Inline-Inhalte (Float-Elemente) wickeln.

### Werte

- `none`
  - : Der Float-Bereich wird nicht beeinflusst. Inline-Inhalt wickelt sich wie üblich um die Randbox des Elements.
- `<shape-box>`

  - : Der Float-Bereich wird entsprechend der Form der Kanten eines Float-Elements berechnet (wie durch das [CSS Box Model](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) definiert). Dies kann `margin-box`, `border-box`, `padding-box` oder `content-box` sein. Die Form umfasst jede Krümmung, die durch die {{cssxref("border-radius")}} Eigenschaft erzeugt wird (ähnliches Verhalten wie {{cssxref("background-clip")}}).

    - `margin-box`
      - : Definiert die Form, die durch den äußeren Rand begrenzt wird. Die Eckenradien dieser Form werden durch die entsprechenden {{cssxref("border-radius")}} und {{cssxref("margin")}} Werte bestimmt. Wenn das Verhältnis `border-radius / margin` 1 oder mehr beträgt, ist der Eckenradius der Randbox `border-radius + margin`. Wenn das Verhältnis kleiner als 1 ist, ist der Eckenradius der Randbox `border-radius + (margin * (1 + (ratio - 1) ^ 3))`.
    - `border-box`
      - : Definiert die Form, die durch den äußeren Rand der Kontur begrenzt wird. Die Form folgt den üblichen Regeln der Konturradiusgestaltung für die Außenseite der Kontur.
    - `padding-box`
      - : Definiert die Form, die durch den äußeren Rand des Innenabstands begrenzt wird. Die Form folgt den üblichen Regeln der Konturradiusgestaltung für die Innenseite der Kontur.
    - `content-box`
      - : Definiert die Form, die durch den äußeren Rand des Inhalts begrenzt wird. Jeder Eckenradius dieser Box ist der größere von `0` oder `border-radius - border-width - padding`.

- {{cssxref("&lt;basic-shape&gt;")}}
  - : Der Float-Bereich wird basierend auf der Form berechnet, die durch eine {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/circle","circle()")}}, {{cssxref("basic-shape/ellipse","ellipse()")}}, oder {{cssxref("basic-shape/polygon","polygon()")}} Funktion erstellt wird; andere `<basic-shape>` Funktionen sind ungültig. Wenn ein `<shape-box>` ebenfalls angegeben ist, definiert er die Referenzbox für die `<basic-shape>` Funktion. Andernfalls ist die Referenzbox standardmäßig `margin-box`.
- {{cssxref("&lt;image&gt;")}}
  - : Der Float-Bereich wird basierend auf dem Alphakanal des angegebenen {{cssxref("&lt;image&gt;")}} extrahiert und berechnet, wie durch {{cssxref("shape-image-threshold")}} definiert.

> [!NOTE]
> Wenn das Bild ungültig ist, hat dies den Effekt, als wäre das Schlüsselwort `none` angegeben worden. Zusätzlich muss das Bild mit [CORS](/de/docs/Glossary/CORS) Headern bereitgestellt werden, die seine Verwendung erlauben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Trichtertext

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

- [CSS Formen](/de/docs/Web/CSS/CSS_shapes)
- [Überblick über Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- {{cssxref("&lt;basic-shape&gt;")}}
- {{cssxref("shape-margin")}}
- {{cssxref("shape-image-threshold")}}

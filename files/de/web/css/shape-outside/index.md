---
title: shape-outside
slug: Web/CSS/shape-outside
l10n:
  sourceCommit: 49deb909f88e0ebeab1e34ead70183b5c7bd98d1
---

{{CSSRef}}

Die **`shape-outside`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert eine Form—die nicht rechteckig sein muss—um die herum benachbarter Inline-Inhalt fließen soll. Standardmäßig fließt Inline-Inhalt um die Margin-Box; `shape-outside` bietet eine Möglichkeit, dieses Fließen anzupassen, was es ermöglicht, Text um komplexe Objekte zu wickeln, anstatt um einfache Kästchen.

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

Die `shape-outside` Eigenschaft wird mit den Werten aus der unten aufgeführten Liste angegeben, die den _float area_ für _Float-Elemente_ definieren. Der Float-Bereich bestimmt die Form, um die herum Inline-Inhalt (Float-Elemente) fließt.

### Werte

- `none`
  - : Der Float-Bereich ist unbeeinflusst. Inline-Inhalt fließt um die Margin-Box des Elements, wie üblich.
- `<shape-box>`

  - : Der Float-Bereich wird entsprechend der Form der Kanten eines Float-Elements berechnet (wie im [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) definiert). Dies kann `margin-box`, `border-box`, `padding-box` oder `content-box` sein. Die Form schließt jede Krümmung ein, die durch die {{cssxref("border-radius")}} Eigenschaft erzeugt wird (ein Verhalten, das {{cssxref("background-clip")}} ähnelt).

    - `margin-box`
      - : Definiert die Form, die durch den äußeren Randabschluss eingeschlossen wird. Die Eckradien dieser Form werden durch die entsprechenden {{cssxref("border-radius")}} und {{cssxref("margin")}} Werte bestimmt. Wenn das Verhältnis `border-radius / margin` `1` oder mehr ist, dann ist der Eckradius der Margin-Box `border-radius + margin`. Wenn das Verhältnis weniger als `1` ist, dann ist der Eckradius der Margin-Box `border-radius + (margin * (1 + (ratio - 1) ^ 3))`.
    - `border-box`
      - : Definiert die Form, die durch den äußeren Randabschluss eingeschlossen wird. Die Form folgt den normalen Regeln der Randbogenformung für die Außenseite des Randes.
    - `padding-box`
      - : Definiert die Form, die durch den äußeren Polsterabschluss eingeschlossen wird. Die Form folgt den normalen Regeln der Randbogenformung für die Innenseite des Randes.
    - `content-box`
      - : Definiert die Form, die durch den äußeren Inhaltsabschluss eingeschlossen wird. Jeder Eckradius dieser Box ist der größere von `0` oder `border-radius - border-width - padding`.

- {{cssxref("&lt;basic-shape&gt;")}}
  - : Der Float-Bereich wird basierend auf der Form berechnet, die von einer {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/circle","circle()")}}, {{cssxref("basic-shape/ellipse","ellipse()")}} oder {{cssxref("basic-shape/polygon","polygon()")}} Funktion erstellt wird; andere `<basic-shape>` Funktionen sind ungültig. Wenn ein `<shape-box>` ebenfalls angegeben wird, definiert es das Referenzkästchen für die `<basic-shape>` Funktion. Andernfalls wird das Referenzkästchen auf `margin-box` zurückgesetzt.
- {{cssxref("&lt;image&gt;")}}
  - : Der Float-Bereich wird basierend auf dem Alpha-Kanal des spezifizierten {{cssxref("&lt;image&gt;")}} berechnet, wie von {{cssxref("shape-image-threshold")}} definiert.

> [!NOTE]
> Ist das Bild ungültig, hat dies den Effekt, als ob das Schlüsselwort `none` angegeben worden wäre. Außerdem muss das Bild mit [CORS](/de/docs/Glossary/CORS)-Headern geliefert werden, die seine Verwendung erlauben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Text bündeln

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

- [CSS Shapes](/de/docs/Web/CSS/CSS_shapes)
- [Überblick über Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- {{cssxref("&lt;basic-shape&gt;")}}
- {{cssxref("shape-margin")}}
- {{cssxref("shape-image-threshold")}}

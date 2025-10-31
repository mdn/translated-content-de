---
title: shape-outside
slug: Web/CSS/Reference/Properties/shape-outside
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`shape-outside`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert eine Form – die möglicherweise nicht rechteckig ist –, um die sich angrenzender Inline-Inhalt wickeln soll. Standardmäßig wickelt sich Inline-Inhalt um seinen Randbereich; `shape-outside` bietet eine Möglichkeit, dieses Wickeln anzupassen und ermöglicht es, Text um komplexe Objekte anstatt rechteckiger Boxen zu wickeln.

{{InteractiveExample("CSS Demo: shape-outside")}}

```css interactive-example-choice
shape-outside: circle(50%);
```

```css interactive-example-choice
shape-outside: ellipse(130px 140px at 20% 20%);
```

```css interactive-example-choice
shape-outside: url("/shared-assets/images/examples/round-balloon.png");
```

```css interactive-example-choice
shape-outside: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <img
      class="transition-all"
      id="example-element"
      src="/shared-assets/images/examples/round-balloon.png"
      width="150" />
    We had agreed, my companion and I, that I should call for him at his house,
    after dinner, not later than eleven o’clock. This athletic young Frenchman
    belongs to a small set of Parisian sportsmen, who have taken up “ballooning”
    as a pastime. After having exhausted all the sensations that are to be found
    in ordinary sports, even those of “automobiling” at a breakneck speed, the
    members of the “Aéro Club” now seek in the air, where they indulge in all
    kinds of daring feats, the nerve-racking excitement that they have ceased to
    find on earth.
  </div>
</section>
```

```css interactive-example
.example-container {
  text-align: left;
  padding: 20px;
}

#example-element {
  float: left;
  width: 150px;
  margin: 20px;
}
```

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
shape-outside: url("image.png");

/* <gradient> value */
shape-outside: linear-gradient(45deg, white 150px, red 150px);

/* Global values */
shape-outside: inherit;
shape-outside: initial;
shape-outside: revert;
shape-outside: revert-layer;
shape-outside: unset;
```

Die `shape-outside` Eigenschaft wird unter Verwendung der unten aufgelisteten Werte angegeben, die den _Umflussbereich_ für _float-Elemente_ definieren. Der Umflussbereich bestimmt die Form, um die sich der Inline-Inhalt (float-Elemente) wickelt.

### Werte

- `none`
  - : Der Umflussbereich ist nicht betroffen. Inline-Inhalt wickelt sich wie üblich um den Randbereich des Elements.
- `<shape-box>`
  - : Der Umflussbereich wird gemäß der Form der Kanten eines Float-Elements berechnet (wie im [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) definiert). Dies kann `margin-box`, `border-box`, `padding-box` oder `content-box` sein. Die Form beinhaltet jede Krümmung, die durch die {{cssxref("border-radius")}} Eigenschaft erzeugt wird (Verhalten ähnlich wie bei {{cssxref("background-clip")}}).
    - `margin-box`
      - : Definiert die Form, die durch den äußeren Rand umschlossen wird. Die Eckenradien dieser Form werden durch die entsprechenden {{cssxref("border-radius")}} und {{cssxref("margin")}} Werte bestimmt. Wenn das Verhältnis von `border-radius / margin` `1` oder größer ist, dann ist der Eckenradius der Randbox `border-radius + margin`. Wenn das Verhältnis kleiner als `1` ist, dann ist der Eckenradius der Randbox `border-radius + (margin * (1 + (ratio - 1) ^ 3))`.
    - `border-box`
      - : Definiert die Form, die durch die äußere Kante des Randes umschlossen wird. Die Form folgt den normalen Regeln zur Randkrümmung für die Außenseite des Randes.
    - `padding-box`
      - : Definiert die Form, die durch die äußere Kante des Abstands umschlossen wird. Die Form folgt den normalen Regeln zur Randkrümmung für die Innenseite des Randes.
    - `content-box`
      - : Definiert die Form, die durch die äußere Kante des Inhalts umschlossen wird. Jeder Eckenradius dieser Box ist entweder `0` oder `border-radius - border-width - padding`, je nachdem, welcher Wert größer ist.

- {{cssxref("&lt;basic-shape&gt;")}}
  - : Der Umflussbereich wird basierend auf der Form berechnet, die durch eine {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/circle","circle()")}}, {{cssxref("basic-shape/ellipse","ellipse()")}} oder {{cssxref("basic-shape/polygon","polygon()")}} Funktion erstellt wird; andere `<basic-shape>` Funktionen sind ungültig. Wenn ein `<shape-box>` ebenfalls angegeben wird, definiert es die Referenzbox für die `<basic-shape>` Funktion. Andernfalls ist die Standard-Referenzbox `margin-box`.
- {{cssxref("&lt;image&gt;")}}
  - : Der Umflussbereich wird extrahiert und basierend auf dem Alphakanal des angegebenen {{cssxref("&lt;image&gt;")}} berechnet, wie durch {{cssxref("shape-image-threshold")}} definiert.

> [!NOTE]
> Falls das Bild ungültig ist, ist der Effekt derselbe, als ob das Schlüsselwort `none` angegeben worden wäre. Zusätzlich muss das Bild mit {{Glossary("CORS", "CORS")}} Headern bereitgestellt werden, die eine Nutzung erlauben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Text trichtern

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
- [Übersicht über Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- {{cssxref("&lt;basic-shape&gt;")}}
- {{cssxref("shape-margin")}}
- {{cssxref("shape-image-threshold")}}

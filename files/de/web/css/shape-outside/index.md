---
title: shape-outside
slug: Web/CSS/shape-outside
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`shape-outside`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert eine Form – die nicht rechteckig sein muss –, um die sich angrenzender Inline-Inhalt wickeln soll. Standardmäßig wickelt sich der Inline-Inhalt um die Margin-Box; `shape-outside` bietet eine Möglichkeit, dieses Wickeln anzupassen, sodass Text auch um komplexe Objekte und nicht nur um rechteckige Boxen gewickelt werden kann.

{{InteractiveExample("CSS Demo: shape-outside")}}

```css interactive-example-choice
shape-outside: circle(50%);
```

```css interactive-example-choice
shape-outside: ellipse(130px 140px at 20% 20%);
```

```css interactive-example-choice
shape-outside: url(/shared-assets/images/examples/round-balloon.png);
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

Die Eigenschaft `shape-outside` wird unter Verwendung der unten aufgeführten Werte angegeben, die den _Flächenbereich_ für _Float-Elemente_ definieren. Der Flächenbereich bestimmt die Form, um die sich Inline-Inhalt (Float-Elemente) wickelt.

### Werte

- `none`
  - : Der Flächenbereich bleibt unberührt. Inline-Inhalt wickelt sich wie gewohnt um die Margin-Box des Elements.
- `<shape-box>`

  - : Der Flächenbereich wird gemäß der Form der Kanten eines Float-Elements berechnet (wie im [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) definiert). Dies kann eine `margin-box`, `border-box`, `padding-box` oder `content-box` sein. Die Form schließt jede Krümmung ein, die durch die Eigenschaft {{cssxref("border-radius")}} erstellt wird (ein Verhalten, das ähnlich ist wie {{cssxref("background-clip")}}).

    - `margin-box`
      - : Definiert die Form, die vom äußeren Rand des Margins eingeschlossen wird. Die Eckenradien dieser Form werden durch die entsprechenden Werte von {{cssxref("border-radius")}} und {{cssxref("margin")}} bestimmt. Wenn das Verhältnis von `border-radius / margin` `1` oder mehr beträgt, ist der Eckenradius der Margin-Box `border-radius + margin`. Wenn das Verhältnis kleiner als `1` ist, ist der Eckenradius der Margin-Box `border-radius + (margin * (1 + (ratio - 1) ^ 3))`.
    - `border-box`
      - : Definiert die Form, die vom äußeren Rand des Borders eingeschlossen wird. Die Form folgt den normalen Border-Radius-Formregeln für die Außenseite des Borders.
    - `padding-box`
      - : Definiert die Form, die vom äußeren Rand des Paddings eingeschlossen wird. Die Form folgt den normalen Border-Radius-Formregeln für die Innenseite des Borders.
    - `content-box`
      - : Definiert die Form, die vom äußeren Rand des Inhalts eingeschlossen wird. Jeder Eckenradius dieser Box ist der größere von `0` oder `border-radius - border-width - padding`.

- {{cssxref("&lt;basic-shape&gt;")}}
  - : Der Flächenbereich wird basierend auf der Form berechnet, die durch eine {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/circle","circle()")}}, {{cssxref("basic-shape/ellipse","ellipse()")}}, oder {{cssxref("basic-shape/polygon","polygon()")}} Funktion erstellt wird; andere `<basic-shape>` Funktionen sind ungültig. Wenn auch eine `<shape-box>` angegeben wird, definiert sie die Referenzbox für die `<basic-shape>` Funktion. Andernfalls wird die Referenzbox standardmäßig als `margin-box` verwendet.
- {{cssxref("&lt;image&gt;")}}
  - : Der Flächenbereich wird basierend auf dem Alphakanal des angegebenen {{cssxref("&lt;image&gt;")}} extrahiert und berechnet, wie durch {{cssxref("shape-image-threshold")}} definiert.

> [!NOTE]
> Wenn das Bild ungültig ist, wirkt es so, als ob das Schlüsselwort `none` angegeben worden wäre. Darüber hinaus muss das Bild mit {{Glossary("CORS", "CORS")}}-Headern bereitgestellt werden, die seine Verwendung zulassen.

## Formale Definition

{{CSSInfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Text einleiten

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

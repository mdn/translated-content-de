---
title: shape-outside
slug: Web/CSS/Reference/Properties/shape-outside
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`shape-outside`**-Eigenschaft [CSS](/de/docs/Web/CSS) definiert eine Form – die nicht rechteckig sein muss – um die herum angrenzender Inline-Content fließen soll. Standardmäßig fließt Inline-Content um seine Margin-Box; `shape-outside` bietet eine Möglichkeit, dieses Fließen anzupassen, sodass es möglich ist, Text um komplexe Objekte statt um rechteckige Boxen fließen zu lassen.

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

Die `shape-outside`-Eigenschaft wird mit Werten aus der unten stehenden Liste spezifiziert, die den _Float-Bereich_ für _Float-Elemente_ definieren. Der Float-Bereich bestimmt die Form, um die herum Inline-Content (Float-Elemente) fließen.

### Werte

- `none`
  - : Der Float-Bereich bleibt unbeeinflusst. Inline-Content fließt wie gewohnt um die Margin-Box des Elements.
- `<shape-box>`
  - : Der Float-Bereich wird basierend auf der Form der Kanten eines Float-Elements berechnet (wie im [CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model/Introduction) definiert). Dies kann `margin-box`, `border-box`, `padding-box` oder `content-box` sein. Die Form schließt jede durch die {{cssxref("border-radius")}}-Eigenschaft erzeugte Krümmung ein (ein Verhalten, das dem von {{cssxref("background-clip")}} ähnlich ist).
    - `margin-box`
      - : Definiert die Form, die von der äußeren Margin-Kante eingeschlossen wird. Die Eckenradien dieser Form werden durch die entsprechenden {{cssxref("border-radius")}}- und {{cssxref("margin")}}-Werte bestimmt. Wenn das Verhältnis von `border-radius / margin` `1` oder mehr beträgt, ist der Eckenradius der Margin-Box `border-radius + margin`. Wenn das Verhältnis weniger als `1` ist, beträgt der Eckenradius der Margin-Box `border-radius + (margin * (1 + (ratio - 1) ^ 3))`.
    - `border-box`
      - : Definiert die Form, die durch die äußere Border-Kante eingeschlossen wird. Die Form folgt den normalen Regeln zur Eckenradiusgestaltung für die Außenseite der Border.
    - `padding-box`
      - : Definiert die Form, die durch die äußere Padding-Kante eingeschlossen wird. Die Form folgt den normalen Regeln zur Eckenradiusgestaltung für die Innenseite der Border.
    - `content-box`
      - : Definiert die Form, die durch die äußere Content-Kante eingeschlossen wird. Jeder Eckenradius dieser Box ist der größere von `0` oder `border-radius - border-width - padding`.

- {{cssxref("basic-shape")}}
  - : Der Float-Bereich wird basierend auf der Form berechnet, die durch eine {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/circle","circle()")}}, {{cssxref("basic-shape/ellipse","ellipse()")}} oder {{cssxref("basic-shape/polygon","polygon()")}}-Funktion erzeugt wird; andere `<basic-shape>`-Funktionen sind ungültig. Wenn eine `<shape-box>` ebenfalls angegeben ist, definiert sie die Referenzbox für die `<basic-shape>`-Funktion. Andernfalls ist die Referenzbox standardmäßig `margin-box`.
- {{cssxref("image")}}
  - : Der Float-Bereich wird extrahiert und basierend auf dem Alphakanal des angegebenen {{cssxref("image")}} berechnet, wie durch {{cssxref("shape-image-threshold")}} definiert.

> [!NOTE]
> Wenn das Bild ungültig ist, ist der Effekt so, als wäre das Schlüsselwort `none` angegeben worden. Zusätzlich muss das Bild mit {{Glossary("CORS", "CORS")}}-Headern bereitgestellt werden, die seine Verwendung erlauben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Trichterförmiger Text

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

- [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes)
- [Überblick über Formen](/de/docs/Web/CSS/Guides/Shapes/Overview)
- {{cssxref("basic-shape")}}
- {{cssxref("shape-margin")}}
- {{cssxref("shape-image-threshold")}}

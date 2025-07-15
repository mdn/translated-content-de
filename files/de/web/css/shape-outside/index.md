---
title: shape-outside
slug: Web/CSS/shape-outside
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`shape-outside`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert eine Form – die nicht rechteckig sein muss –, um die benachbarter Inline-Content fließen soll. Standardmäßig fließt Inline-Content um das Margin-Box des Elements; `shape-outside` bietet eine Möglichkeit, dieses Fließen anzupassen, sodass Text um komplexe Objekte und nicht nur um rechteckige Boxen fließen kann.

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

Die `shape-outside`-Eigenschaft wird unter Verwendung der Werte aus der unten aufgeführten Liste angegeben, die den _float area_ für _Float-Elemente_ definieren. Die Float-Fläche bestimmt die Form, um die der Inline-Content (Float-Elemente) fließt.

### Werte

- `none`
  - : Die Float-Fläche bleibt unverändert. Der Inline-Content fließt um die Margin-Box des Elements, wie gewohnt.
- `<shape-box>`
  - : Die Float-Fläche wird gemäß der Form der Kanten eines Float-Elements berechnet (wie im [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) definiert). Dies kann `margin-box`, `border-box`, `padding-box` oder `content-box` sein. Die Form beinhaltet jede durch die {{cssxref("border-radius")}}-Eigenschaft erzeugte Krümmung (ein Verhalten, das dem von {{cssxref("background-clip")}} ähnelt).
    - `margin-box`
      - : Definiert die Form, die durch die äußere Randecke eingeschlossen wird. Die Eckenradien dieser Form werden durch die entsprechenden {{cssxref("border-radius")}}- und {{cssxref("margin")}}-Werte bestimmt. Ist das `border-radius / margin` Verhältnis `1` oder größer, dann beträgt der Eckenradius der Margin-Box `border-radius + margin`. Ist das Verhältnis kleiner als `1`, dann beträgt der Eckenradius der Margin-Box `border-radius + (margin * (1 + (ratio - 1) ^ 3))`.
    - `border-box`
      - : Definiert die Form, die durch die äußere Randecke eingeschlossen wird. Die Form folgt den normalen Regeln zur Formgebung des Eckenradius auf der Außenseite der Umrandung.
    - `padding-box`
      - : Definiert die Form, die durch die äußere Innenflächenecke eingeschlossen wird. Die Form folgt den normalen Regeln zur Formgebung des Eckenradius auf der Innenseite der Umrandung.
    - `content-box`
      - : Definiert die Form, die durch die äußere Inhaltsflächenecke eingeschlossen wird. Jeder Eckenradius dieser Box ist der größere von `0` oder `border-radius - border-width - padding`.

- {{cssxref("&lt;basic-shape&gt;")}}
  - : Die Float-Fläche wird basierend auf der durch eine {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/circle","circle()")}}, {{cssxref("basic-shape/ellipse","ellipse()")}} oder {{cssxref("basic-shape/polygon","polygon()")}} Funktion erstellten Form berechnet; andere `<basic-shape>`-Funktionen sind ungültig. Wenn auch ein `<shape-box>` angegeben ist, definiert es die Referenzbox für die `<basic-shape>`-Funktion. Andernfalls ist die Referenzbox standardmäßig `margin-box`.
- {{cssxref("&lt;image&gt;")}}
  - : Die Float-Fläche wird basierend auf dem Alphakanal des angegebenen {{cssxref("&lt;image&gt;")}} berechnet, wie durch {{cssxref("shape-image-threshold")}} definiert.

> [!NOTE]
> Wenn das Bild ungültig ist, ist der Effekt so, als ob das Schlüsselwort `none` angegeben worden wäre. Außerdem muss das Bild mit {{Glossary("CORS", "CORS")}}-Headern bereitgestellt werden, die seine Verwendung erlauben.

## Offizielle Definition

{{CSSInfo}}

## Offizielle Syntax

{{csssyntax}}

## Beispiele

### Textkanalisierung

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

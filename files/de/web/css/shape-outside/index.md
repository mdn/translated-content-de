---
title: shape-outside
slug: Web/CSS/shape-outside
l10n:
  sourceCommit: 49deb909f88e0ebeab1e34ead70183b5c7bd98d1
---

{{CSSRef}}

Die **`shape-outside`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert eine Form – die möglicherweise nicht rechteckig ist – um die sich angrenzender Inline-Inhalt legen soll. Standardmäßig legt sich Inline-Inhalt um seinen Randrahmen; `shape-outside` bietet eine Möglichkeit, dieses Umfließen anzupassen, sodass es möglich ist, Text um komplexe Objekte statt nur einfache Kästen fließen zu lassen.

{{EmbedInteractiveExample("pages/css/shape-outside.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
shape-outside: none;
shape-outside: margin-box;
shape-outside: content-box;
shape-outside: border-box;
shape-outside: padding-box;

/* Funktionswerte */
shape-outside: circle();
shape-outside: ellipse();
shape-outside: inset(10px 10px 10px 10px);
shape-outside: polygon(10px 10px, 20px 20px, 30px 30px);

/* Formrahmen mit Grundform */
shape-outside: circle() border-box;
shape-outside: margin-box ellipse();

/* <url>-Wert */
shape-outside: url(image.png);

/* <gradient>-Wert */
shape-outside: linear-gradient(45deg, #fff 150px, red 150px);

/* Globale Werte */
shape-outside: inherit;
shape-outside: initial;
shape-outside: revert;
shape-outside: revert-layer;
shape-outside: unset;
```

Die Eigenschaft `shape-outside` wird mit Werten aus der untenstehenden Liste angegeben, die den _Float-Bereich_ für _Float-Elemente_ definieren. Der Float-Bereich bestimmt die Form, um die sich der Inline-Inhalt (Float-Elemente) legt.

### Werte

- `none`
  - : Der Float-Bereich bleibt unbeeinflusst. Der Inline-Inhalt legt sich um den Randrahmen des Elements, wie üblich.
- `<shape-box>`

  - : Der Float-Bereich wird gemäß der Form der Kanten eines Float-Elements berechnet (wie im [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) definiert). Dies kann `margin-box`, `border-box`, `padding-box` oder `content-box` sein. Die Form schließt jede Krümmung ein, die durch die {{cssxref("border-radius")}}-Eigenschaft erzeugt wird (Verhalten, das dem von {{cssxref("background-clip")}} ähnelt).

    - `margin-box`
      - : Definiert die Form, die durch den äußeren Rand des Margins eingeschlossen wird. Die Eckenradien dieser Form werden durch die entsprechenden {{cssxref("border-radius")}}- und {{cssxref("margin")}}-Werte bestimmt. Wenn das Verhältnis `border-radius / margin` `1` oder mehr ist, dann beträgt der Eckenradius des Margin-Box `border-radius + margin`. Wenn das Verhältnis kleiner als `1` ist, dann beträgt der Eckenradius des Margin-Box `border-radius + (margin * (1 + (ratio - 1) ^ 3))`.
    - `border-box`
      - : Definiert die Form, die durch den äußeren Rand des Borders eingeschlossen wird. Die Form folgt den normalen Regeln der Eckenradiusbildung für den Außenbereich des Borders.
    - `padding-box`
      - : Definiert die Form, die durch den äußeren Rand des Paddings eingeschlossen wird. Die Form folgt den normalen Regeln der Eckenradiusbildung für den Innenbereich des Borders.
    - `content-box`
      - : Definiert die Form, die durch den äußeren Rand des Inhalts eingeschlossen wird. Jeder Eckenradius dieses Kastens ist der größere Wert von `0` oder `border-radius - border-width - padding`.

- {{cssxref("&lt;basic-shape&gt;")}}
  - : Der Float-Bereich wird basierend auf der Form berechnet, die durch eine {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/circle","circle()")}}, {{cssxref("basic-shape/ellipse","ellipse()")}}, oder {{cssxref("basic-shape/polygon","polygon()")}}-Funktion erstellt wird; andere `<basic-shape>`-Funktionen sind ungültig. Wenn ein `<shape-box>` ebenfalls angegeben wird, definiert es den Referenzrahmen für die `<basic-shape>`-Funktion. Andernfalls wird der Referenzrahmen standardmäßig zu `margin-box`.
- {{cssxref("&lt;image&gt;")}}
  - : Der Float-Bereich wird basierend auf dem Alphakanal des angegebenen {{cssxref("&lt;image&gt;")}} extrahiert und berechnet, wie durch {{cssxref("shape-image-threshold")}} definiert.

> [!NOTE]
> Wenn das Bild ungültig ist, hat dies denselben Effekt, als ob das Schlüsselwort `none` angegeben worden wäre. Zusätzlich muss das Bild mit {{Glossary("CORS")}}-Headern bereitgestellt werden, die seine Verwendung erlauben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Textleiten

#### HTML

```html
<div class="main">
  <div class="left"></div>
  <div class="right"></div>
  <p>
    Manchmal scheint der Textinhalt einer Webseite Ihre Aufmerksamkeit auf einen bestimmten Punkt auf der Seite zu lenken, um Sie zu bewegen, einem bestimmten Link zu folgen. Manchmal bemerken Sie es nicht.
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

- [CSS-Shapes](/de/docs/Web/CSS/CSS_shapes)
- [Überblick über Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- {{cssxref("&lt;basic-shape&gt;")}}
- {{cssxref("shape-margin")}}
- {{cssxref("shape-image-threshold")}}

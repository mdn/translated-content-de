---
title: circle()
slug: Web/CSS/basic-shape/circle
l10n:
  sourceCommit: 7e1296fc0722c86fb7e15487b5e9626597c7a2a0
---

Die **`circle()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) definiert einen Kreis unter Verwendung eines Radius und einer Position. Sie ist einer der {{cssxref("&lt;basic-shape&gt;")}} Datentypen.

{{InteractiveExample("CSS Demo: circle()")}}

```css interactive-example-choice
clip-path: circle(50px);
```

```css interactive-example-choice
clip-path: circle(6rem at right center);
```

```css interactive-example-choice
clip-path: circle(10% at 2rem 90%);
```

```css interactive-example-choice
clip-path: circle(closest-side at 5rem 6rem);
```

```css interactive-example-choice
clip-path: circle(farthest-side);
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

```css
shape-outside: circle(50%);
clip-path: circle(6rem at 12rem 8rem);
```

### Werte

- `<shape-radius>`
  - : Dies kann eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder die Werte `closest-side` und `farthest-side` sein.
    - `closest-side`
      - : Verwendet die Länge vom Zentrum der Form zur nächsten Seite des Referenzrahmens. Bei Kreisen ist dies die nächste Seite in jeder Dimension.
    - `farthest-side`
      - : Verwendet die Länge vom Zentrum der Form zur entferntesten Seite des Referenzrahmens. Bei Kreisen ist dies die entfernteste Seite in jeder Dimension.

- `<position>`
  - : Bewegt das Zentrum des Kreises. Kann eine {{cssxref("length")}}, ein {{cssxref("percentage")}}, oder ein Wert wie `left` sein. Der `<position>`-Wert ist standardmäßig zentriert, wenn er weggelassen wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfacher Kreis

Im Beispiel unten hat die {{cssxref("shape-outside")}}-Eigenschaft den Wert `circle(50%)`, was einen Kreis auf einem gefloateten Element definiert, um den der Text fließt.

```html live-sample___circle
<div class="box">
  <img
    alt="A hot air balloon"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
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

```css live-sample___circle
body {
  font: 1.2em / 1.5 sans-serif;
}
img {
  float: left;
  shape-outside: circle(50%);
}
```

{{EmbedLiveSample("circle", "", "300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Leitfaden zu Basisformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)

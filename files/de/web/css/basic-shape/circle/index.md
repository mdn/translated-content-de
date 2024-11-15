---
title: circle()
slug: Web/CSS/basic-shape/circle
l10n:
  sourceCommit: ca6d4f6114d278926e183225a90fd2209802cfe9
---

{{CSSRef}}

Die **`circle()`** CSS-[Funktion](/de/docs/Web/CSS/CSS_Functions) definiert einen Kreis unter Verwendung eines Radius und einer Position. Sie ist einer der {{cssxref("&lt;basic-shape&gt;")}} Datentypen.

{{EmbedInteractiveExample("pages/css/function-circle.html")}}

## Syntax

```css
shape-outside: circle(50%);
clip-path: circle(6rem at 12rem 8rem);
```

### Werte

- `<shape-radius>`

  - : Dies kann eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder die Werte `closest-side` und `farthest-side` sein.

    - `closest-side`
      - : Verwendet die Länge vom Mittelpunkt der Form zur nächsten Seite des Referenzrahmens. Für Kreise ist dies die nächstgelegene Seite in jeder Dimension.
    - `farthest-side`
      - : Verwendet die Länge vom Mittelpunkt der Form zur am weitesten entfernten Seite des Referenzrahmens. Für Kreise ist dies die am weitesten entfernte Seite in jeder Dimension.

- `<position>`
  - : Verschiebt den Mittelpunkt des Kreises. Kann eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder Werte wie `left` sein. Der `<position>`-Wert ist standardmäßig auf die Mitte gesetzt, wenn er weggelassen wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Basis-Kreis

Im untenstehenden Beispiel hat die {{cssxref("shape-outside")}} Eigenschaft den Wert `circle(50%)`, der einen Kreis auf einem gefloateten Element definiert, um den der Text fließen kann.

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
- [Leitfaden zu Basic Shapes](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)

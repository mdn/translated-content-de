---
title: inset()
slug: Web/CSS/Reference/Values/basic-shape/inset
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`inset()`** [CSS](/de/docs/Web/CSS) Funktion definiert ein Rechteck mit festgelegten Abstandsmaßen von jeder Seite der Referenzbox. Es ist eine Basisformfunktion, die verwendet wird, um einen der {{cssxref("&lt;basic-shape&gt;")}} [Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types) zu definieren.

{{InteractiveExample("CSS Demo: inset()")}}

```css interactive-example-choice
clip-path: inset(30px);
```

```css interactive-example-choice
clip-path: inset(1rem 2rem 3rem 4rem);
```

```css interactive-example-choice
clip-path: inset(20% 30% round 20px);
```

```css interactive-example-choice
clip-path: inset(4rem 20% round 1rem 2rem 3rem 4rem);
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
shape-outside: inset(20px 50px 10px 0 round 50px);
```

### Werte

- `<length-percentage>{1,4}`
  - : Wenn alle vier Argumente angegeben sind, repräsentieren sie die inneren Abstände oben, rechts, unten und links von der Referenzbox, die die Positionen der Kanten des Inset-Rechtecks festlegen. Diese Argumente folgen der Syntax der Margin-Kurzschreibweise, die es Ihnen ermöglicht, alle vier Inset-Werte mit einem, zwei oder vier Werten festzulegen.

    Falls ein Paar von Insets für eine Dimension zusammen mehr als 100% dieser Dimension ausmacht, werden beide Werte proportional reduziert, sodass ihre Summe 100% ergibt. Zum Beispiel wird der Wert `inset(90% 10% 60% 10%)` mit einem oberen Inset von `90%` und einem unteren Inset von `60%` auf `inset(60% 10% 40% 10%)` proportional reduziert. Solche Formen, die keine Fläche umschließen und keinen {{cssxref("shape-margin")}} haben, beeinträchtigen das Umfließen nicht.

- `<border-radius>`
  - : Das optionale [`<border-radius>`](/de/docs/Web/CSS/Reference/Properties/border-radius) Argument(e) definieren abgerundete Ecken für das Inset-Rechteck unter Verwendung der Border-Radius-Kurzschreibsyntax.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Inset-Beispiel

Im Beispiel unten wird eine `inset()`-Form verwendet, um Inhalte über das fließende Element zu ziehen. Ändern Sie die Versatzwerte, um zu sehen, wie sich die Form ändert.

```html
<div class="box">
  <div class="shape"></div>
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

```css
.box {
  width: 400px;
  margin: 0 auto;
}

.shape {
  float: left;
  width: 150px;
  height: 100px;
  clip-path: inset(45px 50px 15px 0 round 50px);
  shape-outside: inset(40px 40px 10px 0 round 50px);
  background-color: coral;
  border-radius: 20px;
  margin: 0;
  padding: 20px;
}
```

{{EmbedLiveSample("Einfaches Inset-Beispiel", '100%', 280)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [CSS Formen](/de/docs/Web/CSS/CSS_shapes) Modul
- [Leitfaden zu Basisformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)

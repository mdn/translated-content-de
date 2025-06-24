---
title: inset()
slug: Web/CSS/basic-shape/inset
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`inset()`** [CSS](/de/docs/Web/CSS) Funktion definiert ein Rechteck in den angegebenen Einsätzen von jeder Seite der Bezugsbox. Es handelt sich um eine Grundformfunktion, die verwendet wird, um einen der {{cssxref("&lt;basic-shape&gt;")}} [Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) zu definieren.

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
  background: #fe9;
}

#example-element {
  background: linear-gradient(to bottom right, #f52, #05f);
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

  - : Wenn alle vier Argumente angegeben sind, repräsentieren sie die Abstände oben, rechts, unten und links von der Bezugsbox nach innen, die die Positionen der Kanten des Einsatzrechtecks definieren. Diese Argumente folgen der Syntax der margin-Kurzschreibweise, die es Ihnen ermöglicht, alle vier Einsätze mit einem, zwei oder vier Werten festzulegen.

    Wenn ein Paar von Einsätzen einer Dimension mehr als 100% dieser Dimension ergibt, werden beide Werte proportional reduziert, sodass ihre Summe 100% ergibt. Zum Beispiel hat der Wert `inset(90% 10% 60% 10%)` einen oberen Einsatz von `90%` und einen unteren Einsatz von `60%`. Diese Werte werden proportional auf `inset(60% 10% 40% 10%)` reduziert. Formen wie diese, die keinen Bereich umschließen und keine {{cssxref("shape-margin")}} haben, beeinflussen das Umfließen nicht.

- `<border-radius>`
  - : Die optionalen [`<border-radius>`](/de/docs/Web/CSS/border-radius) Argument(e) definieren abgerundete Ecken für das Einsatzrechteck unter Verwendung der border-radius Kurzschreibweise.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches inset-Beispiel

Im folgenden Beispiel haben wir eine `inset()` Form verwendet, um Inhalte über das schwebende Element zu ziehen. Ändern Sie die Offset-Werte, um zu sehen, wie sich die Form verändert.

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

{{EmbedLiveSample("Einfaches inset-Beispiel", '100%', 280)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [CSS Shapes](/de/docs/Web/CSS/CSS_shapes) Modul
- [Leitfaden zu Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)

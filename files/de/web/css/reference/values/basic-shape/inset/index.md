---
title: inset()
slug: Web/CSS/Reference/Values/basic-shape/inset
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`inset()`** [CSS](/de/docs/Web/CSS) Funktion definiert ein Rechteck mit den angegebenen Einabstandsdistanzen von jeder Seite der Referenzbox. Es ist eine grundlegende Formfunktion, die verwendet wird, um einen der {{cssxref("basic-shape")}} [Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types) zu definieren.

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
  - : Wenn alle vier Argumente angegeben sind, repräsentieren sie die Abstände von oben, rechts, unten und links von der Referenzbox nach innen, die die Positionen der Kanten des Einstandsrechtecks definieren. Diese Argumente folgen der Syntax der Margin-Kurzform, die es Ihnen ermöglicht, alle vier Einabstände mit einem, zwei oder vier Werten festzulegen.

    Wenn ein Paar von Einabständen für eine Dimension mehr als 100 % dieser Dimension ergibt, werden beide Werte proportional reduziert, sodass ihre Summe 100 % beträgt. Zum Beispiel hat der Wert `inset(90% 10% 60% 10%)` einen oberen Einabstand von `90%` und einen unteren Einabstand von `60%`. Diese Werte werden proportional zu `inset(60% 10% 40% 10%)` reduziert. Solche Formen, die keinen Bereich einschließen und keinen {{cssxref("shape-margin")}} haben, beeinflussen das Umfließen nicht.

- `<border-radius>`
  - : Die optionalen [`<border-radius>`](/de/docs/Web/CSS/Reference/Properties/border-radius) Argument(e) definieren abgerundete Ecken für das Einstandsrechteck unter Verwendung der border-radius-Kurzform-Syntax.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel für inset

Im untenstehenden Beispiel verwenden wir eine `inset()`-Form, um Inhalte über das gefloatete Element zu ziehen. Ändern Sie die Abstands-Werte, um zu sehen, wie sich die Form verändert.

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

{{EmbedLiveSample("Einfaches Beispiel für inset", '100%', 280)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) Modul
- [Leitfaden zu grundlegenden Formen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside)

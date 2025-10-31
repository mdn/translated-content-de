---
title: inset()
slug: Web/CSS/basic-shape/inset
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`inset()`**-Funktion in [CSS](/de/docs/Web/CSS) definiert ein Rechteck mit den angegebenen Abständen von jeder Seite der Referenzbox. Es handelt sich um eine grundlegende Formfunktion, die verwendet wird, um einen der {{cssxref("&lt;basic-shape&gt;")}} [Datentypen](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) zu definieren.

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
  - : Wenn alle vier Argumente angegeben sind, repräsentieren sie die oberen, rechten, unteren und linken Versätze von der Referenzbox nach innen, die die Positionen der Kanten des inset-Rechtecks definieren. Diese Argumente folgen der Syntax der margin-Kurzform, die es ermöglicht, alle vier Versätze mit einem, zwei oder vier Werten festzulegen.

    Wenn ein Paar von Inset-Werten für eine Dimension zusammen mehr als 100% dieser Dimension ergibt, werden beide Werte proportional verkleinert, sodass ihre Summe 100% ergibt. Zum Beispiel hat der Wert `inset(90% 10% 60% 10%)` einen oberen Inset von `90%` und einen unteren Inset von `60%`. Diese Werte werden proportional auf `inset(60% 10% 40% 10%)` reduziert. Solche Formen, die kein Areal umschließen und keinen {{cssxref("shape-margin")}} haben, beeinflussen das Umfließen nicht.

- `<border-radius>`
  - : Das optionale [`<border-radius>`](/de/docs/Web/CSS/Reference/Properties/border-radius)-Argument definiert abgerundete Ecken für das inset-Rechteck und verwendet dabei die border-radius-Kurzformsyntax.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Inset-Beispiel

Im folgenden Beispiel wird eine `inset()`-Form verwendet, um den Inhalt über das schwebende Element zu ziehen. Ändern Sie die Versatzwerte, um zu sehen, wie sich die Form verändert.

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

{{EmbedLiveSample("Basic inset example", '100%', 280)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [CSS shapes](/de/docs/Web/CSS/CSS_shapes) Modul
- [Leitfaden zu grundlegenden Formen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)

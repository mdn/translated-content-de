---
title: "`inset()` CSS-Funktion"
short-title: inset()
slug: Web/CSS/Reference/Values/basic-shape/inset
l10n:
  sourceCommit: cd0970bc03cf30a9a8089954cc542a17dbe9eba3
---

Die **`inset()`** [CSS](/de/docs/Web/CSS) Funktion definiert ein Rechteck mit den angegebenen Abständen von jedem Rand der Referenzbox nach innen. Es handelt sich um eine grundlegende Formfunktion, die verwendet wird, um einen der {{cssxref("basic-shape")}} [Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types) zu definieren.

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
border-shape: inset(10px 20px 10px 20px round 20px);
```

### Werte

- `<length-percentage>{1,4}`
  - : Wenn alle vier Argumente angegeben sind, stellen sie die Abstände oben, rechts, unten und links von der Referenzbox nach innen dar, die die Positionen der Kanten des eingefügten Rechtecks definieren. Diese Argumente folgen der Syntax der `margin`-Kurzschreibweise, mit der man alle vier Einsätze mit einem, zwei oder vier Werten festlegen kann.

    Wenn ein Paar von Einsätzen für eine Dimension zusammen mehr als 100% dieser Dimension ergibt, werden beide Werte proportional reduziert, sodass ihre Summe 100% erreicht. Zum Beispiel hat der Wert `inset(90% 10% 60% 10%)` einen oberen Einsatz von `90%` und einen unteren Einsatz von `60%`. Diese Werte werden proportional auf `inset(60% 10% 40% 10%)` reduziert. Solche Formen, die keinen Bereich einschließen und keinen {{cssxref("shape-margin")}} haben, beeinflussen das Umfließen nicht.

- `<border-radius>`
  - : Das optionale [`<border-radius>`](/de/docs/Web/CSS/Reference/Properties/border-radius) Argument definiert abgerundete Ecken für das eingefügte Rechteck mittels der `border-radius`-Kurzschreibweise.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches `inset`-Beispiel

Im folgenden Beispiel haben wir eine `inset()`-Form, die verwendet wird, um Inhalte über das schwebende Element zu ziehen. Ändern Sie die Eintragswerte, um zu sehen, wie sich die Form verändert.

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

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("border-shape")}}, {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) Modul
- [Leitfaden zu grundlegenden Formen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside)

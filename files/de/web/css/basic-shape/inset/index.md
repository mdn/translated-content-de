---
title: inset()
slug: Web/CSS/basic-shape/inset
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Die **`inset()`**-[CSS](/de/docs/Web/CSS)-Funktion definiert ein Rechteck in den angegebenen Abständen von jedem Rand der Referenzbox. Es handelt sich um eine grundlegende Formfunktion, die zum Definieren eines der {{cssxref("&lt;basic-shape&gt;")}}-[Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) verwendet wird.

{{EmbedInteractiveExample("pages/css/function-inset.html")}}

## Syntax

```css
shape-outside: inset(20px 50px 10px 0 round 50px);
```

### Werte

- `<length-percentage>{1,4}`

  - : Wenn alle vier Argumente angegeben sind, stellen sie die Abstände von oben, rechts, unten und links von der Referenzbox nach innen dar, die die Positionen der Kanten des inset-Rechtecks definieren. Diese Argumente folgen der Syntax der `margin`-Kurzschrift, wodurch Sie alle vier Inset-Werte mit einer, zwei oder vier Werten festlegen können.

    Wenn ein Paar von Insets für eine Dimension zusammen mehr als 100 % dieser Dimension ergibt, werden beide Werte proportional reduziert, sodass ihre Summe 100 % entspricht. Zum Beispiel hat der Wert `inset(90% 10% 60% 10%)` ein oberes Inset von `90%` und ein unteres Inset von `60%`. Diese Werte werden proportional auf `inset(60% 10% 40% 10%)` reduziert. Solche Formen, die keine Fläche einschließen und keinen {{cssxref("shape-margin")}} haben, beeinflussen das Umbrechen nicht.

- `<border-radius>`
  - : Die optionalen [`<border-radius>`](/de/docs/Web/CSS/border-radius)-Argumente definieren abgerundete Ecken für das inset-Rechteck mithilfe der `border-radius`-Kurzschriftsyntax.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Basis-Beispiel für inset

Im folgenden Beispiel verwenden wir eine `inset()`-Form, um Inhalte über das gefloatete Element zu ziehen. Ändern Sie die Offset-Werte, um zu sehen, wie sich die Form verändert.

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
- [CSS-Shapes](/de/docs/Web/CSS/CSS_shapes)-Modul
- [Leitfaden zu grundlegenden Formen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)

---
title: inset()
slug: Web/CSS/basic-shape/inset
l10n:
  sourceCommit: 24e53c54b9ec0b7a5d12cf612f5904b7751793a9
---

{{CSSRef}}

Die **`inset()`** [CSS](/de/docs/Web/CSS) Funktion definiert ein Rechteck mit den angegebenen Einzügen von jeder Seite des Referenzrahmens. Es handelt sich um eine grundlegende Formfunktion, die dazu verwendet wird, einen der {{cssxref("&lt;basic-shape&gt;")}} [Datentypen](/de/docs/Web/CSS/CSS_Types) zu definieren.

{{EmbedInteractiveExample("pages/css/function-inset.html")}}

## Syntax

```css
shape-outside: inset(20px 50px 10px 0 round 50px);
```

### Werte

- `<length-percentage>{1,4}`

  - : Wenn alle vier Argumente angegeben sind, repräsentieren sie die Abstände oben, rechts, unten und links innerhalb des Referenzrahmens, die die Positionen der Kanten des Einsatzrechtecks definieren. Diese Argumente folgen der Syntax der Margin-Kurzform, die es Ihnen ermöglicht, alle vier Einzüge mit einem, zwei oder vier Werten festzulegen.

    Wenn ein Paar von Einzügen für eine Dimension mehr als 100 % dieser Dimension addiert, werden beide Werte proportional reduziert, sodass ihre Summe 100 % ergibt. Zum Beispiel wird der Wert `inset(90% 10% 60% 10%)` mit einem oberen Einzug von `90%` und einem unteren Einzug von `60%` proportional auf `inset(60% 10% 40% 10%)` reduziert. Solche Formen, die keine Fläche einschließen und keinen {{cssxref("shape-margin")}} haben, wirken sich nicht auf den Umbruch aus.

- `<border-radius>`
  - : Das optionale [`<border-radius>`](/de/docs/Web/CSS/border-radius) Argument (oder Argumente) definiert abgerundete Ecken für das Einsatzrechteck unter Verwendung der border-radius-Kurzformsyntax.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel für inset

Im folgenden Beispiel wird eine `inset()`-Form verwendet, um Inhalte über das schwebende Element zu ziehen. Ändern Sie die Offset-Werte, um zu sehen, wie sich die Form ändert.

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
- [CSS Shapes](/de/docs/Web/CSS/CSS_shapes) Modul
- [Leitfaden zu grundlegenden Formen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)

---
title: ellipse()
slug: Web/CSS/basic-shape/ellipse
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Die **`ellipse()`** [CSS](/de/docs/Web/CSS)-Funktion ist eine der {{cssxref("&lt;basic-shape&gt;")}}- [Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types).

{{EmbedInteractiveExample("pages/css/function-ellipse.html")}}

## Syntax

```css
shape-outside: ellipse(40% 50% at left);
shape-outside: ellipse(closest-side farthest-side at 30%);
```

Eine Ellipse ist im Grunde ein zusammengedrückter Kreis, daher verhält sich `ellipse()` sehr ähnlich wie {{cssxref("basic-shape/circle","circle()")}}, mit dem Unterschied, dass zwei Radien, x und y, angegeben werden müssen.

### Werte

- `<shape-radius>`

  - : Zwei Radien, x und y in dieser Reihenfolge. Diese können eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder die Werte `closest-side` und `farthest-side` sein.

    - `closest-side`
      - : Verwendet die Länge vom Zentrum der Form zur nächstgelegenen Seite des Referenzrahmens. Für Ellipsen ist dies die nächstgelegene Seite in der Radiusdimension.
    - `farthest-side`
      - : Verwendet die Länge vom Zentrum der Form zur entferntesten Seite des Referenzrahmens. Für Ellipsen ist dies die entfernteste Seite in der Radiusdimension.

- `<position>`
  - : Verschiebt das Zentrum der Ellipse. Kann eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder ein Wert wie `left` sein. Der `<position>`-Wert ist standardmäßig "center", falls er weggelassen wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel für ellipse()

Dieses Beispiel zeigt eine Ellipse, die links schwebt. Sie hat einen horizontalen Radius von 40%, einen vertikalen Radius von 50% und eine Position links. Dies bedeutet, dass sich das Zentrum der Ellipse am linken Rand des Rahmens befindet, was uns eine halbe Ellipsenform gibt, um unseren Text herumzuströmen. Klicken Sie auf "Play" in den Codeblöcken, um diese Werte zu ändern und zu sehen, wie sich die Ellipse verändert:

```html live-sample___ellipse
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

```css live-sample___ellipse
body {
  font: 1.2em / 1.5 sans-serif;
}
.shape {
  float: left;
  shape-outside: ellipse(40% 50% at left);
  margin: 20px;
  width: 100px;
  height: 200px;
}
```

{{EmbedLiveSample("ellipse", "", "300px")}}

### Verwendung von closest-side / farthest-side Werten

Die Schlüsselwortwerte `closest-side` und `farthest-side` sind nützlich, um schnell eine Ellipse basierend auf der Größe des schwebenden Element-Referenzrahmens zu erstellen.

```html live-sample___ellipse-keywords
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

```css live-sample___ellipse-keywords
body {
  font: 1.2em / 1.5 sans-serif;
}
.shape {
  float: left;
  shape-outside: ellipse(closest-side farthest-side at 30%);
  margin: 20px;
  width: 100px;
  height: 140px;
}
```

{{EmbedLiveSample("ellipse-keywords", "", "300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Leitfaden zu grundlegenden Formen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)

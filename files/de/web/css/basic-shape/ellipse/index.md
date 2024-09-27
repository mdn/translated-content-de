---
title: ellipse()
slug: Web/CSS/basic-shape/ellipse
l10n:
  sourceCommit: 20315338453f387f8c1f6c20a07766f8f71e8032
---

{{CSSRef}}

Die **`ellipse()`** [CSS](/de/docs/Web/CSS) Funktion ist einer der {{cssxref("&lt;basic-shape&gt;")}} [Datentypen](/de/docs/Web/CSS/CSS_Types).

{{EmbedInteractiveExample("pages/css/function-ellipse.html")}}

## Syntax

```css
shape-outside: ellipse(40% 50% at left);
shape-outside: ellipse(closest-side farthest-side at 30%);
```

Eine Ellipse ist im Wesentlichen ein gestauchter Kreis, und daher funktioniert `ellipse()` sehr ähnlich wie {{cssxref("basic-shape/circle","circle()")}}, außer dass wir zwei Radien x und y angeben müssen.

### Werte

- `<shape-radius>`

  - : Zwei Radien, x und y in dieser Reihenfolge. Diese können eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder die Werte `closest-side` und `farthest-side` sein.

    - `closest-side`
      - : Verwendet die Länge vom Zentrum der Form zur nächsten Seite des Referenzrahmens. Für Ellipsen ist dies die nächste Seite in der Radiusdimension.
    - `farthest-side`
      - : Verwendet die Länge vom Zentrum der Form zur entferntesten Seite des Referenzrahmens. Für Ellipsen ist dies die entfernteste Seite in der Radiusdimension.

- `<position>`
  - : Verschiebt das Zentrum der Ellipse. Kann eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder Werte wie `left` sein. Der `<position>`-Wert wird standardmäßig auf die Mitte gesetzt, wenn er weggelassen wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches ellipse() Beispiel

Dieses Beispiel zeigt eine Ellipse mit einem x-Radius von 40%, einem y-Radius von 50% und der Position links. Das bedeutet, dass das Zentrum der Ellipse am linken Rand des Kastens liegt, was uns eine halbe Ellipsenform gibt, um unseren Text herumzuwickeln. Sie können diese Werte ändern, um zu sehen, wie sich die Ellipse verändert.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/ellipse.html", '100%', 800)}}

### Verwendung von closest-side / farthest-side Werten

Die Schlüsselwortwerte `closest-side` und `farthest-side` sind nützlich, um schnell eine Ellipse basierend auf der Größe des gefloateten Elementreferenzkastens zu erstellen.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/ellipse-keywords.html", '100%', 800)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Leitfaden zu Basisshapes](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)

---
title: ellipse()
slug: Web/CSS/basic-shape/ellipse
l10n:
  sourceCommit: 20315338453f387f8c1f6c20a07766f8f71e8032
---

{{CSSRef}}

Die **`ellipse()`** [CSS](/de/docs/Web/CSS) Funktion gehört zu den {{cssxref("&lt;basic-shape&gt;")}} [Datentypen](/de/docs/Web/CSS/CSS_Types).

{{EmbedInteractiveExample("pages/css/function-ellipse.html")}}

## Syntax

```css
shape-outside: ellipse(40% 50% at left);
shape-outside: ellipse(closest-side farthest-side at 30%);
```

Eine Ellipse ist im Wesentlichen ein zusammengedrückter Kreis, und daher funktioniert `ellipse()` sehr ähnlich wie {{cssxref("basic-shape/circle","circle()")}}, außer dass wir zwei Radien x und y angeben müssen.

### Werte

- `<shape-radius>`

  - : Zwei Radien, x und y in dieser Reihenfolge. Diese können eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder Werte `closest-side` und `farthest-side` sein.

    - `closest-side`
      - : Verwendet die Länge vom Zentrum der Form zur nächsten Seite des Referenzrechtecks. Bei Ellipsen ist dies die nächste Seite in der Radiusdimension.
    - `farthest-side`
      - : Verwendet die Länge vom Zentrum der Form zur entferntesten Seite des Referenzrechtecks. Bei Ellipsen ist dies die entfernteste Seite in der Radiusdimension.

- `<position>`
  - : Bewegt das Zentrum der Ellipse. Kann eine {{cssxref("length")}}, ein {{cssxref("percentage")}}, oder ein Wert wie `left` sein. Der `<position>`-Wert standardmäßig auf das Zentrum gesetzt, wenn nicht angegeben.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches ellipse() Beispiel

Dieses Beispiel zeigt eine Ellipse mit einem x-Radius von 40%, einem y-Radius von 50% und der Position "left". Das bedeutet, dass das Zentrum der Ellipse an der linken Kante des Kastens liegt, wodurch sich eine Halbellipsenform ergibt, um den Text zu umfließen. Sie können diese Werte ändern, um zu sehen, wie sich die Ellipse verändert.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/ellipse.html", '100%', 800)}}

### Verwendung der closest-side / farthest-side Werte

Die Schlüsselwortwerte `closest-side` und `farthest-side` sind nützlich, um schnell eine Ellipse basierend auf der Größe des schwebenden Element-Referenzrechtecks zu erstellen.

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/ellipse-keywords.html", '100%', 800)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Leitfaden zu grundlegenden Formen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)

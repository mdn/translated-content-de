---
title: circle()
slug: Web/CSS/basic-shape/circle
l10n:
  sourceCommit: 20315338453f387f8c1f6c20a07766f8f71e8032
---

{{CSSRef}}

Die CSS-**`circle()`** [Funktion](/de/docs/Web/CSS/CSS_Functions) definiert einen Kreis durch einen Radius und eine Position. Es ist einer der {{cssxref("&lt;basic-shape&gt;")}} Datentypen.

{{EmbedInteractiveExample("pages/css/function-circle.html")}}

## Syntax

```css
shape-outside: circle(50%);
clip-path: circle(6rem at 12rem 8rem);
```

### Werte

- `<shape-radius>`

  - : Dies kann eine {{cssxref("length")}}, ein {{cssxref("percentage")}} oder die Werte `closest-side` und `farthest-side` sein.

    - `closest-side`
      - : Verwendet die Länge vom Mittelpunkt der Form zur nächsten Seite der Referenzbox. Für Kreise ist dies die nächstgelegene Seite in einer beliebigen Dimension.
    - `farthest-side`
      - : Verwendet die Länge vom Mittelpunkt der Form zur am weitesten entfernten Seite der Referenzbox. Für Kreise ist dies die am weitesten entfernte Seite in einer beliebigen Dimension.

- `<position>`
  - : Verschiebt den Mittelpunkt des Kreises. Kann eine {{cssxref("length")}}, ein {{cssxref("percentage")}}, oder ein Wert wie `left` sein. Der `<position>`-Wert wird standardmäßig auf die Mitte gesetzt, wenn er weggelassen wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfacher Kreis

Im untenstehenden Beispiel hat die {{cssxref("shape-outside")}}-Eigenschaft den Wert `circle(50%)`, welcher einen Kreis auf einem gefloateten Element definiert, um den der Text fließt.

{{EmbedGHLiveSample("css-examples/shapes/overview/circle.html", '100%', 720)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Leitfaden zu grundlegenden Formen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)

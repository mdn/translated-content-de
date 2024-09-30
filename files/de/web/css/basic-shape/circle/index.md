---
title: circle()
slug: Web/CSS/basic-shape/circle
l10n:
  sourceCommit: 20315338453f387f8c1f6c20a07766f8f71e8032
---

{{CSSRef}}

Die **`circle()`** CSS-[Funktion](/de/docs/Web/CSS/CSS_Functions) definiert einen Kreis anhand eines Radius und einer Position. Sie ist eine der {{cssxref("&lt;basic-shape&gt;")}} Datentypen.

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
      - : Verwendet die Länge vom Zentrum der Form bis zur nächsten Seite des Referenzrahmens. Bei Kreisen ist dies die nächstgelegene Seite in jeder Dimension.
    - `farthest-side`
      - : Verwendet die Länge vom Zentrum der Form bis zur entferntesten Seite des Referenzrahmens. Bei Kreisen ist dies die entfernteste Seite in jeder Dimension.

- `<position>`
  - : Bewegt das Zentrum des Kreises. Kann eine {{cssxref("length")}}, ein {{cssxref("percentage")}}, oder ein Wert wie `left` sein. Der `<position>`-Wert wird standardmäßig auf die Mitte gesetzt, wenn er weggelassen wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfacher Kreis

Im untenstehenden Beispiel hat die Eigenschaft {{cssxref("shape-outside")}} den Wert `circle(50%)`, was einen Kreis auf einem gefloateten Element definiert, um den der Text fließt.

{{EmbedGHLiveSample("css-examples/shapes/overview/circle.html", '100%', 720)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Leitfaden zu Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)

---
title: <resolution>
slug: Web/CSS/resolution
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{CSSRef}}

Der **`<resolution>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types), der zur Beschreibung von [Auflösungen](/de/docs/Web/CSS/@media/resolution) in [Media Queries](/de/docs/Web/CSS/CSS_media_queries) verwendet wird, bezeichnet die Pixeldichte eines Ausgabegeräts, d.h. dessen Auflösung.

Bei Bildschirmen beziehen sich die Einheiten auf _CSS_-Zoll, Zentimeter oder Pixel, nicht auf physikalische Werte.

## Syntax

Der `<resolution>` Datentyp besteht aus einer strikt positiven {{cssxref("&lt;number&gt;")}} gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Abstand zwischen dem Einheit-Literal und der Zahl.

### Einheiten

- `dpi`
  - : Bezeichnet die Anzahl der [dots per inch](https://en.wikipedia.org/wiki/Dots_per_inch). Bildschirme enthalten typischerweise 72 oder 96 dots per inch, aber die dpi für Druckdokumente ist normalerweise wesentlich größer. Da 1 Zoll 2,54 cm entspricht, ist `1dpi ≈ 0,39dpcm`.
- `dpcm`
  - : Bezeichnet die Anzahl der [dots per centimeter](https://en.wikipedia.org/wiki/Dots_per_inch). Da 1 Zoll 2,54 cm entspricht, ist `1dpcm ≈ 2,54dpi`.
- `dppx`
  - : Bezeichnet die Anzahl der Dots pro [`px`](/de/docs/Web/CSS/length#px) Einheit. Aufgrund des festen Verhältnisses von 1:96 zwischen CSS `in` und CSS `px` entspricht `1dppx` `96dpi`, was der Standardauflösung von Bildern entspricht, die in CSS wie durch {{cssxref("image-resolution")}} definiert, dargestellt werden.
- `x`
  - : Alias für `dppx`.

> [!NOTE]
> Obwohl die Zahl `0` immer dieselbe ist, unabhängig von der Einheit, darf die Einheit nicht weggelassen werden. Mit anderen Worten, `0` ist ungültig und stellt nicht `0dpi`, `0dpcm` oder `0dppx` dar.

## Beispiele

### Verwendung in einer Media Query

```css
@media print and (resolution >= 300dpi) {
  /* … */
}

@media (resolution: 120dpcm) {
  /* … */
}

@media (resolution >= 2dppx) {
  /* … */
}

@media (resolution: 1x) {
  /* … */
}
```

### Gültige Auflösungen

```plain example-good
96dpi
50.82dpcm
3dppx
```

### Ungültige Auflösungen

```plain example-bad
72 dpi     Spaces are not allowed between the number and the unit.
ten dpi    The number must use digits only.
0          The unit is required.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [resolution](/de/docs/Web/CSS/@media/resolution) Media-Feature
- Die {{cssxref("image-resolution")}} Eigenschaft
- [Verwendung von @media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)

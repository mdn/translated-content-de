---
title: <resolution>
slug: Web/CSS/resolution
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Der **`<resolution>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types), der zur Beschreibung von [Auflösungen](/de/docs/Web/CSS/@media/resolution) in [Media-Queries](/de/docs/Web/CSS/CSS_media_queries) verwendet wird, bezeichnet die Pixeldichte eines Ausgabegeräts, d.h. seine Auflösung.

Auf Bildschirmen beziehen sich die Einheiten auf _CSS_ Zoll, Zentimeter oder Pixel, nicht auf physikalische Werte.

## Syntax

Der `<resolution>`-Datentyp besteht aus einer strikt positiven {{cssxref("&lt;number&gt;")}}, gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Leerraum zwischen der Einheit und der Zahl.

### Einheiten

- `dpi`
  - : Stellt die Anzahl der [Punkte pro Zoll](https://en.wikipedia.org/wiki/Dots_per_inch) dar. Bildschirme enthalten typischerweise 72 oder 96 Punkte pro Zoll, aber die dpi für gedruckte Dokumente ist in der Regel viel höher. Da 1 Zoll 2,54 cm sind, ist `1dpi ≈ 0,39dpcm`.
- `dpcm`
  - : Stellt die Anzahl der [Punkte pro Zentimeter](https://en.wikipedia.org/wiki/Dots_per_inch) dar. Da 1 Zoll 2,54 cm sind, ist `1dpcm ≈ 2,54dpi`.
- `dppx`
  - : Stellt die Anzahl der Punkte pro [`px`](/de/docs/Web/CSS/length#px)-Einheit dar. Aufgrund des festen Verhältnisses von 1:96 von CSS `in` zu CSS `px` ist `1dppx` äquivalent zu `96dpi`, was der Standardauflösung von in CSS angezeigten Bildern entspricht, wie durch {{cssxref("image-resolution")}} definiert.
- `x`
  - : Alias für `dppx`.

> [!NOTE]
> Obwohl die Zahl `0` unabhängig von der Einheit immer gleich ist, darf die Einheit nicht weggelassen werden. Mit anderen Worten, `0` ist ungültig und repräsentiert nicht `0dpi`, `0dpcm` oder `0dppx`.

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

- [resolution](/de/docs/Web/CSS/@media/resolution) Medieneigenschaft
- Die {{cssxref("image-resolution")}}-Eigenschaft
- [Verwendung von @media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)

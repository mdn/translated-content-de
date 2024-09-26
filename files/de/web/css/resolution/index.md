---
title: <Auflösung>
slug: Web/CSS/resolution
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Der **`<resolution>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types), der zur Beschreibung von [Auflösungen](/de/docs/Web/CSS/@media/resolution) in [Media Queries](/de/docs/Web/CSS/CSS_media_queries) verwendet wird, bezeichnet die Pixeldichte eines Ausgabegeräts, d.h. dessen Auflösung.

Auf Bildschirmen beziehen sich die Einheiten auf _CSS_-Zoll, Zentimeter oder Pixel, nicht auf physische Werte.

## Syntax

Der `<resolution>`-Datentyp besteht aus einer streng positiven {{cssxref("&lt;number&gt;")}}, gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Abstand zwischen dem Einheitliteral und der Zahl.

### Einheiten

- `dpi`
  - : Stellt die Anzahl von [Punkten pro Zoll](https://en.wikipedia.org/wiki/Dots_per_inch) dar. Bildschirme enthalten typischerweise 72 oder 96 Punkte pro Zoll, aber die dpi für gedruckte Dokumente ist normalerweise viel größer. Da 1 Zoll 2,54 cm entspricht, gilt `1dpi ≈ 0,39dpcm`.
- `dpcm`
  - : Stellt die Anzahl von [Punkten pro Zentimeter](https://en.wikipedia.org/wiki/Dots_per_inch) dar. Da 1 Zoll 2,54 cm entspricht, gilt `1dpcm ≈ 2,54dpi`.
- `dppx`
  - : Stellt die Anzahl der Punkte pro [`px`](/de/docs/Web/CSS/length#px)-Einheit dar. Aufgrund des festen Verhältnisses von 1:96 von CSS `in` zu CSS `px` entspricht `1dppx` `96dpi`, was der Standardauflösung von in CSS angezeigten Bildern entspricht, wie durch {{cssxref("image-resolution")}} definiert.
- `x`
  - : Alias für `dppx`.

> [!NOTE]
> Obwohl die Zahl `0` unabhängig von der Einheit immer gleich ist, darf die Einheit nicht weggelassen werden. Mit anderen Worten, `0` ist ungültig und repräsentiert nicht `0dpi`, `0dpcm` oder `0dppx`.

## Beispiele

### Verwendung in einer Media Query

```css
@media print and (min-resolution: 300dpi) {
  /* … */
}

@media (resolution: 120dpcm) {
  /* … */
}

@media (min-resolution: 2dppx) {
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
72 dpi     Es sind keine Leerzeichen zwischen der Zahl und der Einheit erlaubt.
ten dpi    Die Zahl muss nur Ziffern verwenden.
0          Die Einheit ist erforderlich.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Auflösung](/de/docs/Web/CSS/@media/resolution) Media-Feature
- Die {{cssxref("image-resolution")}} Eigenschaft
- [Verwendung von @media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
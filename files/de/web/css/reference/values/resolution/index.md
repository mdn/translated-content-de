---
title: <resolution>
slug: Web/CSS/Reference/Values/resolution
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<resolution>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types), der zur Beschreibung von [Auflösungen](/de/docs/Web/CSS/Reference/At-rules/@media/resolution) in [Media Queries](/de/docs/Web/CSS/CSS_media_queries) verwendet wird, bezeichnet die Pixeldichte eines Ausgabegeräts, also dessen Auflösung.

Auf Bildschirmen beziehen sich die Einheiten auf _CSS_ Zoll, Zentimeter oder Pixel, nicht auf physische Werte.

## Syntax

Der `<resolution>`-Datentyp besteht aus einer strikt positiven {{cssxref("&lt;number&gt;")}} gefolgt von einer der unten aufgeführten Einheiten. Wie bei allen CSS-Dimensionen gibt es keinen Abstand zwischen dem Einheitensymbol und der Zahl.

### Einheiten

- `dpi`
  - : Repräsentiert die Anzahl der [Punkte pro Zoll](https://en.wikipedia.org/wiki/Dots_per_inch). Bildschirme enthalten typischerweise 72 oder 96 Punkte pro Zoll, aber der dpi-Wert für gedruckte Dokumente ist normalerweise viel höher. Da 1 Zoll 2,54 cm entspricht, ist `1dpi ≈ 0.39dpcm`.
- `dpcm`
  - : Repräsentiert die Anzahl der [Punkte pro Zentimeter](https://en.wikipedia.org/wiki/Dots_per_inch). Da 1 Zoll 2,54 cm entspricht, ist `1dpcm ≈ 2.54dpi`.
- `dppx`
  - : Repräsentiert die Anzahl der Punkte pro [`px`](/de/docs/Web/CSS/Reference/Values/length#px) Einheit. Aufgrund des festen 1:96-Verhältnisses von CSS `in` zu CSS `px` entspricht `1dppx` `96dpi`, was der standardmäßigen Bildauflösung entspricht, die in CSS definiert ist, wie durch {{cssxref("image-resolution")}} beschrieben.
- `x`
  - : Alias für `dppx`.

> [!NOTE]
> Obwohl die Zahl `0` unabhängig von der Einheit immer gleich ist, darf die Einheit nicht weggelassen werden. Mit anderen Worten, `0` ist ungültig und stellt nicht `0dpi`, `0dpcm` oder `0dppx` dar.

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

- [resolution](/de/docs/Web/CSS/Reference/At-rules/@media/resolution) Medienfunktion
- Die {{cssxref("image-resolution")}} Eigenschaft
- [Verwendung von @media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)

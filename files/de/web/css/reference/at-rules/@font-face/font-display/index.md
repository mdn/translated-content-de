---
title: font-display
slug: Web/CSS/Reference/At-rules/@font-face/font-display
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Der **`font-display`** Deskriptor für die {{cssxref("@font-face")}} At-Regel bestimmt, wie ein Schriftschnitt angezeigt wird, basierend darauf, ob und wann er heruntergeladen und einsatzbereit ist.

## Syntax

```css
/* Keyword values */
font-display: auto;
font-display: block;
font-display: swap;
font-display: fallback;
font-display: optional;
```

### Werte

- `auto`
  - : Die Schriftanzeigestrategie wird durch den Benutzeragenten definiert.
- `block`
  - : Gibt dem Schriftschnitt eine kurze Blockperiode und eine unendliche Swap-Periode.
- `swap`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockperiode und eine unendliche Swap-Periode.
- `fallback`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockperiode und eine kurze Swap-Periode.
- `optional`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockperiode und keine Swap-Periode.

> [!NOTE]
> In Firefox geben die Einstellungen `gfx.downloadable_fonts.fallback_delay`
> und `gfx.downloadable_fonts.fallback_delay_short` die Dauer der "kurzen" und "extrem kurzen" Perioden an.

## Beschreibung

Der Schriftanzeige-Zeitstrahl basiert auf einem Timer, der in dem Moment beginnt, wenn der Benutzeragent versucht, einen bestimmten heruntergeladenen Schriftschnitt zu verwenden. Der Zeitstrahl ist in die drei unten genannten Perioden unterteilt, die das Renderverhalten von Elementen bestimmen, die den Schriftschnitt nutzen:

- Schrift-Blockperiode: Wenn der Schriftschnitt nicht geladen ist, muss jedes Element, das ihn verwenden will, eine _unsichtbare_ Ersatzschrift rendern. Wenn der Schriftschnitt während dieser Periode erfolgreich geladen wird, wird er normal verwendet.
- Schrift-Swap-Periode: Wenn der Schriftschnitt nicht geladen ist, muss jedes Element, das ihn verwenden will, eine Ersatzschrift rendern. Wenn der Schriftschnitt während dieser Periode erfolgreich geladen wird, wird er normal verwendet.
- Schrift-Fehlerperiode: Wenn der Schriftschnitt nicht geladen ist, behandelt der Benutzeragent ihn als fehlgeschlagenen Ladevorgang, was zum normalen Schriftfallback führt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spezifizieren von Fallback font-display

```css
@font-face {
  font-family: "ExampleFont";
  src:
    url("/path/to/fonts/example-font.woff") format("woff"),
    url("/path/to/fonts/example-font.eot") format("embedded-opentype");
  font-weight: normal;
  font-style: normal;
  font-display: fallback;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}

---
title: font-display
slug: Web/CSS/@font-face/font-display
l10n:
  sourceCommit: 6ed02a2b0e0d891f7d3b4c2a6b1d9cc05c90ed9c
---

Der **`font-display`** Deskriptor für die [`@font-face`](/de/docs/Web/CSS/@font-face) Regel bestimmt, wie eine Schriftart angezeigt wird, basierend darauf, ob und wann sie heruntergeladen und einsatzbereit ist.

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
  - : Die Schriftanzeigestrategie wird vom Benutzeragenten definiert.
- `block`
  - : Gibt der Schriftart eine kurze Blockperiode und eine unendliche Austauschperiode.
- `swap`
  - : Gibt der Schriftart eine extrem kurze Blockperiode und eine unendliche Austauschperiode.
- `fallback`
  - : Gibt der Schriftart eine extrem kurze Blockperiode und eine kurze Austauschperiode.
- `optional`
  - : Gibt der Schriftart eine extrem kurze Blockperiode und keine Austauschperiode.

> [!NOTE]
> In Firefox geben die Präferenzen `gfx.downloadable_fonts.fallback_delay`
> und `gfx.downloadable_fonts.fallback_delay_short` die Dauer
> der "kurzen" und "extrem kurzen" Perioden an.

## Beschreibung

Der Zeitplan für die Schriftanzeige basiert auf einem Timer, der zu dem Zeitpunkt beginnt, an dem der Benutzeragent versucht, eine heruntergeladene Schriftart zu verwenden. Der Zeitplan ist in die drei unten genannten Perioden unterteilt, die das Rendering-Verhalten von Elementen bestimmen, die die Schriftart verwenden:

- Schriftblockperiode: Wenn die Schriftart nicht geladen ist, muss jedes Element, das versucht, sie zu verwenden, eine _unsichtbare_ Ersatzschriftart rendern. Wenn die Schriftart während dieser Periode erfolgreich geladen wird, wird sie normal verwendet.
- Schrifttauschperiode: Wenn die Schriftart nicht geladen ist, muss jedes Element, das versucht, sie zu verwenden, eine Ersatzschriftart rendern. Wenn die Schriftart während dieser Periode erfolgreich geladen wird, wird sie normal verwendet.
- Schriftfehlerperiode: Wenn die Schriftart nicht geladen ist, behandelt der Benutzeragent sie als fehlgeschlagenen Ladevorgang und führt den normalen Schriftfalleffekt aus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Fallback-Schriftanzeigeverhaltens

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

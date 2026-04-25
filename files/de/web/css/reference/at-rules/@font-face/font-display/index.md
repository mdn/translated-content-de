---
title: "`font-display` CSS at-rule Descriptor"
short-title: font-display
slug: Web/CSS/Reference/At-rules/@font-face/font-display
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Der **`font-display`** Descriptor für die {{cssxref("@font-face")}} At-Regel bestimmt, wie eine Schriftart angezeigt wird, abhängig davon, ob und wann sie heruntergeladen und einsatzbereit ist.

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
  - : Gibt dem Schriftbild eine kurze Blockperiode und eine unendliche Swap-Periode.
- `swap`
  - : Gibt dem Schriftbild eine extrem kurze Blockperiode und eine unendliche Swap-Periode.
- `fallback`
  - : Gibt dem Schriftbild eine extrem kurze Blockperiode und eine kurze Swap-Periode.
- `optional`
  - : Gibt dem Schriftbild eine extrem kurze Blockperiode und keine Swap-Periode.

> [!NOTE]
> In Firefox geben die Einstellungen `gfx.downloadable_fonts.fallback_delay`
> und `gfx.downloadable_fonts.fallback_delay_short` die Dauer der "kurzen" bzw. "extrem kurzen" Perioden an.

## Beschreibung

Die Schriftanzeige-Zeitlinie basiert auf einem Timer, der beginnt, sobald der Benutzeragent versucht, eine gegebene heruntergeladene Schriftart zu verwenden. Die Zeitlinie ist in die drei unten aufgeführten Perioden unterteilt, die das Darstellungsverhalten aller Elemente bestimmen, die die Schriftart verwenden:

- Schriftblockperiode: Wenn die Schriftart nicht geladen ist, muss jedes Element, das sie verwenden möchte, eine _unsichtbare_ Fallback-Schrift verwenden. Wenn die Schriftart während dieser Periode erfolgreich geladen wird, wird sie normal verwendet.
- Schrift-Swap-Periode: Wenn die Schriftart nicht geladen ist, muss jedes Element, das sie verwenden möchte, eine Fallback-Schrift verwenden. Wenn die Schriftart während dieser Periode erfolgreich geladen wird, wird sie normal verwendet.
- Schrift-Ausfallperiode: Wenn die Schriftart nicht geladen ist, behandelt der Benutzeragent sie als fehlgeschlagenen Ladevorgang, was zu einem normalen Schrift-Fallback führt.

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

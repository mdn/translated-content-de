---
title: font-display
slug: Web/CSS/@font-face/font-display
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Der **`font-display`** Deskriptor für die [`@font-face`](/de/docs/Web/CSS/@font-face) At-Regel bestimmt, wie eine Schriftart abhängig davon angezeigt wird, ob und wann sie heruntergeladen und einsatzbereit ist.

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
  - : Die Schriftart-Anzeigestrategie wird vom User-Agent definiert.
- `block`
  - : Gibt der Schriftart ein kurzes Blockintervall und ein unendliches Swap-Intervall.
- `swap`
  - : Gibt der Schriftart ein extrem kurzes Blockintervall und ein unendliches Swap-Intervall.
- `fallback`
  - : Gibt der Schriftart ein extrem kurzes Blockintervall und ein kurzes Swap-Intervall.
- `optional`
  - : Gibt der Schriftart ein extrem kurzes Blockintervall und kein Swap-Intervall.

> [!NOTE]
> In Firefox geben die Voreinstellungen `gfx.downloadable_fonts.fallback_delay`
> und `gfx.downloadable_fonts.fallback_delay_short` die Dauer
> der "kurzen" und "extrem kurzen" Intervalle an.

## Beschreibung

Der Schriftarten-Anzeigezeitstrahl basiert auf einem Timer, der startet, sobald der User-Agent versucht, eine gegebene heruntergeladene Schriftart zu verwenden. Der Zeitstrahl ist in die drei unten stehenden Perioden unterteilt, die das Rendering-Verhalten aller Elemente bestimmen, die die Schriftart verwenden:

- Schriftblockperiode: Wenn die Schriftart nicht geladen ist, muss jedes Element, das versucht, sie zu verwenden, eine _unsichtbare_ Ersatzschriftart rendern. Wenn die Schriftart während dieser Periode erfolgreich geladen wird, wird sie normal verwendet.
- Schrift-Swapperiode: Wenn die Schriftart nicht geladen ist, muss jedes Element, das versucht, sie zu verwenden, eine Ersatzschriftart rendern. Wenn die Schriftart während dieser Periode erfolgreich geladen wird, wird sie normal verwendet.
- Schriftfehlperiode: Wenn die Schriftart nicht geladen ist, behandelt der User-Agent sie als fehlgeschlagenen Ladevorgang, der zu normalem Schriftart-Fallback führt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Ersatzschriftart-Anzeigen

```css
@font-face {
  font-family: ExampleFont;
  src:
    url(/path/to/fonts/examplefont.woff) format("woff"),
    url(/path/to/fonts/examplefont.eot) format("eot");
  font-weight: 400;
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

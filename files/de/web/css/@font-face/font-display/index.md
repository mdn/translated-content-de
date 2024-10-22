---
title: font-display
slug: Web/CSS/@font-face/font-display
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

Der **`font-display`** Deskriptor für die [`@font-face`](/de/docs/Web/CSS/@font-face) Regel bestimmt, wie eine Schriftart basierend darauf, ob und wann sie heruntergeladen und einsatzbereit ist, angezeigt wird.

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
  - : Die Strategie zur Anzeige der Schriftart wird vom Benutzeragenten definiert.
- `block`
  - : Gibt der Schriftart ein kurzes Sperrzeitfenster und ein unendliches Swap-Fenster.
- `swap`
  - : Gibt der Schriftart ein extrem kurzes Sperrzeitfenster und ein unendliches Swap-Fenster.
- `fallback`
  - : Gibt der Schriftart ein extrem kurzes Sperrzeitfenster und ein kurzes Swap-Fenster.
- `optional`
  - : Gibt der Schriftart ein extrem kurzes Sperrzeitfenster und kein Swap-Fenster.

> [!NOTE]
> In Firefox geben die Einstellungen `gfx.downloadable_fonts.fallback_delay`
> und `gfx.downloadable_fonts.fallback_delay_short` die Dauer der "kurzen" und "extrem kurzen" Zeiträume an.

## Beschreibung

Die Zeitleiste für die Schriftanzeige basiert auf einem Timer, der startet, sobald der Benutzeragent versucht, eine heruntergeladene Schriftart zu verwenden. Die Zeitleiste ist in die folgenden drei Perioden unterteilt, die das Renderverhalten von Elementen diktieren, die die Schriftart verwenden:

- Schriftblockperiode: Wenn die Schriftart nicht geladen ist, muss jedes Element, das versucht, sie zu verwenden, eine _unsichtbare_ Fallback-Schrift verwenden. Wenn die Schriftart während dieses Zeitraums erfolgreich geladen wird, wird sie normal verwendet.
- Schriftumtauschperiode: Wenn die Schriftart nicht geladen ist, muss jedes Element, das versucht, sie zu verwenden, eine Fallback-Schrift verwenden. Wenn die Schriftart während dieses Zeitraums erfolgreich geladen wird, wird sie normal verwendet.
- Schriftfehlerperiode: Wenn die Schriftart nicht geladen ist, behandelt der Benutzeragent sie als fehlgeschlagenen Ladevorgang und verursacht normales Schrift-Fallback.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Fallback für font-display spezifizieren

```css
@font-face {
  font-family: ExampleFont;
  src:
    url(/path/to/fonts/example-font.woff) format("woff"),
    url(/path/to/fonts/example-font.eot) format("eot");
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

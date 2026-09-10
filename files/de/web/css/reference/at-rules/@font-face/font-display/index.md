---
title: "`font-display`-CSS-At-Regel-Deskriptor"
short-title: font-display
slug: Web/CSS/Reference/At-rules/@font-face/font-display
l10n:
  sourceCommit: 91e08923c809ca8deded3e3294f49bbe1a4a00b3
---

Der **`font-display`**-Deskriptor für die {{cssxref("@font-face")}}-At-Regel bestimmt, wie eine Schriftart dargestellt wird, abhängig davon, ob und wann sie heruntergeladen und einsatzbereit ist.

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
  - : Die Strategie zur Darstellung der Schriftart wird durch den User-Agent definiert.
- `block`
  - : Gibt der Schriftart eine kurze Blockierungsperiode und eine unbegrenzte Austauschperiode.
- `swap`
  - : Gibt der Schriftart eine äußerst kurze Blockierungsperiode und eine unbegrenzte Austauschperiode.
- `fallback`
  - : Gibt der Schriftart eine äußerst kurze Blockierungsperiode und eine kurze Austauschperiode.
- `optional`
  - : Gibt der Schriftart eine äußerst kurze Blockierungsperiode und keine Austauschperiode.

> [!NOTE]
> In Firefox geben die Einstellungen `gfx.downloadable_fonts.fallback_delay`
> und `gfx.downloadable_fonts.fallback_delay_short` jeweils die Dauer
> der „kurzen“ und „äußerst kurzen“ Perioden an.

## Beschreibung

Die Zeitleiste für die Schriftdarstellung basiert auf einem Timer, der beginnt, sobald der User-Agent versucht, eine bestimmte heruntergeladene Schriftart zu verwenden. Die Zeitleiste ist in die folgenden drei Perioden unterteilt, die das Rendering-Verhalten aller Elemente bestimmen, welche die Schriftart verwenden:

- Schrift-Blockierungsperiode: Wenn die Schriftart nicht geladen ist, muss jedes Element, das versucht, sie zu verwenden, eine _unsichtbare_ Fallback-Schriftart rendern. Wenn die Schriftart während dieser Periode erfolgreich geladen wird, wird sie normal verwendet.
- Schrift-Austauschperiode: Wenn die Schriftart nicht geladen ist, muss jedes Element, das versucht, sie zu verwenden, eine Fallback-Schriftart rendern. Wenn die Schriftart während dieser Periode erfolgreich geladen wird, wird sie normal verwendet.
- Schriftfehlerperiode: Wenn die Schriftart nicht geladen ist, behandelt der User-Agent dies als fehlgeschlagenes Laden, was zu einem normalen Schrift-Fallback führt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Fallback-`font-display` angeben

```css
@font-face {
  font-family: "ExampleFont";
  src: url("/path/to/fonts/example-font.woff2") format("woff2");
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

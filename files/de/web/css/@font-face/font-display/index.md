---
title: font-display
slug: Web/CSS/@font-face/font-display
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`font-display`** Deskriptor für die [`@font-face`](/de/docs/Web/CSS/@font-face) At-Regel bestimmt, wie ein Schriftschnitt angezeigt wird, basierend darauf, ob und wann er heruntergeladen und einsatzbereit ist.

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
  - : Gibt dem Schriftschnitt eine kurze Blockierungsperiode und eine unendliche Austauschperiode.
- `swap`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockierungsperiode und eine unendliche Austauschperiode.
- `fallback`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockierungsperiode und eine kurze Austauschperiode.
- `optional`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockierungsperiode und keine Austauschperiode.

> [!NOTE]
> In Firefox legen die Einstellungen `gfx.downloadable_fonts.fallback_delay`
> und `gfx.downloadable_fonts.fallback_delay_short` die Dauer
> der "kurzen" und "extrem kurzen" Perioden fest.

## Beschreibung

Der Zeitplan für die Schriftanzeige basiert auf einem Timer, der ab dem Moment beginnt, in dem der Benutzeragent versucht, einen gegebenen heruntergeladenen Schriftschnitt zu verwenden. Der Zeitplan ist in die drei untenstehenden Perioden unterteilt, die das Renderverhalten von beliebigen Elementen diktieren, die den Schriftschnitt verwenden:

- Schriftblockierungsperiode: Ist der Schriftschnitt nicht geladen, muss jedes Element, das ihn verwenden möchte, eine _unsichtbare_ Ersatzschrift anzeigen. Wenn der Schriftschnitt während dieser Periode erfolgreich geladen wird, wird er normal verwendet.
- Schriftaustauschperiode: Ist der Schriftschnitt nicht geladen, muss jedes Element, das ihn verwenden möchte, eine Ersatzschrift anzeigen. Wenn der Schriftschnitt während dieser Periode erfolgreich geladen wird, wird er normal verwendet.
- Schriftfehlerperiode: Ist der Schriftschnitt nicht geladen, behandelt der Benutzeragent dies als fehlgeschlagene Ladung, was zu einem normalen Schriftersatz führt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des fallback font-display

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

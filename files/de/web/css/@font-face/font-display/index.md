---
title: font-display
slug: Web/CSS/@font-face/font-display
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Der **`font-display`** Deskriptor für die [`@font-face`](/de/docs/Web/CSS/@font-face) Regel bestimmt, wie ein Schriftschnitt angezeigt wird, basierend darauf, ob und wann er heruntergeladen und einsatzbereit ist.

## Syntax

```css
/* Schlüsselwortwerte */
font-display: auto;
font-display: block;
font-display: swap;
font-display: fallback;
font-display: optional;
```

### Werte

- `auto`
  - : Die Strategie zur Schriftanzeige wird durch den Benutzeragenten definiert.
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

Der Zeitablauf für die Schriftanzeige basiert auf einem Timer, der startet, sobald der Benutzeragent versucht, einen heruntergeladenen Schriftschnitt zu verwenden. Der Zeitablauf ist in die drei unten aufgeführten Perioden unterteilt, die das Renderverhalten aller Elemente bestimmen, die den Schriftschnitt verwenden:

- Schriftblockperiode: Ist der Schriftschnitt nicht geladen, muss jedes Element, das ihn verwenden möchte, eine _unsichtbare_ Ausweichschriftart rendern. Wenn der Schriftschnitt während dieser Periode erfolgreich geladen wird, wird er normal verwendet.
- Schriftwechselperiode: Ist der Schriftschnitt nicht geladen, muss jedes Element, das ihn verwenden möchte, eine Ausweichschriftart rendern. Wenn der Schriftschnitt während dieser Periode erfolgreich geladen wird, wird er normal verwendet.
- Schriftfehlerperiode: Ist der Schriftschnitt nicht geladen, behandelt der Benutzeragent dies als fehlgeschlagenen Ladevorgang, was zu einem normalen Schriftfalleback führt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Fallback font-display festlegen

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

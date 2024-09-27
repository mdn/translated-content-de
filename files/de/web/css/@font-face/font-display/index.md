---
title: font-display
slug: Web/CSS/@font-face/font-display
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

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
  - : Die Schriftanzeigestrategie wird vom Benutzeragenten definiert.
- `block`
  - : Verleiht dem Schriftschnitt eine kurze Blockperiode und eine unendliche Wechselperiode.
- `swap`
  - : Verleiht dem Schriftschnitt eine extrem kurze Blockperiode und eine unendliche Wechselperiode.
- `fallback`
  - : Verleiht dem Schriftschnitt eine extrem kurze Blockperiode und eine kurze Wechselperiode.
- `optional`
  - : Verleiht dem Schriftschnitt eine extrem kurze Blockperiode und keine Wechselperiode.

> [!NOTE]
> In Firefox geben die Einstellungen `gfx.downloadable_fonts.fallback_delay`
> und `gfx.downloadable_fonts.fallback_delay_short` die Dauer der "kurzen" und "extrem kurzen" Perioden an.

## Beschreibung

Der Zeitverlauf der Schriftanzeige basiert auf einem Timer, der beginnt, sobald der Benutzeragent versucht, einen heruntergeladenen Schriftschnitt zu verwenden. Der Zeitverlauf ist in die folgenden drei Perioden unterteilt, die das Rendering-Verhalten von Elementen diktieren, die den Schriftschnitt verwenden:

- Schriftblockperiode: Wenn der Schriftschnitt nicht geladen ist, muss jedes Element, das ihn verwenden möchte, eine _unsichtbare_ Ersatzschrift anzeigen. Wenn der Schriftschnitt während dieser Periode erfolgreich geladen wird, wird er normal verwendet.
- Schriftwechselperiode: Wenn der Schriftschnitt nicht geladen ist, muss jedes Element, das ihn verwenden möchte, eine Ersatzschrift anzeigen. Wenn der Schriftschnitt während dieser Periode erfolgreich geladen wird, wird er normal verwendet.
- Schriftfehlerperiode: Wenn der Schriftschnitt nicht geladen ist, behandelt der Benutzeragent ihn als fehlgeschlagenen Ladevorgang und löst ein normales Schrift-Fallback aus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Fallback font-display spezifizieren

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

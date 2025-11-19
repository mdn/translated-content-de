---
title: font-display
slug: Web/CSS/Reference/At-rules/@font-face/font-display
l10n:
  sourceCommit: 1dcf976e9b654679c762568812562b1a2361c755
---

Der **`font-display`** Deskriptor für die [`@font-face`](/de/docs/Web/CSS/Reference/At-rules/@font-face) at-Regel bestimmt, wie ein Schriftschnitt basierend darauf angezeigt wird, ob und wann er heruntergeladen und bereit zur Verwendung ist.

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
  - : Gibt dem Schriftschnitt eine kurze Blockperiode und eine unendliche Austauschperiode.
- `swap`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockperiode und eine unendliche Austauschperiode.
- `fallback`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockperiode und eine kurze Austauschperiode.
- `optional`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockperiode und keine Austauschperiode.

> [!NOTE]
> In Firefox bieten die Einstellungen `gfx.downloadable_fonts.fallback_delay`
> und `gfx.downloadable_fonts.fallback_delay_short` die Dauer der "kurzen" und "extrem kurzen" Perioden, entsprechend.

## Beschreibung

Der Zeitstrahl der Schriftanzeige basiert auf einem Timer, der startet, sobald der Benutzeragent versucht, einen gegebenen heruntergeladenen Schriftschnitt zu verwenden. Der Zeitstrahl ist in die folgenden drei Perioden unterteilt, die das Renderverhalten aller Elemente bestimmen, die den Schriftschnitt verwenden:

- Schrift-Blockperiode: Wenn der Schriftschnitt nicht geladen ist, muss jedes Element, das versucht, ihn zu verwenden, eine _unsichtbare_ Ersatzschrift rendern. Wird der Schriftschnitt während dieser Periode erfolgreich geladen, wird er normal verwendet.
- Schrift-Austauschperiode: Wenn der Schriftschnitt nicht geladen ist, muss jedes Element, das versucht, ihn zu verwenden, eine Ersatzschrift rendern. Wird der Schriftschnitt während dieser Periode erfolgreich geladen, wird er normal verwendet.
- Schrift-Ausfallperiode: Wenn der Schriftschnitt nicht geladen ist, behandelt der Benutzeragent dies als fehlgeschlagenes Laden, was zu einem normalen Schriftersatz führt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung von Fallback font-display

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

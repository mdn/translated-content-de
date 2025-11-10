---
title: font-display
slug: Web/CSS/Reference/At-rules/@font-face/font-display
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Der **`font-display`** Deskriptor für die [`@font-face`](/de/docs/Web/CSS/Reference/At-rules/@font-face) @-Regel bestimmt, wie ein Schriftschnitt angezeigt wird, basierend darauf, ob und wann er heruntergeladen und einsatzbereit ist.

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
  - : Die Strategie für die Schriftdarstellung wird durch den Benutzeragenten definiert.
- `block`
  - : Gibt dem Schriftschnitt eine kurze Blockperiode und eine unendliche Austauschperiode.
- `swap`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockperiode und eine unendliche Austauschperiode.
- `fallback`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockperiode und eine kurze Austauschperiode.
- `optional`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockperiode und keine Austauschperiode.

> [!NOTE]
> In Firefox legen die Einstellungen `gfx.downloadable_fonts.fallback_delay`
> und `gfx.downloadable_fonts.fallback_delay_short` die Dauer der "kurzen" bzw. "extrem kurzen" Perioden fest.

## Beschreibung

Die Zeitleiste für die Schriftanzeige basiert auf einem Timer, der ab dem Moment startet, in dem der Benutzeragent versucht, einen gegebenen heruntergeladenen Schriftschnitt zu verwenden. Die Zeitleiste ist in die drei unten aufgeführten Perioden unterteilt, die das Renderverhalten von Elementen bestimmen, die den Schriftschnitt verwenden:

- Schriftblockperiode: Wenn der Schriftschnitt nicht geladen ist, muss jedes Element, das versucht, ihn zu verwenden, eine _unsichtbare_ Ersatzschriftart rendern. Wenn der Schriftschnitt während dieser Periode erfolgreich geladen wird, wird er normal verwendet.
- Schriftauswechselperiode: Wenn der Schriftschnitt nicht geladen ist, muss jedes Element, das versucht, ihn zu verwenden, eine Ersatzschriftart rendern. Wenn der Schriftschnitt während dieser Periode erfolgreich geladen wird, wird er normal verwendet.
- Schriftfehlerperiode: Wird der Schriftschnitt nicht geladen, behandelt der Benutzeragent ihn als fehlgeschlagenen Ladevorgang und führt den normalen Schriftersatz aus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Fallback font-display angeben

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

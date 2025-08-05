---
title: font-display
slug: Web/CSS/@font-face/font-display
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Der **`font-display`** Deskriptor für die [`@font-face`](/de/docs/Web/CSS/@font-face) At-Regel bestimmt, wie eine Schriftart angezeigt wird, basierend darauf, ob und wann sie heruntergeladen und einsatzbereit ist.

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
  - : Die Schriftanzeigestrategie wird vom Benutzeragenten festgelegt.
- `block`
  - : Gibt der Schriftart eine kurze Blockperiode und eine unendliche Austauschperiode.
- `swap`
  - : Gibt der Schriftart eine extrem kurze Blockperiode und eine unendliche Austauschperiode.
- `fallback`
  - : Gibt der Schriftart eine extrem kurze Blockperiode und eine kurze Austauschperiode.
- `optional`
  - : Gibt der Schriftart eine extrem kurze Blockperiode und keine Austauschperiode.

> [!NOTE]
> In Firefox geben die Einstellungen `gfx.downloadable_fonts.fallback_delay` und `gfx.downloadable_fonts.fallback_delay_short` die Dauer der "kurzen" und "extrem kurzen" Perioden an.

## Beschreibung

Der Zeitablauf für die Schriftdarstellung basiert auf einem Timer, der startet, sobald der Benutzeragent versucht, eine heruntergeladene Schriftart zu verwenden. Der Zeitablauf ist in die drei unten aufgeführten Perioden unterteilt, die das Rendering-Verhalten von Elementen bestimmen, die die Schriftart verwenden:

- Schriftblockperiode: Wenn die Schriftart nicht geladen ist, muss jedes Element, das versucht, sie zu verwenden, eine _unsichtbare_ Ersatzschriftart rendern. Wird die Schriftart während dieser Periode erfolgreich geladen, wird sie normal verwendet.
- Schriftaustauschperiode: Wenn die Schriftart nicht geladen ist, muss jedes Element, das versucht, sie zu verwenden, eine Ersatzschriftart rendern. Wird die Schriftart in dieser Periode erfolgreich geladen, wird sie normal verwendet.
- Schriftfehlerperiode: Wenn die Schriftart nicht geladen ist, behandelt der Benutzeragent dies als fehlgeschlagenes Laden und löst eine normale Schriftfallerback aus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Rückfall-Schriftanzeige

```css
@font-face {
  font-family: ExampleFont;
  src:
    url("/path/to/fonts/example-font.woff") format("woff"),
    url("/path/to/fonts/example-font.eot") format("eot");
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

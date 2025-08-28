---
title: font-display
slug: Web/CSS/@font-face/font-display
l10n:
  sourceCommit: 7c5497422bc7ec41f0aa1caf940c2e1fd6083941
---

Der **`font-display`** Deskriptor für die [`@font-face`](/de/docs/Web/CSS/@font-face) Regel bestimmt, wie ein Schriftschnitt angezeigt wird, basierend darauf, ob und wann er heruntergeladen und gebrauchsfertig ist.

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
  - : Die Strategie zur Schriftanzeige wird vom Benutzeragenten definiert.
- `block`
  - : Gibt dem Schriftschnitt eine kurze Blockperiode und eine unbegrenzte Austauschperiode.
- `swap`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockperiode und eine unbegrenzte Austauschperiode.
- `fallback`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockperiode und eine kurze Austauschperiode.
- `optional`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockperiode und keine Austauschperiode.

> [!NOTE]
> In Firefox, die Einstellungen `gfx.downloadable_fonts.fallback_delay`
> und `gfx.downloadable_fonts.fallback_delay_short` geben die Dauer der
> "kurzen" bzw. "extrem kurzen" Perioden an.

## Beschreibung

Der Zeitablauf der Schriftanzeige basiert auf einem Timer, der ab dem Moment startet, in dem der Benutzeragent versucht, eine heruntergeladene Schriftart zu verwenden. Der Zeitablauf ist in die folgenden drei Perioden unterteilt, die das Anzeigeverhalten aller Elemente bestimmen, die die Schriftart verwenden:

- Schriftblockperiode: Ist die Schriftart nicht geladen, muss jedes Element, das versucht, sie zu verwenden, eine _unsichtbare_ Fallback-Schriftart rendern. Wird die Schriftart während dieser Periode erfolgreich geladen, wird sie normal verwendet.
- Schriftaustauschperiode: Ist die Schriftart nicht geladen, muss jedes Element, das versucht, sie zu verwenden, eine Fallback-Schriftart rendern. Wird die Schriftart während dieser Periode erfolgreich geladen, wird sie normal verwendet.
- Schriftfehlerperiode: Ist die Schriftart nicht geladen, behandelt der Benutzeragent sie als fehlgeschlagenes Laden, was zu einem normalen Schriftersatz führt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Angabe von font-display als Fallback

```css
@font-face {
  font-family: ExampleFont;
  src:
    url("/path/to/fonts/example-font.woff") format("woff"),
    url("/path/to/fonts/example-font.eot") format("embedded-opentype");
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

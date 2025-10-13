---
title: font-display
slug: Web/CSS/@font-face/font-display
l10n:
  sourceCommit: a3eec14af0580dad6eae65980686cee6cafc2c68
---

Der **`font-display`** Deskriptor für die [`@font-face`](/de/docs/Web/CSS/@font-face) at-Regel bestimmt, wie ein Schriftschnitt angezeigt wird, basierend darauf, ob und wann er heruntergeladen und einsatzbereit ist.

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
  - : Die Strategie der Schriftdarstellung wird vom User-Agent definiert.
- `block`
  - : Gibt dem Schriftschnitt eine kurze Blockperiode und eine unbegrenzte Wechselperiode.
- `swap`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockperiode und eine unbegrenzte Wechselperiode.
- `fallback`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockperiode und eine kurze Wechselperiode.
- `optional`
  - : Gibt dem Schriftschnitt eine extrem kurze Blockperiode und keine Wechselperiode.

> [!NOTE]
> In Firefox geben die Präferenzen `gfx.downloadable_fonts.fallback_delay`
> und `gfx.downloadable_fonts.fallback_delay_short` die Dauer
> der "kurzen" und "extrem kurzen" Perioden an.

## Beschreibung

Die Zeitleiste für die Schriftdarstellung basiert auf einem Timer, der gestartet wird, sobald der User-Agent versucht, einen gegebenen heruntergeladenen Schriftschnitt zu verwenden. Die Zeitleiste ist in die drei unten stehenden Perioden unterteilt, die das Anzeigeverhalten aller Elemente diktieren, die den Schriftschnitt verwenden:

- Schriftblockperiode: Wenn der Schriftschnitt nicht geladen ist, muss jedes Element, das versucht, ihn zu verwenden, eine _unsichtbare_ Fallback-Schrift anzeigen. Wenn der Schriftschnitt während dieser Periode erfolgreich geladen wird, wird er normal verwendet.
- Schriftwechselperiode: Wenn der Schriftschnitt nicht geladen ist, muss jedes Element, das versucht, ihn zu verwenden, eine Fallback-Schrift anzeigen. Wenn der Schriftschnitt während dieser Periode erfolgreich geladen wird, wird er normal verwendet.
- Schriftfehlerperiode: Wenn der Schriftschnitt nicht geladen ist, behandelt der User-Agent dies als fehlgeschlagenes Laden, was zu einem normalen Schriftfallback führt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung der Fallback-Schriftdarstellung

```css
@font-face {
  font-family: "ExampleFont";
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

---
title: font-feature-settings
slug: Web/CSS/@font-face/font-feature-settings
l10n:
  sourceCommit: 7e1296fc0722c86fb7e15487b5e9626597c7a2a0
---

Der **`font-feature-settings`** [CSS](/de/docs/Web/CSS) Deskriptor ermöglicht es Ihnen, die anfänglichen Einstellungen für die durch die {{cssxref("@font-face")}} At-Regel definierte Schriftart zu definieren. Sie können diesen Deskriptor weiter verwenden, um typografische Schriftmerkmale wie Ligaturen, Kapitälchen und Schwünge für die durch `@font-face` definierte Schriftart zu steuern. Die Werte für diesen Deskriptor sind die gleichen wie für die {{cssxref("font-feature-settings")}} Eigenschaft, mit Ausnahme der globalen Schlüsselwortwerte.

Da dieser Deskriptor die Merkmale auf dem Schriftobjekt in der `@font-face` At-Regel und nicht auf einem gesamten Element einstellt, können nur einige Glyphen in einem Element mit diesem Deskriptor gerendert werden.

## Syntax

```css
/* Use the default settings */
font-feature-settings: normal;

/* Set values for OpenType feature tags */
font-feature-settings: "smcp";
font-feature-settings: "smcp" on;
font-feature-settings: "swsh" 2;
```

### Werte

Dieser Deskriptor wird entweder als Schlüsselwort `normal` oder als kommaseparierte Liste von `<feature-tag-value>` Werten angegeben. Beim Rendern von Text wird die Liste der OpenType `<feature-tag-value>` Werte an die Textlayout-Engine übergeben, um Schriftmerkmale zu aktivieren oder zu deaktivieren.

- `normal`
  - : Gibt an, dass der Text mit den Standard-Schrifteinstellungen gesetzt wird. Dies ist der Standardwert.
- `<feature-tag-value>`
  - : Stellt ein leerzeichengetrenntes Tupel bestehend aus einem Tag-Namen und einem optionalen Wert dar.

    Der Tag-Name ist immer ein {{cssxref("&lt;string&gt;")}} aus vier {{Glossary("ASCII", "ASCII")}} Zeichen. Hat der Tag-Name mehr oder weniger Zeichen oder enthält er Zeichen außerhalb des `U+20` – `U+7E` Zeichencodierungsbereichs, so ist der Deskriptor ungültig.

    Der optionale Wert kann eine positive ganze Zahl oder das Schlüsselwort `on` oder `off` sein. Die Schlüsselwörter `on` und `off` sind Synonyme für die Werte `1` und `0`. Wenn kein Wert gesetzt ist, beträgt der Standardwert `1`. Für nicht-boolesche OpenType-Merkmale (z.B. [stylistic alternates](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-salt)) impliziert der Wert, dass ein bestimmtes Glyphen ausgewählt wird; für boolesche Merkmale schaltet der Wert das Merkmal ein oder aus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aktivieren von Swash-Glyphen mit der @font-face At-Regel

In diesem Beispiel werden der Tag-Name `swsh` und ein boolescher Wert `1` als Wert für den `font-feature-settings` Deskriptor in der `@font-face` At-Regel verwendet.

#### HTML

```html
<p class="swash-off">Swash is off here</p>
<p class="swash-on">Swash is on here</p>
```

#### CSS

```css
@font-face {
  font-family: MonteCarlo;
  src: url("/shared-assets/fonts/monte-carlo/monte-carlo-regular.woff2");
}
@font-face {
  font-family: MonteCarlo2;
  src: url("/shared-assets/fonts/monte-carlo/monte-carlo-regular.woff2");
  font-feature-settings: "swsh" 1;
}
p {
  font-size: 3rem;
  margin: 0.7rem 3rem;
}
.swash-off {
  font-family: MonteCarlo, cursive;
}
.swash-on {
  font-family: MonteCarlo2, cursive;
}
```

#### Ergebnis

{{EmbedLiveSample("Enabling swash glyphs using the @font-face rule", 0, 230)}}

Zeile 1 zeigt das standardmäßige verschnörkelte Design der [MonteCarlo](https://github.com/googlefonts/monte-carlo) Schriftart, und Zeile 2 zeigt die Ersetzung der Standard-Glyphen durch [swash](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-swsh) Glyphen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere `@font-face` Deskriptoren: {{cssxref("@font-face/font-family", "font-family")}}, {{cssxref("@font-face/font-style", "font-style")}}, {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}, {{cssxref("@font-face/font-weight", "font-weight")}}, {{cssxref("@font-face/src", "src")}}
- Verwandte Schrifteigenschaften: {{cssxref("font-feature-settings")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variation-settings")}}

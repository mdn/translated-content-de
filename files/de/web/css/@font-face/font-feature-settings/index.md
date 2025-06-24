---
title: font-feature-settings
slug: Web/CSS/@font-face/font-feature-settings
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Der **`font-feature-settings`** CSS-Deskriptor ermöglicht es Ihnen, die anfänglichen Einstellungen für die durch die {{cssxref("@font-face")}} At-Regel definierte Schriftart festzulegen. Sie können diesen Deskriptor auch verwenden, um typografische Schriftmerkmale wie Ligaturen, Kapitälchen und Schwungbuchstaben für die durch `@font-face` definierte Schriftart zu steuern. Die Werte für diesen Deskriptor sind dieselben wie für die {{cssxref("font-feature-settings")}} Eigenschaft, außer den globalen Schlüsselwortwerten.

Da dieser Deskriptor die Werte von Merkmalen auf das Schriftobjekt in der `@font-face` At-Regel anwendet und nicht auf ein gesamtes Element, können nur einige Glyphen in einem Element mit diesem Deskriptor dargestellt werden.

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

Dieser Deskriptor wird entweder durch das Schlüsselwort `normal` oder als kommaseparierte Liste von `<feature-tag-value>` Werten spezifiziert. Beim Rendern von Text wird die Liste der OpenType `<feature-tag-value>` Werte an die Textlayout-Engine übergeben, um Schriftmerkmale zu aktivieren oder zu deaktivieren.

- `normal`
  - : Zeigt an, dass der Text mit den Standardeinstellungen für Schriften ausgelegt wird. Dies ist der Standardwert.
- `<feature-tag-value>`

  - : Stellt ein durch Leerzeichen getrenntes Tupel dar, bestehend aus einem Tag-Namen und einem optionalen Wert.

    Der Tag-Name ist immer ein {{cssxref("&lt;string&gt;")}} aus vier {{Glossary("ASCII", "ASCII")}} Zeichen. Wenn der Tag-Name mehr oder weniger Zeichen hat oder Zeichen außerhalb des `U+20` – `U+7E` Bereichs enthält, ist der Deskriptor ungültig.

    Der optionale Wert kann eine positive ganze Zahl oder das Schlüsselwort `on` oder `off` sein. Die Schlüsselwörter `on` und `off` sind Synonyme für die Werte `1` und `0`. Wenn kein Wert gesetzt ist, ist der Standardwert `1`. Für nicht-boolesche OpenType-Funktionen (z.B. [stylistische Alternativen](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-salt)) impliziert der Wert ein bestimmtes Glyph zu wählen; für boolesche Funktionen aktiviert oder deaktiviert der Wert das Merkmal.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schwungbuchstaben mit der @font-face At-Regel aktivieren

In diesem Beispiel werden der Tag-Name `swsh` und ein boolescher Wert `1` als Wert für den Deskriptor `font-feature-settings` in der `@font-face` At-Regel verwendet.

#### HTML

```html
<p class="swash-off">Swash is off here</p>
<p class="swash-on">Swash is on here</p>
```

#### CSS

```css
@font-face {
  font-family: MonteCarlo;
  src: url("montecarlo-regular.woff2");
}
@font-face {
  font-family: MonteCarlo2;
  src: url("montecarlo-regular.woff2");
  font-feature-settings: "swsh" 1;
}
p {
  font-size: 3rem;
  margin: 0.7rem 3rem;
}
.swash-off {
  font-family: MonteCarlo;
}
.swash-on {
  font-family: MonteCarlo2;
}
```

#### Ergebnis

{{EmbedLiveSample("Enabling swash glyphs using the @font-face rule", 0, 230)}}

Zeile 1 zeigt das Standard-Schmuckdesign der [MonteCarlo](https://github.com/googlefonts/monte-carlo) Schriftart, und Zeile 2 zeigt, wie die Standardglyphen durch [Swash](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-swsh) Glyphen ersetzt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere `@font-face` Deskriptoren: {{cssxref("@font-face/font-family", "font-family")}}, {{cssxref("@font-face/font-style", "font-style")}}, {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}, {{cssxref("@font-face/font-weight", "font-weight")}}, {{cssxref("@font-face/src", "src")}}
- Verwandte Schrifteigenschaften: {{cssxref("font-feature-settings")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variation-settings")}}

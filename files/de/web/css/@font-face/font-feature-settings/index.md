---
title: font-feature-settings
slug: Web/CSS/@font-face/font-feature-settings
l10n:
  sourceCommit: 4c756bdfb0e0f65957946907e8f381047d8cbc60
---

Der **`font-feature-settings`** CSS-Deskriptor ermöglicht es Ihnen, die anfänglichen Einstellungen für die Schriftart festzulegen, die durch die {{cssxref("@font-face")}} at-Regel definiert wird. Sie können diesen Deskriptor verwenden, um typografische Schriftmerkmale wie Ligaturen, Kapitälchen und Schwünge für die durch `@font-face` definierte Schrift zu steuern. Die Werte für diesen Deskriptor sind dieselben wie für die {{cssxref("font-feature-settings")}}-Eigenschaft, abgesehen von den globalen Schlüsselwortwerten.

Da dieser Deskriptor die Merkmalswerte auf dem Schriftobjekt in der `@font-face` at-Regel festlegt und nicht auf einem gesamten Element, können nur einige Glyphen in einem Element unter Verwendung dieses Deskriptors gerendert werden.

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

Dieser Deskriptor wird entweder als das Schlüsselwort `normal` oder als eine kommagetrennte Liste von `<feature-tag-value>`-Werten spezifiziert. Beim Rendern von Text wird die Liste der OpenType-`<feature-tag-value>`-Werte an die Textlayout-Engine übergeben, um Schriftartenmerkmale zu aktivieren oder zu deaktivieren.

- `normal`
  - : Gibt an, dass der Text mit den Standardeinstellungen der Schriftart gesetzt wird. Dies ist der Standardwert.
- `<feature-tag-value>`
  - : Stellt ein durch Leerzeichen getrenntes Tupel dar, das aus einem Tag-Namen und einem optionalen Wert besteht.

    Der Tag-Name ist immer ein {{cssxref("&lt;string&gt;")}} von vier {{Glossary("ASCII", "ASCII")}}-Zeichen. Wenn der Tag-Name mehr oder weniger Zeichen hat oder Zeichen außerhalb des `U+20` – `U+7E` Codepunktbereichs enthält, ist der Deskriptor ungültig.

    Der optionale Wert kann eine positive ganze Zahl oder das Schlüsselwort `on` oder `off` sein. Die Schlüsselwörter `on` und `off` sind Synonyme für die Werte `1` und `0`. Wenn kein Wert festgelegt ist, ist der Standard `1`. Für nicht-primitive OpenType-Funktionen (z.B. [Alternativer Stil](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-salt)) impliziert der Wert ein bestimmtes zu wählendes Glyph; für boolesche Merkmale schaltet der Wert das Merkmal ein oder aus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schwung-Glyphen mit der @font-face-Regel aktivieren

In diesem Beispiel werden der Tag-Name `swsh` und ein boolescher Wert `1` als Wert für den `font-feature-settings`-Deskriptor in der `@font-face`-Regel verwendet.

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

Zeile 1 zeigt das standardmäßige verzierte Design der [MonteCarlo](https://github.com/googlefonts/monte-carlo) Schriftart, und Zeile 2 zeigt, wie die Standardglyphen durch [Schwung](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-swsh)-Glyphen ersetzt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere `@font-face` Deskriptoren: {{cssxref("@font-face/font-family", "font-family")}}, {{cssxref("@font-face/font-style", "font-style")}}, {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}, {{cssxref("@font-face/font-weight", "font-weight")}}, {{cssxref("@font-face/src", "src")}}
- Verwandte Schriftarteigenschaften: {{cssxref("font-feature-settings")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variation-settings")}}

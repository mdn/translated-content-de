---
title: font-feature-settings
slug: Web/CSS/@font-face/font-feature-settings
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`font-feature-settings`** CSS-Deskriptor ermöglicht es Ihnen, die anfänglichen Einstellungen für die Schriftart zu definieren, die durch die {{cssxref("@font-face")}}-Regel festgelegt wird. Sie können diesen Deskriptor weiter verwenden, um typografische Schriftmerkmale wie Ligaturen, Kapitälchen und Zierrat für die durch `@font-face` definierte Schriftart zu steuern. Die Werte für diesen Deskriptor entsprechen denen der {{cssxref("font-feature-settings")}}-Eigenschaft, mit Ausnahme der globalen Schlüsselwortwerte.

Da dieser Deskriptor die Feature-Werte auf das Schriftobjekt in der `@font-face`-Regel und nicht auf ein gesamtes Element setzt, kann es sein, dass nur einige Glyphen in einem Element mit diesem Deskriptor gerendert werden.

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

Dieser Deskriptor wird entweder als Schlüsselwort `normal` oder als kommagetrennte Liste von `<feature-tag-value>`-Werten angegeben. Beim Rendern von Text wird die Liste der OpenType-`<feature-tag-value>`-Werte an die Textlayout-Engine übergeben, um Schriftmerkmale zu aktivieren oder zu deaktivieren.

- `normal`
  - : Gibt an, dass Text mit den Standardeinstellungen der Schriftart gesetzt wird. Dies ist der Standardwert.
- `<feature-tag-value>`
  - : Repräsentiert ein leerzeichengetrenntes Tupel, das aus einem Tag-Namen und einem optionalen Wert besteht.

    Der Tag-Name ist immer eine {{cssxref("&lt;string&gt;")}} aus vier {{Glossary("ASCII", "ASCII")}}-Zeichen. Wenn der Tag-Name mehr oder weniger Zeichen hat oder Zeichen außerhalb des `U+20` – `U+7E` Codepoint-Bereichs enthält, ist der Deskriptor ungültig.

    Der optionale Wert kann eine positive Ganzzahl oder das Schlüsselwort `on` oder `off` sein. Die Schlüsselwörter `on` und `off` sind Synonyme für die Werte `1` bzw. `0`. Wenn kein Wert gesetzt wird, ist der Standardwert `1`. Bei nicht-booleschen OpenType-Features (z.B. [stylistische Alternativen](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-salt)) impliziert der Wert, dass ein bestimmtes Glyph ausgewählt wird; bei booleschen Features schaltet der Wert das Feature ein oder aus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aktivierung von Zierrat-Glyphen mit der @font-face-Regel

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
  font-family: MonteCarlo, cursive;
}
.swash-on {
  font-family: MonteCarlo2, cursive;
}
```

#### Ergebnis

{{EmbedLiveSample("Enabling swash glyphs using the @font-face rule", 0, 230)}}

Zeile 1 zeigt das Standard-Zierdesign der [MonteCarlo](https://github.com/googlefonts/monte-carlo) Schriftart, und Zeile 2 zeigt, dass die Standardglyphen durch [Zierrat](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-swsh) Glyphen ersetzt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere `@font-face` Deskriptoren: {{cssxref("@font-face/font-family", "font-family")}}, {{cssxref("@font-face/font-style", "font-style")}}, {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}, {{cssxref("@font-face/font-weight", "font-weight")}}, {{cssxref("@font-face/src", "src")}}
- Verwandte Schriftarten-Eigenschaften: {{cssxref("font-feature-settings")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variation-settings")}}

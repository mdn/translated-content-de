---
title: font-feature-settings
slug: Web/CSS/@font-face/font-feature-settings
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

Der **`font-feature-settings`** CSS-Deskriptor ermöglicht es Ihnen, die Anfangseinstellungen für die Schriftart festzulegen, die durch die {{cssxref("@font-face")}}-Regel definiert wird. Sie können diesen Deskriptor weiter nutzen, um typografische Schriftmerkmale wie Ligaturen, Kapitälchen und Zierschwünge für die durch `@font-face` definierte Schriftart zu steuern. Die Werte für diesen Deskriptor sind dieselben wie für die {{cssxref("font-feature-settings")}}-Eigenschaft, mit Ausnahme der globalen Schlüsselwortwerte.

Da dieser Deskriptor die Funktionswerte auf das Schriftobjekt in der `@font-face`-Regel und nicht auf ein gesamtes Element setzt, können nur einige Glyphen in einem Element unter Verwendung dieses Deskriptors gerendert werden.

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

Dieser Deskriptor wird entweder als Schlüsselwort `normal` oder als kommaseparierte Liste von `<feature-tag-value>` Werten angegeben. Beim Rendern von Text wird die Liste der OpenType `<feature-tag-value>` Werte an die Text-Layout-Engine übergeben, um Schriftmerkmale zu aktivieren oder zu deaktivieren.

- `normal`
  - : Zeigt an, dass der Text unter Verwendung der standardmäßigen Schrifteinstellungen gestaltet wird. Dies ist der Standardwert.
- `<feature-tag-value>`

  - : Stellt ein durch Leerzeichen getrenntes Tupel dar, das aus einem Tag-Namen und einem optionalen Wert besteht.

    Der Tag-Name ist immer ein {{cssxref("&lt;string&gt;")}} von vier {{Glossary("ASCII", "ASCII")}}-Zeichen. Wenn der Tag-Name mehr oder weniger Zeichen hat oder Zeichen außerhalb des `U+20` – `U+7E` Code-Punkt-Bereichs enthält, ist der Deskriptor ungültig.

    Der optionale Wert kann eine positive Ganzzahl oder das Schlüsselwort `on` oder `off` sein. Die Schlüsselwörter `on` und `off` sind Synonyme für die Werte `1` bzw. `0`. Wenn kein Wert festgelegt ist, beträgt der Standard `1`. Bei nicht-boolean OpenType-Merkmalen (z.B. [stilistische Alternativen](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-salt)) impliziert der Wert ein bestimmtes Glyphen zur Auswahl; bei boolean-Merkmalen schaltet der Wert das Merkmal ein oder aus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aktivieren von Zierschwüngen mithilfe der @font-face-Regel

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
  font-family: MonteCarlo;
}
.swash-on {
  font-family: MonteCarlo2;
}
```

#### Ergebnis

{{EmbedLiveSample("Enabling swash glyphs using the @font-face rule", 0, 230)}}

Zeile 1 zeigt das standardmäßige, verzierte Design der [MonteCarlo](https://github.com/googlefonts/monte-carlo)-Schriftart, und Zeile 2 zeigt, dass die Standardglyphen durch [Zierschwung](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-swsh)-Glyphen ersetzt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere `@font-face` Deskriptoren: {{cssxref("@font-face/font-family", "font-family")}}, {{cssxref("@font-face/font-style", "font-style")}}, {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}, {{cssxref("@font-face/font-weight", "font-weight")}}, {{cssxref("@font-face/src", "src")}}
- Verwandte Schriftsatz-Eigenschaften: {{cssxref("font-feature-settings")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variation-settings")}}

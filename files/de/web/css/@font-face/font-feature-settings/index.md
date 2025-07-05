---
title: font-feature-settings
slug: Web/CSS/@font-face/font-feature-settings
l10n:
  sourceCommit: 478517351c5aa97f8b878228da3b3a9b0fb90371
---

{{CSSRef}}

Der **`font-feature-settings`** CSS-Deskriptor erlaubt es Ihnen, die anfänglichen Einstellungen für die durch die {{cssxref("@font-face")}}-Regel definierte Schriftart festzulegen. Sie können diesen Deskriptor weiter verwenden, um typografische Schrifteigenschaften wie Ligaturen, Kapitälchen und Swashes für die über `@font-face` definierte Schriftart zu steuern. Die Werte für diesen Deskriptor sind die gleichen wie für die {{cssxref("font-feature-settings")}}-Eigenschaft, außer für die globalen Schlüsselwortwerte.

Da dieser Deskriptor Feature-Werte für das Schriftobjekt in der `@font-face`-Regel und nicht für ein ganzes Element festlegt, können nur einige Glyphen in einem Element mit diesem Deskriptor gerendert werden.

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

Dieser Deskriptor wird entweder als Schlüsselwort `normal` oder als kommagetrennte Liste von `<feature-tag-value>`-Werten angegeben. Beim Rendern des Textes wird die Liste der OpenType-`<feature-tag-value>`-Werte an die Textlayout-Engine übergeben, um Schriftfunktionen zu aktivieren oder zu deaktivieren.

- `normal`
  - : Zeigt an, dass der Text mit den Standardeinstellungen der Schriftart angelegt wird. Dies ist der Standardwert.
- `<feature-tag-value>`
  - : Stellt ein leerzeichengetrenntes Tupel dar, das aus einem Tag-Namen und einem optionalen Wert besteht.

    Der Tag-Name ist immer ein {{cssxref("&lt;string&gt;")}} aus vier {{Glossary("ASCII", "ASCII")}}-Zeichen. Wenn der Tag-Name mehr oder weniger Zeichen hat oder Zeichen außerhalb des `U+20` – `U+7E`-Codepunktbereichs enthält, ist der Deskriptor ungültig.

    Der optionale Wert kann eine positive Ganzzahl oder das Schlüsselwort `on` oder `off` sein. Die Schlüsselwörter `on` und `off` sind Synonyme für die Werte `1` und `0`. Wenn kein Wert festgelegt ist, ist der Standard `1`. Für nicht-booleanesche OpenType-Features (z. B. [stilistische Alternativen](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-salt)) impliziert der Wert eine bestimmte Glyphe, die ausgewählt werden soll; für booleanesche Features schaltet der Wert das Feature ein oder aus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Swash-Glyphen mit der @font-face-Regel aktivieren

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

{{EmbedLiveSample("Swash-Glyphen mit der @font-face-Regel aktivieren", 0, 230)}}

Zeile 1 zeigt das standardmäßige verzierte Design der [MonteCarlo](https://github.com/googlefonts/monte-carlo)-Schriftart, und Zeile 2 zeigt, dass die Standardglyphen durch [Swash](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-swsh)-Glyphen ersetzt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere `@font-face`-Deskriptoren: {{cssxref("@font-face/font-family", "font-family")}}, {{cssxref("@font-face/font-style", "font-style")}}, {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}, {{cssxref("@font-face/font-weight", "font-weight")}}, {{cssxref("@font-face/src", "src")}}
- Verwandte Schrifteigenschaften: {{cssxref("font-feature-settings")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variation-settings")}}

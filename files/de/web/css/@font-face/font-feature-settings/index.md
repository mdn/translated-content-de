---
title: font-feature-settings
slug: Web/CSS/@font-face/font-feature-settings
l10n:
  sourceCommit: 997a0ec66e1514b7269076195b2419db334e876e
---

{{CSSRef}}

Der CSS-Deskriptor **`font-feature-settings`** ermöglicht es Ihnen, die anfänglichen Einstellungen für die Schriftart, die mit der {{cssxref("@font-face")}}-Regel definiert wird, festzulegen. Mit diesem Deskriptor können Sie typografische Schriftmerkmale wie Ligaturen, Kapitälchen und dekorative Ausschmückungen für die mit `@font-face` definierte Schriftart steuern. Die Werte für diesen Deskriptor entsprechen denen der Eigenschaft {{cssxref("font-feature-settings")}}, mit Ausnahme der globalen Schlüsselwortwerte.

Da dieser Deskriptor Feature-Werte auf dem Schriftobjekt in der `@font-face`-Regel und nicht für ein gesamtes Element festlegt, können nur einige Glyphen in einem Element mithilfe dieses Deskriptors gerendert werden.

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

Dieser Deskriptor wird entweder als das Schlüsselwort `normal` oder als eine durch Kommas getrennte Liste von `<feature-tag-value>`-Werten angegeben. Beim Rendern von Text wird die Liste der OpenType-`<feature-tag-value>`-Werte an die Textlayout-Engine übergeben, um Schriftmerkmale zu aktivieren oder zu deaktivieren.

- `normal`
  - : Gibt an, dass Text mit standardmäßigen Schrifteinstellungen gesetzt wird. Dies ist der Standardwert.
- `<feature-tag-value>`

  - : Stellt ein durch Leerzeichen getrenntes Paar aus einem Tag-Namen und einem optionalen Wert dar.

    Der Tag-Name ist immer ein {{cssxref("&lt;string&gt;")}} von vier {{Glossary("ASCII", "ASCII")}}-Zeichen. Wenn der Tag-Name mehr oder weniger Zeichen hat oder Zeichen außerhalb des `U+20` – `U+7E` Codepunktbereichs enthält, ist der Deskriptor ungültig.

    Der optionale Wert kann eine positive ganze Zahl oder das Schlüsselwort `on` oder `off` sein. Die Schlüsselwörter `on` und `off` sind Synonyme für die Werte `1` und `0`. Wenn kein Wert gesetzt ist, ist der Standard `1`. Bei nicht-booleschen OpenType-Features (z. B. [stilistische Alternativen](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-salt)) impliziert der Wert, dass ein bestimmtes Glyphe ausgewählt wird; bei booleschen Features wird das Merkmal ein- oder ausgeschaltet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aktivieren von Swash-Glyphen mit der @font-face-Regel

In diesem Beispiel wird der Tag-Name `swsh` und ein boolescher Wert `1` als Wert für den `font-feature-settings`-Deskriptor in der `@font-face`-Regel verwendet.

#### HTML

```html
<p class="swashoff">Swash is off here</p>
<p class="swashon">Swash is on here</p>
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
.swashoff {
  font-family: MonteCarlo;
}
.swashon {
  font-family: MonteCarlo2;
}
```

#### Ergebnis

{{EmbedLiveSample("Enabling swash glyphs using the @font-face rule", 0, 230)}}

Zeile 1 zeigt das standardmäßige ornamentale Design der [MonteCarlo](https://github.com/googlefonts/monte-carlo)-Schriftart, und Zeile 2 zeigt, wie die Standardglyphen durch [Swash](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-swsh)-Glyphen ersetzt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere `@font-face`-Deskriptoren: {{cssxref("@font-face/font-family", "font-family")}}, {{cssxref("@font-face/font-style", "font-style")}}, {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}, {{cssxref("@font-face/font-weight", "font-weight")}}, {{cssxref("@font-face/src", "src")}}
- Verwandte Schrift-Eigenschaften: {{cssxref("font-feature-settings")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variation-settings")}}

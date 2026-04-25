---
title: "`font-feature-settings` CSS Attribut-Deskriptor"
short-title: font-feature-settings
slug: Web/CSS/Reference/At-rules/@font-face/font-feature-settings
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Der **`font-feature-settings`** [CSS](/de/docs/Web/CSS) Deskriptor ermöglicht Ihnen, die anfänglichen Einstellungen für die Schriftart zu definieren, die durch die {{cssxref("@font-face")}} Attributregel definiert wird. Sie können diesen Deskriptor weiter verwenden, um typografische Schriftmerkmale wie Ligaturen, Kapitälchen und Schnörkel für die durch `@font-face` definierte Schriftart zu steuern. Die Werte für diesen Deskriptor sind die gleichen wie für die {{cssxref("font-feature-settings")}} Eigenschaft, mit Ausnahme der globalen Schlüsselwortwerte.

Da dieser Deskriptor Feature-Werte am Schriftobjekt in der `@font-face` Attributregel setzt und nicht auf einem gesamten Element, können nur einige Glyphen in einem Element mithilfe dieses Deskriptors gerendert werden.

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

Dieser Deskriptor wird entweder als das Schlüsselwort `normal` oder als eine kommagetrennte Liste von `<feature-tag-value>` Werten angegeben. Beim Rendern von Text wird die Liste der OpenType `<feature-tag-value>` Werte an die Text-Layout-Engine übergeben, um Schriftfeatures zu aktivieren oder zu deaktivieren.

- `normal`
  - : Gibt an, dass Text mit den Standard-Schrifteinstellungen layoutet ist. Dies ist der Standardwert.
- `<feature-tag-value>`
  - : Stellt ein Leerzeichen-getrenntes Paar bestehend aus einem Tag-Namen und einem optionalen Wert dar.

    Der Tag-Name ist immer ein {{cssxref("&lt;string&gt;")}} mit vier {{Glossary("ASCII", "ASCII")}} Zeichen. Wenn der Tag-Name mehr oder weniger Zeichen hat oder Zeichen außerhalb des `U+20` – `U+7E` Code-Punkt-Bereichs enthält, ist der Deskriptor ungültig.

    Der optionale Wert kann eine positive Ganzzahl oder das Schlüsselwort `on` oder `off` sein. Die Schlüsselwörter `on` und `off` sind Synonyme für die Werte `1` und `0`. Wenn kein Wert gesetzt ist, beträgt der Standardwert `1`. Für nicht-boolesche OpenType-Features (z.B. [stilistische Alternativen](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-salt)) impliziert der Wert ein bestimmtes Glyphe, das ausgewählt werden soll; für boolesche Features schaltet der Wert das Feature ein oder aus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aktivierung von Schnörkel-Glyphen mithilfe der @font-face Regel

In diesem Beispiel werden der Tag-Name `swsh` und ein boolescher Wert `1` als Wert für den `font-feature-settings` Deskriptor in der `@font-face` Regel verwendet.

#### HTML

```html
<p class="swash-off">Swash is off here</p>
<p class="swash-on">Swash is on here</p>
```

#### CSS

```css
@font-face {
  font-family: "MonteCarlo";
  src: url("/shared-assets/fonts/monte-carlo/monte-carlo-regular.woff2");
}
@font-face {
  font-family: "MonteCarlo2";
  src: url("/shared-assets/fonts/monte-carlo/monte-carlo-regular.woff2");
  font-feature-settings: "swsh" 1;
}
p {
  font-size: 3rem;
  margin: 0.7rem 3rem;
}
.swash-off {
  font-family: "MonteCarlo", cursive;
}
.swash-on {
  font-family: "MonteCarlo2", cursive;
}
```

#### Ergebnis

{{EmbedLiveSample("Enabling swash glyphs using the @font-face rule", 0, 230)}}

Zeile 1 zeigt das Standardgeschmückte Design der [MonteCarlo](https://github.com/googlefonts/monte-carlo) Schriftart, und Zeile 2 zeigt die Standardglyphen, die durch [Schnörkel](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-swsh) Glyphen ersetzt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere `@font-face` Deskriptoren: {{cssxref("@font-face/font-family", "font-family")}}, {{cssxref("@font-face/font-style", "font-style")}}, {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}, {{cssxref("@font-face/font-weight", "font-weight")}}, {{cssxref("@font-face/src", "src")}}
- Verwandte Schriftart-Eigenschaften: {{cssxref("font-feature-settings")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variation-settings")}}

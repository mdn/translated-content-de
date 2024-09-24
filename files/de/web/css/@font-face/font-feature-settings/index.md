---
title: font-feature-settings
slug: Web/CSS/@font-face/font-feature-settings
l10n:
  sourceCommit: 997a0ec66e1514b7269076195b2419db334e876e
---

{{CSSRef}}

Der CSS-Deskriptor **`font-feature-settings`** ermöglicht es Ihnen, die anfänglichen Einstellungen für die durch die {{cssxref("@font-face")}}-At-Regel definierte Schriftart festzulegen. Mit diesem Deskriptor können Sie typografische Schrifteigenschaften wie Ligaturen, Kapitälchen und Schwünge für die durch `@font-face` definierte Schriftart steuern. Die Werte für diesen Deskriptor sind identisch mit der {{cssxref("font-feature-settings")}}-Eigenschaft, ausgenommen die globalen Schlüsselwortwerte.

Da dieser Deskriptor die Werte der Features auf dem Schriftobjekt in der `@font-face` Regel und nicht auf einem gesamten Element setzt, können nur einige Glyphen in einem Element mit diesem Deskriptor gerendert werden.

## Syntax

```css
/* Verwenden Sie die Standardeinstellungen */
font-feature-settings: normal;

/* Setzen Sie Werte für OpenType-Feature-Tags */
font-feature-settings: "smcp";
font-feature-settings: "smcp" on;
font-feature-settings: "swsh" 2;
```

### Werte

Dieser Deskriptor wird entweder als das Schlüsselwort `normal` oder als kommagetrennte Liste von `<feature-tag-value>` Werten angegeben. Beim Rendern von Text wird die Liste von OpenType `<feature-tag-value>` Werten an die Text-Layout-Engine übergeben, um Schriftmerkmale zu aktivieren oder zu deaktivieren.

- `normal`
  - : Gibt an, dass der Text mit den Standardeinstellungen der Schriftart gestaltet wird. Dies ist der Standardwert.
- `<feature-tag-value>`

  - : Repräsentiert ein leerzeichengetrenntes Tupel, das aus einem Tag-Namen und einem optionalen Wert besteht.

    Der Tag-Name ist immer ein {{cssxref("&lt;string&gt;")}} bestehend aus vier {{Glossary("ASCII")}}-Zeichen. Hat der Tag-Name mehr oder weniger Zeichen oder enthält er Zeichen außerhalb des `U+20` – `U+7E` Codepunktbereichs, ist der Deskriptor ungültig.

    Der optionale Wert kann eine positive ganze Zahl oder das Schlüsselwort `on` oder `off` sein. Die Schlüsselwörter `on` und `off` sind Synonyme für die Werte `1` und `0`. Wenn kein Wert gesetzt ist, ist der Standard `1`. Bei nicht-boolean OpenType Eigenschaften (z.B. [stylistische Alternativen](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-salt)) impliziert der Wert die Auswahl eines bestimmten Glyphs; bei boolean Eigenschaften schaltet der Wert das Merkmal ein oder aus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schwungglyphen mit der @font-face Regel aktivieren

In diesem Beispiel werden der Tag-Name `swsh` und ein boolean Wert `1` als Wert für den `font-feature-settings` Deskriptor in der `@font-face` Regel verwendet.

#### HTML

```html
<p class="swashoff">Schwung ist hier aus</p>
<p class="swashon">Schwung ist hier an</p>
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

Linie 1 zeigt das standardmäßige verschnörkelte Design der [MonteCarlo](https://github.com/googlefonts/monte-carlo) Schriftart, und Linie 2 zeigt die Ersetzung der Standardglyphen durch [Schwung](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-swsh) Glyphen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere `@font-face` Deskriptoren: {{cssxref("@font-face/font-family", "font-family")}}, {{cssxref("@font-face/font-style", "font-style")}}, {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}, {{cssxref("@font-face/font-weight", "font-weight")}}, {{cssxref("@font-face/src", "src")}}
- Verwandte Schrifteigenschaften: {{cssxref("font-feature-settings")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variation-settings")}}

---
title: CSS-Deskriptor `font-feature-settings` für @-Regeln
short-title: font-feature-settings
slug: Web/CSS/Reference/At-rules/@font-face/font-feature-settings
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Mit dem **`font-feature-settings`**-Deskriptor von [CSS](/de/docs/Web/CSS) können Sie die anfänglichen Einstellungen für die Schriftart festlegen, die durch die {{cssxref("@font-face")}}-@-Regel definiert wird. Außerdem können Sie damit typografische Merkmale dieser Schriftart steuern, etwa Ligaturen, Kapitälchen und Zierschwünge. Für diesen Deskriptor gelten dieselben Werte wie für die Eigenschaft {{cssxref("font-feature-settings")}}, mit Ausnahme der globalen Schlüsselwörter.

Da dieser Deskriptor Merkmalswerte für das Schriftobjekt in der `@font-face`-@-Regel festlegt und nicht für ein gesamtes Element, werden möglicherweise nur einige Glyphen eines Elements gemäß diesem Deskriptor gerendert.

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

Dieser Deskriptor wird entweder mit dem Schlüsselwort `normal` oder mit einer durch Kommas getrennten Liste von `<feature-tag-value>`-Werten angegeben. Beim Rendern von Text wird die Liste der OpenType-`<feature-tag-value>`-Werte an die Textlayout-Engine übergeben, um Schriftmerkmale zu aktivieren oder zu deaktivieren.

- `normal`
  - : Gibt an, dass für das Textlayout die Standardeinstellungen der Schriftart verwendet werden. Dies ist der Standardwert.
- `<feature-tag-value>`
  - : Stellt ein durch Leerzeichen getrenntes Wertepaar aus einem Tag-Namen und einem optionalen Wert dar.

    Der Tag-Name ist immer ein {{cssxref("&lt;string&gt;")}} aus vier {{Glossary("ASCII", "ASCII")}}-Zeichen. Hat er mehr oder weniger Zeichen oder enthält er Zeichen außerhalb des Codepunktbereichs `U+20` – `U+7E`, ist der Deskriptor ungültig.

    Der optionale Wert kann eine positive Ganzzahl oder das Schlüsselwort `on` oder `off` sein. Die Schlüsselwörter `on` und `off` entsprechen den Werten `1` beziehungsweise `0`. Wird kein Wert angegeben, gilt standardmäßig `1`. Bei nicht booleschen OpenType-Merkmalen (z. B. [stilistischen Alternativen](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-salt)) bestimmt der Wert, welche Glyphe ausgewählt wird. Bei booleschen Merkmalen aktiviert oder deaktiviert der Wert das Merkmal.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zierschwung-Glyphen mit der @font-face-@-Regel aktivieren

In diesem Beispiel werden der Tag-Name `swsh` und der boolesche Wert `1` als Wert für den Deskriptor `font-feature-settings` in der `@font-face`-@-Regel verwendet.

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

{{EmbedLiveSample("enabling_swash_glyphs_using_the_font-face_at-rule", 0, 230)}}

Zeile 1 zeigt die standardmäßige, verzierte Darstellung der Schriftart [MonteCarlo](https://github.com/googlefonts/monte-carlo). Zeile 2 zeigt, wie die Standardglyphen durch [Zierschwung-Glyphen](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-swsh) ersetzt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Weitere `@font-face`-Deskriptoren: {{cssxref("@font-face/font-family", "font-family")}}, {{cssxref("@font-face/font-style", "font-style")}}, {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}, {{cssxref("@font-face/font-weight", "font-weight")}}, {{cssxref("@font-face/src", "src")}}
- Verwandte Schrifteigenschaften: {{cssxref("font-feature-settings")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variation-settings")}}

---
title: font-feature-settings
slug: Web/CSS/Reference/At-rules/@font-face/font-feature-settings
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Der **`font-feature-settings`** [CSS](/de/docs/Web/CSS) Deskriptor erlaubt es, die initialen Einstellungen für die Schriftart festzulegen, die durch die {{cssxref("@font-face")}}-Regel definiert wird. Sie können diesen Deskriptor weiter verwenden, um typografische Schrifteigenschaften wie Ligaturen, Kapitälchen und Schwünge für die durch `@font-face` definierte Schriftart zu steuern. Die Werte für diesen Deskriptor sind dieselben wie für die {{cssxref("font-feature-settings")}}-Eigenschaft, mit Ausnahme der globalen Schlüsselwortwerte.

Da dieser Deskriptor Werte für Merkmale auf dem Schriftobjekt in der `@font-face`-Regel und nicht auf einem gesamten Element setzt, können nur einige Glyphen in einem Element unter Verwendung dieses Deskriptors gerendert werden.

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

Dieser Deskriptor wird entweder als Schlüsselwort `normal` oder als kommagetrennte Liste von `<feature-tag-value>`-Werten angegeben. Beim Rendern von Text wird die Liste von OpenType-`<feature-tag-value>`-Werten an die Textlayout-Engine übergeben, um Schrifteigenschaften zu aktivieren oder zu deaktivieren.

- `normal`
  - : Gibt an, dass der Text anhand der Standardeinstellungen der Schriftart ausgelegt wird. Dies ist der Standardwert.
- `<feature-tag-value>`
  - : Stellt ein durch Leerzeichen getrenntes Paar bestehend aus einem Tag-Namen und einem optionalen Wert dar.

    Der Tag-Name ist immer ein {{cssxref("&lt;string&gt;")}} aus vier {{Glossary("ASCII", "ASCII")}}-Zeichen. Wenn der Tag-Name mehr oder weniger Zeichen enthält oder Zeichen außerhalb des `U+20` – `U+7E` Code-Punkt-Bereichs enthält, ist der Deskriptor ungültig.

    Der optionale Wert kann eine positive ganze Zahl oder das Schlüsselwort `on` oder `off` sein. Die Schlüsselwörter `on` und `off` sind Synonyme für die Werte `1` und `0`. Wenn kein Wert festgelegt ist, ist der Standardwert `1`. Für nicht-boolesche OpenType-Funktionen (z.B. [stylistic alternates](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-salt)) impliziert der Wert die Auswahl eines bestimmten Glyphen. Für boolesche Funktionen aktiviert oder deaktiviert der Wert die Funktion.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aktivierung von Schwung-Glyphen mithilfe der @font-face Regel

In diesem Beispiel werden der Tag-Name `swsh` und ein boolescher Wert `1` als Wert für den `font-feature-settings`-Deskriptor in der `@font-face`-Regel verwendet.

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

Zeile 1 zeigt das standardmäßige, verzierte Design der [MonteCarlo](https://github.com/googlefonts/monte-carlo) Schriftart, und Zeile 2 zeigt die Standardglyphen, die durch [Schwung](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-swsh)-Glyphe ersetzt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere `@font-face` Deskriptoren: {{cssxref("@font-face/font-family", "font-family")}}, {{cssxref("@font-face/font-style", "font-style")}}, {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}, {{cssxref("@font-face/font-weight", "font-weight")}}, {{cssxref("@font-face/src", "src")}}
- Verwandte Schrifteigenschaften: {{cssxref("font-feature-settings")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variation-settings")}}

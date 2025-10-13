---
title: font-feature-settings
slug: Web/CSS/@font-face/font-feature-settings
l10n:
  sourceCommit: a3eec14af0580dad6eae65980686cee6cafc2c68
---

Der **`font-feature-settings`** [CSS](/de/docs/Web/CSS) Deskriptor ermöglicht Ihnen, die anfänglichen Einstellungen für die durch die {{cssxref("@font-face")}} At-Regel definierte Schriftart festzulegen. Sie können diesen Deskriptor weiter verwenden, um typografische Schriftfunktionen wie Ligaturen, Kapitälchen und Schwünge für die durch `@font-face` definierte Schriftart zu steuern. Die Werte für diesen Deskriptor sind dieselben wie für die {{cssxref("font-feature-settings")}} Eigenschaft, mit Ausnahme der globalen Schlüsselwortwerte.

Da dieser Deskriptor die Funktionswerte für das Schriftobjekt in der `@font-face` At-Regel und nicht auf einem gesamten Element festlegt, können nur einige Glyphen in einem Element mit diesem Deskriptor gerendert werden.

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

Dieser Deskriptor wird entweder als das Schlüsselwort `normal` oder als kommagetrennte Liste von `<feature-tag-value>` Werten angegeben. Beim Rendern von Text werden die Liste von OpenType `<feature-tag-value>` Werten an die Textlayout-Engine übergeben, um Schriftartenfunktionen zu aktivieren oder zu deaktivieren.

- `normal`
  - : Gibt an, dass der Text mit den Standard-Schrifteinstellungen layoutet wird. Dies ist der Standardwert.
- `<feature-tag-value>`
  - : Stellt ein durch Leerzeichen getrenntes Tupel dar, bestehend aus einem Tag-Namen und einem optionalen Wert.

    Der Tag-Name ist immer ein {{cssxref("&lt;string&gt;")}} aus vier {{Glossary("ASCII", "ASCII")}} Zeichen. Wenn der Tag-Name mehr oder weniger Zeichen hat oder Zeichen außerhalb des `U+20` – `U+7E` Codepunktspektrums enthält, ist der Deskriptor ungültig.

    Der optionale Wert kann eine positive Ganzzahl oder das Schlüsselwort `on` oder `off` sein. Die Schlüsselwörter `on` und `off` sind Synonyme für die Werte `1` und `0`. Wenn kein Wert festgelegt ist, ist der Standard `1`. Bei nicht-boolean OpenType-Funktionen (z. B. [stilistische Alternativen](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-salt)) impliziert der Wert die Auswahl eines bestimmten Glyphs; bei boolean Funktionen schaltet der Wert die Funktion ein oder aus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aktivieren von Schwungglyphen mit der @font-face Regel

In diesem Beispiel wird der Tag-Name `swsh` und ein boolescher Wert `1` als Wert für den `font-feature-settings` Deskriptor in der `@font-face` At-Regel verwendet.

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

Zeile 1 zeigt das standardmäßige verzierte Design der [MonteCarlo](https://github.com/googlefonts/monte-carlo) Schriftart, und Zeile 2 zeigt die Ersetzung der Standardglyphen durch [Schwung](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-swsh) Glyphen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere `@font-face` Deskriptoren: {{cssxref("@font-face/font-family", "font-family")}}, {{cssxref("@font-face/font-style", "font-style")}}, {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}, {{cssxref("@font-face/font-weight", "font-weight")}}, {{cssxref("@font-face/src", "src")}}
- Verwandte Schriftsatz-Eigenschaften: {{cssxref("font-feature-settings")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variation-settings")}}

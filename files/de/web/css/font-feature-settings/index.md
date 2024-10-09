---
title: font-feature-settings
slug: Web/CSS/font-feature-settings
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`font-feature-settings`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert erweiterte typografische Funktionen in OpenType-Schriften.

{{EmbedInteractiveExample("pages/css/font-feature-settings.html")}}

## Syntax

```css
/* Use the default settings */
font-feature-settings: normal;

/* Set values for OpenType feature tags */
font-feature-settings: "smcp";
font-feature-settings: "smcp" on;
font-feature-settings: "swsh" 2;
font-feature-settings:
  "smcp",
  "swsh" 2;

/* Global values */
font-feature-settings: inherit;
font-feature-settings: initial;
font-feature-settings: revert;
font-feature-settings: revert-layer;
font-feature-settings: unset;
```

Wann immer möglich, sollten Web-Autoren stattdessen die {{cssxref("font-variant")}} Kurzschreibweise oder eine dazugehörige Langform-Eigenschaft wie {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-numeric")}} oder {{cssxref("font-variant-position")}} verwenden.

Diese führen zu effektiveren, vorhersagbaren und verständlicheren Ergebnissen als `font-feature-settings`, das eine Low-Level-Funktion ist, die entwickelt wurde, um spezielle Fälle zu behandeln, in denen es keinen anderen Weg gibt, ein OpenType-Schriftmerkmal zu aktivieren oder darauf zuzugreifen. Insbesondere sollte `font-feature-settings` nicht verwendet werden, um Kapitälchen zu aktivieren.

### Werte

Diese Eigenschaft wird entweder als das Schlüsselwort `normal` oder als eine kommaseparierte Liste von `<feature-tag-value>` Werten angegeben. Beim Rendern von Text werden die Liste der OpenType `<feature-tag-value>` Werte an die Textlayout-Engine übergeben, um Schriftmerkmale zu aktivieren oder zu deaktivieren.

- `normal`
  - : Gibt an, dass Text mit den Standardeinstellungen der Schriftart formatiert wird. Dies ist der Standardwert.
- `<feature-tag-value>`

  - : Stellt ein durch Leerzeichen getrenntes Tupel dar, bestehend aus einem Tag-Namen und einem optionalen Wert.

    Der Tag-Name ist immer eine {{cssxref("&lt;string&gt;")}} von vier {{Glossary("ASCII", "ASCII")}} Zeichen. Wenn der Tag-Name mehr oder weniger Zeichen hat oder Zeichen außerhalb des `U+20` – `U+7E` Codepunktbereichs enthält, ist der Deskriptor ungültig.

    Der optionale Wert kann eine positive Ganzzahl oder das Schlüsselwort `on` oder `off` sein. Die Schlüsselwörter `on` und `off` sind Synonyme für die Werte `1` und `0`. Wenn kein Wert angegeben ist, ist der Standardwert `1`. Für nicht-boolesche OpenType-Funktionen (z. B. [stilistische Alternativen](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-salt)) impliziert der Wert die Auswahl eines bestimmten Glyphen; für boolesche Funktionen aktiviert oder deaktiviert der Wert die Funktion.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aktivierung verschiedener Schriftmerkmale

```css
/* use small-cap alternate glyphs */
.small-caps {
  font-feature-settings: "smcp" on;
}

/* convert both upper and lowercase to small caps (affects punctuation also) */
.all-small-caps {
  font-feature-settings: "c2sc", "smcp";
}

/* use zeros with a slash through them to differentiate from "O" */
.nice-zero {
  font-feature-settings: "zero";
}

/* enable historical forms */
.historical {
  font-feature-settings: "hist";
}

/* disable common ligatures, usually on by default */
.no-ligatures {
  font-feature-settings: "liga" 0;
}

/* enable tabular (monospaced) figures */
td.tabular {
  font-feature-settings: "tnum";
}

/* enable automatic fractions */
.fractions {
  font-feature-settings: "frac";
}

/* use the second available swash character */
.swash {
  font-feature-settings: "swsh" 2;
}

/* enable stylistic set 7 */
.fancy-style {
  font-family: Gabriola;
  font-feature-settings: "ss07";
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
- [Liste der OpenType Feature-Tags](https://learn.microsoft.com/en-us/typography/opentype/spec/featurelist)
- [OpenType-Funktionen in CSS](https://sparanoid.com/lab/opentype-features/)

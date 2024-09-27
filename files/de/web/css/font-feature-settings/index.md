---
title: font-feature-settings
slug: Web/CSS/font-feature-settings
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
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

Wann immer möglich, sollten Webautoren stattdessen die Kurzschreibweise {{cssxref("font-variant")}} oder eine zugehörige Langform-Eigenschaft wie {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-numeric")}} oder {{cssxref("font-variant-position")}} verwenden.

Diese führen zu effektiveren, vorhersehbareren und verständlicheren Ergebnissen als `font-feature-settings`, welches ein Low-Level-Feature ist, das darauf ausgelegt ist, Sonderfälle zu handhaben, in denen es keine andere Möglichkeit gibt, um ein OpenType-Schriftmerkmal zu aktivieren oder darauf zuzugreifen. Insbesondere sollte `font-feature-settings` nicht verwendet werden, um Kapitälchen zu aktivieren.

### Werte

Diese Eigenschaft wird entweder als das Schlüsselwort `normal` oder als eine durch Kommas getrennte Liste von `<feature-tag-value>`-Werten angegeben. Beim Rendern von Text wird die Liste der OpenType `<feature-tag-value>`-Werte an die Textlayout-Engine übergeben, um Schriftmerkmale zu aktivieren oder zu deaktivieren.

- `normal`
  - : Gibt an, dass der Text mit den Standardeinstellungen der Schrift layoutet wird. Dies ist der Standardwert.
- `<feature-tag-value>`

  - : Stellt ein leerzeichengetrenntes Tupel dar, das aus einem Tag-Namen und einem optionalen Wert besteht.

    Der Tag-Name ist immer ein {{cssxref("&lt;string&gt;")}} von vier [ASCII](/de/docs/Glossary/ASCII)-Zeichen. Wenn der Tag-Name mehr oder weniger Zeichen aufweist oder Zeichen außerhalb des `U+20` – `U+7E`-Codepunktbereichs enthält, ist der Deskriptor ungültig.

    Der optionale Wert kann eine positive ganze Zahl oder das Schlüsselwort `on` oder `off` sein. Die Schlüsselwörter `on` und `off` sind Synonyme für die Werte `1` und `0`. Wenn kein Wert gesetzt ist, ist der Standardwert `1`. Bei nicht-boolean OpenType-Features (z.B. [stilistische Alternativen](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-salt)) impliziert der Wert die Auswahl eines bestimmten Glyphs; bei boolean Features schaltet der Wert das Feature ein oder aus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aktivieren verschiedener Schriftfunktionen

```css
/* use small-cap alternate glyphs */
.smallcaps {
  font-feature-settings: "smcp" on;
}

/* convert both upper and lowercase to small caps (affects punctuation also) */
.allsmallcaps {
  font-feature-settings: "c2sc", "smcp";
}

/* use zeros with a slash through them to differentiate from "O" */
.nicezero {
  font-feature-settings: "zero";
}

/* enable historical forms */
.hist {
  font-feature-settings: "hist";
}

/* disable common ligatures, usually on by default */
.noligs {
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
.fancystyle {
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
- [OpenType-Feature-Tags](https://learn.microsoft.com/en-us/typography/opentype/spec/featurelist) Liste
- [OpenType Features in CSS](https://sparanoid.com/lab/opentype-features/)

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
/* Verwenden Sie die Standardeinstellungen */
font-feature-settings: normal;

/* Werte für OpenType-Feature-Tags festlegen */
font-feature-settings: "smcp";
font-feature-settings: "smcp" on;
font-feature-settings: "swsh" 2;
font-feature-settings:
  "smcp",
  "swsh" 2;

/* Globale Werte */
font-feature-settings: inherit;
font-feature-settings: initial;
font-feature-settings: revert;
font-feature-settings: revert-layer;
font-feature-settings: unset;
```

Wann immer möglich, sollten Web-Entwickler stattdessen die {{cssxref("font-variant")}} Kurzschreibweise oder eine zugehörige Langform wie {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-numeric")}} oder {{cssxref("font-variant-position")}} verwenden.

Diese führen zu effektiveren, vorhersehbareren und verständlicheren Ergebnissen als `font-feature-settings`, das eine niedrigstufige Funktion ist, die entwickelt wurde, um Sonderfälle zu behandeln, in denen es keine andere Möglichkeit gibt, ein OpenType-Schriftmerkmal zu aktivieren oder darauf zuzugreifen. Insbesondere sollte `font-feature-settings` nicht verwendet werden, um Kapitälchen zu aktivieren.

### Werte

Diese Eigenschaft wird entweder als das Schlüsselwort `normal` oder als kommagetrennte Liste von `<feature-tag-value>` Werten angegeben. Beim Rendern von Text wird die Liste der OpenType `<feature-tag-value>` Werte an die Textlayout-Engine übergeben, um Schriftmerkmale zu aktivieren oder zu deaktivieren.

- `normal`
  - : Gibt an, dass Text mit den Standardeinstellungen der Schrift gestaltet wird. Dies ist der Standardwert.
- `<feature-tag-value>`

  - : Stellt ein durch Leerzeichen getrenntes Tupel dar, das aus einem Tag-Namen und einem optionalen Wert besteht.

    Der Tag-Name ist immer ein {{cssxref("&lt;string&gt;")}} aus vier {{Glossary("ASCII")}} Zeichen. Wenn der Tag-Name mehr oder weniger Zeichen hat oder Zeichen außerhalb des Code-Punkt-Bereichs `U+20` bis `U+7E` enthält, ist der Deskriptor ungültig.

    Der optionale Wert kann eine positive Ganzzahl oder das Schlüsselwort `on` oder `off` sein. Die Schlüsselwörter `on` und `off` sind Synonyme für die Werte `1` und `0`. Wenn kein Wert festgelegt ist, lautet der Standard `1`. Für nicht-boolesche OpenType-Funktionen (z.B. [stylistische Alternativen](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-salt)) impliziert der Wert die Auswahl eines bestimmten Glyphen; für boolesche Funktionen aktiviert oder deaktiviert der Wert die Funktion.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aktivieren verschiedener Schriftfunktionen

```css
/* Verwendung von alternativen kleinen Buchstaben */
.smallcaps {
  font-feature-settings: "smcp" on;
}

/* Sowohl Groß- als auch Kleinbuchstaben in Kapitälchen umwandeln (betrifft auch Satzzeichen) */
.allsmallcaps {
  font-feature-settings: "c2sc", "smcp";
}

/* Nullen mit einem Schrägstrich verwenden, um sie von "O" zu unterscheiden */
.nicezero {
  font-feature-settings: "zero";
}

/* Historische Formen aktivieren */
.hist {
  font-feature-settings: "hist";
}

/* Häufige Ligaturen deaktivieren, die normalerweise standardmäßig aktiviert sind */
.noligs {
  font-feature-settings: "liga" 0;
}

/* Tabellarische (monospace) Zahlen aktivieren */
td.tabular {
  font-feature-settings: "tnum";
}

/* Automatische Brüche aktivieren */
.fractions {
  font-feature-settings: "frac";
}

/* Den zweiten verfügbaren Schwungbuchstaben verwenden */
.swash {
  font-feature-settings: "swsh" 2;
}

/* Stilistische Satz 7 aktivieren */
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
- [Liste der OpenType Feature-Tags](https://learn.microsoft.com/en-us/typography/opentype/spec/featurelist)
- [OpenType-Funktionen in CSS](https://sparanoid.com/lab/opentype-features/)

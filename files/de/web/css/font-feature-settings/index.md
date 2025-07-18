---
title: font-feature-settings
slug: Web/CSS/font-feature-settings
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`font-feature-settings`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert fortgeschrittene typografische Merkmale in OpenType-Schriften.

{{InteractiveExample("CSS Demo: font-feature-settings")}}

```css interactive-example-choice
font-feature-settings: normal;
```

```css interactive-example-choice
font-feature-settings: "liga" 0;
```

```css interactive-example-choice
font-feature-settings: "tnum";
```

```css interactive-example-choice
font-feature-settings: "smcp", "zero";
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>Difficult waffles</p>
    <table>
      <tr>
        <td><span class="tabular">0O</span></td>
      </tr>
      <tr>
        <td><span class="tabular">3.14</span></td>
      </tr>
      <tr>
        <td><span class="tabular">2.71</span></td>
      </tr>
    </table>
  </div>
</section>
```

```css interactive-example
@font-face {
  font-family: "Fira Sans";
  src:
    local("FiraSans-Regular"),
    url("/shared-assets/fonts/FiraSans-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

section {
  font-family: "Fira Sans", sans-serif;
  margin-top: 10px;
  font-size: 1.5em;
}

#example-element table {
  margin-left: auto;
  margin-right: auto;
}

.tabular {
  border: 1px solid;
}
```

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

Wann immer möglich, sollten Web-Autoren stattdessen die Kurzschreibweise der Eigenschaft {{cssxref("font-variant")}} oder eine zugehörige ausführliche Eigenschaft wie {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-numeric")}} oder {{cssxref("font-variant-position")}} verwenden.

Diese führen zu effektiveren, vorhersagbaren und verständlicheren Ergebnissen als `font-feature-settings`, das eine niedrige Funktion ist, die für Sonderfälle entwickelt wurde, in denen es keine andere Möglichkeit gibt, ein OpenType-Schriftmerkmal zu aktivieren oder darauf zuzugreifen. Insbesondere sollte `font-feature-settings` nicht verwendet werden, um Kapitälchen zu aktivieren.

### Werte

Diese Eigenschaft wird entweder mit dem Schlüsselwort `normal` oder als durch Kommas getrennte Liste von `<feature-tag-value>` Werten angegeben. Beim Rendern von Text wird die Liste der OpenType `<feature-tag-value>` Werte an die Text-Layout-Engine übergeben, um Schriftmerkmale zu aktivieren oder zu deaktivieren.

- `normal`
  - : Gibt an, dass Text unter Verwendung von Standard-Schrifteinstellungen layoutet wird. Dies ist der Standardwert.
- `<feature-tag-value>`
  - : Repräsentiert ein durch Leerzeichen getrenntes Tupel, das aus einem Tag-Namen und einem optionalen Wert besteht.

    Der Tag-Name ist immer eine {{cssxref("&lt;string&gt;")}} aus vier {{Glossary("ASCII", "ASCII")}} Zeichen. Wenn der Tag-Name mehr oder weniger Zeichen hat oder Zeichen außerhalb des `U+20` – `U+7E` Codepunktbereichs enthält, ist der Deskriptor ungültig.

    Der optionale Wert kann eine positive Ganzzahl oder das Schlüsselwort `on` oder `off` sein. Die Schlüsselwörter `on` und `off` sind Synonyme für die Werte `1` und `0`. Wenn kein Wert festgelegt ist, ist der Standard `1`. Für nicht-boolesche OpenType-Merkmale (z.B. [stylistic alternates](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-salt)) impliziert der Wert, dass ein bestimmtes Glyph gewählt wird; für boolesche Merkmale schaltet der Wert das Merkmal ein oder aus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aktivieren verschiedener Schriftmerkmale

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
  font-family: Gabriola, cursive;
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
- [OpenType feature tags](https://learn.microsoft.com/en-us/typography/opentype/spec/featurelist) Liste
- [OpenType features in CSS](https://sparanoid.com/lab/opentype-features/)

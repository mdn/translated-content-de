---
title: "`font-variant-caps` CSS property"
short-title: font-variant-caps
slug: Web/CSS/Reference/Properties/font-variant-caps
l10n:
  sourceCommit: a5531a7b1fa30ab1de952ffff619a9830eb1c1a9
---

Die **`font-variant-caps`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert die Verwendung alternativer Glyphen für kleine oder zierliche Großbuchstaben oder für Überschriften.

{{InteractiveExample("CSS Demo: font-variant-caps")}}

```css interactive-example-choice
font-variant-caps: normal;
```

```css interactive-example-choice
font-variant-caps: small-caps;
```

```css interactive-example-choice
font-variant-caps: all-small-caps;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>Difficult waffles</p>
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
```

## Syntax

```css
/* Keyword values */
font-variant-caps: normal;
font-variant-caps: small-caps;
font-variant-caps: all-small-caps;
font-variant-caps: petite-caps;
font-variant-caps: all-petite-caps;
font-variant-caps: unicase;
font-variant-caps: titling-caps;

/* Global values */
font-variant-caps: inherit;
font-variant-caps: initial;
font-variant-caps: revert;
font-variant-caps: revert-layer;
font-variant-caps: unset;
```

### Werte

Diese Eigenschaft wird als eines der folgenden Schlüsselwortwerte angegeben:

- `normal`
  - : Deaktiviert die Verwendung alternativer Glyphen.
- `small-caps`
  - : Aktiviert die Anzeige von Kapitälchen (OpenType-Feature: `smcp`). Kapitälchen-Glyphen verwenden typischerweise die Form von Großbuchstaben, werden jedoch in derselben Größe wie Kleinbuchstaben angezeigt.
- `all-small-caps`
  - : Aktiviert die Anzeige von Kapitälchen sowohl für Groß- als auch Kleinbuchstaben (OpenType-Features: `c2sc`, `smcp`).
- `petite-caps`
  - : Aktiviert die Anzeige von zierlichen Großbuchstaben (OpenType-Feature: `pcap`).
- `all-petite-caps`
  - : Aktiviert die Anzeige von zierlichen Großbuchstaben sowohl für Groß- als auch Kleinbuchstaben (OpenType-Features: `c2pc`, `pcap`).
- `unicase`
  - : Aktiviert die Anzeige einer Mischung aus Kapitälchen für Großbuchstaben mit normalen Kleinbuchstaben (OpenType-Feature: `unic`).
- `titling-caps`
  - : Aktiviert die Anzeige von Überschriftengroßbuchstaben (OpenType-Feature: `titl`). Großbuchstabenglyphen werden oft für die Verwendung mit Kleinbuchstaben entworfen. Wenn sie in allen Großbuchstaben-Überschriftenfolgen verwendet werden, können sie zu stark erscheinen. Überschriftengroßbuchstaben sind speziell für diese Situation entworfen.

## Beschreibung

Die `font-variant-caps`-Eigenschaft steuert die Verwendung alternativer Glyphen für kleine oder zierliche Großbuchstaben oder für Überschriften.

Wenn eine Schriftart Großbuchstabenglyphen in mehreren unterschiedlichen Größen umfasst, wählt diese Eigenschaft die am besten geeigneten aus. Wenn zierliche Großbuchstabenglyphen nicht verfügbar sind, werden sie mit Kapitälchenglyphen gerendert. Sind auch diese nicht vorhanden, synthetisiert der Browser sie aus den Großbuchstabenglyphen.

Der Wert ist ein einzelnes Schlüsselwort. Für jeden Wert, wenn die Schriftart das OpenType-Feature nicht unterstützt, dann werden die Glyphen synthetisiert. Schriftarten beinhalten manchmal spezielle Glyphen für verschiedene zeichenlose Zeichen (wie Satzzeichen), um die besser zu den umgebenden Großbuchstaben passen. Allerdings werden Kapitälchenglyphen niemals für zeichenlose Zeichen synthetisiert.

### Sprachspezifische Regeln

Diese Eigenschaft berücksichtigt sprachspezifische Regeln zur Groß- und Kleinschreibung. Beispielsweise:

- In Turksprachen, wie Türkisch (tr), Aserbaidschanisch (az), Krimtatarisch (crh), Wolgatatarisch (tt) und Baschkirisch (ba), gibt es zwei Arten von `i` (eines mit Punkt, eines ohne) und zwei Paarungen von Groß- und Kleinbuchstaben: `i`/`İ` und `ı`/`I`.
- Im Deutschen (de) kann `ß` zu `ẞ` (U+1E9E) in Großbuchstaben werden.
- Im Griechischen (el) verlieren Vokale ihre Akzentuierung, wenn das ganze Wort in Großbuchstaben ist (`ά`/`Α`), außer beim disjunktiven Eta (`ή`/`Ή`). Auch Diphthonge mit einem Akzent auf dem ersten Vokal verlieren den Akzent und erhalten ein Diakritikum auf dem zweiten Vokal (`άι`/`ΑΪ`).

## Barrierefreiheit

Große Textabschnitte, die mit einem `font-variant`-Wert von `all-small-caps` oder `all-petite-caps` gesetzt sind, können für Personen mit kognitiven Schwierigkeiten wie Legasthenie schwer zu lesen sein.

- [MDN Verständnis von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis von WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/#visual-presentation)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Schriftvarianten-Kapitälchen

#### HTML

```html
<p class="small-caps">Firefox rocks, small caps!</p>
<p class="normal">Firefox rocks, normal caps!</p>
```

#### CSS

```css
.small-caps {
  font-variant-caps: small-caps;
  font-style: italic;
}
.normal {
  font-variant-caps: normal;
  font-style: italic;
}
```

#### Ergebnis

{{ EmbedLiveSample('Setting_the_small-caps_font_variant') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-variant")}}
- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-emoji")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-position")}}

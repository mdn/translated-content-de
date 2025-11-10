---
title: font-variant-caps
slug: Web/CSS/Reference/Properties/font-variant-caps
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`font-variant-caps`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung alternativer Glyphen für kleine oder Petite-Großbuchstaben oder für Titelschriften.

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

Wenn eine gegebene Schriftart Großbuchstabenglyphen in mehreren verschiedenen Größen enthält, wählt diese Eigenschaft die am besten geeigneten aus. Wenn Petite-Großbuchstabenglyphen nicht verfügbar sind, werden sie mit kleinen Großbuchstabenglyphen dargestellt. Wenn diese nicht vorhanden sind, werden sie vom Browser aus den Großbuchstabenglyphen synthetisiert.

Schriftarten enthalten manchmal spezielle Glyphen für verschiedene zeichenlose Zeichen (wie Satzzeichen), um besser zu den umgebenden Großbuchstaben zu passen. Kleine Großbuchstabenglyphen werden jedoch nie für zeichenlose Zeichen synthetisiert.

### Sprachspezifische Regeln

Diese Eigenschaft berücksichtigt sprachspezifische Regeln zur Umwandlung von Buchstaben. Zum Beispiel:

- In türkischen Sprachen wie Türkisch (tr), Aserbaidschanisch (az), Krimtatarisch (crh), Wolga-Tatarisch (tt) und Baschkirisch (ba) gibt es zwei Arten von `i` (eines mit Punkt, eines ohne) und zwei Groß-/Kleinschreibungspaarungen: `i`/`İ` und `ı`/`I`.
- Im Deutschen (de) kann das `ß` zu `ẞ` (U+1E9E) im Großbuchstaben werden.
- Im Griechischen (el) verlieren Vokale ihren Akzent, wenn das ganze Wort in Großbuchstaben steht (`ά`/`Α`), außer beim disjunktiven Eta (`ή`/`Ή`). Auch verlieren Diphthonge mit einem Akzent auf dem ersten Vokal den Akzent und erhalten ein diakritisches Zeichen auf dem zweiten Vokal (`άι`/`ΑΪ`).

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

Die `font-variant-caps` Eigenschaft wird mit einem einzelnen Schlüsselwortwert aus der untenstehenden Liste spezifiziert. In jedem Fall, wenn die Schriftart den OpenType-Wert nicht unterstützt, werden die Glyphen synthetisiert.

### Werte

- `normal`
  - : Deaktiviert die Verwendung alternativer Glyphen.
- `small-caps`
  - : Ermöglicht die Anzeige von kleinen Großbuchstaben (OpenType-Funktion: `smcp`). Kleine Großbuchstabenglyphen nutzen typischerweise die Form von Großbuchstaben, werden aber in der gleichen Größe wie Kleinbuchstaben angezeigt.
- `all-small-caps`
  - : Ermöglicht die Anzeige von kleinen Großbuchstaben für sowohl Groß- als auch Kleinbuchstaben (OpenType-Funktionen: `c2sc`, `smcp`).
- `petite-caps`
  - : Ermöglicht die Anzeige von Petite-Großbuchstaben (OpenType-Funktion: `pcap`).
- `all-petite-caps`
  - : Ermöglicht die Anzeige von Petite-Großbuchstaben für sowohl Groß- als auch Kleinbuchstaben (OpenType-Funktionen: `c2pc`, `pcap`).
- `unicase`
  - : Ermöglicht die Anzeige einer Mischung aus kleinen Großbuchstaben für Großbuchstaben mit normalen Kleinbuchstaben (OpenType-Funktion: `unic`).
- `titling-caps`
  - : Ermöglicht die Anzeige von Titelschriften in Großbuchstaben (OpenType-Funktion: `titl`). Großbuchstabenglyphen sind oft so gestaltet, dass sie mit Kleinbuchstaben verwendet werden. Wenn sie in komplett großbuchstabigen Titelsequenzen verwendet werden, können sie zu stark wirken. Titelschriften wurden speziell für diese Situation entworfen.

## Barrierefreiheit

Große Textabschnitte, die mit einem `font-variant`-Wert von `all-small-caps` oder `all-petite-caps` gesetzt sind, können für Menschen mit kognitiven Beeinträchtigungen wie Legasthenie schwer lesbar sein.

- [MDN Verständnis von WCAG, Erklärung der Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis von WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/#visual-presentation)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung der Schriftvariante small-caps

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

- [`font-variant`](/de/docs/Web/CSS/Reference/Properties/font-variant)
- [`font-variant-alternates`](/de/docs/Web/CSS/Reference/Properties/font-variant-alternates)
- [`font-variant-east-asian`](/de/docs/Web/CSS/Reference/Properties/font-variant-east-asian)
- [`font-variant-emoji`](/de/docs/Web/CSS/Reference/Properties/font-variant-emoji)
- [`font-variant-ligatures`](/de/docs/Web/CSS/Reference/Properties/font-variant-ligatures)
- [`font-variant-numeric`](/de/docs/Web/CSS/Reference/Properties/font-variant-numeric)
- [`font-variant-position`](/de/docs/Web/CSS/Reference/Properties/font-variant-position)

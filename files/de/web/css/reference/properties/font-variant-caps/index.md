---
title: font-variant-caps
slug: Web/CSS/Reference/Properties/font-variant-caps
l10n:
  sourceCommit: 13f5bce7caf7be6e4156655d827e5927091310b9
---

Die **`font-variant-caps`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung von alternativen Glyphen, die für Small oder Petite Capitals oder für Titelschrift verwendet werden.

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

Die `font-variant-caps` Eigenschaft wird unter Verwendung eines einzelnen Schlüsselwortwerts aus der nachstehenden Liste angegeben. In jedem Fall, wenn die Schriftart den OpenType-Wert nicht unterstützt, dann synthetisiert sie die Glyphen.

### Werte

- `normal`
  - : Deaktiviert die Verwendung von alternativen Glyphen.
- `small-caps`
  - : Aktiviert die Anzeige von Small Capitals (OpenType-Funktion: `smcp`). Small-Caps-Glyphen verwenden typischerweise die Form von Großbuchstaben, werden jedoch in der Größe von Kleinbuchstaben angezeigt.
- `all-small-caps`
  - : Aktiviert die Anzeige von Small Capitals für Groß- und Kleinbuchstaben (OpenType-Funktionen: `c2sc`, `smcp`).
- `petite-caps`
  - : Aktiviert die Anzeige von Petite Capitals (OpenType-Funktion: `pcap`).
- `all-petite-caps`
  - : Aktiviert die Anzeige von Petite Capitals für Groß- und Kleinbuchstaben (OpenType-Funktionen: `c2pc`, `pcap`).
- `unicase`
  - : Aktiviert die Anzeige einer Mischung aus Small Capitals für Großbuchstaben mit normalen Kleinbuchstaben (OpenType-Funktion: `unic`).
- `titling-caps`
  - : Aktiviert die Anzeige von Titelschrift-Capitals (OpenType-Funktion: `titl`). Die Glyphen der Großbuchstaben sind oft dafür ausgelegt, zusammen mit Kleinbuchstaben verwendet zu werden. Wenn sie in vollständig großgeschriebenen Titelfolgen verwendet werden, können sie zu stark erscheinen. Titelschrift-Capitals sind speziell für diese Situation gestaltet.

## Beschreibung

Wenn eine bestimmte Schriftart Glyphen von Großbuchstaben in mehreren verschiedenen Größen enthält, wählt diese Eigenschaft die am besten geeigneten aus. Wenn Petite-Capital-Glyphen nicht verfügbar sind, werden sie mit Small-Capital-Glyphen dargestellt. Wenn diese nicht vorhanden sind, synthetisiert der Browser sie aus den Großbuchstabenglyphen.

Schriftarten enthalten manchmal spezielle Glyphen für verschiedene zeichenlose Zeichen (wie Satzzeichen), um besser zu den umgebenden Großbuchstaben zu passen. Small-Capital-Glyphen werden jedoch nie für zeichenlose Zeichen synthetisiert.

### Sprachspezifische Regeln

Diese Eigenschaft berücksichtigt sprachspezifische Regeln zur Großbuchstabendarstellung. Zum Beispiel:

- In türkischen Sprachen, wie Türkisch (tr), Aserbaidschanisch (az), Krimtatarisch (crh), Wolga-Tatarisch (tt) und Baschkirisch (ba), gibt es zwei Arten von `i` (eines mit Punkt, eines ohne) und zwei Paarungen: `i`/`İ` und `ı`/`I`.
- Im Deutschen (de) kann das `ß` in Großbuchstaben zu `ẞ` (U+1E9E) werden.
- Auf Griechisch (el) verlieren Vokale ihren Akzent, wenn das gesamte Wort in Großbuchstaben geschrieben wird (`ά`/`Α`), außer für das trennende Eta (`ή`/`Ή`). Auch Diphtonge mit einem Akzent auf dem ersten Vokal verlieren den Akzent und erhalten ein Diakritikum auf dem zweiten Vokal (`άι`/`ΑΪ`).

## Barrierefreiheit

Große Textabschnitte, die mit einem `font-variant` Wert von `all-small-caps` oder `all-petite-caps` gesetzt sind, können für Menschen mit kognitiven Beeinträchtigungen wie Legasthenie schwer lesbar sein.

- [MDN Verständnis von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis von WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/#visual-presentation)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Small-Caps-Schriftvariante

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

---
title: font-variant-caps
slug: Web/CSS/Reference/Properties/font-variant-caps
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Die **`font-variant-caps`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung von alternativen Glyphen, die für kleine oder zierliche Großbuchstaben oder für Titeln verwendet werden.

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

Die Eigenschaft `font-variant-caps` wird mit einem einzelnen Schlüsselwortwert aus der untenstehenden Liste angegeben. In jedem Fall, wenn die Schriftart den OpenType-Wert nicht unterstützt, werden die Glyphen synthetisiert.

### Werte

- `normal`
  - : Deaktiviert die Verwendung von alternativen Glyphen.
- `small-caps`
  - : Aktiviert die Anzeige von kleinen Großbuchstaben (OpenType-Feature: `smcp`). Kleine-Großbuchstaben-Glyphen haben typischerweise die Form von Großbuchstaben, werden aber in der gleichen Größe wie Kleinbuchstaben dargestellt.
- `all-small-caps`
  - : Aktiviert die Anzeige von kleinen Großbuchstaben sowohl für große als auch für kleine Buchstaben (OpenType-Features: `c2sc`, `smcp`).
- `petite-caps`
  - : Aktiviert die Anzeige von zierlichen Großbuchstaben (OpenType-Feature: `pcap`).
- `all-petite-caps`
  - : Aktiviert die Anzeige von zierlichen Großbuchstaben sowohl für große als auch für kleine Buchstaben (OpenType-Features: `c2pc`, `pcap`).
- `unicase`
  - : Aktiviert die Anzeige einer Mischung aus kleinen Großbuchstaben für Großbuchstaben mit normalen Kleinbuchstaben (OpenType-Feature: `unic`).
- `titling-caps`
  - : Aktiviert die Anzeige von Titeln-Großbuchstaben (OpenType-Feature: `titl`). Die Glyphen der Großbuchstaben sind oft für die Verwendung mit Kleinbuchstaben konzipiert. Wenn sie in durchgehend großen Titelsequenzen verwendet werden, können sie zu stark wirken. Titeln-Großbuchstaben sind speziell für diese Situation entworfen.

## Beschreibung

Wenn eine gegebene Schriftart Großbuchstabenglyphen in mehreren unterschiedlichen Größen enthält, wählt diese Eigenschaft die am besten geeigneten aus. Wenn keine zierlichen Großbuchstabenglyphen verfügbar sind, werden sie unter Verwendung von kleinen Großbuchstabenglyphen gerendert. Wenn diese nicht vorhanden sind, synthetisiert der Browser sie aus den Großbuchstabenglyphen.

Schriftarten enthalten manchmal spezielle Glyphen für verschiedene zeichenlose Zeichen (wie Satzzeichen), um besser mit den kapitalisierten Zeichen um sie herum übereinzustimmen. Allerdings werden kleine Großbuchstabenglyphen niemals für zeichenlose Zeichen synthetisiert.

### Sprachspezifische Regeln

Diese Eigenschaft berücksichtigt sprachspezifische Regeln zur Groß- und Kleinschreibung. Zum Beispiel:

- In Turksprachen, wie Türkisch (tr), Aserbaidschanisch (az), Krimtatarisch (crh), Wolgatatarisch (tt) und Baschkirisch (ba), gibt es zwei Arten von `i` (einmal mit und einmal ohne Punkt) und zwei Paarungen: `i`/`İ` und `ı`/`I`.
- Im Deutschen (de) kann das `ß` in Großbuchstaben zu `ẞ` (U+1E9E) werden.
- Im Griechischen (el) verlieren Vokale ihren Akzent, wenn das ganze Wort in Großbuchstaben steht (`ά`/`Α`), außer für das disjunktive Eta (`ή`/`Ή`). Auch Diphtonge, bei denen der erste Vokal einen Akzent hat, verlieren den Akzent und erhalten ein Diakritikum auf dem zweiten Vokal (`άι`/`ΑΪ`).

## Barrierefreiheit

Große Textabschnitte, die mit einem `font-variant`-Wert von `all-small-caps` oder `all-petite-caps` gesetzt sind, können für Menschen mit kognitiven Schwierigkeiten, wie Legasthenie, schwer zu lesen sein.

- [MDN Verständnis von WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis von WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/#visual-presentation)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Schriftvariante small-caps

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

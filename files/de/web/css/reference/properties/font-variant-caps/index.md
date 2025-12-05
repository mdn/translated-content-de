---
title: font-variant-caps
slug: Web/CSS/Reference/Properties/font-variant-caps
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`font-variant-caps`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung alternativer Glyphen, die für kleine oder zierliche Großbuchstaben oder für Überschriften verwendet werden.

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

Die `font-variant-caps` Eigenschaft wird durch einen einzelnen Schlüsselwortwert aus der untenstehenden Liste angegeben. In jedem Fall, wenn die Schriftart den OpenType-Wert nicht unterstützt, werden die Glyphen synthetisiert.

### Werte

- `normal`
  - : Deaktiviert die Verwendung alternativer Glyphen.
- `small-caps`
  - : Aktiviert die Anzeige kleiner Großbuchstaben (OpenType Funktion: `smcp`). Kleine Großbuchstaben-Glyphen verwenden typischerweise die Form von Großbuchstaben, werden jedoch in der gleichen Größe wie Kleinbuchstaben angezeigt.
- `all-small-caps`
  - : Aktiviert die Anzeige von kleinen Großbuchstaben für sowohl Groß- als auch Kleinbuchstaben (OpenType Funktionen: `c2sc`, `smcp`).
- `petite-caps`
  - : Aktiviert die Anzeige zierlicher Großbuchstaben (OpenType Funktion: `pcap`).
- `all-petite-caps`
  - : Aktiviert die Anzeige zierlicher Großbuchstaben für sowohl Groß- als auch Kleinbuchstaben (OpenType Funktionen: `c2pc`, `pcap`).
- `unicase`
  - : Aktiviert die Anzeige einer Mischung aus kleinen Großbuchstaben für Großbuchstaben mit normalen Kleinbuchstaben (OpenType Funktion: `unic`).
- `titling-caps`
  - : Aktiviert die Anzeige von Überschrift-Großbuchstaben (OpenType Funktion: `titl`). Großbuchstabenglyphen sind oft für die Verwendung mit Kleinbuchstaben gestaltet. In rein groß geschriebenen Überschriften können sie zu stark wirken. Überschrift-Großbuchstaben sind speziell für diese Situation entworfen.

## Beschreibung

Wenn eine gegebene Schriftart Großbuchstabenglyphen in mehreren verschiedenen Größen enthält, wählt diese Eigenschaft die am besten geeigneten aus. Wenn zierliche Großbuchstabenglyphen nicht verfügbar sind, werden sie mit kleinen Großbuchstabenglyphen wiedergegeben. Wenn diese nicht vorhanden sind, synthetisiert der Browser sie aus den Großbuchstabenglyphen.

Schriften enthalten manchmal spezielle Glyphen für verschiedene zeichenlose Zeichen (wie Satzzeichen), um besser zu den Großbuchstaben zu passen, die sie umgeben. Allerdings werden kleine Großbuchstabenglyphen niemals für zeichenlose Zeichen synthetisiert.

### Sprachspezifische Regeln

Diese Eigenschaft berücksichtigt sprachspezifische Regeln zur Zeichenzuordnung. Zum Beispiel:

- In turksprachigen Sprachen, wie Türkisch (tr), Aserbaidschanisch (az), Krimtatarisch (crh), Wolga-Tatarisch (tt) und Baschkirisch (ba), gibt es zwei Arten von `i` (eines mit Punkt, eines ohne) und zwei Buchstabenpaarungen: `i`/`İ` und `ı`/`I`.
- Im Deutschen (de) kann das `ß` in Großbuchstaben zu `ẞ` (U+1E9E) werden.
- Im Griechischen (el) verlieren Vokale ihren Akzent, wenn das ganze Wort in Großbuchstaben steht (`ά`/`Α`), außer bei der disjunktiven Eta (`ή`/`Ή`). Auch Diphthonge mit einem Akzent auf dem ersten Vokal verlieren den Akzent und gewinnen ein diakritisches Zeichen auf dem zweiten Vokal (`άι`/`ΑΪ`).

## Barrierefreiheit

Große Textabschnitte mit einem `font-variant` Wert von `all-small-caps` oder `all-petite-caps` können für Personen mit kognitiven Einschränkungen wie Legasthenie schwer lesbar sein.

- [MDN Verständnis für WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis für WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/#visual-presentation)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anpassen der Schriftvariante small-caps

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

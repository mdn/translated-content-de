---
title: font-variant-caps
slug: Web/CSS/font-variant-caps
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`font-variant-caps`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung alternativer Glyphen, die für kleine oder petite Kapitälchen oder für Titel verwendet werden.

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

Wenn eine gegebene Schriftart Glyphen für Großbuchstaben in mehreren unterschiedlichen Größen enthält, wählt diese Eigenschaft die geeignetsten aus. Wenn petite Kapitälchenglyphen nicht verfügbar sind, werden sie mit kleinen Kapitälchenglyphen dargestellt. Wenn diese nicht vorhanden sind, synthetisiert der Browser sie aus den Großbuchstabenglyphen.

Schriftarten enthalten manchmal spezielle Glyphen für verschiedene schriftlose Zeichen (wie Satzzeichen), um besser zu den kapitalisierten Zeichen um sie herum zu passen. Kleine Kapitälchenglyphen werden jedoch nie für schriftlose Zeichen synthetisiert.

### Sprachspezifische Regeln

Diese Eigenschaft berücksichtigt sprachspezifische Großschreibungsregeln. Zum Beispiel:

- In türkischen Sprachen, wie Türkisch (tr), Aserbaidschanisch (az), Krimtatarisch (crh), Wolgatatarisch (tt) und Baschkirisch (ba), gibt es zwei Arten von `i` (eines mit Punkt, eines ohne) und zwei Paarungen: `i`/`İ` und `ı`/`I`.
- Im Deutschen (de) kann das `ß` im Großschrift zu `ẞ` (U+1E9E) werden.
- Im Griechischen (el) verlieren Vokale ihren Akzent, wenn das gesamte Wort in Großbuchstaben geschrieben ist (`ά`/`Α`), außer für das disjunktive Eta (`ή`/`Ή`). Auch verschwindet bei Diphthongen der Akzent auf dem ersten Vokal, und der zweite Vokal erhält ein Diakritikum (`άι`/`ΑΪ`).

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

Die `font-variant-caps` Eigenschaft wird mit einem einzelnen Schlüsselwortwert aus der folgenden Liste spezifiziert. In jedem Fall, wenn die Schriftart den OpenType-Wert nicht unterstützt, wird sie die Glyphen synthetisieren.

### Werte

- `normal`
  - : Deaktiviert die Verwendung alternativer Glyphen.
- `small-caps`
  - : Aktiviert die Anzeige von kleinen Kapitälchen (OpenType-Feature: `smcp`). Kleine Kapitälchenglyphen verwenden typischerweise die Form von Großbuchstaben, werden jedoch in der Größe von Kleinbuchstaben angezeigt.
- `all-small-caps`
  - : Aktiviert die Anzeige von kleinen Kapitälchen für sowohl Groß- als auch Kleinbuchstaben (OpenType-Features: `c2sc`, `smcp`).
- `petite-caps`
  - : Aktiviert die Anzeige von petite Kapitälchen (OpenType-Feature: `pcap`).
- `all-petite-caps`
  - : Aktiviert die Anzeige von petite Kapitälchen für sowohl Groß- als auch Kleinbuchstaben (OpenType-Features: `c2pc`, `pcap`).
- `unicase`
  - : Ermöglicht die Anzeige einer Mischung aus kleinen Kapitälchen für Großbuchstaben mit normalen Kleinbuchstaben (OpenType-Feature: `unic`).
- `titling-caps`
  - : Aktiviert die Anzeige von Titelgroßbuchstaben (OpenType-Feature: `titl`). Großbuchstabenglyphen sind häufig für die Verwendung mit Kleinbuchstaben ausgelegt. Wenn sie in durchgängigen Großbuchstabentitelsequenzen verwendet werden, können sie zu stark erscheinen. Titelgroßbuchstaben sind speziell für diese Situation entworfen.

## Barrierefreiheit

Große Textabschnitte, die mit einem `font-variant`-Wert von `all-small-caps` oder `all-petite-caps` gesetzt sind, können für Menschen mit kognitiven Bedenken wie Legasthenie schwer lesbar sein.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Understanding WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung des small-caps-Schriftvarianten

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

- [`font-variant`](/de/docs/Web/CSS/font-variant)
- [`font-variant-alternates`](/de/docs/Web/CSS/font-variant-alternates)
- [`font-variant-east-asian`](/de/docs/Web/CSS/font-variant-east-asian)
- [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji)
- [`font-variant-ligatures`](/de/docs/Web/CSS/font-variant-ligatures)
- [`font-variant-numeric`](/de/docs/Web/CSS/font-variant-numeric)
- [`font-variant-position`](/de/docs/Web/CSS/font-variant-position)

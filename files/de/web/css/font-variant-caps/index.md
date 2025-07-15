---
title: font-variant-caps
slug: Web/CSS/font-variant-caps
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`font-variant-caps`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung alternativer Glyphen für kleine oder zierliche Kapitälchen oder für Überschriften.

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

Wenn eine bestimmte Schriftart Großbuchstabenglyphen in mehreren verschiedenen Größen enthält, wählt diese Eigenschaft die am besten geeigneten aus. Wenn keine zierlichen Kapitälchenglyphen verfügbar sind, werden stattdessen kleine Kapitälchenglyphen verwendet. Sind diese ebenfalls nicht vorhanden, synthetisiert der Browser sie aus den Großbuchstabenglyphen.

Schriftarten enthalten manchmal spezielle Glyphen für verschiedene zeichenlose Zeichen (wie Interpunktionszeichen), um besser zu den umliegenden Großbuchstaben zu passen. Kleine Kapitälchenglyphen werden jedoch niemals für zeichenlose Zeichen synthetisiert.

### Sprachspezifische Regeln

Diese Eigenschaft berücksichtigt sprachspezifische Regeln für die Groß- und Kleinschreibung. Zum Beispiel:

- In türkischen Sprachen wie Türkisch (tr), Aserbaidschanisch (az), Krimtatarisch (crh), Wolga-Tatarisch (tt) und Baschkirisch (ba) gibt es zwei Arten von `i` (eines mit Punkt, eines ohne) und zwei Paarungen: `i`/`İ` und `ı`/`I`.
- Im Deutschen (de) kann das `ß` in Großbuchstaben zu `ẞ` (U+1E9E) werden.
- Im Griechischen (el) verlieren Vokale ihren Akzent, wenn das ganze Wort in Großbuchstaben steht (`ά`/`Α`), außer für das disjunktive Eta (`ή`/`Ή`). Auch verlieren Diphthonge mit Akzent auf dem ersten Vokal den Akzent und erhalten einen Diakritiker auf dem zweiten Vokal (`άι`/`ΑΪ`).

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

Die `font-variant-caps`-Eigenschaft wird mit einem einzelnen Schlüsselwortwert aus der unten stehenden Liste spezifiziert. In jedem Fall, wenn die Schriftart den OpenType-Wert nicht unterstützt, dann synthetisiert sie die Glyphen.

### Werte

- `normal`
  - : Deaktiviert die Verwendung von alternativen Glyphen.
- `small-caps`
  - : Aktiviert die Anzeige von kleinen Kapitälchen (OpenType-Funktion: `smcp`). Kleine Kapitälchenglyphen verwenden typischerweise die Form von Großbuchstaben, werden jedoch in der gleichen Größe wie Kleinbuchstaben angezeigt.
- `all-small-caps`
  - : Aktiviert die Anzeige von kleinen Kapitälchen für sowohl Groß- als auch Kleinbuchstaben (OpenType-Funktionen: `c2sc`, `smcp`).
- `petite-caps`
  - : Aktiviert die Anzeige von zierlichen Kapitälchen (OpenType-Funktion: `pcap`).
- `all-petite-caps`
  - : Aktiviert die Anzeige von zierlichen Kapitälchen für sowohl Groß- als auch Kleinbuchstaben (OpenType-Funktionen: `c2pc`, `pcap`).
- `unicase`
  - : Aktiviert die Anzeige einer Mischung aus kleinen Kapitälchen für Großbuchstaben mit normalen Kleinbuchstaben (OpenType-Funktion: `unic`).
- `titling-caps`
  - : Aktiviert die Anzeige von Überschriften-Kapitälchen (OpenType-Funktion: `titl`). Großbuchstabenglyphen sind oft für den Gebrauch mit Kleinbuchstaben gestaltet. Bei Verwendung in rein groß geschriebenen Überschriften-Sequenzen können sie zu stark wirken. Überschriften-Kapitälchen sind speziell für diese Situation gestaltet.

## Barrierefreiheit

Große Textabschnitte, die mit einem `font-variant` Wert von `all-small-caps` oder `all-petite-caps` gesetzt wurden, können für Menschen mit kognitiven Beeinträchtigungen wie Dyslexie schwer lesbar sein.

- [MDN Verständnis von WCAG, Erklärung der Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis von WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/#visual-presentation)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen der kleinen Kapitälchen-Schriftvariante

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

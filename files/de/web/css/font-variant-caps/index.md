---
title: font-variant-caps
slug: Web/CSS/font-variant-caps
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{CSSRef}}

Die **`font-variant-caps`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung von alternativen Glyphen, die für kleine oder zierliche Großbuchstaben oder für Titel verwendet werden.

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

Wenn eine Schriftart Großbuchstabenglyphen in mehreren verschiedenen Größen enthält, wählt diese Eigenschaft die am besten geeigneten aus. Wenn zierliche Kapitälchen nicht verfügbar sind, werden sie mit kleinen Kapitälchenglyphen dargestellt. Wenn diese nicht vorhanden sind, werden sie vom Browser aus den Großbuchstabenglyphen synthetisiert.

Schriftarten enthalten manchmal spezielle Glyphen für verschiedene schriftzeichenlose Zeichen (wie Interpunktionszeichen), um besser zu den umgebenden Großbuchstaben zu passen. Allerdings werden kleine Kapitälchenglyphen niemals für schriftzeichenlose Zeichen synthetisiert.

### Sprachspezifische Regeln

Diese Eigenschaft berücksichtigt sprachspezifische Groß- und Kleinschreibungsregeln. Zum Beispiel:

- In türkischen Sprachen, wie Türkisch (tr), Aserbaidschanisch (az), Krimtatarisch (crh), Wolgatatarisch (tt) und Baschkirisch (ba), gibt es zwei Arten von `i` (eins mit Punkt, eins ohne) und zwei Groß-/Kleinschreibungspaare: `i`/`İ` und `ı`/`I`.
- Im Deutschen (de) kann das `ß` in Großbuchstaben zu `ẞ` (U+1E9E) werden.
- Im Griechischen (el) verlieren Vokale ihre Akzentuierung, wenn das ganze Wort in Großbuchstaben steht (`ά`/`Α`), mit Ausnahme des disjunktiven Eta (`ή`/`Ή`). Auch Diphthonge mit Akzent auf dem ersten Vokal verlieren den Akzent und erhalten einen diakritischen Akzent auf dem zweiten Vokal (`άι`/`ΑΪ`).

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

Die `font-variant-caps` Eigenschaft wird durch einen einzigen Schlüsselwortwert aus der unten stehenden Liste angegeben. In jedem Fall, wenn die Schriftart den OpenType-Wert nicht unterstützt, werden die Glyphen synthetisiert.

### Werte

- `normal`
  - : Deaktiviert die Verwendung alternativer Glyphen.
- `small-caps`
  - : Aktiviert die Darstellung von kleinen Kapitälchen (OpenType-Funktion: `smcp`). Kleine Kapitälchenglyphen verwenden typischerweise die Form von Großbuchstaben, werden jedoch in der gleichen Größe wie Kleinbuchstaben angezeigt.
- `all-small-caps`
  - : Aktiviert die Darstellung von kleinen Kapitälchen sowohl für Groß- als auch Kleinbuchstaben (OpenType-Funktionen: `c2sc`, `smcp`).
- `petite-caps`
  - : Aktiviert die Darstellung von zierlichen Kapitälchen (OpenType-Funktion: `pcap`).
- `all-petite-caps`
  - : Aktiviert die Darstellung von zierlichen Kapitälchen sowohl für Groß- als auch Kleinbuchstaben (OpenType-Funktionen: `c2pc`, `pcap`).
- `unicase`
  - : Aktiviert die Darstellung von kleinen Kapitälchen für Großbuchstaben und normalen Kleinbuchstaben (OpenType-Funktion: `unic`).
- `titling-caps`
  - : Aktiviert die Darstellung von Großbuchstaben für Titel (OpenType-Funktion: `titl`). Großbuchstabenglyphen sind oft für die Verwendung mit Kleinbuchstaben gestaltet. Wenn sie in vollständig großgeschriebenen Titelreihenfolgen verwendet werden, können sie zu stark wirken. Titelkapitälchen sind speziell für diese Situation gestaltet.

## Barrierefreiheit

Große Textabschnitte, die mit einem `font-variant` Wert von `all-small-caps` oder `all-petite-caps` gesetzt sind, können es Menschen mit kognitiven Beeinträchtigungen wie Dyslexie erschweren, den Text zu lesen.

- [MDN Understanding WCAG, Guideline 1.4-Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Understanding WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/#visual-presentation)

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

- [`font-variant`](/de/docs/Web/CSS/font-variant)
- [`font-variant-alternates`](/de/docs/Web/CSS/font-variant-alternates)
- [`font-variant-east-asian`](/de/docs/Web/CSS/font-variant-east-asian)
- [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji)
- [`font-variant-ligatures`](/de/docs/Web/CSS/font-variant-ligatures)
- [`font-variant-numeric`](/de/docs/Web/CSS/font-variant-numeric)
- [`font-variant-position`](/de/docs/Web/CSS/font-variant-position)

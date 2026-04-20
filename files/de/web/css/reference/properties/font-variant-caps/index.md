---
title: "`font-variant-caps` CSS property"
short-title: font-variant-caps
slug: Web/CSS/Reference/Properties/font-variant-caps
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`font-variant-caps`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung von alternativen Glyphen, die für kleine oder zierliche Kapitälchen oder für Überschriften verwendet werden.

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

Die `font-variant-caps` Eigenschaft wird mit einem einzigen Schlüsselwortwert aus der unten stehenden Liste angegeben. In jedem Fall, wenn die Schriftart den OpenType-Wert nicht unterstützt, werden die Glyphen synthetisiert.

### Werte

- `normal`
  - : Deaktiviert die Verwendung von alternativen Glyphen.
- `small-caps`
  - : Aktiviert die Anzeige von kleinen Kapitälchen (OpenType-Feature: `smcp`). Kleine Kapitälchenglyphen verwenden normalerweise die Form von Großbuchstaben, werden jedoch in der gleichen Größe wie Kleinbuchstaben angezeigt.
- `all-small-caps`
  - : Aktiviert die Anzeige von kleinen Kapitälchen für sowohl Groß- als auch Kleinbuchstaben (OpenType-Features: `c2sc`, `smcp`).
- `petite-caps`
  - : Aktiviert die Anzeige von zierlichen Kapitälchen (OpenType-Feature: `pcap`).
- `all-petite-caps`
  - : Aktiviert die Anzeige von zierlichen Kapitälchen für sowohl Groß- als auch Kleinbuchstaben (OpenType-Features: `c2pc`, `pcap`).
- `unicase`
  - : Aktiviert die Anzeige einer Mischung von kleinen Kapitälchen für Großbuchstaben mit normalen Kleinbuchstaben (OpenType-Feature: `unic`).
- `titling-caps`
  - : Aktiviert die Anzeige von Titelschriftkapitälchen (OpenType-Feature: `titl`). Großbuchstabenglyphen sind oft für die Verwendung mit Kleinbuchstaben entworfen. Wenn sie in vollständig großgeschriebenen Titelreihenfolgen verwendet werden, können sie zu stark erscheinen. Titelschriftkapitälchen sind speziell für diese Situation entworfen.

## Beschreibung

Wenn eine bestimmte Schriftart Großbuchstabenglyphen in mehreren verschiedenen Größen enthält, wählt diese Eigenschaft die am besten geeigneten aus. Wenn zierliche Kapitälchenglyphen nicht verfügbar sind, werden sie mit kleinen Kapitälchenglyphen wiedergegeben. Wenn diese nicht vorhanden sind, synthetisiert der Browser sie aus den Großbuchstabenglyphen.

Schriften enthalten manchmal spezielle Glyphen für verschiedene zeichenlose Zeichen (wie Satzzeichen), um besser zu den umgebenden Kapitalisierungszeichen zu passen. Jedoch werden kleine Kapitälchenglyphen nie für zeichenlose Zeichen synthetisiert.

### Sprachspezifische Regeln

Diese Eigenschaft berücksichtigt sprachspezifische Großschreibungsregeln. Zum Beispiel:

- In turksprachigen Sprachen wie Türkisch (tr), Aserbaidschanisch (az), Krimtatarisch (crh), Wolgatatarisch (tt) und Baschkirisch (ba) gibt es zwei Arten von `i` (eines mit Punkt, eines ohne) und zwei Großschreibungspaarungen: `i`/`İ` und `ı`/`I`.
- Im Deutschen (de) kann das `ß` zu `ẞ` (U+1E9E) in Großbuchstaben werden.
- Im Griechischen (el) verlieren Vokale ihren Akzent, wenn das ganze Wort in Großbuchstaben steht (`ά`/`Α`), außer beim desjunktiven ëta (`ή`/`Ή`). Auch Diphthonge mit einem Akzent auf dem ersten Vokal verlieren den Akzent und gewinnen ein diakritisches Zeichen auf dem zweiten Vokal (`άι`/`ΑΪ`).

## Barrierefreiheit

Große Textabschnitte, die mit einem `font-variant` Wert von `all-small-caps` oder `all-petite-caps` gesetzt sind, können für Menschen mit kognitiven Beeinträchtigungen wie Dyslexie schwer lesbar sein.

- [MDN Verständnis WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/#visual-presentation)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Schriftartvariante small-caps

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

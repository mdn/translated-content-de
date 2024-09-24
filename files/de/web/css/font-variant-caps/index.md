---
title: font-variant-caps
slug: Web/CSS/font-variant-caps
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`font-variant-caps`**-Eigenschaft in [CSS](/de/docs/Web/CSS) steuert den Einsatz von alternativen Glyphen, die für kleine oder petite Kapitälchen oder für Titelschriftzüge verwendet werden.

{{EmbedInteractiveExample("pages/css/font-variant-caps.html")}}

Wenn eine gegebene Schriftart Großbuchstabenglyphen in mehreren verschiedenen Größen enthält, wählt diese Eigenschaft die am besten geeigneten aus. Falls keine petite Kapitälchenglyphen verfügbar sind, werden sie unter Verwendung von kleinen Kapitälchenglyphen dargestellt. Wenn auch diese nicht vorhanden sind, synthetisiert der Browser diese aus den Großbuchstabenglyphen.

Schriftarten enthalten manchmal spezielle Glyphen für verschiedene case-unabhängige Zeichen (wie Satzzeichen), um die Großbuchstaben in ihrer Umgebung besser zu ergänzen. Allerdings werden kleine Kapitälchenglyphen nie für case-unabhängige Zeichen synthetisiert.

### Sprachspezifische Regeln

Diese Eigenschaft berücksichtigt sprachspezifische Regeln zur Groß-/Kleinschreibung. Zum Beispiel:

- In türkischen Sprachen, wie Türkisch (tr), Aserbaidschanisch (az), Krimtatarisch (crh), Wolga-Tatarisch (tt) und Baschkirisch (ba), gibt es zwei Arten von `i` (einmal mit Punkt, einmal ohne) und zwei Paarungen zur Groß-/Kleinschreibung: `i`/`İ` und `ı`/`I`.
- Im Deutschen (de) kann das `ß` zu `ẞ` (U+1E9E) in Großbuchstaben werden.
- Im Griechischen (el) verlieren Vokale ihre Akzente, wenn das ganze Wort in Großbuchstaben geschrieben ist (`ά`/`Α`), mit Ausnahme des disjunktiven Eta (`ή`/`Ή`). Außerdem verlieren Diphthonge mit einem Akzent auf dem ersten Vokal den Akzent und erhalten einen Diakritik auf dem zweiten Vokal (`άι`/`ΑΪ`).

## Syntax

```css
/* Schlüsselwort-Werte */
font-variant-caps: normal;
font-variant-caps: small-caps;
font-variant-caps: all-small-caps;
font-variant-caps: petite-caps;
font-variant-caps: all-petite-caps;
font-variant-caps: unicase;
font-variant-caps: titling-caps;

/* Globale Werte */
font-variant-caps: inherit;
font-variant-caps: initial;
font-variant-caps: revert;
font-variant-caps: revert-layer;
font-variant-caps: unset;
```

Die `font-variant-caps`-Eigenschaft wird mit einem einzelnen Schlüsselwortwert aus der folgenden Liste festgelegt. In jedem Fall, wenn die Schriftart den OpenType-Wert nicht unterstützt, werden die Glyphen synthetisiert.

### Werte

- `normal`
  - : Deaktiviert die Verwendung von alternativen Glyphen.
- `small-caps`
  - : Aktiviert die Anzeige von kleinen Kapitälchen (OpenType-Funktion: `smcp`). Kleinbuchstaben-Glyphen nutzen typischerweise die Form von Großbuchstaben, werden aber in der gleichen Größe wie Kleinbuchstaben angezeigt.
- `all-small-caps`
  - : Aktiviert die Anzeige von kleinen Kapitälchen sowohl für Groß- als auch Kleinbuchstaben (OpenType-Funktionen: `c2sc`, `smcp`).
- `petite-caps`
  - : Aktiviert die Anzeige von petite Kapitälchen (OpenType-Funktion: `pcap`).
- `all-petite-caps`
  - : Aktiviert die Anzeige von petite Kapitälchen sowohl für Groß- als auch Kleinbuchstaben (OpenType-Funktionen: `c2pc`, `pcap`).
- `unicase`
  - : Aktiviert die Anzeige einer Mischung aus kleinen Kapitälchen für Großbuchstaben mit normalen Kleinbuchstaben (OpenType-Funktion: `unic`).
- `titling-caps`
  - : Aktiviert die Anzeige von Titelschrift-Großbuchstaben (OpenType-Funktion: `titl`). Großbuchstabenglyphen sind oft für die Verwendung mit Kleinbuchstaben entworfen. Werden sie in vollständig großgeschriebenen Titelsequenzen verwendet, können sie zu stark wirken. Titelschrift-Großbuchstaben sind speziell für diese Situation entworfen.

## Barrierefreiheit

Große Textabschnitte, die mit einem `font-variant`-Wert von `all-small-caps` oder `all-petite-caps` gesetzt sind, können für Menschen mit kognitiven Beeinträchtigungen wie Dyslexie schwer zu lesen sein.

- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis von WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [`font-variant`](/de/docs/Web/CSS/font-variant)
- [`font-variant-alternates`](/de/docs/Web/CSS/font-variant-alternates)
- [`font-variant-east-asian`](/de/docs/Web/CSS/font-variant-east-asian)
- [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji)
- [`font-variant-ligatures`](/de/docs/Web/CSS/font-variant-ligatures)
- [`font-variant-numeric`](/de/docs/Web/CSS/font-variant-numeric)
- [`font-variant-position`](/de/docs/Web/CSS/font-variant-position)

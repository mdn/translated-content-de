---
title: font-variant-caps
slug: Web/CSS/font-variant-caps
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`font-variant-caps`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung alternativer Glyphen, die für kleine oder zierliche Großbuchstaben oder für Titelschrift verwendet werden.

{{EmbedInteractiveExample("pages/css/font-variant-caps.html")}}

Wenn eine bestimmte Schriftart Großbuchstabenglyphen in mehreren unterschiedlichen Größen enthält, wählt diese Eigenschaft die geeignetsten aus. Wenn keine zierlichen Großbuchstabenglyphen verfügbar sind, werden sie mit kleinen Großbuchstabenglyphen dargestellt. Wenn diese nicht vorhanden sind, synthetisiert der Browser sie aus den Großbuchstabenglyphen.

Schriftarten enthalten manchmal spezielle Glyphen für verschiedene caseless Zeichen (wie Satzzeichen), um besser zu den kapitalisierten Zeichen um sie herum zu passen. Allerdings werden keine kleinen Großbuchstabenglyphen für caseless Zeichen synthetisiert.

### Sprachspezifische Regeln

Diese Eigenschaft berücksichtigt sprachspezifische Groß-/Kleinschreibungsregeln. Zum Beispiel:

- In türkischen Sprachen, wie Türkisch (tr), Aserbaidschanisch (az), Krimtataren (crh), Wolgatataren (tt) und Baschkirisch (ba), gibt es zwei Arten von `i` (einen mit Punkt, einen ohne) und zwei Paarungen von Groß-/Kleinschreibung: `i`/`İ` und `ı`/`I`.
- Im Deutschen (de) kann das `ß` in Großbuchstaben `ẞ` (U+1E9E) werden.
- Im Griechischen (el) verlieren Vokale ihren Akzent, wenn das ganze Wort in Großbuchstaben steht (`ά`/`Α`), außer bei der disjunktiven Eta (`ή`/`Ή`). Auch Diphthongs mit einem Akzent auf dem ersten Vokal verlieren den Akzent und erhalten einen Diakritikon auf dem zweiten Vokal (`άι`/`ΑΪ`).

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

Die `font-variant-caps` Eigenschaft wird unter Verwendung eines einzelnen Schlüsselwortwerts aus der unten stehenden Liste angegeben. In jedem Fall, wenn die Schriftart den OpenType-Wert nicht unterstützt, synthetisiert sie die Glyphen.

### Werte

- `normal`
  - : Deaktiviert die Verwendung von alternativen Glyphen.
- `small-caps`
  - : Aktiviert die Anzeige von kleinen Großbuchstaben (OpenType-Feature: `smcp`). Kleine Großbuchstabenglyphen verwenden typischerweise die Form von Großbuchstaben, werden jedoch in der gleichen Größe wie Kleinbuchstaben angezeigt.
- `all-small-caps`
  - : Aktiviert die Anzeige von kleinen Großbuchstaben sowohl für Groß- als auch für Kleinbuchstaben (OpenType-Features: `c2sc`, `smcp`).
- `petite-caps`
  - : Aktiviert die Anzeige von zierlichen Großbuchstaben (OpenType-Feature: `pcap`).
- `all-petite-caps`
  - : Aktiviert die Anzeige von zierlichen Großbuchstaben sowohl für Groß- als auch für Kleinbuchstaben (OpenType-Features: `c2pc`, `pcap`).
- `unicase`
  - : Aktiviert die Anzeige einer Mischung aus kleinen Großbuchstaben für Großbuchstaben mit normalen Kleinbuchstaben (OpenType-Feature: `unic`).
- `titling-caps`
  - : Aktiviert die Anzeige von Titelschrift-Großbuchstaben (OpenType-Feature: `titl`). Großbuchstabenglyphen sind oft dafür gestaltet, mit Kleinbuchstaben verwendet zu werden. Wenn sie in voll umfänglichen Titelschrift-Sequenzen verwendet werden, können sie zu stark erscheinen. Titelschrift-Großbuchstaben sind speziell für diese Situation gestaltet.

## Barrierefreiheit

Große Textabschnitte, die mit einem `font-variant` Wert von `all-small-caps` oder `all-petite-caps` gesetzt sind, können für Personen mit kognitiven Beeinträchtigungen wie Legasthenie schwer zu lesen sein.

- [MDN Verständnis von WCAG, Guideline 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis von WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung der Schriftvariante für kleine Großbuchstaben

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

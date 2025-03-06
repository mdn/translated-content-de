---
title: font-variant-caps
slug: Web/CSS/font-variant-caps
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Die **`font-variant-caps`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert die Verwendung von alternativen Glypen für kleine oder petite Majuskeln oder für die Titelschrift.

{{EmbedInteractiveExample("pages/css/font-variant-caps.html")}}

Wenn eine bestimmte Schriftart Großbuchstaben-Glypen in verschiedenen Größen enthält, wählt diese Eigenschaft die am besten geeigneten aus. Wenn petite Majuskel-Glypen nicht verfügbar sind, werden sie mit kleinen Majuskel-Glypen gerendert. Sind auch diese nicht vorhanden, synthetisiert der Browser sie aus den Großbuchstaben-Glypen.

Schriftarten enthalten manchmal spezielle Glypen für verschiedene zeichenlose Zeichen (wie Satzzeichen), um besser zu den umgebenden kapitalisierten Zeichen zu passen. Allerdings werden kleine Majuskel-Glypen nie für zeichenlose Zeichen synthetisiert.

### Sprachspezifische Regeln

Diese Eigenschaft berücksichtigt sprachspezifische Regeln zur Groß- und Kleinschreibung. Zum Beispiel:

- In türkischen Sprachen wie Türkisch (tr), Aserbaidschanisch (az), Krimtatarisch (crh), Wolgatatarisch (tt) und Baschkirisch (ba) gibt es zwei Arten von `i` (eines mit Punkt, eines ohne) und zwei Paarungen: `i`/`İ` und `ı`/`I`.
- Im Deutschen (de) kann das `ß` in Großbuchstaben zu `ẞ` (U+1E9E) werden.
- Im Griechischen (el) verlieren Vokale ihren Akzent, wenn das ganze Wort in Großbuchstaben steht (`ά`/`Α`), außer für das disjunktive Eta (`ή`/`Ή`). Auch Diphthonge mit einem Akzent auf dem ersten Vokal verlieren den Akzent und erhalten ein Diakritikum auf dem zweiten Vokal (`άι`/`ΑΪ`).

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

Die Eigenschaft `font-variant-caps` wird mit einem einzelnen Schlüsselwortwert aus der unten stehenden Liste angegeben. In jedem Fall, wenn die Schriftart den OpenType-Wert nicht unterstützt, synthetisiert sie die Glypen.

### Werte

- `normal`
  - : Deaktiviert die Verwendung von alternativen Glypen.
- `small-caps`
  - : Aktiviert die Darstellung kleiner Majuskeln (OpenType-Feature: `smcp`). Kleine Majuskel-Glypen verwenden typischerweise die Form von Großbuchstaben, werden jedoch in der gleichen Größe wie Kleinbuchstaben angezeigt.
- `all-small-caps`
  - : Aktiviert die Darstellung kleiner Majuskeln sowohl für Groß- als auch für Kleinbuchstaben (OpenType-Features: `c2sc`, `smcp`).
- `petite-caps`
  - : Aktiviert die Darstellung von petite Majuskeln (OpenType-Feature: `pcap`).
- `all-petite-caps`
  - : Aktiviert die Darstellung von petite Majuskeln sowohl für Groß- als auch für Kleinbuchstaben (OpenType-Features: `c2pc`, `pcap`).
- `unicase`
  - : Aktiviert die Darstellung einer Mischung aus kleinen Majuskeln für Großbuchstaben mit normalen Kleinbuchstaben (OpenType-Feature: `unic`).
- `titling-caps`
  - : Aktiviert die Darstellung von Titelschrift-Majuskeln (OpenType-Feature: `titl`). Großbuchstabenglypen sind oft für die Verwendung mit Kleinbuchstaben konzipiert. Wenn sie in komplett großgeschriebenen Titelsequenzen verwendet werden, können sie zu stark wirken. Titelschrift-Majuskel sind speziell für diese Situation gestaltet.

## Barrierefreiheit

Große Textabschnitte, die mit einem `font-variant`-Wert von `all-small-caps` oder `all-petite-caps` gesetzt werden, können für Personen mit kognitiven Einschränkungen wie Legasthenie schwer zu lesen sein.

- [MDN Verständnis von WCAG, Erklärung zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
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

---
title: font-variant-caps
slug: Web/CSS/font-variant-caps
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`font-variant-caps`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung von alternativen Glyphen, die für kleine oder petite Großbuchstaben oder für Überschriften verwendet werden.

{{EmbedInteractiveExample("pages/css/font-variant-caps.html")}}

Wenn eine gegebene Schriftart Kapitalbuchstaben-Glyphen in mehreren unterschiedlichen Größen enthält, wählt diese Eigenschaft die am besten geeigneten aus. Falls keine petite Großbuchstaben-Glyphen verfügbar sind, werden sie mit kleinen Großbuchstaben-Glyphen dargestellt. Sind auch diese nicht vorhanden, synthesiert der Browser sie aus den Großbuchstaben-Glyphen.

Schriftarten enthalten manchmal spezielle Glyphen für verschiedene unspezifische Zeichen (wie Satzzeichen), um besser zu den sie umgebenden Großbuchstaben zu passen. Kleine Großbuchstaben-Glyphen werden jedoch nie für unspezifische Zeichen synthesiert.

### Sprachspezifische Regeln

Diese Eigenschaft berücksichtigt sprachspezifische Regeln zur Groß-/Kleinschreibung. Zum Beispiel:

- In Turksprachen, wie Türkisch (tr), Aserbaidschanisch (az), Krimtatarisch (crh), Wolgatatarisch (tt) und Baschkirisch (ba), gibt es zwei Arten von `i` (eines mit Punkt, eines ohne) und zwei Paarungen: `i`/`İ` und `ı`/`I`.
- Im Deutschen (de) kann das `ß` im Großbuchstaben `ẞ` (U+1E9E) werden.
- Im Griechischen (el) verlieren Vokale ihren Akzent, wenn das ganze Wort in Großbuchstaben steht (`ά`/`Α`), außer für das disjunktive eta (`ή`/`Ή`). Auch verlieren Diphthonge mit einem Akzent auf dem ersten Vokal den Akzent und erhalten ein diakritisches Zeichen auf dem zweiten Vokal (`άι`/`ΑΪ`).

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

Die `font-variant-caps` Eigenschaft wird durch einen einzelnen Schlüsselwortwert aus der untenstehenden Liste angegeben. In jedem Fall, wenn die Schrift das OpenType-Feature nicht unterstützt, werden die Glyphen synthesiert.

### Werte

- `normal`
  - : Deaktiviert die Verwendung von alternativen Glyphen.
- `small-caps`
  - : Ermöglicht die Anzeige von kleinen Großbuchstaben (OpenType-Funktion: `smcp`). Kleine Großbuchstaben-Glyphen verwenden typischerweise die Form von Großbuchstaben, werden aber in der Größe von Kleinbuchstaben angezeigt.
- `all-small-caps`
  - : Ermöglicht die Anzeige von kleinen Großbuchstaben für sowohl Groß- als auch Kleinbuchstaben (OpenType-Funktionen: `c2sc`, `smcp`).
- `petite-caps`
  - : Ermöglicht die Anzeige von petite Großbuchstaben (OpenType-Funktion: `pcap`).
- `all-petite-caps`
  - : Ermöglicht die Anzeige von petite Großbuchstaben für sowohl Groß- als auch Kleinbuchstaben (OpenType-Funktionen: `c2pc`, `pcap`).
- `unicase`
  - : Ermöglicht die Anzeige einer Mischung aus kleinen Großbuchstaben für Großbuchstaben mit normalen Kleinbuchstaben (OpenType-Funktion: `unic`).
- `titling-caps`
  - : Ermöglicht die Anzeige von Großbuchstaben für Überschriften (OpenType-Funktion: `titl`). Großbuchstaben-Glyphen sind oft für die Verwendung mit Kleinbuchstaben entworfen. Wenn sie in durchgehend großen Überschriftsequenzen verwendet werden, können sie zu stark erscheinen. Großbuchstaben für Überschriften sind speziell für diese Situation entworfen.

## Barrierefreiheit

Große Textabschnitte, die mit einem `font-variant` Wert von `all-small-caps` oder `all-petite-caps` gesetzt sind, können für Menschen mit kognitiven Beeinträchtigungen wie Legasthenie schwer lesbar sein.

- [MDN Verständnis WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Verständnis WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung der small-caps Schriftartvariante

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

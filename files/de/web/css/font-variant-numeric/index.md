---
title: font-variant-numeric
slug: Web/CSS/font-variant-numeric
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`font-variant-numeric`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert die Verwendung alternativer Glyphen für Zahlen, Brüche und Ordinalzeichen.

{{EmbedInteractiveExample("pages/css/font-variant-numeric.html")}}

## Syntax

```css
font-variant-numeric: normal;
font-variant-numeric: ordinal;
font-variant-numeric: slashed-zero;
font-variant-numeric: lining-nums; /* <numeric-figure-values> */
font-variant-numeric: oldstyle-nums; /* <numeric-figure-values> */
font-variant-numeric: proportional-nums; /* <numeric-spacing-values> */
font-variant-numeric: tabular-nums; /* <numeric-spacing-values> */
font-variant-numeric: diagonal-fractions; /* <numeric-fraction-values> */
font-variant-numeric: stacked-fractions; /* <numeric-fraction-values> */
font-variant-numeric: oldstyle-nums stacked-fractions;

/* Global values */
font-variant-numeric: inherit;
font-variant-numeric: initial;
font-variant-numeric: revert;
font-variant-numeric: revert-layer;
font-variant-numeric: unset;
```

Diese Eigenschaft kann eine von zwei Formen annehmen:

- entweder der Schlüsselwortwert `normal`
- oder eines oder mehrere der unten aufgelisteten Werte, durch Leerzeichen getrennt, in beliebiger Reihenfolge.

### Werte

- `normal`

  - : Dieses Schlüsselwort deaktiviert die Verwendung solcher alternativen Glyphen.

- `ordinal`

  - : Dieses Schlüsselwort erzwingt die Verwendung spezieller Glyphen für Ordinalzeichen, wie 1st, 2nd, 3rd, 4th in Englisch oder 1a in Italienisch. Es entspricht den OpenType-Werten `ordn`.

- `slashed-zero`

  - : Dieses Schlüsselwort erzwingt die Verwendung einer durchgestrichenen 0; dies ist nützlich, wenn eine klare Unterscheidung zwischen O und 0 erforderlich ist. Es entspricht den OpenType-Werten `zero`.

- _`<numeric-figure-values>`_

  - : Diese Werte steuern die Ziffern, die für Zahlen verwendet werden. Zwei Werte sind möglich:

    - `lining-nums` aktiviert das Set von Ziffern, bei denen alle Zahlen auf der Grundlinie liegen. Es entspricht den OpenType-Werten `lnum`.
    - `oldstyle-nums` aktiviert das Set von Ziffern, bei denen einige Zahlen, wie 3, 4, 7, 9, Unterlängen haben. Es entspricht den OpenType-Werten `onum`.

- _`<numeric-spacing-values>`_

  - : Diese Werte steuern die Größe von Ziffern, die für Zahlen verwendet werden. Zwei Werte sind möglich:

    - `proportional-nums` aktiviert das Set von Ziffern, bei denen die Zahlen nicht alle gleich groß sind. Es entspricht den OpenType-Werten `pnum`.
    - `tabular-nums` aktiviert das Set von Ziffern, bei denen alle Zahlen gleich groß sind, was ihre einfache Ausrichtung wie in Tabellen ermöglicht. Es entspricht den OpenType-Werten `tnum`.

- _`<numeric-fraction-values>`_

  - : Diese Werte steuern die Glyphen, die zur Darstellung von Brüchen verwendet werden. Zwei Werte sind möglich:

    - `diagonal-fractions` aktiviert das Set von Figuren, bei denen Zähler und Nenner kleiner gemacht und durch einen Schrägstrich getrennt werden. Es entspricht den OpenType-Werten `frac`.
    - `stacked-fractions` aktiviert das Set von Figuren, bei denen Zähler und Nenner kleiner gemacht und übereinander gestapelt und durch eine horizontale Linie getrennt werden. Es entspricht den OpenType-Werten `afrc`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung von Ordinalzahlenformen

{{EmbedGHLiveSample("css-examples/font-features/font-variant-numeric-example.html", '100%', 600)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`font-variant`](/de/docs/Web/CSS/font-variant)
- [`font-variant-alternates`](/de/docs/Web/CSS/font-variant-alternates)
- [`font-variant-caps`](/de/docs/Web/CSS/font-variant-caps)
- [`font-variant-east-asian`](/de/docs/Web/CSS/font-variant-east-asian)
- [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji)
- [`font-variant-ligatures`](/de/docs/Web/CSS/font-variant-ligatures)
- [`font-variant-position`](/de/docs/Web/CSS/font-variant-position)

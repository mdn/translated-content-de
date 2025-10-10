---
title: <dashed-ident>
slug: Web/CSS/dashed-ident
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Der **`<dashed-ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) bezeichnet eine beliebige Zeichenkette, die als {{Glossary("identifier", "Bezeichner")}} verwendet wird.

## Syntax

Die Syntax von `<dashed-ident>` ähnelt der von CSS-Bezeichnern (wie Eigenschaftsnamen), mit dem Unterschied, dass sie [groß- und kleinschreibungssensitiv](https://en.wikipedia.org/wiki/Case_sensitivity) ist. Sie beginnt mit zwei Bindestrichen, gefolgt von dem benutzerdefinierten Bezeichner.

Die doppelten Bindestriche am Anfang machen sie beim Durchsehen eines CSS-Codeblocks leicht erkennbar und helfen, Namenskollisionen mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

Genau wie bei [`<custom-ident>`](/de/docs/Web/CSS/custom-ident) werden `<dashed-ident>`s vom Benutzer definiert, aber anders als bei `<custom-ident>` wird `<dashed-ident>` niemals von [CSS](/de/docs/Web/CSS) definiert.

## Beispiele

### Verwendung mit CSS-Benutzerdefinierten Eigenschaften

Wenn `<dashed-ident>` mit [CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) verwendet wird, wird die Eigenschaft zuerst deklariert und dann innerhalb einer [CSS var() Funktion](/de/docs/Web/CSS/var) verwendet.

```css
html {
  --primary-color: red;
  --secondary-color: blue;
  --tertiary-color: green;
}

h1,
h4 {
  color: var(--primary-color);
}

h2,
h5 {
  color: var(--secondary-color);
}

h3,
h6 {
  color: var(--tertiary-color);
}
```

### Verwendung mit @color-profile

Wenn `<dashed-ident>` mit dem [@color-profile](/de/docs/Web/CSS/@color-profile) At-Regel verwendet wird, wird die At-Regel zuerst deklariert und dann innerhalb einer [CSS color() Funktion](/de/docs/Web/CSS/color_value/color) verwendet.

```css
@color-profile --my-color-profile {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}

.header {
  background-color: color(--my-color-profile 0% 70% 20% 0%);
}
```

### Verwendung mit @font-palette-values

Wenn `<dashed-ident>` mit dem [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) At-Regel verwendet wird, wird die At-Regel zuerst deklariert und dann als Wert für die [font-palette](/de/docs/Web/CSS/font-palette) Eigenschaft verwendet.

```css
@font-palette-values --my-palette {
  font-family: Bixa;
  base-palette: 1;
  override-colors: 0 red;
}

h1,
h2,
h3,
h4 {
  font-palette: --my-palette;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

_Da dieser Typ kein realer Typ ist, sondern ein bequemer Typ, der zur Vereinfachung der Definition anderer CSS-Syntax verwendet wird, gibt es keine spezifischen Informationen zur Browser-Kompatibilität._

## Siehe auch

- [&lt;ident&gt;](/de/docs/Web/CSS/ident)
- [&lt;custom-ident&gt;](/de/docs/Web/CSS/custom-ident)

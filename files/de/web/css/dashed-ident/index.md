---
title: <dashed-ident>
slug: Web/CSS/dashed-ident
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Der **`<dashed-ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) bezeichnet eine beliebige Zeichenfolge, die als {{Glossary("identifier", "Identifier")}} verwendet wird.

## Syntax

Die Syntax von `<dashed-ident>` ist ähnlich wie bei CSS-Identifikatoren (wie z.B. Eigenschaftsnamen), mit dem Unterschied, dass sie [case-sensitiv](https://en.wikipedia.org/wiki/Case_sensitivity) ist. Sie beginnt mit zwei Bindestrichen, gefolgt von dem benutzerdefinierten Identifikator.

Die doppelten Bindestriche am Anfang machen sie beim Durchlesen eines CSS-Codeblocks leicht erkennbar und helfen, Namenskollisionen mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

Genau wie [`<custom-ident>`](/de/docs/Web/CSS/custom-ident) werden `<dashed-ident>`s vom Benutzer definiert, aber im Gegensatz zu `<custom-ident>` wird [CSS](/de/docs/Web/CSS) niemals einen `<dashed-ident>` definieren.

## Beispiele

### Verwendung mit CSS-Benutzereigenschaften

Wenn `<dashed-ident>` mit [CSS-Benutzereigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) verwendet wird, wird die Eigenschaft zuerst deklariert und dann innerhalb einer [CSS var() Funktion](/de/docs/Web/CSS/var) verwendet.

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

Wenn `<dashed-ident>` mit der [@color-profile](/de/docs/Web/CSS/@color-profile) at-rule verwendet wird, wird die at-rule zuerst deklariert und dann innerhalb einer [CSS color() Funktion](/de/docs/Web/CSS/color_value/color) verwendet.

```css
@color-profile --my-color-profile {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}

.header {
  background-color: color(--my-color-profile 0% 70% 20% 0%);
}
```

### Verwendung mit @font-palette-values

Wenn `<dashed-ident>` mit der [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) at-rule verwendet wird, wird die at-rule zuerst deklariert und dann als Wert für die [font-palette](/de/docs/Web/CSS/Reference/Properties/font-palette) Eigenschaft verwendet.

```css
@font-palette-values --my-palette {
  font-family: "Bixa";
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

_Da dieser Typ kein echter Typ ist, sondern ein bequemer Typ, der verwendet wird, um die Definition anderer CSS-Syntax zu vereinfachen, gibt es keine Browser-Kompatibilitätsinformationen an sich._

## Siehe auch

- [&lt;ident&gt;](/de/docs/Web/CSS/ident)
- [&lt;custom-ident&gt;](/de/docs/Web/CSS/custom-ident)

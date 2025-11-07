---
title: <dashed-ident>
slug: Web/CSS/Reference/Values/dashed-ident
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<dashed-ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) bezeichnet eine beliebige Zeichenkette, die als {{Glossary("identifier", "Identifikator")}} verwendet wird.

## Syntax

Die Syntax von `<dashed-ident>` ähnelt CSS-Identifikatoren (wie Eigenschaftsnamen), mit der Ausnahme, dass sie [groß-/kleinschreibungssensitiv](https://en.wikipedia.org/wiki/Case_sensitivity) ist. Sie beginnt mit zwei Bindestrichen, gefolgt vom benutzerdefinierten Identifikator.

Die doppelten Bindestriche am Anfang machen sie beim Lesen durch einen CSS-Codeblock leicht erkennbar und helfen, Namenskollisionen mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

Wie [`<custom-ident>`](/de/docs/Web/CSS/Reference/Values/custom-ident) wird `<dashed-ident>` vom Benutzer definiert, aber im Gegensatz zu `<custom-ident>` wird [CSS](/de/docs/Web/CSS) niemals ein `<dashed-ident>` definieren.

## Beispiele

### Verwendung mit CSS-Benutzereigenschaften

Wenn `<dashed-ident>` mit [CSS-Benutzereigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) verwendet wird, wird die Eigenschaft zuerst deklariert und dann innerhalb einer [CSS var()-Funktion](/de/docs/Web/CSS/Reference/Values/var) verwendet.

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

Wenn `<dashed-ident>` mit der [@color-profile](/de/docs/Web/CSS/Reference/At-rules/@color-profile) At-Regel verwendet wird, wird die At-Regel zuerst deklariert und dann innerhalb einer [CSS color()-Funktion](/de/docs/Web/CSS/Reference/Values/color_value/color) verwendet.

```css
@color-profile --my-color-profile {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}

.header {
  background-color: color(--my-color-profile 0% 70% 20% 0%);
}
```

### Verwendung mit @font-palette-values

Wenn `<dashed-ident>` mit der [@font-palette-values](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values) At-Regel verwendet wird, wird die At-Regel zuerst deklariert und dann als Wert für die [font-palette](/de/docs/Web/CSS/Reference/Properties/font-palette) Eigenschaft verwendet.

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

_Da dieser Typ kein echter Typ, sondern ein Komforttyp ist, der zur Vereinfachung der Definition anderer CSS-Syntax verwendet wird, gibt es keine Browser-Kompatibilitätsinformationen als solche._

## Siehe auch

- [&lt;ident&gt;](/de/docs/Web/CSS/Reference/Values/ident)
- [&lt;custom-ident&gt;](/de/docs/Web/CSS/Reference/Values/custom-ident)

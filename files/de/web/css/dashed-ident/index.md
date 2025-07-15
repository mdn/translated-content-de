---
title: <dashed-ident>
slug: Web/CSS/dashed-ident
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<dashed-ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) bezeichnet einen beliebigen String, der als {{Glossary("identifier", "Bezeichner")}} verwendet wird.

## Syntax

Die Syntax von `<dashed-ident>` ähnelt den CSS-Bezeichnern (wie z.B. Eigenschaftsnamen), mit der Ausnahme, dass sie [groß- und kleinschreibungssensitiv](https://en.wikipedia.org/wiki/Case_sensitivity) ist. Sie beginnt mit zwei Bindestrichen, gefolgt vom benutzerdefinierten Bezeichner.

Der doppelte Bindestrich am Anfang macht sie leicht erkennbar, wenn Sie einen CSS-Codeblock durchgehen, und hilft, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

Ähnlich wie [`<custom-ident>`](/de/docs/Web/CSS/custom-ident) werden `<dashed-ident>`s vom Benutzer definiert, aber im Gegensatz zu `<custom-ident>` wird CSS niemals ein `<dashed-ident>` definieren.

## Beispiele

### Verwendung mit CSS-Benutzervariablen

Wenn `<dashed-ident>` mit [CSS-Benutzervariablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) verwendet wird, wird die Variable zuerst deklariert und dann innerhalb einer [CSS var() Funktion](/de/docs/Web/CSS/var) verwendet.

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

Wenn `<dashed-ident>` mit der [@color-profile](/de/docs/Web/CSS/@color-profile) At-Regel verwendet wird, wird die At-Regel zuerst deklariert und dann innerhalb einer [CSS color() Funktion](/de/docs/Web/CSS/color_value/color) verwendet.

```css
@color-profile --my-color-profile {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}

.header {
  background-color: color(--my-color-profile 0% 70% 20% 0%);
}
```

### Verwendung mit @font-palette-values

Wenn `<dashed-ident>` mit der [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) At-Regel verwendet wird, wird die At-Regel zuerst deklariert und dann als Wert für die [font-palette](/de/docs/Web/CSS/font-palette) Eigenschaft verwendet.

```css
@font-palette-values --my-palette {
  font-family: Bixa;
  base-palette: 1;
  override-colors: 0 #ff0000;
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

_Da dieser Typ kein tatsächlicher Typ ist, sondern ein Hilfstyp, der verwendet wird, um die Definition anderer CSS-Syntax zu vereinfachen, gibt es keine Browser-Kompatibilitätsinformationen als solche._

## Siehe auch

- [&lt;ident&gt;](/de/docs/Web/CSS/ident)
- [&lt;custom-ident&gt;](/de/docs/Web/CSS/custom-ident)

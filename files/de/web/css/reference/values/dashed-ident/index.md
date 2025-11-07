---
title: <dashed-ident>
slug: Web/CSS/Reference/Values/dashed-ident
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`<dashed-ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) bezeichnet einen beliebigen String, der als {{Glossary("identifier", "Identifier")}} verwendet wird.

## Syntax

Die Syntax von `<dashed-ident>` ähnelt CSS-Identifikatoren (wie Eigenschaftsnamen), mit der Ausnahme, dass sie [case-sensitiv](https://en.wikipedia.org/wiki/Case_sensitivity) ist. Sie beginnt mit zwei Bindestrichen, gefolgt vom benutzerdefinierten Identifier.

Der doppelte Bindestrich am Anfang macht sie leicht erkennbar beim Lesen eines CSS-Codeblocks und hilft, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

Genau wie [`<custom-ident>`](/de/docs/Web/CSS/Reference/Values/custom-ident) werden `<dashed-ident>`s vom Benutzer definiert, aber im Gegensatz zu `<custom-ident>` wird CSS niemals ein `<dashed-ident>` definieren.

## Beispiele

### Verwendung mit CSS-Benutzerdefinierten Eigenschaften

Wenn `<dashed-ident>` mit [CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) verwendet wird, wird die Eigenschaft zuerst deklariert und danach innerhalb einer [CSS var() Funktion](/de/docs/Web/CSS/Reference/Values/var) verwendet.

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

Wenn `<dashed-ident>` mit der [@color-profile](/de/docs/Web/CSS/Reference/At-rules/@color-profile) At-Regel verwendet wird, wird die At-Regel zuerst deklariert und danach innerhalb einer [CSS color() Funktion](/de/docs/Web/CSS/Reference/Values/color_value/color) verwendet.

```css
@color-profile --my-color-profile {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}

.header {
  background-color: color(--my-color-profile 0% 70% 20% 0%);
}
```

### Verwendung mit @font-palette-values

Wenn `<dashed-ident>` mit der [@font-palette-values](/de/docs/Web/CSS/Reference/At-rules/@font-palette-values) At-Regel verwendet wird, wird die At-Regel zuerst deklariert und danach als Wert für die [font-palette](/de/docs/Web/CSS/Reference/Properties/font-palette) Eigenschaft verwendet.

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

_Da dieser Typ kein echter Typ ist, sondern ein Hilfstyp zur Vereinfachung der Definition anderer CSS-Syntax, gibt es keine Angaben zur Browser-Kompatibilität an sich._

## Siehe auch

- [&lt;ident&gt;](/de/docs/Web/CSS/Reference/Values/ident)
- [&lt;custom-ident&gt;](/de/docs/Web/CSS/Reference/Values/custom-ident)

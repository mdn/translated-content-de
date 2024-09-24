---
title: <strich-ident>
slug: Web/CSS/dashed-ident
l10n:
  sourceCommit: 34bc6ac7c5d03e5891bf94b0d4ebeccb0e7a29e5
---

{{CSSRef}}

Der **`<dashed-ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) bezeichnet eine beliebige Zeichenkette, die als {{glossary("Identifier")}} verwendet wird.

## Syntax

Die Syntax von `<dashed-ident>` ist ähnlich wie die von CSS-Identifikatoren (wie Eigenschaftsnamen), mit der Ausnahme, dass sie [groß- und kleinschreibungssensitiv](https://en.wikipedia.org/wiki/Case_sensitivity) ist. Sie beginnt mit zwei Bindestrichen, gefolgt von dem vom Benutzer definierten Identifikator.

Der doppelte Bindestrich am Anfang macht sie leicht erkennbar, wenn man durch einen CSS-Codeblock liest, und hilft, Namenskollisionen mit Standard-CSS-Schlüsselwörtern zu vermeiden.

Genau wie [`<custom-ident>`](/de/docs/Web/CSS/custom-ident) werden `<dashed-ident>`s vom Benutzer definiert, aber im Gegensatz zu `<custom-ident>` wird [CSS](/de/docs/Web/CSS) niemals ein `<dashed-ident>` definieren.

## Beispiele

### Verwendung mit benutzerdefinierten CSS-Eigenschaften

Wenn `<dashed-ident>` mit [benutzerdefinierten CSS-Eigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties) verwendet wird, wird die Eigenschaft zunächst deklariert und dann innerhalb einer [CSS var() Funktion](/de/docs/Web/CSS/var) verwendet.

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

Wenn `<dashed-ident>` mit der [@color-profile](/de/docs/Web/CSS/@color-profile) At-Regel verwendet wird, wird die At-Regel zunächst deklariert und dann innerhalb einer [CSS color() Funktion](/de/docs/Web/CSS/color_value/color) verwendet.

```css
@color-profile --my-color-profile {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}

.header {
  background-color: color(--my-color-profile 0% 70% 20% 0%);
}
```

### Verwendung mit @font-palette-values

Wenn `<dashed-ident>` mit der [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) At-Regel verwendet wird, wird die At-Regel zunächst deklariert und dann als Wert für die [font-palette](/de/docs/Web/CSS/font-palette) Eigenschaft verwendet.

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

_Da dieser Typ kein echter Typ ist, sondern ein bequemer Typ, der zur Vereinfachung der Definition anderer CSS-Syntax verwendet wird, gibt es keine Informationen zur Browser-Kompatibilität._

## Siehe auch

- [&lt;ident&gt;](/de/docs/Web/CSS/ident)
- [&lt;custom-ident&gt;](/de/docs/Web/CSS/custom-ident)

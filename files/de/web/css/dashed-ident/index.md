---
title: <dashed-ident>
slug: Web/CSS/dashed-ident
l10n:
  sourceCommit: 34bc6ac7c5d03e5891bf94b0d4ebeccb0e7a29e5
---

{{CSSRef}}

Der **`<dashed-ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) bezeichnet eine beliebige Zeichenkette, die als [Identifier](/de/docs/Glossary/identifier) verwendet wird.

## Syntax

Die Syntax von `<dashed-ident>` ähnelt CSS-Identifikatoren (wie Eigenschaftsnamen), mit der Ausnahme, dass sie [case-sensitive](https://en.wikipedia.org/wiki/Case_sensitivity) sind. Sie beginnen mit zwei Bindestrichen, gefolgt vom benutzerdefinierten Identifier.

Die doppelten Bindestriche am Anfang machen sie leicht erkennbar, wenn man einen CSS-Codeblock liest, und helfen, Namenskonflikte mit Standard-CSS-Schlüsselwörtern zu vermeiden.

Genau wie [`<custom-ident>`](/de/docs/Web/CSS/custom-ident) werden `<dashed-ident>`s vom Benutzer definiert, jedoch wird CSS im Gegensatz zu `<custom-ident>` niemals ein `<dashed-ident>` definieren.

## Beispiele

### Verwendung mit CSS benutzerdefinierten Eigenschaften

Wenn `<dashed-ident>` mit [CSS benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties) verwendet wird, wird die Eigenschaft zuerst deklariert und dann innerhalb einer [CSS var() Funktion](/de/docs/Web/CSS/var) verwendet.

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

Wenn `<dashed-ident>` mit der [@color-profile](/de/docs/Web/CSS/@color-profile) Regel verwendet wird, wird die Regel zuerst deklariert und dann innerhalb einer [CSS color() Funktion](/de/docs/Web/CSS/color_value/color) verwendet.

```css
@color-profile --my-color-profile {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}

.header {
  background-color: color(--my-color-profile 0% 70% 20% 0%);
}
```

### Verwendung mit @font-palette-values

Wenn `<dashed-ident>` mit der [@font-palette-values](/de/docs/Web/CSS/@font-palette-values) Regel verwendet wird, wird die Regel zuerst deklariert und dann als Wert für die [font-palette](/de/docs/Web/CSS/font-palette) Eigenschaft verwendet.

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

_Da dieser Typ kein echter Typ, sondern ein Convenience-Typ ist, der zur Vereinfachung der Definition anderer CSS-Syntax verwendet wird, gibt es keine Browser-Kompatibilitätsinformationen als solche._

## Siehe auch

- [&lt;ident&gt;](/de/docs/Web/CSS/ident)
- [&lt;custom-ident&gt;](/de/docs/Web/CSS/custom-ident)

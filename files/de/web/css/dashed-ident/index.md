---
title: <dashed-ident>
slug: Web/CSS/dashed-ident
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<dashed-ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) bezeichnet eine beliebige Zeichenkette, die als {{Glossary("identifier", "Bezeichner")}} verwendet wird.

## Syntax

Die Syntax von `<dashed-ident>` ähnelt der von CSS-Bezeichnern (wie Eigenschaftsnamen), mit der Ausnahme, dass sie [groß-/kleinschreibungsempfindlich](https://en.wikipedia.org/wiki/Case_sensitivity) ist. Sie beginnt mit zwei Bindestrichen, gefolgt von dem benutzerdefinierten Bezeichner.

Die doppelten Bindestriche am Anfang machen sie beim Lesen eines CSS-Codeblocks leicht erkennbar und helfen, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

Ähnlich wie [`<custom-ident>`](/de/docs/Web/CSS/custom-ident) wird `<dashed-ident>` vom Benutzer definiert, jedoch im Gegensatz zu `<custom-ident>` wird [CSS](/de/docs/Web/CSS) niemals einen `<dashed-ident>` definieren.

## Beispiele

### Verwendung mit CSS-Benutzerdefinierten Eigenschaften

Wenn `<dashed-ident>` mit [CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) verwendet wird, wird die Eigenschaft zunächst deklariert und dann innerhalb einer [CSS var()-Funktion](/de/docs/Web/CSS/var) genutzt.

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

Wenn `<dashed-ident>` mit der [@color-profile](/de/docs/Web/CSS/@color-profile) Regel verwendet wird, wird die Regel zuerst deklariert und dann innerhalb einer [CSS color()-Funktion](/de/docs/Web/CSS/color_value/color) genutzt.

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

_Da dieser Typ kein echter Typ ist, sondern ein praktischer Typ, der zur Vereinfachung der Definition anderer CSS-Syntax verwendet wird, gibt es keine Informationen zur Browser-Kompatibilität._

## Siehe auch

- [&lt;ident&gt;](/de/docs/Web/CSS/ident)
- [&lt;custom-ident&gt;](/de/docs/Web/CSS/custom-ident)

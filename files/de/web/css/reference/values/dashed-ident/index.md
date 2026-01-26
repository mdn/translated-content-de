---
title: <dashed-ident>
slug: Web/CSS/Reference/Values/dashed-ident
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Der **`<dashed-ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) bezeichnet eine beliebige Zeichenkette, die als {{Glossary("identifier", "Identifikator")}} verwendet wird.

## Syntax

Die Syntax von `<dashed-ident>` ähnelt der von CSS-Identifikatoren (wie Eigenschaftsnamen), mit dem Unterschied, dass sie [Groß- und Kleinschreibung berücksichtigt](https://de.wikipedia.org/wiki/Schriftart). Sie beginnt mit zwei Bindestrichen, gefolgt von dem benutzerdefinierten Identifikator.

Der doppelte Bindestrich am Anfang macht sie beim Lesen eines CSS-Codeblocks leicht erkennbar und hilft, Namenskollisionen mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

Genau wie {{cssxref("custom-ident")}} werden `<dashed-ident>`s vom Benutzer definiert, aber im Gegensatz zu `<custom-ident>` wird `<dashed-ident>` von [CSS](/de/docs/Web/CSS) niemals selbst definiert.

## Beispiele

### Verwendung mit CSS-Benutzervariablen

Wenn `<dashed-ident>` mit [CSS-Benutzervariablen](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) verwendet wird, wird die Eigenschaft zuerst deklariert und dann innerhalb einer [CSS var()-Funktion](/de/docs/Web/CSS/Reference/Values/var) verwendet.

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

_Da dieser Typ kein echter Datentyp, sondern ein Hilfstyp ist, der verwendet wird, um die Definition anderer CSS-Syntaxen zu vereinfachen, gibt es keine spezifischen Informationen zur Browser-Kompatibilität._

## Siehe auch

- [&lt;ident&gt;](/de/docs/Web/CSS/Reference/Values/ident)
- [&lt;custom-ident&gt;](/de/docs/Web/CSS/Reference/Values/custom-ident)

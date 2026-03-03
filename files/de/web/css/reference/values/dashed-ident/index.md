---
title: <dashed-ident>
slug: Web/CSS/Reference/Values/dashed-ident
l10n:
  sourceCommit: a04faa750b0557791271a42d53a444601ff7fa6c
---

Der **`<dashed-ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) ist ein groß-/kleinschreibungssensitiver {{cssxref("custom-ident")}}, der mit zwei Bindestrichen beginnt und eine beliebige Zeichenkette bezeichnet, die als {{Glossary("identifier", "Identifier")}} verwendet wird.

## Syntax

Die Syntax von `<dashed-ident>` ist ähnlich wie bei CSS-Identifikatoren (wie Eigenschaftsnamen), mit dem Unterschied, dass sie groß-/kleinschreibungssensitiv ist. Es handelt sich um einen benutzerdefinierten Bezeichner, dem zwei Bindestriche (`--`) vorangestellt sind.

Die doppelten Bindestriche am Anfang machen sie beim Durchlesen eines CSS-Codeblocks leicht erkennbar und helfen, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

Genau wie {{cssxref("custom-ident")}}s werden `<dashed-ident>`s vom Benutzer definiert. Allerdings werden einige `<custom-ident>`s von der CSS-Sprache selbst definiert; `<dashed-ident>`s werden niemals in CSS definiert.

## Beispiele

### Verwendung mit CSS-Benutzerdefinierten Eigenschaften

Wenn ein `<dashed-ident>` als [CSS-Benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) verwendet wird, wird die Eigenschaft zuerst deklariert und dann wird das `<dashed-ident>` innerhalb einer [CSS `var()` Funktion](/de/docs/Web/CSS/Reference/Values/var) verwendet.

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

Wenn ein `<dashed-ident>` mit der {{cssxref("@color-profile")}} At-Regel verwendet wird, wird die At-Regel zuerst deklariert und dann wird das `<dashed-ident>` innerhalb einer [CSS `color()` Funktion](/de/docs/Web/CSS/Reference/Values/color_value/color) verwendet.

```css
@color-profile --my-color-profile {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}

.header {
  background-color: color(--my-color-profile 0% 70% 20% 0%);
}
```

### Verwendung mit @font-palette-values

Wenn ein `<dashed-ident>` mit der {{cssxref("@font-palette-values")}} At-Regel verwendet wird, wird die At-Regel zuerst deklariert und dann wird das `<dashed-ident>` als Wert für die {{cssxref("font-palette")}} Eigenschaft verwendet.

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

_Da dieser Typ kein echter Typ ist, sondern ein Bequemlichkeitstyp, der zur Vereinfachung der Definition anderer CSS-Syntax verwendet wird, gibt es keine Browser-Kompatibilitätsinformationen._

## Siehe auch

- {{cssxref("ident")}}
- {{cssxref("custom-ident")}}

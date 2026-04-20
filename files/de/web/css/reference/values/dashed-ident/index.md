---
title: "`<dashed-ident>` CSS-Typ"
short-title: <dashed-ident>
slug: Web/CSS/Reference/Values/dashed-ident
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<dashed-ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) ist ein [Groß-/Kleinschreibung beachtender](<{{cssxref("custom-ident")}}>) Bezeichner, der mit zwei Bindestrichen beginnt und eine beliebige Zeichenfolge darstellt, die als {{Glossary("identifier", "Bezeichner")}} verwendet wird.

## Syntax

Die Syntax von `<dashed-ident>` ähnelt den CSS-Bezeichnern (wie Eigenschaftsnamen), außer dass sie die Groß-/Kleinschreibung beachtet. Es handelt sich um einen benutzerdefinierten Bezeichner, dem zwei Bindestriche (`--`) vorangestellt sind.

Der doppelte Bindestrich am Anfang macht sie bei der Durchsicht eines CSS-Codeblocks leicht erkennbar und hilft, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

Genau wie {{cssxref("custom-ident")}}s werden `<dashed-ident>`s vom Benutzer definiert. Allerdings sind einige `<custom-ident>`s in der CSS-Sprache selbst definiert; `<dashed-ident>`s werden nie in CSS definiert.

## Beispiele

### Verwendung mit benutzerdefinierten Eigenschaften in CSS

Wenn ein `<dashed-ident>` als [CSS-Benutzereigenschaft](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) verwendet wird, wird die Eigenschaft zuerst deklariert, und dann wird das `<dashed-ident>` innerhalb einer [CSS `var()` Funktion](/de/docs/Web/CSS/Reference/Values/var) verwendet.

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

Wenn ein `<dashed-ident>` mit der {{cssxref("@color-profile")}} At-Regel verwendet wird, wird die At-Regel zuerst deklariert, und dann wird das `<dashed-ident>` innerhalb einer [CSS `color()` Funktion](/de/docs/Web/CSS/Reference/Values/color_value/color) verwendet.

```css
@color-profile --my-color-profile {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}

.header {
  background-color: color(--my-color-profile 0% 70% 20% 0%);
}
```

### Verwendung mit @font-palette-values

Wenn ein `<dashed-ident>` mit der {{cssxref("@font-palette-values")}} At-Regel verwendet wird, wird die At-Regel zuerst deklariert, und dann wird das `<dashed-ident>` als Wert für die {{cssxref("font-palette")}} Eigenschaft verwendet.

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

_Da dieser Typ kein wirklicher Typ ist, sondern ein Hilfstyp, der zur Vereinfachung der Definition anderer CSS-Syntax verwendet wird, gibt es keine Informationen zur Browser-Kompatibilität._

## Siehe auch

- {{cssxref("ident")}}
- {{cssxref("custom-ident")}}

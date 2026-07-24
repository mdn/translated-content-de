---
title: "`<dashed-ident>` CSS-Typ"
short-title: <dashed-ident>
slug: Web/CSS/Reference/Values/dashed-ident
l10n:
  sourceCommit: 35cd8b781219157e42b289364754cff862c2dd1a
---

Der **`<dashed-ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) ist ein groß-/kleinschreibungssensitiver {{cssxref("custom-ident")}}, der mit zwei Bindestrichen beginnt und eine beliebige Zeichenfolge darstellt, die als {{Glossary("identifier", "Bezeichner")}} verwendet wird.

## Syntax

Die Syntax von `<dashed-ident>` ähnelt der von CSS-Bezeichnern (wie z.B. Eigenschaftsnamen), mit der Ausnahme, dass sie groß-/kleinschreibungssensitiv ist. Es handelt sich um einen benutzerdefinierten Bezeichner, der mit zwei Bindestrichen (`--`) vorangestellt ist.

Die doppelten Bindestriche am Anfang machen sie leicht identifizierbar, wenn man durch einen CSS-Codeblock liest, und helfen, Namenskonflikte mit Standard-CSS-Schlüsselwörtern zu vermeiden.

Genau wie {{cssxref("custom-ident")}}s sind `<dashed-ident>`s vom Benutzer definiert. Jedoch sind einige `<custom-ident>`s von der CSS-Sprache selbst definiert; `<dashed-ident>`s werden niemals in CSS definiert.

## Beispiele

### Verwendung mit CSS-Benutzereigenschaften

Wenn ein `<dashed-ident>` als [CSS-Benutzereigenschaft](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) verwendet wird, wird die Eigenschaft zuerst deklariert und dann wird das `<dashed-ident>` innerhalb einer [CSS-`var()`-Funktion](/de/docs/Web/CSS/Reference/Values/var) benutzt.

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

Wenn ein `<dashed-ident>` mit der {{cssxref("@color-profile")}} at-rule verwendet wird, wird die at-rule zuerst deklariert und dann das `<dashed-ident>` innerhalb einer [CSS-`color()`-Funktion](/de/docs/Web/CSS/Reference/Values/color_value/color) benutzt.

```css
@color-profile --my-color-profile {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}

.header {
  background-color: color(--my-color-profile 0% 70% 20% 0%);
}
```

### Verwendung mit @font-palette-values

Wenn ein `<dashed-ident>` mit der {{cssxref("@font-palette-values")}} at-rule verwendet wird, wird die at-rule zuerst deklariert und dann das `<dashed-ident>` als Wert für die {{cssxref("font-palette")}} Eigenschaft benutzt.

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

### Verwendung mit env() und param()

Wenn ein `<dashed-ident>` in einer externen Ressource in einer {{cssxref("env")}} CSS-Funktion verwendet wird, kann es mit der {{cssxref("param")}} CSS-Funktion aktualisiert werden.

```svg
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="env(--color, black)" d="..." />
</svg>
```

```css
path:hover {
  link-parameters: param(--color, tomato);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

_Da dieser Typ kein echter Typ ist, sondern ein praktischer Typ, der zur Vereinfachung der Definition anderer CSS-Syntax verwendet wird, gibt es keine Browser-Kompatibilitätsinformationen in dem Sinne._

## Siehe auch

- {{cssxref("ident")}}
- {{cssxref("custom-ident")}}

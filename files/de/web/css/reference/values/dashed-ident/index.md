---
title: CSS-Typ `<dashed-ident>`
short-title: <dashed-ident>
slug: Web/CSS/Reference/Values/dashed-ident
l10n:
  sourceCommit: 74f6e26e70721281aeb500ba4f8c1f06f20b0100
---

Der **`<dashed-ident>`**-[CSS](/de/docs/Web/CSS)-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) ist ein {{cssxref("custom-ident")}}, das mit zwei Bindestrichen beginnt und bei dem die Groß- und Kleinschreibung beachtet wird. Es bezeichnet eine beliebige Zeichenfolge, die als {{Glossary("identifier", "Bezeichner")}} verwendet wird.

## Syntax

Die Syntax von `<dashed-ident>` ähnelt der von CSS-Bezeichnern (etwa Eigenschaftsnamen), allerdings wird die Groß- und Kleinschreibung beachtet. Es handelt sich um einen benutzerdefinierten Bezeichner, dem zwei Bindestriche (`--`) vorangestellt sind.

Die beiden Bindestriche am Anfang machen diese Bezeichner beim Lesen eines CSS-Codeblocks leicht erkennbar und helfen, Namenskonflikte mit standardmäßigen CSS-Schlüsselwörtern zu vermeiden.

Wie {{cssxref("custom-ident")}}s werden `<dashed-ident>`s vom Benutzer definiert. Einige `<custom-ident>`s sind jedoch durch die CSS-Sprache selbst definiert; `<dashed-ident>`s werden immer vom Benutzer definiert.

## Beispiele

### Verwendung mit benutzerdefinierten CSS-Eigenschaften

Wenn ein `<dashed-ident>` als [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) verwendet wird, wird die Eigenschaft zunächst deklariert. Anschließend wird das `<dashed-ident>` innerhalb einer [CSS-`var()`-Funktion](/de/docs/Web/CSS/Reference/Values/var) verwendet.

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

Wenn ein `<dashed-ident>` mit der At-Regel {{cssxref("@color-profile")}} verwendet wird, wird zunächst die At-Regel deklariert. Anschließend wird das `<dashed-ident>` innerhalb einer [CSS-`color()`-Funktion](/de/docs/Web/CSS/Reference/Values/color_value/color) verwendet.

```css
@color-profile --my-color-profile {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}

.header {
  background-color: color(--my-color-profile 0% 70% 20% 0%);
}
```

### Verwendung mit @font-palette-values

Wenn ein `<dashed-ident>` mit der At-Regel {{cssxref("@font-palette-values")}} verwendet wird, wird zunächst die At-Regel deklariert. Anschließend wird das `<dashed-ident>` als Wert für die Eigenschaft {{cssxref("font-palette")}} verwendet.

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

Wenn ein `<dashed-dent>` in einer externen Ressource innerhalb der CSS-Funktion {{cssxref("env")}} verwendet wird, kann es mithilfe der CSS-Funktion {{cssxref("param")}} aktualisiert werden.

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

_Da es sich bei diesem Typ nicht um einen eigenständigen Typ, sondern um einen Hilfstyp handelt, der die Definition anderer CSS-Syntax vereinfacht, gibt es dafür keine eigenen Informationen zur Browser-Kompatibilität._

## Siehe auch

- {{cssxref("ident")}}
- {{cssxref("custom-ident")}}

---
title: "`param()` CSS-Funktion"
short-title: param()
slug: Web/CSS/Reference/Values/param
l10n:
  sourceCommit: 35cd8b781219157e42b289364754cff862c2dd1a
---

Die **`param()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) wird verwendet, um Link-Parameter festzulegen. Dies kann mit der {{cssxref("link-parameters")}} CSS-Funktion, im Fragment-URL einer externen Ressource oder im [`<url-modifier>`](/de/docs/Web/CSS/Reference/Values/url_function#url-modifier) der `url()` CSS-Funktion erfolgen.

## Syntax

```css
/* a single value */
param(--color, red);

/* multiple values */
param(--color1, red),
param(--color2, blue),
param(--color3, green);
```

## Werte

- [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident)
  - Ein `<dashed-ident>` ist eine benutzerdefinierte Variable, die als Identifikator in der {{cssxref("env")}} CSS-Funktion verwendet wird, um den Wert zu aktualisieren.

- `<declaration_value>` {{optional_inline}}
  - : Ein `<declaration_value>` ist der Wert des zu aktualisierenden Attributs. Wenn der `<declaration-value>` weggelassen wird, stellt er einen leeren Wert dar.

## Formale Definition

{{CSSInfo}}

## Beispiele

Alle folgenden Beispiele verwenden die gleiche SVG-Datei, welche Attribute mit der {{cssxref("env")}} CSS-Funktion festgelegt hat.

```svg
<!-- example of the code in the external SVG file -->
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect
    width="100"
    height="100"
    stroke="env(--color1, chartreuse)"
    stroke-width="10"
    fill="env(--color2, darkgreen)"
   />
</svg>
```

### Verwendung der `link-parameters` Eigenschaft

In diesem Beispiel werden die SVG-Attribute mit der {{cssxref("link-parameters")}} CSS-Eigenschaft und der `param()` Funktion aktualisiert.

```html
<div class="squares">
  <img
    class="original"
    src="square.svg"
    alt="A square with a chartreuse border and a dark green fill." />
  <img
    class="greyscale"
    src="square.svg"
    alt="A square with a slate grey border and a light grey fill." />
  <img
    class="high-contrast"
    src="square.svg"
    alt="A square with a fuchsia border and a yellow fill." />
</div>
```

```css hidden
.squares {
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
img {
  height: 100%;
}
```

```css-nolint
.greyscale {
  link-parameters:
    param(--color1, slategrey),
    param(--color2, lightgrey);
  &:hover {
    link-parameters:
      param(--color1, lightgrey),
      param(--color2, slategrey);
  }
}
.high-contrast {
  link-parameters:
    param(--color1, fuchsia),
    param(--color2, yellow);
  &:hover {
    link-parameters:
      param(--color1, yellow),
      param(--color2, fuchsia);
  }
}
```

{{EmbedLiveSample('using_link-parameters_property', '100%', '210px')}}

### Übergabe der `param()` in den URL-Modifikator

In diesem Beispiel werden die SVG-Attribute aktualisiert, indem die `param()` Funktion in das URL-Fragment des [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) Attributs des {{htmlelement("img")}} HTML-Elements übergeben wird.

```html-nolint
<img
  src="square.svg#param(--color1, slategrey)&param(--color2, lightgrey)"
  alt="A square with a slate grey border and a light grey fill."
/>
```

### Verwendung von `param()` mit der `background-image` Eigenschaft

In diesem Beispiel werden die SVG-Attribute aktualisiert, indem die `param()` Funktion in den {{cssxref("url","url()")}} Datentyp der {{cssxref("background-image")}} CSS-Eigenschaft übergeben wird.

```css-nolint
.foo {
  background-image: url(
    "square.svg"
    param(--color1, slategrey),
    param(--color2, lightgrey)
  );
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("link-parameters")}}
- {{cssxref("env")}}

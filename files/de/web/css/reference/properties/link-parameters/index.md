---
title: "`link-parameters` CSS property"
short-title: link-parameters
slug: Web/CSS/Reference/Properties/link-parameters
l10n:
  sourceCommit: 35cd8b781219157e42b289364754cff862c2dd1a
---

Die **`link-parameters`** [CSS](/de/docs/Web/CSS) Eigenschaft legt Werte für externe Ressourcen fest, wie etwa SVGs, deren Attribute mit der {{cssxref("env")}} CSS-Funktion gesetzt wurden.

## Syntax

```css-nolint
/* single value */
link-parameters: param(--color, red);

/* multiple values */
link-parameters:
  param(--color1, red),
  param(--color2, blue),
  param(--color3, green);
```

## Werte

- `none`
  - : Es sind keine Link-Parameter angegeben.

- {{cssxref("param")}}
  - : Eine Liste von einem oder mehreren Link-Parametern.

## Formale Definition

{{CSSInfo}}

## Beispiel

### Aktualisieren der Farben einer externen SVG-Datei

In diesem Beispiel ist das ursprüngliche SVG, links, ein Quadrat mit einem `stroke`-Attribut, das mit `env(--color1, chartreuse)` gesetzt wurde, und einem `fill`-Attribut, das mit `env(--color2, darkgreen)` gesetzt wurde. Die `link-parameters`-Eigenschaft wird verwendet, um beide dieser Attribute auf dem aktualisierten Quadrat, rechts, mit mehreren {{cssxref("param")}} CSS-Funktionen zu aktualisieren.

```html
<div class="squares">
  <img
    class="original"
    src="square.svg"
    alt="A square with a chartreuse border and a dark green fill." />
  <img
    class="updated"
    src="square.svg"
    alt="A square with a red border and a tomato fill." />
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
.updated {
  link-parameters:
    param(--color1, red),
    param(--color2, tomato);
}
```

{{EmbedLiveSample('updating_the_colors_of_an_external_SVG_file', '100%', '210px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("param")}}
- {{cssxref("env")}}

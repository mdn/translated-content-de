---
title: outline-width
slug: Web/CSS/outline-width
l10n:
  sourceCommit: aa714bb37625b21b0f40db1f1ea557e773456fa2
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`outline-width`** Eigenschaft legt die Dicke der Umrandung eines Elements fest. Eine Umrandung ist eine Linie, die um ein Element herum gezeichnet wird, außerhalb des {{cssxref("border")}}.

{{EmbedInteractiveExample("pages/css/outline-width.html")}}

Es ist oft bequemer, die Kurzformeigenschaft {{cssxref("outline")}} zu verwenden, wenn das Erscheinungsbild einer Umrandung definiert wird.

## Syntax

```css
/* Keyword values */
outline-width: thin;
outline-width: medium;
outline-width: thick;

/* <length> values */
outline-width: 1px;
outline-width: 0.1em;

/* Global values */
outline-width: inherit;
outline-width: initial;
outline-width: revert;
outline-width: revert-layer;
outline-width: unset;
```

Die `outline-width` Eigenschaft wird als einer der unten aufgeführten Werte angegeben.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Breite der Umrandung, angegeben als `<length>`.
- `thin`
  - : Abhängig vom User-Agent. Typischerweise gleichbedeutend mit `1px` in Desktop-Browsern (einschließlich Firefox).
- `medium`
  - : Abhängig vom User-Agent. Typischerweise gleichbedeutend mit `3px` in Desktop-Browsern (einschließlich Firefox).
- `thick`
  - : Abhängig vom User-Agent. Typischerweise gleichbedeutend mit `5px` in Desktop-Browsern (einschließlich Firefox).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Umrandungsbreite eines Elements

#### HTML

```html
<span id="thin">thin</span>
<span id="medium">medium</span>
<span id="thick">thick</span>
<span id="twopixels">2px</span>
<span id="oneex">1ex</span>
<span id="em">1.2em</span>
```

#### CSS

```css
span {
  outline-style: solid;
  display: inline-block;
  margin: 20px;
}

#thin {
  outline-width: thin;
}

#medium {
  outline-width: medium;
}

#thick {
  outline-width: thick;
}

#twopixels {
  outline-width: 2px;
}

#oneex {
  outline-width: 1ex;
}

#em {
  outline-width: 1.2em;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_an_elements_outline_width', '100%', '80')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("outline")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-color")}}

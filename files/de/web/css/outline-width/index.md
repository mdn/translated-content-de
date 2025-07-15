---
title: outline-width
slug: Web/CSS/outline-width
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die [CSS](/de/docs/Web/CSS) **`outline-width`**-Eigenschaft legt die Dicke des Umrisses eines Elements fest. Ein Umriss ist eine Linie, die um ein Element gezeichnet wird, außerhalb des {{cssxref("border")}}.

{{InteractiveExample("CSS Demo: outline-width")}}

```css interactive-example-choice
outline-width: 12px;
```

```css interactive-example-choice
outline-width: thin;
```

```css interactive-example-choice
outline-width: medium;
```

```css interactive-example-choice
outline-width: thick;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with an outline around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  outline: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

Es ist oft praktischer, die Kurzschreibweise der Eigenschaft {{cssxref("outline")}} zu verwenden, wenn das Erscheinungsbild eines Umrisses definiert wird.

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

Die `outline-width`-Eigenschaft wird als einer der unten aufgeführten Werte angegeben.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Breite des Umrisses, angegeben als `<length>`.
- `thin`
  - : Hängt vom Benutzeragenten ab. Typischerweise entspricht dies `1px` in Desktop-Browsern (einschließlich Firefox).
- `medium`
  - : Hängt vom Benutzeragenten ab. Typischerweise entspricht dies `3px` in Desktop-Browsern (einschließlich Firefox).
- `thick`
  - : Hängt vom Benutzeragenten ab. Typischerweise entspricht dies `5px` in Desktop-Browsern (einschließlich Firefox).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Umrissbreite eines Elements

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

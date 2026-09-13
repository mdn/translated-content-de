---
title: "`outline-width` CSS property"
short-title: outline-width
slug: Web/CSS/Reference/Properties/outline-width
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`outline-width`** legt die Dicke der Kontur eines Elements fest. Eine Kontur ist eine Linie, die um ein Element herum außerhalb von {{cssxref("border")}} gezeichnet wird.

Beim Definieren des Erscheinungsbilds einer Kontur ist es oft praktischer, die Kurzform-Eigenschaft {{cssxref("outline")}} zu verwenden.

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

### Werte

Diese Eigenschaft wird als ein `<line-width>`-Wert angegeben.

- {{cssxref("&lt;line-width&gt;")}}
  - : Definiert die Breite der Kontur, entweder als explizite nicht negative {{cssxref("&lt;length&gt;")}} oder durch die Schlüsselwörter `thin`, `medium` oder `thick`. Der Standardwert ist `medium`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Konturbreite eines Elements

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

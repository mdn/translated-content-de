---
title: outline-style
slug: Web/CSS/outline-style
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`outline-style`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt den Stil der Umrandung eines Elements fest. Eine Umrandung ist eine Linie, die um ein Element herum gezeichnet wird, außerhalb der {{cssxref("border")}}.

{{InteractiveExample("CSS Demo: outline-style")}}

```css interactive-example-choice
outline-style: none;
```

```css interactive-example-choice
outline-style: dotted;
```

```css interactive-example-choice
outline-style: solid;
```

```css interactive-example-choice
outline-style: groove;
```

```css interactive-example-choice
outline-style: inset;
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

Es ist oft praktischer, die Kurzform-Eigenschaft {{cssxref("outline")}} zu verwenden, um das Erscheinungsbild einer Umrandung zu definieren.

## Syntax

```css
/* Keyword values */
outline-style: auto;
outline-style: none;
outline-style: dotted;
outline-style: dashed;
outline-style: solid;
outline-style: double;
outline-style: groove;
outline-style: ridge;
outline-style: inset;
outline-style: outset;

/* Global values */
outline-style: inherit;
outline-style: initial;
outline-style: revert;
outline-style: revert-layer;
outline-style: unset;
```

Die `outline-style`-Eigenschaft wird als einer der unten aufgeführten Werte angegeben.

### Werte

- `auto`
  - : Erlaubt es dem Benutzeragenten, einen benutzerdefinierten Umrandungsstil darzustellen.
- `none`
  - : Es wird keine Umrandung verwendet. Die {{cssxref("outline-width")}} ist `0`.
- `dotted`
  - : Die Umrandung besteht aus einer Reihe von Punkten.
- `dashed`
  - : Die Umrandung besteht aus einer Reihe kurzer Liniensegmente.
- `solid`
  - : Die Umrandung ist eine durchgehende Linie.
- `double`
  - : Die Umrandung besteht aus zwei durchgehenden Linien. Die {{cssxref("outline-width")}} ist die Summe der beiden Linien und des Raums zwischen ihnen.
- `groove`
  - : Die Umrandung sieht aus, als wäre sie in die Seite eingraviert.
- `ridge`
  - : Das Gegenteil von `groove`: Die Umrandung sieht aus, als wäre sie aus der Seite herausgedrückt.
- `inset`
  - : Die Umrandung lässt die Box so aussehen, als wäre sie in die Seite eingebettet.
- `outset`
  - : Das Gegenteil von `inset`: Die Umrandung lässt die Box so aussehen, als käme sie aus der Seite heraus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Umrandungsstil auf auto setzen

Der Wert `auto` gibt einen benutzerdefinierten Umrandungsstil an, der in [der Spezifikation](https://www.w3.org/TR/css-ui-3/#outline-style) beschrieben wird als "typischerweise ein Stil \[der] entweder ein Benutzeroberflächen-Standard für die Plattform ist oder möglicherweise ein Stil, der reicher ist, als in CSS im Detail beschrieben werden kann, z.B. eine Umrandung mit abgerundeten Kanten und halbtransluszenten äußeren Pixeln, die zu leuchten scheinen".

#### HTML

```html
<div>
  <p class="auto">Outline Demo</p>
</div>
```

#### CSS

```css
.auto {
  outline-style: auto; /* same result as "outline: auto" */
}

/* To make the Demo clearer */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Ergebnis

{{ EmbedLiveSample('Setting_outline_style_to_auto') }}

### Umrandungsstil auf gestrichelt und gepunktet setzen

#### HTML

```html
<div>
  <div class="dotted">
    <p class="dashed">Outline Demo</p>
  </div>
</div>
```

#### CSS

```css
.dotted {
  outline-style: dotted; /* same result as "outline: dotted" */
}
.dashed {
  outline-style: dashed;
}

/* To make the Demo clearer */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Ergebnis

{{ EmbedLiveSample('Setting_outline_style_to_dashed_and_dotted') }}

### Umrandungsstil auf solid und double setzen

#### HTML

```html
<div>
  <div class="solid">
    <p class="double">Outline Demo</p>
  </div>
</div>
```

#### CSS

```css
.solid {
  outline-style: solid;
}
.double {
  outline-style: double;
}

/* To make the Demo clearer */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Ergebnis

{{ EmbedLiveSample('Setting_outline_style_to_solid_and_double') }}

### Umrandungsstil auf groove und ridge setzen

#### HTML

```html
<div>
  <div class="groove">
    <p class="ridge">Outline Demo</p>
  </div>
</div>
```

#### CSS

```css
.groove {
  outline-style: groove;
}
.ridge {
  outline-style: ridge;
}

/* To make the Demo clearer */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Ergebnis

{{ EmbedLiveSample('Setting_outline_style_to_groove_and_ridge') }}

### Umrandungsstil auf inset und outset setzen

#### HTML

```html
<div>
  <div class="inset">
    <p class="outset">Outline Demo</p>
  </div>
</div>
```

#### CSS

```css
.inset {
  outline-style: inset;
}
.outset {
  outline-style: outset;
}

/* To make the Demo clearer */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Ergebnis

{{ EmbedLiveSample('Setting_outline_style_to_inset_and_outset') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("outline")}}
- {{cssxref("outline-width")}}
- {{cssxref("outline-color")}}

---
title: outline-style
slug: Web/CSS/outline-style
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Die **`outline-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Stil der Kontur eines Elements fest. Eine Kontur ist eine Linie, die um ein Element herum gezeichnet wird, außerhalb des {{cssxref("border")}}.

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

Es ist oft praktischer, die Kurzschreibweise {{cssxref("outline")}} zu verwenden, wenn man das Erscheinungsbild einer Kontur festlegt.

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

Die `outline-style` Eigenschaft wird als einer der unten aufgeführten Werte angegeben.

### Werte

- `auto`
  - : Erlaubt es dem Benutzeragenten, einen benutzerdefinierten Konturstil darzustellen.
- `none`
  - : Es wird keine Kontur verwendet. Die {{cssxref("outline-width")}} ist `0`.
- `dotted`
  - : Die Kontur besteht aus einer Reihe von Punkten.
- `dashed`
  - : Die Kontur besteht aus einer Reihe von kurzen Liniensegmenten.
- `solid`
  - : Die Kontur ist eine durchgehende Linie.
- `double`
  - : Die Kontur besteht aus zwei Linien. Die {{cssxref("outline-width")}} ist die Summe der beiden Linien und des Raums dazwischen.
- `groove`
  - : Die Kontur sieht aus, als wäre sie in die Seite eingraviert.
- `ridge`
  - : Das Gegenteil von `groove`: Die Kontur sieht aus, als wäre sie aus der Seite herausgedrückt.
- `inset`
  - : Die Kontur lässt die Box so aussehen, als wäre sie in die Seite eingebettet.
- `outset`
  - : Das Gegenteil von `inset`: Die Kontur lässt die Box so aussehen, als käme sie aus der Seite heraus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Konturstil auf auto setzen

Der Wert `auto` gibt einen benutzerdefinierten Konturstil an, der in [der Spezifikation](https://www.w3.org/TR/css-ui-3/#outline-style) als "typischerweise ein Stil [der] entweder eine Benutzeroberflächen-Voreinstellung für die Plattform ist oder vielleicht ein Stil, der reicher ist, als im Detail in CSS beschrieben werden kann, z.B. eine Kontur mit abgerundeten Kanten und halbtransparenten äußeren Pixeln, die zu glühen scheint", beschrieben wird.

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

### Konturstil auf gestrichelt und gepunktet setzen

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

### Konturstil auf durchgehend und doppelt setzen

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

### Konturstil auf eingelassen und erhaben setzen

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

### Konturstil auf eingefügt und herausgesetzt setzen

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

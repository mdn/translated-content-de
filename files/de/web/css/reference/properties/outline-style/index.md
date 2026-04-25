---
title: "`outline-style` CSS property"
short-title: outline-style
slug: Web/CSS/Reference/Properties/outline-style
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`outline-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Stil der Kontur eines Elements fest. Eine Kontur ist eine Linie, die um ein Element gezeichnet wird, außerhalb des {{cssxref("border")}}.

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

Es ist oft bequemer, die Kurzform-Eigenschaft {{cssxref("outline")}} zu verwenden, wenn das Erscheinungsbild einer Kontur definiert wird.

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
  - : Erlaubt dem Benutzeragenten, einen benutzerdefinierten Konturstil zu rendern.
- `none`
  - : Es wird keine Kontur verwendet. Die {{cssxref("outline-width")}} ist `0`.
- `dotted`
  - : Die Kontur ist eine Reihe von Punkten.
- `dashed`
  - : Die Kontur ist eine Reihe von kurzen Liniensegmenten.
- `solid`
  - : Die Kontur ist eine einzelne Linie.
- `double`
  - : Die Kontur besteht aus zwei einzelnen Linien. Die {{cssxref("outline-width")}} ist die Summe der beiden Linien und des Zwischenraums.
- `groove`
  - : Die Kontur sieht aus, als wäre sie in die Seite geschnitzt.
- `ridge`
  - : Das Gegenteil von `groove`: Die Kontur sieht aus, als wäre sie aus der Seite herausgehoben.
- `inset`
  - : Die Kontur lässt die Box so aussehen, als wäre sie in die Seite eingebettet.
- `outset`
  - : Das Gegenteil von `inset`: Die Kontur lässt die Box so aussehen, als käme sie aus der Seite heraus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Outline-Stil auf auto setzen

Der `auto`-Wert zeigt einen benutzerdefinierten Konturstil an, der in [der Spezifikation](https://drafts.csswg.org/css-ui/#outline-style) beschrieben wird als "typischerweise ein Stil \[der] entweder eine Benutzeroberflächen-Voreinstellung für die Plattform ist oder vielleicht ein Stil, der reicher ist, als im Detail in CSS beschrieben werden kann, z. B. ein abgerundeter Kantenstil mit halbtransparenten äußeren Pixeln, die leuchten scheinen".

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

### Outline-Stil auf gestrichelt und gepunktet setzen

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

### Outline-Stil auf durchgehend und doppelt setzen

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

### Outline-Stil auf Rillen und Kante setzen

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

### Outline-Stil auf eingesenkt und erhaben setzen

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

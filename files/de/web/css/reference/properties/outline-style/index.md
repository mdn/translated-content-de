---
title: "`outline-style` CSS property"
short-title: outline-style
slug: Web/CSS/Reference/Properties/outline-style
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

Die **`outline-style`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Stil des Umrisses eines Elements fest. Ein Umriss ist eine Linie, die um ein Element herum gezeichnet wird, außerhalb des {{cssxref("border")}}.

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

Es ist oft bequemer, die Kurzschreibweise {{cssxref("outline")}} zu verwenden, wenn das Erscheinungsbild eines Umrisses definiert wird.

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

### Werte

Diese Eigenschaft wird als einer der folgenden Werte angegeben:

- `auto`
  - : Erlaubt dem User-Agent, einen benutzerdefinierten Umrissstil darzustellen.
- `none`
  - : Es wird kein Umriss verwendet.
- `dotted`
  - : Der Umriss ist eine Reihe von Punkten.
- `dashed`
  - : Der Umriss besteht aus einer Reihe von kurzen Liniensegmenten.
- `solid`
  - : Der Umriss ist eine einzelne Linie.
- `double`
  - : Der Umriss besteht aus zwei einzelnen Linien. Die {{cssxref("outline-width")}} ist die Summe der beiden Linien und dem Raum dazwischen.
- `groove`
  - : Der Umriss sieht aus, als wäre er in die Seite eingeschnitten.
- `ridge`
  - : Das Gegenteil von `groove`: Der Umriss sieht aus, als wäre er aus der Seite herausgehoben.
- `inset`
  - : Der Umriss lässt die Box so aussehen, als wäre sie in die Seite eingebettet.
- `outset`
  - : Das Gegenteil von `inset`: Der Umriss lässt die Box so aussehen, als würde sie aus der Seite herauskommen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Umrissstil auf auto setzen

Der Wert `auto` weist auf einen benutzerdefinierten Umrissstil hin, der in [der Spezifikation](https://drafts.csswg.org/css-ui/#outline-style) beschrieben wird als "typischerweise ein Stil \[der] entweder ein Benutzeroberflächendefault für die Plattform ist oder vielleicht ein Stil, der reicher ist, als im Detail in CSS beschrieben werden kann, z. B. ein Umriss mit abgerundeten Kanten und halbtransluzenten äußeren Pixeln, der zu leuchten scheint".

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

### Umrissstil auf gestrichelt und gepunktet setzen

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

### Umrissstil auf durchgezogen und doppelt setzen

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

### Umrissstil auf Einkerbung und Erhebung setzen

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

### Umrissstil auf vertieft und hervorstehend setzen

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

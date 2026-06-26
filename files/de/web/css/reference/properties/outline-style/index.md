---
title: "`outline-style` CSS property"
short-title: outline-style
slug: Web/CSS/Reference/Properties/outline-style
l10n:
  sourceCommit: a06cf3dca37bb7da1d5e5ad98c5d15a10dde3e8c
---

Die **`outline-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Stil der Umrandung eines Elements fest. Eine Umrandung ist eine Linie, die um ein Element außerhalb des {{cssxref("border")}} gezeichnet wird.

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

Es ist oft praktischer, die Kurzform-Eigenschaft {{cssxref("outline")}} zu verwenden, um das Aussehen einer Umrandung zu definieren.

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

Die `outline-style` Eigenschaft wird mit einem der unten aufgeführten Werte angegeben.

### Werte

- `auto`
  - : Ermöglicht dem Benutzeragenten, einen benutzerdefinierten Umrandungsstil zu rendern.
- `none`
  - : Es wird keine Umrandung verwendet.
- `dotted`
  - : Die Umrandung besteht aus einer Reihe von Punkten.
- `dashed`
  - : Die Umrandung besteht aus einer Reihe von kurzen Liniensegmenten.
- `solid`
  - : Die Umrandung ist eine durchgehende Linie.
- `double`
  - : Die Umrandung besteht aus zwei parallelen Linien. Die {{cssxref("outline-width")}} ist die Summe der beiden Linien und des Abstands dazwischen.
- `groove`
  - : Die Umrandung sieht aus, als wäre sie in die Seite geschnitzt.
- `ridge`
  - : Das Gegenteil von `groove`: Die Umrandung sieht aus, als wäre sie aus der Seite herausgeprägt.
- `inset`
  - : Die Umrandung lässt die Box so aussehen, als wäre sie in die Seite eingebettet.
- `outset`
  - : Das Gegenteil von `inset`: Die Umrandung lässt die Box so aussehen, als würde sie aus der Seite herausragen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Umrandungsstil auf auto setzen

Der `auto` Wert gibt einen benutzerdefinierten Umrandungsstil an, der in [der Spezifikation](https://drafts.csswg.org/css-ui/#outline-style) beschrieben wird als "typischerweise ein Stil, \[der] entweder ein Benutzeroberflächestandard für die Plattform ist, oder vielleicht ein Stil, der reicher ist, als er im Detail in CSS beschrieben werden kann, z.B. eine abgerundete Umrandung mit halbtransparenten äußeren Pixeln, die zu leuchten scheinen".

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

### Umrandungsstil auf durchgehend und doppelt setzen

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

### Umrandungsstil auf vertieft und erhöht setzen

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

### Umrandungsstil auf eingebettet und vorstehend setzen

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

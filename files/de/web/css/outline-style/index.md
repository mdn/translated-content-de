---
title: outline-style
slug: Web/CSS/outline-style
l10n:
  sourceCommit: aa714bb37625b21b0f40db1f1ea557e773456fa2
---

{{CSSRef}}

Die **`outline-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Stil der Umrandung eines Elements fest. Eine Umrandung ist eine Linie, die um ein Element herum gezeichnet wird, außerhalb des {{cssxref("border")}}.

{{EmbedInteractiveExample("pages/css/outline-style.html")}}

Es ist oft praktischer, die Kurzschreibweiseigenschaft {{cssxref("outline")}} zu verwenden, wenn das Erscheinungsbild einer Umrandung definiert werden soll.

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
  - : Ermöglicht dem User-Agent, einen benutzerdefinierten Umrandungsstil darzustellen.
- `none`
  - : Keine Umrandung wird verwendet. Die {{cssxref("outline-width")}} ist `0`.
- `dotted`
  - : Die Umrandung ist eine Reihe von Punkten.
- `dashed`
  - : Die Umrandung ist eine Reihe von kurzen Liniensegmenten.
- `solid`
  - : Die Umrandung ist eine einzige Linie.
- `double`
  - : Die Umrandung besteht aus zwei einzelnen Linien. Die {{cssxref("outline-width")}} ist die Summe der beiden Linien und des Zwischenraums.
- `groove`
  - : Die Umrandung sieht aus, als wäre sie in die Seite geschnitzt.
- `ridge`
  - : Das Gegenteil von `groove`: Die Umrandung sieht aus, als wäre sie aus der Seite herausgehoben.
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

Der `auto`-Wert zeigt einen benutzerdefinierten Umrandungsstil an, der in [der Spezifikation](https://www.w3.org/TR/css-ui-3/#outline-style) beschrieben wird als "typischerweise ein Stil, der entweder ein Benutzeroberflächenstandard der Plattform ist oder vielleicht ein Stil, der reicher ist, als es in CSS im Detail beschrieben werden kann, z. B. eine Umrandung mit abgerundeten Kanten und halbtransluzenten äußeren Pixeln, die leuchtet".

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

---
title: outline-style
slug: Web/CSS/outline-style
l10n:
  sourceCommit: aa714bb37625b21b0f40db1f1ea557e773456fa2
---

{{CSSRef}}

Die **`outline-style`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Stil der Kontur eines Elements fest. Eine Kontur ist eine Linie, die um ein Element herum gezeichnet wird, außerhalb des {{cssxref("border")}}.

{{EmbedInteractiveExample("pages/css/outline-style.html")}}

Es ist oft praktischer, die Kurzschreibweise {{cssxref("outline")}} zu verwenden, wenn das Erscheinungsbild einer Kontur definiert wird.

## Syntax

```css
/* Schlüsselwortwerte */
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

/* Globale Werte */
outline-style: inherit;
outline-style: initial;
outline-style: revert;
outline-style: revert-layer;
outline-style: unset;
```

Die `outline-style`-Eigenschaft wird als einer der unten aufgeführten Werte angegeben.

### Werte

- `auto`
  - : Ermöglicht es dem Benutzeragenten, einen benutzerdefinierten Konturstil darzustellen.
- `none`
  - : Es wird keine Kontur verwendet. Die {{cssxref("outline-width")}} beträgt `0`.
- `dotted`
  - : Die Kontur ist eine Reihe von Punkten.
- `dashed`
  - : Die Kontur ist eine Reihe von kurzen Liniensegmenten.
- `solid`
  - : Die Kontur ist eine durchgehende Linie.
- `double`
  - : Die Kontur besteht aus zwei einzelnen Linien. Die {{cssxref("outline-width")}} ist die Summe der beiden Linien und des Zwischenraums.
- `groove`
  - : Die Kontur sieht aus, als wäre sie in die Seite eingraviert.
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

### Einstellung des outline-Stils auf auto

Der Wert `auto` zeigt einen benutzerdefinierten Konturstil an, wie in [der Spezifikation](https://www.w3.org/TR/css-ui-3/#outline-style) beschrieben, als "typischerweise ein Stil \[der] entweder eine Benutzeroberflächen-Standardeinstellung für die Plattform ist oder möglicherweise ein Stil, der reichhaltiger ist, als im Detail in CSS beschrieben werden kann, z.B. eine abgerundete Kantenkontur mit halbtransparenten äußeren Pixeln, die zu leuchten scheinen".

#### HTML

```html
<div>
  <p class="auto">Outline Demo</p>
</div>
```

#### CSS

```css
.auto {
  outline-style: auto; /* gleiches Ergebnis wie "outline: auto" */
}

/* Um die Demo klarer zu machen */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Ergebnis

{{ EmbedLiveSample('Setting_outline_style_to_auto') }}

### Einstellung des outline-Stils auf dashed und dotted

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
  outline-style: dotted; /* gleiches Ergebnis wie "outline: dotted" */
}
.dashed {
  outline-style: dashed;
}

/* Um die Demo klarer zu machen */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Ergebnis

{{ EmbedLiveSample('Setting_outline_style_to_dashed_and_dotted') }}

### Einstellung des outline-Stils auf solid und double

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

/* Um die Demo klarer zu machen */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Ergebnis

{{ EmbedLiveSample('Setting_outline_style_to_solid_and_double') }}

### Einstellung des outline-Stils auf groove und ridge

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

/* Um die Demo klarer zu machen */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Ergebnis

{{ EmbedLiveSample('Setting_outline_style_to_groove_and_ridge') }}

### Einstellung des outline-Stils auf inset und outset

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

/* Um die Demo klarer zu machen */
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

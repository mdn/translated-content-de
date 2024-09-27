---
title: outline-style
slug: Web/CSS/outline-style
l10n:
  sourceCommit: aa714bb37625b21b0f40db1f1ea557e773456fa2
---

{{CSSRef}}

Die **`outline-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Stil des Rahmens eines Elements fest. Ein Rahmen ist eine Linie, die um ein Element gezeichnet wird, außerhalb des {{cssxref("border")}}.

{{EmbedInteractiveExample("pages/css/outline-style.html")}}

Es ist oft praktischer, die Kurzschreibweise {{cssxref("outline")}} zu verwenden, um das Erscheinungsbild eines Rahmens zu definieren.

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

Die Eigenschaft `outline-style` wird als einer der unten aufgeführten Werte angegeben.

### Werte

- `auto`
  - : Ermöglicht es dem User-Agent, einen benutzerdefinierten Rahmenstil darzustellen.
- `none`
  - : Es wird kein Rahmen verwendet. Die {{cssxref("outline-width")}} ist `0`.
- `dotted`
  - : Der Rahmen besteht aus einer Reihe von Punkten.
- `dashed`
  - : Der Rahmen besteht aus einer Reihe von kurzen Liniensegmenten.
- `solid`
  - : Der Rahmen ist eine durchgehende Linie.
- `double`
  - : Der Rahmen besteht aus zwei durchgehenden Linien. Die {{cssxref("outline-width")}} ist die Summe der beiden Linien und des Abstands zwischen ihnen.
- `groove`
  - : Der Rahmen sieht aus, als wäre er in die Seite geschnitzt.
- `ridge`
  - : Das Gegenteil von `groove`: Der Rahmen sieht aus, als würde er aus der Seite herausragen.
- `inset`
  - : Der Rahmen lässt die Box aussehen, als wäre sie in die Seite eingebettet.
- `outset`
  - : Das Gegenteil von `inset`: Der Rahmen lässt die Box aussehen, als würde sie aus der Seite hervorkommen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Rahmen-Stil auf auto setzen

Der `auto` Wert gibt einen benutzerdefinierten Rahmenstil an, der in [der Spezifikation](https://www.w3.org/TR/css-ui-3/#outline-style) beschrieben wird als "typischerweise ein Stil \[der] entweder ein Benutzeroberflächenstandard für die Plattform ist oder möglicherweise ein Stil, der reicher ist, als es im Detail in CSS beschrieben werden kann, z. B. ein abgerundeter Kantenrahmen mit halbtransparenten äußeren Pixeln, der zu leuchten scheint".

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

### Rahmen-Stil auf gestrichelt und gepunktet setzen

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

### Rahmen-Stil auf durchgehend und doppelt setzen

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

### Rahmen-Stil auf vertieft und erhoben setzen

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

### Rahmen-Stil auf eingebettet und hervortretend setzen

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

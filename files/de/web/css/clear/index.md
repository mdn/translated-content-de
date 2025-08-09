---
title: clear
slug: Web/CSS/clear
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Die **`clear`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, ob ein Element unterhalb (freigemacht) der ihm vorausgehenden [floating](/de/docs/Web/CSS/float)-Elemente verschoben werden muss. Die `clear`-Eigenschaft gilt für sowohl floatende als auch nicht-floatende Elemente.

{{InteractiveExample("CSS Demo: clear")}}

```css interactive-example-choice
clear: none;
```

```css interactive-example-choice
clear: left;
```

```css interactive-example-choice
clear: right;
```

```css interactive-example-choice
clear: both;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="floated-left">Left</div>
    <div class="floated-right">Right</div>
    <div class="transition-all" id="example-element">
      As much mud in the streets as if the waters had but newly retired from the
      face of the earth, and it would not be wonderful to meet a Megalosaurus,
      forty feet long or so, waddling like an elephantine lizard up Holborn
      Hill.
    </div>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  padding: 0.75em;
  text-align: left;
  line-height: normal;
}

.floated-left {
  border: solid 10px #ffc129;
  background-color: rgb(81 81 81 / 0.6);
  padding: 1em;
  float: left;
}

.floated-right {
  border: solid 10px #ffc129;
  background-color: rgb(81 81 81 / 0.6);
  padding: 1em;
  float: right;
  height: 150px;
}
```

Wenn sie auf nicht-floatende Blöcke angewendet wird, verschiebt sie den [Randabschluss](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#border_area) des Elements nach unten, bis er unterhalb des [Randbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) aller relevanten Floats liegt. Der obere Rand des nicht-floatenden Blocks kollabiert.

Vertikale Ränder zwischen zwei floatenden Elementen hingegen kollabieren nicht. Wenn auf floatende Elemente angewendet, wird der Randbereich des unteren Elements unter den Randbereich aller relevanten Floats verschoben. Dies beeinflusst die Position späterer Floats, da spätere Floats nicht höher positioniert werden können als frühere.

Die Floats, die freigemacht werden müssen, sind die früheren Floats innerhalb desselben [Block-Formatierungskontextes](/de/docs/Web/CSS/CSS_display/Block_formatting_context).

> [!NOTE]
> Wenn ein Element nur floatende Elemente enthält, geht seine Höhe gegen Null. Wenn Sie möchten, dass es immer veränderbar bleibt, sodass es floatende Elemente in sich enthalten kann, setzen Sie den Wert der [`display`](/de/docs/Web/CSS/display)-Eigenschaft des Elements auf [`flow-root`](/de/docs/Web/CSS/display#flow-root).
>
> ```css
> #container {
>   display: flow-root;
> }
> ```

## Syntax

```css
/* Keyword values */
clear: none;
clear: left;
clear: right;
clear: both;
clear: inline-start;
clear: inline-end;

/* Global values */
clear: inherit;
clear: initial;
clear: revert;
clear: revert-layer;
clear: unset;
```

### Werte

- `none`
  - : Ist ein Schlüsselwort, das angibt, dass das Element _nicht_ nach unten verschoben wird, um an floatenden Elementen vorbeizukommen.
- `left`
  - : Ist ein Schlüsselwort, das angibt, dass das Element nach unten verschoben wird, um an _linken_ Floats vorbeizukommen.
- `right`
  - : Ist ein Schlüsselwort, das angibt, dass das Element nach unten verschoben wird, um an _rechten_ Floats vorbeizukommen.
- `both`
  - : Ist ein Schlüsselwort, das angibt, dass das Element nach unten verschoben wird, um sowohl an _linken_ als auch an _rechten_ Floats vorbeizukommen.
- `inline-start`
  - : Ist ein Schlüsselwort, das angibt, dass das Element verschoben wird, um Floats am _Anfangsrand seines umgebenden Blocks_ freizumachen, d.h. die _linken_ Floats bei ltr-Skripten und die _rechten_ Floats bei rtl-Skripten.
- `inline-end`
  - : Ist ein Schlüsselwort, das angibt, dass das Element verschoben wird, um Floats am _Endrand seines umgebenden Blocks_ freizumachen, d.h. die _rechten_ Floats bei ltr-Skripten und die _linken_ Floats bei rtl-Skripten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### clear: left

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
  <p class="left">This paragraph clears left.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.left {
  border: 1px solid black;
  clear: left;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: white;
  width: 20%;
}
.red {
  float: left;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 50%;
}
```

{{ EmbedLiveSample('clear_left','100%','250') }}

### clear: right

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
  <p class="right">This paragraph clears right.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.right {
  border: 1px solid black;
  clear: right;
}
.black {
  float: right;
  margin: 0;
  background-color: black;
  color: white;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 50%;
}
```

{{ EmbedLiveSample('clear_right','100%','250') }}

### clear: both

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor. Fusce pulvinar lacus
    ac dui.
  </p>
  <p class="red">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="both">This paragraph clears both.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.both {
  border: 1px solid black;
  clear: both;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: white;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 45%;
}
```

{{ EmbedLiveSample('clear_both','100%','300') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlegendes CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)

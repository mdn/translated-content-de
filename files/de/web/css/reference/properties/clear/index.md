---
title: "`clear` CSS property"
short-title: clear
slug: Web/CSS/Reference/Properties/clear
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`clear`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Element unterhalb (bereinigt) von [floatenden](/de/docs/Web/CSS/Reference/Properties/float) Elementen, die ihm vorausgehen, verschoben werden muss. Die `clear`-Eigenschaft gilt für floatende und nicht floatende Elemente.

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

Diese Eigenschaft wird als eines der folgenden Schlüsselwortwerte angegeben:

- `none`
  - : Ist ein Schlüsselwort, das angibt, dass das Element _nicht_ heruntergeschoben wird, um an floatenden Elementen vorbeizugehen.
- `left`
  - : Ist ein Schlüsselwort, das angibt, dass das Element heruntergeschoben wird, um an _linken_ Floats vorbeizugehen.
- `right`
  - : Ist ein Schlüsselwort, das angibt, dass das Element heruntergeschoben wird, um an _rechten_ Floats vorbeizugehen.
- `both`
  - : Ist ein Schlüsselwort, das angibt, dass das Element heruntergeschoben wird, um an _beiden_ linken und rechten Floats vorbeizugehen.
- `inline-start`
  - : Ein Schlüsselwort, das angibt, dass das Element heruntergeschoben wird, um Floats auf der _Startseite seines enthaltenden Blocks_ zu bereinigen, das heißt die _linken_ Floats in ltr-Scripten und die _rechten_ Floats in rtl-Scripten.
- `inline-end`
  - : Ein Schlüsselwort, das angibt, dass das Element heruntergeschoben wird, um Floats auf der _Endseite seines enthaltenden Blocks_ zu bereinigen, das heißt die _rechten_ Floats in ltr-Scripten und die _linken_ Floats in rtl-Scripten.

## Beschreibung

Wenn es auf nicht floatende Blöcke angewandt wird, verschiebt es die [Rahmenkante](/de/docs/Web/CSS/Guides/Box_model/Introduction#border_area) des Elements nach unten, bis sie sich unter der [Randkante](/de/docs/Web/CSS/Guides/Box_model/Introduction#margin_area) aller relevanten Floats befindet. Der obere Rand des nicht floatenden Blocks kollabiert.

Vertikale Ränder zwischen zwei floatenden Elementen kollabieren hingegen nicht. Wenn es auf floatende Elemente angewandt wird, wird die Randkante des unteren Elements unter die Randkante aller relevanten Floats verschoben. Dies beeinflusst die Position späterer Floats, da spätere Floats nicht höher positioniert werden können als frühere.

Die Floats, die bereinigt werden müssen, sind die früheren Floats innerhalb des gleichen [Blockformatierungskontextes](/de/docs/Web/CSS/Guides/Display/Block_formatting_context).

> [!NOTE]
> Wenn ein Element nur floatende Elemente enthält, kollabiert seine Höhe auf Null. Wenn Sie möchten, dass es immer in der Lage ist, seine Größe zu ändern, sodass es floatende Elemente darin enthält, setzen Sie den Wert der {{cssxref("display")}} Eigenschaft des Elements auf [`flow-root`](/de/docs/Web/CSS/Reference/Properties/display#flow-root).
>
> ```css
> #container {
>   display: flow-root;
> }
> ```

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

- [CSS grundlegendes Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction)

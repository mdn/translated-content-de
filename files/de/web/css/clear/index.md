---
title: clear
slug: Web/CSS/clear
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`clear`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob ein Element unter (geklärt) [fließenden](/de/docs/Web/CSS/float) Elementen, die ihm vorausgehen, platziert werden muss. Die `clear`-Eigenschaft gilt für fließende und nicht-fließende Elemente.

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

Wenn sie auf nicht-fließende Blöcke angewendet wird, bewegt sie die [Rahmengrenze](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#border_area) des Elements nach unten, bis sie unterhalb der [Randgrenze](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) aller relevanten Fließ-Elemente liegt. Der obere Rand des nicht-fließenden Blocks kollabiert.

Vertikale Ränder zwischen zwei fließenden Elementen kollabieren hingegen nicht. Wenn sie auf fließende Elemente angewendet wird, wird die Randgrenze des unteren Elements unterhalb der Randgrenze aller relevanten Fließ-Elemente bewegt. Dies beeinflusst die Position späterer Fließ-Elemente, da spätere Fließ-Elemente nicht höher als frühere positioniert werden können.

Die Fließ-Elemente, die geklärt werden müssen, sind die früheren Fließ-Elemente innerhalb desselben [Blockformatierungskontexts](/de/docs/Web/CSS/CSS_display/Block_formatting_context).

> [!NOTE]
> Wenn ein Element nur fließende Elemente enthält, kollabiert seine Höhe zu nichts. Wenn Sie möchten, dass es immer in der Lage ist, die Größe zu ändern, sodass es fließende Elemente innerhalb enthält, setzen Sie den Wert der [`display`](/de/docs/Web/CSS/display)-Eigenschaft des Elements auf [`flow-root`](/de/docs/Web/CSS/display#flow-root).
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
  - : Ist ein Schlüsselwort, das angibt, dass das Element _nicht_ nach unten bewegt wird, um an Fließ-Elementen vorbeizukommen.
- `left`
  - : Ist ein Schlüsselwort, das angibt, dass das Element nach unten bewegt wird, um an _linken_ Fließ-Elementen vorbeizukommen.
- `right`
  - : Ist ein Schlüsselwort, das angibt, dass das Element nach unten bewegt wird, um an _rechten_ Fließ-Elementen vorbeizukommen.
- `both`
  - : Ist ein Schlüsselwort, das angibt, dass das Element nach unten bewegt wird, um an _beiden_, linken und rechten Fließ-Elementen vorbeizukommen.
- `inline-start`
  - : Ist ein Schlüsselwort, das angibt, dass das Element nach unten bewegt wird, um Fließ-Elemente am _Anfang seines enthaltenden Blocks_ zu vermeiden, d.h. die _linken_ Fließ-Elemente bei ltr-Skripten und die _rechten_ Fließ-Elemente bei rtl-Skripten.
- `inline-end`
  - : Ist ein Schlüsselwort, das angibt, dass das Element nach unten bewegt wird, um Fließ-Elemente am _Ende seines enthaltenden Blocks_ zu vermeiden, d.h. die _rechten_ Fließ-Elemente bei ltr-Skripten und die _linken_ Fließ-Elemente bei rtl-Skripten.

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
  color: #fff;
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
  color: #fff;
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
  color: #fff;
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

- [CSS-Grundlegendes Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)

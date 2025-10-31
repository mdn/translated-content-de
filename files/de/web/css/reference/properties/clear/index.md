---
title: clear
slug: Web/CSS/Reference/Properties/clear
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`clear`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, ob ein Element unter (freigemeachten) [fließenden](/de/docs/Web/CSS/Reference/Properties/float) Elementen, die ihm vorausgehen, verschoben werden muss. Die `clear`-Eigenschaft gilt sowohl für fließende als auch nicht fließende Elemente.

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

Wenn sie auf nicht fließende Blöcke angewendet wird, bewegt sie die [Rahmenkante](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#border_area) des Elements nach unten, bis sie sich unterhalb der [Randkante](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) aller relevanten Fließtextelemente befindet. Der obere Rand des nicht fließenden Blocks kollabiert.

Vertikale Ränder zwischen zwei fließenden Elementen hingegen kollabieren nicht. Wenn sie auf fließende Elemente angewendet wird, wird die Randkante des unteren Elements unterhalb der Randkante aller relevanten Fließtextelemente verschoben. Dies beeinflusst die Position späterer Fließtextelemente, da nachfolgende Fließtextelemente nicht höher positioniert werden können als frühere.

Die Fließtextelemente, die relevant sind, um freigegeben zu werden, sind die früheren innerhalb desselben [Blockformatierungskontextes](/de/docs/Web/CSS/CSS_display/Block_formatting_context).

> [!NOTE]
> Wenn ein Element nur fließende Elemente enthält, kollabiert seine Höhe zu nichts. Wenn Sie möchten, dass es immer in der Lage ist, sich anzupassen, sodass es fließende Elemente darin enthalten kann, setzen Sie den Wert der [`display`](/de/docs/Web/CSS/Reference/Properties/display)-Eigenschaft des Elements auf [`flow-root`](/de/docs/Web/CSS/Reference/Properties/display#flow-root).
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
  - : Ist ein Schlüsselwort, das angibt, dass das Element _nicht_ nach unten verschoben wird, um fließende Elemente zu umgehen.
- `left`
  - : Ist ein Schlüsselwort, das angibt, dass das Element nach unten verschoben wird, um _linke_ Fließtextelemente zu umgehen.
- `right`
  - : Ist ein Schlüsselwort, das angibt, dass das Element nach unten verschoben wird, um _rechte_ Fließtextelemente zu umgehen.
- `both`
  - : Ist ein Schlüsselwort, das angibt, dass das Element nach unten verschoben wird, um sowohl _linke_ als auch _rechte_ Fließtextelemente zu umgehen.
- `inline-start`
  - : Ist ein Schlüsselwort, das angibt, dass das Element nach unten verschoben wird, um Fließtextelemente auf der _Anfangsseite seines umgebenden Blocks_ zu umgehen, das heißt die _linken_ Fließtextelemente bei ltr-Skripten und die _rechten_ bei rtl-Skripten.
- `inline-end`
  - : Ist ein Schlüsselwort, das angibt, dass das Element nach unten verschoben wird, um Fließtextelemente auf der _Endseite seines umgebenden Blocks_ zu umgehen, das heißt die _rechten_ Fließtextelemente bei ltr-Skripten und die _linken_ bei rtl-Skripten.

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

- [CSS-Grundlegendes Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)

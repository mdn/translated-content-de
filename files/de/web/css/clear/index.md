---
title: clear
slug: Web/CSS/clear
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`clear`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Element unter (geklärt) den [floatenden](/de/docs/Web/CSS/float) Elementen platziert werden muss, die ihm vorausgehen. Die `clear` Eigenschaft gilt sowohl für floatende als auch für nicht-floatende Elemente.

{{EmbedInteractiveExample("pages/css/clear.html")}}

Wenn sie auf nicht-floatende Blöcke angewendet wird, verschiebt sie die [Border-Kante](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#border_area) des Elements nach unten, bis es unter der [Margin-Kante](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) aller relevanten Floats liegt. Der obere Rand des nicht-gefloateten Blocks kollabiert dabei.

Vertikale Margen zwischen zwei gefloateten Elementen werden hingegen nicht kollabieren. Wird sie auf floatende Elemente angewandt, wird die Margin-Kante des unteren Elements unter die Margin-Kante aller relevanten Floats verschoben. Dies beeinflusst die Position späterer Floats, da spätere Floats nicht höher als frühere positioniert werden können.

Die Floats, die es zu klären gilt, sind die früheren Floats innerhalb des gleichen [Block-Formatierungskontextes](/de/docs/Web/CSS/CSS_display/Block_formatting_context).

> [!NOTE]
> Wenn ein Element nur gefloatete Elemente enthält, kollabiert seine Höhe auf Null. Wenn Sie möchten, dass es immer in der Lage ist, sich so zu vergrößern, dass es Float-Elemente innerhalb enthält, setzen Sie den Wert der [`display`](/de/docs/Web/CSS/display) Eigenschaft des Elements auf [`flow-root`](/de/docs/Web/CSS/display#flow-root).
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
  - : Ist ein Schlüsselwort, das angibt, dass das Element _nicht_ nach unten verschoben wird, um über floatende Elemente hinauszugehen.
- `left`
  - : Ist ein Schlüsselwort, das angibt, dass das Element nach unten verschoben wird, um über _linke_ Floats hinauszugehen.
- `right`
  - : Ist ein Schlüsselwort, das angibt, dass das Element nach unten verschoben wird, um über _rechte_ Floats hinauszugehen.
- `both`
  - : Ist ein Schlüsselwort, das angibt, dass das Element nach unten verschoben wird, um über _sowohl linke als auch rechte_ Floats hinauszugehen.
- `inline-start`
  - : Ist ein Schlüsselwort, das angibt, dass das Element nach unten verschoben wird, um Floats auf der _Anfangsseite des umgebenden Blocks_ zu klären, also die _linken_ Floats bei ltr-Skripten und die _rechten_ Floats bei rtl-Skripten.
- `inline-end`
  - : Ist ein Schlüsselwort, das angibt, dass das Element nach unten verschoben wird, um Floats auf der _Endseite des umgebenden Blocks_ zu klären, also die _rechten_ Floats bei ltr-Skripten und die _linken_ Floats bei rtl-Skripten.

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

- [CSS grundlegendes Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)

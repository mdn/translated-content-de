---
title: clear
slug: Web/CSS/clear
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`clear`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Element unter (geklärt) den vorangehenden [schwebenden](/de/docs/Web/CSS/float) Elementen verschoben werden muss. Die `clear` Eigenschaft gilt für schwebende und nicht-schwebende Elemente.

{{EmbedInteractiveExample("pages/css/clear.html")}}

Wenn sie auf nicht-schwebende Blöcke angewendet wird, verschiebt sie die [Randkante](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#border_area) des Elements nach unten, bis sie unter der [Randkante](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) aller relevanten Schweb-Elemente liegt. Der obere Rand des nicht-schwebenden Blocks kollabiert.

Vertikale Ränder zwischen zwei schwebenden Elementen werden hingegen nicht kollabieren. Wenn sie auf schwebende Elemente angewendet wird, wird die Randkante des unteren Elements unter die Randkante aller relevanten Schweb-Elemente verschoben. Dies beeinflusst die Position späterer Schwebelemente, da spätere Schwebelemente nicht höher als frühere positioniert werden können.

Die Schwebelemente, die geklärt werden müssen, sind die früheren Schwebelemente innerhalb desselben [Block-Formatierungskontexts](/de/docs/Web/CSS/CSS_display/Block_formatting_context).

> [!NOTE]
> Wenn ein Element nur schwebende Elemente enthält, reduziert sich seine Höhe auf nichts. Wenn Sie möchten, dass es immer die Möglichkeit hat, schwebende Elemente in sich zu enthalten, setzen Sie den Wert der [`display`](/de/docs/Web/CSS/display) Eigenschaft des Elements auf [`flow-root`](/de/docs/Web/CSS/display#flow-root).
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
  - : Ist ein Schlüsselwort, das angibt, dass das Element _nicht_ nach unten verschoben wird, um an den schwebenden Elementen vorbeizukommen.
- `left`
  - : Ist ein Schlüsselwort, das angibt, dass das Element nach unten verschoben wird, um an _linken_ Schweb-Elementen vorbeizukommen.
- `right`
  - : Ist ein Schlüsselwort, das angibt, dass das Element nach unten verschoben wird, um an _rechten_ Schweb-Elementen vorbeizukommen.
- `both`
  - : Ist ein Schlüsselwort, das angibt, dass das Element nach unten verschoben wird, um an _beiden_ linke und rechte Schweb-Elementen vorbeizukommen.
- `inline-start`
  - : Ist ein Schlüsselwort, das angibt, dass das Element nach unten verschoben wird, um Schweb-Elemente auf der _Startseite seines umgebenden Blocks_ zu klären, das heißt die _linken_ Schweb-Elemente bei ltr-Skripten und die _rechten_ Schweb-Elemente bei rtl-Skripten.
- `inline-end`
  - : Ist ein Schlüsselwort, das angibt, dass das Element nach unten verschoben wird, um Schweb-Elemente auf der _Endseite seines umgebenden Blocks_ zu klären, das heißt die _rechten_ Schweb-Elemente bei ltr-Skripten und die _linken_ Schweb-Elemente bei rtl-Skripten.

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

- [CSS Grundlegendes Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)

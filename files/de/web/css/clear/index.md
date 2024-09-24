---
title: clear
slug: Web/CSS/clear
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`clear`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, ob ein Element unter (freigeräumt) [schwebende](/de/docs/Web/CSS/float) Elemente verschoben werden muss, die ihm vorausgehen. Die `clear`-Eigenschaft gilt sowohl für schwebende als auch nicht-schwebende Elemente.

{{EmbedInteractiveExample("pages/css/clear.html")}}

Wenn sie auf nicht-schwebende Blöcke angewendet wird, verschiebt sie die [Rahmenkante](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#border_area) des Elements nach unten, bis sie unter dem [Randbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) aller relevanten Float-Elemente liegt. Der obere Rand des nicht-schwebenden Blocks kollabiert.

Vertikale Ränder zwischen zwei schwebenden Elementen hingegen werden nicht kollabieren. Wenn sie auf schwebende Elemente angewendet wird, wird der Randbereich des unteren Elements unter den Randbereich aller relevanten Float-Elemente verschoben. Dies beeinflusst die Position späterer Float-Elemente, da spätere Float-Elemente nicht höher positioniert werden können als frühere.

Die Float-Elemente, die freigeräumt werden müssen, sind die früheren innerhalb desselben [Block-Formatierungskontexts](/de/docs/Web/CSS/CSS_display/Block_formatting_context).

> [!NOTE]
> Wenn ein Element nur schwebende Elemente enthält, kollabiert seine Höhe auf Null. Wenn Sie möchten, dass es immer die Größe ändern kann, damit es schwebende Elemente darin enthält, setzen Sie den Wert der [`display`](/de/docs/Web/CSS/display)-Eigenschaft des Elements auf [`flow-root`](/de/docs/Web/CSS/display#flow-root).
>
> ```css
> #container {
>   display: flow-root;
> }
> ```

## Syntax

```css
/* Schlüsselwortwerte */
clear: none;
clear: left;
clear: right;
clear: both;
clear: inline-start;
clear: inline-end;

/* Globale Werte */
clear: inherit;
clear: initial;
clear: revert;
clear: revert-layer;
clear: unset;
```

### Werte

- `none`
  - : Ein Schlüsselwort, das angibt, dass das Element nicht nach unten verschoben wird, um vorbeilaufende Float-Elemente freizuräumen.
- `left`
  - : Ein Schlüsselwort, das angibt, dass das Element nach unten verschoben wird, um vorbeilaufende _linke_ Float-Elemente freizuräumen.
- `right`
  - : Ein Schlüsselwort, das angibt, dass das Element nach unten verschoben wird, um vorbeilaufende _rechte_ Float-Elemente freizuräumen.
- `both`
  - : Ein Schlüsselwort, das angibt, dass das Element nach unten verschoben wird, um sowohl _linke_ als auch _rechte_ Float-Elemente freizuräumen.
- `inline-start`
  - : Ein Schlüsselwort, das angibt, dass das Element nach unten verschoben wird, um Float-Elemente an der _Startseite seines enthaltenen Blocks_ freizuräumen, das heißt, die _linken_ Float-Elemente bei ltr-Skripten und die _rechten_ bei rtl-Skripten.
- `inline-end`
  - : Ein Schlüsselwort, das angibt, dass das Element nach unten verschoben wird, um Float-Elemente an der _Endseite seines enthaltenen Blocks_ freizuräumen, das heißt, die _rechten_ Float-Elemente bei ltr-Skripten und die _linken_ bei rtl-Skripten.

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
  <p class="left">Dieser Absatz räumt links frei.</p>
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
  <p class="right">Dieser Absatz räumt rechts frei.</p>
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
  <p class="both">Dieser Absatz räumt beide frei.</p>
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

- [Grundlegendes CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)

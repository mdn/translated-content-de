---
title: zoom
slug: Web/CSS/zoom
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{CSSRef}}

Die **`zoom`**-Eigenschaft von [CSS](/de/docs/Web/CSS) kann verwendet werden, um den Vergrößerungsgrad eines Elements zu steuern. {{cssxref("transform-function/scale", "transform: scale()")}} kann als Alternative zu dieser Eigenschaft verwendet werden.

Die `zoom` CSS-Eigenschaft skaliert das anvisierte Element, was das Seitenlayout beeinflussen kann. Beim Skalieren vergrößert sich das zoombare Element von `top` und `center`, wenn der Standard-{{CSSXRef("writing-mode")}} verwendet wird.

Im Gegensatz dazu verursacht ein mit {{cssxref("transform-function/scale", "scale()")}} skaliertes Element keine Neuberechnung des Layouts oder verschiebt andere Elemente auf der Seite. Wenn die Verwendung von `scale()` den Inhalt größer macht als das enthaltene Element, tritt {{CSSXRef("overflow")}} in Kraft. Zusätzlich transformieren Elemente, die mit `scale()` angepasst werden, standardmäßig vom `center`; dies kann mit der {{CSSXRef("transform-origin")}} CSS-Eigenschaft geändert werden.

## Syntax

```css
/* Keyword values */
zoom: normal;
zoom: reset;

/* <percentage> values */
zoom: 50%;
zoom: 200%;

/* <number> values */
zoom: 1.1;
zoom: 0.7;

/* Global values */
zoom: inherit;
zoom: initial;
zoom: revert;
zoom: revert-layer;
zoom: unset;
```

### Werte

- `normal`
  - : Rendert dieses Element in seiner normalen Größe.
- `reset`
  - : Vergrößern oder verkleinern Sie dieses Element nicht, wenn der Benutzer ein nicht auf Kneifen basierendes Zoomen anwendet (z.B. durch Drücken der <kbd>Strg</kbd> \- <kbd>-</kbd> oder <kbd>Strg</kbd> \+ <kbd>+</kbd> Tastenkombinationen) auf das Dokument. **Verwenden Sie diesen Wert nicht**, _verwenden Sie stattdessen den Standardwert `unset`_.
- {{cssxref("&lt;percentage&gt;")}}
  - : Zoomfaktor. `100%` entspricht `normal`. Werte größer als `100%` zoomen herein. Werte kleiner als `100%` zoomen heraus.
- {{cssxref("&lt;number&gt;")}}
  - : Zoomfaktor. Entspricht dem entsprechenden Prozentsatz (`1.0` = `100%` = `normal`). Werte größer als `1.0` zoomen herein. Werte kleiner als `1.0` zoomen heraus.

## Formale Definition

{{cssinfo}}

## Formale Syntax

```plain
zoom =
  normal | reset | <number> | <percentage>
```

## Beispiele

### Vergrößern von Absätzen

In diesem Beispiel werden die Absatz-Elemente gezoomt, und beim Überfahren eines Absatzes wird der `zoom`-Wert auf `unset` gesetzt.

#### HTML

```html
<p class="small">Small</p>
<p class="normal">Normal</p>
<p class="big">Big</p>
```

#### CSS

```css hidden
body {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
}
```

```css
.small {
  zoom: 75%;
}
.normal {
  zoom: normal;
}
.big {
  zoom: 2.5;
}
p:hover {
  zoom: unset;
}
```

#### Ergebnis

{{EmbedLiveSample('resizing_paragraphs')}}

### Vergrößern von Elementen

In diesem Beispiel werden die `div`-Elemente mit den Werten `normal`, `<percentage>` und `<number>` gezoomt.

#### HTML

```html
<div id="a" class="circle"></div>
<div id="b" class="circle"></div>
<div id="c" class="circle"></div>
```

#### CSS

```css
div.circle {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  vertical-align: middle;
  display: inline-block;
}
div#a {
  background-color: gold;
  zoom: normal; /* circle is 25px diameter */
}
div#b {
  background-color: green;
  zoom: 200%; /* circle is 50px diameter */
}
div#c {
  background-color: blue;
  zoom: 2.9; /* circle is 72.5px diameter */
}
```

#### Ergebnis

{{EmbedLiveSample('resizing_elements')}}

### Erstellen einer Zoom-Steuerung

In diesem Beispiel wird ein `select`-Feld verwendet, um die Zoomstufe des Elements zu ändern.

#### HTML

In diesem ersten HTML-Block wird ein `select`-Feld mit den verschiedenen zu verwendenden `zoom`-Werten definiert.

```html
<section class="controls">
  <label for="zoom"
    >Zoom level
    <select name="zoom" id="zoom">
      <option value="0.5">Extra Small</option>
      <option value="0.75">Small</option>
      <option value="normal" selected>Normal</option>
      <option value="1.5">Large</option>
      <option value="2">Extra Large</option>
    </select>
  </label>
</section>
```

In diesem zweiten Block wird eine **nicht unterstützte** Meldung hinzugefügt, die ausgeblendet wird, wenn der Browser `zoom` unterstützt.

```html
<p class="zoom-notice">CSS zoom is not supported</p>
```

Der letzte Block definiert einfach die Inhalte, die gezoomt werden sollen.

```html
<section class="content">
  <h1>This is the heading</h1>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat inventore
    ea eveniet, fugiat in consequatur molestiae nostrum repellendus nam
    provident repellat officiis facilis alias facere obcaecati quos sunt
    voluptas! Iste.
  </p>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat inventore
    ea eveniet, fugiat in consequatur molestiae nostrum repellendus nam
    provident repellat officiis facilis alias facere obcaecati quos sunt
    voluptas! Iste.
  </p>
</section>
```

#### CSS

In diesem ersten CSS-Block wird der Startwert für das `--zoom-level` mithilfe von [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/--*) festgelegt und dann als Wert für `zoom` im Inhaltsblock verwendet.

```css
html {
  --zoom-level: normal;
}
.content {
  max-width: 60ch;
  margin: auto;
  zoom: var(--zoom-level);
}
```

```css hidden
.controls,
.zoom-notice {
  display: flex;
  justify-content: space-around;
}
.zoom-notice {
  color: red;
}
```

In diesem letzten CSS-Block wird überprüft, ob der Browser `zoom` unterstützt und, falls ja, die **nicht unterstützte** Meldung auf `display: none;` gesetzt.

```css
@supports (zoom: 1) {
  .zoom-notice {
    display: none;
  }
}
```

#### JavaScript

Dieses JavaScript überwacht eine Änderung im `select`-Feld und setzt den neuen Wert für `--zoom-level` im Inhalts-`section`, z.B. `style="--zoom-level: 1.5;"`.

```js
const zoomControl = document.querySelector("#zoom");
const content = document.querySelector(".content");
const updateZoom = () => {
  content.style = `--zoom-level: ${zoomControl.value}`;
};
zoomControl.addEventListener("change", updateZoom);
```

#### Ergebnis

{{EmbedLiveSample('creating_a_zoom_control', '550', '280')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`zoom` Eintrag im CSS-Tricks' CSS Almanach](https://css-tricks.com/almanac/properties/z/zoom/)

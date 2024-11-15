---
title: zoom
slug: Web/CSS/zoom
l10n:
  sourceCommit: 1bf6e6006a8bb35be61de39ce128350d71082e88
---

{{CSSRef}}

Die **`zoom`** [CSS](/de/docs/Web/CSS) Eigenschaft kann verwendet werden, um den Vergrößerungsgrad eines Elements zu steuern. {{cssxref("transform-function/scale", "transform: scale()")}} kann als Alternative zu dieser Eigenschaft verwendet werden.

Die `zoom` CSS-Eigenschaft skaliert das anvisierte Element, was das Seitenlayout beeinflussen kann. Bei der Skalierung wird das gezoomte Element standardmäßig von `oben` und `Mitte` aus skaliert, wenn der Standardwert für {{CSSXRef("writing-mode")}} verwendet wird.

Im Gegensatz dazu verursacht ein mit {{cssxref("transform-function/scale", "scale()")}} skaliertes Element keine Neuberechnung des Layouts und verschiebt keine anderen Elemente auf der Seite. Wird der Inhalt durch `scale()` größer als das enthaltene Element, kommt {{CSSXRef("overflow")}} zur Anwendung. Zudem werden Elemente, die mit `scale()` angepasst werden, standardmäßig vom `Zentrum` aus transformiert; dies kann mit der CSS-Eigenschaft {{CSSXRef("transform-origin")}} geändert werden.

## Syntax

```css
/* <percentage> values */
zoom: 50%;
zoom: 200%;

/* <number> values */
zoom: 1.1;
zoom: 0.7;

/* Non-standard keyword values */
zoom: normal;
zoom: reset;

/* Global values */
zoom: inherit;
zoom: initial;
zoom: revert;
zoom: revert-layer;
zoom: unset;
```

### Werte

- {{cssxref("&lt;percentage&gt;")}}
  - : Zoomfaktor. `100%` entspricht `normal`. Werte größer als `100%` zoomen hinein. Werte kleiner als `100%` zoomen heraus.
- {{cssxref("&lt;number&gt;")}}
  - : Zoomfaktor. Entspricht dem entsprechenden Prozentsatz (`1.0` = `100%` = `normal`). Werte größer als `1.0` vergrößern. Werte kleiner als `1.0` verkleinern.

Zwei nicht standardisierte Schlüsselwortwerte werden nicht empfohlen. Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) Daten:

- `normal`
  - : Rendert das Element in seiner normalen Größe; gleichbedeutend mit `zoom: 1`. Verwenden Sie stattdessen den globalen Schlüsselwortwert {{cssxref("unset")}}.
- `reset`
  - : Setzt den Wert zurück auf `zoom: 1` und verhindert, dass das Element vergrößert oder verkleinert wird, wenn der Benutzer nicht gestenbasierte Zoommethoden (z.B. durch Drücken von <kbd>Ctrl</kbd> \- <kbd>-</kbd> oder <kbd>Ctrl</kbd> \+ <kbd>+</kbd> Tastenkombinationen) auf das Dokument anwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Absätze vergrößern

In diesem Beispiel werden die Absatz-Elemente gezoomt, beim Überfahren eines Absatzes wird der `zoom`-Wert auf `unset` gesetzt.

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

### Elemente vergrößern

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

In diesem Beispiel wird ein `select`-Feld verwendet, um das Zoomniveau des Elements zu ändern.

#### HTML

Im ersten HTML-Block wird ein `select`-Feld mit den verschiedenen `zoom`-Werten definiert, die verwendet werden sollen.

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

Im zweiten Block wird eine **nicht unterstützte** Nachricht hinzugefügt, die ausgeblendet wird, wenn der Browser `zoom` unterstützt.

```html
<p class="zoom-notice">CSS zoom is not supported</p>
```

Der letzte Block definiert einfach den Inhalt, der gezoomt wird.

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

In diesem ersten CSS-Block wird der Startwert für den `--zoom-level` mit [custom properties](/de/docs/Web/CSS/--*) festgelegt und dann als Wert für `zoom` im Inhaltsblock verwendet.

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

In diesem letzten CSS-Block wird überprüft, ob der Browser `zoom` unterstützt und falls ja, die **nicht unterstützte** Nachricht auf `display: none;` gesetzt.

```css
@supports (zoom: 1) {
  .zoom-notice {
    display: none;
  }
}
```

#### JavaScript

Dieses JavaScript überwacht Änderungen im `select`-Feld und setzt den neuen Wert für `--zoom-level` im Inhaltsbereich, z.B. `style="--zoom-level: 1.5;"`.

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
- {{cssxref("transform")}}
- {{cssxref("scale")}}
- {{cssxref("unset")}} Schlüsselwort
- [Legacy `zoom` Eigenschaft](https://css-tricks.com/almanac/properties/z/zoom/) via CSS-Tricks (2013)

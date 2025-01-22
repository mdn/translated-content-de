---
title: zoom
slug: Web/CSS/zoom
l10n:
  sourceCommit: 5c4720ea41c857d7aa2a5ce601cbdae706e91e5a
---

{{CSSRef}}

Die **`zoom`** [CSS](/de/docs/Web/CSS) Eigenschaft kann verwendet werden, um den Vergrößerungsgrad eines Elements zu steuern.
{{cssxref("transform-function/scale", "transform: scale()")}} kann als Alternative zu dieser Eigenschaft verwendet werden.

Die `zoom` CSS-Eigenschaft skaliert das anvisierte Element, was Auswirkungen auf das Seitenlayout haben kann.
Beim Skalieren wird das gezoomte Element vom `top` und `center` skaliert, wenn der standardmäßige {{CSSXRef("writing-mode")}} verwendet wird.

Im Gegensatz dazu wird ein Element, das mit {{cssxref("transform-function/scale", "scale()")}} skaliert wird, keine Neuberechnung des Layouts verursachen oder andere Elemente auf der Seite verschieben.
Wenn die Verwendung von `scale()` dazu führt, dass der Inhalt größer wird als das enthaltende Element, tritt {{CSSXRef("overflow")}} in Kraft.
Zusätzlich transformieren Elemente, die mit `scale()` angepasst werden, standardmäßig von der `center` aus; dies kann mit der {{CSSXRef("transform-origin")}} CSS-Eigenschaft geändert werden.

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
  - : Zoomfaktor. `100%` entspricht `normal`. Werte größer als `100%` vergrößern. Werte kleiner als `100%` verkleinern.
- {{cssxref("&lt;number&gt;")}}
  - : Zoomfaktor. Entspricht dem entsprechenden Prozentsatz (`1.0` = `100%` = `normal`). Werte größer als `1.0` vergrößern. Werte kleiner als `1.0` verkleinern.

Zwei nicht-standardisierte Schlüsselwortwerte werden nicht empfohlen. Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) Daten:

- `normal` {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Rendert das Element in seiner normalen Größe; entspricht `zoom: 1`. Verwenden Sie stattdessen den globalen Schlüsselwortwert {{cssxref("unset")}}.
- `reset` {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Setzt den Wert auf `zoom: 1` zurück und verhindert, dass das Element (de)vergrößert wird, wenn der Benutzer ein nicht auf Pinch basierendes Zoomen anwendet (z.B. durch Drücken der Tastenkombinationen <kbd>Ctrl</kbd> \- <kbd>-</kbd> oder <kbd>Ctrl</kbd> \+ <kbd>+</kbd>) auf das Dokument.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergrößern von Absätzen

In diesem Beispiel werden die Absatz-Elemente gezoomt, beim Überfahren eines Absatzes wird der `zoom` Wert `unset`.

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

In diesem Beispiel wird ein `select`-Feld verwendet, um den Zoom-Level des Elements zu ändern.

#### HTML

Im ersten HTML-Block wird ein `select`-Feld mit den verschiedenen `zoom` Werten definiert, die verwendet werden sollen.

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

Im zweiten Block wird eine **nicht unterstützte** Meldung hinzugefügt, die verborgen wird, wenn der Browser `zoom` unterstützt.

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

Im ersten CSS-Block wird der Startwert für den `--zoom-level` mit [Custom Properties](/de/docs/Web/CSS/--*) festgelegt und dann als Wert für `zoom` im Inhaltsblock verwendet.

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

Im letzten CSS-Block wird überprüft, ob der Browser `zoom` unterstützt, und falls ja, wird die **nicht unterstützte** Meldung auf `display: none;` gesetzt.

```css
@supports (zoom: 1) {
  .zoom-notice {
    display: none;
  }
}
```

#### JavaScript

Dieses JavaScript überwacht eine Änderung im `select`-Feld und setzt den neuen Wert für `--zoom-level` im Inhaltsabschnitt, z.B. `style="--zoom-level: 1.5;"`.

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

- [`zoom`-Eintrag im CSS-Almanac von CSS-Tricks](https://css-tricks.com/almanac/properties/z/zoom/)
- {{cssxref("transform")}}
- {{cssxref("scale")}}
- {{cssxref("unset")}} Schlüsselwort
- [Legacy `zoom`-Eigenschaft](https://css-tricks.com/almanac/properties/z/zoom/) via CSS-Tricks (2013)

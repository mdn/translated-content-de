---
title: zoom
slug: Web/CSS/zoom
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`zoom`**-Eigenschaft von [CSS](/de/docs/Web/CSS) kann verwendet werden, um das Vergrößerungsniveau eines Elements zu steuern. {{cssxref("transform-function/scale", "transform: scale()")}} kann als Alternative zu dieser Eigenschaft verwendet werden.

Die CSS-Eigenschaft `zoom` skaliert das anvisierte Element, was das Seitenlayout beeinflussen kann. Bei der Skalierung vergrößert sich das gezoomte Element von `oben` und `Mitte` aus, wenn der Standard-{{CSSXRef("writing-mode")}} verwendet wird.

Im Gegensatz dazu führt ein mit {{cssxref("transform-function/scale", "scale()")}} skaliertes Element nicht zu Neuberechnungen des Layouts oder zum Verschieben anderer Elemente auf der Seite. Wenn die Verwendung von `scale()` dazu führt, dass der Inhalt größer als das umgebende Element wird, tritt {{CSSXRef("overflow")}} in Kraft. Zusätzlich transformieren mit `scale()` angepasste Elemente standardmäßig von der `Mitte` aus; dies kann mit der CSS-Eigenschaft {{CSSXRef("transform-origin")}} geändert werden.

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
  - : Zoomfaktor. `100%` entspricht `normal`. Werte größer als `100%` zoomen hinein. Werte kleiner als `100%` zoomen hinaus.
- {{cssxref("&lt;number&gt;")}}
  - : Zoomfaktor. Entspricht dem entsprechenden Prozentsatz (`1.0` = `100%` = `normal`). Werte größer als `1.0` zoomen hinein. Werte kleiner als `1.0` zoomen hinaus.

Zwei nicht standardmäßige Schlüsselwortwerte werden nicht empfohlen. Prüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) Daten:

- `normal`
  - : Rendert das Element in seiner normalen Größe; entspricht `zoom: 1`. Verwenden Sie stattdessen den globalen {{cssxref("unset")}}-Schlüsselwortwert.
- `reset`
  - : Setzt den Wert auf `zoom: 1` zurück und verhindert, dass das Element (de)vergrößert wird, wenn der Benutzer nicht-pinching-basiertes Zoomen (z. B. durch Drücken der Tastenkombination <kbd>Strg</kbd> \- <kbd>-</kbd> oder <kbd>Strg</kbd> \+ <kbd>+</kbd>) auf das Dokument anwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Absätze skalieren

In diesem Beispiel werden die Absatz-Elemente gezoomt, beim Hover über einen Absatz wird der `zoom`-Wert `zurückgesetzt`.

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

### Elemente skalieren

In diesem Beispiel werden die `div`-Elemente mithilfe der Werte `normal`, `<percentage>` und `<number>` vergrößert.

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

### Ein Zoom-Kontrollfeld erstellen

In diesem Beispiel wird ein `select`-Feld verwendet, um das Zoom-Level des Elements zu ändern.

#### HTML

In diesem ersten Block von HTML wird ein `select`-Feld definiert, mit den verschiedenen `zoom`-Werten, die verwendet werden sollen.

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

In diesem zweiten Block wird eine **nicht unterstützte** Nachricht hinzugefügt, die verborgen wird, wenn der Browser `zoom` unterstützt.

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

In diesem ersten Block von CSS setzen wir den Ausgangswert für `--zoom-level` unter Verwendung von [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) und verwenden dann diesen als Wert für `zoom` auf dem Inhaltsblock.

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

In diesem letzten CSS-Block prüfen wir, ob der Browser `zoom` unterstützt und setzen, falls ja, die **nicht unterstützte** Nachricht auf `display: none;`.

```css
@supports (zoom: 1) {
  .zoom-notice {
    display: none;
  }
}
```

#### JavaScript

Dieses JavaScript beobachtet eine Änderung im Auswahlfeld und setzt den neuen Wert für `--zoom-level` im Inhaltsabschnitt, z. B. `style="--zoom-level: 1.5;"`.

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
- {{cssxref("unset")}}-Schlüsselwort
- [Legacy `zoom`-Eigenschaft](https://css-tricks.com/almanac/properties/z/zoom/) über CSS-Tricks (2013)

---
title: zoom
slug: Web/CSS/Reference/Properties/zoom
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

Die **`zoom`**-Eigenschaft in [CSS](/de/docs/Web/CSS) kann verwendet werden, um den Vergrößerungsgrad eines Elements zu steuern.
{{cssxref("transform-function/scale", "transform: scale()")}} kann als Alternative zu dieser Eigenschaft verwendet werden.

Die CSS-Eigenschaft `zoom` skaliert das angezielte Element, was das Seitenlayout beeinflussen kann.
Beim Skalieren skaliert das herangezoomte Element von `oben` und `zentral`, wenn der Standard-{{CSSXRef("writing-mode")}} verwendet wird.

Im Gegensatz dazu führt das Skalieren eines Elements mit {{cssxref("transform-function/scale", "scale()")}} nicht zu einer Neuberechnung des Layouts oder zur Verschiebung anderer Elemente auf der Seite.
Wenn durch die Verwendung von `scale()` die Inhalte größer werden als das umgebende Element, dann greift {{CSSXRef("overflow")}}.
Zusätzlich werden mit `scale()` angepasste Elemente standardmäßig vom `Zentrum` aus transformiert; dies kann mit der CSS-Eigenschaft {{CSSXRef("transform-origin")}} geändert werden.

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

Zwei nicht standardisierte Schlüsselwort-Werte werden nicht empfohlen. Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) Daten:

- `normal`
  - : Rendern Sie das Element in seiner normalen Größe; entspricht `zoom: 1`. Verwenden Sie stattdessen den globalen {{cssxref("unset")}} Schlüsselwortwert.
- `reset`
  - : Setzt den Wert auf `zoom: 1` zurück und verhindert, dass das Element (ver)größert wird, wenn der Benutzer nicht pinch-basierte Vergrößerung (z.B. durch Drücken der Tastenkombinationen <kbd>Ctrl</kbd> \- <kbd>-</kbd> oder <kbd>Ctrl</kbd> \+ <kbd>+</kbd>) auf das Dokument anwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vergrößern von Absätzen

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

### Vergrößern von Elementen

In diesem Beispiel werden die `div` Elemente mit den Werten `normal`, `<percentage>` und `<number>` gezoomt.

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

Im ersten HTML-Block wird ein `select`-Feld mit den verschiedenen zu verwendenden `zoom`-Werten definiert.

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

Im zweiten Block wird eine **nicht unterstützte** Nachricht hinzugefügt, die verborgen wird, wenn der Browser `zoom` unterstützt.

```html
<p class="zoom-notice">CSS zoom is not supported</p>
```

Der letzte Block definiert einfach den zu vergrößernden Inhalt.

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

Im ersten CSS-Block legen wir den Startwert für den `--zoom-level` mit [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) fest und verwenden diesen dann als Wert für `zoom` im Inhaltsblock.

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

Im letzten CSS-Block überprüfen wir, ob der Browser `zoom` unterstützt, und setzen, falls ja, die **nicht unterstützte** Nachricht auf `display: none;`.

```css
@supports (zoom: 1) {
  .zoom-notice {
    display: none;
  }
}
```

#### JavaScript

Dieses JavaScript überwacht Änderungen im Auswahlfeld und setzt den neuen Wert für `--zoom-level` im Inhaltsabschnitt, z.B. `style="--zoom-level: 1.5;"`.

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

- [`zoom` Eintrag im CSS-Almanach von CSS-Tricks](https://css-tricks.com/almanac/properties/z/zoom/)
- {{cssxref("transform")}}
- {{cssxref("scale")}}
- {{cssxref("unset")}} Schlüsselwort
- [Veraltete `zoom` Eigenschaft](https://css-tricks.com/almanac/properties/z/zoom/) über CSS-Tricks (2013)

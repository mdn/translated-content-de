---
title: background-blend-mode
slug: Web/CSS/background-blend-mode
l10n:
  sourceCommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{CSSRef}}

Die **`background-blend-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie die Hintergrundbilder eines Elements miteinander und mit der Hintergrundfarbe des Elements überblendet werden sollen.

{{EmbedInteractiveExample("pages/css/background-blend-mode.html")}}

Überblendungsmodi sollten in derselben Reihenfolge wie die {{cssxref("background-image")}} Eigenschaft definiert werden. Wenn die Listenlängen der Überblendungsmodi und Hintergrundbilder nicht gleich sind, werden sie wiederholt und/oder abgeschnitten, bis die Längen übereinstimmen.

## Syntax

```css
/* Ein Wert */
background-blend-mode: normal;

/* Zwei Werte, je einer pro Hintergrund */
background-blend-mode: darken, luminosity;

/* Globale Werte */
background-blend-mode: inherit;
background-blend-mode: initial;
background-blend-mode: revert;
background-blend-mode: revert-layer;
background-blend-mode: unset;
```

### Werte

- {{cssxref("&lt;blend-mode&gt;")}}
  - : Der anzuwendende Überblendungsmodus. Es können mehrere Werte vorhanden sein, durch Kommata getrennt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

```css
.item {
  width: 300px;
  height: 300px;
  background: url("image1.png"), url("image2.png");
  background-blend-mode: screen;
}
```

### Probieren Sie verschiedene Überblendungsmodi aus

```html hidden
<div id="div"></div>
<select id="select">
  <option>normal</option>
  <option>multiply</option>
  <option selected>screen</option>
  <option>overlay</option>
  <option>darken</option>
  <option>lighten</option>
  <option>color-dodge</option>
  <option>color-burn</option>
  <option>hard-light</option>
  <option>soft-light</option>
  <option>difference</option>
  <option>exclusion</option>
  <option>hue</option>
  <option>saturation</option>
  <option>color</option>
  <option>luminosity</option>
</select>
```

```css hidden
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: screen;
}
```

```js hidden
document.getElementById("select").onchange = (event) => {
  document.getElementById("div").style.backgroundBlendMode =
    document.getElementById("select").selectedOptions[0].innerHTML;
};
console.log(document.getElementById("div"));
```

{{ EmbedLiveSample('Beispiele', "330", "350") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;blend-mode&gt;")}}
- {{cssxref("mix-blend-mode")}}

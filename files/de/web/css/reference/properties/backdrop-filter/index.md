---
title: "`backdrop-filter` CSS property"
short-title: backdrop-filter
slug: Web/CSS/Reference/Properties/backdrop-filter
l10n:
  sourceCommit: c4e64810ce10fb5cb1eebfcd8b6f526866fd0982
---

Mit der **CSS-Eigenschaft `backdrop-filter`** können Sie grafische Effekte wie Weichzeichnung oder Farbverschiebung auf den Bereich hinter einem Element anwenden. Da sie auf alles _hinter_ dem Element wirkt, muss das Element oder sein Hintergrund transparent oder teilweise transparent sein, damit der Effekt sichtbar wird.

{{InteractiveExample("CSS Demo: backdrop-filter()")}}

```css interactive-example-choice
backdrop-filter: blur(10px);
```

```css interactive-example-choice
backdrop-filter: invert(80%);
```

```css interactive-example-choice
backdrop-filter: sepia(90%);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div id="example-element">Example</div>
  </div>
</section>
```

```css interactive-example
.example-container {
  background-image: url("/shared-assets/images/examples/balloon.jpg");
  background-size: cover;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
}

#example-element {
  font-weight: bold;
  flex: 1;
  text-align: center;
  padding: 20px 10px;
  background-color: rgb(255 255 255 / 0.2);
}
```

## Syntax

```css
/* Keyword value */
backdrop-filter: none;

/* URL to SVG filter */
backdrop-filter: url("common-filters.svg#filter");

/* <filter-function> values */
backdrop-filter: blur(2px);
backdrop-filter: brightness(60%);
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%);

/* Multiple filters */
backdrop-filter: url("filters.svg#filter") blur(4px) saturate(150%);

/* Global values */
backdrop-filter: inherit;
backdrop-filter: initial;
backdrop-filter: revert;
backdrop-filter: revert-layer;
backdrop-filter: unset;
```

### Werte

- `none`
  - : Auf den Hintergrund wird kein Filter angewendet.
- `<filter-value-list>`
  - : Eine durch Leerzeichen getrennte Liste von {{cssxref("filter-function")}}s oder ein [SVG-Filter](/de/docs/Web/SVG/Reference/Element/filter), die auf den Hintergrund angewendet werden. Zu den CSS-`<filter-function>`s gehören {{CSSxRef("filter-function/blur", "blur()")}}, {{CSSxRef("filter-function/brightness", "brightness()")}}, {{CSSxRef("filter-function/contrast", "contrast()")}}, {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}, {{CSSxRef("filter-function/grayscale", "grayscale()")}}, {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}, {{CSSxRef("filter-function/invert", "invert()")}}, {{CSSxRef("filter-function/opacity", "opacity()")}}, {{CSSxRef("filter-function/saturate", "saturate()")}} und {{CSSxRef("filter-function/sepia", "sepia()")}}.

## Beschreibung

Die Eigenschaft `backdrop-filter` wendet Filtereffekte auf die Pixel an, die _hinter_ einem Element dargestellt werden, bis zum nächsten Vorfahren, der eine **Backdrop-Root** ist. Inhalte oberhalb der Backdrop-Root sind nicht betroffen.

### Backdrop-Root

Eine Backdrop-Root ist ein Element, das eine Grenze für `backdrop-filter`-Effekte festlegt. Die folgenden Elemente sind Backdrop-Roots:

- Das Wurzelelement ({{HTMLElement("html")}})
- Ein Element mit einem anderen Wert für {{cssxref("filter")}} als `none`
- Ein Element mit einem Wert für {{cssxref("opacity")}} kleiner als `1`
- Ein Element mit einem anderen Wert für {{cssxref("mask")}}, {{cssxref("mask-image")}}, {{cssxref("mask-border")}} oder {{cssxref("clip-path")}} als `none`
- Ein Element mit einem anderen Wert für `backdrop-filter` als `none`
- Ein Element mit einem anderen Wert für {{cssxref("mix-blend-mode")}} als `normal`
- Ein Element, bei dem {{cssxref("will-change")}} auf eine der oben genannten Eigenschaften gesetzt ist

Wenn ein Elternelement beispielsweise `opacity: 0.9` hat, wird es zur Backdrop-Root. Der `backdrop-filter` eines Kindelements zeichnet dann nur den Inhalt zwischen dem Elternelement und dem Kindelement weich – nicht den Inhalt hinter dem Elternelement. Dies führt häufig zu Verwirrung, wenn `backdrop-filter` trotz korrekter Anwendung scheinbar keinen sichtbaren Effekt hat.

Das folgende Beispiel zeigt, wie sich Backdrop-Roots auf `backdrop-filter` auswirken. Der erste Container hat `will-change: opacity` und ist damit eine Backdrop-Root. Beachten Sie, dass der weichzeichnende Kreis nur den Text und das Quadrat innerhalb des Containers beeinflusst, nicht aber den karierten Hintergrund dahinter. Der zweite Container ist keine Backdrop-Root. Sein weichzeichnender Kreis beeinflusst daher alles dahinter, einschließlich des Seitenhintergrunds.

```html
<div class="parent backdrop-root">
  <div class="text">Text</div>
  <div class="square"></div>
  <div class="overlay"></div>
</div>
<div class="parent">
  <div class="text">Text</div>
  <div class="square"></div>
  <div class="overlay"></div>
</div>
```

```css
body {
  display: flex;
  column-gap: 16px;
  padding: 16px;
  background-image: conic-gradient(
    gray 90deg,
    silver 90deg 180deg,
    gray 180deg 270deg,
    silver 270deg
  );
  background-size: 32px 32px;
}

.parent {
  position: relative;
  width: 256px;
  height: 256px;
}

.backdrop-root {
  outline: 2px solid crimson;
  will-change: opacity;
}

.square {
  position: absolute;
  top: 35px;
  left: 40%;
  width: 25%;
  height: 25%;
  border: 10px solid white;
}

.text {
  position: absolute;
  left: 40%;
  color: white;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  line-height: 256px;
  filter: blur(1px);
}

.overlay {
  position: absolute;
  top: 25%;
  left: 50%;
  width: 50%;
  height: 50%;
  outline: 3px solid gainsboro;
  border-radius: 9999px;
  backdrop-filter: blur(10px);
}
```

{{EmbedLiveSample("Backdrop root", "", 288)}}

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<div class="container">
  <div class="box">
    <p>backdrop-filter: blur(10px)</p>
  </div>
</div>
```

### CSS

```css
.box {
  background-color: rgb(255 255 255 / 30%);
  backdrop-filter: blur(10px);
}

body {
  background-image: url("anemones.jpg");
}
```

```css hidden
html,
body {
  height: 100%;
  width: 100%;
}

.container {
  background-size: cover;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.box {
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  max-width: 50%;
  max-height: 50%;
  padding: 20px 40px;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 600, 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("filter")}}
- {{cssxref("filter-function")}}
- {{cssxref("background-blend-mode")}}, {{cssxref("mix-blend-mode")}}
- [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects)
- [CSS-Compositing und Blending](/de/docs/Web/CSS/Guides/Compositing_and_blending)

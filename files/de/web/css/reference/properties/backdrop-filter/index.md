---
title: "`backdrop-filter` CSS property"
short-title: backdrop-filter
slug: Web/CSS/Reference/Properties/backdrop-filter
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`backdrop-filter`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Ihnen, grafische Effekte wie Unschärfe oder Farbverschiebung auf den Bereich _hinter_ einem Element anzuwenden. Da sie auf alles _hinter_ dem Element angewendet wird, muss das Element oder dessen Hintergrund durchsichtig oder teilweise durchsichtig sein, um den Effekt sehen zu können.

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
  - : Kein Filter wird auf den Hintergrund angewendet.
- `<filter-value-list>`
  - : Eine durch Leerzeichen getrennte Liste von {{cssxref("filter-function")}}s oder ein [SVG-Filter](/de/docs/Web/SVG/Reference/Element/filter), der auf den Hintergrund angewendet wird. Zu den CSS-`<filter-function>`s gehören {{CSSxRef("filter-function/blur", "blur()")}}, {{CSSxRef("filter-function/brightness", "brightness()")}}, {{CSSxRef("filter-function/contrast", "contrast()")}}, {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}, {{CSSxRef("filter-function/grayscale", "grayscale()")}}, {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}, {{CSSxRef("filter-function/invert", "invert()")}}, {{CSSxRef("filter-function/opacity", "opacity()")}}, {{CSSxRef("filter-function/saturate", "saturate()")}} und {{CSSxRef("filter-function/sepia", "sepia()")}}.

## Beschreibung

Die `backdrop-filter`-Eigenschaft wendet Filtereffekte auf die Pixel an, die _hinter_ einem Element gemalt sind, bis zum nächstgelegenen Vorfahren, der eine **Backdrop-Root** ist. Inhalte über der Backdrop-Root sind nicht betroffen.

### Backdrop-Root

Eine Backdrop-Root ist ein Element, das eine Grenze für `backdrop-filter`-Effekte schafft. Die folgenden Elemente sind Backdrop-Roots:

- Das Stamm-Element ({{HTMLElement("html")}})
- Ein Element mit einem {{cssxref("filter")}}-Wert ungleich `none`
- Ein Element mit einem {{cssxref("opacity")}}-Wert kleiner als `1`
- Ein Element mit einem {{cssxref("mask")}}, {{cssxref("mask-image")}}, {{cssxref("mask-border")}}, oder {{cssxref("clip-path")}}-Wert ungleich `none`
- Ein Element mit einem `backdrop-filter`-Wert ungleich `none`
- Ein Element mit einem {{cssxref("mix-blend-mode")}}-Wert ungleich `normal`
- Ein Element mit {{cssxref("will-change")}} gesetzt auf eine der oben genannten Eigenschaften

Das bedeutet, wenn ein übergeordnetes Element `opacity: 0.9` hat, wird es zu einer Backdrop-Root und der `backdrop-filter` eines Kindes wird nur den Inhalt zwischen diesem übergeordneten Element und dem Kind verwischen - nicht den Inhalt hinter dem übergeordneten Element. Dies ist eine häufige Quelle der Verwirrung, wenn `backdrop-filter` keine sichtbare Wirkung zu haben scheint, obwohl es korrekt angewendet wird.

Das folgende Beispiel zeigt, wie Backdrop-Roots `backdrop-filter` beeinflussen. Der erste Container hat `will-change: opacity`, was ihn zu einer Backdrop-Root macht - beachten Sie, dass der Unschärfekreis nur den Text und das Quadrat innerhalb des Containers beeinflusst, nicht den karierten Hintergrund dahinter. Der zweite Container ist keine Backdrop-Root, sodass sein Unschärfekreis alles dahinter beeinflusst, einschließlich des Seitenhintergrunds.

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

### HTML

```html
<div class="container">
  <div class="box">
    <p>backdrop-filter: blur(10px)</p>
  </div>
</div>
```

### Ergebnis

{{EmbedLiveSample("Beispiele", 600, 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("filter")}}
- {{cssxref("filter-function")}}
- {{cssxref("background-blend-mode")}}, {{cssxref("mix-blend-mode")}}
- [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects)
- [CSS-Compositing und -Blending](/de/docs/Web/CSS/Guides/Compositing_and_blending)

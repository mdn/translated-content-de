---
title: paint()
slug: Web/CSS/image/paint
l10n:
  sourceCommit: ca6d4f6114d278926e183225a90fd2209802cfe9
---

{{CSSRef}}

Die **`paint()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) definiert einen {{cssxref("&lt;image&gt;")}} Wert, der mit einem PaintWorklet generiert wird.

## Syntax

```css
paint(workletName, ...parameters)
```

wo:

- _workletName_
  - : Der Name des registrierten Worklets.
- _parameters_ {{optional_inline}}
  - : Optionale zusätzliche Parameter, die an das paintWorklet übergeben werden

## Beispiele

### Grundlegende CSS paint() Verwendung

Angenommen, folgendes HTML:

```html live-sample___example-boxbg
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
  <li>item 4</li>
  <li>item 5</li>
  <li>item 6</li>
  <li>item 7</li>
  <li>item 8</li>
  <li>item 9</li>
  <li>item 10</li>
  <li>item N</li>
</ul>
```

In JavaScript registrieren wir das [paint worklet](/de/docs/Web/API/PaintWorkletGlobalScope):

```js live-sample___example-boxbg
CSS.paintWorklet.addModule(
  "https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/boxbg.js",
);
```

Im CSS definieren wir das `background-image` als ein `paint()` Typ mit dem Worklet-Namen `boxbg`, zusammen mit allen Variablen (z.B. `--boxColor` und `--widthSubtractor`), die das Worklet verwenden wird:

```css live-sample___example-boxbg
body {
  font: 1.2em / 1.2 sans-serif;
}
li {
  background-image: paint(boxbg);
  --boxColor: hsl(55 90% 60%);
}

li:nth-of-type(3n) {
  --boxColor: hsl(155 90% 60%);
  --widthSubtractor: 20;
}

li:nth-of-type(3n + 1) {
  --boxColor: hsl(255 90% 60%);
  --widthSubtractor: 40;
}
```

{{EmbedLiveSample("example-boxbg", "", "300px")}}

### CSS paint() mit Parametern

Sie können optionale Argumente in der CSS `paint()` Funktion übergeben. In diesem Beispiel übergeben wir zwei Argumente, die steuern, ob das `background-image` auf einer Gruppe von Listenelementen `filled` ist oder einen `stroke` Umriss hat, und die `width` dieses Umrisses:

```html hidden live-sample___example-highlight
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
  <li>item 4</li>
  <li>item 5</li>
  <li>item 6</li>
  <li>item 7</li>
  <li>item 8</li>
  <li>item 9</li>
  <li>item 10</li>
  <li>item N</li>
</ul>
```

```js hidden live-sample___example-highlight
CSS.paintWorklet.addModule(
  "https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/hilite.js",
);
```

```css live-sample___example-highlight
body {
  font: 1.2em / 1.2 sans-serif;
}

li {
  --boxColor: hsl(55 90% 60% / 100%);
  background-image: paint(hollowHighlights, stroke, 2px);
}

li:nth-of-type(3n) {
  --boxColor: hsl(155 90% 60% / 100%);
  background-image: paint(hollowHighlights, filled, 3px);
}

li:nth-of-type(3n + 1) {
  --boxColor: hsl(255 90% 60% / 100%);
  background-image: paint(hollowHighlights, stroke, 1px);
}
```

Wir haben eine benutzerdefinierte Eigenschaft im Selektorblock aufgenommen, die eine boxColor definiert. Benutzerdefinierte Eigenschaften sind für das PaintWorklet zugänglich.

{{EmbedLiveSample("example-highlight", "", "300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PaintWorkletGlobalScope`](/de/docs/Web/API/PaintWorkletGlobalScope)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Verwendung der CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide)
- {{cssxref("&lt;image&gt;")}}
- [Canvas API](/de/docs/Web/API/Canvas_API)

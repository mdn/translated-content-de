---
title: paint()
slug: Web/CSS/image/paint
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{CSSRef}}

Die **`paint()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) definiert einen {{cssxref("&lt;image&gt;")}} Wert, der mit einem PaintWorklet erzeugt wird.

## Syntax

```css
paint(workletName, ...parameters)
```

wo:

- _workletName_
  - : Der Name des registrierten Worklets.
- _parameters_
  - : Optionale zusätzliche Parameter, die an das paintWorklet übergeben werden

## Beispiele

### Grundlegendes Anwendungsbeispiel

In JavaScript registrieren wir das [Paint Worklet](/de/docs/Web/API/PaintWorkletGlobalScope):

```js
CSS.paintWorklet.addModule("boxbg.js");
```

...dann definieren wir im CSS das `background-image` als einen `paint()` Typ mit dem Worklet-Namen `boxbg` sowie alle Variablen (z. B. `--boxColor` und `--widthSubtractor`), die das Worklet verwenden wird:

```css
li {
  background-image: paint(boxbg);
  --boxColor: hsl(55 90% 60% / 100%);
}
li:nth-of-type(3n) {
  --boxColor: hsl(155 90% 60% / 100%);
  --widthSubtractor: 20;
}
li:nth-of-type(3n + 1) {
  --boxColor: hsl(255 90% 60% / 100%);
  --widthSubtractor: 40;
}
```

Das Ergebnis ist folgendes:

{{EmbedGHLiveSample("css-examples/houdini/css_painting_api/example-boxbg.html", '100%', 400)}}

### Mit zusätzlichen Parametern

Sie können zusätzliche Argumente über die CSS paint() Funktion übergeben. In diesem Beispiel haben wir zwei Argumente übergeben: ob das `background-image` einer Gruppe von Listenelementen gefüllt ist oder nur eine Umrisslinie hat und die Breite dieser Linie:

```html hidden
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
  <li>item 11</li>
  <li>item 12</li>
  <li>item 13</li>
  <li>item 14</li>
  <li>item 15</li>
  <li>item 16</li>
  <li>item 17</li>
  <li>item 18</li>
  <li>item 19</li>
  <li>item 20</li>
</ul>
```

```js hidden
CSS.paintWorklet.addModule(
  "https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/hilite.js",
);
```

```css
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

Wir haben eine benutzerdefinierte Eigenschaft im Selektorblock hinzugefügt, die eine boxColor definiert. Benutzerdefinierte Eigenschaften sind für das PaintWorklet zugänglich.

{{EmbedLiveSample("Mit zusätzlichen Parametern", 300, 300)}}

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

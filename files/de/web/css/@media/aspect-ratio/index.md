---
title: aspect-ratio
slug: Web/CSS/@media/aspect-ratio
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`aspect-ratio`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des {{Glossary("viewport", "Viewports")}} zu testen.

## Syntax

Die `aspect-ratio`-Funktion wird als ein {{cssxref("&lt;ratio&gt;")}}-Wert angegeben, der das Breite-zu-Höhe-Seitenverhältnis des Viewports darstellt. Es handelt sich um eine Bereichsfunktion, das bedeutet, Sie können auch die präfixierten Varianten **`min-aspect-ratio`** und **`max-aspect-ratio`** verwenden, um Mindest- bzw. Höchstwerte abzufragen.

## Beispiele

Im untenstehenden Beispiel ist ein {{HTMLElement("div")}}-Element in einem {{HTMLElement("iframe")}} enthalten. Das iframe erstellt seinen eigenen Viewport. Ändern Sie die Größe des `<iframe>`, um `aspect-ratio` in Aktion zu sehen.

Beachten Sie, dass, wenn keine der Media-Query-Bedingungen zutrifft, der Hintergrund weiß wird, weil keine der unten stehenden Regeln auf das `<div>` innerhalb des `<iframe>` angewendet wird. Sehen Sie, ob Sie herausfinden können, welche Breiten- und Höhenwerte dies auslösen!

### HTML

```html
<iframe id="outer">
  <div id="inner">
    Watch this element as you resize iframe viewport's width and height.
  </div>
</iframe>
```

### CSS

```css
/* Minimum allowed aspect ratio */
/* Select aspect ratios 8/5 = 1.6 and above */
@media (min-aspect-ratio: 8/5) {
  div {
    background: #99f; /* blue */
  }
}

/* Maximum allowed aspect ratio */
/* Select aspect ratios 3/2 = 1.5 and below */
@media (max-aspect-ratio: 3/2) {
  div {
    background: #9f9; /* green */
  }
}

/* Exact aspect ratio, put it at the bottom to avoid override */
@media (aspect-ratio: 1/1) {
  div {
    background: #f99; /* red */
  }
}
```

### Ergebnis

```html hidden
<label id="wf" for="w">width:165</label>
<input id="w" name="w" type="range" min="100" max="250" step="5" value="165" />
<label id="hf" for="w">height:165</label>
<input id="h" name="h" type="range" min="100" max="250" step="5" value="165" />
<label id="ratio">aspect-ratio: 165/165 = 1</label>

<iframe
  id="outer"
  srcdoc="<style> @media (min-aspect-ratio: 8/5) { div { background: #99f; } } @media (max-aspect-ratio: 3/2) { div { background: #9f9; } } @media (aspect-ratio: 1/1) { div { background: #f99; } }</style><div id='inner'> Watch this element as you resize iframe viewport's width and height.</div>">
</iframe>
```

```css hidden
iframe {
  display: block;
  border: 1px dashed black;
}
```

```js hidden
outer.style.width = outer.style.height = "165px";

const updateRatio = () => {
  ratio.textContent = `aspect-ratio: ${w.value}/${h.value} = ${(w.value / h.value).toFixed(2)}`;
};

w.onchange = w.oninput = () => {
  outer.style.width = `${w.value}px`;
  wf.textContent = `width: ${w.value}`;
  updateRatio();
};

h.onchange = h.oninput = () => {
  outer.style.height = `${h.value}px`;
  hf.textContent = `height: ${h.value}`;
  updateRatio();
};
```

{{ EmbedLiveSample('Result', '300px', '350px') }}

Beachten Sie, dass `min-aspect-ratio: 8/5` die _untere_ Grenze auf 1.6 setzt, sodass diese Media-Query Elemente mit Seitenverhältnissen von 1.6 und darüber auswählt. Das `max-aspect-ratio: 3/2` setzt die _obere_ Grenze, sodass diese Media-Query Elemente mit Seitenverhältnissen von 1.5 und darunter auswählt. Das `aspect-ratio: 1/1` überschreibt die maximale Seitenverhältnisregel, da es danach deklariert wurde und Elemente mit genau `1` auswählt.

Vom Ausgangszustand erhöht sich das Seitenverhältnis, wenn Sie die Höhe verringern. So ändert sich die Hintergrundfarbe des div von rot(1) < grün(1.5) < weiß < blau(1.6).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verstehen von `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)

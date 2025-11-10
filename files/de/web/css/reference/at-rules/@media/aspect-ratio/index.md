---
title: aspect-ratio
slug: Web/CSS/Reference/At-rules/@media/aspect-ratio
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`aspect-ratio`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des {{Glossary("viewport", "Viewports")}} zu testen.

## Syntax

Die `aspect-ratio` Funktion wird als ein {{cssxref("&lt;ratio&gt;")}} Wert angegeben, der das Breite-zu-Höhe Seitenverhältnis des Viewports darstellt. Es handelt sich um eine Bereichsfunktion, was bedeutet, dass Sie auch die Präfixe **`min-aspect-ratio`** und **`max-aspect-ratio`** verwenden können, um jeweils Mindest- und Höchstwerte abzufragen.

## Beispiele

Im folgenden Beispiel ist ein {{HTMLElement("div")}}-Element in einem {{HTMLElement("iframe")}} enthalten. Das iframe erstellt seinen eigenen Viewport. Ändern Sie die Größe des `<iframe>`, um `aspect-ratio` in Aktion zu sehen.

Beachten Sie, dass der Hintergrund weiß wird, wenn keine der Bedingungen der Medienabfrage zutrifft, da keine der unten stehenden Regeln auf das `<div>` innerhalb des `<iframe>` angewendet wird. Können Sie herausfinden, welche Breiten- und Höhenwerte dies auslösen?

### HTML

```html
<iframe
  id="outer"
  srcdoc="<div id='inner'>Watch this element as you resize iframe viewport's width and height.</div>">
</iframe>
```

### CSS

```css
/* Minimum allowed aspect ratio */
/* Select aspect ratios 8/5 = 1.6 and above */
@media (min-aspect-ratio: 8/5) {
  div {
    background: #9999ff; /* blue */
  }
}

/* Maximum allowed aspect ratio */
/* Select aspect ratios 3/2 = 1.5 and below */
@media (max-aspect-ratio: 3/2) {
  div {
    background: #99ff99; /* green */
  }
}

/* Exact aspect ratio, put it at the bottom to avoid override */
@media (aspect-ratio: 1/1) {
  div {
    background: #ff9999; /* red */
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
  srcdoc="<style> @media (min-aspect-ratio: 8/5) { div { background: #9999ff; } } @media (max-aspect-ratio: 3/2) { div { background: #99ff99; } } @media (aspect-ratio: 1/1) { div { background: #ff9999; } }</style><div id='inner'> Watch this element as you resize iframe viewport's width and height.</div>">
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

Beachten Sie, dass `min-aspect-ratio: 8/5` die _untere_ Grenze auf 1.6 setzt, sodass diese Medienabfrage Elemente mit Seitenverhältnissen ab 1.6 auswählt. Die `max-aspect-ratio: 3/2` setzt die _obere_ Grenze, sodass diese Medienabfrage Elemente mit Seitenverhältnissen bis 1.5 auswählt. Die `aspect-ratio: 1/1` überschreibt die Regel für das maximale Seitenverhältnis, da sie später deklariert wurde und Elemente mit einem Seitenverhältnis von genau `1` auswählt.

Aus dem Ausgangszustand heraus beginnt das Seitenverhältnis zu steigen, wenn Sie die Höhe verringern. Somit ändert sich die Hintergrundfarbe des div von rot (1) < grün (1.5) < weiß < blau (1.6).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verstehen von `aspect-ratio`](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- [Media Queries verwenden](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)

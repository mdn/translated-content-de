---
title: aspect-ratio
slug: Web/CSS/@media/aspect-ratio
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

Das **`aspect-ratio`**-[CSS](/de/docs/Web/CSS)-[Medienfeature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des {{Glossary("viewport", "Viewports")}} zu testen.

## Syntax

Das `aspect-ratio`-Feature wird als {{cssxref("&lt;ratio&gt;")}}-Wert angegeben, der das Breiten-Höhen-Seitenverhältnis des Viewports darstellt. Es handelt sich um ein Bereichsfeature, was bedeutet, dass Sie auch die vorangestellten Varianten **`min-aspect-ratio`** und **`max-aspect-ratio`** verwenden können, um Mindest- bzw. Höchstwerte abzufragen.

## Beispiele

Im folgenden Beispiel ist ein {{HTMLElement("div")}}-Element in einem {{HTMLElement("iframe")}} enthalten. Das iframe erzeugt seinen eigenen Viewport. Ändern Sie die Größe des `<iframe>`, um `aspect-ratio` in Aktion zu sehen.

Beachten Sie, dass sich der Hintergrund weiß färbt, wenn keine der Media-Query-Bedingungen zutreffen, da keine der untenstehenden Regeln auf das `<div>` innerhalb des `<iframe>` angewendet wird. Finden Sie heraus, welche Breiten- und Höhenwerte dies auslösen!

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

Beachten Sie, dass `min-aspect-ratio: 8/5` die _untere_ Grenze auf 1,6 setzt, sodass diese Media-Query Elemente mit Seitenverhältnissen von 1,6 und mehr auswählt. Das `max-aspect-ratio: 3/2` setzt die _obere_ Grenze, sodass diese Media-Query Elemente mit Seitenverhältnissen von 1,5 und weniger auswählt. Das `aspect-ratio: 1/1` überschreibt die Regel des maximalen Seitenverhältnisses, da es danach deklariert wurde und wählt Elemente mit einem Seitenverhältnis von genau `1` aus.

Vom Ausgangszustand aus beginnt das Seitenverhältnis mit sinkender Höhe von eins an zu steigen. Dadurch ändert sich die Hintergrundfarbe des div von rot(1) < grün(1,5) < weiß < blau(1,6).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verständnis von `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)

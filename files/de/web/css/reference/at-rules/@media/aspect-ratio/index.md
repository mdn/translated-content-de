---
title: aspect-ratio
slug: Web/CSS/Reference/At-rules/@media/aspect-ratio
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`aspect-ratio`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des {{Glossary("viewport", "Ansichtsfensters")}} zu testen.

## Syntax

Die `aspect-ratio`-Funktion wird als ein {{cssxref("&lt;ratio&gt;")}} Wert spezifiziert, der das Breite-zu-Höhe-Verhältnis des Ansichtsfensters darstellt. Es handelt sich um eine Bereichsfunktion, was bedeutet, dass Sie auch die Varianten **`min-aspect-ratio`** und **`max-aspect-ratio`** verwenden können, um Mindest- und Höchstwerte abzufragen.

## Beispiele

Im folgenden Beispiel ist ein {{HTMLElement("div")}}-Element in einem {{HTMLElement("iframe")}} enthalten. Das iframe erstellt sein eigenes Ansichtsfenster. Ändern Sie die Größe des `<iframe>`, um `aspect-ratio` in Aktion zu sehen.

Beachten Sie, dass, wenn keine der Bedingungen der Medienabfrage zutrifft, der Hintergrund weiß wird, da keine der unten stehenden Regeln auf das `<div>` innerhalb des `<iframe>` angewendet werden. Sehen Sie, ob Sie herausfinden können, welche Breiten- und Höhenwerte dies auslösen!

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

Beachten Sie, dass `min-aspect-ratio: 8/5` die _untere_ Grenze auf 1,6 setzt, so dass diese Medienabfrage Elemente mit Seitenverhältnissen von 1,6 und höher auswählt. Die `max-aspect-ratio: 3/2` setzt die _obere_ Grenze, so dass diese Medienabfrage Elemente mit Seitenverhältnissen von 1,5 und darunter auswählt. Die `aspect-ratio: 1/1` überschreibt die Regel für das maximale Seitenverhältnis, da sie danach deklariert wurde und wählt Elemente mit einem Seitenverhältnis von genau `1`.

Vom Anfangszustand aus, je mehr Sie die Höhe reduzieren, desto mehr beginnt das Seitenverhältnis von eins zu steigen. Dadurch ändert sich die Hintergrundfarbe des div von rot(1) < grün(1.5) < weiß < blau(1.6).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verstehen von `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Verwendung von Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)

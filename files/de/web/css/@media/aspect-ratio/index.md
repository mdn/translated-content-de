---
title: aspect-ratio
slug: Web/CSS/@media/aspect-ratio
l10n:
  sourceCommit: 2ef2c905a7322f5a533cf7c96ec5a337fc614359
---

{{CSSRef}}

Die **`aspect-ratio`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um das [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) des [Viewports](/de/docs/Glossary/viewport) zu testen.

## Syntax

Das `aspect-ratio`-Feature wird als {{cssxref("&lt;ratio&gt;")}}-Wert angegeben, der das Breite-zu-Höhe-Verhältnis des Viewports darstellt. Es handelt sich um ein Bereichs-Feature, was bedeutet, dass Sie auch die präfixierten Varianten **`min-aspect-ratio`** und **`max-aspect-ratio`** verwenden können, um Minimum- bzw. Maximumwerte abzufragen.

## Beispiele

Das untenstehende Beispiel ist in einem {{htmlElement("iframe")}} enthalten, das seinen eigenen Viewport erstellt. Ändern Sie die Größe des `<iframe>`, um `aspect-ratio` in Aktion zu sehen.

Beachten Sie, dass sich der Hintergrund weiß färbt, wenn keine der Medienabfrage-Bedingungen wahr ist, da keine der untenstehenden Regeln auf das `<div>` innerhalb des `<iframe>` angewendet wird. Finden Sie heraus, welche Breiten- und Höhenwerte dies auslösen!

### HTML

```html
<div id="inner">
  Watch this element as you resize your viewport's width and height.
</div>
```

### CSS

```css
/* Minimum aspect ratio */
@media (min-aspect-ratio: 8/5) {
  div {
    background: #9af; /* blue */
  }
}

/* Maximum aspect ratio */
@media (max-aspect-ratio: 3/2) {
  div {
    background: #9ff; /* cyan */
  }
}

/* Exact aspect ratio, put it at the bottom to avoid override*/
@media (aspect-ratio: 1/1) {
  div {
    background: #f9a; /* red */
  }
}
```

### Ergebnis

```html hidden
<label id="wf" for="w">width:165</label>
<input id="w" name="w" type="range" min="100" max="250" step="5" value="165" />
<label id="hf" for="w">height:165</label>
<input id="h" name="h" type="range" min="100" max="250" step="5" value="165" />

<iframe
  id="outer"
  srcdoc="<style> @media (min-aspect-ratio: 8/5) { div { background: #9af; } } @media (max-aspect-ratio: 3/2) { div { background: #9ff; } } @media (aspect-ratio: 1/1) { div { background: #f9a; } }</style><div id='inner'> Watch this element as you resize your viewport's width and height.</div>">
</iframe>
```

```css hidden
iframe {
  display: block;
}
```

```js hidden
outer.style.width = outer.style.height = "165px";

w.onchange = w.oninput = () => {
  outer.style.width = `${w.value}px`;
  wf.textContent = `width: ${w.value}`;
};
h.onchange = h.oninput = () => {
  outer.style.height = `${h.value}px`;
  hf.textContent = `height: ${h.value}`;
};
```

{{ EmbedLiveSample('Result', '300px', '350px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
- [Verständnis von `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)

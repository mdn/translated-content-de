---
title: Seitenverhältnis
slug: Web/CSS/@media/aspect-ratio
l10n:
  sourceCommit: 2ef2c905a7322f5a533cf7c96ec5a337fc614359
---

{{CSSRef}}

Das **`aspect-ratio`** [CSS](/de/docs/Web/CSS) [Medien-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um das {{glossary("Seitenverhältnis")}} des {{glossary("Viewports")}} zu testen.

## Syntax

Das `aspect-ratio` Feature wird als ein {{cssxref("&lt;ratio&gt;")}} Wert angegeben, der das Breite-zu-Höhe-Seitenverhältnis des Viewports darstellt. Es handelt sich um ein Bereichs-Feature, das bedeutet, Sie können auch die Präfixe **`min-aspect-ratio`** und **`max-aspect-ratio`** verwenden, um jeweils Mindest- und Höchstwerte abzufragen.

## Beispiele

Das folgende Beispiel ist in einem {{htmlElement("iframe")}} enthalten, das seinen eigenen Viewport erstellt. Ändern Sie die Größe des `<iframe>`, um `aspect-ratio` in Aktion zu sehen.

Beachten Sie, dass, wenn keine der Medienabfragebedingungen zutrifft, der Hintergrund weiß wird, da keine der unten stehenden Regeln auf das `<div>` innerhalb des `<iframe>` angewendet wird. Sehen Sie, ob Sie herausfinden können, welche Breiten- und Höhenwerte dies auslösen!

### HTML

```html
<div id="inner">
  Watch this element as you resize your viewport's width and height.
</div>
```

### CSS

```css
/* Minimales Seitenverhältnis */
@media (min-aspect-ratio: 8/5) {
  div {
    background: #9af; /* blau */
  }
}

/* Maximales Seitenverhältnis */
@media (max-aspect-ratio: 3/2) {
  div {
    background: #9ff; /* cyan */
  }
}

/* Genaues Seitenverhältnis, setzen Sie es am Ende, um Überschreibungen zu vermeiden */
@media (aspect-ratio: 1/1) {
  div {
    background: #f9a; /* rot */
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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
- [Verständnis von `aspect-ratio`](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)

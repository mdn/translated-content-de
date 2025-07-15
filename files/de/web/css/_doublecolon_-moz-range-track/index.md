---
title: ::-moz-range-track
slug: Web/CSS/::-moz-range-track
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Das **`::-moz-range-track`** [CSS](/de/docs/Web/CSS)-[Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die den _Track_ (d.h. die Rille) repräsentiert, in der der Indikator in einem {{HTMLElement("input")}} vom Typ `type="range"` gleitet.

> [!NOTE]
> Die Verwendung von `::-moz-range-track` mit etwas anderem als einem `<input type="range">` führt zu keinem Treffer und hat keine Wirkung.

## Syntax

```css
::-moz-range-track {
  /* ... */
}
```

## Beispiele

### HTML

```html
<input type="range" min="0" max="100" step="5" value="50" />
```

### CSS

```css
input[type="range"]::-moz-range-track {
  background-color: green;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 300, 50)}}

Ein Schieberegler, der diesen Stil verwendet, könnte folgendermaßen aussehen:

![Ein Bereich mit einem grünen Track](screen_shot_2015-12-04_at_10.14.34.png)

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudoelemente, die von Gecko verwendet werden, um andere Teile eines Bereichs-Inputs zu stylen:
  - {{cssxref("::-moz-range-thumb")}} repräsentiert den Indikator, der in der Rille gleitet.
  - {{cssxref("::-moz-range-progress")}} repräsentiert den unteren Teil des Tracks.

- Ähnliche Pseudoelemente, die von anderen Browsern verwendet werden:
  - {{cssxref("::-webkit-slider-runnable-track")}}, ein Pseudoelement, das von WebKit und Blink (Safari, Chrome und Opera) unterstützt wird.

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)

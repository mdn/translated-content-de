---
title: "`::-moz-range-progress` CSS pseudo-element"
short-title: ::-moz-range-progress
slug: Web/CSS/Reference/Selectors/::-moz-range-progress
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}

Das **`::-moz-range-progress`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die den unteren Teil des _Tracks_ (d.h. die Rinne) darstellt, in welcher der Indikator in einem {{HTMLElement("input")}} mit `type="range"` gleitet. Dieser Teil entspricht den Werten, die niedriger als der aktuell durch den _Thumb_ (d.h. virtueller Knopf) ausgewählte Wert sind.

> [!NOTE]
> Die Verwendung von `::-moz-range-progress` mit etwas anderem als einem `<input type="range">` führt zu keinem Treffer und hat keine Wirkung.

## Syntax

```css
::-moz-range-progress {
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
input[type="range"]::-moz-range-progress {
  background-color: green;
  height: 1em;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 300, 50)}}

Ein Fortschrittsbalken mit diesem Stil könnte folgendermaßen aussehen:

![Der Fortschrittsbalken ist ein dicker grüner Bereich links vom Thumb und eine dünne graue Linie rechts davon. Der Thumb ist ein Kreis mit einem Durchmesser in der Höhe des grünen Bereichs.](screen_shot_2015-12-04_at_20.14.48.png)

## Spezifikationen

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudoelemente, die von Gecko verwendet werden, um andere Teile eines Range-Inputs zu stylen:
  - {{cssxref("::-moz-range-thumb")}} repräsentiert den Indikator, der in der Rinne gleitet.
  - {{cssxref("::-moz-range-track")}} repräsentiert die Rinne, in der der Thumb gleitet.

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)

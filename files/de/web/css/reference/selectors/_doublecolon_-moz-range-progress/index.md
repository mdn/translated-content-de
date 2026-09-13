---
title: "`::-moz-range-progress` CSS pseudo-element"
short-title: ::-moz-range-progress
slug: Web/CSS/Reference/Selectors/::-moz-range-progress
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

{{Non-standard_header}}

Das **`::-moz-range-progress`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die den unteren Abschnitt der _Leiste_ (d.h. Nut) darstellt, in der der Indikator in einem {{HTMLElement("input")}} vom `type="range"` gleitet. Dieser Abschnitt entspricht den Werten, die niedriger sind als der Wert, der aktuell vom _Thumb_ (d.h. virtuellem Knopf) ausgewählt wurde.

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

Eine Fortschrittsleiste, die diesen Stil verwendet, könnte folgendermaßen aussehen:

![Die Fortschrittsleiste ist ein dicker grüner Bereich links vom Thumb und eine dünne graue Linie rechts. Der Thumb ist ein Kreis mit einem Durchmesser, der der Höhe des grünen Bereichs entspricht.](screen_shot_2015-12-04_at_20.14.48.png)

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudoelemente, die von Gecko verwendet werden, um andere Teile eines Range-Inputs zu stylen:
  - {{cssxref("::-moz-range-thumb")}} repräsentiert den Indikator, der in der Nut gleitet.
  - {{cssxref("::-moz-range-track")}} repräsentiert die Nut, in der der Thumb gleitet.

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)

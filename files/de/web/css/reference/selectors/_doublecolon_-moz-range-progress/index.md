---
title: ::-moz-range-progress
slug: Web/CSS/Reference/Selectors/::-moz-range-progress
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_header}}

Der **`::-moz-range-progress`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die den unteren Teil der _Schiene_ (d. h. Rille) darstellt, in der der Indikator in einem {{HTMLElement("input")}} vom `type="range"` gleitet. Dieser Abschnitt entspricht Werten, die niedriger sind als der Wert, der derzeit vom _Schieber_ (d. h. virtuellem Knopf) ausgewählt wurde.

> [!NOTE]
> Die Verwendung von `::-moz-range-progress` mit etwas anderem als einem `<input type="range">` passt zu nichts und hat keine Wirkung.

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

Eine Fortschrittsanzeige, die diesen Stil verwendet, könnte so aussehen:

![Die Fortschrittsanzeige ist ein dicker grüner Quadrat links vom Schieber und eine dünne graue Linie rechts davon. Der Schieber ist ein Kreis mit einem Durchmesser in der Höhe des grünen Bereichs.](screen_shot_2015-12-04_at_20.14.48.png)

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudoelemente, die von Gecko verwendet werden, um andere Teile eines Range-Inputs zu stylen:
  - {{cssxref("::-moz-range-thumb")}} repräsentiert den Indikator, der in der Rille gleitet.
  - {{cssxref("::-moz-range-track")}} repräsentiert die Rille, in der der Schieber gleitet.

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)

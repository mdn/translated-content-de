---
title: ::-moz-range-progress
slug: Web/CSS/::-moz-range-progress
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

{{Non-standard_header}}

Das **`::-moz-range-progress`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die den unteren Teil des _Tracks_ (d.h. Rille) in einem {{HTMLElement("input")}} vom `type="range"` darstellt, in dem der Indikator gleitet. Dieser Teil entspricht Werten, die niedriger sind als der Wert, der derzeit vom _Schieberegler_ (d.h. virtueller Knopf) ausgewählt ist.

> [!NOTE]
> Die Verwendung von `::-moz-range-progress` mit etwas anderem als einem `<input type="range">` führt zu keiner Übereinstimmung und hat keine Wirkung.

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

Eine Fortschrittsanzeige, die diesen Stil verwendet, könnte folgendermaßen aussehen:

![Die Fortschrittsleiste ist ein dicker grüner Bereich links vom Schieberegler und eine dünne graue Linie rechts. Der Schieberegler ist ein Kreis mit einem Durchmesser in der Höhe des grünen Bereichs.](screen_shot_2015-12-04_at_20.14.48.png)

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudoelemente, die von Gecko verwendet werden, um andere Teile eines Range-Inputs zu stylen:
  - {{cssxref("::-moz-range-thumb")}} stellt den Indikator dar, der in der Rille gleitet.
  - {{cssxref("::-moz-range-track")}} stellt die Rille dar, in der der Schieberegler gleitet.

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)

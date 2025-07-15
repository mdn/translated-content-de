---
title: ::-moz-range-progress
slug: Web/CSS/::-moz-range-progress
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Das **`::-moz-range-progress`** [CSS](/de/docs/Web/CSS)-[Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die den unteren Teil des _Tracks_ (d.h. der Rille) darstellt, in dem der Indikator in einem {{HTMLElement("input")}} des `type="range"` gleitet. Dieser Teil entspricht Werten, die niedriger als der aktuell vom _Thumb_ (d.h. dem virtuellen Knopf) ausgewählte Wert sind.

> [!NOTE]
> Die Verwendung von `::-moz-range-progress` mit etwas anderem als ein `<input type="range">` matcht nichts und hat keine Wirkung.

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

Eine Fortschrittsleiste mit diesem Stil könnte ungefähr so aussehen:

![Die Fortschrittsleiste ist ein dicker grüner Bereich links vom Thumb und eine dünne graue Linie rechts. Der Thumb ist ein Kreis mit einem Durchmesser, der der Höhe des grünen Bereichs entspricht.](screen_shot_2015-12-04_at_20.14.48.png)

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die von Gecko verwendeten Pseudoelemente zur Gestaltung anderer Teile eines Range-Inputs:
  - {{cssxref("::-moz-range-thumb")}} repräsentiert den Indikator, der in der Rille gleitet.
  - {{cssxref("::-moz-range-track")}} repräsentiert die Rille, in der der Thumb gleitet.

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)

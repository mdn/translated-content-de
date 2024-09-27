---
title: "::-moz-range-progress"
slug: Web/CSS/::-moz-range-progress
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-moz-range-progress`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die den unteren Abschnitt der _Leiste_ (also die Rille) darstellt, in der der Indikator in einem {{HTMLElement("input")}} vom `type="range"` gleitet. Dieser Abschnitt entspricht den Werten, die niedriger sind als der Wert, der derzeit durch den _Schieberegler_ (also den virtuellen Knopf) ausgewählt ist.

> [!NOTE]
> Die Verwendung von `::-moz-range-progress` bei etwas anderem als einem `<input type="range">` führt zu keinem Treffer und hat keine Wirkung.

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

Ein Fortschrittsbalken, der diesen Stil verwendet, könnte folgendermaßen aussehen:

![Der Fortschrittsbalken ist ein dicker grüner Kasten links vom Schieberegler und eine dünne graue Linie rechts davon. Der Schieberegler ist ein Kreis mit einem Durchmesser in der Höhe des grünen Bereichs.](screen_shot_2015-12-04_at_20.14.48.png)

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudoelemente, die von Gecko verwendet werden, um andere Teile eines Range-Input zu stylen:

  - {{cssxref("::-moz-range-thumb")}} stellt den Indikator dar, der in der Rille gleitet.
  - {{cssxref("::-moz-range-track")}} repräsentiert die Rille, in der der Schieberegler gleitet.

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)

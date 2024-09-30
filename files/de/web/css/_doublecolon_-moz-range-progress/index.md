---
title: "::-moz-range-progress"
slug: Web/CSS/::-moz-range-progress
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-moz-range-progress`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die den unteren Teil der _Spur_ (d.h. Rille) darstellt, in der der Indikator in einem {{HTMLElement("input")}} vom `type="range"` gleitet. Dieser Abschnitt entspricht Werten, die niedriger sind als der Wert, der derzeit durch den _Daumen_ (d.h. virtueller Knopf) ausgewählt wurde.

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

Eine Fortschrittsanzeige mit diesem Stil könnte folgendermaßen aussehen:

![Die Fortschrittsleiste ist ein dicker grüner Balken links vom Daumen und eine dünne graue Linie rechts davon. Der Daumen ist ein Kreis mit einem Durchmesser in der Höhe des grünen Bereichs.](screen_shot_2015-12-04_at_20.14.48.png)

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudo-Elemente, die von Gecko verwendet werden, um andere Teile eines Range-Inputs zu stylen:

  - {{cssxref("::-moz-range-thumb")}} repräsentiert den Indikator, der in der Rille gleitet.
  - {{cssxref("::-moz-range-track")}} repräsentiert die Rille, in der der Daumen gleitet.

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)

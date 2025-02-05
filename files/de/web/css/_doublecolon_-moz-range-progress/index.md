---
title: "::-moz-range-progress"
slug: Web/CSS/::-moz-range-progress
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-moz-range-progress`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die den unteren Bereich der _Spur_ (d. h. der Nut) darstellt, in der der Indikator in einem {{HTMLElement("input")}} vom Typ `type="range"` verschoben wird. Dieser Bereich entspricht den Werten, die niedriger sind als der aktuell vom _Daumen_ (d. h. dem virtuellen Knopf) ausgewählte Wert.

> [!NOTE]
> Die Verwendung von `::-moz-range-progress` mit allem außer einem `<input type="range">` führt zu keiner Übereinstimmung und hat keine Wirkung.

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

Eine Fortschrittsanzeige mit diesem Stil könnte wie folgt aussehen:

![Die Fortschrittsanzeige ist ein dicker grüner quadratischer Bereich links vom Daumen und eine dünne graue Linie rechts davon. Der Daumen ist ein Kreis mit einem Durchmesser, der der Höhe des grünen Bereichs entspricht.](screen_shot_2015-12-04_at_20.14.48.png)

## Spezifikationen

Gehört zu keinem Standard.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die von Gecko verwendeten Pseudo-Elemente, um andere Teile eines Bereichseingabeelements zu stylen:

  - {{cssxref("::-moz-range-thumb")}} repräsentiert den Indikator, der in der Nut gleitet.
  - {{cssxref("::-moz-range-track")}} repräsentiert die Nut, in der der Daumen gleitet.

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)

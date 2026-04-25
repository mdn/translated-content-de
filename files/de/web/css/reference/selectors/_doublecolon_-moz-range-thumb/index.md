---
title: "`::-moz-range-thumb` CSS pseudo-element"
short-title: ::-moz-range-thumb
slug: Web/CSS/Reference/Selectors/::-moz-range-thumb
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}

Das **`::-moz-range-thumb`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die den _Thumb_ (d.h. den virtuellen Knopf) eines {{HTMLElement("input")}} vom Typ `type="range"` darstellt. Der Benutzer kann den Thumb entlang der Spur des Eingabefelds bewegen, um dessen numerischen Wert zu ändern.

> [!NOTE]
> Die Verwendung von `::-moz-range-thumb` mit etwas anderem als einem `<input type="range">` führt zu keiner Übereinstimmung und hat keine Auswirkung.

## Syntax

```css
::-moz-range-thumb {
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
input[type="range"]::-moz-range-thumb {
  background-color: green;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 300, 50)}}

Eine Fortschrittsanzeige mit diesem Stil könnte ungefähr so aussehen:

![Der Thumb des 'input type=range', in Grün gestaltet](screen_shot_2015-12-04_at_13.30.08.png)

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die von Gecko verwendeten Pseudo-Elemente, um andere Teile eines Range-Inputs zu gestalten:
  - {{cssxref("::-moz-range-track")}} repräsentiert die Rille, in der der Thumb gleitet.
  - {{cssxref("::-moz-range-progress")}} repräsentiert den unteren Teil der Spur.

- Ähnliche Pseudo-Elemente, die von anderen Browsern verwendet werden:
  - {{cssxref("::-webkit-slider-thumb")}}, ein Pseudo-Element, das von WebKit und Blink (Safari, Chrome und Opera) unterstützt wird.

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)

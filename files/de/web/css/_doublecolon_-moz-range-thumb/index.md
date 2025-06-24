---
title: ::-moz-range-thumb
slug: Web/CSS/::-moz-range-thumb
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}{{Non-standard_header}}

Der **`::-moz-range-thumb`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die den _Thumb_ (d.h. den virtuellen Knopf) eines `type="range"` {{HTMLElement("input")}} repräsentiert. Der Benutzer kann den Thumb entlang der Schiene des Eingabefelds bewegen, um dessen numerischen Wert zu ändern.

> [!NOTE]
> Die Verwendung von `::-moz-range-thumb` mit etwas anderem als einem `<input type="range">` matcht nichts und hat keine Wirkung.

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

Ein Fortschrittsbalken mit diesem Stil könnte in etwa so aussehen:

![Der Thumb eines 'input type=range', gestylt in Grün](screen_shot_2015-12-04_at_13.30.08.png)

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudo-Elemente, die von Gecko verwendet werden, um andere Teile eines Range-Inputs zu stylen:

  - {{cssxref("::-moz-range-track")}} repräsentiert die Rille, in der der Thumb gleitet.
  - {{cssxref("::-moz-range-progress")}} repräsentiert den unteren Teil der Schiene.

- Ähnliche Pseudo-Elemente, die von anderen Browsern verwendet werden:

  - {{cssxref("::-webkit-slider-thumb")}}, ein Pseudo-Element, das von WebKit und Blink (Safari, Chrome und Opera) unterstützt wird.

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)

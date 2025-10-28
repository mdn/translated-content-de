---
title: ::-moz-range-thumb
slug: Web/CSS/::-moz-range-thumb
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

{{Non-standard_header}}

Der **`::-moz-range-thumb`**-[CSS](/de/docs/Web/CSS)-[Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die den _Thumb_ (d.h. virtuellen Knopf) eines {{HTMLElement("input")}} vom `type="range"` darstellt. Der Benutzer kann den Thumb entlang der Spur des Eingabefelds bewegen, um dessen numerischen Wert zu ändern.

> [!NOTE]
> Die Verwendung von `::-moz-range-thumb` mit etwas anderem als einem `<input type="range">` hat keine übereinstimmende Wirkung und keinen Effekt.

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

Ein Fortschrittsbalken mit diesem Stil könnte etwa so aussehen:

![Der Thumb des 'input type=right' im grünen Stil](screen_shot_2015-12-04_at_13.30.08.png)

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die von Gecko verwendeten Pseudoelemente, um andere Teile eines Range-Eingabefelds zu stylen:
  - {{cssxref("::-moz-range-track")}} repräsentiert die Rille, in der der Thumb gleitet.
  - {{cssxref("::-moz-range-progress")}} repräsentiert den unteren Teil der Spur.

- Ähnliche Pseudoelemente, die von anderen Browsern verwendet werden:
  - {{cssxref("::-webkit-slider-thumb")}}, ein Pseudoelement, das von WebKit und Blink unterstützt wird (Safari, Chrome und Opera)

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)

---
title: ::-moz-range-thumb
slug: Web/CSS/Reference/Selectors/::-moz-range-thumb
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_header}}

Das **`::-moz-range-thumb`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die den _Schieberegler_ (d.h. den virtuellen Knopf) eines {{HTMLElement("input")}} vom `type="range"` darstellt. Der Nutzer kann den Schieberegler entlang der Spur der Eingabe bewegen, um deren numerischen Wert zu verändern.

> [!NOTE]
> Die Verwendung von `::-moz-range-thumb` mit etwas anderem als einem `<input type="range">` passt zu nichts und hat keine Wirkung.

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

Eine Fortschrittsleiste, die diesen Stil verwendet, könnte so aussehen:

![Der Schieberegler des 'input type=right' in Grün gestylt](screen_shot_2015-12-04_at_13.30.08.png)

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die von Gecko verwendeten Pseudo-Elemente, um andere Teile einer Range-Eingabe zu stylen:
  - {{cssxref("::-moz-range-track")}} repräsentiert die Rille, in der der Schieberegler gleitet.
  - {{cssxref("::-moz-range-progress")}} repräsentiert den unteren Teil der Spur.

- Ähnliche Pseudo-Elemente, die von anderen Browsern verwendet werden:
  - {{cssxref("::-webkit-slider-thumb")}}, Pseudo-Element unterstützt von WebKit und Blink (Safari, Chrome und Opera)

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)

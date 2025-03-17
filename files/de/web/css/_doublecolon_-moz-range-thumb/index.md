---
title: ::-moz-range-thumb
slug: Web/CSS/::-moz-range-thumb
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-moz-range-thumb`**-[CSS](/de/docs/Web/CSS)-[Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die den _Thumb_ (d.h. den virtuellen Knopf) eines {{HTMLElement("input")}} mit `type="range"` darstellt. Der Benutzer kann den Thumb entlang der Eingabeschiene bewegen, um den numerischen Wert zu ändern.

> [!NOTE]
> Die Verwendung von `::-moz-range-thumb` mit etwas anderem als einem `<input type="range">` führt zu keiner Übereinstimmung und hat keine Wirkung.

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

Ein Fortschrittsbalken, der diesen Stil verwendet, könnte so aussehen:

![Der Thumb eines 'input type=range' im grünen Stil](screen_shot_2015-12-04_at_13.30.08.png)

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudo-Elemente, die von Gecko verwendet werden, um andere Teile eines Range-Inputs zu stylen:

  - {{cssxref("::-moz-range-track")}} stellt die Führungsschiene dar, auf der der Thumb gleitet.
  - {{cssxref("::-moz-range-progress")}} repräsentiert den unteren Bereich der Schiene.

- Ähnliche Pseudo-Elemente, die von anderen Browsern verwendet werden:

  - {{cssxref("::-webkit-slider-thumb")}}, ein Pseudo-Element, das von WebKit und Blink (Safari, Chrome und Opera) unterstützt wird.

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)

---
title: "::-moz-range-thumb"
slug: Web/CSS/::-moz-range-thumb
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Non-standard_header}}

Der **`::-moz-range-thumb`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die den _Thumb_ (d. h. den virtuellen Knopf) eines {{HTMLElement("input")}} mit `type="range"` darstellt. Der Benutzer kann den Thumb entlang der Leiste des Eingabefeldes bewegen, um seinen numerischen Wert zu ändern.

> [!NOTE]
> Die Verwendung von `::-moz-range-thumb` mit etwas anderem als einem `<input type="range">` liefert keine Übereinstimmung und hat keine Wirkung.

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

Eine Fortschrittsleiste, die diesen Stil verwendet, könnte folgendermaßen aussehen:

![Der Thumb des 'input type=range', in grün gestylt](screen_shot_2015-12-04_at_13.30.08.png)

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudo-Elemente, die von Gecko verwendet werden, um andere Teile eines Range-Inputs zu stylen:

  - {{cssxref("::-moz-range-track")}} repräsentiert den Spalt, in dem der Thumb gleitet.
  - {{cssxref("::-moz-range-progress")}} stellt den unteren Teil der Leiste dar.

- Ähnliche Pseudo-Elemente, die von anderen Browsern verwendet werden:

  - {{cssxref("::-webkit-slider-thumb")}}, Pseudo-Element, das von WebKit und Blink (Safari, Chrome und Opera) unterstützt wird.

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)

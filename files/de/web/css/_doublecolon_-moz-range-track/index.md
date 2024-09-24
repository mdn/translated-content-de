---
title: "::-moz-range-track"
slug: Web/CSS/::-moz-range-track
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-moz-range-track`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die die _Schiene_ (d.h. die Nut) darstellt, in der der Indikator in einem {{HTMLElement("input")}} des Typs `type="range"` gleitet.

> [!NOTE]
> Die Verwendung von `::-moz-range-track` mit anderen Elementen als einem `<input type="range">` führt zu keinem Treffer und hat keine Wirkung.

## Syntax

```css
::-moz-range-track {
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
input[type="range"]::-moz-range-track {
  background-color: green;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 300, 50)}}

Ein Schieberegler mit diesem Stil könnte folgendermaßen aussehen:

![A range with the track green](screen_shot_2015-12-04_at_10.14.34.png)

## Spezifikationen

Ist Teil keines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die von Gecko verwendeten Pseudo-Elemente, um andere Teile eines Bereichseingabe zu stylen:

  - {{cssxref("::-moz-range-thumb")}} repräsentiert den Indikator, der in der Nut gleitet.
  - {{cssxref("::-moz-range-progress")}} repräsentiert den unteren Teil der Schiene.

- Ähnliche Pseudo-Elemente, die von anderen Browsern verwendet werden:

  - {{cssxref("::-webkit-slider-runnable-track")}}, Pseudo-Element, das von WebKit und Blink (Safari, Chrome und Opera) unterstützt wird.

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)

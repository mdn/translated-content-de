---
title: ::-moz-range-thumb
slug: Web/CSS/::-moz-range-thumb
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Das **`::-moz-range-thumb`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die den _Schieberegler_ (d.h. den virtuellen Knopf) eines {{HTMLElement("input")}} vom `type="range"` darstellt. Der Benutzer kann den Schieberegler entlang der Spur des Eingabeelements bewegen, um dessen numerischen Wert zu ändern.

> [!NOTE]
> Die Verwendung von `::-moz-range-thumb` mit etwas anderem als einem `<input type="range">` liefert kein Ergebnis und hat keine Auswirkung.

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

Ein Fortschrittsbalken mit diesem Stil könnte so aussehen:

![Der Schieberegler des 'input type=right' grüner stilisiert](screen_shot_2015-12-04_at_13.30.08.png)

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die von Gecko verwendeten Pseudo-Elemente, um andere Teile eines Bereichs-Eingabefelds zu stylen:
  - {{cssxref("::-moz-range-track")}} repräsentiert die Rille, in der der Schieberegler gleitet.
  - {{cssxref("::-moz-range-progress")}} repräsentiert den unteren Teil der Spur.

- Ähnliche Pseudo-Elemente, die von anderen Browsern verwendet werden:
  - {{cssxref("::-webkit-slider-thumb")}}, Pseudo-Element unterstützt von WebKit und Blink (Safari, Chrome und Opera)

- [CSS-Tricks: Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode: Styling and scripting sliders](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)

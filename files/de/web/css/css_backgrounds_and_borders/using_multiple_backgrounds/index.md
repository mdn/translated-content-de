---
title: Verwendung mehrerer Hintergründe
slug: Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Sie können **mehrere Hintergründe** auf Elemente anwenden. Diese werden übereinander geschichtet, wobei der erste von Ihnen angegebene Hintergrund oben liegt und der zuletzt aufgeführte Hintergrund im Hintergrund ist. Nur der letzte Hintergrund kann eine Hintergrundfarbe enthalten.

Mehrere Hintergründe werden als kommagetrennte Liste angegeben, wie zum Beispiel `background: hintergrund1, hintergrund2, ...;`. Diese Syntax wird sowohl von der Kurzform der {{cssxref("background")}}-Eigenschaft als auch von deren einzelnen Eigenschaften akzeptiert, mit Ausnahme von {{cssxref("background-color")}}: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}}, {{cssxref("background-repeat")}}, {{cssxref("background-size")}}.

## Beispiel

In diesem Beispiel sind drei Hintergründe gestapelt: das Firefox-Logo, ein Bild von Blasen und ein [lineares Gradientenbild](/de/docs/Web/CSS/gradient/linear-gradient):

### HTML

```html
<div class="multi-bg-example"></div>
```

### CSS

```css
.multi-bg-example {
  width: 100%;
  height: 400px;
  background-image:
    url("firefox.png"), url("bubbles.png"),
    linear-gradient(to right, rgb(30 75 115 / 100%), transparent);
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    bottom right,
    left,
    right;
}
```

### Ergebnis

{{EmbedLiveSample('Example','600','400')}}

Wie Sie hier sehen können, ist das Firefox-Logo (zuerst innerhalb von {{ cssxref("background-image") }} aufgeführt) oben, direkt über dem Blasenbild, gefolgt vom Gradienten (zuletzt aufgeführt), der unterhalb aller vorhergehenden 'Bilder' liegt. Jede nachfolgende Untereigenschaft ({{ cssxref("background-repeat") }} und {{ cssxref("background-position") }}) gilt für die entsprechenden Hintergründe. Der zuerst aufgeführte Wert für {{ cssxref("background-repeat") }} gilt also für den ersten (vordersten) Hintergrund, und so weiter.

## Siehe auch

- [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul

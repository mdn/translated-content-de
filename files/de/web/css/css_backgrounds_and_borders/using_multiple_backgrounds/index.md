---
title: Verwendung mehrerer Hintergründe
slug: Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Sie können **mehrere Hintergründe** auf Elemente anwenden. Diese werden übereinander geschichtet, wobei der erste von Ihnen angegebene Hintergrund oben liegt und der letzte im Hintergrund. Nur der letzte Hintergrund kann eine Hintergrundfarbe enthalten.

Mehrere Hintergründe werden als kommagetrennte Liste angegeben, zum Beispiel `background: background1, background2, ...;`. Diese Syntax wird sowohl von der Kurzform {{cssxref("background")}} als auch von den einzelnen Eigenschaften, außer {{cssxref("background-color")}}, akzeptiert: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}}, {{cssxref("background-repeat")}}, {{cssxref("background-size")}}.

## Beispiel

In diesem Beispiel werden drei Hintergründe geschichtet: das Firefox-Logo, ein Bild von Blasen und ein [linearer Gradient](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient):

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

Wie Sie hier sehen können, befindet sich das Firefox-Logo (an erster Stelle innerhalb von {{ cssxref("background-image") }} aufgeführt) oben, direkt über der Blasengrafik, gefolgt von dem Farbverlauf (als letztes aufgeführt), der unter allen vorhergehenden 'Bildern' liegt. Jede nachfolgende Untereigenschaft ({{ cssxref("background-repeat") }} und {{ cssxref("background-position") }}) gilt für die entsprechenden Hintergründe. Somit gilt der erste aufgeführte Wert von {{ cssxref("background-repeat") }} für den ersten (vordersten) Hintergrund und so weiter.

## Siehe auch

- [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Modul [CSS-Hintergründe und -Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders)

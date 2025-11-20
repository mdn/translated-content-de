---
title: Verwendung mehrerer Hintergründe
slug: Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

Sie können **mehrere Hintergründe** auf Elemente anwenden. Diese werden übereinander geschichtet, wobei der erste angegebene Hintergrund oben liegt und der zuletzt angegebene Hintergrund ganz hinten. Nur der letzte Hintergrund kann eine Hintergrundfarbe enthalten.

Mehrere Hintergründe werden als durch Kommas getrennte Liste angegeben, zum Beispiel `background: background1, background2, ...;`. Diese Syntax wird sowohl von der Kurzform der {{cssxref("background")}}-Eigenschaft als auch von den einzelnen Eigenschaften, mit Ausnahme von {{cssxref("background-color")}}, akzeptiert: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}}, {{cssxref("background-repeat")}}, {{cssxref("background-size")}}.

## Beispiel

In diesem Beispiel sind drei Hintergründe gestapelt: das Firefox-Logo, ein Bild von Blasen und ein [linearer Gradient](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient):

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

Wie Sie hier sehen können, befindet sich das Firefox-Logo (zuerst innerhalb von {{ cssxref("background-image") }} aufgeführt) oben, direkt über der Grafik der Blasen und anschließend der Gradient (zuletzt aufgeführt) unter allen vorherigen 'Bildern'. Jede nachfolgende Untereigenschaft ({{ cssxref("background-repeat") }} und {{ cssxref("background-position") }}) bezieht sich auf die entsprechenden Hintergründe. Daher gilt der zuerst aufgeführte Wert von {{ cssxref("background-repeat") }} für den ersten (vordersten) Hintergrund usw.

## Siehe auch

- Modul [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)
- [Css-Verläufe verwenden](/de/docs/Web/CSS/Guides/Images/Using_gradients)

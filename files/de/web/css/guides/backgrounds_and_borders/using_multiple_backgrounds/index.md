---
title: Verwendung mehrerer Hintergründe
slug: Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

Sie können **mehrere Hintergründe** auf Elemente anwenden. Diese werden übereinander geschichtet, wobei der erste angegebene Hintergrund oben liegt und der letzte Hintergrund im Hintergrund ist. Nur der letzte Hintergrund kann eine Hintergrundfarbe enthalten.

Mehrere Hintergründe werden als kommagetrennte Liste angegeben, wie z.B. `background: background1, background2, ...;`. Diese Syntax wird sowohl von der Kurzform der {{cssxref("background")}}-Eigenschaft als auch von den einzelnen Eigenschaften akzeptiert, mit Ausnahme von {{cssxref("background-color")}}: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}}, {{cssxref("background-repeat")}}, {{cssxref("background-size")}}.

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

Wie Sie hier sehen können, befindet sich das Firefox-Logo (zuerst innerhalb von {{ cssxref("background-image") }} angegeben) ganz oben, direkt über der Grafik der Blasen, gefolgt vom Gradient (zuletzt angegeben), der unter allen vorherigen 'Bildern' liegt. Jede nachfolgende Untereigenschaft ({{ cssxref("background-repeat") }} und {{ cssxref("background-position") }}) gilt für die entsprechenden Hintergründe. Der zuerst angegebene Wert für {{ cssxref("background-repeat") }} gilt also für den ersten (vordersten) Hintergrund, und so weiter.

## Wiederholung von Werten bei mehreren Hintergründen

Wenn mehrere Hintergründe verwendet werden und einer hintergrundbezogenen Eigenschaft weniger kommagetrennte Werte als die Anzahl der Hintergrundebenen zugewiesen werden, wiederholt der Benutzeragent die Liste der Werte, bis genügend Werte für alle Ebenen vorhanden sind.

Zum Beispiel:

```css
.element {
  background-image: url("a.png"), url("b.png"), url("c.png");
  background-position: left top;
}
```

Das ist gleichbedeutend mit:

```css
.element {
  background-position:
    left top,
    left top,
    left top;
}
```

## Siehe auch

- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)

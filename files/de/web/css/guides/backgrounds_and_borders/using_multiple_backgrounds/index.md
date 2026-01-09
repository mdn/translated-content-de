---
title: Verwenden mehrerer Hintergründe
slug: Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds
l10n:
  sourceCommit: f3bff6f28c3f117b1a725d42971657f423136562
---

Sie können **mehrere Hintergründe** auf Elemente anwenden. Diese werden übereinander geschichtet, wobei der erste von Ihnen angegebene Hintergrund oben liegt und der zuletzt angegebene Hintergrund unten. Nur der letzte Hintergrund kann eine Hintergrundfarbe beinhalten.

Mehrere Hintergründe werden als durch Kommas getrennte Liste angegeben, wie zum Beispiel `background: background1, background2, ...;`. Diese Syntax wird sowohl von der Kurzform der {{cssxref("background")}}-Eigenschaft als auch von den einzelnen Eigenschaften akzeptiert, mit Ausnahme von {{cssxref("background-color")}}: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}}, {{cssxref("background-repeat")}}, {{cssxref("background-size")}}.

## Beispiel

In diesem Beispiel werden drei Hintergründe gestapelt: das Firefox-Logo, ein Bild von Blasen und ein [linearer Verlauf](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient):

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

Wie Sie hier sehen können, liegt das Firefox-Logo (zuerst in {{ cssxref("background-image") }} aufgelistet) oben, direkt über der Blasengrafik, gefolgt vom Verlauf (zuletzt gelistet), der unter allen vorherigen "Bildern" liegt. Jede nachfolgende Untereigenschaft ({{ cssxref("background-repeat") }} und {{ cssxref("background-position") }}) gilt für die entsprechenden Hintergründe. Der zuerst aufgelistete Wert für {{ cssxref("background-repeat") }} gilt also für den ersten (vordersten) Hintergrund, und so weiter.

## Wertwiederholung für mehrere Hintergründe

Wenn Sie mehrere Hintergründe verwenden, und eine hintergrundbezogene Eigenschaft weniger durch Kommas getrennte Werte als die Anzahl der Hintergrundebenen erhält, wiederholt der Benutzeragent die Liste der Werte, bis genügend Werte für alle Ebenen vorhanden sind.

Zum Beispiel:

```css
.element {
  background-image: url(a.png), url(b.png), url(c.png);
  background-position: left top;
}
```

Dies ist gleichbedeutend mit:

```css
.element {
  background-position:
    left top,
    left top,
    left top;
}
```

## Siehe auch

- [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
- [Verwenden von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)

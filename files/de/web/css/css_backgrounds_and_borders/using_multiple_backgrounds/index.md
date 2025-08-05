---
title: Verwendung mehrerer Hintergründe
slug: Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Sie können **mehrere Hintergründe** auf Elemente anwenden. Diese werden übereinander geschichtet, wobei der erste von Ihnen angegebene Hintergrund oben liegt und der zuletzt aufgelistete Hintergrund im Hintergrund ist. Nur der letzte Hintergrund kann eine Hintergrundfarbe enthalten.

Mehrere Hintergründe werden als durch Kommas getrennte Liste angegeben, wie zum Beispiel `background: background1, background2, ...;`. Diese Syntax wird sowohl von der Kurzform der {{cssxref("background")}}-Eigenschaft als auch von den einzelnen Eigenschaften damit akzeptiert, außer von {{cssxref("background-color")}}: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}}, {{cssxref("background-repeat")}}, {{cssxref("background-size")}}.

## Beispiel

In diesem Beispiel werden drei Hintergründe gestapelt: das Firefox-Logo, ein Bild von Blasen und ein [linearer Gradient](/de/docs/Web/CSS/gradient/linear-gradient):

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
    linear-gradient(to right, rgb(30 75 115 / 100%), rgb(255 255 255 / 0%));
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    bottom right,
    left,
    right;
}
```

### Ergebnis

{{EmbedLiveSample('Example','600','400')}}

Wie Sie hier sehen können, befindet sich das Firefox-Logo (als erstes innerhalb von {{ cssxref("background-image") }} aufgelistet) ganz oben, direkt über der Blasengrafik, gefolgt vom Gradient (zuletzt aufgelistet), der unter allen vorherigen 'Bildern' liegt. Jede nachfolgende Teil-Eigenschaft ({{ cssxref("background-repeat") }} und {{ cssxref("background-position") }}) bezieht sich auf die entsprechenden Hintergründe. Daher gilt der zuerst aufgelistete Wert von {{ cssxref("background-repeat") }} für den ersten (vordersten) Hintergrund und so weiter.

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- [CSS-Hintergründe und -Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul

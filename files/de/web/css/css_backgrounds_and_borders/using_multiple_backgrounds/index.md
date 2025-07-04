---
title: Verwenden mehrerer Hintergründe
slug: Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{CSSRef}}

Sie können **mehrere Hintergründe** auf Elemente anwenden. Diese werden übereinander geschichtet, wobei der erste von Ihnen angegebene Hintergrund oben liegt und der letzte Hintergrund in der Liste im Hintergrund. Nur der letzte Hintergrund kann eine Hintergrundfarbe enthalten.

Mehrere Hintergründe werden als durch Kommas getrennte Liste angegeben, wie z.B. `background: background1, background2, ...;`. Diese Syntax wird sowohl von der Kurzschreibweise {{cssxref("background")}} Eigenschaft als auch von den einzelnen Eigenschaften davon akzeptiert, mit Ausnahme von {{cssxref("background-color")}}: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}}, {{cssxref("background-repeat")}}, {{cssxref("background-size")}}.

## Beispiel

In diesem Beispiel sind drei Hintergründe gestapelt: das Firefox-Logo, ein Bild von Blasen und ein [linearer Gradient](/de/docs/Web/CSS/gradient/linear-gradient):

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
    url(firefox.png), url(bubbles.png),
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

Wie Sie hier sehen können, liegt das Firefox-Logo (zuerst innerhalb von {{ cssxref("background-image") }} aufgelistet) oben, direkt über der Blasengrafik, gefolgt vom Gradient (zuletzt aufgelistet), der unter allen vorhergehenden 'Bildern' liegt. Jede folgende Sub-Eigenschaft ({{ cssxref("background-repeat") }} und {{ cssxref("background-position") }}) wird auf die entsprechenden Hintergründe angewendet. Somit wird der zuerst aufgeführte Wert für {{ cssxref("background-repeat") }} auf den ersten (vordersten) Hintergrund angewendet und so weiter.

## Siehe auch

- [Verwendung von CSS-Gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul

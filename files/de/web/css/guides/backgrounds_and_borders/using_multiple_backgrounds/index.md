---
title: Verwenden von mehreren Hintergründen
slug: Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Sie können **mehrere Hintergründe** auf Elemente anwenden. Diese werden übereinander gelagert, wobei der erste von Ihnen angegebene Hintergrund oben und der letzte Hintergrund, der aufgelistet ist, im Hintergrund liegt. Nur der letzte Hintergrund kann eine Hintergrundfarbe enthalten.

Mehrere Hintergründe werden als kommagetrennte Liste angegeben, wie z. B. `background: background1, background2, ...;`. Diese Syntax wird sowohl von der Kurzform {{cssxref("background")}}-Eigenschaft als auch von den einzelnen Eigenschaften außer {{cssxref("background-color")}} akzeptiert: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}}, {{cssxref("background-repeat")}}, {{cssxref("background-size")}}.

## Beispiel

In diesem Beispiel werden drei Hintergründe übereinander gestapelt: das Firefox-Logo, ein Bild von Blasen und ein [linearer Verlauf](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient):

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

Wie Sie hier sehen können, befindet sich das Firefox-Logo (zuerst innerhalb von {{ cssxref("background-image") }} aufgeführt) oben, direkt über der Blasengrafik, gefolgt vom Verlauf (zuletzt aufgeführt), der unter allen vorhergehenden 'Bildern' liegt. Jede nachfolgende Sub-Eigenschaft ({{ cssxref("background-repeat") }} und {{ cssxref("background-position") }}) bezieht sich auf die entsprechenden Hintergründe. Der erste aufgeführte Wert für {{ cssxref("background-repeat") }} wird also auf den ersten (vordersten) Hintergrund angewendet, und so weiter.

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Modul [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)

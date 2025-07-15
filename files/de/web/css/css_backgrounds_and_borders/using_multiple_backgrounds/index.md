---
title: Verwenden mehrerer Hintergründe
slug: Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Sie können **mehrere Hintergründe** auf Elemente anwenden. Diese werden übereinander geschichtet, wobei der erste angegebene Hintergrund oben liegt und der letzte angegebene Hintergrund im Hintergrund liegt. Nur der letzte Hintergrund kann eine Hintergrundfarbe enthalten.

Mehrere Hintergründe werden als kommagetrennte Liste angegeben, etwa `background: background1, background2, ...;`. Diese Syntax wird sowohl von der Kurzform {{cssxref("background")}} Eigenschaft als auch von den einzelnen Eigenschaften akzeptiert, mit Ausnahme von {{cssxref("background-color")}}: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}}, {{cssxref("background-repeat")}}, {{cssxref("background-size")}}.

## Beispiel

In diesem Beispiel werden drei Hintergründe gestapelt: das Firefox-Logo, ein Bild mit Blasen und ein [linearer Verlauf](/de/docs/Web/CSS/gradient/linear-gradient):

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

Wie Sie hier sehen können, liegt das Firefox-Logo (das zuerst innerhalb von {{ cssxref("background-image") }} aufgelistet ist) oben, direkt über der Blasengrafik, gefolgt vom Verlauf (der zuletzt aufgelistet ist), der unter allen vorherigen 'Bildern' liegt. Jede nachfolgende Untereigenschaft ({{ cssxref("background-repeat") }} und {{ cssxref("background-position") }}) gilt für die entsprechenden Hintergründe. Der zuerst aufgelistete Wert für {{ cssxref("background-repeat") }} gilt also für den ersten (vordersten) Hintergrund und so weiter.

## Siehe auch

- [Verwenden von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul

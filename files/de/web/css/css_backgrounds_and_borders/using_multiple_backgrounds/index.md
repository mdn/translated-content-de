---
title: Verwendung von mehreren Hintergründen
slug: Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds
l10n:
  sourceCommit: b64538dc77e9a6181b882bd54bdbb307c1430ba8
---

{{CSSRef}}

Sie können **mehrere Hintergründe** auf Elemente anwenden. Diese werden übereinander geschichtet, wobei der erste angegebene Hintergrund oben liegt und der zuletzt angegebene Hintergrund im Hintergrund liegt. Nur der letzte Hintergrund kann eine Hintergrundfarbe enthalten.

Das Definieren mehrerer Hintergründe ist einfach:

```css
.myclass {
  background:
    background1,
    background2,
    /* …, */ backgroundN;
}
```

Sie können dies sowohl mit der Kurzform-Eigenschaft {{ cssxref("background") }} als auch mit den individuellen Eigenschaften tun, mit Ausnahme von {{ cssxref("background-color") }}. Das bedeutet, dass die folgenden Hintergrundeigenschaften als Liste angegeben werden können, eine pro Hintergrund: {{ cssxref("background") }}, {{ cssxref("background-attachment") }}, {{ cssxref("background-clip") }}, {{ cssxref("background-image") }}, {{ cssxref("background-origin") }}, {{ cssxref("background-position") }}, {{ cssxref("background-repeat") }}, {{ cssxref("background-size") }}.

## Beispiel

In diesem Beispiel werden drei Hintergründe übereinandergestapelt: das Firefox-Logo, ein Bild mit Blasen und ein [lineares Farbverlauf](/de/docs/Web/CSS/gradient/linear-gradient):

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

Wie Sie hier sehen können, befindet sich das Firefox-Logo (das zuerst innerhalb von {{ cssxref("background-image") }} aufgeführt wurde) oben, direkt über der Grafik mit den Blasen. Darunter folgt der Farbverlauf (zuletzt aufgeführt), der sich unterhalb aller vorhergehenden 'Bilder' befindet. Jede nachfolgende Untereigenschaft ({{ cssxref("background-repeat") }} und {{ cssxref("background-position") }}) wird auf die entsprechenden Hintergründe angewendet. Das bedeutet, dass der zuerst angegebene Wert für {{ cssxref("background-repeat") }} auf den ersten (vordersten) Hintergrund angewendet wird und so weiter.

## Siehe auch

- [CSS-Verläufe verwenden](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Modul [CSS-Hintergründe und -Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders)

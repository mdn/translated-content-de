---
title: Verwendung mehrerer Hintergründe
slug: Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds
l10n:
  sourceCommit: 24a11cf78b69ae4f93f1557433ddb6eec29a2972
---

{{CSSRef}}

Sie können **mehrere Hintergründe** für Elemente anwenden. Diese werden übereinander geschichtet, wobei der erste bereitgestellte Hintergrund oben liegt und der zuletzt aufgeführte Hintergrund hinten liegt. Nur der letzte Hintergrund kann eine Hintergrundfarbe enthalten.

Das Spezifizieren mehrerer Hintergründe ist einfach:

```css
.myclass {
  background:
    background1,
    background2,
    /* …, */ backgroundN;
}
```

Sie können dies sowohl mit der Kurzform-{{ cssxref("background") }}-Eigenschaft als auch mit den einzelnen Eigenschaften tun, außer {{ cssxref("background-color") }}. Das heißt, die folgenden Hintergrundeigenschaften können als Liste angegeben werden, eine pro Hintergrund: {{ cssxref("background") }}, {{ cssxref("background-attachment") }}, {{ cssxref("background-clip") }}, {{ cssxref("background-image") }}, {{ cssxref("background-origin") }}, {{ cssxref("background-position") }}, {{ cssxref("background-repeat") }}, {{ cssxref("background-size") }}.

## Beispiel

In diesem Beispiel werden drei Hintergründe gestapelt: das Firefox-Logo, ein Bild von Blasen und ein [linearer Verlauf](/de/docs/Web/CSS/gradient/linear-gradient):

### HTML

```html
<div class="multi-bg-example"></div>
```

### CSS

```css
.multi-bg-example {
  width: 100%;
  height: 400px;
  background-image: url(firefox.png), url(bubbles.png),
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

Wie Sie hier sehen können, befindet sich das Firefox-Logo (zuerst in {{ cssxref("background-image") }} aufgelistet) oben, direkt über der Blasengrafik, gefolgt vom Verlauf (zuletzt gelistet), der unter allen vorherigen 'Bildern' liegt. Jede nachfolgende Untereigenschaft ({{ cssxref("background-repeat") }} und {{ cssxref("background-position") }}) gilt für die entsprechenden Hintergründe. Der zuerst angegebene Wert für {{ cssxref("background-repeat") }} gilt also für den ersten (vordersten) Hintergrund und so weiter.

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Modul [CSS-Hintergründe und -Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders)

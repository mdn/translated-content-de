---
title: Implementierung von Bild-Sprites in CSS
short-title: Implementierung von Bild-Sprites
slug: Web/CSS/CSS_images/Implementing_image_sprites_in_CSS
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

**Bild-Sprites** werden in zahlreichen Web-Apps verwendet, in denen mehrere Bilder genutzt werden. Anstatt jedes Bild als separate Bilddatei einzubinden, ist es viel speicher- und bandbreitenfreundlicher, sie als ein einziges Bild zu senden. Dabei wird die Hintergrundposition genutzt, um zwischen den einzelnen Bildern in derselben Bilddatei zu unterscheiden, sodass die Anzahl der HTTP-Anfragen reduziert wird.

> [!NOTE]
> Bei der Verwendung von HTTP/2 kann es tatsächlich bandbreitenfreundlicher sein, mehrere kleine Anfragen zu verwenden.

## Implementierung

Angenommen, jedem Element mit der Klasse `tool-btn` wird ein Bild zugewiesen:

```css
.tool-btn {
  background: url("myfile.png");
  display: inline-block;
  height: 20px;
  width: 20px;
}
```

Eine Hintergrundposition kann entweder als zwei x-, y-Werte nach dem {{cssxref("url_value", "&lt;url&gt;")}} im Hintergrund oder als {{cssxref("background-position")}} hinzugefügt werden. Zum Beispiel:

```css
#btn1 {
  background-position: -20px 0px;
}

#btn2 {
  background-position: -40px 0px;
}
```

Dies würde den Startpunkt des Hintergrundbildes für das Element mit der ID `btn1` 20 Pixel nach links verschieben und das Element mit der ID `btn2` 40 Pixel nach links (vorausgesetzt, sie haben die Klasse `tool-btn` zugewiesen und werden von der oben genannten Bildregel beeinflusst).

Ebenso können Sie auch Hover-Zustände erstellen, indem Sie `#btn:hover` ansprechen.

## Siehe auch

- [Voll funktionsfähige Demo bei CSS Tricks](https://css-tricks.com/snippets/css/perfect-css-sprite-sliding-doors-button/)

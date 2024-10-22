---
title: Implementierung von Bild-Sprites in CSS
slug: Web/CSS/CSS_images/Implementing_image_sprites_in_CSS
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

**Bild-Sprites** werden in zahlreichen Webanwendungen genutzt, in denen mehrere Bilder verwendet werden. Anstatt jedes Bild als separate Bilddatei einzubinden, ist es speicher- und bandbreitenfreundlicher, sie als ein einzelnes Bild zu versenden; dabei wird `background-position` verwendet, um zwischen den einzelnen Bildern in derselben Bilddatei zu unterscheiden, wodurch die Anzahl der HTTP-Anfragen reduziert wird.

> [!NOTE]
> Bei Verwendung von HTTP/2 kann es tatsächlich bandbreitenfreundlicher sein, mehrere kleine Anfragen zu verwenden.

## Implementierung

Angenommen, jedem Element mit der Klasse `tool-btn` wird ein Bild zugewiesen:

```css
.tool-btn {
  background: url(myfile.png);
  display: inline-block;
  height: 20px;
  width: 20px;
}
```

Eine `background-position` kann entweder als zwei x, y Werte nach dem {{cssxref("url_value", "&lt;url&gt;")}} im Hintergrund hinzugefügt werden, oder als {{cssxref("background-position")}}. Zum Beispiel:

```css
#btn1 {
  background-position: -20px 0px;
}

#btn2 {
  background-position: -40px 0px;
}
```

Dies würde den Startpunkt des Hintergrundbildes für das Element mit der ID `btn1` um 20 Pixel nach links verschieben und das Element mit der ID `btn2` um 40 Pixel nach links verschieben (vorausgesetzt, sie haben die Klasse `tool-btn` zugewiesen und werden von der obigen Bildregel beeinflusst).

Auf ähnliche Weise können Sie auch Hover-Zustände erstellen mit:

```css
#btn:hover {
  background-position: <pixels shifted right>px <pixels shifted down>px;
}
```

## Siehe auch

- [Vollständig funktionierendes Demo bei CSS Tricks](https://css-tricks.com/snippets/css/perfect-css-sprite-sliding-doors-button/)

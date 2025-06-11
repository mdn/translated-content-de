---
title: Implementieren von Bild-Sprites in CSS
short-title: Implementierung von Bild-Sprites
slug: Web/CSS/CSS_images/Implementing_image_sprites_in_CSS
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

**Bild-Sprites** werden in zahlreichen Webanwendungen verwendet, in denen mehrere Bilder genutzt werden. Anstatt jedes Bild als separate Bilddatei einzubinden, ist es viel speicher- und bandbreitenfreundlicher, sie als ein einziges Bild zu senden; die individuelle Unterscheidung der Bilder erfolgt durch die Hintergrundposition in derselben Bilddatei, wodurch die Anzahl der HTTP-Anfragen reduziert wird.

> [!NOTE]
> Bei Verwendung von HTTP/2 kann es tatsächlich bandbreitenfreundlicher sein, mehrere kleine Anfragen zu nutzen.

## Implementierung

Angenommen, einem Bild wird jedem Element mit der Klasse `tool-btn` zugewiesen:

```css
.tool-btn {
  background: url(myfile.png);
  display: inline-block;
  height: 20px;
  width: 20px;
}
```

Eine Hintergrundposition kann entweder als zwei x, y-Werte nach dem {{cssxref("url_value", "&lt;url&gt;")}} im Hintergrund hinzugefügt werden oder als {{cssxref("background-position")}}. Zum Beispiel:

```css
#btn1 {
  background-position: -20px 0px;
}

#btn2 {
  background-position: -40px 0px;
}
```

Dies würde den Startpunkt des Hintergrundbildes für das Element mit der ID `btn1` um 20 Pixel nach links und für das Element mit der ID `btn2` um 40 Pixel nach links verschieben (vorausgesetzt, sie haben die Klasse `tool-btn` zugewiesen und werden durch die obige Bildregel beeinflusst).

Ähnlich können Sie auch Hover-Zustände erstellen mit:

```css
#btn:hover {
  background-position: <pixels shifted right>px <pixels shifted down>px;
}
```

## Siehe auch

- [Voll funktionsfähige Demo bei CSS Tricks](https://css-tricks.com/snippets/css/perfect-css-sprite-sliding-doors-button/)

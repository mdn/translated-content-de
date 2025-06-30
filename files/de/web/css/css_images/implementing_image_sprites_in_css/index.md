---
title: Implementierung von Bild-Sprites in CSS
short-title: Implementierung von Bild-Sprites
slug: Web/CSS/CSS_images/Implementing_image_sprites_in_CSS
l10n:
  sourceCommit: 26f9fbee05fb92b584d44fba4359e86796484aa6
---

{{CSSRef}}

**Bild-Sprites** werden in zahlreichen Web-Apps verwendet, in denen mehrere Bilder genutzt werden. Anstatt jedes Bild als separate Bilddatei einzubinden, ist es wesentlich speicher- und bandbreitenschonender, sie als ein einzelnes Bild zu senden; indem die Hintergrundposition genutzt wird, um zwischen einzelnen Bildern in derselben Bilddatei zu unterscheiden, sodass die Anzahl der HTTP-Anfragen reduziert wird.

> [!NOTE]
> Bei der Verwendung von HTTP/2 kann es tatsächlich bandbreitenschonender sein, mehrere kleine Anfragen zu nutzen.

## Implementierung

Angenommen, ein Bild wird jedem Element mit der Klasse `tool-btn` zugewiesen:

```css
.tool-btn {
  background: url(myfile.png);
  display: inline-block;
  height: 20px;
  width: 20px;
}
```

Eine Hintergrundposition kann entweder als zwei x-, y-Werte nach der {{cssxref("url_value", "&lt;url&gt;")}} im Hintergrund oder als {{cssxref("background-position")}} hinzugefügt werden. Zum Beispiel:

```css
#btn1 {
  background-position: -20px 0px;
}

#btn2 {
  background-position: -40px 0px;
}
```

Dies würde den Startpunkt des Hintergrundbildes für das Element mit der ID `btn1` um 20 Pixel nach links und das Element mit der ID `btn2` um 40 Pixel nach links verschieben (vorausgesetzt, sie haben die Klasse `tool-btn` zugewiesen und werden von der oben genannten Bildregel beeinflusst).

Ähnlich können Sie auch Hover-Zustände erstellen, indem Sie `#btn:hover` ansprechen.

## Siehe auch

- [Vollständiges funktionierendes Beispiel bei CSS Tricks](https://css-tricks.com/snippets/css/perfect-css-sprite-sliding-doors-button/)

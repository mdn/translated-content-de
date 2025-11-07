---
title: Implementierung von Bildsprites in CSS
short-title: Implementierung von Bildsprites
slug: Web/CSS/Guides/Images/Implementing_image_sprites
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**Bildsprites** werden in zahlreichen Webanwendungen verwendet, bei denen mehrere Bilder genutzt werden. Anstatt jedes Bild als separate Bilddatei einzufügen, ist es viel speicher- und bandbreitenfreundlicher, sie als einzelnes Bild zu senden; dabei wird die Hintergrundposition verwendet, um zwischen einzelnen Bildern in der gleichen Bilddatei zu unterscheiden, sodass die Anzahl der HTTP-Anfragen reduziert wird.

> [!NOTE]
> Bei der Nutzung von HTTP/2 kann es tatsächlich bandbreitenfreundlicher sein, mehrere kleine Anfragen zu stellen.

## Implementierung

Angenommen, es wird jedem Element mit der Klasse `tool-btn` ein Bild zugewiesen:

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

Dies würde den Startpunkt des Hintergrundbilds für das Element mit der ID `btn1` 20 Pixel nach links und für das Element mit der ID `btn2` 40 Pixel nach links verschieben (sofern ihnen die Klasse `tool-btn` zugewiesen ist und sie von der obigen Bildregel betroffen sind).

Ebenso können Sie Hover-Zustände erstellen, indem Sie `#btn:hover` anvisieren.

## Siehe auch

- [Vollständige funktionierende Demo bei CSS Tricks](https://css-tricks.com/snippets/css/perfect-css-sprite-sliding-doors-button/)

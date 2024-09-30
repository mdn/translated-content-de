---
title: Implementierung von Bild-Sprites in CSS
slug: Web/CSS/CSS_images/Implementing_image_sprites_in_CSS
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

**Bild-Sprites** werden in zahlreichen Webanwendungen verwendet, in denen mehrere Bilder benötigt werden. Anstatt jedes Bild als separate Bilddatei einzubinden, ist es viel speicher- und bandbreitenfreundlicher, sie als ein einziges Bild zu senden; die Hintergrundposition wird dann genutzt, um zwischen einzelnen Bildern in derselben Bilddatei zu unterscheiden, wodurch die Anzahl der HTTP-Anfragen reduziert wird.

> [!NOTE]
> Bei der Verwendung von HTTP/2 kann es tatsächlich bandbreitenfreundlicher sein, mehrere kleine Anfragen zu verwenden.

## Implementierung

Angenommen, jedem Element mit der Klasse `toolbtn` wird ein Bild zugewiesen:

```css
.toolbtn {
  background: url(myfile.png);
  display: inline-block;
  height: 20px;
  width: 20px;
}
```

Eine Hintergrundposition kann entweder als zwei x, y-Werte nach dem {{cssxref("url_value", "&lt;url&gt;")}} im Hintergrund oder als {{cssxref("background-position")}} hinzugefügt werden. Zum Beispiel:

```css
#btn1 {
  background-position: -20px 0px;
}

#btn2 {
  background-position: -40px 0px;
}
```

Dies würde den Ausgangspunkt des Hintergrundbildes für das Element mit der ID `btn1` um 20 Pixel nach links und für das Element mit der ID `btn2` um 40 Pixel nach links verschieben (vorausgesetzt, sie haben die Klasse `toolbtn` zugewiesen und werden von der obigen Bildregel beeinflusst).

In ähnlicher Weise können Sie auch Hover-Zustände erstellen mit:

```css
#btn:hover {
  background-position: <pixels shifted right>px <pixels shifted down>px;
}
```

## Siehe auch

- [Vollständiges funktionierendes Beispiel bei CSS Tricks](https://css-tricks.com/snippets/css/perfect-css-sprite-sliding-doors-button/)

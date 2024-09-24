---
title: ":picture-in-picture"
slug: Web/CSS/:picture-in-picture
l10n:
  sourceCommit: 04ebe57066db2cff350018649bdb15b2a10c67ba
---

{{CSSRef}}

Die **`:picture-in-picture`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt das Element aus, das sich derzeit im Bild-in-Bild-Modus befindet.

## Syntax

```css
:picture-in-picture {
  /* ... */
}
```

## Verwendungshinweise

Die `:picture-in-picture`-Pseudoklasse ermöglicht es Ihnen, Ihre Stylesheets so zu konfigurieren, dass die Größe, der Stil oder das Layout von Inhalten automatisch angepasst werden, wenn ein Video zwischen Bild-in-Bild- und herkömmlichen Darstellungsmodi wechselt.

## Beispiele

In diesem Beispiel hat ein Video einen Box-Schatten, wenn es im schwebenden Fenster angezeigt wird.

### HTML

Das HTML der Seite sieht folgendermaßen aus:

```html
<h1>MDN Web Docs Demo: :picture-in-picture pseudo-class</h1>

<p>
  Dieses Demo verwendet die <code>:picture-in-picture</code>-Pseudoklasse, um den Stil eines Videos vollständig mit CSS automatisch zu ändern.
</p>

<video id="pip-video"></video>
```

Die {{HTMLElement("video")}} mit der ID `"pip-video"` wechselt zwischen einem roten Box-Schatten und keinem, abhängig davon, ob sie im Bild-in-Bild-Schwebefenster angezeigt wird oder nicht.

### CSS

Die Magie passiert im CSS.

```css
:picture-in-picture {
  box-shadow: 0 0 0 5px red;
}
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Bild-in-Bild-API](/de/docs/Web/API/Picture-in-Picture_API)
- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{DOMxRef("Document.pictureInPictureElement")}}

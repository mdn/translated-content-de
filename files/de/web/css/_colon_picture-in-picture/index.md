---
title: :picture-in-picture
slug: Web/CSS/:picture-in-picture
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:picture-in-picture`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt das Element aus, das sich derzeit im Picture-in-Picture-Modus befindet.

## Syntax

```css
:picture-in-picture {
  /* ... */
}
```

## Verwendungsnotizen

Die `:picture-in-picture` Pseudoklasse ermöglicht es Ihnen, Ihre Stylesheets so zu konfigurieren, dass sie automatisch die Größe, den Stil oder das Layout von Inhalten anpassen, wenn ein Video zwischen Picture-in-Picture und traditionellem Präsentationsmodus wechselt.

## Beispiele

In diesem Beispiel erhält ein Video einen Box-Schatten, wenn es im schwebenden Fenster angezeigt wird.

### HTML

Das HTML der Seite sieht so aus:

```html
<h1>MDN Web Docs Demo: :picture-in-picture pseudo-class</h1>

<p>
  This demo uses the <code>:picture-in-picture</code> pseudo-class to
  automatically change the style of a video entirely using CSS.
</p>

<video id="pip-video"></video>
```

Das {{HTMLElement("video")}} mit der ID `"pip-video"` erhält abwechselnd einen roten Box-Schatten oder nicht, je nachdem, ob es im Picture-in-Picture-Schwebefenster angezeigt wird.

### CSS

Die Magie passiert im CSS.

```css
:picture-in-picture {
  box-shadow: 0 0 0 5px red;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Picture-in-Picture API](/de/docs/Web/API/Picture-in-Picture_API)
- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled)
- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement)

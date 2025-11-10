---
title: :picture-in-picture
slug: Web/CSS/Reference/Selectors/:picture-in-picture
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die **`:picture-in-picture`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) selektiert das Element, das sich aktuell im Picture-in-Picture-Modus befindet.

## Syntax

```css
:picture-in-picture {
  /* ... */
}
```

## Nutzungshinweise

Die `:picture-in-picture` Pseudo-Klasse ermöglicht es Ihnen, Ihre Stylesheets so zu konfigurieren, dass die Größe, der Stil oder das Layout von Inhalten automatisch angepasst werden, wenn ein Video zwischen dem Picture-in-Picture-Modus und dem traditionellen Präsentationsmodus wechselt.

## Beispiele

In diesem Beispiel hat ein Video einen Rahmen-Schatten, wenn es im schwebenden Fenster angezeigt wird.

### HTML

Das HTML der Seite sieht folgendermaßen aus:

```html
<h1>MDN Web Docs Demo: :picture-in-picture pseudo-class</h1>

<p>
  This demo uses the <code>:picture-in-picture</code> pseudo-class to
  automatically change the style of a video entirely using CSS.
</p>

<video id="pip-video"></video>
```

Das {{HTMLElement("video")}} mit der ID `"pip-video"` wechselt zwischen einem roten Rahmen-Schatten und keinem, je nachdem ob es im Picture-in-Picture schwebenden Fenster angezeigt wird oder nicht.

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

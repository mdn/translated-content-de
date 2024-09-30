---
title: ":picture-in-picture"
slug: Web/CSS/:picture-in-picture
l10n:
  sourceCommit: 04ebe57066db2cff350018649bdb15b2a10c67ba
---

{{CSSRef}}

Die **`:picture-in-picture`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt das Element aus, das sich derzeit im Picture-in-Picture-Modus befindet.

## Syntax

```css
:picture-in-picture {
  /* ... */
}
```

## Verwendungshinweise

Die `:picture-in-picture` Pseudoklasse ermöglicht es Ihnen, Ihre Stylesheets so zu konfigurieren, dass Größe, Stil oder Layout von Inhalten automatisch angepasst werden, wenn ein Video zwischen Picture-in-Picture und herkömmlichen Präsentationsmodi wechselt.

## Beispiele

In diesem Beispiel hat ein Video einen Box-Schatten, wenn es im schwebenden Fenster angezeigt wird.

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

Das {{HTMLElement("video")}} mit der ID `"pip-video"` wird zwischen einem roten Box-Schatten wechseln oder nicht, abhängig davon, ob es im schwebenden Picture-in-Picture-Fenster angezeigt wird.

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

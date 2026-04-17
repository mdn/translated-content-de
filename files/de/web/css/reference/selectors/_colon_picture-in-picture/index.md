---
title: "`:picture-in-picture` CSS-Pseudoklasse"
short-title: :picture-in-picture
slug: Web/CSS/Reference/Selectors/:picture-in-picture
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Die **`:picture-in-picture`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) entspricht dem Element, das sich derzeit im Bild-in-Bild-Modus befindet.

## Syntax

```css
:picture-in-picture {
  /* ... */
}
```

## Anmerkungen zur Nutzung

Die `:picture-in-picture`-Pseudoklasse ermöglicht es Ihnen, Ihre Stylesheets so zu konfigurieren, dass die Größe, der Stil oder das Layout von Inhalten automatisch angepasst werden, wenn ein Video zwischen Bild-in-Bild-Modus und herkömmlicher Präsentationsweise wechselt.

## Beispiele

In diesem Beispiel hat ein Video einen Box-Shadow, wenn es im schwebenden Fenster angezeigt wird.

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

Das {{HTMLElement("video")}} mit der ID `"pip-video"` wird zwischen einem roten Box-Shadow wechseln oder nicht, abhängig davon, ob es im schwebenden Bild-in-Bild-Fenster angezeigt wird oder nicht.

### CSS

Das Besondere passiert im CSS.

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

- [Bild-in-Bild-API](/de/docs/Web/API/Picture-in-Picture_API)
- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled)
- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement)

---
title: ":picture-in-picture"
slug: Web/CSS/:picture-in-picture
l10n:
  sourceCommit: 04ebe57066db2cff350018649bdb15b2a10c67ba
---

{{CSSRef}}

Die **`:picture-in-picture`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) trifft auf das Element zu, das sich aktuell im Picture-in-Picture-Modus befindet.

## Syntax

```css
:picture-in-picture {
  /* ... */
}
```

## Verwendungsnotizen

Die Pseudoklasse `:picture-in-picture` ermöglicht es Ihnen, Ihre Stylesheets so zu konfigurieren, dass die Größe, der Stil oder das Layout des Inhalts automatisch angepasst wird, wenn ein Video zwischen Picture-in-Picture und dem traditionellen Präsentationsmodus wechselt.

## Beispiele

In diesem Beispiel hat ein Video einen Schatten, wenn es im schwebenden Fenster angezeigt wird.

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

Das {{HTMLElement("video")}} mit der ID `"pip-video"` wird zwischen einem roten Box-Schatten und keinem wechseln, abhängig davon, ob es im Picture-in-Picture-Schwebefenster angezeigt wird oder nicht.

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

- [Picture-in-picture API](/de/docs/Web/API/Picture-in-Picture_API)
- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
- [`HTMLVideoElement.disablePictureInPicture`](/de/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled)
- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement)

---
title: "HTMLIFrameElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLIFrameElement/src
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef}}

Die **`HTMLIFrameElement.src`** ist ein String, der das HTML-Attribut [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src) widerspiegelt und die Adresse des einzubettenden Inhalts enthält.

Beachten Sie, dass das programmgesteuerte Entfernen des `src`-Attributs eines `<iframe>` (z. B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` im Frame geladen wird.

## Beispiel

```js
const iframe = document.createElement("iframe");
iframe.src = "/";
const body = document.querySelector("body");
body.appendChild(iframe); // Fetch the image using the complete URL as the referrer
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLEmbedElement.src`](/de/docs/Web/API/HTMLEmbedElement/src)
- [`HTMLImageElement.src`](/de/docs/Web/API/HTMLImageElement/src)
- [`HTMLMediaElement.src`](/de/docs/Web/API/HTMLMediaElement/src)
- [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src)
- [`HTMLTrackElement.src`](/de/docs/Web/API/HTMLTrackElement/src)

---
title: "HTMLIFrameElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLIFrameElement/src
l10n:
  sourceCommit: 6197320c2f25a975ee4f7df4b8d5b48bf8d01562
---

{{APIRef}}

Die **`HTMLIFrameElement.src`**
Ein String, der das [`src`](/de/docs/Web/HTML/Element/iframe#src) HTML-Attribut widerspiegelt und die Adresse des einzubettenden Inhalts enthält.

Beachten Sie, dass das programmatische Entfernen des src-Attributs eines `<iframe>` (z.B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` im Frame geladen wird.

## Syntax

```js-nolint
src = iframeElt.src
iframeElt.src= src
```

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

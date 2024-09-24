---
title: "HTMLIFrameElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLIFrameElement/src
l10n:
  sourceCommit: 6197320c2f25a975ee4f7df4b8d5b48bf8d01562
---

{{APIRef}}

Die **`HTMLIFrameElement.src`** ist eine Zeichenkette, die das [`src`](/de/docs/Web/HTML/Element/iframe#src) HTML-Attribut widerspiegelt und die Adresse des einzubettenden Inhalts enthält.

Beachten Sie, dass das programmgesteuerte Entfernen des src-Attributs eines `<iframe>` (z.B. über {{domxref("Element.removeAttribute()")}}) dazu führt, dass `about:blank` im Frame geladen wird.

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

- {{DOMxRef("HTMLEmbedElement.src")}}
- {{DOMxRef("HTMLImageElement.src")}}
- {{DOMxRef("HTMLMediaElement.src")}}
- {{DOMxRef("HTMLScriptElement.src")}}
- {{DOMxRef("HTMLTrackElement.src")}}

---
title: "HTMLIFrameElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLIFrameElement/src
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

Die **`HTMLIFrameElement.src`** ist ein String, der das [`src`](/de/docs/Web/HTML/Reference/Elements/iframe#src) HTML-Attribut widerspiegelt und die Adresse des einzubettenden Inhalts enthält.

Beachten Sie, dass das programmgesteuerte Entfernen des `src`-Attributs eines `<iframe>` (z.B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) dazu führt, dass `about:blank` im Frame geladen wird.

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

---
title: "HTMLIFrameElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLIFrameElement/src
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef}}

Die **`HTMLIFrameElement.src`**
Ein String, der das HTML-Attribut [`src`](/de/docs/Web/HTML/Element/iframe#src) widerspiegelt und die Adresse des einzubettenden Inhalts enthält.

Beachten Sie, dass das programmgesteuerte Entfernen des `src`-Attributs eines `<iframe>` (z. B. über [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)) verursacht, dass `about:blank` im Frame geladen wird.

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

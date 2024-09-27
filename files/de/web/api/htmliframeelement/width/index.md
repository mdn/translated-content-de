---
title: "HTMLIFrameElement: width Eigenschaft"
short-title: width
slug: Web/API/HTMLIFrameElement/width
l10n:
  sourceCommit: d8a52569d8d465eb626af3d33600c8c638a7a322
---

{{APIRef("HTML DOM")}}

Die **`width`** Eigenschaft der [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) Schnittstelle gibt einen String zurück, der das `width` Attribut des {{HTMLElement("iframe")}} Elements widerspiegelt und die Breite des Rahmens in CSS-Pixeln angibt.

## Wert

Ein String, der die Breite des Rahmens in CSS-Pixeln angibt.

## Beispiele

```html
<iframe id="el" width="800" height="600"></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.width); // Output: '800'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement.width`](/de/docs/Web/API/HTMLCanvasElement/width)
- [`HTMLEmbedElement.width`](/de/docs/Web/API/HTMLEmbedElement/width)
- [`HTMLImageElement.width`](/de/docs/Web/API/HTMLImageElement/width)
- [`HTMLObjectElement.width`](/de/docs/Web/API/HTMLObjectElement/width)
- [`HTMLSourceElement.width`](/de/docs/Web/API/HTMLSourceElement/width)
- [`HTMLVideoElement.width`](/de/docs/Web/API/HTMLVideoElement/width)

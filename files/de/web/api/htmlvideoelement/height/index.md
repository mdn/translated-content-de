---
title: "HTMLVideoElement: height-Eigenschaft"
short-title: height
slug: Web/API/HTMLVideoElement/height
l10n:
  sourceCommit: d8a52569d8d465eb626af3d33600c8c638a7a322
---

{{APIRef("HTML DOM")}}

Die **`height`**-Eigenschaft der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnittstelle gibt eine Ganzzahl zurück, die das `height`-Attribut des {{HTMLElement("video")}}-Elements widerspiegelt und die dargestellte Höhe der Ressource in CSS-Pixeln angibt.

## Wert

Eine positive Ganzzahl oder 0.

## Beispiele

```html
<video id="media" width="800" height="600"></video>
```

```js
const el = document.getElementById("media");
console.log(el.height); // Output: 600
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement.height`](/de/docs/Web/API/HTMLCanvasElement/height)
- [`HTMLEmbedElement.height`](/de/docs/Web/API/HTMLEmbedElement/height)
- [`HTMLIFrameElement.height`](/de/docs/Web/API/HTMLIFrameElement/height)
- [`HTMLImageElement.height`](/de/docs/Web/API/HTMLImageElement/height)
- [`HTMLObjectElement.height`](/de/docs/Web/API/HTMLObjectElement/height)
- [`HTMLSourceElement.height`](/de/docs/Web/API/HTMLSourceElement/height)

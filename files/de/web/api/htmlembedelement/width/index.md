---
title: "HTMLEmbedElement: width-Eigenschaft"
short-title: width
slug: Web/API/HTMLEmbedElement/width
l10n:
  sourceCommit: d8a52569d8d465eb626af3d33600c8c638a7a322
---

{{APIRef("HTML DOM")}}

Die **`width`**-Eigenschaft der [`HTMLEmbedElement`](/de/docs/Web/API/HTMLEmbedElement) Schnittstelle gibt einen String zurück, der das `width`-Attribut des {{HTMLElement("embed")}} Elements widerspiegelt und die angezeigte Breite der Ressource in CSS-Pixeln angibt.

## Wert

Ein String, der die angezeigte Breite der Ressource in CSS-Pixeln angibt.

## Beispiele

```html
<embed id="el" width="800" height="600" />
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
- [`HTMLIFrameElement.width`](/de/docs/Web/API/HTMLIFrameElement/width)
- [`HTMLImageElement.width`](/de/docs/Web/API/HTMLImageElement/width)
- [`HTMLObjectElement.width`](/de/docs/Web/API/HTMLObjectElement/width)
- [`HTMLSourceElement.width`](/de/docs/Web/API/HTMLSourceElement/width)
- [`HTMLVideoElement.width`](/de/docs/Web/API/HTMLVideoElement/width)

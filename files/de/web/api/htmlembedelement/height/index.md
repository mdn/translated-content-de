---
title: "HTMLEmbedElement: height-Eigenschaft"
short-title: height
slug: Web/API/HTMLEmbedElement/height
l10n:
  sourceCommit: d8a52569d8d465eb626af3d33600c8c638a7a322
---

{{APIRef("HTML DOM")}}

Die **`height`**-Eigenschaft der [`HTMLEmbedElement`](/de/docs/Web/API/HTMLEmbedElement)-Schnittstelle gibt einen String zurück, der das `height`-Attribut des {{HTMLElement("embed")}}-Elements widerspiegelt und die angezeigte Höhe der Ressource in CSS-Pixeln angibt.

## Wert

Ein String, der die angezeigte Höhe der Ressource in CSS-Pixeln angibt.

## Beispiele

```html
<embed id="el" width="800" height="600" />
```

```js
const el = document.getElementById("el");
console.log(el.height); // Output: '600'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement.height`](/de/docs/Web/API/HTMLCanvasElement/height)
- [`HTMLIFrameElement.height`](/de/docs/Web/API/HTMLIFrameElement/height)
- [`HTMLImageElement.height`](/de/docs/Web/API/HTMLImageElement/height)
- [`HTMLObjectElement.height`](/de/docs/Web/API/HTMLObjectElement/height)
- [`HTMLSourceElement.height`](/de/docs/Web/API/HTMLSourceElement/height)
- [`HTMLVideoElement.height`](/de/docs/Web/API/HTMLVideoElement/height)

---
title: "HTMLEmbedElement: height-Eigenschaft"
short-title: height
slug: Web/API/HTMLEmbedElement/height
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("HTML DOM")}}

Die **`height`**-Eigenschaft des [`HTMLEmbedElement`](/de/docs/Web/API/HTMLEmbedElement)-Interfaces gibt einen String zurück, der das `height`-Attribut des {{HTMLElement("embed")}}-Elements widerspiegelt und die angezeigte Höhe der Ressource in CSS-Pixeln angibt.

## Wert

Ein String, der die angezeigte Höhe der Ressource in CSS-Pixeln angibt.

## Beispiele

```html
<embed id="el" width="800" height="600" src="https://example.com" />
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

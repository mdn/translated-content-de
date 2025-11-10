---
title: "HTMLEmbedElement: width-Eigenschaft"
short-title: width
slug: Web/API/HTMLEmbedElement/width
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("HTML DOM")}}

Die **`width`**-Eigenschaft der [`HTMLEmbedElement`](/de/docs/Web/API/HTMLEmbedElement)-Schnittstelle gibt einen String zurück, der das `width`-Attribut des {{HTMLElement("embed")}}-Elements widerspiegelt, was die angezeigte Breite der Ressource in CSS-Pixeln angibt.

## Wert

Ein String, der die angezeigte Breite der Ressource in CSS-Pixeln angibt.

## Beispiele

```html
<embed id="el" width="800" height="600" src="https://example.com" />
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

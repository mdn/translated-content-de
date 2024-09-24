---
title: "HTMLEmbedElement: width-Eigenschaft"
short-title: width
slug: Web/API/HTMLEmbedElement/width
l10n:
  sourceCommit: d8a52569d8d465eb626af3d33600c8c638a7a322
---

{{APIRef("HTML DOM")}}

Die **`width`**-Eigenschaft der {{domxref("HTMLEmbedElement")}}-Schnittstelle gibt eine Zeichenkette zurück, die das `width`-Attribut des {{HTMLElement("embed")}}-Elements widerspiegelt und die angezeigte Breite der Ressource in CSS-Pixeln angibt.

## Wert

Eine Zeichenkette, die die angezeigte Breite der Ressource in CSS-Pixeln angibt.

## Beispiele

```html
<embed id="el" width="800" height="600" />
```

```js
const el = document.getElementById("el");
console.log(el.width); // Ausgabe: '800'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLCanvasElement.width")}}
- {{domxref("HTMLIFrameElement.width")}}
- {{domxref("HTMLImageElement.width")}}
- {{domxref("HTMLObjectElement.width")}}
- {{domxref("HTMLSourceElement.width")}}
- {{domxref("HTMLVideoElement.width")}}

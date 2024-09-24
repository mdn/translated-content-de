---
title: "HTMLEmbedElement: height-Eigenschaft"
short-title: height
slug: Web/API/HTMLEmbedElement/height
l10n:
  sourceCommit: d8a52569d8d465eb626af3d33600c8c638a7a322
---

{{APIRef("HTML DOM")}}

Die **`height`**-Eigenschaft der {{domxref("HTMLEmbedElement")}}-Schnittstelle gibt einen String zurück, der das `height`-Attribut des {{HTMLElement("embed")}}-Elements widerspiegelt und die angezeigte Höhe der Ressource in CSS-Pixels angibt.

## Wert

Ein String, der die angezeigte Höhe der Ressource in CSS-Pixels angibt.

## Beispiele

```html
<embed id="el" width="800" height="600" />
```

```js
const el = document.getElementById("el");
console.log(el.height); // Ausgabe: '600'
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("HTMLCanvasElement.height")}}
- {{domxref("HTMLIFrameElement.height")}}
- {{domxref("HTMLImageElement.height")}}
- {{domxref("HTMLObjectElement.height")}}
- {{domxref("HTMLSourceElement.height")}}
- {{domxref("HTMLVideoElement.height")}}

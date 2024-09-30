---
title: "HTMLVideoElement: poster-Eigenschaft"
short-title: poster
slug: Web/API/HTMLVideoElement/poster
l10n:
  sourceCommit: 85e913af9f01e216149d3381586eb0c784fefff7
---

{{APIRef("HTML DOM")}}

Die **`poster`**-Eigenschaft des [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Interfaces ist ein String, der die URL für ein Bild widerspiegelt, das angezeigt wird, während keine Videodaten verfügbar sind. Wenn die Eigenschaft keine gültige URL darstellt, wird kein Posterbild angezeigt.

Sie spiegelt das `poster`-Attribut des {{HTMLElement("video")}}-Elements wider.

## Wert

Ein String.

## Beispiele

```html
<video
  id="media"
  src="https://example.com/video.mp4"
  poster="https://example.com/poster.jpg"></video>
```

```js
const el = document.getElementById("media");
console.log(el.poster); // Output: "https://example.com/poster.jpg"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

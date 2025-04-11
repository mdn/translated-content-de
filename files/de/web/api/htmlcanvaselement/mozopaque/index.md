---
title: "HTMLCanvasElement: mozOpaque-Eigenschaft"
short-title: mozOpaque
slug: Web/API/HTMLCanvasElement/mozOpaque
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Canvas API")}}{{deprecated_header}}{{non-standard_header}}

Die nicht standardisierte **`HTMLCanvasElement.mozOpaque`**-Eigenschaft ist ein boolescher Wert, der das [`moz-opaque`](/de/docs/Web/HTML/Reference/Elements/canvas#moz-opaque) HTML-Attribut des {{HTMLElement("canvas")}}-Elements widerspiegelt. Sie informiert das Canvas darüber, ob Transluzenz ein Faktor sein wird oder nicht. Wenn das Canvas weiß, dass keine Transluzenz vorhanden ist, kann die Malleistung optimiert werden.

> [!NOTE]
> Dies wurde standardisiert, indem die `alpha`-Option auf `false` gesetzt wird, wenn ein Zeichenkontext mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) erstellt wird. Die Verwendung von `mozOpaque` sollte vermieden werden. Firefox wird es in Zukunft nicht mehr unterstützen.

## Wert

Ein boolescher Wert.

## Beispiele

Gegeben ist dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas" width="300" height="300" moz-opaque></canvas>
```

Sie können die `mozOpaque`-Eigenschaft abrufen oder setzen. Beispielsweise könnten Sie es bedingt auf `true` setzen, wenn `mimeType === 'image/jpeg'` oder ähnlich, um in Ihrer Anwendung Leistung zu gewinnen, wenn keine Transluzenz benötigt wird.

```js
const canvas = document.getElementById("canvas");
console.log(canvas.mozOpaque); // true
// deactivate it
canvas.mozOpaque = false;
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement): Schnittstelle zur Definition der `HTMLCanvasElement.mozOpaque`-Eigenschaft
- [`moz-opaque`](/de/docs/Web/HTML/Reference/Elements/canvas#moz-opaque): HTML-Attribut des {{HTMLElement("canvas")}}-Elements
- [Optimieren Sie Ihr JavaScript-Spiel für Firefox OS](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)

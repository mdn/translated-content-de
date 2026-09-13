---
title: "HTMLCanvasElement: mozOpaque-Eigenschaft"
short-title: mozOpaque
slug: Web/API/HTMLCanvasElement/mozOpaque
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Canvas API")}}{{non-standard_header}}

Die nicht standardisierte **`HTMLCanvasElement.mozOpaque`**-Eigenschaft ist ein boolescher Wert, der das [`moz-opaque`](/de/docs/Web/HTML/Reference/Elements/canvas#moz-opaque) HTML-Attribut des {{HTMLElement("canvas")}}-Elements widerspiegelt. Sie lässt das Canvas wissen, ob Transluzenz ein Faktor sein wird oder nicht. Wenn das Canvas weiß, dass es keine Transluzenz gibt, kann die Malleistung optimiert werden.

> [!NOTE]
> Dies wurde standardisiert durch das Setzen der `alpha`-Option auf `false`, wenn ein Zeichenkontext mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) erstellt wird. Die Verwendung von `mozOpaque` sollte vermieden werden. Firefox wird es in Zukunft nicht mehr unterstützen.

## Wert

Ein boolescher Wert.

## Beispiele

Gegeben dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas" width="300" height="300" moz-opaque></canvas>
```

Sie können die `mozOpaque`-Eigenschaft abrufen oder setzen. Zum Beispiel könnten Sie sie bedingt auf `true` setzen, wenn `mimeType === 'image/jpeg'`, oder ähnlich, um die Leistung Ihrer Anwendung zu steigern, wenn keine Transluzenz benötigt wird.

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
- [Optimieren Ihres JavaScript-Spiels für Firefox OS](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)

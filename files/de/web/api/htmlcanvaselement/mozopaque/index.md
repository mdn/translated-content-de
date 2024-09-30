---
title: "HTMLCanvasElement: mozOpaque Eigenschaft"
short-title: mozOpaque
slug: Web/API/HTMLCanvasElement/mozOpaque
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("Canvas API")}}{{deprecated_header}}{{non-standard_header}}

Die nicht standardisierte **`HTMLCanvasElement.mozOpaque`** Eigenschaft ist
ein boolescher Wert, der das [`moz-opaque`](/de/docs/Web/HTML/Element/canvas#moz-opaque) HTML
Attribut des {{HTMLElement("canvas")}} Elements widerspiegelt. Sie ermöglicht es dem Canvas zu wissen, ob Transluzenz ein Faktor sein wird. Wenn das Canvas weiß, dass keine Transluzenz vorhanden ist, kann die Malleistung optimiert werden.

> [!NOTE]
> Dies wurde standardisiert, indem die `alpha` Option auf
> `false` gesetzt wird, wenn ein Zeichenkontext mit
> [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) erstellt wird. Die Verwendung von `mozOpaque` sollte vermieden werden. Firefox wird die Unterstützung dafür in Zukunft einstellen.

## Wert

Ein boolescher Wert.

## Beispiele

Gegeben ist dieses {{HTMLElement("canvas")}} Element:

```html
<canvas id="canvas" width="300" height="300" moz-opaque></canvas>
```

Sie können die `mozOpaque` Eigenschaft abrufen oder setzen. Zum Beispiel könnten Sie sie bedingt auf `true` setzen, wenn `mimeType === 'image/jpeg'` ist, oder ähnlich, um die Leistung Ihrer Anwendung zu optimieren, wenn keine Transluzenz benötigt wird.

```js
const canvas = document.getElementById("canvas");
console.log(canvas.mozOpaque); // true
// deactivate it
canvas.mozOpaque = false;
```

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement): Schnittstelle, die verwendet wird, um die `HTMLCanvasElement.mozOpaque` Eigenschaft zu definieren
- [`moz-opaque`](/de/docs/Web/HTML/Element/canvas#moz-opaque): HTML Attribut des {{HTMLElement("canvas")}} Elements
- [Optimierung Ihres JavaScript-Spiels für Firefox OS](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)

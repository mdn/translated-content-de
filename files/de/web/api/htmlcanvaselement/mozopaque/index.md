---
title: "HTMLCanvasElement: mozOpaque-Eigenschaft"
short-title: mozOpaque
slug: Web/API/HTMLCanvasElement/mozOpaque
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("Canvas API")}}{{deprecated_header}}{{non-standard_header}}

Die nicht standardisierte **`HTMLCanvasElement.mozOpaque`**-Eigenschaft ist ein boolean Wert, der das [`moz-opaque`](/de/docs/Web/HTML/Element/canvas#moz-opaque) HTML-Attribut des {{HTMLElement("canvas")}}-Elements widerspiegelt. Sie teilt dem Canvas mit, ob Transluzenz eine Rolle spielen wird oder nicht. Wenn das Canvas weiß, dass keine Transluzenz vorhanden ist, kann die Malleistung optimiert werden.

> [!NOTE]
> Dies wurde standardisiert, indem die `alpha`-Option auf `false` gesetzt wird, wenn ein Zeichenkontext mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) erstellt wird. Die Verwendung von `mozOpaque` sollte vermieden werden. Firefox wird die Unterstützung dafür in Zukunft einstellen.

## Wert

Ein boolean Wert.

## Beispiele

Gegeben dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas" width="300" height="300" moz-opaque></canvas>
```

Sie können die `mozOpaque`-Eigenschaft abrufen oder setzen. Beispielsweise könnten Sie sie bedingt auf `true` setzen, wenn `mimeType === 'image/jpeg'` ist, oder ähnlich, um die Leistung in Ihrer Anwendung zu verbessern, wenn Transluzenz nicht erforderlich ist.

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
- [`moz-opaque`](/de/docs/Web/HTML/Element/canvas#moz-opaque): HTML-Attribut des {{HTMLElement("canvas")}}-Elements
- [Optimierung Ihres JavaScript-Spiels für Firefox OS](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)

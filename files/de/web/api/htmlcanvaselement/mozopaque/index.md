---
title: "HTMLCanvasElement: mozOpaque Eigenschaft"
short-title: mozOpaque
slug: Web/API/HTMLCanvasElement/mozOpaque
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("Canvas API")}}{{deprecated_header}}{{non-standard_header}}

Die nicht standardisierte **`HTMLCanvasElement.mozOpaque`**-Eigenschaft ist
ein boolescher Wert, der das [`moz-opaque`](/de/docs/Web/HTML/Element/canvas#moz-opaque) HTML-Attribut des {{HTMLElement("canvas")}}-Elements widerspiegelt. Es informiert die Leinwand darüber, ob Transparenz eine Rolle spielen wird oder nicht. Wenn die Leinwand weiß, dass keine Transparenz vorhanden ist, kann die Darstellungsgeschwindigkeit optimiert werden.

> [!NOTE]
> Dies wurde standardisiert, indem die `alpha`-Option auf `false` gesetzt wird, wenn ein Zeichenkontext mit {{domxref("HTMLCanvasElement.getContext()")}} erstellt wird. Die Verwendung von `mozOpaque` sollte vermieden werden. Firefox wird es in Zukunft nicht mehr unterstützen.

## Wert

Ein boolescher Wert.

## Beispiele

Angenommen, dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas" width="300" height="300" moz-opaque></canvas>
```

Sie können die `mozOpaque`-Eigenschaft abrufen oder festlegen. Zum Beispiel könnten Sie es bedingt auf `true` setzen, wenn `mimeType === 'image/jpeg'` oder ähnlich, um die Leistung Ihrer Anwendung zu verbessern, wenn Transparenz nicht erforderlich ist.

```js
const canvas = document.getElementById("canvas");
console.log(canvas.mozOpaque); // true
// deaktivieren
canvas.mozOpaque = false;
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLCanvasElement")}}: Schnittstelle zur Definition der `HTMLCanvasElement.mozOpaque`-Eigenschaft
- [`moz-opaque`](/de/docs/Web/HTML/Element/canvas#moz-opaque): HTML-Attribut des {{HTMLElement("canvas")}}-Elements
- [Optimierung Ihres JavaScript-Spiels für Firefox OS](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)

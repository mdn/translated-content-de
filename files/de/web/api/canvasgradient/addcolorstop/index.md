---
title: "CanvasGradient: addColorStop() Methode"
short-title: addColorStop()
slug: Web/API/CanvasGradient/addColorStop
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`CanvasGradient.addColorStop()`** Methode fügt einem gegebenen Canvas-Gradienten einen neuen Farbverlaufspunkt hinzu, der durch einen `offset` und eine `color`, definiert ist.

## Syntax

```js-nolint
addColorStop(offset, color)
```

### Parameter

- `offset`
  - : Eine Zahl zwischen `0` und `1`, inklusiv, die die Position des Farbverlaufspunkts darstellt. `0` repräsentiert den Beginn des Gradienten und `1` das Ende.
- `color`
  - : Ein [CSS](/de/docs/Web/CSS) {{cssxref("&lt;color&gt;")}} Wert, der die Farbe des Punktes darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `offset` nicht zwischen 0 und 1 liegt (beide eingeschlossen).
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `color` nicht als CSS {{cssxref("&lt;color&gt;")}} Wert geparst werden kann.

## Beispiele

### Hinzufügen von Punkten zu einem Gradient

Dieses Beispiel verwendet die Methode `addColorStop`, um Punkte zu einem linearen [`CanvasGradient`](/de/docs/Web/API/CanvasGradient) Objekt hinzuzufügen. Der Gradient wird dann verwendet, um ein Rechteck zu füllen.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, "green");
gradient.addColorStop(0.7, "white");
gradient.addColorStop(1, "pink");
ctx.fillStyle = gradient;
ctx.fillRect(10, 10, 200, 100);
```

#### Ergebnis

{{ EmbedLiveSample('Adding_stops_to_a_gradient', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)
- [`CanvasRenderingContext2D.createLinearGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
- [`CanvasRenderingContext2D.createRadialGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)

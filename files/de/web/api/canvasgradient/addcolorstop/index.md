---
title: "CanvasGradient: Methode addColorStop()"
short-title: addColorStop()
slug: Web/API/CanvasGradient/addColorStop
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`CanvasGradient.addColorStop()`**-Methode fügt einen neuen Farbverlaufspunkt hinzu, der durch einen `offset` und eine `color` definiert ist, zu einem gegebenen Canvas-Gradienten.

## Syntax

```js-nolint
addColorStop(offset, color)
```

### Parameter

- `offset`
  - : Eine Zahl zwischen `0` und `1`, inklusive, die die Position des Farbverlaufs anzeigt. `0` repräsentiert den Anfang des Farbverlaufs und `1` das Ende.
- `color`
  - : Ein [CSS](/de/docs/Web/CSS) {{cssxref("&lt;color&gt;")}}-Wert, der die Farbe des Verlaufs definiert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `IndexSizeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `offset` nicht zwischen 0 und 1 (beide eingeschlossen) liegt.
- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `color` nicht als CSS-{{cssxref("&lt;color&gt;")}}-Wert geparst werden kann.

## Beispiele

### Hinzufügen von Verlaufsstopps

Dieses Beispiel verwendet die `addColorStop`-Methode, um Verlaufsstopps zu einem linearen {{domxref("CanvasGradient")}}-Objekt hinzuzufügen. Der Verlauf wird dann verwendet, um ein Rechteck zu füllen.

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

- Die Schnittstelle, die diese Methode definiert: {{domxref("CanvasGradient")}}
- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}

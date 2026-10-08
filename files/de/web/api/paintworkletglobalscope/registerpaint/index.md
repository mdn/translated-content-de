---
title: "PaintWorkletGlobalScope: registerPaint()-Methode"
short-title: registerPaint()
slug: Web/API/PaintWorkletGlobalScope/registerPaint
l10n:
  sourceCommit: 8b77a013c518ef1b62534a8446a60732d582a24b
---

{{APIRef("CSS Painting API")}}{{SeeCompatTable}}

Die **`registerPaint()`**-Methode der [`PaintWorkletGlobalScope`](/de/docs/Web/API/PaintWorkletGlobalScope)-Schnittstelle registriert eine Klasse, die programmgesteuert ein Bild erzeugt, wenn eine CSS-Eigenschaft eine Bilddatei erwartet.

## Syntax

```js-nolint
registerPaint(name, classRef)
```

### Parameter

- `name`
  - : Der Name der zu registrierenden Worklet-Klasse.
- `classRef`
  - : Eine Referenz auf die Klasse, die das Worklet implementiert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eines der Argumente ungültig ist oder fehlt.
- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn bereits ein Worklet mit dem angegebenen Namen existiert.

## Beispiele

Das folgende Beispiel zeigt die Registrierung eines Worklet-Moduls. Dieser Code sollte sich in einer separaten JavaScript-Datei befinden. Beachten Sie, dass `registerPaint()` ohne Referenz auf `PaintWorkletGlobalScope` aufgerufen wird. Die Datei selbst wird über `CSS.paintWorklet.addModule()` geladen (dokumentiert unter [`Worklet.addModule()`](/de/docs/Web/API/Worklet/addModule), einer Methode der übergeordneten Klasse von PaintWorklet).

```js
/* checkboardWorklet.js */

class CheckerboardPainter {
  paint(ctx, geom, properties) {
    // Use `ctx` as if it was a normal canvas
    const colors = ["red", "green", "blue"];
    const size = 32;
    for (let y = 0; y < geom.height / size; y++) {
      for (let x = 0; x < geom.width / size; x++) {
        const color = colors[(x + y) % colors.length];
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.rect(x * size, y * size, size, size);
        ctx.fill();
      }
    }
  }
}

// Register our class under a specific name
registerPaint("checkerboard", CheckerboardPainter);
```

Der erste Schritt bei der Verwendung eines Paint-Worklets besteht darin, es mit der Funktion `registerPaint()` zu definieren, wie oben gezeigt. Anschließend laden Sie es mit der Methode `CSS.paintWorklet.addModule()`:

```js
CSS.paintWorklet.addModule("checkboardWorklet.js");
```

Danach können Sie die CSS-Funktion {{cssxref('image/paint', 'paint()')}} überall dort in Ihrem CSS verwenden, wo ein {{cssxref('&lt;image&gt;')}}-Wert gültig ist.

```css
li {
  background-image: paint(checkerboard);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)

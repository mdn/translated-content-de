---
title: "PaintWorkletGlobalScope: registerPaint() Methode"
short-title: registerPaint()
slug: Web/API/PaintWorkletGlobalScope/registerPaint
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{APIRef("CSS Painting API")}}{{SeeCompatTable}}

Die **`registerPaint()`**-Methode des
[`PaintWorkletGlobalScope`](/de/docs/Web/API/PaintWorkletGlobalScope)-Interfaces registriert eine Klasse, um ein Bild programmatisch zu generieren, wo eine CSS-Eigenschaft eine Datei erwartet.

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
  - : Wird ausgelöst, wenn eines der Argumente ungültig oder fehlend ist.
- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn bereits ein Worklet mit dem angegebenen Namen existiert.

## Beispiele

Das folgende Beispiel zeigt die Registrierung eines Worklet-Moduls. Dies sollte in einer separaten JS-Datei erfolgen. Beachten Sie, dass `registerPaint()` ohne Referenz zu `PaintWorkletGlobalScope` aufgerufen wird. Die Datei selbst wird durch `CSS.paintWorklet.addModule()` geladen (dokumentiert hier in der übergeordneten Klasse von PaintWorklet, bei [`Worklet.addModule()`](/de/docs/Web/API/Worklet/addModule)).

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

Der erste Schritt bei der Verwendung eines Paint-Worklets ist die Definition des Paint-Worklets mit der `registerPaint()`-Funktion, wie oben gezeigt. Um es zu verwenden, registrieren Sie es mit der Methode `CSS.paintWorklet.addModule()`:

```html
<script>
  CSS.paintWorklet.addModule("checkboardWorklet.js");
</script>
```

Sie können dann die `{{cssxref('image/paint', 'paint()')}}` CSS-Funktion in Ihrem CSS überall dort verwenden, wo ein {{cssxref('&lt;image&gt;')}}-Wert gültig ist.

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
- [Houdini-APIs](/de/docs/Web/API/Houdini_APIs)

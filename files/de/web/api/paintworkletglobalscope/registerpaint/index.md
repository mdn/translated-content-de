---
title: "PaintWorkletGlobalScope: Methode registerPaint()"
short-title: registerPaint()
slug: Web/API/PaintWorkletGlobalScope/registerPaint
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{APIRef("CSS Painting API")}}{{SeeCompatTable}}

Die **`registerPaint()`** Methode der
{{domxref("PaintWorkletGlobalScope")}} Schnittstelle registriert eine Klasse, um programmgesteuert ein Bild zu erzeugen, wo eine CSS-Eigenschaft eine Datei erwartet.

## Syntax

```js-nolint
registerPaint(name, classRef)
```

### Parameter

- `name`
  - : Der Name der Worklet-Klasse, die registriert werden soll.
- `classRef`
  - : Eine Referenz auf die Klasse, die das Worklet implementiert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eines der Argumente ungültig oder fehlend ist.
- `InvalidModificationError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn bereits ein Worklet mit dem angegebenen Namen existiert.

## Beispiele

Das folgende Beispiel zeigt, wie ein Beispiel-Worklet-Modul registriert wird. Dies sollte in einer separaten
JS-Datei erfolgen. Beachten Sie, dass `registerPaint()` ohne einen Bezug zu
`PaintWorkletGlobalScope` aufgerufen wird. Die Datei selbst wird über
`CSS.paintWorklet.addModule()` geladen (dokumentiert hier auf der übergeordneten Klasse
von PaintWorklet, unter {{domxref('Worklet.addModule()')}}.

```js
/* checkboardWorklet.js */

class CheckerboardPainter {
  paint(ctx, geom, properties) {
    // Verwenden Sie `ctx` als wäre es ein normales Canvas
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

// Registrieren Sie unsere Klasse unter einem bestimmten Namen
registerPaint("checkerboard", CheckerboardPainter);
```

Der erste Schritt bei der Verwendung eines Paint-Worklets besteht darin, das Paint-Worklet mit der
`registerPaint()` Funktion zu definieren, wie oben gezeigt. Um es zu verwenden, registrieren Sie es mit der
`CSS.paintWorklet.addModule()` Methode:

```html
<script>
  CSS.paintWorklet.addModule("checkboardWorklet.js");
</script>
```

Sie können dann die `{{cssxref('image/paint', 'paint()')}}` CSS-Funktion in Ihrem
CSS verwenden, wo immer ein {{cssxref('&lt;image&gt;')}} Wert gültig ist.

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

---
title: PaintWorkletGlobalScope
slug: Web/API/PaintWorkletGlobalScope
l10n:
  sourceCommit: bad620560c435cae3d3436b9b01ff654680af9a3
---

{{APIRef("CSS Painting API")}}{{SeeCompatTable}}

Das **`PaintWorkletGlobalScope`**-Interface der [CSS Painting API](/de/docs/Web/API/CSS_Painting_API) repräsentiert das globale Objekt, das innerhalb eines Paint-`Worklet` verfügbar ist.

## Datenschutzbedenken

Um zu vermeiden, dass besuchte Links offengelegt werden, ist diese Funktion derzeit in Chrome-basierten Browsern für {{HTMLElement("a")}}-Elemente mit einem `href`-Attribut sowie für deren Kind-Elemente deaktiviert. Weitere Details finden Sie unter:

- Dem [Datenschutzüberlegungen-Abschnitt](https://drafts.css-houdini.org/css-paint-api/#privacy-considerations) der CSS Painting API
- Dem CSS Painting API Spezifikationsproblem ["CSS Paint API leaks browsing history"](https://github.com/w3c/css-houdini-drafts/issues/791)

## Instanzeigenschaften

_Dieses Interface erbt Eigenschaften von [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope)._

- [`PaintWorkletGlobalScope.devicePixelRatio`](/de/docs/Web/API/PaintWorkletGlobalScope/devicePixelRatio) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das Verhältnis der physischen Pixel zu logischen Pixeln des aktuellen Geräts zurück.

## Instanzmethoden

_Dieses Interface erbt Methoden von [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope)._

- [`PaintWorkletGlobalScope.registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint) {{Experimental_Inline}}
  - : Registriert eine Klasse, um programmgesteuert ein Bild zu erzeugen, wo eine CSS-Eigenschaft eine Datei erwartet.

## Beispiele

Die folgenden drei Beispiele zeigen zusammen das Erstellen, Laden und Verwenden eines Paint-`Worklet`.

### Erstellen eines Paint-Worklets

Das folgende Beispiel zeigt ein Worklet-Modul. Dies sollte in einer separaten js-Datei sein. Beachten Sie, dass `registerPaint()` ohne Referenz auf ein Paint-`Worklet` aufgerufen wird.

```js
class CheckerboardPainter {
  paint(ctx, geom, properties) {
    // The global object here is a PaintWorkletGlobalScope
    // Methods and properties can be accessed directly
    // as global features or prefixed using self
    const dpr = self.devicePixelRatio;

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

### Laden eines Paint-Worklets

Das folgende Beispiel demonstriert das Laden des oben angegebenen Worklets aus seiner js-Datei und tut dies durch Feature-Erkennung.

```js
if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule("checkerboard.js");
}
```

### Verwendung eines Paint-Worklets

Dieses Beispiel zeigt, wie ein Paint-`Worklet` in einem Stylesheet verwendet wird, einschließlich der einfachsten Methode, um eine Fallback-Lösung bereitzustellen, falls `CSS.paintWorklet` nicht unterstützt wird.

```html
<style>
  textarea {
    background-image: url(checkerboard);
    background-image: paint(checkerboard);
  }
</style>
<textarea></textarea>
```

Sie können auch die {{cssxref('@supports')}}-Regel verwenden.

```css
@supports (background: paint(id)) {
  background-image: paint(checkerboard);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)

---
title: PaintWorkletGlobalScope
slug: Web/API/PaintWorkletGlobalScope
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("CSS Painting API")}}{{SeeCompatTable}}

Das **`PaintWorkletGlobalScope`** Interface der [CSS Painting API](/de/docs/Web/API/CSS_Painting_API) repräsentiert das globale Objekt, das innerhalb eines Paint [`Worklet`](/de/docs/Web/API/Worklet) verfügbar ist.

## Datenschutzbedenken

Um das Ausspähen besuchter Links zu verhindern, ist diese Funktion in Chrome-basierten Browsern derzeit für {{HTMLElement("a")}} Elemente mit einem `href` Attribut und für Kinder solcher Elemente deaktiviert. Für Details siehe die folgenden:

- Der Abschnitt zu Datenschutzüberlegungen der CSS Painting API [Privacy Considerations section](https://drafts.css-houdini.org/css-paint-api/#privacy-considerations)
- Das CSS Painting API Spezifikationsproblem ["CSS Paint API leaks browsing history"](https://github.com/w3c/css-houdini-drafts/issues/791)

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften von [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope)._

- [`PaintWorkletGlobalScope.devicePixelRatio`](/de/docs/Web/API/PaintWorkletGlobalScope/devicePixelRatio) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das Verhältnis der physischen Pixel zu den logischen Pixeln des aktuellen Geräts zurück.

## Instanz-Methoden

_Dieses Interface erbt Methoden von [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope)._

- [`PaintWorkletGlobalScope.registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint) {{Experimental_Inline}}
  - : Registriert eine Klasse, um programmgesteuert ein Bild zu erzeugen, wo eine CSS-Eigenschaft eine Datei erwartet.

## Beispiele

Die folgenden drei Beispiele zeigen das Erstellen, Laden und Verwenden eines Paint `Worklet`.

### Erstellen eines Paint Worklet

Das Folgende zeigt ein Beispiel eines Worklet-Moduls. Dies sollte in einer separaten js-Datei sein. Beachten Sie, dass `registerPaint()` ohne Referenz auf ein Paint `Worklet` aufgerufen wird.

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

### Laden eines Paint Worklet

Das folgende Beispiel zeigt das Laden des oben genannten Worklet aus seiner js-Datei und verwendet dazu die Merkmals-Erkennung.

```js
if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule("checkerboard.js");
}
```

### Verwenden eines Paint Worklet

Dieses Beispiel zeigt, wie man ein Paint `Worklet` in einem Stylesheet verwendet, einschließlich der einfachsten Möglichkeit, eine Alternative anzubieten, falls `CSS.paintWorklet` nicht unterstützt wird.

```css
textarea {
  background-image: url(checkerboard);
  background-image: paint(checkerboard);
}
```

Sie können auch die {{cssxref('@supports')}} Regel verwenden.

```css
@supports (background: paint(id)) {
  textarea {
    background-image: paint(checkerboard);
  }
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

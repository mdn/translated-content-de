---
title: PaintWorkletGlobalScope
slug: Web/API/PaintWorkletGlobalScope
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{APIRef("CSS Painting API")}}{{SeeCompatTable}}

Die **`PaintWorkletGlobalScope`** Schnittstelle der [CSS Painting API](/de/docs/Web/API/CSS_Painting_API) repräsentiert das globale Objekt, das innerhalb eines Paint [`Worklet`](/de/docs/Web/API/Worklet) verfügbar ist.

## Datenschutzbedenken

Um das Ausspähen besuchter Links zu vermeiden, ist diese Funktion derzeit in Browsern auf Chrome-Basis für {{HTMLElement("a")}}-Elemente mit einem `href`-Attribut sowie für deren Kinder deaktiviert. Einzelheiten finden Sie in Folgendem:

- Der Abschnitt [Überlegungen zum Datenschutz](https://drafts.css-houdini.org/css-paint-api/#privacy-considerations) der CSS Painting API
- Das CSS Painting API Spezifikations-Problem ["CSS Paint API leaks browsing history"](https://github.com/w3c/css-houdini-drafts/issues/791)

## Instanzeigenschaften

_Diese Schnittstelle erbt Eigenschaften von [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope)._

- [`PaintWorkletGlobalScope.devicePixelRatio`](/de/docs/Web/API/PaintWorkletGlobalScope/devicePixelRatio) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das Verhältnis der physischen Pixel zu den logischen Pixeln des aktuellen Geräts zurück.

## Instanzmethoden

_Diese Schnittstelle erbt Methoden von [`WorkletGlobalScope`](/de/docs/Web/API/WorkletGlobalScope)._

- [`PaintWorkletGlobalScope.registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint) {{Experimental_Inline}}
  - : Registriert eine Klasse zur programmatischen Generierung eines Bildes, wo eine CSS-Eigenschaft eine Datei erwartet.

## Beispiele

Die folgenden drei Beispiele zeigen zusammen das Erstellen, Laden und Verwenden eines Paint `Worklet`.

### Erstellen eines Paint-Worklet

Das folgende Beispiel zeigt ein Worklet-Modul. Dies sollte in einer separaten js-Datei stehen. Beachten Sie, dass `registerPaint()` ohne Referenz auf ein Paint `Worklet` aufgerufen wird.

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

### Laden eines Paint-Worklet

Das folgende Beispiel zeigt, wie das obige Worklet aus seiner js-Datei geladen wird und dies durch Feature-Erkennung tut.

```js
if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule("checkerboard.js");
}
```

### Verwenden eines Paint-Worklet

Dieses Beispiel zeigt, wie ein Paint `Worklet` in einem Stylesheet verwendet wird, einschließlich der einfachsten Möglichkeit, eine Fallback-Lösung bereitzustellen, wenn `CSS.paintWorklet` nicht unterstützt wird.

```css
textarea {
  background-image: url("checkerboard.png"); /* Fallback */
  background-image: paint(checkerboard);
}
```

Sie können auch die {{cssxref('@supports')}} at-rule verwenden.

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

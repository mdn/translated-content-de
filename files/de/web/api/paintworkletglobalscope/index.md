---
title: PaintWorkletGlobalScope
slug: Web/API/PaintWorkletGlobalScope
l10n:
  sourceCommit: a1e28391445bdbae28d62b0a7490d18f6c893345
---

{{APIRef("CSS Painting API")}}{{SeeCompatTable}}

Das **`PaintWorkletGlobalScope`**-Interface der [CSS Painting API](/de/docs/Web/API/CSS_Painting_API) repräsentiert das globale Objekt, das innerhalb eines Paint-{{domxref("Worklet")}} verfügbar ist.

## Datenschutzbedenken

Um das Ausspähen besuchter Links zu vermeiden, ist dieses Feature in Chrome-basierten Browsern derzeit für {{HTMLElement("a")}}-Elemente mit einem [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut und für deren Kinder deaktiviert. Einzelheiten finden Sie in den folgenden Quellen:

- Der Abschnitt [Datenschutzüberlegungen der CSS Painting API](https://drafts.css-houdini.org/css-paint-api/#privacy-considerations)
- Das Problem im CSS Painting API-Spezifikations-Repo ["CSS Paint API leaks browsing history"](https://github.com/w3c/css-houdini-drafts/issues/791)

## Instanzeigenschaften

_Dieses Interface erbt Eigenschaften von {{domxref('WorkletGlobalScope')}}._

- {{domxref('PaintWorkletGlobalScope.devicePixelRatio')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das Verhältnis der physischen zu logischen Pixeln des aktuellen Geräts zurück.

## Instanzmethoden

_Dieses Interface erbt Methoden von {{domxref('WorkletGlobalScope')}}._

- {{domxref('PaintWorkletGlobalScope.registerPaint()')}} {{Experimental_Inline}}
  - : Registriert eine Klasse, um ein Bild programmatisch zu erzeugen, wo eine CSS-Eigenschaft eine Datei erwartet.

## Beispiele

Die folgenden drei Beispiele zeigen zusammen das Erstellen, Laden und Verwenden eines Paint-`Worklet`.

### Erstellen eines Paint-Worklets

Das folgende Beispiel zeigt ein Worklet-Modul. Dies sollte in einer separaten JS-Datei sein. Beachten Sie, dass `registerPaint()` ohne Referenz auf ein Paint-`Worklet` aufgerufen wird.

```js
class CheckerboardPainter {
  paint(ctx, geom, properties) {
    // Das globale Objekt hier ist ein PaintWorkletGlobalScope
    // Methoden und Eigenschaften können direkt zugegriffen werden
    // als globale Merkmale oder mit Präfix self
    const dpr = self.devicePixelRatio;

    // Verwenden Sie `ctx`, als ob es eine normale Leinwand wäre
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

// Registrieren unserer Klasse unter einem bestimmten Namen
registerPaint("checkerboard", CheckerboardPainter);
```

### Laden eines Paint-Worklets

Das folgende Beispiel zeigt das Laden des obigen Worklets aus seiner JS-Datei und erfolgt durch Feature-Erkennung.

```js
if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule("checkerboard.js");
}
```

### Verwenden eines Paint-Worklets

Dieses Beispiel zeigt, wie man ein Paint-`Worklet` in einem Stylesheet verwendet, einschließlich der einfachsten Möglichkeit, ein Fallback bereitzustellen, falls `CSS.paintWorklet` nicht unterstützt wird.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)

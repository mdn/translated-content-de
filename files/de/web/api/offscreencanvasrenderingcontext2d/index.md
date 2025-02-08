---
title: OffscreenCanvasRenderingContext2D
slug: Web/API/OffscreenCanvasRenderingContext2D
l10n:
  sourceCommit: 01e8b5077df6d79e52f2521dfbe734e0923d1fc4
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`OffscreenCanvasRenderingContext2D`**-Schnittstelle ist ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Rendering-Kontext zum Zeichnen auf die Bitmap eines `OffscreenCanvas`-Objekts.
Sie ähnelt dem `CanvasRenderingContext2D`-Objekt mit den folgenden Unterschieden:

- es gibt keine Unterstützung für Benutzeroberflächenfunktionen (`drawFocusIfNeeded`)
- das `canvas`-Attribut verweist auf ein `OffscreenCanvas`-Objekt anstelle eines {{HtmlElement("canvas")}}-Elements
- die Bitmap des Platzhalter-{{HtmlElement("canvas")}}-Elements, das zum `OffscreenCanvas`-Objekt gehört, wird während des Rendering-Updates des `Window` oder `Worker`, das den `OffscreenCanvas` besitzt, aktualisiert

## Beispiel

Der folgende Codeausschnitt erstellt ein [`Worker`](/de/docs/Web/API/Worker)-Objekt unter Verwendung des [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktors.
Die Methode `transferControlToOffscreen()` wird verwendet, um ein `OffscreenCanvas`-Objekt aus dem {{HtmlElement("canvas")}}-Element zu erhalten, sodass es an den Worker übertragen werden kann:

```js
const canvas = document.getElementById("canvas");
const offscreen = canvas.transferControlToOffscreen();
const worker = new Worker("worker.js");
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

Im Worker-Thread können wir die `OffscreenCanvasRenderingContext2D` verwenden, um auf die Bitmap des `OffscreenCanvas`-Objekts zu zeichnen:

```js
onmessage = (event) => {
  const canvas = event.data.canvas;
  const offCtx = canvas.getContext("2d");
  // draw to the offscreen canvas context
  offCtx.fillStyle = "red";
  offCtx.fillRect(0, 0, 100, 100);
};
```

Ein vollständiges Beispiel finden Sie in unserem [OffscreenCanvas Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker) ([OffscreenCanvas Worker ausführen](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/)).

## Zusätzliche Methoden

Die folgende Methode ist neu in der Schnittstelle `OffscreenCanvasRenderingContext2D` und existiert nicht in der Schnittstelle `CanvasRenderingContext2D`:

- [`commit()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D/commit) {{deprecated_inline}} {{non-standard_inline}}
  - : Überträgt das gerenderte Bild auf das Platzhalter-{{HtmlElement("canvas")}}-Element des `OffscreenCanvas`-Objekts.

## Nicht unterstützte Funktionen

Die folgende Benutzeroberflächenmethode wird von der Schnittstelle `OffscreenCanvasRenderingContext2D` **nicht unterstützt**:

- [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded)
  - : Wenn ein bestimmtes Element fokussiert ist, zeichnet diese Methode einen Fokusrahmen um den aktuellen Pfad.

## Geerbte Eigenschaften und Methoden

_Die folgenden Eigenschaften und Methoden werden von [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) geerbt. Sie haben die gleiche Verwendung wie in `CanvasRenderingContext2D`._

### Kontext

- [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost)
  - : Gibt `true` zurück, wenn der Rendering-Kontext verloren gegangen ist.

### Rechtecke zeichnen

- [`CanvasRenderingContext2D.clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)
  - : Setzt alle Pixel im durch den Ausgangspunkt _(x, y)_ und die Größe _(width, height)_ definierten Rechteck auf transparentes Schwarz und löscht dabei alle zuvor gezeichneten Inhalte.
- [`CanvasRenderingContext2D.fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
  - : Zeichnet ein gefülltes Rechteck an der Position _(x, y)_ mit einer durch _width_ und _height_ bestimmten Größe.
- [`CanvasRenderingContext2D.strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
  - : Zeichnet ein Rechteck, das einen Ausgangspunkt bei _(x, y)_ hat und eine Breite _w_ sowie eine Höhe _h_ aufweist, auf den Canvas unter Verwendung des aktuellen Strichstils.

### Text zeichnen

Die folgenden Methoden und Eigenschaften steuern das Zeichnen von Text. Siehe auch das [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt für Texteigenschaften.

- [`CanvasRenderingContext2D.fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText)
  - : Zeichnet (füllt) einen angegebenen Text an der angegebenen Position (x, y).
- [`CanvasRenderingContext2D.strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText)
  - : Zeichnet (strichelt) einen angegebenen Text an der angegebenen Position (x, y).
- [`CanvasRenderingContext2D.measureText()`](/de/docs/Web/API/CanvasRenderingContext2D/measureText)
  - : Gibt ein [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt zurück.
- [`CanvasRenderingContext2D.textRendering`](/de/docs/Web/API/CanvasRenderingContext2D/textRendering)
  - : Textrendering. Mögliche Werte: `auto` (Standard), `optimizeSpeed`, `optimizeLegibility`.

[...]

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
- {{HTMLElement("canvas")}}

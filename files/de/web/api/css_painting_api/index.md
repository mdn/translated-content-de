---
title: CSS Painting API
slug: Web/API/CSS_Painting_API
l10n:
  sourceCommit: ca6d4f6114d278926e183225a90fd2209802cfe9
---

{{DefaultAPISidebar("CSS Painting API")}}{{SeeCompatTable}}

Die CSS Painting API — Teil des API-Überangebots [CSS Houdini](/de/docs/Web/API/Houdini_APIs) — ermöglicht es Entwicklern, JavaScript-Funktionen zu schreiben, die direkt in den Hintergrund, die Grenze oder den Inhalt eines Elements zeichnen können.

## Konzepte und Verwendung

Im Wesentlichen enthält die CSS Painting API Funktionen, die es Entwicklern ermöglichen, benutzerdefinierte Werte für {{cssxref('image/paint', 'paint()')}}, eine CSS-Funktion [`<image>`](/de/docs/Web/CSS/image), zu erstellen. Diese Werte können dann auf Eigenschaften wie {{cssxref("background-image")}} angewendet werden, um komplexe benutzerdefinierte Hintergründe auf einem Element zu setzen.

Zum Beispiel:

```css
aside {
  background-image: paint(myPaintedImage);
}
```

Die API definiert einen [`worklet`](/de/docs/Web/API/Worklet), der verwendet werden kann, um programmgesteuert ein Bild zu generieren, das auf berechnete Stiländerungen reagiert. Um mehr darüber zu erfahren, wie dies verwendet wird, konsultieren Sie [Verwendung der CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide).

## Schnittstellen

- [`PaintWorkletGlobalScope`](/de/docs/Web/API/PaintWorkletGlobalScope)
  - : Der globale Ausführungskontext des Paint Worklets.
- [`PaintRenderingContext2D`](/de/docs/Web/API/PaintRenderingContext2D)
  - : Implementiert einen Teil der API [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D). Sie hat ein Ausgabebild, das die Größe des Objekts hat, zu dem sie rendert.
- [`PaintSize`](/de/docs/Web/API/PaintSize)
  - : Gibt die schreibgeschützten Werte der Breite und Höhe des Ausgabebildes zurück.

## Beispiele

Das folgende Beispiel erstellt eine Liste von Elementen mit einem Hintergrundbild, das zwischen drei verschiedenen Farben und drei Breiten wechselt.
In [einem unterstützenden Browser](#browser-kompatibilität) sehen Sie etwas wie das untenstehende Bild.

![Die Breite und Farbe des Hintergrundbildes ändern sich basierend auf den benutzerdefinierten Eigenschaften](guide/boxbg.png)

Um dies zu erreichen, definieren wir zwei benutzerdefinierte CSS-Eigenschaften, `--boxColor` und `--widthSubtractor`.

### Das Paint Worklet

Das Worklet ist eine externe JavaScript-Datei (in diesem Fall haben wir es `boxbg.js` genannt), das ein Paint [`worklet`](/de/docs/Web/API/Worklet) definiert.
Mit dem Worklet können wir auf CSS-Eigenschaften (und benutzerdefinierte Eigenschaften) von Elementen zugreifen:

```js
registerPaint(
  "boxbg",
  class {
    static get contextOptions() {
      return { alpha: true };
    }
    /*
      Retrieve any custom properties (or regular properties,
      such as 'height') defined for the element, and return
      them as an array.
    */
    static get inputProperties() {
      return ["--boxColor", "--widthSubtractor"];
    }

    paint(ctx, size, props) {
      /*
        ctx -> drawing context
        size -> paintSize: width and height
        props -> properties: get() method
      */
      ctx.fillStyle = props.get("--boxColor");
      ctx.fillRect(
        0,
        size.height / 3,
        size.width * 0.4 - props.get("--widthSubtractor"),
        size.height * 0.6,
      );
    }
  },
);
```

Wir haben die Methode `inputProperties()` in der Klasse `registerPaint()` verwendet, um die Werte von zwei benutzerdefinierten Eigenschaften zu erhalten, die auf einem Element festgelegt wurden, das `boxbg` angewendet hat, und diese dann in unserer Funktion `paint()` verwendet. Die Methode `inputProperties()` kann alle Eigenschaften zurückgeben, die das Element beeinflussen, nicht nur benutzerdefinierte Eigenschaften.

### Verwendung des Paint Worklets

#### HTML

```html live-sample___example-boxbg
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
  <li>item 4</li>
  <li>item 5</li>
  <li>item 6</li>
  <li>item 7</li>
  <li>item 8</li>
  <li>item 9</li>
  <li>item 10</li>
  <li>item N</li>
</ul>
```

#### CSS

In unserem CSS definieren wir die benutzerdefinierten Eigenschaften `--boxColor` und `--widthSubtractor`.

```css live-sample___example-boxbg
body {
  font: 1.2em / 1.2 sans-serif;
}
li {
  background-image: paint(boxbg);
  --boxColor: hsl(55 90% 60%);
}

li:nth-of-type(3n) {
  --boxColor: hsl(155 90% 60%);
  --widthSubtractor: 20;
}

li:nth-of-type(3n + 1) {
  --boxColor: hsl(255 90% 60%);
  --widthSubtractor: 40;
}
```

#### JavaScript

Das Setup und die Logik des Paint Worklets befinden sich im externen Skript.
Um das Worklet zu registrieren, müssen wir [`addModule()`](/de/docs/Web/API/Worklet/addModule) aus unserem Hauptskript aufrufen:

```js live-sample___example-boxbg
CSS.paintWorklet.addModule(
  "https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/boxbg.js",
);
```

In diesem Beispiel wird das Worklet unter `https://mdn.github.io/` gehostet, aber Ihr Worklet kann eine relative Ressource wie folgt sein:

```js
CSS.paintWorklet.addModule("boxbg.js");
```

#### Ergebnis

Auch wenn Sie nicht mit dem Skript des Worklets spielen können, können Sie die Werte der benutzerdefinierten Eigenschaften in den DevTools ändern, um die Farben und die Breite des Hintergrundbildes zu ändern.

{{EmbedLiveSample("example-boxbg", "", "300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)

---
title: CSS Painting API
slug: Web/API/CSS_Painting_API
l10n:
  sourceCommit: bad620560c435cae3d3436b9b01ff654680af9a3
---

{{DefaultAPISidebar("CSS Painting API")}}{{SeeCompatTable}}

Die CSS Painting API — Teil des [CSS Houdini](/de/docs/Web/API/Houdini_APIs) Gesamtpakets von APIs — ermöglicht es Entwicklern, JavaScript-Funktionen zu schreiben, die direkt in den Hintergrund, Rahmen oder Inhalt eines Elements zeichnen können.

## Konzepte und Nutzung

Im Wesentlichen enthält die CSS Painting API Funktionen, die es Entwicklern erlauben, benutzerdefinierte Werte für {{cssxref('image/paint', 'paint()')}}, eine CSS {{cssxref('&lt;image&gt;')}} Funktion, zu erstellen. Diese Werte können Sie dann auf Eigenschaften wie {{cssxref('background-image')}} anwenden, um komplexe benutzerdefinierte Hintergründe auf ein Element anzuwenden.

Zum Beispiel:

```css
aside {
  background-image: paint(myPaintedImage);
}
```

Die API definiert ein [`worklet`](/de/docs/Web/API/Worklet), das verwendet werden kann, um programmgesteuert ein Bild zu erzeugen, das auf Änderungen des berechneten Stils reagiert. Um mehr darüber zu erfahren, wie dies verwendet wird, konsultieren Sie [Using the CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide).

## Schnittstellen

- [`PaintWorkletGlobalScope`](/de/docs/Web/API/PaintWorkletGlobalScope)
  - : Der globale Ausführungskontext des Paint Worklet.
- [`PaintRenderingContext2D`](/de/docs/Web/API/PaintRenderingContext2D)
  - : Der Rendering-Kontext für den Rendering-Kontext der CSS Painting API zum Zeichnen auf das Bitmap.
- [`PaintSize`](/de/docs/Web/API/PaintSize)
  - : Repräsentiert die Größe des Ausgabebitmaps, die der Autor zeichnen soll.

## Beispiele

Das folgende Beispiel erstellt eine Liste von Elementen mit einem Hintergrundbild, das zwischen drei verschiedenen Farben und drei Breiten rotiert. In [einem unterstützenden Browser](#browser-kompatibilität) werden Sie etwas wie das untenstehende Bild sehen.

![Die Breite und Farbe des Hintergrundbildes ändern sich basierend auf den benutzerdefinierten Eigenschaften](guide/boxbg.png)

Um dies zu erreichen, definieren wir zwei benutzerdefinierte CSS-Eigenschaften, `--boxColor` und `--widthSubtractor`.

### Das Paint Worklet

Das Worklet ist eine externe JavaScript-Datei (in diesem Fall haben wir es `boxbg.js` genannt), die ein Paint [`worklet`](/de/docs/Web/API/Worklet) definiert. Mit dem Worklet können wir auf CSS-Eigenschaften (und benutzerdefinierte Eigenschaften) von Elementen zugreifen:

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

Wir haben die Methode `inputProperties()` in der Klasse `registerPaint()` verwendet, um die Werte von zwei benutzerdefinierten Eigenschaften zu erhalten, die auf einem Element gesetzt sind, das `boxbg` angewendet hat, und diese dann innerhalb unserer `paint()`-Funktion verwendet. Die `inputProperties()`-Methode kann alle Eigenschaften zurückgeben, die das Element beeinflussen, nicht nur benutzerdefinierte Eigenschaften.

### Verwendung des Paint Worklet

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

Das Setup und die Logik des Paint Worklet befinden sich im externen Skript. Um das Worklet zu registrieren, müssen wir [`addModule()`](/de/docs/Web/API/Worklet/addModule) aus unserem Hauptskript aufrufen:

```js live-sample___example-boxbg
CSS.paintWorklet.addModule(
  "https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/boxbg.js",
);
```

In diesem Beispiel wird das Worklet bei `https://mdn.github.io/` gehostet, aber Ihr Worklet kann eine relative Ressource wie folgt sein:

```js
CSS.paintWorklet.addModule("boxbg.js");
```

#### Ergebnis

Obwohl Sie nicht mit dem Skript des Worklets spielen können, können Sie die Werte der benutzerdefinierten Eigenschaften in den DevTools ändern, um die Farben und die Breite des Hintergrundbildes zu ändern.

{{EmbedLiveSample("example-boxbg", "", "300px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)

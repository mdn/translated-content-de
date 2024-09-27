---
title: CSS Painting API
slug: Web/API/CSS_Painting_API
l10n:
  sourceCommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

{{DefaultAPISidebar("CSS Painting API")}}{{SeeCompatTable}}

Die CSS Painting API — Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Sammlung — erlaubt es Entwicklern, JavaScript-Funktionen zu schreiben, die direkt in den Hintergrund, Rahmen oder Inhalt eines Elements zeichnen können.

## Konzepte und Verwendung

Die CSS Painting API enthält im Wesentlichen Funktionen, die es Entwicklern ermöglichen, benutzerdefinierte Werte für {{cssxref('image/paint', 'paint()')}}, eine CSS [`<image>`](/de/docs/Web/CSS/image) Funktion, zu erstellen. Diese Werte können dann auf Eigenschaften wie {{cssxref("background-image")}} angewendet werden, um komplexe benutzerdefinierte Hintergründe auf einem Element zu setzen.

Zum Beispiel:

```css
aside {
  background-image: paint(myPaintedImage);
}
```

Die API definiert einen [`worklet`](/de/docs/Web/API/Worklet), der programmgesteuert ein Bild erzeugen kann, das auf Änderungen des berechneten Stils reagiert. Um mehr darüber zu erfahren, wie dies verwendet wird, lesen Sie [Die CSS Painting API verwenden](/de/docs/Web/API/CSS_Painting_API/Guide).

## Schnittstellen

- [`PaintWorkletGlobalScope`](/de/docs/Web/API/PaintWorkletGlobalScope)
  - : Der globale Ausführungskontext des Paint Worklet.
- [`PaintRenderingContext2D`](/de/docs/Web/API/PaintRenderingContext2D)
  - : Implementiert einen Teil der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) API. Es verfügt über ein Ausgabebitmap, das die Größe des Objekts hat, auf das es rendert.
- [`PaintSize`](/de/docs/Web/API/PaintSize)
  - : Gibt die schreibgeschützten Werte der Breite und Höhe des Ausgabebitmaps zurück.

## Beispiele

Das folgende Beispiel erstellt eine Liste von Elementen mit einem Hintergrundbild, das zwischen drei verschiedenen Farben und drei Breiten rotiert. In einem unterstützenden Browser sehen Sie etwas wie das untenstehende Bild.

![Die Breite und die Farbe des Hintergrundbilds ändern sich basierend auf den benutzerdefinierten Eigenschaften](guide/boxbg.png)

Um dies zu erreichen, definieren wir zwei benutzerdefinierte CSS-Eigenschaften, `--boxColor` und `--widthSubtractor`.

### Der Paint Worklet

In unserem Worklet können wir auf diese benutzerdefinierten Eigenschaften verweisen.

```js
registerPaint(
  "boxbg",
  class {
    static get contextOptions() {
      return { alpha: true };
    }

    /*
     use this function to retrieve any custom properties (or regular properties, such as 'height')
     defined for the element, return them in the specified array
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

Wir haben die `inputProperties()`-Methode in der `registerPaint()`-Klasse verwendet, um die Werte von zwei benutzerdefinierten Eigenschaften zu erhalten, die auf einem Element gesetzt sind, auf das `boxbg` angewendet wurde, und dann diese in unserer `paint()`-Funktion verwendet. Die `inputProperties()`-Methode kann alle Eigenschaften zurückgeben, die das Element beeinflussen, nicht nur benutzerdefinierte Eigenschaften.

### Verwendung des Paint Worklet

#### HTML

```html
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
  <li>item 11</li>
  <li>item 12</li>
  <li>item 13</li>
  <li>item 14</li>
  <li>item 15</li>
  <li>item 16</li>
  <li>item 17</li>
  <li>item</li>
</ul>
```

#### CSS

In unserem CSS definieren wir die benutzerdefinierten Eigenschaften `--boxColor` und `--widthSubtractor`.

```css
li {
  background-image: paint(boxbg);
  --boxColor: hsl(55 90% 60% / 100%);
}

li:nth-of-type(3n) {
  --boxColor: hsl(155 90% 60% / 100%);
  --widthSubtractor: 20;
}

li:nth-of-type(3n + 1) {
  --boxColor: hsl(255 90% 60% / 100%);
  --widthSubtractor: 40;
}
```

#### JavaScript

In unserem `<script>` registrieren wir den Worklet:

```js
CSS.paintWorklet.addModule("boxbg.js");
```

#### Ergebnis

Obwohl Sie das Skript des Worklets nicht ändern können, können Sie die Werte der benutzerdefinierten Eigenschaften in den DevTools ändern, um die Farben und die Breite des Hintergrundbildes zu ändern.

{{EmbedGHLiveSample("css-examples/houdini/css_painting_api/example-boxbg.html", '100%', 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Painting API verwenden](/de/docs/Web/API/CSS_Painting_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)

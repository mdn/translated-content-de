---
title: CSS-Mal-API
slug: Web/API/CSS_Painting_API
l10n:
  sourceCommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

{{DefaultAPISidebar("CSS Painting API")}}{{SeeCompatTable}}

Die CSS-Mal-API, Teil des [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Überbaus, ermöglicht es Entwicklern, JavaScript-Funktionen zu schreiben, die direkt in den Hintergrund, den Rand oder den Inhalt eines Elements zeichnen können.

## Konzepte und Verwendung

Im Wesentlichen enthält die CSS-Mal-API Funktionen, die es Entwicklern ermöglichen, benutzerdefinierte Werte für {{cssxref('image/paint', 'paint()')}}, eine CSS [`<image>`](/de/docs/Web/CSS/image) Funktion, zu erstellen. Sie können diese Werte dann auf Eigenschaften wie {{cssxref("background-image")}} anwenden, um komplexe benutzerdefinierte Hintergründe auf einem Element festzulegen.

Zum Beispiel:

```css
aside {
  background-image: paint(myPaintedImage);
}
```

Die API definiert einen {{domxref('worklet')}}, der verwendet werden kann, um programmgesteuert ein Bild zu generieren, das auf Änderungen im berechneten Stil reagiert. Weitere Informationen zur Verwendung finden Sie unter [Verwendung der CSS-Mal-API](/de/docs/Web/API/CSS_Painting_API/Guide).

## Schnittstellen

- {{domxref('PaintWorkletGlobalScope')}}
  - : Der globale Ausführungskontext des Mal-Worklets.
- {{domxref('PaintRenderingContext2D')}}
  - : Implementiert einen Teil der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) API. Es hat ein Ausgabebitmap, das die Größe des Objekts hat, auf das es rendert.
- {{domxref('PaintSize')}}
  - : Gibt die schreibgeschützten Werte der Breite und Höhe des Ausgabebitmaps zurück.

## Beispiele

Das folgende Beispiel erstellt eine Liste von Elementen mit einem Hintergrundbild, das zwischen drei verschiedenen Farben und drei Breiten wechselt. In einem unterstützenden Browser sehen Sie ein ähnliches Bild wie unten zu sehen.

![Die Breite und Farbe des Hintergrundbilds ändert sich basierend auf den benutzerdefinierten Eigenschaften](guide/boxbg.png)

Um dies zu erreichen, definieren wir zwei benutzerdefinierte CSS-Eigenschaften, `--boxColor` und `--widthSubtractor`.

### Das Mal-Worklet

In unserem Worklet können wir auf diese benutzerdefinierten Eigenschaften verweisen.

```js
registerPaint(
  "boxbg",
  class {
    static get contextOptions() {
      return { alpha: true };
    }

    /*
     verwenden Sie diese Funktion, um benutzerdefinierte Eigenschaften (oder reguläre Eigenschaften wie 'height')
     des Elements abzurufen, geben Sie sie im angegebenen Array zurück
  */
    static get inputProperties() {
      return ["--boxColor", "--widthSubtractor"];
    }

    paint(ctx, size, props) {
      /*
       ctx -> Zeichenkontext
       size -> paintSize: Breite und Höhe
       props -> Eigenschaften: get() Methode
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

Wir haben die `inputProperties()`-Methode in der `registerPaint()`-Klasse verwendet, um die Werte von zwei benutzerdefinierten Eigenschaften abzurufen, die auf einem Element gesetzt sind, auf das `boxbg` angewendet wurde, und diese dann in unserer `paint()`-Funktion verwendet. Die `inputProperties()`-Methode kann alle das Element beeinflussenden Eigenschaften zurückgeben, nicht nur benutzerdefinierte Eigenschaften.

### Verwendung des Mal-Worklets

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

In unserem `<script>` registrieren wir das Worklet:

```js
CSS.paintWorklet.addModule("boxbg.js");
```

#### Ergebnis

Während Sie das Skript des Worklets nicht direkt ändern können, können Sie die Werte der benutzerdefinierten Eigenschaften in den DevTools verändern, um die Farben und die Breite des Hintergrundbildes zu ändern.

{{EmbedGHLiveSample("css-examples/houdini/css_painting_api/example-boxbg.html", '100%', 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der CSS-Mal-API](/de/docs/Web/API/CSS_Painting_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini-APIs](/de/docs/Web/API/Houdini_APIs)

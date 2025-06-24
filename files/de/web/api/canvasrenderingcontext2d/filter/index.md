---
title: "CanvasRenderingContext2D: filter Eigenschaft"
short-title: filter
slug: Web/API/CanvasRenderingContext2D/filter
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}

Die **`CanvasRenderingContext2D.filter`** Eigenschaft der Canvas-2D-API bietet Filtereffekte wie Unschärfe und Graustufen. Sie ist der CSS-Eigenschaft {{cssxref("filter")}} ähnlich und akzeptiert dieselben Werte.

## Wert

Die `filter`-Eigenschaft akzeptiert den Wert `"none"` oder eine oder mehrere der folgenden Filterfunktionen in einem String.

- [`url()`](/de/docs/Web/CSS/url_function)
  - : Eine CSS {{cssxref("url_function", "url()")}}. Akzeptiert jede URL, die auf ein SVG-Filterelement verweist.
    Dies kann die ID eines Elements, ein Pfad zu einer externen XML-Datei oder sogar ein datenverschlüsselter SVG-Wert sein.
- [`blur()`](/de/docs/Web/CSS/filter-function/blur)
  - : Ein CSS {{cssxref("&lt;length&gt;")}}. Wendet eine Gaußsche Unschärfe auf die Zeichnung an. Es definiert den Wert der Standardabweichung für die Gaußsche Funktion, d.h. wie viele Pixel auf dem Bildschirm ineinander verschwimmen; daher erzeugt ein größerer Wert mehr Unschärfe. Ein Wert von `0` lässt das Eingabebild unverändert.
- [`brightness()`](/de/docs/Web/CSS/filter-function/brightness)
  - : Ein CSS {{cssxref("&lt;percentage&gt;")}}. Wendet einen linearen Multiplikator auf die Zeichnung an, wodurch sie heller oder dunkler erscheint. Ein Wert unter `100%` verdunkelt das Bild, während ein Wert über `100%` es aufhellt. Ein Wert von `0%` erzeugt ein vollständig schwarzes Bild, während ein Wert von `100%` das Eingabebild unverändert lässt.
- [`contrast()`](/de/docs/Web/CSS/filter-function/contrast)
  - : Ein CSS {{cssxref("&lt;percentage&gt;")}}. Passt den Kontrast der Zeichnung an. Ein Wert von `0%` erzeugt eine vollständig schwarze Zeichnung. Ein Wert von `100%` lässt die Zeichnung unverändert.
- [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow)

  - : Wendet einen Schatteneffekt auf die Zeichnung an. Ein Schlagschatten ist im Wesentlichen eine verschwommene, versetzte Version der Alphamaske der Zeichnung, die in einer bestimmten Farbe unter der Zeichnung zusammengesetzt wird. Diese Funktion akzeptiert bis zu fünf Argumente:
    - `<offset-x>`
      - : Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten. Gibt den horizontalen Abstand des Schattens an.
    - `<offset-y>`
      - : Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten. Gibt den vertikalen Abstand des Schattens an.
    - `<blur-radius>`
      - : Je größer dieser Wert, desto größer die Unschärfe, sodass der Schatten größer und heller wird. Negative Werte sind nicht erlaubt.
    - `<color>`
      - : Siehe {{cssxref("&lt;color&gt;")}}-Werte für mögliche Schlüsselwörter und Notationen.

- [`grayscale()`](/de/docs/Web/CSS/filter-function/grayscale)
  - : Ein CSS {{cssxref("&lt;percentage&gt;")}}. Konvertiert die Zeichnung in Graustufen. Ein Wert von `100%` ist vollständig in Graustufen. Ein Wert von `0%` lässt die Zeichnung unverändert.
- [`hue-rotate()`](/de/docs/Web/CSS/filter-function/hue-rotate)
  - : Ein CSS {{cssxref("&lt;angle&gt;")}}. Wendet eine Farbtonrotation auf die Zeichnung an. Ein Wert von `0deg` lässt das Eingabebild unverändert.
- [`invert()`](/de/docs/Web/CSS/filter-function/invert)
  - : Ein CSS {{cssxref("&lt;percentage&gt;")}}. Kehrt die Zeichnung um. Ein Wert von `100%` bedeutet vollständige Umkehrung. Ein Wert von `0%` lässt die Zeichnung unverändert.
- [`opacity()`](/de/docs/Web/CSS/filter-function/opacity)
  - : Ein CSS {{cssxref("&lt;percentage&gt;")}}. Wendet Transparenz auf die Zeichnung an. Ein Wert von `0%` bedeutet vollständig transparent. Ein Wert von `100%` lässt die Zeichnung unverändert.
- [`saturate()`](/de/docs/Web/CSS/filter-function/saturate)
  - : Ein CSS {{cssxref("&lt;percentage&gt;")}}. Sättigt die Zeichnung. Ein Wert von `0%` bedeutet vollständig ungesättigt. Ein Wert von `100%` lässt die Zeichnung unverändert.
- [`sepia()`](/de/docs/Web/CSS/filter-function/sepia)
  - : Ein CSS {{cssxref("&lt;percentage&gt;")}}. Konvertiert die Zeichnung in Sepia. Ein Wert von `100%` bedeutet vollständig Sepia. Ein Wert von `0%` lässt die Zeichnung unverändert.
- `none`
  - : Es wird kein Filter angewendet. Anfangswert.

## Beispiele

Um diese Beispiele anzuzeigen, stellen Sie sicher, dass Sie einen Browser verwenden, der diese Funktion unterstützt; siehe die Kompatibilitätstabelle unten.

### Anwenden einer Unschärfe

Dieses Beispiel verwischt einen Textabschnitt mit der `filter`-Eigenschaft.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.filter = "blur(4px)";
ctx.font = "48px serif";
ctx.fillText("Hello world", 50, 100);
```

#### Ergebnis

{{ EmbedLiveSample('Applying_a_blur', 700, 180) }}

### Anwenden mehrerer Filter

Sie können so viele Filter kombinieren, wie Sie möchten. Dieses Beispiel wendet die Filter
`contrast`, `sepia` und `drop-shadow` auf ein
Foto eines Nashorns an.

#### HTML

```html
<canvas id="canvas" width="400" height="150"></canvas>
<div class="hidden">
  <img
    id="source"
    src="https://mdn.github.io/shared-assets/images/examples/rhino.jpg" />
</div>
```

```css hidden
.hidden {
  display: none;
}
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const image = document.getElementById("source");

image.addEventListener("load", (e) => {
  // Draw unfiltered image
  ctx.drawImage(image, 0, 0, image.width * 0.6, image.height * 0.6);

  // Draw image with filter
  ctx.filter = "contrast(1.4) sepia(1) drop-shadow(-9px 9px 3px #e81)";
  ctx.drawImage(image, 400, 0, -image.width * 0.6, image.height * 0.6);
});
```

#### Ergebnis

{{ EmbedLiveSample('Applying_multiple_filters', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- CSS {{cssxref("filter")}}
- CSS {{cssxref("&lt;filter-function&gt;")}}

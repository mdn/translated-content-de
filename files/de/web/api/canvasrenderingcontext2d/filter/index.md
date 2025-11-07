---
title: "CanvasRenderingContext2D: filter-Eigenschaft"
short-title: filter
slug: Web/API/CanvasRenderingContext2D/filter
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.filter`**-Eigenschaft der Canvas 2D API bietet Filtereffekte wie Weichzeichnen und Graustufen. Sie ähnelt der CSS-{{cssxref("filter")}}-Eigenschaft und akzeptiert dieselben Werte.

## Wert

Die `filter`-Eigenschaft akzeptiert entweder den Wert `"none"` oder einen oder mehrere der folgenden Filterfunktionen in einem String.

- [`url()`](/de/docs/Web/CSS/Reference/Values/url_function)
  - : Eine CSS-{{cssxref("url_function", "url()")}}. Nimmt jede URL, die sich zu einem SVG-Filter-Element auflöst. Dies kann die ID eines Elements, ein Pfad zu einer externen XML-Datei oder sogar ein Daten-enkodierter SVG-Wert sein.
- [`blur()`](/de/docs/Web/CSS/Reference/Values/filter-function/blur)
  - : Eine CSS-{{cssxref("&lt;length&gt;")}}. Wendet einen Gaußschen Weichzeichner auf die Zeichnung an. Sie definiert den Wert der Standardabweichung für die Gauss'sche Funktion, d.h. wie viele Pixel auf dem Bildschirm ineinander übergehen; ein größerer Wert erzeugt also mehr Unschärfe. Ein Wert von `0` lässt den Eingang unverändert.
- [`brightness()`](/de/docs/Web/CSS/Reference/Values/filter-function/brightness)
  - : Eine CSS-{{cssxref("&lt;percentage&gt;")}}. Wendet einen linearen Multiplikator auf die Zeichnung an, wodurch sie heller oder dunkler erscheint. Ein Wert unter `100%` verdunkelt das Bild, während ein Wert über `100%` es aufhellt. Ein Wert von `0%` wird ein vollständig schwarzes Bild erzeugen, während ein Wert von `100%` den Eingang unverändert lässt.
- [`contrast()`](/de/docs/Web/CSS/Reference/Values/filter-function/contrast)
  - : Eine CSS-{{cssxref("&lt;percentage&gt;")}}. Passt den Kontrast der Zeichnung an. Ein Wert von `0%` wird eine vollständig schwarze Zeichnung erzeugen. Ein Wert von `100%` lässt die Zeichnung unverändert.
- [`drop-shadow()`](/de/docs/Web/CSS/Reference/Values/filter-function/drop-shadow)
  - : Wendet einen Schlagschatteneffekt auf die Zeichnung an. Ein Schlagschatten ist im Wesentlichen eine unscharfe, versetzte Version der Alpha-Maske der Zeichnung, die in einer bestimmten Farbe darunter zusammengesetzt wird. Diese Funktion nimmt bis zu fünf Argumente:
    - `<offset-x>`
      - : Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten. Gibt den horizontalen Abstand des Schattens an.
    - `<offset-y>`
      - : Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten. Gibt den vertikalen Abstand des Schattens an.
    - `<blur-radius>`
      - : Je größer dieser Wert, desto größer der Weichzeichner, wodurch der Schatten größer und leichter wird. Negative Werte sind nicht erlaubt.
    - `<color>`
      - : Siehe {{cssxref("&lt;color&gt;")}}-Werte für mögliche Schlüsselwörter und Notationen.

- [`grayscale()`](/de/docs/Web/CSS/Reference/Values/filter-function/grayscale)
  - : Eine CSS-{{cssxref("&lt;percentage&gt;")}}. Konvertiert die Zeichnung in Graustufen. Ein Wert von `100%` ist vollständig in Graustufen. Ein Wert von `0%` lässt die Zeichnung unverändert.
- [`hue-rotate()`](/de/docs/Web/CSS/Reference/Values/filter-function/hue-rotate)
  - : Eine CSS-{{cssxref("&lt;angle&gt;")}}. Wendet eine Farbtonrotation auf die Zeichnung an. Ein Wert von `0deg` lässt den Eingang unverändert.
- [`invert()`](/de/docs/Web/CSS/Reference/Values/filter-function/invert)
  - : Eine CSS-{{cssxref("&lt;percentage&gt;")}}. Kehrt die Zeichnung um. Ein Wert von `100%` bedeutet vollständige Umkehrung. Ein Wert von `0%` lässt die Zeichnung unverändert.
- [`opacity()`](/de/docs/Web/CSS/Reference/Values/filter-function/opacity)
  - : Eine CSS-{{cssxref("&lt;percentage&gt;")}}. Wendet Transparenz auf die Zeichnung an. Ein Wert von `0%` bedeutet vollständig transparent. Ein Wert von `100%` lässt die Zeichnung unverändert.
- [`saturate()`](/de/docs/Web/CSS/Reference/Values/filter-function/saturate)
  - : Eine CSS-{{cssxref("&lt;percentage&gt;")}}. Sättigt die Zeichnung. Ein Wert von `0%` bedeutet vollständig ungesättigt. Ein Wert von `100%` lässt die Zeichnung unverändert.
- [`sepia()`](/de/docs/Web/CSS/Reference/Values/filter-function/sepia)
  - : Eine CSS-{{cssxref("&lt;percentage&gt;")}}. Konvertiert die Zeichnung in Sepia. Ein Wert von `100%` bedeutet vollständig in Sepia. Ein Wert von `0%` lässt die Zeichnung unverändert.
- `none`
  - : Es wird kein Filter angewendet. Anfangswert.

## Beispiele

Um diese Beispiele anzusehen, stellen Sie sicher, dass Sie einen Browser verwenden, der dieses Feature unterstützt; siehe die Kompatibilitätstabelle unten.

### Anwendung einer Unschärfe

Dieses Beispiel verwischt einen Textabschnitt mithilfe der `filter`-Eigenschaft.

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

Sie können beliebig viele Filter kombinieren. Dieses Beispiel wendet die Filter `contrast`, `sepia` und `drop-shadow` auf ein Foto eines Nashorns an.

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
  ctx.filter = "contrast(1.4) sepia(1) drop-shadow(-9px 9px 3px #ee8811)";
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

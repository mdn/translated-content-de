---
title: "CanvasRenderingContext2D: filter-Eigenschaft"
short-title: filter
slug: Web/API/CanvasRenderingContext2D/filter
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.filter`**-Eigenschaft der Canvas 2D API bietet Filtereffekte wie Weichzeichnen und Graustufen. Sie ist der CSS-Eigenschaft {{cssxref("filter")}} ähnlich und akzeptiert die gleichen Werte.

## Wert

Die `filter`-Eigenschaft akzeptiert entweder einen Wert von `"none"` oder eine oder mehrere der folgenden Filterfunktionen in einem String.

- {{cssxref("url_function", "url()")}}
  - : Eine CSS {{cssxref("url_function", "url()")}}. Nimmt eine beliebige URL, die zu einem SVG-Filterelement aufgelöst wird. Dies kann die ID eines Elements, ein Pfad zu einer externen XML-Datei oder sogar ein daten-codierter SVG-Wert sein.
- {{cssxref("filter-function/blur", "blur()")}}
  - : Ein CSS {{cssxref("&lt;length&gt;")}}. Wendet ein Gaußsches Weichzeichnen auf die Zeichnung an. Es definiert den Wert der Standardabweichung der Gaußschen Funktion, d.h. wie viele Pixel auf dem Bildschirm ineinander übergehen; daher schafft ein größerer Wert mehr Unschärfe. Ein Wert von `0` lässt den Eingabewert unverändert.
- {{cssxref("filter-function/brightness", "brightness()")}}
  - : Ein CSS {{cssxref("&lt;percentage&gt;")}}. Wendet einen linearen Multiplikator auf die Zeichnung an, sodass sie heller oder dunkler erscheint. Ein Wert unter `100%` verdunkelt das Bild, während ein Wert über `100%` es aufhellt. Ein Wert von `0%` erzeugt ein Bild, das vollständig schwarz ist, während ein Wert von `100%` den Eingabewert unverändert lässt.
- {{cssxref("filter-function/contrast", "contrast()")}}
  - : Ein CSS {{cssxref("&lt;percentage&gt;")}}. Passt den Kontrast der Zeichnung an. Ein Wert von `0%` erzeugt eine Zeichnung, die vollständig schwarz ist. Ein Wert von `100%` lässt die Zeichnung unverändert.
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - : Wendet einen Schlagschatteneffekt auf die Zeichnung an. Ein Schlagschatten ist im Wesentlichen eine verschwommene, versetzte Version der Alpha-Maske der Zeichnung, die in einer bestimmten Farbe unter der Zeichnung zusammengesetzt wird. Diese Funktion nimmt bis zu fünf Argumente an:
    - `<offset-x>`
      - : Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten. Gibt die horizontale Entfernung des Schattens an.
    - `<offset-y>`
      - : Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten. Gibt die vertikale Entfernung des Schattens an.
    - `<blur-radius>`
      - : Je größer dieser Wert, desto größer die Unschärfe, sodass der Schatten größer und heller wird. Negative Werte sind nicht erlaubt.
    - `<color>`
      - : Siehe {{cssxref("&lt;color&gt;")}} Werte für mögliche Schlüsselwörter und Notationen.

- {{cssxref("filter-function/grayscale", "grayscale()")}}
  - : Ein CSS {{cssxref("&lt;percentage&gt;")}}. Konvertiert die Zeichnung in Graustufen. Ein Wert von `100%` ist vollständig in Graustufen. Ein Wert von `0%` lässt die Zeichnung unverändert.
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - : Ein CSS {{cssxref("&lt;angle&gt;")}}. Wendet eine Farbtonrotation auf die Zeichnung an. Ein Wert von `0deg` lässt den Eingabewert unverändert.
- {{cssxref("filter-function/invert", "invert()")}}
  - : Ein CSS {{cssxref("&lt;percentage&gt;")}}. Invertiert die Zeichnung. Ein Wert von `100%` bedeutet vollständige Inversion. Ein Wert von `0%` lässt die Zeichnung unverändert.
- {{cssxref("filter-function/opacity", "opacity()")}}
  - : Ein CSS {{cssxref("&lt;percentage&gt;")}}. Wendet Transparenz auf die Zeichnung an. Ein Wert von `0%` bedeutet vollständig transparent. Ein Wert von `100%` lässt die Zeichnung unverändert.
- {{cssxref("filter-function/saturate", "saturate()")}}
  - : Ein CSS {{cssxref("&lt;percentage&gt;")}}. Sättigt die Zeichnung. Ein Wert von `0%` bedeutet vollständig entsättigt. Ein Wert von `100%` lässt die Zeichnung unverändert.
- {{cssxref("filter-function/sepia", "sepia()")}}
  - : Ein CSS {{cssxref("&lt;percentage&gt;")}}. Konvertiert die Zeichnung in Sepia. Ein Wert von `100%` bedeutet vollständig Sepia. Ein Wert von `0%` lässt die Zeichnung unverändert.
- `none`
  - : Es wird kein Filter angewendet. Anfangswert.

## Beispiele

Um diese Beispiele anzuzeigen, verwenden Sie einen Browser, der diese Funktion unterstützt; siehe die Kompatibilitätstabelle unten.

### Anwendung eines Weichzeichners

Dieses Beispiel verschwimmt ein Textstück mit der `filter`-Eigenschaft.

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

### Anwendung mehrerer Filter

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

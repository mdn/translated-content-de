---
title: "CanvasRenderingContext2D: filter-Eigenschaft"
short-title: filter
slug: Web/API/CanvasRenderingContext2D/filter
l10n:
  sourceCommit: 592bea250bec05a3b641b0372cb7eddfd24616fb
---

{{APIRef}}

Die **`CanvasRenderingContext2D.filter`**-Eigenschaft der Canvas 2D API ermöglicht Filtereffekte wie Weichzeichnen und Graustufen. Sie ist der CSS-{{cssxref("filter")}}-Eigenschaft ähnlich und akzeptiert die gleichen Werte.

## Wert

Die `filter`-Eigenschaft akzeptiert einen Wert von `"none"` oder eine oder mehrere der folgenden Filterfunktionen in einem String.

- [`url()`](/de/docs/Web/CSS/url_function)
  - : Eine CSS {{cssxref("url_function", "url()")}}. Akzeptiert jede URL, die zu einem SVG-Filterelement aufgelöst wird. Dies kann die ID eines Elements, ein Pfad zu einer externen XML-Datei oder sogar ein in Daten kodierter SVG-Wert sein.
- [`blur()`](/de/docs/Web/CSS/filter-function/blur)
  - : Eine CSS {{cssxref("&lt;length&gt;")}}. Wendet einen Gaußschen Weichzeichner auf die Zeichnung an. Sie definiert den Wert der Standardabweichung für die Gaußsche Funktion, d.h. wie viele Pixel auf dem Bildschirm ineinander übergehen; ein größerer Wert erzeugt somit mehr Unschärfe. Ein Wert von `0` belässt die Eingabe unverändert.
- [`brightness()`](/de/docs/Web/CSS/filter-function/brightness)
  - : Eine CSS {{cssxref("&lt;percentage&gt;")}}. Wendet einen linearen Multiplikator auf die Zeichnung an, sodass sie heller oder dunkler erscheint. Ein Wert unter `100%` verdunkelt das Bild, während ein Wert über `100%` es aufhellt. Ein Wert von `0%` erzeugt ein komplett schwarzes Bild, während ein Wert von `100%` die Eingabe unverändert lässt.
- [`contrast()`](/de/docs/Web/CSS/filter-function/contrast)
  - : Eine CSS {{cssxref("&lt;percentage&gt;")}}. Passt den Kontrast der Zeichnung an. Ein Wert von `0%` erzeugt eine komplett schwarze Zeichnung. Ein Wert von `100%` lässt die Zeichnung unverändert.
- [`drop-shadow()`](/de/docs/Web/CSS/filter-function/drop-shadow)

  - : Wendet einen Schlagschatteneffekt auf die Zeichnung an. Ein Schlagschatten ist effektiv eine verschwommene, versetzte Version der Alpha-Maske der Zeichnung, die in einer bestimmten Farbe unter der Zeichnung zusammengesetzt wird. Diese Funktion nimmt bis zu fünf Argumente an:

    - `<offset-x>`
      - : Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten. Gibt den horizontalen Abstand des Schattens an.
    - `<offset-y>`
      - : Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten. Gibt den vertikalen Abstand des Schattens an.
    - `<blur-radius>`
      - : Je größer dieser Wert ist, desto größer ist die Unschärfe, sodass der Schatten größer und heller wird. Negative Werte sind nicht erlaubt.
    - `<color>`
      - : Siehe {{cssxref("&lt;color&gt;")}}-Werte für mögliche Schlüsselwörter und Notationen.

- [`grayscale()`](/de/docs/Web/CSS/filter-function/grayscale)
  - : Eine CSS {{cssxref("&lt;percentage&gt;")}}. Wandelt die Zeichnung in Graustufen um. Ein Wert von `100%` ist komplett in Graustufen. Ein Wert von `0%` belässt die Zeichnung unverändert.
- [`hue-rotate()`](/de/docs/Web/CSS/filter-function/hue-rotate)
  - : Eine CSS {{cssxref("&lt;angle&gt;")}}. Wendet eine Farbtonrotation auf die Zeichnung an. Ein Wert von `0deg` belässt die Eingabe unverändert.
- [`invert()`](/de/docs/Web/CSS/filter-function/invert)
  - : Eine CSS {{cssxref("&lt;percentage&gt;")}}. Invertiert die Zeichnung. Ein Wert von `100%` bedeutet vollständige Invertierung. Ein Wert von `0%` belässt die Zeichnung unverändert.
- [`opacity()`](/de/docs/Web/CSS/filter-function/opacity)
  - : Eine CSS {{cssxref("&lt;percentage&gt;")}}. Wendet Transparenz auf die Zeichnung an. Ein Wert von `0%` bedeutet vollständig transparent. Ein Wert von `100%` belässt die Zeichnung unverändert.
- [`saturate()`](/de/docs/Web/CSS/filter-function/saturate)
  - : Eine CSS {{cssxref("&lt;percentage&gt;")}}. Sättigt die Zeichnung. Ein Wert von `0%` bedeutet vollständig ungesättigt. Ein Wert von `100%` belässt die Zeichnung unverändert.
- [`sepia()`](/de/docs/Web/CSS/filter-function/sepia)
  - : Eine CSS {{cssxref("&lt;percentage&gt;")}}. Wandelt die Zeichnung in Sepia um. Ein Wert von `100%` bedeutet komplett Sepia. Ein Wert von `0%` belässt die Zeichnung unverändert.
- `none`
  - : Es wird kein Filter angewendet. Anfangswert.

## Beispiele

Um diese Beispiele anzuzeigen, stellen Sie sicher, dass Sie einen Browser verwenden, der diese Funktion unterstützt; siehe die Kompatibilitätstabelle unten.

### Anwenden einer Unschärfe

Dieses Beispiel verwischt ein Textstück mithilfe der `filter`-Eigenschaft.

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
<div style="display:none;">
  <img
    id="source"
    src="https://mdn.github.io/shared-assets/images/examples/rhino.jpg" />
</div>
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

- Das Interface, das diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- CSS {{cssxref("filter")}}
- CSS {{cssxref("&lt;filter-function&gt;")}}

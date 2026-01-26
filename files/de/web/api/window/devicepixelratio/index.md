---
title: "Window: devicePixelRatio-Eigenschaft"
short-title: devicePixelRatio
slug: Web/API/Window/devicePixelRatio
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef}}

Die **`devicePixelRatio`**-Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt das Verhältnis der Auflösung in _physikalischen Pixeln_ zur Auflösung in _CSS-Pixeln_ für das aktuelle Anzeigegerät zurück.

Dieser Wert kann auch als Verhältnis der Pixelgrößen interpretiert werden: die Größe eines _CSS-Pixels_ zur Größe eines _physikalischen Pixels_. Einfacher gesagt, dies zeigt dem Browser an, wie viele der tatsächlichen Bildschirm-Pixel verwendet werden sollen, um ein einzelnes CSS-Pixel darzustellen.

Das Seiten-Zoom beeinflusst den Wert der `devicePixelRatio`. Wenn eine Seite vergrößert wird, nimmt die Größe eines CSS-Pixels zu und somit erhöht sich auch der `devicePixelRatio`-Wert.
Das Pinch-Zoom hat keinen Einfluss auf `devicePixelRatio`, da dies die Seite vergrößert, ohne die Größe eines CSS-Pixels zu ändern.

Dies ist nützlich, wenn es um den Unterschied zwischen der Darstellung auf einem Standarddisplay versus einem HiDPI- oder Retina-Display geht, bei dem mehr Bildschirm-Pixel verwendet werden, um dieselben Objekte darzustellen, was zu einem schärferen Bild führt.

Sie können [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) verwenden, um zu überprüfen, ob sich der Wert der `devicePixelRatio` ändert (was beispielsweise passieren kann, wenn der Benutzer das Fenster auf ein Display mit anderer Pixeldichte zieht).
Siehe [das folgende Beispiel](#überwachen_von_bildschirmauflösung_oder_zoomstufenänderungen).

## Wert

Ein Gleitkommawert mit doppelter Präzision, der das Verhältnis der Auflösung des Displays in physikalischen Pixeln zur Auflösung in CSS-Pixeln angibt. Ein Wert von 1 weist auf ein klassisches 96-DPI-Display hin, während für HiDPI/Retina-Displays ein Wert von 2 erwartet wird.

Andere Werte können bei ungewöhnlich niedrig auflösenden Displays zurückgegeben werden oder häufiger, wenn ein Bildschirm eine höhere Pixeldichte als das Doppelte der Standardauflösung von 96 DPI hat.
Moderne mobile Gerätescreens - die bei kleinen physikalischen Größen hohe Display-Auflösungen bieten - ergeben häufig einen `devicePixelRatio`-Wert größer als 2.

## Beispiele

### Korrektur der Auflösung in einem `<canvas>`

Ein {{htmlelement("canvas")}} kann auf Retina-Bildschirmen zu verschwommen erscheinen.
Verwenden Sie `window.devicePixelRatio`, um zu bestimmen, wie viel zusätzliche Pixeldichte hinzugefügt werden sollte, um ein schärferes Bild zu ermöglichen.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set display size (css pixels).
const size = 200;
canvas.style.width = `${size}px`;
canvas.style.height = `${size}px`;

// Set actual size in memory (scaled to account for extra pixel density).
const scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
canvas.width = Math.floor(size * scale);
canvas.height = Math.floor(size * scale);

// Normalize coordinate system to use CSS pixels.
ctx.scale(scale, scale);

ctx.fillStyle = "#bada55";
ctx.fillRect(10, 10, 300, 300);
ctx.fillStyle = "white";
ctx.font = "18px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";

const x = size / 2;
const y = size / 2;

const textString = "I love MDN";
ctx.fillText(textString, x, y);
```

![Nebeneinander-Vergleich der Wirkung unterschiedlicher devicePixelRatio-Werte auf ein Bild, das auf einem Retina-Display angezeigt wird.](devicepixelratio_diff.png)

### Überwachen von Bildschirmauflösung oder Zoomstufenänderungen

In diesem Beispiel richten wir eine Medienabfrage ein und beobachten, wann sich die Geräteauflösung ändert, wobei die neue Auflösung protokolliert wird.

#### HTML

```html
<div id="container">
  <p>
    This example demonstrates the effect of zooming the page in and out (or
    moving it to a screen with a different scaling factor) on the value of the
    <code>devicePixelRatio</code> property.
  </p>
  <p>Try it and watch what happens!</p>
</div>
<div id="output"></div>
```

#### CSS

```css
body {
  font:
    22px "Arial",
    sans-serif;
}

#container {
  border: 2px solid #2222dd;
  margin: 1rem auto;
  padding: 1rem;
  background-color: #aa99ff;
}
```

#### JavaScript

Der String `mqString` wird auf eine Medienabfrage gesetzt, die überprüft, ob die aktuelle Display-Auflösung einer bestimmten Anzahl von Gerätepunkten pro `px` entspricht.

Die `media`-Variable ist ein [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt, das mit dem Medienabfrage-String initialisiert wird. Wenn sich das Ergebnis des Ausführens von `mqString` gegen das Dokument ändert, wird das `change`-Ereignis des `media`-Objekts ausgelöst, und der Code protokolliert die neue Auflösung.

Beachten Sie, dass bei jeder Änderung der Auflösung ein neue Medienabfrage basierend auf der neuen Auflösung und eine neue `MediaQueryList`-Instanz erstellt werden muss.

```js
let remove = null;
const output = document.querySelector("#output");

const updatePixelRatio = () => {
  remove?.();
  const mqString = `(resolution: ${window.devicePixelRatio}dppx)`;
  const media = matchMedia(mqString);
  media.addEventListener("change", updatePixelRatio);
  remove = () => {
    media.removeEventListener("change", updatePixelRatio);
  };

  output.textContent = `devicePixelRatio: ${window.devicePixelRatio}`;
};

updatePixelRatio();
```

#### Ergebnis

Zum Testen des Beispiels versuchen Sie, die Seite zu zoomen und bemerken Sie den Unterschied im protokollierten Wert von `devicePixelRatio`.

{{EmbedLiveSample("Monitoring_screen_resolution_or_zoom_level_changes", "100%", 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media queries](/de/docs/Web/CSS/Guides/Media_queries)
- [Medienabfragen verwenden](/de/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@media/resolution")}}
- Die {{cssxref("image-resolution")}}-Eigenschaft

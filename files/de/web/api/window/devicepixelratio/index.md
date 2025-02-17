---
title: "Window: devicePixelRatio-Eigenschaft"
short-title: devicePixelRatio
slug: Web/API/Window/devicePixelRatio
l10n:
  sourceCommit: 2e026b611d712ff6e47898f847bbde7401647610
---

{{APIRef}}

Die **`devicePixelRatio`**-Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt das Verhältnis der Auflösung in _physischen Pixeln_ zur Auflösung in _CSS-Pixeln_ für das aktuelle Anzeigegerät zurück.

Dieser Wert kann auch als Verhältnis der Pixelgrößen interpretiert werden: die Größe eines _CSS-Pixels_ im Vergleich zur Größe eines _physischen Pixels_.
Einfacher ausgedrückt teilt dies dem Browser mit, wie viele der tatsächlichen Bildschirmpixel verwendet werden sollen, um ein einzelnes CSS-Pixel zu zeichnen.

Das Seiten-Zooming beeinflusst den Wert von `devicePixelRatio`. Wenn eine Seite herangezoomt (vergrößert) wird, erhöht sich die Größe eines CSS-Pixels, und somit steigt auch der Wert von `devicePixelRatio`.
Pinch-Zooming beeinflusst `devicePixelRatio` nicht, da es die Seite vergrößert, ohne die Größe eines CSS-Pixels zu ändern.

Dies ist nützlich, um mit dem Unterschied zwischen der Darstellung auf einem Standard-Display und einem HiDPI- oder Retina-Display umzugehen, die mehr Bildschirmpixel verwenden, um dieselben Objekte zu zeichnen, was in einem schärferen Bildresultat resultiert.

Mit [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) können Sie überprüfen, ob sich der Wert von `devicePixelRatio` ändert (dies kann beispielsweise passieren, wenn der Benutzer das Fenster auf ein Display mit einer anderen Pixeldichte verschiebt).
Siehe [das Beispiel unten](#überwachen_von_änderungen_der_bildschirmauflösung_oder_des_zoom-levels).

## Wert

Ein doppelt präziser Gleitkommawert, der das Verhältnis der Auflösung des Displays in physischen Pixeln zur Auflösung in CSS-Pixeln angibt. Ein Wert von 1 weist auf ein klassisches 96-DPI-Display hin, während ein Wert von 2 für HiDPI-/Retina-Displays erwartet wird.

Andere Werte können im Falle von ungewöhnlich niedrig aufgelösten Displays zurückgegeben werden oder, häufiger, wenn ein Bildschirm eine höhere Pixeldichte hat als das Doppelte der Standardauflösung von 96 DPI.
Moderne mobile Gerätebildschirme - die hohe Displayauflösungen bei kleinen physischen Größen bieten - liefern oft einen `devicePixelRatio`-Wert größer als 2.

## Beispiele

### Auflösung in einem `<canvas>` korrigieren

Ein {{htmlelement("canvas")}} kann auf Retina-Bildschirmen zu unscharf erscheinen.
Verwenden Sie `window.devicePixelRatio`, um zu bestimmen, wie viel zusätzliche Pixeldichte hinzugefügt werden sollte, um ein schärferes Bild zu erhalten.

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
ctx.fillStyle = "#ffffff";
ctx.font = "18px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";

const x = size / 2;
const y = size / 2;

const textString = "I love MDN";
ctx.fillText(textString, x, y);
```

![Nebeneinander-Vergleich der Auswirkungen unterschiedlicher devicePixelRatio-Werte auf ein Bild, das auf einem Retina-Display angezeigt wird.](devicepixelratio_diff.png)

### Überwachen von Änderungen der Bildschirmauflösung oder des Zoom-Levels

In diesem Beispiel richten wir eine Media Query ein und überwachen sie, um festzustellen, wenn sich die Geräteauflösung ändert, und loggen die neue Auflösung.

#### HTML

```html
<div id="container">
  <p>
    This example demonstrates the effect of zooming the page in and out
    (or moving it to a screen with a different scaling factor) on the
    value of the <code>devicePixelRatio</code> property.</p>
    <p>Try it and watch what happens!</p>
  </p>
</div>
<div id="output"></div>
```

#### CSS

```css
body {
  font:
    22px arial,
    sans-serif;
}

#container {
  border: 2px solid #22d;
  margin: 1rem auto;
  padding: 1rem;
  background-color: #a9f;
}
```

#### JavaScript

Der String `mqString` wird auf eine Media Query gesetzt, die überprüft, ob die aktuelle Display-Auflösung einer bestimmten Anzahl von Geräte-Dots pro `px` entspricht.

Die Variable `media` ist ein [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt, das mit dem Media-Query-String initialisiert wird. Wenn sich das Ergebnis der Ausführung von `mqString` gegen das Dokument ändert, wird das `change`-Ereignis des `media`-Objekts ausgelöst, und der Code loggt die neue Auflösung.

Beachten Sie, dass jedes Mal, wenn sich die Auflösung ändert, ein neues Media Query basierend auf der neuen Auflösung und eine neue Instanz von `MediaQueryList` erstellt werden muss.

```js
let remove = null;
const output = document.querySelector("#output");

const updatePixelRatio = () => {
  if (remove != null) {
    remove();
  }
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

Um das Beispiel zu testen, versuchen Sie, die Seite ein- und auszuzoomen, und beachten Sie den Unterschied im protokollierten Wert von `devicePixelRatio`.

{{EmbedLiveSample("Monitoring_screen_resolution_or_zoom_level_changes", "100%", 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [CSS-`resolution`-Media Query](/de/docs/Web/CSS/@media/resolution)
- Die {{cssxref("image-resolution")}}-Eigenschaft

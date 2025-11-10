---
title: "Window: devicePixelRatio Eigenschaft"
short-title: devicePixelRatio
slug: Web/API/Window/devicePixelRatio
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}

Die **`devicePixelRatio`**-Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt das Verhältnis der Auflösung in _physischen Pixeln_ zur Auflösung in _CSS-Pixeln_ für das aktuelle Anzeigegerät zurück.

Dieser Wert kann auch als Verhältnis der Pixelgrößen interpretiert werden: die Größe eines _CSS-Pixels_ zur Größe eines _physischen Pixels_. Einfacher ausgedrückt, teilt dies dem Browser mit, wie viele der tatsächlichen Bildschirmpixel verwendet werden sollen, um einen einzelnen CSS-Pixel zu zeichnen.

Das Seitenzoomen beeinflusst den Wert von `devicePixelRatio`. Wenn eine Seite vergrößert wird (größer gemacht wird), erhöht sich die Größe eines CSS-Pixels, und somit erhöht sich der `devicePixelRatio`-Wert. Pinch-Zooming beeinflusst `devicePixelRatio` nicht, da hierbei die Seite vergrößert wird, ohne die Größe eines CSS-Pixels zu ändern.

Dies ist nützlich, wenn die Unterschiede zwischen der Darstellung auf einem Standarddisplay und einem HiDPI- oder Retina-Display berücksichtigt werden, bei denen mehr Bildschirmpixel verwendet werden, um dieselben Objekte zu zeichnen, was zu einem schärferen Bild führt.

Sie können [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) verwenden, um zu überprüfen, ob sich der Wert von `devicePixelRatio` ändert (was passieren kann, wenn der Benutzer das Fenster auf ein Display mit einer anderen Pixeldichte zieht). Sehen Sie sich [das folgende Beispiel](#bildschirmauflösungs-_oder_zoomstufenänderungen_überwachen) an.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der das Verhältnis der Auflösung des Displays in physischen Pixeln zur Auflösung in CSS-Pixeln angibt. Ein Wert von 1 zeigt ein klassisches 96-DPI-Display an, während ein Wert von 2 für HiDPI-/Retina-Displays erwartet wird.

Andere Werte können im Falle ungewöhnlich niedriger Auflösungs-Displays oder häufiger, wenn ein Bildschirm eine höhere Pixeldichte als das Doppelte der Standardauflösung von 96 DPI aufweist, zurückgegeben werden. Moderne mobile Gerätescreens, die hohe Displayauflösungen bei kleinen physischen Größen bieten, liefern oft einen `devicePixelRatio`-Wert von über 2.

## Beispiele

### Auflösungskorrektur in einem `<canvas>`

Ein {{htmlelement("canvas")}} kann auf Retina-Bildschirmen zu unscharf erscheinen. Verwenden Sie `window.devicePixelRatio`, um zu bestimmen, wie viel zusätzliche Pixeldichte hinzugefügt werden sollte, um ein schärferes Bild zu ermöglichen.

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

![Nebeneinander liegender Vergleich der Wirkung unterschiedlicher devicePixelRatio-Werte auf ein Bild, das auf einem Retina-Display angezeigt wird.](devicepixelratio_diff.png)

### Bildschirmauflösungs- oder Zoomstufenänderungen überwachen

In diesem Beispiel richten wir eine Media Query ein und beobachten sie, um zu sehen, wann sich die Geräteauflösung ändert und protokollieren die neue Auflösung.

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

Der String `mqString` wird auf eine Media Query gesetzt, die überprüft, ob die aktuelle Displayauflösung einer bestimmten Anzahl von Gerätepunkten pro `px` entspricht.

Die Variable `media` ist ein [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) Objekt, das mit dem Media Query String initialisiert wird. Wenn das Ergebnis der Ausführung von `mqString` gegen das Dokument sich ändert, löst das `change`-Ereignis des `media` Objekts aus, und der Code protokolliert die neue Auflösung.

Beachten Sie, dass jedes Mal, wenn sich die Auflösung ändert, das Beispiel eine neue Media Query auf der Basis der neuen Auflösung und eine neue Instanz von `MediaQueryList` erstellen muss.

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

Um das Beispiel zu testen, versuchen Sie, die Seite ein- und auszuzoomen und beachten Sie den Unterschied im protokollierten Wert von `devicePixelRatio`.

{{EmbedLiveSample("Monitoring_screen_resolution_or_zoom_level_changes", "100%", 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries)
- [Media Queries verwenden](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [CSS `resolution` Media Query](/de/docs/Web/CSS/Reference/At-rules/@media/resolution)
- Die {{cssxref("image-resolution")}} Eigenschaft

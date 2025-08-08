---
title: "Window: devicePixelRatio-Eigenschaft"
short-title: devicePixelRatio
slug: Web/API/Window/devicePixelRatio
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{APIRef}}

Die **`devicePixelRatio`**-Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt das Verhältnis der Auflösung in _physischen Pixeln_ zur Auflösung in _CSS-Pixeln_ für das aktuelle Anzeigegerät zurück.

Dieser Wert kann auch als Verhältnis der Pixelgrößen interpretiert werden: die Größe eines _CSS-Pixels_ zur Größe eines _physischen Pixels_.
Einfach ausgedrückt, teilt dies dem Browser mit, wie viele der tatsächlichen Pixel des Bildschirms verwendet werden sollen, um einen einzelnen CSS-Pixel zu zeichnen.

Das Zoomniveau einer Seite beeinflusst den Wert von `devicePixelRatio`. Wenn eine Seite herangezoomt wird (größer gemacht), erhöht sich die Größe eines CSS-Pixels, und somit steigt auch der `devicePixelRatio`-Wert.
Pinch-Zoom beeinflusst `devicePixelRatio` nicht, da hierbei die Seite vergrößert wird, ohne die Größe eines CSS-Pixels zu ändern.

Dies ist nützlich, wenn man mit dem Unterschied zwischen der Wiedergabe auf einem Standarddisplay im Vergleich zu einem HiDPI- oder Retina-Display umgeht, die mehr Bildschirmpixel verwenden, um dieselben Objekte zu zeichnen, was zu einem schärferen Bild führt.

Sie können [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) verwenden, um zu überprüfen, ob sich der Wert von `devicePixelRatio` ändert (was passieren kann, wenn der Benutzer das Fenster auf ein Display mit einer anderen Pixeldichte zieht).
Siehe [das Beispiel unten](#änderungen_der_bildschirmauflösung_oder_des_zoomlevels_überwachen).

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der das Verhältnis der Auflösung des Displays in physischen Pixeln zur Auflösung in CSS-Pixeln angibt. Ein Wert von 1 zeigt ein klassisches 96 DPI-Display an, während ein Wert von 2 für HiDPI-/Retina-Displays erwartet wird.

Andere Werte können im Fall von ungewöhnlich niedrigen Auflösungsdisplays oder, häufiger, wenn ein Bildschirm eine höhere Pixeldichte als das Doppelte der Standardauflösung von 96 DPI hat, zurückgegeben werden.
Moderne mobile Gerätescreens - die hohe Anzeigeresolutionen bei kleinen physischen Größen bieten - ergeben oft einen `devicePixelRatio`-Wert größer als 2.

## Beispiele

### Auflösung in einem `<canvas>` korrigieren

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

![Ein Vergleich nebeneinander des Effekts unterschiedlicher devicePixelRatio-Werte auf ein Bild, das auf einem Retina-Display angezeigt wird.](devicepixelratio_diff.png)

### Änderungen der Bildschirmauflösung oder des Zoomlevels überwachen

In diesem Beispiel werden wir eine Medienabfrage einrichten und beobachten, wann sich die Geräteauflösung ändert, und die neue Auflösung protokollieren.

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

Der String `mqString` ist auf eine Medienabfrage eingestellt, die überprüft, ob die aktuelle Displayauflösung einer bestimmten Anzahl von Gerätepunkten pro `px` entspricht.

Die `media`-Variable ist ein [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt, das mit dem Medienabfragestring initialisiert wird. Wenn sich das Ergebnis der Ausführung von `mqString` gegen das Dokument ändert, wird das `change`-Ereignis des `media`-Objekts ausgelöst, und der Code protokolliert die neue Auflösung.

Beachten Sie, dass jedes Mal, wenn sich die Auflösung ändert, ein neuer Medienabfrage, basierend auf der neuen Auflösung, und eine neue `MediaQueryList`-Instanz erstellt werden müssen.

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

- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries)
- [Verwendung von Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [CSS-`resolution`-Medienabfrage](/de/docs/Web/CSS/@media/resolution)
- Die {{cssxref("image-resolution")}}-Eigenschaft

---
title: "Fenster: devicePixelRatio-Eigenschaft"
short-title: devicePixelRatio
slug: Web/API/Window/devicePixelRatio
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef}}

Die **`devicePixelRatio`**-Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt das Verhältnis der Auflösung in _physischen Pixeln_ zur Auflösung in _CSS-Pixeln_ für das aktuelle Anzeigegerät zurück.

Dieser Wert kann auch als Verhältnis der Pixelgrößen interpretiert werden: die Größe eines _CSS-Pixels_ zur Größe eines _physischen Pixels_. Vereinfacht gesagt, teilt dies dem Browser mit, wie viele der tatsächlichen Bildschirmpixel verwendet werden sollen, um ein einzelnes CSS-Pixel zu zeichnen.

Das Seiten-Zoomen beeinflusst den Wert von `devicePixelRatio`. Wenn eine Seite vergrößert (größer gemacht) wird, erhöht sich die Größe eines CSS-Pixels, und somit steigt auch der `devicePixelRatio`-Wert. Das Pinch-Zoomen beeinflusst `devicePixelRatio` nicht, da dies die Seite vergrößert, ohne die Größe eines CSS-Pixels zu ändern.

Dies ist nützlich, wenn man den Unterschied zwischen der Darstellung auf einem Standardbildschirm und einem HiDPI- oder Retina-Bildschirm berücksichtigt, die mehr Bildschirmpixel verwenden, um dieselben Objekte zu zeichnen, was zu einem schärferen Bild führt.

Sie können [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) verwenden, um zu überprüfen, ob sich der Wert von `devicePixelRatio` ändert (was passieren kann, wenn der Benutzer beispielsweise das Fenster auf ein Display mit einer anderen Pixeldichte verschiebt). Siehe [das folgende Beispiel](#überwachung_von_änderungen_der_bildschirmauflösung_oder_zoomebene).

## Wert

Ein Gleitkommawert doppelter Genauigkeit, der das Verhältnis der Auflösung des Displays in physischen Pixeln zur Auflösung in CSS-Pixeln angibt. Ein Wert von 1 zeigt ein klassisches 96-DPI-Display an, während ein Wert von 2 für HiDPI-/Retina-Displays erwartet wird.

Andere Werte können im Fall von ungewöhnlich niedrigen Auflösungsdisplays oder häufiger auftreten, wenn ein Bildschirm eine höhere Pixeldichte hat als das Doppelte der Standardauflösung von 96 DPI. Moderne mobile Gerätescreens - die hohe Bildschirmauflösungen bei kleinen physischen Größen bieten - ergeben oft einen `devicePixelRatio`-Wert größer als 2.

## Beispiele

### Auflösung in einer `<canvas>` korrigieren

Ein {{htmlelement("canvas")}} kann auf Retina-Bildschirmen zu unscharf erscheinen. Verwenden Sie `window.devicePixelRatio`, um festzustellen, wie viel zusätzliche Pixeldichte hinzugefügt werden sollte, um ein schärferes Bild zu ermöglichen.

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

![Nebeneinander Vergleich des Effekts verschiedener devicePixelRatio-Werte auf ein Bild auf einem Retina-Bildschirm.](devicepixelratio_diff.png)

### Überwachung von Änderungen der Bildschirmauflösung oder Zoomebene

In diesem Beispiel richten wir eine Medienabfrage ein und überwachen sie, um zu sehen, wann sich die Geräteauflösung ändert, indem wir die neue Auflösung protokollieren.

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
  border: 2px solid #2222dd;
  margin: 1rem auto;
  padding: 1rem;
  background-color: #aa99ff;
}
```

#### JavaScript

Der String `mqString` wird auf eine Medienabfrage gesetzt, die prüft, ob die aktuelle Bildschirmauflösung einer bestimmten Anzahl von Gerätepunkten pro `px` entspricht.

Die Variable `media` ist ein [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt, das mit dem Medienabfragestring initialisiert wird. Wenn das Ergebnis von `mqString` im Dokument geändert wird, wird das `change`-Ereignis des `media`-Objekts ausgelöst, und der Code protokolliert die neue Auflösung.

Beachten Sie, dass bei jeder Änderung der Auflösung im Beispiel eine neue Medienabfrage auf Grundlage der neuen Auflösung erstellt werden muss und auch eine neue `MediaQueryList`-Instanz.

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

Um das Beispiel zu testen, versuchen Sie, die Seite ein- und auszuzoomen, und beachten Sie den Unterschied im protokollierten Wert von `devicePixelRatio`.

{{EmbedLiveSample("Monitoring_screen_resolution_or_zoom_level_changes", "100%", 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- [Media Queries verwenden](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [CSS `resolution` Media Query](/de/docs/Web/CSS/@media/resolution)
- Die {{cssxref("image-resolution")}}-Eigenschaft

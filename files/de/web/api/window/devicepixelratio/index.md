---
title: "Window: devicePixelRatio-Eigenschaft"
short-title: devicePixelRatio
slug: Web/API/Window/devicePixelRatio
l10n:
  sourceCommit: b2af4eb16dd4c399ed81f67efd49777fa6ae9030
---

{{APIRef}}

Die **`devicePixelRatio`**-Eigenschaft der
[`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt das Verhältnis der Auflösung in _physischen Pixeln_ zur Auflösung in _CSS-Pixeln_ für das aktuelle Anzeigegerät zurück.

Dieser Wert kann auch als das Verhältnis der Pixeldimensionen interpretiert werden: die Größe eines _CSS-Pixels_ zur Größe eines _physischen Pixels_. Einfacher ausgedrückt informiert es den Browser, wie viele der tatsächlichen Bildschirm-Pixel verwendet werden sollten, um ein einzelnes CSS-Pixel darzustellen.

Dies ist nützlich, um den Unterschied zwischen der Darstellung auf einem Standardbildschirm und einem HiDPI oder Retina-Display zu beachten, die mehr Bildschirm-Pixel verwenden, um dieselben Objekte darzustellen, und so ein schärferes Bild erzeugen.

Sie können [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) verwenden, um zu überprüfen, ob sich der Wert von `devicePixelRatio` ändert (was beispielsweise passieren kann, wenn der Benutzer das Fenster auf ein Display mit anderer Pixeldichte zieht). Siehe [das untenstehende Beispiel](#überwachen_von_bildschirmauflösungen_oder_zoomstufenänderungen).

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der das Verhältnis der Display-Auflösung in physischen Pixeln zur Auflösung in CSS-Pixeln angibt. Ein Wert von 1 zeigt ein klassisches 96-DPI-Display an, während für HiDPI/Retina-Displays ein Wert von 2 erwartet wird.

Andere Werte können im Fall von ungewöhnlich niedrigen Auflösungen oder, häufiger, wenn ein Bildschirm eine höhere Pixeldichte als die doppelte Standardauflösung von 96 DPI hat, zurückgegeben werden. Moderne Mobilgerätebildschirme - die bei kleinen physischen Größen hohe Display-Auflösungen bieten - liefern oft einen `devicePixelRatio`-Wert von mehr als 2.

## Beispiele

### Korrektur der Auflösung in einer `<canvas>`

Ein {{htmlelement("canvas")}} kann auf Retina-Bildschirmen zu verschwommen erscheinen. Verwenden Sie `window.devicePixelRatio`, um zu bestimmen, wie viel zusätzliche Pixeldichte hinzugefügt werden sollte, um ein schärferes Bild zu ermöglichen.

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

![Seitenvergleich der Auswirkung verschiedener devicePixelRatio-Werte auf ein Bild, das auf einem Retina-Display angezeigt wird.](devicepixelratio_diff.png)

### Überwachen von Bildschirmauflösungen oder Zoomstufenänderungen

In diesem Beispiel richten wir eine Media Query ein und beobachten sie, um zu sehen, wann sich die Geräteauflösung ändert, wobei die neue Auflösung protokolliert wird.

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

Der String `mqString` wird auf eine Media Query gesetzt, die überprüft, ob die aktuelle Display-Auflösung einer bestimmten Anzahl von Gerätetupeln pro `px` entspricht.

Die Variable `media` ist ein [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt, das mit dem Media Query-String initialisiert wird. Wenn sich das Ergebnis des Ausführens von `mqString` gegen das Dokument ändert, wird das `change`-Ereignis des `media`-Objekts ausgelöst, und der Code protokolliert die neue Auflösung.

Beachten Sie, dass jedes Mal, wenn sich die Auflösung ändert, ein neues Media Query basierend auf der neuen Auflösung und eine neue `MediaQueryList`-Instanz erstellt werden muss.

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
- [Media Queries verwenden](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [CSS `resolution` Media Query](/de/docs/Web/CSS/@media/resolution)
- Die {{cssxref("image-resolution")}}-Eigenschaft

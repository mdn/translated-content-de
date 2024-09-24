---
title: "Fenster: devicePixelRatio-Eigenschaft"
short-title: devicePixelRatio
slug: Web/API/Window/devicePixelRatio
l10n:
  sourceCommit: b2af4eb16dd4c399ed81f67efd49777fa6ae9030
---

{{APIRef}}

Die **`devicePixelRatio`**-Eigenschaft des
{{domxref("Window")}}-Interfaces gibt das Verhältnis der Auflösung in _physischen
Pixeln_ zur Auflösung in _CSS-Pixeln_ für das aktuelle Anzeigegerät zurück.

Dieser Wert kann auch als Verhältnis der Pixelgrößen interpretiert werden:
die Größe eines _CSS-Pixels_ zur Größe eines _physischen Pixels_. Einfacher
ausgedrückt, sagt dies dem Browser, wie viele der tatsächlichen Bildschirmpixel verwendet werden sollen, um ein einziges CSS-Pixel zu zeichnen.

Dies ist nützlich, wenn es darum geht, den Unterschied zwischen der Darstellung auf einem Standardbildschirm und einem HiDPI- oder Retina-Display zu behandeln, die mehr Bildschirmpixel verwenden, um dieselben Objekte zu zeichnen, was zu einem schärferen Bild führt.

Sie können {{domxref("Window.matchMedia", "window.matchMedia()")}} verwenden, um zu überprüfen, ob sich der Wert von `devicePixelRatio` ändert (was passieren kann, wenn der Benutzer das Fenster beispielsweise auf ein Display mit einer anderen Pixeldichte zieht). Siehe [das Beispiel unten](#überwachen_von_bildschirmauflösungs-_oder_zoomstufenänderungen).

## Wert

Ein doppelpräziser Gleitkommawert, der das Verhältnis der Auflösung des Displays in physischen Pixeln zur Auflösung in CSS-Pixeln angibt. Ein Wert von 1 zeigt ein klassisches 96-DPI-Display an, während ein Wert von 2 für HiDPI/Retina-Displays erwartet wird.

Andere Werte können im Falle von ungewöhnlich niedrigen Auflösungsdisplays oder häufiger bei Bildschirmen mit einer höheren Pixeldichte als dem doppelten der Standardauflösung von 96 DPI zurückgegeben werden. Moderne Mobilgerätebildschirme - die bei kleinen physischen Größen hohe Anzeigeauflösungen bieten - ergeben oft einen `devicePixelRatio`-Wert größer als 2.

## Beispiele

### Auflösung in einem `<canvas>` korrigieren

Ein {{htmlelement("canvas")}} kann auf Retina-Bildschirmen zu verschwommen erscheinen.
Verwenden Sie `window.devicePixelRatio`, um festzustellen, wie viel zusätzliche Pixeldichte hinzugefügt werden sollte, um ein schärferes Bild zu ermöglichen.

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

![Nebeneinander Vergleich des Effekts unterschiedlicher devicePixelRatio-Werte auf einem Bild, das auf einem Retina-Display angezeigt wird.](devicepixelratio_diff.png)

### Überwachen von Bildschirmauflösungs- oder Zoomstufenänderungen

In diesem Beispiel richten wir eine Medienabfrage ein und beobachten sie, um zu sehen, wann sich die Geräteauflösung ändert und die neue Auflösung protokolliert wird.

#### HTML

```html
<div id="container">
  <p>
    Dieses Beispiel demonstriert die Auswirkung des Zoomens der Seite
    hinein und heraus (oder das Verschieben auf einen Bildschirm mit einem
    anderen Skalierungsfaktor) auf den Wert der <code>devicePixelRatio</code>-Eigenschaft.</p>
    <p>Probieren Sie es aus und beobachten Sie, was passiert!</p>
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

Der String `mqString` wird auf eine Medienabfrage gesetzt, die überprüft, ob die aktuelle Anzeigeresolution einer bestimmten Anzahl von Gerätenpunkten pro `px` entspricht.

Die Variable `media` ist ein {{domxref("MediaQueryList")}}-Objekt, das mit dem Medienabfrage-String initialisiert wird. Wenn sich das Ergebnis des Ausführens von `mqString` gegen das Dokument ändert, wird das `change`-Ereignis des `media`-Objekts ausgelöst und der Code protokolliert die neue Auflösung.

Beachten Sie, dass jedes Mal, wenn sich die Auflösung ändert, das Beispiel eine neue Medienabfrage basierend auf der neuen Auflösung und eine neue Instanz der `MediaQueryList` erstellen muss.

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

Um das Beispiel zu testen, versuchen Sie, die Seite zu vergrößern und zu verkleinern, und beachten Sie den Unterschied im protokollierten Wert von `devicePixelRatio`.

{{EmbedLiveSample("Monitoring_screen_resolution_or_zoom_level_changes", "100%", 300)}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries)
- [Verwendung von Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [CSS-`resolution`-Medienabfrage](/de/docs/Web/CSS/@media/resolution)
- Die {{cssxref("image-resolution")}}-Eigenschaft

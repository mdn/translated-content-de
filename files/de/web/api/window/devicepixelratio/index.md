---
title: "Window: devicePixelRatio-Eigenschaft"
short-title: devicePixelRatio
slug: Web/API/Window/devicePixelRatio
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("CSSOM view API")}}

Die **`devicePixelRatio`**-Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt das Verhältnis der Auflösung in _physikalischen Pixeln_ zur Auflösung in _CSS-Pixeln_ für das aktuelle Anzeigegerät zurück.

Dieser Wert könnte auch als Verhältnis der Pixelgrößen interpretiert werden: die Größe eines _CSS-Pixels_ zur Größe eines _physikalischen Pixels_. Einfacher ausgedrückt, teilt das dem Browser mit, wie viele der tatsächlichen Bildschirm-Pixel verwendet werden sollen, um ein einzelnes CSS-Pixel zu zeichnen.

Das Seiten-Zoomen beeinflusst den Wert von `devicePixelRatio`. Wenn eine Seite vergrößert wird (größer gemacht wird), nimmt die Größe eines CSS-Pixels zu, und somit steigt der Wert von `devicePixelRatio`. Pinch-Zooming beeinflusst `devicePixelRatio` nicht, da hierbei die Seite vergrößert wird, ohne die Größe eines CSS-Pixels zu ändern.

Dies ist nützlich, um den Unterschied zwischen der Darstellung auf einem Standardbildschirm und einem HiDPI- oder Retina-Bildschirm zu berücksichtigen, die mehr Bildschirm-Pixel verwenden, um dieselben Objekte zu zeichnen und somit ein schärferes Bild zu erzeugen.

Sie können [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) verwenden, um zu überprüfen, ob sich der Wert von `devicePixelRatio` ändert (was zum Beispiel passieren kann, wenn der Benutzer das Fenster auf ein Display mit einer anderen Pixeldichte zieht). Siehe [das Beispiel unten](#überwachung_von_bildschirmauflösungs-_oder_zoomstufenänderungen).

## Wert

Ein Gleitkommawert mit doppelter Präzision, der das Verhältnis der Auflösung des Displays in physikalischen Pixeln zur Auflösung in CSS-Pixeln angibt. Ein Wert von 1 zeigt ein klassisches 96 DPI-Display an, während ein Wert von 2 für HiDPI/Retina-Displays erwartet wird.

Andere Werte können im Fall von ungewöhnlich niedrigen Auflösungsdisplays oder, häufiger, wenn ein Bildschirm eine höhere Pixeldichte als das doppelte der Standardauflösung von 96 DPI aufweist, zurückgegeben werden. Moderne mobile Gerätebildschirme - die hohe Display-Auflösungen bei kleinen physikalischen Größen bieten - ergeben häufig einen `devicePixelRatio`-Wert größer als 2.

## Beispiele

### Korrektur der Auflösung in einem `<canvas>`

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

![Seiten-an-Seiten-Vergleich des Effekts verschiedener devicePixelRatio-Werte auf ein Bild, das auf einem Retina-Display angezeigt wird.](devicepixelratio_diff.png)

### Überwachung von Bildschirmauflösungs- oder Zoomstufenänderungen

In diesem Beispiel richten wir eine Medienabfrage ein und beobachten, wann sich die Geräteauflösung ändert, indem wir die neue Auflösung protokollieren.

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

Der String `mqString` wird auf eine Medienabfrage gesetzt, die überprüft, ob die aktuelle Bildschirmauflösung mit einer bestimmten Anzahl von Gerätepunkten pro `px` übereinstimmt.

Die Variable `media` ist ein [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt, das mit dem Medienabfrage-String initialisiert wird. Wenn sich das Ergebnis der Ausführung von `mqString` gegen das Dokument ändert, wird das `change`-Ereignis des `media`-Objekts ausgelöst, und der Code protokolliert die neue Auflösung.

Beachten Sie, dass bei jeder Auflösungsänderung ein neues Medienabfrage basierend auf der neuen Auflösung und eine neue `MediaQueryList`-Instanz erstellt werden muss.

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

Um das Beispiel zu testen, versuchen Sie, die Seite hinein- und herauszuzoomen und beachten Sie den Unterschied im protokollierten Wert von `devicePixelRatio`.

{{EmbedLiveSample("Monitoring_screen_resolution_or_zoom_level_changes", "100%", 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries)
- [Verwendung von Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@media/resolution")}}
- Die {{cssxref("image-resolution")}}-Eigenschaft

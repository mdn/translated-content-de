---
title: "Window: devicePixelRatio-Eigenschaft"
short-title: devicePixelRatio
slug: Web/API/Window/devicePixelRatio
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("CSSOM view API")}}

Die schreibgeschützte Eigenschaft **`devicePixelRatio`** der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt für das aktuelle Anzeigegerät das Verhältnis der Auflösung in _physischen Pixeln_ zur Auflösung in _CSS-Pixeln_ zurück.

Dieser Wert lässt sich auch als Verhältnis der Pixelgrößen verstehen: der Größe eines _CSS-Pixels_ zur Größe eines _physischen Pixels_. Vereinfacht ausgedrückt gibt er dem Browser an, wie viele tatsächliche Bildschirmpixel für die Darstellung eines einzelnen CSS-Pixels verwendet werden sollen.

Das Zoomen einer Seite beeinflusst den Wert von `devicePixelRatio`. Wird eine Seite vergrößert, nimmt die Größe eines CSS-Pixels zu und damit auch der Wert von `devicePixelRatio`. Pinch-Zoom beeinflusst `devicePixelRatio` nicht, da dabei die Seite vergrößert wird, ohne die Größe eines CSS-Pixels zu ändern.

Dies ist hilfreich, wenn Sie den Unterschied zwischen der Darstellung auf einem Standardbildschirm und auf einem HiDPI- oder Retina-Bildschirm berücksichtigen müssen. Letztere verwenden mehr Bildschirmpixel, um dieselben Objekte darzustellen, und erzeugen dadurch ein schärferes Bild.

Mit [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) können Sie prüfen, ob sich der Wert von `devicePixelRatio` ändert – beispielsweise, wenn ein Benutzer das Fenster auf einen Bildschirm mit einer anderen Pixeldichte verschiebt. Siehe [das folgende Beispiel](#änderungen_der_bildschirmauflösung_oder_der_zoomstufe_überwachen).

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der das Verhältnis der Bildschirmauflösung in physischen Pixeln zur Auflösung in CSS-Pixeln angibt. Ein Wert von 1 steht für einen klassischen Bildschirm mit 96 DPI; bei HiDPI-/Retina-Bildschirmen ist ein Wert von 2 zu erwarten.

Andere Werte können bei Bildschirmen mit ungewöhnlich niedriger Auflösung auftreten oder – häufiger – wenn ein Bildschirm eine mehr als doppelt so hohe Pixeldichte wie die Standardauflösung von 96 DPI hat. Moderne Bildschirme mobiler Geräte bieten oft hohe Auflösungen bei geringer physischer Größe und liefern daher häufig einen `devicePixelRatio`-Wert über 2.

## Beispiele

### Auflösung in einem `<canvas>` korrigieren

Ein {{htmlelement("canvas")}} kann auf Retina-Bildschirmen zu unscharf erscheinen. Verwenden Sie `window.devicePixelRatio`, um zu bestimmen, wie stark die Pixeldichte für ein schärferes Bild erhöht werden sollte.

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

![Direkter Vergleich der Auswirkungen verschiedener devicePixelRatio-Werte auf ein Bild, das auf einem Retina-Bildschirm angezeigt wird.](devicepixelratio_diff.png)

### Änderungen der Bildschirmauflösung oder der Zoomstufe überwachen

In diesem Beispiel richten wir eine Media Query ein und überwachen sie, um Änderungen der Geräteauflösung zu erkennen. Die neue Auflösung wird protokolliert.

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

Der String `mqString` wird auf eine Media Query gesetzt, die prüft, ob die aktuelle Bildschirmauflösung einer bestimmten Anzahl von Gerätepunkten pro `px` entspricht.

Die Variable `media` ist ein [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Objekt, das mit dem Media-Query-String initialisiert wird. Wenn sich das Ergebnis der Auswertung von `mqString` für das Dokument ändert, wird das `change`-Ereignis des `media`-Objekts ausgelöst und der Code protokolliert die neue Auflösung.

Beachten Sie, dass das Beispiel bei jeder Änderung der Auflösung eine neue Media Query auf Grundlage der neuen Auflösung sowie eine neue `MediaQueryList`-Instanz erstellen muss.

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

Um das Beispiel zu testen, vergrößern und verkleinern Sie die Seite und beobachten Sie, wie sich der protokollierte Wert von `devicePixelRatio` ändert.

{{EmbedLiveSample("Monitoring_screen_resolution_or_zoom_level_changes", "100%", 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries)
- [Media Queries verwenden](/de/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@media/resolution")}}
- Die Eigenschaft {{cssxref("image-resolution")}}

---
title: Klare Pixelkunst-Optik mit Bilddarstellung
short-title: Bilddarstellung für Pixelkunst
slug: Games/Techniques/Crisp_pixel_art_look
l10n:
  sourceCommit: f2d013a0ee574275c95b93a4fc72a547a58df7f4
---

{{GamesSidebar}}

Dieser Artikel behandelt eine nützliche Technik, um Ihren Canvas/WebGL-Spielen eine klare Pixelkunst-Optik zu verleihen, selbst auf hochauflösenden Monitoren.

## Das Konzept

Retro-[Pixelkunst](https://en.wikipedia.org/wiki/Pixel_art)-Ästhetik wird immer beliebter, besonders in [Indie-Spielen](https://en.wikipedia.org/wiki/Indie_game) oder [Game Jam](https://en.wikipedia.org/wiki/Game_jam)-Beiträgen. Da jedoch heutige Bildschirme Inhalte in hoher Auflösung darstellen, gibt es das Problem, sicherzustellen, dass die Pixelkunst nicht unscharf aussieht. Entwickler haben Grafiken manuell vergrößert, damit sie mit Blöcken angezeigt werden, die die Pixel repräsentieren. Zwei Nachteile dieser Methode sind größere Dateigrößen und [Kompressionsartefakte](https://en.wikipedia.org/wiki/Compression_artifact).

<table class="standard-table">
  <tbody>
    <tr>
      <td><img alt="kleiner pixeliger Mann" src="technique_original.png" /></td>
      <td><img alt="kleiner pixeliger Mann" src="technique_original.png" /></td>
      <td><img alt="größerer pixeliger Mann" src="technique_4x.png" /></td>
    </tr>
    <tr>
      <td>Originalgröße</td>
      <td>4x Größe</td>
      <td>4x Größe (skaliert mit einem Bildbearbeitungsprogramm)</td>
    </tr>
    <tr>
      <td>keine</td>
      <td>Algorithmus des Anbieters</td>
      <td>
        <a href="https://en.wikipedia.org/wiki/Nearest-neighbor_interpolation"
          >nächster Nachbar-Algorithmus</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Eine CSS-basierte Lösung

Die gute Nachricht ist, dass Sie CSS verwenden können, um das Hochskalieren automatisch durchzuführen, was nicht nur das Problem der Unschärfe löst, sondern Ihnen auch ermöglicht, die Bilder in ihrer ursprünglichen, kleineren Größe zu verwenden und somit die Downloadzeit zu sparen. Außerdem erfordern einige Spieltechniken Algorithmen, die Bilder analysieren, was ebenfalls von der Arbeit mit kleineren Bildern profitiert.

Die CSS-Eigenschaft, um diese Skalierung zu erreichen, ist {{cssxref("image-rendering")}}. Die Schritte, um diesen Effekt zu erzielen, sind:

- Erstellen Sie ein {{htmlelement("canvas")}}-Element und setzen Sie dessen `width`- und `height`-Attribute auf die ursprüngliche, kleinere Auflösung.
- Setzen Sie dessen CSS-{{cssxref("width")}}- und {{cssxref("height")}}-Eigenschaften auf das 2- oder 4-fache des HTML-`width`- und `height`-Werts. Wenn das Canvas beispielsweise mit einer Breite von 128 Pixeln erstellt wurde, würden wir die CSS-`width` auf `512px` setzen, wenn wir eine 4x-Skalierung möchten.
- Setzen Sie die CSS-Eigenschaft `image-rendering` des {{htmlelement("canvas")}}-Elements auf `pixelated`, wodurch das Bild nicht unscharf wird. Es gibt auch die Werte `crisp-edges` und `-webkit-optimize-contrast`, die in einigen Browsern funktionieren. Lesen Sie den Artikel über {{cssxref("image-rendering")}}, um mehr Informationen über die Unterschiede zwischen diesen Werten zu erhalten und welche Werte je nach Browser verwendet werden sollten.

## Ein Beispiel

Schauen wir uns ein Beispiel an. Das Originalbild, das wir hochskalieren möchten, sieht so aus:

![Verpixelte Nachtszene einer Katze am Rand einer Klippe mit kleinen Herzen über ihrem Kopf, hinter ihr ein großer Vollmond. Mit einem schwarzen Hintergrund wird unten im Bild weiße Schrift angezeigt, die sagt: verliebt in den Mond.](cat.png)

Hier ist ein HTML-Beispiel, um ein einfaches Canvas zu erstellen:

```html
<canvas id="game" width="128" height="128">A cat</canvas>
```

CSS, um das Canvas zu dimensionieren und ein scharfes Bild darzustellen:

```css
canvas {
  width: 512px;
  height: 512px;
  image-rendering: pixelated;
}
```

Und etwas JavaScript, um das Canvas einzurichten und das Bild zu laden:

```js
// Get canvas context
const ctx = document.getElementById("game").getContext("2d");

// Load image
const image = new Image();
image.onload = () => {
  // Draw the image into the canvas
  ctx.drawImage(image, 0, 0);
};
image.src = "cat.png";
```

Dieses zusammen verwendete Codebeispiel ergibt folgendes Ergebnis:

{{ EmbedLiveSample('An_example', '100%', 520) }}

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Fügen Sie als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs direkt am Canvas-Element selbst beschreibenden Text hinzu oder beinhaltet Ausweichinhalte, die innerhalb des öffnenden und schließenden Canvas-Tags platziert sind. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Ausweichinhalte sind es.

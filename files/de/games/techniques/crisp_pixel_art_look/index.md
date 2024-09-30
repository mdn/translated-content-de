---
title: Knackiger Pixelkunst-Look mit Bild-Rendering
slug: Games/Techniques/Crisp_pixel_art_look
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Dieser Artikel behandelt eine nützliche Technik, um Ihren Canvas/WebGL-Spielen einen knackigen Pixelkunst-Look zu verleihen, selbst auf hochauflösenden Monitoren.

## Das Konzept

Retro-[Pixelkunst](https://en.wikipedia.org/wiki/Pixel_art)-Ästhetik wird immer beliebter, besonders in [Indie-Spielen](https://en.wikipedia.org/wiki/Indie_game) oder [Game-Jam](https://en.wikipedia.org/wiki/Game_jam)-Einträgen. Da heutige Bildschirme Inhalte in hoher Auflösung anzeigen, gibt es das Problem, sicherzustellen, dass die Pixelkunst nicht unscharf wirkt. Entwickler haben die Grafiken manuell skaliert, sodass sie mit Blöcken dargestellt werden, die Pixel repräsentieren. Zwei Nachteile dieser Methode sind größere Dateigrößen und [Kompressionsartefakte](https://en.wikipedia.org/wiki/Compression_artifact).

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
      <td>4x Größe (skaliert mit einem Bildeditor)</td>
    </tr>
    <tr>
      <td>keine</td>
      <td>Algorithmus des Anbieters</td>
      <td>
        <a href="https://en.wikipedia.org/wiki/Nearest-neighbor_interpolation"
          >Nächster-Nachbar-Algorithmus</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Eine CSS-basierte Lösung

Die gute Nachricht ist, dass Sie CSS verwenden können, um das Hochskalieren automatisch durchzuführen, was nicht nur das Unschärfeproblem löst, sondern Ihnen auch erlaubt, die Bilder in ihrer ursprünglichen, kleineren Größe zu verwenden und dadurch Downloadzeit zu sparen. Auch benötigen einige Spieltechniken Algorithmen, die Bilder analysieren, was ebenfalls davon profitiert, mit kleineren Bildern zu arbeiten.

Die CSS-Eigenschaft, um dieses Skalieren zu erreichen, ist {{cssxref("image-rendering")}}. Die Schritte, um diesen Effekt zu erzielen, sind:

- Erstellen Sie ein {{htmlelement("canvas")}}-Element und setzen Sie seine `width`- und `height`-Attribute auf die ursprüngliche, kleinere Auflösung.
- Setzen Sie seine CSS-{{cssxref("width")}}- und {{cssxref("height")}}-Eigenschaften auf das 2-fache oder 4-fache des Werts der HTML-`width`- und `height`-Eigenschaften. Wenn das Canvas beispielsweise mit einer Breite von 128 Pixel erstellt wurde, setzen wir die CSS-`width` auf `512px`, wenn wir eine 4-fache Skalierung wünschen.
- Setzen Sie die CSS-Eigenschaft `image-rendering` des {{htmlelement("canvas")}}-Elements auf `pixelated`, was das Bild nicht unscharf macht. Es gibt auch die Werte `crisp-edges` und `-webkit-optimize-contrast`, die in einigen Browsern funktionieren. Schauen Sie sich den Artikel über {{cssxref("image-rendering")}} für weitere Informationen zu den Unterschieden zwischen diesen Werten an und welche Werte je nach Browser verwendet werden sollten.

## Ein Beispiel

Schauen wir uns ein Beispiel an. Das ursprüngliche Bild, das wir skalieren möchten, sieht so aus:

![Pixellierte Nachtszene einer Katze am Rand einer Klippe mit kleinen Herzen über ihrem Kopf, hinter ihr ein großer Vollmond. Vor schwarzem Hintergrund wird unten im Bild weißer Text angezeigt: verliebt in den Mond.](cat.png)

Hier ist etwas HTML, um ein einfaches Canvas zu erstellen:

```html
<canvas id="game" width="128" height="128">A cat</canvas>
```

CSS, um das Canvas zu dimensionieren und ein scharfes Bild zu rendern:

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

Zusammen ergeben diese Codes das folgende Ergebnis:

{{ EmbedLiveSample('An_example', '100%', 520) }}

> [!NOTE]
> Canvas-Inhalte sind für Bildschirmleser nicht zugänglich. Fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attributs direkt im Canvas-Element selbst hinzu oder fügen Sie Fallback-Inhalt hinzu, der innerhalb des öffnenden und schließenden Canvas-Tags platziert wird. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Fallback-Inhalte sind es.

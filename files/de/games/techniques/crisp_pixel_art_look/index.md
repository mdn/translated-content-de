---
title: Crisp-Pixel-Art-Look mit image-rendering
slug: Games/Techniques/Crisp_pixel_art_look
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Dieser Artikel behandelt eine nützliche Technik, um Ihren Canvas/WebGL-Spielen einen scharfen Pixel-Art-Look zu verleihen, selbst auf hochauflösenden Monitoren.

## Das Konzept

Retro-[Pixel-Art](https://en.wikipedia.org/wiki/Pixel_art)-Ästhetik wird immer beliebter, besonders in [Indie-Spielen](https://en.wikipedia.org/wiki/Indie_game) oder [Game-Jam](https://en.wikipedia.org/wiki/Game_jam)-Einreichungen. Da heutige Bildschirme Inhalte in hoher Auflösung darstellen, gibt es das Problem, sicherzustellen, dass die Pixel-Art nicht unscharf aussieht. Entwickler haben Grafiken manuell vergrößert, sodass sie mit Blöcken angezeigt werden, die Pixel repräsentieren. Zwei Nachteile dieser Methode sind größere Dateigrößen und [Kompressionsartefakte](https://en.wikipedia.org/wiki/Compression_artifact).

<table class="standard-table">
  <tbody>
    <tr>
      <td><img alt="kleiner pixelierter Mann" src="technique_original.png" /></td>
      <td><img alt="kleiner pixelierter Mann" src="technique_original.png" /></td>
      <td><img alt="größerer pixelierter Mann" src="technique_4x.png" /></td>
    </tr>
    <tr>
      <td>Originalgröße</td>
      <td>4x Größe</td>
      <td>4x Größe (skaliert mit einem Bildeditor)</td>
    </tr>
    <tr>
      <td>keine</td>
      <td>vom Anbieter gewährter Algorithmus</td>
      <td>
        <a href="https://en.wikipedia.org/wiki/Nearest-neighbor_interpolation"
          >nächster Nachbar-Algorithmus</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Eine CSS-basierte Lösung

Die gute Nachricht ist, dass Sie CSS verwenden können, um das Hochskalieren automatisch auszuführen, was nicht nur das Problem der Unschärfe löst, sondern Ihnen auch ermöglicht, die Bilder in ihrer ursprünglichen, kleineren Größe zu verwenden, was die Downloadzeit spart. Außerdem erfordern einige Spieltechniken Algorithmen, die Bilder analysieren, was ebenfalls davon profitiert, mit kleineren Bildern zu arbeiten.

Die CSS-Eigenschaft, um dieses Skalieren zu erreichen, ist {{cssxref("image-rendering")}}. Die Schritte, um diesen Effekt zu erzielen, sind:

- Erstellen Sie ein {{htmlelement("canvas")}}-Element und setzen Sie dessen `width`- und `height`-Attribute auf die ursprüngliche, kleinere Auflösung.
- Setzen Sie dessen CSS-{{cssxref("width")}}- und {{cssxref("height")}}-Eigenschaften auf das 2-fache oder 4-fache des HTML-`width` und `height`-Werts. Wenn das Canvas mit einer Breite von 128 Pixeln erstellt wurde, würden wir, falls wir eine 4-fache Skalierung wünschen, die CSS-`width` auf `512px` einstellen.
- Setzen Sie die `image-rendering`-CSS-Eigenschaft des {{htmlelement("canvas")}}-Elements auf `pixelated`, was das Bild nicht unscharf macht. Es gibt auch die Werte `crisp-edges` und `-webkit-optimize-contrast`, die in einigen Browsern funktionieren. Lesen Sie den Artikel zu {{cssxref("image-rendering")}}, um mehr über die Unterschiede zwischen diesen Werten zu erfahren und welche Werte je nach Browser verwendet werden sollten.

## Ein Beispiel

Schauen wir uns ein Beispiel an. Das ursprüngliche Bild, das wir hochskalieren möchten, sieht so aus:

![Pixelierte Nachtszenerie einer Katze am Rande einer Klippe mit kleinen Herzen über ihrem Kopf, hinter ihr ein großer Vollmond. Vor schwarzem Hintergrund wird am unteren Ende des Bildes in weißer Schrift angezeigt: verliebt in den Mond.](cat.png)

Hier ist etwas HTML, um ein einfaches Canvas zu erstellen:

```html
<canvas id="game" width="128" height="128">A cat</canvas>
```

CSS, um das Canvas zu dimensionieren und ein klares Bild darzustellen:

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

Dieser Code zusammen erzeugt folgendes Ergebnis:

{{ EmbedLiveSample('An_example', '100%', 520) }}

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attributs direkt am Canvas-Element hinzu oder fügen Sie Ersatzinhalte innerhalb des öffnenden und schließenden Canvas-Tags hinzu. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Ersatzinhalte schon.

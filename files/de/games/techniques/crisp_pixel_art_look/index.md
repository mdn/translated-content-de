---
title: Scharfer Pixel-Art-Look mit image-rendering
short-title: Bildrendering für Pixel-Art
slug: Games/Techniques/Crisp_pixel_art_look
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Dieser Artikel beschreibt eine nützliche Technik, um Ihren Canvas/WebGL-Spielen einen scharfen Pixel-Art-Look zu verleihen, selbst auf hochauflösenden Monitoren.

## Das Konzept

Retro-Ästhetik von [Pixel-Art](https://en.wikipedia.org/wiki/Pixel_art) wird immer beliebter, besonders in [Indie-Spielen](https://en.wikipedia.org/wiki/Indie_game) oder Beiträgen zu [Game Jams](https://en.wikipedia.org/wiki/Game_jam). Da heutige Bildschirme Inhalte in hoher Auflösung darstellen, gibt es das Problem, sicherzustellen, dass die Pixel-Art nicht unscharf aussieht. Entwickler haben Grafiken manuell hochskaliert, damit sie mit Blöcken dargestellt werden, die Pixel repräsentieren. Zwei Nachteile dieser Methode sind größere Dateigrößen und [Kompressionsartefakte](https://en.wikipedia.org/wiki/Compression_artifact).

<table class="standard-table">
  <tbody>
    <tr>
      <td><img alt="kleiner gepixelter Mann" src="technique_original.png" /></td>
      <td><img alt="kleiner gepixelter Mann" src="technique_original.png" /></td>
      <td><img alt="größerer gepixelter Mann" src="technique_4x.png" /></td>
    </tr>
    <tr>
      <td>Originalgröße</td>
      <td>4x Größe</td>
      <td>4x Größe (mit einem Bildbearbeitungsprogramm skaliert)</td>
    </tr>
    <tr>
      <td>kein</td>
      <td>Algorithmus des Anbieters</td>
      <td>
        <a href="https://en.wikipedia.org/wiki/Nearest-neighbor_interpolation"
          >Nearest-Neighbor-Algorithmus</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Eine CSS-basierte Lösung

Die gute Nachricht ist, dass Sie CSS verwenden können, um das Hochskalieren automatisch durchzuführen. Dies löst nicht nur das Unschärfeproblem, sondern ermöglicht es Ihnen auch, die Bilder in ihrer ursprünglichen, kleineren Größe zu verwenden, was die Downloadzeit spart. Auch einige Spieltechniken erfordern Algorithmen, die Bilder analysieren und ebenfalls davon profitieren, mit kleineren Bildern zu arbeiten.

Die CSS-Eigenschaft, um dieses Skalieren zu erreichen, ist {{cssxref("image-rendering")}}. Die Schritte zur Erreichung dieses Effekts sind:

- Erstellen Sie ein {{htmlelement("canvas")}}-Element und setzen Sie seine Attribute `width` und `height` auf die ursprüngliche, kleinere Auflösung.
- Setzen Sie seine CSS-Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} auf den 2-fachen oder 4-fachen Wert der HTML-Attribute `width` und `height`. Wenn das Canvas beispielsweise mit einer Breite von 128 Pixeln erstellt wurde, würden wir die CSS-`width` auf `512px` setzen, wenn wir eine 4-fache Skalierung wünschen.
- Setzen Sie die CSS-Eigenschaft `image-rendering` des {{htmlelement("canvas")}}-Elements auf `pixelated`, wodurch das Bild nicht unscharf wird. Es gibt auch die Werte `crisp-edges` und `-webkit-optimize-contrast`, die in einigen Browsern funktionieren. Lesen Sie den Artikel zu {{cssxref("image-rendering")}}, um mehr über die Unterschiede zwischen diesen Werten zu erfahren und welche Werte je nach Browser zu verwenden sind.

## Ein Beispiel

Schauen wir uns ein Beispiel an. Das Originalbild, das wir skalieren möchten, sieht folgendermaßen aus:

![Gepixelte Nachtszenerie einer Katze am Rand einer Klippe mit kleinen Herzen über ihrem Kopf, hinter ihr ein großer Vollmond. Vor einem schwarzen Hintergrund wird am unteren Ende des Bildes weißer Text angezeigt: verliebt in den Mond.](cat.png)

Hier ist etwas HTML, um ein einfaches Canvas zu erstellen:

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

Dieser zusammen verwendete Code erzeugt das folgende Ergebnis:

{{ EmbedLiveSample('An_example', '100%', 520) }}

> [!NOTE]
> Canvas-Inhalte sind für Bildschirmleser nicht zugänglich. Fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs direkt am Canvas-Element selbst hinzu oder fügen Sie Ersatzinhalte innerhalb des öffnenden und schließenden Canvas-Tags ein. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Ersatzinhalte sind es.

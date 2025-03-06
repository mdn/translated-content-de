---
title: Scharfer Pixel-Art-Look mit image-rendering
slug: Games/Techniques/Crisp_pixel_art_look
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{GamesSidebar}}

Dieser Artikel beschreibt eine nützliche Technik, um Ihren Canvas/WebGL-Spielen einen scharfen Pixel-Art-Look zu verleihen, selbst auf hochauflösenden Monitoren.

## Das Konzept

Retro-Ästhetik von [Pixel-Art](https://en.wikipedia.org/wiki/Pixel_art) wird immer beliebter, besonders in [Indie-Spielen](https://en.wikipedia.org/wiki/Indie_game) oder [Game Jam](https://en.wikipedia.org/wiki/Game_jam)-Beiträge. Da heutige Bildschirme Inhalte in hohen Auflösungen darstellen, gibt es ein Problem damit, sicherzustellen, dass die Pixel-Art nicht verschwommen aussieht. Entwickler haben Grafiken manuell vergrößert, damit sie mit Blöcken dargestellt werden, die Pixel repräsentieren. Zwei Nachteile dieser Methode sind größere Dateigrößen und [Kompressionsartefakte](https://en.wikipedia.org/wiki/Compression_artifact).

<table class="standard-table">
  <tbody>
    <tr>
      <td><img alt="kleiner verpixelter Mann" src="technique_original.png" /></td>
      <td><img alt="kleiner verpixelter Mann" src="technique_original.png" /></td>
      <td><img alt="größerer verpixelter Mann" src="technique_4x.png" /></td>
    </tr>
    <tr>
      <td>ursprüngliche Größe</td>
      <td>4x Größe</td>
      <td>4x Größe (mit einem Bildeditor skaliert)</td>
    </tr>
    <tr>
      <td>keine</td>
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

Die gute Nachricht ist, dass Sie CSS verwenden können, um das Hochskalieren automatisch durchzuführen. Dies löst nicht nur das Problem der Unschärfe, sondern ermöglicht es Ihnen auch, die Bilder in ihrer ursprünglichen, kleineren Größe zu verwenden, was die Downloadzeit spart. Einige Spieltechniken erfordern auch Algorithmen, die Bilder analysieren, was ebenfalls von der Arbeit mit kleineren Bildern profitiert.

Die CSS-Eigenschaft, um dieses Skalieren zu erreichen, ist {{cssxref("image-rendering")}}. Die Schritte, um diesen Effekt zu erzielen, sind:

- Erstellen Sie ein {{htmlelement("canvas")}}-Element und setzen Sie dessen `width`- und `height`-Attribute auf die ursprüngliche, kleinere Auflösung.
- Setzen Sie dessen CSS-{{cssxref("width")}}- und {{cssxref("height")}}-Eigenschaften auf das 2- oder 4-fache des Werts der HTML-`width` und `height`. Wenn das Canvas mit einer Breite von 128 Pixeln erstellt wurde, würden wir zum Beispiel die CSS-`width` auf `512px` setzen, wenn wir eine 4-fache Skalierung wünschen.
- Setzen Sie die `image-rendering`-CSS-Eigenschaft des {{htmlelement("canvas")}}-Elements auf `pixelated`, wodurch das Bild nicht verschwommen wird. Es gibt auch die Werte `crisp-edges` und `-webkit-optimize-contrast`, die in einigen Browsern funktionieren. Weitere Informationen zu den Unterschieden zwischen diesen Werten und welche Werte je nach Browser verwendet werden sollten, finden Sie im Artikel {{cssxref("image-rendering")}}.

## Ein Beispiel

Werfen wir einen Blick auf ein Beispiel. Das ursprüngliche Bild, das wir hochskalieren möchten, sieht so aus:

![Verpixelte Nachtszene einer Katze am Rand einer Klippe mit kleinen Herzen über ihrem Kopf, hinter ihr ein großer Vollmond. Mit einem schwarzen Hintergrund wird am unteren Rand des Bildes weiße Text dargestellt: in love with the moon.](cat.png)

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

Und etwas JavaScript, um das Canvas zu initialisieren und das Bild zu laden:

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

Dieser Code ergibt zusammen das folgende Ergebnis:

{{ EmbedLiveSample('An_example', '100%', 520) }}

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributs direkt im Canvas-Element selbst hinzu oder fügen Sie Ersatzzusatzinhalte innerhalb des öffnenden und schließenden Canvas-Tags ein. Canvas-Inhalte sind nicht Teil des DOMs, aber verschachtelte Ersatzzusatzinhalte schon.

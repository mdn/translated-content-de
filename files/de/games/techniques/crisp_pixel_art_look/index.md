---
title: Scharfer Pixel-Art-Look mit image-rendering
slug: Games/Techniques/Crisp_pixel_art_look
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Dieser Artikel behandelt eine nützliche Technik, um Ihren Canvas/WebGL-Spielen auch auf hochauflösenden Monitoren einen scharfen Pixel-Art-Look zu verleihen.

## Das Konzept

Retro-Ästhetiken von [Pixelkunst](https://en.wikipedia.org/wiki/Pixel_art) werden zunehmend populär, insbesondere in [Indie-Spielen](https://en.wikipedia.org/wiki/Indie_game) oder Beiträgen zu [Game Jams](https://en.wikipedia.org/wiki/Game_jam). Da heutige Bildschirme Inhalte in hoher Auflösung darstellen, gibt es das Problem, dass die Pixelkunst nicht verschwommen wirkt. Entwickler haben Grafiken manuell vergrößert, damit sie mit Blöcken dargestellt werden, die Pixel repräsentieren. Zwei Nachteile dieser Methode sind größere Dateigrößen und [Kompressionsartefakte](https://en.wikipedia.org/wiki/Compression_artifact).

<table class="standard-table">
  <tbody>
    <tr>
      <td><img alt="kleiner, pixelierter Mann" src="technique_original.png" /></td>
      <td><img alt="kleiner, pixelierter Mann" src="technique_original.png" /></td>
      <td><img alt="größerer, pixelierter Mann" src="technique_4x.png" /></td>
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
          >Nearest-Neighbor-Algorithmus</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Eine CSS-basierte Lösung

Die gute Nachricht ist, dass Sie CSS verwenden können, um die Skalierung automatisch vorzunehmen. Dies löst nicht nur das Problem der Unschärfe, sondern ermöglicht Ihnen auch, die Bilder in ihrer ursprünglichen, kleineren Größe zu verwenden und somit die Downloadzeit zu verkürzen. Außerdem benötigen einige Spieltechniken Algorithmen, die Bilder analysieren, was ebenfalls davon profitiert, mit kleineren Bildern zu arbeiten.

Die CSS-Eigenschaft, um diese Skalierung zu erreichen, ist {{cssxref("image-rendering")}}. Die Schritte, um diesen Effekt zu erzielen, sind:

- Erstellen Sie ein {{htmlelement("canvas")}}-Element und setzen Sie seine Attribute `width` und `height` auf die ursprüngliche, kleinere Auflösung.
- Setzen Sie die CSS-Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} auf das 2- oder 4-fache des HTML-`width` und `height`-Werts. Wenn das Canvas beispielsweise mit einer Breite von 128 Pixeln erstellt wurde, würden wir die CSS-`width` auf `512px` setzen, wenn wir eine 4-fache Skalierung wünschen.
- Setzen Sie die CSS-Eigenschaft `image-rendering` des {{htmlelement("canvas")}}-Elements auf `pixelated`, wodurch das Bild nicht verschwommen wirkt. Es gibt auch die Werte `crisp-edges` und `-webkit-optimize-contrast`, die in einigen Browsern funktionieren. Weitere Informationen zu den Unterschieden zwischen diesen Werten und den browserabhängigen Empfehlungen finden Sie im Artikel {{cssxref("image-rendering")}}.

## Ein Beispiel

Schauen wir uns ein Beispiel an. Das ursprüngliche Bild, das wir vergrößern möchten, sieht so aus:

![Pixelierte Nachtlandschaft einer Katze am Rand einer Klippe mit kleinen Herzen über ihrem Kopf, hinter ihr ein großer Vollmond. Mit einem schwarzen Hintergrund wird am unteren Rand des Bildes weißer Text angezeigt: verliebt in den Mond.](cat.png)

Hier ist ein HTML-Beispiel, um ein einfaches Canvas zu erstellen:

```html
<canvas id="game" width="128" height="128">Eine Katze</canvas>
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
// Holen Sie sich den Canvas-Kontext
const ctx = document.getElementById("game").getContext("2d");

// Bild laden
const image = new Image();
image.onload = () => {
  // Zeichnen Sie das Bild in das Canvas
  ctx.drawImage(image, 0, 0);
};
image.src = "cat.png";
```

Diese zusammen verwendeten Codebausteine erzeugen folgendes Ergebnis:

{{ EmbedLiveSample('An_example', '100%', 520) }}

> [!NOTE]
> Canvas-Inhalte sind für Screenreader nicht zugänglich. Fügen Sie beschreibenden Text als Wert des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attributs direkt auf dem Canvas-Element selbst hinzu oder fügen Sie Alternativ-Inhalte innerhalb des öffnenden und schließenden Canvas-Tags ein. Canvas-Inhalte sind nicht Teil des DOM, aber verschachtelte Alternativ-Inhalte sind es.

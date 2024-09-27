---
title: "Implementierung von quadratischen Tilemaps: Statische Karten"
slug: Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

In diesem Artikel wird erläutert, wie statische quadratische Tilemaps mit der [Canvas API](/de/docs/Web/API/Canvas_API) implementiert werden.

> [!NOTE]
> Beim Verfassen dieses Artikels gingen wir davon aus, dass der Leser grundlegende Kenntnisse über Canvas besitzt, z.B. wie man ein 2D-Canvas-Kontext erhält, Bilder lädt usw., was alles im [Canvas API Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) erklärt wird, sowie die grundlegenden Informationen, die in unserem Einführungsartikel zu [Tilemaps](/de/docs/Games/Techniques/Tilemaps) enthalten sind.

## Das Tile-Atlas

Ein Tilemap kann ein oder mehrere Atlanten — oder Spreadsheets — verwenden, die alle Kachelbilder enthalten. Dies ist der Atlas, den wir als Beispiel verwenden und der fünf verschiedene Kacheln enthält:

![Tiles verpackt in einem Atlas](tiles.png)

Um eine Kachel aus dem Atlas in das Canvas zu zeichnen, verwenden wir die [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)-Methode in einem Canvas-2D-Kontext. Wir müssen das Atlasbild, die Koordinaten und Dimensionen der Kachel im Atlas sowie die Zielkoordinaten und -größe angeben (eine andere Kachelgröße hier würde die Kachel skalieren.)

Um beispielsweise die Baumkachel, die dritte im Atlas, an den Bildschirmkoordinaten `(128, 320)` zu zeichnen, würden wir `drawImage()` mit diesen Werten aufrufen:

```js
context.drawImage(atlasImage, 192, 0, 64, 64, 128, 320, 64, 64);
```

Um Atlanten mit mehreren Zeilen und Spalten zu unterstützen, müssen Sie wissen, wie viele Zeilen und Spalten es gibt, um das Quell-`x` und `y` berechnen zu können.

## Die Datenstruktur der Tilemap

Um die Map-Daten zu speichern, können wir ein einfaches Objekt oder eine benutzerdefinierte Klasse verwenden. Der Einfachheit halber wurde im Beispielcode ein einfaches Objekt verwendet. Es enthält die grundlegenden Map-Eigenschaften:

- `cols`: Die Breite der Map, in Spalten.
- `rows`: Die Höhe der Map, in Zeilen.
- `tsize`: Die Kachelgröße, in Pixeln.
- `tiles`: Ein eindimensionales Array, das das visuelle Raster enthält.
- `getTile()`: Eine Hilfsmethode, die den Kachelindex an einer bestimmten Position abruft.

`tiles` enthält die tatsächlichen visuellen Map-Daten. Wir stellen die Kacheln mit Indizes dar, die den Kacheln in Abhängigkeit von ihrer Position im Atlas zugeordnet sind (z.B. `0` für die ganz links gelegene Kachel.) Wir müssen jedoch **leere Kacheln** berücksichtigen, da sie für die Implementierung von Layern entscheidend sind — leere Kacheln erhalten normalerweise einen negativen Indexwert, `0` oder einen Nullwert. In diesen Beispielen werden leere Kacheln durch den Index `0` dargestellt, daher verschieben wir die Indizes der Atlanten um eins (und somit wird die erste Kachel des Atlasses dem Index `1` zugewiesen, die zweite dem Index `2` usw.)

Die `getTile()`-Hilfsmethode gibt die Kachel zurück, die in der angegebenen Spalte und Zeile enthalten ist. Wenn `tiles` eine 2D-Matrix wäre, wäre der zurückgegebene Wert einfach `tiles[column][row]`. Es ist jedoch üblicher, das Raster mit einem eindimensionalen Array darzustellen. In diesem Fall müssen wir die Spalte und die Zeile auf einen Array-Index abbilden:

```js
const index = row * map.cols + column;
```

Abschließend könnte ein Beispiel für ein Tilemap-Objekt wie folgt aussehen. Dies zeigt eine 8 x 8 Karte mit Kacheln, die 64 x 64 Pixel groß sind:

```js
const map = {
  cols: 8,
  rows: 8,
  tsize: 64,
  tiles: [
    1, 3, 3, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1,
    1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1,
  ],
  getTile(col, row) {
    return this.tiles[row * map.cols + col];
  },
};
```

## Rendern der Map

Wir können die Map rendern, indem wir über ihre Spalten und Zeilen iterieren. Dieses Snippet geht von den folgenden Definitionen aus:

- `context`: Ein 2D-Canvas-Kontext.
- `tileAtlas`: Ein Bildobjekt, das den Tile-Atlas enthält.
- `map`: Das oben besprochene Tilemap-Objekt.

```js
for (let c = 0; c < map.cols; c++) {
  for (let r = 0; r < map.rows; r++) {
    const tile = map.getTile(c, r);
    if (tile !== 0) {
      // 0 => empty tile
      context.drawImage(
        tileAtlas, // image
        (tile - 1) * map.tsize, // source x
        0, // source y
        map.tsize, // source width
        map.tsize, // source height
        c * map.tsize, // target x
        r * map.tsize, // target y
        map.tsize, // target width
        map.tsize, // target height
      );
    }
  }
}
```

## Demo

Unsere Demo zur Implementierung statischer Tilemaps fasst den obigen Code zusammen, um zu zeigen, wie eine Implementierung dieser Map aussieht. Sie können eine [Live-Demo](https://mozdevs.github.io/gamedev-js-tiles/square/no-scroll.html) ansehen und den [vollständigen Quellcode](https://github.com/mozdevs/gamedev-js-tiles) abrufen.

[![Luftaufnahme eines Felds mit Bäumen, Gras und Boden, bestehend aus wiederholten Abschnitten der Tilemap.](no-scroll.png)](https://mozdevs.github.io/gamedev-js-tiles/square/no-scroll.html)

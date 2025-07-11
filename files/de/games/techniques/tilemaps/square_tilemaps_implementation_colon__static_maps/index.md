---
title: "Implementierung von quadratischen Tilemaps: Statische Karten"
slug: Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Dieser Artikel behandelt die Implementierung statischer quadratischer Tilemaps mit der [Canvas-API](/de/docs/Web/API/Canvas_API).

> [!NOTE]
> Beim Verfassen dieses Artikels sind wir von Vorkenntnissen der Leser über grundlegende Canvas-Funktionen ausgegangen, z. B. wie man einen 2D-Canvas-Kontext erhält, Bilder lädt usw., was alles im [Canvas-API-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) erklärt wird, sowie von den grundlegenden Informationen, die in unserem Einführungsartikel zu [Tilemaps](/de/docs/Games/Techniques/Tilemaps) enthalten sind.

## Das Tile-Atlas

Ein Tilemap kann ein oder mehrere Atlanten — oder Spritesheets — verwenden, die alle Kachelbilder enthalten. Dies ist das Atlas, das wir als Beispiel verwenden werden, und es enthält fünf verschiedene Kacheln:

![Kacheln verpackt in einem Atlas](tiles.png)

Um eine Kachel vom Atlas auf die Leinwand zu zeichnen, verwenden wir die Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) in einem 2D-Canvas-Kontext. Wir müssen das Atlasbild, die Koordinaten und Abmessungen der Kachel innerhalb des Atlasses sowie die Zielkoordinaten und -größe angeben (eine andere Kachelgröße hier würde die Kachel skalieren).

Um beispielsweise die Baumkachel, die dritte im Atlas, an den Bildschirmkoordinaten `(128, 320)` zu zeichnen, würden wir `drawImage()` mit diesen Werten aufrufen:

```js
context.drawImage(atlasImage, 192, 0, 64, 64, 128, 320, 64, 64);
```

Um Atlanten zu unterstützen, die mehrere Zeilen und Spalten haben, müssten Sie wissen, wie viele Zeilen und Spalten es gibt, um die Quell-`x` und `y` zu berechnen.

## Die Datenstruktur der Tilemap

Um diese Kartendaten zu speichern, können wir ein einfaches Objekt oder eine benutzerdefinierte Klasse verwenden. Der Einfachheit halber wurde im Beispielcode ein einfaches Objekt verwendet. Es enthält die grundlegenden Eigenschaften der Karte:

- `cols`: Die Breite der Karte in Spalten.
- `rows`: Die Höhe der Karte in Zeilen.
- `tsize`: Die Kachelgröße in Pixeln.
- `tiles`: Ein eindimensionales Array, das das visuelle Raster enthält.
- `getTile()`: Eine Hilfsmethode, die den Kachelindex an einer bestimmten Position zurückgibt.

`tiles` enthält die eigentlichen visuellen Kartendaten. Wir stellen die Kacheln durch Indizes dar, die den Kacheln entsprechend ihrer Position im Atlas zugewiesen werden (z. B. `0` für die am weitesten links stehende Kachel). Allerdings müssen wir **leere Kacheln** berücksichtigen, da sie entscheidend für die Implementierung von Layern sind — leere Kacheln werden üblicherweise mit einem negativen Indexwert, `0` oder einem Nullwert zugewiesen. In diesen Beispielen werden leere Kacheln durch den Index `0` dargestellt, daher verschieben wir die Indizes der Atlanten um eins (und damit wird der ersten Kachel des Atlasses der Index `1` zugewiesen, der zweiten Index `2` usw.)

Die `getTile()`-Hilfsmethode gibt die Kachel zurück, die sich in der angegebenen Spalte und Zeile befindet. Wenn `tiles` eine 2D-Matrix wäre, dann wäre der zurückgegebene Wert einfach `tiles[column][row]`. Allerdings ist es meist üblicher, das Raster mit einem eindimensionalen Array darzustellen. In diesem Fall müssen wir die Spalte und Zeile auf einen Array-Index abbilden:

```js
const index = row * map.cols + column;
```

Zusammengefasst könnte ein Beispiel für ein Tilemap-Objekt wie folgt aussehen. Es zeigt eine 8 x 8-Karte mit Kacheln von 64 x 64 Pixeln Größe:

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

## Rendering der Karte

Wir können die Karte rendern, indem wir über ihre Spalten und Zeilen iterieren. Dieses Code-Schnipsel geht von den folgenden Definitionen aus:

- `context`: Ein 2D-Canvas-Kontext.
- `tileAtlas`: Ein Bildobjekt, das das Kachelatlas enthält.
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

Unsere Demo zur Implementierung statischer Tilemaps fasst den obigen Code zusammen, um zu zeigen, wie eine Implementierung dieser Karte aussieht. Sie können sich eine [Live-Demo ansehen](https://mozdevs.github.io/gamedev-js-tiles/square/no-scroll.html) und den [vollständigen Source-Code herunterladen](https://github.com/mozdevs/gamedev-js-tiles).

[![Luftansicht eines Feldes mit Bäumen, Gras und Boden aus wiederholten Abschnitten der Tilemap.](no-scroll.png)](https://mozdevs.github.io/gamedev-js-tiles/square/no-scroll.html)

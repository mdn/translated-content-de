---
title: "Implementierung quadratischer Kachelkarten: Statische Karten"
slug: Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{GamesSidebar}}

Dieser Artikel behandelt, wie man statische quadratische Kachelkarten mit der [Canvas-API](/de/docs/Web/API/Canvas_API) implementiert.

> [!NOTE]
> Beim Schreiben dieses Artikels gingen wir von Grundkenntnissen im Umgang mit dem Canvas aus, wie z.B. dem Abrufen eines 2D-Canvas-Kontexts, dem Laden von Bildern usw., was alles im [Canvas-API-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) erklärt wird. Außerdem setzen wir grundlegende Informationen voraus, die in unserem Einführungsartikel zu [Kachelkarten](/de/docs/Games/Techniques/Tilemaps) enthalten sind.

## Das Kachel-Atlas

Eine Kachelkarte kann ein oder mehrere Atlanten — oder Spritesheets — verwenden, die alle Kachelbilder enthalten. Dies ist der Atlas, den wir als Beispiel verwenden werden, er enthält fünf verschiedene Kacheln:

![Kacheln in einem Atlas verpackt](tiles.png)

Um eine Kachel aus dem Atlas in das Canvas zu zeichnen, verwenden wir die Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) in einem 2D-Canvas-Kontext. Wir müssen das Atlas-Bild, die Koordinaten und Dimensionen der Kachel innerhalb des Atlas sowie die Zielkoordinaten und -größe angeben (eine andere Kachelgröße hier würde die Kachel skalieren).

Um zum Beispiel die Baumkachel, die die dritte im Atlas ist, auf den Bildschirmkoordinaten `(128, 320)` zu zeichnen, würden wir `drawImage()` mit diesen Werten aufrufen:

```js
context.drawImage(atlasImage, 192, 0, 64, 64, 128, 320, 64, 64);
```

Um Atlanten mit mehreren Zeilen und Spalten zu unterstützen, müssen Sie wissen, wie viele Zeilen und Spalten es gibt, um die Quell-`x` und `y` berechnen zu können.

## Die Kachelkarten-Datenstruktur

Um diese Kartendaten zu speichern, können wir ein einfaches Objekt oder eine benutzerdefinierte Klasse verwenden. Der Einfachheit halber wurde im Beispielcode ein einfaches Objekt verwendet. Es enthält die grundlegenden Karten-Eigenschaften:

- `cols`: Die Breite der Karte in Spalten.
- `rows`: Die Höhe der Karte in Zeilen.
- `tsize`: Die Kachelgröße in Pixeln.
- `tiles`: Ein eindimensionales Array, das das visuelle Raster enthält.
- `getTile()`: Eine Hilfsmethode, die den Kachelindex an einer bestimmten Position erhält.

`tiles` enthält die tatsächlichen visuellen Kartendaten. Wir repräsentieren die Kacheln mit Indizes, die den Kacheln abhängig von ihrer Position im Atlas zugewiesen sind (z.B. `0` für die linkeste Kachel). Wir müssen jedoch **leere Kacheln** berücksichtigen, da sie für die Implementierung von Schichten entscheidend sind — leere Kacheln werden normalerweise mit einem negativen Indexwert, `0` oder einem null-Wert zugewiesen. In diesen Beispielen werden leere Kacheln durch Index `0` dargestellt, daher werden wir die Indizes der Atlanten um eins verschieben (und daher wird die erste Kachel des Atlas mit Index `1` zugewiesen, die zweite mit Index `2` usw.)

Die `getTile()`-Hilfsmethode gibt die Kachel zurück, die sich in der angegebenen Spalte und Zeile befindet. Wenn `tiles` eine 2D-Matrix wäre, dann wäre der zurückgegebene Wert einfach `tiles[column][row]`. Es ist jedoch üblich, das Raster mit einem eindimensionalen Array darzustellen. In diesem Fall müssen wir die Spalte und Zeile auf einen Array-Index abbilden:

```js
const index = row * map.cols + column;
```

Zusammengefasst könnte ein Beispielobjekt für eine Kachelkarte wie folgt aussehen. Dies zeigt eine 8 x 8 Karte mit Kacheln der Größe 64 x 64 Pixel:

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

## Darstellung der Karte

Wir können die Karte rendern, indem wir über ihre Spalten und Zeilen iterieren. Dieses Snippet geht von den folgenden Definitionen aus:

- `context`: Ein 2D-Canvas-Kontext.
- `tileAtlas`: Ein Bildobjekt, das den Kachel-Atlas enthält.
- `map`: Das oben diskutierte Kachelkarten-Objekt.

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

Unsere Demo zur Implementierung einer statischen Kachelkarte fasst den obigen Code zusammen, um zu zeigen, wie eine Implementierung dieser Karte aussieht. Sie können eine [Live-Demo ansehen](https://mozdevs.github.io/gamedev-js-tiles/square/no-scroll.html) und den [vollständigen Quellcode abrufen](https://github.com/mozdevs/gamedev-js-tiles).

[![Luftaufnahme eines Feldes mit Bäumen, Gras und Boden aus wiederholten Abschnitten der Kachelkarte.](no-scroll.png)](https://mozdevs.github.io/gamedev-js-tiles/square/no-scroll.html)

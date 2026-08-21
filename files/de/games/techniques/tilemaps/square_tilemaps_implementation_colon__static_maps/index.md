---
title: "Implementierung von quadratischen Kachelkarten: Statische Karten"
slug: Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

Dieser Artikel behandelt die Implementierung statischer quadratischer Kachelkarten unter Verwendung der [Canvas API](/de/docs/Web/API/Canvas_API).

> [!NOTE]
> Beim Verfassen dieses Artikels gehen wir davon aus, dass Leser bereits Grundlagen zu Canvas kennen, z. B., wie man einen 2D-Canvas-Kontext erhält, Bilder lädt usw., was alles im [Canvas API Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) erklärt wird, sowie die grundlegenden Informationen, die in unserem Einführungsartikel zu [Kachelkarten](/de/docs/Games/Techniques/Tilemaps) enthalten sind.

## Der Kachel-Atlas

Eine Kachelkarte kann einen oder mehrere Atlanten oder Spritesheets verwenden, die alle Kachelbilder enthalten. Dies ist der Atlas, den wir als Beispiel verwenden werden und der fünf verschiedene Kacheln zeigt:

![Kacheln in einem Atlas verpackt](tiles.png)

Um eine Kachel aus dem Atlas auf den Canvas zu zeichnen, nutzen wir die Methode [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) in einem 2D-Canvas-Kontext. Wir müssen das Atlasbild, die Koordinaten und Abmessungen der Kachel innerhalb des Atlas sowie die Zielkoordinaten und die Größe angeben (eine unterschiedliche Kachelgröße würde die Kachel skalieren).

Um beispielsweise die Baumkachel zu zeichnen, die die dritte im Atlas ist, an den Bildschirmkoordinaten `(128, 320)`, würden wir `drawImage()` mit diesen Werten aufrufen:

```js
context.drawImage(atlasImage, 192, 0, 64, 64, 128, 320, 64, 64);
```

Um Atlanten mit mehreren Reihen und Spalten zu unterstützen, müssten Sie wissen, wie viele Reihen und Spalten es gibt, um die Quell-x und -y zu berechnen.

## Die Datenstruktur der Kachelkarte

Um die Kartendaten zu speichern, können wir ein einfaches Objekt oder eine benutzerdefinierte Klasse verwenden. Zur Vereinfachung wurde im Beispielsatz ein einfaches Objekt verwendet. Es enthält die grundlegenden Karteneigenschaften:

- `cols`: Die Breite der Karte in Spalten.
- `rows`: Die Höhe der Karte in Reihen.
- `tsize`: Die Kachelgröße in Pixeln.
- `tiles`: Ein eindimensionales Array, das das visuelle Raster enthält.
- `getTile()`: Eine Hilfsmethode, die den Kachelindex an einer bestimmten Position erhält.

`tiles` enthält die tatsächlich visuellen Kartendaten. Wir repräsentieren die Kacheln mit Indizes, die den Kacheln in Abhängigkeit von ihrer Position im Atlas zugeordnet werden (z. B. `0` für die ganz linke Kachel). Allerdings müssen wir **leere Kacheln** berücksichtigen, da sie für die Implementierung von Schichten entscheidend sind — leeren Kacheln wird normalerweise ein negativer Indexwert, `0` oder ein Nullwert zugewiesen. In diesen Beispielen werden leere Kacheln durch den Index `0` dargestellt, sodass wir die Indizes der Atlanten um eins verschieben (und somit die erste Kachel des Atlas den Index `1`, die zweite den Index `2` usw. erhält).

Die Hilfsmethode `getTile()` gibt die Kachel an der angegebenen Spalte und Reihe zurück. Wenn `tiles` eine 2D-Matrix wäre, dann wäre der zurückgegebene Wert einfach `tiles[column][row]`. Es ist jedoch üblicher, das Raster mit einem eindimensionalen Array darzustellen. In diesem Fall müssen wir die Spalte und Reihe in einen Array-Index umwandeln:

```js
const index = row * map.cols + column;
```

Zusammenfassend könnte ein Beispiel eines Kachelkarten-Objekts wie folgt aussehen. Dies zeigt eine 8 x 8 Karte mit Kacheln in der Größe von 64 x 64 Pixeln:

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

Wir können die Karte rendern, indem wir über ihre Spalten und Reihen iterieren. Dieses Snippet nimmt folgende Definitionen an:

- `context`: Ein 2D-Canvas-Kontext.
- `tileAtlas`: Ein Bildobjekt, das den Kachel-Atlas enthält.
- `map`: Das zuvor besprochene Kachelkarten-Objekt.

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

Unsere Demo zur Implementierung statischer Kachelkarten verbindet den obigen Code, um zu zeigen, wie eine Implementierung dieser Karte aussieht. Sie können eine [Live-Demo](https://mozdevs.github.io/gamedev-js-tiles/square/no-scroll.html) sehen und den [vollständigen Quellcode](https://github.com/mozdevs/gamedev-js-tiles) abrufen.

[![Luftaufnahme eines Feldes mit Bäumen, Gras und Boden, die aus wiederholten Abschnitten der Kachelkarte bestehen.](no-scroll.png)](https://mozdevs.github.io/gamedev-js-tiles/square/no-scroll.html)

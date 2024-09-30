---
title: "Quadratische Kachelkarten-Implementierung: Statische Karten"
slug: Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Dieser Artikel behandelt, wie statische quadratische Kachelkarten mit der [Canvas API](/de/docs/Web/API/Canvas_API) implementiert werden.

> [!NOTE]
> Beim Verfassen dieses Artikels gingen wir davon aus, dass der Leser bereits Grundlagen der Canvas-Technologie kennt, wie das Abrufen eines 2D-Canvas-Kontexts, das Laden von Bildern usw., die alle im [Canvas API Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) erklärt werden. Ebenso wird grundlegende Information in unserem Einführungstext zu [Kachelkarten](/de/docs/Games/Techniques/Tilemaps) behandelt.

## Das Kachel-Atlas

Ein Kachelkarte kann einen oder mehrere Atlanten verwenden — oder Spritesheets — die alle Kachelbilder enthalten. Dies ist der Atlas, den wir als Beispiel verwenden werden, der fünf verschiedene Kacheln enthält:

![Kacheln in einem Atlas verpackt](tiles.png)

Um eine Kachel aus dem Atlas in das Canvas zu zeichnen, nutzen wir die [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) Methode in einem 2D-Canvas-Kontext. Wir müssen das Bild des Atlas, die Koordinaten und Abmessungen der Kachel im Atlas sowie die Zielkoordinaten und Größe angeben (eine unterschiedliche Kachelgröße hier würde die Kachel skalieren.)

Um beispielsweise die Baumkachel, die dritte im Atlas, an den Bildschirmkoordinaten `(128, 320)` zu zeichnen, würden wir `drawImage()` mit folgenden Werten aufrufen:

```js
context.drawImage(atlasImage, 192, 0, 64, 64, 128, 320, 64, 64);
```

Um Atlanten mit mehreren Zeilen und Spalten zu unterstützen, müssen Sie wissen, wie viele Zeilen und Spalten es gibt, um `x` und `y` der Quelle berechnen zu können.

## Die Kachelkarten-Datenstruktur

Um diese Kartendaten zu speichern, können wir ein einfaches Objekt oder eine benutzerdefinierte Klasse verwenden. Der Einfachheit halber wurde im Beispielcode ein einfaches Objekt verwendet. Es enthält die grundlegenden Karteneigenschaften:

- `cols`: Die Breite der Karte in Spalten.
- `rows`: Die Höhe der Karte in Zeilen.
- `tsize`: Die Kachelgröße in Pixeln.
- `tiles`: Ein eindimensionales Array, das das visuelle Raster enthält.
- `getTile()`: Eine Hilfsmethode, die den Kachelindex an einer bestimmten Position ermittelt.

`tiles` enthält die tatsächlichen visuellen Kartendaten. Wir repräsentieren die Kacheln mit Indizes, die den Kacheln basierend auf ihrer Position im Atlas zugeordnet sind (z.B. `0` für die ganz links gelegene Kachel). Wir müssen jedoch **leeren Kacheln** beachten, da sie entscheidend für die Implementierung von Schichten sind — leere Kacheln erhalten üblicherweise einen negativen Indexwert, `0` oder einen Nullwert. In diesen Beispielen werden leere Kacheln durch den Index `0` repräsentiert, daher verschieben wir die Indizes der Atlanten um eins (und somit wird die erste Kachel des Atlas dem Index `1` zugewiesen, die zweite dem Index `2` usw.)

Die `getTile()`-Hilfsmethode gibt die Kachel an der angegebenen Spalte und Zeile zurück. Wenn `tiles` eine 2D-Matrix wäre, würde der zurückgegebene Wert einfach `tiles[column][row]` sein. Es ist jedoch üblicher, das Raster mit einem eindimensionalen Array darzustellen. In diesem Fall müssen wir die Spalte und Zeile auf einen Array-Index abbilden:

```js
const index = row * map.cols + column;
```

Zusammenfassend könnte ein Beispiel eines Kachelkarten-Objekts wie folgt aussehen. Dies zeigt eine 8 x 8 Karte mit Kacheln von 64 x 64 Pixeln:

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

Wir können die Karte rendern, indem wir ihre Spalten und Zeilen durchlaufen. Dieser Ausschnitt geht von den folgenden Definitionen aus:

- `context`: Ein 2D-Canvas-Kontext.
- `tileAtlas`: Ein Bildobjekt, das den Kachel-Atlas enthält.
- `map`: Das oben besprochene Kachelkarten-Objekt.

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

Unser Demo zur Implementierung statischer Kachelkarten fasst den obigen Code zusammen, um zu zeigen, wie eine Implementierung dieser Karte aussieht. Sie können eine [Live-Demo](https://mozdevs.github.io/gamedev-js-tiles/square/no-scroll.html) sehen und den [vollständigen Quellcode](https://github.com/mozdevs/gamedev-js-tiles) abrufen.

[![Luftaufnahme eines Feldes mit Bäumen, Gras und Boden, die aus wiederholten Abschnitten der Kachelkarte bestehen.](no-scroll.png)](https://mozdevs.github.io/gamedev-js-tiles/square/no-scroll.html)

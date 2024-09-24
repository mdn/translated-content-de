---
title: "Rechteckige Tilemaps-Implementierung: Statische Karten"
slug: Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Dieser Artikel behandelt die Implementierung von statischen quadratischen Tilemaps unter Verwendung der [Canvas API](/de/docs/Web/API/Canvas_API).

> [!NOTE]
> Beim Schreiben dieses Artikels gingen wir davon aus, dass die Leser bereits grundlegende Kenntnisse über Canvas besitzen, wie z. B. das Beziehen eines 2D-Canvas-Kontextes, das Laden von Bildern usw., was alles im [Canvas API-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) erklärt wird, sowie die grundlegenden Informationen, die in unserem Einführungsartikel [Tilemaps](/de/docs/Games/Techniques/Tilemaps) enthalten sind.

## Das Kachel-Atlas

Ein Tilemap kann einen oder mehrere Atlanten — oder Spritesheets — verwenden, die alle Kachelbilder enthalten. Dies ist der Atlas, den wir als Beispiel verwenden werden und der fünf verschiedene Kacheln zeigt:

![Kacheln im Atlas verpackt](tiles.png)

Um eine Kachel aus dem Atlas auf die Leinwand zu zeichnen, nutzen wir die {{domxref("CanvasRenderingContext2D.drawImage","drawImage()")}}-Methode in einem 2D-Canvas-Kontext. Wir müssen das Atlasbild, die Koordinaten und Abmessungen der Kachel im Atlas sowie die Zielkoordinaten und -größe angeben (eine unterschiedliche Kachelgröße kann die Kachel skalieren).

Zum Beispiel, um die Baumkachel, die die dritte im Atlas ist, an den Bildschirmkoordinaten `(128, 320)` zu zeichnen, würden wir `drawImage()` mit diesen Werten aufrufen:

```js
context.drawImage(atlasImage, 192, 0, 64, 64, 128, 320, 64, 64);
```

Um Atlanten mit mehreren Reihen und Spalten zu unterstützen, müssten Sie wissen, wie viele Reihen und Spalten vorhanden sind, um die Quellkoordinaten `x` und `y` berechnen zu können.

## Die Tilemap-Datenstruktur

Um diese Kartendaten zu speichern, können wir ein einfaches Objekt oder eine benutzerdefinierte Klasse verwenden. Der Einfachheit halber wurde im Beispielcode ein einfaches Objekt verwendet. Es enthält die grundlegenden Karteneigenschaften:

- `cols`: Die Breite der Karte, in Spalten.
- `rows`: Die Höhe der Karte, in Zeilen.
- `tsize`: Die Kachelgröße, in Pixeln.
- `tiles`: Ein eindimensionales Array, welches das visuelle Raster enthält.
- `getTile()`: Eine Hilfsmethode, die den Kachelindex an einer bestimmten Position ermittelt.

`tiles` enthält die tatsächlichen visuellen Kartendaten. Wir stellen die Kacheln mit Indizes dar, die den Kacheln abhängig von ihrer Position im Atlas zugewiesen werden (z. B. `0` für die linkeste Kachel). Wir müssen jedoch **leere Kacheln** berücksichtigen, da sie entscheidend für die Implementierung von Ebenen sind — leeren Kacheln wird normalerweise ein negativer Indexwert, `0` oder ein Nullwert zugewiesen. In diesen Beispielen werden leere Kacheln durch den Index `0` dargestellt, sodass wir die Indizes der Atlanten um eins verschieben (und somit wird die erste Kachel des Atlanten der Index `1` zugewiesen, die zweite der Index `2` usw.).

Die Hilfsmethode `getTile()` gibt die Kachel zurück, die sich an der angegebenen Spalte und Zeile befindet. Wenn `tiles` eine 2D-Matrix wäre, würde der zurückgegebene Wert einfach `tiles[column][row]` sein. Es ist jedoch üblicher, das Raster mit einem eindimensionalen Array zu repräsentieren. In diesem Fall müssen wir Spalte und Zeile einem Array-Index zuordnen:

```js
const index = row * map.cols + column;
```

Zusammengefasst könnte ein Beispiel für ein Tilemap-Objekt wie folgt aussehen. Es enthält eine 8 x 8 Karte mit Kacheln, die 64 x 64 Pixel groß sind:

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

## Die Karte rendern

Wir können die Karte rendern, indem wir über ihre Spalten und Zeilen iterieren. Dieses Snippet setzt die folgenden Definitionen voraus:

- `context`: Ein 2D-Canvas-Kontext.
- `tileAtlas`: Ein Bildobjekt, das den Kachel-Atlas enthält.
- `map`: Das oben besprochene Tilemap-Objekt.

```js
for (let c = 0; c < map.cols; c++) {
  for (let r = 0; r < map.rows; r++) {
    const tile = map.getTile(c, r);
    if (tile !== 0) {
      // 0 => leere Kachel
      context.drawImage(
        tileAtlas, // Bild
        (tile - 1) * map.tsize, // Quell-x
        0, // Quell-y
        map.tsize, // Quellbreite
        map.tsize, // Quellhöhe
        c * map.tsize, // Ziel-x
        r * map.tsize, // Ziel-y
        map.tsize, // Zielbreite
        map.tsize, // Zielhöhe
      );
    }
  }
}
```

## Demo

Unsere Demo zur Implementierung statischer Tilemaps fasst den obigen Code zusammen, um zu zeigen, wie eine Implementierung dieser Karte aussieht. Sie können eine [Live-Demo](https://mozdevs.github.io/gamedev-js-tiles/square/no-scroll.html) sehen und den [vollständigen Quellcode](https://github.com/mozdevs/gamedev-js-tiles) abrufen.

[![Luftaufnahme eines Feldes mit Bäumen, Gras und Erde, die aus wiederholten Abschnitten der Tilemap bestehen.](no-scroll.png)](https://mozdevs.github.io/gamedev-js-tiles/square/no-scroll.html)

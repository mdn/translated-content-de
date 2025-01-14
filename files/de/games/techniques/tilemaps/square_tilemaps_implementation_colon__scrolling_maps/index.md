---
title: "Implementierung von quadratischen Kachelkarten: Scrollbare Karten"
slug: Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps
l10n:
  sourceCommit: 93eda4eb1c5fcc5e6f2bdb0d1da0b56a0ab4215f
---

{{GamesSidebar}}

Dieser Artikel behandelt, wie man scrollbare quadratische Kachelkarten mit der [Canvas API](/de/docs/Web/API/Canvas_API) implementiert.

> [!NOTE]
> Beim Verfassen dieses Artikels gehen wir davon aus, dass der Leser mit den Grundlagen der Canvas-Technik, wie dem Abrufen eines 2D-Canvas-Kontexts und dem Laden von Bildern, vertraut ist. Diese Grundlagen werden im [Canvas API Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) behandelt. Außerdem sollte das Basiswissen aus unserem Einführungsartikel zu [Kachelkarten](/de/docs/Games/Techniques/Tilemaps) bekannt sein. Dieser Artikel baut auch auf der [Implementierung statischer quadratischer Kachelkarten](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps) auf — dieser sollte ebenfalls gelesen werden, falls noch nicht geschehen.

## Die Kamera

Die Kamera ist ein Objekt, das Informationen darüber enthält, welcher Abschnitt der Spielwelt oder des Levels derzeit angezeigt wird. Kameras können entweder frei sein, vom Spieler kontrolliert (wie in Strategiespielen), oder einem Objekt folgen (wie dem Hauptcharakter in Plattformspielen).

Unabhängig vom Typ der Kamera benötigen wir immer Informationen über ihre aktuelle Position, die Größe des Viewports usw. In dem mit diesem Artikel bereitgestellten [Demo](https://mozdevs.github.io/gamedev-js-tiles/square/scroll.html) sind dies die Parameter der Kamera:

- `x` und `y`: Die aktuelle Position der Kamera. In dieser Implementierung gehen wir davon aus, dass `(x,y)` auf die obere linke Ecke des sichtbaren Bereichs der Karte verweist.
- `width` und `height`: Die Größe des Kamera-Viewports.
- `maxX` und `maxY`: Das Limit für die Kameraposition — Die untere Grenze ist fast immer `(0,0)`, und in diesem Fall ist das obere Limit gleich der Größe der Welt minus der Größe des Kamera-Viewports.

## Rendering der Karte

Es gibt zwei Hauptunterschiede zwischen dem Rendering von scrollbaren Karten und statischen Karten:

- **Teilweise Kacheln könnten angezeigt werden**. Bei statischen Karten beginnt das Rendering gewöhnlich in der oberen linken Ecke einer Kachel, die sich in der oberen linken Ecke eines Viewports befindet. Beim Rendering von scrollbaren Kachelkarten wird die erste Kachel oft abgeschnitten.

- **Nur ein Ausschnitt der Karte wird gerendert**. Wenn die Karte größer als der Viewport ist, können wir offensichtlich nur einen Teil davon gleichzeitig anzeigen, während nicht scrollbare Karten normalerweise vollständig gerendert werden.

Um diese Probleme zu handhaben, müssen wir den Rendering-Algorithmus leicht modifizieren. Stellen wir uns vor, dass die Kamera auf `(5,10)` zeigt. Das bedeutet, dass die erste Kachel `0x0` wäre. Im Demo-Code wird der Startpunkt in `startCol` und `startRow` gespeichert. Es ist auch nützlich, die letzte zu rendernde Kachel vorab zu berechnen.

```js
const startCol = Math.floor(this.camera.x / map.tsize);
const endCol = startCol + this.camera.width / map.tsize;
const startRow = Math.floor(this.camera.y / map.tsize);
const endRow = startRow + this.camera.height / map.tsize;
```

Sobald wir die erste Kachel haben, müssen wir berechnen, wie stark ihr Rendering (und damit das Rendering der anderen Kacheln) verschoben wird. Da die Kamera auf `(5, 10)` zeigt, wissen wir, dass die erste Kachel um `(-5,-10)` Pixel verschoben werden sollte. Im Demo wird die Verschiebungsmenge in den Variablen `offsetX` und `offsetY` gespeichert.

```js
const offsetX = -this.camera.x + startCol * map.tsize;
const offsetY = -this.camera.y + startRow * map.tsize;
```

Mit diesen Werten ist die Schleife, die die Karte rendert, derjenigen ähnlich, die für das Rendering statischer Kachelkarten verwendet wird. Der Hauptunterschied besteht darin, dass wir die Werte `offsetX` und `offsetY` zu den Zielkoordinaten `x` und `y` hinzufügen und diese Werte gerundet werden, um Artefakte zu vermeiden, die durch das Zeigen der Kamera auf Positionen mit Gleitkommazahlen entstehen würden.

```js
for (let c = startCol; c <= endCol; c++) {
  for (let r = startRow; r <= endRow; r++) {
    const tile = map.getTile(c, r);
    const x = (c - startCol) * map.tsize + offsetX;
    const y = (r - startRow) * map.tsize + offsetY;
    if (tile !== 0) {
      // 0 => empty tile
      this.ctx.drawImage(
        this.tileAtlas, // image
        (tile - 1) * map.tsize, // source x
        0, // source y
        map.tsize, // source width
        map.tsize, // source height
        Math.round(x), // target x
        Math.round(y), // target y
        map.tsize, // target width
        map.tsize, // target height
      );
    }
  }
}
```

## Demo

Unsere Demo zur Implementierung scrollbarer Kachelkarten fasst den obigen Code zusammen, um zu zeigen, wie eine Implementierung dieser Karte aussieht. Sie können sich eine [Live-Demo ansehen](https://mozdevs.github.io/gamedev-js-tiles/square/scroll.html) und den [Quellcode ansehen](https://github.com/mozdevs/gamedev-js-tiles).

![Animiertes Gif eines Abschnitts mit Gras, Erdflächen und Bäumen, die aus wiederholten Abschnitten einer Kachelkarte bestehen, das zeigt, wie Sie beim Scrollen verschiedene Abschnitte des Bereichs sehen.](untitled.gif)

Es gibt [eine weitere Demo](https://mozdevs.github.io/gamedev-js-tiles/square/logic-grid.html), die zeigt, wie die Kamera einem Charakter folgt.

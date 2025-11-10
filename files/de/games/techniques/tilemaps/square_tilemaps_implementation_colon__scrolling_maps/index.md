---
title: "Implementierung von quadratischen Tilemaps: Scrollende Karten"
slug: Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Dieser Artikel behandelt die Implementierung von scrollenden quadratischen Tilemaps mithilfe der [Canvas API](/de/docs/Web/API/Canvas_API).

> [!NOTE]
> Beim Schreiben dieses Artikels haben wir angenommen, dass die Leser Vorkenntnisse über die Grundlagen des Canvas haben, wie z.B. das Erhalten eines 2D-Canvas-Kontexts, das Laden von Bildern usw., was alles im [Canvas API Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) erklärt wird. Darüber hinaus basiert dieser Artikel auf den grundlegenden Informationen, die in unserem Einführungsartikel [Tilemaps](/de/docs/Games/Techniques/Tilemaps) enthalten sind. Dieser Artikel baut auch auf der [Implementierung statischer quadratischer Tilemaps](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps) auf — Sie sollten diesen ebenfalls lesen, falls Sie dies noch nicht getan haben.

## Die Kamera

Die Kamera ist ein Objekt, das Informationen darüber enthält, welcher Abschnitt der Spielwelt oder des Levels gerade angezeigt wird. Kameras können entweder frei beweglich sein und vom Spieler gesteuert werden (wie in Strategie-Spielen) oder einem Objekt folgen (wie dem Hauptcharakter in Plattformspielen).

Unabhängig vom Kameratyp benötigen wir immer Informationen über die aktuelle Position, die Größe des Ansichtsfensters usw. In der [bereitgestellten Demo](https://mozdevs.github.io/gamedev-js-tiles/square/scroll.html) zusammen mit diesem Artikel sind dies die Parameter, die die Kamera hat:

- `x` und `y`: Die aktuelle Position der Kamera. In dieser Implementierung gehen wir davon aus, dass `(x,y)` auf die obere linke Ecke des sichtbaren Teils der Karte zeigt.
- `width` und `height`: Die Größe des Ansichtsfensters der Kamera.
- `maxX` und `maxY`: Die Grenze für die Position der Kamera — Die untere Grenze wird fast immer `(0,0)` sein, und in diesem Fall ist die obere Grenze gleich der Größe der Welt minus der Größe des Ansichtsfensters der Kamera.

## Rendering der Karte

Es gibt zwei wesentliche Unterschiede zwischen dem Rendering von scrollenden Karten und statischen Karten:

- **Teilweise Kacheln können angezeigt werden**. In statischen Karten beginnt das Rendering normalerweise in der oberen linken Ecke einer Kachel, die sich in der oberen linken Ecke eines Ansichtsfensters befindet. Während des Renderings von scrollenden Tilemaps wird oft die erste Kachel abgeschnitten.

- **Nur ein Abschnitt der Karte wird gerendert**. Wenn die Karte größer ist als das Ansichtsfenster, können wir offensichtlich nur einen Teil davon gleichzeitig anzeigen, während nicht-scrollende Karten normalerweise vollständig gerendert werden.

Um diese Probleme zu bewältigen, müssen wir den Rendering-Algorithmus leicht anpassen. Stellen Sie sich vor, die Kamera zeigt auf `(5,10)`. Das bedeutet, dass die erste Kachel `0x0` wäre. Im Democode wird der Startpunkt in `startCol` und `startRow` gespeichert. Es ist auch praktisch, die letzte zu rendernde Kachel vorab zu berechnen.

```js
const startCol = Math.floor(this.camera.x / map.tsize);
const endCol = startCol + this.camera.width / map.tsize;
const startRow = Math.floor(this.camera.y / map.tsize);
const endRow = startRow + this.camera.height / map.tsize;
```

Sobald wir die erste Kachel haben, müssen wir berechnen, wie viel deren Rendering (und somit das Rendering der anderen Kacheln) verschoben wird. Da die Kamera auf `(5, 10)` zeigt, wissen wir, dass die erste Kachel um `(-5,-10)` Pixel verschoben werden sollte. In unserer Demo wird der Verschiebungsbetrag in den Variablen `offsetX` und `offsetY` gespeichert.

```js
const offsetX = -this.camera.x + startCol * map.tsize;
const offsetY = -this.camera.y + startRow * map.tsize;
```

Mit diesen Werten an Ort und Stelle ist die Schleife, die die Karte rendert, derjenigen, die für das Rendering statischer Tilemaps verwendet wird, ziemlich ähnlich. Der Hauptunterschied besteht darin, dass wir die Werte `offsetX` und `offsetY` zu den Zielkoordinaten `x` und `y` hinzufügen, und diese Werte werden gerundet, um Artefakte zu vermeiden, die entstehen würden, wenn die Kamera auf Positionen mit Gleitkommazahlen zeigt.

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

Unsere Demo zur Implementierung von scrollenden Tilemaps führt den obigen Code zusammen, um zu zeigen, wie eine Implementierung dieser Karte aussieht. Sie können sich eine [Live-Demo](https://mozdevs.github.io/gamedev-js-tiles/square/scroll.html) ansehen und [den Quellcode dazu](https://github.com/mozdevs/gamedev-js-tiles) betrachten.

![Animiertes gif eines Abschnitts mit Gras-, Erdflächen und Bäumen, erstellt aus wiederholten Abschnitten einer Tilemap, das zeigt, wie Sie beim Scrollen unterschiedliche Bereiche sehen.](untitled.gif)

Es gibt [eine weitere Demo](https://mozdevs.github.io/gamedev-js-tiles/square/logic-grid.html), die zeigt, wie man die Kamera einem Charakter folgen lässt.

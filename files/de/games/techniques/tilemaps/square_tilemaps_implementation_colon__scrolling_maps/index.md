---
title: "Implementierung von quadratischen Tilemaps: Scrollende Karten"
slug: Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Dieser Artikel behandelt, wie man scrollende quadratische Tilemaps mit der [Canvas API](/de/docs/Web/API/Canvas_API) implementiert.

> [!NOTE]
> Beim Verfassen dieses Artikels sind wir von einem bestehenden Leserwissen über die Grundlagen des Canvas ausgegangen, wie z.B. das Abrufen eines 2D-Canvas-Kontexts, das Laden von Bildern usw., was alles im [Canvas API Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) erklärt wird, sowie die grundlegenden Informationen, die in unserem Einführungsartikel zu [Tilemaps](/de/docs/Games/Techniques/Tilemaps) enthalten sind. Dieser Artikel baut auch auf der [Implementierung statischer quadratischer Tilemaps](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps) auf — lesen Sie diesen ebenfalls, falls Sie dies noch nicht getan haben.

## Die Kamera

Die Kamera ist ein Objekt, das Informationen darüber speichert, welcher Abschnitt der Spielwelt oder des Levels momentan angezeigt wird. Kameras können entweder freiform sein, vom Spieler gesteuert werden (wie in Strategiespielen) oder einem Objekt folgen (wie der Hauptfigur in Plattformspielen).

Unabhängig vom Kameratyp benötigen wir immer Informationen über ihre aktuelle Position, die Größe des Viewports usw. In der [bereitgestellten Demo](https://mozdevs.github.io/gamedev-js-tiles/square/scroll.html) zu diesem Artikel sind dies die Parameter, die die Kamera hat:

- `x` und `y`: Die aktuelle Position der Kamera. In dieser Implementierung gehen wir davon aus, dass `(x,y)` auf die obere linke Ecke des sichtbaren Kartenabschnitts zeigt.
- `width` und `height`: Die Größe des Kamera-Viewports.
- `maxX` und `maxY`: Die Begrenzung der Kameraposition — Die untere Grenze wird fast immer (0,0) sein, und in diesem Fall ist die obere Grenze gleich der Größe der Welt minus der Größe des Kamera-Viewports.

## Das Rendern der Karte

Es gibt zwei Hauptunterschiede zwischen dem Rendern scrollender Karten und statischer Karten:

- **Teilweise Kacheln könnten angezeigt werden**. In statischen Karten beginnt die Darstellung normalerweise in der oberen linken Ecke einer Kachel, die in der oberen linken Ecke eines Viewports liegt. Beim Rendern von scrollenden Tilemaps wird die erste Kachel oft abgeschnitten.

- **Nur ein Teil der Karte wird gerendert**. Wenn die Karte größer als der Viewport ist, können wir offensichtlich nur einen Teil davon auf einmal anzeigen, während nicht-scrollende Karten normalerweise vollständig gerendert werden.

Um diese Probleme zu bewältigen, müssen wir den Rendering-Algorithmus leicht modifizieren. Angenommen, die Kamera zeigt auf `(5,10)`. Das bedeutet, dass die erste Kachel `0x0` wäre. Im Democode wird der Startpunkt bei `startCol` und `startRow` gespeichert. Es ist auch praktisch, die letzte zu rendernde Kachel vorab zu berechnen.

```js
const startCol = Math.floor(this.camera.x / map.tsize);
const endCol = startCol + this.camera.width / map.tsize;
const startRow = Math.floor(this.camera.y / map.tsize);
const endRow = startRow + this.camera.height / map.tsize;
```

Sobald wir die erste Kachel haben, müssen wir berechnen, um wie viel deren Rendering (und somit das Rendering der anderen Kacheln) versetzt wird. Da die Kamera auf `(5, 10)` zeigt, wissen wir, dass die erste Kachel um `(-5,-10)` Pixel verschoben werden sollte. In unserer Demo werden die Verschiebungsbeträge in den Variablen `offsetX` und `offsetY` gespeichert.

```js
const offsetX = -this.camera.x + startCol * map.tsize;
const offsetY = -this.camera.y + startRow * map.tsize;
```

Mit diesen Werten ist die Schleife, die die Karte rendert, der für das Rendern statischer Tilemaps verwendeten ziemlich ähnlich. Der Hauptunterschied besteht darin, dass wir die Werte `offsetX` und `offsetY` zu den Zielkoordinaten `x` und `y` hinzufügen, und diese Werte werden gerundet, um Artefakte zu vermeiden, die entstehen würden, wenn die Kamera auf Positionen mit Gleitkommazahlen zeigt.

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

Unsere Demo zur Implementierung einer scrollenden Tilemap führt den obigen Code zusammen, um zu zeigen, wie eine solche Implementierung aussieht. Sie können sich eine [Live-Demo](https://mozdevs.github.io/gamedev-js-tiles/square/scroll.html) ansehen und [den Quellcode](https://github.com/mozdevs/gamedev-js-tiles) einsehen.

![Animiertes GIF eines Abschnitts mit Gras, Erde und Bäumen, die aus wiederholten Abschnitten einer Tilemap bestehen, und zeigt, wie Sie beim Scrollen verschiedene Bereiche sehen.](untitled.gif)

Es gibt [eine weitere verfügbare Demo](https://mozdevs.github.io/gamedev-js-tiles/square/logic-grid.html), die zeigt, wie die Kamera einem Charakter folgt.

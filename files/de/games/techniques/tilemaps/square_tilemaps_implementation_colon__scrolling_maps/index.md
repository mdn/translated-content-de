---
title: "Implementierung von quadratischen Tilemaps: Scrollende Karten"
slug: Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Dieser Artikel behandelt die Implementierung von scrollenden quadratischen Tilemaps mit der [Canvas API](/de/docs/Web/API/Canvas_API).

> [!NOTE]
> Beim Verfassen dieses Artikels sind wir davon ausgegangen, dass Leser Grundkenntnisse über Canvas haben, wie z.B. das Abrufen eines 2D-Canvas-Kontexts oder das Laden von Bildern, die alle im [Canvas API-Leitfaden](/de/docs/Web/API/Canvas_API/Tutorial) erklärt werden, sowie die grundlegenden Informationen, die in unserem Einführungsartikel zu [Tilemaps](/de/docs/Games/Techniques/Tilemaps) enthalten sind. Dieser Artikel baut auch auf [Implementierung statischer quadratischer Tilemaps](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps) auf — Sie sollten diesen ebenfalls lesen, sofern noch nicht geschehen.

## Die Kamera

Die Kamera ist ein Objekt, das Informationen darüber enthält, welcher Abschnitt der Spielewelt oder des Levels derzeit angezeigt wird. Kameras können entweder frei bewegen, vom Spieler gesteuert werden (wie in Strategiespielen) oder ein Objekt verfolgen (wie den Hauptcharakter in Plattformspielen).

Unabhängig vom Kameratyp benötigen wir immer Informationen über ihre aktuelle Position, die Größe des Viewports usw. In dem [bereitgestellten Demo](https://mozdevs.github.io/gamedev-js-tiles/square/scroll.html) zusammen mit diesem Artikel sind dies die Parameter, die die Kamera hat:

- `x` und `y`: Die aktuelle Position der Kamera. In dieser Implementierung nehmen wir an, dass `(x,y)` die obere linke Ecke des sichtbaren Teils der Karte kennzeichnet.
- `width` und `height`: Die Größe des Kameraviewports.
- `maxX` und `maxY`: Die Grenzen für die Position der Kamera — Das untere Limit wird fast immer (0,0) sein, und in diesem Fall ist das obere Limit gleich der Größe der Welt minus der Größe des Kameraviewports.

## Darstellung der Karte

Es gibt zwei Hauptunterschiede zwischen dem Rendern von scrollenden Karten und statischen Karten:

- **Teilweise Kacheln könnten angezeigt werden**. In statischen Karten beginnt die Darstellung normalerweise in der oberen linken Ecke einer Kachel, die sich in der oberen linken Ecke eines Viewports befindet. Beim Rendern von scrollenden Tilemaps wird die erste Kachel häufig abgeschnitten.

- **Nur ein Abschnitt der Karte wird dargestellt**. Wenn die Karte größer als der Viewport ist, können wir logischerweise jeweils nur einen Teil davon anzeigen, während nicht-scrollende Karten normalerweise vollständig dargestellt werden.

Um diese Probleme zu lösen, müssen wir den Renderalgorithmus leicht modifizieren. Stellen wir uns vor, dass die Kamera auf `(5,10)` zeigt. Das bedeutet, dass die erste Kachel `0x0` wäre. Im Democode wird der Startpunkt in `startCol` und `startRow` gespeichert. Es ist auch nützlich, die letzte Kachel, die gerendert werden soll, vorab zu berechnen.

```js
const startCol = Math.floor(this.camera.x / map.tsize);
const endCol = startCol + this.camera.width / map.tsize;
const startRow = Math.floor(this.camera.y / map.tsize);
const endRow = startRow + this.camera.height / map.tsize;
```

Sobald wir die erste Kachel haben, müssen wir berechnen, wie stark ihr Rendering (und damit das Rendering der anderen Kacheln) verschoben wird. Da die Kamera auf `(5, 10)` zeigt, wissen wir, dass die erste Kachel um `(-5,-10)` Pixel verschoben werden sollte. In unserem Demo wird der Verschiebungsbetrag in den Variablen `offsetX` und `offsetY` gespeichert.

```js
const offsetX = -this.camera.x + startCol * map.tsize;
const offsetY = -this.camera.y + startRow * map.tsize;
```

Mit diesen Werten ist die Schleife, die die Karte rendert, der jenen zum Rendern statischer Tilemaps sehr ähnlich. Der Hauptunterschied besteht darin, dass wir die Werte `offsetX` und `offsetY` zu den Zielkoordinaten `x` und `y` hinzufügen und diese Werte gerundet werden, um Artefakte zu vermeiden, die entstehen würden, wenn die Kamera auf Positionen mit Gleitkommazahlen zeigt.

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

Unsere Demo zur Implementierung von scrollenden Tilemaps kombiniert den obigen Code, um zu zeigen, wie eine Implementierung dieser Karte aussieht. Sie können sich eine [Live-Demo](https://mozdevs.github.io/gamedev-js-tiles/square/scroll.html) ansehen und [deren Quellcode](https://github.com/mozdevs/gamedev-js-tiles) einsehen.

![Animiertes GIF eines Bereichs mit Gras, Schmutzflächen und Bäumen, die aus wiederholten Abschnitten einer Tilemap bestehen, das zeigt, wie Sie beim Scrollen verschiedene Bereiche sehen.](untitled.gif)

Es gibt [eine weitere verfügbare Demo](https://mozdevs.github.io/gamedev-js-tiles/square/logic-grid.html), die zeigt, wie die Kamera einem Charakter folgt.

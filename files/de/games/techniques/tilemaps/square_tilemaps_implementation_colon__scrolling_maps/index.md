---
title: "Implementierung von quadratischen Kachelkarten: Scrollende Karten"
slug: Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

Dieser Artikel behandelt die Implementierung von scrollenden Kachelkarten im Quadratformat mithilfe der [Canvas API](/de/docs/Web/API/Canvas_API).

> [!NOTE]
> Beim Verfassen dieses Artikels gingen wir davon aus, dass der Leser bereits über grundlegende Kenntnisse des Canvas, wie das Abrufen eines 2D-Canvas-Kontexts, das Laden von Bildern usw. verfügt, was alles im [Canvas-API-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) erklärt wird, sowie die grundlegenden Informationen in unserem Einführungsartikel über [Tilemaps](/de/docs/Games/Techniques/Tilemaps). Dieser Artikel baut auch auf der [Implementierung statischer quadratischer Kachelkarten](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps) auf — diesen sollten Sie ebenfalls lesen, falls nicht bereits geschehen.

## Die Kamera

Die Kamera ist ein Objekt, das Informationen darüber enthält, welcher Abschnitt der Spielwelt oder des Levels derzeit angezeigt wird. Kameras können entweder frei formbar und vom Spieler gesteuert sein (wie in Strategiespielen) oder einem Objekt folgen (wie der Hauptfigur in Plattformspielen).

Unabhängig vom Kameratyp benötigen wir immer Informationen über ihre aktuelle Position, die Größe des Ansichtsfensters usw. In dem [bereitgestellten Demo](https://mozdevs.github.io/gamedev-js-tiles/square/scroll.html) zusammen mit diesem Artikel, sind dies die Parameter, die die Kamera hat:

- `x` und `y`: Die aktuelle Position der Kamera. In dieser Implementierung nehmen wir an, dass `(x,y)` die obere linke Ecke des sichtbaren Abschnitts der Karte zeigt.
- `width` und `height`: Die Größe des Kamera-Ansichtsfensters.
- `maxX` und `maxY`: Das Limit für die Position der Kamera — Das untere Limit wird fast immer `(0,0)` sein, und in diesem Fall ist das obere Limit gleich der Größe der Welt minus der Größe des Kamera-Ansichtsfensters.

## Das Rendern der Karte

Es gibt zwei wesentliche Unterschiede zwischen dem Rendern von scrollenden Karten und statischen Karten:

- **Teilweise Kacheln könnten angezeigt werden**. In statischen Karten beginnt das Rendering normalerweise in der oberen linken Ecke einer Kachel, die sich in der oberen linken Ecke eines Ansichtsfensters befindet. Beim Rendern von scrollenden Kachelkarten wird die erste Kachel oft abgeschnitten.

- **Nur ein Abschnitt der Karte wird gerendert**. Wenn die Karte größer als das Ansichtsfenster ist, können wir offensichtlich nur einen Teil davon gleichzeitig anzeigen, während nicht-scrollende Karten normalerweise vollständig gerendert werden.

Um diese Probleme zu bewältigen, müssen wir den Rendering-Algorithmus leicht modifizieren. Stellen wir uns vor, dass die Kamera auf `(5,10)` zeigt. Das bedeutet, dass die erste Kachel `0x0` wäre. Im Demo-Code wird der Startpunkt bei `startCol` und `startRow` gespeichert. Es ist praktisch, auch die letzte zu rendernde Kachel vorab zu berechnen.

```js
const startCol = Math.floor(this.camera.x / map.tsize);
const endCol = startCol + this.camera.width / map.tsize;
const startRow = Math.floor(this.camera.y / map.tsize);
const endRow = startRow + this.camera.height / map.tsize;
```

Sobald wir die erste Kachel haben, müssen wir berechnen, um wie viel deren Rendering (und daher das Rendering der anderen Kacheln) verschoben wird. Da die Kamera auf `(5, 10)` zeigt, wissen wir, dass die erste Kachel um `(-5,-10)` Pixel verschoben werden sollte. In unserer Demo ist die Verschiebungsmenge in den Variablen `offsetX` und `offsetY` gespeichert.

```js
const offsetX = -this.camera.x + startCol * map.tsize;
const offsetY = -this.camera.y + startRow * map.tsize;
```

Mit diesen Werten an Ort und Stelle ähnelt die Schleife, die die Karte rendert, stark der für das Rendern statischer Kachelkarten verwendeten. Der Hauptunterschied besteht darin, dass wir die Werte `offsetX` und `offsetY` zu den Ziel-`x`- und `y`-Koordinaten hinzufügen, und diese Werte werden gerundet, um Artefakte zu vermeiden, die sich ergeben würden, wenn die Kamera auf Positionen mit Float-Zahlen zeigt.

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

Unsere Demo der Implementierung von scrollenden Kachelkarten kombiniert den obigen Code, um zu zeigen, wie eine Implementierung dieser Karte aussieht. Sie können sich eine [Live-Demo ansehen](https://mozdevs.github.io/gamedev-js-tiles/square/scroll.html) und [den Quellcode dazu einsehen](https://github.com/mozdevs/gamedev-js-tiles).

![Animiertes GIF eines Abschnitts mit Gras, schmutzigen Bereichen und Bäumen, die aus wiederholten Abschnitten einer Kachelkarte bestehen, um zu zeigen, wie man verschiedene Abschnitte des Gebiets sieht, wenn man scrollt.](untitled.gif)

Es gibt [eine weitere verfügbare Demo](https://mozdevs.github.io/gamedev-js-tiles/square/logic-grid.html), die zeigt, wie man die Kamera einem Charakter folgen lässt.

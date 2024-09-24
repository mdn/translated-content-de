---
title: "Quadratische Kachelkarten-Implementierung: Scrollende Karten"
slug: Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Dieser Artikel behandelt, wie man scrollende quadratische Kachelkarten unter Verwendung der [Canvas API](/de/docs/Web/API/Canvas_API) implementiert.

> [!NOTE]
> Bei der Erstellung dieses Artikels gingen wir davon aus, dass Leser bereits über Grundlagen des Canvas-Wissens verfügen, wie zum Beispiel das Abrufen eines 2D-Canvas-Kontexts, das Laden von Bildern usw., was alles im [Canvas API-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) erklärt wird, sowie die grundlegende Informationen, die in unserem [Kachelkarten-](/de/docs/Games/Techniques/Tilemaps) Einführungsartikel enthalten sind. Dieser Artikel baut auch auf der [Implementierung von statischen quadratischen Kachelkarten](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps) auf — Sie sollten auch diesen lesen, falls Sie es noch nicht getan haben.

## Die Kamera

Die Kamera ist ein Objekt, das Informationen darüber hält, welcher Abschnitt der Spielewelt oder des Levels gerade gezeigt wird. Kameras können entweder frei verfügbar und vom Spieler kontrolliert sein (wie in Strategiespielen) oder einem Objekt folgen (wie die Hauptfigur in Plattformspielen).

Unabhängig von der Art der Kamera benötigen wir immer Informationen über ihre aktuelle Position, die Größe des Ansichtsfensters usw. In der [bereitgestellten Demo](https://mozdevs.github.io/gamedev-js-tiles/square/scroll.html) zusammen mit diesem Artikel sind dies die Parameter, die die Kamera hat:

- `x` und `y`: Die aktuelle Position der Kamera. In dieser Implementierung gehen wir davon aus, dass `(x,y)` auf die obere linke Ecke des sichtbaren Kartenabschnitts zeigt.
- `width` und `height`: Die Größe des Ansichtsfensters der Kamera.
- `maxX` und `maxY`: Die Begrenzung der Kameraposition — die untere Grenze wird fast immer (0,0) sein, und in diesem Fall ist die obere Grenze gleich der Größe der Welt minus der Größe des Ansichtsfensters der Kamera.

## Das Rendern der Karte

Es gibt zwei wesentliche Unterschiede zwischen dem Rendern scrollender und statischer Karten:

- **Teile von Kacheln könnten angezeigt werden**. In statischen Karten beginnt das Rendern normalerweise in der oberen linken Ecke einer Kachel, die sich in der oberen linken Ecke eines Ansichtsfensters befindet. Beim Rendern von scrollenden Kachelkarten wird die erste Kachel häufig abgeschnitten.

- **Nur ein Abschnitt der Karte wird gerendert**. Wenn die Karte größer als das Ansichtsfenster ist, können wir offensichtlich nur einen Teil davon gleichzeitig anzeigen, während nicht-scrollende Karten normalerweise vollständig gerendert werden.

Um diese Probleme zu bewältigen, müssen wir den Renderalgorithmus leicht modifizieren. Stellen Sie sich vor, dass die Kamera auf `(5,10)` zeigt. Das bedeutet, dass die erste Kachel `0x0` sein würde. Im Democode wird der Startpunkt in `startCol` und `startRow` gespeichert. Es ist auch praktisch, die letzte zu rendernde Kachel vorab zu berechnen.

```js
const startCol = Math.floor(this.camera.x / map.tsize);
const endCol = startCol + this.camera.width / map.tsize;
const startRow = Math.floor(this.camera.y / map.tsize);
const endRow = startRow + this.camera.height / map.tsize;
```

Sobald wir die erste Kachel haben, müssen wir berechnen, um wie viel die Darstellung (und daher die Darstellung der anderen Kacheln) verschoben wird. Da die Kamera auf `(5, 10)` zeigt, wissen wir, dass die erste Kachel um `(-5,-10)` Pixel verschoben werden sollte. In unserer Demo wird die Verschiebungsmenge in den Variablen `offsetX` und `offsetY` gespeichert.

```js
const offsetX = -this.camera.x + startCol * map.tsize;
const offsetY = -this.camera.y + startRow * map.tsize;
```

Mit diesen Werten ist die Schleife, die die Karte rendert, derjenigen, die für das Rendern statischer Kachelkarten verwendet wird, sehr ähnlich. Der Hauptunterschied besteht darin, dass wir die Werte `offsetX` und `offsetY` zu den Ziel-`x`- und `y`-Koordinaten hinzufügen, und diese Werte werden gerundet, um Artefakte zu vermeiden, die entstehen würden, wenn die Kamera auf Positionen mit Gleitkommazahlen zeigt.

```js
for (let c = startCol; c <= endCol; c++) {
  for (let r = startRow; r <= endRow; r++) {
    const tile = map.getTile(c, r);
    const x = (c - startCol) * map.tsize + offsetX;
    const y = (r - startRow) * map.tsize + offsetY;
    if (tile !== 0) {
      // 0 => leere Kachel
      this.ctx.drawImage(
        this.tileAtlas, // Bild
        (tile - 1) * map.tsize, // Quell-x
        0, // Quell-y
        map.tsize, // Quellbreite
        map.tsize, // Quellhöhe
        Math.round(x), // Ziel-x
        Math.round(y), // Ziel-y
        map.tsize, // Zielbreite
        map.tsize, // Zielhöhe
      );
    }
  }
}
```

## Demo

Unsere Demo zur Implementierung scrollender Kachelkarten vereint den obigen Code, um zu zeigen, wie eine Implementierung dieser Karte aussieht. Sie können sich eine [Live-Demo ansehen](https://mozdevs.github.io/gamedev-js-tiles/square/scroll.html) und den [Quellcode dazu](https://github.com/mozdevs/gamedev-js-tiles) einsehen.

![Animiertes GIF eines Abschnitts mit Gras, Erdflächen und Bäumen, die aus wiederholten Abschnitten einer Kachelkarte bestehen und zeigen, wie Sie beim Scrollen verschiedene Bereiche sehen.](untitled.gif)

Es gibt [eine weitere Demo](https://mozdevs.github.io/gamedev-js-tiles/square/logic-grid.html), die zeigt, wie man die Kamera einem Charakter folgen lässt.

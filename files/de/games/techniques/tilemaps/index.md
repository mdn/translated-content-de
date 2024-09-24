---
title: Überblick über Kacheln und Kachelkarten
slug: Games/Techniques/Tilemaps
l10n:
  sourceCommit: 2b6f99e45534ce662f842d8b4d2f7845492e353c
---

{{GamesSidebar}}

Kachelkarten sind eine sehr beliebte Technik in der 2D-Spieleentwicklung, bei der die Spielwelt oder die Levelkarte aus kleinen, regelmäßig geformten Bildern, den **Kacheln**, aufgebaut wird. Dies führt zu Leistungs- und Speicherplatzgewinnen, da keine großen Bilddateien, die gesamte Levelkarten enthalten, benötigt werden, da sie durch kleine Bilder oder Bildfragmente mehrfach konstruiert werden. Diese Artikelsammlung behandelt die Grundlagen der Erstellung von Kachelkarten mit [JavaScript](/de/docs/Web/JavaScript) und [Canvas](/de/docs/Web/API/Canvas_API) (obwohl dieselben Techniken auf höherer Ebene in jeder Programmiersprache verwendet werden könnten).

Neben den Leistungsgewinnen können Kachelkarten auch einem logischen Raster zugeordnet werden, das auf andere Weise in der Spielmechanik verwendet werden kann (z.B. zum Erstellen eines Pfadfindungsdiagramms oder zur Handhabung von Kollisionen) oder um einen Level-Editor zu erstellen.

Einige beliebte Spiele, die diese Technik verwenden, sind _Super Mario Bros_, _Pacman_, _Zelda: Link's Awakening_, _Starcraft_ und _Sim City 2000_. Denken Sie an jedes Spiel, das regelmäßig wiederkehrende Quadrate im Hintergrund verwendet, und es ist wahrscheinlich, dass es Kachelkarten verwendet.

## Das Kachel-Atlas

Die effizienteste Methode zum Speichern der Kachelbilder ist in einem Atlas oder Spritesheet. Dies sind alle benötigten Kacheln, die in einer einzigen Bilddatei zusammengefasst sind. Wenn es an der Zeit ist, eine Kachel zu zeichnen, wird nur ein kleiner Abschnitt dieses größeren Bildes auf der Spieleleinwand dargestellt. Die unten stehenden Bilder zeigen ein Kachel-Atlas mit 8 x 4 Kacheln:

![Tile atlas image](tile_atlas.png)

Die Verwendung eines Atlas hat auch den Vorteil, dass jeder Kachel automatisch ein **Index** zugewiesen wird. Dieser Index eignet sich hervorragend als Kachelerkennung bei der Erstellung des Kachelkartenobjekts.

## Die Kachelkarte-Datenstruktur

Es ist üblich, alle Informationen, die zum Handhaben von Kachelkarten benötigt werden, in derselben Datenstruktur oder demselben Objekt zu gruppieren. Diese Datenobjekte ([Beispiel eines Kartenobjekts](https://github.com/mozdevs/gamedev-js-tiles/blob/gh-pages/square/no-scroll.js#L1-L18)) sollten beinhalten:

- **Kachelgröße**: Die Größe jeder Kachel in Pixeln horizontal / vertikal.
- **Bildatlas**: Der Bildatlas, der verwendet wird (einer oder mehrere).
- **Kartendimensionen**: Die Dimensionen der Karte, entweder in Kacheln horizontal / vertikal oder in Pixeln horizontal / vertikal.
- **Visuelles Raster**: Beinhaltet Indizes, die zeigen, welcher Kacheltyp an welcher Position im Raster platziert werden soll.
- **Logisches Raster**: Dies kann ein Kollisionsraster, ein Pfadfindungsraster usw. sein, je nach Spieltyp.

> [!NOTE]
> Für das visuelle Raster wird ein spezieller Wert (normalerweise eine negative Zahl, `0` oder `null`) benötigt, um leere Kacheln darzustellen.

## Quadratische Kacheln

Quadratbasierte Kachelkarten sind die einfachste Implementierung. Ein generischeres Szenario wären rechteckige Kachelkarten – anstelle von quadratischen – aber diese sind weit weniger verbreitet. Quadratische Kacheln ermöglichen zwei **Perspektiven**:

- Draufsicht (wie viele RPGs oder Strategiespiele wie _Warcraft 2_ oder die Weltansicht von _Final Fantasy_).
- Seitenansicht (wie Plattformspiele wie _Super Mario Bros_).

### Statische Kachelkarten

Eine Kachelkarte kann entweder in den sichtbaren Bildschirmbereich passen oder größer sein. Im ersten Fall ist die Kachelkarte **statisch** — sie muss nicht gescrollt werden, um vollständig angezeigt zu werden. Dieser Fall ist in Arcade-Spielen wie _Pacman_, _Arkanoid_ oder _Sokoban_ sehr häufig.

Das Rendern statischer Kachelkarten ist einfach und kann mit einer verschachtelten Schleife erfolgen, die über Spalten und Zeilen iteriert. Ein hochrangiger Algorithmus könnte sein:

```js
for (let column = 0; column < map.columns; column++) {
  for (let row = 0; row < map.rows; row++) {
    const tile = map.getTile(column, row);
    const x = column * map.tileSize;
    const y = row * map.tileSize;
    drawTile(tile, x, y);
  }
}
```

Sie können mehr darüber lesen und eine Beispielimplementierung in [Quadratische Kachelkarten-Implementierung: Statische Karten](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps) sehen.

### Scrollende Kachelkarten

**Scrollende** Kachelkarten zeigen jeweils nur einen kleinen Teil der Welt. Sie können einem Charakter folgen – wie in Plattformgames oder RPGs – oder dem Spieler erlauben, die Kamera zu steuern – wie in Strategie- oder Simulationsspielen.

#### Positionierung und Kamera

In allen Scrollspielen benötigen wir eine Übersetzung zwischen **Weltkoordinaten** (der Position, an der sich Sprites oder andere Elemente im Level oder in der Spielwelt befinden) und **Bildschirmkoordinaten** (der tatsächlichen Position, an der diese Elemente auf dem Bildschirm dargestellt werden). Die Weltkoordinaten können in Bezug auf die Kachelposition ausgedrückt werden (Zeile und Spalte der Karte) oder in Pixeln über die Karte, je nach Spiel. Um Weltkoordinaten in Bildschirmkoordinaten umwandeln zu können, benötigen wir die Koordinaten der Kamera, da sie bestimmen, welcher Abschnitt der Welt angezeigt wird.

Hier sind Beispiele, die zeigen, wie man von Weltkoordinaten in Bildschirmkoordinaten übersetzt und umgekehrt:

```js
// diese Funktionen gehen davon aus, dass die Kamera auf die obere linke Ecke zeigt

function worldToScreen(x, y) {
  return { x: x - camera.x, y: y - camera.y };
}

function screenToWorld(x, y) {
  return { x: x + camera.x, y: y + camera.y };
}
```

#### Rendering

Eine triviale Methode zum Rendern wäre, einfach über alle Kacheln zu iterieren (wie bei statischen Kachelkarten) und sie zu zeichnen, indem die Kamerakoordinaten subtrahiert werden (wie im Beispiel `worldToScreen()` oben gezeigt) und die Teile, die außerhalb des Ansichtsfensters liegen, einfach dort versteckt bleiben. Das Zeichnen aller Kacheln, die nicht gesehen werden können, ist jedoch verschwenderisch und kann die Leistung beeinträchtigen. **Idealerweise sollten nur Kacheln gerendert werden, die sichtbar sind** — siehe den Abschnitt [Leistung](#leistung) für weitere Ideen zur Verbesserung der Rendering-Performance.

Sie können mehr über die Implementierung scrollender Kachelkarten lesen und einige Beispielimplementierungen in [Quadratische Kachelkarten-Implementierung: Scrollende Karten](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps) sehen.

### Ebenen

Das visuelle Raster besteht häufig aus mehreren Ebenen. Dies ermöglicht es uns, mit weniger Kacheln eine reichhaltigere Spielwelt zu schaffen, da dasselbe Bild mit unterschiedlichen Hintergründen verwendet werden kann. Beispielsweise könnte ein Felsen, der auf mehreren Geländetypen (wie Gras, Sand oder Ziegel) erscheinen könnte, in einer eigenen separaten Kachel enthalten sein, die dann in einer neuen Ebene gerendert wird, anstatt mehrere Felsenkacheln, jede mit einem anderen Hintergrundgelände.

Wenn Charaktere oder andere Spiel-Sprites in der Mitte des Ebenenstapels gezeichnet werden, ermöglicht dies interessante Effekte, wie z.B. dass Charaktere hinter Bäumen oder Gebäuden entlanglaufen.

Der folgende Screenshot zeigt ein Beispiel für beide Punkte: ein Charakter, der _hinter_ einer Kachel erscheint (der Ritter erscheint hinter der Baumspitze) und eine Kachel (der Busch), die über verschiedenen Geländetypen gerendert wird.

![Ein Raster von geschichteten Hintergrundgeländen. Eine Buschfliese wird oben über einem großen Grasgelände gerendert und erneut über einem geschichteten rechteckigen Gelände mit braunem Sand am Boden. Eine Baumfliese wird unten links über das Grasgelände und unten rechts erneut gerendert. Eine Ritterfliese erscheint hinter der Baumfliese, die unten links gerendert wird.](screen_shot_2015-10-06_at_15.56.05.png)

### Das logische Raster

Da Kachelkarten ein tatsächliches Raster von visuellen Kacheln sind, ist es üblich, eine Zuordnung zwischen diesem visuellen Raster und einem logischen Raster zu erstellen. Der häufigste Fall ist die Verwendung dieses logischen Gitters, um Kollisionen zu handhaben, aber auch andere Verwendungen sind möglich: Charakter-Spawnpunkte, Erkennen, ob einige Elemente zusammen in der richtigen Reihenfolge platziert sind, um eine bestimmte Aktion auszulösen (wie in _Tetris_ oder _Bejeweled_), Pfadfindungsalgorithmen usw.

> [!NOTE]
> Sie können sich unser Demo ansehen, das zeigt [wie man ein logisches Raster zur Kollisionsbehandlung verwendet](https://mozdevs.github.io/gamedev-js-tiles/square/logic-grid.html).

## Isometrische Kachelkarten

Isometrische Kachelkarten erzeugen die Illusion einer 3D-Umgebung und sind in 2D-Simulationen, Strategie- oder RPG-Spielen äußerst beliebt. Einige dieser Spiele sind _SimCity 2000_, _Pharaoh_ oder _Final Fantasy Tactics_. Das untenstehende Bild zeigt ein Beispiel eines Atlas für ein isometrisches Kachelset.

![Eine 3x4-Karte von verschiedenfarbigen Kacheln in isometrischer Projektion](iso_tiles.png)

## Leistung

Das Zeichnen von scrollenden Kachelkarten kann die Leistung beeinträchtigen. In der Regel müssen einige Techniken implementiert werden, damit das Scrollen reibungslos verläuft. Der erste Ansatz besteht, wie oben diskutiert, darin, **nur sichtbare Kacheln zu zeichnen**. Aber manchmal ist das nicht genug.

Eine einfache Technik besteht darin, die Karte in einer eigenen Leinwand (bei Verwendung der Canvas-API) oder auf einer Textur (bei Verwendung von WebGL) vorzurendern, damit die Kacheln nicht jedes Bild neu gezeichnet werden müssen und das Rendering in nur einem Blit-Vorgang durchgeführt werden kann. Natürlich wird dieses Problem nicht wirklich gelöst, wenn die Karte groß ist — und einige Systeme haben keine sehr großzügige Begrenzung, wie groß eine Textur sein kann.

Eine Möglichkeit besteht darin, [den sichtbaren Abschnitt off-canvas zu zeichnen](https://mozdevs.github.io/gamedev-js-tiles/performance/offcanvas.html) (anstatt die gesamte Karte). Das bedeutet, dass die Karte, solange kein Scrollen erfolgt, nicht gerendert werden muss.

Ein Nachteil dieses Ansatzes ist, dass diese Technik bei Scrollen nicht sehr effizient ist. Eine bessere Möglichkeit wäre, eine Leinwand zu erstellen, die 2x2 Kacheln größer als der sichtbare Bereich ist, sodass es eine Kachel von "Bluten" um die Ränder gibt. Das bedeutet, dass die Karte nur dann erneut auf der Leinwand gerendert werden muss, wenn das Scrollen um eine ganze Kachel fortgeschritten ist — anstatt jeden Bild, während des Scrollens.

In schnellen Spielen könnte das dennoch nicht ausreichen. Eine alternative Methode wäre, die Kachelkarte in große Abschnitte aufzuteilen (wie eine vollständige Karte, die in 10 x 10 Kachelschnipsel aufgeteilt wird), jeden Abschnitt außerhalb der Leinwand vorzurendern und dann jeden gerenderten Abschnitt als "große Kachel" in Kombination mit einem der oben besprochenen Algorithmen zu behandeln.

## Siehe auch

- Verwandte Artikel auf dem MDN:

  - [Implementierung von statischen quadratischen Kachelkarten mit der Canvas-API](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps)
  - [Implementierung von scrollenden quadratischen Kachelkarten mit der Canvas-API](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps)

- Externe Ressourcen:

  - [Demos und Quellcode](https://mozdevs.github.io/gamedev-js-tiles/)
  - [Rasterteile und ihre Beziehungen](https://www.redblobgames.com/grids/parts/) von Amit Patel (Mai 2021)
  - [Isometrische Grafik in Videospielen](https://en.wikipedia.org/wiki/Isometric_graphics_in_video_games_and_pixel_art) (Wikipedia)

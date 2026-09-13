---
title: Übersicht über Kacheln und Kachelkarten
slug: Games/Techniques/Tilemaps
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

Kachelkarten sind eine sehr beliebte Technik in der 2D-Spielentwicklung, bei der die Spielwelt oder das Level aus kleinen, regelmäßig geformten Bildern, den **Kacheln**, aufgebaut wird. Dies führt zu Leistungs- und Speichergewinnen – große Bilddateien, die gesamte Levelkarten enthalten, sind nicht nötig, da sie aus kleinen Bildern oder Bildfragmenten mehrfach konstruiert werden. Diese Artikelreihe behandelt die Grundlagen der Erstellung von Kachelkarten mit [JavaScript](/de/docs/Web/JavaScript) und [Canvas](/de/docs/Web/API/Canvas_API) (obwohl dieselben hochrangigen Techniken in jeder Programmiersprache verwendet werden könnten).

Neben den Leistungsgewinnen können Kachelkarten auch auf ein logisches Raster abgebildet werden, das auf andere Weise innerhalb der Spielmechanik genutzt werden kann (zum Beispiel zur Erstellung eines Pfadfindungsgraphen oder zur Handhabung von Kollisionen) oder um einen Leveleditor zu erstellen.

Einige bekannte Spiele, die diese Technik nutzen, sind _Super Mario Bros_, _Pacman_, _Zelda: Link's Awakening_, _Starcraft_ und _Sim City 2000_. Denken Sie an jedes Spiel, das regelmäßig wiederkehrende Quadrate im Hintergrund verwendet, und Sie werden wahrscheinlich feststellen, dass es Kachelkarten verwendet.

## Das Kachel-Atlas

Der effizienteste Weg, die Kachelbilder zu speichern, ist in einem Atlas oder Spritesheet. Dies ist ein einzelnes Bild, das alle benötigten Kacheln gruppiert. Wenn es an der Zeit ist, eine Kachel zu zeichnen, wird nur ein kleiner Abschnitt dieses größeren Bildes auf der Spiel-Canvas gerendert. Die untenstehenden Bilder zeigen einen Kachel-Atlas mit 8 x 4 Kacheln:

![Kachel-Atlas Bild](tile_atlas.png)

Die Verwendung eines Atlas hat auch den Vorteil, dass jeder Kachel auf natürliche Weise ein **Index** zugewiesen wird. Dieser Index eignet sich ideal als Kachelbezeichner, wenn das Kachelkart-Objekt erstellt wird.

## Die Kachelkarten-Datenstruktur

Es ist üblich, alle Informationen, die zur Handhabung von Kachelkarten benötigt werden, in derselben Datenstruktur oder im selben Objekt zu gruppieren. Diese Datenobjekte ([Beispiel eines Kartenobjekts](https://github.com/mozdevs/gamedev-js-tiles/blob/gh-pages/square/no-scroll.js#L1-L18)) sollten beinhalten:

- **Kachelgröße**: Die Größe jeder Kachel in Pixeln quer / Pixel abwärts.
- **Bildatlas**: Der zu verwendende Bildatlas (einer oder mehrere).
- **Kartendimensionen**: Die Dimensionen der Karte, entweder in Kacheln quer / Kacheln abwärts oder in Pixeln quer / Pixel abwärts.
- **Visuelles Raster**: Enthält Indizes, die anzeigen, welcher Kacheltyp an welcher Position im Raster platziert werden soll.
- **Logisches Raster**: Dies kann ein Kollisionsraster, ein Pfadfindungsraster usw. sein, abhängig von der Art des Spiels.

> [!NOTE]
> Für das visuelle Raster wird ein spezieller Wert (in der Regel eine negative Zahl, `0` oder `null`) benötigt, um leere Kacheln darzustellen.

## Quadratische Kacheln

Quadratbasierte Kachelkarten sind die einfachste Implementierung. Ein generischerer Fall wären rechteckig basierte Kachelkarten – statt quadratisch – aber diese sind weit weniger verbreitet. Quadratische Kacheln ermöglichen zwei **Perspektiven**:

- Draufsicht (wie viele RPGs oder Strategiespiele wie _Warcraft 2_ oder _Final Fantasy_'s Weltansicht).
- Seitenansicht (wie bei Plattformspielen wie _Super Mario Bros_.).

### Statische Kachelkarten

Eine Kachelkarte kann entweder in den sichtbaren Bildschirmbereich passen oder größer sein. Im ersten Fall ist die Kachelkarte **statisch** – sie muss nicht gescrollt werden, um vollständig angezeigt zu werden. Dieser Fall ist sehr häufig in Arcade-Spielen wie _Pacman_, _Arkanoid_ oder _Sokoban_.

Das Rendering von statischen Kachelkarten ist einfach und kann mit einer verschachtelten Schleife durchgeführt werden, die über Spalten und Zeilen iteriert. Ein hochrangiger Algorithmus könnte so aussehen:

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

Sie können mehr darüber lesen und eine Beispielimplementierung sehen unter [Quadratische Kachelkarten-Implementierung: Statische Karten](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps).

### Scrollbare Kachelkarten

**Scrollende** Kachelkarten zeigen jeweils nur einen kleinen Teil der Welt. Sie können einem Charakter folgen – wie in Plattformspielen oder RPGs – oder dem Spieler erlauben, die Kamera zu steuern – wie in Strategie- oder Simulationsspielen.

#### Positionierung und Kamera

In allen scrollenden Spielen benötigen wir eine Übersetzung zwischen **Weltkoordinaten** (der Position, an der sich Sprites oder andere Elemente im Level oder in der Spielwelt befinden) und **Bildschirmkoordinaten** (der tatsächlichen Position, an der diese Elemente auf dem Bildschirm gerendert werden). Die Weltkoordinaten können je nach Spiel in Bezug auf die Kachelposition (Reihe und Spalte der Karte) oder in Pixeln über die Karte ausgedrückt werden. Um Weltkoordinaten in Bildschirmkoordinaten umwandeln zu können, benötigen wir die Koordinaten der Kamera, da sie bestimmen, welcher Abschnitt der Welt angezeigt wird.

Hier sind Beispiele, wie man von Weltkoordinaten zu Bildschirmkoordinaten und zurück übersetzt:

```js
// these functions assume that the camera points to the top left corner

function worldToScreen(x, y) {
  return { x: x - camera.x, y: y - camera.y };
}

function screenToWorld(x, y) {
  return { x: x + camera.x, y: y + camera.y };
}
```

#### Rendering

Eine triviale Methode zum Rendern besteht einfach darin, über alle Kacheln zu iterieren (wie bei statischen Kachelkarten) und sie zu zeichnen, wobei die Kamerakoordinaten subtrahiert werden (wie im Beispiel `worldToScreen()` oben gezeigt) und die Teile, die außerhalb des Sichtfensters liegen, dort versteckt bleiben. Alle Kacheln zu zeichnen, die nicht gesehen werden können, ist jedoch verschwenderisch und kann die Leistung beeinträchtigen. **Idealerweise sollten nur die sichtbaren Kacheln gerendert werden** – siehe den Abschnitt [Leistung](#leistung) für weitere Ideen zur Verbesserung der Renderleistung.

Sie können mehr darüber lesen, wie man scrollende Kachelkarten implementiert, und einige Beispielimplementierungen sehen unter [Quadratische Kachelkarten-Implementierung: Scrollende Karten](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps).

### Ebenen

Das visuelle Raster besteht oft aus mehreren Ebenen. Dies ermöglicht uns eine reichhaltigere Spielwelt mit weniger Kacheln, da dasselbe Bild mit unterschiedlichen Hintergründen verwendet werden kann. Beispielsweise könnte ein Fels, der über mehreren Geländetypen erscheinen könnte (wie Gras, Sand oder Ziegel), in einer eigenen separaten Kachel enthalten sein, die dann auf einer neuen Ebene gerendert wird, anstatt mehrere Felskacheln mit verschiedenen Hintergrundgeländen.

Wenn Charaktere oder andere Spiel-Sprites in der Mitte des Ebenenstapels gezeichnet werden, ermöglicht das interessante Effekte wie Charaktere, die hinter Bäumen oder Gebäuden laufen.

Der folgende Screenshot zeigt ein Beispiel für beide Punkte: einen Charakter, der _hinter_ einer Kachel erscheint (der Ritter, der hinter der Spitze eines Baumes erscheint) und eine Kachel (der Busch), der über verschiedenen Geländetypen gerendert wird.

![Ein Raster von geschichteten Hintergrundgeländen. Eine Busch-Kachel wird oben gerendert, über einem großen Grasgelände, und erneut über ein geschichtetes rechteckiges Gelände mit braunem Sand am unteren Rand. Eine Baum-Kachel wird über dem Grasgelände unten links und erneut unten rechts gerendert. Eine Ritter-Kachel erscheint hinter der Baum-Kachel, die unten links gerendert wird.](screen_shot_2015-10-06_at_15.56.05.png)

### Das logische Raster

Da Kachelkarten ein tatsächliches Raster von visuellen Kacheln sind, ist es üblich, eine Abbildung zwischen diesem visuellen Raster und einem logischen Raster zu erstellen. Der häufigste Fall ist, dieses logische Raster zur Handhabung von Kollisionen zu verwenden, aber auch andere Verwendungen sind möglich: Charakter-Spawnpunkte, Erkennung, ob einige Elemente auf die richtige Weise zusammen platziert sind, um eine bestimmte Aktion auszulösen (wie in _Tetris_ oder _Bejeweled_), Pfadfindungsalgorithmen usw.

> [!NOTE]
> Sie können sich unser Demo ansehen, das zeigt, [wie man ein logisches Raster zur Handhabung von Kollisionen verwendet](https://mozdevs.github.io/gamedev-js-tiles/square/logic-grid.html).

## Isometrische Kachelkarten

Isometrische Kachelkarten erzeugen die Illusion einer 3D-Umgebung und sind extrem populär in 2D-Simulations-, Strategie- oder RPG-Spielen. Einige dieser Spiele sind _SimCity 2000_, _Pharaoh_ oder _Final Fantasy Tactics_. Das untenstehende Bild zeigt ein Beispiel für einen Atlas für einen isometrischen Kachelsatz.

![Eine 3x4 Karte von verschiedenfarbigen Kacheln in isometrischer Projektion](iso_tiles.png)

## Leistung

Das Zeichnen von scrollenden Kachelkarten kann die Leistung beeinträchtigen. In der Regel müssen einige Techniken implementiert werden, damit das Scrollen reibungslos erfolgt. Der erste Ansatz, wie oben erwähnt, besteht darin, **nur Kacheln zu zeichnen, die sichtbar sein werden**. Aber manchmal reicht das nicht aus.

Eine einfache Technik besteht darin, die Karte in einem eigenen Canvas vorab zu rendern (bei Verwendung der Canvas API) oder auf einer Textur (bei Verwendung von WebGL), sodass die Kacheln nicht jedes Bild neu gezeichnet werden müssen und das Rendering in nur einer Blit-Operation erfolgen kann. Wenn die Karte jedoch groß ist, löst das Problem nicht wirklich – und einige Systeme haben keine sehr großzügige Grenze, wie groß eine Textur sein kann.

Eine Möglichkeit besteht darin, [den sichtbaren Abschnitt außerhalb des Canvas zu zeichnen](https://mozdevs.github.io/gamedev-js-tiles/performance/offcanvas.html) (anstatt die gesamte Karte). Das bedeutet, dass solange kein Scrollen erfolgt, die Karte nicht gerendert werden muss.

Ein Nachteil dieses Ansatzes besteht darin, dass, wenn es ein Scrollen gibt, diese Technik nicht sehr effizient ist. Ein besserer Weg wäre, ein Canvas zu erstellen, das 2x2 Kacheln größer ist als der sichtbare Bereich, sodass es eine "Blutlinie" von einer Kachel um die Ränder gibt. Das bedeutet, dass die Karte nur auf dem Canvas neu gezeichnet werden muss, wenn das Scrollen um eine vollständige Kachel vorangeschritten ist – anstatt jedes Bild – während des Scrollens.

In schnellen Spielen könnte das immer noch nicht ausreichen. Eine alternative Methode wäre, die Kachelkarte in große Abschnitte zu unterteilen (wie eine vollständige Karte, die in 10 x 10 Kachelabschnitte aufgeteilt ist), jeden Abschnitt außerhalb des Canvas vorab zu rendern und dann jeden gerenderten Abschnitt als "große Kachel" in Kombination mit einem der oben diskutierten Algorithmen zu behandeln.

## Siehe auch

- Verwandte Artikel auf dem MDN:
  - [Implementierung statischer quadratischer Kachelkarten mit der Canvas API](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps)
  - [Implementierung scrollender quadratischer Kachelkarten mit der Canvas API](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps)

- Externe Ressourcen:
  - [Demos und Quellcode](https://mozdevs.github.io/gamedev-js-tiles/)
  - [Rasterteile und Beziehungen](https://www.redblobgames.com/grids/parts/) von Amit Patel (Mai 2021)
  - [Isometrische Grafiken in Videospielen](https://en.wikipedia.org/wiki/Isometric_graphics_in_video_games_and_pixel_art) (Wikipedia)

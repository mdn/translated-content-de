---
title: Übersicht über Kacheln und Kachelkarten
slug: Games/Techniques/Tilemaps
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{GamesSidebar}}

Kachelkarten sind eine sehr beliebte Technik in der 2D-Spieleentwicklung, bei der die Spielewelt oder die Levelkarte aus kleinen, gleichmäßig geformten Bildern, den **Kacheln**, aufgebaut wird. Dies führt zu Leistungs- und Speicherplatzgewinnen – große Bilddateien, die gesamte Levelkarten enthalten, sind nicht erforderlich, da sie aus kleinen Bildern oder Bildfragmenten mehrfach zusammengesetzt werden. Diese Artikelreihe behandelt die Grundlagen der Erstellung von Kachelkarten mit [JavaScript](/de/docs/Web/JavaScript) und der [Canvas-API](/de/docs/Web/API/Canvas_API) (obwohl dieselben High-Level-Techniken in jeder Programmiersprache verwendet werden könnten).

Neben den Leistungsgewinnen können Kachelkarten auch auf ein logisches Raster abgebildet werden, das auf andere Weise in der Spiellogik verwendet werden kann (zum Beispiel zur Erstellung eines Pfadfindungsgraphen oder zur Behandlung von Kollisionen) oder um einen Level-Editor zu erstellen.

Einige bekannte Spiele, die diese Technik verwenden, sind _Super Mario Bros_, _Pacman_, _Zelda: Link's Awakening_, _Starcraft_ und _Sim City 2000_. Denken Sie an jedes Spiel, das regelmäßig wiederkehrende Quadrate im Hintergrund verwendet, und Sie werden wahrscheinlich feststellen, dass es Kachelkarten verwendet.

## Das Kachel-Atlas

Die effizienteste Methode, die Kachelbilder zu speichern, ist in einem Atlas oder Spritesheet. Dies sind alle erforderlichen Kacheln, die in einer einzigen Bilddatei zusammengefasst sind. Wenn es an der Zeit ist, eine Kachel zu zeichnen, wird nur ein kleiner Abschnitt dieses größeren Bildes auf die Spiel-Leinwand gerendert. Die folgenden Bilder zeigen einen Kachel-Atlas mit 8 x 4 Kacheln:

![Bild des Kachel-Atlas](tile_atlas.png)

Die Verwendung eines Atlas hat zudem den Vorteil, dass jeder Kachel natürlich ein **Index** zugewiesen wird. Dieser Index eignet sich perfekt als Kachel-Identifikator bei der Erstellung des Kachelkarten-Objekts.

## Die Datenstruktur der Kachelkarte

Es ist üblich, alle Informationen, die zur Bearbeitung von Kachelkarten benötigt werden, in der gleichen Datenstruktur oder im gleichen Objekt zu gruppieren. Diese Datenobjekte ([Beispiel für ein Kartenobjekt](https://github.com/mozdevs/gamedev-js-tiles/blob/gh-pages/square/no-scroll.js#L1-L18)) sollten enthalten:

- **Kachelgröße**: Die Größe jeder Kachel in Pixeln quer / Pixeln nach unten.
- **Bild-Atlas**: Der Bild-Atlas, der verwendet wird (einer oder mehrere).
- **Kartendimensionen**: Die Abmessungen der Karte, entweder in Kacheln quer / Kacheln nach unten oder in Pixeln quer / Pixeln nach unten.
- **Visuelles Raster**: Beinhaltet Indizes, die anzeigen, welcher Kacheltyp an jeder Position im Raster platziert werden soll.
- **Logisches Raster**: Dies kann ein Kollisionsraster, ein Pfadfindungsraster usw. sein, abhängig von der Art des Spiels.

> [!NOTE]
> Für das visuelle Raster ist ein spezieller Wert (normalerweise eine negative Zahl, `0` oder `null`) erforderlich, um leere Kacheln darzustellen.

## Quadratische Kacheln

Auf quadratischen Kacheln basierte Kachelkarten sind die einfachste Implementierung. Ein allgemeinerer Fall wären rechteckige Kachelkarten – anstelle von quadratischen – aber sie sind weit weniger verbreitet. Quadratische Kacheln bieten zwei **Perspektiven**:

- Vogelperspektive (wie viele RPGs oder Strategiespiele wie _Warcraft 2_ oder die Weltansicht von _Final Fantasy_).
- Seitenansicht (wie Plattformspiele wie _Super Mario Bros._).

### Statische Kachelkarten

Eine Kachelkarte kann entweder in den sichtbaren Bildschirmbereich passen oder größer sein. Im ersten Fall ist die Kachelkarte **statisch** – sie muss nicht gescrollt werden, um vollständig angezeigt zu werden. Dieser Fall ist sehr häufig in Arcade-Spielen wie _Pacman_, _Arkanoid_ oder _Sokoban_.

Das Rendern statischer Kachelkarten ist einfach und kann mit einer verschachtelten Schleife durchgeführt werden, die über Spalten und Zeilen iteriert. Ein High-Level-Algorithmus könnte sein:

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

Sie können mehr darüber lesen und eine Beispielumsetzung in [Implentation quadratischer Kachelkarten: Statische Karten](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps) sehen.

### Scrollbare Kachelkarten

**Scrollende** Kachelkarten zeigen jeweils nur einen kleinen Teil der Welt an. Sie können einem Charakter folgen – wie bei Plattformspielen oder RPGs – oder dem Spieler erlauben, die Kamera zu steuern – wie bei Strategie- oder Simulationsspielen.

#### Positionierung und Kamera

In allen Scroll-Spielen benötigen wir eine Übersetzung zwischen **Weltkoordinaten** (die Position, an der sich Sprites oder andere Elemente im Level oder in der Spielwelt befinden) und **Bildschirmkoordinaten** (die tatsächliche Position, an der diese Elemente auf dem Bildschirm gerendert werden). Die Weltkoordinaten können je nach Spiel in Bezug auf die Kachelposition (Reihe und Spalte der Karte) oder in Pixeln über die Karte ausgedrückt werden. Um Weltkoordinaten in Bildschirmkoordinaten umwandeln zu können, benötigen wir die Koordinaten der Kamera, da sie bestimmen, welcher Abschnitt der Welt angezeigt wird.

Hier sind Beispiele, wie man von Weltkoordinaten in Bildschirmkoordinaten und zurück übersetzt:

```js
// these functions assume that the camera points to the top left corner

function worldToScreen(x, y) {
  return { x: x - camera.x, y: y - camera.y };
}

function screenToWorld(x, y) {
  return { x: x + camera.x, y: y + camera.y };
}
```

#### Darstellung

Eine triviale Methode zur Darstellung würde einfach darin bestehen, über alle Kacheln zu iterieren (wie bei statischen Kachelkarten) und sie zu zeichnen, wobei die Kamerakoordinaten subtrahiert werden (wie im `worldToScreen()`-Beispiel oben gezeigt) und die Teile, die außerhalb des Ansichtsfensters liegen, dort verborgen bleiben. Es ist jedoch verschwenderisch, alle Kacheln zu zeichnen, die nicht sichtbar sind, und kann die Leistung beeinträchtigen. **Nur Kacheln, die sichtbar sind, sollten idealerweise gerendert werden** – siehe den Abschnitt [Leistung](#leistung) für weitere Ideen zur Verbesserung der Rendering-Leistung.

Sie können mehr über die Implementierung scrollender Kachelkarten lesen und einige Beispielumsetzungen in [Implementation quadratischer Kachelkarten: Scrollende Karten](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps) sehen.

### Ebenen

Das visuelle Raster besteht oft aus mehreren Ebenen. Dies ermöglicht es, eine reichere Spielewelt mit weniger Kacheln zu haben, da dasselbe Bild mit verschiedenen Hintergründen verwendet werden kann. Zum Beispiel könnte ein Felsen, der über mehreren Geländetypen (wie Gras, Sand oder Ziegel) erscheinen könnte, in einer eigenen separaten Kachel enthalten sein, die dann auf einer neuen Ebene gerendert wird, anstatt in mehreren Felsenkacheln, jede mit einem anderen Hintergrundgelände.

Wenn Charaktere oder andere Spiel-Sprites in der Mitte des Ebenenstapels gezeichnet werden, ermöglicht dies interessante Effekte wie das Gehen von Figuren hinter Bäumen oder Gebäuden.

Der folgende Screenshot zeigt ein Beispiel für beide Punkte: ein Charakter, der _hinter_ einer Kachel erscheint (der Ritter, der hinter dem Baumgipfel erscheint) und eine Kachel (der Busch), die über verschiedenen Geländetypen gerendert wird.

![Ein Raster von geschichteten Hintergrundgeländen. Eine Busch-Kachel wird oben über ein großes Grasgelände gerendert und erneut über ein geschichtetes rechteckiges Gelände mit braunem Sand am unteren Rand. Eine Baum-Kachel wird oben links über das Grasgelände und unten rechts über das Sandgelände gerendert. Eine Ritter-Kachel erscheint hinter der Baum-Kachel, die unten links gerendert wird.](screen_shot_2015-10-06_at_15.56.05.png)

### Das logische Raster

Da Kachelkarten ein tatsächliches Raster visueller Kacheln darstellen, ist es üblich, eine Zuordnung zwischen diesem visuellen Raster und einem logischen Raster zu erstellen. Der häufigste Fall ist die Verwendung dieses logischen Rasters zur Behandlung von Kollisionen, aber es sind auch andere Verwendungen möglich: Charakter-Spawn-Punkte, Erkennung bestimmter Elemente, die zusammen in der richtigen Weise platziert sind, um eine bestimmte Aktion auszulösen (wie in _Tetris_ oder _Bejeweled_), Pfadfindungsalgorithmen usw.

> [!NOTE]
> Sie können sich unser Demo ansehen, das zeigt, [wie ein logisches Raster zur Handhabung von Kollisionen verwendet wird](https://mozdevs.github.io/gamedev-js-tiles/square/logic-grid.html).

## Isometrische Kachelkarten

Isometrische Kachelkarten erzeugen die Illusion einer 3D-Umgebung und sind extrem beliebt in 2D-Simulations-, Strategie- oder RPG-Spielen. Einige dieser Spiele sind _SimCity 2000_, _Pharaoh_ oder _Final Fantasy Tactics_. Das folgende Bild zeigt ein Beispiel für einen Atlas für ein isometrisches Kachelset.

![Eine 3x4 Karte von unterschiedlich gefärbten Kacheln in isometrischer Projektion](iso_tiles.png)

## Leistung

Das Zeichnen von scrollenden Kachelkarten kann die Leistung beeinträchtigen. Üblicherweise müssen einige Techniken implementiert werden, damit das Scrollen flüssig ist. Der erste Ansatz, wie oben besprochen, ist **nur die Kacheln zu zeichnen, die sichtbar sein werden**. Aber manchmal reicht das nicht aus.

Eine einfache Technik besteht darin, die Karte in einem eigenen Canvas vorab zu rendern (falls die Canvas-API verwendet wird) oder auf einer Textur (falls WebGL verwendet wird), damit die Kacheln nicht jedes Frame neu gezeichnet werden müssen und das Rendern in nur einer Blit-Operation durchgeführt werden kann. Natürlich löst das bei großen Karten nicht wirklich das Problem – und einige Systeme haben keine sehr großzügige Grenze, wie groß eine Textur sein kann.

Eine Möglichkeit besteht darin, [den sichtbaren Abschnitt außerhalb der Leinwand zu zeichnen](https://mozdevs.github.io/gamedev-js-tiles/performance/offcanvas.html) (anstatt der ganzen Karte). Das bedeutet, dass die Karte, solange kein Scrollen stattfindet, nicht gerendert werden muss.

Ein Nachteil dieses Ansatzes ist, dass er bei Scrollvorgängen nicht besonders effizient ist. Eine bessere Methode wäre die Erstellung eines Canvas, das 2x2 Kacheln größer ist als der sichtbare Bereich, sodass es einen Kachelrand um die Ränder gibt. Das bedeutet, dass die Karte nur dann auf dem Canvas neu gezeichnet werden muss, wenn das Scrollen um eine ganze Kachel fortgeschritten ist – statt jedes Frame – während des Scrollens.

In schnellen Spielen könnte das immer noch nicht ausreichend sein. Eine alternative Methode wäre, die Kachelkarte in große Abschnitte zu unterteilen (wie eine vollständige Karte, die in 10 x 10 Kachelblöcke unterteilt ist), jeden Abschnitt außerhalb der Leinwand vorab zu rendern und dann jeden gerenderten Abschnitt als "große Kachel" in Kombination mit einem der oben besprochenen Algorithmen zu behandeln.

## Siehe auch

- Verwandte Artikel auf MDN:

  - [Implementierung statischer quadratischer Kachelkarten mit der Canvas-API](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps)
  - [Implementierung scrollender quadratischer Kachelkarten mit der Canvas-API](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps)

- Externe Ressourcen:

  - [Demos und Quellcode](https://mozdevs.github.io/gamedev-js-tiles/)
  - [Rasterteile und Beziehungen](https://www.redblobgames.com/grids/parts/) von Amit Patel (Mai 2021)
  - [Isometrische Grafik in Videospielen](https://en.wikipedia.org/wiki/Isometric_graphics_in_video_games_and_pixel_art) (Wikipedia)

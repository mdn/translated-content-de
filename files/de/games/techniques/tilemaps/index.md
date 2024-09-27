---
title: Übersicht über Tiles und Tilemaps
slug: Games/Techniques/Tilemaps
l10n:
  sourceCommit: 2b6f99e45534ce662f842d8b4d2f7845492e353c
---

{{GamesSidebar}}

Tilemaps sind eine sehr beliebte Technik in der 2D-Spieleentwicklung, bei der die Spielwelt oder Levelkarte aus kleinen, gleichmäßig geformten Bildern, den **Tiles**, aufgebaut wird. Dies führt zu Leistungs- und Speicherverbrauchsvorteilen, da keine großen Bilddateien benötigt werden, die gesamte Levelkarten enthalten, da sie aus kleinen Bildern oder Bildfragmenten mehrmals konstruiert werden. Diese Artikelsammlung behandelt die Grundlagen der Erstellung von Tilemaps mit [JavaScript](/de/docs/Web/JavaScript) und [Canvas](/de/docs/Web/API/Canvas_API) (obwohl die gleichen Techniken auf hoher Ebene in jeder Programmiersprache verwendet werden können).

Neben den Leistungsgewinnen können Tilemaps auch einem logischen Raster zugeordnet werden, das auf andere Weise in der Spiellogik verwendet werden kann (z.B. zur Erstellung eines Pfadsuchgraphen oder zur Kollisionserkennung) oder zur Erstellung eines Leveleditors.

Einige bekannte Spiele, die diese Technik verwenden, sind _Super Mario Bros_, _Pacman_, _Zelda: Link's Awakening_, _Starcraft_ und _Sim City 2000_. Denken Sie an jedes Spiel, das regelmäßig wiederkehrende Quadrate im Hintergrund verwendet, und Sie werden feststellen, dass es Tilemaps einsetzt.

## Der Tile-Atlas

Die effizienteste Art, Tile-Bilder zu speichern, ist in einem Atlas oder Spritesheet. Dies sind alle benötigten Tiles, die in einer einzelnen Bilddatei gruppiert sind. Wenn es Zeit ist, ein Tile zu zeichnen, wird nur ein kleiner Ausschnitt dieses größeren Bildes auf der Spiel-Canvas gerendert. Das untenstehende Bild zeigt einen Tile-Atlas mit 8 x 4 Tiles:

![Tile-Atlas-Bild](tile_atlas.png)

Die Verwendung eines Atlasses hat auch den Vorteil, jedem Tile auf natürliche Weise einen **Index** zuzuweisen. Dieser Index eignet sich perfekt als Tile-Identifier bei der Erstellung des Tilemap-Objekts.

## Die Datenstruktur der Tilemap

Es ist üblich, alle Informationen, die für die Handhabung von Tilemaps erforderlich sind, in derselben Datenstruktur oder demselben Objekt zu gruppieren. Diese Datenobjekte ([Beispiel eines Kartenobjekts](https://github.com/mozdevs/gamedev-js-tiles/blob/gh-pages/square/no-scroll.js#L1-L18)) sollten enthalten:

- **Tile-Größe**: Die Größe jedes Tiles in Pixeln quer / Pixeln herunter.
- **Bildatlas**: Der zu verwendende Bildatlas (einer oder mehrere).
- **Kartendimensionen**: Die Abmessungen der Karte, entweder in Tiles quer / Tiles herunter oder in Pixel quer / Pixel herunter.
- **Visuelles Raster**: Enthält Indizes, die anzeigen, welcher Tile-Typ an jeder Position im Raster platziert werden soll.
- **Logisches Raster**: Dies kann ein Kollisionsraster, ein Pfadsuchraster usw. sein, abhängig von der Art des Spiels.

> [!NOTE]
> Für das visuelle Raster ist ein spezieller Wert (in der Regel eine negative Zahl, `0` oder `null`) erforderlich, um leere Tiles darzustellen.

## Quadratische Tiles

Quadratbasierte Tilemaps sind die einfachste Implementierung. Ein allgemeinerer Fall wären rechteckig basierte Tilemaps – anstelle von quadratisch – aber sie sind weit weniger verbreitet. Quadratische Tiles ermöglichen zwei **Perspektiven**:

- Von oben (wie bei vielen RPGs oder Strategiespielen wie _Warcraft 2_ oder _Final Fantasy_ in der Weltsicht).
- Seitenansicht (wie bei Plattformspielen wie _Super Mario Bros_.)

### Statische Tilemaps

Eine Tilemap kann entweder in den sichtbaren Bildschirmbereich passen oder größer sein. Im ersten Fall ist die Tilemap **statisch** – sie muss nicht gescrollt werden, um vollständig angezeigt zu werden. Dieser Fall ist sehr häufig in Arcade-Spielen wie _Pacman_, _Arkanoid_ oder _Sokoban_.

Das Rendern statischer Tilemaps ist einfach und kann mit einer verschachtelten Schleife erfolgen, die über Spalten und Zeilen iteriert. Ein Algorithmen-Ansatz auf hoher Ebene könnte sein:

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

Sie können mehr darüber lesen und eine Beispielimplementierung in [Quadratische Tilemaps-Implementierung: Statische Karten](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps) ansehen.

### Scrollende Tilemaps

**Scrollende** Tilemaps zeigen jeweils nur einen kleinen Teil der Welt. Sie können einem Charakter folgen – wie in Plattformspielen oder RPGs – oder dem Spieler erlauben, die Kamera zu steuern – wie in Strategie- oder Simulationsspielen.

#### Positionierung und Kamera

In allen scrollenden Spielen benötigen wir eine Übersetzung zwischen **Weltkoordinaten** (der Position, an der sich Sprites oder andere Elemente in der Ebene oder Spielwelt befinden) und **Bildschirmkoordinaten** (der tatsächlichen Position, an der diese Elemente auf dem Bildschirm gerendert werden). Die Weltkoordinaten können je nach Spiel in Bezug auf die Tile-Position (Zeile und Spalte der Karte) oder in Pixeln über die Karte hinweg ausgedrückt werden. Um die Weltkoordinaten in Bildschirmkoordinaten transformieren zu können, benötigen wir die Koordinaten der Kamera, da sie bestimmen, welcher Abschnitt der Welt angezeigt wird.

Hier sind Beispiele, wie man von Weltkoordinaten zu Bildschirmkoordinaten übersetzt und umgekehrt:

```js
// these functions assume that the camera points to the top left corner

function worldToScreen(x, y) {
  return { x: x - camera.x, y: y - camera.y };
}

function screenToWorld(x, y) {
  return { x: x + camera.x, y: y + camera.y };
}
```

#### Rendern

Eine triviale Methode zur Darstellung wäre, über alle Tiles zu iterieren (wie in statischen Tilemaps) und sie zu zeichnen, wobei die Kamerakoordinaten abgezogen werden (wie im Beispiel `worldToScreen()` oben gezeigt) und die Teile, die außerhalb des Sichtfensters liegen, einfach dort bleiben und verborgen sind. Das Zeichnen aller nicht sichtbaren Tiles ist jedoch verschwenderisch und kann die Leistung beeinträchtigen. **Idealerweise sollten nur die sichtbaren Tiles gerendert werden** – siehe den Abschnitt [Leistung](#leistung) für weitere Ideen zur Verbesserung der Renderleistung.

Sie können mehr über die Implementierung von scrollenden Tilemaps erfahren und einige Beispielimplementierungen in [Quadratische Tilemaps-Implementierung: Scrollende Karten](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps) sehen.

### Ebenen

Das visuelle Raster besteht oft aus mehreren Ebenen. Dies ermöglicht es uns, eine reichhaltigere Spielwelt mit weniger Tiles zu haben, da dasselbe Bild mit unterschiedlichen Hintergründen verwendet werden kann. Zum Beispiel könnte ein Fels, der auf mehreren Geländetypen (wie Gras, Sand oder Ziegel) erscheinen könnte, auf einer eigenen separaten Kachel enthalten sein, die dann in einer neuen Ebene gerendert wird, anstatt mehrere Felstiles, jeweils mit einem anderen Hintergrund.

Wenn Charaktere oder andere Spielsprites in der Mitte des Ebenenstapels gezeichnet werden, ermöglicht dies interessante Effekte wie das Gehen von Charakteren hinter Bäumen oder Gebäuden.

Der folgende Screenshot zeigt ein Beispiel für beide Punkte: ein Charakter, der _hinter_ einer Kachel erscheint (der Ritter, der hinter der Spitze eines Baumes erscheint) und eine Kachel (der Busch), die über verschiedenen Geländetypen gerendert wird.

![Ein Raster von gestapelten Hintergrundgeländen. Eine Buschkachel wird oben über ein großes Grasgelände und nochmals über ein geschichtetes rechteckiges Gelände mit braunem Sand am unteren Rand gerendert. Eine Baumkachel wird unten links über das Grasgelände und erneut unten rechts gerendert. Eine Ritterkachel erscheint hinter der Baumkachel, die unten links gerendert wird.](screen_shot_2015-10-06_at_15.56.05.png)

### Das logische Raster

Da Tilemaps ein tatsächliches Raster von visuellen Tiles sind, ist es üblich, eine Abbildung zwischen diesem visuellen Raster und einem logischen Raster zu erstellen. Der häufigste Fall ist die Verwendung dieses logischen Rasters zur Handhabung von Kollisionen, aber auch andere Verwendungen sind möglich: Charakter-Spawnpunkte, Erkennung, ob einige Elemente richtig zusammen angeordnet sind, um eine bestimmte Aktion auszulösen (wie in _Tetris_ oder _Bejeweled_), Pfadsuchalgorithmen usw.

> [!NOTE]
> Sie können sich unsere Demo ansehen, die zeigt, [wie man ein logisches Raster zur Kollisionsbehandlung verwendet](https://mozdevs.github.io/gamedev-js-tiles/square/logic-grid.html).

## Isometrische Tilemaps

Isometrische Tilemaps erzeugen die Illusion einer 3D-Umgebung und sind in 2D-Simulations-, Strategie- oder RPG-Spielen äußerst beliebt. Einige dieser Spiele sind _SimCity 2000_, _Pharaoh_ oder _Final Fantasy Tactics_. Das untenstehende Bild zeigt ein Beispiel für einen Atlas für ein isometrisches Tileset.

![Eine 3x4 Karte von unterschiedlich gefärbten Tiles in isometrischer Projektion](iso_tiles.png)

## Leistung

Das Zeichnen scrollender Tilemaps kann die Leistung beeinträchtigen. In der Regel müssen einige Techniken implementiert werden, damit das Scrollen flüssig bleibt. Der erste Ansatz, wie oben beschrieben, besteht darin, **nur sichtbare Tiles zu zeichnen**. Aber manchmal reicht das nicht aus.

Eine einfache Technik besteht darin, die Karte auf einer eigenen Canvas vorzuzeichnen (bei Verwendung der Canvas-API) oder auf einer Textur (bei Verwendung von WebGL), so dass Tiles nicht jedes Bild neu gezeichnet werden müssen und das Rendern in nur einem Blit-Vorgang erfolgen kann. Natürlich löst das Problem bei einer großen Karte nicht wirklich – und einige Systeme haben keine sehr großzügige Begrenzung, wie groß eine Textur sein kann.

Eine Möglichkeit besteht darin, [den Abschnitt, der sichtbar sein wird, außerhalb der Leinwand zu zeichnen](https://mozdevs.github.io/gamedev-js-tiles/performance/offcanvas.html) (anstelle der gesamten Karte). Das bedeutet, dass solange es kein Scrollen gibt, die Karte nicht gerendert werden muss.

Ein Nachteil dieses Ansatzes ist, dass bei einem Scrollen diese Technik nicht sehr effizient ist. Eine bessere Methode wäre, eine Leinwand zu erstellen, die 2x2 Tiles größer als der sichtbare Bereich ist, sodass ein Tile rund um die Ränder "ausblutet". Das bedeutet, dass die Karte nur dann neu auf der Leinwand gezeichnet werden muss, wenn das Scrollen um ein ganzes Tile vorangeschritten ist – anstatt jedes Bild – während des Scrollens.

In schnellen Spielen könnte das immer noch nicht ausreichen. Eine alternative Methode wäre, die Tilemap in große Abschnitte zu unterteilen (wie eine vollständige Karte, die in 10 x 10 Tile-Teile unterteilt ist), jeden außerhalb der Leinwand vorzurendern und dann jeden gerenderten Abschnitt als "große Kachel" in Kombination mit einem der oben diskutierten Algorithmen zu behandeln.

## Siehe auch

- Verwandte Artikel auf dem MDN:

  - [Statische quadratische Tilemaps-Implementierung mit Canvas API](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps)
  - [Scrollende quadratische Tilemaps-Implementierung mit Canvas API](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps)

- Externe Ressourcen:

  - [Demos und Quellcode](https://mozdevs.github.io/gamedev-js-tiles/)
  - [Rasterteile und Beziehungen](https://www.redblobgames.com/grids/parts/) von Amit Patel (Mai 2021)
  - [Isometrische Grafik in Videospielen](https://en.wikipedia.org/wiki/Isometric_graphics_in_video_games_and_pixel_art) (Wikipedia)

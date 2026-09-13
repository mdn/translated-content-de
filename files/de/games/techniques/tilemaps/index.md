---
title: Überblick über Tiles und Tilemaps
slug: Games/Techniques/Tilemaps
l10n:
  sourceCommit: 964ab8ae30c5ce0a343cc6d0f28c1b94389bae89
---

Tilemaps sind eine sehr beliebte Technik in der 2D-Spieleentwicklung. Dabei wird die Spielwelt oder Levelkarte aus kleinen, regelmäßig geformten Bildern aufgebaut, die **Tiles** genannt werden. Dies führt zu Vorteilen bei Performance und Speichernutzung — große Bilddateien, die vollständige Levelkarten enthalten, werden nicht benötigt, da diese mehrfach aus kleinen Bildern oder Bildfragmenten zusammengesetzt werden. Diese Artikelreihe behandelt die Grundlagen der Erstellung von Tilemaps mit [JavaScript](/de/docs/Web/JavaScript) und [Canvas](/de/docs/Web/API/Canvas_API) (obwohl dieselben übergeordneten Techniken in jeder Programmiersprache verwendet werden könnten).

Neben den Performance-Vorteilen können Tilemaps auch einem logischen Raster zugeordnet werden, das auf andere Weise innerhalb der Spiellogik verwendet werden kann (beispielsweise zum Erstellen eines Wegfindungsgraphen oder zur Behandlung von Kollisionen) oder um einen Level-Editor zu erstellen.

Einige beliebte Spiele, die diese Technik verwenden, sind _Super Mario Bros_, _Pacman_, _Zelda: Link's Awakening_, _Starcraft_ und _Sim City 2000_. Denken Sie an ein beliebiges Spiel, das regelmäßig wiederkehrende Hintergrundquadrate verwendet, und Sie werden wahrscheinlich feststellen, dass es Tilemaps nutzt.

## Der Tile-Atlas

Die effizienteste Möglichkeit, Tile-Bilder zu speichern, ist in einem Atlas oder Spritesheet. Dabei werden alle benötigten Tiles in einer einzigen Bilddatei zusammengefasst. Wenn ein Tile gezeichnet werden soll, wird nur ein kleiner Abschnitt dieses größeren Bildes auf dem Spiel-Canvas gerendert. Das folgende Bild zeigt einen Tile-Atlas mit 8 x 4 Tiles:

![Bild eines Tile-Atlas](tile_atlas.png)

Die Verwendung eines Atlas bietet außerdem den Vorteil, dass jedem Tile auf natürliche Weise ein **Index** zugewiesen wird. Dieser Index eignet sich hervorragend als Tile-Identifier beim Erstellen des Tilemap-Objekts.

## Die Datenstruktur einer Tilemap

Üblicherweise werden alle Informationen, die für die Verarbeitung von Tilemaps erforderlich sind, in derselben Datenstruktur oder demselben Objekt gruppiert. Diese Datenobjekte ([Beispiel für ein Map-Objekt](https://github.com/mozdevs/gamedev-js-tiles/blob/gh-pages/square/no-scroll.js#L1-L18)) sollten Folgendes enthalten:

- **Tile-Größe**: Die Größe jedes Tiles in Pixeln horizontal / Pixeln vertikal.
- **Bildatlas**: Der verwendete Bildatlas (einer oder mehrere).
- **Map-Abmessungen**: Die Abmessungen der Map, entweder in Tiles horizontal / Tiles vertikal oder in Pixeln horizontal / Pixeln vertikal.
- **Visuelles Raster**: Enthält Indizes, die angeben, welcher Tile-Typ an jeder Position im Raster platziert werden soll.
- **Logisches Raster**: Dies kann je nach Spieltyp ein Kollisionsraster, ein Wegfindungsraster usw. sein.

> [!NOTE]
> Für das visuelle Raster wird ein spezieller Wert (üblicherweise eine negative Zahl, `0` oder `null`) benötigt, um leere Tiles darzustellen.

## Quadratische Tiles

Tilemaps auf Basis quadratischer Tiles sind die einfachste Implementierung. Ein allgemeinerer Fall wären Tilemaps auf Basis rechteckiger statt quadratischer Tiles — diese sind jedoch deutlich seltener. Quadratische Tiles ermöglichen zwei **Perspektiven**:

- Draufsicht (wie bei vielen RPGs oder Strategiespielen wie _Warcraft 2_ oder der Weltansicht von _Final Fantasy_.)
- Seitenansicht (wie bei Plattformspielen wie _Super Mario Bros_.)

### Statische Tilemaps

Eine Tilemap kann entweder in den sichtbaren Bildschirmbereich passen oder größer sein. Im ersten Fall ist die Tilemap **statisch** — sie muss nicht gescrollt werden, um vollständig angezeigt zu werden. Dieser Fall ist bei Arcade-Spielen wie _Pacman_, _Arkanoid_ oder _Sokoban_ sehr häufig.

Das Rendern statischer Tilemaps ist einfach und kann mit einer verschachtelten Schleife erfolgen, die über Spalten und Zeilen iteriert. Ein Algorithmus auf hoher Ebene könnte folgendermaßen aussehen:

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

Weitere Informationen dazu sowie eine Beispielimplementierung finden Sie unter [Implementierung quadratischer Tilemaps: Statische Maps](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps).

### Scrollende Tilemaps

**Scrollende** Tilemaps zeigen jeweils nur einen kleinen Teil der Welt. Sie können einer Figur folgen — wie bei Plattformspielen oder RPGs — oder dem Spieler die Steuerung der Kamera ermöglichen — wie bei Strategie- oder Simulationsspielen.

#### Positionierung und Kamera

In allen scrollenden Spielen benötigen wir eine Umrechnung zwischen **Weltkoordinaten** (der Position, an der sich Sprites oder andere Elemente im Level oder in der Spielwelt befinden) und **Bildschirmkoordinaten** (der tatsächlichen Position, an der diese Elemente auf dem Bildschirm gerendert werden). Die Weltkoordinaten können je nach Spiel als Tile-Position (Zeile und Spalte der Map) oder als Pixel innerhalb der Map ausgedrückt werden. Um Weltkoordinaten in Bildschirmkoordinaten umwandeln zu können, benötigen wir die Koordinaten der Kamera, da diese bestimmen, welcher Abschnitt der Welt angezeigt wird.

Hier sind Beispiele dafür, wie Weltkoordinaten in Bildschirmkoordinaten und wieder zurück übersetzt werden:

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

Eine triviale Rendering-Methode würde einfach über alle Tiles iterieren (wie bei statischen Tilemaps) und sie zeichnen, wobei die Kamerakoordinaten abgezogen werden (wie im oben gezeigten Beispiel `worldToScreen()`) und die Teile außerhalb des Sichtfensters dort verborgen bleiben. Das Zeichnen aller nicht sichtbaren Tiles ist jedoch verschwenderisch und kann die Performance beeinträchtigen. Idealerweise sollten **nur sichtbare Tiles gerendert werden** — weitere Ideen zur Verbesserung der Rendering-Performance finden Sie im Abschnitt [Performance](#performance).

Weitere Informationen zur Implementierung scrollender Tilemaps sowie einige Beispielimplementierungen finden Sie unter [Implementierung quadratischer Tilemaps: Scrollende Maps](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps).

### Ebenen

Das visuelle Raster besteht häufig aus mehreren Ebenen. Dadurch können wir mit weniger Tiles eine reichhaltigere Spielwelt erstellen, da dasselbe Bild mit verschiedenen Hintergründen verwendet werden kann. Beispielsweise könnte ein Felsen auf mehreren Geländetypen erscheinen (etwa Gras, Sand oder Ziegel). Statt mehrere Felsen-Tiles mit jeweils unterschiedlichem Hintergrundgelände zu verwenden, kann er auf einem eigenen separaten Tile enthalten sein, das anschließend auf einer neuen Ebene gerendert wird.

Wenn Figuren oder andere Spiel-Sprites in der Mitte des Ebenenstapels gezeichnet werden, ermöglicht dies interessante Effekte, etwa dass Figuren hinter Bäumen oder Gebäuden laufen.

Der folgende Screenshot zeigt ein Beispiel für beide Aspekte: Eine Figur erscheint _hinter_ einem Tile (der Ritter hinter dem oberen Teil eines Baums), und ein Tile (der Busch) wird über verschiedenen Geländetypen gerendert.

![Ein Raster geschichteter Hintergrundgelände. Ein Busch-Tile wird oben über einem großen Grasgelände und erneut über einem geschichteten rechteckigen Gelände mit braunem Sand am unteren Rand gerendert. Ein Baum-Tile wird unten links über dem Grasgelände und erneut unten rechts gerendert. Ein Ritter-Tile erscheint hinter dem Baum-Tile, das unten links gerendert wird.](screen_shot_2015-10-06_at_15.56.05.png)

### Das logische Raster

Da Tilemaps tatsächliche Raster visueller Tiles sind, ist es üblich, eine Zuordnung zwischen diesem visuellen Raster und einem logischen Raster zu erstellen. Der häufigste Anwendungsfall ist die Behandlung von Kollisionen mithilfe dieses logischen Rasters. Es sind jedoch auch andere Verwendungen möglich: Spawn-Punkte für Figuren, die Erkennung, ob bestimmte Elemente auf die richtige Weise zusammen platziert sind, um eine bestimmte Aktion auszulösen (wie bei _Tetris_ oder _Bejeweled_), Wegfindungsalgorithmen usw.

> [!NOTE]
> Sehen Sie sich unsere Demo an, die zeigt, [wie ein logisches Raster zur Behandlung von Kollisionen verwendet wird](https://mozdevs.github.io/gamedev-js-tiles/square/logic-grid.html).

## Isometrische Tilemaps

Isometrische Tilemaps erzeugen die Illusion einer 3D-Umgebung und sind in 2D-Simulations-, Strategie- oder RPG-Spielen äußerst beliebt. Zu diesen Spielen gehören _SimCity 2000_, _Pharaoh_ oder _Final Fantasy Tactics_. Das folgende Bild zeigt ein Beispiel für einen Atlas eines isometrischen Tilesets.

![Eine 3x4-Map aus verschiedenfarbigen Tiles in isometrischer Projektion](iso_tiles.png)

## Performance

Das Zeichnen scrollender Tilemaps kann die Performance beeinträchtigen. In der Regel müssen einige Techniken implementiert werden, damit das Scrollen flüssig erfolgen kann. Der erste Ansatz besteht, wie oben erläutert, darin, **nur Tiles zu zeichnen, die sichtbar sein werden**. Manchmal reicht dies jedoch nicht aus.

Eine einfache Technik besteht darin, die Map auf einem eigenen Canvas vorab zu rendern (bei Verwendung der Canvas API) oder auf einer Textur (bei Verwendung von WebGL), sodass Tiles nicht in jedem Frame neu gezeichnet werden müssen und das Rendering in nur einer Blitting-Operation erfolgen kann. Wenn die Map groß ist, löst dies das Problem natürlich nicht wirklich — und manche Systeme haben kein besonders großzügiges Limit dafür, wie groß eine Textur sein kann.

Eine Möglichkeit besteht darin, [den sichtbaren Abschnitt außerhalb des Canvas zu zeichnen](https://mozdevs.github.io/gamedev-js-tiles/performance/offcanvas.html) (anstatt der gesamten Map). Das bedeutet, dass die Map nicht gerendert werden muss, solange kein Scrollen stattfindet.

Ein Nachteil dieses Ansatzes ist, dass diese Technik bei _vorhandenem_ Scrollen nicht besonders effizient ist. Eine bessere Methode wäre, einen Canvas zu erstellen, der um 2x2 Tiles größer als der sichtbare Bereich ist, sodass an den Rändern jeweils ein Tile als „Überstand“ vorhanden ist. Das bedeutet, dass die Map während des Scrollens nur dann auf dem Canvas neu gezeichnet werden muss, wenn das Scrollen um ein vollständiges Tile vorangeschritten ist — statt in jedem Frame.

Bei schnellen Spielen reicht dies möglicherweise noch immer nicht aus. Eine alternative Methode wäre, die Tilemap in große Abschnitte aufzuteilen (etwa eine vollständige Map in 10 x 10 große Tile-Blöcke), jeden Abschnitt außerhalb des Canvas vorab zu rendern und anschließend jeden gerenderten Abschnitt in Kombination mit einem der oben beschriebenen Algorithmen als „großes Tile“ zu behandeln.

## Siehe auch

- Verwandte Artikel auf MDN:
  - [Implementierung statischer quadratischer Tilemaps mit Canvas API](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps)
  - [Implementierung scrollender quadratischer Tilemaps mit Canvas API](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps)

- Externe Ressourcen:
  - [Demos und Quellcode](https://mozdevs.github.io/gamedev-js-tiles/)
  - [Rasterteile und Beziehungen](https://www.redblobgames.com/grids/parts/) von Amit Patel (Mai 2021)
  - [Isometrische Grafiken in Videospielen](https://en.wikipedia.org/wiki/Isometric_graphics_in_video_games_and_pixel_art) (Wikipedia)

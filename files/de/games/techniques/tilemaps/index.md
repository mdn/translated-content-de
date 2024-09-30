---
title: Übersicht über Kacheln und Kachelkarten
slug: Games/Techniques/Tilemaps
l10n:
  sourceCommit: 2b6f99e45534ce662f842d8b4d2f7845492e353c
---

{{GamesSidebar}}

Kachelkarten sind eine sehr beliebte Technik in der 2D-Spielentwicklung, bei der die Spielwelt oder Kartenebene aus kleinen, regelmäßig geformten Bildern zusammengesetzt wird, die als **Kacheln** bezeichnet werden. Dies führt zu Leistungs- und Speicherplatzeinsparungen — große Bilddateien, die ganze Karten enthalten, sind nicht notwendig, da diese aus kleinen Bildern oder Bildfragmenten mehrfach konstruiert werden. Diese Artikelsammlung behandelt die Grundlagen der Erstellung von Kachelkarten unter Verwendung von [JavaScript](/de/docs/Web/JavaScript) und [Canvas](/de/docs/Web/API/Canvas_API) (obwohl die gleichen hochrangigen Techniken in jeder Programmiersprache verwendet werden könnten).

Neben den Leistungsgewinnen können Kachelkarten auch auf ein logisches Raster abgebildet werden, das in der Spiellogik auf andere Weise genutzt werden kann (zum Beispiel zur Erstellung eines pfadfindenden Graphen oder zur Handhabung von Kollisionen) oder um einen Level-Editor zu erstellen.

Einige beliebte Spiele, die diese Technik nutzen, sind _Super Mario Bros_, _Pacman_, _Zelda: Link's Awakening_, _Starcraft_ und _Sim City 2000_. Denken Sie an jedes Spiel, das regelmäßig wiederkehrende Quadrate im Hintergrund verwendet, und Sie werden wahrscheinlich feststellen, dass es Kachelkarten verwendet.

## Das Kachel-Atlas

Die effizienteste Art, die Kachelbilder zu speichern, ist in einem Atlas oder Spritesheet. Dabei werden alle benötigten Kacheln in einer einzigen Bilddatei zusammengefasst. Wenn es Zeit ist, eine Kachel zu zeichnen, wird nur ein kleiner Abschnitt dieses größeren Bildes auf der Spiel-Leinwand gerendert. Die untenstehenden Bilder zeigen einen Kachel-Atlas von 8 x 4 Kacheln:

![Kachel-Atlas Bild](tile_atlas.png)

Die Verwendung eines Atlas hat auch den Vorteil, dass jeder Kachel automatisch ein **Index** zugewiesen wird. Dieser Index ist perfekt geeignet, um als Kachelkennung beim Erstellen des Kachelkartenspeichers verwendet zu werden.

## Die Kachelkarten-Datenstruktur

Es ist üblich, alle Informationen, die zur Verwaltung von Kachelkarten benötigt werden, in dieselbe Datenstruktur oder dasselbe Objekt zu gruppieren. Diese Datenobjekte ([Beispiel eines Kartenobjekts](https://github.com/mozdevs/gamedev-js-tiles/blob/gh-pages/square/no-scroll.js#L1-L18)) sollten enthalten:

- **Kachelgröße**: Die Größe jeder Kachel in Pixeln quer / Pixeln hoch.
- **Bildatlas**: Der Bildatlas, der verwendet werden soll (ein oder mehrere).
- **Kartendimensionen**: Die Dimensionen der Karte, entweder in Kacheln quer / Kacheln hoch oder in Pixeln quer / Pixeln hoch.
- **Visuelles Raster**: Beinhaltet Indizes, die anzeigen, welche Art von Kachel an jeder Position im Raster platziert werden soll.
- **Logikraster**: Dies kann ein Kollisionsraster, ein pfadfindendes Raster usw. sein, abhängig von der Art des Spiels.

> [!NOTE]
> Für das visuelle Raster ist ein spezieller Wert (in der Regel eine negative Zahl, `0` oder `null`) erforderlich, um leere Kacheln darzustellen.

## Quadratische Kacheln

Quadratbasierte Kachelkarten sind die einfachste Implementierung. Ein allgemeinere Fall wären rechteckig basierte Kachelkarten — anstatt quadratische — aber diese sind weit weniger verbreitet. Quadratische Kacheln ermöglichen zwei **Perspektiven**:

- Draufsicht (wie viele RPGs oder Strategiespiele wie _Warcraft 2_ oder _Final Fantasy_'s Weltansicht).
- Seitenansicht (wie Plattformspiele wie _Super Mario Bros_.)

### Statische Kachelkarten

Eine Kachelkarte kann entweder in den sichtbaren Bildschirmbereich passen oder größer sein. Im ersten Fall ist die Kachelkarte **statisch** — sie muss nicht gescrollt werden, um vollständig angezeigt zu werden. Dieser Fall ist sehr häufig bei Arcade-Spielen wie _Pacman_, _Arkanoid_ oder _Sokoban_.

Das Rendern statischer Kachelkarten ist einfach und kann mit einer verschachtelten Schleife durchgeführt werden, die über Spalten und Zeilen iteriert. Ein hochrangiger Algorithmus könnte sein:

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

**Scrollende** Kachelkarten zeigen jeweils nur einen kleinen Abschnitt der Welt. Sie können einem Charakter folgen — wie bei Plattformspielen oder RPGs — oder dem Spieler erlauben, die Kamera zu steuern — wie in Strategie- oder Simulationsspielen.

#### Positionierung und Kamera

In allen scrollenden Spielen benötigen wir eine Übersetzung zwischen **Weltkoordinaten** (die Position, an der sich Sprites oder andere Elemente im Level oder in der Spielwelt befinden) und **Bildschirmkoordinaten** (die tatsächliche Position, an der diese Elemente auf dem Bildschirm gerendert werden). Die Weltkoordinaten können in Bezug auf die Kachelposition (Zeile und Spalte der Karte) oder in Pixeln über die Karte ausgedrückt werden, abhängig vom Spiel. Um die Weltkoordinaten in Bildschirmkoordinaten umwandeln zu können, benötigen wir die Koordinaten der Kamera, da sie bestimmen, welcher Abschnitt der Welt angezeigt wird.

Hier sind Beispiele, die zeigen, wie man von Weltkoordinaten zu Bildschirmkoordinaten und zurück übersetzt:

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

Eine triviale Methode zum Rendern wäre, einfach alle Kacheln zu durchlaufen (wie in statischen Kachelkarten) und sie zu zeichnen, wobei die Kamerakoordinaten subtrahiert werden (wie im oben gezeigten `worldToScreen()`-Beispiel) und die Teile, die außerhalb des Sichtfensters liegen, dort sitzen zu lassen, verdeckt. Es ist jedoch verschwenderisch, alle nicht sichtbaren Kacheln zu zeichnen, und es kann die Leistung beeinträchtigen. **Idealerweise sollten nur Kacheln gerendert werden, die sichtbar sind** — siehe den Abschnitt [Leistung](#leistung) für weitere Ideen zur Verbesserung der Rendering-Leistung.

Sie können mehr über die Implementierung scrollender Kachelkarten lesen und einige Beispielimplementierungen in [Quadratische Kachelkarten-Implementierung: Scrollende Karten](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps) sehen.

### Ebenen

Das visuelle Raster besteht oft aus mehreren Ebenen. Dies ermöglicht uns, eine reichere Spielwelt mit weniger Kacheln zu haben, da dasselbe Bild mit verschiedenen Hintergründen verwendet werden kann. Zum Beispiel könnte ein Felsen, der auf verschiedenen Geländearten (wie Gras, Sand oder Stein) erscheinen könnte, in einem eigenen separaten Kachel enthalten sein, der dann auf einer neuen Ebene gerendert wird, anstatt mehrere Felsenkacheln, jeweils mit unterschiedlichem Hintergrundterrain.

Wenn Charaktere oder andere Spielfiguren in der Mitte des Ebenenstapels gezeichnet werden, ermöglicht dies interessante Effekte wie das Gehen von Charakteren hinter Bäume oder Gebäude.

Der folgende Screenshot zeigt ein Beispiel für beide Punkte: ein Charakter erscheint _hinter_ einer Kachel (der Ritter erscheint hinter der Spitze eines Baumes) und eine Kachel (der Busch) wird über verschiedenen Geländearten gerendert.

![Ein Raster von geschichteten Hintergrundgeländen. Eine Busch-Kachel ist oben gerendert, über einem großen Grasland, und erneut über einem geschichteten rechteckigen Gelände mit braunem Sand am unteren Rand. Eine Baum-Kachel ist über das Grasgelände links unten und erneut rechts unten gerendert. Eine Ritter-Kachel erscheint hinter der Baum-Kachel, die links unten gerendert ist.](screen_shot_2015-10-06_at_15.56.05.png)

### Das Logikraster

Da Kachelkarten ein tatsächliches Raster von visuellen Kacheln sind, ist es üblich, eine Zuordnung zwischen diesem visuellen Raster und einem Logikraster zu erstellen. Der häufigste Fall ist, dieses Logikraster zur Handhabung von Kollisionen zu verwenden, aber auch andere Verwendungen sind möglich: Charakter-Spawn-Punkte, Erkennung, ob einige Elemente auf die richtige Weise zusammen platziert wurden, um eine bestimmte Aktion auszulösen (wie bei _Tetris_ oder _Bejeweled_), Pfadfindungsalgorithmen usw.

> [!NOTE]
> Sie können sich unser Demo ansehen, das zeigt, [wie man ein Logikraster zur Handhabung von Kollisionen verwendet](https://mozdevs.github.io/gamedev-js-tiles/square/logic-grid.html).

## Isometrische Kachelkarten

Isometrische Kachelkarten erzeugen die Illusion einer 3D-Umgebung und sind extrem beliebt in 2D-Simulationen, Strategie- oder RPG-Spielen. Einige dieser Spiele umfassen _SimCity 2000_, _Pharaoh_ oder _Final Fantasy Tactics_. Das folgende Bild zeigt ein Beispiel eines Atlas für ein isometrisches Kachelset.

![Eine 3x4-Karte von unterschiedlich gefärbten Kacheln in isometrischer Projektion](iso_tiles.png)

## Leistung

Das Zeichnen von scrollenden Kachelkarten kann die Leistung beeinträchtigen. In der Regel müssen einige Techniken implementiert werden, damit das Scrollen flüssig ist. Der erste Ansatz, wie oben diskutiert, besteht darin, **nur sichtbare Kacheln zu zeichnen**. Aber manchmal ist das nicht genug.

Eine einfache Technik besteht darin, die Karte auf einer eigenen Leinwand vorzurendern (wenn die Canvas API verwendet wird) oder auf einer Textur (wenn WebGL verwendet wird), damit die Kacheln nicht in jedem Frame neu gezeichnet werden müssen und das Rendering in nur einem Blitting-Vorgang erfolgen kann. Natürlich ist dies keine wirkliche Lösung, wenn die Karte groß ist — und einige Systeme haben kein sehr großzügiges Limit, wie groß eine Textur sein kann.

Ein Weg besteht darin, [den Abschnitt, der sichtbar sein wird, Off-Canvas zu zeichnen](https://mozdevs.github.io/gamedev-js-tiles/performance/offcanvas.html) (anstatt der gesamten Karte). Das bedeutet, dass solange kein Scrollen erfolgt, die Karte nicht gerendert werden muss.

Ein Nachteil dieses Ansatzes ist, dass wenn gescrollt wird, diese Technik nicht sehr effizient ist. Eine bessere Methode wäre, eine Leinwand zu erstellen, die 2x2 Kacheln größer ist als das sichtbare Gebiet, sodass um die Ränder herum eine Kachel "blutet". Das bedeutet, dass die Karte nur auf der Leinwand neu gezeichnet werden muss, wenn das Scrollen um eine vollständige Kachel fortgeschritten ist — anstatt in jedem Frame — während des Scrollens.

In schnellen Spielen könnte das immer noch nicht ausreichen. Eine alternative Methode wäre, die Kachelkarte in große Abschnitte (z. B. eine vollständige Karte aufgeteilt in 10 x 10 Kacheln) zu teilen, jeden Abschnitt außerhalb der Leinwand vorzurendern und dann jeden gerenderten Abschnitt als "große Kachel" in Kombination mit einem der oben diskutierten Algorithmen zu behandeln.

## Siehe auch

- Verwandte Artikel auf MDN:

  - [Statische quadratische Kachelkarten-Implementierung mit Canvas API](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps)
  - [Scrollende quadratische Kachelkarten-Implementierung mit Canvas API](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps)

- Externe Ressourcen:

  - [Demos und Quellcode](https://mozdevs.github.io/gamedev-js-tiles/)
  - [Rasterteile und Beziehungen](https://www.redblobgames.com/grids/parts/) von Amit Patel (Mai 2021)
  - [Isometrische Grafik in Videospielen](https://en.wikipedia.org/wiki/Isometric_graphics_in_video_games_and_pixel_art) (Wikipedia)

---
title: Überblick über Kacheln und Kachelkarten
slug: Games/Techniques/Tilemaps
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Kachelkarten sind eine sehr beliebte Technik in der 2D-Spielentwicklung, bei der die Spielwelt oder Kartenebene aus kleinen, gleichmäßig geformten Bildern, den sogenannten **Kacheln**, aufgebaut wird. Dies führt zu Leistungs- und Speichervorteilen — große Bilddateien, die komplette Kartenebenen enthalten, werden nicht benötigt, da sie aus kleinen Bildern oder Bildausschnitten mehrfach zusammengesetzt werden. Diese Artikelreihe behandelt die Grundlagen der Erstellung von Kachelkarten mit [JavaScript](/de/docs/Web/JavaScript) und [Canvas](/de/docs/Web/API/Canvas_API) (obwohl dieselben hochrangigen Techniken in jeder Programmiersprache verwendet werden könnten).

Neben den Leistungsgewinnen können Kachelkarten auch einer logischen Rasterung entsprechend abgebildet werden, die auf andere Weise in der Spiellogik verwendet werden kann (z. B. zum Erstellen eines Pfadfindungsgraphen oder zur Kollisionsbehandlung) oder zur Erstellung eines Level-Editors.

Einige beliebte Spiele, die diese Technik verwenden, sind _Super Mario Bros_, _Pacman_, _Zelda: Link's Awakening_, _Starcraft_ und _Sim City 2000_. Denken Sie an jedes Spiel, das regelmäßig wiederkehrende Quadrate im Hintergrund verwendet, und Sie werden wahrscheinlich feststellen, dass es Kachelkarten verwendet.

## Das Kachel-Atlas

Die effizienteste Möglichkeit, die Kachelbilder zu speichern, ist in einem Atlas oder Spritesheet. Dies sind alle erforderlichen Kacheln, die in einer einzigen Bilddatei zusammengefasst sind. Wenn es Zeit zum Zeichnen einer Kachel ist, wird nur ein kleiner Abschnitt dieses größeren Bildes auf der Spiel-Canvas gerendert. Die folgenden Bilder zeigen einen Kachel-Atlas von 8 x 4 Kacheln:

![Kachel-Atlas Bild](tile_atlas.png)

Die Verwendung eines Atlas hat auch den Vorteil, dass jeder Kachel natürlich ein **Index** zugewiesen wird. Dieser Index eignet sich perfekt als Kachelbezeichner, wenn das Kachelkartenobjekt erstellt wird.

## Die Kachelkarte-Datenstruktur

Es ist üblich, alle Informationen, die benötigt werden, um Kachelkarten zu verwalten, in derselben Datenstruktur oder Objekt zusammenzufassen. Diese Datenobjekte ([Beispiel eines Kartenobjekts](https://github.com/mozdevs/gamedev-js-tiles/blob/gh-pages/square/no-scroll.js#L1-L18)) sollten Folgendes umfassen:

- **Kachelgröße**: Die Größe jeder Kachel in Pixeln horizontal / vertikal.
- **Bildatlas**: Der Bildatlas, der verwendet wird (eine oder mehrere).
- **Kartenabmessungen**: Die Abmessungen der Karte, entweder in Kacheleinheiten horizontal / vertikal oder in Pixeln horizontal / vertikal.
- **Visuelles Raster**: Beinhaltet Indizes, die anzeigen, welche Art von Kachel an jeder Position im Raster platziert werden soll.
- **Logik-Raster**: Dies kann ein Kollisionsraster, ein Pfadfindungsraster usw. sein, abhängig von der Art des Spiels.

> [!NOTE]
> Für das visuelle Raster ist ein spezieller Wert (normalerweise eine negative Zahl, `0` oder `null`) erforderlich, um leere Kacheln darzustellen.

## Quadratische Kacheln

Auf quadratischen Basen basierende Kachelkarten sind die einfachste Implementierung. Ein allgemeinerer Fall wären rechteckige Kachelkarten — anstatt quadratische — aber sie sind viel weniger verbreitet. Quadratische Kacheln ermöglichen zwei **Perspektiven**:

- Draufsicht (wie viele RPGs oder Strategiespiele wie _Warcraft 2_ oder die Weltansicht von _Final Fantasy_.)
- Seitenansicht (wie Plattformspiele wie _Super Mario Bros_.)

### Statische Kachelkarten

Eine Kachelkarte kann entweder auf den sichtbaren Bildschirmbereich passen oder größer sein. Im ersten Fall ist die Kachelkarte **statisch** — sie muss nicht verschoben werden, um vollständig angezeigt zu werden. Dieser Fall ist in Arcade-Spielen wie _Pacman_, _Arkanoid_ oder _Sokoban_ sehr verbreitet.

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

Sie können mehr darüber lesen und eine Beispielimplementierung in [Implementierung quadratischer Kachelkarten: Statische Karten](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps) sehen.

### Scrollende Kachelkarten

**Scrollende** Kachelkarten zeigen immer nur einen kleinen Teil der Welt gleichzeitig an. Sie können einem Charakter folgen — wie in Plattform- oder RPG-Spielen — oder es dem Spieler ermöglichen, die Kamera zu steuern — wie in Strategie- oder Simulationsspielen.

#### Positionierung und Kamera

In allen scrollenden Spielen benötigen wir eine Übersetzung zwischen **Weltkoordinaten** (der Position, an der sich Sprites oder andere Elemente in der Ebene oder Spielwelt befinden) und **Bildschirmkoordinaten** (der tatsächlichen Position, an der diese Elemente auf dem Bildschirm gerendert werden). Die Weltkoordinaten können je nach Spiel in Bezug auf die Kachelposition (Reihe und Spalte der Karte) oder in Pixeln über der Karte ausgedrückt werden. Um Weltkoordinaten in Bildschirmkoordinaten umzuwandeln, benötigen wir die Koordinaten der Kamera, da diese bestimmen, welcher Abschnitt der Welt angezeigt wird.

Hier sind einige Beispiele, wie man von Weltkoordinaten zu Bildschirmkoordinaten und umgekehrt übersetzt:

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

Eine triviale Methode zum Rendern wäre, einfach über alle Kacheln zu iterieren (wie bei statischen Kachelkarten) und diese zu zeichnen, wobei die Kamerakoordinaten abgezogen werden (wie im oben gezeigten Beispiel `worldToScreen()`) und die Teile, die außerhalb des Ansichtsfensters liegen, verborgen bleiben. Das Zeichnen aller Kacheln, die nicht sichtbar sind, ist jedoch verschwenderisch und kann die Leistung beeinträchtigen. **Idealerweise sollten nur die Kacheln gerendert werden, die sichtbar sind** — siehe den Abschnitt [Leistung](#leistung) für weitere Ideen zur Verbesserung der Rendering-Leistung.

Sie können mehr über die Implementierung von scrollenden Kachelkarten lesen und einige Beispielimplementierungen in [Implementierung quadratischer Kachelkarten: Scrollende Karten](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps) sehen.

### Ebenen

Das visuelle Raster besteht oft aus mehreren Ebenen. Dies ermöglicht es uns, eine reichhaltigere Spielwelt mit weniger Kacheln zu haben, da dasselbe Bild mit unterschiedlichen Hintergründen verwendet werden kann. Zum Beispiel könnte ein Felsen, der auf mehreren Untergrundtypen (wie Gras, Sand oder Mauer) erscheinen könnte, in eine eigene separate Kachel einbezogen werden, die dann auf einer neuen Ebene gerendert wird, anstatt mehrere Felskacheln, jede mit einem anderen Hintergrund.

Wenn Charaktere oder andere Spielsprites in der Mitte des Ebenenstapels gezeichnet werden, können interessante Effekte erzielt werden, wie z. B. Charaktere, die hinter Bäumen oder Gebäuden laufen.

Der folgende Screenshot zeigt ein Beispiel für beide Punkte: ein Charakter, der _hinter_ einer Kachel erscheint (der Ritter, der hinter dem Baumgipfel erscheint) und eine Kachel (der Busch), die über unterschiedliche Untergrundtypen gerendert wird.

![Ein Raster aus überlagerten Hintergrundgeländen. Eine Busch-Kachel wird oben über eine große Grasfläche und erneut über ein rechteckiges Gelände mit braunem Sand am unteren Rand gerendert. Eine Baum-Kachel wird unten links über das Grasgelände und erneut unten rechts gerendert. Eine Ritter-Kachel erscheint hinter der Baum-Kachel, die unten links gerendert ist.](screen_shot_2015-10-06_at_15.56.05.png)

### Das Logik-Raster

Da Kachelkarten ein tatsächliches Raster aus visuellen Kacheln sind, ist es üblich, eine Zuordnung zwischen diesem visuellen Raster und einem Logik-Raster zu erstellen. Der häufigste Fall ist die Verwendung dieses Logik-Rasters zur Kollisionsbehandlung, aber auch andere Verwendungen sind möglich: Charakter-Spawn-Punkte, Erkennung, ob einige Elemente korrekt zusammen platziert sind, um eine bestimmte Aktion auszulösen (wie in _Tetris_ oder _Bejeweled_), Pfadfindungsalgorithmen usw.

> [!NOTE]
> Sie können sich unser Demo anschauen, das zeigt, [wie man ein Logik-Raster zur Kollisionsbehandlung verwendet](https://mozdevs.github.io/gamedev-js-tiles/square/logic-grid.html).

## Isometrische Kachelkarten

Isometrische Kachelkarten erzeugen die Illusion einer 3D-Umgebung und sind in 2D-Simulations-, Strategie- oder RPG-Spielen äußerst beliebt. Einige dieser Spiele sind _SimCity 2000_, _Pharaoh_ oder _Final Fantasy Tactics_. Das untenstehende Bild zeigt ein Beispiel eines Atlas für ein isometrisches Kachelset.

![Eine 3x4-Karte mit verschiedenfarbigen Kacheln in isometrischer Projektion](iso_tiles.png)

## Leistung

Das Zeichnen von scrollenden Kachelkarten kann performanceintensiv sein. In der Regel müssen einige Techniken implementiert werden, damit das Scrollen reibungslos verläuft. Der erste Ansatz, wie oben besprochen, besteht darin, **nur die Kacheln zu zeichnen, die sichtbar sein werden**. Aber manchmal reicht das nicht aus.

Eine einfache Technik besteht darin, die Karte vorab auf einer eigenen Leinwand zu rendern (bei Verwendung der Canvas API) oder auf einer Textur (bei Verwendung von WebGL), sodass Kacheln nicht in jedem Frame neu gezeichnet werden müssen und das Rendering in einer einzigen Blit-Operation erfolgen kann. Natürlich löst das Problem nicht wirklich, wenn die Karte groß ist — und einige Systeme haben keine besonders großzügige Begrenzung dafür, wie groß eine Textur sein kann.

Eine Möglichkeit besteht darin, [den sichtbaren Abschnitt außerhalb der Leinwand zu zeichnen](https://mozdevs.github.io/gamedev-js-tiles/performance/offcanvas.html) (anstatt die gesamte Karte). Das bedeutet, dass, solange kein Scrollen stattfindet, die Karte nicht neu gerendert werden muss.

Ein Nachteil dieses Ansatzes ist, dass er bei Scrollen nicht sehr effizient ist. Eine bessere Möglichkeit wäre, eine Leinwand zu erstellen, die 2x2 Kacheln größer ist als der sichtbare Bereich, sodass eine Kachel rund um die Kanten "ausbluten" kann. Das bedeutet, dass die Karte nur jedes Mal neu auf der Leinwand gerendert werden muss, wenn das Scrollen um eine ganze Kachel fortgeschritten ist — anstatt in jedem Frame während des Scrollens.

In schnellen Spielen könnte das immer noch nicht ausreichen. Eine alternative Methode besteht darin, das Kachelkartenset in große Abschnitte aufzuteilen (z. B. eine vollständige Karte in 10 x 10 Teile), jeden Abschnitt außerhalb der Leinwand vorab zu rendern und dann jeden gerenderten Abschnitt als "große Kachel" in Kombination mit einem der oben besprochenen Algorithmen zu behandeln.

## Siehe auch

- Verwandte Artikel auf MDN:
  - [Implementierung statischer quadratischer Kachelkarten mit Canvas API](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps)
  - [Implementierung scrollender quadratischer Kachelkarten mit Canvas API](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps)

- Externe Ressourcen:
  - [Demos und Quellcode](https://mozdevs.github.io/gamedev-js-tiles/)
  - [Teile und Beziehungen von Gittern](https://www.redblobgames.com/grids/parts/) von Amit Patel (Mai 2021)
  - [Isometrische Grafiken in Videospielen](https://de.wikipedia.org/wiki/Isometrische_Grafiken_in_Videospielen_und_Pixelkunst) (Wikipedia)

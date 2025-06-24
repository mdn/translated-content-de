---
title: Überblick über Kacheln und Kachelkarten
slug: Games/Techniques/Tilemaps
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{GamesSidebar}}

Kachelkarten sind eine sehr beliebte Technik in der 2D-Spieleentwicklung, bei der die Spielwelt oder die Levelkarte aus kleinen, regelmäßig geformten Bildern, sogenannten **Kacheln**, aufgebaut wird. Dies führt zu Leistungssteigerungen und einem geringeren Speicherbedarf — große Bilddateien mit gesamten Levelkarten sind nicht erforderlich, da sie aus kleinen Bildern oder Bildfragmenten mehrfach zusammengesetzt werden. Diese Artikelreihe behandelt die Grundlagen der Erstellung von Kachelkarten mit [JavaScript](/de/docs/Web/JavaScript) und [Canvas](/de/docs/Web/API/Canvas_API) (obwohl dieselben hochrangigen Techniken in jeder Programmiersprache verwendet werden könnten).

Neben den Leistungsgewinnen können Kachelkarten auch einer logischen Gitterstruktur zugeordnet werden, die auf andere Weise in der Spiellogik verwendet werden kann (z.B. zur Erstellung eines Pfadfindungsgraphen oder zur Kollisionserkennung) oder um einen Level-Editor zu erstellen.

Einige beliebte Spiele, die diese Technik verwenden, sind _Super Mario Bros_, _Pacman_, _Zelda: Link's Awakening_, _Starcraft_ und _Sim City 2000_. Denken Sie an jedes Spiel, das regelmäßig wiederkehrende Hintergrundquadrate verwendet, und Sie werden wahrscheinlich feststellen, dass es Kachelkarten verwendet.

## Das Kachelatlas

Der effizienteste Weg, die Kachelbilder zu speichern, ist in einem Atlas oder Spritesheet. Dies sind alle benötigten Kacheln, die in einer einzigen Bilddatei zusammengefasst sind. Wenn es an der Zeit ist, eine Kachel zu zeichnen, wird nur ein kleiner Abschnitt dieses größeren Bildes auf dem Spiel-Canvas gerendert. Die untenstehenden Bilder zeigen einen Kachelatlas von 8 x 4 Kacheln:

![Bild des Kachelatlasses](tile_atlas.png)

Der Einsatz eines Atlasses hat auch den Vorteil, dass jeder Kachel natürlicherweise ein **Index** zugewiesen wird. Dieser Index eignet sich perfekt als Kachelkennung beim Erstellen des Kachelkartenobjekts.

## Die Datenstruktur der Kachelkarte

Es ist üblich, alle Informationen, die zur Handhabung von Kachelkarten benötigt werden, in der gleichen Datenstruktur oder im gleichen Objekt zu gruppieren. Diese Datenobjekte ([Beispiel eines Kartenobjekts](https://github.com/mozdevs/gamedev-js-tiles/blob/gh-pages/square/no-scroll.js#L1-L18)) sollten Folgendes enthalten:

- **Kachelgröße**: Die Größe jeder Kachel in Pixeln quer / Pixel nach unten.
- **Bildatlas**: Der zu verwendende Bildatlas (einer oder mehrere).
- **Kartendimensionen**: Die Dimensionen der Karte, entweder in Kacheln quer / Kacheln nach unten oder in Pixeln quer / Pixeln nach unten.
- **Visuelles Gitter**: Enthält Indizes, die zeigen, welcher Kacheltyp an welcher Position im Gitter platziert werden sollte.
- **Logisches Gitter**: Dies kann ein Kollisionsgitter, ein Pfadfindungsgitter usw. sein, je nach Spieletype.

> [!NOTE]
> Für das visuelle Gitter wird ein spezieller Wert benötigt (meist eine negative Zahl, `0` oder `null`), um leere Kacheln darzustellen.

## Quadratische Kacheln

Quadratbasierte Kachelkarten sind die einfachste Implementierung. Ein allgemeinerer Fall wären rechteckig basierte Kachelkarten — anstelle von Quadraten —, aber diese sind weit weniger verbreitet. Quadratische Kacheln erlauben zwei **Perspektiven**:

- Von oben nach unten (wie bei vielen Rollenspielen oder Strategiespielen wie _Warcraft 2_ oder der Weltsicht von _Final Fantasy_).
- Seitenansicht (wie bei Plattformspielen wie _Super Mario Bros_.)

### Statische Kachelkarten

Eine Kachelkarte kann entweder in den sichtbaren Bildschirmbereich passen oder größer sein. Im ersten Fall ist die Kachelkarte **statisch** — sie muss nicht gescrollt werden, um vollständig angezeigt zu werden. Dieser Fall ist sehr häufig in Arcade-Spielen wie _Pacman_, _Arkanoid_ oder _Sokoban_.

Das Rendern statischer Kachelkarten ist einfach und kann mit einer verschachtelten Schleife über Spalten und Reihen erfolgen. Ein hochrangiger Algorithmus könnte sein:

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

**Scrollende** Kachelkarten zeigen immer nur einen kleinen Teil der Welt gleichzeitig. Sie können einem Charakter folgen — wie bei Plattformern oder Rollenspielen — oder dem Spieler erlauben, die Kamera zu steuern — wie in Strategie- oder Simulationsspielen.

#### Positionierung und Kamera

In allen scrollenden Spielen benötigen wir eine Übersetzung zwischen **Weltkoordinaten** (der Position, an der Sprites oder andere Elemente im Level oder in der Spielwelt lokalisiert sind) und **Bildschirmkoordinaten** (der tatsächlichen Position, an der diese Elemente auf dem Bildschirm gerendert werden). Die Weltkoordinaten können in Bezug auf die Kachelposition (Reihe und Spalte der Karte) oder in Pixel quer über die Karte ausgedrückt werden, abhängig vom Spiel. Um Weltkoordinaten in Bildschirmkoordinaten umwandeln zu können, benötigen wir die Koordinaten der Kamera, da sie bestimmen, welcher Abschnitt der Welt angezeigt wird.

Hier sind Beispiele, wie man von Weltkoordinaten zu Bildschirmkoordinaten übersetzt und wieder zurück:

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

Eine triviale Methode zum Rendern besteht einfach darin, alle Kacheln durchzugehen (wie bei statischen Kachelkarten) und sie zu zeichnen, wobei die Kamerakoordinaten abgezogen werden (wie im Beispiel `worldToScreen()` oben gezeigt) und die Teile, die außerhalb des Sichtfensters liegen, dort versteckt bleiben. Das Zeichnen aller nicht sichtbaren Kacheln ist jedoch verschwenderisch und kann die Leistung beeinträchtigen. **Nur Kacheln, die sichtbar sind, sollten idealerweise gerendert werden** — siehe den Abschnitt [Leistung](#leistung) für weitere Ideen zur Verbesserung der Renderleistung.

Sie können mehr darüber lesen, wie man scrollende Kachelkarten implementiert und einige Beispielimplementierungen in [Quadratische Kachelkarten-Implementierung: Scrollende Karten](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps) sehen.

### Ebenen

Das visuelle Gitter besteht oft aus mehreren Ebenen. Dadurch können wir eine reichhaltigere Spielwelt mit weniger Kacheln haben, da dasselbe Bild mit unterschiedlichen Hintergründen verwendet werden kann. Beispielsweise könnte ein Felsen, der auf mehreren Geländetypen (wie Gras, Sand oder Ziegel) erscheinen könnte, in seiner eigenen separaten Kachel enthalten sein, die dann auf einer neuen Ebene gerendert wird, anstatt mehrere Felskacheln jeweils mit einem anderen Hintergrundgelände zu haben.

Wenn Charaktere oder andere Spielspritzen in der Mitte des Ebenenstapels gezeichnet werden, ermöglicht dies interessante Effekte, wie dass Charaktere hinter Bäumen oder Gebäuden laufen.

Der folgende Screenshot zeigt ein Beispiel für beide Punkte: ein Charakter, der _hinter_ einer Kachel erscheint (der Ritter erscheint hinter der Spitze eines Baumes), und eine Kachel (der Busch), die über verschiedene Geländetypen gerendert wird.

![Ein Gitter aus geschichteten Hintergrundgeländen. Eine Busch-Kachel wird oben über einem großen Grasgelände gerendert und erneut über einem geschichteten rechteckigen Gelände mit braunem Sand am unteren Rand. Eine Baum-Kachel wird unten links über dem Grasgelände und erneut unten rechts gerendert. Eine Ritter-Kachel erscheint hinter der Baum-Kachel, die unten links gerendert wird.](screen_shot_2015-10-06_at_15.56.05.png)

### Das logische Gitter

Da Kachelkarten ein tatsächliches Gitter aus visuellen Kacheln sind, ist es üblich, eine Zuordnung zwischen diesem visuellen Gitter und einem logischen Gitter zu erstellen. Der häufigste Fall ist, dieses logische Gitter zur Kollisionserkennung zu verwenden, aber auch andere Verwendungen sind möglich: Charakter-Spawning-Punkte, Erkennen, ob einige Elemente zusammen in der richtigen Weise platziert sind, um eine bestimmte Aktion auszulösen (wie in _Tetris_ oder _Bejeweled_), Pfadfindungsalgorithmen usw.

> [!NOTE]
> Sie können sich unser Demo ansehen, das zeigt, [wie man ein logisches Gitter zur Handhabung von Kollisionen verwendet](https://mozdevs.github.io/gamedev-js-tiles/square/logic-grid.html).

## Isometrische Kachelkarten

Isometrische Kachelkarten erzeugen die Illusion einer 3D-Umgebung und sind äußerst beliebt in 2D-Simulations-, Strategie- oder Rollenspielen. Einige dieser Spiele sind _SimCity 2000_, _Pharaoh_ oder _Final Fantasy Tactics_. Das untenstehende Bild zeigt ein Beispiel für einen Atlas für einen isometrischen Kachelset.

![Eine 3x4 Karte von verschiedenfarbigen Kacheln in isometrischer Projektion](iso_tiles.png)

## Leistung

Das Zeichnen von scrollenden Kachelkarten kann die Leistung belasten. Normalerweise müssen einige Techniken implementiert werden, damit das Scrollen flüssig verläuft. Der erste Ansatz, wie oben besprochen, besteht darin, **nur die Kacheln zu zeichnen, die sichtbar sein werden**. Aber manchmal reicht das nicht aus.

Eine einfache Technik besteht darin, die Karte auf einem eigenen Canvas vorab zu rendern (bei Verwendung der Canvas API) oder auf einer Textur (bei Verwendung von WebGL), sodass die Kacheln nicht jedes Mal neu gezeichnet werden müssen und das Rendern in nur einem Blitting-Vorgang erfolgen kann. Natürlich, wenn die Karte groß ist, löst das nicht wirklich das Problem — und einige Systeme haben keine besonders großzügige Grenze dafür, wie groß eine Textur sein kann.

Ein Weg besteht darin, [den Bereich, der sichtbar sein wird, außerhalb des Canvas zu zeichnen](https://mozdevs.github.io/gamedev-js-tiles/performance/offcanvas.html) (anstatt der gesamten Karte). Das bedeutet, dass solange es kein Scrollen gibt, die Karte nicht neu gerendert werden muss.

Ein Nachteil dieses Ansatzes ist, dass, wenn es ein Scrollen gibt, diese Technik nicht sehr effizient ist. Ein besserer Weg wäre, ein Canvas zu erstellen, das 2x2 Kacheln größer als der sichtbare Bereich ist, sodass es eine Kachel von "Überlappung" um die Ränder gibt. Das bedeutet, dass die Karte nur dann auf dem Canvas neu gezeichnet werden muss, wenn das Scrollen eine volle Kachel fortgeschritten ist — anstatt jedes Bild zu rendern — während des Scrollens.

In schnellen Spielen könnte das immer noch nicht ausreichen. Eine alternative Methode wäre, die Kachelkarte in große Abschnitte zu teilen (wie eine vollständige Karte, die in 10 x 10 Kacheln aufgeteilt wird), jeden Abschnitt außerhalb des Canvas vorab zu rendern und dann jeden gerenderten Abschnitt als "große Kachel" in Kombination mit einem der oben genannten Algorithmen zu behandeln.

## Siehe auch

- Verwandte Artikel auf dem MDN:

  - [Implementierung von statischen quadratischen Kachelkarten mit Canvas API](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Static_maps)
  - [Implementierung von scrollenden quadratischen Kachelkarten mit Canvas API](/de/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation:_Scrolling_maps)

- Externe Ressourcen:
  - [Demos und Quellcode](https://mozdevs.github.io/gamedev-js-tiles/)
  - [Gitterteile und -beziehungen](https://www.redblobgames.com/grids/parts/) von Amit Patel (Mai 2021)
  - [Isometrische Grafiken in Videospielen](https://en.wikipedia.org/wiki/Isometric_graphics_in_video_games_and_pixel_art) (Wikipedia)

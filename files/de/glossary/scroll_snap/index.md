---
title: Scroll Snap
slug: Glossary/Scroll_snap
l10n:
  sourceCommit: a69f9903e7444d42adcf2432eaa511c05761c757
---

{{GlossarySidebar}}

**Scroll-Snapping** bedeutet, dass Inhalte beim Abschluss eines Scrollvorgangs in eine spezifische Position "einrasten", anstatt an einem beliebigen Punkt zu stoppen. Normale Scrollvorgänge fehlen an Präzision; sie richten sich nicht an einem Absatz, einem Satz oder einem Bildrand aus. In einem Karussell könnte zum Beispiel ein Scrollvorgang in der Mitte eines Bildes enden, sodass es nur teilweise sichtbar bleibt. Webentwickler haben lange auf JavaScript-basierte Lösungen zurückgegriffen. Kürzlich haben Browser begonnen, [CSS Scroll-Snapping-Features](/de/docs/Web/CSS/CSS_scroll_snap) zu unterstützen, die es ermöglichen, Scroll-Snap-Container und Einrastverhalten zu definieren.

Scroll-Snapping bietet ein wohlkontrolliertes Scroll-Erlebnis, bei dem Entwickler ein Element als {{Glossary("Scroll_container", "Scroll-Container")}} mit Grenzen für Scrollvorgänge definieren. Diese Scrollvorgänge enden dann an diesen Einrastpositionen, wobei die gescrollten Inhalte einrasten. Im obigen Karussell-Beispiel wird das sichtbare Bild, sobald der Benutzer das Scrollen des Karussells beendet, an seine Position einrasten.

- `Scroll-Snap-Container`

  - : Der **Scroll-Snap-Container** ist ein Scroll-Container mit angewendetem Scroll-Snapping. Wenn zum Beispiel eine Box überfüllten Inhalt hat und ein {{CSSXref("scroll-snap-type")}} auf einen anderen Wert als `none` gesetzt ist, dann erfasst die Box Einrastpositionen. Der Scroll-Snap-Container einer Box ist der nächstgelegene einrastpositionserfassende Scroll-Container-Vorfahre des Elements. Hat eine Box keinen Scroll-Snap-Container, lösen ihre Einrastpositionen, falls vorhanden, kein Einrasten aus.

- `Snapport`

  - : Der **Snapport** ist der Bereich des {{Glossary("Scroll_container#scrollport", "Scrollports")}}, der als Ausrichtungscontainer für die Scroll-Snap-Bereiche beim Berechnen der Einrastpositionen verwendet wird. Standardmäßig entspricht er dem visuellen Viewport des Scroll-Containers, ist jedoch der durch die {{CSSXref("scroll-padding")}}-Eigenschaft definierte Bereich des Scrollports. Die [Snap-Bereiche](#snap_area) werden zum Scrollport ausgerichtet.

- `Snap-Bereich`

  - : Der **Snap-Bereich** eines Elements in einem Scroll-Container ist der Bereich, der mit den Ausmaßen des {{CSSXref("scroll-margin")}} definiert wird, die am Element angegeben sind. Der Snap-Bereich wird verwendet, um das Element an seinen Snapport einrasten zu lassen.

- `Snap-Ziel`
  - : Ein untergeordnetes Element innerhalb eines Scroll-Snap-Containers, das beim Scrollen des Containers eingerastet wird. Die {{CSSXref("scroll-snap-align")}}-Eigenschaft definiert die Einrastposition jedes Snap-Ziels.

## Siehe auch

- {{CSSXref("scroll-snap-type")}}
- {{CSSXref("scroll-snap-align")}}
- {{CSSXref("scroll-padding")}}
- {{CSSXref("scroll-margin")}}
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul

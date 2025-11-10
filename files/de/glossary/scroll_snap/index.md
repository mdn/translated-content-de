---
title: Scroll-Snap
slug: Glossary/Scroll_snap
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**Scroll-Snapping** tritt auf, wenn Inhalte an eine bestimmte Position "springen", anstatt an einem beliebigen Punkt anzuhalten, wenn ein Scroll-Vorgang endet. Normale Scroll-Vorgänge sind unpräzise. Sie richten sich nicht an einem Absatz, einem Satz oder einem Bildrand aus. Zum Beispiel könnte in einem Karussell ein Scroll-Vorgang in der Mitte eines Bildes enden, wodurch es teilweise sichtbar bleibt. Webentwickler haben lange auf JavaScript-basierte Lösungen zurückgegriffen. Kürzlich haben Browser begonnen, [CSS-Scroll-Snap-Features](/de/docs/Web/CSS/Guides/Scroll_snap) zu unterstützen, die das Definieren von Scroll-Snap-Containern und Snap-Verhalten ermöglichen.

Scroll-Snapping ist ein gut kontrolliertes Scroll-Erlebnis, bei dem Entwickler ein Element als {{Glossary("Scroll_container", "Scroll-Container")}} mit Grenzen für Scroll-Vorgänge definieren. Scroll-Vorgänge enden dann an diesen Snap-Positions-Grenzen, wobei der gescrollte Inhalt einrastet. Im obigen Karussell-Beispiel wird das sichtbare Bild, wenn der Benutzer das Scrollen des Karussells beendet, an Ort und Stelle einrasten.

- Scroll-Snap-Container
  - : Der **Scroll-Snap-Container** ist ein Scroll-Container, bei dem Scroll-Snapping angewendet wird. Wenn eine Box zum Beispiel überlaufende Inhalte hat und ein {{CSSXref("scroll-snap-type")}} auf einen anderen Wert als `none` gesetzt ist, dann erfasst die Box Snap-Positionen. Der Scroll-Snap-Container einer Box ist der nächste Snap-Positions-erfassende Scroll-Container-Vorfahre des Elements. Wenn eine Box keinen Scroll-Snap-Container hat, lösen ihre eventuell vorhandenen Snap-Positionen kein Snapping aus.
- Snapport
  - : Der **Snapport** ist der Bereich des {{Glossary("Scroll_container#scrollport", "Scrollports")}}, der als Ausrichtungs-Container für die Scroll-Snap-Bereiche bei der Berechnung von Snap-Positionen verwendet wird. Standardmäßig ist es dasselbe wie das visuelle Viewport des Scroll-Containers, aber es ist der Bereich des Scrollports, der durch die {{CSSXref("scroll-padding")}}-Eigenschaft definiert ist. Die [Snap-Bereiche](#snap_area) sind am Scrollport ausgerichtet.
- Snap-Bereich
  - : Der **Snap-Bereich** eines Elements in einem Scroll-Container ist der Bereich, der durch die in den Ausdehnungen der {{CSSXref("scroll-margin")}}-Eigenschaft auf dem Element definiert ist. Der Snap-Bereich wird verwendet, um das Element an seinen Snapport zu bringen.
- Snap-Ziel
  - : Ein Nachkommelement innerhalb eines Scroll-Snap-Containers, das eingerastet wird, wenn der Container scrollt. Die {{CSSXref("scroll-snap-align")}}-Eigenschaft definiert die Snap-Position jedes Snap-Ziels.

## Siehe auch

- {{CSSXref("scroll-snap-type")}}
- {{CSSXref("scroll-snap-align")}}
- {{CSSXref("scroll-padding")}}
- {{CSSXref("scroll-margin")}}
- [CSS-Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul

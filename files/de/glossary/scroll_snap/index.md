---
title: Scroll snap
slug: Glossary/Scroll_snap
l10n:
  sourceCommit: 2b112aef57df0649462db5d9f47d782a7aa1f25c
---

{{GlossarySidebar}}

**Scroll snapping** ist das „Einrasten“ von Inhalten an einer bestimmten Position, anstatt an einem zufälligen Punkt anzuhalten, wenn ein Scroll-Vorgang beendet ist. Normale Scroll-Vorgänge sind ungenau. Sie richten sich nicht an einem Absatz, einem Satz oder einer Bildgrenze aus. Beispielsweise könnte in einem Karussell ein Scroll-Vorgang in der Mitte eines Bildes enden, wodurch es nur teilweise sichtbar bleibt. Webentwickler haben sich lange Zeit auf JavaScript-basierte Lösungen verlassen. Browser haben kürzlich begonnen, [CSS-Scroll-Snap-Funktionen](/de/docs/Web/CSS/CSS_scroll_snap) zu unterstützen, die das Definieren von Scroll-Snap-Containern und Einrastverhalten ermöglichen.

Scroll-Snapping ist ein gut kontrolliertes Scroll-Erlebnis, bei dem Entwickler ein Element als {{Glossary("Scroll_container", "Scroll-Container")}} mit Grenzen für Scroll-Vorgänge definieren. Scroll-Vorgänge enden dann an diesen Snap-Positionsgrenzen, wobei der gescrollte Inhalt einrastet. Im obigen Karussell-Beispiel wird beim Beenden des Scrollens im Karussell das sichtbare Bild einrasten.

- `Scroll snap container`

  - : Der **Scroll-Snap-Container** ist ein Scroll-Container, auf den Scroll-Snapping angewendet wird. Wenn beispielsweise eine Box überlaufenden Inhalt hat und ein {{CSSXref("scroll-snap-type")}} auf einen anderen Wert als `none` gesetzt ist, erfasst die Box Snap-Positionen. Der Scroll-Snap-Container einer Box ist der nächstgelegene Vorfahren des Elements, der Snap-Positionen erfasst. Wenn eine Box keinen Scroll-Snap-Container hat, werden ihre Snap-Positionen, falls vorhanden, kein Snapping auslösen.

- `Snapport`

  - : Der **Snapport** ist der Bereich des {{Glossary("Scroll_container#scrollport", "Scrollports")}}, der als Ausrichtungscontainer für die Scroll-Snap-Bereiche beim Berechnen von Snap-Positionen genutzt wird. Standardmäßig entspricht er dem visuellen Viewport des Scroll-Containers, ist jedoch der Bereich des Scrollports, der durch die {{CSSXref("scroll-padding")}}-Eigenschaft definiert wird. Die [Snap-Bereiche](#snap_area) sind am Scrollport ausgerichtet.

- `Snap area`
  - : Der **Snap-Bereich** eines Elements in einem Scroll-Container ist der Bereich, der durch die {{CSSXref("scroll-margin")}}-Abstände auf dem Element definiert wird. Der Snap-Bereich wird verwendet, um das Element an seinen Snapport einrasten zu lassen.

## Siehe auch

- {{CSSXref("scroll-snap-type")}}
- {{CSSXref("scroll-snap-align")}}
- {{CSSXref("scroll-padding")}}
- {{CSSXref("scroll-margin")}}
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul

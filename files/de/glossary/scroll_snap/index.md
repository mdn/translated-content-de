---
title: Scroll Snap
slug: Glossary/Scroll_snap
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Scroll Snapping** bedeutet, dass Inhalte an eine bestimmte Position "schnappen", anstatt an einem beliebigen Punkt anzuhalten, wenn ein Scrollvorgang abgeschlossen ist. Normale Scrollvorgänge sind ungenau. Sie richten sich nicht an einem Absatz, einem Satz oder einer Bildgrenze aus. In einem Karussell könnte ein Scrollvorgang beispielsweise in der Mitte eines Bildes enden, sodass es nur teilweise sichtbar bleibt. Webentwickler haben sich lange auf JavaScript-basierte Lösungen verlassen. Kürzlich haben Browser begonnen, [CSS Scroll-Snap-Features](/de/docs/Web/CSS/CSS_scroll_snap) zu unterstützen, die es ermöglichen, Scroll-Snap-Container und Snapping-Verhalten zu definieren.

Scroll Snapping ist eine gut kontrollierte Scroll-Erfahrung, bei der Entwickler ein Element als {{Glossary("Scroll_container", "Scroll-Container")}} mit Grenzen für Scrollvorgänge definieren. Scrollvorgänge enden dann an diesen Snap-Positionsgrenzen, wobei die gescrollten Inhalte an Ort und Stelle schnappen. Im obigen Karussellbeispiel schnappt das sichtbare Bild, wenn der Benutzer das Scrollen im Karussell beendet, in seine Position.

- Scroll Snap-Container
  - : Der **Scroll Snap-Container** ist ein Scroll-Container mit angewendetem Scroll Snapping. Wenn eine Box beispielsweise überlaufenden Inhalt hat und ein {{CSSXref("scroll-snap-type")}} auf einen anderen Wert als `none` gesetzt ist, dann erfasst die Box Snap-Positionen. Der Scroll Snap-Container einer Box ist der nächstgelegene ancestor des Elements, der Snap-Positionen erfassender Scroll-Container ist. Hat eine Box keinen Scroll Snap-Container, lösen ihre Snap-Positionen, falls vorhanden, kein Snapping aus.
- Snapport
  - : Der **Snapport** ist der Bereich des {{Glossary("Scroll_container#scrollport", "Scrollports")}}, der als Ausrichtungscontainer für die Scroll-Snap-Bereiche beim Berechnen der Snap-Positionen dient. Standardmäßig ist er identisch mit dem visuellen Viewport des Scroll-Containers, aber er ist der Bereich des Scrollports, der durch die {{CSSXref("scroll-padding")}} Eigenschaft definiert ist. Die [Snap-Bereiche](#snap_area) sind auf den Scrollport ausgerichtet.
- Snap-Bereich
  - : Der **Snap-Bereich** eines Elements in einem Scroll-Container ist der Bereich, der mit {{CSSXref("scroll-margin")}}-Abständen, die auf dem Element spezifiziert sind, definiert ist. Der Snap-Bereich wird verwendet, um das Element an seinem Snapport schnappen zu lassen.
- Snap-Ziel
  - : Ein untergeordnetes Element in einem Scroll Snap-Container, das beim Scrollen des Containers angeschnappt wird. Die {{CSSXref("scroll-snap-align")}} Eigenschaft definiert die Snap-Position jedes Snap-Ziels.

## Siehe auch

- {{CSSXref("scroll-snap-type")}}
- {{CSSXref("scroll-snap-align")}}
- {{CSSXref("scroll-padding")}}
- {{CSSXref("scroll-margin")}}
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul

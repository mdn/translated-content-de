---
title: Scroll-Snap
slug: Glossary/Scroll_snap
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{GlossarySidebar}}

**Scroll-Snap** bedeutet, dass der Inhalt beim Scrollen nicht an einer beliebigen Stelle anhält, sondern an einer bestimmten Position "einrastet". Normale Scrollvorgänge sind ungenau. Sie richten sich nicht an einem Absatz, einem Satz oder einer Bildgrenze aus. Zum Beispiel könnte in einem Karussell ein Scrollvorgang mitten in einem Bild enden, wodurch es nur teilweise sichtbar ist. Webentwickler haben sich lange Zeit auf JavaScript-basierte Lösungen verlassen. Kürzlich haben Browser begonnen, [CSS-Scroll-Snap-Funktionen](/de/docs/Web/CSS/CSS_scroll_snap) zu unterstützen, die es ermöglichen, Scroll-Snap-Container und Einrastverhalten zu definieren.

Scroll-Snap bietet ein gut kontrolliertes Scroll-Erlebnis, bei dem Entwickler ein Element als {{Glossary("Scroll_container", "Scroll-Container")}} mit Grenzen für die Scrollvorgänge definieren. Scrollvorgänge enden dann an diesen Einrastpositionsgrenzen, wobei der gescrollte Inhalt an Ort und Stelle einrastet. In dem obigen Karussellbeispiel wird das sichtbare Bild in das Karussell eingerastet, sobald der Benutzer mit dem Scrollen fertig ist.

- Scroll-Snap-Container
  - : Der **Scroll-Snap-Container** ist ein Scroll-Container, bei dem Scroll-Snapping angewendet wird. Wenn ein Feld beispielsweise überlaufenden Inhalt hat und ein {{CSSXref("scroll-snap-type")}} auf einen anderen Wert als `none` gesetzt ist, erfasst das Feld Einrastpositionen. Der Scroll-Snap-Container eines Feldes ist der nächste Vorfahre des Elements, der ein einrastendes Scroll-Container ist. Hat ein Feld keinen Scroll-Snap-Container, lösen seine Einrastpositionen, falls vorhanden, kein Einrasten aus.
- Snapport
  - : Der **Snapport** ist der Bereich des {{Glossary("Scroll_container#scrollport", "Scrollports")}}, der als Ausrichtungscontainer für die Scroll-Snap-Bereiche beim Berechnen von Einrastpositionen verwendet wird. Standardmäßig entspricht er dem visuellen Viewport des Scroll-Containers, ist jedoch der Bereich des Scrollports, der durch die {{CSSXref("scroll-padding")}}-Eigenschaft definiert wird. Die [Einrastbereiche](#snap_area) sind an den Scrollport ausgerichtet.
- Einrastbereich
  - : Der **Einrastbereich** eines Elements in einem Scroll-Container ist der Bereich, der mit den Ausbuchtungen von {{CSSXref("scroll-margin")}} definiert ist, die auf dem Element angegeben sind. Der Einrastbereich wird verwendet, um das Element an seinen Snapport einrasten zu lassen.
- Einrastziel
  - : Ein Nachfahre-Element innerhalb eines Scroll-Snap-Containers, das beim Scrollen des Containers eingerastet wird. Die {{CSSXref("scroll-snap-align")}}-Eigenschaft definiert die Einrastposition jedes Einrastziels.

## Siehe auch

- {{CSSXref("scroll-snap-type")}}
- {{CSSXref("scroll-snap-align")}}
- {{CSSXref("scroll-padding")}}
- {{CSSXref("scroll-margin")}}
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul

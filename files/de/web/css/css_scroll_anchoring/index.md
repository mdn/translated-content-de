---
title: CSS Scroll-Anker
slug: Web/CSS/CSS_scroll_anchoring
l10n:
  sourceCommit: 67ffd36390aed779e0c69ca8e79ddeeb2d82330e
---

{{CSSRef}}

Das **CSS Scroll-Anker**-Modul definiert einen Mechanismus, um Bewegungen der Seite durch DOM-Änderungen oberhalb des sichtbaren Bereichs eines Scroll-Kastens zu verhindern, während der Benutzer den sichtbaren Inhalt konsumiert.

Scroll-Anker versuchen, die Ansicht des Benutzers auf das Dokument während Layoutänderungen stabil zu halten. Dies geschieht, indem ein DOM-Knoten (der Ankerknoten) ausgewählt wird, dessen Bewegung verwendet wird, um Anpassungen an der Scroll-Position zu bestimmen. Der Ankerknoten ist immer ein Nachfahre des Scroll-Kastens.

Für Scroll-Container, die an ein Element {{Glossary("Scroll_snap", "geknüpft")}} sind, ist der Scroll-Anker auf Anpassungen beschränkt, die durch erneutes Knüpfen erlaubt wären.

## Referenz

### Eigenschaften

- {{cssxref("overflow-anchor")}}

## Glossar und Definitionen

- {{Glossary("Scroll_container", "Scroll-Container")}}
- {{Glossary("Scroll_snap", "Scroll-Knüpfen")}}

## Leitfäden

- [Übersicht über Scroll-Anker](/de/docs/Web/CSS/CSS_scroll_anchoring/Scroll_anchoring)
  - : Was ist Scroll-Anker, Unterdrückungsauslöser und wann sowie wie diese Browserfunktion aktiviert und deaktiviert wird.

## Verwandte Konzepte

- {{CSSxRef("overscroll-behavior")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Scroll-Knüpfen](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSS Überscroll-Verhalten](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul

---
title: CSS-Scroll-Ankerung
slug: Web/CSS/CSS_scroll_anchoring
l10n:
  sourceCommit: 016ecd8ccaed866c4d8d995fb18379c6e48f3b50
---

Das **CSS-Scroll-Ankerungsmodul** definiert einen Mechanismus, um Bewegungen der Seite aufgrund von DOM-Änderungen oberhalb des sichtbaren Bereichs eines Scroll-Kastens zu verhindern, während der Benutzer den sichtbaren Inhalt konsumiert.

Die Scroll-Ankerung versucht, die Ansicht des Benutzers auf das Dokument bei Layout-Änderungen stabil zu halten. Dies geschieht, indem ein DOM-Knoten (der Ankerknoten) ausgewählt wird, dessen Bewegung zur Bestimmung von Anpassungen der Scroll-Position verwendet wird. Der Ankerknoten ist immer ein Nachkomme des Scroll-Kastens.

Für Scroll-Container, die auf ein Element {{Glossary("Scroll_snap", "geschnappt")}} sind, ist die Scroll-Ankerung auf Anpassungen beschränkt, die durch erneutes Snappen ermöglicht werden.

## Referenz

### Eigenschaften

- {{cssxref("overflow-anchor")}}

## Glossarbegriffe

- {{Glossary("Scroll_container", "Scroll-Container")}}
- {{Glossary("Scroll_snap", "Scroll-Snap")}}

## Leitfäden

- [Übersicht über die Scroll-Ankerung](/de/docs/Web/CSS/CSS_scroll_anchoring/Scroll_anchoring)
  - : Was ist Scroll-Ankerung, Unterdrückungs-Auslöser, und wann und wie Sie diese Browserfunktion aktivieren und deaktivieren können.

## Verwandte Konzepte

- {{CSSxRef("overscroll-behavior")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSS-Überscroll-Verhalten](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul

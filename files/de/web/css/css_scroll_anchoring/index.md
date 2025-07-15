---
title: CSS-Scroll-Anker
slug: Web/CSS/CSS_scroll_anchoring
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS-Scroll-Anker**-Modul definiert einen Mechanismus, um eine Seitenbewegung zu verhindern, die aufgrund von DOM-Änderungen oberhalb des sichtbaren Bereichs eines Scrollkastens auftritt, während der Benutzer den sichtbaren Inhalt konsumiert.

Scroll-Anker versuchen, die Ansicht des Benutzers auf das Dokument während Layoutänderungen stabil zu halten. Dies erfolgt, indem ein DOM-Knoten ausgewählt wird (der Ankerknoten), dessen Bewegung zur Anpassung der Scroll-Position verwendet wird. Der Ankerknoten ist immer ein Nachfahre des Scrollkastens.

Bei Scroll-Containern, die auf ein Element {{Glossary("Scroll_snap", "eingeschnappt")}} sind, beschränkt sich das Scroll-Anker auf Anpassungen, die durch erneutes Einrasten erlaubt wären.

## Referenz

### Eigenschaften

- {{cssxref("overflow-anchor")}}

## Glossar und Definitionen

- {{Glossary("Scroll_container", "Scroll-Container")}}
- {{Glossary("Scroll_snap", "Scroll-Snap")}}

## Leitfäden

- [Übersicht über das Scroll-Anker](/de/docs/Web/CSS/CSS_scroll_anchoring/Scroll_anchoring)
  - : Was ist Scroll-Anker, Unterdrückungsauslöser und wann und wie man diese Browserfunktion aktiviert und deaktiviert.

## Verwandte Konzepte

- {{CSSxRef("overscroll-behavior")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSS-Überscrollverhalten](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul

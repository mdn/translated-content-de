---
title: CSS-Scroll-Anker
short-title: Scroll anchoring
slug: Web/CSS/Guides/Scroll_anchoring
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Scroll-Anker**-Modul definiert einen Mechanismus, um Bewegungen der Seite aufgrund von DOM-Änderungen oberhalb des sichtbaren Bereichs eines Scrollfensters zu verhindern, während der Benutzer den sichtbaren Inhalt konsumiert.

Scroll-Anker versucht, die Ansicht des Dokuments für den Benutzer bei Layoutänderungen stabil zu halten. Es funktioniert, indem ein DOM-Knoten (der Ankerknoten) ausgewählt wird, dessen Bewegung zur Bestimmung von Anpassungen der Scroll-Position verwendet wird. Der Ankerknoten ist immer ein Nachkomme des Scrollfensters.

Für Scroll-Container, die an ein Element {{Glossary("Scroll_snap", "gesnappt")}} sind, ist der Scroll-Anker auf Anpassungen beschränkt, die durch erneutes Snappen erlaubt wären.

## Referenz

### Eigenschaften

- {{cssxref("overflow-anchor")}}

## Glossarbegriffe

- {{Glossary("Scroll_container", "Scroll-Container")}}
- {{Glossary("Scroll_snap", "Scroll-Snap")}}

## Leitfäden

- [Übersicht über Scroll-Anker](/de/docs/Web/CSS/Guides/Scroll_anchoring/Overview)
  - : Was Scroll-Anker ist, Unterdrückungsauslöser, sowie wann und wie Sie diese Browserfunktion aktivieren und deaktivieren können.

## Verwandte Konzepte

- {{CSSxRef("overscroll-behavior")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul
- [CSS Overscroll-Verhalten](/de/docs/Web/CSS/Guides/Overscroll_behavior) Modul

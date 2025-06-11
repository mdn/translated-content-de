---
title: CSS-Scroll-Anker
slug: Web/CSS/CSS_scroll_anchoring
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Das **CSS-Scroll-Anker**-Modul definiert einen Mechanismus, um Bewegungen auf der Seite aufgrund von DOM-Änderungen über dem sichtbaren Bereich einer Scrollbox zu verhindern, während der Benutzer den sichtbaren Inhalt konsumiert.

Das Scroll-Ankern versucht, die Ansicht des Dokuments für den Benutzer bei Layout-Änderungen stabil zu halten. Es funktioniert, indem ein DOM-Element ausgewählt wird (das Anker-Element), dessen Bewegung verwendet wird, um Anpassungen an der Scroll-Position zu bestimmen. Das Anker-Element ist immer ein Nachfahre der Scrollbox.

Für Scroll-Container, die an ein Element {{Glossary("Scroll_snap", "gesnappt")}} sind, ist das Scroll-Ankern auf Anpassungen beschränkt, die durch erneutes Snappen zulässig wären.

## Referenz

### Eigenschaften

- {{cssxref("overflow-anchor")}}

## Glossar und Definitionen

- {{Glossary("Scroll_container", "Scroll-Container")}}
- {{Glossary("Scroll_snap", "Scroll-Snap")}}

## Leitfäden

- [Übersicht über das Scroll-Ankern](/de/docs/Web/CSS/CSS_scroll_anchoring/Scroll_anchoring)
  - : Was ist Scroll-Ankern, Unterdrückungsauslöser, und wann und wie diese Browserfunktion aktiviert und deaktiviert wird.

## Verwandte Konzepte

- {{CSSxRef("overscroll-behavior")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Overflow](/de/docs/Web/CSS/CSS_overflow)-Modul
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)-Modul
- [CSS-Overscroll-Verhalten](/de/docs/Web/CSS/CSS_overscroll_behavior)-Modul

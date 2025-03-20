---
title: CSS-Scroll-Anker
slug: Web/CSS/CSS_scroll_anchoring
l10n:
  sourceCommit: a7335ef81c49b0f7604ee64240711456d0f29e6b
---

{{CSSRef}}

Das **CSS-Scroll-Anker**-Modul definiert einen Mechanismus, um das Verschieben der Seite aufgrund von DOM-Änderungen oberhalb des sichtbaren Bereichs eines Scrollfeldes zu verhindern, während der Benutzer den sichtbaren Inhalt betrachtet.

Scroll-Anker versucht, die Ansicht des Benutzers auf das Dokument über Layout-Änderungen hinweg stabil zu halten. Es funktioniert, indem ein DOM-Knoten (der Ankerknoten) ausgewählt wird, dessen Bewegung dazu verwendet wird, Anpassungen an der Scrollposition zu bestimmen. Der Ankerknoten ist immer ein Nachkomme des Scrollfeldes.

Für Scroll-Container, die an ein Element {{Glossary("Scroll_snap", "gesnappt")}} sind, ist das Scroll-Anker auf Anpassungen beschränkt, die durch erneutes Snappen erlaubt wären.

## Referenz

### Eigenschaften

- {{cssxref("overflow-anchor")}}

## Glossar und Definitionen

- {{Glossary("Scroll_container", "Scroll-Container")}}
- {{Glossary("Scroll_snap", "Scroll-Snap")}}

## Leitfäden

- [Verstehen des Scroll-Ankers](/de/docs/Web/CSS/CSS_scroll_anchoring/Scroll_anchoring)
  - : Was ist Scroll-Anker, Unterdrückungs-Auslöser, und wann und wie kann man diese Browser-Funktion aktivieren und deaktivieren.

## Verwandte Konzepte

- {{CSSxRef("overscroll-behavior")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSS Overscroll Behavior](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul

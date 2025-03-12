---
title: CSS scroll anchoring
slug: Web/CSS/CSS_scroll_anchoring
l10n:
  sourceCommit: 6b52c3a6f18dc5c3f316b9935a0e1c80736409fe
---

{{CSSRef}}

Das **CSS scroll anchoring**-Modul definiert einen Mechanismus, um Bewegungen der Seite zu verhindern, die durch DOM-Änderungen oberhalb des sichtbaren Bereichs eines Scroll-Kastens entstehen, während der Benutzer den sichtbaren Inhalt konsumiert.

Das Scroll Anchoring versucht, die Ansicht des Benutzers auf das Dokument bei Layout-Änderungen stabil zu halten. Es funktioniert, indem ein DOM-Knoten ausgewählt wird (der Ankerknoten), dessen Bewegung zur Bestimmung von Anpassungen der Scroll-Position verwendet wird. Der Ankerknoten ist immer ein Nachkomme des Scroll-Kastens.

Für Scroll-Container, die an einem Element {{Glossary("Scroll_snap", "festgeschnappt")}} sind, ist das Scroll Anchoring auf Anpassungen begrenzt, die durch erneutes Festschnappen erlaubt wären.

## Referenz

### Eigenschaften

- {{cssxref("overflow-anchor")}}

## Glossar und Definitionen

- {{Glossary("Scroll_container", "Scroll container")}}
- {{Glossary("Scroll_snap", "Scroll snap")}}

## Leitfäden

- [Leitfaden zum Scroll Anchoring](/de/docs/Web/CSS/overflow-anchor/Guide_to_scroll_anchoring)
  - : Anleitung zum Aktivieren und Deaktivieren von Scroll Anchoring und Unterdrückungsauslösern, sowie wann und warum Sie diese verwenden sollten.

## Verwandte Konzepte

- {{CSSxRef("overscroll-behavior")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSS overscroll behavior](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul

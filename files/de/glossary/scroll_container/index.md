---
title: Scroll-Container
slug: Glossary/Scroll_container
l10n:
  sourceCommit: 2b112aef57df0649462db5d9f47d782a7aa1f25c
---

{{GlossarySidebar}}

Ein **Scroll-Container** ist ein Elementkasten, in dem der Inhalt gescrollt werden kann, unabhängig davon, ob Scrollbalken vorhanden sind oder nicht. Ein User-Agent fügt einem Elementkasten Scrollbalken hinzu, um ihn zu einem Scroll-Container zu machen, wenn die CSS-Eigenschaft {{cssxref("overflow")}} auf `scroll` gesetzt ist oder wenn `overflow` auf `auto` gesetzt ist _und_ der Inhalt den Container überläuft.

Wenn der Inhalt eines Elementkastens seinen Begrenzungskasten überläuft, können Benutzer Scrollbalken verwenden, um durch den abgeschnittenen Inhalt zu scrollen, der ansonsten vor der Ansicht verborgen ist.

Ein Scroll-Container umfasst einen Scrollport und Scrollbalken.

## Scrollport

Der Scrollport ist der sichtbare Teil eines Scroll-Containers und fällt mit dem Innenabstand des Scroll-Containers zusammen. Die Scrollbalken werden verwendet, um Inhalte in den und aus dem Scrollport zu bewegen, damit die Inhalte angezeigt werden können.

## Siehe auch

- [CSS-Bausteine: Überlaufender Inhalt](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)
- {{Glossary("Scroll_snap", "Scroll-Snapping")}}, einschließlich {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}
- [CSS-Overflow](/de/docs/Web/CSS/CSS_overflow)-Modul
- [CSS-Overscroll-Verhalten](/de/docs/Web/CSS/CSS_overscroll_behavior)-Modul
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)-Modul

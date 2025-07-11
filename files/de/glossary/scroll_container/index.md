---
title: Scroll-Container
slug: Glossary/Scroll_container
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Scroll-Container** ist ein Elementkasten, in dem Inhalt gescrollt werden kann, unabhängig davon, ob Scrollleisten vorhanden sind oder nicht. Ein User-Agent fügt einem Elementkasten Scrollleisten hinzu, um ihn zu einem Scroll-Container zu machen, wenn die CSS-Eigenschaft {{cssxref("overflow")}} auf `scroll` gesetzt ist oder wenn `overflow` auf `auto` gesetzt ist _und_ der Inhalt den Container überläuft.

Wenn der Inhalt eines Elementkastens seinen Begrenzungsrahmen überläuft, können Benutzer Scrollleisten verwenden, um durch den abgeschnittenen Inhalt zu scrollen, der sonst verborgen bleibt.

Ein Scroll-Container umfasst einen Scrollport und Scrollleisten.

## Scrollport

Der Scrollport ist der sichtbare Teil eines Scroll-Containers und entspricht dem Innenabstandskasten des Scroll-Containers. Die Scrollleisten werden verwendet, um Inhalt in den und aus dem Scrollport zu bewegen, damit der Inhalt gesehen werden kann.

## Siehe auch

- [Lernen: Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
- {{Glossary("Scroll_snap", "Scroll-Snapping")}}, einschließlich {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS-Overscroll-Verhalten](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul

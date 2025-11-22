---
title: Scroll-Container
slug: Glossary/Scroll_container
l10n:
  sourceCommit: dac1040b19dfd2cd2a09a4aab4f9ffd7dce65e89
---

Ein **Scroll-Container** ist ein Elementkasten, in dem der Inhalt gescrollt werden kann, unabhängig davon, ob Scrollbalken vorhanden sind oder nicht. Ein User-Agent fügt einem Elementkasten Scrollbalken hinzu, um ihn zu einem Scroll-Container zu machen, wenn die CSS-Eigenschaft {{cssxref("overflow")}} auf `scroll` gesetzt ist oder wenn `overflow` auf `auto` gesetzt ist _und_ der Inhalt den Container überläuft.

Wenn der Inhalt eines Elementkastens seinen Begrenzungskasten überläuft, können Benutzer Scrollbalken verwenden, um durch den abgeschnittenen Inhalt zu scrollen, der sonst nicht sichtbar ist.

Ein Scroll-Container umfasst einen Sichtbereich und Scrollbalken.

## Sichtbereich

Der Sichtbereich ist der sichtbare Teil eines Scroll-Containers und fällt mit dem Innenabstandskasten des Scroll-Containers zusammen. Die Scrollbalken werden verwendet, um Inhalte in den Sichtbereich hinein und hinaus zu bewegen, damit die Inhalte betrachtet werden können.

## Siehe auch

- [Lernen: Überfließender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
- {{Glossary("Scroll_snap", "Scroll-Snapping")}}, einschließlich {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}
- [CSS-Overflow](/de/docs/Web/CSS/Guides/Overflow) Modul
- [CSS-Overscroll-Verhalten](/de/docs/Web/CSS/Guides/Overscroll_behavior) Modul
- [CSS-Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul
- [CSS-Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul

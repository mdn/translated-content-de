---
title: Scroll-Container
slug: Glossary/Scroll_container
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GlossarySidebar}}

Ein **Scroll-Container** ist eine Elementbox, in der der Inhalt gescrollt werden kann, unabhängig davon, ob Scrollleisten vorhanden sind oder nicht. Ein User-Agent fügt einer Elementbox Scrollleisten hinzu, um daraus einen Scroll-Container zu machen, wenn die CSS-Eigenschaft {{cssxref("overflow")}} auf `scroll` gesetzt ist oder wenn `overflow` auf `auto` gesetzt ist _und_ der Inhalt den Container überläuft.

Wenn der Inhalt einer Elementbox seinen Begrenzungsrahmen überläuft, können Benutzer Scrollleisten verwenden, um durch den abgeschnittenen Inhalt zu scrollen, der ansonsten nicht sichtbar ist.

Ein Scroll-Container umfasst einen Scrollport und Scrollleisten.

## Scrollport

Der Scrollport ist der sichtbare Teil eines Scroll-Containers und fällt mit der Padding-Box des Scroll-Containers zusammen. Die Scrollleisten werden verwendet, um den Inhalt in und aus dem Scrollport zu bewegen, damit der Inhalt angezeigt werden kann.

## Siehe auch

- [Lernen: Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
- {{Glossary("Scroll_snap", "Scroll-Snapping")}}, einschließlich {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS-Overscroll-Verhalten](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul

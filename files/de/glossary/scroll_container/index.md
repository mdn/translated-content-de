---
title: Scrollcontainer
slug: Glossary/Scroll_container
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein **Scrollcontainer** ist ein Elementfeld, in dem der Inhalt gescrollt werden kann, unabhängig davon, ob Scrollleisten vorhanden sind oder nicht. Ein User-Agent fügt einem Elementfeld Scrollleisten hinzu, um es zu einem Scrollcontainer zu machen, wenn die CSS-Eigenschaft {{cssxref("overflow")}} auf `scroll` gesetzt ist oder wenn `overflow` auf `auto` gesetzt ist _und_ der Inhalt den Container überläuft.

Wenn der Inhalt eines Elementfeldes über sein Begrenzungsfeld hinausgeht, können Benutzer die Scrollleisten verwenden, um durch den abgeschnittenen Inhalt zu scrollen, der ansonsten nicht sichtbar ist.

Ein Scrollcontainer umfasst einen Scrollbereich (Scrollport) und Scrollleisten.

## Scrollport

Der Scrollport ist der sichtbare Teil eines Scrollcontainers und entspricht dem Innenabstandsbereich des Scrollcontainers. Die Scrollleisten werden verwendet, um Inhalte in den Scrollport hinein- und herauszubewegen, sodass der Inhalt betrachtet werden kann.

## Siehe auch

- [Lernen: Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
- {{Glossary("Scroll_snap", "Scroll-Snapping")}}, inklusive {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}
- [CSS overflow](/de/docs/Web/CSS/Guides/Overflow)-Modul
- [CSS overscroll behavior](/de/docs/Web/CSS/Guides/Overscroll_behavior)-Modul
- [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap)-Modul

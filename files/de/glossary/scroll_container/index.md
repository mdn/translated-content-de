---
title: Scroll-Container
slug: Glossary/Scroll_container
l10n:
  sourceCommit: 1b3149a690cab7de2dfdfd24c273339a606982b0
---

Ein **Scroll-Container** ist eine Elementbox, deren Inhalt gescrollt werden kann, unabhängig davon, ob Scrollleisten vorhanden sind. Eine Elementbox wird zum Scroll-Container, wenn ihre Eigenschaft {{cssxref("overflow")}} (oder {{cssxref("overflow-x")}} oder {{cssxref("overflow-y")}}) auf `scroll`, `auto` oder `hidden` gesetzt ist.

Der jeweilige `overflow`-Wert eines Scroll-Containers bestimmt, wann Scrollleisten angezeigt werden:

- `scroll`: Scrollleisten werden immer angezeigt, sofern die Plattform sie darstellt.
- `auto`: Scrollleisten werden nur angezeigt, wenn der Inhalt über die Box hinausragt.
- `hidden`: Es werden keine Scrollleisten angezeigt, und Benutzer können den Inhalt nicht direkt scrollen. Er kann jedoch weiterhin programmgesteuert gescrollt werden, beispielsweise mit [`Element.scrollTo()`](/de/docs/Web/API/Element/scrollTo) oder indem ein darin enthaltenes Element den Fokus erhält.

Ein Scroll-Container:

- Erzeugt immer einen neuen Blockformatierungskontext. Dadurch umfasst er Floats, und seine Außenabstände fallen nicht mit den Außenabständen seiner Kindelemente zusammen.
- Dient als Referenzbox für Nachfahren, deren {{cssxref("position")}} auf `sticky` gesetzt ist.
- Hat als Flex- oder Grid-Element eine automatische Mindestgröße von 0 und kann daher kleiner als sein Inhalt werden.

## Scrollport

Ein Scroll-Container hat einen **Scrollport** – den sichtbaren Bereich des Scroll-Containers, der mit seiner Padding-Box übereinstimmt. Beim Scrollen wird Inhalt in den Scrollport hinein- und aus ihm herausbewegt.

## Siehe auch

- [Lernen: Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
- {{Glossary("Scroll_snap", "Scroll-Snapping")}}, einschließlich {{Glossary("Scroll_snap#scroll_snap_container", "Scroll-Snap-Container")}}
- Modul [CSS overflow](/de/docs/Web/CSS/Guides/Overflow)
- Modul [CSS overscroll behavior](/de/docs/Web/CSS/Guides/Overscroll_behavior)
- Modul [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap)
- Modul [CSS scroll-driven animations](/de/docs/Web/CSS/Guides/Scroll-driven_animations)

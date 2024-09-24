---
title: CSS Scroll Snap
slug: Web/CSS/CSS_scroll_snap
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Das **CSS Scroll Snap**-Modul bietet Eigenschaften, die Ihnen ermöglichen, das Schwenk- und Scrollverhalten durch die Definition von Snap-Positionen zu steuern. Inhalte können in Position gebracht werden, wenn der Benutzer überfließende Inhalte innerhalb eines {{Glossary("scroll container")}} scrollt, was Paging und die Scroll-Positionierung ermöglicht.

Dieses Modul umfasst die Scroll-Container-Eigenschaften `scroll-padding`, um den optimalen Betrachtungsbereich beim Paging während der `scroll-into-view`-Operationen anzupassen. Es beinhaltet auch `scroll-margin` und `scroll-alignment`, die auf den Kindern des Scroll-Containers gesetzt werden, um den visuellen Bereich der Kinder anzupassen, wenn dieses Kind in den Blick gescrollt wird, sowie eine Eigenschaft, um zu erzwingen, dass das Scrollen bei einzelnen Kindern stoppt.

## Scroll Snap in Aktion

Um das Scroll-Snapping im folgenden Kasten zu sehen, scrollen Sie auf und ab sowie nach links und rechts durch das Raster aus 45 nummerierten Kästchen im scrollbaren Ansichtsfenster.

{{EmbedGHLiveSample("css-examples/modules/scroll_snap.html", '100%', 250)}}

Mit Scroll Snap wird eines der nummerierten Kästchen, zu denen Sie scrollen, in die Position schnappen. Das anfängliche CSS sorgt dafür, dass das nummerierte Kästchen in die Mitte des Ansichtsfensters schnappt. Verwenden Sie die Schieberegler, um die Block- und Inlinesnap-Positionen zu ändern.

Durch die Verwendung von Snap-Eigenschaften können Sie das Scrollen über ein Element, in diesem Fall ein nummeriertes Kästchen, zulassen oder blockieren. Aktivieren Sie das Kontrollkästchen „Verhindern Sie das Scrollen über Kästchen“, um alle Scrollaktionen auf das Scrollen zu einem benachbarten Kästchen zu beschränken.

Um das Scroll-Snapping mit dem normalen Scrollen zu vergleichen, aktivieren Sie das Kontrollkästchen „Snapping deaktivieren“ und versuchen Sie es erneut.

Um den Code für dieses Beispiel zu sehen, [sehen Sie sich den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/scroll_snap.html).

## Referenz

### Eigenschaften auf Container

- {{cssxref("scroll-snap-type")}}
- {{cssxref("scroll-padding")}}
  - {{cssxref("scroll-padding-top")}}
  - {{cssxref("scroll-padding-right")}}
  - {{cssxref("scroll-padding-bottom")}}
  - {{cssxref("scroll-padding-left")}}
  - {{cssxref("scroll-padding-inline")}}
  - {{cssxref("scroll-padding-inline-start")}}
  - {{cssxref("scroll-padding-inline-end")}}
  - {{cssxref("scroll-padding-block")}}
  - {{cssxref("scroll-padding-block-start")}}
  - {{cssxref("scroll-padding-block-end")}}

### Eigenschaften auf Kindern

- {{cssxref("scroll-snap-align")}}
- {{cssxref("scroll-margin")}}
  - {{cssxref("scroll-margin-top")}}
  - {{cssxref("scroll-margin-right")}}
  - {{cssxref("scroll-margin-bottom")}}
  - {{cssxref("scroll-margin-left")}}
  - {{cssxref("scroll-margin-inline")}}
  - {{cssxref("scroll-margin-inline-start")}}
  - {{cssxref("scroll-margin-inline-end")}}
  - {{cssxref("scroll-margin-block")}}
  - {{cssxref("scroll-margin-block-start")}}
  - {{cssxref("scroll-margin-block-end")}}
- {{cssxref("scroll-snap-stop")}}

## Leitfäden

- [Grundlegende Konzepte von CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap/Basic_concepts)
  - : Ein Überblick und Beispiele zu den Funktionen von CSS Scroll Snap.

## Verwandte Konzepte

- {{cssxref(":target")}} Pseudo-Klasse
- {{cssxref("overflow")}} CSS-Eigenschaft
- Element {{domxref("Element.scroll", "scroll()")}} Methode
- Element {{domxref("Element.scrollBy", "scrollBy()")}} Methode
- Element {{domxref("Element.scrollIntoView", "scrollIntoView()")}} Methode
- Element {{domxref("Element.scrollTo", "scrollTo()")}} Methode
- Dokument {{domxref("Document.scroll_event", "scroll")}} Ereignis
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA-Rolle
- {{Glossary("Scroll container")}} Glossar-Begriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS Scrollbars Stylen](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- [Nur-Tastatur-Scrollbereiche](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
- [Scroll Snap Beispiele](https://codepen.io/collection/KpqBGW) auf Codepen (2022)
- [Gut kontrolliertes Scrollen mit CSS Scroll Snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2021)
- [Praktisches CSS Scroll Snapping](https://css-tricks.com/practical-css-scroll-snapping/) auf CSS-Tricks (2020)
- [CSS Scroll Snap](https://12daysofweb.dev/2022/css-scroll-snap/) auf 12 Days of Web (2019)

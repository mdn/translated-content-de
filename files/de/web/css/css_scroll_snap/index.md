---
title: CSS scroll snap
slug: Web/CSS/CSS_scroll_snap
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Das **CSS scroll snap** Modul bietet Eigenschaften, mit denen Sie das Panning- und Scrollverhalten durch die Definition von Snap-Positionen steuern können. Inhalte können in Position eingerastet werden, während der Benutzer überlagernde Inhalte in einem [scroll container](/de/docs/Glossary/scroll_container) scrollt, was eine Seiteneinbettung und Scroll-Positionierung ermöglicht.

Dieses Modul umfasst die `scroll-padding`-Eigenschaften des Scroll-Containers, um den optimalen Betrachtungsbereich beim Scrollen-in-Ansicht-Operationen anzupassen. Es umfasst auch `scroll-margin` und `scroll-alignment`, die auf den Kindern des Scroll-Containers gesetzt werden, um den visuellen Bereich der Kinder anzupassen, wenn dieses Kind in die Ansicht gescrollt wird, sowie eine Eigenschaft, um das Scrollen auf einzelne Kinder zu erzwingen.

## Scroll Snap in Aktion

Um das Scroll-Snapping im untenstehenden Kasten zu sehen, scrollen Sie nach oben und unten sowie nach links und rechts durch das Raster von 45 nummerierten Kästchen im scrollbaren Ansichtsfenster.

{{EmbedGHLiveSample("css-examples/modules/scroll_snap.html", '100%', 250)}}

Mit Scroll-Snap wird eines der nummerierten Kästchen, zu dem Sie scrollen, in Position einrasten. Der anfängliche CSS-Code lässt das nummerierte Kästchen in der Mitte des Ansichtsfensters einrasten. Verwenden Sie die Schieberegler, um die block- und inline-Snap-Positionen zu ändern.

Durch die Verwendung von Snap-Eigenschaften können Sie das Scrollen über ein Element hinaus erlauben oder blockieren, in diesem Fall ein nummeriertes Kästchen. Aktivieren Sie das Kontrollkästchen "Verhindern, dass über Boxen hinaus gescrollt wird", um zu erzwingen, dass alle Scrollaktionen auf das Scrollen zu einer benachbarten Box begrenzt werden.

Um das Scroll-Snapping mit dem regulären Scrollen zu vergleichen, aktivieren Sie das Kontrollkästchen "Snapping deaktivieren" und versuchen Sie erneut zu scrollen.

Um den Code für dieses Beispiel zu sehen, [sehen Sie sich den Quellcode auf GitHub an](https://github.com/mdn/css-examples/blob/main/modules/scroll_snap.html).

## Referenz

### Eigenschaften auf Containern

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

- [Grundlegende Konzepte von CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap/Basic_concepts)
  - : Ein Überblick und Beispiele der CSS scroll snap Funktionen.

## Verwandte Konzepte

- {{cssxref(":target")}} Pseudo-Klasse
- {{cssxref("overflow")}} CSS-Eigenschaft
- Element [`scroll()`](/de/docs/Web/API/Element/scroll) Methode
- Element [`scrollBy()`](/de/docs/Web/API/Element/scrollBy) Methode
- Element [`scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView) Methode
- Element [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode
- Dokument [`scroll`](/de/docs/Web/API/Document/scroll_event) Ereignis
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA-Rolle
- [Scroll container](/de/docs/Glossary/Scroll_container) Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS scrollbars styling](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- [Nur mit der Tastatur scrollbare Bereiche](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
- [Scroll snap Beispiele](https://codepen.io/collection/KpqBGW) auf Codepen (2022)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2021)
- [Praktisches CSS Scroll Snapping](https://css-tricks.com/practical-css-scroll-snapping/) auf CSS-Tricks (2020)
- [CSS scroll snap](https://12daysofweb.dev/2022/css-scroll-snap/) auf 12 Days of Web (2019)

---
title: CSS scroll snap
slug: Web/CSS/CSS_scroll_snap
l10n:
  sourceCommit: 42976d376a0e8ffc79f82ae99e68ce9185b476aa
---

{{CSSRef}}

Das Modul **CSS scroll snap** bietet Eigenschaften, mit denen Sie das Verhalten beim Schwenken und Scrollen durch die Definition von Snap-Positionen steuern können. Inhalte können in Position geschnappt werden, wenn der Benutzer überlaufenden Inhalt innerhalb eines {{Glossary("scroll_container", "Scroll-Containers")}} scrollt, wodurch eine Paginierung und Scroll-Positionierung ermöglicht wird.

Dieses Modul umfasst die `scroll-padding`-Eigenschaften für den Scroll-Container, um den optimalen Anzeigebereich beim Scrollen in die Ansicht anzupassen. Es umfasst außerdem `scroll-margin` und `scroll-alignment`, die auf die Kinder des Scroll-Containers eingestellt werden, um den visuellen Bereich der Kinder anzupassen, wenn dieses Kind in die Ansicht gescrollt wird, sowie eine Eigenschaft, um das Scrollen bei einzelnen Kindern zu erzwingen.

## Scroll Snap in Aktion

Um das Scroll-Snapping im untenstehenden Feld anzuzeigen, scrollen Sie nach oben und unten sowie nach links und rechts durch das Raster von 45 nummerierten Kästchen im scrollbaren Viewport.

{{EmbedGHLiveSample("css-examples/modules/scroll_snap.html", '100%', 250)}}

Mit Scroll Snap wird eines der nummerierten Kästchen, zu dem Sie scrollen, einrasten. Das anfängliche CSS lässt das nummerierte Kästchen in der Mitte des Viewports einrasten. Verwenden Sie die Schieberegler, um die Block- und Inline-Snap-Positionen zu ändern.

Mithilfe von Snap-Eigenschaften können Sie das Scrollen über ein Element hinaus ermöglichen oder blockieren, in diesem Fall ein nummeriertes Kästchen. Wählen Sie das Kontrollkästchen "Scrollen über Kästchen verhindern" aus, um alle Scroll-Aktionen auf das Scrollen zu einem angrenzenden Kästchen zu begrenzen.

Um das Scroll-Snapping mit normalem Scrollen zu vergleichen, aktivieren Sie das Kontrollkästchen "Snapping deaktivieren" und versuchen Sie erneut zu scrollen.

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
  - : Eine Übersicht und Beispiele der CSS scroll snap-Funktionen.

## Verwandte Konzepte

- {{cssxref(":target")}} Pseudo-Klasse
- {{cssxref("overflow")}} CSS-Eigenschaft
- Methode [`scroll()`](/de/docs/Web/API/Element/scroll) des Elements
- Methode [`scrollBy()`](/de/docs/Web/API/Element/scrollBy) des Elements
- Methode [`scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView) des Elements
- Methode [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) des Elements
- Ereignis [`scroll`](/de/docs/Web/API/Element/scroll_event) des Elements
- Ereignis [`scrollend`](/de/docs/Web/API/Element/scrollend_event) des Elements
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA-Rolle
- {{Glossary("Scroll_container", "Scroll-Container")}} Glossareintrag

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS scrollbars styling](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- [Scrolling-Bereiche nur mit der Tastatur](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
- [Scroll snap Beispiele](https://codepen.io/collection/KpqBGW) auf Codepen (2022)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2021)
- [Praktisches CSS scroll snapping](https://css-tricks.com/practical-css-scroll-snapping/) auf CSS-Tricks (2020)
- [CSS scroll snap](https://12daysofweb.dev/2022/css-scroll-snap/) auf 12 Days of Web (2019)

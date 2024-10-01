---
title: CSS scroll snap
slug: Web/CSS/CSS_scroll_snap
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Das **CSS scroll snap** Modul bietet Eigenschaften, mit denen Sie das Schwenk- und Scrollverhalten durch Definition von Snap-Positionen steuern können. Inhalt kann in Position geschnappt werden, während der Benutzer überlaufenden Inhalt in einem {{Glossary("scroll_container", "Scroll-Container")}} scrollt, was Paging und Scrollpositionierung ermöglicht.

Dieses Modul enthält die Scroll-Container-Eigenschaften `scroll-padding`, um die optimale Betrachtungsregion beim Scrollen in die Ansicht anzupassen. Es enthält auch `scroll-margin` und `scroll-alignment`, die auf die Kinder des Scroll-Containers gesetzt werden, um den visuellen Bereich der Kinder anzupassen, wenn dieses Kind in die Ansicht gescrollt wird, sowie eine Eigenschaft, um zu erzwingen, dass das Scrollen bei einzelnen Kindern stoppt.

## Scroll snap in Aktion

Um das Scroll-Snappen im unten stehenden Kasten zu sehen, scrollen Sie auf und ab sowie nach links und rechts durch das Raster von 45 nummerierten Kästchen im scrollbaren Ansichtsfenster.

{{EmbedGHLiveSample("css-examples/modules/scroll_snap.html", '100%', 250)}}

Mit Scroll Snap wird eins der nummerierten Kästchen, zu dem Sie scrollen, in Position geschnappt. Das anfängliche CSS sorgt dafür, dass das nummerierte Kästchen in der Mitte des Ansichtsfensters einrastet. Verwenden Sie die Schieberegler, um die Block- und Inline-Snap-Positionen zu ändern.

Durch die Verwendung der Snap-Eigenschaften können Sie das Scrollen an einem Element, in diesem Fall einem nummerierten Kästchen, erlauben oder blockieren. Aktivieren Sie das Kontrollkästchen "Verhindern des Scrollens über Kästchen hinaus", um alle Scrollaktionen auf das Scrollen zu einem benachbarten Kästchen zu beschränken.

Um Scroll-Snapping mit normalem Scrollen zu vergleichen, aktivieren Sie das Kontrollkästchen "Snapping deaktivieren" und versuchen Sie erneut zu scrollen.

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

### Eigenschaften auf Kinder

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
  - : Ein Überblick und Beispiele zu den Funktionen von CSS scroll snap.

## Verwandte Konzepte

- {{cssxref(":target")}} Pseudo-Klasse
- {{cssxref("overflow")}} CSS-Eigenschaft
- Element [`scroll()`](/de/docs/Web/API/Element/scroll) Methode
- Element [`scrollBy()`](/de/docs/Web/API/Element/scrollBy) Methode
- Element [`scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView) Methode
- Element [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode
- Dokument [`scroll`](/de/docs/Web/API/Document/scroll_event) Ereignis
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA-Rolle
- {{Glossary("Scroll_container", "Scroll-Container")}} Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS scrollbars styling](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- [Bereiche nur für Tastatur-Scrolling](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
- [Scroll snap Beispiele](https://codepen.io/collection/KpqBGW) auf Codepen (2022)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2021)
- [Praktisches CSS scroll snapping](https://css-tricks.com/practical-css-scroll-snapping/) auf CSS-Tricks (2020)
- [CSS scroll snap](https://12daysofweb.dev/2022/css-scroll-snap/) auf 12 Days of Web (2019)

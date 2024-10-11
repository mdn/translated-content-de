---
title: CSS scroll snap
slug: Web/CSS/CSS_scroll_snap
l10n:
  sourceCommit: 3b3394b9b1e966bb1d397bd6e50e2fb5bde7b3c5
---

{{CSSRef}}

Das Modul **CSS scroll snap** bietet Eigenschaften, mit denen Sie das Verhalten beim Schwenken und Scrollen steuern können, indem Sie Schnapppositionen definieren. Inhalte können in Position „einrasten“, während der Benutzer überlaufende Inhalte innerhalb eines {{Glossary("scroll_container", "scroll container")}} scrollt, was das Blättern und die Scroll-Positionierung ermöglicht.

Dieses Modul umfasst die `scroll-padding`-Eigenschaften des Scrollcontainers, um den optimalen Betrachtungsbereich beim Blättern während der `scroll-into-view` Operationen anzupassen. Es enthält auch `scroll-margin` und `scroll-alignment`, die auf die Kinder des Scrollcontainers angewendet werden, um den visuellen Bereich der Kinderteile anzupassen, wenn dieses Kind in den Sichtbereich scrolled wird, sowie eine Eigenschaft, um das Scrollen auf einzelne Kinderteile zu erzwingen.

## Scroll snap in Aktion

Um das Scroll-Snapping im Feld unten zu sehen, scrollen Sie nach oben und unten sowie nach links und rechts durch das Raster von 45 nummerierten Feldern im scrollbaren Viewport.

{{EmbedGHLiveSample("css-examples/modules/scroll_snap.html", '100%', 250)}}

Mit Scroll snap wird eines der nummerierten Felder, zu denen Sie scrollen, in Position "einrasten". Das anfängliche CSS lässt das nummerierte Feld in die Mitte des Viewports "einrasten". Verwenden Sie die Schieberegler, um die Block- und Inline-Schnapppositionen zu ändern.

Mit `snap`-Eigenschaften können Sie das Scrollen über ein Element, in diesem Fall eine nummerierte Box, erlauben oder blockieren. Aktivieren Sie das Kontrollkästchen „Verhindern des Scrollens über Boxen“, um alle Scrollaktionen auf das Scrollen zu einem angrenzenden Feld zu beschränken.

Um Scroll-Snapping mit normalem Scrollen zu vergleichen, aktivieren Sie das Kontrollkästchen „Snapping deaktivieren“ und versuchen Sie erneut zu scrollen.

Um den Code für dieses Beispiel zu sehen, [sehen Sie den Quellcode auf GitHub](https://github.com/mdn/css-examples/blob/main/modules/scroll_snap.html) an.

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

### Ereignisse

- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) {{experimental_inline}}
- [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) {{experimental_inline}}

### Schnittstellen

- [`SnapEvent`](/de/docs/Web/API/SnapEvent) {{experimental_inline}}
  - [`SnapEvent.snapTargetBlock`](/de/docs/Web/API/SnapEvent/snapTargetBlock) {{experimental_inline}}
  - [`SnapEvent.snapTargetInline`](/de/docs/Web/API/SnapEvent/snapTargetInline) {{experimental_inline}}

## Leitfäden

- [Grundlegende Konzepte von CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap/Basic_concepts)
  - : Ein Überblick und Beispiele zu CSS scroll snap-Funktionen.
- [Verwenden von Scroll Snap-Ereignissen](/de/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
  - : Ein Leitfaden zur Verwendung der scroll snap-Ereignisse [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) und [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event), die ausgelöst werden, wenn der Browser ein neues Snap-Ziel als ausstehend oder ausgewählt bestimmt.

## Verwandte Konzepte

- {{cssxref(":target")}} Pseudo-Klasse
- {{cssxref("overflow")}} CSS-Eigenschaft
- `Element` [`scroll()`](/de/docs/Web/API/Element/scroll) Methode
- `Element` [`scrollBy()`](/de/docs/Web/API/Element/scrollBy) Methode
- `Element` [`scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView) Methode
- `Element` [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode
- `Element` [`scroll`](/de/docs/Web/API/Element/scroll_event) Ereignis
- `Element` [`scrollend`](/de/docs/Web/API/Element/scrollend_event) Ereignis
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA-Rolle
- {{Glossary("Scroll_container", "Scroll container")}} Glossareintrag

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul
- [CSS scrollbar Stilisierung](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- [Bereiche nur für Tastatur-Scrolling](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) auf adrianroselli.com (2022)
- [Scroll snap Beispiele](https://codepen.io/collection/KpqBGW) auf Codepen (2022)
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2021)
- [Praktisches CSS scroll snapping](https://css-tricks.com/practical-css-scroll-snapping/) auf CSS-Tricks (2020)
- [CSS scroll snap](https://12daysofweb.dev/2022/css-scroll-snap/) auf 12 Days of Web (2019)

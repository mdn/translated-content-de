---
title: CSS overflow
slug: Web/CSS/CSS_overflow
l10n:
  sourceCommit: d18e8247ac5c593e6e95f4ad84173c4099609fac
---

{{CSSRef}}

Die Eigenschaften des **CSS overflow** Moduls ermöglichen es Ihnen, scrollbare Überläufe in visuellen Medien zu handhaben.

Ein Überlauf tritt auf, wenn der Inhalt eines Elementkastens über eine oder mehrere Ränder des Kastens hinausgeht. **Scrollbarer Überlauf** ist der Inhalt, der außerhalb des Elementkastens erscheint, für den Sie möglicherweise einen Scroll-Mechanismus hinzufügen möchten. CSS overflow Eigenschaften ermöglichen es Ihnen zu steuern, was passiert, wenn Inhalt einen Elementkasten überläuft.

Malereffekte, die den Inhalt überlaufen, aber nicht am CSS-Box-Modell teilnehmen, beeinflussen das Layout nicht. Diese Art von Überlauf ist auch als [Tintenauslauf](/de/docs/Glossary/ink_overflow) bekannt. Beispiele für Tintenausläufe sind Boxschatten, Rahmenbilder, Textdekorationen, überhängende Glyphen und Umrisse. Tintenausläufe erweitern nicht die scrollbare Überlaufregion.

## Overflow in Aktion

Verwenden Sie das folgende interaktive Beispiel, um die Auswirkungen verschiedener `overflow` Eigenschaftswerte auf den Inhaltsüberlauf und die Scrollleisten im angrenzenden Kasten mit fester Größe zu sehen.

Das Beispiel enthält auch Optionen zum Ändern der Werte für die Eigenschaften `overflow-clip-margin` und `width`, sowie zum programmatischen Scrollen des Inhalts, wenn die overflow Eigenschaft einen [scroll container](/de/docs/Glossary/scroll_container) erstellt. Wählen Sie `overflow: clip` und beobachten Sie die Wirkung unterschiedlicher `overflow-clip-margin` Werte. Wählen Sie `overflow: hidden` oder `overflow: scroll`, um die verschiedenen `ScrollLeft` und `ScrollTop` Schieberegler-Einstellungen zu überprüfen.

{{EmbedGHLiveSample("css-examples/modules/overflow.html", '100%', 320)}}

Ein Link ist im Inhaltsfeld oben enthalten, um die Auswirkungen des Tastaturfokus auf Überlauf- und Scroll-Verhalten zu demonstrieren. Versuchen Sie, zum Link zu tabben oder den Inhalt programmatisch zu scrollen: Der Inhalt wird nur gescrollt, wenn der aufgezählte `<overflow>` Wert einen Scroll-Container erstellt.

## Referenz

### CSS-Eigenschaften

- {{CSSxRef("overflow")}} Shorthand
- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-clip-margin")}}
- {{CSSxRef("overflow-inline")}}
- {{CSSxRef("overflow-x")}}
- {{CSSxRef("overflow-y")}}
- {{CSSxRef("scroll-behavior")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("text-overflow")}}
- {{CSSxRef("-webkit-line-clamp")}}

> [!NOTE]
> Das CSS overflow Modul Level 4 führt die Eigenschaften `block-ellipsis`, `continue`, `line-clamp` und `max-lines` ein. Diese wurden noch nicht implementiert.

### Datentypen

- [`<overflow>`](/de/docs/Web/CSS/overflow_value) Aufgezählte Werte

## Leitfäden

- [Überlaufender Inhalt](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)
  - : CSS-Baustein: lernen Sie, was Überlauf ist und wie man ihn verwaltet.
- [Erstellen einer benannten Scroll-Fortschritts-Zeitachsenanimation](/de/docs/Web/CSS/scroll-timeline-name#creating_a_named_scroll_progress_timeline_animation)
  - : Die CSS-Scroll-Zeitachse {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften, zusammen mit der {{cssxref('scroll-timeline')}} Shorthand, erstellen Animationen, die an den Scroll-Offset eines Scroll-Containers gebunden sind.

## Verwandte Konzepte

- {{CSSxRef("scrollbar-width")}} CSS-Eigenschaft
- {{CSSxRef("scrollbar-color")}} CSS-Eigenschaft
- {{CSSxRef("scrollbar-gutter")}} CSS-Eigenschaft
- {{CSSxRef("scroll-behavior")}} CSS-Eigenschaft
- {{cssxref("scroll-margin")}} CSS Shorthand-Eigenschaft
- {{cssxref("scroll-padding")}} CSS Shorthand-Eigenschaft
- {{cssxref("scroll-snap-align")}} CSS-Eigenschaft
- {{cssxref("scroll-snap-stop")}} CSS-Eigenschaft
- {{cssxref("scroll-snap-type")}} CSS-Eigenschaft
- {{cssxref("text-overflow")}} CSS-Eigenschaft
- {{CSSxRef("::-webkit-scrollbar")}} Pseudo-Element
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA-Rolle
- Element [`scroll()`](/de/docs/Web/API/Element/scroll) Methode
- Element [`scrollBy()`](/de/docs/Web/API/Element/scrollBy) Methode
- Element [`scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView) Methode
- Element [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode
- Element [`scrollTop`](/de/docs/Web/API/Element/scrollTop) Eigenschaft
- Element [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) Eigenschaft
- Element [`scrollWidth`](/de/docs/Web/API/Element/scrollWidth) Eigenschaft
- Element [`scrollHeight`](/de/docs/Web/API/Element/scrollHeight) Eigenschaft
- Dokument [`scroll`](/de/docs/Web/API/Document/scroll_event) Ereignis
- [Scroll-Container](/de/docs/Glossary/Scroll_container) Glossareintrag
- [Tintenauslauf](/de/docs/Glossary/Ink_overflow) Glossareintrag

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Scrollleisten-Styling](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSSOM-Ansicht](/de/docs/Web/CSS/CSSOM_view) Modul
- Anleitung zum [Debuggen von scrollbarem Überlauf](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/debug_scrollable_overflow/index.html)

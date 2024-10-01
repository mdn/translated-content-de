---
title: CSS overflow
slug: Web/CSS/CSS_overflow
l10n:
  sourceCommit: d18e8247ac5c593e6e95f4ad84173c4099609fac
---

{{CSSRef}}

Die Eigenschaften des **CSS overflow** Moduls ermöglichen es Ihnen, scrollbare Überläufe in visuellen Medien zu handhaben.

Ein Überlauf tritt auf, wenn der Inhalt eines Elementrahmens über eine oder mehrere Kanten des Rahmens hinausragt. Ein **scrollbarer Überlauf** ist der Inhalt, der außerhalb des Elementrahmens erscheint und für den Sie möglicherweise einen Scrollmechanismus hinzufügen möchten. Die CSS overflow Eigenschaften ermöglichen es Ihnen, zu steuern, was passiert, wenn der Inhalt einen Elementrahmen überläuft.

Mal-Effekte, die den Inhalt überfließen, aber nicht am CSS-Box-Modell teilnehmen, beeinflussen das Layout nicht. Diese Art des Überlaufens wird auch als {{Glossary("ink_overflow", "Tintenüberlauf")}} bezeichnet. Beispiele für Tintenüberläufe sind Box-Schattierungen, Rahmenbilder, Textdekoration, überhängende Glyphen und Umrandungen. Tintenüberläufe erweitern nicht den scrollbaren Überlaufbereich.

## Überlauf in Aktion

Verwenden Sie das folgende interaktive Beispiel, um die Auswirkungen verschiedener `overflow` Eigenschaftswerte auf den Inhaltsüberlauf und die Scrollbalken im angrenzenden festgelegten Rahmen zu sehen.

Das Beispiel enthält auch Optionen zum Ändern der Werte der Eigenschaften `overflow-clip-margin` und `width` sowie zum programmgesteuerten Scrollen des Inhalts, falls die overflow-Eigenschaft einen {{Glossary("scroll_container", "scroll container")}} erstellt. Wählen Sie `overflow: clip` und sehen Sie sich die Auswirkungen verschiedener `overflow-clip-margin` Werte an. Wählen Sie `overflow: hidden` oder `overflow: scroll` aus, um die verschiedenen `ScrollLeft` und `ScrollTop` Reglereinstellungen zu prüfen.

{{EmbedGHLiveSample("css-examples/modules/overflow.html", '100%', 320)}}

Ein Link ist im Inhaltsrahmen oben enthalten, um die Auswirkungen von Tastaturfokus auf Überlauf- und Scroll-Verhalten zu demonstrieren. Versuchen Sie, zum Link zu tabben oder den Inhalt programmgesteuert zu scrollen: Der Inhalt wird nur dann scrollen, wenn der aufgeführte `<overflow>` Wert einen Scroll-Container erstellt.

## Referenz

### CSS-Eigenschaften

- {{CSSxRef("overflow")}} Kurzform
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

- [`<overflow>`](/de/docs/Web/CSS/overflow_value) aufgezählte Werte

## Leitfäden

- [Überlaufender Inhalt](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)
  - : CSS-Baustein: Lernen Sie, was Überlauf ist und wie Sie ihn verwalten können.
- [Erstellung einer benannten Scroll-Fortschritts-Zeitleistenanimation](/de/docs/Web/CSS/scroll-timeline-name#creating_a_named_scroll_progress_timeline_animation)
  - : Die CSS Scroll-Zeitleiste {{cssxref('scroll-timeline-name')}} und {{cssxref('scroll-timeline-axis')}} Eigenschaften sowie die {{cssxref('scroll-timeline')}} Kurzform erstellen Animationen, die an den Scroll-Versatz eines Scroll-Containers gebunden sind.

## Verwandte Konzepte

- {{CSSxRef("scrollbar-width")}} CSS Eigenschaft
- {{CSSxRef("scrollbar-color")}} CSS Eigenschaft
- {{CSSxRef("scrollbar-gutter")}} CSS Eigenschaft
- {{CSSxRef("scroll-behavior")}} CSS Eigenschaft
- {{cssxref("scroll-margin")}} CSS Kurzform Eigenschaft
- {{cssxref("scroll-padding")}} CSS Kurzform Eigenschaft
- {{cssxref("scroll-snap-align")}} CSS Eigenschaft
- {{cssxref("scroll-snap-stop")}} CSS Eigenschaft
- {{cssxref("scroll-snap-type")}} CSS Eigenschaft
- {{cssxref("text-overflow")}} CSS Eigenschaft
- {{CSSxRef("::-webkit-scrollbar")}} Pseudo-Element
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA Rolle
- Element [`scroll()`](/de/docs/Web/API/Element/scroll) Methode
- Element [`scrollBy()`](/de/docs/Web/API/Element/scrollBy) Methode
- Element [`scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView) Methode
- Element [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode
- Element [`scrollTop`](/de/docs/Web/API/Element/scrollTop) Eigenschaft
- Element [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) Eigenschaft
- Element [`scrollWidth`](/de/docs/Web/API/Element/scrollWidth) Eigenschaft
- Element [`scrollHeight`](/de/docs/Web/API/Element/scrollHeight) Eigenschaft
- Dokument [`scroll`](/de/docs/Web/API/Document/scroll_event) Ereignis
- {{Glossary("Scroll_container", "Scroll-Container")}} Glossarbegriff
- {{Glossary("Ink_overflow", "Tintenüberlauf")}} Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Scrollbar-Styling](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSSOM Ansicht](/de/docs/Web/CSS/CSSOM_view) Modul
- Anleitung zum [Debuggen von scrollbarem Überlauf](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/debug_scrollable_overflow/index.html)

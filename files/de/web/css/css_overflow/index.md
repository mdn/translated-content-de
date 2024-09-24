---
title: CSS Überlauf
slug: Web/CSS/CSS_overflow
l10n:
  sourceCommit: d18e8247ac5c593e6e95f4ad84173c4099609fac
---

{{CSSRef}}

Die Eigenschaften des **CSS overflow** Moduls ermöglichen es Ihnen, scrollbaren Überlauf in visuellen Medien zu bearbeiten.

Ein Überlauf tritt auf, wenn der Inhalt eines Element-Boxes über eine oder mehrere Kanten der Box hinausgeht. **Scrollbarer Überlauf** ist der Inhalt, der außerhalb der Element-Box erscheint und für den Sie möglicherweise einen Scrollmechanismus hinzufügen möchten. CSS-Überlaufeigenschaften ermöglichen es Ihnen zu kontrollieren, was passiert, wenn Inhalte ein Element-Box überlaufen.

Malerische Effekte, die den Inhalt überlaufen, aber nicht am CSS-Box-Modell teilnehmen, beeinflussen das Layout nicht. Diese Art des Überlaufs ist auch als {{Glossary("ink overflow")}} bekannt. Beispiele für Tintenüberläufe sind Box-Schatten, Rahmenbilder, Textdekorationen, überhängende Glyphen und Umrisse. Tintenüberläufe erweitern die scrollbare Überlaufregion nicht.

## Überlauf in Aktion

Verwenden Sie das folgende interaktive Beispiel, um die Auswirkungen verschiedener `overflow`-Eigenschaftswerte auf den Inhaltsüberlauf und die Scroll-Leisten in der benachbarten Box mit fester Größe zu sehen.

Das Beispiel umfasst auch Optionen, um die Werte für die `overflow-clip-margin`- und `width`-Eigenschaften zu ändern, sowie das programmatische Scrollen des Inhalts, falls die Überlaufeigenschaft einen {{Glossary("scroll container")}} erstellt. Wählen Sie `overflow: clip` und sehen Sie sich die Auswirkung unterschiedlicher `overflow-clip-margin`-Werte an. Wählen Sie `overflow: hidden` oder `overflow: scroll`, um die verschiedenen `ScrollLeft`- und `ScrollTop`-Slider-Einstellungen auszuprobieren.

{{EmbedGHLiveSample("css-examples/modules/overflow.html", '100%', 320)}}

Ein Link ist in der Inhaltbox oben enthalten, um die Auswirkungen von Tastaturfokus auf Überlauf- und Scrollverhalten zu demonstrieren. Versuchen Sie, zum Link zu tabben oder den Inhalt programmatisch zu scrollen: Der Inhalt wird nur dann scrollen, wenn der aufgezählte `<overflow>`-Wert einen Scroll-Container erstellt.

## Referenz

### CSS-Eigenschaften

- {{CSSxRef("overflow")}} Kurzschrift
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
> Das CSS-Overflow-Modul Level 4 führt die Eigenschaften `block-ellipsis`, `continue`, `line-clamp` und `max-lines` ein. Diese wurden noch nicht implementiert.

### Datentypen

- [`<overflow>`](/de/docs/Web/CSS/overflow_value) enumerierte Werte

## Leitfäden

- [Überlaufender Inhalt](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)
  - : CSS-Baustein: lernen Sie, was Überlauf ist und wie man ihn handhabt.
- [Erstellen einer benannten Scroll-Fortschritts-Zeitachsen-Animation](/de/docs/Web/CSS/scroll-timeline-name#creating_a_named_scroll_progress_timeline_animation)
  - : Die CSS-Scroll-Zeitachse {{cssxref('scroll-timeline-name')}}- und {{cssxref('scroll-timeline-axis')}}-Eigenschaften, zusammen mit der {{cssxref('scroll-timeline')}}-Kurzschrift, erstellen Animationen, die mit dem Scroll-Offset eines Scroll-Containers verknüpft sind.

## Verwandte Konzepte

- {{CSSxRef("scrollbar-width")}} CSS-Eigenschaft
- {{CSSxRef("scrollbar-color")}} CSS-Eigenschaft
- {{CSSxRef("scrollbar-gutter")}} CSS-Eigenschaft
- {{CSSxRef("scroll-behavior")}} CSS-Eigenschaft
- {{cssxref("scroll-margin")}} CSS-Kurzschrift-Eigenschaft
- {{cssxref("scroll-padding")}} CSS-Kurzschrift-Eigenschaft
- {{cssxref("scroll-snap-align")}} CSS-Eigenschaft
- {{cssxref("scroll-snap-stop")}} CSS-Eigenschaft
- {{cssxref("scroll-snap-type")}} CSS-Eigenschaft
- {{cssxref("text-overflow")}} CSS-Eigenschaft
- {{CSSxRef("::-webkit-scrollbar")}} Pseudo-Element
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA-Rolle
- Element {{domxref("Element.scroll", "scroll()")}} Methode
- Element {{domxref("Element.scrollBy", "scrollBy()")}} Methode
- Element {{domxref("Element.scrollIntoView", "scrollIntoView()")}} Methode
- Element {{domxref("Element.scrollTo", "scrollTo()")}} Methode
- Element {{domxref("Element.scrollTop", "scrollTop")}} Eigenschaft
- Element {{domxref("Element.scrollLeft", "scrollLeft")}} Eigenschaft
- Element {{domxref("Element.scrollWidth", "scrollWidth")}} Eigenschaft
- Element {{domxref("Element.scrollHeight", "scrollHeight")}} Eigenschaft
- Dokument {{domxref("Document.scroll_event", "scroll")}} Ereignis
- {{Glossary("Scroll container")}} Glossar-Begriff
- {{Glossary("Ink overflow")}} Glossar-Begriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Scrollleisten-Styling](/de/docs/Web/CSS/CSS_scrollbars_styling) Modul
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSSOM-Ansicht](/de/docs/Web/CSS/CSSOM_view) Modul
- Wie man [scrollbaren Überlauf debuggt](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/debug_scrollable_overflow/index.html)

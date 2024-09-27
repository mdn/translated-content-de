---
title: CSS overscroll Verhalten
slug: Web/CSS/CSS_overscroll_behavior
l10n:
  sourceCommit: fd4a5c3107826fe3689a0432ba56b3eba00a5f90
---

{{CSSRef}}

Das **CSS overscroll Verhalten** Modul bietet Eigenschaften, um das Verhalten eines [Scroll Containers](/de/docs/Glossary/Scroll_container) zu steuern, wenn seine Scroll-Position die [Scroll-Grenze](/de/docs/Glossary/Scroll_boundary) erreicht. Die Steuerung dieses Aspekts ist besonders in Szenarien nützlich, in denen eingebettete scrollbare Bereiche nicht das Scrollen des übergeordneten Containers auslösen sollen.

Beim Kommentieren eines Blogs könnten Sie bemerken, dass wenn Ihr Kommentar die Länge des bereitgestellten {{htmlelement("textarea")}} überschreitet, das Scrollen über das Ende des Textbereichs dazu führt, dass der gesamte Blog scrollt. Dies liegt daran, dass das Erreichen des Endes eines scrollbaren Bereichs, bekannt als [Scroll-Grenze](/de/docs/Glossary/Scroll_boundary), dazu führen kann, dass andere Inhalte oder die gesamte Seite scrollen. Diese kontinuierliche Scroll-Erfahrung wird als [Scroll-Verkettung](/de/docs/Glossary/Scroll_chaining) bezeichnet.

In Situationen, in denen der Inhalt eines Elements größer ist als sein Container und {{cssxref("overflow")}} das Scrollen zulässt oder standardmäßig aktiviert ist (wie in `<textarea>`), wird durch fortgesetztes Scrollen über den scrollbaren Bereich des Elements hinaus das Scrollen im übergeordneten Element oder auf der zugrunde liegenden Seite ausgelöst.

Umgekehrt, wenn Sie durch die Allgemeinen Geschäftsbedingungen einer Website scrollen, um das Ende des Inhalts zu erreichen und ein Kontrollkästchen zu aktivieren, muss die Seite möglicherweise nicht scrollen oder federn (wie auf einem Telefon). Dieses Beispiel zeigt, dass Sie das overscroll Verhalten steuern und die Scroll-Verkettung verhindern können.

Dieses Modul definiert das overscroll Verhalten und ermöglicht es Ihnen, die Aktionen zu spezifizieren, wenn ein Benutzer über die Grenzen eines scrollbaren Elements hinaus scrollt.

## Referenz

### CSS-Eigenschaften

- {{CSSxRef("overscroll-behavior")}} Kurzschrift
- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}
- {{CSSxRef("overscroll-behavior-x")}}
- {{CSSxRef("overscroll-behavior-y")}}

### Glossarbegriffe

- [Scroll-Grenze](/de/docs/Glossary/Scroll_boundary)
- [Scroll-Verkettung](/de/docs/Glossary/Scroll_chaining)

## Leitfäden

- [CSS-Bausteine: Überfließender Inhalt](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)
  - : Erfahren Sie, was Überlauf ist und wie Sie ihn verwalten.

## Verwandte Konzepte

- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA Rolle
- [Enthaltender Block](/de/docs/Web/CSS/Containing_block) Konzept
- [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul:
  - {{cssxref("overflow")}} Kurzschrift-Eigenschaft
    - {{Cssxref("overflow-x")}}
    - {{Cssxref("overflow-y")}}
    - {{CSSxRef("overflow-block")}}
    - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-clip-margin")}} Eigenschaft
  - {{CSSxRef("scroll-behavior")}} Eigenschaft
  - {{CSSxRef("text-overflow")}} Eigenschaft
- [Scroll Container](/de/docs/Glossary/Scroll_container) und [scrollport](/de/docs/Glossary/Scroll_container#scrollport) Glossarbegriffe

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul:

  - {{cssxref("scroll-padding")}} Kurzschrift-Eigenschaft
  - {{cssxref("scroll-snap-type")}} Eigenschaft
  - {{cssxref("scroll-margin")}} Kurzschrift-Eigenschaft
  - {{cssxref("scroll-snap-stop")}} Eigenschaft
  - {{cssxref("scroll-snap-align")}} Eigenschaft

- [CSSOM view](/de/docs/Web/CSS/CSSOM_view) Modul:
  - [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) Methode
  - [`Element.scroll()`](/de/docs/Web/API/Element/scroll) Methode
  - [`Element.scrollBy()`](/de/docs/Web/API/Element/scrollBy) Methode
  - [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView) Methode
  - [`Element.scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode
  - [`scroll`](/de/docs/Web/API/Document/scroll_event) Document Ereignis

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [Nehmen Sie die Kontrolle über Ihr Scrollen - Anpassung von Pull-to-Refresh und Überlaufeffekten](https://developer.chrome.com/blog/overscroll-behavior) auf developer.chrome.com (2017)

---
title: CSS overscroll behavior
slug: Web/CSS/CSS_overscroll_behavior
l10n:
  sourceCommit: fd4a5c3107826fe3689a0432ba56b3eba00a5f90
---

{{CSSRef}}

Das **CSS overscroll behavior**-Modul bietet Eigenschaften, um das Verhalten eines [Scroll-Containers](/de/docs/Glossary/Scroll_container) zu steuern, wenn seine Scroll-Position den [Scroll-Grenzbereich](/de/docs/Glossary/Scroll_boundary) erreicht. Die Kontrolle dieser Eigenschaft ist besonders nützlich in Szenarien, in denen eingebettete scrollbare Bereiche nicht das Scrollen des übergeordneten Containers auslösen sollen.

Beim Kommentieren eines Blogs könnten Sie bemerken, dass, wenn Ihr Kommentar die Länge des bereitgestellten {{htmlelement("textarea")}} überschreitet, das Scrollen über das Ende des Textbereichs das Scrollen des gesamten Blogs verursacht. Dies liegt daran, dass das Erreichen des Endes eines scrollbaren Bereichs, bekannt als [Scroll-Grenzbereich](/de/docs/Glossary/Scroll_boundary), dazu führen kann, dass anderer Inhalt oder die gesamte Seite scrollen. Diese kontinuierliche Scroll-Erfahrung wird als [Scroll-Verkettung](/de/docs/Glossary/Scroll_chaining) bezeichnet.

In Situationen, in denen der Inhalt eines Elements größer als sein Container ist und {{cssxref("overflow")}} Scrollen ermöglicht oder standardmäßig zulässt (wie in `<textarea>`), wird bei weiterem Scrollen über den scrollbaren Bereich des Elements das Scrollen im übergeordneten Element oder der darunterliegenden Seite ausgelöst.

Umgekehrt wird beim Lesen der Geschäftsbedingungen einer Website und dem Erreichen des Endes des Inhalts, um ein Kontrollkästchen zu aktivieren, möglicherweise nicht das Scrollen oder ein "Bounce-Effekt" (wie auf einem Telefon) ausgelöst. Dieses Beispiel zeigt, dass Sie das Overscroll-Verhalten steuern und die Scroll-Verkettung verhindern können.

Dieses Modul definiert das Overscroll-Verhalten und ermöglicht es, die Aktionen zu spezifizieren, wenn ein Benutzer über die Grenzen eines scrollbaren Elements hinaus scrollt.

## Referenz

### CSS-Eigenschaften

- {{CSSxRef("overscroll-behavior")}} Kurzform
- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}
- {{CSSxRef("overscroll-behavior-x")}}
- {{CSSxRef("overscroll-behavior-y")}}

### Glossarbegriffe

- [Scroll-Grenzbereich](/de/docs/Glossary/Scroll_boundary)
- [Scroll-Verkettung](/de/docs/Glossary/Scroll_chaining)

## Leitfäden

- [CSS-Bausteine: Überfließender Inhalt](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)
  - : Lernen Sie, was Überlauf ist und wie Sie ihn verwalten können.

## Verwandte Konzepte

- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA-Rolle
- [Enthaltender Block](/de/docs/Web/CSS/Containing_block) Konzept
- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul:
  - {{cssxref("overflow")}} Kurzform-Eigenschaft
    - {{CSSxRef("overflow-x")}}
    - {{CSSxRef("overflow-y")}}
    - {{CSSxRef("overflow-block")}}
    - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-clip-margin")}} Eigenschaft
  - {{CSSxRef("scroll-behavior")}} Eigenschaft
  - {{CSSxRef("text-overflow")}} Eigenschaft
- [Scroll-Container](/de/docs/Glossary/Scroll_container) und [scrollport](/de/docs/Glossary/Scroll_container#scrollport) Glossarbegriffe

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul:

  - {{cssxref("scroll-padding")}} Kurzform-Eigenschaft
  - {{cssxref("scroll-snap-type")}} Eigenschaft
  - {{cssxref("scroll-margin")}} Kurzform-Eigenschaft
  - {{cssxref("scroll-snap-stop")}} Eigenschaft
  - {{cssxref("scroll-snap-align")}} Eigenschaft

- [CSSOM view](/de/docs/Web/CSS/CSSOM_view) Modul:
  - [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) Methode
  - [`Element.scroll()`](/de/docs/Web/API/Element/scroll) Methode
  - [`Element.scrollBy()`](/de/docs/Web/API/Element/scrollBy) Methode
  - [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView) Methode
  - [`Element.scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode
  - [`scroll`](/de/docs/Web/API/Document/scroll_event) Dokumentereignis

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [Nehmen Sie die Kontrolle über Ihren Bildlauf - Anpassen von Pull-to-Refresh und Überlauf-Effekten](https://developer.chrome.com/blog/overscroll-behavior) auf developer.chrome.com (2017)

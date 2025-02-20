---
title: CSS overscroll behavior
slug: Web/CSS/CSS_overscroll_behavior
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Das Modul **CSS overscroll behavior** stellt Eigenschaften bereit, um das Verhalten eines {{Glossary("Scroll_container", "Scroll-Containers")}} zu steuern, wenn dessen Scroll-Position den {{Glossary("Scroll_boundary", "Scroll-Grenzwert")}} erreicht. Die Kontrolle dieses Aspekts ist besonders nützlich in Szenarien, in denen eingebettete scrollbare Bereiche nicht das Scrollen des übergeordneten Containers auslösen sollen.

Wenn Sie beispielsweise einen Kommentar in einem Blog verfassen, kann es sein, dass beim Überschreiten der Länge des bereitgestellten {{htmlelement("textarea")}} das Scrollen über das Ende des Textbereichs hinaus dazu führt, dass der gesamte Blog scrollt. Dies liegt daran, dass das Erreichen des Endes eines scrollbaren Bereichs, auch bekannt als {{Glossary("Scroll_boundary", "Scroll-Grenzwert")}}, dazu führen kann, dass anderer Inhalt oder die gesamte Seite scrollt. Diese kontinuierliche Scroll-Erfahrung wird als {{Glossary("Scroll_chaining", "Scroll-Chaining")}} bezeichnet.

In Situationen, in denen der Inhalt eines Elements größer ist als dessen Container und {{cssxref("overflow")}} das Scrollen ermöglicht oder standardmäßig aktiviert ist (z. B. in `<textarea>`), wird beim weiteren Scrollen über den scrollbaren Bereich hinaus das Scrollen im übergeordneten Element oder auf der zugrunde liegenden Seite ausgelöst.

Im Gegensatz dazu kann das Scrollen durch die Allgemeinen Geschäftsbedingungen einer Website bis zum Ende des Inhalts, um beispielsweise ein Kontrollkästchen zu aktivieren, verhindern, dass die Seite selbst scrollt oder "springt" (z. B. auf einem Smartphone). Dieses Beispiel zeigt, dass Sie das Overscroll-Verhalten steuern und Scroll-Chaining verhindern können.

Dieses Modul definiert das Overscroll-Verhalten und ermöglicht es Ihnen, Aktionen festzulegen, die ausgelöst werden, wenn ein Benutzer über die Grenzen eines scrollbaren Elements hinaus scrollt.

## Referenz

### CSS-Eigenschaften

- {{CSSxRef("overscroll-behavior")}} Kurzform
- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}
- {{CSSxRef("overscroll-behavior-x")}}
- {{CSSxRef("overscroll-behavior-y")}}

### Glossarbegriffe

- {{Glossary("Scroll_boundary", "Scroll-Grenzwert")}}
- {{Glossary("Scroll_chaining", "Scroll-Chaining")}}

## Leitfäden

- [Lernen: Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Lernen Sie, was Überlauf ist und wie man ihn verwaltet.

## Verwandte Konzepte

- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA-Rolle
- [Enthaltender Block](/de/docs/Web/CSS/CSS_display/Containing_block) Konzept
- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul:
  - {{cssxref("overflow")}} Kurzform-Eigenschaft
    - {{Cssxref("overflow-x")}}
    - {{Cssxref("overflow-y")}}
    - {{CSSxRef("overflow-block")}}
    - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-clip-margin")}} Eigenschaft
  - {{CSSxRef("scroll-behavior")}} Eigenschaft
  - {{CSSxRef("text-overflow")}} Eigenschaft
- {{Glossary("Scroll_container", "Scroll-Container")}} und {{Glossary("Scroll_container#scrollport", "scrollport")}} Glossarbegriffe

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
  - [`scroll`](/de/docs/Web/API/Document/scroll_event) Ereignis im Dokument

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [Take control of your scroll - customizing pull-to-refresh and overflow effects](https://developer.chrome.com/blog/overscroll-behavior) auf developer.chrome.com (2017)

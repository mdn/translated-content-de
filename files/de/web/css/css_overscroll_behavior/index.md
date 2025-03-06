---
title: CSS Overscroll-Verhalten
slug: Web/CSS/CSS_overscroll_behavior
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Das **CSS Overscroll-Verhalten** Modul bietet Eigenschaften zur Steuerung des Verhaltens eines {{Glossary("Scroll_container", "Scroll-Containers")}}, wenn dessen Scroll-Position den {{Glossary("Scroll_boundary", "Scroll-Grenzwert")}} erreicht. Diese Kontrolle ist besonders nützlich in Szenarien, in denen eingebettete scrollbare Bereiche nicht das Scrollen des übergeordneten Containers auslösen sollen.

Beim Kommentieren in einem Blog könnten Sie bemerken, dass wenn Ihr Kommentar die Länge des bereitgestellten {{htmlelement("textarea")}} übersteigt, das Scrollen über das Ende des Textbereichs hinaus den gesamten Blog scrollen lässt. Dies liegt daran, dass das Erreichen des Endes eines scrollbaren Bereichs, bekannt als der {{Glossary("Scroll_boundary", "Scroll-Grenzwert")}}, dazu führen kann, dass andere Inhalte oder die gesamte Seite gescrollt werden. Diese kontinuierliche Scroll-Erfahrung wird als {{Glossary("Scroll_chaining", "Scroll-Chaining")}} bezeichnet.

In Situationen, in denen der Inhalt eines Elements größer ist als sein Container und {{cssxref("overflow")}} das Scrollen zulässt oder standardmäßig aktiviert ist (wie in `<textarea>`), initiiert das Weiter-Scrollen über den scrollbaren Bereich des Elements hinaus das Scrollen im übergeordneten Element oder auf der darunter liegenden Seite.

Andererseits, beim Scrollen durch die Allgemeinen Geschäftsbedingungen einer Website und dem Erreichen des Endes des Inhalts, um ein Kontrollkästchen zu aktivieren, kann es sein, dass die Seite nicht gezwungen wird, zu scrollen oder zu springen (wie auf einem Telefon). Dieses Beispiel zeigt, dass Sie das Overscroll-Verhalten kontrollieren und Scroll-Chaining verhindern können.

Dieses Modul definiert das Overscroll-Verhalten und ermöglicht es Ihnen, die Aktionen zu spezifizieren, wenn ein Benutzer über die Grenzen eines scrollbaren Elements hinaus scrollt.

## Referenz

### CSS Eigenschaften

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
  - : Erfahren Sie, was Überlauf ist und wie Sie ihn verwalten.

## Verwandte Konzepte

- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) ARIA-Rolle
- [Enthaltender Block](/de/docs/Web/CSS/CSS_display/Containing_block) Konzept
- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul:
  - {{cssxref("overflow")}} Kurzform-Eigenschaft
    - {{Cssxref("overflow-x")}}
    - {{Cssxref("overflow-y")}}
    - {{CSSxRef("overflow-block")}}
    - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-clip-margin")}} Eigenschaft
  - {{CSSxRef("scroll-behavior")}} Eigenschaft
  - {{CSSxRef("text-overflow")}} Eigenschaft
- {{Glossary("Scroll_container", "Scroll-Container")}} und {{Glossary("Scroll_container#scrollport", "Scrollport")}} Glossarbegriffe

- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul:

  - {{cssxref("scroll-padding")}} Kurzform-Eigenschaft
  - {{cssxref("scroll-snap-type")}} Eigenschaft
  - {{cssxref("scroll-margin")}} Kurzform-Eigenschaft
  - {{cssxref("scroll-snap-stop")}} Eigenschaft
  - {{cssxref("scroll-snap-align")}} Eigenschaft

- [CSSOM View](/de/docs/Web/CSS/CSSOM_view) Modul:
  - [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) Methode
  - [`Element.scroll()`](/de/docs/Web/API/Element/scroll) Methode
  - [`Element.scrollBy()`](/de/docs/Web/API/Element/scrollBy) Methode
  - [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView) Methode
  - [`Element.scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode
  - [`scroll`](/de/docs/Web/API/Document/scroll_event) Dokumentereignis

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [Take control of your scroll - customizing pull-to-refresh and overflow effects](https://developer.chrome.com/blog/overscroll-behavior) auf developer.chrome.com (2017)

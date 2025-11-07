---
title: CSS-Überscroll-Verhalten
short-title: Overscroll behavior
slug: Web/CSS/Guides/Overscroll_behavior
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Überscroll-Verhalten**-Modul bietet Eigenschaften, um das Verhalten eines {{Glossary("Scroll_container", "Scrollcontainers")}} zu steuern, wenn seine Scrollposition den {{Glossary("Scroll_boundary", "Scroll-Grenzwert")}} erreicht. Die Kontrolle dieses Aspekts ist besonders nützlich in Szenarien, in denen eingebettete scrollbare Bereiche das Scrollen des übergeordneten Containers nicht auslösen sollen.

Wenn Sie einen Kommentar in einem Blog abgeben, könnten Sie bemerken, dass, wenn Ihr Kommentar die Länge des bereitgestellten {{htmlelement("textarea")}} übersteigt, das Scrollen über das Ende des Textbereichs hinaus den gesamten Blog scrollen lässt. Dies liegt daran, dass das Erreichen des Endes eines scrollbaren Bereichs, bekannt als {{Glossary("Scroll_boundary", "Scroll-Grenzwert")}}, dazu führen kann, dass anderer Inhalt oder die gesamte Seite gescrollt wird. Dieses kontinuierliche Scrollerlebnis wird als {{Glossary("Scroll_chaining", "Scroll-Kettenbildung")}} bezeichnet.

In Situationen, in denen der Inhalt eines Elements größer ist als sein Container und {{cssxref("overflow")}} Scrollen erlaubt oder standardmäßig aktiviert ist (wie bei `<textarea>`), führt das Weiter-Scrollen über den scrollbaren Bereich des Elements hinaus zum Scrollen des übergeordneten Elements oder der zugrunde liegenden Seite.

Im Gegensatz dazu kann das Scrollen durch die Allgemeinen Geschäftsbedingungen einer Website und das Erreichen des Endes des Inhalts, um ein Kontrollkästchen zu aktivieren, nicht dazu führen, dass die Seite scrollt oder „springt“ (wie auf einem Telefon). Dieses Beispiel zeigt, dass Sie das Überscroll-Verhalten steuern und die Scroll-Kettenbildung verhindern können.

Dieses Modul definiert das Überscroll-Verhalten, sodass Sie die Aktionen festlegen können, wenn ein Benutzer über die Grenzen eines scrollbaren Elements hinaus scrollt.

## Referenz

### CSS-Eigenschaften

- {{CSSxRef("overscroll-behavior")}} Kurzform
- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}
- {{CSSxRef("overscroll-behavior-x")}}
- {{CSSxRef("overscroll-behavior-y")}}

### Glossarbegriffe

- {{Glossary("Scroll_boundary", "Scroll-Grenzwert")}}
- {{Glossary("Scroll_chaining", "Scroll-Kettenbildung")}}

## Leitfäden

- [Lernen: Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Erfahren Sie, was Überlauf ist und wie Sie ihn verwalten.

## Verwandte Konzepte

- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) ARIA-Rolle
- [Einschränkungsblock](/de/docs/Web/CSS/Guides/Display/Containing_block) Konzept
- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul:
  - {{cssxref("overflow")}} Kurzform-Eigenschaft
    - {{Cssxref("overflow-x")}}
    - {{Cssxref("overflow-y")}}
    - {{CSSxRef("overflow-block")}}
    - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-clip-margin")}} Eigenschaft
  - {{CSSxRef("scroll-behavior")}} Eigenschaft
  - {{CSSxRef("text-overflow")}} Eigenschaft
- {{Glossary("Scroll_container", "Scrollcontainer")}} und {{Glossary("Scroll_container#scrollport", "Scrollport")}} Glossarbegriffe

- [CSS-Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul:
  - {{cssxref("scroll-padding")}} Kurzform-Eigenschaft
  - {{cssxref("scroll-snap-type")}} Eigenschaft
  - {{cssxref("scroll-margin")}} Kurzform-Eigenschaft
  - {{cssxref("scroll-snap-stop")}} Eigenschaft
  - {{cssxref("scroll-snap-align")}} Eigenschaft

- [CSSOM-Ansicht](/de/docs/Web/CSS/Guides/CSSOM_view) Modul:
  - [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) Methode
  - [`Element.scroll()`](/de/docs/Web/API/Element/scroll) Methode
  - [`Element.scrollBy()`](/de/docs/Web/API/Element/scrollBy) Methode
  - [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView) Methode
  - [`Element.scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode
  - [`scroll`](/de/docs/Web/API/Document/scroll_event) Dokumentereignis

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Scroll-Verankerung](/de/docs/Web/CSS/Guides/Scroll_anchoring) Modul
- [CSS-Scroll-Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul
- [CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model) Modul
- [CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul

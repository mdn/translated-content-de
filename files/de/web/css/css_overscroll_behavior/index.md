---
title: CSS overscroll behavior
slug: Web/CSS/CSS_overscroll_behavior
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Das **CSS overscroll behavior** Modul bietet Eigenschaften zur Steuerung des Verhaltens eines {{Glossary("Scroll_container", "Scroll-Containers")}}, wenn seine Scroll-Position den {{Glossary("Scroll_boundary", "Scroll-Grenzwert")}} erreicht. Das Steuern dieses Aspekts ist besonders nützlich in Szenarien, in denen eingebettete scrollbare Bereiche nicht das Scrollen des übergeordneten Containers auslösen sollen.

Wenn Sie einen Blog kommentieren, könnte Ihnen auffallen, dass, wenn Ihr Kommentar die Länge des bereitgestellten {{htmlelement("textarea")}} überschreitet, das Weiterscrollen über das Ende des Textbereichs dazu führt, dass der gesamte Blog scrollt. Dies liegt daran, dass das Erreichen des Endes eines scrollbaren Bereichs, bekannt als {{Glossary("Scroll_boundary", "Scroll-Grenzwert")}}, dazu führen kann, dass andere Inhalte oder die gesamte Seite gescrollt werden. Dieses kontinuierliche Scroll-Erlebnis wird als {{Glossary("Scroll_chaining", "Scroll-Kettenbildung")}} bezeichnet.

In Situationen, in denen der Inhalt eines Elements größer ist als sein Container und {{cssxref("overflow")}} das Scrollen ermöglicht oder standardmäßig zulässt (wie in `<textarea>`), wird durch weiteres Scrollen über das scrollbare Gebiet des Elements das Scrollen im übergeordneten Element oder der zugrunde liegenden Seite eingeleitet.

Umgekehrt kann das Scrollen durch die Nutzungsbedingungen einer Website und das Erreichen des Endes des Inhalts, um ein Kontrollkästchen zu aktivieren, nicht dazu führen, dass die Seite scrollt oder hüpft (wie auf einem Telefon). Dieses Beispiel zeigt, dass Sie das Overscroll-Verhalten steuern und die Scroll-Kettenbildung verhindern können.

Dieses Modul definiert das Overscroll-Verhalten und ermöglicht Ihnen, die Aktionen zu spezifizieren, wenn ein Benutzer über die Grenzen eines scrollbaren Elements hinaus scrollt.

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
  - : Lernen Sie, was Überlauf ist und wie man ihn verwaltet.

## Verwandte Konzepte

- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) ARIA Rolle
- [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) Konzept
- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul:
  - {{cssxref("overflow")}} Kurzform-Eigenschaft
    - {{Cssxref("overflow-x")}}
    - {{Cssxref("overflow-y")}}
    - {{CSSxRef("overflow-block")}}
    - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-clip-margin")}} Eigenschaft
  - {{CSSxRef("scroll-behavior")}} Eigenschaft
  - {{CSSxRef("text-overflow")}} Eigenschaft
- {{Glossary("Scroll_container", "Scroll-Container")}} und {{Glossary("Scroll_container#scrollport", "Scrollport")}} Glossarbegriffe

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul:

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
  - [`scroll`](/de/docs/Web/API/Document/scroll_event) Dokument Ereignis

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS scroll anchoring](/de/docs/Web/CSS/CSS_scroll_anchoring) Modul
- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSS box model](/de/docs/Web/CSS/CSS_box_model) Modul
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul

---
title: CSS overscroll behavior
slug: Web/CSS/CSS_overscroll_behavior
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Das Modul für die **CSS overscroll behavior** bietet Eigenschaften, um das Verhalten eines {{Glossary("Scroll_container", "scroll containers")}} zu kontrollieren, wenn seine Scrollposition die {{Glossary("Scroll_boundary", "scroll boundary")}} erreicht. Diese Kontrolle ist besonders nützlich in Situationen, in denen eingebettete scrollbare Bereiche nicht das Scrollen des übergeordneten Containers auslösen sollten.

Beim Kommentieren eines Blogs haben Sie vielleicht bemerkt, dass wenn Ihr Kommentar die Länge des bereitgestellten {{htmlelement("textarea")}} überschreitet, das Scrollen über das Ende des Textbereichs hinaus den gesamten Blog zum Scrollen bringt. Dies liegt daran, dass das Erreichen des Endes eines scrollbaren Bereichs, bekannt als {{Glossary("Scroll_boundary", "scroll boundary")}}, zum Scrollen anderer Inhalte oder der gesamten Seite führen kann. Diese kontinuierliche Scrollerfahrung wird als {{Glossary("Scroll_chaining", "scroll chaining")}} bezeichnet.

In Situationen, in denen der Inhalt eines Elements größer als sein Container ist und {{cssxref("overflow")}} das Scrollen erlaubt oder standardmäßig zulässt (wie bei `<textarea>`), führt das kontinuierliche Scrollen über den scrollbaren Bereich des Elements hinaus dazu, dass im übergeordneten Element oder auf der zugrunde liegenden Seite gescrollt wird.

Im Gegensatz dazu kann das Durchscrollen der Geschäftsbedingungen einer Website und das Erreichen des Endes des Inhalts, um ein Kontrollkästchen zu aktivieren, die Seite möglicherweise nicht zum Scrollen oder Springen (wie auf einem Telefon) zwingen. Dieses Beispiel zeigt, dass Sie das Overscroll-Verhalten steuern und scroll chaining verhindern können.

Dieses Modul definiert das Overscroll-Verhalten und ermöglicht es Ihnen, die Aktionen anzugeben, wenn ein Benutzer über die Grenzen eines scrollbaren Elements hinaus scrollt.

## Referenz

### CSS-Eigenschaften

- {{CSSxRef("overscroll-behavior")}} Kurzform
- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}
- {{CSSxRef("overscroll-behavior-x")}}
- {{CSSxRef("overscroll-behavior-y")}}

### Glossarbegriffe

- {{Glossary("Scroll_boundary", "Scroll boundary")}}
- {{Glossary("Scroll_chaining", "Scroll chaining")}}

## Leitfäden

- [Lernen: Überlappende Inhalte](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) 
  - : Erfahren Sie, was Overflow ist und wie Sie damit umgehen können.

## Verwandte Konzepte

- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA-Rolle
- [Containing block](/de/docs/Web/CSS/Containing_block) Konzept
- [CSS overflow](/de/docs/Web/CSS/CSS_overflow) Modul:
  - {{cssxref("overflow")}} Kurzform-Eigenschaft
    - {{Cssxref("overflow-x")}}
    - {{Cssxref("overflow-y")}}
    - {{CSSxRef("overflow-block")}}
    - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-clip-margin")}} Eigenschaft
  - {{CSSxRef("scroll-behavior")}} Eigenschaft
  - {{CSSxRef("text-overflow")}} Eigenschaft
- {{Glossary("Scroll_container", "Scroll container")}} und {{Glossary("Scroll_container#scrollport", "scrollport")}} Glossarbegriffe

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

- [CSS box model](/de/docs/Web/CSS/CSS_box_model) Modul
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [Übernehmen Sie die Kontrolle über Ihr Scrollen - Anpassen von Pull-to-Refresh und Überschreibeneffekten](https://developer.chrome.com/blog/overscroll-behavior) auf developer.chrome.com (2017)

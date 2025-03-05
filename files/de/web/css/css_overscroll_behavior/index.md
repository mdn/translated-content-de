---
title: CSS Overscroll-Verhalten
slug: Web/CSS/CSS_overscroll_behavior
l10n:
  sourceCommit: d13c1276b80bbfc940a1091b62f333fe9edc78a2
---

{{CSSRef}}

Das **CSS Overscroll-Verhalten**-Modul bietet Eigenschaften zur Steuerung des Verhaltens eines {{Glossary("Scroll_container", "Scroll-Containers")}}, wenn seine Scroll-Position die {{Glossary("Scroll_boundary", "Scroll-Grenze")}} erreicht. Die Kontrolle dieses Aspekts ist besonders nützlich in Szenarien, in denen eingebettete scrollbare Bereiche nicht das Scrollen des übergeordneten Containers auslösen sollen.

Beim Kommentieren eines Blogs stellen Sie möglicherweise fest, dass, wenn Ihr Kommentar die Länge des bereitgestellten {{htmlelement("textarea")}} überschreitet, das Scrollen über das Ende des Textbereichs hinaus das gesamte Blog zum Scrollen bringt. Dies liegt daran, dass das Erreichen des Endes eines scrollbaren Bereichs, bekannt als {{Glossary("Scroll_boundary", "Scroll-Grenze")}}, dazu führen kann, dass anderer Inhalt oder die gesamte Seite scrollt. Diese kontinuierliche Scrollerfahrung wird als {{Glossary("Scroll_chaining", "Scroll-Chaining")}} bezeichnet.

In Situationen, in denen der Inhalt eines Elements größer ist als dessen Container und {{cssxref("overflow")}} das Scrollen ermöglicht oder standardmäßig aktiviert ist (wie in `<textarea>`), führt das Fortsetzen des Scrollens über den scrollbaren Bereich des Elements hinaus zum Starten des Scrollens im übergeordneten Element oder der zugrunde liegenden Seite.

Umgekehrt kann das Scrollen durch die Nutzungsbedingungen einer Website und das Erreichen des Endes des Inhalts, um ein Kontrollkästchen zu aktivieren, möglicherweise nicht dazu führen, dass die Seite scrollt oder springt (wie auf einem Telefon). Dieses Beispiel zeigt, dass Sie das Overscroll-Verhalten steuern und Scroll-Chaining verhindern können.

Dieses Modul definiert das Overscroll-Verhalten und ermöglicht Ihnen, die Aktionen festzulegen, wenn ein Benutzer über die Grenzen eines scrollbaren Elements hinaus scrollt.

## Referenz

### CSS-Eigenschaften

- {{CSSxRef("overscroll-behavior")}} Kurznotation
- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}
- {{CSSxRef("overscroll-behavior-x")}}
- {{CSSxRef("overscroll-behavior-y")}}

### Glossarbegriffe

- {{Glossary("Scroll_boundary", "Scroll-Grenze")}}
- {{Glossary("Scroll_chaining", "Scroll-Chaining")}}

## Leitfäden

- [Lernen: Überlaufende Inhalte](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Lernen Sie, was Überlauf ist und wie Sie ihn verwalten können.

## Verwandte Konzepte

- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA-Rolle
- [Enthaltene Block](/de/docs/Web/CSS/CSS_display/Containing_block) Konzept
- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul:
  - {{cssxref("overflow")}} Kurznotation
    - {{Cssxref("overflow-x")}}
    - {{Cssxref("overflow-y")}}
    - {{CSSxRef("overflow-block")}}
    - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-clip-margin")}} Eigenschaft
  - {{CSSxRef("scroll-behavior")}} Eigenschaft
  - {{CSSxRef("text-overflow")}} Eigenschaft
- {{Glossary("Scroll_container", "Scroll-Container")}} und {{Glossary("Scroll_container#scrollport", "scrollport")}} Glossarbegriffe

- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul:

  - {{cssxref("scroll-padding")}} Kurznotation
  - {{cssxref("scroll-snap-type")}} Eigenschaft
  - {{cssxref("scroll-margin")}} Kurznotation
  - {{cssxref("scroll-snap-stop")}} Eigenschaft
  - {{cssxref("scroll-snap-align")}} Eigenschaft

- [CSSOM Ansicht](/de/docs/Web/CSS/CSSOM_view) Modul:
  - [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) Methode
  - [`Element.scroll()`](/de/docs/Web/API/Element/scroll) Methode
  - [`Element.scrollBy()`](/de/docs/Web/API/Element/scrollBy) Methode
  - [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView) Methode
  - [`Element.scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode
  - [`scroll`](/de/docs/Web/API/Document/scroll_event) Dokumentereignis

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Box Model](/de/docs/Web/CSS/CSS_box_model) Modul
- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [Übernehmen Sie die Kontrolle über Ihr Scrollen - Anpassung von Pull-to-Refresh und Überlaufeffekten](https://developer.chrome.com/blog/overscroll-behavior) auf developer.chrome.com (2017)

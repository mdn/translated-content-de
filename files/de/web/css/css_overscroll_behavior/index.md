---
title: CSS-Overscroll-Verhalten
slug: Web/CSS/CSS_overscroll_behavior
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS-Overscroll-Verhalten**-Modul bietet Eigenschaften zur Steuerung des Verhaltens eines {{Glossary("Scroll_container", "Scroll-Containers")}}, wenn seine Scroll-Position die {{Glossary("Scroll_boundary", "Scroll-Grenze")}} erreicht. Die Steuerung dieses Aspekts ist besonders nützlich in Szenarien, in denen eingebettete scrollbare Bereiche nicht das Scrollen des übergeordneten Containers auslösen sollen.

Wenn Sie einen Kommentar zu einem Blog schreiben, bemerken Sie vielleicht, dass wenn Ihr Kommentar die Länge des bereitgestellten {{htmlelement("textarea")}} überschreitet, das Scrollen über das Ende des Textbereichs hinaus den gesamten Blog zum Scrollen bringt. Dies liegt daran, dass das Erreichen des Endes eines scrollbaren Bereichs, bekannt als die {{Glossary("Scroll_boundary", "Scroll-Grenze")}}, dazu führen kann, dass anderer Inhalt oder die gesamte Seite gescrollt wird. Diese kontinuierliche Scroll-Erfahrung wird {{Glossary("Scroll_chaining", "Scroll Chaining")}} genannt.

In Situationen, in denen der Inhalt eines Elements größer ist als sein Container und {{cssxref("overflow")}} das Scrollen erlaubt oder standardmäßig aktiviert (wie in `<textarea>`), führt das fortgesetzte Scrollen über den scrollbaren Bereich des Elements hinaus zum Scrollen des übergeordneten Elements oder der zugrunde liegenden Seite.

Umgekehrt, wenn Sie die Geschäftsbedingungen einer Website durchscrollen und das Ende des Inhalts erreichen, um ein Kontrollkästchen zu aktivieren, muss die Seite möglicherweise nicht scrollen oder hüpfen (wie auf einem Telefon). Dieses Beispiel zeigt, dass Sie das Overscroll-Verhalten kontrollieren und Scroll Chaining verhindern können.

Dieses Modul definiert das Overscroll-Verhalten und ermöglicht es Ihnen, die Aktionen festzulegen, wenn ein Benutzer über die Grenzen eines scrollbaren Elements hinaus scrollt.

## Referenz

### CSS-Eigenschaften

- {{CSSxRef("overscroll-behavior")}} Kurzform
- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}
- {{CSSxRef("overscroll-behavior-x")}}
- {{CSSxRef("overscroll-behavior-y")}}

### Glossarbegriffe

- {{Glossary("Scroll_boundary", "Scroll-Grenze")}}
- {{Glossary("Scroll_chaining", "Scroll Chaining")}}

## Leitfäden

- [Lernen: Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Lernen Sie, was Überlauf ist und wie Sie ihn verwalten.

## Verwandte Konzepte

- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) ARIA-Rolle
- [Container-Block](/de/docs/Web/CSS/CSS_display/Containing_block) Konzept
- [CSS Overflow](/de/docs/Web/CSS/CSS_overflow) Modul:
  - {{cssxref("overflow")}} Kurzform-Eigenschaft
    - {{Cssxref("overflow-x")}}
    - {{Cssxref("overflow-y")}}
    - {{CSSxRef("overflow-block")}}
    - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-clip-margin")}} Eigenschaft
  - {{CSSxRef("scroll-behavior")}} Eigenschaft
  - {{CSSxRef("text-overflow")}} Eigenschaft
- {{Glossary("Scroll_container", "Scroll-Container")}} und {{Glossary("Scroll_container#scrollport", "scrollport")}} Glossarbegriffe

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

- [CSS Scroll Anchoring](/de/docs/Web/CSS/CSS_scroll_anchoring) Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul

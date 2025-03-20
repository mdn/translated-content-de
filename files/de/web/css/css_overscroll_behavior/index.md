---
title: CSS `overscroll-behavior`
slug: Web/CSS/CSS_overscroll_behavior
l10n:
  sourceCommit: a7335ef81c49b0f7604ee64240711456d0f29e6b
---

{{CSSRef}}

Das Modul **CSS `overscroll-behavior`** bietet Eigenschaften zur Kontrolle des Verhaltens eines {{Glossary("Scroll_container", "Scroll-Containers")}}, wenn seine Scroll-Position den {{Glossary("Scroll_boundary", "Scroll-Grenzwert")}} erreicht. Dieses Steuerelement ist besonders nützlich in Szenarien, in denen eingebettete scrollbare Bereiche nicht das Scrollen des übergeordneten Containers auslösen sollen.

Wenn Sie auf einem Blog kommentieren, stellen Sie möglicherweise fest, dass, wenn Ihr Kommentar die Länge des bereitgestellten {{htmlelement("textarea")}} überschreitet, das Scrollen über das Ende des Textbereichs hinaus den gesamten Blog scrollen lässt. Dies liegt daran, dass das Erreichen des Endes eines scrollbaren Bereichs, bekannt als {{Glossary("Scroll_boundary", "Scroll-Grenzwert")}}, dazu führen kann, dass anderer Inhalt oder die gesamte Seite gescrollt wird. Dieses kontinuierliche Scroll-Erlebnis wird als {{Glossary("Scroll_chaining", "Scroll-Verkettung")}} bezeichnet.

In Situationen, in denen der Inhalt eines Elements größer als sein Container ist und {{cssxref("overflow")}} das Scrollen ermöglicht oder standardmäßig aktiviert ist (wie in `<textarea>`), wird das fortgesetzte Scrollen über den scrollbaren Bereich des Elements hinaus das Scrollen im übergeordneten Element oder auf der darunter liegenden Seite initiieren.

Umgekehrt kann das Scrollen durch die Allgemeinen Geschäftsbedingungen einer Website und das Erreichen des Endes des Inhalts, um ein Kontrollkästchen zu aktivieren, möglicherweise nicht dazu führen, dass die Seite scrollt oder springt (wie auf einem Telefon). Dieses Beispiel zeigt, dass Sie das `overscroll`-Verhalten steuern und die Scroll-Verkettung verhindern können.

Dieses Modul definiert das `overscroll`-Verhalten und ermöglicht Ihnen, die Aktionen zu spezifizieren, wenn ein Benutzer über die Grenzen eines scrollbaren Elements hinaus scrollt.

## Referenz

### CSS-Eigenschaften

- {{CSSxRef("overscroll-behavior")}} Kurzform
- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}
- {{CSSxRef("overscroll-behavior-x")}}
- {{CSSxRef("overscroll-behavior-y")}}

### Glossarbegriffe

- {{Glossary("Scroll_boundary", "Scroll-Grenzwert")}}
- {{Glossary("Scroll_chaining", "Scroll-Verkettung")}}

## Leitfäden

- [Lernen: Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Lernen Sie, was Überlauf ist und wie Sie ihn verwalten können.

## Zusammenhängende Konzepte

- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) ARIA Rolle
- [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) Konzept
- [CSS `overflow`](/de/docs/Web/CSS/CSS_overflow) Modul:
  - {{cssxref("overflow")}} Kurzform-Eigenschaft
    - {{Cssxref("overflow-x")}}
    - {{Cssxref("overflow-y")}}
    - {{CSSxRef("overflow-block")}}
    - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-clip-margin")}} Eigenschaft
  - {{CSSxRef("scroll-behavior")}} Eigenschaft
  - {{CSSxRef("text-overflow")}} Eigenschaft
- {{Glossary("Scroll_container", "Scroll-Container")}} und {{Glossary("Scroll_container#scrollport", "Scroll-Viewport")}} Glossarbegriffe

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
- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul

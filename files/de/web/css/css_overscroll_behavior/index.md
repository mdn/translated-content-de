---
title: CSS-Overscroll-Verhalten
slug: Web/CSS/CSS_overscroll_behavior
l10n:
  sourceCommit: fd4a5c3107826fe3689a0432ba56b3eba00a5f90
---

{{CSSRef}}

Das **CSS-Overscroll-Verhalten**-Modul bietet Eigenschaften, um das Verhalten eines {{Glossary("Scroll_container", "Scroll-Containers")}} zu steuern, wenn seine Scroll-Position die {{Glossary("Scroll_boundary", "Scroll-Grenze")}} erreicht. Die Steuerung dieses Aspekts ist besonders nützlich in Szenarien, in denen eingebettete scrollbare Bereiche nicht das Scrollen des übergeordneten Containers auslösen sollen.

Beim Kommentieren eines Blogs bemerken Sie möglicherweise, dass, wenn Ihr Kommentar die Länge des bereitgestellten {{htmlelement("textarea")}} überschreitet, das Weiter-Scrollen über das Ende des Textbereichs hinaus dazu führt, dass der gesamte Blog scrollt. Dies liegt daran, dass das Erreichen des Endes eines scrollbaren Bereichs, bekannt als {{Glossary("Scroll_boundary", "Scroll-Grenze")}}, zum Scrollen anderer Inhalte oder der gesamten Seite führen kann. Diese kontinuierliche Scrollerfahrung wird als {{Glossary("Scroll_chaining", "Scroll-Verkettung")}} bezeichnet.

In Situationen, in denen der Inhalt eines Elements größer als sein Container ist und {{cssxref("overflow")}} das Scrollen zulässt oder standardmäßig aktiviert ist (wie bei `<textarea>`), wird das Fortsetzen des Scrollens über den scrollbaren Bereich des Elements hinaus das Scrollen im übergeordneten Element oder auf der zugrunde liegenden Seite auslösen.

Im Gegensatz dazu kann das Scrollen durch die Allgemeinen Geschäftsbedingungen einer Website und das Erreichen des Endes der Inhalte, um ein Kontrollkästchen zu aktivieren, nicht dazu führen, dass die Seite scrollt oder springt (wie auf einem Telefon). Dieses Beispiel zeigt, dass Sie das Overscroll-Verhalten steuern und Scroll-Verkettung verhindern können.

Dieses Modul definiert das Overscroll-Verhalten und ermöglicht es Ihnen, die Aktionen zu spezifizieren, wenn ein Benutzer über die Grenzen eines scrollbaren Elements hinaus scrollt.

## Referenz

### CSS-Eigenschaften

- {{CSSxRef("overscroll-behavior")}} Abkürzung
- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}
- {{CSSxRef("overscroll-behavior-x")}}
- {{CSSxRef("overscroll-behavior-y")}}

### Glossarbegriffe

- {{Glossary("Scroll_boundary", "Scroll-Grenze")}}
- {{Glossary("Scroll_chaining", "Scroll-Verkettung")}}

## Anleitungen

- [CSS-Grundlagen: Überlaufende Inhalte](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)
  - : Erfahren Sie, was Überlauf ist und wie Sie ihn verwalten können.

## Verwandte Konzepte

- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role) ARIA-Rolle
- [Begrenzender Block](/de/docs/Web/CSS/Containing_block) Konzept
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul:
  - {{cssxref("overflow")}} Abkürzungseigenschaft
    - {{Cssxref("overflow-x")}}
    - {{Cssxref("overflow-y")}}
    - {{CSSxRef("overflow-block")}}
    - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-clip-margin")}} Eigenschaft
  - {{CSSxRef("scroll-behavior")}} Eigenschaft
  - {{CSSxRef("text-overflow")}} Eigenschaft
- {{Glossary("Scroll_container", "Scroll-Container")}} und [scrollport](/de/docs/Glossary/Scroll_container#scrollport) Glossarbegriffe

- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul:

  - {{cssxref("scroll-padding")}} Abkürzungseigenschaft
  - {{cssxref("scroll-snap-type")}} Eigenschaft
  - {{cssxref("scroll-margin")}} Abkürzungseigenschaft
  - {{cssxref("scroll-snap-stop")}} Eigenschaft
  - {{cssxref("scroll-snap-align")}} Eigenschaft

- [CSSOM Ansicht](/de/docs/Web/CSS/CSSOM_view) Modul:
  - {{domxref("Element.getBoundingClientRect()")}} Methode
  - {{domxref("Element.scroll()")}} Methode
  - {{domxref("Element.scrollBy()")}} Methode
  - {{domxref("Element.scrollIntoView()")}} Methode
  - {{domxref("Element.scrollTo()")}} Methode
  - {{domxref("Document.scroll_event", "scroll")}} Dokumentereignis

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [Übernehmen Sie die Kontrolle über Ihren Bildlauf - Anpassung von Pull-to-Refresh- und Überlaufeffekten](https://developer.chrome.com/blog/overscroll-behavior) auf developer.chrome.com (2017)

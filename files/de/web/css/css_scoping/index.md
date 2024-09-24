---
title: CSS Scoping
slug: Web/CSS/CSS_scoping
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Das **CSS Scoping**-Modul definiert die Mechanismen zur Bereichsdefinition und Kapselung in CSS, wobei der Schwerpunkt auf dem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) [Scoping](https://css.oddbird.net/scope/)-Mechanismus liegt.

CSS-Stile sind entweder global oder auf einen {{Glossary("shadow tree")}} beschränkt. Global definierte Stile werden auf alle Elemente im Knoteninhaltsbaum angewendet, die mit dem Selektor übereinstimmen, einschließlich benutzerdefinierter Elemente in diesem Baum, jedoch nicht auf die Shadow Trees, die jedes benutzerdefinierte Element bilden. Selektoren und ihre zugehörigen Stildefinitionen dringen nicht zwischen den Bereichen durch.

Innerhalb des CSS eines Shadow Trees selektieren Selektoren keine Elemente außerhalb des Baums, weder im globalen Bereich noch in anderen Shadow Trees. Jedes benutzerdefinierte Element hat seinen eigenen Shadow Tree, der alle Komponenten enthält, die das benutzerdefinierte Element ausmachen (aber nicht das benutzerdefinierte Element selbst oder den "Host").

Manchmal ist es nützlich, einen Host aus dem Kontext eines Shadow Trees stylen zu können. Das CSS Scoping-Modul ermöglicht dies durch die Definition von Selektoren, die:

- Es einem Shadow Tree ermöglichen, seinen Host zu stylen.
- Es externer CSS ermöglichen, Elemente innerhalb eines Shadow DOM zu stylen (aber nur, wenn das zugehörige benutzerdefinierte Element so eingerichtet ist, dass es externe Stile akzeptiert).

## Referenz

### Selektoren

- {{CSSXref(":host")}}
- {{CSSXref(":host_function", ":host()")}}
- {{CSSXref(":host-context", ":host-context()")}}
- {{CSSXref("::slotted")}}

## Leitfäden

- [Web-Komponenten](/de/docs/Web/API/Web_components)

  - : Eine Einführung in die verschiedenen Technologien zur Erstellung wiederverwendbarer Web-Komponenten — benutzerdefinierte Elemente, deren Funktionalität vom Rest Ihres Codes gekapselt ist.

- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)

  - : Grundlagen des Shadow DOM, einschließlich der Anbindung eines Shadow DOMs an ein Element, Hinzufügung zum Shadow DOM-Baum und Styling.

- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)

  - : Definition wiederverwendbarer HTML-Strukturen mit den {{htmlelement("template")}}- und {{htmlelement("slot")}}-Elementen und Verwendung dieser Strukturen innerhalb von Web-Komponenten.

- [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)

  - : Einführung in die Custom Elements API, die JavaScript-API zur Erstellung benutzerdefinierter Elemente, die Funktionalität kapseln.

## Verwandte Konzepte

- CSS {{CSSXref(":defined")}} Pseudo-Klasse
- CSS {{CSSXref("::part")}} Pseudo-Element

- HTML {{HTMLElement("template")}} Element
- HTML {{HTMLElement("slot")}} Element
- HTML [`slot`](/de/docs/Web/HTML/Global_attributes/slot) Attribut

- {{Glossary("Shadow tree")}} Glossarbegriff
- {{Glossary("DOM")}} Glossarbegriff
- [Compound-Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) Begriff
- [Selektorliste](/de/docs/Web/CSS/Selector_list) Begriff

- [Web-Komponenten](/de/docs/Web/API/Web_components) Schnittstellen, Eigenschaften und Methoden
  - {{DOMxRef("CustomElementRegistry")}} Schnittstelle
  - {{DOMxRef("Element")}} API
    - {{DOMxRef("Element.slot")}} Eigenschaft
    - {{DOMxRef("Element.assignedSlot")}} Eigenschaft
    - {{DOMxRef("Element.attachShadow()")}} Methode
  - {{DOMxRef("HTMLSlotElement")}} Schnittstelle
  - {{DOMxRef("HTMLTemplateElement")}} Schnittstelle
  - {{DOMxRef("ShadowRoot")}} Schnittstelle

> [!NOTE]
> Trotz des Namens ist die {{CSSXref(":scope")}} Pseudo-Klasse, die Elemente darstellt, die einen Bezugspunkt (oder Bereich) für übereinstimmende Selektoren bilden, im [Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul definiert. Ansonsten ist sie nicht mit dem CSS Scoping-Modul verwandt, das sich auf das Scoping im Zusammenhang mit dem Shadow DOM-Scoping-Mechanismus konzentriert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [CSS-Namensräume](/de/docs/Web/CSS/CSS_namespaces) Modul
- [CSS-Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) Modul
- [Vorlage, Slot und Schatten](https://web.dev/learn/html/template/) auf web.dev (2023)
- [Beste Praktiken für benutzerdefinierte Elemente](https://web.dev/articles/custom-elements-best-practices) auf web.dev (2019)

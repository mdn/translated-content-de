---
title: CSS-Skopierung
short-title: Scoping
slug: Web/CSS/Guides/Scoping
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Skopierungsmodul** definiert die Mechanismen der CSS-Skopierung und -Kapselung, wobei der Fokus auf dem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) [Skopierungsmechanismus](https://css.oddbird.net/scope/) liegt.

CSS-Stile sind entweder global im Umfang oder auf einen {{Glossary("shadow_tree", "shadow tree")}} beschränkt. Global skopierte Stile gelten für alle Elemente im Knotenbaum, die dem Selektor entsprechen, einschließlich benutzerdefinierter Elemente in diesem Baum, jedoch nicht für die Schattenbäume, die jedes benutzerdefinierte Element zusammensetzen. Selektoren und ihre zugehörigen Stildefinitionen durchdringen keine Skopen.

Innerhalb des CSS eines shadow trees wählen Selektoren keine Elemente außerhalb des Baums, weder im globalen Skopus noch in anderen shadow trees. Jedes benutzerdefinierte Element hat seinen eigenen shadow tree, der alle Komponenten enthält, die das benutzerdefinierte Element ausmachen (jedoch nicht das benutzerdefinierte Element oder den "Host" selbst).

Manchmal ist es nützlich, einen Host aus dem Kontext des shadow trees heraus zu stylen. Das CSS-Skopierungsmodul macht dies möglich, indem es Selektoren definiert, die:

- einem shadow tree ermöglichen, seinen Host zu stylen.
- externem CSS erlauben, Elemente innerhalb eines Shadow DOM zu stylen (jedoch nur, wenn das zugehörige benutzerdefinierte Element so eingerichtet ist, externe Stile zu akzeptieren).

## Referenz

### Selektoren

- {{CSSXref(":host")}}
- {{CSSXref(":host_function", ":host()")}}
- {{CSSXref(":host-context", ":host-context()")}}
- {{CSSXref("::slotted")}}

## Leitfäden

- [Webkomponenten](/de/docs/Web/API/Web_components)
  - : Eine Einführung in die verschiedenen Technologien zur Erstellung wiederverwendbarer Webkomponenten — benutzerdefinierte Elemente, deren Funktionalität vom Rest Ihres Codes gekapselt ist.

- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
  - : Grundlagen des Shadow DOM, einschließlich des Anbindens eines Shadow DOM an ein Element, Hinzufügens zum Shadow DOM-Baum und Styling.

- [Verwendung von Vorlagen und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
  - : Definition wiederverwendbarer HTML-Strukturen mit Hilfe der Elemente {{htmlelement("template")}} und {{htmlelement("slot")}} und Nutzung dieser Strukturen innerhalb von Webkomponenten.

- [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
  - : Einführung in die benutzerdefinierte Elemente-API, die JavaScript-API zur Erstellung benutzerdefinierter Elemente, die Funktionalität kapseln.

## Verwandte Konzepte

- CSS {{CSSXref(":defined")}} Pseudoklasse
- CSS {{CSSXref("::part")}} Pseudoelement

- HTML {{HTMLElement("template")}} Element
- HTML {{HTMLElement("slot")}} Element
- HTML [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot) Attribut

- {{Glossary("Shadow_tree", "Shadow tree")}} Glossarbegriff
- {{Glossary("DOM", "DOM")}} Glossarbegriff
- [Zusammengesetzter Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector) Begriff
- [Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list) Begriff

- [Webkomponenten](/de/docs/Web/API/Web_components) Schnittstellen, Eigenschaften und Methoden
  - [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) Schnittstelle
  - [`Element`](/de/docs/Web/API/Element) API
    - [`Element.slot`](/de/docs/Web/API/Element/slot) Eigenschaft
    - [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot) Eigenschaft
    - [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) Methode
  - [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) Schnittstelle
  - [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) Schnittstelle
  - [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Schnittstelle

> [!NOTE]
> Trotz des Namens wird die {{CSSXref(":scope")}} Pseudoklasse, die Elemente repräsentiert, die einen Referenzpunkt (oder Skopus) für Selektoren darstellen, in dem [Selectors](/de/docs/Web/CSS/Guides/Selectors) Modul definiert. Sie ist ansonsten nicht mit dem CSS-Skopierungsmodul verwandt, das sich auf das Skopieren im Hinblick auf den Shadow DOM-Skopierungsmechanismus konzentriert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
- [CSS-Pseudoelemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul
- [CSS-Namespace](/de/docs/Web/CSS/Guides/Namespaces) Modul
- [CSS-Shadow-Parts](/de/docs/Web/CSS/Guides/Shadow_parts) Modul
- [Vorlage, Slot und Shadow](https://web.dev/learn/html/template/) auf web.dev (2023)
- [Beste Praktiken für benutzerdefinierte Elemente](https://web.dev/articles/custom-elements-best-practices) auf web.dev (2019)

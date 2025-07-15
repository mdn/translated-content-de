---
title: CSS-Scoping
slug: Web/CSS/CSS_scoping
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS-Scoping**-Modul definiert die CSS-Scoping- und -Kapselungsmechanismen mit Schwerpunkt auf dem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) [Scoping](https://css.oddbird.net/scope/) Mechanismus.

CSS-Stile sind entweder global im Umfang oder auf einen {{Glossary("shadow_tree", "Shadow-Tree")}} beschränkt. Global definierte Stile gelten für alle Elemente im Baum, die mit dem Selektor übereinstimmen, einschließlich benutzerdefinierter Elemente in diesem Baum, jedoch nicht für die Shadow-Trees, die jedes benutzerdefinierte Element zusammensetzen. Selektoren und ihre zugehörigen Stildefinitionen überschreiten nicht die Grenzen ihrer Scopes.

Innerhalb des CSS eines Shadow-Trees wählen Selektoren keine Elemente außerhalb des Baums aus, weder im globalen Bereich noch in anderen Shadow-Trees. Jedes benutzerdefinierte Element hat seinen eigenen Shadow-Tree, der alle Komponenten enthält, die das benutzerdefinierte Element ausmachen (jedoch nicht das benutzerdefinierte Element oder den "Host" selbst).

Manchmal ist es nützlich, einen Host aus dem Kontext des Shadow-Trees stylen zu können. Das CSS-Scoping-Modul ermöglicht dies durch die Definition von Selektoren, die:

- Es einem Shadow-Tree ermöglichen, seinen Host zu stylen.
- Externes CSS ermöglichen, Elemente innerhalb eines Shadow DOM zu stylen (aber nur, wenn das zugehörige benutzerdefinierte Element eingerichtet ist, externe Stile zu akzeptieren).

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
  - : Grundlagen des Shadow DOM, einschließlich des Anfügens eines Shadow DOM an ein Element, Hinzufügens zum Shadow DOM-Baum und Stylens.

- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
  - : Definieren von wiederverwendbaren HTML-Strukturen mit den Elementen {{htmlelement("template")}} und {{htmlelement("slot")}}, und deren Verwendung innerhalb von Webkomponenten.

- [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)
  - : Einführung in die Custom Elements API, die JavaScript-API zur Erstellung benutzerdefinierter Elemente, die Funktionalität kapseln.

## Verwandte Konzepte

- CSS {{CSSXref(":defined")}} Pseudoklasse
- CSS {{CSSXref("::part")}} Pseudoelement

- HTML {{HTMLElement("template")}} Element
- HTML {{HTMLElement("slot")}} Element
- HTML [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot) Attribut

- {{Glossary("Shadow_tree", "Shadow-Tree")}} Glossarbegriff
- {{Glossary("DOM", "DOM")}} Glossarbegriff
- [Komplexer Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) Begriff
- [Selektor-Liste](/de/docs/Web/CSS/Selector_list) Begriff

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
> Trotz des Namens wird die {{CSSXref(":scope")}} Pseudoklasse, die Elemente darstellt, die Referenzpunkte (oder Scopes) sind, anhand derer Selektoren übereinstimmen, im [Selectors](/de/docs/Web/CSS/CSS_selectors) Modul definiert. Sie ist ansonsten nicht mit dem CSS-Scoping-Modul verwandt, das sich auf Scoping im Zusammenhang mit dem Shadow DOM-Scoping-Mechanismus konzentriert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [CSS-Pseudoelemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [CSS-Namensräume](/de/docs/Web/CSS/CSS_namespaces) Modul
- [CSS-Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) Modul
- [Template, Slot und Shadow](https://web.dev/learn/html/template/) auf web.dev (2023)
- [Best Practices für benutzerdefinierte Elemente](https://web.dev/articles/custom-elements-best-practices) auf web.dev (2019)

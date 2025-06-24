---
title: CSS-Scoping
slug: Web/CSS/CSS_scoping
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Das **CSS-Scoping**-Modul definiert die Mechanismen für CSS-Scoping und -Kapselung, wobei der Schwerpunkt auf dem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)-[Scoping](https://css.oddbird.net/scope/)-Mechanismus liegt.

CSS-Stile sind entweder global im Geltungsbereich oder auf einen {{Glossary("shadow_tree", "shadow tree")}} beschränkt. Global gültige Stile gelten für alle Elemente im Knotenbaum, die dem Selektor entsprechen, einschließlich benutzerdefinierter Elemente in diesem Baum, jedoch nicht für die Shadow Trees, die jedes benutzerdefinierte Element zusammensetzen. Selektoren und ihre zugehörigen Stildefinitionen überschreiten nicht die Grenzen zwischen den Scopes.

Innerhalb des CSS eines Shadow Trees wählen Selektoren keine Elemente außerhalb des Trees aus, weder im globalen Geltungsbereich noch in anderen Shadow Trees. Jedes benutzerdefinierte Element besitzt seinen eigenen Shadow Tree, der alle Komponenten enthält, die das benutzerdefinierte Element bilden (aber nicht das benutzerdefinierte Element oder den "Host" selbst).

Manchmal ist es nützlich, einen Host aus dem Kontext des Shadow Trees heraus zu stylen. Das CSS-Scoping-Modul macht dies möglich, indem es Selektoren definiert, die:

- einem Shadow Tree ermöglichen, seinen Host zu stylen.
- externem CSS ermöglichen, Elemente innerhalb eines Shadow DOM zu stylen (aber nur, wenn das zugehörige benutzerdefinierte Element so eingerichtet ist, dass es externe Stile akzeptiert).

## Referenz

### Selektoren

- {{CSSXref(":host")}}
- {{CSSXref(":host_function", ":host()")}}
- {{CSSXref(":host-context", ":host-context()")}}
- {{CSSXref("::slotted")}}

## Leitfäden

- [Webkomponenten](/de/docs/Web/API/Web_components)

  - : Eine Einführung in die verschiedenen Technologien zur Erstellung wiederverwendbarer Webkomponenten – benutzerdefinierte Elemente, deren Funktionalität vom Rest Ihres Codes gekapselt ist.

- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)

  - : Grundlagen des Shadow DOM, einschließlich der Anbindung eines Shadow DOM an ein Element, Hinzufügen zum Shadow DOM Tree und Styling.

- [Verwenden von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)

  - : Definieren von wiederverwendbaren HTML-Strukturen mit {{htmlelement("template")}} und {{htmlelement("slot")}}-Elementen und Verwenden dieser Struktur innerhalb von Webkomponenten.

- [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
  - : Einführung in die Custom Elements API, die JavaScript-API zur Erstellung benutzerdefinierter Elemente, die Funktionalität kapseln.

## Verwandte Konzepte

- CSS {{CSSXref(":defined")}} Pseudo-Klasse
- CSS {{CSSXref("::part")}} Pseudo-Element

- HTML {{HTMLElement("template")}} Element
- HTML {{HTMLElement("slot")}} Element
- HTML [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot) Attribut

- {{Glossary("Shadow_tree", "Shadow Tree")}}-Glossarbegriff
- {{Glossary("DOM", "DOM")}}-Glossarbegriff
- [Komplexe Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector)-Begriff
- [Selektorliste](/de/docs/Web/CSS/Selector_list)-Begriff

- [Webkomponenten](/de/docs/Web/API/Web_components)-Schnittstellen, -Eigenschaften und -Methoden
  - [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Schnittstelle
  - [`Element`](/de/docs/Web/API/Element) API
    - [`Element.slot`](/de/docs/Web/API/Element/slot)-Eigenschaft
    - [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot)-Eigenschaft
    - [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)-Methode
  - [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)-Schnittstelle
  - [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Schnittstelle
  - [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle

> [!NOTE]
> Trotz des Namens wird die {{CSSXref(":scope")}} Pseudo-Klasse, die Elemente darstellt, die ein Bezugspunkt (oder Scope) für Selektoren zum Abgleichen sind, im [Selectors](/de/docs/Web/CSS/CSS_selectors)-Modul definiert. Ansonsten steht sie in keinem Zusammenhang mit dem CSS-Scoping-Modul, das sich auf Scoping in Bezug auf den Shadow DOM-Scoping-Mechanismus konzentriert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)-Modul
- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements)-Modul
- [CSS-Namespaces](/de/docs/Web/CSS/CSS_namespaces)-Modul
- [CSS-Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts)-Modul
- [Vorlage, Slot und Shadow](https://web.dev/learn/html/template/) auf web.dev (2023)
- [Best Practices für benutzerdefinierte Elemente](https://web.dev/articles/custom-elements-best-practices) auf web.dev (2019)

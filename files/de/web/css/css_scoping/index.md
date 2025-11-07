---
title: CSS-Scoping
slug: Web/CSS/CSS_scoping
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Das **CSS-Scoping**-Modul definiert die Mechanismen zur CSS-Einschränkung und Kapselung, wobei der Schwerpunkt auf dem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)-[Scoping](https://css.oddbird.net/scope/) liegt.

CSS-Stile sind entweder global oder auf einen {{Glossary("shadow_tree", "shadow tree")}} beschränkt. Global beschränkte Stile gelten für alle Elemente im Knotentree, die dem Selektor entsprechen, einschließlich benutzerdefinierter Elemente in diesem Baum, jedoch nicht für die Shadow-Bäume, die jedes benutzerdefinierte Element zusammensetzen. Selektoren und ihre zugehörigen Stildefinitionen überschreiten nicht die Grenzen ihrer Scopes.

Innerhalb des CSS eines Shadow-Trees wählen Selektoren keine Elemente außerhalb des Baums aus, weder im globalen Scope noch in anderen Shadow-Bäumen. Jedes benutzerdefinierte Element hat seinen eigenen Shadow-Trees, der alle Komponenten enthält, die das benutzerdefinierte Element ausmachen (jedoch nicht das benutzerdefinierte Element oder den "Host" selbst).

Manchmal ist es nützlich, einen Host aus dem Kontext des Shadow-Trees aus zu stylen. Das CSS-Scoping-Modul macht dies möglich, indem es Selektoren definiert, die:

- Einem Shadow-Trees ermöglichen, seinen Host zu stylen.
- Externem CSS ermöglichen, Elemente innerhalb eines Shadow DOMs zu stylen (aber nur, wenn das zugehörige benutzerdefinierte Element für externe Stile eingerichtet ist).

## Referenz

### Selektoren

- {{CSSXref(":host")}}
- {{CSSXref(":host_function", ":host()")}}
- {{CSSXref(":host-context", ":host-context()")}}
- {{CSSXref("::slotted")}}

## Leitfäden

- [Webkomponenten](/de/docs/Web/API/Web_components)
  - : Eine Einführung in die verschiedenen Technologien zur Erstellung wiederverwendbarer Webkomponenten — benutzerdefinierte Elemente, deren Funktionalität vom Rest Ihres Codes getrennt ist.

- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
  - : Grundlagen von Shadow DOM, einschließlich der Verknüpfung eines Shadow DOMs mit einem Element, Hinzufügung zum Shadow-DOM-Baum und Styling.

- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
  - : Definition wiederverwendbarer HTML-Strukturen unter Verwendung von {{htmlelement("template")}}- und {{htmlelement("slot")}}-Elementen und Verwendung dieser Strukturen innerhalb von Webkomponenten.

- [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
  - : Einführung in die Custom Elements API, die JavaScript-API zur Erstellung benutzerdefinierter Elemente, die Funktionalitäten kapseln.

## Verwandte Konzepte

- CSS-{{CSSXref(":defined")}}-Pseudoklasse
- CSS-{{CSSXref("::part")}}-Pseudo-Element

- HTML-{{HTMLElement("template")}}-Element
- HTML-{{HTMLElement("slot")}}-Element
- HTML-[`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)-Attribut

- {{Glossary("Shadow_tree", "Shadow tree")}}-Glossarbegriff
- {{Glossary("DOM", "DOM")}}-Glossarbegriff
- [Zusammengesetzter Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector)-Begriff
- [Selector-Liste](/de/docs/Web/CSS/Reference/Selectors/Selector_list)-Begriff

- [Webkomponenten](/de/docs/Web/API/Web_components)-Schnittstellen, Eigenschaften und Methoden
  - [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Schnittstelle
  - [`Element`](/de/docs/Web/API/Element)-API
    - [`Element.slot`](/de/docs/Web/API/Element/slot)-Eigenschaft
    - [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot)-Eigenschaft
    - [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)-Methode
  - [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)-Schnittstelle
  - [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)-Schnittstelle
  - [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle

> [!NOTE]
> Trotz des Namens ist die {{CSSXref(":scope")}}-Pseudoklasse, die Elemente darstellt, die als Referenzpunkt (oder Scope) dienen, damit Selektoren übereinstimmen, im [Selektoren](/de/docs/Web/CSS/Guides/Selectors)-Modul definiert. Sie ist sonst nicht mit dem CSS-Scoping-Modul verwandt, das sich auf Scoping im Zusammenhang mit dem Shadow-DOM-Scoping-Mechanismus konzentriert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Selectoren](/de/docs/Web/CSS/Guides/Selectors)-Modul
- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements)-Modul
- [CSS-Namensräume](/de/docs/Web/CSS/Guides/Namespaces)-Modul
- [CSS-Shadow-Parts](/de/docs/Web/CSS/Guides/Shadow_parts)-Modul
- [Template, Slot und Shadow](https://web.dev/learn/html/template/) auf web.dev (2023)
- [Best Practices für benutzerdefinierte Elemente](https://web.dev/articles/custom-elements-best-practices) auf web.dev (2019)

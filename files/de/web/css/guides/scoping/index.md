---
title: CSS Scoping
short-title: Scoping
slug: Web/CSS/Guides/Scoping
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Das **CSS Scoping**-Modul definiert die Mechanismen zur CSS-Eingrenzung und -Kapselung und konzentriert sich auf den [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) [Eingrenzungs](https://css.oddbird.net/scope/)-Mechanismus.

CSS-Stile sind entweder global oder auf einen {{Glossary("shadow_tree", "shadow tree")}} beschränkt. Global eingrenzte Stile gelten für alle Elemente im Knotenbaum, die dem Selektor entsprechen, einschließlich benutzerdefinierter Elemente in diesem Baum, jedoch nicht für die Shadow Trees, die jedes benutzerdefinierte Element zusammensetzen. Selektoren und ihre zugehörigen Stildefinitionen bluten nicht zwischen den Eingrenzungen.

Innerhalb des CSS eines Shadow Trees wählen Selektoren keine Elemente außerhalb des Baums aus, weder im globalen Bereich noch in anderen Shadow Trees. Jedes benutzerdefinierte Element hat seinen eigenen Shadow Tree, der alle Komponenten enthält, die das benutzerdefinierte Element ausmachen (aber nicht das benutzerdefinierte Element oder den "Host" selbst).

Manchmal ist es nützlich, einen Host aus dem Kontext des Shadow Trees heraus zu gestalten. Das CSS Scoping-Modul macht dies möglich, indem es Selektoren definiert, die:

- Es einem Shadow Tree ermöglichen, seinen Host zu gestalten.
- Externem CSS ermöglichen, Elemente innerhalb eines Shadow DOM zu gestalten (aber nur, wenn das zugehörige benutzerdefinierte Element so eingerichtet ist, dass es externe Stile akzeptiert).

## Referenz

### Selektoren

- {{CSSXref(":host")}}
- {{CSSXref(":host()")}}
- {{cssxref(":host-context()")}}
- {{CSSXref("::slotted")}}

## Leitfäden

- [Web Components](/de/docs/Web/API/Web_components)
  - : Eine Einführung in die verschiedenen Technologien, die verwendet werden, um wiederverwendbare Webkomponenten zu erstellen — benutzerdefinierte Elemente, deren Funktionalität vom Rest Ihres Codes gekapselt ist.

- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
  - : Grundlagen des Shadow DOM, einschließlich der Anfügung eines Shadow DOM an ein Element, der Hinzufügung zum Shadow DOM-Baum und der Gestaltung.

- [Verwendung von Vorlagen und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)
  - : Definition einer wiederverwendbaren HTML-Struktur mit den {{htmlelement("template")}} - und {{htmlelement("slot")}}-Elementen und Verwendung dieser Struktur in Webkomponenten.

- [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)
  - : Einführung in die Custom Elements API, die JavaScript-API, die verwendet wird, um benutzerdefinierte Elemente zu erstellen, die Funktionalität kapseln.

## Verwandte Konzepte

- CSS {{CSSXref(":defined")}} Pseudo-Klasse
- CSS {{CSSXref("::part")}} Pseudo-Element

- HTML {{HTMLElement("template")}} Element
- HTML {{HTMLElement("slot")}} Element
- HTML [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot) Attribut

- {{Glossary("Shadow_tree", "Verzeichnisbaum")}} Glossarbegriff
- {{Glossary("DOM", "DOM")}} Glossarbegriff
- [Verbundener Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector) Begriff
- [Selektoren-Liste](/de/docs/Web/CSS/Reference/Selectors/Selector_list) Begriff

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
> Trotz des Namens wird die {{CSSXref(":scope")}} Pseudo-Klasse, die Elemente darstellt, die einen Referenzpunkt (oder Scope) für Selektoren darstellen, im [Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul definiert. Sie ist ansonsten nicht mit dem CSS Scoping-Modul verwandt, das sich auf Eingrenzungen bezieht, die den Shadow DOM Scoping-Mechanismus betreffen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
- [CSS Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul
- [CSS Namespaces](/de/docs/Web/CSS/Guides/Namespaces) Modul
- [CSS Shadow-Parts](/de/docs/Web/CSS/Guides/Shadow_parts) Modul
- [Template, Slot und Shadow](https://web.dev/learn/html/template/) auf web.dev (2023)
- [Best Practices für benutzerdefinierte Elemente](https://web.dev/articles/custom-elements-best-practices) auf web.dev (2019)

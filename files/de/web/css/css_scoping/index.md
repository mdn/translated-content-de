---
title: CSS-Scoping
slug: Web/CSS/CSS_scoping
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Das Modul **CSS-Scoping** definiert die Mechanismen für CSS-Scoping und -Kapselung und konzentriert sich auf den [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) [Scoping](https://css.oddbird.net/scope/) Mechanismus.

CSS-Stile sind entweder global im Umfang oder auf einen [shadow tree](/de/docs/Glossary/shadow_tree) beschränkt. Global definierte Stile gelten für alle Elemente im Knotensatz, die dem Selektor entsprechen, einschließlich benutzerdefinierter Elemente in diesem Satz, jedoch nicht für die Shadow Trees, die jedes benutzerdefinierte Element zusammensetzen. Selektoren und ihre zugehörigen Stildefinitionen dringen nicht in andere Scopes ein.

Innerhalb des CSS eines Shadow Trees selektieren Selektoren keine Elemente außerhalb des Baums, weder im globalen Bereich noch in anderen Shadow Trees. Jedes benutzerdefinierte Element besitzt seinen eigenen Shadow Tree, der alle Komponenten enthält, aus denen das benutzerdefinierte Element besteht (jedoch nicht das benutzerdefinierte Element oder den "Host" selbst).

Manchmal ist es nützlich, einen Host aus dem Kontext des Shadow Trees zu stylen. Das CSS-Scoping-Modul ermöglicht dies, indem es Selektoren definiert, die:

- es einem Shadow Tree ermöglichen, seinen Host zu stylen.
- es externem CSS ermöglichen, Elemente innerhalb eines Shadow DOMs zu stylen (jedoch nur, wenn das zugehörige benutzerdefinierte Element so eingerichtet ist, dass es externe Stile akzeptiert).

## Referenz

### Selektoren

- {{CSSXref(":host")}}
- {{CSSXref(":host_function", ":host()")}}
- {{CSSXref(":host-context", ":host-context()")}}
- {{CSSXref("::slotted")}}

## Leitfäden

- [Web Components](/de/docs/Web/API/Web_components)

  - : Eine Einführung in die verschiedenen Technologien zur Erstellung wiederverwendbarer Web Components — benutzerdefinierte Elemente, deren Funktionalität vom Rest Ihres Codes kapselt ist.

- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)

  - : Grundlagen des Shadow DOM, einschließlich des Anbindens eines Shadow DOM an ein Element, des Hinzufügens zum Shadow Tree und des Stylings.

- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)

  - : Definition einer wiederverwendbaren HTML-Struktur mithilfe der {{htmlelement("template")}}- und {{htmlelement("slot")}}-Elemente und Verwendung dieser Struktur innerhalb von Web Components.

- [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)

  - : Einführung in die Custom Elements API, die JavaScript-API zum Erstellen benutzerdefinierter Elemente, die Funktionalität kapseln.

## Verwandte Konzepte

- CSS {{CSSXref(":defined")}}-Pseudoklasse
- CSS {{CSSXref("::part")}}-Pseudo-Element

- HTML {{HTMLElement("template")}}-Element
- HTML {{HTMLElement("slot")}}-Element
- HTML [`slot`](/de/docs/Web/HTML/Global_attributes/slot)-Attribut

- [Shadow Tree](/de/docs/Glossary/Shadow_tree) Glossareintrag
- [DOM](/de/docs/Glossary/DOM) Glossareintrag
- [Verbundselektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) Begriff
- [Selektorliste](/de/docs/Web/CSS/Selector_list) Begriff

- [Web-Komponenten](/de/docs/Web/API/Web_components)-Schnittstellen, -Eigenschaften und -Methoden
  - [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) Schnittstelle
  - [`Element`](/de/docs/Web/API/Element) API
    - [`Element.slot`](/de/docs/Web/API/Element/slot) Eigenschaft
    - [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot) Eigenschaft
    - [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) Methode
  - [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) Schnittstelle
  - [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) Schnittstelle
  - [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Schnittstelle

> [!NOTE]
> Trotz seines Namens wird die {{CSSXref(":scope")}}-Pseudoklasse, die Elemente repräsentiert, die ein Referenzpunkt (oder Bereich) für Selektoren sind, um mit ihnen übereinzustimmen, im [Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul definiert. Sie ist ansonsten nicht mit dem CSS-Scoping-Modul verwandt, das sich auf das Scoping im Zusammenhang mit dem Shadow DOM-Scoping-Mechanismus konzentriert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [CSS-Namespaces](/de/docs/Web/CSS/CSS_namespaces) Modul
- [CSS-Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) Modul
- [Vorlage, Slot und Shadow](https://web.dev/learn/html/template/) auf web.dev (2023)
- [Best Practices für benutzerdefinierte Elemente](https://web.dev/articles/custom-elements-best-practices) auf web.dev (2019)

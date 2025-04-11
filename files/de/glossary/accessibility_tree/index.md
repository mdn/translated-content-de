---
title: Barrierefreiheitsbaum
slug: Glossary/Accessibility_tree
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{GlossarySidebar}}

Der **Barrierefreiheitsbaum** enthält {{Glossary("accessibility", "Barrierefreiheit")}}-bezogene Informationen für die meisten HTML-Elemente.

Browser konvertieren Markup in eine interne Darstellung, die _[DOM-Baum](/de/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model)_ genannt wird. Der DOM-Baum enthält Objekte, die alle Elemente, Attribute und Textknoten des Markups repräsentieren. Browser erstellen dann basierend auf dem DOM-Baum einen Barrierefreiheitsbaum, der von plattformspezifischen Barrierefreiheits-APIs genutzt wird, um eine darstellbare Form für unterstützende Technologien, wie Screenreader, bereitzustellen.

Es gibt vier Eigenschaften in einem Barrierefreiheitsbaum-Objekt:

- **name (Name)**
  - : Wie können wir dieses Ding benennen? Zum Beispiel wird ein Link mit dem Text "Mehr lesen" "Mehr lesen" als Namen haben (finden Sie mehr darüber, wie Namen berechnet werden, in der [Accessible Name and Description Computation spec](https://www.w3.org/TR/accname-1.1/)).
- **description (Beschreibung)**
  - : Wie beschreiben wir dieses Ding, wenn wir mehr Beschreibung über den Namen hinaus bereitstellen möchten? Die Beschreibung einer Tabelle könnte erklären, welche Art von Informationen die Tabelle enthält.
- [**role (Rolle)**](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Um welche Art von Ding handelt es sich? Zum Beispiel, ist es ein Button, eine Navigationsleiste oder eine Liste von Elementen?
- [**state (Zustand)**](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
  - : Hat es einen Zustand? Beispiele umfassen den kontrollierten oder nicht kontrollierten Zustand eines Kontrollkästchens und den eingeklappten oder ausgeklappten Zustand für das [`<summary>`](/de/docs/Web/HTML/Reference/Elements/summary)-Element.

Zusätzlich enthält der Barrierefreiheitsbaum oft Informationen darüber, was mit einem Element gemacht werden kann: ein Link kann _gefolgt_ werden, in ein Texteingabefeld kann _geschrieben_ werden, usw.

Obwohl sich der **[Accessibility Object Model](https://wicg.github.io/aom/explainer.html) (AOM)** im April 2022 noch im Entwurfsstadium innerhalb der Web Incubator Community Group befindet, ist beabsichtigt, dass es APIs entwickelt, die es einfacher machen, Barrierefreiheits-Semantik auszudrücken und möglicherweise Lesezugriff auf den berechneten Barrierefreiheitsbaum ermöglichen.

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Lernen Sie über Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)
- [Web Accessibility](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossarbegriffe:
  - {{Glossary("Accessibility", "Barrierefreiheit")}}
  - {{Glossary("Accessible_description", "Barrierefreie Beschreibung")}}
  - {{Glossary("Accessible_name", "Barrierefreier Name")}}
  - {{Glossary("ARIA", "ARIA")}}

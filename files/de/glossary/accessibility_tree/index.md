---
title: Accessibility tree
slug: Glossary/Accessibility_tree
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Der **accessibility tree** enthält Informationen zur [Barrierefreiheit](/de/docs/Glossary/accessibility) für die meisten HTML-Elemente.

Browser konvertieren das Markup in eine interne Darstellung, die als _[DOM-Baum](/de/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model)_ bezeichnet wird. Der DOM-Baum enthält Objekte, die alle Elemente, Attribute und Textknoten des Markups repräsentieren. Browser erstellen dann basierend auf dem DOM-Baum einen Accessibility-Tree, der von plattformspezifischen Accessibility-APIs verwendet wird, um eine Darstellung bereitzustellen, die von unterstützenden Technologien wie Screenreadern verstanden werden kann.

Es gibt vier Eigenschaften in einem Accessibility-Tree-Objekt:

- **name**
  - : Wie können wir dieses Ding benennen? Zum Beispiel hat ein Link mit dem Text "Read more" den Namen "Read more" (mehr über die Berechnung von Namen in der [Accessible Name and Description Computation spec](https://www.w3.org/TR/accname-1.1/)).
- **description**
  - : Wie beschreiben wir dieses Ding, wenn wir mehr Beschreibung über den Namen hinaus geben wollen? Die Beschreibung einer Tabelle könnte erklären, welche Art von Informationen die Tabelle enthält.
- [**role**](/de/docs/Web/Accessibility/ARIA/Roles)
  - : Was für eine Art Ding ist es? Zum Beispiel, ist es ein Button, eine Navigationsleiste oder eine Liste von Elementen?
- [**state**](/de/docs/Web/Accessibility/ARIA/Attributes)
  - : Hat es einen Zustand? Beispiele umfassen angekreuzte oder nicht angekreuzte Checkbox-Zustände und zusammengeklappte oder erweiterte Zustände des [`<summary>`](/de/docs/Web/HTML/Element/summary)-Elements.

Zusätzlich enthält der Accessibility Tree oft Informationen darüber, was mit einem Element getan werden kann: Ein Link kann _verfolgt_ werden, ein Texteingabefeld kann _darin getippt_ werden usw.

Während sich das **[Accessibility Object Model](https://wicg.github.io/aom/explainer.html) (AOM)** im April 2022 noch im Entwurfsstadium innerhalb der Web Incubator Community Group befindet, soll es APIs entwickeln, die es erleichtern, Accessibility-Semantiken auszudrücken, und möglicherweise den Lesezugriff auf den berechneten Accessibility-Tree ermöglichen.

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheit lernen](/de/docs/Learn/Accessibility)
- [Web-Barrierefreiheit](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossarbegriffe:
  - [Barrierefreiheit](/de/docs/Glossary/Accessibility)
  - [Zugängliche Beschreibung](/de/docs/Glossary/Accessible_description)
  - [Zugänglicher Name](/de/docs/Glossary/Accessible_name)
  - [ARIA](/de/docs/Glossary/ARIA)

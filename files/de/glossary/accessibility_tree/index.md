---
title: Accessibility tree
slug: Glossary/Accessibility_tree
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Der **Accessibility-Tree** enthält [Zugänglichkeits](/de/docs/Glossary/accessibility)-bezogene Informationen für die meisten HTML-Elemente.

Browser konvertieren Markup in eine interne Darstellung, die als _[DOM-Tree](/de/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model)_ bezeichnet wird. Der DOM-Tree enthält Objekte, die alle Elemente, Attribute und Textknoten des Markups repräsentieren. Browser erstellen dann basierend auf dem DOM-Tree einen Accessibility-Tree, der von plattformspezifischen Accessibility-APIs genutzt wird, um eine Darstellung bereitzustellen, die von unterstützenden Technologien wie Bildschirmlesegeräten verstanden werden kann.

Ein Accessibility-Tree-Objekt hat vier Eigenschaften:

- **name**
  - : Wie können wir auf diese Sache verweisen? Zum Beispiel wird ein Link mit dem Text "Weiterlesen" "Weiterlesen" als seinen Namen haben (weitere Informationen zur Berechnung von Namen finden Sie in der [Accessible Name and Description Computation Spec](https://www.w3.org/TR/accname-1.1/)).
- **description**
  - : Wie beschreiben wir diese Sache, wenn wir über den Namen hinaus mehr Beschreibung bieten möchten? Die Beschreibung einer Tabelle könnte erklären, welche Art von Informationen die Tabelle enthält.
- [**role**](/de/docs/Web/Accessibility/ARIA/Roles)
  - : Um welche Art von Ding handelt es sich? Zum Beispiel, ist es ein Button, eine Navigationsleiste oder eine Liste von Elementen?
- [**state**](/de/docs/Web/Accessibility/ARIA/Attributes)
  - : Hat es einen Zustand? Beispiele sind angekreuzte oder nicht angekreuzte Checkbox-Zustände und eingeklappte oder ausgeklappte Zustände für das [`<summary>`](/de/docs/Web/HTML/Element/summary)-Element.

Zusätzlich enthält der Accessibility-Tree häufig Informationen darüber, was mit einem Element getan werden kann: Ein Link kann _gefolgt_ werden, in ein Texteingabefeld kann _geschrieben_ werden, usw.

Während es sich im April 2022 noch im Entwurfsstadium innerhalb der Web Incubator Community Group befindet, beabsichtigt das **[Accessibility Object Model](https://wicg.github.io/aom/explainer.html) (AOM)**, APIs zu inkubieren, die es einfacher machen, Zugänglichkeitssemantiken auszudrücken und möglicherweise Lesezugriff auf den berechneten Accessibility-Tree zu ermöglichen.

## Siehe auch

- [Zugänglichkeit](/de/docs/Web/Accessibility)
- [Zugänglichkeit lernen](/de/docs/Learn/Accessibility)
- [Webzugänglichkeit](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossarbegriffe:
  - [Zugänglichkeit](/de/docs/Glossary/Accessibility)
  - [Zugängliche Beschreibung](/de/docs/Glossary/Accessible_description)
  - [Zugänglicher Name](/de/docs/Glossary/Accessible_name)
  - [ARIA](/de/docs/Glossary/ARIA)

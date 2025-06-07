---
title: Accessibility-Baum
slug: Glossary/Accessibility_tree
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{GlossarySidebar}}

Der **Accessibility-Baum** enthält {{Glossary("accessibility", "Accessibility")}}-bezogene Informationen für die meisten HTML-Elemente.

Browser konvertieren Markup in eine interne Darstellung, die als _[DOM-Baum](/de/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model)_ bezeichnet wird. Der DOM-Baum enthält Objekte, die alle Elemente, Attribute und Textknoten des Markups repräsentieren. Browser erstellen dann basierend auf dem DOM-Baum einen Accessibility-Baum, der von plattform-spezifischen Accessibility-APIs verwendet wird, um eine Darstellung bereitzustellen, die von unterstützenden Technologien wie Screenreadern verstanden werden kann.

Es gibt vier Eigenschaften in einem Accessibility-Baum-Objekt:

- **name**
  - : Wie können wir auf dieses Element verweisen? Zum Beispiel hat ein Link mit dem Text "Mehr lesen" den Namen "Mehr lesen" (mehr dazu, wie Namen berechnet werden, finden Sie in der [Accessible Name and Description Computation spec](https://w3c.github.io/accname/)).
- **description**
  - : Wie beschreiben wir dieses Element, wenn wir über den Namen hinaus eine ausführlichere Beschreibung geben möchten? Die Beschreibung einer Tabelle könnte erklären, welche Art von Informationen die Tabelle enthält.
- [**role**](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Um welche Art von Element handelt es sich? Zum Beispiel, ist es ein Button, eine Navigationsleiste oder eine Liste von Elementen?
- [**state**](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
  - : Hat es einen Status? Beispiele sind der angekreuzte oder nicht angekreuzte Status eines Kontrollkästchens sowie eingeklappte oder ausgeklappte Zustände für das [`<summary>`](/de/docs/Web/HTML/Reference/Elements/summary)-Element.

Zusätzlich enthält der Accessibility-Baum häufig Informationen darüber, was mit einem Element gemacht werden kann: Ein Link kann _verfolgt_, in ein Texteingabefeld kann _getippt_ werden, usw.

Obwohl es sich im April 2022 noch im Entwurfsstadium innerhalb der Web Incubator Community Group befindet, beabsichtigt das **[Accessibility Object Model](https://wicg.github.io/aom/explainer.html) (AOM)**, APIs zu entwickeln, die es erleichtern, Accessibility-Semantik auszudrücken und möglicherweise den Lesezugriff auf den berechneten Accessibility-Baum zu ermöglichen.

## Siehe auch

- [Accessibility](/de/docs/Web/Accessibility)
- [Accessibility lernen](/de/docs/Learn_web_development/Core/Accessibility)
- [Web Barrierefreiheit](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossarbegriffe:
  - {{Glossary("Accessibility", "Accessibility")}}
  - {{Glossary("Accessible_description", "Accessible description")}}
  - {{Glossary("Accessible_name", "Accessible name")}}
  - {{Glossary("ARIA", "ARIA")}}

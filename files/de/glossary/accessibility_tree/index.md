---
title: Barrierefreiheitsbaum
slug: Glossary/Accessibility_tree
l10n:
  sourceCommit: 7d4f930455a349e3c73836500add3d4840c76f5d
---

Der **Barrierefreiheitsbaum** enthält Informationen zur {{Glossary("accessibility", "Barrierefreiheit")}} für die meisten HTML-Elemente.

Browser konvertieren Markup in eine interne Darstellung, die als _[DOM-Baum](/de/docs/Web/API/Document_Object_Model)_ bezeichnet wird. Der DOM-Baum enthält Objekte, die alle Elemente, Attribute und Textknoten des Markups repräsentieren. Browser erstellen dann basierend auf dem DOM-Baum einen Barrierefreiheitsbaum, der von plattformspezifischen Accessibility-APIs verwendet wird, um eine Darstellung bereitzustellen, die von unterstützenden Technologien, wie Bildschirmlesegeräten, verstanden werden kann.

Ein Objekt im Barrierefreiheitsbaum hat vier Eigenschaften:

- **name**
  - : Wie können wir dieses Ding benennen? Zum Beispiel hat ein Link mit dem Text "Mehr lesen" den Namen "Mehr lesen" (weitere Informationen zur Berechnung von Namen finden Sie in der [Accessible Name and Description Computation-Spezifikation](https://w3c.github.io/accname/)).
- **description**
  - : Wie beschreiben wir dieses Ding, wenn wir über den Namen hinaus eine Beschreibung bereitstellen möchten? Die Beschreibung einer Tabelle könnte erklären, welche Art von Informationen die Tabelle enthält.
- [**role**](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Um welche Art von Ding handelt es sich? Zum Beispiel, ist es ein Button, eine Navigationsleiste oder eine Liste von Elementen?
- [**state**](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
  - : Hat es einen Zustand? Beispiele umfassen die Zustände eines angehakten oder nicht angehakten Kontrollkästchens und eingeklappte oder ausgeklappte Zustände für das [`<summary>`](/de/docs/Web/HTML/Reference/Elements/summary)-Element.

Zusätzlich enthält der Barrierefreiheitsbaum oft Informationen darüber, was mit einem Element gemacht werden kann: ein Link kann _verfolgt_, ein Texteingabefeld kann _beschrieben_ werden, usw.

Auch wenn sie sich im April 2022 noch im Entwurfsstadium innerhalb der Web Incubator Community Group befindet, beabsichtigt das **[Accessibility Object Model](https://wicg.github.io/aom/explainer.html) (AOM)**, APIs zu entwickeln, um Barrierefreiheits-Semantik auszudrücken und möglicherweise Lesezugriff auf den berechneten Barrierefreiheitsbaum zu ermöglichen.

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Lernen Sie Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility)
- [Web-Barrierefreiheit](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossareinträge:
  - {{Glossary("Accessibility", "Barrierefreiheit")}}
  - {{Glossary("Accessible_description", "Barrierefreie Beschreibung")}}
  - {{Glossary("Accessible_name", "Barrierefreier Name")}}
  - {{Glossary("ARIA", "ARIA")}}

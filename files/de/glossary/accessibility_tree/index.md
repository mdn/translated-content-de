---
title: Accessibility-Baum
slug: Glossary/Accessibility_tree
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Der **Accessibility-Baum** enthält {{Glossary("accessibility", "Barrierefreiheit")}}-bezogene Informationen für die meisten HTML-Elemente.

Browser konvertieren Markup in eine interne Darstellung, die _[DOM-Baum](/de/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model)_ genannt wird. Der DOM-Baum enthält Objekte, die alle Elemente, Attribute und Textknoten des Markups repräsentieren. Browser erstellen dann basierend auf dem DOM-Baum einen Accessibility-Baum, der von plattformspezifischen Accessibility-APIs verwendet wird, um eine Darstellung bereitzustellen, die von unterstützenden Technologien wie Bildschirmlesegeräten verstanden werden kann.

Es gibt vier Eigenschaften in einem Objekt des Accessibility-Baums:

- **name**
  - : Wie können wir auf dieses Ding verweisen? Zum Beispiel hat ein Link mit dem Text "Read more" "Read more" als Namen (mehr darüber, wie Namen berechnet werden, finden Sie in der [Accessible Name and Description Computation Specification](https://w3c.github.io/accname/)).
- **description**
  - : Wie beschreiben wir dieses Ding, wenn wir mehr Beschreibung über den Namen hinaus bieten wollen? Die Beschreibung einer Tabelle könnte erklären, welche Art von Informationen die Tabelle enthält.
- [**role**](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Was für eine Art von Ding ist es? Zum Beispiel, ist es ein Button, eine Navigationsleiste oder eine Liste von Elementen?
- [**state**](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
  - : Hat es einen Zustand? Beispiele beinhalten angeklickte oder nicht angeklickte Zustände von Checkboxen und kollabierte oder expandierte Zustände für das [`<summary>`](/de/docs/Web/HTML/Reference/Elements/summary)-Element.

Zusätzlich enthält der Accessibility-Baum oft Informationen darüber, was mit einem Element gemacht werden kann: Ein Link kann _gefolgt_ werden, in ein Texteingabefeld kann _eingetippt_ werden usw.

Während sich das **[Accessibility Object Model](https://wicg.github.io/aom/explainer.html) (AOM)** im April 2022 noch im Entwurfsstadium innerhalb der Web Incubator Community Group befindet, soll es APIs inkubieren, die es einfacher machen, Accessibility-Semantik auszudrücken und möglicherweise Lesezugriff auf den berechneten Accessibility-Baum zu ermöglichen.

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheit lernen](/de/docs/Learn_web_development/Core/Accessibility)
- [Web-Zugänglichkeit](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossarbegriffe:
  - {{Glossary("Accessibility", "Barrierefreiheit")}}
  - {{Glossary("Accessible_description", "Accessible description")}}
  - {{Glossary("Accessible_name", "Accessible name")}}
  - {{Glossary("ARIA", "ARIA")}}
